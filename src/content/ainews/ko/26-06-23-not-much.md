---
title: "Claude Tag, Slack 비동기 팀원 에이전트로 등장"
summary:
  - "Claude Tag, Slack 비동기 팀원 에이전트로 등장"
  - "Prime Intellect가 1T MoE RL 스택 공개"
  - "GLM-5.2가 오픈 모델 대안으로 부상"
  - "Mistral OCR 4와 Krea 2가 공개"
  - "중국 AI 가속기 생태계 논쟁 확산"
date: 2026-06-23
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-23-not-much.md"
hasHeadline: false
headline: "Claude Tag, Slack 비동기 팀원 에이전트로 등장"
tags:
  - Anthropic
  - Claude
  - GLM-5.2
  - PrimeIntellect
  - 에이전트
isFeatured: false
---

## 헤드라인: Claude Tag, Slack 비동기 팀원 에이전트로 등장

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic의 Claude Tag는 챗봇에서 벗어나 Slack 안에서 지속적으로 일하는 비동기 팀원 에이전트라는 방향을 가장 분명하게 보여줬다. Claude는 채널과 도구 접근 범위를 제한받은 팀원처럼 조직 워크플로에 합류하며, 내부 버전은 제품팀 코드의 65%를 작성했다고 한다. 이번 흐름은 웹사이트, 데스크톱 앱을 지나 팀과 함께 인라인으로 일하는 지속형 LLM UI라는 새 패러다임으로 받아들여지고 있다.

---

## AI Twitter Recap

### Agentic RL Infrastructure and Post-Training at Trillion-Parameter Scale

- **Prime Intellect의 `prime-rl` v0.6.0**: 이번 묶음에서 가장 기술적으로 실질적인 시스템 릴리스다. 팀은 스택이 이제 **1T 파라미터 MoE 모델의 RL**을 지원하며, **5분 미만 스텝 시간**, **약 3일에 ~1k 스텝**, **131k 컨텍스트의 GLM-5 agentic SWE 구성**을 포함한다고 밝혔다. 릴리스는 추론(inference)의 **wide-EP, FP8 inference, llm-d router, Mooncake, KV-cache CPU offload**, 훈련(training)의 **FSDP2, Deep-EP, DSA CP, FP8 training, router replay**, 롤아웃 오케스트레이션의 재작성된 코어와 **GLM5, Kimi, Nemotron** 지원을 강조한다. 핵심 발표는 [@PrimeIntellect](https://x.com/PrimeIntellect/status/2069243037755359548), 기술 요약은 [@samsja19](https://x.com/samsja19/status/2069253368770670682), 관련 포인터는 [@eliebakouch](https://x.com/eliebakouch/status/2069252660201697382) 및 [@mervenoyann](https://x.com/mervenoyann/status/2069342052601483465)을 참고하면 된다.
- **에이전트 훈련의 인프라화**: 더 큰 흐름은 에이전트 훈련이 알고리즘만의 문제가 아니라 인프라 문제가 되고 있다는 점이다. 관련 작업으로 W&B/OpenPipe는 RL 처리량을 **tokens/sec가 아니라 trajectories/sec** 중심으로 재정의하며, ART용 새 Megatron 백엔드로 **12x throughput**, 공유 프롬프트가 많은 GRPO 유사 워크로드에서 **4 GPU 기준 최대 35 trajectories/s**를 주장했다 ([`@wandb`](https://x.com/wandb/status/2069509871289212959)). Vibrant Labs도 브라우저 에이전트를 위한 **40개 태스크 라이브 Shopify 벤치마크**인 **Ecom Bench**를 공개했으며, 결정적 검증으로 웹 에이전트 훈련과 평가를 개방적이고 재현 가능하게 유지하려 한다 ([`@VibrantLabsAI`](https://x.com/VibrantLabsAI/status/2069454279073583401)). 이는 **오픈 후속 훈련(post-training) 스택 + 검증 가능한 환경 + 태스크별 롤아웃**으로의 전환을 강화한다.

### Agent Harnesses, Background Agents, and the “Async Teammate” UX

- **Anthropic의 Claude Tag**: 챗봇에서 **지속적이고 비동기적이며 조직에 내장된 에이전트**로 이동하는 흐름을 가장 분명하게 보여주는 제품이다. Claude는 이제 Slack에 팀원으로 합류할 수 있고, 채널과 도구 접근 범위를 제한받는다. Anthropic은 내부 버전이 제품팀 코드의 **65%**를 작성했으며, Claude Tag 자체를 만든 코드의 상당 부분도 포함한다고 말한다. 사례들은 “채팅”이 아니라 **백그라운드 감시자**, **출시/지표 모니터링**, 기존 워크플로 안에서의 선제적 작업 실행이라는 점에서 주목된다 ([`@claudeai`](https://x.com/claudeai/status/2069468693017268244), [`@ClaudeDevs`](https://x.com/ClaudeDevs/status/2069468900216234010), [`@_catwu`](https://x.com/_catwu/status/2069473118742331608)). [Andrej Karpathy](https://x.com/karpathy/status/2069547676849557725)는 이를 웹사이트, 데스크톱 앱에 이은 **세 번째 주요 LLM UI 패러다임**, 즉 **팀과 인라인으로 일하는 지속형 존재**로 설명했다.
- **오픈 생태계의 수렴**: **StarAgent**는 **tmux + Tailscale + 웹 대시보드**로 여러 머신의 코딩 에이전트 세션을 다중화하면서 CLI를 진실의 원천으로 유지한다 ([`@ZhihuFrontier`](https://x.com/ZhihuFrontier/status/2069310877418082360)). **Self-Harness**는 실패를 채굴하고, 하네스 변경을 제안하며, 회귀 테스트로 검증하는 에이전트를 제안한다 ([`@hwchase17`](https://x.com/hwchase17/status/2069443268593537470)). **Hermes Agent**는 문서, URL, 이전 세션을 받아 새 스킬을 합성할 수 있는 `/learn`을 추가했다 ([`@Teknium`](https://x.com/Teknium/status/2069527900723073235)). 제품 쪽에서는 **Executor**가 에이전트를 서비스에 연결하는 오픈소스 **MCP gateway**를 발표했으며, 셀프 호스팅과 데스크톱 옵션을 제공하고 이제 **YC S26**에 들어간다 ([`@RhysSullivan`](https://x.com/RhysSullivan/status/2069490113923690747)). 공통 주제는 원시 모델과 운영 가능한 에이전트 플릿 사이의 빠진 계층을 팀들이 만들고 있다는 점이다.

### Open Models, Small Models, and GLM-5.2’s Momentum

- **GLM-5.2의 부상**: 여러 트윗은 **GLM-5.2**가 특히 코딩과 에이전트 워크플로에서 이날 가장 많이 논의된 오픈 모델 성능 도약이라고 지목했다. 보안 관점의 [@joshua_saxe](https://x.com/joshua_saxe/status/2069289170107842572)는 이 수준의 오픈 가중치가 API 로깅 없이 **비공개 장기 공격 워크플로**를 가능하게 하므로 사이버 지형을 실질적으로 바꾼다고 주장했다. 실사용 측면에서는 GLM-5.2가 **프런티어 폐쇄형 모델에 충분히 가까워 기본 선택지를 바꾼다**는 보고가 이어졌다. [@_xjdr](https://x.com/_xjdr/status/2069543981411893594)는 **GPT-5.5 xhigh**가 놓친 복잡한 C++/Rust 버그를 찾았다고 했고, [@nutlope](https://x.com/nutlope/status/2069492037036945634)는 비슷한 품질에서 **Opus보다 토큰을 2배 생성했지만 더 빠르고 3배 저렴했다**고 밝혔다. [@UnslothAI](https://x.com/UnslothAI/status/2069418532375564484)는 **1-bit GLM-5.2 GGUF**가 **Mac Studio M3 Ultra 256GB**에서 로컬로 **~21.6 tok/s**로 실행되는 모습을 보였다.
- **라우팅과 더 작고 저렴한 모델**: 더 넓게는 **routing + smaller/cheaper models**가 핵심 스택 패턴이 될 것이라는 확신이 커지고 있다. [@jpschroeder](https://x.com/jpschroeder/status/2069229057355448394)는 **DeepSeek V4 Flash**가 **Claude/Codex 작업의 약 80%**를 처리할 수 있고 **Fable보다 태스크당 137배 저렴**하며, 이제 병목은 원시 모델 품질이 아니라 오케스트레이션이라고 주장했다. [@kylebrussell](https://x.com/kylebrussell/status/2069490763931537885)도 팀들이 최대 비용의 프런티어 추론(inference)에 기본값을 두기보다 “필요한 만큼의 reasoning”과 **유능한 소형 모델**을 활용하는 법을 배우고 있다고 말했다. 이는 **GitHub Copilot App의 Bring Your Own Key** 같은 BYOK/제품 통합 업데이트로도 강화되며, 이제 **Ollama, Foundry, OpenAI-compatible completions, Anthropic-compatible message endpoints**와 함께 작동한다 ([`@_Evan_Boyle`](https://x.com/_Evan_Boyle/status/2069240742690893961)).

### Infra and Developer Tooling: Containers, Endpoints, Kernel Benchmarks, and Observability

- **Apple `container` 프로젝트**: Mac에서 **Docker Desktop을 선택 사항으로 만들 수 있는** 신뢰할 만한 경로로 큰 관심을 받았다. 언급된 기능은 로컬 개발에 중요하다. **Apple Silicon의 Linux 컨테이너**, OCI 호환성, Swift 구현, **Apache-2.0 라이선스**를 갖추고, Docker Desktop의 데몬이나 상업용 시트 과금 없이 작동한다 ([`@twtayaan`](https://x.com/twtayaan/status/2069307717177737658)). 이는 로컬/오픈 툴링 전반에서 보이는 “자기 스택을 소유하라”는 분위기와 맞닿아 있다.
- **추론 인프라와 관측성(observability)**: **Modal**은 **managed private LLM endpoints**를 출시하며, 고객이 블랙박스 서비스가 아니라 기본 코드에도 접근할 수 있다고 강조했다 ([`@bernhardsson`](https://x.com/bernhardsson/status/2069486092395446774), [`@akshat_b`](https://x.com/akshat_b/status/2069490362373009420)). 관측성 쪽에서는 **Latitude**가 반복 실패를 이슈로 묶고, 운영 대화에 대한 쉬운 영어 검색을 제공하며, 오픈소스/셀프 호스팅 배포가 가능하다는 점에서 호평을 받았다 ([`@kimmonismus`](https://x.com/kimmonismus/status/2069460274789122517), [`@omarsar0`](https://x.com/omarsar0/status/2069473079521116179)).
- **저수준 성능 작업**: 첫째, CMU의 **Modern GPU Programming for ML Systems** 자료가 온라인 북으로 공개되어 **data layout swizzling, 3D TMA, Blackwell programming** 같은 주제를 다룬다 ([`@tqchenml`](https://x.com/tqchenml/status/2069382647302734099)). 둘째, **ParallelKernelBench**는 Megatron-LM, DeepSpeed, DeepEP, TensorRT-LLM, NeMo-RL 같은 실제 워크로드에서 **멀티 GPU 커널**을 작성하는 LLM 능력을 벤치마크한다. 현 프런티어 모델도 여전히 크게 어려움을 겪는다. 최고 zero-shot은 **87개 중 28개 정답**이었고, 반복 루프를 써도 향상이 정체되어 문법/디버그 루프가 **rank coordination과 communication mechanisms** 추론보다 쉽다는 점을 드러냈다 ([`@togethercompute`](https://x.com/togethercompute/status/2069515311720911082), [`@realDanFu`](https://x.com/realDanFu/status/2069522364015194146)).

### Multimodal Models: OCR, Image Models, Speech, and Video

- **Mistral OCR 4**: 이날 더 큰 멀티모달 출시 중 하나로, **bounding boxes, block classification, inline confidence scores, 170개 언어 지원**을 갖춘 구조화 OCR을 주장했다 ([`@MistralAI`](https://x.com/MistralAI/status/2069420263825895917)). 하지만 벤치마킹은 곧 논쟁이 됐다. [@NielsRogge](https://x.com/NielsRogge/status/2069432947711652210)는 Mistral의 **OlmOCRBench** “SOTA” 주장이 공개 Hugging Face 리더보드와 맞지 않으며, 현재 오픈 모델 뒤의 **#3**이라고 지적했다. 한편 **Baidu의 Unlimited-OCR**도 Hub에 올라오며 OCR이 갑자기 경쟁적인 오픈 프런티어가 되고 있음을 더했다 ([`@_akhaliq`](https://x.com/_akhaliq/status/2069486909852655687)).
- **Krea 2 오픈 가중치**: 이미지 생성에서는 **Krea 2**가 두 체크포인트의 **오픈 가중치**를 공개했다. **Krea 2 Raw**는 미세조정(fine-tuning)/후속 훈련(post-training)을 위한 **비증류 중간 훈련 모델**이고, **Krea 2 Turbo**는 더 빠른 증류 추론(inference) 모델이다. 릴리스에는 기술 보고서, day-0 HF/diffusers 지원, 즉각적인 LoRA 생태계 지원이 포함됐다 ([`@krea_ai`](https://x.com/krea_ai/status/2069435590995812396), [`@fal`](https://x.com/fal/status/2069436126364864887), [`@ostrisai`](https://x.com/ostrisai/status/2069442414566391929)). “원시 비증류 체크포인트를 공개”하는 접근은 커뮤니티에 다듬어진 추론 산출물만이 아니라 실제 후속 훈련을 위한 더 나은 기반을 준다는 점에서 중요하다.
- **음성 및 비디오**: **Artificial Analysis**는 **Big Bench Audio, Full Duplex Bench, τ-Voice**를 결합한 새 **Speech-to-Speech Index**를 출시했다. 집계 지표에서는 **GPT-Realtime-2 (High)**가 **77.2%**로 선두이고, **Grok Voice Think Fast 1.0**이 **75.7%**로 뒤따르며, Gemini 변형들은 비용 면에서 강하게 경쟁한다 ([`@ArtificialAnlys`](https://x.com/ArtificialAnlys/status/2069436163065282737)). **AssemblyAI**도 **대화의 에이전트 쪽 발화를 컨텍스트로 사용하는** 실시간 ASR 모델을 소개했다. 이는 봇이 방금 무엇을 물었는지 아는 것이 이메일이나 ID 같은 항목의 인식 정확도를 높이는 음성 에이전트 워크플로를 겨냥한다 ([`@AssemblyAI`](https://x.com/AssemblyAI/status/2069464657681850823)).

### Top tweets by engagement

- **Claude Tag / async teammate UX**: [@claudeai](https://x.com/claudeai/status/2069468693017268244)와 [@karpathy](https://x.com/karpathy/status/2069547676849557725)가 가장 강한 반응을 얻었으며, 시장이 **지속형 Slack-native agents**를 단순 기능 조정 이상으로 보고 있음을 시사한다.
- **Apple `container`**: [@twtayaan](https://x.com/twtayaan/status/2069307717177737658)는 Mac에서 **Docker Desktop이 선택 사항이 되고 있다**는 아이디어로 큰 참여를 이끌었다.
- **Mistral OCR 4**: [@MistralAI](https://x.com/MistralAI/status/2069420263825895917)는 가장 큰 순수 모델/툴 출시 중 하나였고, 벤치마크 포지셔닝에 대한 커뮤니티 검증이 즉시 뒤따랐다.
- **Prime RL infra**: [@PrimeIntellect](https://x.com/PrimeIntellect/status/2069243037755359548)는 **RL + MoE + 에이전트 인프라**를 다루는 엔지니어에게 가장 신호가 강한 시스템 게시물이었다.
- **Krea 2 open weights**: [@krea_ai](https://x.com/krea_ai/status/2069435590995812396)는 이번 묶음에서 가장 큰 오픈 멀티모달 가중치 공개였다.
- **GLM-5.2 local/open momentum**: [@UnslothAI](https://x.com/UnslothAI/status/2069418532375564484)와 여러 실무자 보고는 오픈 모델 논의가 이념에서 코딩 스택의 **실제 비용/성능 대체**로 이동하고 있음을 보여준다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Chinese AI Accelerator Ecosystem

- **[7 Chinese companies are already shipping H100/H200-class AI chips, most IPO'd in the last 6 months. I mapped all of them.](https://www.reddit.com/r/LocalLLaMA/comments/1udkxde/7_chinese_companies_are_already_shipping/)** (Activity: 936): 게시물은 `7`개의 중국 AI 가속기 업체인 **Huawei Ascend**, **Alibaba T-Head**, **Baidu Kunlunxin**, **MetaX**, **Moore Threads**, **Biren**, **Iluvatar CoreX**를 정리하며, 이들이 H100/H200급 부품, 국내 인터커넥트, OAM 유사 폼팩터, 중국 현지화 생산을 출하하거나 로드맵에 올렸다고 주장한다. 많은 세부 사항은 **CHITEX/Dmitry Shilov** 발표/덱에 근거하며 독립 벤치마크가 아니라 벤더/애널리스트 주장으로 명시됐다. 주요 스펙에는 **Huawei Ascend 910C/910D/950** 로드맵, `16×96GB = 1.536TB` HBM 용량의 **Alibaba PG1**, `144GB HBM3e`의 **MetaX C600**, `80GB`와 `1 PFLOPS`의 **Moore Threads S5000**, `144GB`의 **Iluvatar B300**이 포함된다. X의 더 큰 글/소스 스레드는 [superalesha/status/2069415581237813437](https://x.com/superalesha/status/2069415581237813437)다. 상위 댓글은 대체로 실용적이거나 회의적이었다. Alibaba의 `1.5TB` VRAM 서버를 AliExpress에서 살 수 있느냐는 농담부터, 지속적 병목은 원시 가속기 스펙이 아니라 **소프트웨어 스택**이라는 지적까지 나왔다. 또 `16 × 96GB = 1.536TB` PG1 서버가 `~1.51TB` BF16 프런티어 모델을 그대로 호스팅할 수 있다는 주장에는 KV cache, 프레임워크 버퍼, 단편화, 통신 워크스페이스 때문에 원시 VRAM 전체를 가중치에 쓸 수 없다는 반박이 붙었다. Huawei Ascend 비교도 논쟁적이었다. 한 댓글은 Ascend `950PR`의 보고 스펙이 **128GB VRAM**, `1.6TB/s`, `1 PFLOP FP8`인 반면 NVIDIA **H200**은 **144GB**, `4.8TB/s`, `2 PFLOPs dense FP8`이라며, H200급 성능 주장에도 비-CUDA 스택이 큰 호환성 위험이라고 했다. 여러 “shipping” 주장도 실제로는 로드맵에 가깝다는 비판을 받았다.
- **[Chinese Hackers Latest Masterpiece with NVIDIA](https://www.reddit.com/r/LocalLLaMA/comments/1ucokod/chinese_hackers_latest_masterpiece_with_nvidia/)** (Activity: 1271): 한 중국 하드웨어 모더는 약 `1 year` 동안 **NVIDIA Tesla V100** 모듈의 `2,963`개 핀 신호를 리버스 엔지니어링하고, 이를 **single-slot/half-height custom PCB**로 다시 설계했으며 `8-way`까지 **full NVLink support**를 제공한다고 주장했다. 제품명은 “Tesla V100 v4”다 ([OP](https://t.bilibili.com/1211458176581369862), [engineer](https://space.bilibili.com/1560089206), [video](https://www.bilibili.com/video/BV13JEa6sEtb/)). 주장 가격은 매우 낮다. `16 GB`는 `1499 RMB`(약 `$220`), `32 GB`는 `3999 RMB`(약 `$590`), `2-way`/`8-way` NVLink 어댑터는 `199`/`799 RMB`다. 댓글은 MCIO를 사용하는 리버스 엔지니어링 NVLink 어댑터 보드가 `4`개 V100 사이에서 `100 GB/s` 대역폭을 제공한다고도 언급했지만, 영상은 2차 BGA 리워크로 인한 **HBM failures**라는 큰 신뢰성 위험도 짚었다. 댓글러들은 `32 GB` 카드와 고대역폭 NVLink가 조밀한 메모리/컴퓨트 빌드에 매력적이라고 봤지만, 중고/리워크 V100 모듈의 신뢰성 우려가 열기를 누그러뜨렸다. 또 실제 멀티카드 배치를 위해서는 **single-slot waterblock**이 필요하다는 하드웨어 통합 지적도 나왔다.

### /r/LocalLlama + /r/localLLM: Coding Agent Benchmarks and Context Subagents

- **[GLM-5.2 is on DeepSWE](https://www.reddit.com/r/LocalLLaMA/comments/1uc79ho/glm52_is_on_deepswe/)** (Activity: 624): [image](https://i.redd.it/8qaktqtjjq8h1.png)는 DeepSWE 비용 대비 점수 차트이며, **GLM-5.2 [max]**가 약 `44%` DeepSWE 점수와 `$3.92/task`로 표시된다. `60–70%` 주변의 상위 독점 에이전트보다는 낮지만 여러 Claude/GPT 변형보다 저렴하다. 게시물은 비용이 오른쪽으로 갈수록 낮아지므로 **더 좋은 모델은 오른쪽 위**로 읽어야 한다고 설명하고, 점수가 `75%` 할인 전 가격에 근거해 DeepSeek 가격이 오래됐을 수 있다고 덧붙였다. 댓글은 DeepSWE 신뢰도에 엇갈렸지만 대체로 여러 벤치마크 중 하나로 취급했다. 한 사용자는 GLM-5.2가 *“sonnet보다 낫게 느껴진다”*고 했고, 프런티어 독점 시스템에 가까운 강한 오픈 가중치 모델이라고 평가했다. 다른 댓글은 GPT-5.5 Medium이 차트상 GLM-5.2보다 더 싸고 성능도 좋아 보인다거나, 비용 축의 0이 오른쪽에 있어 결과 해석을 왜곡한다고 비판했다.
- **[Why is NO one talking about Microsoft's open source Fast Context!!!](https://www.reddit.com/r/LocalLLaMA/comments/1ud1lro/why_is_no_one_talking_about_microsofts_open/)** (Activity: 455): **Microsoft FastContext-1.0**은 오픈소스 `4B` 저장소 탐색 서브에이전트다 ([HF model](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT), [GitHub](https://github.com/microsoft/fastcontext)). 코딩 에이전트의 저장소 탐색을 병렬 읽기 전용 `READ`/`GLOB`/`GREP` 호출로 오프로딩하고, 전체 검색 흔적 대신 압축된 파일 경로 + 라인 범위 인용을 반환하도록 설계됐다. 게시물은 GPT-5.4의 SWE-bench Pro `+5.5`, GLM-5.1의 `+5.0`, SWE-QA의 최대 `60.3%` 토큰 절감, 작은 `4B-RL` 탐색기가 더 적은 토큰으로 `30B-SFT` 탐색기를 능가한 사례 등을 인용했다. 연결된 PR은 `oh-my-pi`에 로컬 FastContext 지원을 추가한다 ([PR #3164](https://github.com/can1357/oh-my-pi/pull/3164)) 그리고 Cognition의 [`SWE-1.6`](https://cognition.com/blog/swe-1-6)식 컨텍스트 시스템 지원도 포함한다. 핵심 댓글은 새로움이 “서브에이전트 구조” 자체보다 정확한 파일/라인 인용을 내도록 탐색기를 훈련했다는 점이라고 봤다. Microsoft README의 GPT-5.4 traces에서 저장소 search/read가 도구 사용 턴의 `56.2%`, 메인 에이전트 토큰의 `46.5%`를 차지한다는 주장도 인용됐다. 다만 **CodeGraphContext** 같은 그래프 기반 repo map과 비교해, 정적/코드그래프 방식이 놓치는 “이상한 cross-file stuff”를 충분히 잘 찾는지가 핵심 질문으로 남았다.

### /r/LocalLlama + /r/localLLM: Local LLM Homelabs and Quantization

- **[GLM5.2 @7tg on 4x3090 + 192GB on budget motherboard + cpu](https://www.reddit.com/r/LocalLLaMA/comments/1ucknck/glm52_7tg_on_4x3090_192gb_on_budget_motherboard/)** (Activity: 1119): OP는 약 `$6,000`, 약 `40`시간이 든 소비자용 홈랩을 설명했다. eBay Aegis 프리빌트에 `4× RTX 3090`을 각각 `200 W`로 파워 제한하고, `192 GB DDR5-5200`을 `5600 MHz`로 오버클럭했으며, `1250 W Platinum` PSU를 사용했다. ECC/서버 메모리 대역폭보다 비용을 우선했다. 보고 워크로드는 **GLM5.2** 플래너 약 `7 tok/s`, **MiniMax 2.7** 전체 VRAM 적재 약 `45 tok/s` 코딩, **Qwen3.6 27B Q8** 약 `50 tok/s` 체크/테스트, `2×` GPU 배치의 **Flux2Klein** 확산(diffusion) 약 `1 image / 6 s`다. 댓글은 정확한 **양자화(quantization) 수준**, MiniMax M3를 쓰지 않은 이유, `4×` GPU 연결을 위한 메인보드/PCIe splitter 토폴로지, 태양광 전력 비용과 가치 절충에 집중했다. 주요 회의론은 적재와 처리량 주장에 핵심인 양자화가 명시되지 않았다는 점이었다.
- **[Quants had ruined my Local AI experience. I am hopeful again after using them correctly.](https://www.reddit.com/r/LocalLLM/comments/1ucrxwz/quants_had_ruined_my_local_ai_experience_i_am/)** (Activity: 422): 이 게시물은 일화적이지만 기술적으로 중요한 품질/속도 절충을 보고했다. **32 GB unified-memory Mac**에서 **Qwen `27B`/`35B` 4-bit** 같은 더 큰 로컬 모델은 *agentic flows/tool calling*에서 결과가 나빴지만, 더 작은 **Gemma `12B` 8-bit**는 기본 설정으로 앱 빌드 태스크를 약 `2 hours`에 끝냈다. 작성자는 저비트 양자화(quantization)가 구조화 reasoning/tool-use 신뢰성을 불균형하게 해칠 수 있고, 품질이 떨어진 `40–50 tok/s`를 쫓기보다 `10–15 tok/s`를 받아들이는 편이 낫다고 주장했다. 댓글은 대체로 에이전트에서는 *“5-10% 손실이 큰 문제”*라고 동의했고, 한 사용자는 **Q6**가 에이전트 워크로드의 최저선이라고 했다. 다른 사용자는 **MTP**를 손실적 “이상한” 기법과 묶는 데 반박하며 MTP는 *lossless*라고 지적했다. 또 **Q8_K_XL weight quantization with 16-bit KV cache**가 `27B`와 `35B A3B` 모델에서 좋은 결과를 냈다는 보고도 있었다.

### Less Technical AI Subreddits: Claude Code Power-User Workflows

- **[I added a clause to Andrej Karpathy's 4 CLAUDE.MD clauses for Claude Code. It has been a game changer for me.](https://www.reddit.com/r/ClaudeAI/comments/1uc7izy/i_added_a_clause_to_andrej_karpathys_4_claudemd/)** (Activity: 2495): 이 게시물은 **Andrej Karpathy**의 `CLAUDE.md` 규칙, 즉 *추정하기 전에 묻기*, 가장 단순한 구현, 관련 없는 수정 피하기, 명시적 불확실성을 강조한 기존 네 조항에 다섯 번째 지시를 더하자고 제안했다. 새 조항은 Claude가 순종적인 코드 생성기처럼만 행동하지 말고 더 나은 장기 접근을 제안하게 하는 내용이다. 피드백 뒤 작성자는 무인 모드 가정, 단순 문제와 어려운 문제 구분, 설계 냄새 별도 표시, 작은 저위험 실험 허용을 추가했다. 참고 영상은 [X/Twitter link](https://x.com/Ai_Tech_tool/status/2058140300502261784)다. 기술적 제안으로는 “더 나은 접근” 조언을 트레이드오프 bullet과 임계값으로 제한하고, 되돌리기 어려운 작업, 보안/데이터 손실 위험, 광범위한 리팩터링, 오래 걸릴 디버깅에만 대기하도록 하자는 의견이 있었다. 또 접근을 먼저 밝히고 *“나중에 무엇을 더 어렵게 만드는지”*를 적으며, 끝에는 무엇을 **하지 않았는지**를 남기게 하자는 제안도 있었다.
- **[The $20 → $100 gap is pushing solo power users to split spend with OpenAI](https://www.reddit.com/r/ClaudeAI/comments/1ud388h/the_20_100_gap_is_pushing_solo_power_users_to/)** (Activity: 1068): 한 Claude 파워 유저는 **Claude Pro `$20/mo`**가 일상적인 에이전트 오케스트레이션, Claude Code, 분석, 글쓰기 작업에 부족하지만, **Claude Max `$100/mo`**는 중간 티어 없이 `5×` 점프라고 말했다. 현재는 **Claude Pro + ChatGPT/Codex `$20 + $20`**로 지출을 나누고 있으며, API식 사용량 크레딧은 토큰 미터링으로 빠르게 소진되므로 동등하지 않다고 주장했다. 제안은 같은 앱 소비율에서 Pro 허용량의 `2–3×`를 제공하는 `$35–40/mo` “Pro 2x” 요금제다. 댓글은 실용적 우회책과 반박으로 갈렸다. 한 사용자는 Codex/GPT와 Claude를 번갈아 쓰면 서로 놓친 버그를 잡아 기술적으로 유용하다고 했고, 다른 사용자는 Claude Pro 계정 두 개를 쓰라고 했다. 더 강한 반박은 Claude가 전업 비즈니스 워크플로의 핵심이라면 `$100/mo`나 비즈니스 티어를 내야 한다는 쪽이었다.

### Less Technical AI Subreddits: AI Writing and Restoration Failure Modes

- **[I pulled ~90,000 Reddit posts about what makes writing "sound like AI" to determine the biggest AI-slop giveaways (Part 2)](https://www.reddit.com/r/ClaudeAI/comments/1ucpw87/i_pulled_90000_reddit_posts_about_what_makes/)** (Activity: 1081): 이 Reddit 분석은 `47`개 서브레딧의 Arctic Shift 게시물 `89,239`개 중 AI 글쓰기 감지 관련 게시물 `7,984`개를 필터링하고, `600`개 게시물을 손수 감사했다. 사용자가 AI 문체의 “티”로 꼽은 항목은 **em dash**(`7.1%`), 평평한 문장 리듬(`4.0%`), “not just X, it’s Y” 구조(`2.8%`), 다섯 문단/“in conclusion” 구조(`2.5%`), “delve/leverage/seamless/tapestry” 같은 어휘 묶음(`1.3%`) 순이었다. 작성자는 키워드 감지기가 인간 판단과 어긋난다고 주장한다. “however/thus/hence” 같은 흔한 단어는 자주 매칭됐지만(`6.3%`) AI 티로 언급된 비율은 `0%`였고, 리듬, 아첨, “유창하지만 비어 있는” 글 같은 더 신호가 높은 특징은 단순 어휘 스캔으로 잡히지 않는다. 데이터/스크립트는 [GitHub](https://github.com/JCarterJohnson/vibecoded-design-tells/tree/main/unslop-ai-text)에 공개됐다. 댓글은 대체로 나열된 특징을 과장해 패러디했지만, “however” 같은 단어와 em dash 같은 문장부호는 정상적인 인간 글쓰기 관습이라는 반박도 있었다. 한 댓글은 LLM 능력과 문체 지문이 `2021` 이후 크게 바뀌었으므로 `2024–2026` 같은 더 최신 구간으로 다시 돌려야 한다고 지적했다.
- **[I aged and restored a photo of myself](https://www.reddit.com/r/ChatGPT/comments/1ud6wuy/i_aged_and_restored_a_photo_of_myself/)** (Activity: 2745): [link](https://i.redd.it/rqbz1fkqhy8h1.png)는 *“I aged and restored a photo of myself”* 게시물의 통제 실험이다. 작성자는 **Gemini**로 알려진 원본 사진을 인위적으로 늙게 만든 뒤, **ChatGPT**에 복원/채색을 요청했다. 결과는 “복원”이 충실한 재구성이 아니라는 점을 보여준다. ChatGPT는 얼굴 구조, 머리/수염 밀도, 외견상 나이를 환각해, 생성형 사진 복원이 실제 정답을 회복하는 대신 그럴듯하지만 틀린 정체성을 만들 수 있음을 드러냈다. 댓글은 이를 역사/가족 사진에서 AI 복원이 오해를 부를 수 있다는 증거로 봤고, 한 사용자는 *“당신은 완전히 다른 사람이 됐다”*고 했다. 다른 댓글은 얼굴 인식/보안 시스템까지 우려를 확장했다. 또 한 사용자는 Gemini의 노화 결과와 **NanoBananaPro**를 비교하며, 원래 프레이밍으로 크롭한 뒤에도 NanoBananaPro가 *“복원에는 여전히 훨씬 더 낫다”*고 말했다.

### Less Technical AI Subreddits: U.S. AI and Quantum Policy Pushes

- **[President Trump orders a national effort to build a quantum computer capable of performing important scientific calculations](https://www.reddit.com/r/singularity/comments/1ucy9oj/president_trump_orders_a_national_effort_to_build/)** (Activity: 2937): 게시물은 **President Trump**가 두 가지 양자 관련 명령을 냈다고 주장했다. 하나는 의미 있는 과학 계산을 수행할 수 있는 양자 컴퓨터와 양자 센서/네트워크를 구축하기 위한 `5-year` 국가 노력이고, 다른 하나는 연방 기관이 `2031`년까지 **post-quantum cryptography (PQC)**로 시스템을 이전하라는 명령이다. 기술적으로 구체적인 요소는 PQC 이전이다. 댓글은 유용한 fault-tolerant quantum computing은 여전히 큰 불확실성이지만, 양자에 취약한 공개키 암호를 교체하는 일은 그런 기계가 존재하기 전에 시작할 수 있는 장기 엔지니어링/보안 과제라고 봤다. 실질적 의견은 양자컴퓨터 구축 목표보다 암호 마이그레이션 마감이 훨씬 현실적이고 실행 가능하다는 쪽이었다.
- **[Bernie Sanders unveils $7 trillion plan to give Americans control of AI industry](https://www.reddit.com/r/singularity/comments/1ucq463/bernie_sanders_unveils_7_trillion_plan_to_give/)** (Activity: 1505): **Sen. Bernie Sanders**는 연간 AI 매출이 **`$200M`** 이상인 AI 기업에 **일회성 `50%` 주식세**를 부과해 약 **`$7T` AI sovereign wealth fund**를 만들자고 제안했다. 출처는 [Ars Technica](https://arstechnica.com/tech-policy/2026/06/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry/)다. 이 펀드는 미국인 1인당 연간 **`$1,000` 이상**의 배당을 지급하고 공공 서비스를 지원하며, 대중에게 해롭다고 판단되는 AI 기업 결정을 영향력 행사 또는 차단할 수 있는 의결권을 가진 상원 인준 **Independent Commission for Democratic AI**를 만들게 된다. 상위 댓글은 대체로 법안을 **정치적으로 통과 불가능**하다고 봤지만, AGI/ASI 기반 생산성에 대한 AI 연구소들의 주장이 참이라면 공공 소유/UBI가 경제적으로 필요해지고, 그렇지 않다면 업계가 과장하고 있다는 전제를 두고 논쟁했다.
- **[Gen Z is the most anti-AI generation, yet remains its biggest consumer.](https://www.reddit.com/r/singularity/comments/1ucne6b/gen_z_is_the_most_antiai_generation_yet_remains/)** (Activity: 909): [image](https://i.redd.it/e4nijz88pu8h1.jpeg)는 설문식 결과를 요약한 비밈 텍스트 발췌다. **18–29세 Gen Z 성인**은 AI를 가장 경계하는 세대로, `48%`가 AI가 사회에 부정적 영향을 줄 것이라고 답했지만, 동시에 **가장 자주 AI를 쓰는 사용자층**으로 `66%`가 사용을 보고했다. 게시물에 연결된 Yahoo 기사 맥락에서 기술적 의미는 모델 성능보다 **AI adoption vs. risk perception**에 있다. 젊은 사용자는 자동화, 허위정보, 인간 통제 상실 같은 사회적 영향에 더 강한 우려를 가지면서도 AI 도구를 많이 쓰는 것으로 보인다. 댓글은 이를 세대 양극화와 노출 효과로 설명했다. Gen Z가 사회적/경제적으로 AI에 반대하면서도 생산성 이점 때문에 실용적으로 사용할 수 있다는 의견도 있었다.

---

## AI Discord Recap

### Discord 접근 중단

- **접근 종료**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이지만, 새 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
