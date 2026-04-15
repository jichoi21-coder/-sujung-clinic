/* 수정한의원 홈페이지 - 메인 자바스크립트 */

(function() {
  'use strict';

  // ── 스크롤 navbar 효과 ──
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList[window.scrollY > 60 ? 'add' : 'remove']('scrolled');
    }, { passive: true });
  }

  // ================================================================
  // 모바일 전용 드로어 메뉴 (햄버거 버튼 → 우측 슬라이드)
  // ================================================================
  var toggle  = document.getElementById('navToggle');
  var drawer  = document.getElementById('mobileDrawer');
  var overlay = document.getElementById('mobileOverlay');

  function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 햄버거 버튼 클릭
  if (toggle) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  // X 닫기 버튼
  var closeBtn = document.getElementById('mobileClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // 오버레이 클릭 시 닫기
  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  // 서브메뉴 토글 버튼들
  var toggleBtns = document.querySelectorAll('.mob-toggle-btn');
  toggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var parent = btn.closest('.mob-has-sub');
      if (!parent) return;
      var isOpen = parent.classList.contains('open');
      // 다른 항목 닫기
      document.querySelectorAll('.mob-has-sub.open').forEach(function(el) {
        if (el !== parent) el.classList.remove('open');
      });
      parent.classList[isOpen ? 'remove' : 'add']('open');
    });
  });

  // 서브메뉴 링크 클릭 시 드로어 닫기
  var subLinks = document.querySelectorAll('.mob-sub a');
  subLinks.forEach(function(link) {
    link.addEventListener('click', closeDrawer);
  });

  // 일반 메뉴 링크 클릭 시 드로어 닫기
  var mainLinks = document.querySelectorAll('.mob-menu-link[href]');
  mainLinks.forEach(function(link) {
    link.addEventListener('click', closeDrawer);
  });

  // ── 현재 페이지 메뉴 활성화 ──
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav-menu > li > a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && currentPath.startsWith(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

  // ── 숫자 카운팅 애니메이션 (전역 공통) ──
  function animateCountEl(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1800;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCountEl(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.diag-stat-num[data-target], .stats-number[data-target]').forEach(function(el) {
      countObserver.observe(el);
    });
  }

  // ── 스크롤 애니메이션 ──
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
      '.sp-card, .clinic-card, .value-item, .pos-point, .career-item, .greeting-block, .diag-step, .const-card, .gal-item, .gfg-small, .gfg-large, .info-card'
    ).forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  var vstyle = document.createElement('style');
  vstyle.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(vstyle);

  // ── 갤러리 라이트박스 ──
  document.querySelectorAll('.gal-item img, .gfg-small img, .gfg-large img').forEach(function(img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      var overlay2 = document.createElement('div');
      overlay2.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:20px;';
      var bigImg = document.createElement('img');
      bigImg.src = img.src; bigImg.alt = img.alt;
      bigImg.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;';
      overlay2.appendChild(bigImg);
      document.body.appendChild(overlay2);
      document.body.style.overflow = 'hidden';
      overlay2.addEventListener('click', function() {
        document.body.removeChild(overlay2);
        document.body.style.overflow = '';
      });
    });
  });

  // ── 부드러운 앵커 스크롤 ──
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var pos = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  console.log('✅ 수정한의원 홈페이지 로드 완료');
})();
