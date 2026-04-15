export function previewPage(): string {
  const HERO_IMG = '/static/hero-bg-new.jpg'
  const DOCTOR_IMG = 'https://sspark.genspark.ai/cfimages?u1=URsYbSiVGMRRpSoZbrkQdfUD87cjw4I5cjtlSCkqhFHPR0lrErTf%2F1Q5Qf0kIkKubaIvLYt0%2Bw2L1coi%2FsuAAlUw7vVL6%2BwwXa2ursecO8%2BqtAs9qrI4tclQrvQ0&u2=1mQCeSA9jwtbQM7F&width=1024'

  return `
<style>
/* ===== 비교 페이지 전용 스타일 ===== */
.preview-wrap {
  min-height: 100vh;
  background: #f5f5f0;
}
.preview-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
  background: #1B4332; color: #fff;
  padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
}
.preview-nav-title { font-size: 1rem; font-weight: 700; color: #D4A853; }
.preview-nav-back { color: rgba(255,255,255,0.8); font-size: 0.9rem; text-decoration: none; }
.preview-nav-back:hover { color: #fff; }
.preview-tabs {
  display: flex; gap: 8px; background: #fff;
  position: sticky; top: 52px; z-index: 100;
  padding: 12px 24px;
  border-bottom: 2px solid #e0e0d8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.preview-tab {
  padding: 10px 28px; border-radius: 8px; cursor: pointer;
  font-size: 0.95rem; font-weight: 600; border: 2px solid #ddd;
  background: #fff; color: #555; transition: all 0.2s;
}
.preview-tab:hover { border-color: #1B4332; color: #1B4332; }
.preview-tab.active { background: #1B4332; color: #fff; border-color: #1B4332; }
.preview-tab span { font-size: 0.8rem; font-weight: 400; display: block; color: inherit; opacity: 0.75; }
.preview-desc {
  padding: 16px 24px; background: #fff3cd;
  border-left: 4px solid #D4A853; margin: 0;
  font-size: 0.92rem; color: #555;
}
.preview-section { display: none; }
.preview-section.active { display: block; }

/* ===== 히어로 공통 ===== */
.ph {
  position: relative; height: 100vh; min-height: 600px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.ph-bg { position: absolute; inset: 0; background-size: cover; background-repeat: no-repeat; }

/* ===== 옵션 A: 흰배경 + 어두운 텍스트 ===== */
.hero-a .ph-bg {
  background-image: url('${HERO_IMG}');
  background-position: center center;
  background-color: #fff;
}
.hero-a .ph-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0.3) 100%);
}
.hero-a .ph-content {
  position: relative; z-index: 1;
  max-width: 700px; padding: 0 60px;
  text-align: left; align-self: center;
  width: 100%; margin-left: 0;
}
.hero-a .ph-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(27,67,50,0.1); color: #1B4332;
  padding: 6px 16px; border-radius: 20px; font-size: 0.88rem; font-weight: 600;
  margin-bottom: 24px; border: 1px solid rgba(27,67,50,0.2);
}
.hero-a .ph-title {
  font-size: 3rem; font-weight: 800; line-height: 1.25;
  color: #1a2e22; margin-bottom: 20px;
  font-family: 'Noto Serif KR', serif;
}
.hero-a .ph-title em { color: #1B4332; font-style: normal; }
.hero-a .ph-sub {
  font-size: 1.1rem; line-height: 1.8; color: #3a4a3e;
  margin-bottom: 12px;
}
.hero-a .ph-tagline {
  font-size: 1rem; color: #B8860B; font-weight: 600; margin-bottom: 36px;
  font-family: 'Noto Serif KR', serif;
}
.hero-a .ph-btns { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-a .ph-btn-primary {
  background: #1B4332; color: #fff; padding: 16px 32px;
  border-radius: 50px; font-size: 1rem; font-weight: 700;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  transition: all 0.2s;
}
.hero-a .ph-btn-primary:hover { background: #0f2b1f; transform: translateY(-2px); }
.hero-a .ph-btn-secondary {
  background: transparent; color: #1B4332; padding: 16px 32px;
  border-radius: 50px; font-size: 1rem; font-weight: 600;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  border: 2px solid #1B4332; transition: all 0.2s;
}
.hero-a .ph-btn-secondary:hover { background: rgba(27,67,50,0.08); }

/* ===== 옵션 B: 이미지만 꽉 채우기 ===== */
.hero-b .ph-bg {
  background-image: url('${HERO_IMG}');
  background-position: center center;
  background-size: contain;
  background-color: #fdfdf8;
}
.hero-b .ph-bottom-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(27,67,50,0.95) 0%, rgba(27,67,50,0) 100%);
  padding: 60px 60px 40px;
  display: flex; align-items: flex-end; justify-content: space-between;
}
.hero-b .ph-bottom-text h2 {
  font-size: 2rem; font-weight: 800; color: #fff;
  font-family: 'Noto Serif KR', serif; margin-bottom: 8px;
}
.hero-b .ph-bottom-text p { font-size: 1rem; color: rgba(255,255,255,0.8); }
.hero-b .ph-btn-call {
  background: #D4A853; color: #fff; padding: 16px 32px;
  border-radius: 50px; font-size: 1rem; font-weight: 700;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  white-space: nowrap; flex-shrink: 0;
  transition: all 0.2s;
}
.hero-b .ph-btn-call:hover { background: #b8920a; transform: translateY(-2px); }

/* ===== 옵션 C: 의사 사진 유지 + 붓글씨 섹션 추가 ===== */
.hero-c .ph-bg {
  background-image: url('${DOCTOR_IMG}');
  background-position: center 20%;
}
.hero-c .ph-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(10,28,18,.82) 0%, rgba(27,67,50,.72) 50%, rgba(45,106,79,.4) 100%);
}
.hero-c .ph-content {
  position: relative; z-index: 1;
  text-align: center; color: #fff;
  padding: 0 40px; max-width: 900px; width: 100%;
}
.hero-c .ph-badge {
  display: inline-flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.15); color: #fff;
  padding: 8px 20px; border-radius: 20px; font-size: 0.9rem;
  margin-bottom: 28px; backdrop-filter: blur(8px);
}
.hero-c .ph-badge i { color: #D4A853; }
.hero-c .ph-title {
  font-size: 3.2rem; font-weight: 800; line-height: 1.3;
  margin-bottom: 20px; font-family: 'Noto Serif KR', serif;
}
.hero-c .ph-title em { color: #D4A853; font-style: normal; }
.hero-c .ph-sub { font-size: 1.1rem; line-height: 1.8; color: rgba(255,255,255,0.9); margin-bottom: 12px; }
.hero-c .ph-tagline { font-size: 1rem; color: #D4A853; font-weight: 600; margin-bottom: 36px; }
.hero-c .ph-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.hero-c .ph-btn-primary {
  background: #D4A853; color: #fff; padding: 16px 36px;
  border-radius: 50px; font-size: 1rem; font-weight: 700;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  transition: all 0.2s;
}
.hero-c .ph-btn-primary:hover { background: #b8920a; transform: translateY(-2px); }
.hero-c .ph-btn-secondary {
  background: rgba(255,255,255,0.15); color: #fff; padding: 16px 36px;
  border-radius: 50px; font-size: 1rem; font-weight: 600;
  text-decoration: none; display: flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,0.4); backdrop-filter: blur(8px);
  transition: all 0.2s;
}
.hero-c .ph-btn-secondary:hover { background: rgba(255,255,255,0.25); }

/* 옵션C 붓글씨 섹션 */
.calligraphy-section {
  background: #fdfdf8; padding: 80px 0;
  border-top: 1px solid #e8e4dc; border-bottom: 1px solid #e8e4dc;
}
.calligraphy-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 60px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
}
.calligraphy-img-wrap {
  background: #fff; border-radius: 16px;
  padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex; align-items: center; justify-content: center;
}
.calligraphy-img-wrap img { max-width: 100%; height: auto; }
.calligraphy-text { padding: 0 20px; }
.calligraphy-text .sec-label {
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em;
  color: #1B4332; text-transform: uppercase; margin-bottom: 16px;
}
.calligraphy-text h2 {
  font-size: 2.2rem; font-weight: 800; line-height: 1.3;
  color: #1a2e22; margin-bottom: 20px;
  font-family: 'Noto Serif KR', serif;
}
.calligraphy-text h2 em { color: #1B4332; font-style: normal; }
.calligraphy-text p {
  font-size: 1.05rem; line-height: 1.9; color: #555;
  margin-bottom: 16px;
}
.calligraphy-text blockquote {
  border-left: 3px solid #D4A853; padding-left: 20px;
  font-size: 1rem; color: #777; font-style: italic; margin-top: 24px;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .preview-tabs { padding: 10px 12px; gap: 6px; overflow-x: auto; flex-wrap: nowrap; }
  .preview-tab { padding: 8px 14px; font-size: 0.85rem; white-space: nowrap; flex-shrink: 0; }
  .hero-a .ph-content { padding: 0 24px; }
  .hero-a .ph-title { font-size: 1.9rem; }
  .hero-a .ph-btns { flex-direction: column; }
  .hero-b .ph-bottom-bar { flex-direction: column; gap: 16px; padding: 40px 24px 28px; align-items: flex-start; }
  .hero-c .ph-content { padding: 0 24px; }
  .hero-c .ph-title { font-size: 1.9rem; }
  .hero-c .ph-btns { flex-direction: column; align-items: center; }
  .calligraphy-inner { grid-template-columns: 1fr; gap: 32px; padding: 0 20px; }
}
</style>

<div class="preview-wrap" style="padding-top:52px">

  <!-- 상단 네비 -->
  <div class="preview-nav">
    <span class="preview-nav-title">🎨 히어로 섹션 비교 미리보기 (3가지 옵션)</span>
    <a href="/" class="preview-nav-back">← 실제 사이트로 돌아가기</a>
  </div>

  <!-- 탭 -->
  <div class="preview-tabs">
    <button class="preview-tab active" onclick="showTab('a')">
      옵션 A
      <span>흰 배경 + 어두운 텍스트</span>
    </button>
    <button class="preview-tab" onclick="showTab('b')">
      옵션 B
      <span>이미지만 꽉 채우기</span>
    </button>
    <button class="preview-tab" onclick="showTab('c')">
      옵션 C
      <span>의사사진 유지 + 붓글씨 섹션</span>
    </button>
  </div>

  <!-- ===== 옵션 A ===== -->
  <div id="preview-a" class="preview-section active">
    <div class="preview-desc">
      💡 <strong>옵션 A</strong> — 붓글씨 이미지를 배경으로, 왼쪽에 텍스트를 어두운 색으로 배치. 고급스럽고 전통적인 느낌. 텍스트 가독성 우수.
    </div>
    <section class="ph hero-a">
      <div class="ph-bg"></div>
      <div class="ph-overlay"></div>
      <div class="ph-content">
        <div class="ph-badge">
          <i class="fas fa-circle-check"></i> 1995년 개원 &nbsp;
          <i class="fas fa-circle-check"></i> 30년 8체질 임상 &nbsp;
          <i class="fas fa-circle-check"></i> 서울 노원구
        </div>
        <h1 class="ph-title">
          잘 낫지 않는 병에는<br/>
          <em>이유가 있습니다</em>
        </h1>
        <p class="ph-sub">
          수정한의원은 <strong>정확한 8체질 진단</strong>과 <strong>통합의학 치료</strong>로<br/>
          만성통증·난치질환의 <strong>근본 원인</strong>을 찾아 치료합니다
        </p>
        <p class="ph-tagline">잘 낫지 않는 병에 답을 찾습니다</p>
        <div class="ph-btns">
          <a href="tel:02-932-3815" class="ph-btn-primary">
            <i class="fas fa-phone"></i> 02-932-3815 진료예약
          </a>
          <a href="/introduction" class="ph-btn-secondary">
            <i class="fas fa-info-circle"></i> 병원 소개
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- ===== 옵션 B ===== -->
  <div id="preview-b" class="preview-section">
    <div class="preview-desc">
      💡 <strong>옵션 B</strong> — 이미지를 오브제처럼 전면에 배치. 텍스트 없이 이미지의 붓글씨·로고가 직접 메시지 전달. 하단 그라데이션으로 전화 CTA 배치.
    </div>
    <section class="ph hero-b">
      <div class="ph-bg"></div>
      <div class="ph-bottom-bar">
        <div class="ph-bottom-text">
          <h2>수정한의원</h2>
          <p>난치질환·만성통증 중점진료 8체질 통합의학 클리닉 | 1995년 개원, 노원역 5번출구</p>
        </div>
        <a href="tel:02-932-3815" class="ph-btn-call">
          <i class="fas fa-phone"></i> 02-932-3815 진료예약
        </a>
      </div>
    </section>
  </div>

  <!-- ===== 옵션 C ===== -->
  <div id="preview-c" class="preview-section">
    <div class="preview-desc">
      💡 <strong>옵션 C</strong> — 히어로는 현재 의사사진 그대로 유지. 스크롤 내리면 붓글씨 이미지를 별도 섹션으로 배치 (원장 철학/소개 섹션으로 활용).
    </div>
    <!-- 히어로: 기존 의사사진 유지 -->
    <section class="ph hero-c">
      <div class="ph-bg"></div>
      <div class="ph-overlay"></div>
      <div class="ph-content">
        <div class="ph-badge">
          <i class="fas fa-circle-check"></i> 1995년 개원&nbsp;&nbsp;
          <i class="fas fa-circle-check"></i> 30년 8체질 임상&nbsp;&nbsp;
          <i class="fas fa-circle-check"></i> 서울 노원구
        </div>
        <h1 class="ph-title">
          잘 낫지 않는 병에는<br/>
          <em>이유가 있습니다</em>
        </h1>
        <p class="ph-sub">
          수정한의원은 <strong>정확한 8체질 진단</strong>과 <strong>통합의학 치료</strong>로<br/>
          만성통증·난치질환의 <strong>근본 원인</strong>을 찾아 치료합니다
        </p>
        <p class="ph-tagline">잘 낫지 않는 병에 답을 찾습니다</p>
        <div class="ph-btns">
          <a href="tel:02-932-3815" class="ph-btn-primary">
            <i class="fas fa-phone"></i> 02-932-3815 진료예약
          </a>
          <a href="/introduction" class="ph-btn-secondary">
            <i class="fas fa-info-circle"></i> 병원 소개
          </a>
        </div>
      </div>
    </section>
    <!-- 붓글씨 섹션: 스크롤 후 등장 -->
    <section class="calligraphy-section">
      <div class="calligraphy-inner">
        <div class="calligraphy-img-wrap">
          <img src="${HERO_IMG}" alt="수정한의원 원장 철학" />
        </div>
        <div class="calligraphy-text">
          <div class="sec-label">PHILOSOPHY · 원장 철학</div>
          <h2>
            <em>인간을</em> 귀하게 여기고<br/>
            사랑이 가득한 병원
          </h2>
          <p>
            수정한의원 원장은 단순히 병을 치료하는 것을 넘어,
            <strong>바른 진료술과 인류의 건강</strong>에 이바지하는
            의료인이 되고자 30년간 8체질 임상에 헌신해왔습니다.
          </p>
          <p>
            삶에 기여하는 건강한 의술로, 환자 한 분 한 분을
            귀하게 여기는 마음으로 진료합니다.
          </p>
          <blockquote>
            "잘 낫지 않는 병에 답을 찾습니다" — 원장 최성일
          </blockquote>
        </div>
      </div>
    </section>
  </div>

</div>

<script>
function showTab(opt) {
  document.querySelectorAll('.preview-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('preview-' + opt).classList.add('active');
  event.currentTarget.classList.add('active');
  window.scrollTo({ top: 52, behavior: 'smooth' });
}
</script>
`
}
