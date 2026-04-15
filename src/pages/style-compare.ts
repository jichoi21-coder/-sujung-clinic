export function styleComparePage(): string {
  return `
  <style>
    .sc-wrap { max-width: 700px; margin: 0 auto; padding: 32px 16px 60px; }
    .sc-page-title { text-align:center; font-size:1.15rem; font-weight:800; color:#333; margin-bottom:4px; }
    .sc-page-sub { text-align:center; font-size:0.83rem; color:#999; margin-bottom:0; }
    .sc-label {
      font-size:0.76rem; font-weight:800; letter-spacing:0.08em;
      color:#888; text-transform:uppercase; margin:36px 0 10px;
      display:flex; align-items:center; gap:8px;
    }
    .sc-label::after { content:''; flex:1; height:1px; background:#ddd; }
    .sc-mock {
      background:#fff; border-radius:14px; padding:22px 20px;
      box-shadow:0 2px 10px rgba(0,0,0,0.07);
    }
    .sc-before {
      border-left:4px solid #e0e0e0; padding:10px 14px;
      background:#fafafa; font-size:0.86rem; color:#aaa;
      margin-bottom:12px; border-radius:0 6px 6px 0;
    }
    .sc-after { margin-top:12px; margin-bottom:0; }

    /* ── A안: 밝은 민트 배경 ── */
    .banner-a {
      background:#e8f8ef;
      border-left:5px solid #27ae60;
      border-radius:0 12px 12px 0;
      padding:18px 20px; margin:4px 0 12px;
    }
    .banner-a .ba-title {
      display:flex; align-items:center; gap:10px;
      font-size:1.12rem; font-weight:800; color:#0d5c2e;
      line-height:1.4; letter-spacing:-0.02em; margin-bottom:12px;
    }
    .banner-a .ba-icon {
      display:flex; align-items:center; justify-content:center;
      width:34px; height:34px; min-width:34px;
      background:#c2efd5; border-radius:50%; color:#1a7a42; font-size:1rem;
    }
    .banner-a .ba-desc {
      font-size:0.91rem; color:#1a4a2e; line-height:1.78;
      border-top:1px solid #b2dfc4; padding-top:11px; margin:0;
    }
    .banner-a .ba-desc strong { color:#0d5c2e; }

    /* ── B안: 흰 배경 + 굵은 좌측 테두리 ── */
    .banner-b {
      background:#fff;
      border-left:6px solid #1a7a42;
      border-radius:0 12px 12px 0;
      padding:18px 20px; margin:4px 0 12px;
      box-shadow:0 2px 12px rgba(26,122,66,0.10);
    }
    .banner-b .bb-badge {
      display:inline-block; background:#e8f8ef; color:#0d5c2e;
      font-size:0.72rem; font-weight:700; padding:2px 9px;
      border-radius:50px; border:1px solid #27ae60;
      margin-bottom:8px; letter-spacing:0.04em;
    }
    .banner-b .bb-title {
      display:flex; align-items:center; gap:10px;
      font-size:1.12rem; font-weight:800; color:#0d5c2e;
      line-height:1.4; letter-spacing:-0.02em; margin-bottom:12px;
    }
    .banner-b .bb-icon {
      display:flex; align-items:center; justify-content:center;
      width:34px; height:34px; min-width:34px;
      background:#e8f8ef; border:2px solid #27ae60;
      border-radius:50%; color:#1a7a42; font-size:1rem;
    }
    .banner-b .bb-desc { font-size:0.91rem; color:#2c3e2f; line-height:1.78; margin:0; }
    .banner-b .bb-desc strong { color:#0d5c2e; }

    /* ── C안: 골드/앰버 계열 ── */
    .banner-c {
      background:linear-gradient(135deg,#fffbf0 0%,#fff8e0 100%);
      border:1.5px solid #e6b800; border-radius:12px;
      padding:18px 20px; margin:4px 0 12px;
      box-shadow:0 3px 14px rgba(200,160,0,0.13);
    }
    .banner-c .bc-title {
      display:flex; align-items:center; gap:10px;
      font-size:1.12rem; font-weight:800; color:#5a3d00;
      line-height:1.4; letter-spacing:-0.02em; margin-bottom:12px;
    }
    .banner-c .bc-icon {
      display:flex; align-items:center; justify-content:center;
      width:34px; height:34px; min-width:34px;
      background:#ffd940; border-radius:50%; color:#7a5000; font-size:1rem;
    }
    .banner-c .bc-desc {
      font-size:0.91rem; color:#5a3d00; line-height:1.78;
      border-top:1px solid #f0d060; padding-top:11px; margin:0;
    }
    .banner-c .bc-desc strong { color:#8b5e00; }

    .sc-footer { text-align:center; margin-top:36px; font-size:0.82rem; color:#bbb; }
  </style>

  <div class="sc-wrap">
    <p class="sc-page-title">스타일 비교 — 3가지 안</p>
    <p class="sc-page-sub">실제 페이지에 삽입될 위치와 동일한 컨텍스트로 미리보기</p>

    <!-- A안 -->
    <div class="sc-label">A안 &nbsp;·&nbsp; 밝은 민트 배경</div>
    <div class="sc-mock">
      <div class="sc-before">↑ 앞 본문 (흰 배경 영역)</div>
      <div class="banner-a">
        <div class="ba-title">
          <span class="ba-icon"><i class="fas fa-bullseye"></i></span>
          <span>후유증 없는 완전한 회복,<br/>정확한 체질 진단이 시작입니다</span>
        </div>
        <p class="ba-desc">구안와사는 증상이 같아 보이지만, <strong>체질에 따라 치료 방법이 완전히 다릅니다.</strong> 체질별로 사용하는 약물도, 치료 원리도 전혀 다른 것입니다. 따라서 일률적인 치료는 위험하며, <strong>정확한 8체질 진단을 바탕으로 한 개인별 맞춤 치료와 처방이 필수적입니다.</strong></p>
      </div>
      <div class="sc-before sc-after">↓ 뒤 비교표 영역</div>
    </div>

    <!-- B안 -->
    <div class="sc-label">B안 &nbsp;·&nbsp; 흰 배경 + 굵은 좌측 테두리</div>
    <div class="sc-mock">
      <div class="sc-before">↑ 앞 본문 (흰 배경 영역)</div>
      <div class="banner-b">
        <div class="bb-badge">🎯 핵심 포인트</div>
        <div class="bb-title">
          <span class="bb-icon"><i class="fas fa-bullseye"></i></span>
          <span>후유증 없는 완전한 회복,<br/>정확한 체질 진단이 시작입니다</span>
        </div>
        <p class="bb-desc">구안와사는 증상이 같아 보이지만, <strong>체질에 따라 치료 방법이 완전히 다릅니다.</strong> 체질별로 사용하는 약물도, 치료 원리도 전혀 다른 것입니다. 따라서 일률적인 치료는 위험하며, <strong>정확한 8체질 진단을 바탕으로 한 개인별 맞춤 치료와 처방이 필수적입니다.</strong></p>
      </div>
      <div class="sc-before sc-after">↓ 뒤 비교표 영역</div>
    </div>

    <!-- C안 -->
    <div class="sc-label">C안 &nbsp;·&nbsp; 골드 / 앰버 계열</div>
    <div class="sc-mock">
      <div class="sc-before">↑ 앞 본문 (흰 배경 영역)</div>
      <div class="banner-c">
        <div class="bc-title">
          <span class="bc-icon"><i class="fas fa-bullseye"></i></span>
          <span>후유증 없는 완전한 회복,<br/>정확한 체질 진단이 시작입니다</span>
        </div>
        <p class="bc-desc">구안와사는 증상이 같아 보이지만, <strong>체질에 따라 치료 방법이 완전히 다릅니다.</strong> 체질별로 사용하는 약물도, 치료 원리도 전혀 다른 것입니다. 따라서 일률적인 치료는 위험하며, <strong>정확한 8체질 진단을 바탕으로 한 개인별 맞춤 치료와 처방이 필수적입니다.</strong></p>
      </div>
      <div class="sc-before sc-after">↓ 뒤 비교표 영역</div>
    </div>

    <p class="sc-footer">마음에 드는 안 번호를 알려주시면 바로 적용합니다</p>

    <!-- 1줄 vs 2줄 배너 비교 -->
    <div class="sc-label" style="margin-top:48px;">천식 CTA 배너 &nbsp;·&nbsp; 1줄 vs 2줄</div>
    <div class="sc-mock">
      <p style="font-size:0.8rem;color:#aaa;margin:0 0 14px;">버튼 위 결론 문구 — 1줄과 2줄 중 어느 쪽이 더 자연스러운지 비교</p>

      <div style="margin-bottom:10px;">
        <div style="font-size:0.72rem;font-weight:800;color:#888;letter-spacing:0.06em;margin-bottom:6px;">1줄</div>
        <div style="
          background:#1a5c3a; color:#fff; text-align:center;
          border-radius:10px; padding:14px 20px;
          font-size:0.97rem; font-weight:700; line-height:1.5;
        ">빔레이 파동요법 + 8체질 통합의학으로 천식의 근본 원인을 찾아 치료합니다.</div>
      </div>

      <div style="margin-top:18px;">
        <div style="font-size:0.72rem;font-weight:800;color:#888;letter-spacing:0.06em;margin-bottom:6px;">2줄</div>
        <div style="
          background:#1a5c3a; color:#fff; text-align:center;
          border-radius:10px; padding:14px 20px;
          font-size:0.97rem; font-weight:700; line-height:1.65;
        ">빔레이 파동요법 + 8체질 통합의학으로<br/>천식의 근본 원인을 찾아 치료합니다.</div>
      </div>
    </div>

    <p class="sc-footer" style="margin-top:20px;">1줄 또는 2줄 중 선택해 주시면 바로 적용합니다</p>
  </div>
  `
}
