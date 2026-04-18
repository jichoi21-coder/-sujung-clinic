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
  <meta name="keywords" content="수정한의원, 노원한의원후기, 노원구안와사후기, 노원아토피후기, 노원난임후기, 노원척추후기, 노원공황장애후기, 상계동치료후기, 중계동한의원후기, 8체질치료후기"/>
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

    <!-- 신뢰 통계 바 -->
    <div class="review-stats-bar">
      <div class="sec-wrap review-stats-inner">
        <div class="review-stat-item">
          <span class="review-stat-num">247<span class="review-stat-unit">건</span></span>
          <span class="review-stat-label">누적 치료후기</span>
        </div>
        <div class="review-stat-divider"></div>
        <div class="review-stat-item">
          <span class="review-stat-num">4.9<span class="review-stat-unit">점</span></span>
          <span class="review-stat-label">평균 만족도</span>
        </div>
        <div class="review-stat-divider"></div>
        <div class="review-stat-item">
          <span class="review-stat-num">30<span class="review-stat-unit">년</span></span>
          <span class="review-stat-label">8체질 임상경험</span>
        </div>
        <div class="review-stat-divider"></div>
        <div class="review-stat-item">
          <span class="review-stat-num">12<span class="review-stat-unit">개</span></span>
          <span class="review-stat-label">치료 전문 분야</span>
        </div>
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
        <div class="review-filter-group">
          <p class="review-filter-label"><i class="fas fa-filter"></i> 일반 진료</p>
          <div class="review-filter-btns">
            <button class="review-filter-btn active" data-cat="all">전체</button>
            <button class="review-filter-btn" data-cat="다이어트">체질 다이어트</button>
            <button class="review-filter-btn" data-cat="척추관절">척추·관절</button>
            <button class="review-filter-btn" data-cat="피부">피부·아토피</button>
            <button class="review-filter-btn" data-cat="소화기">소화기</button>
            <button class="review-filter-btn" data-cat="뇌신경">자율신경·뇌신경</button>
            <button class="review-filter-btn" data-cat="여성">여성질환</button>
            <button class="review-filter-btn" data-cat="성장">소아성장</button>
            <button class="review-filter-btn" data-cat="기타">기타</button>
          </div>
        </div>
        <div class="review-filter-group review-filter-group-special">
          <p class="review-filter-label review-filter-label-special"><i class="fas fa-star"></i> 특설클리닉</p>
          <div class="review-filter-btns">
            <button class="review-filter-btn review-filter-btn-special" data-cat="구안와사">구안와사·안면마비</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="편두통">만성 편두통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="대상포진">대상포진·후신경통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="천식">만성천식·마이코플라즈마</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="대장염">궤양성 대장염</button>
          </div>
        </div>
      </div>

      <!-- 자필후기 안내 배너 -->
      <div class="review-handwritten-banner">
        <i class="fas fa-pen-nib"></i>
        <span>아래 <strong>자필 후기</strong>는 환자분이 직접 손으로 작성하신 원본입니다. 이미지와 함께 원문 텍스트를 제공합니다.</span>
      </div>

      <!-- 후기 카드 그리드 -->
      <div class="review-grid summary-mode" id="reviewGrid">

        <!-- ===== 자필후기 카드 #1 — 고은주 (특설클리닉·궤양성대장염) ===== -->
        <div id="reviewCard01" class="review-card review-card-handwritten" data-cat="대장염" onclick="openReviewModal('detailModal01')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">궤양성 대장염</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">고질적인 병이 좋아졌습니다 — 병원에서도 못 고치던 궤양성 대장염</h3>
          <p class="review-story">
            궤양성 대장염을 앓고 있었고 항상 삶이 불편했으며, 수면도 잘 안 되고 힘들었습니다.
            지인이 치료받고 많이 좋아졌다고 해서 추천받아 방문했습니다.
            치료 후 자주 나오던 혈(피)이 사라지고 대장이 편안해졌어요. 몸도 가벼워지고 기분도, 마음도 편안해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 고*주 (만 49세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #2 — 김정은 (체질 다이어트, 3페이지) ===== -->
        <div id="reviewCard02" class="review-card review-card-handwritten" data-cat="다이어트" onclick="openReviewModal('detailModal02')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">체질 다이어트</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (3장)</span>
            <span class="review-date">2020.01.21</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">6개월 만에 체중 17.3kg·체지방 17.9kg 감량 — 내과 다이어트 약 부작용으로 포기했다가 8체질 디톡스로 성공</h3>
          <p class="review-story">
            내과 다이어트 약 부작용으로 불면증·우울증까지 생겼습니다. 수정한의원 8체질침 + 면역디톡스로
            68.8kg → 51.5kg, 체지방 29.3kg → 11.4kg으로 줄었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*은 (만 48세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #3 — 김지은 (피부·아토피) ===== -->
        <div id="reviewCard03" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal03')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">피부·아토피</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">어릴 때부터의 아토피가 손발가락까지 좋아졌어요 — 체질을 알고 나니 음식도 내 편이 됐습니다</h3>
          <p class="review-story">
            어릴 때부터 아토피가 있어서 손가락, 발가락에 빨갛게 올라오고 가려움증이 동반됐습니다.
            꾸준히 한약을 먹고 체질 침 치료를 병행하면서 손발가락에 남아있던 아토피·흉터가 없어졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*은 (만 24세, 여)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #4 — 박상임 (대상포진·후신경통) ===== -->
        <div id="reviewCard04" class="review-card review-card-handwritten" data-cat="대상포진" onclick="openReviewModal('detailModal04')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">대상포진·후신경통</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (3장)</span>
            <span class="review-date">2021.02</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">대상포진 후 신경통 — 대학병원·피부과 한 달 넘게 진통제·주사도 소용없었는데 면역침·파동치료로 회복했습니다</h3>
          <p class="review-story">
            유방 절명 후 대상포진이 생겨 피부과·대학병원에서 한 달 넘게 진통제와 주사를 맞았지만
            <strong>트럭 바퀴에 깔리는 듯한 압박·망치로 두드리는 통증·화상처럼 화끈거리는 느낌</strong>이 전혀 줄지 않아 결국 입원까지 했습니다.
            수정한의원 면역침·약침·파동치료 후 처음으로 통증이 피부로 느낄 만큼 줄어들어 일상으로 돌아왔습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*임 (만 54세, 남)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #5 — 이O경 (여성질환·난소물혹) ===== -->
        <div id="reviewCard05" class="review-card review-card-handwritten" data-cat="여성" onclick="openReviewModal('detailModal05')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">여성질환</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (2장)</span>
            <span class="review-date">2020.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">난소 물혹 5~6cm → 완전히 사라졌습니다 — 8체질 침과 체질한약으로</h3>
          <p class="review-story">
            2018년 건강검진에서 난소 물혹이 왼쪽 5~6cm 발견됐습니다.
            8체질 침과 체질한약을 꾸준히 받고, 2019년 겨울 건강검진 결과 난소 물혹이 말끔히 없어졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*조경 (여)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #6 — 이O숙 (척추협착증) ===== -->
        <div id="reviewCard06" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal06')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">척추협착증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">협착증으로 걷지도 못하고 발이 너무 시리고 뼈가 저리고 감각이 없어서 잠을 못자요 — 치료 후 통증이 줄고 몸이 한결 편안해졌어요</h3>
          <p class="review-story">
            협착증으로 걷지도 못하고 얼굴에 열이 많아 화난 인상으로 바뀌고, 발이 너무 시려서 감각이 없을 정도였습니다.
            지인 소개로 수정한의원에 와서 치료 후 통증이 줄고 잠도 잘 오고 몸이 한결 편안해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*숙 (만 55세, 여)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #7 — 오O근 (자율신경·공황) ===== -->
        <div id="reviewCard07" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal07')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두통·편두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">많이 좋아졌습니다! — 두통·소화불량·몸 무거움, 치료 후 몸도 마음도 가벼워졌어요</h3>
          <p class="review-story">
            머리가 무겁고 두통이 있었으며, 숨쉬기 불편하고 소화도 잘 안됐습니다.
            혈압약을 먹어도 개선이 없어 지인 소개로 8체질 치료를 받게 되었습니다.
            치료 후 두통이 없어지고 몸이 가벼워지며 잠도 잘 자고 활력이 생겼습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 오*근 (만 54세, 남)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #8 — 고O찬 (특설클리닉·궤양성대장염, 4페이지) ===== -->
        <div id="reviewCard08" class="review-card review-card-handwritten" data-cat="대장염" onclick="openReviewModal('detailModal08')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">궤양성 대장염</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 치료수기 (4장)</span>
            <span class="review-date">2016.05</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">10년 넘게 복용하던 궤양성대장염 약을 모두 끊었습니다 — 2015년 5월 치료 시작, 1년 만에 완전 회복</h3>
          <p class="review-story">
            2005년 45세에 희귀난치성 궤양성대장염을 얻어 10여 년간 대학병원 치료를 받았지만 차도가 없었습니다.
            2015년 수정한의원 8체질 치료를 시작한 지 1년 만에 10년 이상 복용하던 모든 약물을 중단했습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 고*찬 (만 55세, 남)</span>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #10 — 최0종 (뇌수종·어지럼증) ===== -->
        <div id="reviewCard10" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal10')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">어지럼증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2020.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">뇌수종으로 인한 어지럼증이 다 가셨습니다 — 비틀거림 없이 걷게 되고 생활이 편리해졌어요</h3>
          <p class="review-story">
            뇌수종으로 매일 어지럼증이 심해 일상생활이 매우 힘들었습니다.
            수정한의원 치료 후 어지럼증이 다 가시고, 비틀거림 없이 편하게 걸을 수 있게 됐습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*종 (만 67세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #9 — 홍0임 (갱년기·불면·족저근막염) ===== -->
        <div id="reviewCard09" class="review-card review-card-handwritten" data-cat="여성" onclick="openReviewModal('detailModal09')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">갱년기·불면</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">갱년기 불면과 족저근막염이 함께 좋아졌습니다 — 잠도 잘 자고 생활에 불편함이 없어졌어요</h3>
          <p class="review-story">
            갱년기로 잠을 못 자고 자다 깨는 일이 잦았습니다. 족저근막염까지 겹쳐 생활이 매우 힘들었는데,
            체질침 한약 치료 후 잠도 잘 자고 발 통증도 없어져 생활하는 데 불편함이 없어졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 홍*임 (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #11 — 지0숙 (디스크 협착증) ===== -->
        <div id="reviewCard11" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal11')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">디스크 협착증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">허리·옆구리 통증이 사라졌습니다 — 앉고 서는 것도 편해지고 몸에 활력이 생겼어요</h3>
          <p class="review-story">
            허리와 양 옆구리가 터질 듯이 아파 앉거나 서 있는 것도 힘들었습니다.
            한약과 침 치료 후 통증이 사라지고 몸에 활력이 생겨 생활이 편안해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 지*숙 (만 63세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #12 — 서0영 (무릎관절염) ===== -->
        <div id="reviewCard12" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal12')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎관절염</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">무릎통증이 너무나 심해서 걷지를 못했어요 — 한약 먹으면서 소화불량·허리통증까지 함께 좋아졌습니다</h3>
          <p class="review-story">
            무릎통증이 너무나 심해 좌식(양반다리)도 못 하고 걷지도 힘들었습니다.
            체질 한약을 먹으면서 소화불량과 허리통증까지 함께 좋아졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 서*영 (만 45세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #13 — 발0미 (항암후유증·자율신경) ===== -->
        <div id="reviewCard13" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal13')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">항암후유증·면역</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">한여름에도 난방기를 켰던 추위가 사라졌습니다 — 항암 후 면역저하와 피로가 체질 한약으로 함께 좋아졌어요</h3>
          <p class="review-story">
            유방암 항암·방사선 치료 후 면역저하로 속까지 추워서 한여름에도 난방기를 켰을 정도였습니다.
            체질 약침·한약 치료 후 추위가 사라지고 면역력도 회복되어잔습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*미 (만 47세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #14 — 이*순 (무릎관절염) ===== -->
        <div id="reviewCard14" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal14')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎관절염</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.02</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">무릅이 아파서 걷지도 못하고 잠도 못 잤어요 — 메선 치료 후 다리에 힘이 생기고 계단도 잘 오르내릴 수 있어요</h3>
          <p class="review-story">
            3년동안 무릅 통증으로 벽을 잡고 일어나고, 잘 때도 통증이 계속되었습니다.
            메선 치료 후 다리에 힘이 생기고 계단도 편하게 오르내릴 수 있게 되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 73세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #15 — 전☌복 (두드러기·피부아토피) ===== -->
        <div id="reviewCard15" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal15')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두드러기·피부</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">차라리 아픈게 낫지 가려운 건 더 못 참겠더라구요 — 3개월 반 치료로 두드러기·가려움·열감이 다 사라졌습니다</h3>
          <p class="review-story">
            세 군데 피부과에서 치료해도 반복되던 심한 두드러기와 가려움.
            체질침·면역치료 후 3개월 반 만에 두드러기·가려움·열감이 완전히 사라졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 전*복 (만 68세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #16 — 조☌희 (만성천식·마이코플라즈마) ===== -->
        <div id="reviewCard16" class="review-card review-card-handwritten" data-cat="천식" onclick="openReviewModal('detailModal16')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">만성천식·마이코플라즈마</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">숨이 차서 걷지가 힘들어요 — 체질 한약·침 치료 3개월 후 만성천식이 좋아지고 집까지 편하게 걷게 되었어요</h3>
          <p class="review-story">
            대학병원에서 몇 년을 다녀도 낫지 않던 만성천식이 체질 한약과 추나요법 3개월 후 크게 좋아졌습니다. 다리도 조금만 걸어도 숨이 차던 것이 이제는 집까지 너끈하게 걸어 다닙니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 조*희 (만 80세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #17 — 남*현 (허리 협착증·디스크) ===== -->
        <div id="reviewCard17" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal17')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">척추관협착증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.10</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">허리 협착증으로 보행이 힘들었어요 — 치료 후 통증이 사라지고 보행거리가 늘어났습니다</h3>
          <p class="review-story">
            허리 협착증으로 걷기조차 힘들었는데, 수정한의원 치료 후 보행 중 통증이 사라지고 일상생활을 할 수 있게 되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 남*현 (만 50세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #18 — 이*희 (뇌경색 후유증) ===== -->
        <div id="reviewCard18" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal18')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">뇌경색 후유증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">손도 안펴지고 걷지도 못했던 내가 이제 달리기도 하고 피아노도 칠수 있어요</h3>
          <p class="review-story">
            14살 때 뇌경색으로 왼쪽 팔·다리·손·발에 마비가 왔습니다. 2년간 수정한의원 치료 후 달리기도 하고 피아노도 칠 수 있게 되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*희 (만 16세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- ===== 자필후기 카드 #19 — 장*혜 (소화불량·소화기) ===== -->
        <div id="reviewCard19" class="review-card review-card-handwritten" data-cat="소화기" onclick="openReviewModal('detailModal19')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">소화불량</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">음식을 먹으면 명치가 걸려 내려가지 않아 고통스러웠어요 — 체질 한약·침 치료 후 소화가 잘 되어 건강한 생활을 하게 되었어요</h3>
          <p class="review-story">
            명치에 음식이 걸려 내려가지 않을 정도로 소화불량이 심했습니다. 체질 한약과 침 치료 후 소화가 잘 되어 건강한 생활을 하게 되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 장*혜 (만 59세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #21 -->
        <div id="reviewCard21" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal21')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두통·편두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">두통과 뒷머리 뻐근함, 수정한의원 체질침 치료로 머리가 맑아졌어요</h3>
          <p class="review-story">
            뒷머리가 뻐근하고 두통이 심했으며 컴퓨터 작업 후 더욱 심해졌습니다. 체질침 치료 후 두통과 목 뻐근함이 사라지고 머리가 맑아졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*성 (만 24세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
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


  <!-- 상세 모달 #01 -->
  <div id="detailModal01" class="review-detail-modal" onclick="closeReviewModal(event, this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal01')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">궤양성 대장염</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">고질적인 병이 좋아졌습니다 — 병원에서도 못 고치던 궤양성 대장염</h3>
      <p class="review-story" style="margin-bottom:18px;">
        궤양성 대장염을 앓고 있었고 항상 삶이 불편했으며, 수면도 잘 안 되고 힘들었습니다.
        지인이 치료받고 많이 좋아졌다고 해서 추천받아 방문했습니다.
        치료 후 자주 나오던 혈(피)이 사라지고 대장이 편안해졌어요. 몸도 가벼워지고 기분도, 마음도 편안해졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 불편하셨나요?</span>
          <span class="review-qa-a">궤양성 대장염을 앓고 있었고 항상 삶이 불편했습니다. 수면도 잘 안 되고 힘들었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유는요?</span>
          <span class="review-qa-a">지인이 치료를 받았는데 많이 좋아졌다고 해서 추천받아 방문하게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 개선된 점은 무엇인가요?</span>
          <span class="review-qa-a">자주 나오던 혈(피)이 사라지고 대장이 편안해졌습니다. 잠도 편안해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 삶의 질은 어떻게 달라지셨나요?</span>
          <span class="review-qa-a">수면 향상, 개운해짐, 손발도 잘 되고, 몸이 가벼워졌습니다. 기분도 좋아지고 마음도 편안해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 하고 싶은 말은요?</span>
          <span class="review-qa-a">고질적인 병이었는데 (병원에서도 고치지 못해) 많이 좋아져서 감사합니다. 수정한의원은 친절하고 가족같아요. 하나하나 세심하게 대해주시고, 원장님의 치료가 이 한의원의 성화를 함께 만들어 주시니 정말 감사합니다. ^^</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-01-goeunjoo.jpg" alt="고은주 자필 치료후기 원본" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 고*주 (만 49세, 여)</span>
        <div class="review-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #02 -->
  <div id="detailModal02" class="review-detail-modal" onclick="closeReviewModal(event, this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal02')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">체질 다이어트</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (3장)</span>
        <span class="review-date">2020.01.21</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">6개월 만에 체중 17.3kg·체지방 17.9kg 감량 — 내과 다이어트 약 부작용으로 포기했다가 8체질 디톡스로 성공</h3>
      <p class="review-story" style="margin-bottom:18px;">
        내과 처방 다이어트 약의 부작용으로 배변장애·불면증·우울증까지 생겼습니다.
        수정한의원 8체질침 + 면역디톡스 프로그램으로 6개월 만에 68.8kg → 51.5kg, 체지방 29.3kg → 11.4kg으로 줄었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 내원 동기</span>
          <span class="review-qa-a">8체질 면역디톡스 프로그램을 통해 건강하게 체중을 감량하고 유지하고 계시다는 지인의 소개를 받고 방문했습니다. 가장 기억에 남는 원장님 말씀은 <strong>"생애 마지막 다이어트가 될 것이다"</strong>, <strong>"꾸준히 하면 저절로 체지방이 빠지는 몸이 된다"</strong>는 것이었습니다. 그 말씀에 불안한 마음이 사라지고 희망과 용기가 생기면서, 반드시 체중감량을 하겠다는 의지가 생겼습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 내원 당시 몸 상태 · 타 병원 치료 내역</span>
          <span class="review-qa-a">
            <strong>내원 날짜:</strong> 2020년 5월 1일<br><br>
            <strong>[내원 당시 몸 상태]</strong> 40대 중반부터 체중이 급격하게 늘어나기 시작했습니다. 약에 내성이 생겨 효과도 없었으며, 부작용으로 인한 혈액순환 장애와 불면증, 배변장애, 갱년기 증상 등 생활의 불편함이 많았습니다. 체질 검사를 통해 몸에 해로운 음식을 많이 먹고 있었다는 것을 알게 되었고, 인바디를 통한 몸 상태는 너무 충격적이었습니다. 체지방은 표준 이상이었고, 살이 찔 수밖에 없는 몸 상태였습니다.<br><br>
            <strong>[타 병원 치료 내역]</strong> 내과에서 처방해주는 다이어트 약을 복용해 한때 잠깐 효과가 있었으나 부작용만 심해지고 체중 감량의 효과는 보지 못했습니다. 이로 인한 짜증·부당한 기침, 우울증까지 생기게 되었습니다.
          </span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 수정한의원 치료 과정</span>
          <span class="review-qa-a">
            <strong>[체질 검사]</strong> 맥진 검사를 통해 저의 체질을 알게 되었습니다. 체질에 유익한 음식과 해로운 음식을 알게 되었고, 체질침을 통해 다이어트에 도움이 되는 침을 맞았습니다.<br><br>
            <strong>[한약]</strong> 한약을 복용하여 다이어트 하는 동안 기력이 소진되지 않도록 기력을 보강해주면서 다이어트에 도움이 되는 감량 한약을 복용하였습니다.<br><br>
            <strong>[면역디톡스 프로그램]</strong> 디톡스 다이어트를 10일 동안 제품과 한약을 <strong>함께</strong> 복용하면서 이침·몸침 치료를 아침–점심–저녁 정해진 시간 동안 진행하였습니다. 처음에는 식사를 하지 않게 되어 배고픔을 자주 느꼈으나 점점 거짓 배고픔처럼 식사를 하지 않아도 배가 고프지 않은 느낌을 갖게 되었습니다. 제품에 익숙해지면서부터 몸이 가벼워지고 체형이 좋아지는 것을 느꼈습니다. 제품은 한 끼 식사 대용의 영양분과 포만감이 충분히 있었습니다.<br><br>
            <strong>[일상 병행]</strong> 디톡스와 밥을 병행하면서 다시 정상화하였습니다. 디톡스 프로그램은 저에게 맞게 설계해주셨고, 수시로 전화와 문자로 초반에 힘든 저에게 몸의 상태 변화에 대해 자세히 설명해주시고 꼼꼼하게 디톡스 할 수 있게 도와주셨습니다.
          </span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 실제 체중·체지방 변화 (자필 기록)</span>
          <span class="review-qa-a">
            <span class="review-weight-table">
              <span>시작 (2020.5.10) <strong>68.8kg</strong> · 체지방 29.3kg</span>
              <span>→ 7일 후 (5.16) <strong>67.0kg</strong> · 체지방 26.8kg</span>
              <span>→ 10일 후 (5.23) <strong>64.0kg</strong> · 체지방 25.1kg</span>
              <span>→ 1개월 후 (6.10) <strong>61.4kg</strong> · 체지방 22.8kg</span>
              <span>→ 2개월 후 (7.15) <strong>58.0kg</strong> · 체지방 19.3kg</span>
              <span>→ 3개월 후 (8.12) <strong>56.4kg</strong> · 체지방 15.7kg</span>
              <span>→ 4개월 후 (9.11) <strong>54.2kg</strong> · 체지방 13.8kg</span>
              <span>→ 5개월 후 (10.31) <strong>52.7kg</strong> · 체지방 12.4kg</span>
              <span>→ 6개월 후 (11.21) <strong>51.5kg</strong> · 체지방 11.4kg</span>
              <span class="review-weight-result">6개월 총 <strong>체중 -17.3kg · 체지방 -17.9kg 감량!</strong></span>
            </span>
          </span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment-dots"></i> 수정한의원에 하고 싶은 말</span>
          <span class="review-qa-a">목표체중을 설정하고 1kg씩 끊임없이 관리하는 생활을 지키며 노력하게 되었습니다. 정말 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <div class="review-detail-gallery">
          <img id="dm02-main" src="/static/reviews/review-02-kimjungeun-p1v2.jpg" alt="체질 다이어트 자필후기 1페이지" class="review-detail-img-main" onclick="openImgFull(this.src)">
          <div class="review-detail-thumbs">
            <img src="/static/reviews/review-02-kimjungeun-p1v2.jpg" alt="1페이지" class="review-detail-thumb active" onclick="switchDetailImg('dm02-main',this)">
            <img src="/static/reviews/review-02-kimjungeun-p2.jpg" alt="2페이지" class="review-detail-thumb" onclick="switchDetailImg('dm02-main',this)">
            <img src="/static/reviews/review-02-kimjungeun-p3.jpg" alt="3페이지" class="review-detail-thumb" onclick="switchDetailImg('dm02-main',this)">
          </div>
        </div>
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지 클릭하면 원본 크기로 | 썸네일로 페이지 전환</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 김*은 (만 48세, 여)</span>
        <div class="review-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #03 -->
  <div id="detailModal03" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal03')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">피부·아토피</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">어릴 때부터의 아토피가 손발가락까지 좋아졌어요 — 체질을 알고 나니 음식도 내 편이 됐습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        어릴 때부터 아토피가 있어서 손가락·발가락에 빨갛게 올라오고 가려움증이 동반됐습니다.
        밤에는 바닥이 자꾸 갈라져 양말을 신으면 아팠고, 극심할 때는 흉터가 생겨 부끄러웠습니다.
        한약·체질침 치료 후 손발가락 아토피·홍진이 없어졌고, 스트레스를 받아도 긁지 않게 됐습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">어릴 때부터 아토피가 있어서 손가락과 발가락에 빨갛게 올라오고 가려움증이 동반됐습니다. 밤만 되면 바닥이 자꾸 갈라져서 양말을 신으면 아팠습니다. 그리고 긁다 보면 흉이 져서 피부도 부분부분 어두워졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">아토피를 계속 안고 가야 하나 고민이었는데 체질치료로 개선할 수 있을 것 같았습니다. 가족들도 치료를 같이 받고 있던 터라 믿음이 더 갔습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">한약을 꾸준히 먹고, 침 치료도 병행하여 손가락과 발가락에 질질 남아있던 아토피·홍진이 없어졌습니다. 무엇보다 체질을 알게 되어 식이요법을 할 때도 효율적으로 내게 맞는 식이를 할 수 있었고, 채소와 가까워진 게 가장 좋았습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">아토피로 겨울이 되면 발바닥이 갈라지고 각질도 떨어졌는데 많이 호전되어 신발을 신을 때도 아프지 않고, 발바닥도 깨끗해졌습니다. 시험기간이나 스트레스 받는 날이면 많이 긁었는데 치료를 받은 후로 긁지 않습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment-dots"></i> 수정한의원에 하고 싶은 말</span>
          <span class="review-qa-a">항상 밝은 미소로 대해주시고 체질치료 하면서 궁금한 것들 많이 여쭤봤습니다. 아토피가 호전되면서 같이 응원해주셔서 감사합니다. ^^</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-03-kimjieun-v2.jpg" alt="아토피 자필후기 원본" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 김*은 (만 24세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #04 -->
  <div id="detailModal04" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal04')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">대상포진·후신경통</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.02</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">대상포진 후 신경통 — 대학병원·피부과 한 달 넘게 진통제·주사도 소용없었는데 면역침·파동치료로 회복했습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        유방 절명 후 대상포진이 발생해 피부과·대학병원에서 마약성 진통제·주사를 한 달 넘게 맞았지만
        극심한 통증과 23일간의 수면장애가 전혀 줄지 않아 결국 대학병원에 입원했습니다.
        지인 소개로 수정한의원에서 면역침·약침·파동치료를 시작한 후 처음으로 통증이 줄기 시작했고,
        육체적·정신적으로 안정을 되찾아 일상으로 돌아오게 됐습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 내원 당시 통증이 어느 정도였나요?</span>
          <span class="review-qa-a">
            무엇으로 표현해야 정확할지 모를 만큼 극심한 통증이었습니다.<br><br>
            <span style="background:#fff3cd; padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">🚛 <strong>자동차 바퀴가 아닌, 거대한 화물트럭 바퀴가 지나가는 듯한 압박감</strong></span><br>
            <span style="background:#fff3cd; padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">🔨 <strong>망치로 두드릴 때 그 뼈를 으깨는 듯한 통증</strong></span><br>
            <span style="background:#fff3cd; padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">🔥 <strong>화상을 입었을 때처럼 화끈거리며 욱신욱신 쑤시는 느낌</strong></span><br><br>
            세 가지 종류의 통증이 동시에 밀려오는 상태였습니다. 1월 12일부터 약국 진통제, 정형외과 주사, 피부과 마약성 진통제까지 맞았지만 전혀 차도가 없었고, 23일간 수면장애로 체력이 완전히 고갈된 상태였습니다.
          </span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료 후 달라진 점은?</span>
          <span class="review-qa-a">2월 8일 오전 피부과 주사 후 통증이 조금 줄었다는 느낌을 받았고, 그날 오후 수정한의원에 와서 면역침·약침·파동치료가 시작됐습니다. 하루(2/8), 이틀(2/9), 사흘(2/10) 치료 후 통증이 피부로 느낄 만큼 줄어들기 시작했으며, 원장님의 정성스러운 치료와 간호사 선생님들의 간호로 회복의 속도가 신기할 정도로 빠르게 나타나고 있습니다. 지금은 육체적·정신적으로 안정을 되찾아 일상으로 돌아가고 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 원문 전체 내용</span>
          <span class="review-qa-a">
            <strong>[발병 및 타 병원 경과]</strong> 유방 절명 후 2021년 1월 12일부터 약국에서 소염·진통제를 복용했습니다. 3일째 통증이 너무 심해 정형외과에서 진통제 주사와 물리치료를 받았고, 1월 20일 가슴 밑에 빨간 반점이 여러 선으로 나타났습니다. 피부과에서 대상포진 진단 후 마약성 진통제를 처방받았지만 통증이 가라앉지 않았고, 대학병원에서 치료를 받으라는 말씀과 신경차단 수술 안내까지 매우 미우라하셨습니다.<br><br>
            <strong>[대학병원 입원]</strong> 대학병원에서 처방받은 후 10일째 되던 날 결국 입원하여 집중 치료를 받게 됐습니다. 통증은 가라앉지 않았고, 23일 동안 수면장애로 체력이 점점 나빠졌습니다. 입원 3일째 되던 날 오전 6시부터 맞게 된 링거주사가 가슴 통증과 호흡곤란을 일으켜 9시 30분경에 주사를 멈추고 퇴원하게 됐습니다. 2월 5일 지인의 소개로 피부과에 가서 대상포진 치료를 위해 7일분의 약을 처방받고 주사를 맞았습니다. 2월 6일은 피부과 휴진이어서 주사를 맞지 못했지만 토요일은 진통 없이 잘 지나갔고, 일요일에는 진통이 왔지만 참을 수 있을 만큼 아팠습니다. 조금씩 통증의 수치가 낮아지기 시작한 것입니다. 2월 8일 오전에 피부과에 가서 주사를 맞았고, 진통이 조금 줄었다는 느낌을 받았습니다.<br><br>
            <strong>[수정한의원 치료]</strong> 2월 8일 오후 수정한의원에 와서 원장님의 상담과 치료가 시작됐습니다. 면역침과 한약을 처방해 주셔서 희망을 갖고 하루(2/8), 이틀(2/9), 사흘(2/10) 면역침·약침·파동치료가 진행됐습니다.<br>
            <span style="background:#fff3cd; padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;"><strong>🚛 트럭 바퀴에 깔리는 듯한 압박, 🔨 망치로 두드리는 듯한 통증, 🔥 화상처럼 화끈거리는 느낌</strong> — 이 세 가지 극심한 통증이 피부로 느낄 만큼 줄어들기 시작했습니다.</span><br><br>
            원장님의 정성스러운 치료와 간호사 선생님들의 간호로 회복의 속도가 신기할 정도로 빠르게 나타나고 있습니다.<br><br>
            <strong>[수정한의원에 하고 싶은 말]</strong> 저의 가족에게 수정한의원은 원장님께 상담하고 진료를 받으면 어느 병원에서도 치료가 어려운 증상도 반드시 고칠 수 있고 꼭 회복할 수 있다는 믿음으로 치료를 받습니다. 바이러스로 인해 손상된 신경을 원장님의 면역침과 약침·파동치료를 통해 다시 회복된 것에 감사드리며, 많은 환자들이 수정한의원을 통해 완쿈하시길 기원드립니다.
          </span>
        </div>
      </div>
      <div class="review-detail-images">
        <div class="review-detail-gallery">
          <img id="dm04-main" src="/static/reviews/review-04-parksangim-p1.jpg" alt="대상포진후신경통 자필후기 1페이지" class="review-detail-img-main" onclick="openImgFull(this.src)">
          <div class="review-detail-thumbs">
            <img src="/static/reviews/review-04-parksangim-p1.jpg" alt="1페이지" class="review-detail-thumb active" onclick="switchDetailImg('dm04-main',this)">
            <img src="/static/reviews/review-04-parksangim-p2v2.jpg" alt="2페이지" class="review-detail-thumb" onclick="switchDetailImg('dm04-main',this)">
            <img src="/static/reviews/review-04-parksangim-p3.jpg" alt="3페이지" class="review-detail-thumb" onclick="switchDetailImg('dm04-main',this)">
          </div>
        </div>
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지 클릭하면 원본 크기로 | 썸네일로 페이지 전환</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 박*임 (만 54세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #05 -->
  <div id="detailModal05" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal05')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">여성질환</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (2장)</span>
        <span class="review-date">2020.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">난소 물혹 5~6cm → 완전히 사라졌습니다 — 8체질 침과 체질한약으로</h3>
      <p class="review-story" style="margin-bottom:18px;">
        2018년 건강검진에서 난소 물혹이 왼쪽 5~6cm, 오른쪽 2~3cm 발견됐습니다.
        몸에 맞지 않는 음식을 멀리하고 8체질 침을 맞으며 1년에 3번씩 체질한약을 복용했습니다.
        2019년 겨울 건강검진 결과 난소 물혹이 말끔히 없어졌다는 기쁜 소식을 들었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떻게 치료하셨나요?</span>
          <span class="review-qa-a">8체질 침과 체질한약을 꾸준히 받았습니다. 금음체질로 몸에 해로운 음식(고기류 등)을 철저히 멀리하고, 생선·어패류·채소·과일 위주로 식단을 바꿨습니다. 요가와 평지 산책도 꾸준히 했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료 결과는 어떻게 되셨나요?</span>
          <span class="review-qa-a">2019년 겨울 검진에서 난소 물혹이 완전히 없어졌다는 결과를 받았습니다. 수정한의원의 도움이 없었다면 기대할 수 없는 결과였습니다. 두 아이를 자연분만으로 낳을 만큼 건강을 유지해 온 것도 97년부터 꾸준히 다닌 덕분이라 생각합니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 하고 싶은 말씀은요?</span>
          <span class="review-qa-a">수정한의원을 만난 것은 저에게 행운이나 다름없습니다. 건강관리는 수정한의원과 함께 동행하는 것이 가장 좋은 친구가 아닐까요. 원장님과 간호사님들께 온 마음으로 감사드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <div class="review-detail-gallery">
          <img id="dm05-main" src="/static/reviews/review-05-iohkyung-p1.jpg" alt="난소물혹 자필후기 1페이지" class="review-detail-img-main" onclick="openImgFull(this.src)">
          <div class="review-detail-thumbs">
            <img src="/static/reviews/review-05-iohkyung-p1.jpg" alt="1페이지" class="review-detail-thumb active" onclick="switchDetailImg('dm05-main',this)">
            <img src="/static/reviews/review-05-iohkyung-p2.jpg" alt="2페이지" class="review-detail-thumb" onclick="switchDetailImg('dm05-main',this)">
          </div>
        </div>
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지 클릭하면 원본 크기로 | 썸네일로 페이지 전환</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 이*조경 (여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #06 -->
  <div id="detailModal06" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal06')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추협착증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">협착증으로 걷지도 못하고 발이 너무 시리고 뼈가 저리고 감각이 없어서 잠을 못자요 — 치료 후 통증이 줄고 몸이 한결 편안해졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        협착증으로 걷지도 못하고 얼굴에 열이 많아 화난 인상으로 바뀌고, 발이 너무 시려서 감각이 없을 정도였습니다.
        지인 소개로 수정한의원에 와서 치료 후 통증이 줄고 잠도 잘 오고 몸이 한결 편안해졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 불편하셨나요?</span>
          <span class="review-qa-a">협착증으로 걷지도 못하고, 얼굴에 열이 많아 화난 인상으로 바뀌고, 발이 너무 시려서 감각이 없을 정도였습니다. 선풍기 앞에서는 뼈가 저려서 고통스러워 잠도 못 잤습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 개선된 점은 무엇인가요?</span>
          <span class="review-qa-a">얼굴과 등의 통증이 없어지고, 잠을 잘 자게 되었습니다. 몸이 한결 편안해지고 생활이 훨씬 수월해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 삶의 질은 어떻게 달라지셨나요?</span>
          <span class="review-qa-a">밤에 너무 시려서 수면이 힘들었는데, 이제는 편안하게 잠을 잘 수 있습니다. 약 없이도 잘 지내고 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 하고 싶은 말씀은요?</span>
          <span class="review-qa-a">원장 선생님, 감사드립니다. 편안하게 치료받을 수 있게 해주셔서 감사합니다. 꾸준히 치료받겠습니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-06-leesuk.jpg" alt="척추·팔저림 자필후기 원본" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 이*숙 (만 55세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #07 -->
  <div id="detailModal07" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal07')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">두통·편두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">많이 좋아졌습니다! — 두통·소화불량·몸 무거움, 치료 후 몸도 마음도 가벼워졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        머리가 무겁고 두통이 있었으며, 숨쉬기 불편하고 소화도 예전과 다르게 잘 안됐습니다.
        혈압약을 먹어도 개선이 없어 지인 소개로 8체질 치료를 받게 되었습니다.
        치료 후 두통이 없어지고 몸이 가벼워지며, 잠도 잘 자고 활력이 생겼습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 불편하셨나요?</span>
          <span class="review-qa-a">머리가 무겁고 두통이 있었습니다. 가끔 몸이 축 처지고, 숨이 좀 막히는 느낌에 등 증상이 심했습니다. 소화도 예전과 다르게 잘 안됐습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유는요?</span>
          <span class="review-qa-a">혈압약을 먹는데도 개선된 점이 없었습니다. 지인을 통해 알게 된 8체질 치료의 효과를 느껴 치료를 받기로 했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 개선된 점은 무엇인가요?</span>
          <span class="review-qa-a">무거웠던 머리가 많이 나아졌습니다. 두통도 없어지고 몸이 가벼워졌습니다. 잠도 잘 자고 아침에 일어날 때도 좋아졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 삶의 질은 어떻게 달라지셨나요?</span>
          <span class="review-qa-a">신체적으로 건강해지니 정신·스트레스 내성이 더 강해진 느낌입니다. 직장일에 집중도도 생기고 의욕으로 일하게 됩니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 하고 싶은 말씀은요?</span>
          <span class="review-qa-a">평생 건강관리에 필요한 한의원 같습니다. 좋은 집에서 가까워서 자주 다닐 수 있으면 좋겠습니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-07-ohseonggeun.jpg" alt="자율신경 자필후기 원본" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 오*근 (만 54세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #08 -->
  <div id="detailModal08" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal08')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">궤양성 대장염</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 치료수기 (4장)</span>
        <span class="review-date">2016.05</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">10년 넘게 복용하던 궤양성대장염 약을 모두 끊었습니다 — 2015년 5월 치료 시작, 1년 만에 완전 회복</h3>
      <p class="review-story" style="margin-bottom:18px;">
        2005년 45세에 희귀난치성 질환인 궤양성대장염을 얻어 10여 년간 많은 고통과 어려움을 겪으며 병마와 싸워왔습니다.
        대학병원에서 수개월 치료받았지만 차도가 없어 스테로이드 주사로 버텼습니다.
        2015년 5월, 수정한의원 최원장님을 만나 8체질 치료를 시작한 지 1년 만에
        10년 이상 복용하던 궤양성대장염 치료제·약물을 모두 중단했습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 발병 당시 상황은 어땠나요?</span>
          <span class="review-qa-a">발병 초기에 화장실 출입이 잦아지고 배변 시 곱과 혈변이 동반되었습니다. 점차 출혈이 심해져 대학병원으로 의뢰되었고, 이후 10여 년간 스테로이드 주사로 버티며 각종 약물을 복용했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떻게 수정한의원을 알게 되셨나요?</span>
          <span class="review-qa-a">2015년 5월, 근무하던 보건지소와 MOU를 맺은 노원구한의사회 간담회 자리에서 수정한의원 최원장님을 처음 뵙게 되었습니다. 원장님께서 궤양성대장염도 충분히 치료 가능한 질병이라고 희망을 주셨습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료 과정은 어떠했나요?</span>
          <span class="review-qa-a">본격적인 치료에 앞서 2주간의 디톡스 기간을 가졌습니다. 처음 2~3일은 고통스러워 포기하고 싶었지만, 이후 침치료·약물치료와 함께 면역제·유산균 등을 병행 복용했습니다. 치료 7개월째에 눈에 띄게 좋아짐을 느꼈고, 1년 후 10년 이상 복용하던 약을 모두 중단했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료 결과는 어떻게 되셨나요?</span>
          <span class="review-qa-a">2015년 5월 16일 치료 시작 후 꼭 1년이 넘어 궤양성대장염 치료제·양약을 모두 중단했습니다. 지금은 건강 상태에 아무 이상이 없으며, 생활하는 데도 전혀 불편함이 없습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 하고 싶은 말씀은요?</span>
          <span class="review-qa-a">오랜 시간 체질개선·음식섭취 등의 과정을 통해 병을 고칠 수 있도록 믿음과 확신을 갖게끔 용기와 격려를 아끼지 않으시고, 열정과 정성을 다해 세심한 배려로 치료해 주신 수정한의원 최원장님께 진심으로 감사드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <div class="review-detail-gallery">
          <img id="dm08-main" src="/static/reviews/review-08-goyoungchan-p1.jpg" alt="궤양성대장염 치료수기 1페이지" class="review-detail-img-main" onclick="openImgFull(this.src)">
          <div class="review-detail-thumbs">
            <img src="/static/reviews/review-08-goyoungchan-p1.jpg" alt="1페이지" class="review-detail-thumb active" onclick="switchDetailImg('dm08-main',this)">
            <img src="/static/reviews/review-08-goyoungchan-p2.jpg" alt="2페이지" class="review-detail-thumb" onclick="switchDetailImg('dm08-main',this)">
            <img src="/static/reviews/review-08-goyoungchan-p3.jpg" alt="3페이지" class="review-detail-thumb" onclick="switchDetailImg('dm08-main',this)">
            <img src="/static/reviews/review-08-goyoungchan-p4.jpg" alt="4페이지" class="review-detail-thumb" onclick="switchDetailImg('dm08-main',this)">
          </div>
        </div>
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지 클릭하면 원본 크기로 | 썸네일로 페이지 전환</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 고*찬 (만 55세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #16 -->
  <div id="detailModal16" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal16')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">만성천식·마이코플라즈마</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.07</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">숨이 차서 걷지가 힘들어요 — 체질 한약·침 치료 3개월 후 만성천식이 좋아지고 집까지 편하게 걷게 되었어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        상계동 조*희입니다. 대학병원에서 몇 년을 다녀도 낫지 않던 만성천식이 체질 한약·침 치료 3개월 후 크게 좋아졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 본인 소개 및 증상</span>
          <span class="review-qa-a">상계동에 사는 조*희입니다. 체질이 금양체질로 만성천식이 심한 편이고 팔·다리가 아파 대학병원에서 몇 년 동안 다녔지만 약만 먹고 낫지는 않고 속이 안 좋아졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 내원 계기</span>
          <span class="review-qa-a">수정한의원이 상계동에 새로 생겼다는 소식을 듣고 8체질과 침 치료가 있는 곳이라 하여 딸과 함께 오게 되었습니다. 기존에 다니시던 분들이 원장님이 당고개 쪽에서 20년 넘게 하셨는데 치료 잘 하시기로 소문이 난 분이라 하여 딸의 권유로 11월 초부터 다니기 시작했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료 경과 및 개선</span>
          <span class="review-qa-a">체질이 금양체질이라서 먼저 독소를 제거해 주는 한약을 꾸준히 먹고 추나요법을 꾸준히 받았더니 3개월 후 아주 많이 좋아졌습니다. 천식도 좋아지고 팔은 올리지도 못했는데 많이 올라갑니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">다리도 조금만 걸어도 숨도 차고 어딘 앉을 데를 찾아 다녕는데 지금은 집까지 너끈하게 걸어 다닙니다. 이제 슬슬 여행 다니며 살아볼까 합니다. 예전에는 꿈도 못 꿀 일이네요!</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">수정한의원 원장님 너무나 감사합니다. 새 삶을 살게 해 주셔서요 ♥♥ 또 함께 해 주시는 직원분들도 다들 천사들입니다. 행복하게 다니고 있습니다. 감사합니다!</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-16-jochui-p1.jpg" alt="만성천식 자필후기 1페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <img src="/static/reviews/review-16-jochui-p2.jpg" alt="만성천식 자필후기 2페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 조*희 (만 80세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #21 -->
  <div id="detailModal21" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal21')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">두통·편두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">두통과 뒷머리 뻐근함, 수정한의원 체질침 치료로 머리가 맑아졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        뒷머리가 뻐근하고 두통이 심했으며 컴퓨터 작업 후 더욱 심해졌습니다. 체질침 치료 후 두통과 목 뻐근함이 사라지고 머리가 맑아졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">뒷머리가 뻐근하고 두통이 심했습니다. 컴퓨터 작업을 오래 하면 더욱 심해져 머리에 안개가 끼는 것 같은 답답함도 있었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">온라인 검색을 통해 수정한의원을 알게 되어 방문하게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">두통과 뒷머리 뻐근함이 줄어들고, 머리에 안개 끼는 느낌이 사라졌습니다. 전반적인 에너지도 개선되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">컴퓨터 작업을 오래 해도 두통 없이 집중할 수 있게 되었습니다. 업무 효율도 많이 올라갔습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">원장님과 스탭분들 덕분에 두통에서 벗어났습니다. 정말 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-21-leeseong-p1.jpg" alt="두통·편두통 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 이*성 (만 24세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #19 -->
  <div id="detailModal19" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal19')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">소화불량</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">음식을 먹으면 명치가 걸려 내려가지 않아 고통스러웠어요 — 체질 한약·침 치료 후 소화가 잘 되어 건강한 생활을 하게 되었어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        명치에 음식이 걸려 내려가지 않을 정도로 소화불량이 심했습니다. 체질 한약과 침 치료 후 소화가 잘 되어 건강한 생활을 하게 되었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">소화가 안 되는 증상이 너무 심했습니다. 음식을 먹으면 명치가 걸려 내려가지 않아 너무 고통스러웠습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">친구의 소개로 수정한의원을 알게 되었고, 2년 전에 치료를 받아 상태가 호전된 경험이 있어 다시 병원을 찾게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">원장님께서 체질을 분석해 주신 체질에 맞는 음식을 먹고, 한약과 침치료를 통해 소화가 잘 되게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">소화가 잘 되어 잘 먹게 되어 건강한 생활을 하게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">좋은 약과 침 치료로 건강을 찾게 해주셔서 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-19-janghye-p1.jpg" alt="소화불량 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 장*혜 (만 59세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #18 -->
  <div id="detailModal18" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal18')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">뇌경색 후유증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">손도 안펴지고 걷지도 못했던 내가 이제 달리기도 하고 피아노도 칠수 있어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        14살 때 뇌경색으로 왼쪽 팔·다리·손·발에 마비가 왔습니다. 2년간 수정한의원 치료 후 달리기도 하고 피아노도 칠 수 있게 되었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">처음 중학교 1학년인 14살 후반 때 갑자기 뇌경색이라는 질병이 찾아왔습니다. 뇌경색이 불편함을 준 것은 저의 왼쪽 팔, 다리, 손, 발에 마비가 걸린 것 이었습니다. 저는 운동하고 피아노를 좋아하던 학생이었는데, 그런 것도 다 못하게 되었고, 이것 저것 하고 싶은데도 못하고, 뇌경색 초반엔 걷지도, 무엇을 잡을 수도 못했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">처음엔 병원치료만 하다가 친척 소개로 엄마 따라 수정한의원에 왔습니다. 침 치료 효과는 처음엔 당연히 몰랐습니다. 근데 계속해서 2년간 수정한의원에 다니는 이유는 분명히 있습니다. 병원도 몇달 옮겨보고, 재활센터도 다녀봤지만 별로 도움을 주지 않았어요. 근데 한의원은 계속 꾸준히 받고, 원장님 말대로 운동해보니 지금은 그냥 모든 게 정상에 가까워지고 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">1번 질문에서 대답한 것처럼 왼쪽 상, 하반신 마비 였습니다. 손도 안펴지고 걷지도 못했던 제가 2년간 한의원에서 치료를 받고 나니 달리기도 가능해지고, 피아노도 조금씩 칠 수 있습니다. 손가락질과 젓가락질도 가능하고, 이건 아직도 가능합니다. 그냥 수정한의원은 저의 인생을 바꿔놓은 한의원이죠.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">2018년 14살 뇌경색 진단 이후 후유증도 크고, 스트레스가 쌓이며 좌절감이 있었음. 손도 피고 싶은데 안펴지고, 걷는 것도 잘 안되서 친구들도 안 만나고, 밖에도 자주 안나감. (현재 2021년 모습) 이젠 사람들도 잘 만나고, 친구들이랑도 자주 놀 수 있음. 손과 발은 당연히 자유롭게 행동 가능함! 학교에서도 급식 시간이 되면 빨리 먹으려고 뛰어서 감!!</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">많이 아껴 주시고, 잘 챙겨 주셔서 감사합니다. 앞으로도 질 좋고 효과 좋은 치료를 많은 환자 분들께 해주세요! 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-18-leehui-p1.jpg" alt="뇌경색 후유증 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 이*희 (만 16세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #17 -->
  <div id="detailModal17" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal17')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관협착증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.10</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">허리 협착증으로 보행이 힘들었어요 — 치료 후 보행 중 통증이 사라지고 보행거리가 늘어났습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        허리 협착증으로 걷기조차 힘들었는데, 수정한의원 치료 후 통증이 사라지고 일상생활을 할 수 있게 되었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">허리 협착증으로 보행이 힘들 정도였습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">아는 분 소개로 오게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">보행 중에 통증이 사라지고 보행거리가 늘어났습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">일상 생활을 할 수 있어 좋습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">성심, 성의껏 치료해 주셔서 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-17-namhyun-p1.jpg" alt="허리 협착증 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 남*현 (만 50세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #15 -->
  <div id="detailModal15" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal15')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">두드러기·피부</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">차라리 아픈게 낫지 가려운 건 더 못 참겠더라구요 — 3개월 반 치료로 두드러기·가려움·열감이 다 사라졌습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        노원구 상계3동 전*복입니다. 세 군데 피부과에서 치료해도 반복되던 심한 두드러기와 가려움, 체질침·면역치료 3개월 반 후 완전히 사라졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 증상 및 내원 경위</span>
          <span class="review-qa-a">지난해 10월 중순부터 피부에 두드러기가 돋아나기 시작해 S가정의원에서 1주일에 두세번씩 주사를 맞고 매일 약 먹고 연고 바르고 4주 정도 치료 후 다 나았다 하였는데 일주일이 지나니 또 돋아오르기 시작합니다. 아차산역 앞 M피부과, 상계역 앞 K피부과에서도 치료를 이어갔지만 반복되었고, 약을 너무 오래 먹어 위가 쓰리고 안 좋아졌습니다. 노원에 사는 사초동생 추천으로 수정한의원에 오게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 한의원에 올 당시 증상</span>
          <span class="review-qa-a">한의원에 올 당시에는 하루에 두세 번씩 가려움이 시작되면 정신을 차릴 수 없을 정도였습니다. 차라리 아픈게 낫지 가려운 건 더 못 참겠더라구요. 가려움이 시작되면 온몸(배, 등, 허벽지, 어깨, 팔, 손목 등) 전체가 돌아가며 가렵고 열이 얼마나 나는지 찬 물수건을 덧어 놓으면 열이 안 식을 정도로 심했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 가장 힘들었던 순간</span>
          <span class="review-qa-a">영하 15~16도 되는 한파에도 온돌침대에 불을 한 번도 못 켜고 지냈습니다. 침대 바닥에 등이 닿으면 등이 가렵기 시작하고 뜨겁게 열감이 느껴지고, 엎드려 자면 배가 가렵기 시작하고, 옆으로 자면 옆구리와 다리까지… 한 밤중에 거실로 나와 찬 물수건을 가렵고 열 나는 부위에 올려 놓고 괴로운 나날을 보냈습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료 경과 및 개선</span>
          <span class="review-qa-a">수정한의원 원장님께서 면역력이 떨어지고 장기에 열이 많아서 그러니 면역력을 올리고 열을 내리면 잘 치료될 수 있다는 말씀에 치료를 시작했습니다. 체질침·면역치료·한약을 먹으며 3개월 반 정도 치료를 받았습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">다시는 생각하기 싫은 두드러기·가려움·열감이 다 사라지고 잠도 잘 자고 피로도 완화되었습니다. 영하의 한파에도 침대에서 따뜻하게 잠을 수 있어 너무 행복합니다. 끝으로 지인도·남편·딸을 데려와 체질 검사하여 몸에 맞는 음식 먹고 모두들 건강하게 살았으면 좋겠습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">원장님! 잘 치료받고 건강해졌어 진심으로 감사합니다. 언제나 친절하신 간호사님도 감사드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-15-jeonbok-p1.jpg" alt="두드러기 피부 자필후기 1페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <img src="/static/reviews/review-15-jeonbok-p2.jpg" alt="두드러기 피부 자필후기 2페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 전*복 (만 68세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #14 -->
  <div id="detailModal14" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal14')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">무릎관절염</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.02</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">무릅이 아파서 걷지도 못하고 잠도 못 잤어요 — 메선 치료 후 다리에 힘이 생기고 계단도 잘 오르내릴 수 있어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        3년동안 무릅 통증으로 벽을 잡고 일어나고, 잠자면서도 통증이 계속되어 힘들었습니다.
        메선 치료 후 다리에 힘이 생기고 밤에 통증 없이 화장실을 다녀올 수 있게 되었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 본인 소개 및 증상</span>
          <span class="review-qa-a">노원구 창동 73 이*순입니다. 3년 전부터 무릅이 아파서 정형외과와 한의원에서 컴도 맞고 했는데 계속 아파서 수정한의원에서 치료를 받기 시작했습니다. 치료 전에는 너무 많이 아파서 벽을 잡고 일어나고 했는데 잠자면서도 통증이 계속 있었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 내원 및 치료 경과</span>
          <span class="review-qa-a">친정 오빠 소개로 수정한의원에 다녕 게 되었습니다. 원장님의 체질침을 맞으면서 메선 치료를 했는데 바로 낙는다고 해서 했습니다. 메선 치료를 한 다음부터는 다리에 힘이 생기고 잠잤 때도 통증이 조금씩 없어졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 지금 상태</span>
          <span class="review-qa-a">어느 날 자다가 화장실을 가는데 끝없이 통증이 하나도 없어졌습니다. 12월 달은 너무 행복하게 살 수 있었습니다. 지금은 조금은 아프지만 2년도 러이 나은 상태입니다. 걷기도 편하고 계단도 잘 오르내릴 수 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">원장님이 잘해 주셔서 열심히 잘 받으려고 노력합니다. 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-14-leeinsu-p1.jpg" alt="무릎관절염 자필후기 1페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <img src="/static/reviews/review-14-leeinsu-p2.jpg" alt="무릎관절염 자필후기 2페이지" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 73세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #13 -->
  <div id="detailModal13" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal13')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">항암후유증·면역</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">한여름에도 난방기를 켰던 추위가 사라졌습니다 — 항암 후 면역저하와 피로가 체질 한약으로 함께 좋아졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        유방암 항암·방사선 치료 후 면역저하로 속까지 추워서 한여름에도 난방기를 켰을 정도였습니다.
        체질 약침·한약 치료 후 추위가 사라지고 면역력도 회복되었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">유방암 치료(항암, 방사선) 후 면역체계가 불안정하여 추위를 심하게 느끼고 자주 피로감을 느끼었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">속까지 추위를 타서 한여름에도 난방기를 사용할 정도로 일상생활에 불편함을 느꺼습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">대신 약침을 1주일에 한 번씩 맞고 체질 개선 한약을 복용한 후 추위를 느끼지 않고 있으며 매우 빠른 시기에 증상이 개선되는 것을 느껷습니다. 한약이 소화가 잘 되고 더 편안해서 잘 먹고 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">한여름에 에어콘 바람을 켰던 것이 매우 긍정적이었으며, 8체질을 알고 체질에 맞는 음식을 섭취하여 몸의 면역력과 성격도 차분히 바뀌는 것을 알게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">정성껏 세심하게 치료해 주신 원장님과 간호사님들께 진심으로 감사드리며 주님의 축복이 함께 하시길 기도드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-13-parkmi-p1.jpg" alt="항암후유증 면역저하 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 박*미 (만 47세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #12 -->
  <div id="detailModal12" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal12')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">무릎관절염</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">무릎통증이 너무나 심해서 걷지를 못했어요 — 한약 먹으면서 소화불량·허리통증까지 함께 좋아졌습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        무릎통증이 너무나 심해 좌식(양반다리)도 못 하고 걷지도 힘들고 아침에는 몸이 뻣뻣해 무기력했습니다.
        체질 한약을 먹으면서 소화불량과 허리통증까지 함께 점점 좋아지고 혈색까지 좋아져 활력이 생겼습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">(소화불량, 무릎통증, 허리통증, 붓기) 무릎 통증이 너무 심해서 좌식(양반다리)을 할 수 없었고, 계단 오르내리기도 힘들었습니다. 아침에는 뻣뻣하게 움직였고 무기력했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">타한의원에서 치료를 받았는데 무릎·허리 통증도 지속되고 소화불량도 그득하게 해서 지인의 추천으로 수정한의원 치료를 받게 되었습니다. (체질검사에 대한 관심)</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">체질을 확실히 진단받고 식단관리와 한약·침 치료로 점점 좋아지기 시작했습니다. 한달 정도 치료 받으면서 무릎통증도 많이 사라졌고, 통증이 너무 심해서 고생했던 것이 비교할 수 없을 정도로 좋아졌습니다. 혈색도 좋아졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">다리가 더 아프지 않고 몸이 붓지 않으면서 무기력함이 사라지고 활력이 생겼습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">올 때마다 가족처럼 반갑게 맞아주시고 친절하게 대해주셔서 먼저 따뜻한 마음이 5배는 치료받는 느낌을 받았습니다. (원장선생님은 비록…) 항상 최선을 다해 치료해주신 원장선생님께 감사드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-12-seoyoung-p1.jpg" alt="디스크 척추 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 서*영 (만 45세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #11 -->
  <div id="detailModal11" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal11')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">디스크 협착증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024.07</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">허리·옆구리 통증이 사라졌습니다 — 앉고 서는 것도 편해지고 몸에 활력이 생겼어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        허리와 양 옆구리가 터질 듯이 아파 눕거나 일어나기도 힘들었습니다.
        앉거나 서 있을 때도 통증이 있어 일상생활이 매우 불편했는데,
        수정한의원 한약·침 치료 후 통증이 사라지고 몸에 활력이 생겨 편안해졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">허리와 양 옆구리가 터질 듯이 아파 눕혀도 일어나기 힘들었습니다. 앉거나 서 있을 때도 통증이 있어 일상생활이 매우 불편하였습니다. 나중에는 너무 고통스러워서 한약과 침과 수정한의원을 찾아보고 방문하였습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">정형외과와 내과에서 치료받고도 너무나 아프고 고통스러워서 찾다가 찾다가 수정한의원 간판을 보고 오게 됐습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">수정한의원 원장님을 정말로 대단하다고 생각합니다. 한약과 침 치료로 통증이 많이 사라지고 몸이 편안해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">한층 더 좋아지고 몸이 훨씬 가벼워졌습니다. 앉고 서는 것도 편해지고 일상생활이 훨씬 수월해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">수정한의원 원장님께 정말로 감사드립니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-11-jisook-p1.jpg" alt="디스크 관절 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 지*숙 (만 63세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #10 -->
  <div id="detailModal10" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal10')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">어지럼증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2020.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">뇌수종으로 인한 어지럼증이 다 가셨습니다 — 비틀거림 없이 걷게 되고 생활이 편리해졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        뇌수종으로 매일 어지럼증이 심해 일상생활이 매우 힘들었습니다.
        수정한의원 치료 후 어지럼증이 다 가시고, 비틀거림 없이 편하게 걸을 수 있게 됐습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">뇌수종으로 인해 갈수록 어지럼증이 심해지면서, 매일 어지러움 때문에 혼자서는 일상생활이 힘들었습니다. 걸을 때 비틀거림이 심하게 느껴지고 생활하는 데 많이 불편하였습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">생활에 불편함을 자주 느껴 치료를 받게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">어지럼증이 다 가셨습니다. 매일 고통스럽던 증상이 현저히 줄었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">한약과 침 치료를 꾸준히 하여 이제는 비틀거리는 느낌 없이 걸을 수 있게 되었습니다. 몸이 좋아지고 생활이 편리해졌습니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-10-choijong-p1.jpg" alt="뇌수종 어지럼증 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 최*종 (만 67세, 남)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #09 -->
  <div id="detailModal09" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal09')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">갱년기·불면</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">갱년기 불면과 족저근막염이 함께 좋아졌습니다 — 잠도 잘 자고 생활에 불편함이 없어졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        갱년기로 잠을 못 자고 자다 깨는 일이 잦았습니다. 족저근막염까지 겹쳐 생활이 매우 힘들었는데,
        체질침 한약 치료 후 잠도 잘 자고 발 통증도 없어져 생활하는 데 불편함이 없어졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">족저근막염과 갱년기로 인해 잠을 못 자고 자다 깨는 일이 잦아 생활이 힘들었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">건강을 생각해서 치료를 받게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">전반적으로 좋아졌습니다. 피하지 않아도 되고, 잠을 자는데 많이 좋아졌습니다. 장과 손발도 생활하는 데 많이 좋아졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">건강하게 잠을 잘 자고 당당해졌습니다. 잘 잠을 자서 당당하게, 생활하는 데 불편함이 없어진 점이 가장 좋습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment-dots"></i> 수정한의원에 하고 싶은 말</span>
          <span class="review-qa-a">많이 편안하게 해주셔서, 필요한 한의원이라고 생각합니다. 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-09-hongoim-p1.jpg" alt="갱년기 불면 족저근막염 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 홍*임 (여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

    </section>
  </div>

  <!-- 이미지 전체보기 모달 -->
  <div id="imgFullModal" style="display:none;" onclick="closeImgFull()">
    <button class="img-full-close" onclick="closeImgFull()">✕</button>
    <img id="imgFullModalImg" src="" alt="원본 이미지">
  </div>

  <script>
  document.addEventListener('DOMContentLoaded', function() {

    /* ── 초기화: 항상 3열 요약 박스 모드 ── */
    var grid = document.getElementById('reviewGrid');
    if (grid) grid.classList.add('summary-mode');

    /* ── 카테고리 필터 ── */
    var CARDS = [
      { el: document.getElementById('reviewCard01'), cat: '대장염' },
      { el: document.getElementById('reviewCard02'), cat: '다이어트' },
      { el: document.getElementById('reviewCard03'), cat: '피부' },
      { el: document.getElementById('reviewCard04'), cat: '대상포진' },
      { el: document.getElementById('reviewCard05'), cat: '여성' },
      { el: document.getElementById('reviewCard06'), cat: '척추관절' },
      { el: document.getElementById('reviewCard07'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard08'), cat: '대장염' },
      { el: document.getElementById('reviewCard09'), cat: '여성' },
      { el: document.getElementById('reviewCard10'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard11'), cat: '척추관절' },
      { el: document.getElementById('reviewCard12'), cat: '척추관절' },
      { el: document.getElementById('reviewCard13'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard14'), cat: '척추관절' },
      { el: document.getElementById('reviewCard15'), cat: '피부' },
      { el: document.getElementById('reviewCard16'), cat: '천식' },
      { el: document.getElementById('reviewCard17'), cat: '척추관절' },
      { el: document.getElementById('reviewCard18'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard19'), cat: '소화기' },
      { el: document.getElementById('reviewCard21'), cat: '뇌신경' }
    ];

    document.querySelectorAll('.review-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.review-filter-btn').forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        var cat = this.getAttribute('data-cat');

        CARDS.forEach(function(item) {
          if (!item.el) return;
          if (cat === 'all' || item.cat === cat) {
            item.el.style.display = '';
          } else {
            item.el.style.display = 'none';
          }
        });
      });
    });

  }); // DOMContentLoaded 끝

  /* ── 상세 모달 열기/닫기 ── */
  function openReviewModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeReviewModal(event, modal) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  function closeModalById(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  /* ── 이미지 전체보기 ── */
  function openImgFull(src) {
    document.getElementById('imgFullModalImg').src = src;
    document.getElementById('imgFullModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeImgFull() {
    document.getElementById('imgFullModal').style.display = 'none';
    document.body.style.overflow = '';
  }

  /* ── 갤러리 썸네일 전환 ── */
  function switchDetailImg(mainId, thumb) {
    const main = document.getElementById(mainId);
    if (!main) return;
    main.src = thumb.src;
    const thumbs = thumb.closest('.review-detail-thumbs');
    if (thumbs) {
      thumbs.querySelectorAll('.review-detail-thumb').forEach(t => t.classList.remove('active'));
    }
    thumb.classList.add('active');
  }

  /* ── ESC 키로 모달 닫기 ── */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.review-detail-modal').forEach(m => {
        m.style.display = 'none';
      });
      const imgFull = document.getElementById('imgFullModal');
      if (imgFull) imgFull.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  </script>`

  const mainContent = isLoggedIn ? reviewList : loginGate

  return headNav + `<main id="main-content">` + mainContent + `\n</main>` + afterMain
}
