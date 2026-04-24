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

const app = new Hono()

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
  // 임시: 로그인 없이 후기 목록 바로 표시 (작업 완료 후 원복 예정)
  const isLoggedIn = true
  const user = { name: '방문자', provider: 'guest' }
  return c.html(reviewsPage(isLoggedIn, user))
})

// ── OAuth 로그인 (데모 - 즉시 로그인 처리) ─────────────────────
app.get('/auth/naver', (c) => {
  const session = encodeSession({ name: '네이버회원', provider: 'naver' })
  c.header('Set-Cookie', `review_session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
  return c.redirect('/reviews')
})
app.get('/auth/kakao', (c) => {
  const session = encodeSession({ name: '카카오회원', provider: 'kakao' })
  c.header('Set-Cookie', `review_session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
  return c.redirect('/reviews')
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
  const pages = [
    { loc: '/',                    priority: '1.0', changefreq: 'weekly'  },
    { loc: '/introduction',        priority: '0.8', changefreq: 'monthly' },
    { loc: '/special',             priority: '0.8', changefreq: 'monthly' },
    { loc: '/eight-constitution',  priority: '0.8', changefreq: 'monthly' },
    { loc: '/clinic/special',      priority: '0.9', changefreq: 'monthly' },
    { loc: '/clinic/autonomic',    priority: '0.9', changefreq: 'monthly' },
    { loc: '/clinic/digestion',    priority: '0.9', changefreq: 'monthly' },
    { loc: '/clinic/skin',         priority: '0.9', changefreq: 'monthly' },
    { loc: '/clinic/spine',        priority: '0.9', changefreq: 'monthly' },
    { loc: '/clinic/women',        priority: '0.9', changefreq: 'monthly' },
    { loc: '/reviews',             priority: '0.7', changefreq: 'weekly'  },
  ]
  const today = new Date().toISOString().split('T')[0]
  const urls = pages.map(p =>
    `  <url>\n    <loc>https://www.8chejil-sujeong.com${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join('\n')
  c.header('Content-Type', 'application/xml; charset=utf-8')
  return c.body(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`)
})

// ── robots.txt ─────────────────────────────────────────────────
app.get('/robots.txt', (c) => {
  c.header('Content-Type', 'text/plain; charset=utf-8')
  return c.body(`User-agent: *\nAllow: /\n\nSitemap: https://www.8chejil-sujeong.com/sitemap.xml\n`)
})

export default app
