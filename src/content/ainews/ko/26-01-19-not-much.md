---
title: "Zhipu AI, GLM-4.7-Flash 공개"
summary:
  - "Zhipu AI가 GLM-4.7-Flash 공개"
  - "STEM·RePo로 메모리·컨텍스트 확장"
  - "DSPy에 `dspy.RLM`로 RLM 도입"
  - "DeepMind, Gemini 안전 프로브 운영"
  - "GPT-5.2 에이전트로 3M줄 브라우저"
date: 2026-01-19
originalUrl: "https://news.smol.ai/issues/26-01-19-a-quiet-day/"
hasHeadline: false
headline: "Zhipu AI, GLM-4.7-Flash 공개"
tags:
  - OpenAI
  - Codex
  - GLM-4.7
  - DSPy
  - Gemini
isFeatured: false
---

## 헤드라인: Zhipu AI, GLM-4.7-Flash 공개

- **GLM-4.7-Flash**: Zhipu AI가 **30B-class** 로컬 코딩/에이전트 모델로 공개했고, 이후 **30B-A3B MoE** 모델이라고 명확히 했다 ([launch](https://twitter.com/Zai_org/status/2013261304060866758), [“we built it”](https://twitter.com/louszbd/status/2013262379874693155), [spec](https://twitter.com/Zai_org/status/2013280523871752319)).
- **아키텍처 전환(MLA) 및 벤치마크 주장**: GLM이 **MLA**로 전환했다는 관측과 함께, 벤치마크/활성 파라미터 등은 2차 정보이니 모델 카드로 검증이 필요하다는 코멘트가 이어졌다 ([stochasticchasm](https://twitter.com/stochasticchasm/status/2013268543064715629), [eliebakouch](https://twitter.com/eliebakouch/status/2013272478018048209), [gm8xx8](https://twitter.com/gm8xx8/status/2013310047770599448), [casper_hansen_](https://twitter.com/casper_hansen_/status/2013294519546978719)).
- **Day-0 배포 생태계**: `mlx-lm`, LM Studio(MLX), Ollama, vLLM, OpenCode(HF Inference Providers) 등에서 빠르게 지원이 붙었다 ([awnihannun](https://twitter.com/awnihannun/status/2013286079470645353), [awnihannun](https://twitter.com/awnihannun/status/2013316769163751662), [lmstudio](https://twitter.com/lmstudio/status/2013339758139789389), [ollama](https://twitter.com/ollama/status/2013372316021834086), [vllm_project](https://twitter.com/vllm_project/status/2013421647215407587), [victormustar](https://twitter.com/victormustar/status/2013297272025424120), [Everlier](https://twitter.com/Everlier/status/2013383690756276454)).

시간 되면 [ARC AGI 2025 Report](https://x.com/arcprize/status/2013369761250582794?s=46)도 확인해보는 것을 권한다.

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [https://news.smol.ai/](https://news.smol.ai/), [@smol_ai](https://x.com/Smol_AI)

---

## AI Twitter Recap

### “memory”와 컨텍스트 확장을 위한 새로운 아키텍처

- **STEM (Scaling Transformers with Embedding Modules)**: Carnegie Mellon + Meta의 접근으로, MoE식 동적 라우팅 없이 Transformer의 **parametric memory**를 확장하려는 시도다. 핵심 교체점은 FFN up-projection의 약 **1/3**을 제거하고 **token-indexed embedding lookup**으로 대체하되, **gate + down-projection**은 dense로 유지하는 것. lookup이 정적(static)이라 런타임 라우팅 오버헤드/불안정을 피하고, **CPU offload + async prefetch**까지 가능해져 **모델 용량을 토큰당 FLOPs 및 디바이스 간 통신량에서 분리**할 수 있다는 주장이다 ([overview](https://twitter.com/TheTuringPost/status/2013011864880660495), [step-by-step](https://twitter.com/TheTuringPost/status/2013011880210731167), [why MoE can be inefficient in practice](https://twitter.com/TheTuringPost/status/2013011892672086377)).
- **실무 포인트**: “sparse capacity”가 반드시 MoE 라우터 + expert 병렬을 의미할 필요는 없고, 정적 희소성은 **시스템 친화적**(예측 가능한 접근 패턴, 통신 감소)일 수 있다.
- **RePo (Context Re-Positioning) from Sakana AI**: 내용 관련성에 따라 위치 구조를 **재정렬**할 수 있게 하는 경량 모듈로, attention 기하(geometry)를 재구성해 멀리 있는 중요한 항목을 “가까이 끌어오고” 노이즈는 밀어내는 효과를 노린다. Cognitive Load Theory 관점에서, 고정 토큰 인덱스가 모델 용량을 어지러운 입력 정리에 낭비하게 만든다고 보고, **노이즈가 있는 컨텍스트, 구조화 데이터, 장거리 의존성**에서의 강건성을 목표로 한다 ([announcement](https://twitter.com/SakanaAILabs/status/2013046887746843001), [code](https://twitter.com/SakanaAILabs/status/2013232698672742472), [repo link](https://twitter.com/SakanaAILabs/status/2013232698672742472)).
- **실무 포인트**: retrieval/packing 트릭을 보완하는 성격으로, 단순히 더 나은 retrieval이 아니라 **적응형 순서(adaptive ordering)**를 위한 아키텍처 레버로 볼 수 있다.

### 모델 출시: GLM-4.7-Flash와 “MLA + small MoE” 흐름

- **Zhipu AI GLM-4.7-Flash**: **30B-class 로컬 코딩/에이전트 모델**로 공개됐고, 가볍고 배포 친화적이라고 포지셔닝했다. 코딩 + 에이전트 사용, 번역/롱컨텍스트/창작 글쓰기도 권장한다고 했다 ([launch](https://twitter.com/Zai_org/status/2013261304060866758), [“we built it”](https://twitter.com/louszbd/status/2013262379874693155)). 이후 **GLM-4.7-Flash는 30B-A3B MoE 모델**이라고 명확히 했다 ([spec](https://twitter.com/Zai_org/status/2013280523871752319)).
- **커뮤니티/분석가 코멘트(아키텍처)**: GLM이 **MLA**로 전환했고, down-projection 이후의 비전형적인 head dim 및 더 많은 head count 등(Qwen/DeepSeek 스타일과 유사) 트렌드를 따른다는 관측이 나왔다 ([stochasticchasm](https://twitter.com/stochasticchasm/status/2013268543064715629), [eliebakouch](https://twitter.com/eliebakouch/status/2013272478018048209)). 또 다른 요약에서는 토큰당 **~3B active**를 주장하며 **SWE-bench Verified**, τ²-Bench, HLE, BrowseComp에서 강한 포지션, **LCB**는 Qwen이 앞서는 영역이라고 언급했다 ([gm8xx8](https://twitter.com/gm8xx8/status/2013310047770599448)). 다만 모델 카드 검증 전에는 2차 정보로 취급하는 편이 안전하다.
- **“Compression” 내러티브**: “GLM-4.5 110B → GLM-4.7 31B” 같은 식으로 큰 모델을 작은 모델로 압축한다는 해석도 있으나, 이는 확정된 학습 레시피라기보다 해석에 가깝다. 또한 **GLM-4.7V**와 Qwen3-VL 비교를 예고하는 분위기도 있다 ([casper_hansen_](https://twitter.com/casper_hansen_/status/2013294519546978719)).
- **툴링에서의 소형 모델 재부상**: 동기식 코딩에서 **속도/지연시간**과 “충분히 괜찮은” 지능을 중시하는 엔지니어가 늘며, >95%의 인터랙티브 작업에서는 초거대 모델의 체감 수익이 줄고 **빠른 추론(inference)**이 전선이 된다는 관측이 공유됐다 ([amanrsanger](https://twitter.com/amanrsanger/status/2013387140537950715)).

### 추론(inference)·배포 인프라: 로컬 런타임, vLLM/MLX, “풀스택” 시스템 논문

- **GLM-4.7-Flash Day-0 생태계 지원**: 공개 직후 다양한 런타임/툴에서 빠르게 지원이 추가됐다.
- **mlx-lm**: **mlx-lm 0.30.3**에서 GLM 4.7 Flash 지원, M5 32GB에서 4-bit 성능으로 (~**43 tok/s** 생성, **~800 tok/s** prefill) 보고가 있었다 ([awnihannun](https://twitter.com/awnihannun/status/2013286079470645353)). 이후 릴리스 노트에 continuous batching/분산 개선 및 autoAWQ/autoGPTQ 지원이 언급됐다 ([awnihannun](https://twitter.com/awnihannun/status/2013316769163751662)).
- **LM Studio**: Apple Silicon용 **MLX**로 Mac에서 **30B 로컬 코딩 에이전트**로 제공된다는 소개가 나왔다 ([lmstudio](https://twitter.com/lmstudio/status/2013339758139789389)).
- **Ollama**: **Ollama v0.14.3+ (pre-release)**에서 제공된다고 안내됐다 ([ollama](https://twitter.com/ollama/status/2013372316021834086)).
- **vLLM**: vLLM 프로젝트에서 “Day-0 support” PR을 예고/공유했다 ([vllm_project](https://twitter.com/vllm_project/status/2013421647215407587)).
- **opencode + HF inference providers**: Hugging Face Inference Providers를 통해 OpenCode에 통합됐고 ([victormustar](https://twitter.com/victormustar/status/2013297272025424120)), Ollama + Harbor로 로컬 GLM-4.7-Flash를 돌린 예시도 공유됐다 ([Everlier](https://twitter.com/Everlier/status/2013383690756276454)).
- **Huawei/중국 추론 시스템 “2025 플래그십” 요약(2차 요약)**: KV-cache 용량 한계, PD split/merge 활용, 하이브리드 스케줄링, cache affinity/load balance, KVCache 중심 agent memory 등을 겨냥한 시스템 아이디어가 조밀하게 정리됐다는 요약이 공유됐다 ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2013127635589800172)).
- **실무 포인트**: 고립된 커널 최적화에서 **end-to-end SLO-goodput** 시스템 설계로 무게중심이 이동 중이라는 관측이다.
- **Cerebras vs GPU 트레이드오프**: 컴퓨터 아키텍처에서 “공짜는 없다”는 요지로, Cerebras는 일반적인 GPU 친화 워크로드에서 FLOPs/메모리 효율을 희생하는 대신 대역폭/지연시간을 사서, 다른 곳에서 어려운 초저지연 소형 모델 사례를 가능하게 한다는 주장이다 ([itsclivetime](https://twitter.com/itsclivetime/status/2013084127218852207)). 관련해 “Codex on Cerebras”가 에이전트 harness 기대치를 재설정할 수 있다는 추측도 있었다 ([dbreunig](https://twitter.com/dbreunig/status/2013285271438311608)).

### 에이전트, 메모리, 개발 워크플로: MCP 논쟁부터 샌드박스·RLM까지

- **에이전트 메모리: 파일시스템 vs DB**: “**files are all you need**”(Anthropic/Letta/LangChain/LlamaIndex 패턴) vs “**filesystem is a bad DB**”(검색 인덱스/락/로그 재구현 경고) 두 진영을 정리한 스레드가 공유됐다. 단순성 vs 스케일, 멀티모달 데이터, 동시성, 보안/권한, 코딩 중심 post-training으로 인한 CLI 친숙성 등이 축이었다 ([helloiamleonie](https://twitter.com/helloiamleonie/status/2013256958535401503), [Vtrivedy10](https://twitter.com/Vtrivedy10/status/2013341279418020093)).
- **DSPy에 RLM(Recursive Language Models) 도입**: DSPy가 `dspy.RLM`(v3.1.2)을 출시하며 기존 Signature에 plug-and-play를 강조했다 ([isaacbmiller1](https://twitter.com/isaacbmiller1/status/2013371005960401327)). 새로운 실험 공간/생태계 잠금 해제라는 반응도 나왔다 ([a1zhang](https://twitter.com/a1zhang/status/2013379266545615130), [kmad](https://twitter.com/kmad/status/2013405979967107563)).
- **실무 포인트**: RLM은 단일 컨텍스트 창에 전부 “밀어넣기” 대신, **롱컨텍스트/반복 처리(iterative processing)**를 위한 새 레버로 볼 수 있다는 관점이다.
- **샌드박스와 “agent harness”**: 진짜 차별점은 기본 모델이 아니라 harness(툴링, 스킬, 격리, 재시도, 신뢰 가능한 실행 루프)라는 주장들이 이어졌다. 예로 “droid”의 `/create-skill`로 세션을 재사용 스킬로 만드는 흐름 ([matanSF](https://twitter.com/matanSF/status/2013026060678648032)), 샌드박스의 지연/지속성 질문 ([ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2013282908149002597)), 빌드 시스템 job-retry UX 불만 ([charliermarsh](https://twitter.com/charliermarsh/status/2013284345075609623)) 등이 언급됐다. 또한 “droid”가 기업 평가에서 Claude Code/Codex/Gemini CLI보다 낫다고 주장하며 harness를 이유로 든 글도 있었다 ([matanSF](https://twitter.com/matanSF/status/2013314451756458127)).
- **오픈소스 에이전트 프레임워크**:
  - **Claude Cowork**: Claude Opus 4.5, Gemini 3 Pro, GPT-5.2와 함께 동작하는 오픈소스 에이전트 harness가 공유됐다 ([Saboo_Shubham_](https://twitter.com/Saboo_Shubham_/status/2013090887736472047)). PDF→markdown 변환으로 환각을 줄이고 문서 이해를 개선했다는 추가 사례도 있었다 ([jerryjliu0](https://twitter.com/jerryjliu0/status/2013378183177887792)).
  - **StirrupJS**: 최소 스캐폴딩 + 강한 기본값(툴, MCP, 브라우징, 샌드박스)과 멀티모달 지원을 강조하는 TypeScript 에이전트 프레임워크가 소개됐다 ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2013294230052212792)).

### 안전, 평가(evals), 신뢰성: 프로브, 페르소나 드리프트, 검색 공격

- **Anthropic “Assistant Axis”(페르소나 드리프트)**: 오픈 웨이트 모델이 긴 대화에서 “Assistant” 페르소나에서 벗어날 수 있고, 코딩 맥락은 안정화되지만 치료/철학 맥락은 드리프트를 키운다는 결과를 공유했다. 페르소나 구성/안정화, **activation capping** 완화책을 제안하며, 드리프트로 인해 유해한 “사랑에 빠짐” 행동(고립/자해 유도) 사례를 경고했다 ([thread start](https://twitter.com/AnthropicAI/status/2013356793477361991), [drift contexts](https://twitter.com/AnthropicAI/status/2013356806647542247), [paper+demo](https://twitter.com/AnthropicAI/status/2013356816843866605), [harm example + mitigation](https://twitter.com/AnthropicAI/status/2013356811647066160)).
- **Google DeepMind: 프로덕션에서 activation probes**: 실사용 오남용 리스크 분류를 위한 “새로운 activation probe 아키텍처”를 소개했고, Gemini의 **실서비스 배포**에 활용됐다고 밝혔다 ([ArthurConmy](https://twitter.com/ArthurConmy/status/2013285602070770036)). Rohin Shah는 probes를 “저렴한 분류기” 레버로 강조했고 ([rohinmshah](https://twitter.com/rohinmshah/status/2013330607611261066)), Neel Nanda는 프로덕션 안전 분류기 엔지니어링의 현실(부작용, 오탐, 효율)을 짚으며 논문을 링크했다 ([NeelNanda5](https://twitter.com/NeelNanda5/status/2013364781512827328)).
- **검색/리트리버 조작(“Arbitrary Content Injection”)**: 검색/리트리벌 스택이 하이재킹되어 상위 결과에 임의 콘텐츠를 밀어넣을 수 있고, retriever/reranker/LLM judge에 영향을 준다는 논문이 소개됐다 ([ManveerTamber](https://twitter.com/ManveerTamber/status/2013025485358235998)).
- **RAG 관측가능성(observability)**: 프로덕션 RAG는 지연/처리량과 응답 품질을 함께 관측해야 하며, LLM-judge와 사람 피드백의 균형이 중요하다는 메시지가 공유됐다 ([DeepLearningAI](https://twitter.com/DeepLearningAI/status/2013325617689719199)).

### 멀티모달·미디어 도구: 실시간 음성, 브라우저 비전, 생성 비디오

- **Microsoft VibeVoice(오픈소스 실시간 TTS)**: 첫 오디오 지연 ~**300 ms**, 스트리밍 텍스트 입력, 최대 4명 멀티 스피커, 최대 90분 장문 안정성을 주장했다. **7.5 Hz**의 semantic+acoustic token, 구조용 LM과 음향 디테일용 diffusion head를 사용하며 MIT 라이선스/“research-only”로 소개됐다 ([LiorOnAI](https://twitter.com/LiorOnAI/status/2013220214217879931), [repo](https://twitter.com/LiorOnAI/status/2013220215249592548)).
- **WebGPU 브라우저 비전 데모**: WebGPU로 브라우저에서 “YOLO26” 실시간 포즈/탐지를 시연했고, 관련 모델/데모 Hugging Face 컬렉션도 공유됐다 ([mervenoyann](https://twitter.com/mervenoyann/status/2013224180813115626), [HF link](https://twitter.com/mervenoyann/status/2013224398824632484)).
- **fal에서 비디오 생성 제품화**: Wan 2.6 i2v Flash(최대 15초, 선택적 오디오) ([fal](https://twitter.com/fal/status/2013292351192490257)), Vidu Q2 reference-to-video(멀티 레퍼런스/얼굴 레퍼런스) ([fal](https://twitter.com/fal/status/2013374170378158349)), Flux.2 [klein] 트레이너 및 outpaint/zoom/object remove/background remove용 LoRA 공개 ([fal](https://twitter.com/fal/status/2013313891057455265), [LoRAs](https://twitter.com/fal/status/2013361738423369791)).
- **초소형 모델의 함수 호출(function calling)**: 270M 파라미터 기반 함수호출 모델을 no-code 데모로 미세조정/내보내기 하는 가이드인 **FunctionGemma Tuning Lab**이 소개됐다 ([osanseviero](https://twitter.com/osanseviero/status/2013241128934404301)).
- **Web World Models (WWMs)**: “규칙과 상상 분리” 아이디어로, 결정론적 웹 코드 물리 레이어가 먼저 상태를 업데이트한 뒤 LM이 그 상태에서 설명을 생성해 일관성을 유지한다는 접근이 소개됐다 ([TheTuringPost](https://twitter.com/TheTuringPost/status/2013016473514717330)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[4x AMD R9700 (128GB VRAM) + Threadripper 9955WX Build](https://www.reddit.com/r/LocalLLaMA/comments/1qgdb7f/4x_amd_r9700_128gb_vram_threadripper_9955wx_build/)** (Activity: 508): 4x **AMD Radeon AI PRO R9700**(각 `32GB` VRAM, 총 `128GB`) + **AMD Ryzen Threadripper PRO 9955WX** 구성의 로컬 대형 모델(120B+ 파라미터)용 서버 빌드 소개다. 데이터 프라이버시를 강조했고, 비용은 약 `9,800€`(지자체 보조금 50%로 실질 `4,900€`)로 언급됐다. `llama.cpp` 벤치에서 **GLM-4.7-REAP-218B-A32B-Q3_K_M**이 생성 `17.48` tok/s를 기록했고, **PCIe 5.0**이 Tensor Parallelism 대비 Pipeline Parallelism 성능에 도움이 된다는 언급이 있다. 소프트웨어는 **rocm 7.1.1**을 사용했으며, 향후 **NVIDIA RTX Pro 6000** 전환 가능성도 고민 중이라고 했다.
- **RoterElephant**: 다중 R9700 vs 단일 NVIDIA RTX Pro 6000 Blackwell의 트레이드오프(총 VRAM vs 아키텍처/소프트웨어 효율)를 비교하며, 단순 VRAM 합계뿐 아니라 워크로드 적합성과 호환성을 함께 보라고 지적했다.
- **Obvious-Nobody-9592**: 총 9800유로 지출과 부품 수급/비용에 대해 질문하며 현실적인 조달 난이도를 부각했다.
- **Ulterior-Motive_**: 유사한 빌드를 언급하며, 커뮤니티 내 고성능 로컬 AI 시스템 관심이 넓게 존재함을 보여줬다.
- **[128GB VRAM quad R9700 server](https://www.reddit.com/r/LocalLLaMA/comments/1qfscp5/128gb_vram_quad_r9700_server/)** (Activity: 738): PowerColor R9700 4장(총 `128GB` VRAM) + `128GB` RAM 구성으로, ROCm 백엔드에서 프롬프트 처리(prompt processing) 성능 최적화를 목표로 한 빌드다. `$7,035` 비용과 **MSI MEG X570 GODLIKE**, **AMD Ryzen 7 5700X** 등 부품이 언급됐고, `llama 7B Q4_0`, `qwen3moe 30B.A3B Q8_0` 등에서 프롬프트 처리 속도가 최대 `6524.91 t/s`까지 나왔다는 벤치가 소개됐다. Qwen3-Next 모델 이슈, 저장장치/PCIe 슬롯 구성의 제약도 언급됐다.
- **[Qwen 4 might be a long way off !? Lead Dev says they are “slowing down” to focus on quality.](https://www.reddit.com/r/LocalLLaMA/comments/1qfv1ms/qwen_4_might_be_a_long_way_off_lead_dev_says_they/)** (Activity: 575): 리드 개발자인 **Junyang Lin**의 트윗(이미지)로, Qwen 시리즈가 빠른 반복보다 품질에 초점을 맞추기 위해 속도를 늦추겠다는 방향 전환을 시사한다. Qwen 4 출시가 지연될 수 있고, 장기적 개선을 위한 연구 투자로 해석됐다.
- **AvocadoArray**: 잦은 소규모 업데이트가 GPU 학습 수요/비용만 키울 수 있어, 큰 개선에 집중하는 편이 낫다고 주장했다.
- **frozen_tuna**: Meta의 **LLaMA 4** 사례처럼, 품질을 위해 지연했는데 결과가 기대에 못 미치면 역풍이 있을 수 있다고 지적했다.
- **Cool-Chemical-5629**: Qwen의 강점인 다양한 사이즈 라인업은 유지하되 품질 개선이 있길 기대한다는 반응을 보였다.
- **[Local AI Final Boss — M3 Ultra v.s. GB10](https://www.reddit.com/r/LocalLLM/comments/1qf5l2n/local_ai_final_boss_m3_ultra_vs_gb10/)** (Activity: 404): **Mac Studio M3 Ultra**와 **ASUS GX10 (GB10)** 비교 세팅 이미지로, AI 워크로드에서의 성능 비교/실험 맥락이 논의됐다. **EXO**로 클러스터링해 프롬프트 처리 속도를 올리자는 제안도 있었다.
- **No_Conversation9561**: EXO 클러스터링을 통한 프롬프트 처리 가속을 언급하며 관련 링크/이슈를 안내했다.
- **adspendagency**: 비즈니스 고객에게 M3를 납품해온 경험을 공유하며 GB10의 성능이 궁금하다고 했다.
- **belgradGoat**: 500GB RAM 급 대형 모델 운용 시 Mac Studio 안정성(메모리 한계 근접 시 불안정)을 우려했다.
- **[The Search for Uncensored AI (That Isn’t Adult-Oriented)](https://www.reddit.com/r/LocalLLaMA/comments/1qfq9ez/the_search_for_uncensored_ai_that_isnt/)** (Activity: 696): “과도하게 제한된 기업 AI”와 “저노력 성인용 최적화 모델” 사이의 공백을 지적하며, 성인 지향이 아닌 ‘검열 없는(uncensored)’ 고급 모델/프로젝트/플랫폼을 찾는 글이다. 비교 리소스로 [Uncensored General Intelligence Leaderboard](https://huggingface.co/spaces/DontPlanToEnd/UGI-Leaderboard)도 언급됐다.
- **KayLikesWords**: 오픈소스 모델을 디센서링하면 지능이 떨어지는 경우가 많고, 대형 조직은 리스크 때문에 그런 모델을 만들지 않는다고 지적했다.
- **EstimateLeast9807**: 비교용 리소스로 리더보드를 링크했다.
- **noctrex**: ‘Dolphin-Mistral-24B-Venice-Edition’ 등 사례를 들며, 다만 추론에는 약할 수 있다고 언급했다.
- **[zai-org/GLM-4.7-Flash · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1qh5wdq/zaiorgglm47flash_hugging_face/)** (Activity: 1047): **GLM-4.7-Flash**는 `30B` 파라미터의 `MoE` 아키텍처로, 효율적 배포와 성능을 목표로 설계됐다고 소개된다. `AIME`, `GPQA` 등에서 강하다는 주장과 함께, `vLLM`, `SGLang` 등으로 로컬 추론이 가능하다는 설명이 있다. `MLA`로 KV cache 메모리 풋프린트를 줄여 `200k` 컨텍스트를 더 많은 사용자가 다룰 수 있다는 반응도 나왔다. 설치/사용법은 [Hugging Face page](https://huggingface.co/zai-org/GLM-4.7-Flash)에 정리돼 있다.
- **MLA 효과**: MLA가 KV cache 메모리 사용량을 크게 줄여 200k 컨텍스트 운용을 돕는다는 요지가 반복됐다.
- **스펙 혼동 지적**: ‘30b’ 설명과 소스에서 보이는 표기가 다를 수 있다는 지적이 있어, 공식 스펙 확인이 필요하다는 반응도 있었다.
- **비교 요구**: GLM-4.7-Flash와 70B급 등 대형 모델의 성능/리소스 트레이드오프 비교를 원한다는 의견이 나왔다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Gemini “Math-Specialized version” proves a Novel Mathematical Theorem](https://www.reddit.com/r/singularity/comments/1qcq1ld/gemini_mathspecialized_version_proves_a_novel/)** (Activity: 745): “수학 특화” **Gemini**가 새로운 수학 정리를 증명했다고 하며, 관련 [tweet](https://x.com/A_G_I_Joe/status/2011213692617285729?s=20)와 [arXiv paper](https://arxiv.org/abs/2601.07222)가 함께 언급됐다. 수학적 추론에 최적화된 학습/아키텍처로 복잡한 증명을 다룰 수 있다는 주장이다.
- **추가 코멘트**: Erdős 문제를 풀어보자는 제안, ‘anto gravity’ 프로젝트의 메모리 오버플로 버그는 못 잡았다는 비판 등, “이론적 돌파”와 “실전 엔지니어링” 간 간극을 지적하는 반응이 섞였다.
- **[BabyVision: A New Benchmark for Human-Level Visual Reasoning](https://www.reddit.com/r/singularity/comments/1qh1omx/babyvision_a_new_benchmark_for_humanlevel_visual/)** (Activity: 488): BabyVision-Mini 벤치마크에서 LLM의 시각 추론 성능이 다양한 연령대 인간(특히 12세)에 미치지 못한다는 막대그래프가 공유됐다. Gemini3-Pro-Preview가 LLM 중 최고 정확도를 보였다고 한다. 관련 자료로 [arXiv paper](https://arxiv.org/html/2601.06521v1)도 언급됐다.
- **추가 코멘트**: 멀티모달 사전학습과 비전 RL을 스케일하면 격차를 줄일 수 있고, 이는 로보틱스 등에 중요하다는 의견, Gemini와 Claude Opus의 프론트엔드 강점 비교 등이 나왔다.
- **[Gemini 3 Pro Model Card is Out](https://www.reddit.com/r/Bard/comments/1p0935y/gemini_3_pro_model_card_is_out/)** (Activity: 996): **DeepMind의 Gemini 3 Pro Model Card**가 공개됐다는 주장으로, `1M token` 컨텍스트, 텍스트/이미지/오디오/비디오 입력 처리, `64K token` 출력 한도, 지식 컷오프가 *January 2025*까지라는 요약이 공유됐다. 원 링크가 내려갔고 아카이브가 [here](https://archive.org/details/gemini-3-pro-model-card)로 제시됐다.
- **[Gemini Drops: Gemini releases this page to keep up with what’s being released](https://www.reddit.com/r/GeminiAI/comments/1psebc0/gemini_drops_gemini_releases_this_page_to_keep_up/)** (Activity: 540): “Gemini Drops”라는 릴리스/팁/커뮤니티 활용을 모아보는 페이지 스크린샷이 공유됐고, 링크는 [Gemini Drops](https://gemini.google/gemini-drops/)로 제시됐다. 빠른 출시 속도로 전용 업데이트 허브가 필요하다는 반응과 RSS 피드 요청 등이 나왔다.
- **[Gemini introduces Personal Intelligence](https://www.reddit.com/r/singularity/comments/1qcscjz/gemini_introduces_personal_intelligence/)** (Activity: 513): Gemini 앱에서 *Personal Intelligence* 기능을 출시했으며, 초기에는 미국의 Google AI Pro/AI Ultra 구독자에게 제공된다고 한다. Google 앱과 연동해 개인화 추천을 제공하고, 개인 계정에만 적용되며 Workspace는 제외라고 요약됐다.
- **추가 코멘트**: 단계적 롤아웃/향후 확장 계획, Google Photos 등 개인 데이터 기반의 추천 사례 공유, 개인화 광고로의 수익화 우려 등이 나왔다.
- **[Google Deepmind CEO: China just “months” behind U.S. AI models](https://www.reddit.com/r/singularity/comments/1qflbj9/google_deepmind_ceo_china_just_months_behind_us/)** (Activity: 734): DeepMind CEO **Demis Hassabis**가 CNBC 인터뷰에서 중국 AI가 미국/서방 대비 “몇 달” 뒤처졌을 뿐이라고 말했다는 내용이며, 출처로 [Source](https://www.cnbc.com/amp/2026/01/16/google-deepmind-china-ai-demis-hassabis.html)가 링크됐다. 비용 효율적 오픈소스 모델이 경쟁력을 가질 수 있다는 주장과, 인프라 격차/전략적 발언 가능성을 두고 논쟁이 있었다.
- **[Cursor AI CEO shares GPT 5.2 agents building a 3M+ lines web browser in a week](https://www.reddit.com/r/singularity/comments/1qgb1j5/cursor_ai_ceo_shares_gpt_52_agents_building_a_3m/)** (Activity: 1069): Cursor CEO Michael Truell이 **GPT 5.2**로 1주일간 3M+ 라인의 브라우저 코드를 만들었다는 데모를 공유했다. 렌더링 엔진/JS VM 등 복잡한 시스템을 에이전트가 지속적으로 생성·조정하는 과정을 실시간 시각화했고, 출처는 [Source](https://x.com/i/status/2012825801381580880)로 링크됐다.
- **[Cursor AI CEO shares GPT 5.2 agents building a 3M+ lines web browser in a week](https://www.reddit.com/r/OpenAI/comments/1qgbfpb/cursor_ai_ceo_shares_gpt_52_agents_building_a_3m/)** (Activity: 657): 동일 이슈가 /r/OpenAI에도 공유됐고, 브라우저 자체 시연이 부족하다는 회의론과 시각화의 임팩트에 대한 호평이 함께 나왔다.
- **[CEO of Cursor said they coordinated hundreds of GPT-5.2 agents to autonomously build a browser from scratch in 1 week](https://www.reddit.com/r/singularity/comments/1qd541a/ceo_of_cursor_said_they_coordinated_hundreds_of/)** (Activity: 2600): 수백 개의 GPT-5.2 에이전트를 조율해 Rust로 3M+ 라인의 브라우저를 1주일 만에 만들었다는 주장으로, HTML 파싱/CSS cascade/커스텀 JS VM 등 구성요소가 언급됐다. 코드/글 링크로 [fastrender](https://github.com/wilsonzlin/fastrender)와 [Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)이 제시됐다.
- **[Microsoft pauses Claude Code rollout after Satya intervention](https://www.reddit.com/r/ClaudeAI/comments/1qgx6br/microsoft_pauses_claude_code_rollout_after_satya/)** (Activity: 1217): Microsoft가 내부적으로 **Claude Code** 배포를 중단하고 **GitHub Copilot** 사용으로 전환했다는 글이다. Copilot이 격차를 “대체로” 줄였다는 커뮤니케이션이 있었다고 하며, 일부 고우선 R&D는 예외적으로 Anthropic API 접근이 가능하다고 요약됐다.
- **[25 Claude Code Tips from 11 Months of Intense Use](https://www.reddit.com/r/ClaudeAI/comments/1qgccgs/25_claude_code_tips_from_11_months_of_intense_use/)** (Activity: 498): **Claude Code** 사용 팁을 모은 글로, status line 커스터마이징, `/usage`·`/chrome` 같은 슬래시 커맨드, GitHub CLI 활용, 복잡한 작업 분해, tmux/Docker 활용 등 워크플로 최적화를 다룬다. 전체 팁은 [GitHub](https://github.com/ykdojo/claude-code-tips)에 있다고 한다.
- **[DeepSeek introduces Engram: Memory lookup module for LLMs that will power next-gen models (like V4)](https://www.reddit.com/r/singularity/comments/1qb4zi4/deepseek_introduces_engram_memory_lookup_module/)** (Activity: 1015): DeepSeek의 Engram 모듈(“Conditional Memory via Scalable Lookup…”)이 해시 기반 N-gram 임베딩으로 결정론적 `O(1)` lookup memory를 구현해, 메모리와 컴퓨트를 별도의 스케일 축으로 분리한다는 주장이다. 자료는 [GitHub](https://github.com/deepseek-ai/Engram/blob/main/Engram_paper.pdf)로 링크됐다.
- **[Nvidia: End-to-End Test-Time Training for Long Context aka Being Able To Update A Model’s Weights In Real-Time As You Use It | “TTT changes the paradigm from retrieving info to learning it on the fly…the TTT model treats the context window as a dataset & trains itself on it in real-time.” [R]](https://www.reddit.com/r/MachineLearning/comments/1qd696s/nvidia_endtoend_testtime_training_for_long/)** (Activity: 288): **TTT-E2E**(End-to-End Test-Time Training)로 컨텍스트를 데이터셋처럼 다뤄 추론 중 실시간으로 일부 가중치를 업데이트하는 접근을 소개한다. 2-루프(내부 미니 GD + 외부 메타러닝)로 장문 컨텍스트에서 full attention 대비 `2.7x` 빠르고 `128K`에서 일정 지연을 주장하며, 코드는 [publicly available](https://github.com/test-time-training/e2e)로 제공된다고 한다.
- **[World’s first megawatt-level ‘windmill’ airship rises 6,560 ft and feeds grid](https://www.reddit.com/r/singularity/comments/1qhbhi3/worlds_first_megawattlevel_windmill_airship_rises/)** (Activity: 913): 헬륨 비행선 기반 S2000 공중 풍력 시스템(12 터빈)이 `6,560 ft`에서 최대 `3 megawatts` 정격을 기록했고 `385 kWh`를 그리드에 공급했다는 내용이다. 경제성/유지보수 우려와 대안 설계 논의가 뒤따랐다.
- **[SpaceX now operates the largest satellite constellation in Earth orbit](https://www.reddit.com/r/singularity/comments/1qgf4mh/spacex_now_operates_the_largest_satellite/)** (Activity: 1140): SpaceX가 `9,500+` 위성(그중 `8,500+` 운영)을 운용하며 `200–400 Mbps`, `~30 ms` 지연을 제공한다는 요약이다. FCC의 Gen2 `7,500` 추가 승인 언급과, 감시/시각화 부재 등에 대한 회의적 반응이 있었다.
- **[NASA’s Artemis II rocket reaches launch pad ahead of first manned Moon mission in 50 years](https://www.reddit.com/r/singularity/comments/1qg2g10/nasas_artemis_ii_rocket_reaches_launch_pad_ahead/)** (Activity: 498): Artemis II 로켓이 Pad 39B에 도착했고, 2026년 2월 초(예: Feb 7) 유인 달 플라이바이를 목표로 한다는 요약이다. SLS 비용/구형 기술 논쟁과 Artemis III/착륙선(Starship/New Glenn) 논의가 뒤따랐다.
- **[Official: Pentagon confirms deployment of xAI’s Grok across defense operations](https://www.reddit.com/r/singularity/comments/1qbo516/official_pentagon_confirms_deployment_of_xais/)** (Activity: 1849): 미 국방부가 xAI의 Grok을 Impact Level 5 환경에서 군/민 운영 지원에 배치한다는 내용이며, 링크는 [Washington Post](https://www.washingtonpost.com/business/2026/01/12/artificial-intelligence-pentagon-hegseth-musk/ec8b407a-f026-11f0-a4dc-effc74cb25af_story.html)로 제시됐다.
- **[Colossus 2 is now fully operational as the first gigawatt data center](https://www.reddit.com/r/singularity/comments/1qfbzzq/colossus_2_is_now_fully_operational_as_the_first/)** (Activity: 740): xAI Colossus 2가 세계 최초 기가와트급 프론티어 AI 데이터센터로 “완전 가동”에 도달했다는 이미지/그래프가 공유됐고, 모델 채택/경쟁력에 대한 회의도 나왔다.

---

## AI Discord Recap

gpt-5.2가 만든 “요약의 요약의 요약”을 번역.

### Agent Tooling, Interop Standards, and Coding Agents

- **Skills Pay the Bills: Vercel Ships an Agent Package Manager**: `@rauchg`가 에이전트 능력(역량)용 오픈 생태계/패키지 매니저로서 Vercel “skills”를 소개했고, `npx skills i vercel-labs/agent-skills` 같은 설치 흐름을 언급했다 ([announcement](https://xcancel.com/rauchg/status/2012345679721771474?s=46)).
- 개발자들은 이를 “툴 통합을 그때그때 배선(wiring)하는 대신 표준화”하는 실용적 방식으로 해석했고, 구현 패턴 참고로 [“React Best Practices”](https://vercel.com/blog/introducing-react-best-practices)도 함께 언급했다.
- **One API to Rule Them All: “Open Responses” Targets Model Swapping Pain**: OpenAI 관련 논의에서 **Open Responses**를 단일 인터페이스로 여러 모델 공급자를 붙이는 **오픈 표준**으로 소개하며, 벤더/모델 전환 시 재작성 비용을 줄이는 엔지니어링 해법으로 포지셔닝했다.
- **Agents Everywhere: Qbit + Devstral + Aider’s Maintenance Anxiety**: Perplexity 사용자들이 오픈소스 코딩 에이전트 프로젝트 **Qbit**를 공유했다 ([qbit-ai/qbit](https://github.com/qbit-ai/qbit)). 다른 디스코드에서는 Devstral 2 Small 추천 및 Aider 유지보수 지속성에 대한 토론이 있었다.

### RLMs, Prompt/Skill Optimization, and Long-Output Automation

- **DSPy Drops RLMs: `dspy.RLM` Lands in 3.1.2**: DSPy 팀이 **`dspy.RLM`**을 **DSPy 3.1.2**에 출시했고, 공지 링크를 공유했다 ([Isaac Miller tweet](https://x.com/isaacbmiller1/status/2013371005960401327)).
- 커뮤니티는 RLMs + GEPA(genetic-pareto)를 조합해 “RLM-as-an-optimizer” 워크플로를 만들거나, 코드/트리를 유지한 채 *극단적으로 긴* 문서 출력 자동화에 쓰는 아이디어를 논의했다.
- **Skill Issue? DSPy Optimizes `skill.md` for Anthropic “Skills”**: `skill.md` 프롬프트를 DSPy로 최적화한다는 글이 공유됐고, 링크는 [“Anthropic skills can be optimized using DSPy”](https://instavm.io/blog/anthropic-skills-can-be-optimized-using-dspy)다.
- **Deno Does the Dirty Work: Local WASM Sandbox for DSPy**: DSPy 로컬 샌드박스/인터프리터로 Deno를 선택한 이유를 WASM 런타임 기반 보안/이식성 트레이드오프로 설명하며, 참고로 [Simon Willison’s Pyodide sandbox note](https://til.simonwillison.net/deno/pyodide-sandbox)를 언급했다.

### GPU Performance Engineering: Kernels, Profiling, and Competitions

- **GPU MODE Goes Modal: Benchmark Stability Beats NCU**: GPU MODE가 측정 안정성을 위해 문제 #3/#4 리더보드를 Modal로 이전했고, 새 “final_nvfp4_dual_gemm” 리더보드와 마감(2026-01-20)을 안내했다 ([leaderboard](https://www.gpumode.com/v2/leaderboard/664?tab=rankings)). 보안/격리로 Nsight Compute 프로파일링이 비활성화되며, 러너 구현은 오픈소스로 추적 가능하다고 했다 ([modal_runner.py](https://github.com/gpu-mode/kernelbot/blob/main/src/runners/modal_runner.py)).
- **Triton vs CuteDSL: “Triton Won This Round”**: CuteDSL로 Triton softmax 성능을 맞추려는 시도에서 PTX/SASS 차이를 조사했고, PR 코드가 공유됐다 ([submarine PR #5](https://github.com/FL33TW00D/submarine/pull/5/files)).
- **CUDA Kernel Bootcamp: Attention Kernels, BF16 Weirdness, and Top‑K Traps**: CUDA causal self-attention 커널, BF16 matmul 디버깅( fp32 레퍼런스 비교, splitK), 그리고 Triton top‑k에서 “로컬 top‑k vs 전역 top‑k” 개념 함정이 논의됐다 ([LeetGPU top‑k selection challenge](https://leetgpu.com/challenges/top-k-selection)).

### Small Models & On-Device Efficiency (Training + Inference)

- **Unsloth Makes 550M Feel Like a Big Deal**: packing + Flash Attention 2로 예산형 환경에서도 ~550M 모델 학습이 가능하다는 공유가 있었고, 컨텍스트 학습 규모 예시로 [short.png](https://cdn.discordapp.com/attachments/1179779344894263297/1462742243227078802/short.png?ex=696ff51f&is=696ea39f&hm=afcc5e95c83e696725e81184b0a630074adf71f403ce54d21e48866c88376040&)와 [long.png](https://cdn.discordapp.com/attachments/1179779344894263297/1462742243562487917/long.png?ex=696ff51f&is=696ea39f&hm=5505f746e0c663dd4edeaae803fb8594386f02134c8225baf1e538db1c927038&)가 링크됐다.
- **Laptop LLM Reality Check: Qwen3 4B on 8GB VRAM + Vulkan Surprise**: 8GB VRAM 노트북에서 Qwen3 4B 2507 추천, VRAM 내 모델+컨텍스트 유지, Q4 미만 양자화(quantization) 회피 조언 등이 공유됐다.
- **Token-Sipping Multi-Agent Comms: Slipstream Claims 82% Savings**: 에이전트 간 통신 프로토콜 Slipstream가 최대 82% 토큰 절감을 주장하며 소개됐다 ([“Slipstream for Agent Communication”](https://huggingface.co/blog/anthonym21/slipstream-for-agent-communication)).

### New Models, Benchmarks, and Evaluation UX

- **NVIDIA Joins the Persona-verse: PersonaPlex-7B-v1 Drops**: NVIDIA의 PersonaPlex-7b-v1이 Hugging Face에 올라왔다는 공유가 있었다 ([nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)).
- **LMArena Adds PDF Uploads (Privacy Questions) + New Image-Edit Entrants**: PDF 업로드의 개인정보 처리에 대한 질문이 나왔고, 정책 링크가 공유됐다 ([Privacy Policy](https://help.lmarena.ai/articles/3765052346-privacy-policy)).
- **Image Edit leaderboard 업데이트**: [Image Edit leaderboard](https://lmarena.ai/leaderboard/image-edit)에 `wan2.5-i2i-preview`가 #21 (1213)로 추가됐고, 변경 이력은 [Leaderboard Changelog](https://lmarena.ai/blog/leaderboard-changelog/)로 추적된다고 했다.
