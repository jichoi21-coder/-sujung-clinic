export function specialClinicPage(): string {
  return `
<section class="page-hero gold">
  <div class="page-hero-content">
    <div class="page-breadcrumb"><a href="/">홈</a> <i class="fas fa-chevron-right"></i> 특설클리닉</div>
    <h1>특설 클리닉</h1>
    <p>수정한의원 30년 임상경험이 가장 강력하게 적용되는 중점 진료</p>
  </div>
</section>

<section class="bg-cream">
  <div class="section-container">
    <div class="section-header">
      <div class="section-label">SPECIAL CLINIC</div>
      <h2 class="section-title">특설 <span>클리닉</span></h2>
      <p class="section-desc">수정한의원은 8체질의학을 기반으로 한 통합의학 치료를 통해,<br/>기존 치료로 호전이 어려웠던 만성·난치성 질환을 중심으로 진료해오고 있습니다</p>
    </div>

    <!-- 6가지 질환 네비게이션 카드 -->
    <div class="sc-nav-grid">
      <a href="#facial" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#c0392b,#e74c3c)">
          <i class="fas fa-face-frown-open"></i>
        </div>
        <div class="sc-nav-num">01</div>
        <div class="sc-nav-title">구안와사·안면마비</div>
        <div class="sc-nav-key">골든타임 2주</div>
      </a>
      <a href="#migraine" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#6c3483,#8e44ad)">
          <i class="fas fa-head-side-virus"></i>
        </div>
        <div class="sc-nav-num">02</div>
        <div class="sc-nav-title">만성 편두통</div>
        <div class="sc-nav-key">경추·턱관절 교정</div>
      </a>
      <a href="#herpes" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#1a5276,#2980b9)">
          <i class="fas fa-virus"></i>
        </div>
        <div class="sc-nav-num">03</div>
        <div class="sc-nav-title">대상포진·후신경통</div>
        <div class="sc-nav-key">파동요법·태반약침</div>
      </a>
      <a href="#asthma" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#0e6655,#1abc9c)">
          <i class="fas fa-lungs-virus"></i>
        </div>
        <div class="sc-nav-num">04</div>
        <div class="sc-nav-title">만성천식·마이코플라즈마</div>
        <div class="sc-nav-key">빔레이 파동요법</div>
      </a>
      <a href="#colitis" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#784212,#d35400)">
          <i class="fas fa-shield-virus"></i>
        </div>
        <div class="sc-nav-num">05</div>
        <div class="sc-nav-title">궤양성 대장염</div>
        <div class="sc-nav-key">체질 근본치료</div>
      </a>
      <a href="#growth" class="sc-nav-card">
        <div class="sc-nav-icon" style="background:linear-gradient(135deg,#0a4a7c,#1a6bb0)">
          <i class="fas fa-child-reaching"></i>
        </div>
        <div class="sc-nav-num">06</div>
        <div class="sc-nav-title">소아성장</div>
        <div class="sc-nav-key">초음파 성장판 검사</div>
      </a>
    </div>

    <div class="special-clinic-intro">
      <p>환자분들은 질환을 진단받는 순간, 치료 방향에 대해 혼란과 부담을 느끼며 선택의 기로에 서게 됩니다. 이때 <strong>8체질 통합의학을 알고 치료하느냐, 모르고 치료하느냐에 따라 회복 속도와 치료 결과가 눈에 띄게 달라지는 질환들</strong>이 있습니다.</p>
    </div>

    <!-- 8체질 vs 일반치료 비교표 — 구안와사 섹션 바로 앞 독립 배치 -->
    <div class="sc-compare-wrap">
      <div class="sc-compare-header">
        <i class="fas fa-rotate-left"></i> 같은 질환, 완전히 다른 결과
      </div>
      <table class="sc-compare-table">
        <thead>
          <tr>
            <th>항목</th>
            <th class="th-8c">8체질 기반 치료</th>
            <th>일반적 치료</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="td-label">진단 방식</td>
            <td class="td-8c">개인 맞춤형 체질 진단</td>
            <td>일반적인 진단</td>
          </tr>
          <tr>
            <td class="td-label">치료 접근</td>
            <td class="td-8c">체질에 맞는 정확한 치료</td>
            <td>체질을 고려하지 않은 치료</td>
          </tr>
          <tr>
            <td class="td-label">회복 속도</td>
            <td class="td-8c">✓ 빠름</td>
            <td>✗ 더딤</td>
          </tr>
          <tr>
            <td class="td-label">치료 효과</td>
            <td class="td-8c">✓ 눈에 띄는 효과</td>
            <td>✗ 제한적 효과</td>
          </tr>
          <tr>
            <td class="td-label">개선 정도</td>
            <td class="td-8c">✓ 근본적 개선</td>
            <td>✗ 증상 완화만 가능</td>
          </tr>
          <tr>
            <td class="td-label">재발 위험</td>
            <td class="td-8c">✓ 재발 방지</td>
            <td>✗ 반복되는 증상</td>
          </tr>
          <tr>
            <td class="td-label">건강 관리</td>
            <td class="td-8c">✓ 장기 건강 관리 가능</td>
            <td>✗ 재발 위험 높음</td>
          </tr>
        </tbody>
      </table>

      <!-- 강조 문구 -->
      <div class="sc-compare-msg">
        <p class="sc-msg-main">질환을 진단받았다면, 먼저 <strong>당신의 체질</strong>을 알아야 합니다.</p>
        <p class="sc-msg-sub">체질을 아는 것만으로도 치료 결과가 달라집니다.</p>
        <div class="sc-msg-flow">
          🎯 8체질 진단 &nbsp;→&nbsp; 정확한 치료 &nbsp;→&nbsp; 빠른 회복 &nbsp;→&nbsp; 건강한 미래
        </div>
      </div>
    </div>

    <div class="special-disease-list">

      <div class="special-disease-item" id="facial">
        <div class="sdi-num">01</div>
        <div class="sdi-content">
          <div class="sdi-header">
            <div class="sdi-icon"><i class="fas fa-face-frown-open"></i></div>
            <h3>구안와사·안면마비</h3>
          </div>
          <div class="sdi-body">
            <div class="sdi-desc">

              <!-- 핵심 메시지 -->
              <div class="facial-headline">구안와사, 초기 치료가 인생을 바꿉니다</div>

              <!-- 환자 질문 -->
              <div class="facial-question">
                <span class="fq-icon">❓</span>
                <span>"갑자기 얼굴이 마비되고, 이 상태가 계속 지속되는 건 아닐까요?"</span>
              </div>
              <p class="facial-body-text">짧은 시간 안에 얼굴의 외형이 변하고 기능적 불편이 함께 나타나면서, 많은 환자분들이 이러한 상태가 영구적이지는 않을지에 대한 깊은 걱정과 혼란을 느끼게 됩니다.</p>
              <div class="facial-warning"><strong>그 우려는 맞습니다. 초기에 치료의 방향이 맞지 않으면 반드시 후유증이 남습니다.</strong></div>

              <!-- 체질 진단 강조 -->
              <div class="facial-core-wrap">
                <div class="facial-core-heading">
                  <i class="fas fa-bullseye"></i>
                  후유증 없는 완전한 회복, 정확한 체질 진단이 시작입니다
                </div>
                <p class="facial-core-desc">구안와사는 증상이 같아 보이지만, <strong>체질에 따라 치료 방법이 완전히 다릅니다.</strong> 체질별로 사용하는 약물도 다르고, 치료 원리도 전혀 다른 것입니다. 따라서 일률적인 치료는 <strong>후유증이 남을 수 있는 위험성이 있습니다</strong>, 정확한 8체질 진단을 바탕으로 한 <strong>개인별 맞춤 치료와 처방이 필수적입니다.</strong></p>
              </div>

              <!-- 비교표 -->
              <div class="facial-section-title">
                <span class="fs-icon">📊</span>
                <span>체질 맞춤치료 vs 일반 증상치료</span>
              </div>
              <div class="facial-table-wrap">
                <table class="facial-compare-table">
                  <thead>
                    <tr>
                      <th class="fc-th-label">진행 단계</th>
                      <th class="fc-th-good">체질 맞춤치료</th>
                      <th class="fc-th-bad">일반 증상치료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fc-label">초기 증상</td>
                      <td class="fc-good">같은 구안와사 증상</td>
                      <td class="fc-bad">같은 구안와사 증상</td>
                    </tr>
                    <tr>
                      <td class="fc-label">약물 구성</td>
                      <td class="fc-good">체질 맞춤 약물</td>
                      <td class="fc-bad">일반 증상 약물</td>
                    </tr>
                    <tr>
                      <td class="fc-label">회복 속도</td>
                      <td class="fc-good fc-emph">⚡ 빠른 회복</td>
                      <td class="fc-bad">🐌 더딘 회복</td>
                    </tr>
                    <tr>
                      <td class="fc-label">치료 경과</td>
                      <td class="fc-good">증상 빠른 호전</td>
                      <td class="fc-bad">증상 완화 지연</td>
                    </tr>
                    <tr>
                      <td class="fc-label">후유증 위험</td>
                      <td class="fc-good fc-emph">✓ 후유증 없음</td>
                      <td class="fc-bad">✗ 후유증 위험</td>
                    </tr>
                    <tr>
                      <td class="fc-label">최종 결과</td>
                      <td class="fc-good fc-emph">✅ 완전 회복</td>
                      <td class="fc-bad">⚠️ 지기 불편</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 골든 타임 -->
              <div class="facial-golden">
                <div class="facial-section-title golden-title">
                  <span class="fs-icon">⏰</span>
                  <span>초기 2주, 골든 타임이 결정한다</span>
                </div>
                <p class="facial-body-text">구안와사 증상이 나타난 후 처음 2주가 완전한 회복을 좌우합니다.</p>
                <ul class="facial-golden-list">
                  <li><span class="fgl-dot">🔸</span><span>초기 정확한 체질 진단 → <strong>빠른 회복 가능</strong></span></li>
                  <li><span class="fgl-dot">🔸</span><span>초기 일반적 증상 치료 → <strong>영구적 후유증 위험</strong></span></li>
                  <li><span class="fgl-dot">🔸</span><span>지연된 치료 → <strong>회복 기간 연장 및 합병증 위험</strong></span></li>
                </ul>
              </div>

              <!-- 결론 -->
              <div class="facial-conclusion">
                <div class="facial-section-title">
                  <span class="fs-icon">💡</span>
                  <span>당신의 선택이 미래를 결정합니다</span>
                </div>
                <p class="facial-body-text">증상이 같다고 해서 치료도 같을 수는 없습니다. 체질에 맞지 않는 치료로 소중한 시간을 낭비하기보다, <strong>지금 바로 정확한 8체질 진단을 받고 올바른 치료를 시작하세요.</strong></p>
                <p class="facial-body-text">구안와사는 <strong>빠를수록, 정확할수록</strong> 완전 회복에 가까워집니다. 초기 치료의 골든 타임을 놓치지 마시고, 체질에 맞는 정확한 치료로 건강한 일상을 되찾으세요.</p>
                <div class="facial-conclusion-banner">후유증 없는 완전한 회복, 수정한의원에서 시작됩니다.</div>
              </div>

              <!-- CTA -->
              <div class="sdi-cta-box">
                <div class="sdi-cta-concerns">
                  <span>"얼굴이 갑자기 마비됐어요"</span>
                  <span>"눈이 잘 안 감겨요"</span>
                  <span>"입이 한쪽으로 돌아갔어요"</span>
                </div>
                <p class="sdi-cta-lead">정확한 <strong>8체질 진단</strong>은 후유증 없는 완전한 회복의 시작입니다.</p>
                <div class="asthma-cta-btns">
                  <a href="tel:02-932-3815" class="asthma-btn-primary"><i class="fas fa-phone"></i> 전화 상담</a>
                  <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-comment-dots"></i> 지금 바로 상담하기</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="special-disease-item" id="migraine">
        <div class="sdi-num">02</div>
        <div class="sdi-content">
          <div class="sdi-header">
            <div class="sdi-icon"><i class="fas fa-head-side-virus"></i></div>
            <h3>만성 편두통</h3>
          </div>
          <div class="sdi-body">
            <div class="sdi-desc">

              <!-- Q1 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">①</span>
                  <span>검사에서 아무 이상이 없다는데, 왜 이렇게 아픈 건가요? 제가 꾀병인가요?</span>
                </div>
                <div class="migraine-q-body">
                  <p class="migraine-answer-lead">이 질문은 만성 두통으로 고통받는 분들이 가장 억울하고 상처받는 부분입니다.<br/><strong>먼저 분명히 말씀드립니다. 절대 꾀병이 아닙니다.</strong></p>
                  <p>MRI나 CT 검사에서 이상이 없다는 것은, 뇌종양·뇌출혈·뇌경색 같은 구조적·기질적 문제가 없다는 의미일 뿐, 통증 자체가 없다는 뜻이 아닙니다.</p>
                  <p>머리가 깨질 듯 아픈데도 검사 결과는 정상이라 하니, 주변에서 혹시 꾀병이 아닌지 의심하는 건 아닐까 하는 생각에 깊은 자괴감을 느끼게 됩니다. 여러 병원을 전전하며 다양한 치료를 받아도 나아지지 않으면, 극도의 무력감과 절망감 속에서 우울증으로 이어지기도 합니다.</p>
                </div>
              </div>

              <!-- Q2 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">②</span>
                  <span>진통제도 잘 듣지 않고, 여러 병원을 다녀도 나아지지 않는다면?</span>
                </div>
                <div class="migraine-q-body">
                  <p>원인을 모른 채 증상만 억누르는 치료로는 결코 근본적인 해결이 되지 않습니다. 중요한 것은 <strong>왜 두통이 생기는가</strong>, 그 구조적 원인과 정확한 체질 진단을 통해 두통을 유발하는 근본 원인을 찾아내는 것입니다.</p>
                </div>
              </div>

              <!-- Q3 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">③</span>
                  <span>후두신경감압술(수술)을 권유받으셨나요?</span>
                </div>
                <div class="migraine-q-body">
                  <div class="migraine-nosurgery"><strong>수술 없이 근본 원인을 해결할 수 있습니다.</strong></div>
                  <p>경추 1번(환추)과 2번(축추)은 머리와 목을 연결하는 최상부 척추로, 뇌간과 척수, 그리고 뇌로 향하는 혈관과 신경이 밀집한 매우 중요한 구조물입니다. 이 부위의 정렬이 미세하게 무너지면 주변 신경과 혈관이 지속적으로 압박을 받게 됩니다. 특히 이 부위를 지나는 <strong>후두신경(後頭神經)</strong>이 압박을 받으면, 뇌의 혈류가 저하되고 신경 신호 전달에 이상이 생기면서 만성적이고 극심한 두통으로 이어집니다.</p>
                </div>
              </div>

              <!-- Q4 치료접근 -->
              <div class="migraine-q-block migraine-treatment">
                <div class="migraine-q-title migraine-treat-title">
                  <span class="mq-num mq-num-green">④</span>
                  <span>수정한의원의 치료 접근</span>
                </div>
                <div class="migraine-q-body">
                  <p>수정한의원은 30년의 임상 경험을 통해, 오랜 기간 극심한 두통으로 고통받아 온 환자분들 상당수에서 <strong>경추 1·2번의 부정렬과 턱관절의 부정교합</strong>이 두통의 근본 원인임을 확인해 왔습니다.</p>
                  <p>치료에 앞서 X-ray와 MRI를 활용한 경추 구조 정밀 분석을 시행합니다. 단순히 뇌의 이상 유무를 확인하는 데 그치지 않고, 경추 상부의 정렬 상태, 턱관절의 부정교합, 추간판의 변화, 신경 압박 여부를 면밀히 검토하여 두통의 구조적 원인을 명확히 규명합니다.</p>
                  <p>이를 바탕으로 <strong>구조와 기능, 두 가지 핵심 치료</strong>를 병행하여 오랜 두통의 고리를 끊어냅니다.</p>
                  <ul class="migraine-treat-list">
                    <li><span class="mtl-icon"><i class="fas fa-bone"></i></span><span><strong>경추 1·2번 정렬 교정 치료, 턱관절의 부정교합 치료</strong> — 신경과 혈관을 압박하는 구조적 원인을 직접 해소합니다.</span></li>
                    <li><span class="mtl-icon"><i class="fas fa-leaf"></i></span><span><strong>8체질 진단에 따른 체질 맞춤 한약 치료</strong> — 개인의 체질에 맞는 처방으로 기능적 회복을 돕습니다.</span></li>
                  </ul>
                  <div class="migraine-result-banner">수정한의원에서는 수술 없이도 수년간 지속되던 극심한 두통이 해소되는 결과를 꾸준히 확인하고 있습니다.</div>
                </div>
              </div>

              <!-- CTA -->
              <div class="sdi-cta-box">
                <div class="sdi-cta-concerns">
                  <span>"MRI 찍어도 정상이래요"</span>
                  <span>"진통제를 달고 삽니다"</span>
                  <span>"두통이 수년째 반복돼요"</span>
                </div>
                <p class="sdi-cta-lead"><strong>경추·턱관절 정밀 분석 + 8체질 치료</strong>로 두통의 구조적 원인을 해결합니다.</p>
                <div class="asthma-cta-btns">
                  <a href="tel:02-932-3815" class="asthma-btn-primary"><i class="fas fa-phone"></i> 전화 상담</a>
                  <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-comment-dots"></i> 지금 바로 상담하기</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="special-disease-item" id="herpes">
        <div class="sdi-num">03</div>
        <div class="sdi-content">
          <div class="sdi-header">
            <div class="sdi-icon"><i class="fas fa-virus"></i></div>
            <h3>대상포진·대상포진 후 신경통</h3>
          </div>
          <div class="sdi-body">
            <div class="sdi-desc">

              <!-- Q1 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">①</span>
                  <span>대상포진이 나았는데도 왜 아직까지 이렇게 아픈 건가요?</span>
                </div>
                <div class="migraine-q-body">
                  <p>대상포진의 피부 발진과 물집은 2~3주가 지나면 아물지만, 일부 환자분들은 그 이후에도 극심한 통증이 지속됩니다. 이것이 바로 <strong>대상포진 후 신경통(Postherpetic Neuralgia, PHN)</strong>입니다.</p>
                  <p>어린 시절 수두를 앓은 후 신경절에 잠복해 있던 <strong>수두-대상포진 바이러스(Varicella-Zoster Virus, VZV)</strong>는 면역력이 저하되면 다시 활성화되어 신경을 따라 퍼지며 신경세포를 직접 손상시킵니다. 피부 병변이 아물고 난 뒤에도 손상된 신경이 오작동을 일으키며 통증 신호를 계속 만들어내는 것이 바로 대상포진 후 신경통의 본질입니다.</p>
                  <div class="migraine-answer-lead">피부는 다 나은 것처럼 보여도, 통증은 결코 과장이 아닌 실제적이고 심각한 신경병성 통증입니다.</div>
                </div>
              </div>

              <!-- Q2 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">②</span>
                  <span>이런 증상이 있으신가요?</span>
                </div>
                <div class="migraine-q-body">
                  <ul class="herpes-symptom-list">
                    <li><span class="hsl-dot">🔸</span><span>옷깃만 스쳐도, 바람만 닿아도 전기가 오는 듯한 극심한 통증</span></li>
                    <li><span class="hsl-dot">🔸</span><span>따갑고, 쑤시고, 불에 타는 듯한 작열감이 지속됨</span></li>
                    <li><span class="hsl-dot">🔸</span><span>통증 부위의 감각이 무뎌지거나 이상하게 느껴짐</span></li>
                    <li><span class="hsl-dot">🔸</span><span>통증으로 인한 수면 장애, 우울감, 일상생활 불가</span></li>
                  </ul>
                  <div class="herpes-stat-box">대상포진 후 신경통은 <strong>60세 이상 환자의 20~50%</strong>에서 발생하며, 방치하면 수개월에서 수년간 지속될 수 있습니다.<br/><strong>시간이 지난다고 저절로 낫지 않습니다.</strong></div>
                </div>
              </div>

              <!-- Q3 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">③</span>
                  <span>진통제를 먹어도 잘 듣지 않고, 시간이 지나도 나아지지 않는다면?</span>
                </div>
                <div class="migraine-q-body">
                  <p>통증의 본질이 단순한 염증이나 조직 손상이 아니라, <strong>신경계 자체의 기능 이상</strong>이기 때문입니다. 원인을 모른 채 증상만 억누르는 치료로는 근본적인 해결이 되지 않습니다.</p>
                  <p>중요한 것은 체내에 잠복한 수두-대상포진 바이러스의 재활성화라는 신경학적 원인과 정확한 체질 진단을 통해 통증을 유발하는 근본 원인을 찾아내는 것입니다.</p>
                </div>
              </div>

              <!-- Q4 치료 -->
              <div class="migraine-q-block migraine-treatment">
                <div class="migraine-q-title migraine-treat-title">
                  <span class="mq-num mq-num-green">④</span>
                  <span>수정한의원의 치료 구성</span>
                </div>
                <div class="migraine-q-body">
                  <p>수정한의원은 30년의 임상 경험을 바탕으로, <strong>세 가지 핵심 치료를 유기적으로 병행</strong>하여 오랜 통증의 고리를 끊어냅니다.</p>
                  <ul class="migraine-treat-list">
                    <li>
                      <span class="mtl-icon"><i class="fas fa-wave-square"></i></span>
                      <span><strong>파동요법</strong> — 로열 레이몬드 라이프(Royal Raymond Rife)의 이론에 기반한 저에너지 전자기장 빔레이(Beam Ray) 파동요법으로, 특정 주파수를 활용해 신경절에 잠복한 수두-대상포진 바이러스에 직접 작용합니다.</span>
                    </li>
                    <li>
                      <span class="mtl-icon"><i class="fas fa-syringe"></i></span>
                      <span><strong>태반약침 치료</strong> — 태반 추출물의 신경 재생 및 항염 효과를 활용하여 수두-대상포진 바이러스로 인해 손상된 신경 조직의 회복을 촉진하고 만성 통증을 완화합니다.</span>
                    </li>
                    <li>
                      <span class="mtl-icon"><i class="fas fa-leaf"></i></span>
                      <span><strong>8체질 맞춤 한약 치료</strong> — 체질에 맞는 처방으로 저하된 면역력과 기혈 순환을 회복시켜 수두-대상포진 바이러스의 재활성화를 억제하고 신경통의 재발을 막습니다.</span>
                    </li>
                  </ul>
                  <div class="migraine-result-banner">수정한의원에서는 수개월에서 수년간 지속되던 대상포진 후 신경통이 단계적으로 완화되고 해소되는 결과를 꾸준히 확인하고 있습니다.</div>
                </div>
              </div>

              <!-- CTA -->
              <div class="sdi-cta-box">
                <div class="sdi-cta-concerns">
                  <span>"피부는 나았는데 통증이 계속돼요"</span>
                  <span>"진통제도 안 들어요"</span>
                  <span>"옷깃만 스쳐도 아파요"</span>
                </div>
                <p class="sdi-cta-lead"><strong>파동요법 + 태반약침 + 8체질 한약</strong>으로 신경 손상의 근본을 회복합니다.</p>
                <div class="asthma-cta-btns">
                  <a href="tel:02-932-3815" class="asthma-btn-primary"><i class="fas fa-phone"></i> 전화 상담</a>
                  <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-comment-dots"></i> 지금 바로 상담하기</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="special-disease-item" id="asthma">
        <div class="sdi-num">04</div>
        <div class="sdi-content">
          <div class="sdi-header">
            <div class="sdi-icon"><i class="fas fa-lungs-virus"></i></div>
            <h3>만성천식·마이코플라즈마 폐렴후 천식</h3>
          </div>
          <div class="sdi-body">
            <div class="sdi-desc">

              <!-- Hero 서브 메시지 -->
              <div class="asthma-hero-box">
                <div class="asthma-hero-main">폐렴은 나았는데,<br/>왜 기침이 멈추지 않을까요?</div>
                <div class="asthma-hero-sub">항생제도, 흡입기도 소용없던 그 기침 — 수정한의원이 답을 찾아드립니다.</div>
              </div>

              <!-- Q1 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">Q1</span>
                  <span>마이코플라즈마 폐렴이 뭔가요?</span>
                </div>
                <div class="migraine-q-body">
                  <p>세균과 바이러스의 중간 성질을 가진 미생물이 일으키는 호흡기 감염입니다. 감기처럼 시작되지만 기침이 2~4주까지 심하게 이어지며, 소아·청소년에서 특히 많이 발생합니다. <strong>잠복기가 길어 가족 전체로 퍼지는 경우가 흔합니다.</strong></p>
                </div>
              </div>

              <!-- Q2 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">Q2</span>
                  <span>폐렴은 나았는데 왜 기침이 계속되나요?</span>
                </div>
                <div class="migraine-q-body">
                  <p>항생제로 균을 제거해도, 감염 과정에서 이미 시작된 면역 과잉 반응과 기도 손상은 항생제로 되돌릴 수 없기 때문입니다.</p>
                  <div class="asthma-highlight-box"><strong>마이코플라즈마가 지나간 자리에 기도과민성, 점액 과분비, 기관지 리모델링 등 천식과 동일한 변화가 남습니다.</strong><br/>최근에는 항생제 내성률까지 급증하면서, 균 자체가 완전히 제거되지 않고 잔존하는 경우도 늘고 있습니다.</div>
                  <div class="asthma-stat-box">
                    <span class="asthma-stat-icon">📊</span>
                    <span><strong>대만 전국 코호트 연구(2016)</strong>에 따르면, 마이코플라즈마 감염자의 약 <strong>11%가 천식으로 진행</strong>했으며 이는 비감염자(4%)의 약 <strong>3배</strong>, 감염 직후 6개월 이내에는 위험이 <strong>7.3배</strong>까지 높아집니다.</span>
                  </div>
                </div>
              </div>

              <!-- Q3 치료 -->
              <div class="migraine-q-block migraine-treatment">
                <div class="migraine-q-title migraine-treat-title">
                  <span class="mq-num mq-num-green">Q3</span>
                  <span>수정한의원에서는 어떻게 치료하나요?</span>
                </div>
                <div class="migraine-q-body">
                  <div class="asthma-treat-table-wrap">
                    <table class="asthma-treat-table">
                      <thead>
                        <tr><th>치료 축</th><th>역할</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="att-label"><i class="fas fa-wave-square"></i> 빔레이 파동요법</td>
                          <td>잔존 마이코플라즈마에 직접 작용</td>
                        </tr>
                        <tr>
                          <td class="att-label"><i class="fas fa-acupuncture-person"></i> 8체질 침 치료</td>
                          <td>과활성 면역 진정, 장부 균형 회복</td>
                        </tr>
                        <tr>
                          <td class="att-label"><i class="fas fa-leaf"></i> 체질 맞춤 한약</td>
                          <td>기관지 점막 회복, 기도 염증 완화</td>
                        </tr>
                        <tr>
                          <td class="att-label"><i class="fas fa-circle-dot"></i> 양자돔 + 생활관리</td>
                          <td>전신 면역 회복, 체질별 생활 지도</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="asthma-flow-box">병원체 제거 → 면역 균형 → 기도 회복 순서로 진행합니다.</div>
                </div>
              </div>

              <!-- Q4 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">Q4</span>
                  <span>빔레이 파동요법이 뭔가요?</span>
                </div>
                <div class="migraine-q-body">
                  <p>미국 과학자 <strong>로열 레이몬드 라이프(Royal Raymond Rife)</strong>의 이론에 기반한 저에너지 전자기장 치료법입니다. 모든 미생물에는 고유한 공명 주파수가 있으며, 그 주파수를 조사하면 해당 미생물만 선택적으로 파괴할 수 있습니다 — 특정 소리가 유리잔만 깨뜨리는 공명 현상과 같은 원리입니다.</p>
                  <p>마이코플라즈마는 세포벽 없이 지질막만으로 둘러싸인 단순한 구조이기 때문에 특정 공명 주파수에 더 민감하게 반응할 수 있으며, <strong>정상 세포에는 영향을 주지 않습니다.</strong></p>
                  <div class="asthma-beam-box">수정한의원에서는 이 파동요법으로 항생제 후에도 잔존할 수 있는 마이코플라즈마에 직접 작용합니다.</div>
                </div>
              </div>

              <!-- Q5 -->
              <div class="migraine-q-block">
                <div class="migraine-q-title">
                  <span class="mq-num">Q5</span>
                  <span>아이도 치료받을 수 있나요? 다른 치료와 병행은요?</span>
                </div>
                <div class="migraine-q-body">
                  <p><strong>모두 가능합니다.</strong> 빔레이 파동요법은 비침습적이라 소아에게도 적용할 수 있고, 현재 받고 계신 양방 치료(항생제, 흡입기 등)와도 병행이 가능합니다. 진료 시 현재 치료 상황을 알려주시면, 조화를 이루는 방향으로 설계합니다.</p>
                </div>
              </div>

              <!-- CTA -->
              <div class="asthma-cta-block">
                <div class="asthma-cta-title">이런 고민이 있으시다면, 지금 상담하세요</div>
                <ul class="asthma-cta-list">
                  <li>폐렴 후 기침이 안 멈춰요</li>
                  <li>항생제 내성인데 방법이 없나요?</li>
                  <li>아이가 자꾸 쌕쌕거려요</li>
                </ul>
                <div class="migraine-result-banner">빔레이 파동요법 + 8체질 통합의학으로 천식의 근본 원인을 찾아 치료합니다.</div>
                <div class="asthma-cta-btns">
                  <a href="tel:02-932-3815" class="asthma-btn-primary"><i class="fas fa-phone"></i> 전화 상담</a>
                  <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-comment-dots"></i> 지금 바로 상담하기</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="special-disease-item" id="colitis">
        <div class="sdi-num">05</div>
        <div class="sdi-content">
          <div class="sdi-header">
            <div class="sdi-icon"><i class="fas fa-shield-virus"></i></div>
            <h3>궤양성 대장염</h3>
          </div>
          <div class="sdi-body">

            <!-- Hero -->
            <div class="colitis-hero-box">
              <div class="colitis-hero-main">약을 먹어도 반복되는 혈변과 복통,<br/>평생 이렇게 살아야 하나요?</div>
              <div class="colitis-hero-sub">수정한의원이 다른 답을 찾아드립니다.</div>
            </div>

            <!-- Q1 -->
            <div class="migraine-q-block">
              <div class="migraine-q-title">
                <span class="mq-num">Q1</span>
                <span>궤양성 대장염이 뭔가요?</span>
              </div>
              <div class="migraine-q-body">
                <p>대장 점막에 만성 염증과 궤양이 반복되는 자가면역성 난치질환입니다. 혈변, 점액변, 복통, 잦은 설사가 주요 증상이며, 재발과 관해를 반복하는 것이 특징입니다.</p>
                <div class="colitis-stat-box">
                  <span class="colitis-stat-icon">📊</span>
                  <span>국내 환자 수는 <strong>10년 새 2배로 증가</strong>했으며, <strong>20~30대</strong>에 집중 발생합니다.</span>
                </div>
              </div>
            </div>

            <!-- Q2 -->
            <div class="migraine-q-block">
              <div class="migraine-q-title">
                <span class="mq-num">Q2</span>
                <span>왜 약을 먹어도 재발하나요?</span>
              </div>
              <div class="migraine-q-body">
                <p>기존 치료(메살라진 → 스테로이드 → 면역억제제 → 생물학적 제제)는 모두 면역 반응을 억제하여 염증을 가라앉히는 방식입니다.</p>
                <div class="colitis-highlight-box">
                  <strong>면역이 왜 대장을 공격하게 되었는지, 그 근본 원인은 건드리지 못합니다.</strong><br/>
                  약을 줄이거나 끊으면 면역 과잉이 다시 시작되고, 생물학적 제제도 시간이 지나면 효과가 떨어지는 경우가 많습니다.
                </div>
              </div>
            </div>

            <!-- 핵심 강조 블록: 체질과 근본 치료 -->
            <div class="colitis-core-banner">
              <div class="colitis-core-title">
                <i class="fas fa-exclamation-circle"></i>
                궤양성 대장염은 체질을 모르면 근본 치료가 불가능합니다
              </div>
              <div class="colitis-core-body">
                <p>8체질의학에서 궤양성 대장염은 대부분 <strong class="colitis-constitution-tag">금양·금음체질</strong>에서 나타나는 체질 특성병입니다.</p>
                <div class="colitis-core-reason">
                  <div class="colitis-core-reason-item">
                    <span class="colitis-core-icon">🫁</span>
                    <span>금체질은 대장 기능이 <strong>선천적으로 취약한 구조</strong>를 가지고 있어, 면역 불균형이 대장으로 집중되기 쉽습니다.</span>
                  </div>
                  <div class="colitis-core-reason-item">
                    <span class="colitis-core-icon">🔁</span>
                    <span>체질을 모른 채 <strong>면역만 억제하는 치료</strong>로는 이 구조적 취약성을 해결할 수 없기 때문에, 약을 아무리 바꿔도 재발이 반복되는 것입니다.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Q3 치료표 -->
            <div class="migraine-q-block migraine-treatment">
              <div class="migraine-q-title migraine-treat-title">
                <span class="mq-num mq-num-green">Q3</span>
                <span>수정한의원에서는 어떻게 치료하나요?</span>
              </div>
              <div class="migraine-q-body">
                <div class="asthma-treat-table-wrap">
                  <table class="asthma-treat-table">
                    <thead>
                      <tr><th>치료 축</th><th>역할</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="att-label"><i class="fas fa-wave-square"></i> 빔레이 파동요법</td>
                        <td>장내 유해균에 직접 작용, 세균총 균형 회복 지원</td>
                      </tr>
                      <tr>
                        <td class="att-label"><i class="fas fa-acupuncture-person"></i> 8체질 침 치료</td>
                        <td>면역 과잉 진정, 장부 균형 회복</td>
                      </tr>
                      <tr>
                        <td class="att-label"><i class="fas fa-leaf"></i> 체질 맞춤 한약</td>
                        <td>대장 점막 회복, 염증 완화</td>
                      </tr>
                      <tr>
                        <td class="att-label"><i class="fas fa-circle-dot"></i> 양자돔 + 생활관리</td>
                        <td>전신 면역 안정, 체질별 식이 지도</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="asthma-flow-box">장내 환경 정리 → 면역 균형 → 점막 회복 순서로 진행합니다.</div>
              </div>
            </div>

            <!-- Q4 빔레이 -->
            <div class="migraine-q-block">
              <div class="migraine-q-title">
                <span class="mq-num">Q4</span>
                <span>빔레이 파동요법이 대장염에 어떻게 작용하나요?</span>
              </div>
              <div class="migraine-q-body">
                <p>궤양성 대장염의 핵심 기전 중 하나는 <strong>장내 세균총의 불균형</strong>입니다.</p>
                <div class="colitis-cycle-box">
                  유해균 과잉 → 장 점막 손상 → 면역 공격 → 만성 염증의 악순환
                </div>
                <div class="asthma-beam-box">
                  <strong>로열 레이몬드 라이프(Royal Raymond Rife)</strong>의 이론에 기반한 빔레이 파동요법은 유해균의 고유 공명 주파수를 조사하여 선택적으로 작용합니다.<br/>
                  항생제처럼 유익균까지 파괴하지 않으며, 정상 세포에도 영향을 주지 않습니다.
                </div>
              </div>
            </div>

            <!-- Q5 한약 근거 -->
            <div class="migraine-q-block">
              <div class="migraine-q-title">
                <span class="mq-num">Q5</span>
                <span>한약 치료에 근거가 있나요?</span>
              </div>
              <div class="migraine-q-body">
                <div class="colitis-stat-box">
                  <span class="colitis-stat-icon">📑</span>
                  <span><strong>SCI 논문(2017)</strong>에 따르면, 기존 치료에 한약을 병행했을 때 관해 실패 가능성이 <strong>26% 감소</strong>했고, 재발률도 유의하게 낮아졌습니다.</span>
                </div>
                <p style="margin-top:10px;">수정한의원에서는 이러한 근거 기반 처방을 <strong>8체질에 맞게 가감</strong>하여 처방합니다.</p>
              </div>
            </div>

            <!-- Q6 병행 -->
            <div class="migraine-q-block">
              <div class="migraine-q-title">
                <span class="mq-num">Q6</span>
                <span>양방 치료와 함께 받아도 되나요?</span>
              </div>
              <div class="migraine-q-body">
                <div class="colitis-highlight-box" style="border-left-color:#2e7d32; background:#f1f8f3;">
                  <strong style="color:#1a5c3a;">병행 가능합니다.</strong><br/>
                  현재 복용 중인 약이 있다면 진료 시 알려주시면, 기존 치료와 조화를 이루는 방향으로 설계합니다.
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="asthma-cta-box">
              <div class="asthma-cta-concerns">
                <span>"약을 먹어도 혈변이 반복돼요"</span>
                <span>"스테로이드 끊으면 바로 재발해요"</span>
                <span>"생물학적 제제도 효과가 떨어져요"</span>
              </div>
              <p class="asthma-cta-lead"><strong>빔레이 파동요법 + 8체질 통합의학</strong>으로 재발의 근본 원인을 찾아 치료합니다.</p>
              <div class="asthma-cta-btns">
                <a href="#contact" class="asthma-btn-primary">지금 바로 상담하기</a>
                <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-phone"></i> 전화 상담</a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

      <!-- ===== 소아성장 ===== -->
      <div class="special-disease-item" id="growth">
        <div class="sdi-num">06</div>
        <div class="sdi-content">
        <div class="sdi-header">
          <div class="sdi-icon"><i class="fas fa-child-reaching"></i></div>
          <h3>소아성장</h3>
        </div>
        <div class="sdi-body">
          <!-- Hero -->
          <div class="auto-hero-box" style="background:linear-gradient(135deg,#0a2240 0%,#1a4a80 60%,#0a2a50 100%); margin-bottom:18px;">
            <div class="auto-hero-main" style="font-size:1.1rem;"><strong style="color:#a8d8ff;">초음파 성장판 검사</strong> + <strong style="color:#a8d8ff;">정확한 8체질 진단</strong></div>
            <div class="auto-hero-sub">수정한의원에서 아이의 남은 <strong style="color:#ffffff;">성장 잠재력</strong>을 키우세요</div>
          </div>

          <!-- Q1 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q1</span>
              <span>우리 아이, 성장 클리닉이 필요한 신호는?</span>
            </div>
            <div class="auto-q-body">
              <div class="auto-table-wrap">
                <table class="auto-treat-table">
                  <thead><tr><th>신호</th><th>설명</th></tr></thead>
                  <tbody>
                    <tr><td class="att-label">연간 성장 속도 4cm 미만</td><td>같은 학년에서 키 순서가 계속 뒤로 밀림</td></tr>
                    <tr><td class="att-label">식욕 부진·편식</td><td>밥 한 공기 채우기 어려움, 영양 불균형</td></tr>
                    <tr><td class="att-label">잦은 감기·비염·장염</td><td>면역 소모로 성장 에너지 전환 불가</td></tr>
                    <tr><td class="att-label">수면 문제</td><td>밤 10시 이전 취침 어려움, 자주 깨기</td></tr>
                    <tr><td class="att-label">소아 비만·성조숙증 조짐</td><td>체지방 과다 → 성호르몬 조기 분비 → 성장판 조기 폐쇄 위험</td></tr>
                    <tr><td class="att-label">자세 불량·척추 측만</td><td>성장판에 가해지는 비대칭 하중으로 성장 방해</td></tr>
                    <tr><td class="att-label">부모 키가 작거나 성장 속도 둔화</td><td>유전·환경 복합 요인 점검 필요</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Q2 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q2</span>
              <span>성장판 초음파 검사란?</span>
            </div>
            <div class="auto-q-body">
              <p>수정한의원은 초음파 영상 장비를 이용하여 성장기 아이들의 주요 성장뼈(요골·척골·대퇴골)의 골화 점수를 측정하여 뼈 나이를 분석하고, 1년 후 예상키와 최종 예상키를 예측해 드립니다.</p>
              <div class="auto-table-wrap">
                <table class="auto-treat-table">
                  <thead><tr><th>항목</th><th>내용</th></tr></thead>
                  <tbody>
                    <tr><td class="att-label">검사 방법</td><td>비침습 초음파 — 방사선 노출 없이 골화 상태를 영상으로 확인</td></tr>
                    <tr><td class="att-label">측정 지표</td><td>요골·척골·대퇴골 골화 점수, 뼈 나이(골연령)</td></tr>
                    <tr><td class="att-label">성장 예측</td><td>골화 점수 + 체질 + 부모 키 데이터를 종합하여 1년 후 예상키 · 최종 예상 신장 산출</td></tr>
                    <tr><td class="att-label">추적 관리</td><td>3‑6개월 주기 재검으로 치료 전후 골화 변화·성장 속도 비교</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="auto-highlight-box" style="border-left-color:#2980b9; background:#e8f4fd; color:#1a3a52;">
                X‑ray 골연령 측정과 달리 <strong style="color:#1a5c8a;">방사선이 전혀 없어</strong> 성장기 아이에게 안전하며, 반복 검사로 치료 효과를 객관적 수치로 추적할 수 있습니다.
              </div>
            </div>
          </div>

          <!-- Q3 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q3</span>
              <span>키 성장, 왜 체질에 따라 다른가요?</span>
            </div>
            <div class="auto-q-body">
              <div class="auto-table-wrap">
                <table class="auto-treat-table">
                  <thead><tr><th>체질</th><th>성장 특성</th><th>핵심 전략</th></tr></thead>
                  <tbody>
                    <tr>
                      <td class="att-label">목양·목음</td>
                      <td>간·담 과항진 → 면역 소모(잦은 감기·비염·아토피) → 성장 에너지 전환 부족</td>
                      <td>면역 안정 + 폐·대장 보강</td>
                    </tr>
                    <tr>
                      <td class="att-label">금양·금음</td>
                      <td>간 약화 → 근건·인대 영양 부족 → 성장판 자극 불충분</td>
                      <td>간 기능 보강 + 근골격 영양 지원</td>
                    </tr>
                    <tr>
                      <td class="att-label">토양·토음</td>
                      <td>위장·췌장 과항진 → 과식·비만 → 습열 축적 → 성조숙증·성장판 조기 폐쇄 위험</td>
                      <td>식이 조절 + 습열 제거 + 체중 관리</td>
                    </tr>
                    <tr>
                      <td class="att-label">수양·수음</td>
                      <td>위장 냉·약 → 식욕·흡수 저하 → 체중 미달·영양 결핍</td>
                      <td>소화기 보강 + 흡수력 증진</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="auto-highlight-box">
                같은 '키가 작은 아이'라도 원인 장부가 다르기 때문에 체질에 맞지 않는 한약이나 식단은 <strong>오히려 역효과</strong>를 낼 수 있습니다.<br/>
                특히 성장 한약은 장기 복용이 필요하므로, 반드시 <strong>정확한 체질 진단에 기반한 맞춤 한약</strong>이어야 합니다.
              </div>
            </div>
          </div>

          <!-- Q4 -->
          <div class="auto-q-block auto-treatment">
            <div class="auto-q-title auto-treat-title">
              <span class="auto-qnum auto-qnum-green">Q4</span>
              <span>수정한의원은 어떻게 치료하나요?</span>
            </div>
            <div class="auto-q-body">
              <div class="auto-table-wrap">
                <table class="auto-treat-table">
                  <thead><tr><th>단계</th><th>내용</th></tr></thead>
                  <tbody>
                    <tr>
                      <td class="att-label">① 정확한 8체질 진단</td>
                      <td>30년·21,560건 데이터 기반 체질 확정 — 장부 강약·자율신경 유형 파악</td>
                    </tr>
                    <tr>
                      <td class="att-label">② 체질 맞춤 성장 한약</td>
                      <td>체질별 약화 장부 보강 + 성장호르몬(GH)·IGF‑1 분비 환경 개선</td>
                    </tr>
                    <tr>
                      <td class="att-label">③ 초음파 성장판 검사</td>
                      <td>요골·척골·대퇴골 골화 점수 측정, 뼈 나이 분석, 1년 후 예상키·최종 예상키 산출, 3‑6개월 주기 추적</td>
                    </tr>
                    <tr>
                      <td class="att-label">④ 성장판 자극 침</td>
                      <td>족삼리·양릉천·현종·삼음교 등 하지 경혈로 성장판 혈류·골세포 활성 촉진</td>
                    </tr>
                    <tr>
                      <td class="att-label">⑤ 8체질 성장침</td>
                      <td>체질별 장부 균형 회복, 자율신경·면역 안정으로 성장 환경 최적화</td>
                    </tr>
                    <tr>
                      <td class="att-label">⑥ 성장 추나요법</td>
                      <td>척추·골반 교정 — 성장판에 가해지는 비대칭 하중 제거, 척추 정렬 개선</td>
                    </tr>
                    <tr>
                      <td class="att-label">⑦ 성장 약침요법</td>
                      <td>한약 유효성분을 경혈에 주입 — 항염·성장판 미세 환경 개선</td>
                    </tr>
                    <tr>
                      <td class="att-label">⑧ 양자돔 + 생활관리</td>
                      <td>체질별 맞춤 식단표, 수면 루틴(밤 10시 이전 취침), 성장 스트레칭·운동 지도</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Q5 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q5</span>
              <span>성장호르몬 주사와 무엇이 다른가요?</span>
            </div>
            <div class="auto-q-body">
              <div class="auto-table-wrap">
                <table class="auto-treat-table">
                  <thead><tr><th>비교</th><th>성장호르몬 주사</th><th>수정한의원 8체질 성장 치료</th></tr></thead>
                  <tbody>
                    <tr><td class="att-label">적용 대상</td><td>GH 결핍 확진 아동</td><td>GH 정상이나 저신장인 대다수 아이</td></tr>
                    <tr><td class="att-label">작용</td><td>외부 호르몬 직접 투여</td><td>소화·면역·수면·장부 환경 개선으로 자체 GH 분비 극대화</td></tr>
                    <tr><td class="att-label">방사선</td><td>진단 시 X‑ray 골연령 촬영</td><td>초음파 — 방사선 0</td></tr>
                    <tr><td class="att-label">체질 고려</td><td>없음</td><td>8체질별 원인 장부·식이·생활 맞춤</td></tr>
                    <tr><td class="att-label">부작용</td><td>관절통·부종·혈당 변화 가능</td><td>한약·침 기반, 부작용 최소</td></tr>
                    <tr><td class="att-label">병행</td><td colspan="2">주사 치료 중에도 체질 치료 병행 가능</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Q6 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q6</span>
              <span>언제 시작하는 것이 가장 좋은가요?</span>
            </div>
            <div class="auto-q-body">
              <p>성장판이 충분히 열려 있는 <strong>7‑10세(초등 저학년)</strong>가 최적의 시작 시점입니다. 다만 여아는 14‑16세, 남아는 16‑17세까지 성장판이 남아 있으므로 늦었다고 포기하기보다 <strong>초음파 검사로 현재 골화 점수와 뼈 나이를 먼저 확인</strong>하는 것이 중요합니다. 성조숙증 징후가 보이면 더 일찍(6‑8세) 개입이 필요합니다.</p>
              <div class="auto-highlight-box" style="border-left-color:#2980b9; background:#e8f4fd; color:#1a3a52;">
                <strong style="color:#1a5c8a;">최적 시작:</strong> 7‑10세 &nbsp;|&nbsp; <strong style="color:#1a5c8a;">여아 성장판:</strong> 14‑16세까지 &nbsp;|&nbsp; <strong style="color:#1a5c8a;">남아 성장판:</strong> 16‑17세까지
              </div>
            </div>
          </div>

          <!-- Q7 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q7</span>
              <span>부모 체질 진단도 함께 하나요?</span>
            </div>
            <div class="auto-q-body">
              <p>네. 아이의 식습관·수면·정서 환경은 가정에서 결정됩니다. 부모의 체질을 함께 파악하면 가정 식단·생활 리듬을 체질에 맞게 조정할 수 있어 치료 효과가 배가됩니다.</p>
              <div class="auto-stat-box">
                <span class="auto-stat-icon">📊</span>
                <span>수정한의원은 <strong>21,560건 이상</strong>의 가족 체질 데이터를 보유하고 있습니다.</span>
              </div>
            </div>
          </div>

          <!-- Q8 -->
          <div class="auto-q-block">
            <div class="auto-q-title">
              <span class="auto-qnum">Q8</span>
              <span>양방 치료와 병행할 수 있나요?</span>
            </div>
            <div class="auto-q-body">
              <div class="auto-highlight-box" style="border-left-color:#2e7d32; background:#f1f8f3;">
                <strong style="color:#1a5c3a;">가능합니다.</strong><br/>
                현재 성장호르몬 주사, 비만 관리, 아토피·비염 약물 치료를 받고 있어도 체질 치료는 병행 가능합니다. 내원 시 현재 치료 상황을 알려 주시면 통합 치료 계획을 세워 드립니다.
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="sdi-cta-box" style="margin-top:20px;">
            <div class="sdi-cta-concerns">
              <span>"우리 아이 키가 또래보다 작아요"</span>
              <span>"밥을 너무 안 먹어요"</span>
              <span>"감기를 달고 살아요"</span>
              <span>"성조숙증이 걱정돼요"</span>
              <span>"성장판이 얼마나 남았는지 궁금해요"</span>
            </div>
            <p class="sdi-cta-lead">초음파 성장판 검사 + 정확한 <strong>8체질 진단</strong>으로<br/>우리 아이의 남은 성장 잠재력을 수치로 확인하세요.</p>
            <div class="asthma-cta-btns">
              <a href="tel:02-932-3815" class="asthma-btn-primary"><i class="fas fa-comments"></i> 지금 바로 상담하기</a>
              <a href="tel:02-932-3815" class="asthma-btn-secondary"><i class="fas fa-phone"></i> 전화 상담 02-932-3815</a>
            </div>
          </div>

        </div>
        </div><!-- /sdi-content -->
      </div>
      <!-- ===== /소아성장 ===== -->

    <div class="clinic-cta-box">
      <p>다른 병원에서 해결되지 않은 질환이라면<br/><strong>수정한의원 30년 임상경험과 8체질 진단으로 새로운 가능성을 찾아드립니다</strong></p>
      <a href="tel:02-932-3815" class="cta-inline-btn"><i class="fas fa-phone"></i> 02-932-3815 진료예약</a>
    </div>
  </div>
</section>
`
}
