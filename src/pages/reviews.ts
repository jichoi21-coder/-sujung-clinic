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
            <button class="review-filter-btn" data-cat="척추관절">척추·관절</button>
            <button class="review-filter-btn" data-cat="피부">피부·아토피</button>
            <button class="review-filter-btn" data-cat="소화기">소화기</button>
            <button class="review-filter-btn" data-cat="뇌신경">자율신경·뇌신경</button>
            <button class="review-filter-btn" data-cat="면역대사">면역·대사성질환</button>
            <button class="review-filter-btn" data-cat="여성">여성질환</button>
            <button class="review-filter-btn" data-cat="성장">소아성장</button>
            <button class="review-filter-btn" data-cat="다이어트">체질 다이어트</button>
          </div>
        </div>
        <div class="review-filter-group review-filter-group-special">
          <p class="review-filter-label review-filter-label-special"><i class="fas fa-star"></i> 특설클리닉</p>
          <div class="review-filter-btns">
            <button class="review-filter-btn review-filter-btn-special" data-cat="구안와사">구안와사·안면마비</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="편두통">만성 편두통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="대상포진">대상포진·신경통</button>
            <button class="review-filter-btn review-filter-btn-special" data-cat="천식">천식·마이코플라즈마</button>
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

        <!-- 후기 카드 #72 -->
        <div id="reviewCard72" class="review-card review-card-handwritten" data-cat="대상포진" onclick="openReviewModal('detailModal72')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">대상포진·신경통</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">백신 맞았어도 걸린 대상포진 — 체질한약·약침·파동치료 2달로 모든 통증 사라지고 신경통도 잘 낫는다는 걸 알았어요</h3>
          <p class="review-story">
            좌측복부 통증을 근육통으로 착각, 내과에서 대상포진 진단. 소염진통제만으론 한계. 수정한의원에서 체질한약·약침·바이러스 파동치료 2달 후 모든 통증 소멸. 2010년부터 토양체질 관리 중.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 식송정</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #71 -->
        <div id="reviewCard71" class="review-card review-card-handwritten" data-cat="천식" onclick="openReviewModal('detailModal71')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">기관지천식</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">30년된 고질 기관지천식 — 한약·약침·체질침·온열치료로 어떤 자극에도 기침 없이 완전히 좋아졌어요</h3>
          <p class="review-story">
            30년 전 수영장 후 천식 진단, 반년간 약·주사·흡입기도 실패. 찬바람·온도차마다 기침 지속. 수정한의원 한약·태반약침·체질침·온열치료 병행 후 새벽 발작성 기침 소멸, 완치. "어떠한 자극에도 기침 안해요."
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 안*남 (만 63세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #70 -->
        <div id="reviewCard70" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal70')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">폐쇄공포증·불면증·두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">25년간 발바닥 열·손발 가려움 — 한약 치료 후 폐쇄공포·불면·위식도염까지 모든 게 편해졌어요</h3>
          <p class="review-story">
            25년째 겨울도 맨발, 손발 끝 열·가려움·발바닥 열로 잠 못 잠. 폐쇄공포증·두통·어깨통증·위식도염까지. 한약 치료 후 모든 증상 해소, 편안한 일상 회복. "평생 못 고칠 병이라 생각했는데 원장님 말씀이 정답이었어요."
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> unk**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #69 -->
        <div id="reviewCard69" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal69')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">척추분리증·류마티스</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.05</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">8년 허리시술·류마티스 입원도 소용없던 척추분리증 — 추나·약침·매선 7~3회로 굽은 허리 펴지고 만성 기침도 좋아졌어요</h3>
          <p class="review-story">
            류마티스 입원·척추분리증 시술 8년, 허리 구부러져 펼 수 없고 감기 기침 안 낫는 자가면역질환. 토양체질 한약·약침·추나 7회·매선 3회 후 허리 펴지고 기침 호전. 반듯이 걸으니 희망이 생겼습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> boo**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #68 -->
        <div id="reviewCard68" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal68')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">이명·난청</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.06</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">이비인후과도 답 없던 이명·난청·고막 먹먹함 — 약침 3회로 완치, 시기를 놓치지 않은 게 정말 다행이에요</h3>
          <p class="review-story">
            금식기도 후 체력 저하로 귀 먹먹함·이명 발생. 이비인후과 별다른 치료법 없음. 수정한의원 간판 보고 내원, 약침 3회 치료 후 증상 거의 소실, 완치. 이명·난청은 시기가 중요하다고 강조합니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 서*남 (만 56세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #67 -->
        <div id="reviewCard67" class="review-card review-card-handwritten" data-cat="다이어트" onclick="openReviewModal('detailModal67')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">체질다이어트·편두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">새벽마다 비명 지르던 편두통·비만 — 체질 맞춤치료로 두통 소실, 16kg 감량·기초대사량 모두 표준 달성</h3>
          <p class="review-story">
            코골이·새벽 두통 비명, 신경외과·혈관내과 무효. 운동해도 체중 계속 증가, 맞는 옷 없음. 경추 교정+체질개선 2~3개월 후 두통 소실, 16kg 감량 성공, 체지방·기초대사량 모두 표준. 주변에서 부러워합니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 변*진 (만 44세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #66 -->
        <div id="reviewCard66" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal66')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">편두통·복통·설사</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.06</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">새벽 혈관 막힘·편두통·과민성대장 — 3주 체질 맞춤치료로 혈압 140→정상, 복통·설사·편두통 거의 소실</h3>
          <p class="review-story">
            새벽 두통·뒷목 뻣뻣함, 혈관내과·신경외과 약도 무효. 하루 4~5회 화장실, 장거리 이동 시 물도 못 마심. 3주 체질침·한약·식단관리로 혈압 140→정상, 편두통 거의 소실, 복통·설사 개선, 지방↓ 근육량↑.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 변*진 (만 45세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #65 -->
        <div id="reviewCard65" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal65')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두통·팔저림·목잠김</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.02</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">진통제 없이 잠 못 자던 갑작스런 두통·팔저림·목잠김 — 치료 후 혈압↓·진통제 끊고 삶의 질 높아졌어요</h3>
          <p class="review-story">
            갑작스런 심한 두통으로 진통제 없이 수면 불가, 오른쪽 팔 저림, 목소리 잠김. 지인 소개로 내원 후 혈압 낮아지고 진통제 끊었으며, 목·어깨 통증 완화, 손 저림도 호전. 집 같은 편안한 환경과 심리적 안정이 치료에 큰 도움이 됐습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 방*희 (만 57세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #64 -->
        <div id="reviewCard64" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal64')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">협착증·수술후유증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">8년간 복대 없이 못 걷던 허리수술 후유증 — 매선 9회로 통증 50% 이상 감소, 8년 만에 처음 복대 없이 걸어요</h3>
          <p class="review-story">
            허리수술 후 복대 없이 보행 불가, 수술 3년 후 낙상 골절로 더 악화. 8년간 하루도 복대 못 뗐음. 체질침·체질한약·약침·매선 9회 후 허리 힘 생기고 통증 50%↓, 8년 만에 처음 복대 없이 걷습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> nam**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #63 -->
        <div id="reviewCard63" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal63')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">협착증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">6년 병원·운동도 못 고친 협착증 — 한 달 체질한약·추나·약침으로 통증 싹 사라지고 혈압 180→안정, 잠 7시간 자요</h3>
          <p class="review-story">
            협착증으로 다리 저림·2시간 수면·식은땀·갱년기·장염·혈압 180. 6년 병원·운동도 효과 없음. 인천에서 먼 길 내원, 한 달 체질한약·추나·약침으로 협착증 통증 소실, 땀 없어지고 7시간 숙면, 혈압약도 줄었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> khs**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #62 -->
        <div id="reviewCard62" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal62')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">난치성 도한</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">25년 전국·중국 치료 모두 실패한 도한·전신통·설사 — 토양체질 치료로 이불 흠뻑 식은땀 사라지고 주위가 기적이라 해요</h3>
          <p class="review-story">
            잘 때 이불 흠뻑, 하루 옷 20번 교체, 전신 뼈 통증, 바람만 스쳐도 설사. 25년 전국 한의원·중국 3년도 무효. 수정한의원 토양체질 진단 후 체질한약·침·추나·약침·매선으로 땀·통증·설사 모두 소실, 한여름 내복 2벌에서 완전 해방.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> kts**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #61 -->
        <div id="reviewCard61" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal61')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">돌발성난청·이명·두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">MRI 정상인데 소리 안 들리던 돌발성난청·1년 두통·이명 — 경추 추나·약침·체질한약 3주로 먹먹함 사라지고 잘 들려요</h3>
          <p class="review-story">
            6월 14일 기상 후 왼쪽 귀 먹먹·난청, 이비인후과 스테로이드도 효과 없음. 수정한의원서 경추 1-2번 원인 진단, 추나·약침·체질한약 3주 후 먹먹함 소실, 1년 된 두통·이명도 거의 사라졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> BBNE2 (남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #60 -->
        <div id="reviewCard60" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal60')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">아토피</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">피부과 전전해도 재발하던 고질 아토피 — 금양체질 한약·약침으로 사라지고 1년 넘게 재발 없어요</h3>
          <p class="review-story">
            어릴 때부터 팔다리 접히는 부위 아토피, 여름엔 엉덩이 진물·갈라짐. 피부과는 일시 효과뿐 계속 재발. 금양체질 한약·약침으로 아토피 소실, 1년 이상 재발 없음. 체질 음식·생활습관 교정으로 근본적 재발 예방.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> nemeSIS (남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #59 -->
        <div id="reviewCard59" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal59')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎·고관절</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">6개월 주사치료도 못 고친 무릎·고관절 — 토양체질 한약·추나·약침·매선으로 계단 오르내리고 5년 수면장애까지 해결됐어요</h3>
          <p class="review-story">
            23년 12월 바닥에 주저앉아 무릎·고관절 통증 발생. 정형외과 주사 6개월에도 계단조차 못 올랐는데, 수정한의원 토양체질 치료 후 계단·양반다리 가능. 5년 수면장애도 6시간 숙면으로 회복, 삶의 활력 되찾았어요.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> zza**** (여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #58 -->
        <div id="reviewCard58" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal58')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">돌발성난청·이명</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">병원 3곳 전전해도 대답 없던 돌발성난청·이명 — 한약·체질침으로 이명 소리 사라지고 조금씩 좋아지고 있어요</h3>
          <p class="review-story">
            요양병원 퇴원 후 돌발성 난청·이명 발생. 이비인후과·신경과 3곳 헤도 호전 없음. 목발 짚고 횡단보도 앞에서 수정한의원 내원. 한약과 체질침으로 이명 소리 사라지고 조금씩 회복 중.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*애 (만 67세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #57 -->
        <div id="reviewCard57" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal57')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">난청·턱관절</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">혈압 150·난청·턱관절통증 한번에 — 3개월 체질한약·매선·약침·추나로 혈압 130대, 안들리던 핸드폰 소리까지 들려요</h3>
          <p class="review-story">
            혈압 150에 만성대장증후군·턱관절통증으로 가시방석 생활. 엑스레이하니 경추 1~2번 문제로 청력 이상 진단. 3개월 집중 치료로 혈압 130대, 청력 회복, 금양체질 식단으로 삶의 질 회복.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 수*이 (여, 네이버)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #56 -->
        <div id="reviewCard56" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal56')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">아토피</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.07</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">몇 년째 피부과 다녀도 변화 없던 아토피 — 한약으로 눈에 보이는 피부 개선, 발작 범위·빈도가 확 줄었어요</h3>
          <p class="review-story">
            피부과 몇 년, 붉은 발작·가려움·다리 통증으로 일상 지장. 어머니 권유로 한약 시작 후 눈에 띄는 피부 개선, 발작 줄고 체질식교육으로 생활 습관까지 교정.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*찬 (만 27세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #55 -->
        <div id="reviewCard55" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal55')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎인대파열</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2024.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">전동차에 치여 주저앉아 걷지도 못하던 무릎인대파열 — 체질침·약침·매선으로 어지럼증까지 함께 낫고 혼자 걸어다녀요</h3>
          <p class="review-story">
            건널목에서 장애인 전동차에 무릎을 치여 그 자리에 주저앉아 이동 불가. 어지럼증 치료 중 내원해 바로 침 시술. 꾸준한 체질침·약침·매선으로 어지럼증·무릎인대 동시 회복, 혼자 걸어다닐 수 있게 됨.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 권*자 (만 79세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #54 -->
        <div id="reviewCard54" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal54')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">성대결절</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.12</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">5개월 쉰목소리·성대결절 수술 권유 — 목양체질 진단 후 한약·약침·온열 3개월 집중치료로 수술 없이 완치됐어요</h3>
          <p class="review-story">
            영업직에 쉰목소리 5개월, 이비인후과 2곳서 말 금지·수술 권유. 목양체질 감별 후 한약+약침+온열 매일 출근하듯 치료. 체질식 병행 3개월 만에 수술 없이 완치.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*숙 (만 47세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #53 -->
        <div id="reviewCard53" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal53')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">백혈병·항생제불응폐렴</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.12</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">항생제도 안 듣는 폐렴으로 사망선고 받았는데 — 긴급 한약 이틀 만에 증상 완화, 폐사진도 좋아지는 기적이 일어났어요</h3>
          <p class="review-story">
            만성골수성백혈병 환자. 40도 고열·가슴통증·피가래로 성모병원 입원, 항생제 불응 폐렴으로 사망선고. 원장님 긴급 한약 이틀 후 증상 완화·폐사진 호전. 하루 10봉지 이상 복용으로 기적 같은 회복.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*연 (만 47세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #52 -->
        <div id="reviewCard52" class="review-card review-card-handwritten" data-cat="대상포진" onclick="openReviewModal('detailModal52')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">대상포진·신경통</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.10</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">동네 병원 약도 안 듣던 대상포진 — 체질한약·약침·파동치료 10일 만에 통증 줄고, 한 달 만에 완치됐어요</h3>
          <p class="review-story">
            운동 과부하로 면역 저하 → 대상포진 발병. 가슴·어깨 찌르는 통증에 밤잠 설침. 동네 병원 약 효과 없음. 체질한약+약침+파동치료 10일부터 통증 감소, 한 달 후 완치.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 64세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #51 -->
        <div id="reviewCard51" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal51')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">후관절증후군·안검하수</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">주사 맞아도 반복되던 후관절 허리통증·처진 눈썹 — 한약·추나·매선·약침으로 통증 소멸, 눈곱·진물도 완전히 사라졌어요</h3>
          <p class="review-story">
            2년간 반복 허리 주사·안약도 차도 없는 눈썹 처짐. 체질침+추나+한약으로 허리 통증 소멸, 눈썹 매선+약침으로 혈액순환 개선 → 눈곱·진물 소실, 내성발톱까지 개선.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 72세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #50 -->
        <div id="reviewCard50" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal50')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">척추전방전위증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">수술 불가·주사도 무효한 척추전방전위증 — 한 달 체질침·약침·매선·추나로 통증 소멸, 걸음걸이도 빨라졌어요</h3>
          <p class="review-story">
            척추뼈 밀림으로 신경 압박, 수술 불가 판정·주사 2회 효과 없음. 17년 전 완치 경험 떠올려 재방문. 한 달 매일 치료 후 통증 소멸·보행 정상화, 걸음도 빨라짐.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 우*임 (만 74세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #49 -->
        <div id="reviewCard49" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal49')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">협착증·다리저림·발바닥</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">주사도 소용없던 양쪽 다리저림·발바닥 둔함 — 체질침·한약·추나·약침으로 저림 소멸, 쉬지 않고 한번에 걸어와요</h3>
          <p class="review-story">
            양쪽 다리 저림·당김·발바닥 둔함, 통증클리닉 주사도 효과 없음. 토양체질 감별 후 체질침·한약·추나·약침 병행. 저림·당김 완전 소실, 무좀도 치유. 5번 쉬며 왔던 길을 지금은 한번에 걸어옴.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 왕*련 (만 76세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #48 -->
        <div id="reviewCard48" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal48')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">코로나후유증·고열·두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">해열제도 안 듣는 코로나 불명열 한 달 — 첫 약침 당일 열 소멸, 두 번째에 몸살기운까지 완전히 사라졌어요</h3>
          <p class="review-story">
            격리 해제 후에도 매일 38도 고열·몸살·두통 지속. 내과·성모병원 감염내과서도 원인불명 코로나 후유증 판정. 첫 체질침+약침 당일부터 열 소멸, 2회차에 몸살기운 완전 소실.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 오*란 (만 45세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #47 -->
        <div id="reviewCard47" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal47')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두드러기·여드름</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">두드러기로 너무 가려워서 잠도 못자고 스트레스를 많이 받았어요 — 한약 꾸준히 먹으니 양약도 끊고 거의 안 나요, 여드름도 좋아졌어요</h3>
          <p class="review-story">
            운동 후·취침 전 두드러기, 알러지 검사 정상, 양약 복용 중. 수정한의원 체질 한약 후 빈도 급감, 양약 중단. 여드름도 개선. 두드러기 스트레스에서 해방돼 매우 기쁨.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*준 (만 19세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #46 -->
        <div id="reviewCard46" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal46')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">두통·이명·목잠김</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">잦은 출장·음주 후 두통·이명·목잠김 악화 — 한약·약침 5~6회 만에 두통 거의 소멸, 목잠김 완전히 없어졌어요</h3>
          <p class="review-story">
            MRI 찍어도 악화일로. 경추 1·2번 틀어짐 진단 후 한약·약침 시작. 5~6회부터 두통 거의 소멸, 목잠김 완전 소실. 인천에서 1시간 20분 거리를 즐거운 마음으로 다닌 보람을 느낌.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*기 (만 62세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard45" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal45')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎인대파열</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">무릎인대파열 수술 권유받았지만 — 체질침·태반약침·매선 한 달 만에 지팡이 없이 걷고 계단도 성큼성큼</h3>
          <p class="review-story">
            응급실 인대파열 진단 후 수술 거부. 수정한의원 체질침·체질한약·태반약침·매선 병행 한 달 만에 지팡이 없이 보행, 꾸준한 치료로 계단 오르내리기까지 완전 회복.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*영 (만 60세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard44" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal44')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">메니에르·어지럼증·두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.06</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">2년간 메니에르로 매일 어지럼·새벽 두통 — 약침·한약으로 깊은 수면 되찾고 아침이 개운해졌어요</h3>
          <p class="review-story">
            메니에르 진단 후 양약 복용 중 간수치·혈압·당뇨 이상까지. 체질치료 후 2주부터 두통·울렁거림 잦아들고 만성변비도 해소. 활동 반경 넓어지고 대인관계·여행 계획도 다시 시작.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*영 (만 52세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard43" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal43')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">우울증·불면·두통</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.05</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">차라리 죽는 게 편하다 생각했는데 — 체질치료로 살아갈 기본 힘 되찾고 손발 따뜻, 두통·불면 모두 해결됐어요</h3>
          <p class="review-story">
            추위에 약하고 두통·불면·우울로 생활이 힘들었던 만 30세 여성. 수정한의원 체질 진단 후 약침·체질침·체질식으로 혈액순환 개선, 수면 정상화, 두통약 거의 끊고 살 의지 회복.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*늘 (만 30세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard42" class="review-card review-card-handwritten" data-cat="천식" onclick="openReviewModal('detailModal42')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">바이러스성폐렴·급성폐섬유화</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">코로나 후 바이러스성 폐렴·급성 폐섬유화 위기 — 한방·양방 협진과 매일 걸음 수 늘리기로 2달 만에 완쾌</h3>
          <p class="review-story">
            만성 메니에르·공황장애 치료 중 코로나 후유증으로 바이러스성 폐렴·급성 폐섬유화 진단. 체질침·파동치료·한약 집중치료와 걸음 수 100보 도전으로 2달 만에 정상 폐 회복.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*애 (여, 치료 성공 수기)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard41" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal41')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">퇴행성무릎관절염 4기</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">인공관절 수술 권유받은 퇴행성관절염 4기 — 백일 한약·매선·약침 후 성큼성큼 걷고 하루종일 서도 안 아파요</h3>
          <p class="review-story">
            정형외과에서 인공관절 수술 권유, 수술 거부 후 수정한의원 방문. 백일 한약·체질 침·매선·약침 8회로 계단 오르내리기 자유롭고 다리 통증 완전 소실. 너무 행복합니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*숙 (만 65세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard40" class="review-card review-card-handwritten" data-cat="여성" onclick="openReviewModal('detailModal40')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">요실금·여성질환</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">5개월 매선치료로 요실금 완전 해결 — 패드 없이 외출하고 심적 부담도 사라졌어요</h3>
          <p class="review-story">
            어깨통증 치료 중 말 못할 고민이던 요실금을 상담, 매선치료 5개월 만에 완전 해소. 체질·약침·한약 병행으로 몸 전반이 좋아지고 심적 어려움도 해결되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 윤*숙 (만 59세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard39" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal39')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">무릎반월상연골파열</span>
            <span class="review-handwritten-badge"><i class="fas fa-star"></i> 네이버 후기</span>
            <span class="review-date">2023.05</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">무릎 반월상연골파열·허리협착증 — 수술 대신 체질치료·약침·매선으로 통증 없이 건강을 되찾았어요</h3>
          <p class="review-story">
            병원 수술 권고를 받았지만 3개월 수정한의원 치료로 체질치료·추나·약침·매선 병행, 계단 오르내림 통증 해소. 항암·방사선 치료 후 면역 저하와 허리 통증도 꾸준한 한방 치료로 완쾌되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*숙 (여, 네이버)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

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

        <!-- ===== 자필후기 카드 #4 — 박상임 (대상포진·신경통) ===== -->
        <div id="reviewCard04" class="review-card review-card-handwritten" data-cat="대상포진" onclick="openReviewModal('detailModal04')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">대상포진·신경통</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기 (3장)</span>
            <span class="review-date">2021.02</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">대상포진 후 신경통 — 대학병원·피부과 한 달 넘게 진통제·주사도 소용없었는데 면역침·파동치료로 회복했습니다</h3>
          <p class="review-story">
            유방 촬영 후 대상포진이 생겨 피부과·대학병원에서 한 달 넘게 진통제와 주사를 맞았지만
            <strong>트럭 바퀴에 깔리는 듯한 압박·망치로 두드리는 통증·화상처럼 화끈거리는 느낌</strong>이 전혀 줄지 않아 결국 입원까지 했습니다.
            수정한의원 면역침·약침·파동치료 후 처음으로 통증이 피부로 느낄 만큼 줄어들어 일상으로 돌아왔습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*임 (만 54세, 여)</span>
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
        <div id="reviewCard13" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal13')" style="cursor:pointer;">
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
            <span class="review-cat-tag">만성천식</span>
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

        <!-- 후기 카드 #22 -->
        <div id="reviewCard22" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal22')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">회전근파열</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.11</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">어깨인대가 끊어져서 팔이 안올라갔는데 수술안하고 수정한의원에서 치료받고 이제는 팔이 올라가고 통증도 없고 다 나았어요</h3>
          <p class="review-story">
            정형외과에서 인대가 끊어져 수술해야 한다고 했지만, 수정한의원 체질침·추나·매선·약침 치료로 팔이 올라가고 통증도 사라졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 주*순 (만 74세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #23 -->
        <div id="reviewCard23" class="review-card review-card-handwritten" data-cat="피부" onclick="openReviewModal('detailModal23')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">안면홍조</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2021.09</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">얼굴에 열이 올라 안면홍조로 고생했는데 체질 치료 후 안면홍조와 함께 불면증도 없어지고 더불어 갑상선 혹도 줄어들었어요</h3>
          <p class="review-story">
            피부과를 2개월 동안 다녔지만 호전이 없었고, 간의 열로 인한 안면홍조 진단 후 체질침·한약 치료로 홍조가 사라지고 갑상선 혹도 2.6cm → 1.5cm로 줄었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 현*주 (만 61세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #24 -->
        <div id="reviewCard24" class="review-card review-card-handwritten" data-cat="소화기" onclick="openReviewModal('detailModal24')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">소화불량</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2020.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">오래된 소화불량과 면역저하를 금음체질 한약·체질침으로 속이 편해지고 건강이 돌아왔어요</h3>
          <p class="review-story">
            소화기관 불편감과 면역저하로 조금만 피곤해도 열이 나고 방광 증상이 있었는데, 금음체질 진단 후 약침·체질침 치료로 속이 편해지고 컨디션도 많이 좋아졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*녀 (만 16세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <!-- 후기 카드 #25 -->
        <div id="reviewCard25" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal25')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">돌발성난청·이명</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.12</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">독감 후 귀가 잘 안 들리고 이명에 시달렸는데, 4일만에 들리기 시작하고 지금은 대화도 편안해졌어요</h3>
          <p class="review-story">
            11월 말부터 난청과 이명이 시작되어 대화도 힘들었는데, 12월 6일 치료 시작 후 4일만에 들리기 시작하고 2주 만에 대화가 편안해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 박*규 (만 80세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>


        <!-- 후기 카드 #26 -->
        <div id="reviewCard26" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal26')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">어깨통증·회전근개</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">인천에서 멀리 노원까지 찾아올 만큼 — 어깨통증·일자목·비염이 추나·약침으로 모두 좋아졌어요. 인천에도 병원 생기면 완전 행복할거같아요!</h3>
          <p class="review-story">
            양쪽 어깨통증과 손떨림·팔저림으로 잠을 못 이루고, 일자목·비염까지 겹쳐 힘들었는데 체질침·추나·태반약침 치료 후 모두 좋아졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 원*혜 (만 31세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard27" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal27')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">턱관절장애</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">20년 넘은 턱관절 소리와 1년간의 통증, 3개월 치료로 소리도 통증도 완전히 사라졌어요</h3>
          <p class="review-story">
            20년간 입 벌릴 때마다 턱에서 딱 소리가 났고, 1년 전부터 통증까지 생겨 잠도 못 잘 만큼 힘들었는데 추나·약침·침 치료 3개월 만에 소리와 통증이 모두 없어졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*해 (만 74세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard28" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal28')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">난치성 안구통증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">병원마다 이상없다는데 눈이 너무 아팠어요 — 수정한의원 치료 후 안구통증이 전반적으로 호전되고 일상이 돌아왔어요</h3>
          <p class="review-story">
            빛에 민감하고 쑤시는 안구 통증으로 독서도 못 할 정도였는데, 안과·한의원 전전해도 차도 없다가 수정한의원 치료 후 눈 사용에 편안함과 자신감을 되찾았습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*훈 (만 28세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard29" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal29')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">턱관절장애</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.12</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">치과에서 "그냥 살아라"고 했는데 — 6~7회 약침·추나로 턱 소리가 차츰차츰 사라졌어요</h3>
          <p class="review-story">
            식사할 때마다 왼쪽 귀 밑에서 덜거덕 소리가 나서 음식 먹기 싫어질 정도였는데, 약침·추나·침 치료 6~7회 만에 소리가 완전히 없어졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 이*경 (만 56세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard30" class="review-card review-card-handwritten" data-cat="면역대사" onclick="openReviewModal('detailModal30')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">전신통증·간수치·고지혈·혈당</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.08</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">머리부터 발끝까지 온몸이 아팠는데 — 3개월도 안 돼 간수치·고지혈증 정상, 통증도 거의 사라졌어요</h3>
          <p class="review-story">
            전신 통증에 간수치 이상·고지혈증·고혈당으로 하루 생활이 힘들었는데, 체질 치료 후 건강검진에서 간수치·고지혈증 정상, 혈당 경계선 이하로 개선됐습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 장*영 (만 60세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard31" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal31')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">디스크·협착증</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">목욕탕에서 넘어져 기어 다닐 정도였는데 — 온열·약침·한약으로 조금씩 회복, 10년 전 무릎도 고친 믿는 한의원</h3>
          <p class="review-story">
            낙상 후 허리를 쓸 수 없을 만큼 다리 저림·통증이 심했는데, 온열치료·약침·한약 병행으로 서서히 회복 중입니다. 과거 무릎 연골 치료 경험으로 이번에도 수정한의원을 찾았습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 장*순 (만 68세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard32" class="review-card review-card-handwritten" data-cat="소화기" onclick="openReviewModal('detailModal32')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">신경성 소화불량</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">스트레스로 소화 안 되고 가슴 통증까지 — 뭉친 근육 풀리고 먹는 게 편해지며 일상이 돌아왔어요</h3>
          <p class="review-story">
            심한 스트레스로 소화 장애, 근육 뭉침, 가슴 통증이 심했는데 치료 후 소화가 개선되고 근육이 풀려 활동하기 훨씬 편해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 조*이 (만 52세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard33" class="review-card review-card-handwritten" data-cat="여성" onclick="openReviewModal('detailModal33')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">방광염·여성질환</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2020.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">반복되는 방광염, 태반 약침 맞고 싹 사라졌어요 — 상계 때부터 지금까지 수정한의원만 다닌 이유</h3>
          <p class="review-story">
            고질적인 방광염·허리·무릎 고통을 약침으로 다스리며, 상계 시절부터 지금까지 다른 한의원은 생각도 없을 만큼 신뢰하는 곳입니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 진*순 (만 47세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard34" class="review-card review-card-handwritten" data-cat="척추관절" onclick="openReviewModal('detailModal34')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">족저근막염</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.04</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">정형외과 충격파도 효과 없던 족저근막염 — 체질 치료로 근본 원인 잡고 점차 호전 중이에요</h3>
          <p class="review-story">
            누워도 찌릿했던 발바닥 통증, 정형외과 충격파 치료 효과 없어 한의원 방문. 체질에 맞는 치료로 염증이 점차 개선되고 있습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*지 (만 28세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard35" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal35')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">편두통·다낭성난소</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.06</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">편두통·다낭성난소증후군·만성피로 — 첫날 치료부터 정신 맑아지고 생리 규칙적으로 돌아왔어요</h3>
          <p class="review-story">
            머리 통증·눈 침침함·집중력 저하·만성피로에 다낭성난소까지, 약침·추나·체질 한약으로 첫날부터 개선 시작, 아침이 상쾌해졌습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*진 (만 24세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard36" class="review-card review-card-handwritten" data-cat="뇌신경" onclick="openReviewModal('detailModal36')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">편두통·과민성대장·손떨림</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2022.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">폐암 수술 후 면역 저하·편두통·과민성대장 — 두 달 만에 가스·설사·편두통 모두 확연히 줄었어요</h3>
          <p class="review-story">
            2019년 폐암 수술 후 면역 저하, 매달 편두통, 과민성대장으로 고생했는데 체질 식이 조절과 한약으로 두 달 만에 크게 개선되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 최*숙 (만 64세, 여)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard37" class="review-card review-card-handwritten" data-cat="구안와사" onclick="openReviewModal('detailModal37')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag review-cat-tag-special">구안와사·안면마비</span>
            <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
            <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
            <span class="review-date">2023.03</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">오른쪽 안면마비 — 짧은 기간에 마비감·비대칭 모두 사라지고 정상 회복되었어요</h3>
          <p class="review-story">
            2023년 1월 갑작스러운 우측 안면신경 마비로 눈 안 감기고 입 돌아가던 증상, 수정한의원 치료로 짧은 기간에 완전히 회복되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> 김*태 (만 58세, 남)</span>
            <div class="review-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </div>
          <div class="review-card-click-hint"><i class="fas fa-expand-alt"></i> 클릭하여 자세히 보기</div>
        </div>

        <div id="reviewCard38" class="review-card" data-cat="소화기" onclick="openReviewModal('detailModal38')" style="cursor:pointer;">
          <div class="review-card-header">
            <span class="review-cat-tag">역류성식도염·아토피</span>
            <span class="review-handwritten-badge"><i class="fas fa-star"></i> 네이버 후기</span>
            <span class="review-date">2023.05</span>
          </div>
          <div class="review-quote-mark">"</div>
          <h3 class="review-card-title">4년 넘은 역류성식도염, 한 달 한약·약침으로 완전히 없어지고 아토피·비염까지 함께 좋아졌어요</h3>
          <p class="review-story">
            4년간 양약으로도 안 낫던 역류성식도염, 수정한의원 금양체질 진단 후 한약·약침 한 달 만에 증상 완전 소실. 아토피·비염도 함께 호전되었습니다.
          </p>
          <div class="review-card-footer">
            <span class="review-author"><i class="fas fa-user"></i> nemeSIS (네이버)</span>
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
        <span class="review-cat-tag review-cat-tag-special">대상포진·신경통</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.02</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">대상포진 후 신경통 — 대학병원·피부과 한 달 넘게 진통제·주사도 소용없었는데 면역침·파동치료로 회복했습니다</h3>
      <p class="review-story" style="margin-bottom:18px;">
        유방 촬영 후 대상포진이 발생해 피부과·대학병원에서 마약성 진통제·주사를 한 달 넘게 맞았지만
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
            <strong>[발병 및 타 병원 경과]</strong> 유방 촬영 후 2021년 1월 12일부터 약국에서 소염·진통제를 복용했습니다. 3일째 통증이 너무 심해 정형외과에서 진통제 주사와 물리치료를 받았고, 1월 20일 가슴 밑에 빨간 반점이 여러 선으로 나타났습니다. 피부과에서 대상포진 진단 후 마약성 진통제를 처방받았지만 통증이 가라앉지 않았고, 대학병원에서 치료를 받으라는 말씀과 신경차단 수술 안내까지 매우 미우라하셨습니다.<br><br>
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
        <span class="review-author"><i class="fas fa-user"></i> 박*임 (만 54세, 여)</span>
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
        <span class="review-cat-tag">만성천식</span>
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

  <!-- 상세 모달 #26 -->
  <div id="detailModal26" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal26')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">어깨통증·회전근개</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">인천에서 멀리 노원까지 찾아올 만큼 — 어깨통증·일자목·비염이 추나·약침으로 모두 좋아졌어요. 인천에도 병원 생기면 완전 행복할거같아요!</h3>
      <p class="review-story" style="margin-bottom:18px;">
        양쪽 어깨통증과 손떨림·팔저림으로 잠을 못 이루고, 일자목·비염까지 겹쳐 힘들었는데 체질침·추나·태반약침 치료 후 모두 좋아졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">양쪽 어깨에 통증이 점차 심해지고 손떨림, 팔저림이 너무 심해져서 잠을 자다가 깨기를 수도없이 반복했습니다. 수면의 질도 좋지 않았고 어깨결림으로 일상생활이 너무 힘들었어요. 일자목도 심하고 늘 경직되어 있어서 쉽게 피로감을 느끼고 어렸을때부터 겪고 있는 비염도 점차 심해지더라구요. 어깨통증·일자목·비염이 모든것들이 연관이 있는줄 모르고 생활해오다가 이대로는 안되겠다 싶어서 제대로 된 한의원을 찾게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">지인의 추천으로 알게 되었습니다. 병원방문전 리뷰나 후기도 많이 찾아보았는데 평판이 너무 좋더라구요~ 일자목과 어깨통증이 하루하루 심해졌기 때문에 더 이상의 치료를 미룰수 없었습니다. 사실 병원은 개개인이 느끼는 점이 달라서 쉽게 추천을 못하는데, 지인분이 여긴 한번 꼭 다녀오라고 신신당부를 하시더라구요. 믿고 방문하게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">현재 추나요법·태반약침·체질침 병행하여 치료를 받고 있으며 어깨통증은 물론 비염까지도 확실히 많이 좋아졌고, 또 좋아지고 있습니다. 수면의 질이 자연스레 좋아지니 당연히 삶의 질도 높아졌지요. 면역력도 많이 좋아져서 감기 한번 걸리지 않고 생리통도 없어지니 회사생활에도 그리고 일상생활도 너무 즐겁고 활력이 생기더라구요. 진작 치료 받았으면 더 좋았을걸 생각하면서 현재도 열심히 치료받고 있습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">어깨통증으로 무거운 물건을 들지 못했었는데 추나와 약침으로 통증이 완화되어서 이제는 아무렇지않게 무거운것들도 들고, 운동도 시작했습니다. 면역력증가와 체질개선을 통해 간기능도 이전보다 훨씬 좋아졌고 아주 오랫동안 손톱 물어뜯는 버릇이 있었는데 이 부분까지 모두 개선되어 저도 이제 네일아트도 받고 일상생활 자체가 너무 활기차서 행복해요. 아직 완벽하지는 않지만 더더더~! 좋아질거라서 너무 기대중입니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">집이랑 거리가 멀다는게 처음엔 좀 힘들었는데 건강이 회복되는걸 느끼니 거리는 문제가 아니더군요. 친절하게 대해주시고 꼼꼼하게 또 정확하게 진료를 봐주시니 믿고 맡기면 분명 좋은 결과가 있을거예요. 더 많은 분들이 같이 느끼고 행복해졌으면 좋겠습니다. (인천에도 병원 생기면 완전 행복할거같아요.)</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-26-wonyunhye-p1.jpg" alt="어깨통증 회전근개 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 원*혜 (만 31세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #27 -->
  <div id="detailModal27" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal27')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">턱관절장애</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">20년 넘은 턱관절 소리와 1년간의 통증, 3개월 치료로 소리도 통증도 완전히 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-27-leedonghae-p1.jpg" alt="이*해 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*해 (만 74세, 남)</span>
          <span class="review-date-label">작성일: 2022년 4월 16일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>저는 20년 조금 넘게 오른쪽 아구(턱)에서 하품을 하거나 입을 크게 벌리면 딱 하고 소리가 났습니다. 통증은 없었는데 1년 전부터 아프고 통증이 생겨 고통스러웠습니다. 잠 잘 때는 더 고통이 심하며 참기가 힘들었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>다른 곳에서 치료를 받던 중 큰 차도가 없어 치료를 잘하는 한의원을 찾다 우연히 수정한의원 한약 배달하는 차량을 보고 전화번호를 알고 수정한의원에 와서 치료를 받게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>수정한의원 원장님께 뛰어난 침술과 정확한 침술 치료를 받고 추나치료와 목디스크 교정치료, 약침치료, 일반 침 치료를 3개월 정도 받았는데 오른쪽 아구(턱)에서 나던 소리가 완전히 없어지고 아픈 통증도 사라졌습니다. 너무나 기쁩니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>치료를 받는 동안 원장님께서 아픈 곳을 말할 때 자세히 잘 들어주시고 친절하고 정성껏 세밀하게 해주셔서 너무 감사하고, 또 간호사님들이 아주 친절하고 정성껏 간호를 해주셔서 마음이 편하게 치료를 잘 받아 기쁘고 아픈 곳이 많이 좋아져서 아주 고맙고 감사합니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>수정한의원으로 아픈 환자들이 많이 오셔서 고통스러운 병을 치료받고 많은 사람들이 완쾌되셨으면 좋겠습니다. 치료받는 기간 동안에는 환자 자신의 노력도 꼭 필요하다고 생각합니다. 운동을 열심히 하는 것이 아주 중요합니다. 저의 경험담을 말씀드린 것입니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #28 -->
  <div id="detailModal28" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal28')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">난치성 안구통증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">병원마다 이상없다는데 눈이 너무 아팠어요 — 수정한의원 치료 후 안구통증이 전반적으로 호전되고 일상이 돌아왔어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-28-leeshihun-v2.jpg" alt="이*훈 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*훈 (만 28세, 남)</span>
          <span class="review-date-label">작성일: 2022년 3월 11일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>재작년 연말 경에 책을 보는 도중 눈이 아프기 시작했습니다. 초기에는 소량의 빛에도 안구가 민감하게 반응하여 눈이 자주 따갑고 시렸으며 눈물이 자주 나왔습니다. 눈에 이물감이 느껴지기도 했고, 책을 봐도 책의 내용이 원활하게 이해가 안 갈만큼 눈을 사용하는 부분에 어려움이 있었습니다. 그 외에도 안구 내부가 쑤시는 듯한 통증과 눈에 힘을 줘도 눈이 부릅떠지지 않기도 했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>수정한의원에 오기 전, 안과를 비롯해서 몇 군데 병원을 가서 진단을 받았으나 아무런 이상이 없다는 소견만을 접했습니다. 저는 눈 때문에 일상생활에 지장을 받는다고 느꼈기 때문에 제 눈에 이상이 없다는 소견을 신뢰할 수 없었으나, 어떻게 낫는지 알지 못해서 안약을 처방받고, 다른 한의원에 가서 침을 맞고 진료를 받았지만 만족할 수는 없었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>첫 번째 질문에서 언급했던 눈의 증상들이 전반적으로 모두 호전되었습니다. 최근에는 눈을 사용하는 다양한 활동에 전보다 편안함과 자신감을 얻었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>눈을 장시간 사용하는 데 두려움과 거부감이 현저히 줄었습니다. 수정한의원에 처음 내방했을 때 "제 눈이 좋아질 수 있을지 확신을 못 하겠다!"라고 원장님께 말할 정도로 제 안구 상태에 회의적이었는데, 지금은 호전될 수 있을 것 같다는 희망이 보이는 것 같습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>만약 저처럼 난치성, 만성적 문제를 안고 계신 분이 있다면 수정한의원에 내방하셔서 상담을 받아보셔도 좋을 것 같아요. 저는 실제로 효과를 봤고, 지금도 보고 있는 중입니다. 항상 질문에 성실하게 답해주시는 원장 선생님과 치료실 선생님, 상담 실장님께도 감사 인사를 전하고 싶습니다. 감사합니다!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #29 -->
  <div id="detailModal29" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal29')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">턱관절장애</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.12</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">치과에서 "그냥 살아라"고 했는데 — 6~7회 약침·추나로 턱 소리가 차츰차츰 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-29-leekyung-p1.jpg" alt="이*경 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*경 (만 56세, 여)</span>
          <span class="review-date-label">작성일: 2022년 12월 13일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>어느 날 갑자기 식사를 하는데 왼쪽 귀 밑에서 음식을 씹을 때마다 덜거덕 덜거덕 소리가 나면서 부드러운 음식을 먹으면 덜하고 딱딱한 음식을 먹으면 더 큰 소리가 나면서 음식을 먹는 것이 싫어지고 기분까지 우울해져서 한의원을 방문하게 됐습니다. (거의 10년 전쯤부터 수정한의원을 다니고 있음)</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>제가 다니는 병원 주치의 선생님께 갔더니 이명+어지럼증도 있으니 이비인후과 가서 이석증 검사를 하도록 권해주셨는데 이석증도 아니고, 치과에 갔더니 치과 원장님은 엑스레이를 찍어 보더니 별 이상이 없다고, 본인도 그럴 때가 있다며 노화현상인 듯 하다며 그냥 살아라 하더라구요.ㅠ</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>원장님께서 먼저 엑스레이를 보시더니 좌우균형이 맞지 않다고 약침치료와 추나요법을 하자고 하셨고, 6~7회 치료받는 동안 덜거덕 거리는 소리가 딱딱거리는 소리로 작아지고 약해지더니 소리가 차츰차츰 안 나게 되었고 기본 물리치료와 침 치료도 같이 해주셨습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>아픈 이유를 잘 설명해 주시고 어떤 과정으로 치료해 나갈 것인지를 잘 알려주시고 치료 받으러 갈 때마다 모든 직원분들이 반갑게 맞이해 주시고 치료에 정말 최선을 다하시는 원장님께 감사의 말씀 드립니다. 음식을 먹을 때마다 머리에서 소리가 난다는 것, 정말 심란했는데 지금은 편안하고 참 좋습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>원장님과 간호사님 모두 환자에 대해서 친절하고 치료에 최선을 다하시는 모습이 참 좋았습니다. 평생 낫지 않을 거라는 치과 선생님의 말을 듣고 힘들었는데 열심히 치료해주신 원장님께 감사드리고 다른 분들도 치료 포기하지 마시고 열심히 치료받아 보시길 바랍니다. (기다리는 동안의 찜질치료는 더욱 좋습니다)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #30 -->
  <div id="detailModal30" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal30')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">전신통증·간수치·고지혈·혈당</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">머리부터 발끝까지 온몸이 아팠는데 — 3개월도 안 돼 간수치·고지혈증 정상, 통증도 거의 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-30-jangwanyeong-p1.jpg" alt="장*영 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 장*영 (만 60세, 여)</span>
          <span class="review-date-label">작성일: 2022년 8월 12일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>온 몸이 다 아팠어요. 머리부터 발끝까지 뼈 마디가 다 아팠어요. 간 수치도 않좋았고 고지혈증도 있었고 혈당이 높아서 항상 피곤하고 힘들었어요. 자고 일어나면 등과 온 몸이 너무 아팠어요. 몸살 기운이 자주 있었고 삭신이 다 아팠어요. 몸이 아파서 하루 종일 생활하기가 힘들었어요.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>며느리가 수정한의원에서 치료받고 좋아져서 저에게 소개시켜 주어서 치료받게 되었어요. 예전에 다른 곳에서 치료를 받았었는데 효과를 얻지 못했어요.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>얼마 전에 건강검진을 받았는데 간수치와 고지혈증이 정상이 되었고 혈당수치도 경계선 아래로 내려와서 좋아졌어요. 몸에 통증도 거의 사라지고 편해졌어요. 치료 받은 지 3개월이 안 되었는데 이제 거의 아프지 않아요.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>아프지 않아서 생활하기가 편해졌어요. 잠자는 것도 편해졌어요.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>수정한의원에는 다 좋아요. 친절하고 특히 원장님께서 정말 정성껏 치료해 주셔서 감사해요. 치료를 고민하고 계신 분에게는 열심히 치료 받으시라고 말씀드리고 싶어요. 친절하신 간호사님들 감사합니다.</p>
        </div>
      </div>
    </div>
  </div>








  <!-- 상세 모달 #72 -->
  <div id="detailModal72" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal72')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">대상포진·신경통</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-detail-tag">#대상포진 #신경통 #파동치료</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 8월</span>
      </div>
      <h2 class="review-detail-title">백신 맞았어도 걸린 대상포진 — 체질한약·약침·파동치료 2달로 모든 통증 사라지고 신경통도 잘 낫는다는 걸 알았어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-72-siksongjeong-p1.jpg" alt="식송정 대상포진·신경통 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>식송정</strong>&nbsp;·&nbsp;작성일 2024년 8월 19일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>대상포진을 심하게 앓았습니다. 좌측복부에 통증이 있어서 단순 근육통으로 생각하고 파스만 붙였는데 점점 더 심해져서 내과를 갔더니 대상포진 진단을 받았습니다. 백신접종을 해서 대상포진이 걸릴 거란 생각도 못 했습니다. 내과에서 처방한 1주일치 약을 먹고 약간 호전은 되었으나 통증이 심해서 소염진통제만 복용했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>평소 다니던 수정한의원 최원장님께 문의하니 잘 낫는다고 하셔서 내원하게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>체질한약과 약침, 바이러스에 대한 파동치료를 2달 정도 받은 후 모든 통증이 다 사라졌습니다. 대상포진 신경통은 잘 안 낫는다고 해서 걱정했는데 감사합니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>2010년부터 토양체질에 맞는 한약과 체질침, 식이조절을 하면서 건강관리를 하고 있습니다. 앞으로도 훌륭한 의술로 난치환자들에게 훌륭한 업적 이루시길 바랍니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #71 -->
  <div id="detailModal71" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal71')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">기관지천식</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-detail-tag">#기관지천식</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 8월</span>
      </div>
      <h2 class="review-detail-title">30년된 고질 기관지천식 — 한약·약침·체질침·온열치료로 어떤 자극에도 기침 없이 완전히 좋아졌어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-71-anoknam-p1.jpg" alt="안*남 기관지천식 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>안*남</strong>&nbsp;(만 63세, 여성)&nbsp;·&nbsp;작성일 2024년 8월 7일 &nbsp;·&nbsp;자필후기
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>30년 전 유치원 아이들과 수영장에 다녀온 후 며칠 동안 아팠는데 기침이 멈추지 않아 대학병원 검사 결과 '먼지 알러지 기관지 천식'이라 했습니다. 반년 동안 약과 주사 흡입기까지 사용했지만 고쳐지지 않아 한의원에서 좋아졌고, 지금까지 감기 걸리면 천식으로 한약을 일 년에 두 번은 먹어야 하는 불편함이 있었습니다. 늘 찬바람, 급격한 온도차, 먼지 있는 곳이 두려웠습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>넘어져서 정형외과 다니는 중 "수정한의원 온열치료실 운영"이라는 문구가 눈에 들어왔고, 봄에 다시 천식 기침이 심해져서 온열치료를 병행하면 좋아질 것 같아서 찾아오게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>기관지 깊숙한 곳에서 올라오는 기침은 참을 수 없는 고통으로 눈물 콧물 흘려가며 얼굴이 빨개지고 배가 아플 만큼 심하게 기침을 해야 했고, 새벽이면 증상이 더 심하여 잠을 잘 수가 없었는데 한약, 약침, 체질침을 함께 병행하고 온열치료실을 열심히 이용하여 몸을 따뜻이 하면서 지금은 기침을 하지 않습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질적인 변화</h4>
        <p>지금은 너무 행복합니다. 원장선생님께서 저의 주치의 선생님이 되신 것 같이 정성껏 치료해 주시니 믿음이 가고, 저도 원장님이 하라는 대로 한약, 태반약침, 체질침 등을 열심히 되도록 자주 치료하면서 지금은 완전히 좋아졌고, 어떠한 자극에도 기침 안 하고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>저와 같이 천식은 고질병이라 생각하시는 분들 망설이지 마시고 수정한의원 원장님께 꼭 8체질 검사 받으시고 치료하셔서 행복한 삶을 사셨으면 좋겠습니다. 망설이지 마십시요! 원장님과 친절하신 선생님들 찐 감사드립니다. 복 많이 받으십시오. 사랑합니다~♡♡♡</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #70 -->
  <div id="detailModal70" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal70')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#폐쇄공포증 #불면증 #두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 11월</span>
      </div>
      <h2 class="review-detail-title">25년간 발바닥 열·손발 가려움 — 한약 치료 후 폐쇄공포·불면·위식도염까지 모든 게 편해졌어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-70-unk-p1.jpg" alt="unk**** 폐쇄공포증·불면증·두통 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>unk****</strong>&nbsp;(여성)&nbsp;·&nbsp;2024년 11월 &nbsp;·&nbsp;네이버 예약 이용후기
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>폐쇄공포증과 불면증, 두통, 어깨통증으로 고생하고 손발 끝에 열나고 가렵고 발바닥에 열나서 답답해서 잠도 못 잤습니다. 25년째 겨울에도 맨발로 다녔습니다. 위식도염으로 소화도 안 되고 가스도 많아 속이 따갑고 목에 가래가 걸려 힘들었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>원장님께서 심장과 위장에 열이 많고 신장의 진액이 부족하니 한약을 먹으면 좋아진다고 하셨습니다. 처음에는 반신반의했지만, 지금은 감사하기만 합니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>이제는 모든 게 편해졌습니다. 특히 손발 끝이 열나고 가렵고 발바닥에 열나는 것은 평생 못 고칠 병으로 생각했는데, 원장님 말씀이 정답이었습니다. 감사하고 고마워서 눈물이 납니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>수정한의원은 쾌적하고 원장님의 친절한 치료와 간호사님들의 친절은 다른 병원과 비교될 정도로 친절하십니다. 무조건 선생님의 말씀대로 하시면 확실히 치료된다고 생각합니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #69 -->
  <div id="detailModal69" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal69')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관절</span>
        <span class="review-detail-tag">#척추분리증 #류마티스 #기침</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 5월</span>
      </div>
      <h2 class="review-detail-title">8년 허리시술·류마티스 입원도 소용없던 척추분리증 — 추나·약침·매선 7~3회로 굽은 허리 펴지고 만성 기침도 좋아졌어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-69-boo-p1.jpg" alt="boo**** 척추분리증·류마티스 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>boo****</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 5월 29일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>류마티스관절염으로 염증치료 때문에 병원에 입원도 하고, 척추분리증으로 허리시술도 하며 8년 이상 일상생활을 할 수 없었습니다. 자가면역질환이라 감기로 인한 기침이 낫질 않아 두려움과 괴로움에 고생을 했습니다. 할머니처럼 허리가 굽어 펴지지 못하는 상태였습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>단전수련을 하는 지인이 8체질 치료를 한다고 해서, 생각지도 않던 한방치료를 시작했습니다. 처음엔 기침도 심해서 치료될까 하는 마음이었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>토양체질 한약과 약침·추나치료 7번, 매선치료 3번을 했는데, 굽었던 허리가 펴지고 심했던 기침도 많이 좋아졌습니다. 허리도 펴지고 기침도 좋아졌고, 반듯이 걸으니 용기가 나고 나을 수 있다는 희망이 생겼습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>원장님께 감사한 마음으로 열심히 치료 받고 있습니다. 친절한 간호사님께도 고맙습니다. 원장님 믿고 열심히 치료받으시면 삶의 질이 달라질 거라 확신합니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #68 -->
  <div id="detailModal68" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal68')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#이명 #난청</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 6월</span>
      </div>
      <h2 class="review-detail-title">이비인후과도 답 없던 이명·난청·고막 먹먹함 — 약침 3회로 완치, 시기를 놓치지 않은 게 정말 다행이에요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-68-seoginam-p1.jpg" alt="서*남 이명·난청 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>서*남</strong>&nbsp;(만 56세, 여성)&nbsp;·&nbsp;작성일 2024년 6월 3일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>체력적으로 금식기도로 인하여 많이 떨어져 있는 상황에서 귀에 먹먹한 불편함을 느꼈습니다. 전에 난청 치료도 받았던 터라 걱정이 많이 되었습니다. 집 가까이 수정한의원에서 이명 치료를 한다는 것을 간판을 통해 보고 치료받게 되었는데, 당시 먹먹함과 산 높은 곳에 갔을 때 막힘 증상처럼 고막이 막혔다 뚫렸다 해서 마음으로 걱정이 많이 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>위와 같은 증상으로 치료를 받게 되었습니다. 약침 치료를 3번 받았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>약침 치료 후 많이 호전되었고, 개인적으로도 체력보강을 위해 잘 먹고 잠을 푹 자려고 병행하여 노력하였습니다. 치료 후 불편한 증상은 거의 없어졌고 정상에 가깝습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>이명치료나 난청치료는 시기가 중요하다고 합니다. 이비인후과에서는 별다른 치료법이 없어서 고민하고 걱정했는데, 약침 한방치료로 완치되었다는 게 너무도 감사한 일입니다. 4개월 전에도 난청으로 힘들었는데 그때도 약침치료로 나았어요. 체력적으로 떨어지지 않게 꾸준히 관리해야겠습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #67 -->
  <div id="detailModal67" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal67')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">체질다이어트</span>
        <span class="review-detail-tag">#체질다이어트 #편두통 #16kg감량</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 11월</span>
      </div>
      <h2 class="review-detail-title">새벽마다 비명 지르던 편두통·비만 — 체질 맞춤치료로 두통 소실, 16kg 감량·기초대사량 모두 표준 달성</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-67-byunyeojin2-p1.jpg" alt="변*진 체질다이어트·편두통 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>변*진</strong>&nbsp;(만 44세, 여성)&nbsp;·&nbsp;작성일 2024년 11월 16일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>예전에 없었던 코골기가 시작되고, 뒷목을 타고 머리 혈관이 꽉 막히는 듯 아파오기 시작했습니다. 며칠 후 새벽에 "악!" 하는 비명을 지르면서 큰 고통에 잠이 깨었습니다. 신경외과·혈관내과 등 병원을 다녀도 잡지를 못해서 업무에 집중할 수 없었고 계속 통증이 있었습니다. 더불어 운동을 꾸준히 하고 있었지만 체중이 계속 증가해 몸이 붓고 무기력하며, 맞는 옷이 없고 일상생활에 많은 불편이 있었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>여러 병원을 다녀봐도 차도가 없자 한의원을 찾던 중 환자들의 후기를 꼼꼼히 읽게 되었고 내원했습니다. 첫 진료 때 꼼꼼히 봐주시고 원인을 잘 찾아 주셨으며, 환자의 몸과 체질에 맞게 치료와 처방을 해주셔서 신뢰가 생겼고 꾸준히 치료를 받게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>첫 번째로 경추가 틀어져 눌린 신경 쪽에 많은 고통이 있었는데 2~3개월간 매일 치료를 받으면서 아주 좋아졌습니다. 지금은 통증이 없는 상태입니다. 두 번째로 체중이 증가해 비만이었는데 지금은 체질개선으로 표준 상태이며 16kg 감량에 성공했습니다. 기초대사량·체지방 모두 표준이 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>환자 개개인의 체질에 맞는 음식을 알려주시고, 적절한 치료와 관리로 건강이 좋아졌습니다. 굶는 다이어트가 아닌 잘 먹고 운동하는 과정을 통해 성공적인 다이어트로 이어졌습니다. 지금은 스스로 운동·식단·자기조절을 잘하고 있으며, 주변 사람들이 놀라고 부러워합니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>수정한의원에서는 공통의 치료가 아닌 개인의 컨디션·체질에 맞게 치료를 받을 수 있어 주변에도 추천하는 병원입니다. 내 몸에 맞는 음식을 알아내시고 나쁜 음식을 먹지 않게 알려주시니, 여러분들도 꼭 한번 들어보시기 바랍니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #66 -->
  <div id="detailModal66" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal66')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#편두통 #복통 #설사</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 6월</span>
      </div>
      <h2 class="review-detail-title">새벽 혈관 막힘·편두통·과민성대장 — 3주 체질 맞춤치료로 혈압 140→정상, 복통·설사·편두통 거의 소실</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-66-byunyeojin-p1.jpg" alt="변*진 편두통·복통·설사 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>변*진</strong>&nbsp;(만 45세, 여성)&nbsp;·&nbsp;작성일 2024년 6월 28일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>평소에 심한 피로감으로 잠에 들었다가 새벽에 머리 뒤쪽 혈관이 꽉 막히는 느낌과 함께 엄청난 두통이 발생했습니다. 이후 혈관내과·신경외과를 다니며 처방받고 약을 먹었지만 효과가 없었고, 소화불량에 대장이 예민하여 복통과 설사가 잦았습니다. 하루에도 화장실을 4~5번씩 다니고 대중교통을 이용할 때 갑자기 배가 아픈 경우가 많아 장거리 이동 시 물조차 마시지 못했습니다. 여기에 식사량이 많지 않은데도 살이 찌고 몸이 늘 부어올라 힘들었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>새벽에 엄청난 두통, 머리가 꽉 막힌 느낌, 뒷목이 뻣뻣해지고 고개 돌리는 것도 힘들어서 급히 수정한의원에 내방하게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>약 3주 정도 치료를 받고 있는데 정확한 체질 진단과 환자에게 맞는 치료(침·약물·한약·식단관리)를 전반적으로 해주셔서 140이 넘던 혈압이 정상 수치가 되었고, 뒷목과 편두통이 거의 느끼지 못할 정도로 개선되었습니다. 동반으로 아팠던 허리도 좋아졌고, 몸의 구성 성분도 좋아졌는데 지방이 많이 빠지고 근육량이 증가했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>① 환자 개인의 상태·원인을 정확히 파악하여 치료와 처방을 하신다는 점 ② 환자의 증상을 아주 자세히 들으시고, 매일 증세를 확인하여 치료해주신다는 점 ③ 나빠진 체질을 정상화시키기 위해 식단 관리를 해주시는 점 ④ 혈압·편두통 증세가 거의 사라지고 깊은 잠을 자게 된 점 ⑤ 만성소화불량으로 인한 과민성대장증후군으로 복통·설사가 잦았는데 개선된 점.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>빠르게 나를 자세히 관심 있게 분석하고 원인을 찾고 치료할 수 있는 병원입니다. 매일 환자의 증상을 확인하여 맞춤 치료를 해주시고 친절하십니다. 저의 경우는 3주 만에 많은 효과가 있었습니다. 아픈 것을 감추지 마시고 꼭 수정한의원에 가시기 바랍니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #65 -->
  <div id="detailModal65" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal65')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#두통 #팔저림 #목잠김</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 2월</span>
      </div>
      <h2 class="review-detail-title">진통제 없이 잠 못 자던 갑작스런 두통·팔저림·목잠김 — 치료 후 혈압↓·진통제 끊고 삶의 질 높아졌어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-65-bangjeonghui-p1.jpg" alt="방*희 두통·팔저림·목잠김 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>방*희</strong>&nbsp;(만 57세, 여성)&nbsp;·&nbsp;작성일 2024년 2월 1일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>갑작스러운 심한 두통으로 일상생활이 어려웠고, 밤에도 진통제 없이 잠을 자기가 어려웠습니다. 오른쪽 팔에 저림 증상이 있었고, 소리가 잘 나오지 않았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>지인의 소개로 수정한의원을 찾게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>높았던 혈압이 낮아지고, 한의원을 다니면서부터 진통제를 먹지 않게 되었습니다. 목과 어깨 통증도 완화되고, 손의 저림도 완화되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>두통이 완화되어 삶의 질이 높아지고, 통증이 없어지니 몸도 가벼워졌습니다. 가장 좋았다고 느껴지는 것은 환자들이 심리적인 안정을 느낄 수 있는 환경입니다. 집 같은 편안함이 치료에 한몫을 한다고 생각합니다. 원장님의 지도로 몸의 치료와 함께 운동의 중요성도 깨닫게 해주셨습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>수정한의원만이 주는 편안함은 가장 큰 장점인 듯합니다. 심리적인 안정이 치료에 많은 도움을 줍니다. 원장님에 대한 믿음도 절로 생기고 직원들의 친절함도 그대로 계속 이어가 주세요. 치료는 미루지 말고 즉시, 원장님을 믿고 따라가시면 좋은 효과를 볼 수 있습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #64 -->
  <div id="detailModal64" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal64')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관절</span>
        <span class="review-detail-tag">#협착증 #수술후유증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 8월</span>
      </div>
      <h2 class="review-detail-title">8년간 복대 없이 못 걷던 허리수술 후유증 — 매선 9회로 통증 50% 이상 감소, 8년 만에 처음 복대 없이 걸어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-64-nam-p1.jpg" alt="nam**** 협착증·수술후유증 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>nam****</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 8월 13일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>8년 전 허리수술을 하고 그 후로 복대를 안 하면 걸을 수 없었어요. 허리 수술 후 3년이 지나 층계에서 넘어져 허리가 골절돼 병원에서 쇠를 박고 대소변을 받아내고 허리가 더 나빠져서, 지금까지 하루도 복대 없이는 움직일 수가 없었어요.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>친구 소개로 난생 처음 한의원을 오게 되었어요. 체질을 알고 체질식도 하고, 체질침과 체질한약도 먹고, 약침과 매선치료를 받았어요.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>매선치료를 9번째 받고 허리에 힘이 들어가고 통증도 50% 이상 좋아졌어요. 8년 만에 처음으로 복대 없이 걸어요. 복대를 안 해서 편하고 좋아요. 이 정도로 안 아프고 평생 살았으면 좋겠어요.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>허리를 고칠 수 있을 거라 생각도 못했는데 좋아지는 걸 느끼니까, 수술하기 전에 와볼 걸 하는 생각이 들어요. 다른 분들은 무조건 수술하지 말고 한의원 치료를 먼저 받아보고 결정하셨으면 좋겠어요.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #63 -->
  <div id="detailModal63" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal63')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관절</span>
        <span class="review-detail-tag">#협착증 #혈압 #식은땀</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">6년 병원·운동도 못 고친 협착증 — 한 달 체질한약·추나·약침으로 통증 싹 사라지고 혈압 180→안정, 잠 7시간 자요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-63-khs-p1.jpg" alt="khs**** 협착증 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>khs****</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 7월 3일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>협착증으로 허벅지·다리가 저려서 안고 서는 것조차 힘들었고, 잠은 하루에 2시간밖에 못 잤습니다. 밥 먹을 때와 잘 때 식은땀을 너무 많이 흘리고, 갱년기 증상과 장염·방광염으로 고생을 하면서 혈압도 180까지 올랐습니다. 병원을 다녀도 치료도 잘 안 되고 몸이 많이 망가져 고통받고 있었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>간경화로 수정한의원에서 치료받고 나은 지인의 소개로 멀리 인천에서 치료를 받으러 왔습니다. 6년 동안 병원도 다니고 운동도 했지만 진전이 없었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>한 달 동안 체질한약과 추나·약침 치료를 하고 나서 협착증 통증이 싹 사라졌습니다. 땀도 안 나고 잠도 7시간 정도 잘 자고, 혈압약도 줄이고 많이 안정이 됐습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>치료도 잘해주시고 너무 친절하게 대해주셔서 내 집 같이 편하게 치료받아서 제일 좋았습니다. 시간을 투자하시면 반드시 좋아집니다!</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #62 -->
  <div id="detailModal62" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal62')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">면역·대사성질환</span>
        <span class="review-detail-tag">#도한 #전신통 #설사</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 11월</span>
      </div>
      <h2 class="review-detail-title">25년 전국·중국 치료 모두 실패한 도한·전신통·설사 — 토양체질 치료로 이불 흠뻑 식은땀 사라지고 주위가 기적이라 해요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-62-kts-p1.jpg" alt="kts**** 난치성 도한·전신통 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>kts****</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 11월 21일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>몸은 추운데 땀이 너무 많이 나서 잘 때 이불이 흠뻑 젖어 잠을 못 자고, 하루에도 옷을 20번 이상 갈아입어야 했습니다. 배에 바람이 들면 설사를 쫙쫙 하고 열흘은 지나야 멈췄습니다. 바람만 스쳐도 몸이 붓고 떨리고 전신의 뼈가 다 아파서 일상생활을 할 수 없을 정도로 고통이 심했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>병원에서는 병명이 없어서 치료를 못 한다고 했고, 전국에 용하다는 한의원에서 25년 동안 약을 먹어도 아무 소용이 없었습니다. 중국에 가서 3년간 치료해도 효과가 없었습니다. 조카의 소개로 수정한의원에 왔는데, 토양체질로 심장의 열 때문이라고 열을 쳐야 한다고 하셨습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>체질한약과 체질침·추나·약침·매선치료를 하면서 한여름에도 내복을 2벌씩 입었는데 내복도 다 벗고 추위도 안 타고, 온몸에 통증도 없어졌습니다. 땀도 안 나서 이불이 젖지 않아 잠을 푹 잘 수 있고, 대변 실수도 없어졌습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>주위 사람들이 모두 기적이라고 말합니다. 25년 넘게 전국과 중국을 다니며 해결하지 못했던 고통에서 벗어나 이제는 정상적인 일상생활을 할 수 있게 되었습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #61 -->
  <div id="detailModal61" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal61')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#돌발성난청 #이명 #두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">MRI 정상인데 소리 안 들리던 돌발성난청·1년 두통·이명 — 경추 추나·약침·체질한약 3주로 먹먹함 사라지고 잘 들려요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-61-bbne2-p1.jpg" alt="BBNE2 돌발성난청·이명·두통 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>BBNE2</strong>&nbsp;(남성)&nbsp;·&nbsp;작성일 2024년 7월 12일 &nbsp;·&nbsp;네이버 예약 이용후기 · 1번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>6월 14일 아침에 일어났는데 두통과 함께 왼쪽 귀가 먹먹하고 소리가 안 들렸습니다. 괜찮아지겠지 하다가 6월 17일 이비인후과에 가니 돌발성난청이라고 스테로이드를 먹기 시작했습니다. 약을 먹어도 낫지 않고 MRI에는 이상이 없는데 소리는 들리지 않고, 장애로 남게 될 것 같아 너무 두려웠습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>돌발성난청을 검색하다가 수정한의원을 찾게 되었습니다. 돌발성난청이 왜 생겨났는지 자세히 설명해주시고, 통증이 있는 부위만 치료하는 것이 아니라 발병의 원인부터 치료해주시니 좋았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>X-RAY를 보시고 경추 1-2번 추나치료와 약침·체질한약을 3주간 복용하고, 먹먹했던 증상이 사라지고 잘 들립니다. 1년 정도 고생했던 송곳으로 찌르는 듯 쓰라린 두통과 이명도 거의 사라졌습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 한의원에 전하고 싶은 말</h4>
        <p>한의원은 처음인데 수정한의원에서 치료받은 후 한의원에 대한 신뢰가 생겼습니다. 발병 원인부터 찾아 근본 치료를 해주시는 점이 인상적이었습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #60 -->
  <div id="detailModal60" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal60')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">피부·아토피</span>
        <span class="review-detail-tag">#아토피</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">피부과 전전해도 재발하던 고질 아토피 — 금양체질 한약·약침으로 사라지고 1년 넘게 재발 없어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-60-nemesis-p1.jpg" alt="nemeSIS 아토피 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>nemeSIS</strong>&nbsp;(남성)&nbsp;·&nbsp;작성일 2024년 7월 11일 &nbsp;·&nbsp;네이버 예약 이용후기 · 2번째 방문
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>어릴 때부터 팔다리 접히는 부위에 아토피가 심했고 여름에는 특히 엉덩이에 진물이 나고 가렵고 갈라져서 통증이 심했습니다. 아토피 때문에 피부과를 자주 다녀도 일시적 효과는 있지만 얼마 지나지 않아 재발하여 수정한의원을 찾았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>금양체질 한약과 약침치료로 아토피가 사라졌고, 1년이 더 넘은 지금도 다시 생기지 않고 있습니다. 최근에 뒷목이 아프고 발가락 부위에 아토피가 생겨서 현재 치료 중입니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 수정한의원의 장점</h4>
        <p>수정한의원의 가장 큰 장점은 정확한 체질진단을 통해서 지은 한약이라 그런지 피부가 안 좋을 때 하루에 5~6번 먹어도 편한 것입니다. 또한 치료가 끝나도 체질에 맞는 음식을 먹고 생활습관을 고치게 해서 재발이 안 되는 것 같습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>단점은 6개월 이상 오랜 기간 인내심을 갖고 치료를 해야 한다는 점입니다. 그래도 고질병인 아토피를 낫게 해 줘서 감사합니다!</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #59 -->
  <div id="detailModal59" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal59')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관절</span>
        <span class="review-detail-tag">#무릎 #고관절</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 11월</span>
      </div>
      <h2 class="review-detail-title">6개월 주사치료도 못 고친 무릎·고관절 — 토양체질 한약·추나·약침·매선으로 계단 오르내리고 5년 수면장애까지 해결됐어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-59-zza-p1.jpg" alt="zza**** 무릎·고관절 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>zza****</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 11월 28일 &nbsp;·&nbsp;네이버 예약 이용후기
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>23년 12월 31일 바닥에 주저앉아 무릎과 고관절이 심하게 아펐습니다. 정형외과에서 원인은 허리라고 주사를 6개월간 맞았으나 계속 치료해도 무릎과 고관절이 여전히 아프고 계단을 오르내리지도 못했습니다. 또한 5년 동안 정신과에서 수면제를 먹어도 4시간 이상 잠을 못 자서 항상 몸이 무겁고 머리가 멍해서 생활에 활력이 없었고, 누가 물어보면 내 소원이 4시간 이상 잠을 자는 게 소원이라고 말할 정도였습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>10월 8일 노원역 주변에 한의원을 알아보던 중 수정한의원이 눈에 딱 들어왔습니다. 한의원에서 토양체질 한약과 추나·약침·매선치료 및 온열치료를 받았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>지금은 계단을 편하게 오르내리고, 전혀 안 되던 양반다리도 됩니다. 그리고 또 하나 좋아진 게 있습니다. 5년 동안 수면제를 먹어도 4시간을 못 자던 수면 문제가, 지금은 6시간 이상 잠을 푹 자게 되어 살 것 같습니다. 통증도 많이 없어지고 몸도 가벼워졌습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>기분도 좋고 생활에 활력소가 생겼습니다. 수면이 해결되니 머리가 맑아지고 매사 의욕이 넘칩니다. 토양체질에 맞는 생활 지도가 전반적인 건강 회복에 큰 도움이 되었습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #58 -->
  <div id="detailModal58" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal58')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#돌발성난청 #이명</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">병원 3곳 전전해도 대답 없던 돌발성난청·이명 — 한약·체질침으로 이명 소리 사라지고 조금씩 좋아지고 있어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-58-kimyoungae-p1.jpg" alt="김*애 돌발성난청·이명 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>김*애</strong>&nbsp;(만 67세, 여성)&nbsp;·&nbsp;작성일 2024년 7월 6일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>2023년 5월 화장실에서 미끄러져 대퇴부(좌측) 골절과 허리 3·4번 골절로 수술 후 1년간 요양병원 생활을 했습니다. 2024년 3월 퇴원 후 어느 날 귀에서 환풍기 도는 소리가 나기 시작했습니다. 이비인후과 3곳, 신경과(운정·파주)를 방문했으나 호전이 없어 죽을 것만 같은 답답함이 이어졌습니다. 돌발성 난청으로 주파수에 민감해져 전화통화·네비게이션소리·후드소리만 들어도 귀가 아팠으며, 면역 저하로 시력까지 떨어져 안경을 쓰게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>목발을 짚고 어슬대다 횡단보도 앞에서 수정한의원을 우연히 내원하게 되었습니다. 극심한 구타비음으로 수면제 없이는 잠을 못 잘 정도로 심한 불면증도 있었습니다. 원장님께서 처방해주신 한약 복용과 침으로 이명소리는 없어지고, 꾸준한 침치료에 귀아픔도 없어질 것이라 믿고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>신경쇠약·이명 치료로 증상들이 호전되었습니다. 원장님의 체질치료와 자세한 상담으로 조금씩 조금씩 좋아지고 있음을 느낍니다. 면역이 떨어져 몸의 근력이 다 떨어졌던 상태도 차츰 회복되고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>체질을 알 수 있어서 좋았고, 음식에서 좋은 것과 나쁜 것을 알 수 있어 더욱 좋았습니다. 돔봉과 온열치료로 치료 효과가 훌륭하며, 겨울에는 침 효과가 더욱 높을 것으로 믿습니다. 지인들에게 많이 권유하고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>음악소리에 민감하여 치료 중 음악 멜로디를 조용한 것으로 바꾸는 것도 좋지 않을까 생각합니다. 요즈음 이명으로 고통받는 분들이 많습니다. 저는 수정한의원에서 치료하실 것을 권유하고 있습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #57 -->
  <div id="detailModal57" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal57')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">자율신경·뇌신경</span>
        <span class="review-detail-tag">#난청 #턱관절</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 네이버후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">혈압 150·난청·턱관절통증 한번에 — 3개월 체질한약·매선·약침·추나로 혈압 130대, 안들리던 핸드폰 소리까지 들려요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-57-sumi245-p1.jpg" alt="수*이 난청·턱관절 네이버후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>수*이</strong>&nbsp;(여성)&nbsp;·&nbsp;작성일 2024년 7월 3일 &nbsp;·&nbsp;네이버 예약 이용후기
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>난청과 만성대장증후군·턱관절통증으로 고생하던 중 혈압이 150을 넘으면서 하루하루가 가시방석에 앉아있는 듯 했습니다. 중이염으로 인한 난청으로만 알고 있었는데, 엑스레이를 찍어보니 경추 5~6번 디스크에 척추측만과 골반 비틀림이 나타났고, 경추 1~2번이 바로 있지 않아 청력 문제가 생겼다는 진단에 놀라움을 금치 못했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>친구가 수정한의원을 소개해 난청 치료의 기대와 희망으로 내원했습니다. 충남 예산에서 주 1회 고속버스를 타고 다닐 정도로 치료에 적극적으로 임했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>3개월간 체질한약·매선·약침·추나 치료로 혈압이 130대로 낮아졌고, 안들리던 핸드폰 소리도 들리고 청력도 좋아졌습니다. 금양체질에 맞는 생녹두 섭취로 더위도 덜 느끼고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>치료의 효과를 보게 되어 작년보다 삶의 자신감이 생겼습니다. 친구에게 감사하고 원장님과 간호선생님들의 친절에 감사합니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>친구에게 감사하고, 원장님과 간호선생님들의 친절에 감사드립니다. 수정한의원을 고민하시는 분들께 적극 추천드립니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #56 -->
  <div id="detailModal56" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal56')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">피부·아토피</span>
        <span class="review-detail-tag">#아토피</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 7월</span>
      </div>
      <h2 class="review-detail-title">몇 년째 피부과 다녀도 변화 없던 아토피 — 한약으로 눈에 보이는 피부 개선, 발작 범위·빈도가 확 줄었어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-56-kimgichan-p1.jpg" alt="김*찬 아토피 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>김*찬</strong>&nbsp;(만 27세, 남성)&nbsp;·&nbsp;작성일 2024년 7월 26일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>피부가 붉게 올라와 가렵고 꺁으면 더 상태가 안좋아지며 붉은 범위가 넓어졌습니다. 자다가 무의식적으로 피부를 꺁으면 많이 부어 있었고, 다리 부분은 걸으면 피부가 아플 정도로 심했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>피부과 병원을 몇 년째 다녀도 처으로 와나하지 않아 어머니의 권유로 한약을 먹어보자 해서 내원했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>피부가 붉게 발작되는 증상이 많이 호전되었습니다. 피부 때문에 일상생활이 지장이 있었는데 지금은 일상에 지장은 없을 정도로 발작 범위가 줄고 빈도도 줄어들었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>피부과에서 몇 년째 다녀도 그렇게 증상 완화가 없다는 생각을 못 받았는데, 한의원에서 치료를 받으니까 눈에 보이는 피부 개선 상태가 있어 상당히 만족스럽습니다. 내 몸에 맞는 식단과 좋은 생활 습관을 알수 있어서 더욱 좋았습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>피부 질환은 치료를 받으면서 식단이나 스트레스 관리를 잘 하는 게 중요합니다. 식단 관리와 한약을 꾸준히 먹다 보면 피부 질환 개선에 큰 도움이 될 것 같습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #55 -->
  <div id="detailModal55" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal55')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추관절</span>
        <span class="review-detail-tag">#무릎인대파열</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2024년 3월</span>
      </div>
      <h2 class="review-detail-title">전동차에 치여 주저앉아 걷지도 못하던 무릎인대파열 — 체질침·약침·매선으로 어지럼증까지 함께 낫고 혼자 걸어다녀요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-55-kwonhyukja-p1.jpg" alt="권*자 무릎인대파열 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>권*자</strong>&nbsp;(만 79세, 여성)&nbsp;·&nbsp;작성일 2024년 3월 25일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>건널목에서 장애인 전동차가 뒤에서 달려오며 무릎 옆을 치고 가버렸습니다. 그 자리에 주저앉아 움직이지 못하였고, 처음엔 걷지도 못해 택시를 타고 다녔습니다. 당시 어지럼증으로 수정한의원에 다니던 중이라 간신히 올라와 침을 바로 맞아 조금 나아졌습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>한의원에서 침을 맞았을 때 시원한 느낌이 있어 꾸준히 치료를 받았습니다. 2014년 무릎연골이 끊어졌었는데 병원에서 빠른 조치 없이 방치되다 2015년 1월 시술을 받았으나 나아지지 않았습니다. 지인의 소개로 수정한의원에서 치료를 결심하고 다니게 되었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>어지럼증으로 치료하던 중 다리를 다쳤는데, 매선과 약침 치료를 병행하며 어지럼증도 많이 좋아지고 다쳤던 왼쪽 다리도 함께 많이 회복되었습니다. 꾸준한 치료 끝에 혼자 걸을 수 있을 정도로 좋아졌습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>병원에서는 증상이 없다고 치료를 해주지 않았는데, 수정한의원에서 치료를 받고 아주 좋아졌습니다. 내 스스로 걸어다닐 수 있다는 것이 너무 감사합니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>주변에 다른 아픈 사람들과 가족이 여기서 꼭 치료를 받았으면 좋겠습니다. 소개를 많이 하고 있습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #54 -->
  <div id="detailModal54" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal54')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">면역·대사성질환</span>
        <span class="review-detail-tag">#성대결절</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023년 12월</span>
      </div>
      <h2 class="review-detail-title">5개월 쉰목소리·성대결절 수술 권유 — 목양체질 진단 후 한약·약침·온열 3개월 집중치료로 수술 없이 완치됐어요</h2>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-54-choeyoungsook-p1.jpg" alt="최*숙 성대결절 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-author">
        <i class="fas fa-user-circle"></i>
        <strong>최*숙</strong>&nbsp;(만 47세, 여성)&nbsp;·&nbsp;작성일 2023년 12월 20일
        <div class="review-stars" style="margin-top:6px;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-notes-medical"></i> 증상 및 불편 사항</h4>
        <p>약 5개월간 쉰 목소리와 갈라지는 목소리가 지속됐습니다. 영업직 특성상 고객에게 목소리를 자주 지적받아 스트레스가 심했고, 말할 때마다 땀이 나고 버벅거려 일상 업무에 큰 어려움을 겪었습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-question-circle"></i> 수정한의원을 찾게 된 이유</h4>
        <p>이비인후과 2곳을 방문해 성대결절 진단을 받고 2주간 말 금지·물 섭취·음성 치료를 권고받았으나 효과가 없었습니다. 수술을 권유받았지만 부작용이 우려돼 지인 추천으로 수정한의원을 선택했습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-chart-line"></i> 치료 후 개선된 점</h4>
        <p>체질 검사에서 목양체질로 감별된 후 한약·약침·온열 치료를 매일 진행했습니다. 체질에 맞는 식이 요법도 병행하며 3개월 만에 수술 없이 목소리가 완전히 회복됐습니다. 치료 중 전반적인 체력도 크게 향상됐습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-heart"></i> 삶의 질 변화</h4>
        <p>불안감이 사라지고 수면의 질이 개선됐습니다. 원장님·사모님·간호사님 모두 친절하고 꼼꼼한 관리를 해주셔서 심리적 안정에도 큰 도움이 됐습니다. 이제는 목소리 걱정 없이 활발하게 영업 활동을 이어가고 있습니다.</p>
      </div>
      <div class="review-detail-section">
        <h4><i class="fas fa-comment-dots"></i> 한의원에 전하고 싶은 말</h4>
        <p>수술 없이 완치될 수 있도록 정성껏 치료해 주신 원장님과 직원분들께 진심으로 감사드립니다. 성대결절로 고민하시는 분들께 꼭 수정한의원을 추천드리고 싶습니다.</p>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #53 -->
  <div id="detailModal53" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal53')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">백혈병·항생제불응폐렴</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.12</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">항생제도 안 듣는 폐렴으로 사망선고 받았는데 — 긴급 한약 이틀 만에 증상 완화, 폐사진도 좋아지는 기적이 일어났어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-53-leesiyeon-p1.jpg" alt="이*연 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*연 (만 47세, 여)</span>
          <span class="review-date-label">작성일: 2023년 12월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p><strong>만성골수성백혈병 환자</strong>입니다. 11월 말쯤에 인후통이 심해져서 성모병원 응급실로 들어가 입원했는데 항생제가 듣지 않아서 심한 폐렴으로 번졌습니다. 살아날 가망성이 없다고 보호자들께 알리는 상황이었습니다. <strong>백혈구 수치도 떨어지고 40도 이상의 고열과 가슴통증, 피가래가 섞인 기침</strong>으로 잠도 못 자고 뜬눈으로 밤을 지새면서 이대로 죽는구나 라는 생각뿐이었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>백혈병 진단 후 항암 부작용 치료와 백혈병 치료를 원장님께 몇 년간 받았던 시간이 있어서, 이번에 폐렴으로 돌아가실 것 같다는 성모병원 이야기를 듣고 <strong>다급한 마음에 원장님께 연락을 드렸습니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>원장님께서 지금 면역체계가 망가져 있어서 항생제가 듣지 않는 거라고 말씀하시고 <strong>긴급으로 한약을 지어주셨습니다.</strong> 마지막이다 라는 생각으로 원장님 말씀대로 한약을 먹고 나니까 <strong>이틀 후부터 증상이 완화되기 시작하면서 폐사진도 좋아지기 시작하였습니다. 기적이 일어난 거였습니다.</strong> 열이 올라가고 기침할 때마다 한약을 먹으면 신기하게도 가라앉아 하루에 10봉지 이상 먹었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>일단 원장님과 직원분들이 따뜻한 게 좋았습니다. 치료를 받고 나면 항상 몸의 컨디션이 빨리 좋아지고 <strong>백혈병 환자지만 일반인과 똑같은 사회생활을 보낼 수 있는 게 좋았습니다.</strong> 어떨 때는 제가 환자인가 라는 생각을 잊어버릴 때도 있어요~</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>항상 감사하고 최정일 원장님을 만나서 감사합니다. 체질침과 체질한약이란 것이 정말로 건강에 도움이 많이 됩니다. <strong>죽던 사람을 살리기도 하구요.</strong> 원장님 말씀대로 하시면 건강해 지실 거에요^^</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #52 -->
  <div id="detailModal52" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal52')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">대상포진·신경통</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.10</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">동네 병원 약도 안 듣던 대상포진 — 체질한약·약침·파동치료 10일 만에 통증 줄고, 한 달 만에 완치됐어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-52-leekisoon-p1.jpg" alt="이*순 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 64세, 여)</span>
          <span class="review-date-label">작성일: 2023년 10월 14일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>많은 운동으로 인해 면역이 약화되어 <strong>대상포진</strong>이 왔습니다. 가슴과 어깨 뒤쪽으로 찌르는 통증을 느꼈으며 <strong>밤잠까지 설칠 정도</strong>로 심했습니다. 동네 병원을 찾아가 일주일 약을 먹었지만 아무런 차도가 없었고, 마침 지인의 소개로 수정한의원을 찾았습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>원장님의 치료 계획에 따라 <strong>체질한약과 약침치료, 수두바이러스를 죽이는 파동치료</strong>를 했습니다. 가슴과 등의 통증 강도가 덜해지고 옆으로 퍼지는 느낌이 들더니 치료 경과 <strong>10일 정도 지나니 하루 종일 아팠던 통증이 덜하며 잊을 때도 있었습니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>치료한 지 <strong>한 달이 되니 통증이 없어 생활하기에 너무 좋았습니다.</strong> 원장 선생님의 침 놓는 방법이 독특했는데 결과까지 좋아 너무 기쁩니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p><strong>대상포진이 완치되어</strong> 그동안 못했던 것들을 할 수 있게 해주신 수정한의원 원장님과 간호사 선생님들께 감사를 드립니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>고맙습니다. 병원에 근무하는 모든 이에게 사랑의 가족이라 부르고 싶습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #51 -->
  <div id="detailModal51" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal51')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">후관절증후군·안검하수</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.11</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">주사 맞아도 반복되던 후관절 허리통증·처진 눈썹 — 한약·추나·매선·약침으로 통증 소멸, 눈곱·진물도 완전히 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-51-leekyungsoon-p1.jpg" alt="이*순 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*순 (만 72세, 여)</span>
          <span class="review-date-label">작성일: 2023년 11월 18일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>2년 전 왼쪽 허리가 아프고 오른쪽 다리에 힘이 없어 걸음이 안 걸려서 일어나지도 못해 정형외과에 갔더니 <strong>후관절증후군</strong>이라고 해서 주사를 맞았습니다. 시간이 지나니까 또 아파서 올 봄에 주사를 다시 맞았습니다. 또 오른쪽 눈썹이 쳐져 눈에 눈곱이 끼고 진물이 나서 안과에 여러 번 갔는데 안약과 약을 먹어도 차도가 없고 약만 쌓였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>반복되는 허리 통증으로 고생하고 있는데 <strong>아는 지인분이 수정한의원이 잘한다</strong>고 말씀해 주셔서 함께 치료 받으러 오게 됐습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>허리는 한약을 먹으면서 <strong>침치료와 추나치료를 함께 병행</strong>해서 지금은 통증도 없고 걸을 때 멈칫하지 않고 편해졌습니다. 눈썹도 원장님께서 매선치료를 해주셔서 쳐진 눈의 근육에 힘이 생기게 해주어 처진 근육이 올라가고, 약침치료로 혈액순환도 도와주어 <strong>이제는 눈곱도 안 끼고 진물도 안 나서</strong> 얼굴이 깔끔해져 좋습니다. 눈꼬리가 빨갛고 쓰린 것도 없어졌습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>우선 아프지 않고 편하게 지낼 수 있어서 좋고, 항상 수건을 들고 눈을 닦느라 불편했는데 그런 것이 없으니 좋습니다. 체질을 알게 되어 음식 관리도 할 수 있고, <strong>침을 꾸준히 맞으면서 내성 발톱도 많이 좋아져서 신발 신는 것도 편해졌습니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>허리가 좋아지고 눈도 좋아져서 그걸 유지하게 자주 와서 꾸준히 침 맞으며 관리하려 합니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #50 -->
  <div id="detailModal50" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal50')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">척추전방전위증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">수술 불가·주사도 무효한 척추전방전위증 — 한 달 체질침·약침·매선·추나로 통증 소멸, 걸음걸이도 빨라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-50-woojungim-p1.jpg" alt="우*임 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 우*임 (만 74세, 여)</span>
          <span class="review-date-label">작성일: 2023년 9월 14일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p><strong>허리가 아프고 서혜부가 아프고, 무릎까지 아팠습니다.</strong> 걸을 때 휘청거리고 허리를 펴지 못했습니다. 골반이 빠질 것 같고 내려앉는 것 같이 몹시 아팠습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>병원 검사를 해보니 <strong>척추뼈가 밀려서 신경이 눌린다</strong>고 하였는데 수술이 안된다고 하고, 주사를 두 번 맞았는데 효과가 별로 없었습니다. 그래서 예전에 17년 전에 허리가 아파서 수정한의원에서 잠깐 치료받고 나은 것이 기억나서 수정한의원에 오게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>수정한의원에서 <strong>체질침·약침·매선·추나 치료</strong>를 했는데 한 달 동안 매일 열심히 치료 받으러 왔습니다. 지금은 다 좋아졌고 잘 걸을 수 있게 되었습니다. 허리에 약간의 뻐근함이 남아서 다시 나빠지지 않도록 한 달 정도는 일주일에 두 번씩 치료를 받으려 합니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>가장 좋은 것은 <strong>몸이 많이 나아져서 정말 좋습니다.</strong> 걷기도 편해지고 통증도 없어졌고 약간의 뻐근함만 조금 있지만 <strong>걸음걸이도 많이 빨라졌습니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>잘해줘서 감사합니다. 치료를 앞두신 분들께는 원장님께서 치료를 정말 잘하시니 믿고 열심히 치료받으시길 권합니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #49 -->
  <div id="detailModal49" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal49')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">협착증·다리저림·발바닥</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">주사도 소용없던 양쪽 다리저림·발바닥 둔함 — 체질침·한약·추나·약침으로 저림 소멸, 쉬지 않고 한번에 걸어와요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-49-wangaeryeon-p1.jpg" alt="왕*련 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 왕*련 (만 76세, 여)</span>
          <span class="review-date-label">작성일: 2023년 9월 1일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p><strong>다리가 양쪽으로 저리고 땡기며 발바닥도 둔하고 굳은살이 배겼습니다.</strong> 수시로 통증이 심해서 통증클리닉을 다니면서 주사를 맞아도 별 효과가 없었습니다. 통증이 심하고 가고 싶은 곳을 마음대로 갈 수 없어서 생활이 힘들었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>다리가 아프고 저리고 힘들어하는 모습을 보고 지인이 수정한의원을 소개해 주어서 오게 되었습니다. 원장님께서 <strong>체질을 감별해 주시고 토양체질</strong>이라고 말씀해 주시고 좋은 음식과 안 좋은 음식을 가려서 먹을 수 있게 말씀해 주셨습니다. 체질침과 체질 한약, 추나, 약침 치료를 꾸준히 받았습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>허리와 무릎에 좋아지는 운동도 알려주셔서 지금도 꾸준히 하고 있습니다. <strong>다리 양쪽 저림 증세가 없어지고 당기던 것도 없어지고 발바닥 둔한 것과 무좀도 말끔히 나았습니다.</strong> 처음에 올 때는 집에서 한의원까지 다섯 번 정도 쉬면서 왔는데 지금은 중간에 쉬지 않고 한번에 걸어옵니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>일단은 걸을 수 있어서 가고 싶은 곳을 마음대로 갈 수 있어서 좋습니다. 항상 통증이 있어서 우울했는데 <strong>지금은 통증이 없으니 마음 또한 편안합니다.</strong> 지금은 편안한 현 상태를 유지하여 생활하기 위해 일주일에 한 번씩은 꼭 원장님의 체질침을 맞으러 옵니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>치료 받는 동안 원장님께서 성심껏 치료를 해주셔서 정말 감사하고 간호사님들께서 너무 친절하게 대해 주셔서 정말 감사합니다. 원장님 말씀 믿고 꾸준히 치료하시면 좋은 결과를 얻을 수 있을 겁니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #48 -->
  <div id="detailModal48" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal48')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">코로나후유증·고열·두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">해열제도 안 듣는 코로나 불명열 한 달 — 첫 약침 당일 열 소멸, 두 번째에 몸살기운까지 완전히 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-48-ohkyungran-p1.jpg" alt="오*란 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 오*란 (만 45세, 여)</span>
          <span class="review-date-label">작성일: 2023년 9월 21일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>코로나 확진 후 격리해제가 되었는데도 증상이 나아지지 않았습니다. 격리해제 한 달 후까지 <strong>매일 38도 정도의 열</strong>이 났으며 몸살기, 근육통, 식욕부진, 두통으로 인해 일상생활이 어려웠습니다. 일상적으로 외출을 하거나 마트에만 다녀와도 그날은 38도 이상의 고열과 몸살로 더 힘들었습니다. 해열제(타이레놀, 애드빌)도 듣지 않아 많은 고생을 했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>동네 내과에서 2주 정도 감기 치료를 받았으나 호전되지 않아 성모병원 호흡기내과에서 진료를 받았지만 나아지지 않았습니다. 감염내과를 통해 염증 및 균 검사를 했으나 <strong>원인을 알 수 없는 코로나 후유증</strong>이라 하여 한방치료를 생각하게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>처음 내원해서 체질검사 및 체질침과 약침을 맞았는데 <strong>그날부터 열이 나지 않았고</strong>, 두 번째 약침 치료를 하고는 <strong>몸살기운도 완전히 사라졌습니다</strong>.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>열이 나지 않아서 머리가 멍하고 두통이 있던 증상들이 사라지면서 일상생활을 다시 적극적으로 할 수 있게 되어 너무 좋습니다. 매일 열이 나고 몸살이 나니 삶의 의욕이 떨어졌었는데 침을 맞는 시간도 오래 걸리지 않는데 많이 호전되어 <strong>매우 기쁘고 즐겁게 생활하고 있습니다</strong>.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>불명열이라는 코로나 후유증으로 해열제를 먹어도 떨어지지 않았던 열이 이렇게 한번에 잡혀서 너무 감사합니다. 다른 곳에서는 체력이 많이 떨어져서 침을 놓을 수 없다고 했는데 이곳에서는 한 번의 치료만으로도 많이 나았습니다. <strong>코로나 후유증 치료에도 약침이 효과 있다는 것</strong>을 저처럼 고생하시는 분들께 알려드리고 싶습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #47 -->
  <div id="detailModal47" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal47')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">두드러기·여드름</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.11</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">두드러기로 너무 가려워서 잠도 못자고 스트레스를 많이 받았어요 — 한약 꾸준히 먹으니 양약도 끊고 거의 안 나요, 여드름도 좋아졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-47-kimyeonjun-p1.jpg" alt="김*준 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 김*준 (만 19세, 남)</span>
          <span class="review-date-label">작성일: 2023년 11월 25일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>올해 5월부터 <strong>운동 후나 자기 전에 두드러기 반응</strong>이 일어났습니다. 알러지 검사에서는 이상이 없었고 양약을 2일에 1번씩 복용했습니다. 여드름도 심했습니다. 이러한 증상으로 인해 몸이 너무 가려워서 잠에 잘 들지 못하고 스트레스를 많이 받았습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>어머니께 두드러기 사실을 말씀 드렸더니 인터넷도 찾아보시고 주변 지인분들께도 물어보시면서 이곳 수정한의원을 찾게 되었습니다. <strong>체질도 찾을 수 있고</strong>, 어머님께서 아시는 분이 일하시는 곳이어서 "딱 좋겠다" 싶어서 이곳에서 치료를 받게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>처음엔 두드러기 증상이 심했지만 <strong>한약을 꾸준히 먹다 보니</strong> 이틀에 한번씩 일어나던 두드러기가 3일에 나고, 지금은 심하게 안 나서 <strong>양약을 먹지 않고 있습니다</strong>. 여드름도 많이 좋아졌습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>두드러기로 인해 스트레스를 많이 받고 있었는데 어느 날부터 <strong>두드러기가 심하지 않고 거의 나지 않아서 매우 기쁩니다</strong>.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>원장님께서 매우 친절하게 대해주시고 적극적으로 이곳저곳 물어봐 주시면서 진료해주셔서 정말 믿음이 가고 아주 좋고 매우 감사합니다. 그리고 간호사 선생님들께서도 매우 친절하게 대해주셔서 정말 감사합니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #46 -->
  <div id="detailModal46" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal46')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">두통·이명·목잠김</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.11</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">잦은 출장·음주 후 두통·이명·목잠김 악화 — 한약·약침 5~6회 만에 두통 거의 소멸, 목잠김 완전히 없어졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-46-kimsengki-p1.jpg" alt="김*기 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 김*기 (만 62세, 남)</span>
          <span class="review-date-label">작성일: 2023년 11월 25일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>최근 잦은 출장으로 피곤이 누적된 상태에서 음주를 과하게 한 후 <strong>두통이 심해짐과 이명 및 목잠김</strong>이 찾아와 많이 힘든 생활을 하고 있었습니다. 집근처 대학병원에서 MRI 촬영 등 상태를 호전시키고자 노력하였으나 오히려 상태는 점점 악화되었고, 생활에 지장이 될 만큼 심한 통증이 연속되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>많이 힘들어하고 있는 차에 지인의 소개로 수정한의원을 찾게 되었고, 상담과 더불어 치료를 받게 되었습니다. 상담 결과 원장님 말씀은 <strong>경추 1·2번이 틀어졌고</strong> 머리와 목으로 연결되는 근육이 긴장되어 경추가 틀어졌고, 근육의 압박으로 두통과 이명이 동반되었고 더불어 목잠김까지 와 있는 상태라고 하셨습니다. 한약과 더불어 약침을 통하여 치료를 시작하였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>상태가 호전되기 시작하였는데 <strong>한의원 방문 5~6회부터는 상태가 급격히 호전</strong>되어 두통은 거의 느끼지 못하는 수준이 되었으며 목잠김은 완전히 없어졌습니다. 이명이 약간 있는데 점차 없어져 가고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>한약은 장기능과 간기능을 호전시키는 약으로 설명을 들었는데 장·간 기능이 호전되면 근육 및 경추가 완전히 자리잡게 되어 재발이 없어지게 될 것입니다. 또 <strong>평소 가지고 있던 지루성 피부염인 두피의 비듬</strong>을 침 치료와 한의원에서 구입한 샴푸와 함께 사용한 후 완전 치료가 되어 두피 비듬이 없어져 아주 좋았습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>저는 거주지가 인천인데 약 1시간 20분 정도의 거리를 치료를 위하여 오는 것이 지병을 고칠 수 있다는 마음으로 오게 되었고 먼 거리지만 즐거운 마음이었습니다. 친절하게 맞아 주시는 원장님과 간호원님들께 감사드립니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #45 -->
  <div id="detailModal45" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal45')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">무릎인대파열</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">무릎인대파열 수술 권유받았지만 — 체질침·태반약침·매선 한 달 만에 지팡이 없이 걷고 계단도 성큼성큼</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-45-kimnayoung-p1.jpg" alt="김*영 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 김*영 (만 60세, 여)</span>
          <span class="review-date-label">작성일: 2023년 9월 9일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>출근길에 걷다가 갑자기 왼쪽 다리가 땡기면서 그 자리에 주저앉아 걷지 못해 119를 불러 을지병원 응급실로 갔는데 <strong>인대파열</strong>이라며 응급처치를 받았습니다. 이후 방문한 병원에서 수술을 권유했으나 수술하기 싫어 10일 입원 후 퇴원했습니다. 다리 통증이 심하고 지팡이를 짚지 않으면 계단을 오를 수 없을 만큼 아팠습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>지팡이 없이는 걷지도 못하고 계단을 성큼성큼 오르지도 못해 한 발씩 붙여가며 걸어 다니니, 아는 동생이 수정한의원에 가서 상담받아 보라고 권유하여 방문하게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>원장님께서 "수술 없이 나을 수 있으니 걱정하지 말고 매일 치료하러 오라"고 하셔서 원장님을 믿고 꾸준히 치료받으러 왔습니다. <strong>체질침을 매일 맞고 체질한약을 먹으며 태반약침 치료와 주 1회 매선치료</strong>를 병행했습니다. 한 달을 치료하니 지팡이 없이 걸을 수 있었고, 꾸준한 치료로 계단도 한칸씩 성큼성큼 걸어 올라갈 수 있게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>수술을 해야 한다고 해서 너무 걱정스럽고 속상했는데, <strong>수술 없이도 지팡이 없이 편하게 걸을 수 있어</strong> 너무 좋습니다. 원장님 말씀을 믿고 그대로 따라 치료하니 이렇게 좋은 결과를 얻게 되어 원장님께 너무 감사합니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>열심히 치료받은 덕에 다리가 좋아져서 병원 약도 안 먹고 수술도 안 하고 계단도 잘 오르내릴 수 있고 몸이 편해져서 많이 좋습니다. 다른 환자분들도 원장님 치료받아 저처럼 좋은 결과를 얻으셨으면 좋겠습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #44 -->
  <div id="detailModal44" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal44')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">메니에르·어지럼증·두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.06</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">2년간 메니에르로 매일 어지럼·새벽 두통 — 약침·한약으로 깊은 수면 되찾고 아침이 개운해졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-44-choemiyang-p1.jpg" alt="최*영 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 최*영 (만 52세, 여)</span>
          <span class="review-date-label">작성일: 2023년 6월 16일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>2년 전 갑작스러운 어지럼증이 시작되어 병원 검사를 통해 <strong>메니에르병</strong> 진단을 받고 여러 가지 양약을 복용하고 있었습니다. 아침에 눈을 뜨면 어지러움과 메스꺼움으로 바로 일어날 수 없었고, 새벽에는 두통 때문에 타이레놀을 먹어야 다시 잠들 수 있어 늘 깊은 잠을 잘 수 없었습니다. 정상적인 일상생활이 어려웠고 약에 취해 하루 종일 활동하는 데 어려움이 있었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>지난 4월 지인의 업무를 도우면서 반복되는 어지럼 증세를 직접 보신 지인께서 적극 체질치료를 권하셔서 수정한의원을 방문하게 되었습니다. 또한 연초 건강검진 결과에서 간수치·혈압·당뇨 등 정상수치를 넘는 결과지를 받고, 장시간 양약 복용에 불신이 생겨 다른 치료법을 시도하고자 하였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>약침을 거의 매일 맞으면서 한약을 복용하기 시작했고, 처음 2주 정도는 심한 피로감과 함께 어지러움이 더 심할 때도 있었으나, 점차 깊이 잠을 자면서 <strong>일어날 때의 심한 두통이 사라지기 시작하고 울렁거림도 잦아들었습니다.</strong> 무엇보다 만성 변비로 평생 살아왔는데 속이 편해지면서 배변이 원활해지니 몸이 가벼워지고 일상생활에 활력이 생기기 시작했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>늘 어지러움 때문에 얼굴 표정이 밝지 못했고 피로감으로 어떤 일을 하기가 겁이 나기도 했는데, 이제는 아침에 개운하게 일어나 맑은 정신을 유지할 수 있어 하루를 즐겁게 시작할 수 있습니다. 그동안 대인관계에서도 약속이나 여행을 기피했다면, 최근에는 활동 범위가 넓어지고 미뤄왔던 계획들도 하나씩 다시 시도할 수 있게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>늘 진지하게 이야기를 들어주시고 침 하나를 놓으셔도 정성껏 환자를 보살피시는 원장님과, 항상 밝은 얼굴로 어떠한 불평도 받아주셨던 직원분들께 진심으로 감사드립니다. 체질 치료에 대한 믿음을 갖고 전반적인 안 좋은 습관까지 고쳐보겠다는 마음으로 시작하신다면 분명 좋은 결과가 있으리라 생각합니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #43 -->
  <div id="detailModal43" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal43')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">우울증·불면·두통</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.05</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">차라리 죽는 게 편하다 생각했는데 — 체질치료로 살아갈 기본 힘 되찾고 손발 따뜻, 두통·불면 모두 해결됐어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-43-leehaneul-p1.jpg" alt="이*늘 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*늘 (만 30세, 여)</span>
          <span class="review-date-label">작성일: 2023년 5월 8일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>추위에 굉장히 약하여 겨울에는 외출이 힘들었고 장시간 야외 활동이 불가능했습니다. 손과 발이 차고, 두통을 자주 호소하여 심한 경우 타이레놀 두 알씩 먹어도 약이 듣질 않았습니다. 잠에서 깨는 시간이 한 시간 이상 필요했고, 깨면 심장이 두근거리며 쪼이는 느낌이었습니다. 스트레스가 심할 때는 피곤한데도 잠이 오지 않아 수면이 불규칙했고, 나름의 노력을 해보았지만 한계가 있었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>주변 친구의 도움으로 방문하게 되었습니다. 간호사 분들도 친절했고 의사 선생님과 상담하며 체질을 진단받았습니다. 처음 와서 인바디 등 검사를 하고 약침 치료를 받고 파스를 붙여주셨는데 굉장히 시원하고 좋은 느낌이었습니다. 치료도, 진단도 현명하게 잘해주셔서 수개월 치료를 통해 몸이 많이 회복될 수 있었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>몸이 허약해서 인간이 기본적으로 살아가야 할 힘조차 매우 떨어져 있었고, <strong>"차라리 죽는 것이 편하고 좋겠다"</strong>고 생각했습니다. 그런데 수정한의원 치료를 통해 기본적으로 살아갈 힘을 많이 얻게 되었고 <strong>"이제는 살만하구나"</strong>라고 생각하게 되었습니다. 두통약도 거의 먹지 않게 되었고 혈액순환도 잘 되고 손발도 따뜻해지고 수면에도 별 문제가 없어졌습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>나의 체질을 알 수 있어서 좋았습니다. 모든 사람에게 획일화된 정보가 아닌, 음식을 통해 실제로 느낄 수 있는 건강정보를 알게 된 점이 좋았습니다. 또한 가끔씩 몰아치던 슬픔·분노·우울감 등 감정을 보완하고 다스릴 수 있는 힘을 얻어가고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>어릴 때는 건강한 편이었는데 청소년기와 20대 때 건강 관리에 소홀하다 보니 몸이 힘들어졌습니다. 한번 힘들어 보니 건강이 최고라는 말이 굉장히 와닿습니다. 가족·친구들과 수정한의원 선생님들까지 신경 써주시지만 내 스스로가 움직이고 의지를 가지는 것이 분명히 중요한 것 같습니다. 소중한 분들 모두가 아프지 않으셨으면 좋겠습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #42 -->
  <div id="detailModal42" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal42')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">바이러스성폐렴·급성폐섬유화</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">코로나 후 바이러스성 폐렴·급성 폐섬유화 위기 — 한방·양방 협진과 매일 걸음 수 늘리기로 2달 만에 완쾌</h3>
      <div class="review-detail-image-wrap" style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
        <img src="/static/reviews/review-42-leesunae-p1.jpg" alt="이*애 치료수기 1페이지" class="review-detail-image" loading="lazy" style="max-width:320px; flex:1 1 300px;">
        <img src="/static/reviews/review-42-leesunae-p2.jpg" alt="이*애 치료수기 2페이지" class="review-detail-image" loading="lazy" style="max-width:320px; flex:1 1 300px;">
        <img src="/static/reviews/review-42-leesunae-p3.jpg" alt="이*애 치료수기 3페이지" class="review-detail-image" loading="lazy" style="max-width:320px; flex:1 1 300px;">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*애 (여, 치료 성공 수기)</span>
          <span class="review-date-label">작성일: 2023년 3월</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 경과 — 메니에르에서 폐렴까지</h4>
          <p>2014년 어지럼증을 시작으로 이명·불면증·공황장애·소화불량이 반복되었고, 2017년 응급실 입원 후 대학병원에서 <strong>메니에르</strong> 진단을 받아 1년 반간 약물 치료를 받았습니다. 증상은 호전과 재발을 반복하며 일상이 무너졌습니다.</p>
          <p>2022년 8월 지인 소개로 수정한의원에 방문, 8체질(토양체질) 진단 후 체질식·한약·약침·체질침 치료를 시작하였습니다. 열심히 치료하던 중 2022년 11월 18일 코로나 확진, 이주일 격리 후 무난히 회복된 듯했으나 이후 걸을 때 숨이 살짝 차기 시작했습니다.</p>
          <p>2023년 1월 20일 동네 내과에서 폐 CT를 찍은 결과, 즉각 응급실 이송 지시와 함께 <strong>"당장 폐 섬유화가 될 수 있다"</strong>는 충격적인 진단을 받았습니다. 이후 종합병원 응급실에서 <strong>바이러스성 폐렴(코로나 후유증)</strong>으로 최종 진단되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 수정한의원 치료 과정</h4>
          <p>원장님은 즉시 치료법을 변경하여 <strong>체질침 + 소리·빛 파동치료(45분) + 한약 2배 증량</strong>으로 집중 치료를 시작하셨습니다. 양방 스테로이드 치료(1회 8알)와 한방 치료를 병행하는 <strong>한·양방 협진</strong>이 이루어졌습니다.</p>
          <p>원장님은 한의원 복도 걸음 수를 매일 기록하게 하셨습니다. 1월 26일부터 시작하여 처음 몇 걸음에서 차오르던 숨이 <strong>2번 → 5번 → 11번 → 22번 → 50번 → 80번 → 100번</strong>으로 늘어났고, 집 계단도 2개 → 3개 → 5개 → 9개 → 13개 → 18개 → 26개 → <strong>3층(우리집)까지 한 번에</strong> 오를 수 있게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 결과 및 삶의 변화</h4>
          <p>2월 15일 <strong>100걸음 걸어도 숨 차지 않음</strong>을 확인, 2달이 되기도 전에 폐렴 치료가 마무리되었습니다. 토양체질에 맞지 않는 추어탕·카레가 수년간 반복 발병의 원인임을 깨달았고, 체질식을 통해 속이 편안해졌습니다. 지금은 스테로이드 부작용 치료를 받으며 건강을 회복 중입니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>"원인을 분명하게 알고 있으니 치료는 당연히 잘 될거라고, 걱정하지 말라"는 원장님의 말씀과 <strong>올바른 진단</strong>이 희망과 힘이 되었습니다. 가족처럼 대해주시는 원장님과 간호쌤들의 친절함에 감사드립니다. 수정한의원의 무궁한 발전을 기원하며 화이팅!!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #41 -->
  <div id="detailModal41" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal41')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">퇴행성무릎관절염 4기</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">인공관절 수술 권유받은 퇴행성관절염 4기 — 백일 한약·매선·약침 후 성큼성큼 걷고 하루종일 서도 안 아파요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-41-leekyungsook-p1.jpg" alt="이*숙 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 이*숙 (만 65세, 여)</span>
          <span class="review-date-label">작성일: 2023년 4월 19일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>무릎이 몹시 아파서(퇴행성 관절염 4기) 걷기도 힘들고 서있기도 힘들고 계단 오르기·내리기 힘들어 계단을 뒤로 내려오곤 하였습니다. 정형외과에서는 인공관절 수술을 권유받은 상태였고, 수술을 원치 않아서 아픈 상태로 힘든 생활을 하고 있었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>어깨 통증이 있어서 간단하게 침이나 한번 맞아볼까 하고 수정한의원을 방문하였는데, 원장님과 상담 중에 여기저기 아픈 곳을 말씀드리다가 무릎 이야기를 드렸더니 <strong>"인공관절 수술 안 하고 걸어다니게 해주신다"</strong>고 자신 있게 말씀하시는 원장님을 믿고 치료를 시작하게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>치료를 받는 과정 중간에 별로 좋아지는 것 같지 않아 포기하려고도 하였으나, 원장님께서 자신 있게 고쳐주신다고 말씀하셔서 다시금 믿고 치료를 계속 받았습니다. <strong>백일 한약을 먹고 원장님의 체질 침·매선·약침 치료 8회 정도 하고 나니 아주 좋아졌습니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>다리를 질질 끌고 다녔는데 성큼성큼 잘 걷게 되었고, 계단도 잘 오르락내리락 하며 통증 없이 너무 좋아졌습니다. 하루종일 서서 일을 해도 다리가 아픈 줄 모르고 <strong>너무 행복합니다.</strong></p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>원장님을 믿고 치료하자는 대로 따르고, 가르쳐 주시는 운동법과 약을 규칙적으로 잘 하시면 좋은 결과를 저처럼 보실 것 같네요.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #40 -->
  <div id="detailModal40" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal40')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">요실금·여성질환</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.08</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">5개월 매선치료로 요실금 완전 해결 — 패드 없이 외출하고 심적 부담도 사라졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-40-yunoosook-p1.jpg" alt="윤*숙 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 윤*숙 (만 59세, 여)</span>
          <span class="review-date-label">작성일: 2023년 8월 25일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상 및 생활 불편</h4>
          <p>많은 스트레스로 인하여 어깨통증이 잦아져 치료를 받던 중, 그동안 말 못할 고민이었던 요실금을 치료하고자 상담을 하였고, 5개월 전에 일주일에 두 번 정도 매선치료를 했습니다. 치료할 때 너무나 고통스럽고 아파서 멈추고 싶기도 했지만 꾸준히 치료를 했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-clinic-medical"></i> 치료를 받게 된 이유</h4>
          <p>체질치료와 추나, 약침 등을 맞고 한약을 복용하면서 스트레스와 몸의 아픔이 치료되는 것을 감지하고, 같이 다니던 동료들의 몸도 완치되는 것을 보고 믿음과 신뢰가 생겨서 치료를 받게 되었습니다. 인내가 필요하면서 요실금 치료를 하게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-heart"></i> 치료 후 개선된 점</h4>
          <p>5개월 전에 받은 요실금 치료로 한 번도 다시 그 문제로 힘들지 않아서 개선이 되었습니다. 항상 밖에 나갈 때면 그것 때문에 걱정이 많고 패드를 가지고 다녀야 했는데, 3개월 전보다는 지금이 더 안정이 되었다는 생각이 듭니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-star"></i> 삶의 질 변화</h4>
          <p>체질 개선을 꾸준히 해야 하는 인식과 의식을 하면서 몸을 돌보는 것이 좋았습니다. 몸이 안 좋아지면 금방 알아차릴 수도 있게 되었고, 침을 맞으면 효과가 금방 나타나고 쉴 수 있는 시간을 갖게 됩니다. 요실금을 치료하니 심적인 어려움도 없이 변화가 생겼습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>잠깐씩 걱정하는 것이 혹시 내가 너무 이 치료(침이나 추나치료)에 의지하지는 않나 하는 걱정을 합니다. 그러나 치료를 꾸준히 인내를 가지고 하면 신뢰심도 생기고, 몸도 완쾌되는 것을 느낍니다. 항상 친절하게 치료할 수 있도록 원장님과 선생님들의 배려에 꼭 오셔서 치료받으시기를 바랍니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #39 -->
  <div id="detailModal39" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal39')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">무릎반월상연골파열·척추협착증</span>
        <span class="review-handwritten-badge"><i class="fas fa-star"></i> 네이버 후기</span>
        <span class="review-date">2023.05</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">무릎 반월상연골파열·허리협착증 — 수술 대신 체질치료·약침·매선으로 통증 없이 건강을 되찾았어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-39-kimheesook-p1.jpg" alt="김*숙 네이버 후기" class="review-detail-image" loading="lazy" style="max-width:400px; margin:0 auto; display:block;">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 김*숙 (여, 네이버 리뷰)</span>
          <span class="review-date-label">작성일: 2023년 5월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <p style="line-height:1.9; font-size:1rem;">
            무릎 반월상연골파열과 허리협착증으로 걷기도 어려웠고 병원에서는 수술을 권했지만 수술을 하지 않고 수녀님 소개로 수정한의원을 찾게 되었습니다.<br><br>
            3개월 정도 치료하면 좋아질 거라는 원장님의 말씀을 믿고 매주 전라북도에서 올라와 치료를 받았습니다. <strong>체질치료와 추나, 약침, 매선치료를 하면서 계단을 오르내릴 때 통증이 좋아졌습니다.</strong><br><br>
            항암과 방사선치료 후 면역력 저하와 연골파열로 걷기도 못하고 허리 통증이 심했는데, 꾸준히 치료를 해서 <strong>통증 없이 건강을 되찾게 되었습니다.</strong> 금양체질로 진단받고 체질식을 하면서 체중도 꾸준히 줄었고, 걷기가 어려웠는데 3개월 동안 매주 열심히 치료받고 이만큼 나을 수 있었습니다. 믿고 꾸준히 치료받은 것이 좋은 결과를 가져온 것 같습니다. 원장님과 선생님들의 친절함에 감사드립니다.
          </p>
        </div>
        <div class="review-detail-section" style="background:#f0f7ff; border-radius:8px; padding:12px 16px; font-size:0.88rem; color:#555;">
          <i class="fas fa-map-marker-alt" style="color:#03C75A;"></i> 네이버 지도 리뷰 · 1번째 방문 · 결제내역 확인
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #38 -->
  <div id="detailModal38" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal38')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">역류성식도염·아토피</span>
        <span class="review-handwritten-badge"><i class="fas fa-star"></i> 네이버 후기</span>
        <span class="review-date">2023.05</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">4년 넘은 역류성식도염, 한 달 한약·약침으로 완전히 없어지고 아토피·비염까지 함께 좋아졌어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-38-nemesis-p1.jpg" alt="nemeSIS 네이버 후기" class="review-detail-image" loading="lazy" style="max-width:400px; margin:0 auto; display:block;">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> nemeSIS (네이버 리뷰)</span>
          <span class="review-date-label">작성일: 2023년 5월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <p style="line-height:1.9; font-size:1rem;">
            4년 전부터 역류성식도염으로 여러 약들을 먹었으나 낫지 않았고, 최근에는 역류성위염 진단을 받아 한 달간 약을 먹고 주의사항을 지켰지만 나아지지 않아 친구 소개로 수정한의원을 찾게 되었습니다.<br><br>
            8체질 중에 <strong>금양체질</strong>로 진단을 받고 처방받은 한약을 꾸준히 복용했습니다. 한 달 정도 한약과 약침치료 후 증상이 상당히 호전되었고 <strong>역류성 식도염 증상은 완전히 없어졌습니다.</strong> 원래 갖고 있던 아토피와 비염 등 만성 질환들도 많이 호전되었고 몸이 많이 가벼워졌습니다.<br><br>
            체질치료는 나의 체질을 알고 몸에 맞는 음식과 습관을 바꾸어주셨고, 체질에 따른 근본치료가 중요하다는 것을 알게 되었습니다. 원장님의 도움을 받고 짧은 기간임에도 몸이 상당히 좋아짐을 느낍니다. 앞으로 계속 한의원을 다니면서 얼마나 더 좋아질지 기대가 됩니다.
          </p>
        </div>
        <div class="review-detail-section" style="background:#f0f7ff; border-radius:8px; padding:12px 16px; font-size:0.88rem; color:#555;">
          <i class="fas fa-map-marker-alt" style="color:#03C75A;"></i> 네이버 지도 리뷰 · 1번째 방문 · 결제내역 확인
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #37 -->
  <div id="detailModal37" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal37')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag review-cat-tag-special">구안와사·안면마비</span>
        <span class="review-special-badge"><i class="fas fa-star"></i> 특설클리닉</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2023.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">오른쪽 안면마비 — 짧은 기간에 마비감·비대칭 모두 사라지고 정상 회복되었어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-37-kimyoungtae-p1.jpg" alt="김*태 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 김*태 (만 58세, 남)</span>
          <span class="review-date-label">작성일: 2023년 3월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>2023년 1월 27일 얼굴 오른쪽 전체 안면신경 마비 증상으로 안면 비대칭이 생겼습니다. 마비된 쪽의 눈이 잘 감기지 않았고 웃으면 입이 반대쪽으로 돌아갔으며, 위쪽을 쳐다보면 우측 이마에 주름이 잡히지 않았습니다. 칫솔질을 할 때 물이 새어 나오고 음식물을 흘리게 되며, 음식물이 볼과 잇몸 사이에 끼여 심한 경우 손으로 밀어내야 했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>2023년 1월 30일 서울 백병원(을지로)에 내원하여 진료·검사 후 7일분 약을 처방받았고, 2023년 2월 1일부터 꾸준한 진료와 완치를 위해 수정한의원에 내원하여 지속적으로 치료를 받고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>짧은 기간에 얼굴 마비감과 안면 비대칭이 모두 사라지고 정상적으로 회복되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>원장님의 세심한 진료와 간호사 선생님들의 친절함에 먼저 심리적 치료가 되는 것 같았고, 일상생활에서의 건강에 관심을 갖게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>지금과 같이 정성을 다하는 진료가 변함없이 계속되는 수정한의원이 되었으면 좋겠습니다. 믿음을 갖고 꾸준히 치료를 한다면 근본적인 증상까지 치유가 가능한 한의원으로, 시간을 갖고 진료받으시길 적극 추천 드립니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #36 -->
  <div id="detailModal36" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal36')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">편두통·과민성대장·손떨림</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">폐암 수술 후 면역 저하·편두통·과민성대장 — 두 달 만에 가스·설사·편두통 모두 확연히 줄었어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-36-choewansook-p1.jpg" alt="최*숙 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 최*숙 (만 64세, 여)</span>
          <span class="review-date-label">작성일: 2022년 3월 14일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>성격이 예민한 편으로 잘 먹는 편인데 먹고 나면 항상 가스가 많이 차고 설사를 하기도 했습니다. 늘 묽은 변을 자주 보는 편이라 외출에 제약이 많고 불안했습니다. 2019년 폐암 초기 수술 후 약물 부작용과 면역 저하를 크게 체감했습니다. 편두통은 한 달에 2~3번 발생했고, 신경과 처방약과 안정제를 복용해도 머리와 손 떨림이 심해져 늘 신경이 곤두서는 상태였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>양방에서 본태성 진전증은 약으로 증상만 조절할 수 있다고 하여 나아지지 않을까 걱정이 앞섰습니다. 한방으로 고칠 수 있다는 것을 알고 여기저기 검색하다가 오래전 지인 소개로 남편 치료 때 다녔던 수정한의원이 생각나 원장님께 치료를 받아보고자 다시 찾게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>체질을 알고 해로운 음식을 제하고 이로운 음식만 먹게 되었습니다. 육식이 체질에 맞지 않는다는 것을 알고 식단을 조정했더니 변 상태도 아침에 한 번만 보는 경우가 많아지고 몸도 가벼워졌습니다. 한의원 다닌 두 달 동안 편두통 약을 한 번만 먹었고, 머리 흔들림도 아직 완전하지는 않지만 약간 덜해진 것을 느끼게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>거의 매일 다니다 보니 가슴까지 차던 가스가 안 차고, 변도 아침에 한 번 보고, 편두통도 괜찮아지고, 몸이 가벼워졌습니다. 꾸준히 치료하다 보면 손 떨림도 나아질 것 같습니다. 머리 떨림이 나아지지 않으면 대인관계에 불안을 느낄 텐데, 이제는 마음도 편해지고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>원장님이 정성껏 치료해 주시고 늘 웃음이 가득한 원장님과 간호사님들 덕분에 마음 편히 치료받을 수 있어 감사합니다. 몸이 더욱 좋아지면 양방에서 못 고치고 고생하는 분들에게 이곳을 소개해 주고 싶습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #35 -->
  <div id="detailModal35" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal35')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">편두통·다낭성난소</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.06</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">편두통·다낭성난소증후군·만성피로 — 첫날 치료부터 정신 맑아지고 생리 규칙적으로 돌아왔어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-35-choeyeonjin-p1.jpg" alt="최*진 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 최*진 (만 24세, 여)</span>
          <span class="review-date-label">작성일: 2022년 6월 2일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>머리가 너무 아프고 뇌가 뭉게뭉게한 기분이 들고 가끔 눈도 어두워졌습니다. 일하거나 공부해야 할 때 집중이 너무 안 됐고, 평상시에도 굉장히 예민해져 있어서 잘 자도 피곤하고 운동을 해도 피곤한 상태였습니다. 다낭성난소증후군도 있어서 계속 생리를 안 하고, 가끔 하는 생리도 생리통이 엄청 심했습니다. 전반적으로 체력이 굉장히 약한 상태였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>일상생활 하기가 너무 힘들어서 부모님께 말씀드렸더니 수정한의원이 이사 왔다고 가보라고 하셔서 오게 되었습니다. 병원에서 머리 아프다고 해도 이유를 잘 모르겠다고 했고, 필라테스가 그나마 도움이 되었지만 너무 비싸고 본질적인 문제가 해결되지 않아 부모님 추천으로 바로 방문했습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>첫날 치료를 받자마자부터 정신도 좀 맑아지고 눈이 침침한 것도 많이 나아졌습니다. 꾸준히 치료를 받다 보니 피곤하거나 음식을 가리지 않고 먹은 날을 제외하고는 몸의 컨디션도 많이 좋아졌습니다. 생리를 규칙적으로 하게 되었고, 자궁이 차다는 느낌이 많이 들었는데 배를 만져봤을 때 예전보다 많이 따뜻해졌습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>약침치료와 추나치료를 받았는데 일상생활의 불편함이 많이 줄었습니다. 오전에 독소 쌓인 기분으로 일어난 적도 많았는데, 체질 한약을 먹으며 식습관 관리를 하면서 빈도수가 굉장히 줄고 상쾌하게 아침에 일어나게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>처음엔 머리만 아파서 찾아갔는데 너무 친절하게 치료해 주시고, 한약을 먹어서 면역력도 더 올라간 것 같습니다. 치료하려고 한 곳 말고 다른 부분도 전반적으로 몸이 좋아져서 너무 감사합니다. 아플 때 꼭 와서 치료하면 좋은 곳입니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #34 -->
  <div id="detailModal34" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal34')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">족저근막염</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">정형외과 충격파도 효과 없던 족저근막염 — 체질 치료로 근본 원인 잡고 점차 호전 중이에요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-34-choesuji-p1.jpg" alt="최*지 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 최*지 (만 28세, 여)</span>
          <span class="review-date-label">작성일: 2022년 4월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>발바닥 족저근막염 진단을 받았고, 걸어 다닐 때, 서 있을 때, 심하면 그냥 누워 있을 때에도 찌릿한 통증과 화끈한 느낌이 있었습니다. 조금만 걷거나 오래 서 있어도 통증 때문에 평상시 생활에 너무 큰 불편함이 있었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>처음에는 회사 근처 정형외과에서 족저근막염 진단을 받고 충격파 치료를 꾸준히 받았지만 효과를 보지 못했습니다. 집 근처로 다시 병원을 알아보던 중, 족저근막염 치료 리뷰를 보다가 '수정한의원'을 알게 되어 방문하였습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>꾸준한 충격파 치료를 통해서도 통증이 줄지 않아 한의원을 찾았는데, 제게 맞는 체질과 함께 발바닥 통증이 생긴 근본적인 원인을 치료해 주셔서 점차 호전되고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>저의 체질을 알게 되고, 내게 맞는 음식을 섭취하는 것이 얼마나 중요한지 깨달았습니다. 또한 근본적인 원인을 찾아 치료해 주시는 과정에서 염증이 점차 호전되고 있으며, 처음의 심한 통증에 비해 많이 나아져 더 좋아질 수 있다는 희망을 갖고 열심히 치료를 받고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>많은 분들이 수정한의원에 방문해서 본인의 체질을 알고 몸을 예방하는 것도 좋을 것 같습니다. 효과가 너무 좋아서 저희 어머니께도 추천드렸습니다. 늘 친절하게 대해 주셔서 감사하고, 제가 하는 질문들에도 잘 답변해 주셔서 감사합니다!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #33 -->
  <div id="detailModal33" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal33')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">방광염·여성질환</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2020.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">반복되는 방광염, 태반 약침 맞고 싹 사라졌어요 — 상계 때부터 지금까지 수정한의원만 다닌 이유</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-33-jinheesoon-p1.jpg" alt="진*순 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 진*순 (만 47세, 여)</span>
          <span class="review-date-label">작성일: 2020년 4월 11일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>늘 반복되는 방광염으로 일상생활 및 사회생활 하는 데 있어서 많은 고통과 불편함이 있었습니다. 번번이 재발하는 탓에 일상에서 상당한 스트레스를 받았습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>허리·무릎 아픔으로 가끔 침을 맞으러 다니다 보니, 현재 방광염 증상이 있어 혹시 고칠 수 있는지 선생님께 여쭤보게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>적극 추천합니다. 태반 주사(약침)를 맞고 있는데 방광염의 증상이 싹 사라지는 경험을 했습니다. 지금은 선생님이 시키는 대로 이틀에 한 번씩 약침을 맞고 있습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>나이 들면서 건강이 최고라는 말이 있듯이, 고질적인 허리·무릎·방광염을 고통 없이 잘 치료해 주시니 더할 나위 없이 감사드릴 따름입니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>저는 상계 4동 시절부터 지금 노원으로 옮기신 후에도 계속 찾아가고 있으며, 다른 한의원은 한 번도 다닌 적이 없습니다. 저에게 수정한의원은 엄마 같은 존재입니다. 아픈 고통을 가지고 계신 분들께, 선생님을 믿고 맡기시면 삶의 건강을 다시 찾을 수 있을 거라고 꼭 말씀드리고 싶습니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #32 -->
  <div id="detailModal32" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal32')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">신경성 소화불량</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">스트레스로 소화 안 되고 가슴 통증까지 — 뭉친 근육 풀리고 먹는 게 편해지며 일상이 돌아왔어요</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-32-johyunee-p1.jpg" alt="조*이 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 조*이 (만 52세, 여)</span>
          <span class="review-date-label">작성일: 2022년 3월 17일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>심한 스트레스로 인하여 소화가 안 되고, 근육이 뭉쳤으며 소화기 장애로 음식 섭취가 편하지 않았습니다. 가슴 통증도 심해 생활하는 데 많이 힘들었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>계속적인 불편함과 그로 인해 갈비뼈 부상도 있고, 척추도 삐뚤어져 있어 치료를 받게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>소화가 조금씩 잘 되고, 뭉쳐 있던 근육들이 풀리면서 먹는 것에 스트레스가 줄었습니다. 다리 근육도 완화되어 활동하는 데 편해졌습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>모든 분들이 친절했고, 신앙 안에서 무언가 따스함이 느껴지며 의사 선생님의 치료에 100% 믿음이 저의 치료에 가장 큰 도움이 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>믿고 맡길 수 있는 진실된 곳이 있고, 그곳에서의 치료는 일반 한의원과는 다른 따스함이 있다고 말해주고 싶습니다. 거짓과 상술이 아닌 치료에 진심인 곳이라고 말해주고 싶네요.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #31 -->
  <div id="detailModal31" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal31')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">디스크·협착증</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.03</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">목욕탕에서 넘어져 기어 다닐 정도였는데 — 온열·약침·한약으로 조금씩 회복, 10년 전 무릎도 고친 믿는 한의원</h3>
      <div class="review-detail-image-wrap">
        <img src="/static/reviews/review-31-jangjungsoon-p1.jpg" alt="장*순 자필후기" class="review-detail-image" loading="lazy">
      </div>
      <div class="review-detail-body">
        <div class="review-detail-author-bar">
          <span class="review-author"><i class="fas fa-user"></i> 장*순 (만 68세, 여)</span>
          <span class="review-date-label">작성일: 2022년 3월 20일</span>
          <div class="review-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-notes-medical"></i> 증상</h4>
          <p>미끄러운 목욕탕에서 크게 넘어져 허리를 쓸 수 없었고, 다리 저림과 통증 등 온 몸이 아파서 생활하는 데 큰 어려움을 겪었습니다. 걷기도 힘들고 처음 이틀은 기어서 화장실을 가야 할 정도로 상태가 나빴습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-question-circle"></i> 치료를 받게 된 이유</h4>
          <p>오래전 무릎 연골이 찢어져 오랜 시간 고생한 적이 있습니다. 정형외과에서는 수술을 권했으나, 지인의 추천으로 수정한의원을 찾았고 침·한약 등 권해주시는 치료를 받고 나았던 경험이 생각나 이번에도 수정한의원을 찾게 되었습니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-chart-line"></i> 치료 후 좋아진 점</h4>
          <p>원래 가지고 있던 허리 디스크의 치료는 물론 이번에 다쳐서 아픈 부위까지 온열치료와 약침을 맞아가며 서서히 회복할 수 있었고, 한약을 먹으며 몸의 기운을 북돋아 주어서 그런지 조금씩 나아짐을 느낍니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-smile"></i> 달라진 생활</h4>
          <p>차로 이동해야 함에도 수정한의원을 믿고 치료를 받는 것은 원장님과 직원분들의 친절함 때문입니다. 아픈 사람은 마음도 약해지고 치료가 더디게 느껴지면 마음이 조급해지기도 합니다. 열흘 정도의 치료기간 동안 한결같이 친절한 모습으로 최선을 다해 진료해 주심에 감사드립니다. 모두의 덕입니다.</p>
        </div>
        <div class="review-detail-section">
          <h4><i class="fas fa-comment-dots"></i> 한마디</h4>
          <p>내 뜻대로 몸을 움직이고, 내가 가고 싶은 곳이 있을 때 자유롭게 걸을 수 있다는 것은 참으로 감사해야 할 일인 것 같습니다. 치료 과정이 길고 힘들어도 의료진을 믿고 치료받는다면 차츰 건강을 되찾을 수 있을 거라 생각됩니다. 과거의 제가 그랬고, 지금의 제가 또다시 이곳에서 치료받고 있는 이유가 바로 그것입니다. 모두의 건강과 평화를 빕니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #25 -->
  <div id="detailModal25" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal25')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">돌발성난청·이명</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2022.12</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">독감 후 귀가 잘 안 들리고 이명에 시달렸는데, 4일만에 들리기 시작하고 지금은 대화도 편안해졌어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        11월 말부터 난청과 이명이 시작되어 대화도 힘들었는데, 12월 6일 치료 시작 후 4일만에 들리기 시작하고 2주 만에 대화가 편안해졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">10월 초쯤 독감에 걸렸는데 귀가 웅웅거리다가 11월 말경부터 귀가 잘 안들렸습니다. 바로 앞에서 하는 이야기도 잘 안들려서 생활하거나 사람과 대화할 때 많이 불편했습니다. 난청과 함께 오른쪽에 이명도 조금 생겼습니다. 가래도 자꾸 있었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">일하는데에 지장이 많아서 알고 지내던 수정한의원 원장님께 치료를 받아야겠다고 생각했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">12월 6일부터 치료를 시작하여 4일째부터 귀가 조금 들리기 시작하였고 일주일쯤 되니 상대방이 하는 소리가 조금 들리기 시작하였습니다. 2주쯤 지나니 기도할 때 상대방 소리가 들리고 목에서 끈적한 가래가 나오더니 가래도 없어졌습니다. 지금은 소리가 다 잘 들리고 상대방과 대화할 때 많이 편해졌습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">아이들을 돌보는 일을 해야하는데 소리가 안들리니 불편하였습니다. 기도할때도 상대방의 소리가 안들리니 불편했었는데 소리가 들리니 이제 곧 안심이 됩니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">원장님께서 치료를 잘해주셔서 감사합니다. 간호사선생님들은 모두 친절하며 고맙습니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-25-pakgyu-p1.jpg" alt="돌발성난청 이명 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 박*규 (만 80세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #24 -->
  <div id="detailModal24" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal24')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">소화불량</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2020.04</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">오래된 소화불량과 면역저하를 금음체질 한약·체질침으로 속이 편해지고 건강이 돌아왔어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        소화기관 불편감과 면역저하로 조금만 피곤해도 열이 나고 방광 증상이 있었는데, 금음체질 진단 후 약침·체질침 치료로 속이 편해지고 컨디션도 많이 좋아졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">① 오래기간 소화기관에 불편감이 있어, 늘 소화불량을 달고 살았던 것 같습니다. ② 면역력이 떨어져 그런지 조금만 피곤하거나 힘들면 방광쪽이 약해져 붓거나, 소변을 원활하게 보지 못하는 현상이 있었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">근본적인 원인을 생각하다 체질에 맞는 치료를 생각하게 되었고, 오래전 치료를 받아 본 사람들의 체험담을 통해 치료를 선택하게 되었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">원장님께서 금음체질이라 하셨고, 이에 맞는 약처방과 태반약침, 침치료를 병행하면서 일주일 정도 치료를 받아서 속이 편해졌고, 방광 쪽에 불편감도 좋아진 것 같습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">① 일단 컨디션이 좋아졌고, 몸이 가벼워졌다. ② 체질 치료약은 굉장히 복용하기가 편하다. 원래 한약복용을 잘 못하는데 수정한의원에서 처방된 약은 쓰지 않고 달리도 않아 부담감이 부드럽게 먹게 된다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">① 원장님께서 환자의 말에 귀 기울여 주시고 환자에 맞는 치료를 잘 해 주십니다. 간호사분들도 친절하게 진료받기에 편안함을 주십니다. ② 편의시설이 너무 잘 되어있어요^^ ✱ 맥을 통해 정확한 체질을 알아보고 그에 맞는 치료를 하게되면 치료가 개선되리라 믿습니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-24-kimnyeo-p1.jpg" alt="소화불량 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 김*녀 (만 16세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #23 -->
  <div id="detailModal23" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal23')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">안면홍조</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.09</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">얼굴에 열이 올라 안면홍조로 고생했는데 체질 치료 후 안면홍조와 함께 불면증도 없어지고 더불어 갑상선 혹도 줄어들었어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        피부과를 2개월 동안 다녔지만 호전이 없었고, 간의 열로 인한 안면홍조 진단 후 체질침·한약 치료로 홍조가 사라지고 갑상선 혹도 2.6cm → 1.5cm로 줄었습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">피부과를 2개월 동안 다녔습니다. 치료약을 복용하였지만 호전이 없었습니다. 잠깐 스치는 생각에 속에 이상이 있는 것 같은 느낌이 들어 전화로 물어보고 오게 됐습니다. 저의 증세는 간에 열이 있어서 얼굴에 홍조가 생긴 거라 했습니다. 소화도 잘 되지 않고 자다가 자주 깨는 일이 잦았으며 정말 많이 힘들었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">안면홍조와 함께 갑상선 혹(갑상선 크기 2.6cm)을 줄이기 위해 7월 4일부터 갑상선 혹에 대한 파동치료를 집중 치료했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">간의 열은 체질침과 한약(체질에 맞는)을 먹고, 얼굴의 홍조는 점점 좋아져서 지금은 정상적으로 되었습니다. 갑상선 혹은 9/8 서울대 초음파 검사 후 결과는 혹이 1.5cm로 줄어들고, 암이 아니라는 결과가 나왔습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">파동치료 한약복용 체질침 온열치료로 환자의 정성이 저를 좀 더 건강하게 만들어 준 것 같습니다. 저도 주기적으로 꼭 한의원에 다니며 면역력을 높이기 위해 최선을 다하고 있습니다. 아침에 일찍 가볍게 일어나게 되어 매우 좋습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">오랫동안 저의 면역력과 건강을 위해 정성껏 치료해 주시는 원장선생님께 감사드립니다. 또한 간호사님들도 친절하게 정성껏 환자를 대해 주셔서 감사드립니다. 면역력 치료를 위해 앞으로 더 승승장구하는 수정한의원이 되길 바랍니다. 사람을 살리는 한의원 ~ ♡</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-23-hyunjoo-p1.jpg" alt="안면홍조 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 현*주 (만 61세, 여)</span>
        <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
      </div>
    </div>
  </div>

  <!-- 상세 모달 #22 -->
  <div id="detailModal22" class="review-detail-modal" onclick="closeReviewModal(event,this)" style="display:none;">
    <div class="review-detail-inner">
      <button class="review-detail-close" onclick="closeModalById('detailModal22')">✕ 닫기</button>
      <div class="review-detail-header">
        <span class="review-cat-tag">회전근파열</span>
        <span class="review-handwritten-badge"><i class="fas fa-pen-nib"></i> 자필후기</span>
        <span class="review-date">2021.11</span>
      </div>
      <div class="review-quote-mark">"</div>
      <h3 class="review-detail-title">어깨인대가 끊어져서 팔이 안올라갔는데 수술안하고 수정한의원에서 치료받고 이제는 팔이 올라가고 통증도 없고 다 나았어요</h3>
      <p class="review-story" style="margin-bottom:18px;">
        정형외과에서 인대가 끊어져 수술해야 한다고 했지만, 수정한의원 체질침·추나·매선·약침 치료로 팔이 올라가고 통증도 사라졌습니다.
      </p>
      <div class="review-qa-wrap">
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 어떤 증상이 있었고 불편했나요?</span>
          <span class="review-qa-a">처음에는 어깨가 조금 뻐근하다가 점점 아파졌습니다. 그러다 팔이 안 올라가서 정형외과에 갔더니 인대가 끊어졌다고 하며 수술을 해야 한다고 했습니다. 정형외과에서 생각해 봤다고 하고 나서 평소에 다니던 수정한의원에 진료보러 와서 원장님과 상담했습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-question"></i> 치료를 받게 된 이유</span>
          <span class="review-qa-a">불편하더라도 일상생활하는데 많이 지장을 주지는 않았지만 옷 입을 때나 물건 들 때나 불편하고, 그냥 있어도 통증이 있어서 빨리 치료해야겠다는 생각이 들어서 한의원에 왔습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 치료를 통해 개선된 점</span>
          <span class="review-qa-a">원장님 침 맞으며 한약도 꾸준히 먹었습니다. 추나, 매선, 약침치료를 꾸준히 받았습니다. 약침·추나는 6번, 매선치료는 2번 받았는데 조금도 올라가지 않던 팔이 처음으로 올라가고, 올라간 팔을 버티고 있으면 팔이 떨렸는데, 지금은 팔의 떨림도 없어지고 어제 아침에는 팔을 거의 다 올릴 수 있었습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-circle-check"></i> 달라진 삶의 질</span>
          <span class="review-qa-a">팔의 움직임이 많이 개선되고 통증이 많이 줄어서 우선 기분이 좋습니다.</span>
        </div>
        <div class="review-qa-item">
          <span class="review-qa-q"><i class="fas fa-comment"></i> 하고 싶은 말</span>
          <span class="review-qa-a">원장님 말씀대로 어깨수술 안하고 잘했어요. 팔이 많이 나아서 좋습니다. 감사합니다.</span>
        </div>
      </div>
      <div class="review-detail-images">
        <img src="/static/reviews/review-22-jusoon-p1.jpg" alt="회전근파열 자필후기" class="review-detail-img" onclick="openImgFull(this.src)">
        <p class="review-img-caption"><i class="fas fa-search-plus"></i> 이미지를 클릭하면 원본 크기로 볼 수 있습니다</p>
      </div>
      <div class="review-card-footer" style="margin-top:16px;">
        <span class="review-author"><i class="fas fa-user"></i> 주*순 (만 74세, 여)</span>
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
      { el: document.getElementById('reviewCard13'), cat: '면역대사' },
      { el: document.getElementById('reviewCard14'), cat: '척추관절' },
      { el: document.getElementById('reviewCard15'), cat: '피부' },
      { el: document.getElementById('reviewCard16'), cat: '천식' },
      { el: document.getElementById('reviewCard17'), cat: '척추관절' },
      { el: document.getElementById('reviewCard18'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard19'), cat: '소화기' },
      { el: document.getElementById('reviewCard21'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard22'), cat: '척추관절' },
      { el: document.getElementById('reviewCard23'), cat: '피부' },
      { el: document.getElementById('reviewCard24'), cat: '소화기' },
      { el: document.getElementById('reviewCard25'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard26'), cat: '척추관절' },
      { el: document.getElementById('reviewCard27'), cat: '척추관절' },
      { el: document.getElementById('reviewCard28'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard29'), cat: '척추관절' },
      { el: document.getElementById('reviewCard30'), cat: '면역대사' },
      { el: document.getElementById('reviewCard72'), cat: '대상포진' },
      { el: document.getElementById('reviewCard71'), cat: '천식' },
      { el: document.getElementById('reviewCard70'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard69'), cat: '척추관절' },
      { el: document.getElementById('reviewCard68'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard67'), cat: '다이어트' },
      { el: document.getElementById('reviewCard66'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard65'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard64'), cat: '척추관절' },
      { el: document.getElementById('reviewCard63'), cat: '척추관절' },
      { el: document.getElementById('reviewCard62'), cat: '면역대사' },
      { el: document.getElementById('reviewCard61'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard60'), cat: '피부' },
      { el: document.getElementById('reviewCard59'), cat: '척추관절' },
      { el: document.getElementById('reviewCard58'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard57'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard56'), cat: '피부' },
      { el: document.getElementById('reviewCard55'), cat: '척추관절' },
      { el: document.getElementById('reviewCard54'), cat: '면역대사' },
      { el: document.getElementById('reviewCard53'), cat: '면역대사' },
      { el: document.getElementById('reviewCard52'), cat: '대상포진' },
      { el: document.getElementById('reviewCard51'), cat: '척추관절' },
      { el: document.getElementById('reviewCard50'), cat: '척추관절' },
      { el: document.getElementById('reviewCard49'), cat: '척추관절' },
      { el: document.getElementById('reviewCard48'), cat: '면역대사' },
      { el: document.getElementById('reviewCard47'), cat: '피부' },
      { el: document.getElementById('reviewCard46'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard45'), cat: '척추관절' },
      { el: document.getElementById('reviewCard44'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard43'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard42'), cat: '천식' },
      { el: document.getElementById('reviewCard41'), cat: '척추관절' },
      { el: document.getElementById('reviewCard40'), cat: '여성' },
      { el: document.getElementById('reviewCard39'), cat: '척추관절' },
      { el: document.getElementById('reviewCard38'), cat: '소화기' },
      { el: document.getElementById('reviewCard37'), cat: '구안와사' },
      { el: document.getElementById('reviewCard36'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard35'), cat: '뇌신경' },
      { el: document.getElementById('reviewCard34'), cat: '척추관절' },
      { el: document.getElementById('reviewCard33'), cat: '여성' },
      { el: document.getElementById('reviewCard32'), cat: '소화기' },
      { el: document.getElementById('reviewCard31'), cat: '척추관절' }
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
