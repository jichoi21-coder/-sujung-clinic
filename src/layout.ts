export function layout(content: string, pageTitle?: string, pageDesc?: string, reqUrl?: string, extraSchema?: object): string {
  const title = pageTitle || '수정한의원 | 노원구 8체질 한의원 – 구안와사·아토피·디스크·공황장애·난임 근본치료'
  const desc = pageDesc || '서울 노원구 노원역 5번출구. 1995년 개원 30년 임상. 한의학박사가 직접 8체질 진단. 구안와사·안면마비, 아토피·지루성피부염, 허리디스크·척추협착증, 공황장애·불면증, 난임·생리통, 만성소화불량·역류성식도염, 비염·천식 등 난치·만성질환 근본치료. ☎ 02-932-3815'
  const siteOrigin = reqUrl ? new URL(reqUrl).origin : 'https://8chejil-sujeong.com'
  const CANONICAL_ORIGIN = 'https://8chejil-sujeong.com'
  const ogImage = `${CANONICAL_ORIGIN}/static/og-image.jpg`
  const ogUrl = reqUrl || siteOrigin

  // Schema.org 구조화 데이터 — AI 검색엔진 최적화
  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "수정한의원",
    "alternateName": ["8체질 수정한의원", "Sujeong Korean Medical Center", "노원역한의원", "노원구한의원"],
    "description": "1995년 개원, 30년 8체질 임상경험. 한의학박사(침구학 전공)가 직접 체질진단을 시행합니다. 구안와사·안면마비, 아토피·지루성피부염, 허리디스크·척추관협착증, 공황장애·불면증·이명, 난임·갱년기, 만성소화불량·역류성식도염, 비염·천식 등 난치·만성질환 근본치료 클리닉.",
    "url": "https://8chejil-sujeong.com",
    "logo": "https://8chejil-sujeong.com/static/logo.png",
    "image": "https://8chejil-sujeong.com/static/og-image.jpg",
    "telephone": "02-932-3815",
    "foundingDate": "1995",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "동일로 1374 미산빌딩 6층",
      "addressLocality": "노원구",
      "addressRegion": "서울특별시",
      "postalCode": "01769",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.6554",
      "longitude": "127.0567"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Friday"], "opens": "09:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday"], "opens": "09:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday"], "opens": "09:00", "closes": "13:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "16:00" }
    ],
    "medicalSpecialty": ["8체질의학", "한방내과", "침구과", "추나의학", "한방부인과", "사상체질과"],
    "availableService": [
      { "@type": "MedicalTherapy", "name": "8체질 맥진 진단", "description": "30년 임상의 정확한 8체질 맥진 진단" },
      { "@type": "MedicalTherapy", "name": "8체질 침치료" },
      { "@type": "MedicalTherapy", "name": "체질 맞춤 1:1 한약 처방" },
      { "@type": "MedicalTherapy", "name": "추나치료" },
      { "@type": "MedicalTherapy", "name": "양자퀀텀 면역치료" },
      { "@type": "MedicalTherapy", "name": "구안와사·안면마비 치료" },
      { "@type": "MedicalTherapy", "name": "만성 편두통 치료" },
      { "@type": "MedicalTherapy", "name": "대상포진후 신경통 치료" },
      { "@type": "MedicalTherapy", "name": "천식·마이코플라즈마 치료" },
      { "@type": "MedicalTherapy", "name": "궤양성대장염 치료" },
      { "@type": "MedicalTherapy", "name": "소아성장 클리닉" },
      { "@type": "MedicalTherapy", "name": "두통·어지럼증 치료" },
      { "@type": "MedicalTherapy", "name": "이명·난청 치료" },
      { "@type": "MedicalTherapy", "name": "불면증·만성피로 치료" },
      { "@type": "MedicalTherapy", "name": "공황장애·우울증 치료" },
      { "@type": "MedicalTherapy", "name": "자율신경실조 치료" },
      { "@type": "MedicalTherapy", "name": "만성소화불량 치료" },
      { "@type": "MedicalTherapy", "name": "역류성식도염 치료" },
      { "@type": "MedicalTherapy", "name": "과민성대장증후군 치료" },
      { "@type": "MedicalTherapy", "name": "만성변비·설사 치료" },
      { "@type": "MedicalTherapy", "name": "췌장염 치료" },
      { "@type": "MedicalTherapy", "name": "아토피 피부염 치료" },
      { "@type": "MedicalTherapy", "name": "지루성피부염 치료" },
      { "@type": "MedicalTherapy", "name": "두드러기·건선 치료" },
      { "@type": "MedicalTherapy", "name": "비염·축농증 치료" },
      { "@type": "MedicalTherapy", "name": "COPD·기관지확장증 치료" },
      { "@type": "MedicalTherapy", "name": "허리디스크(추간판탈출증) 치료" },
      { "@type": "MedicalTherapy", "name": "척추관협착증 치료" },
      { "@type": "MedicalTherapy", "name": "무릎관절염 치료" },
      { "@type": "MedicalTherapy", "name": "오십견·회전근개 치료" },
      { "@type": "MedicalTherapy", "name": "생리통·생리불순 치료" },
      { "@type": "MedicalTherapy", "name": "난임·계류유산 치료" },
      { "@type": "MedicalTherapy", "name": "산후조리·산후보약" },
      { "@type": "MedicalTherapy", "name": "갱년기증후군 치료" }
    ],
    "hasMap": "https://map.naver.com",
    "publicAccess": true,
    "priceRange": "$$",
    "currenciesAccepted": "KRW",
    "paymentAccepted": "현금, 카드, 의료보험",
    "employee": {
      "@type": "Physician",
      "name": "수정한의원 원장",
      "jobTitle": "한의학박사 침구학 전공",
      "description": "30년 8체질 임상경험, 한의학박사(침구학 전공), 대한 한의학회·암한의학회 정회원",
      "hasCredential": ["한의학박사", "침구학 전공", "대한한의학회 정회원", "암한의학회 정회원"]
    },
    "sameAs": [
      "https://8chejil-sujeong.com"
    ]
  })

  const extraSchemaTag = extraSchema
    ? `\n  <script type="application/ld+json">${JSON.stringify(extraSchema)}</script>`
    : ''

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>

  <!-- 검색엔진 최적화 -->
  <meta name="keywords" content="수정한의원, 노원구한의원, 노원역한의원, 상계동한의원, 중계동한의원, 노원구안와사, 노원아토피, 노원디스크, 노원협착증, 노원비염, 노원공황장애, 노원난임, 노원대상포진, 노원소아성장, 8체질, 체질침, 한의학박사, 근본치료, 난치병"/>
  <meta name="author" content="수정한의원"/>
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow"/>
  <link rel="canonical" href="${ogUrl}"/>

  <!-- Open Graph -->
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${desc}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="${ogImage}"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:image:alt" content="수정한의원 | 8체질 통합의학 클리닉"/>
  <meta property="og:url" content="${ogUrl}"/>
  <meta property="og:locale" content="ko_KR"/>
  <meta property="og:site_name" content="수정한의원"/>

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${desc}"/>
  <meta name="twitter:image" content="${ogImage}"/>

  <!-- Schema.org 구조화 데이터 (AI 검색 최적화) -->
  <script type="application/ld+json">${schemaOrg}</script>${extraSchemaTag}

  <link rel="icon" href="/favicon.ico"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link rel="stylesheet" href="/static/style.css"/>
</head>
<body>

<!-- 상단 정보 바 -->
<div id="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <span><i class="fas fa-map-marker-alt"></i> 서울 노원구 동일로 1374 미산빌딩 6층 (노원역 5번 출구)</span>
    </div>
    <div class="topbar-right">
      <span class="topbar-hours"><i class="fas fa-clock"></i> 월·화·금 09~19시 | 수 09~20시 | 목 09~13시 | 토 09~16시</span>
      <span class="topbar-phone"><i class="fas fa-phone"></i> <a href="tel:02-932-3815">02-932-3815</a></span>
    </div>
  </div>
</div>
<style>
@media (max-width: 768px) {
  .topbar-hours { display: none !important; }
  #topbar { height: 40px !important; overflow: hidden !important; }
  .topbar-inner { justify-content: flex-end !important; padding: 0 16px !important; }
  .topbar-right { gap: 0 !important; }
  .nav-container { height: 72px !important; }
  .logo-img { height: 64px !important; max-width: 210px !important; }
}
</style>

<!-- 네비게이션 -->
<nav id="navbar">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <img src="/static/logo.png" alt="수정한의원 로고" class="logo-img" width="178" height="52">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-menu" id="navMenu">
      <li class="has-sub">
        <a href="/introduction">병원소개 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/introduction#greeting">원장님 인사말</a></li>
          <li><a href="/introduction#profile">원장 약력</a></li>
          <li><a href="/introduction#gallery">원내사진</a></li>
          <li><a href="/introduction#devices">진단기기</a></li>
          <li><a href="/introduction#hours">진료시간</a></li>
          <li><a href="/introduction#location">오시는길</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/eight-constitution">8체질의학 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/eight-constitution#what">1. 체질이란?</a></li>
          <li><a href="/eight-constitution#why">2. 체질을 알아야 하는 이유</a></li>
          <li><a href="/eight-constitution#food">3. 체질별 특징과 음식표</a></li>
          <li><a href="/eight-constitution#diagnosis">4. 8체질 진단</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/special">수정한의원의 특별함 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/special#diagnosis">정확한 8체질 진단</a></li>
          <li><a href="/special#medicine">체질한약의 특별함</a></li>
          <li><a href="/special#quantum">양자퀀텀 면역센터</a></li>
          <li><a href="/special#safety">안심 진료 시스템</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/special">특설클리닉 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/special#facial">구안와사·안면마비</a></li>
          <li><a href="/clinic/special#migraine">만성 편두통</a></li>
          <li><a href="/clinic/special#herpes">대상포진후 신경통</a></li>
          <li><a href="/clinic/special#asthma">천식·마이코플라즈마</a></li>
          <li><a href="/clinic/special#colitis">궤양성대장염</a></li>
          <li><a href="/clinic/special#growth">소아성장</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/autonomic">자율신경·뇌신경 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/autonomic#headache">두통·편두통</a></li>
          <li><a href="/clinic/autonomic#dizziness">어지럼증</a></li>
          <li><a href="/clinic/autonomic#tinnitus">이명·난청</a></li>
          <li><a href="/clinic/autonomic#sleep">불면증·만성피로</a></li>
          <li><a href="/clinic/autonomic#panic">우울증·공황장애</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/digestion">소화기 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/digestion#dyspepsia">만성소화불량</a></li>
          <li><a href="/clinic/digestion#gerd">식도염·역류성</a></li>
          <li><a href="/clinic/digestion#ibs">과민성대장증후군</a></li>
          <li><a href="/clinic/digestion#constipation">만성변비·설사</a></li>
          <li><a href="/clinic/digestion#pancreas">췌장염</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/skin">피부·호흡기 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/skin#seborrheic">지루성피부염</a></li>
          <li><a href="/clinic/skin#atopy">아토피</a></li>
          <li><a href="/clinic/skin#urticaria">두드러기·건선</a></li>
          <li><a href="/clinic/skin#rhinitis">비염·축농증</a></li>
          <li><a href="/clinic/skin#copd">COPD·기관지확장증</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/spine">척추·관절 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/spine#knee">무릎관절염</a></li>
          <li><a href="/clinic/spine#disc">디스크(추간판탈출)</a></li>
          <li><a href="/clinic/spine#stenosis">척추관협착증</a></li>
          <li><a href="/clinic/spine#shoulder">오십견·회전근개</a></li>
        </ul>
      </li>
      <li class="has-sub">
        <a href="/clinic/women">여성질환 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="/clinic/women#menstrual">생리통·불순</a></li>
          <li><a href="/clinic/women#infertility">난임·계류유산</a></li>
          <li><a href="/clinic/women#postpartum">산후조리·보약</a></li>
          <li><a href="/clinic/women#menopause">갱년기증후군</a></li>
        </ul>
      </li>
      <li class="has-sub nav-content-item">
        <a href="#" class="nav-content-btn"><i class="fas fa-th-large"></i> 콘텐츠 <i class="fas fa-chevron-down fa-xs"></i></a>
        <ul class="sub-menu">
          <li><a href="https://blog.naver.com/sujungclinic" target="_blank" rel="noopener noreferrer"><span class="nav-icon-circle nav-icon-naver-circle"></span> 블로그</a></li>
          <li><a href="/reviews"><i class="fas fa-star"></i> 치료후기</a></li>
          <li><a href="#"><i class="fab fa-youtube"></i> 영상</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>

<!-- 모바일 전용 드로어 메뉴 -->
<div id="mobileOverlay" class="mob-overlay"></div>
<div id="mobileDrawer" class="mob-drawer">
  <div class="mob-drawer-header">
    <span class="mob-drawer-title">메뉴</span>
    <button id="mobileClose" class="mob-close-btn" aria-label="메뉴 닫기">
      <i class="fas fa-times"></i>
    </button>
  </div>
  <div class="mob-drawer-body">
    <div class="mob-menu-item">
      <a href="/introduction" class="mob-menu-link">
        <i class="fas fa-hospital"></i> 병원소개
      </a>
    </div>
    <div class="mob-menu-item">
      <a href="/eight-constitution" class="mob-menu-link">
        <i class="fas fa-yin-yang"></i> 8체질의학
      </a>
    </div>
    <div class="mob-menu-item">
      <a href="/special" class="mob-menu-link">
        <i class="fas fa-star"></i> 수정한의원의 특별함
      </a>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-notes-medical"></i> 특설클리닉</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/special#facial">구안와사·안면마비</a>
        <a href="/clinic/special#migraine">만성 편두통</a>
        <a href="/clinic/special#herpes">대상포진후 신경통</a>
        <a href="/clinic/special#asthma">천식·마이코플라즈마</a>
        <a href="/clinic/special#colitis">궤양성대장염</a>
        <a href="/clinic/special#growth">소아성장</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-brain"></i> 자율신경·뇌신경</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/autonomic#headache">두통·편두통</a>
        <a href="/clinic/autonomic#dizziness">어지럼증</a>
        <a href="/clinic/autonomic#tinnitus">이명·난청</a>
        <a href="/clinic/autonomic#sleep">불면증·만성피로</a>
        <a href="/clinic/autonomic#panic">우울증·공황장애</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-stomach"></i> 소화기</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/digestion#dyspepsia">만성소화불량</a>
        <a href="/clinic/digestion#gerd">식도염·역류성</a>
        <a href="/clinic/digestion#ibs">과민성대장증후군</a>
        <a href="/clinic/digestion#constipation">만성변비·설사</a>
        <a href="/clinic/digestion#pancreas">췌장염</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-lungs"></i> 피부·호흡기</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/skin#seborrheic">지루성피부염</a>
        <a href="/clinic/skin#atopy">아토피</a>
        <a href="/clinic/skin#urticaria">두드러기·건선</a>
        <a href="/clinic/skin#rhinitis">비염·축농증</a>
        <a href="/clinic/skin#copd">COPD·기관지확장증</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-bone"></i> 척추·관절</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/spine#knee">무릎관절염</a>
        <a href="/clinic/spine#disc">디스크</a>
        <a href="/clinic/spine#stenosis">척추관협착증</a>
        <a href="/clinic/spine#shoulder">오십견·회전근개</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-venus"></i> 여성질환</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="/clinic/women#menstrual">생리통·불순</a>
        <a href="/clinic/women#infertility">난임·계류유산</a>
        <a href="/clinic/women#postpartum">산후조리·보약</a>
        <a href="/clinic/women#menopause">갱년기증후군</a>
      </div>
    </div>
    <div class="mob-menu-item mob-has-sub mob-content-item">
      <button class="mob-menu-link mob-toggle-btn">
        <span><i class="fas fa-th-large"></i> 콘텐츠</span>
        <i class="fas fa-chevron-down mob-arrow"></i>
      </button>
      <div class="mob-sub">
        <a href="https://blog.naver.com/sujungclinic" target="_blank" rel="noopener noreferrer">
          <span class="mob-icon-circle mob-icon-naver-circle"></span> 블로그
        </a>
        <a href="/reviews">
          <i class="fas fa-star mob-content-icon mob-icon-star"></i> 치료후기
        </a>
        <a href="https://www.youtube.com/@sujungclinic" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube mob-content-icon mob-icon-youtube"></i> 영상
        </a>
      </div>
    </div>
    <div class="mob-cta-wrap">
      <a href="tel:02-932-3815" class="mob-cta-btn">
        <i class="fas fa-phone"></i> 02-932-3815 전화예약
      </a>
    </div>
  </div>
</div>
<main id="main-content">
${content}
</main>

<!-- 푸터 -->
<footer id="footer">
  <div class="footer-top">
    <div class="footer-container">
      <div class="footer-brand-col">
        <div class="footer-logo-wrap">
          <img src="/static/logo_white.png" alt="수정한의원 로고" class="footer-logo-img" height="44" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
          <div class="footer-logo-fallback" style="display:none">
            <div class="footer-logo-kr">수정한의원</div>
            <div class="footer-logo-en">SUJEONG KOREAN MEDICAL CENTER</div>
          </div>
        </div>
        <p class="footer-slogan">"잘 낫지 않는 병에 답을 찾습니다"</p>
        <div class="footer-meta">
          <p>1995년 개원 | 30년 8체질 임상경험</p>
          <p>난치질환·만성통증 전문</p>
        </div>
        <div class="footer-sns">
          <a href="tel:02-932-3815" title="전화예약"><i class="fas fa-phone-square-alt"></i></a>
        </div>
      </div>

      <div class="footer-nav-cols">
        <div class="footer-col">
          <h4 class="footer-col-title">병원안내</h4>
          <ul>
            <li><a href="/introduction#greeting">원장님 인사말</a></li>
            <li><a href="/introduction#profile">원장 약력</a></li>
            <li><a href="/introduction#gallery">원내사진</a></li>
            <li><a href="/introduction#hours">진료시간</a></li>
            <li><a href="/introduction#location">오시는길</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">수정한의원의 특별함</h4>
          <ul>
            <li><a href="/special#diagnosis">정확한 8체질 진단</a></li>
            <li><a href="/special#medicine">체질한약의 특별함</a></li>
            <li><a href="/special#quantum">양자퀀텀 면역센터</a></li>
            <li><a href="/clinic/special">특설클리닉</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">진료클리닉</h4>
          <ul>
            <li><a href="/clinic/autonomic">자율신경·뇌신경</a></li>
            <li><a href="/clinic/digestion">소화기</a></li>
            <li><a href="/clinic/skin">피부·호흡기</a></li>
            <li><a href="/clinic/spine">척추·관절</a></li>
            <li><a href="/clinic/women">여성질환</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact-col">
          <h4 class="footer-col-title">진료안내</h4>
          <ul class="footer-contact-list">
            <li><i class="fas fa-phone"></i> <a href="tel:02-932-3815">02-932-3815</a></li>
            <li><i class="fas fa-map-marker-alt"></i> 서울 노원구 동일로 1374<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;미산빌딩 6층</li>
            <li><i class="fas fa-subway"></i> 7호선 노원역 5번출구 300m</li>
            <li class="hours-list">
              <i class="fas fa-clock"></i>
              <div>
                <p>월·화·금 09:00–19:00</p>
                <p>수 09:00–20:00 (야간)</p>
                <p>목 09:00–13:00</p>
                <p>토 09:00–16:00</p>
                <p class="closed-text">일·공휴일 휴진</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-container">
      <p>© 2025 수정한의원. All rights reserved. | 사업자등록번호: 문의요망</p>
      <p class="footer-bottom-right">만성통증과 난치질환 치료의 새로운 기준 | 8체질 통합의학</p>
    </div>
  </div>
</footer>

<script src="/static/app.js"></script>
</body>
</html>`
}
