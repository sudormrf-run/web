---
title: AI 네이티브 스타트업 플레이북
description: 마크다운 파일이 곧 직원이다 — YC의 Tom Blomfield 발표와 Garry Tan 인터뷰로 정리한 새로운 회사 설계법
tags: [ai-native, startup, playbook, agents, yc, presentation]
category: essays
order: 3
thumbnail: "https://img.youtube.com/vi/Z3JyAqh4ixg/mqdefault.jpg"

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-08-17
---

> **"A markdown file is an employee."**
> — 마크다운 파일이 곧 직원이다. 매번 완벽하게, 원하는 만큼 반복해서 일하는 직원. (Garry Tan)

이 도발적인 한 문장을 한 사람은 **Garry Tan** — Y Combinator의 사장 겸 CEO입니다. 2003년 Microsoft(Windows Mobile)에서 커리어를 시작해 Posterous를 공동창업했고, Initialized Capital을 만들어 Coinbase와 Instacart의 초기 투자자가 되었습니다. Peter Thiel이 수표까지 쥐여주며 제안한 초기 Palantir 합류를 거절한 것을 스스로 "20~40억 달러짜리 실수"라 부르는 사람이기도 합니다. 지금은 YC를 이끌면서도 직접 코딩하며 자기 도구(gstack, garyslist)를 오픈소스로 공개하고 있습니다.

그 Garry Tan이 최근에 한 일이 재밌습니다. YC가 모든 오피스아워를 녹음하기 시작하자, 몇 달치 녹음에서 **파트너들이 창업자의 야망을 한 단계 끌어올릴 때 쓰는 말의 패턴**을 추출해 "완벽한 조언 스크립트" 마크다운 파일을 만들었습니다. 그리고 Claude에게 *"이 프롬프트의 강도를 90% 줄여라"* 라고 시킨 뒤 오픈소스로 공개했습니다. 100%짜리는 YC에 와야 받을 수 있으니까요 — "크라운 주얼은 공짜로 줄 수 없다. 첫 모금은 무료."

<div class="author-note">

### 필자의 노트

최근 다른 팟캐스트에 출연했다가 비슷한 사례를 하나 더 들었습니다. **퇴사 예정자의 업무 trajectory(작업 로그·이력)를 모아두었다가, 에이전트가 그 사람의 일을 그대로 이어받아 따라하게 만든다**는 이야기였습니다. 사람이 나가도 일하는 방식은 회사에 남는 것 — 오피스아워를 프롬프트로 만든 YC와 정확히 같은 패턴입니다. 사람의 암묵지를 아티팩트로 바꾸는 순간, 그것은 복제 가능한 자산이 됩니다.

</div>

이 문서는 이틀 간격으로 공개된 두 영상을 하나의 "스타트업 플레이북"으로 엮은 것입니다.

---

## 1. 두 개의 영상 — 이론편과 실전편

| | 영상 1 · 이론편 | 영상 2 · 실전편 |
|---|---|---|
| 제목 | Building And Structuring An AI Native Company | Garry Tan: New Rules for Founders |
| 채널 | YC Root Access (2026.08.14) | a16z (2026.08.12) |
| 화자 | Tom Blomfield (YC GP, Monzo 창업자) | Garry Tan × Anish Acharya (a16z GP) |
| 형식 | Startup School Paris 발표, 21분 | 스튜디오 대담, 51분 |

**Tom Blomfield**가 "회사를 사람의 위계가 아니라 자기개선 AI 루프의 집합으로 처음부터 설계하라"는 프레임을 발표로 정리했고, **Garry Tan** 인터뷰는 같은 그림을 본인의 실험과 창업자 사례로 풀어냅니다. 두 사람 모두 YC 오피스아워 녹음 데이터를 소재로 쓴다는 점도 흥미로운 연결고리입니다.

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/Z3JyAqh4ixg" title="Building And Structuring An AI Native Company" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/fsTtKywmWlU" title="Garry Tan: New Rules for Founders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## 2. 위계에서 루프로

Blomfield의 발표는 로마 군단에서 시작합니다. 8명이 천막을 나눠 쓰는 분대(contubernium)에서 백인대, 코호트, 군단까지 — 정보를 사람 손으로 위아래 전달하기 위한 구조입니다.

![로마 군단의 조직 구조](/assets/essays/ai-native-startup-playbook/01-legion-org-chart.jpg)
<p align="center"><em>로마 군단의 위계 — 2천 년 전의 org chart (출처: Y Combinator)</em></p>

2천 년이 지난 지금의 빅테크 조직도도 본질은 같습니다.

![빅테크 6사의 조직도 풍자](/assets/essays/ai-native-startup-playbook/02-org-structures-grid.jpg)
<p align="center"><em>Amazon, Google, Facebook, Microsoft, Apple, Oracle의 조직 구조 풍자 (Manu Cornet 그림, 출처: Y Combinator)</em></p>

이 발표 전체의 출발점은 Jack Dorsey의 말입니다.

![Jack Dorsey 인용](/assets/essays/ai-native-startup-playbook/03-dorsey-quote.jpg)
<p align="center"><em>"조직은 인간을 조율 메커니즘으로 삼아 위계적으로 구성되어야 한다는 암묵적 가정이 있다" (출처: Y Combinator)</em></p>

> AI는 바로 이 가정을 깬다. 인간이 더 이상 정보 라우팅의 병목일 필요가 없다.

지금 대부분 회사의 AI 활용은 Q&A 봇과 코파일럿입니다. 사람이 게이트라서 **에이전트가 새벽 3시에 멈추면 아침까지 아무것도 안 됩니다.** Blomfield는 목표를 "생산성"이 아니라 "능력"으로 다시 정의합니다.

![생산성이 아니라 능력](/assets/essays/ai-native-startup-playbook/04-capability-not-productivity.jpg)
<p align="center"><em>엔지니어 20% 생산성 향상이 아니라: 한 사람이 옛 조직 전체보다 강해지고, 회사가 통째로 쿼리 가능해진다 (출처: Y Combinator)</em></p>

---

## 3. AI 루프의 해부

> "AI는 회사 옆에 볼트로 붙이는 것이 아니다. 회사 자체가 밑바닥부터 자기개선 AI 루프로 지어져야 한다." (Blomfield, 5:30)

![An AI Loop](/assets/essays/ai-native-startup-playbook/06-an-ai-loop.jpg)
<p align="center"><em>루프의 5층 구조: Sensors/Data → Policy → Tools → Quality Gates → Learning (출처: Y Combinator)</em></p>

- **Sensors/Data**: 제품 텔레메트리, 문의, 결제 신호, 코드 변경 — 현실에서 들어오는 데이터
- **Policy Layer**: AI를 제약하는 규칙. 무엇을 승인받아야 하고 무엇을 기록해야 하는가
- **Tool Layer**: 내부 API, 이메일, 결제 업데이트
- **Quality Gates**: 사람이 아니라 **두 번째 적대적 LLM**이어야 한다 (코드리뷰 모델, 프롬프트 인젝션 감시)
- **Learning mechanism**: 배포 → 현실 반응 관찰 → 다시 반영

> "이 루프 전체를 사람 없이 돌릴 수 있으면, **당신이 자는 동안 제품이 스스로 좋아지기 시작한다.**" (7:00)

### YC의 데이터 에이전트 — "머리가 터진 순간"

YC 내부에는 7,000개 회사, 2만 명 창업자 데이터가 있고, 자연어를 SQL로 바꿔주는 쿼리 에이전트가 있었습니다. 유용하지만 "데이터 분석가를 20~30% 더 생산적으로 만드는 도구" 수준이었죠. 진짜 변화는 그 위에 **밤마다 도는 2차 에이전트**를 얹은 순간이었습니다. 낮 동안 사람들이 실행한 쿼리의 성공과 실패를 훑고, 밤사이 문제를 고치는 PR을 올립니다. **어제 안 되던 쿼리가 오늘은 됩니다.** Blomfield는 이걸 "head explosion moment"라 부릅니다.

같은 패턴이 반복됩니다:

- **오피스아워 → 살아있는 유저 매뉴얼**: 15년간 쌓인 500페이지 매뉴얼 재작성을 미루던 중, 3~4천 시간의 오피스아워 녹음에서 실제 조언을 채굴해 매뉴얼이 스스로 다시 쓰이게 만듦. 16명 파트너의 지혜를 완벽하게 리콜하는 "초인적 조언"이 가능해짐
- **투자자 콜 시뮬레이션**: 수백 개 회사가 같은 투자자를 만나므로, 특정 파트너가 무엇을 물을지 예측하고 모의 미팅까지 가능

여기에 VM(도구·파일 저장소·코드 실행)을 붙이면 —

![An AI Loop + VM](/assets/essays/ai-native-startup-playbook/07-ai-loop-plus-vm.jpg)
<p align="center"><em>루프 + VM = AI 직원. OpenClaw, Hermes가 그 원형 (출처: Y Combinator)</em></p>

---

## 4. 실전 플레이북 — Garry Tan의 새 규칙

인터뷰에서 Garry Tan은 같은 그림을 창업자의 언어로 바꿉니다.

**1) 한 사람이 400명이 된다 (14:50)**
바이브 코딩과 에이전틱 코딩으로 "누구든 자기 자신의 400배가 될 수 있다." 창업자는 그 어느 때보다 야심차야 한다.

**2) 순수 SaaS의 종말 (15:20)**
"per-seat SaaS가 5~10년 뒤에도 존재할지 불분명하다. 웨지로는 좋지만, 데이터나 네트워크 효과의 해자로 도약해야 한다."

**3) Skillify — 업무를 스킬 파일로 굳혀라 (23:20~)**
어떤 일을 한 번 해내면(feat of strength), 그것을 **마크다운 + 코드 + 테스트**로 굳혀 크론잡에 넣는다. 이후 실수가 나오면 그냥 버그픽스다. 영원히 남는다. 이걸 영업, 마케팅, 고객지원, 모든 업무에 적용한다. — 여기서 그 문장이 나옵니다. **"A markdown file is an employee."**

**4) Token maxing — 오늘 2028년을 살아라 (23:03)**
프런티어 랩들은 비용 제약 때문에 컴퓨트를 아껴서 준다. 에이전트를 풀파워로 쓰려면 연 5만~10만 달러를 태워야 하지만, "그렇게 하면 **오늘 2028년을 사는 것**이다." CEO와 창업자에게는 충분히 합리적인 지출이다.

**5) 결과 (26:00)**
"2~3명이 수백 개의 에이전트, 수백 개의 스킬 파일로 4개월 만에 0에서 $15M ARR까지 가는 회사들이 실제로 있다."

**6) 실패 조건 (26:40)**
마크다운이 쌓이면 **provenance(출처)와 충돌 관리**가 필요하다. 두 사실이 충돌할 때 어느 쪽이 이기는지, 청소용 크론잡이 도는지. 이런 감각은 경험에서 나오기 때문에 "한 바퀴 돌아본" 30~40대 창업자가 다시 유리해진다.

**7) Pedro의 회의록 에이전트 (28:09)**
Brex CEO Pedro Franceschi는 에이전트에게 **자신이 들어가지 않은 회의의 녹취**를 읽혀 두 레벨 아래의 갈등을 파악합니다. 3주치 맥락을 완벽히 들고 회의에 걸어 들어가 "당신이 맞네요, 그렇게 갑시다" 하고 나옵니다.

> "회사가 한 사람의 머리에 안 들어가서 망한다"는 오래된 문제의 해법. 인간은 7±2개밖에 못 담지만, 에이전트를 붙인 인간은 해리포터 세 권 분량을 머리에 담는다. (30:40)

---

## 5. 회사 두뇌와 인간의 자리

![Company Brain](/assets/essays/ai-native-startup-playbook/08-company-brain.jpg)
<p align="center"><em>Company Brain — 데이터와 루프가 중심에, 사람은 가장자리에 (출처: Y Combinator)</em></p>

> "기존 회사에서 지능은 사람들 사이에 퍼져 있고 위계가 그것을 라우팅한다. 새 모델에서는 **지능이 시스템에 산다.**" (Blomfield, 14:10)

인간은 사라지는 게 아니라 **가장자리로** 갑니다. 모델이 아직 못 가는 곳 — 직관, 신뢰, 방 안의 공기, 윤리적 판단, 틀리면 회사가 죽는 고위험 결정. 세일즈 콜과 투자자 설득은 인간이, 정보 라우팅은 AI가 합니다.

![Burn tokens, not headcount](/assets/essays/ai-native-startup-playbook/10-burn-tokens-not-headcount.jpg)
<p align="center"><em>"API 청구서가 불편하지 않다면, 충분히 쓰고 있지 않은 것이다" (출처: Y Combinator)</em></p>

![No middle mgmt](/assets/essays/ai-native-startup-playbook/11-no-middle-mgmt.jpg)
<p align="center"><em>남는 역할은 둘: IC(덱이 아니라 프로토타입을 들고 회의에 온다)와 DRI(결과에 책임지는 단 한 사람) (출처: Y Combinator)</em></p>

Garry Tan의 경험담이 이 슬라이드의 각주가 됩니다. Windows Mobile 시절, 옆 건물 Windows 팀이 메일도 안 읽고 버그도 안 고쳐줘서 **야구방망이를 들고 찾아갔다**는 이야기 (34:40). 그 사이엔 일곱 단계의 위계가 있었습니다. "중간 관료제는 에이전트가 되어야 한다"는 주장과, 도요타 생산방식의 재해석 — 라인에서 일하는 사람이 라인을 바꿀 수 있어야 한다 — 이 이어집니다.

실천 체크리스트는 이렇습니다.

![Build a self-improving company](/assets/essays/ai-native-startup-playbook/12-build-self-improving-company.jpg)
<p align="center"><em>조직을 AI에 legible하게: 모든 회의 녹음·전사, DM 금지, 모든 행동이 아티팩트를 남길 것 (출처: Y Combinator)</em></p>

> "모든 행동은 아티팩트를 만들어야 한다. 그렇지 않으면 AI에게는 **일어나지 않은 일**이다." (18:45)

---

## 6. 균형추 — 모든 것은 생각보다 느리다

과열된 그림에 Garry Tan 스스로 균형추를 답니다 (39:08~).

> "세상 모든 회사와 기관의 관료제와 느림 — 그게 오히려 **화이트필(white pill)**이다. 이 전환은 당신 생각보다 느리게 온다. 20년쯤 걸릴 것이고, 그건 나쁜 일이 아니다."

- 기존 기업의 구조적 해자는 실재한다. "스타트업이 다 대체한다? 그렇게는 안 된다."
- 다음 컴퓨터는 음성과 메모리 중심 — "당신의 희망과 두려움을 알고 집요하게 도우려는" 존재
- **2027년은 하네스 전쟁(harness wars)의 해**: 지금은 비용이 문제일 뿐, 프런티어급 컴퓨트가 2~3년 안에 50~100달러가 되면 10억 소비자를 놓고 브라우저 전쟁이 다시 시작된다
- "This is the worst it will ever be." — 지금이 앞으로 제일 나쁜 상태다 (31:20)

---

## 7. 핵심 인용 모음

| 타임스탬프 | 화자 | 인용 |
|---|---|---|
| v2 24:00 | Garry Tan | "A markdown file is an employee" |
| v1 03:00 | Jack Dorsey | 조직이 인간을 조율 메커니즘으로 위계화되어야 한다는 가정 — AI가 이걸 깬다 |
| v1 05:30 | Blomfield | "AI는 회사 옆에 볼트로 붙이는 것이 아니다" |
| v1 07:00 | Blomfield | "당신이 자는 동안 제품이 스스로 좋아지기 시작한다" |
| v1 08:30 | Blomfield | 밤마다 어제의 실패를 PR로 고치는 2차 에이전트 — "head explosion moment" |
| v1 14:10 | Blomfield | "새 모델에서는 지능이 시스템에 산다" |
| v1 17:25 | 슬라이드 | "Burn tokens, not headcount" |
| v1 20:45 | Blomfield | "오늘 이 회사를 시작한다면, 이 모양으로 만들겠는가?" |
| v2 14:50 | Garry Tan | "누구든 자기 자신의 400배가 될 수 있다" |
| v2 23:20 | Garry Tan | "오늘 2028년을 살 수 있다" (token maxing) |
| v2 26:00 | Garry Tan | 2~3명 + 수백 에이전트로 4개월 만에 $15M ARR |
| v2 29:40 | Garry Tan | Pedro: 안 들어간 회의의 맥락을 완벽히 들고 들어가 "당신이 맞네요" 하고 나온다 |
| v2 31:20 | Garry Tan | "This is the worst it will ever be" |
| v2 40:00 | Garry Tan | "모든 게 생각보다 느리다 — 그게 진짜 화이트필. 20년 걸리고, 그게 좋은 일이다" |
| v2 42:40 | Garry Tan | "2027년은 하네스 전쟁의 해가 될 것" |

---

## 8. 남은 질문

- **우리의 AI 루프는 무엇인가.** 품질 게이트는 아직 사람인가, 두 번째 모델로 넘길 수 있는가?
- **API 청구서 테스트.** 우리의 토큰 지출은 "불편한" 수준인가? token maxing은 어디까지 정당화되는가?
- **다음에 skillify할 것은?** 이미 마크다운 스킬로 굳힌 일과, 아직 손으로 하는 "글루" 작업의 목록을 만들어보자.
- **1000x/400x는 어디까지 수사인가.** 실제 체감 배수는 얼마인가?
- **Legibility의 비용.** 모든 회의 녹음과 DM 금지 — 작은 팀에겐 가능하지만, 감시감과 솔직함 위축이라는 문화적 비용은?
- **두 화자의 온도차.** Blomfield는 "올해 말이면 가능", Garry는 "20년 걸리는 게 화이트필" — 어느 층위(기술/조직/사회)에서 각각 맞는 말인가?
- **클로징 질문 되받기.**

![If you were starting this company today](/assets/essays/ai-native-startup-playbook/13-would-you-build-it-this-shape.jpg)
<p align="center"><em>"오늘 이 회사를 시작한다면, 이 모양으로 만들겠는가?" (출처: Y Combinator)</em></p>

---

## 더 알아보기

- [AI로 처음부터 회사를 구축하는 방법](/archive/yc-ai-native-company) — 이 발표의 원형이 된 Blomfield의 4월 버전 영상 노트. 본인도 "한 달 반 전 발표를 업데이트했다"고 밝힘
- [AI-Native 회사 구축 전략: Every의 2026 비전](/archive/every-ai-native-strategy) — 같은 주제를 실행 중인 Every의 사례
- [안드레 카파시의 autoresearch](/podcasts/karpathy-autoresearch) — Blomfield가 발표에서 인용한 실험 (9:30). 에이전트가 학습 코드를 스스로 고치며 언덕을 오르는 자동 연구 루프
- [Physical AI, 물리적 지능도 곧 온다](physical-ai-is-coming) — 같은 형식의 발표 자료 아카이브
