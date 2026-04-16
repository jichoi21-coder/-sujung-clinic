import { layout } from '../layout'

export function blogPage(reqUrl?: string): string {
  const content = `
  <style>
    .blog-iframe-wrap {
      width: 100%;
      height: calc(100vh - 130px);
      min-height: 600px;
      position: relative;
      background: #fff;
    }
    .blog-iframe-wrap iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
  </style>

  <div class="blog-iframe-wrap">
    <iframe
      src="https://sujeong.inblog.io"
      title="수정한의원 블로그"
      allowfullscreen
      loading="eager"
      id="blogIframe"
    ></iframe>
  </div>
  `

  return layout(
    content,
    '블로그 | 수정한의원',
    '수정한의원 8체질 건강 블로그 - 체질별 건강 정보, 치료 사례, 한의학 이야기',
    reqUrl
  )
}
