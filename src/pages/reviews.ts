// ── 치료후기 페이지 ─────────────────────────────────────────────

export function reviewsPage(isLoggedIn: boolean, user?: { name: string; provider: string }): string {

  const headNav = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>치료후기 | 수정한의원</title>
  <meta name="description" content="수정한의원 실제 환자 치료후기. 구안와사·디스크·아토피·공황장애·난임·소아성장 등 다양한 치료 경험을 확인하세요."/>

  <!-- Google Search Console 소유권 확인 -->
  <meta name="google-site-verification" content="M8jXlZzYhHDmLfmeZp3Bz0Nx8U-A1rqtZGQVAwC1zTw" />

  <!-- Google Analytics GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CJ4ZCG8EEM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CJ4ZCG8EEM');
  </script>
  <!-- 네이버 Search Advisor 소유권 확인 -->
  <meta name="naver-site-verification" content="665bb6962efa7103cfd81e612c4de5f66d179655" />

  <!-- 검색엔진 최적화 -->
  <meta name="keywords" content="수정한의원, 노원구한의원, 노원역한의원, 8체질, 8체질의학, 한의학박사, 구안와사, 아토피, 허리디스크, 공황장애, 난임, 비염, 척추관협착증"/>
  <meta name="author" content="수정한의원"/>
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow"/>
  <link rel="canonical" href="https://www.8chejil-sujeong.com/reviews"/>

  <!-- Open Graph -->
  <meta property="og:title" content="치료후기 | 수정한의원"/>
  <meta property="og:description" content="수정한의원 실제 환자 치료후기. 구안와사·디스크·아토피·공황장애·난임·소아성장 등 다양한 치료 경험을 확인하세요."/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="https://8chejil-sujeong.com/static/og-image.jpg"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:image:alt" content="수정한의원 | 8체질 통합의학 클리닉"/>
  <meta property="og:url" content="https://www.8chejil-sujeong.com/reviews"/>
  <meta property="og:locale" content="ko_KR"/>
  <meta property="og:site_name" content="수정한의원"/>

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="치료후기 | 수정한의원"/>
  <meta name="twitter:description" content="수정한의원 실제 환자 치료후기. 구안와사·디스크·아토피·공황장애·난임·소아성장 등 다양한 치료 경험을 확인하세요."/>
  <meta name="twitter:image" content="https://8chejil-sujeong.com/static/og-image.jpg"/>

  <!-- Schema.org 구조화 데이터 (AI 검색 최적화) -->
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalClinic","name":"수정한의원","alternateName":["8체질 수정한의원","Sujeong Korean Medical Center","노원역한의원","노원구한의원"],"description":"1995년 개원, 30년 8체질 임상경험. 한의학박사(침구학 전공)가 직접 체질진단을 시행합니다. 구안와사·안면마비, 아토피·지루성피부염, 허리디스크·척추관협착증, 공황장애·불면증·이명, 난임·갱년기, 만성소화불량·역류성식도염, 비염·천식 등 난치·만성질환 근본치료 클리닉.","url":"https://8chejil-sujeong.com","logo":"https://8chejil-sujeong.com/static/logo.png","image":"https://8chejil-sujeong.com/static/og-image.jpg","telephone":"02-932-3815","foundingDate":"1995","address":{"@type":"PostalAddress","streetAddress":"동일로 1374 미산빌딩 6층","addressLocality":"노원구","addressRegion":"서울특별시","postalCode":"01769","addressCountry":"KR"},"geo":{"@type":"GeoCoordinates","latitude":"37.6554","longitude":"127.0567"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Friday"],"opens":"09:00","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Wednesday"],"opens":"09:00","closes":"20:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Thursday"],"opens":"09:00","closes":"13:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"09:00","closes":"16:00"}],"medicalSpecialty":["8체질의학","한방내과","침구과","추나의학","한방부인과","사상체질과"],"availableService":[{"@type":"MedicalTherapy","name":"8체질 맥진 진단","description":"30년 임상의 정확한 8체질 맥진 진단"},{"@type":"MedicalTherapy","name":"8체질 침치료"},{"@type":"MedicalTherapy","name":"체질 맞춤 1:1 한약 처방"},{"@type":"MedicalTherapy","name":"추나치료"},{"@type":"MedicalTherapy","name":"양자퀀텀 면역치료"},{"@type":"MedicalTherapy","name":"구안와사·안면마비 치료"},{"@type":"MedicalTherapy","name":"만성 편두통 치료"},{"@type":"MedicalTherapy","name":"대상포진후 신경통 치료"},{"@type":"MedicalTherapy","name":"천식·마이코플라즈마 치료"},{"@type":"MedicalTherapy","name":"궤양성대장염 치료"},{"@type":"MedicalTherapy","name":"소아성장 클리닉"},{"@type":"MedicalTherapy","name":"두통·어지럼증 치료"},{"@type":"MedicalTherapy","name":"이명·난청 치료"},{"@type":"MedicalTherapy","name":"불면증·만성피로 치료"},{"@type":"MedicalTherapy","name":"공황장애·우울증 치료"},{"@type":"MedicalTherapy","name":"자율신경실조 치료"},{"@type":"MedicalTherapy","name":"만성소화불량 치료"},{"@type":"MedicalTherapy","name":"역류성식도염 치료"},{"@type":"MedicalTherapy","name":"과민성대장증후군 치료"},{"@type":"MedicalTherapy","name":"만성변비·설사 치료"},{"@type":"MedicalTherapy","name":"췌장염 치료"},{"@type":"MedicalTherapy","name":"아토피 피부염 치료"},{"@type":"MedicalTherapy","name":"지루성피부염 치료"},{"@type":"MedicalTherapy","name":"두드러기·건선 치료"},{"@type":"MedicalTherapy","name":"비염·축농증 치료"},{"@type":"MedicalTherapy","name":"COPD·기관지확장증 치료"},{"@type":"MedicalTherapy","name":"허리디스크(추간판탈출증) 치료"},{"@type":"MedicalTherapy","name":"척추관협착증 치료"},{"@type":"MedicalTherapy","name":"무릎관절염 치료"},{"@type":"MedicalTherapy","name":"오십견·회전근개 치료"},{"@type":"MedicalTherapy","name":"생리통·생리불순 치료"},{"@type":"MedicalTherapy","name":"난임·계류유산 치료"},{"@type":"MedicalTherapy","name":"산후조리·산후보약"},{"@type":"MedicalTherapy","name":"갱년기증후군 치료"}],"hasMap":"https://map.naver.com","publicAccess":true,"priceRange":"$$","currenciesAccepted":"KRW","paymentAccepted":"현금, 카드, 의료보험","employee":{"@type":"Physician","name":"수정한의원 원장","jobTitle":"한의학박사 침구학 전공","description":"30년 8체질 임상경험, 한의학박사(침구학 전공), 대한 한의학회·암한의학회 정회원","hasCredential":["한의학박사","침구학 전공","대한한의학회 정회원","암한의학회 정회원"]},"sameAs":["https://8chejil-sujeong.com"]}</script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"수정한의원","item":"https://8chejil-sujeong.com"},{"@type":"ListItem","position":2,"name":"치료후기","item":"https://8chejil-sujeong.com/reviews"}]}</script>

  <link rel="icon" href="/favicon.ico"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link rel="stylesheet" href="/static/style.css?v=20250415"/>
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
      <a href="https://booking.naver.com/booking/13/bizes/890867" target="_blank" rel="noopener" class="topbar-naver-booking">
        <i class="fas fa-calendar-check"></i> 네이버 예약
      </a>
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
      <img src="/static/logo.png" alt="수정한의원 로고" title="수정한의원 - 노원구 8체질 한의원" class="logo-img" width="178" height="52">
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
          <li><a href="/blog"><span class="nav-icon-circle nav-icon-naver-circle"></span> 블로그</a></li>
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
        <a href="/blog">
          <span class="mob-icon-circle mob-icon-naver-circle"></span> 블로그
        </a>
        <a href="/reviews">
          <i class="fas fa-star mob-content-icon mob-icon-star"></i> 치료후기
        </a>
        <a href="https://www.youtube.com/@sujungclinic" target="_blank" rel="noopener noreferrer nofollow">
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
`

  const afterMain = `

<!-- 푸터 -->
<footer id="footer">
  <div class="footer-top">
    <div class="footer-container">
      <div class="footer-brand-col">
        <div class="footer-logo-wrap">
          <img src="/static/logo_white.png" alt="수정한의원 로고" title="수정한의원 - 노원구 8체질 한의원" class="footer-logo-img" height="44" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
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

  // ── 로그인 게이트 ───────────────────────────────────────────────
  const loginGate = `
  <div class="review-login-wrap">
    <div class="review-login-box">
      <h1 class="review-login-title">로그인</h1>
      <div class="review-login-divider"></div>
      <p class="review-login-desc">
        의료관계법에 의거 후기는 로그인을 통해 열람이 가능합니다.<br>
        <span>SNS 로그인으로 간편하게 로그인하실 수 있습니다.</span>
      </p>
      <div class="review-login-btns">
        <a href="/auth/naver" class="review-login-btn review-login-naver">
          <img src="/static/naver-logo.svg" alt="N" class="review-login-logo-img">
          네이버 로그인
        </a>
        <a href="/auth/kakao" class="review-login-btn review-login-kakao">
          <img src="/static/kakao-logo.svg" alt="TALK" class="review-login-logo-img">
          카카오 로그인
        </a>
        <a href="/auth/google" class="review-login-btn review-login-google">
          <img src="/static/google-logo.svg" alt="G" class="review-login-logo-img">
          구글 로그인
        </a>
      </div>
      <p class="review-login-notice">
        <i class="fas fa-lock"></i> 개인정보는 로그인 인증 외에 저장되지 않습니다.
      </p>
    </div>
  </div>`

  // ── 후기 목록 (로그인 후) ───────────────────────────────────────
  const reviewList = `
  <div class="review-page-wrap">

    <!-- 페이지 헤더 -->
    <div class="page-header">
      <div class="page-header-content">
        <nav class="breadcrumb-nav" aria-label="breadcrumb">
          <a href="/">홈</a> <i class="fas fa-chevron-right fa-xs"></i>
          <span>치료후기</span>
        </nav>
        <h1 class="page-header-title">치료후기</h1>
        <p class="page-header-sub">수정한의원에서 치료받으신 환자분들의 생생한 후기입니다.</p>
      </div>
    </div>

    <!-- 로그인 상태 표시 -->
    <div class="review-user-bar">
      <div class="sec-wrap review-user-inner">
        <div class="review-user-info">
          <i class="fas fa-user-circle"></i>
          <span><strong>${user?.name || '회원'}</strong>님 (<span class="review-provider-badge review-provider-${user?.provider || 'naver'}">${user?.provider === 'kakao' ? '카카오' : user?.provider === 'google' ? '구글' : '네이버'}</span>)</span>
        </div>
        <a href="/auth/logout" class="review-logout-btn">
          <i class="fas fa-sign-out-alt"></i> 로그아웃
        </a>
      </div>
    </div>

    <!-- 후기 목록 섹션 -->
    <section class="review-list-section sec-wrap">

      <!-- 카테고리 필터 -->
      <div class="review-filter-wrap">
        <button class="review-filter-btn active" data-cat="all">전체</button>
        <button class="review-filter-btn" data-cat="구안와사">구안와사·안면마비</button>
        <button class="review-filter-btn" data-cat="디스크">디스크·척추</button>
        <button class="review-filter-btn" data-cat="피부">피부·아토피</button>
        <button class="review-filter-btn" data-cat="소화기">소화기</button>
        <button class="review-filter-btn" data-cat="자율신경">자율신경·공황</button>
        <button class="review-filter-btn" data-cat="여성">여성질환</button>
        <button class="review-filter-btn" data-cat="성장">소아성장</button>
        <button class="review-filter-btn" data-cat="기타">기타</button>
      </div>

      <!-- 후기 카드 그리드 (3열 요약 모드) -->
      <style>
        #reviewGrid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        #reviewGrid .review-card {
          padding: 20px;
          gap: 10px;
        }
        #reviewGrid .review-card-body {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 0.9rem;
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          #reviewGrid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #reviewGrid { grid-template-columns: 1fr !important; }
        }
      </style>
      <div class="review-grid" id="reviewGrid">

        <div class="review-card" data-cat="구안와사">
          <div class="review-card-header">
            <span class="review-cat-tag">구안와사·안면마비</span>
            <span class="review-date">2025.03.15</span>
          </div>
          <h3 class="review-card-title">2주 만에 눈이 완전히 감겼어요</h3>
          <p class="review-card-body">갑자기 입이 돌아가서 너무 무서웠는데, 원장님께서 체질 진단 후 맞춤 치료를 해주셨습니다. 2주 차부터 눈이 감기기 시작했고, 4주 후에는 거의 정상으로 돌아왔어요. 정말 감사드립니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*희 (40대, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="디스크">
          <div class="review-card-header">
            <span class="review-cat-tag">디스크·척추</span>
            <span class="review-date">2025.02.28</span>
          </div>
          <h3 class="review-card-title">수술 권유받았는데 한방으로 해결했습니다</h3>
          <p class="review-card-body">L4~L5 디스크로 수술까지 권유받았는데, 수정한의원 체질 침치료와 추나를 3개월 받은 후 MRI상 디스크가 크게 줄었다는 얘기를 들었습니다. 지금은 일상생활에 전혀 지장 없습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*민 (50대, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="피부">
          <div class="review-card-header">
            <span class="review-cat-tag">피부·아토피</span>
            <span class="review-date">2025.02.10</span>
          </div>
          <h3 class="review-card-title">20년 아토피가 드디어 잡혔어요</h3>
          <p class="review-card-body">어릴 때부터 아토피로 스테로이드를 달고 살았는데, 체질이 금양체질이라는 걸 알고 나서 음식도 조절하고 한약도 맞춤으로 먹었더니 6개월 만에 피부가 거의 깨끗해졌습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*준 (30대, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="자율신경">
          <div class="review-card-header">
            <span class="review-cat-tag">자율신경·공황</span>
            <span class="review-date">2025.01.22</span>
          </div>
          <h3 class="review-card-title">공황장애 1년, 이제 지하철을 탈 수 있어요</h3>
          <p class="review-card-body">공황장애로 지하철, 엘리베이터를 못 탔는데 체질 한약과 침치료를 받으면서 자율신경이 안정된 걸 느꼈습니다. 3개월 후부터는 혼자 지하철을 탈 수 있게 됐어요. 정말 인생이 바뀌었습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*연 (30대, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="여성">
          <div class="review-card-header">
            <span class="review-cat-tag">여성질환·난임</span>
            <span class="review-date">2025.01.08</span>
          </div>
          <h3 class="review-card-title">3년 난임 끝에 임신 성공했습니다!</h3>
          <p class="review-card-body">3번의 시험관 실패 후 수정한의원을 방문했습니다. AMH가 0.4로 매우 낮았는데, 체질 한약 복용 4개월 후 자연임신에 성공했습니다. 지금 임신 7개월입니다. 너무너무 감사해요!</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 정*영 (30대, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="소화기">
          <div class="review-card-header">
            <span class="review-cat-tag">소화기</span>
            <span class="review-date">2024.12.30</span>
          </div>
          <h3 class="review-card-title">10년 역류성식도염 두 달 만에 좋아졌어요</h3>
          <p class="review-card-body">10년간 위장약을 달고 살았는데, 체질을 알고 맞지 않는 음식을 끊고 체질 한약을 먹었더니 두 달 만에 속쓰림이 사라졌습니다. 지금은 약 없이도 잘 지냅니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 강*호 (40대, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="성장">
          <div class="review-card-header">
            <span class="review-cat-tag">소아성장</span>
            <span class="review-date">2024.12.15</span>
          </div>
          <h3 class="review-card-title">6개월 만에 8cm 성장했어요</h3>
          <p class="review-card-body">초등 4학년 아들 성장판 초음파 검사 후 성장 치료를 시작했습니다. 체질 맞춤 성장 한약과 성장침을 병행했더니 6개월 만에 8cm가 자랐어요. 반에서 키 순서가 많이 올랐습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 오*진 학부모 (40대, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="구안와사">
          <div class="review-card-header">
            <span class="review-cat-tag">구안와사·안면마비</span>
            <span class="review-date">2024.11.20</span>
          </div>
          <h3 class="review-card-title">발병 3일 만에 치료 시작해서 빠르게 회복</h3>
          <p class="review-card-body">발병 직후 바로 수정한의원에 왔습니다. 골든타임 치료 덕분인지 3주 만에 90% 이상 회복되었어요. 다른 병원에서 6개월이 걸릴 수 있다고 했는데 정말 빠른 회복이었습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 윤*서 (20대, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
        </div>

        <div class="review-card" data-cat="기타">
          <div class="review-card-header">
            <span class="review-cat-tag">대상포진후신경통</span>
            <span class="review-date">2024.11.05</span>
          </div>
          <h3 class="review-card-title">2년간 잠 못 자던 통증에서 해방됐어요</h3>
          <p class="review-card-body">대상포진 후 2년간 전기가 통하는 듯한 통증으로 잠을 못 잤습니다. 파동요법·태반약침·한약 복합치료를 받으면서 처음엔 반신반의했는데, 3개월 후 통증이 70% 이상 줄었습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 신*철 (60대, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>

      </div><!-- /review-grid -->

      <!-- 더보기 -->
      <div class="review-more-wrap">
        <p class="review-total-count"><i class="fas fa-comment-medical"></i> 총 <strong>247건</strong>의 치료후기가 있습니다.</p>
        <p class="review-legal-note">
          <i class="fas fa-info-circle"></i>
          의료법 제56조에 의거, 치료후기는 실제 치료를 받으신 분들의 자발적 작성 후기이며 환자 동의 하에 게재됩니다.<br>
          개인정보 보호를 위해 이름 일부는 마스킹 처리되어 있습니다.
        </p>
      </div>

    </section>
  </div>

  <script>
  // 카테고리 필터
  document.querySelectorAll('.review-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.cat;
      document.querySelectorAll('.review-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  </script>`

  const mainContent = isLoggedIn ? reviewList : loginGate

  return headNav + `<main id="main-content">` + mainContent + `\n</main>` + afterMain
}
