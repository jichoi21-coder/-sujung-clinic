import { layout } from '../layout'

export function blogPage(reqUrl?: string): string {
  const content = `
  <style>
    .blog-page-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }
    .blog-page-header {
      text-align: center;
      margin-bottom: 40px;
    }
    .blog-page-header h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #3d2c1e;
      margin-bottom: 10px;
    }
    .blog-page-header p {
      font-size: 1rem;
      color: #888;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
    @media (max-width: 900px) {
      .blog-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
      .blog-grid { grid-template-columns: 1fr; }
      .blog-page-wrap { padding: 32px 16px 60px; }
    }
    .blog-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
      text-decoration: none;
      display: block;
      color: inherit;
    }
    .blog-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }
    .blog-card-img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      background: #f0ebe4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .blog-card-img img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    .blog-card-img-placeholder {
      width: 100%;
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #f0ebe4 0%, #e8ddd4 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
    }
    .blog-card-body {
      padding: 18px 20px 20px;
    }
    .blog-card-tag {
      display: inline-block;
      background: #f5efe9;
      color: #7c5c3e;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 20px;
      margin-bottom: 8px;
    }
    .blog-card-title {
      font-size: 1rem;
      font-weight: 700;
      color: #2d2118;
      line-height: 1.5;
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .blog-card-desc {
      font-size: 0.875rem;
      color: #888;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 12px;
    }
    .blog-card-date {
      font-size: 0.78rem;
      color: #bbb;
    }
    .blog-loading {
      text-align: center;
      padding: 80px 20px;
      color: #aaa;
    }
    .blog-loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #e8e0d5;
      border-top-color: #7c5c3e;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 16px;
    }
    .blog-empty {
      text-align: center;
      padding: 80px 20px;
      color: #aaa;
    }
    .blog-empty a {
      display: inline-block;
      margin-top: 16px;
      padding: 12px 28px;
      background: #7c5c3e;
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>

  <div class="blog-page-wrap">
    <div class="blog-page-header">
      <h1>수정한의원 블로그</h1>
      <p>8체질 건강 정보와 치료 이야기를 나눕니다</p>
    </div>

    <div id="blogGrid" class="blog-grid">
      <div class="blog-loading" id="blogLoading" style="grid-column:1/-1">
        <div class="blog-loading-spinner"></div>
        <p>블로그 글을 불러오는 중...</p>
      </div>
    </div>
  </div>

  <script>
    (function() {
      var INBLOG_SITE = 'sujeong';
      var BASE_URL = 'https://sujeong.inblog.io';

      function formatDate(dateStr) {
        var d = new Date(dateStr);
        return d.getFullYear() + '.' + String(d.getMonth()+1).padStart(2,'0') + '.' + String(d.getDate()).padStart(2,'0');
      }

      function renderCards(posts) {
        var grid = document.getElementById('blogGrid');
        if (!posts || posts.length === 0) {
          grid.innerHTML = '<div class="blog-empty" style="grid-column:1/-1"><p>아직 게시된 글이 없습니다.</p><a href="' + BASE_URL + '" target="_blank">인블로그 바로가기 →</a></div>';
          return;
        }
        var html = '';
        posts.forEach(function(post) {
          var url = BASE_URL + '/' + post.slug;
          var tag = (post.posts_tags && post.posts_tags[0]) ? post.posts_tags[0].tag.title : '';
          var imgHtml = post.image
            ? '<img src="' + post.image + '" alt="' + post.title + '" loading="lazy" onerror="this.parentNode.innerHTML=\'<div class=blog-card-img-placeholder>🌿</div>\'">'
            : '<div class="blog-card-img-placeholder">🌿</div>';
          html += '<a class="blog-card" href="' + url + '" target="_blank" rel="noopener">';
          html += '<div class="blog-card-img">' + imgHtml + '</div>';
          html += '<div class="blog-card-body">';
          if (tag) html += '<span class="blog-card-tag">' + tag + '</span>';
          html += '<div class="blog-card-title">' + post.title + '</div>';
          if (post.description) html += '<div class="blog-card-desc">' + post.description + '</div>';
          html += '<div class="blog-card-date">' + formatDate(post.published_at) + '</div>';
          html += '</div></a>';
        });
        grid.innerHTML = html;
      }

      // 인블로그 페이지에서 글 목록 fetch
      fetch(BASE_URL)
        .then(function(r) { return r.text(); })
        .then(function(html) {
          var match = html.match(/"posts":\\s*(\\[.*?\\])(?=,"site")/s);
          if (match) {
            try {
              var posts = JSON.parse(match[1]);
              renderCards(posts);
              return;
            } catch(e) {}
          }
          // 대안: __NEXT_DATA__ 에서 추출
          var nextMatch = html.match(/"posts":(\\[\\{.*?\\}\\]),"site"/s);
          if (nextMatch) {
            try {
              var posts2 = JSON.parse(nextMatch[1]);
              renderCards(posts2);
              return;
            } catch(e2) {}
          }
          // 모두 실패시 fallback
          document.getElementById('blogGrid').innerHTML = '<div class="blog-empty" style="grid-column:1/-1"><p>블로그 글 목록을 불러올 수 없습니다.</p><a href="' + BASE_URL + '" target="_blank">인블로그에서 보기 →</a></div>';
        })
        .catch(function() {
          document.getElementById('blogGrid').innerHTML = '<div class="blog-empty" style="grid-column:1/-1"><p>블로그 글 목록을 불러올 수 없습니다.</p><a href="' + BASE_URL + '" target="_blank">인블로그에서 보기 →</a></div>';
        });
    })();
  </script>
  `

  return layout(
    content,
    '블로그 | 수정한의원',
    '수정한의원 8체질 건강 블로그 - 체질별 건강 정보, 치료 사례, 한의학 이야기',
    reqUrl
  )
}
