import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { eight_constitutionPage } from './pages/eight-constitution'
import { introPage } from './pages/intro'
import { specialPage } from './pages/special'
import { reviewsPage } from './pages/reviews'
import { clinic_specialPage } from './pages/clinic-special'
import { clinic_autonomicPage } from './pages/clinic-autonomic'
import { clinic_digestionPage } from './pages/clinic-digestion'
import { clinic_skinPage } from './pages/clinic-skin'
import { clinic_spinePage } from './pages/clinic-spine'
import { clinic_womenPage } from './pages/clinic-women'
import { blogPage } from './pages/blog'
import { privacyPage } from './pages/privacy'

type Bindings = {
  NAVER_CLIENT_ID: string
  NAVER_CLIENT_SECRET: string
  KAKAO_CLIENT_ID: string
  KAKAO_CLIENT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// 정적 파일 서빙
app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ root: './', path: '/favicon.ico' }))

// ── 세션 인코딩/디코딩 ─────────────────────────────────────────
function encodeSession(obj: object): string {
  const json = JSON.stringify(obj)
  const bytes = new TextEncoder().encode(json)
  let binary = ''
  bytes.forEach(b => { binary += String.fromCharCode(b) })
  return btoa(binary)
}

function decodeSession(encoded: string): { name: string; provider: string } | null {
  try {
    const binary = atob(encoded)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
    const json = new TextDecoder().decode(bytes)
    return JSON.parse(json)
  } catch { return null }
}

// ── 페이지 라우트 ──────────────────────────────────────────────
app.get('/', (c) => c.html(homePage))
app.get('/eight-constitution', (c) => c.html(eight_constitutionPage))
app.get('/introduction', (c) => c.html(introPage))
app.get('/special', (c) => c.html(specialPage))
app.get('/clinic/special', (c) => c.html(clinic_specialPage))
app.get('/clinic/autonomic', (c) => c.html(clinic_autonomicPage))
app.get('/clinic/digestion', (c) => c.html(clinic_digestionPage))
app.get('/clinic/skin', (c) => c.html(clinic_skinPage))
app.get('/clinic/spine', (c) => c.html(clinic_spinePage))
app.get('/clinic/women', (c) => c.html(clinic_womenPage))
app.get('/privacy', (c) => c.html(privacyPage))

// ── 블로그 (인블로그 프록시) ───────────────────────────────────
app.get('/blog', async (c) => {
  const url = 'https://sujeong.inblog.io'
  const res = await fetch(url, {
    headers: {
      'User-Agent': c.req.header('user-agent') || 'Mozilla/5.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
    }
  })
  let html = await res.text()
  // 인블로그 내부 링크를 우리 도메인 /blog 경로로 변환
  html = html.replace(/https:\/\/sujeong\.inblog\.io\//g, '/blog/')
  html = html.replace(/href="\/(?!blog)/g, 'href="https://sujeong.inblog.io/')
  html = html.replace(/src="\/(?!blog|static)/g, 'src="https://sujeong.inblog.io/')
  return c.html(html)
})
app.get('/blog/:slug', async (c) => {
  const slug = c.req.param('slug')
  const url = `https://sujeong.inblog.io/${slug}`
  const res = await fetch(url, {
    headers: {
      'User-Agent': c.req.header('user-agent') || 'Mozilla/5.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
    }
  })
  let html = await res.text()
  html = html.replace(/https:\/\/sujeong\.inblog\.io\//g, '/blog/')
  html = html.replace(/href="\/(?!blog)/g, 'href="https://sujeong.inblog.io/')
  html = html.replace(/src="\/(?!blog|static)/g, 'src="https://sujeong.inblog.io/')
  return c.html(html)
})

// ── 치료후기 (로그인 게이트) ────────────────────────────────────
app.get('/reviews', (c) => {
  const cookieHeader = c.req.header('Cookie') || ''
  const match = cookieHeader.match(/review_session=([^;]+)/)
  const sessionStr = match ? match[1] : null
  const user = sessionStr ? decodeSession(sessionStr) : null
  const isLoggedIn = !!user
  return c.html(reviewsPage(isLoggedIn, user ?? undefined))
})

// ── 네이버 OAuth 2.0 실제 연동 ────────────────────────────────
app.get('/auth/naver', (c) => {
  const state = Math.random().toString(36).substring(2, 15)
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: c.env.NAVER_CLIENT_ID,
    redirect_uri: 'https://8chejil-sujeong.com/auth/naver/callback',
    state,
  })
  return c.redirect(`https://nid.naver.com/oauth2.0/authorize?${params}`)
})

app.get('/auth/naver/callback', async (c) => {
  const code = c.req.query('code')
  const error = c.req.query('error')

  // 사용자가 취소했을 경우
  if (error || !code) {
    return c.redirect('/reviews')
  }

  try {
    // 1. code → access_token 교환
    const tokenRes = await fetch('https://nid.naver.com/oauth2.0/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: c.env.NAVER_CLIENT_ID,
        client_secret: c.env.NAVER_CLIENT_SECRET,
        code,
        state: c.req.query('state') || '',
      }),
    })
    const tokenData = await tokenRes.json() as any

    if (!tokenData.access_token) {
      return c.redirect('/reviews')
    }

    // 2. access_token → 사용자 정보 조회
    const userRes = await fetch('https://openapi.naver.com/v1/nid/me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    })
    const userData = await userRes.json() as any

    const name = userData?.response?.name || '네이버회원'

    // 3. 세션 쿠키 발급
    const session = encodeSession({ name, provider: 'naver' })
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/reviews',
        'Set-Cookie': `review_session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
      },
    })

  } catch {
    return c.redirect('/reviews')
  }
})

// ── 카카오 OAuth 2.0 실제 연동 ────────────────────────────────
app.get('/auth/kakao', (c) => {
  const params = new URLSearchParams({
    client_id: c.env.KAKAO_CLIENT_ID,
    redirect_uri: 'https://8chejil-sujeong.com/auth/kakao/callback',
    response_type: 'code',
  })
  return c.redirect(`https://kauth.kakao.com/oauth/authorize?${params}`)
})

app.get('/auth/kakao/callback', async (c) => {
  const code = c.req.query('code')
  const error = c.req.query('error')

  if (error || !code) {
    return c.redirect('/reviews')
  }

  // 1. code → access_token 교환
  const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: c.env.KAKAO_CLIENT_ID,
      redirect_uri: 'https://8chejil-sujeong.com/auth/kakao/callback',
      code,
    }),
  })
  const tokenData = await tokenRes.json() as any

  if (!tokenData.access_token) {
    return c.json({ step: 'token_fail', tokenData })
  }

  // 2. access_token → 사용자 정보 조회
  const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  })
  const userData = await userRes.json() as any

  const name = userData?.kakao_account?.profile?.nickname
    || userData?.properties?.nickname
    || '카카오회원'

  // 3. 세션 쿠키 발급
  const session = encodeSession({ name, provider: 'kakao' })
  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/reviews',
      'Set-Cookie': `review_session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
    },
  })
})
app.get('/auth/google', (c) => {
  const session = encodeSession({ name: '구글회원', provider: 'google' })
  c.header('Set-Cookie', `review_session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
  return c.redirect('/reviews')
})
app.get('/auth/logout', (c) => {
  c.header('Set-Cookie', 'review_session=; Path=/; HttpOnly; Max-Age=0')
  return c.redirect('/reviews')
})

// ── sitemap.xml ────────────────────────────────────────────────
app.get('/sitemap.xml', (c) => {
  // 페이지별 실제 최종 수정일 (lastmod 정직성 — A3 개선)
  const pages = [
    { loc: '/',                    priority: '1.0', changefreq: 'weekly',  lastmod: '2026-10-16' },
    { loc: '/introduction',        priority: '0.8', changefreq: 'monthly', lastmod: '2025-06-01' },
    { loc: '/special',             priority: '0.8', changefreq: 'monthly', lastmod: '2025-06-01' },
    { loc: '/eight-constitution',  priority: '0.8', changefreq: 'monthly', lastmod: '2025-06-01' },
    { loc: '/clinic/special',      priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/clinic/autonomic',    priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/clinic/digestion',    priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/clinic/skin',         priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/clinic/spine',        priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/clinic/women',        priority: '0.9', changefreq: 'monthly', lastmod: '2025-09-01' },
    { loc: '/reviews',             priority: '0.7', changefreq: 'weekly',  lastmod: '2026-10-16' },
    { loc: '/privacy',             priority: '0.3', changefreq: 'yearly',  lastmod: '2025-03-01' },
  ]
  const urls = pages.map(p =>
    `  <url>\n    <loc>https://www.8chejil-sujeong.com${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join('\n')
  c.header('Content-Type', 'application/xml; charset=utf-8')
  return c.body(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`)
})

// ── robots.txt ─────────────────────────────────────────────────
// AI 크롤러 명시적 허용 추가 (GPTBot, ClaudeBot, PerplexityBot 등 — A1 개선)
app.get('/robots.txt', (c) => {
  c.header('Content-Type', 'text/plain; charset=utf-8')
  return c.body([
    '# 일반 검색엔진',
    'User-agent: *',
    'Allow: /',
    '',
    '# AI 크롤러 — 명시적 허용',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: Claude-Web',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Applebot-Extended',
    'Allow: /',
    '',
    'User-agent: Googlebot',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    'Sitemap: https://www.8chejil-sujeong.com/sitemap.xml',
    '',
  ].join('\n'))
})

// ── llms.txt ───────────────────────────────────────────────────
// AI 크롤러용 사이트 구조 안내 파일 (A1 개선)
app.get('/llms.txt', (c) => {
  c.header('Content-Type', 'text/plain; charset=utf-8')
  return c.body([
    '# 수정한의원 (Sujeong Korean Medicine Clinic)',
    '',
    '> 서울 노원구 노원역 5번출구 위치. 1995년 개원 30년 임상.',
    '> 한의학박사(침구학 전공) 원장 직접 진료. 8체질의학 기반 통합 한방 클리닉.',
    '> 구안와사·아토피·허리디스크·공황장애·난임 등 만성·난치 질환 근본치료.',
    '',
    '## 주요 진료 클리닉',
    '',
    '- [특설 클리닉](https://www.8chejil-sujeong.com/clinic/special): 구안와사·안면마비, 만성편두통, 대상포진후 신경통, 천식·마이코플라즈마, 궤양성대장염, 소아성장',
    '- [자율신경·뇌신경 클리닉](https://www.8chejil-sujeong.com/clinic/autonomic): 두통·편두통, 어지럼증·이명·난청, 불면증·만성피로, 우울증·공황장애',
    '- [소화기 클리닉](https://www.8chejil-sujeong.com/clinic/digestion): 만성소화불량, 역류성식도염, 과민성대장증후군, 만성변비·설사·췌장염',
    '- [피부·호흡기 클리닉](https://www.8chejil-sujeong.com/clinic/skin): 아토피 피부염, 지루성피부염, 두드러기·건선, 비염·축농증, COPD·기관지확장증',
    '- [척추·관절 클리닉](https://www.8chejil-sujeong.com/clinic/spine): 허리디스크, 척추관협착증, 무릎관절염, 오십견·회전근개 손상',
    '- [여성질환 클리닉](https://www.8chejil-sujeong.com/clinic/women): 생리통·생리불순, 난임·계류유산, 산후조리, 갱년기증후군',
    '',
    '## 병원 소개',
    '',
    '- [병원 소개·오시는길](https://www.8chejil-sujeong.com/introduction): 위치, 진료시간, 원장 약력',
    '- [수정한의원의 특별함](https://www.8chejil-sujeong.com/special): 8체질 진단 장비(OMNIFIT·DITI·초음파·InBody)',
    '- [8체질의학이란?](https://www.8chejil-sujeong.com/eight-constitution): 8체질 개념·체질별 음식·진단 방법',
    '',
    '## 치료 후기',
    '',
    '- [치료후기](https://www.8chejil-sujeong.com/reviews): 실제 환자 자필 후기 및 네이버 후기 183건+',
    '',
    '## 병원 기본 정보',
    '',
    '- **주소**: 서울특별시 노원구 노원로 340 (상계동), 우주빌딩 2층',
    '- **전화**: 02-932-3815',
    '- **진료시간**: 월·화·금 09:00–18:30, 수·목 09:00–19:30, 토 09:00–14:00 (일·공휴일 휴진)',
    '- **점심시간**: 13:00–14:00',
    '- **오시는길**: 노원역 5번출구 도보 1분',
    '- **개원**: 1995년 (30년 임상)',
    '',
    '## Optional',
    '',
    '- [개인정보처리방침](https://www.8chejil-sujeong.com/privacy)',
    '- [sitemap.xml](https://www.8chejil-sujeong.com/sitemap.xml)',
  ].join('\n'))
})

export default app
