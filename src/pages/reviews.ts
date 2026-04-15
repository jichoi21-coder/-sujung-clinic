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

      <!-- 카테고리 필터 (2행: 일반진료 + 특설클리닉) -->
      <div class="review-filter-wrap">

        <!-- 행1: 일반 진료 -->
        <div class="review-filter-group">
          <span class="review-filter-label">
            <i class="fas fa-list-ul"></i> 일반 진료
          </span>
          <div class="review-filter-btns">
            <button class="review-filter-btn active" data-cat="all">전체</button>
            <button class="review-filter-btn" data-cat="체질다이어트">체질 다이어트</button>
            <button class="review-filter-btn" data-cat="디스크">디스크·척추</button>
            <button class="review-filter-btn" data-cat="피부">피부·아토피</button>
            <button class="review-filter-btn" data-cat="소화기">소화기</button>
            <button class="review-filter-btn" data-cat="자율신경">자율신경·공황</button>
            <button class="review-filter-btn" data-cat="여성">여성질환</button>
            <button class="review-filter-btn" data-cat="성장">소아성장</button>
            <button class="review-filter-btn" data-cat="기타">기타</button>
          </div>
        </div>

        <!-- 행2: 특설클리닉 -->
        <div class="review-filter-group review-filter-group-special">
          <span class="review-filter-label review-filter-label-special">
            <i class="fas fa-star"></i> 특설클리닉
          </span>
          <div class="review-filter-btns">
            <button class="review-filter-btn review-filter-btn-special" data-cat="구안와사">구안와사·안면마비</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="편두통">만성 편두통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="기타">대상포진·후신경통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="천식">만성천식·마이코플라즈마</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="소화기">궤양성 대장염</button>
          </div>
        </div>

      </div>

      <!-- ── 3열 요약 박스 그리드 스타일 ── -->
      <style>
        /* 항상 3열 고정 */
        #reviewGrid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 20px;
          margin-bottom: 40px;
        }
        /* 요약 카드 컴팩트 스타일 */
        #reviewGrid .review-card {
          padding: 20px 18px;
          gap: 10px;
          cursor: pointer;
          border: 1px solid #e8f0eb;
          transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
        }
        #reviewGrid .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(27,76,50,.14);
          border-color: var(--g3, #4a9e6b);
        }
        /* 본문 3줄 클램프 */
        #reviewGrid .review-card-body {
          display: -webkit-box !important;
          -webkit-line-clamp: 3 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #555;
          flex: 1;
        }
        /* 더 보기 힌트 */
        #reviewGrid .review-card::after {
          content: '자세히 보기 →';
          display: block;
          font-size: 0.78rem;
          color: var(--g2, #2d7a4f);
          font-weight: 600;
          margin-top: 4px;
          opacity: 0;
          transition: opacity 0.18s;
        }
        #reviewGrid .review-card:hover::after { opacity: 1; }

        /* 반응형 */
        @media (max-width: 900px) {
          #reviewGrid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          #reviewGrid { grid-template-columns: 1fr !important; }
        }

        /* ── 상세 모달 ── */
        #reviewModal {
          display: none;
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,.55);
          align-items: center; justify-content: center;
          padding: 20px;
        }
        #reviewModal.open { display: flex; }
        .rmodal-box {
          background: #fff;
          border-radius: 16px;
          width: 100%; max-width: 680px;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,.22);
          animation: rmodalIn .22s ease;
        }
        @keyframes rmodalIn {
          from { opacity:0; transform: translateY(24px) scale(.97); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }
        .rmodal-close {
          position: sticky; top: 0; float: right;
          background: rgba(255,255,255,.9);
          border: none; cursor: pointer;
          width: 36px; height: 36px;
          border-radius: 50%; font-size: 1.1rem;
          color: #444; margin: 12px 12px 0 0;
          display: flex; align-items: center; justify-content: center;
          z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,.12);
          transition: background .15s;
        }
        .rmodal-close:hover { background: #f0f0f0; }
        .rmodal-body { padding: 12px 32px 36px; clear: both; }
        .rmodal-header { margin-bottom: 18px; }
        .rmodal-cat { font-size: 0.82rem; font-weight: 700; color: var(--g2,#2d7a4f);
          background: #e8f5ee; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
        .rmodal-title { font-size: 1.22rem; font-weight: 700; color: #222; line-height: 1.45; margin-bottom: 6px; }
        .rmodal-meta { font-size: 0.84rem; color: #888; display: flex; gap: 14px; flex-wrap: wrap; }
        .rmodal-stars { color: #f5a623; font-size: 0.9rem; }
        .rmodal-divider { border: none; border-top: 1px solid #e8eceb; margin: 18px 0; }
        /* Q&A 섹션 */
        .rmodal-qa { display: flex; flex-direction: column; gap: 18px; margin-bottom: 24px; }
        .rmodal-q { font-size: 0.88rem; font-weight: 700; color: var(--g1,#1b4c32);
          background: #f0f7f3; border-left: 3px solid var(--g2,#2d7a4f);
          padding: 10px 14px; border-radius: 0 8px 8px 0; margin-bottom: 6px; }
        .rmodal-a { font-size: 0.92rem; color: #444; line-height: 1.75; padding: 0 4px; }
        /* 자필 이미지 */
        .rmodal-img-wrap { margin-top: 20px; }
        .rmodal-img-label { font-size: 0.82rem; color: #888; font-weight: 600; margin-bottom: 8px;
          display: flex; align-items: center; gap: 6px; }
        .rmodal-img { width: 100%; border-radius: 10px; border: 1px solid #e0e0e0;
          background: #f8f9fa; min-height: 180px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; color: #aaa; overflow: hidden; }
        .rmodal-img img { width: 100%; border-radius: 10px; display: block; }
        .rmodal-img-placeholder {
          width: 100%; min-height: 180px; border-radius: 10px;
          border: 2px dashed #d0d0d0; background: #fafafa;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; color: #bbb; font-size: 0.85rem; padding: 30px;
        }
        .rmodal-img-placeholder i { font-size: 2.5rem; color: #d0d0d0; }
        @media (max-width: 540px) {
          .rmodal-body { padding: 10px 18px 28px; }
          .rmodal-title { font-size: 1.05rem; }
        }
      </style>

      <!-- 자필후기 안내 배너 -->
      <div class="review-handwritten-banner">
        <i class="fas fa-pen-nib"></i>
        <span>아래 자필 후기는 환자분이 직접 손으로 작성하신 원본입니다. 이미지와 함께 원문 텍스트를 제공합니다.</span>
      </div>

      <!-- 후기 카드 그리드 -->
      <div class="review-grid" id="reviewGrid">

        <!-- ① 체질 다이어트 -->
        <article class="review-card" data-cat="체질다이어트" data-id="r10" role="button" tabindex="0"
          aria-label="후기 상세 보기: 6개월 만에 17.3kg 감량">
          <div class="review-card-header">
            <span class="review-cat-tag">체질 다이어트</span>
            <span class="review-date">2020.01.21</span>
          </div>
          <h3 class="review-card-title">6개월 만에 17.3kg 감량 — 내과 다이어트 약 부작용으로 포기했다가 체질로 성공</h3>
          <p class="review-card-body">내과에서 다이어트 약을 먹었지만 부작용만 심해지고 체중은 그대로였습니다. 우울증까지 생겼어요.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*은 (40대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ③ 구안와사·안면마비 -->
        <article class="review-card" data-cat="구안와사" data-id="r1" role="button" tabindex="0"
          aria-label="후기 상세 보기: 2주 만에 눈이 완전히 감겼어요">
          <div class="review-card-header">
            <span class="review-cat-tag">구안와사·안면마비</span>
            <span class="review-date">2025.03.15</span>
          </div>
          <h3 class="review-card-title">2주 만에 눈이 완전히 감겼어요</h3>
          <p class="review-card-body">갑자기 입이 돌아가서 너무 무서웠는데, 원장님께서 체질 진단 후 맞춤 치료를 해주셨습니다. 2주 차부터 눈이 감기기 시작했고, 4주 후에는 거의 정상으로 돌아왔어요.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*희 (40대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ② 디스크·척추 -->
        <article class="review-card" data-cat="디스크" data-id="r2" role="button" tabindex="0"
          aria-label="후기 상세 보기: 수술 권유받았는데 한방으로 해결했습니다">
          <div class="review-card-header">
            <span class="review-cat-tag">디스크·척추</span>
            <span class="review-date">2025.02.28</span>
          </div>
          <h3 class="review-card-title">수술 권유받았는데 한방으로 해결했습니다</h3>
          <p class="review-card-body">L4~L5 디스크로 수술까지 권유받았는데, 수정한의원 체질 침치료와 추나를 3개월 받은 후 MRI상 디스크가 크게 줄었다고 했습니다. 지금은 일상생활에 전혀 지장 없습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*민 (50대, 남)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ③ 피부·아토피 -->
        <article class="review-card" data-cat="피부" data-id="r3" role="button" tabindex="0"
          aria-label="후기 상세 보기: 20년 아토피가 드디어 잡혔어요">
          <div class="review-card-header">
            <span class="review-cat-tag">피부·아토피</span>
            <span class="review-date">2025.02.10</span>
          </div>
          <h3 class="review-card-title">20년 아토피가 드디어 잡혔어요</h3>
          <p class="review-card-body">어릴 때부터 아토피로 스테로이드를 달고 살았는데, 체질이 금양체질이라는 걸 알고 나서 음식도 조절하고 체질 한약을 먹었더니 6개월 만에 피부가 거의 깨끗해졌습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*준 (30대, 남)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ④ 자율신경·공황 -->
        <article class="review-card" data-cat="자율신경" data-id="r4" role="button" tabindex="0"
          aria-label="후기 상세 보기: 공황장애 1년, 이제 지하철을 탈 수 있어요">
          <div class="review-card-header">
            <span class="review-cat-tag">자율신경·공황</span>
            <span class="review-date">2025.01.22</span>
          </div>
          <h3 class="review-card-title">공황장애 1년, 이제 지하철을 탈 수 있어요</h3>
          <p class="review-card-body">공황장애로 지하철, 엘리베이터를 못 탔는데 체질 한약과 침치료를 받으면서 자율신경이 안정된 걸 느꼈습니다. 3개월 후부터는 혼자 지하철을 탈 수 있게 됐어요.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*연 (30대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ⑤ 여성질환·난임 -->
        <article class="review-card" data-cat="여성" data-id="r5" role="button" tabindex="0"
          aria-label="후기 상세 보기: 3년 난임 끝에 임신 성공했습니다!">
          <div class="review-card-header">
            <span class="review-cat-tag">여성질환·난임</span>
            <span class="review-date">2025.01.08</span>
          </div>
          <h3 class="review-card-title">3년 난임 끝에 임신 성공했습니다!</h3>
          <p class="review-card-body">3번의 시험관 실패 후 수정한의원을 방문했습니다. AMH가 0.4로 매우 낮았는데, 체질 한약 복용 4개월 후 자연임신에 성공했습니다. 지금 임신 7개월입니다. 너무너무 감사해요!</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 정*영 (30대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ⑥ 소화기 -->
        <article class="review-card" data-cat="소화기" data-id="r6" role="button" tabindex="0"
          aria-label="후기 상세 보기: 10년 역류성식도염 두 달 만에 좋아졌어요">
          <div class="review-card-header">
            <span class="review-cat-tag">소화기</span>
            <span class="review-date">2024.12.30</span>
          </div>
          <h3 class="review-card-title">10년 역류성식도염 두 달 만에 좋아졌어요</h3>
          <p class="review-card-body">10년간 위장약을 달고 살았는데, 체질을 알고 맞지 않는 음식을 끊고 체질 한약을 먹었더니 두 달 만에 속쓰림이 사라졌습니다. 지금은 약 없이도 잘 지냅니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 강*호 (40대, 남)</span>
            <div class="review-stars">★★★★<span style="opacity:.4">★</span></div>
          </div>
        </article>

        <!-- ⑦ 소아성장 -->
        <article class="review-card" data-cat="성장" data-id="r7" role="button" tabindex="0"
          aria-label="후기 상세 보기: 6개월 만에 8cm 성장했어요">
          <div class="review-card-header">
            <span class="review-cat-tag">소아성장</span>
            <span class="review-date">2024.12.15</span>
          </div>
          <h3 class="review-card-title">6개월 만에 8cm 성장했어요</h3>
          <p class="review-card-body">초등 4학년 아들 성장판 초음파 검사 후 성장 치료를 시작했습니다. 체질 맞춤 성장 한약과 성장침을 병행했더니 6개월 만에 8cm가 자랐어요. 반에서 키 순서가 많이 올랐습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 오*진 학부모 (40대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ⑧ 구안와사 #2 -->
        <article class="review-card" data-cat="구안와사" data-id="r8" role="button" tabindex="0"
          aria-label="후기 상세 보기: 발병 3일 만에 치료 시작해서 빠르게 회복">
          <div class="review-card-header">
            <span class="review-cat-tag">구안와사·안면마비</span>
            <span class="review-date">2024.11.20</span>
          </div>
          <h3 class="review-card-title">발병 3일 만에 치료 시작해서 빠르게 회복</h3>
          <p class="review-card-body">발병 직후 바로 수정한의원에 왔습니다. 골든타임 치료 덕분인지 3주 만에 90% 이상 회복되었어요. 다른 병원에서 6개월이 걸릴 수 있다고 했는데 정말 빠른 회복이었습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 윤*서 (20대, 여)</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <!-- ⑨ 기타 (대상포진) -->
        <article class="review-card" data-cat="기타" data-id="r9" role="button" tabindex="0"
          aria-label="후기 상세 보기: 2년간 잠 못 자던 통증에서 해방됐어요">
          <div class="review-card-header">
            <span class="review-cat-tag">대상포진후신경통</span>
            <span class="review-date">2024.11.05</span>
          </div>
          <h3 class="review-card-title">2년간 잠 못 자던 통증에서 해방됐어요</h3>
          <p class="review-card-body">대상포진 후 2년간 전기가 통하는 듯한 통증으로 잠을 못 잤습니다. 파동요법·태반약침·한약 복합치료를 받으면서 처음엔 반신반의했는데, 3개월 후 통증이 70% 이상 줄었습니다.</p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 신*철 (60대, 남)</span>
            <div class="review-stars">★★★★<span style="opacity:.4">★</span></div>
          </div>
        </article>

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

  <!-- ────── 상세 모달 ────── -->
  <div id="reviewModal" role="dialog" aria-modal="true" aria-labelledby="rmodalTitle">
    <div class="rmodal-box">
      <button class="rmodal-close" id="rmodalClose" aria-label="닫기">
        <i class="fas fa-times"></i>
      </button>
      <div class="rmodal-body" id="rmodalBody">
        <!-- JS로 동적 삽입 -->
      </div>
    </div>
  </div>

  <script>
  // ── 후기 상세 데이터 ──────────────────────────────────────────
  const REVIEWS = {
    r10: {
      cat: '체질 다이어트', date: '2020.01.21',
      title: '6개월 만에 17.3kg 감량 — 내과 다이어트 약 부작용으로 포기했다가 체질로 성공',
      author: '김*은 (40대, 여)', stars: 5,
      qa: [
        { q: '다이어트를 시도하게 된 계기와 이전 경험을 알려주세요.',
          a: '내과에서 처방받은 다이어트 약을 6개월 복용했지만 부작용(두근거림, 불면, 우울감)만 심해지고 체중은 거의 빠지지 않았습니다. 약을 끊고 나서 요요까지 와서 시작 전보다 오히려 더 쪘어요. 다이어트 자체를 포기하려던 참이었습니다.' },
        { q: '8체질 다이어트가 기존 방법과 어떻게 달랐나요?',
          a: '체질 진단 결과 토양체질이었고, 제가 살을 빼겠다고 열심히 먹던 닭가슴살·계란이 오히려 토양체질에 맞지 않는 음식이었다는 걸 알게 됐습니다. 체질에 맞는 음식으로 바꾸고 체질 한약을 복용하면서 배고프지 않은데 살이 빠지기 시작했습니다.' },
        { q: '6개월 치료 결과를 구체적으로 말씀해 주세요.',
          a: '시작 시 몸무게가 82.3kg이었는데 6개월 후 65.0kg으로 17.3kg 감량에 성공했습니다. 식이 제한이 아닌 체질에 맞는 식이로 바꿨을 뿐인데, 몸이 가벼워지고 피부도 좋아졌습니다. 지금도 요요 없이 유지 중입니다.' }
      ],
      handwrittenImg: null
    },
    r1: {
      cat: '구안와사·안면마비', date: '2025.03.15',
      title: '2주 만에 눈이 완전히 감겼어요',
      author: '김*희 (40대, 여)', stars: 5,
      qa: [
        { q: '내원 전 어떤 증상이 있으셨나요?',
          a: '갑자기 아침에 일어나니 입이 돌아가고 눈이 잘 감기지 않았습니다. 거울을 보고 너무 놀랐어요. 얼굴 왼쪽이 처지고, 음식을 먹으면 흘리고, 발음도 이상해져서 일상생활이 힘들었습니다.' },
        { q: '수정한의원에서 어떤 치료를 받으셨나요?',
          a: '8체질 맥진 진단을 받고 금양체질이라는 걸 알게 됐어요. 체질 침치료와 골든타임 집중치료 프로그램을 받았고, 체질에 맞는 한약도 병행했습니다. 원장님이 치료 방향을 세세하게 설명해주셔서 믿음이 갔습니다.' },
        { q: '치료 경과는 어떠했나요?',
          a: '1주일 후부터 눈 주변 감각이 돌아오기 시작했고, 2주 차에는 눈이 완전히 감기기 시작했습니다. 4주 후에는 거의 정상으로 돌아왔어요. 다른 병원에서 최소 3~6개월이라고 했는데 정말 빠른 회복이었습니다.' },
        { q: '수정한의원을 선택하신 이유는 무엇인가요?',
          a: '지인이 구안와사로 치료받고 완전히 나았다는 이야기를 들었습니다. 8체질 맥진으로 정확한 체질 진단을 한다는 것과 30년 임상 경험이 신뢰를 줬습니다.' }
      ],
      handwrittenImg: null
    },
    r2: {
      cat: '디스크·척추', date: '2025.02.28',
      title: '수술 권유받았는데 한방으로 해결했습니다',
      author: '이*민 (50대, 남)', stars: 5,
      qa: [
        { q: '처음 증상은 어떠셨나요?',
          a: '허리 통증이 심해지더니 오른쪽 다리까지 저리고 마비 증상이 왔습니다. 정형외과에서 L4~L5 디스크 탈출증 진단을 받았고, 수술을 권유받았어요. 계단을 오르내리기도 힘든 상태였습니다.' },
        { q: '한방 치료를 선택하신 계기는?',
          a: '수술이 두렵기도 했고, 지인이 수정한의원에서 척추 치료 후 좋아졌다는 이야기를 들었습니다. 마지막 시도라는 생각으로 방문했는데, 체질 진단부터 치료 계획이 굉장히 체계적이었습니다.' },
        { q: '어떤 치료를 받으셨고, 결과는?',
          a: '8체질 침치료와 추나요법을 주 2~3회씩 3개월 받았습니다. 처음 한 달은 변화가 미미했지만, 2개월째부터 다리 저림이 줄어들었고, 3개월 후 MRI 재촬영에서 디스크가 상당히 줄었다는 결과를 받았습니다. 지금은 완전히 일상생활이 가능합니다.' }
      ],
      handwrittenImg: null
    },
    r3: {
      cat: '피부·아토피', date: '2025.02.10',
      title: '20년 아토피가 드디어 잡혔어요',
      author: '박*준 (30대, 남)', stars: 5,
      qa: [
        { q: '아토피 증상이 얼마나 심각했나요?',
          a: '초등학교 때부터 아토피가 시작돼 20년 넘게 스테로이드 연고를 달고 살았습니다. 팔꿈치, 무릎 뒤, 목 주변이 항상 빨갛고 각질이 일어났으며 가려움으로 잠을 못 자는 날도 많았습니다.' },
        { q: '8체질 치료를 받으신 후 달라진 점은?',
          a: '체질 진단 결과 금양체질이었는데, 먹지 말아야 할 음식 목록을 받고 지키기 시작했습니다. 체질 한약 3개월 복용 후 피부 자극이 확연히 줄었고, 6개월 후에는 아무것도 바르지 않아도 될 정도로 피부가 깨끗해졌습니다.' },
        { q: '수정한의원만의 특별한 점이 있다면?',
          a: '다른 한의원에서는 그냥 한약 처방만 받았는데, 여기서는 제 체질에 맞는 음식표와 생활 관리 방법을 구체적으로 알려주셨습니다. 치료와 함께 생활 습관을 바꾼 게 완치에 결정적이었던 것 같습니다.' }
      ],
      handwrittenImg: null
    },
    r4: {
      cat: '자율신경·공황', date: '2025.01.22',
      title: '공황장애 1년, 이제 지하철을 탈 수 있어요',
      author: '최*연 (30대, 여)', stars: 5,
      qa: [
        { q: '공황장애 증상이 어떠셨나요?',
          a: '갑자기 심장이 쿵쾅거리고 숨이 막히는 느낌이 들기 시작했습니다. 지하철, 엘리베이터, 밀폐 공간을 전혀 이용할 수 없었고 혼자 외출도 두려워졌습니다. 정신건강의학과 약을 복용해도 나아지지 않았어요.' },
        { q: '치료 과정에서 어떤 변화가 있었나요?',
          a: '체질 진단에서 목양체질로 판명되었고, 자율신경 안정에 특화된 8체질 침치료와 한약을 처방받았습니다. 한 달 후부터 수면의 질이 개선되었고, 2개월째에는 심장이 덜 두근거렸습니다. 3개월 후부터는 지하철을 혼자 탈 수 있게 됐어요.' },
        { q: '현재 상태는 어떠신가요?',
          a: '6개월 치료 후 약 없이도 거의 정상 생활을 하고 있습니다. 응급 상황처럼 느껴졌던 공황 발작이 이제는 거의 오지 않습니다. 정말 인생이 바뀐 것 같아서 주변에 많이 추천하고 있습니다.' }
      ],
      handwrittenImg: null
    },
    r5: {
      cat: '여성질환·난임', date: '2025.01.08',
      title: '3년 난임 끝에 임신 성공했습니다!',
      author: '정*영 (30대, 여)', stars: 5,
      qa: [
        { q: '난임 치료를 받게 된 경위를 알려주세요.',
          a: '결혼 후 3년간 자연임신이 되지 않아 시험관 시술을 3번 받았지만 모두 실패했습니다. AMH(난소 나이 지표)가 0.4로 매우 낮아 더 이상 시술이 어렵다는 말까지 들었습니다.' },
        { q: '수정한의원에서 어떤 치료를 받으셨나요?',
          a: '8체질 맥진 진단 후 수양체질로 판명되었습니다. 난소 기능 회복에 초점을 맞춘 체질 맞춤 한약을 처방받았고, 자궁 환경 개선을 위한 체질 침치료도 함께 받았습니다. 체질에 맞는 식이 지도도 철저히 따랐습니다.' },
        { q: '임신 성공 과정을 공유해주세요.',
          a: '한약 복용 2개월 후 생리 주기가 규칙적으로 변했고, 4개월 후 자연임신에 성공했습니다! 산부인과에서도 놀라워했습니다. 지금 임신 7개월이고 건강하게 잘 크고 있어요. 포기하지 않길 잘했습니다.' }
      ],
      handwrittenImg: null
    },
    r6: {
      cat: '소화기', date: '2024.12.30',
      title: '10년 역류성식도염 두 달 만에 좋아졌어요',
      author: '강*호 (40대, 남)', stars: 4.5,
      qa: [
        { q: '역류성식도염 증상이 어느 정도였나요?',
          a: '10년 전부터 속 쓰림, 명치 통증, 목에 뭔가 걸린 느낌이 항상 있었습니다. 위장약을 매일 복용해야 했고, 먹지 않으면 하루가 불편해서 사실상 약에 의존하는 생활이었습니다.' },
        { q: '체질 치료로 어떻게 달라졌나요?',
          a: '목음체질 진단 후, 제가 즐겨 먹던 밀가루, 돼지고기, 냉면이 목음체질에 맞지 않는 음식이라는 걸 알게 됐습니다. 식이를 바꾸고 체질 한약을 두 달 복용하니 속 쓰림이 거의 사라졌습니다.' },
        { q: '아쉬운 점이나 추가하고 싶은 말씀이 있다면?',
          a: '음식 관리를 꾸준히 하면 완전히 나을 수 있을 것 같습니다. 식이 조절이 쉽지는 않지만, 원장님이 대체 음식과 식단을 꼼꼼하게 안내해주셔서 도움이 많이 됐습니다. 10년 고민을 해결해 주셔서 감사합니다.' }
      ],
      handwrittenImg: null
    },
    r7: {
      cat: '소아성장', date: '2024.12.15',
      title: '6개월 만에 8cm 성장했어요',
      author: '오*진 학부모 (40대, 여)', stars: 5,
      qa: [
        { q: '성장 치료를 시작하게 된 계기는?',
          a: '초등 4학년인데 또래보다 키가 10cm 이상 작아서 걱정이 많았습니다. 성장판 초음파 검사를 했더니 아직 여유가 있다고 해서 적극적으로 치료를 시작하게 됐습니다.' },
        { q: '수정한의원에서 어떤 치료를 받았나요?',
          a: '아이의 체질을 진단하고 성장 한약과 성장침을 병행했습니다. 체질에 맞는 음식과 수면 습관도 지도받았어요. 치료 내내 아이가 힘들어하지 않고 잘 따라와 줬습니다.' },
        { q: '치료 결과가 어떠했나요?',
          a: '3개월 후부터 눈에 띄게 자라기 시작했고, 6개월이 지나니 총 8cm가 성장했습니다! 반에서 중간 이하였던 키 순서가 이제는 중간 이상이 됐어요. 아이도 자신감이 생겼고 저도 너무 기쁩니다.' }
      ],
      handwrittenImg: null
    },
    r8: {
      cat: '구안와사·안면마비', date: '2024.11.20',
      title: '발병 3일 만에 치료 시작해서 빠르게 회복',
      author: '윤*서 (20대, 여)', stars: 5,
      qa: [
        { q: '구안와사 발생 직후 상황을 알려주세요.',
          a: '아침에 눈이 잘 안 감기고 입이 한쪽으로 당기는 느낌이 들었습니다. 처음엔 일시적인 거라 생각했는데 거울을 보니 얼굴이 돌아가 있어서 너무 당황했어요. 발병 3일 만에 수정한의원을 찾았습니다.' },
        { q: '골든타임 치료가 실제로 도움이 됐나요?',
          a: '원장님이 구안와사는 발병 후 2주 이내 치료 시작이 회복에 결정적이라고 설명해 주셨습니다. 빨리 온 덕분에 집중 치료를 받을 수 있었고, 3주 만에 90% 이상 회복됐습니다. 친구는 치료가 늦어서 1년이 넘게 걸렸는데 저는 정말 다행이었습니다.' },
        { q: '다른 환자분들께 전하고 싶은 말씀이 있다면?',
          a: '구안와사는 절대 방치하면 안 됩니다! 조금이라도 이상하면 바로 치료를 시작하세요. 저는 빨리 치료한 덕에 흉터 없이 완전히 나았습니다. 수정한의원 원장님이 정말 친절하고 치료도 탁월합니다.' }
      ],
      handwrittenImg: null
    },
    r9: {
      cat: '대상포진후신경통', date: '2024.11.05',
      title: '2년간 잠 못 자던 통증에서 해방됐어요',
      author: '신*철 (60대, 남)', stars: 4.5,
      qa: [
        { q: '대상포진후신경통이 얼마나 오래, 심하게 지속됐나요?',
          a: '2년 전 대상포진을 앓고 나서 오른쪽 등과 옆구리에 전기가 통하는 듯한 타는 통증이 사라지지 않았습니다. 신경과, 통증의학과에서 약을 처방받았지만 통증이 50% 이상 줄지 않아 잠을 제대로 못 잤습니다.' },
        { q: '수정한의원의 복합 치료 방법이 궁금합니다.',
          a: '체질 맥진 후 토양체질로 진단받았고, 파동요법(양자퀀텀 치료), 태반약침, 체질 한약을 복합적으로 받았습니다. 처음 1개월은 큰 변화가 없어서 반신반의했는데, 2개월 후부터 통증 강도가 눈에 띄게 줄기 시작했습니다.' },
        { q: '현재 상태와 전반적인 소감을 말씀해 주세요.',
          a: '3개월 치료 후 통증이 70% 이상 감소했습니다. 이제 잠도 잘 자고, 일상적인 활동이 가능해졌습니다. 완전히 없어지진 않았지만, 관리하면서 생활할 수 있는 수준이 됐습니다. 2년을 고통받았는데 이 정도 개선이면 정말 감사합니다.' }
      ],
      handwrittenImg: null
    }
  };

  // ── 별점 렌더링 ──────────────────────────────────────────────
  function renderStars(score) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (score >= i) html += '<i class="fas fa-star" style="color:#f5a623"></i>';
      else if (score >= i - 0.5) html += '<i class="fas fa-star-half-alt" style="color:#f5a623"></i>';
      else html += '<i class="far fa-star" style="color:#f5a623"></i>';
    }
    return html;
  }

  // ── 모달 열기 ────────────────────────────────────────────────
  function openModal(id) {
    const d = REVIEWS[id];
    if (!d) return;
    const qaHtml = d.qa.map(item =>
      '<div class="rmodal-qa-item">' +
        '<div class="rmodal-q"><i class="fas fa-question-circle" style="margin-right:6px;opacity:.7"></i>' + item.q + '</div>' +
        '<div class="rmodal-a">' + item.a + '</div>' +
      '</div>'
    ).join('');

    const imgHtml = d.handwrittenImg
      ? '<div class="rmodal-img-wrap"><div class="rmodal-img-label"><i class="fas fa-pen-nib"></i> 자필 후기 원본</div><div class="rmodal-img"><img src="' + d.handwrittenImg + '" alt="자필 후기"></div></div>'
      : '<div class="rmodal-img-wrap"><div class="rmodal-img-label"><i class="fas fa-pen-nib"></i> 자필 후기 원본</div><div class="rmodal-img-placeholder"><i class="fas fa-file-alt"></i><span>자필 후기 이미지 준비 중입니다</span></div></div>';

    document.getElementById('rmodalBody').innerHTML =
      '<div class="rmodal-header">' +
        '<span class="rmodal-cat">' + d.cat + '</span>' +
        '<h2 class="rmodal-title" id="rmodalTitle">' + d.title + '</h2>' +
        '<div class="rmodal-meta">' +
          '<span><i class="fas fa-user" style="margin-right:4px;opacity:.6"></i>' + d.author + '</span>' +
          '<span><i class="fas fa-calendar-alt" style="margin-right:4px;opacity:.6"></i>' + d.date + '</span>' +
          '<span class="rmodal-stars">' + renderStars(d.stars) + '</span>' +
        '</div>' +
      '</div>' +
      '<hr class="rmodal-divider">' +
      '<div class="rmodal-qa">' + qaHtml + '</div>' +
      imgHtml;

    const modal = document.getElementById('reviewModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('rmodalClose').focus();
  }

  function closeModal() {
    document.getElementById('reviewModal').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── 이벤트 바인딩 ────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {

    // 카드 클릭 → 모달
    document.querySelectorAll('#reviewGrid .review-card').forEach(function(card) {
      function trigger() { openModal(card.dataset.id); }
      card.addEventListener('click', trigger);
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
      });
    });

    // 모달 닫기
    document.getElementById('rmodalClose').addEventListener('click', closeModal);
    document.getElementById('reviewModal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });

    // 카테고리 필터 — data-cat 정확 매칭
    document.querySelectorAll('.review-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.review-filter-btn').forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
        var cat = this.dataset.cat;
        document.querySelectorAll('#reviewGrid .review-card').forEach(function(card) {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

  });
  </script>`

  const mainContent = isLoggedIn ? reviewList : loginGate

  return headNav + `<main id="main-content">` + mainContent + `\n</main>` + afterMain
}
