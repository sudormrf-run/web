---
title: "Google Chrome 'Skills'로 1클릭 워크플로"
summary:
  - "Chrome에 Skills로 1클릭 실행 추가"
  - "Gemini Robotics-ER 1.6 API 공개"
  - "OpenAI GPT-5.4-Cyber 접근 확대"
  - "Hugging Face, Hub에 Kernels 출시"
  - "OpenRouter Elephant Alpha, 100B 공개"
date: 2026-04-14
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-14-not-much.md"
hasHeadline: false
headline: "Google Chrome 'Skills'로 1클릭 워크플로"
tags:
  - OpenAI
  - Codex
  - Google
  - Gemini
  - OpenRouter
isFeatured: false
---

## 헤드라인: Google Chrome 'Skills'로 1클릭 워크플로

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Google이 Chrome의 “Skills”를 통해 Gemini 프롬프트를 재사용 가능한 브라우저 워크플로로 만드는 방향을 제시했다. 사용자는 현재 페이지 및 선택한 탭을 대상으로 실행되는 원클릭 액션으로 프롬프트를 저장할 수 있고, 미리 준비된 Skills 라이브러리까지 제공해 단순 “프롬프트 히스토리”를 넘어 브라우저 내부의 가벼운 에이전트화(agentization)에 가까운 경험을 노린다.

---

## AI Twitter Recap

### 참여도 상위 트윗(engagement 기준)

- **Google의 Chrome “Skills”, 프롬프트를 재사용 워크플로로 전환**: Google은 [**Skills in Chrome**](https://x.com/Google/status/2044106378655215625)을 소개하며 Gemini 프롬프트를 현재 페이지/선택 탭에 대해 실행되는 원클릭 액션으로 저장하게 했다. 또한 [library of ready-made Skills](https://x.com/Google/status/2044106380882166040)을 함께 내놓으면서, 단순 기록이 아니라 브라우저 안에서의 경량 에이전트화로 이어질 수 있음을 강조했다.
- **Tencent HYWorld 2.0, ‘비디오 모델’이 아닌 편집 가능한 3D 씬 생성으로 포지셔닝**: 출시를 앞두고 [@DylanTFWang](https://x.com/DylanTFWang/status/2043952886166761519)이 **HYWorld 2.0**을 **오픈소스(open-source)이며 엔진 친화적인(engine-ready) 3D 월드 모델**로 예고했고, 단일 이미지에서 편집 가능한 3D 씬을 생성한다고 소개했다.
- **Google DeepMind, Gemini Robotics-ER 1.6 출시**: [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2044069878781390929)에 따르면 신규 모델은 로보틱스를 위한 **시각/공간 추론(visual/spatial reasoning)**을 개선하고 더 안전한 물리 추론을 추가했으며 **Gemini API / AI Studio**에서 제공된다. 후속 게시글에서는 **계기판 읽기 93% 성공**과 액체/무거운 물체 같은 물리 제약 처리 개선이 강조됐다.
- **OpenAI, Trusted Access for Cyber를 GPT-5.4-Cyber로 확장**: OpenAI는 [GPT-5.4-Cyber](https://x.com/OpenAI/status/2044161906936791179)이 방어 보안 워크플로를 위해 GPT-5.4를 미세조정(fine-tuning)한 버전이며, Trusted Access 프로그램 하에서 상위 티어의 인증된 방어자에게 제공된다고 밝혔다.
- **Hugging Face, Hub에 “Kernels” 출시**: [@ClementDelangue](https://x.com/ClementDelangue/status/2044053580504584349)이 GPU 커널용 신규 **repo 타입**을 발표했다. 정확한 GPU/PyTorch/OS 조합에 맞춰 사전 컴파일된 아티팩트를 제공하며, PyTorch 베이스라인 대비 **1.7x–2.5x 속도 향상**을 주장했다.
- **Cursor, NVIDIA와 함께 만든 멀티 에이전트 CUDA 최적화 시스템 소개**: [@cursor_ai](https://x.com/cursor_ai/status/2044136953239740909)는 멀티 에이전트 소프트웨어 엔지니어링 시스템이 3주 동안 235개 CUDA 문제에서 **지오메인(geomean) 38% 가속**을 달성했다고 전했다. 앱 스캐폴딩이 아니라 시스템 최적화에 에이전트를 적용한 구체 사례로 제시됐다.

### 에이전트 인프라: Hermes, Deep Agents, 프로덕션 하네스

- **Hermes Agent, 신뢰성과 메모리를 강점으로 하는 로컬 오픈 에이전트 스택으로 부상**: 여러 게시글이 장시간 작업에 더 ‘버티는’ 이유로 대체재에서 **Hermes Agent**로 이동 중이라는 흐름에 모였다. [@AntoineRSX](https://x.com/AntoineRSX/status/2043884430901850271)를 통해 **v0.9.0** 업데이트(웹 UI, 모델 전환, iMessage/WeChat 연동, 백업/복원, tmux 기반 Android 지원)가 소개됐고, Tencent는 메시징 연동을 포함한 상시 구동 클라우드 호스팅을 위한 [one-click Lighthouse deployment](https://x.com/TencentAI_News/status/2044007400282436006)을 강조했다. 메모리 측면에서는 [@SteveSchoettler](https://x.com/SteveSchoettler/status/2043870709613768820)의 **hermes-lcm v0.2.0**이 영구 메시지 저장, DAG 요약, 압축 컨텍스트 확장 도구 등 **무손실 컨텍스트 관리(lossless context management)**를 추가했다. [@Teknium](https://x.com/Teknium/status/2044190761609244986), [@aiqiang888](https://x.com/aiqiang888/status/2043920187959992609) 등 커뮤니티 게시글은 Hermes의 핵심 강점이 모델 IQ보다 **운영 안정성, 확장성, 배포 용이성**이라는 점을 재확인했다.
- **LangChain, “deep agents”를 배포 가능한 멀티 테넌트/비동기 시스템으로 밀어붙이는 중**: **deepagents 0.5** 릴리스는 [**async subagents, multimodal file support, and prompt-caching improvements**](https://x.com/LangChain/status/2044086454230626733)를 추가했다. 또한 `deepagents deploy`를 관리형 에이전트 호스팅의 [open alternative to managed agent hosting](https://x.com/LangChain/status/2044097913698091496)으로 강조했고, 사용자/에이전트/조직 단위 메모리 스코핑, 커스텀 인증(auth), 사용자별 스레드 격리(thread isolation) 같은 로드맵이 [@LangChain](https://x.com/LangChain/status/2044098386270310783), [@sydneyrunkle](https://x.com/sydneyrunkle/status/2044099832319500484) 등을 통해 언급됐다. “에이전트 데모”에서 **플랫폼 이슈(테넌시, 격리, 장수 작업, 통합 표면)**로 초점이 이동하는 패턴이 드러난다.
- **하네스(harness) 설계가 1급 엔지니어링 주제로 부상**: 여러 게시글이 에이전트 성능이 모델뿐 아니라 스캐폴드(하네스)에 크게 좌우된다고 주장했다. [@Vtrivedy10](https://x.com/Vtrivedy10/status/2044130977526755636)는 이념(“thin vs thick”)보다 **작업별 오픈 하네스**의 필요성을 강조했고, [@kmeanskaran](https://x.com/kmeanskaran/status/2044010500816810427)는 프런티어 모델 추격보다 워크플로 설계, 메모리 전환, 툴 출력 제어가 중요하다고 했다. [@ClementDelangue](https://x.com/ClementDelangue/status/2044139560355901911)가 **모델별 최적 코딩/에이전트 하네스**의 큐레이션 맵을 요청한 것과 맞물려, 오픈 웨이트 모델 다양화 속에서 이런 매핑의 필요성이 커지고 있다.

### 로보틱스, 월드 모델, 3D 생성

- **Gemini Robotics-ER 1.6, 체화 추론(embodied reasoning) 제품화의 전진**: [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2044069878781390929)는 더 나은 **시각/공간 이해**, 툴 사용, 물리 제약 추론을 강조했다. 후속 내용에는 **인간 부상 위험 탐지 10% 개선**, 복잡한 아날로그 계기판 판독 지원, API 제공이 포함되며, [@_philschmid](https://x.com/_philschmid/status/2044071114578509971)는 **계기판 읽기 작업 93% 성공**을 하이라이트했다. 논문 드롭이라기보다 **개발자용 체화 추론 API** 성격이 강하다는 평가다.
- **월드 모델, ‘시네마틱 데모’에서 ‘편집 가능한 공간 아티팩트’로 이동**: Tencent의 [HYWorld 2.0 teaser](https://x.com/DylanTFWang/status/2043952886166761519)는 비디오 생성 시스템과 대비하며 결과물을 **실제 3D 씬**(편집 가능·엔진 준비)으로 제시했다. 웹 쪽에서는 [@sparkjsdev](https://x.com/sparkjsdev/status/2044090505982816449)의 **Spark 2.0**이 WebGL2(모바일/웹/VR)에서 **100M+ splat 월드**를 목표로 하는 3D Gaussian splats용 스트리밍 LoD 시스템을 출시했다. “AI 생성 3D” 스택이 콘텐츠 생성에서 **인터랙티브 렌더링과 다운스트림 활용**으로 성숙 중이라는 시사점이다.
- **오픈 3D 생성, 토폴로지·UV·리깅·애니메이션 준비성으로 전진**: [@DeemosTech](https://x.com/DeemosTech/status/2044067290908635418)은 토폴로지와 UV 생성을 위한 자기회귀(autoregressive) 모델 **SATO**를 소개했고, [@yanpei_cao](https://x.com/yanpei_cao/status/2044094818872377720)는 단일 이미지에서 **3D 형태, 스켈레톤, 스키닝 가중치**를 생성하는 **AniGen**을 공개했다. 제작 파이프라인의 병목이 “메시 생성 가능 여부”가 아니라 “애니메이션/텍스처링/편집 가능한 구조”라는 점에서 의미가 크다고 본다.

### 모델, 벤치마크, 특화 시스템

- **32B 미만 오픈 모델, 추론/에이전트 작업에서 실전 경쟁력(단, 중요한 단서 포함)**: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2043929874537296026)는 Intelligence Index 기준으로 **Qwen3.5 27B (Reasoning)**와 **Gemma 4 31B (Reasoning)**가 **GPT-5 티어 점수**에 도달한다고 주장했고, 단일 H100 및 양자화(quantization) 시 MacBook에서도 구동 가능하다고 했다. 다만 이 모델들은 **에이전트 성능과 비판적 추론**에서 강점이 큰 반면, **지식 회상/환각 억제**(AA-Omniscience)에서는 뒤처진다는 뉘앙스가 함께 제시됐다. 실무적으로는 로컬/오픈 모델이 많은 코딩 에이전트 워크플로의 기준선을 넘고 있으나, 지식 민감한 엔터프라이즈 작업 전반에는 아직 격차가 있다는 프레이밍이다.
- **Minimax, M2.7의 자체 호스팅 상업 제한을 완화하는 분위기**: [@RyanLeeMiniMax](https://x.com/RyanLeeMiniMax/status/2044132777877221515)가 라이선스를 업데이트해 개인이 코딩, 앱 빌딩, 에이전트 등 개인 프로젝트를 위해 자가 서버에서 모델을 돌릴 수 있게 했고, 후속으로 “코딩”에는 [making money with what you build](https://x.com/RyanLeeMiniMax/status/2044145290773704898)도 포함될 수 있다고 명확히 했다. [@Sentdex](https://x.com/Sentdex/status/2044108342147060067)를 통해 **M2.7 + Hermes CLI** 로컬 코딩 셋업에 대한 관심이 커지는 가운데, 팀/업무 범위까지 라이선스가 어디까지 확장되는지가 남은 질문으로 제시됐다.
- **특화 후학습(post-training) 모델, 좁은 고부가 작업에서 여전히 일반 모델을 상회**: Cognition이 Applied Compute과 함께 RL로 후학습한 버그 탐지 모델 [**SWE-check**](https://x.com/cognition/status/2044174496312242544)를 공개했고, 내부 in-distribution 평가에서 프런티어급 성능을 유지하면서 **10배 더 빠르게** 동작한다고 보고했다. 보상 선형화(reward linearization)로 샘플 보상을 모집단 F-beta에 정렬하고, **능력 학습과 지연(latency) 최적화를 분리한 2단계 후학습**을 했다는 기술 포인트가 함께 언급됐다. 강한 범용 모델 시대에도 맞춤형 후학습의 가치가 남아 있음을 보여주는 사례로 제시된다.

### 개발자 툴링, 추론(inference), 시스템

- **Hugging Face Kernels repo 타입, 저수준 성능 작업의 배포 프리미티브가 될 가능성**: [Kernels launch](https://x.com/ClementDelangue/status/2044053580504584349)와 함께 [@RisingSayak](https://x.com/RisingSayak/status/2043984021521346575), [@mervenoyann](https://x.com/mervenoyann/status/2044080953648128073) 등의 보조 게시글이 이어지며, 커널 저자가 모델처럼 최적화 GPU 커널을 패키징할 수 있는 길이 열렸다는 평가다. 특히 [@ben_burtenshaw’s “push kernels from agents” setup](https://x.com/ben_burtenshaw/status/2044114277745807684) 같은 LLM 보조 최적화 워크플로와 결합되면, 성능 크리티컬 코드의 재현성·발견성이 높아질 수 있다는 기대가 제시됐다.
- **오픈 의료/오픈 OCR 툴링, 온디바이스와 프로덕션 파이프라인으로 지속 전진**: [@MaziyarPanahi](https://x.com/MaziyarPanahi/status/2044037968659103806)가 Apple Silicon용 MLX 기반 패키지 **OpenMed 1.0.0**(Apache-2.0, 8개 언어 200+ PII 탐지 모델, iOS/macOS 지원)을 공개했다. 한편 [@vllm_project](https://x.com/vllm_project/status/2043964594679636260)는 **Chandra-OCR-2 (5B)**가 L40S 한 장에서 16개 병렬 작업으로 **~60 papers/hour** 처리 가능하다는 처리량 레퍼런스를 공유했다.
- **코딩 에이전트 UI, 새로운 폼팩터로 수렴**: [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2044133573326934384), [@kieranklaassen](https://x.com/kieranklaassen/status/2044108436087157220), [@omarsar0](https://x.com/omarsar0/status/2044172949003911532) 등의 게시글은 IDE가 파일/터미널 중심이 아니라 **병렬 에이전트 세션, 가시적 아티팩트/앱, 나란히 실행**을 중심으로 재설계되는 흐름을 가리킨다. 이는 에이전틱 코딩의 병목이 모델 능력에서 **상호작용 설계와 오케스트레이션 UX**로 이동할 수 있음을 시사한다.

### 연구 하이라이트: 정렬(alignment), 메모리, 평가, 과학

- **Anthropic, 자동화 연구를 ‘생산적으로 좁은’ 능력 주장으로 전개**: [Automated Alignment Researcher](https://x.com/AnthropicAI/status/2044138481790648323) 실험에서 Anthropic은 Claude Opus 4.6이 특정 정렬 문제(약한 모델로 강한 모델을 감독)에서 실험을 가속할 수 있다고 말하면서도, 일반적 자동 과학을 주장하는 선은 넘지 않았다. 후속 요지는 “정렬 과학자”가 됐다는 게 아니라 **실험/탐색 속도(rate of experimentation and search)**가 올라간다는 점에 가깝다.
- **에이전트의 메모리/평가 스토리를 날카롭게 만드는 새 논문들**: [@dair_ai](https://x.com/dair_ai/status/2044066936045351317)는 **외부 메모리로서의 아티팩트(artifacts as external memory)**를 다루며, 환경 관측이 내부 메모리 요구를 줄이는 조건을 공식화한 작업을 소개했다. 또 다른 논문으로 [@dair_ai](https://x.com/dair_ai/status/2044145437456904438)는 스트리밍 의도 감지와 하이브리드 메모리를 포함하는 선제적 에이전트 프레임워크 **PASK**를 요약했다. 평가 측면에서는 [@arena](https://x.com/arena/status/2044096836114493609)가 페어와이즈 평가를 멀티턴 대화로 확장한 **Direct Battles**를 출시했고, [@omarsar0](https://x.com/omarsar0/status/2044067923787165799)는 다중 사용자 에이전트 충돌을 다루는 **Muses-Bench**를 소개하며, 상위 모델도 회의 조율·프라이버시/효용 트레이드오프에서 여전히 고전한다고 전했다.
- **과학/수학 자동화 주장, 더 구체화되지만 여전히 이질적**: [@Liam06972452](https://x.com/Liam06972452/status/2044051379916882067)는 **GPT-5.4 Pro**가 **Erdős problem #1196**을 풀었다고 보고했고, 여러 연구자가 벤치마크 ‘꼼수’라기보다 의미 있는 결과로 받아들였다는 반응이 언급됐다. 동시에 [@iScienceLuvr](https://x.com/iScienceLuvr/status/2043977751506428323)는 LLM이 과학 실험 결과를 14–26% 정확도로 예측해 인간 전문가와 비슷한 수준이었다는 **SciPredict**를 요약했다. 전체 그림은 일부 공식화 가능한 연구 도메인에서 의미 있는 기여가 가능해지고 있으나, 일반적인 실험 가이던스는 아직 신뢰하기 어렵다는 쪽에 가깝다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Updated Qwen3.5-9B Quantization Comparison](https://www.reddit.com/r/LocalLLaMA/comments/1sl59qq/updated_qwen359b_quantization_comparison/)** (Activity: 349): Qwen3.5-9B에 대해 다양한 양자화(quantization) 방법을 **KL Divergence (KLD)**로 비교해, BF16 베이스라인 대비 “충실도”를 평가한 상세 분석을 제시했다. KLD가 낮을수록 원본 분포에 더 가깝다고 보고, 상위 결과로 **eaddario/Qwen3.5-9B-Q8_0**가 `0.001198`의 KLD를 기록해 정보 손실이 매우 작다고 했다. 사용된 데이터셋/도구로 [this dataset](https://gist.github.com/cmhamiche/788eada03077f4341dfb39df8be012dc)와 [ik_llama.cpp](https://github.com/Thireus/ik_llama.cpp/releases/tag/main-b4608-b33a10d)를 언급했고, 댓글에서는 시각화에서 형태(shapes) 변경 등 개선 제안과 함께 [gguf.thireus.com](https://gguf.thireus.com/quant_assign.html)의 양자화도 비교에 포함하자는 요청이 나왔다. 댓글 요지로는 (1) Thireus가 [gguf.thireus.com](https://gguf.thireus.com/quant_assign.html)이 기존 방식보다 낫다고 주장하며 포함을 제안, (2) cviperr33가 `20-35B` 구간에서 `iq4 xs` 또는 `nl quant`의 효율을 언급, (3) PaceZealousideal6091이 mradermacher의 `i1 quants` 성능을 강조하며 추후 비교에 추가해달라고 요청했다.
- **[Best Local LLMs - Apr 2026](https://www.reddit.com/r/LocalLLaMA/comments/1sknx6n/best_local_llms_apr_2026/)** (Activity: 721): 2026년 4월 기준 로컬 LLM 동향으로 Qwen3.5, Gemma4, GLM-5.1(주장상 SOTA) 등을 언급하며, Minimax-M2.7의 접근성, PrismML Bonsai의 1-bit 모델 등도 다뤘다. 오픈 웨이트 모델 중심으로 사용자 셋업/사용 경험 공유를 유도했고, VRAM 요구량을 ‘Unlimited’(>128GB)부터 ‘S’(<8GB)까지 분류했다. 댓글에서는 128GB 초과 구간을 더 세분화하자는 제안과, 에이전틱 코딩/툴 사용에 맞춘 활용 논의가 이어졌다.
- **[24/7 Headless AI Server on Xiaomi 12 Pro (Snapdragon 8 Gen 1 + Ollama/Gemma4)](https://www.reddit.com/r/LocalLLaMA/comments/1sl6931/247_headless_ai_server_on_xiaomi_12_pro/)** (Activity: 1108): Xiaomi 12 Pro를 로컬 AI 서버로 구성한 사례로, LineageOS 플래싱을 통해 불필요 UI를 제거하고 약 `9GB` RAM을 LLM 연산에 활용한다고 설명했다. 헤드리스(headless)로 운영하며 `wpa_supplicant` 기반 네트워킹을 구성했고, `45°C`에서 외부 쿨링 모듈을 켜는 데몬으로 열 관리, 충전 `80%` 제한 스크립트로 배터리 수명 관리까지 언급했다. Ollama로 Gemma4를 LAN API로 서빙하며 소비자 기기의 새로운 활용을 보여줬다는 반응이 있었고, 댓글에서는 `llama.cpp`를 직접 컴파일하면 추론(inference) 속도가 더 나을 수 있다는 제안과 실제 속도(TPS) 질문이 나왔다.
- **[Follow up post, decided to build the 2x RTX PRO 6000 tower.](https://www.reddit.com/r/LocalLLaMA/comments/1sklhzv/follow_up_post_decided_to_build_the_2x_rtx_pro/)** (Activity: 459): 듀얼 NVIDIA RTX PRO 6000(각 `96GB GDDR7 ECC`)을 단일 타워에 구성한 워크스테이션 빌드로, AMD Threadripper PRO 7965WX와 ASUS Pro WS WRX90E-SAGE SE(최대 `128 PCIe 5.0 lanes`) 등을 포함했다. `256GB DDR5-4800 ECC RDIMM`, CPU 수랭과 다수 팬, `192GB` 총 VRAM, 카드당 `500W` 제한, `20A 120V` 전용 회로 등 전력/열 설계가 상세히 언급됐다. 댓글에서는 비용과 전력 요구(공유 15A 회로에서의 난점) 이야기가 나왔고, MachinaVerum은 GPU `1200W`급 열을 고려해 CPU 공랭을 피하고 AIO 흡기 구성 등을 권했다.
- **[Just got my hands on one of these… building something local-first 👀](https://www.reddit.com/r/LocalLLM/comments/1sk3zng/just_got_my_hands_on_one_of_these_building/)** (Activity: 537): NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition을 확보해 로컬-퍼스트(local-first) 셋업을 구성하려는 글로, `9950X` CPU, `128GB RAM`, ProArt 보드 등을 언급했다. 다중 사용자 동시 추론과 데이터의 로컬 통제를 목표로 하며 `vLLM`, `llama.cpp` 등을 검토하고 2번째 GPU 확장도 계획했다. 댓글에서는 RTX 6000 관련 Discord 커뮤니티 조언 등이 있었고, Sticking_to_Decaf는 `vLLM`의 `cu130 nightly image`로 `Qwen3.5-27B-FP8`를 KV cache dtype `fp8_e4m3`로 운용해 약 `160k tokens` 컨텍스트를 VRAM `55%` 정도로 처리했다는 셋업을 공유했다(단일 요청 `80-90 TPS`, 동시 요청 `250 TPS+`). 또한 `whisper-large-v3`와 reranker를 함께 올릴 여유, `Hermes Agent`에 `OpenViking`(메모리), `Firecrawl`/`Searxng`(웹 검색) 같은 로컬 구성, 향후 Qwen3.5의 multi-LoRA 지원 기대가 언급됐다.
- **[1000 token/s, it's blazing fast!!! Fairl](https://www.reddit.com/r/LocalLLaMA/comments/1sl8a8o/1000_tokens_its_blazing_fast_fairl/)** (Activity: 369): OpenRouter가 스텔스(stealth) 모델 “Elephant Alpha”를 발표한 게시물로, `100B` 파라미터 모델이 코드 완성, 디버깅, 문서 처리, 경량 에이전트 등에서 SOTA 성능과 `1000 token/s` 속도를 주장했다. 댓글에서는 OpenRouter 페이지에 `~100t/s`로 표기된 점을 들어 속도 주장 근거를 의심하는 반응과, 확산(diffusion) LLM(예: “Llada”) 또는 상태공간(state-space) 계열/혼합 레이어가 속도에 기여했을 수 있다는 추정이 나왔다. LiquidAI 24B MoE가 Mac Studio에서 vllm로 `200+ tokens/s`를 낸 경험담도 함께 공유되며, 하드웨어/아키텍처에 따라 `1000 token/s`가 가능할 수 있다는 의견도 제시됐다.
- **[What Is Elephant-Alpha ???](https://www.reddit.com/r/LocalLLaMA/comments/1skfknl/what_is_elephantalpha/)** (Activity: 450): “Elephant Alpha”를 `100B` 텍스트 모델로 소개하며 “intelligence efficiency”를 강조하고, `256K` 컨텍스트와 최대 `32K` 출력 토큰을 지원한다고 설명했다. OpenRouter 통합으로 최적 공급자 라우팅을 내세우는 내용도 포함됐다. 댓글에서는 `1000 tokens/s` 속도에 대한 인상과 함께, “긴 정지 후 한 번에 벽처럼 출력”되는 패턴이 확산 모델과 유사하다는 관찰(스트리밍 확산 응답은 가능하지만 openrouter가 아직 지원하지 않을 수 있다는 추정), 그리고 Tiananmen Square 관련 장문 서술을 빠르게 생성한 사례가 언급됐다.
- **[Kimi K2.6 imminent](https://www.reddit.com/r/LocalLLaMA/comments/1sk9twd/kimi_k26_imminent/)** (Activity: 494): Kimi Code Team 이메일 이미지로 Kimi K2.6 코드 프리뷰(code-preview) 모델의 출시 임박을 알렸고, 베타 프로그램에서 피드백을 받아 개선했으며 곧 모두에게 제공될 것이라 밝혔다. 코드 중심 미세조정(fine-tuning) 모델로 Mythos 같은 경쟁 모델과의 구도도 언급됐다. [Image](https://i.redd.it/3wr3ia70fyug1.jpeg) 댓글에서는 자원 요구량이 커 `144GB` RAM에도 부담될 수 있다는 농담과, 코드 특화 모델 트렌드의 한 사례라는 비교가 나왔다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Anthropic is set to release Claude Opus 4.7 and a new AI design tool as early as this week](https://www.reddit.com/r/singularity/comments/1slh72j/anthropic_is_set_to_release_claude_opus_47_and_a/)** (Activity: 711): Anthropic이 빠르면 이번 주 **Claude Opus 4.7**과 신규 AI 디자인 도구를 출시할 수 있다는 내용이 обсуж됐다. 디자인 도구는 자연어 프롬프트로 프레젠테이션/웹사이트 등을 만들 수 있게 해 Gamma나 Google의 Stitch 같은 도구와 경쟁할 수 있다는 관점이 제시됐다. Opus 4.7은 최상위가 아니라(최상위는 **Claude Mythos**로 언급), Mythos는 사이버보안 능력 검증에 활용 중이라는 주장도 포함됐다. 댓글에서는 새 버전 직전 구버전 성능이 의도적으로 떨어진 것처럼 느껴진다는 추측, 새로운 모델 접근성(레이트 리밋 등) 우려가 제기됐다.
- **[The Information: Anthropic Preps Opus 4.7 Model, could be released as soon as this week](https://www.reddit.com/r/ClaudeAI/comments/1slhkt8/the_information_anthropic_preps_opus_47_model/)** (Activity: 467): Anthropic이 Opus 4.7과 AI 디자인 도구를 준비 중이라는 보도 요약이며, 상세는 원문 기사 [here](https://www.theinformation.com/briefings/exclusive-anthropic-preps-opus-4-7-model-ai-design-tool)로 안내됐다. 댓글에서는 Opus 4.6 대비 의미 있는 개선인지에 회의적 반응이 있었고, ‘New Coke’에 빗대어 변화가 호불호를 낳을 수 있다는 비유도 등장했다.
- **[AI Security Institute Findings on Claude Mythos Preview](https://www.reddit.com/r/singularity/comments/1skc04d/ai_security_institute_findings_on_claude_mythos/)** (Activity: 559): Mythos Preview의 사이버 역량이 다른 모델 대비 크게 앞선다는 비교 그래프가 공유됐고, 정찰부터 네트워크 장악까지의 단계 수행 효율을 토큰 누적량(로그 스케일) 대비로 보여준다고 설명됐다. 댓글에서는 오픈소스 모델이 SOTA 프런티어 대비 약 12개월 뒤처진 정도로 빠르게 따라오고 있다는 주장과 함께, 대기업은 방어 역량을 갖추지만 중소 규모는 취약해질 수 있다는 “AI 보안 군비 경쟁” 관점이 논의됐다.
- **[DeepSeek V4 launching late April – plus Anthropic's "too dangerous" Mythos model, Meta's $135B AI bet](https://www.reddit.com/r/DeepSeek/comments/1ski33m/deepseek_v4_launching_late_april_plus_anthropics/)** (Activity: 139): DeepSeek V4가 4월 말 출시 예정이며, NVIDIA 의존을 줄이기 위해 Huawei AI 칩에 최적화될 수 있다는 내용이 [TVBS News Network](https://news.tvbs.com.tw/tech/3170653) 인용으로 언급됐다. 또한 Anthropic의 “Mythos”는 해킹에 “너무 위험할 정도로” 뛰어나 공개하지 않고, Amazon/Microsoft 등 일부 파트너와 *Project Glasswing* 형태로 공유한다는 주장도 포함됐다. 댓글에서는 “너무 위험” 서사가 과장된 마케팅일 수 있다는 비판과, 하드웨어 공급망 다변화(화웨이 칩) 전략의 의미를 짚는 반응, 기업 투명성/윤리성에 대한 우려가 나왔다.
- **[New Stealth model Elephant from OpenRouter](https://www.reddit.com/r/DeepSeek/comments/1skg0kz/new_stealth_model_elephant_from_openrouter/)** (Activity: 136): OpenRouter의 “Elephant Alpha” 스텔스 모델 소개로, 큰 컨텍스트와 효율을 강조하며, Tiananmen Square 같은 민감 주제 답변 가능 사례가 언급됐다. 댓글에서는 이 점을 근거로 “중국 모델은 아닐 것”이라는 추정이 나오기도 했고, 일부는 기대 성능(예: deepseek 기준)에 못 미친다는 반응도 있었다.
- **[Elephant-alpha model on Openrouter, 100B-parameter, 256K context, 1000 token/s, small but Danm Fast!](https://www.reddit.com/r/DeepSeek/comments/1slbjhy/elephantalpha_model_on_openrouter_100bparameter/)** (Activity: 66): Elephant Alpha가 `100B`, `256K` 컨텍스트, `1000 tokens/s`를 주장하며 function calling/structured output 등을 지원한다는 요약이다. 댓글에서는 속도 대비 “깊이”가 부족하다는 농담 섞인 평가(“ShallowSeek”)가 나타났다.
- **[OpenRouter Just announced a New 100B model](https://www.reddit.com/r/Bard/comments/1skfbvf/openrouter_just_announced_a_new_100b_model/)** (Activity: 274): OpenRouter의 “Elephant Alpha” 100B 발표를 다루며 코드/디버깅/문서 처리/경량 에이전트 등 용도를 강조했다. 댓글에서는 “Grok일 수도 있다”는 추측(새 모델이 OpenRouter에 먼저 뜨는 패턴)과, Google 모델은 보통 파라미터 수를 공개하지 않는다는 이유로 “Google은 아닐 것”이라는 의견이 있었다. 일부는 테스트상 SOTA로 보이지 않는다는 반응도 포함됐다.
- **[New Stealth model at OpenRouter](https://www.reddit.com/r/SillyTavernAI/comments/1skofg1/new_stealth_model_at_openrouter/)** (Activity: 111): Elephant Alpha 상세(컨텍스트 `262,144`, 입력/출력 토큰 비용 없음 등)와 2026년 4월 13일 릴리스 표기를 소개했다. 댓글에서는 창작/RP(롤플레잉) 성능이 매우 약하다는 혹평이 다수였고, “아이디어 보드”처럼 방향 전환은 주지만 서사 일관성, EQ, Memory Book 생성 품질에서 반복적·공허하다는 상세 비판이 공유됐다.
- **[Something is coming. Gemini models are no longer marked as "new"](https://www.reddit.com/r/Bard/comments/1skl372/something_is_coming_gemini_models_are_no_longer/)** (Activity: 195): Gemini 계열 신규 프리뷰로 **Gemini 3.1 Pro**와 **Gemini 3.1 Flash Lite**가 언급됐고, Pro는 고급 추론 및 멀티모달, Flash Lite는 번역 같은 대량 작업의 비용 효율을 강조하는 포지셔닝이 소개됐다. 지식 컷오프가 2025년 1월로 표기되고, Pro가 2026년 2월 12일 출시 예정으로 보인다는 내용도 포함됐다. 댓글에서는 Google IO나 클라우드 행사 전후 발표를 추정했고, “server too busy” 빈발 같은 인프라 이슈 언급도 있었다.
- **[Gemini is.... Fine?](https://www.reddit.com/r/Bard/comments/1sl2mcm/gemini_is_fine/)** (Activity: 65): Gemini가 의료 질의, 약물 상호작용, 창작 글 문법 점검 등에 “충분히 괜찮다”는 경험담이며, 커스텀 GEMs와 Notebooks로 출력 유도 시 유용하다고 했다. 환각(hallucination)은 사용 맥락에서 관리 가능하다고 언급했고, 현지 가격 `310K Rupiah`의 가치에 대한 의문도 포함됐다. 댓글에서는 Gemini가 초기 프롬프트를 더 자세히 요구하지만 맥락이 있는 반복 작업에 강점이 있다는 의견, Google 생태계 통합 이점, 2,000단어 이상 장문 생성 한계 지적 등이 나왔다.
- **[Gemini has EVERYTHING… so why is it still losing? 🤔](https://www.reddit.com/r/GeminiAI/comments/1sl0uaz/gemini_has_everything_so_why_is_it_still_losing/)** (Activity: 1114): Chrome/Android/방대한 검색 데이터 같은 자원을 가졌음에도 Gemini가 Claude/GPT와 경쟁에서 밀리는 이유로, 높은 환각률이 신뢰도를 떨어뜨린다는 관점이 제시됐다. 커뮤니티마다 “자기 모델이 더 별로”라고 느끼는 인식 차이도 언급됐다. 댓글에서는 환각률 문제, 대중 사용자 기반과 달리 개발자 마인드셰어가 약하다는 지적, 모델 압축 관련 백서에 대한 언급 등 다양한 분석이 이어졌다.
- **[My Uni permanently expelled a student for using Gemini during exams](https://www.reddit.com/r/GeminiAI/comments/1sl3cy5/my_uni_permanently_expelled_a_student_for_using/)** (Activity: 649): 시험 중 모바일 기기로 인터넷에 접속해 Gemini AI를 사용한 학생들을 퇴학 처리했다는 대학 공지 이미지가 공유되며, 교육 현장에서 AI 도구와 부정행위의 경계 및 처벌 수위 논쟁을 촉발했다. 댓글에서는 AI 부정행위가 다른 부정행위보다 더 무겁게 처벌되는 것의 형평성 문제, 평가 윤리/가이드라인의 명확화 필요 등이 논의됐다.

---

## AI Discord Recap

### AINews

- **Discord 접근 중단 공지**: Discord가 오늘 접근을 차단해, 이 형태로는 다시 제공되지 않을 예정이며 대신 새로운 AINews를 곧 출시할 계획이라고 밝혔다.
