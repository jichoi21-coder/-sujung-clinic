export const privacyPage = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>개인정보 처리방침 | 수정한의원</title>
  <meta name="description" content="수정한의원 개인정보 처리방침"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://www.8chejil-sujeong.com/privacy"/>

  <!-- Google Analytics GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CJ4ZCG8EEM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CJ4ZCG8EEM');
  </script>

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', sans-serif;
      background: #f8f7f4;
      color: #333;
      line-height: 1.8;
    }

    /* ── 헤더 ── */
    header {
      background: #1a1a2e;
      padding: 0 20px;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .header-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }
    .logo a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .logo span { color: #a8d5a2; }
    nav { display: flex; gap: 20px; }
    nav a {
      color: #ccc;
      text-decoration: none;
      font-size: 13px;
      transition: color 0.2s;
    }
    nav a:hover { color: #fff; }

    /* ── 본문 ── */
    .page-wrap {
      max-width: 860px;
      margin: 48px auto 80px;
      padding: 0 20px;
    }

    .page-title {
      font-size: 26px;
      font-weight: 800;
      color: #1a1a2e;
      margin-bottom: 6px;
      letter-spacing: -0.5px;
    }
    .page-subtitle {
      font-size: 13px;
      color: #888;
      margin-bottom: 36px;
    }

    .card {
      background: #fff;
      border-radius: 14px;
      padding: 36px 40px;
      margin-bottom: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }

    .section-num {
      display: inline-block;
      background: #1a1a2e;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    h2 {
      font-size: 17px;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f0f0f0;
    }
    p { font-size: 14px; color: #555; margin-bottom: 10px; }
    p:last-child { margin-bottom: 0; }

    ul, ol {
      padding-left: 20px;
      margin-bottom: 10px;
    }
    li {
      font-size: 14px;
      color: #555;
      margin-bottom: 6px;
    }

    .highlight-box {
      background: #f0f7ef;
      border-left: 4px solid #a8d5a2;
      border-radius: 0 8px 8px 0;
      padding: 14px 18px;
      margin: 14px 0;
      font-size: 14px;
      color: #3a5a38;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      margin-top: 10px;
    }
    th {
      background: #1a1a2e;
      color: #fff;
      padding: 10px 14px;
      text-align: left;
      font-weight: 600;
    }
    td {
      padding: 10px 14px;
      border-bottom: 1px solid #f0f0f0;
      color: #555;
      vertical-align: top;
    }
    tr:last-child td { border-bottom: none; }
    tr:nth-child(even) td { background: #fafafa; }

    .contact-box {
      background: #1a1a2e;
      color: #fff;
      border-radius: 10px;
      padding: 20px 24px;
      margin-top: 14px;
    }
    .contact-box strong { color: #a8d5a2; }
    .contact-box p { color: #ccc; margin-bottom: 6px; font-size: 14px; }
    .contact-box p:last-child { margin-bottom: 0; }

    .notice {
      background: #fff8f0;
      border: 1px solid #ffe0b2;
      border-radius: 10px;
      padding: 16px 20px;
      font-size: 13px;
      color: #8a5a00;
      margin-bottom: 20px;
    }
    .notice strong { color: #d48000; }

    /* ── 푸터 ── */
    footer {
      background: #1a1a2e;
      color: #999;
      text-align: center;
      padding: 28px 20px;
      font-size: 13px;
      line-height: 1.9;
    }
    footer a { color: #a8d5a2; text-decoration: none; }

    @media (max-width: 600px) {
      .card { padding: 24px 20px; }
      .page-title { font-size: 22px; }
      nav { display: none; }
      table { font-size: 12px; }
      th, td { padding: 8px 10px; }
    }
  </style>
</head>
<body>

<!-- ── 헤더 ── -->
<header>
  <div class="header-inner">
    <div class="logo">
      <a href="/"><span>수정</span>한의원</a>
    </div>
    <nav>
      <a href="/">홈</a>
      <a href="/introduction">한의원 소개</a>
      <a href="/reviews">치료후기</a>
      <a href="tel:02-932-3815">☎ 02-932-3815</a>
    </nav>
  </div>
</header>

<!-- ── 본문 ── -->
<main class="page-wrap">

  <h1 class="page-title">개인정보 처리방침</h1>
  <p class="page-subtitle">최종 수정일: 2025년 8월 1일 &nbsp;|&nbsp; 시행일: 2025년 8월 1일</p>

  <div class="notice">
    <strong>안내:</strong> 수정한의원(이하 "본원")은 이용자의 개인정보를 중요시하며,
    「개인정보 보호법」 및 관련 법령을 준수합니다.
    본 방침은 본원 웹사이트(<strong>https://www.8chejil-sujeong.com</strong>)에 적용됩니다.
  </div>

  <!-- 1. 수집하는 개인정보 -->
  <div class="card">
    <span class="section-num">제 1 조</span>
    <h2>수집하는 개인정보의 항목 및 수집 방법</h2>
    <p>본원은 치료 후기 열람 서비스 제공을 위해 아래와 같이 개인정보를 수집합니다.</p>

    <table>
      <thead>
        <tr>
          <th>수집 방법</th>
          <th>수집 항목</th>
          <th>목적</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>네이버 로그인 (소셜 로그인)</td>
          <td>이름(닉네임)</td>
          <td>로그인 사용자 식별 및 환영 메시지 표시</td>
        </tr>
        <tr>
          <td>카카오 로그인 (소셜 로그인)</td>
          <td>닉네임</td>
          <td>로그인 사용자 식별 및 환영 메시지 표시</td>
        </tr>
        <tr>
          <td>구글 로그인 (소셜 로그인)</td>
          <td>이름</td>
          <td>로그인 사용자 식별 및 환영 메시지 표시</td>
        </tr>
        <tr>
          <td>자동 수집</td>
          <td>접속 IP, 브라우저 정보, 방문 일시</td>
          <td>서비스 보안 및 통계 분석</td>
        </tr>
      </tbody>
    </table>

    <div class="highlight-box">
      본원은 이용자의 이름(닉네임) 외 민감정보(주민등록번호, 의료 정보 등)는 수집하지 않습니다.
    </div>
  </div>

  <!-- 2. 수집 및 이용 목적 -->
  <div class="card">
    <span class="section-num">제 2 조</span>
    <h2>개인정보의 수집 및 이용 목적</h2>
    <ul>
      <li>치료 후기 열람 서비스 제공을 위한 로그인 사용자 식별</li>
      <li>로그인 세션 유지 및 서비스 이용 편의 제공</li>
      <li>부정 이용 방지 및 서비스 보안 강화</li>
      <li>서비스 개선을 위한 통계 분석 (개인 식별 불가 형태로 처리)</li>
    </ul>
  </div>

  <!-- 3. 보유 및 이용 기간 -->
  <div class="card">
    <span class="section-num">제 3 조</span>
    <h2>개인정보의 보유 및 이용 기간</h2>
    <p>본원은 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>

    <table>
      <thead>
        <tr>
          <th>항목</th>
          <th>보유 기간</th>
          <th>근거</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>소셜 로그인 세션 정보</td>
          <td>로그인 후 24시간 (세션 만료 시 자동 삭제)</td>
          <td>서비스 제공 목적 달성</td>
        </tr>
        <tr>
          <td>서비스 이용 로그</td>
          <td>최대 3개월</td>
          <td>보안 및 부정이용 방지</td>
        </tr>
      </tbody>
    </table>

    <div class="highlight-box">
      본원은 별도의 회원 데이터베이스를 운영하지 않으며, 소셜 로그인 정보는 서버 메모리에 일시적으로만 처리됩니다.
    </div>
  </div>

  <!-- 4. 제3자 제공 -->
  <div class="card">
    <span class="section-num">제 4 조</span>
    <h2>개인정보의 제3자 제공</h2>
    <p>
      본원은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
      다만, 아래의 경우에는 예외로 합니다.
    </p>
    <ul>
      <li>이용자가 사전에 동의한 경우</li>
      <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
    </ul>
  </div>

  <!-- 5. 소셜 로그인 제공자 -->
  <div class="card">
    <span class="section-num">제 5 조</span>
    <h2>소셜 로그인 서비스 제공자</h2>
    <p>본원은 아래 소셜 로그인 서비스를 통해 인증을 처리합니다. 각 서비스의 개인정보처리방침을 함께 확인하시기 바랍니다.</p>

    <table>
      <thead>
        <tr>
          <th>서비스</th>
          <th>제공자</th>
          <th>개인정보처리방침</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>네이버 로그인</td>
          <td>네이버(주)</td>
          <td>https://policy.naver.com/policy/privacy.html</td>
        </tr>
        <tr>
          <td>카카오 로그인</td>
          <td>카카오(주)</td>
          <td>https://www.kakao.com/policy/privacy</td>
        </tr>
        <tr>
          <td>구글 로그인</td>
          <td>Google LLC</td>
          <td>https://policies.google.com/privacy</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 6. 이용자의 권리 -->
  <div class="card">
    <span class="section-num">제 6 조</span>
    <h2>이용자의 권리 및 행사 방법</h2>
    <p>이용자는 언제든지 아래의 권리를 행사할 수 있습니다.</p>
    <ul>
      <li><strong>열람 요구:</strong> 본인의 개인정보 처리 현황 열람 요구</li>
      <li><strong>정정·삭제 요구:</strong> 개인정보가 잘못되었거나 불필요한 경우 정정·삭제 요구</li>
      <li><strong>처리 정지 요구:</strong> 개인정보 처리에 대한 정지 요구</li>
      <li><strong>로그아웃:</strong> 치료 후기 페이지 상단의 "로그아웃" 버튼을 통해 즉시 세션 삭제 가능</li>
    </ul>
    <p>위 권리 행사는 하단의 개인정보 보호책임자에게 이메일 또는 전화로 요청하실 수 있으며, 지체 없이 처리하겠습니다.</p>
  </div>

  <!-- 7. 쿠키 -->
  <div class="card">
    <span class="section-num">제 7 조</span>
    <h2>쿠키(Cookie) 사용</h2>
    <p>본원 웹사이트는 로그인 세션 유지를 위해 쿠키를 사용합니다.</p>
    <table>
      <thead>
        <tr>
          <th>쿠키명</th>
          <th>용도</th>
          <th>보유 기간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>review_session</td>
          <td>로그인 세션 유지 (치료 후기 접근 권한)</td>
          <td>24시간 (브라우저 종료 또는 로그아웃 시 삭제)</td>
        </tr>
        <tr>
          <td>_ga, _ga_*</td>
          <td>Google Analytics — 방문 통계 (개인 식별 불가)</td>
          <td>최대 2년</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-top:12px;">브라우저 설정에서 쿠키를 거부할 수 있으나, 이 경우 로그인 기능 이용이 제한될 수 있습니다.</p>
  </div>

  <!-- 8. 개인정보 보호책임자 -->
  <div class="card">
    <span class="section-num">제 8 조</span>
    <h2>개인정보 보호책임자</h2>
    <p>이용자의 개인정보 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 아래 담당자에게 연락하시기 바랍니다.</p>
    <div class="contact-box">
      <p><strong>기관명:</strong> 수정한의원</p>
      <p><strong>책임자:</strong> 지창희 원장</p>
      <p><strong>주소:</strong> 서울특별시 노원구 동일로 1605, 수정한의원</p>
      <p><strong>전화:</strong> <a href="tel:02-932-3815" style="color:#a8d5a2;">02-932-3815</a></p>
      <p><strong>이메일:</strong> jichoi21@gmail.com</p>
    </div>
    <p style="margin-top:14px; font-size:13px; color:#888;">
      기타 개인정보 침해에 대한 신고나 상담은 아래 기관에 문의하실 수 있습니다.<br>
      • 개인정보 침해신고센터: <a href="https://privacy.kisa.or.kr" target="_blank">privacy.kisa.or.kr</a> / 국번없이 118<br>
      • 개인정보 분쟁조정위원회: <a href="https://www.kopico.go.kr" target="_blank">kopico.go.kr</a> / 1833-6972<br>
      • 대검찰청 사이버수사과: <a href="https://www.spo.go.kr" target="_blank">spo.go.kr</a> / 국번없이 1301
    </p>
  </div>

  <!-- 9. 변경 고지 -->
  <div class="card">
    <span class="section-num">제 9 조</span>
    <h2>개인정보 처리방침의 변경</h2>
    <p>
      본 개인정보 처리방침은 법령·정책 또는 서비스 변경에 따라 내용이 추가·삭제·수정될 수 있습니다.
      변경 사항은 시행일 7일 전부터 웹사이트 공지사항 또는 본 페이지를 통해 공지합니다.
    </p>
    <ul>
      <li>공고일: 2025년 8월 1일</li>
      <li>시행일: 2025년 8월 1일</li>
    </ul>
  </div>

</main>

<!-- ── 푸터 ── -->
<footer>
  <p>수정한의원 | 서울특별시 노원구 동일로 1605 | 대표: 지창희 | ☎ 02-932-3815</p>
  <p style="margin-top:6px;">
    <a href="/privacy">개인정보 처리방침</a>
  </p>
  <p style="margin-top:6px; font-size:12px; color:#666;">© 2025 수정한의원. All rights reserved.</p>
</footer>

</body>
</html>`
