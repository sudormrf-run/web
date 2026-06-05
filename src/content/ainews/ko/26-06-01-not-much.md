---
title: "NVIDIA가 Cosmos 3와 Nemotron 3 Ultra 공개"
summary:
  - "NVIDIA가 Cosmos 3와 Nemotron 3 Ultra 공개"
  - "MiniMax M3가 1M 컨텍스트로 출시"
  - "Qwen3.7-Plus가 에이전트 기능 확대"
  - "OpenAI 모델과 Codex가 Bedrock에 출시"
  - "Claude Code 버그로 사용량 제한 재설정"
date: 2026-06-01
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-01-not-much.md"
hasHeadline: false
headline: "NVIDIA가 Cosmos 3와 Nemotron 3 Ultra 공개"
tags:
  - NVIDIA
  - Cosmos 3
  - Nemotron
  - MiniMax
  - Codex
isFeatured: false
---

## 헤드라인: NVIDIA가 Cosmos 3와 Nemotron 3 Ultra 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

NVIDIA가 Cosmos 3와 Nemotron 3 Ultra를 앞세워 오픈 모델 논의를 주도했다. Cosmos 3는 물리 AI를 위한 옴니모달 월드 모델 제품군으로, 가중치와 코드, 데이터셋, 미세조정(fine-tuning) 레시피까지 포함한 풀스택 공개로 소개됐다. Nemotron 3 Ultra는 550B 오픈 웨이트 모델로, 커뮤니티에서는 미국계 오픈 모델 중 가장 강력한 후보라는 반응이 나왔다.

---

## AI Twitter Recap

### NVIDIA의 Cosmos 3, Nemotron 3 Ultra, Open Physical AI 추진

- **NVIDIA의 오픈소스 주간**: NVIDIA는 **Cosmos 3**라는 물리 AI용 **옴니모달 월드 모델** 오픈 제품군과 **Nemotron 3 Ultra** 발표로 오픈 모델 논의를 장악했다. Nemotron 3 Ultra는 여러 게시자가 지금까지 가장 강한 미국 오픈 모델이라고 부른 **550B** 오픈 웨이트 모델이다. Cosmos 3는 **가중치, 코드, 데이터셋, 미세조정(fine-tuning) 레시피**를 포함한 풀스택 릴리스로 소개됐고, NVIDIA는 **Runway**를 포함한 파트너들과 함께 월드 모델 오픈 생태계를 만들기 위한 **Cosmos Coalition**도 출범했다 [@NVIDIAAI ecosystem context](https://x.com/NVIDIAAI/status/2061498958283968735), [@runwayml coalition announcement](https://x.com/runwayml/status/2061315089869721682), [@kimmonismus Cosmos thread](https://x.com/kimmonismus/status/2061432501223162241), [@ClementDelangue on NVIDIA’s HF footprint](https://x.com/ClementDelangue/status/2061487081315094906).
- **Cosmos 3가 기술적으로 중요했던 이유**: 로보틱스 수사 너머의 더 구체적인 내용은 Cosmos 3가 **언어, 이미지, 비디오, 오디오, 행동**을 하나의 **Mixture-of-Transformers** 설계로 통합하고, **자기회귀(reasoner)**와 **확산(diffusion) 생성기**를 결합한다는 점이었다. [Artificial Analysis](https://x.com/ArtificialAnlys/status/2061494719998546206)는 Cosmos 3가 자사의 **Text-to-Image**와 **Image-to-Video** 리더보드에서 오픈 웨이트 모델 중 **#1**에 올랐다고 밝혔으며, 생성기가 **구조화된 JSON 프롬프트**를 사용하고 외부 프롬프트 업샘플링 하네스나 자체 reasoner 브랜치로 구동될 수 있다고 설명했다. 별도로 NVIDIA의 하드웨어와 소프트웨어 추진은 **OpenMDW** 프레임워크 채택과 fal 같은 플랫폼의 파트너 생태계 통합으로 확장됐다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2061494719998546206), [@fal](https://x.com/fal/status/2061604121786876307).
- **Nemotron 3 Ultra 반응**: **Nemotron 3 Ultra**에 대한 커뮤니티 반응은 새 오픈 릴리스치고 이례적으로 강했다. 게시자들은 역량과 서빙 특성을 모두 강조했으며, 일부 오픈 평가에서 이미 선두권이고 특정 설정에서는 **300+ tok/s**로 서빙될 수 있다는 주장도 나왔다. 이는 대형 DeepSeek/Kimi급 모델보다 훨씬 빠른 속도다 [@scaling01](https://x.com/scaling01/status/2061379856433107135), [@ctnzr](https://x.com/ctnzr/status/2061483152741175757), [@caspar_br](https://x.com/caspar_br/status/2061505720907182280). Nemotron이 Kimi K2 / DeepSeek V4 같은 동급 모델보다 **덜 sparse**해 보인다는 기술 논의도 있었다. 대략 **~10% active** 대 **~3%** 수준으로, 이는 비용 구조와 동작 모두에 영향을 줄 수 있다 [@eliebakouch](https://x.com/eliebakouch/status/2061607195268038777).

### MiniMax M3, Qwen3.7-Plus, JetBrains Mellum2가 오픈 에이전트 모델 영역 확대

- **MiniMax M3 출시는 오늘 가장 큰 모델 릴리스였다**: M3는 **1M 컨텍스트**, **네이티브 멀티모달리티**, 경쟁력 있는 에이전트 벤치마크를 갖춘 오픈 웨이트 멀티모달 에이전트/코딩 모델로 소개됐다. 출시 파트너 전반에서 반복된 핵심 수치는 **59.0% SWE-Bench Pro**, **66.0% Terminal Bench 2.1**, **74.2% MCP Atlas**였다 [@MiniMax_AI](https://x.com/MiniMax_AI/status/2061425142795034794), [@PBDTokenRouter](https://x.com/PBDTokenRouter/status/2061463048485838935), [@kimmonismus](https://x.com/kimmonismus/status/2061473350766170420). **Novita**, **Vercel AI Gateway**, **Cloudflare AI Gateway**, **OpenClaude**, **Flowith** 등 여러 인프라 벤더가 출시 당일 지원을 내놓으며 이례적으로 빠른 생태계 채택을 시사했다 [@MiniMax_AI on Novita](https://x.com/MiniMax_AI/status/2061398427121201648), [@rauchg](https://x.com/rauchg/status/2061593874498531707), [@gitlawb](https://x.com/gitlawb/status/2061581678871806083).
- **벤치마크와 실제 사용 경험은 엇갈렸다**: M3는 프론트엔드 생성, 비주얼/게임 작업, 가격 대비 성능에서 호평을 받았고, 나란히 비교한 데모에서는 강한 원샷 UI/게임 출력과 Next.js 에이전트 평가에서 주목할 만한 벤치마크 순위를 보였다 [@notjazii](https://x.com/notjazii/status/2061407087293313210), [@lostinlatencyX](https://x.com/lostinlatencyX/status/2061409696649548165), [@rauchg](https://x.com/rauchg/status/2061593874498531707). 그러나 여러 평가자는 **높은 토큰 소비**, **장황한 자기검증 루프**, 긴 작업에서의 간헐적 **요구사항 이탈**도 보고해, M3가 “품질 우선, 효율은 나중” 모델처럼 보이게 했다 [@ZhihuFrontier review](https://x.com/ZhihuFrontier/status/2061493401019957337), [@teortaxesTex skepticism](https://x.com/teortaxesTex/status/2061432151183171702).
- **Qwen3.7-Plus**: Alibaba는 **Qwen3.7-Plus**를 **GUI와 CLI 조작**, 시각 추론, 코딩, 검색 증강 QA를 통합한 **멀티모달 인터랙티브 하이브리드 에이전트**로 출시했다. Alibaba Cloud Model Studio를 통해 **API로 사용 가능**하며, **Cline** 같은 도구에도 빠르게 추가됐다 [@Alibaba_Qwen launch](https://x.com/Alibaba_Qwen/status/2061506641120641494), [@cline](https://x.com/cline/status/2061580233778790439). 이번 출시는 오픈에 가까운 아시아 연구소들이 더 이상 “채팅 모델”만 내놓는 것이 아니라, 완전한 **에이전트 가능 멀티모달 시스템**을 내놓고 있다는 흐름을 강화한다.
- **JetBrains Mellum2**: JetBrains는 **Mellum2**를 공개했다. 이 모델은 **활성 파라미터 2.5B**를 가진 **12B MoE** 모델로, 약 **11T 토큰**으로 학습되고 **RLVR**로 사후학습됐으며 **base / SFT / RL 체크포인트**와 기술 보고서를 함께 제공한다 [@nv_pavlichenko](https://x.com/nv_pavlichenko/status/2061438808290172935), [@jetbrains](https://x.com/jetbrains/status/2061444430884675791). 의도한 틈새가 특히 흥미롭다. **라우팅, RAG, 서브 에이전트, IDE 사용**을 위한 **초저지연 추론(inference)**이며, 곧바로 **vLLM**에 들어갔다 [@vllm_project](https://x.com/vllm_project/status/2061621691995005301#m). 이는 벤치마크 추격형 프론티어 릴리스라기보다, 개발자 워크플로를 위한 “작고 빠른 오픈 모델” 전략에 가깝다.

### 에이전트, 샌드박스, 메모리, 검색이 실제 제품 표면이 되고 있다

- **스택은 모델 호출에서 에이전트 런타임으로 이동 중**: 여러 출시가 이제 핵심 엔지니어링 레버리지는 모델보다 **하네스**에 있다는 생각으로 수렴했다. **Perplexity의 “Search as Code”**가 가장 명확한 예다. 반복적인 검색 도구 호출 대신 모델이 검색 SDK를 대상으로 **Python**을 작성해 맞춤형 랭킹 파이프라인, 인덱스에 대한 map-reduce, 배칭, 집계, 낮은 토큰 오버헤드를 가능하게 한다. Perplexity는 이 아키텍처로 내부 **WANDR** 벤치마크가 **0.152**에서 **0.386**으로 상승했다고 보고했다 [@perplexity_ai](https://x.com/perplexity_ai/status/2061506359326384319), [@AravSrinivas](https://x.com/AravSrinivas/status/2061575845056278971).
- **관리형 에이전트와 샌드박스가 표준화되고 있다**: Google은 **Gemini API의 Managed Agents**를 상세히 설명했다. 단일 API 호출로 추론하고, 코드를 작성/실행하며, 파일을 관리하고, 호스팅된 **Linux sandbox** 안에서 동작하는 에이전트를 띄울 수 있다 [@_philschmid](https://x.com/_philschmid/status/2061457703210197273), [@GoogleAIStudio](https://x.com/GoogleAIStudio/status/2061452967530701090). LangChain도 **Deep Agents**, **Context Hub**, **LangSmith Sandboxes/Engine**을 중심으로 비슷한 아이디어를 밀며, 영속 컨텍스트, 에이전트 수명주기 도구, 자동 실패 분류를 강조했다 [@LangChain](https://x.com/LangChain/status/2061432934993674267), [@hwchase17](https://x.com/hwchase17/status/2061496556608504043).
- **메모리는 여전히 빠진 기본 구성요소**: 반복적으로 나온 불만은 거대한 컨텍스트 윈도우가 여전히 **세션 간 메모리**를 해결하지 못한다는 점이었다. **HydraDB** 스레드는 “RAG + 수동 컨텍스트 주입”이 메모리로 잘못 불려 왔으며, 실제 영속 세션 지식은 여전히 충분히 제공되지 않는다고 주장했다 [@kimmonismus](https://x.com/kimmonismus/status/2061454202883432501). 관련 연구 스레드는 **AdaCoM** 같은 재사용 가능한 컨텍스트 관리 정책을 지목했다. AdaCoM은 별도 LLM을 RL로 학습시켜 고정된 에이전트의 컨텍스트를 가지치기/보존하게 한다 [@dair_ai](https://x.com/dair_ai/status/2061455253325971789).
- **보안은 엔터프라이즈 에이전트의 관문 문제로 남아 있다**: Microsoft Security Intelligence는 **90개 이상 redhat-cloud-services 패키지**에 영향을 준 주요 **npm 공급망 침해**에 대해 주목할 만한 경고를 냈다. 여기에는 npm/GitHub/AWS/SSH 자격증명을 훔치는 자기전파 웜이 포함됐다 [@MsftSecIntel](https://x.com/MsftSecIntel/status/2061485730958848188). 동시에 엔터프라이즈 에이전트 벤더들은 **샌드박싱**, **런타임 격리**, **보안 스택 통합**이 배포의 전제조건이라고 강조했으며, **NVIDIA OpenShell**과 LangChain의 샌드박스 키노트 논의도 있었다 [@shannholmberg](https://x.com/shannholmberg/status/2061368566256189656), [@LangChain](https://x.com/LangChain/status/2061448130806116827).

### Codex, Claude Code, 경쟁적인 코딩 에이전트 레이스

- **OpenAI는 Codex를 더 많은 곳으로 확장했다**: OpenAI는 **프론티어 모델과 Codex가 이제 AWS / Amazon Bedrock에서 정식 제공**된다고 발표했다. 이는 기존 AWS 보안/컴플라이언스 워크플로 안에서 OpenAI 역량을 원하는 기업을 정조준한 것이다 [@OpenAI](https://x.com/OpenAI/status/2061564502160892138), [@OpenAIDevs](https://x.com/OpenAIDevs/status/2061564710173224985). OpenAI는 스레드, 턴, 스트리밍, 재개, 이미지, 샌드박스 제어를 지원하는 **Codex Python SDK**도 출시했으며 [@reach_vb](https://x.com/reach_vb/status/2061569472792572163), Bedrock 기반 Codex 워크플로도 지원한다 [@reach_vb on Bedrock config](https://x.com/reach_vb/status/2061572961451094191).
- **Claude Code에는 실제 운영 사고가 있었다**: Anthropic은 일부 **Opus 4.8** 세션이 지나치게 많은 **병렬 서브에이전트/도구 호출**을 생성해 사용량이 예상치 못하게 소진되던 버그를 수정한 뒤, Pro와 Max 사용자의 **5시간 및 주간 rate limit**을 재설정했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2061501787769893055), [follow-up](https://x.com/ClaudeDevs/status/2061501790131265803). 이는 코딩 에이전트 제품 품질이 이제 원시 모델 지능뿐 아니라 오케스트레이션 동작에 의해 점점 더 결정된다는 중요한 reminder다.
- **코딩 모델 간 행동 차이는 여전히 중요하다**: 개발자들은 **ProgramBench**와 **WeirdML** 같은 벤치마크에서 GPT, Claude, 기타 모델 간의 큰 정성적 차이를 강조했다. Opus는 때로 점수 극대화보다 탐색을 선호하거나 벤치마크 특유의 quirks를 보였다 [@OfirPress](https://x.com/OfirPress/status/2061458258821251081), [@htihle](https://x.com/htihle/status/2061412097720774679). 별도의 긴 스레드는 최신 **Claude Opus 4.6-4.8** 변형이 비코딩 영역에서 그럴듯하지만 허구적인 개념을 만들어낼 수 있다고 주장하며, 이것이 일반적인 환각(hallucination)이 아니라 진실성/정렬 퇴행일 가능성을 시사했다 [@distributionat](https://x.com/distributionat/status/2061362406971060244).

### 인프라, 하드웨어, 로컬 AI 시스템

- **NVIDIA가 PC를 겨냥하고 있다**: 가장 많이 논의된 하드웨어 출시는 **RTX Spark**였다. 이는 NVIDIA/Microsoft의 “개인용 AI 컴퓨터”로, **Grace + Blackwell** 기반에 최대 **128GB 통합 메모리**, 주장상 **1 PFLOP FP4**를 제공한다. 핵심 전략적 해석은 NVIDIA가 이제 단순히 가속기를 파는 것이 아니라 **Apple Silicon**, x86 PC, Qualcomm과 동시에 경쟁하는 엔드투엔드 로컬 AI 시스템을 팔고 있다는 점이다 [@kimmonismus](https://x.com/kimmonismus/status/2061484174088007739), [@swyx](https://x.com/swyx/status/2061567877879369953).
- **클러스터/네트워킹 업데이트**: 데이터센터 쪽에서는 **Lambda**가 **NVIDIA Quantum-X InfiniBand Photonics Q3450-LD** 스위치를 처음 채택한다고 밝혔다. 이는 대형 AI 클러스터에서 네트워크 전력과 장애를 줄이기 위해 co-packaged optics를 밀어붙이는 움직임이다 [@LambdaAPI](https://x.com/LambdaAPI/status/2061319330433032658). **OpenAI**도 폐쇄 루프 냉각을 사용하는 계획상 **1GW** 데이터센터 **Stargate Michigan**을 발표했으며, 인력/교육 관련 약속도 함께 제시했다 [@OpenAINewsroom](https://x.com/OpenAINewsroom/status/2061533639138316314).
- **로컬 오픈 모델 도구가 빠르게 개선 중**: **MLX-VLM v0.6.0** 릴리스는 더 실질적인 로컬 추론(inference)/도구 업데이트 중 하나였다. speculative decoding, Anthropic 스타일 및 responses 스타일 API, 도구 호출, 다수의 신규 멀티모달 모델 지원, 이미지/오디오 기능을 추가했으며, Apple 기기를 “진짜 로컬 에이전트 머신”으로 바꾸겠다는 명확한 메시지를 담았다 [@Prince_Canuma](https://x.com/Prince_Canuma/status/2061541992790683726). 이는 로컬 NVFP4 MoE 서빙을 위한 DGX Spark + **vLLM** 실험 증가와도 잘 맞물린다 [@vllm_project](https://x.com/vllm_project/status/2061530659160838549).

### 참여도 기준 상위 트윗(기술 관련 필터링)

- **Anthropic의 IPO 경로**: Anthropic은 SEC에 **비공개로 draft S-1을 제출**했다고 밝혔으며, 심사에 따라 IPO 가능성을 열었다 [@AnthropicAI](https://x.com/AnthropicAI/status/2061478052257841495).
- **Claude Code 사용량 사고**: Anthropic은 **Opus 4.8 병렬 서브에이전트/도구 호출 버그**가 과도한 쿼터 소모를 일으킨 뒤 사용자 rate limit을 재설정했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2061501787769893055).
- **Qwen3.7-Plus**: Alibaba는 GUI/CLI 조작, 코딩, 시각 작업을 아우르는 **멀티모달 에이전트 모델**을 출시했다 [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2061506641120641494).
- **OpenAI on Bedrock**: OpenAI 모델과 **Codex**가 이제 엔터프라이즈 워크플로용 **Amazon Bedrock**을 통해 제공된다 [@OpenAI](https://x.com/OpenAI/status/2061564502160892138).
- **ARC-AGI-3 움직임**: **Claude Opus 4.8**이 **ARC-AGI-3**에서 **1.5%**로 새로운 SOTA를 기록했다. 절대 수치로는 여전히 작지만 해당 벤치마크에서는 의미 있는 도약이다 [@arcprize](https://x.com/arcprize/status/2061512025638121516).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

### New Frontier Model Releases and Early Tests

- **[MiniMax M3 - Coding &amp; Agentic Frontier, 1M Context, Multimodal](https://www.reddit.com/r/LocalLLaMA/comments/1ttdiq0/minimax_m3_coding_agentic_frontier_1m_context/)** (Activity: 1090): **MiniMax M3**는 코딩/에이전트 중심, 네이티브 멀티모달리티/비전, 최대 **`1M` 토큰** 컨텍스트와 보장된 **`512K` 최소** 컨텍스트를 위한 **MiniMax Sparse Attention**을 갖춘 *오픈 웨이트* 프론티어 모델로 발표됐다 ([MiniMax M3](https://www.minimax.io/models/text/m3)). 주장된 장기 에이전트 결과에는 12시간 ICLR 논문 재현, Hopper FP8 GEMM CUDA/Triton 최적화에서 `147`회 반복 후 **`9.4×` speedup**, **PostTrainBench**에서 Opus 4.7과 GPT-5.5에 이어 3위가 포함된다. 현재 접근은 API/MiniMax Code를 통해 가능하며, HuggingFace/GitHub 가중치와 로컬 배포는 계획되어 있다. 댓글 작성자들은 저렴하고 효율적인 비전, 장문맥 에이전트 코딩 조합에는 조심스럽게 관심을 보였지만, 발표가 *“open-weight”*라고 부르면서도 아직 가중치나 파라미터 수조차 공개하지 않은 점에는 회의적이었다. 기술적 논쟁은 결과가 `~250B`보다 훨씬 큰 모델, 극단적인 벤치마크 최적화, 또는 진짜 오픈 웨이트 돌파구를 의미하는지에 집중됐다.
- **세부 논의**: 댓글 작성자들은 누락된 릴리스 세부정보에 집중했다. *“세 가지 프론티어 역량을 갖춘 첫 오픈 웨이트 모델”*이라는 주장에도 불구하고, 사용자들은 **MiniMax M3**의 실제 가중치, 파라미터 수, 규모 정보를 찾지 못했다. 한 댓글 작성자는 발표의 프리뷰 이미지를 링크했지만 ([Reddit image](https://preview.redd.it/fej3vn94qk4h1.jpeg?width=3808&format=pjpg&auto=webp&s=83ef24ab093520eb3118dd918259adff4f42a569)), 스레드에는 여전히 모델 규모나 다운로드 가능한 아티팩트 확인이 없었다.
- **기술적 우려**: 광고된 역량 수준이 **예상보다 훨씬 큰 모델**, 비정상적으로 강한 벤치마크 최적화, 또는 주요 오픈 웨이트 돌파구 중 하나를 뜻한다는 실질적 우려가 있었다. 추측은 MiniMax M3가 실제로 `~250B` 파라미터 수준인지 훨씬 더 큰지, 그리고 코딩/에이전트/멀티모달 주장이 가중치와 독립 벤치마크가 공개된 뒤에도 유지될지에 집중됐다.

- **[NVIDIA announces Nemotron 3 Ultra](https://www.reddit.com/r/LocalLLaMA/comments/1tthkh5/nvidia_announces_nemotron_3_ultra/)** (Activity: 621): **[image](https://i.redd.it/f79wu6dnml4h1.jpeg)는 **NVIDIA Nemotron 3 Ultra**의 기술 발표 슬라이드로, 댓글에서는 **MoE `550B-A55`** 모델로 설명됐다. 슬라이드는 Nemotron 3 Ultra를 **GLM 5.1, Kimi K2.6, Qwen3.5** 등 오픈/오픈 웨이트 경쟁 모델과 agent productivity, coding, instruction following, knowledge work, long-context capability 같은 “Frontier Smart” 벤치마크 범주에서 비교한다.** 댓글 작성자들은 다른 오픈소스/오픈 웨이트 모델과의 비교를 긍정적으로 봤고, 한 명은 `48`의 “artificial analysis score”를 언급하며 프론티어급 모델 바로 아래이자 MiniMax 2.7 범위에 해당한다고 평가했다. 미국 오픈 웨이트 모델 중 가장 강할 수 있다는 기대도 있었다.
- **아키텍처 정보**: NVIDIA Nemotron 3 Ultra는 **MoE `550B-A55`** 모델로 식별됐다. 이는 총 파라미터가 약 `550B`, 토큰당 활성 파라미터가 약 `55B`임을 뜻한다. 이 아키텍처 세부정보가 스레드에서 언급된 가장 구체적인 기술 사양이었다.
- **평가 위치**: 한 댓글 작성자는 **Artificial Analysis score `48`**을 인용하며 Nemotron 3 Ultra가 “frontier보다 한 단계 아래”이고 대략 **MiniMax 2.7** 범위에 있다고 말했다. 동시에 해당 지표 기준으로 가장 강한 **미국 오픈 웨이트** 모델일 수 있다고 제안했다.
- **참고 자료**: 공유된 기술 참고 자료에는 NVIDIA의 공식 Nemotron 3 Ultra Base 사용 cookbook인 [NVIDIA-NeMo/Nemotron](https://github.com/NVIDIA-NeMo/Nemotron/tree/main/usage-cookbook/Nemotron-3-Ultra-Base)과 LifeArchitect 모델 비교표 [lifearchitect.ai/models-table](https://lifearchitect.ai/models-table/)가 포함됐다. 한 댓글 작성자는 **Qwen3.5**와의 비교가 주목할 만하다고 주장했다. Nemotron이 NVIDIA 최고의 오픈 웨이트 모델일 수 있지만 여전히 몇몇 비미국/오픈 모델에는 뒤처질 수 있기 때문이다.

- **[Stepfun 3.7 Flash is very good](https://www.reddit.com/r/LocalLLaMA/comments/1tss9nq/stepfun_37_flash_is_very_good/)** (Activity: 473): **[GIF](https://i.redd.it/k37ol07vfg4h1.gif)는 밈이 아니라 **기술적 시각 데모**다. `create a beautiful, relaxing flight simulator in a single html page` 프롬프트에 대한 **Stepfun 3.7 Flash** 출력으로, HUD 스타일 속도/고도 표시가 있는 로우폴리 3D 비행 장면을 렌더링한다. OP는 이것이 공식 `Q4_X_S` 양자화(quantization)였다고 말하며, 모델이 미학적으로는 **GLM 5.1**에 가깝고 3D 월드 이해는 GLM 5.1의 약 `80%` 수준처럼 느껴지며, 파라미터는 GLM 5.1의 약 `25%`만 사용하고 내장 비전도 포함한다고 주장했다.** 댓글은 대부분 깊은 벤치마크보다 비교와 향수 반응이었다. 한 명은 오래된 Excel flight simulator를 언급했고, 다른 한 명은 **Qwen 3.7 Max / 27B**에 대한 관심을 비교하며 **Qwen3.6 27B**를 이기는지 물었다.
- **비교 논의**: 한 댓글 작성자는 **Qwen 3.7 Max**를 언급하고 향후 **Qwen 3.7 27B** 릴리스를 기대하며 모델 비교 관점을 제시했다. 다른 사용자는 Stepfun 3.7 Flash가 **Qwen3.6-27B**보다 나은지 물었다. 스레드에는 Qwen3.6-27B 참고용 스크린샷 증거가 포함됐지만 ([image](https://preview.redd.it/h1jbx5tz4j4h1.png?width=1523&format=png&auto=webp&s=c4bd572a0741fcffc65f2b75153efbb603ede82b)), 정량 벤치마크 점수나 재현 가능한 평가 세부정보는 제공되지 않았다.

### Consumer Local-AI Hardware Oddities

- **[Dell confirms XPS laptop with NVIDIA N1X at Computex ( basically a DGX Spark GB10 for consumers with Windows )](https://www.reddit.com/r/LocalLLaMA/comments/1tsifgs/dell_confirms_xps_laptop_with_nvidia_n1x_at/)** (Activity: 450): **Dell은 Computex에서 NVIDIA N1X 플랫폼을 쓰는 향후 XPS 노트북을 확인했다. 이는 NVIDIA의 Arm/클라이언트 PC 추진에 OEM 견인력이 있음을 시사한다. 게시물은 이를 **DGX Spark/GB10**의 소비자용 Windows 유사 제품으로 제시하지만, 제공된 [VideoCardz summary](https://videocardz.com/newz/dell-confirms-xps-laptop-with-nvidia-n1x-at-computex)에는 구체적인 사양, 출시 시점, 가격, 벤치마크 데이터가 없다. 댓글 작성자들은 이런 시스템이 `256GB` 같은 **대형 통합 메모리 구성**을 제공할 수 있는지에 집중했다. 이는 기존 dGPU 노트북 대비 핵심 기술 차별점이 될 수 있다.** 상위 댓글 작성자들은 가격이 DGX Spark에 가까워질 경우 가치에 회의적이었다. 더 저렴한 RTX `5090` 노트북이 많은 워크로드에서 더 빠를 가능성이 높다는 주장이다. 이 AI/개발자 지향 하드웨어급에서는 Windows보다 **일급 Linux 지원**을 선호한다는 반응도 있었다.
- **통합 메모리**: 댓글 작성자들은 통합 메모리 용량을 기존 GPU 노트북과의 핵심 기술 차별점으로 봤다. GPU가 잠재적으로 `64GB`를 사용할 수 있는 `128GB` 시스템 메모리는 일반적인 노트북 VRAM 한계보다 로컬 LLM 워크로드에 훨씬 유용하다고 설명됐고, 일부는 `256GB` 통합 메모리 구성을 원했다.
- **가격 대비 성능**: XPS N1X가 **NVIDIA DGX Spark**와 비슷한 가격이라면 가격 대비 성능에 회의가 있었다. 한 댓글 작성자는 **GeForce RTX 5090 laptop**이 통합 메모리는 적어도 많은 GPU 워크로드에서 더 싸고 빠를 것이라고 주장했다.
- **소프트웨어와 아키텍처 지원**: 여러 기술적 우려는 소프트웨어와 아키텍처 지원에 집중됐다. 댓글 작성자들은 로컬 AI 워크플로에서 Windows보다 일급 **Linux** 지원을 선호했고, 소비자용 시스템이 DGX Spark와 달리 **NVFP4** 지원을 빠뜨릴지 의문을 제기했으며, 새로운 **SM119** 커널이 추가 저수준 최적화 작업을 필요로 할 가능성을 언급했다.

- **[I trusted random person on this subreddit and bought 3080 20gb made of chinesium](https://www.reddit.com/r/LocalLLaMA/comments/1ttz558/i_trusted_random_person_on_this_subreddit_and/)** (Activity: 645): **이미지는 [`nvidia-smi` screenshot](https://i.redd.it/4r6t2yykgp4h1.png)으로, `20480 MiB` VRAM을 가진 특이한 **“NVIDIA GeForce RTX 3080”**가 `24576 MiB`의 **RTX 3090**과 함께 설치된 모습을 보여준다. 이는 사용자가 개조/중국 시장용 “3080 20GB”를 샀다는 게시물의 주장을 뒷받침한다. 기술적 의미는 카드가 드라이버에서 인식되고 유휴 상태에서 동작하는 것으로 보인다는 점이지만, 게시물에는 벤치마크, 안정성 테스트, 온도, 전력 데이터, 전체 VRAM이 CUDA/ML 워크로드에서 신뢰 가능한지에 대한 확인은 없다.** 댓글 작성자들은 드라이버 호환성, 팬/소음 동작, 성능 문제, 수명, 이것이 CUDA VRAM 달러당 최저가 옵션인지 같은 실용적 위험에 집중했다. 전체 분위기는 조심스러운 호기심이었으며, 비표준 GPU에 대해 임의의 서브레딧 추천을 신뢰하는 데 대한 불안이 있었다.
- **실용 검증**: 댓글 작성자들은 중국 개조 `RTX 3080 20GB`의 실용적 검증에 집중하며 특히 **드라이버 호환성**, 음향 동작, 표준 카드 대비 성능 저하나 속도 문제가 있는지를 물었다.
- **가치 효율**: 제기된 기술적 관점 중 하나는 가치 효율이었다. 일반 RTX 3080/3090 가격 대비 특이한 `20GB` VRAM 구성이라는 점에서 이 카드가 **CUDA 가능 VRAM GB당 최저가** 옵션인지 여부다.
- **온도와 쿨러**: 한 댓글 작성자는 `RTX 3090`과 함께 있을 때 보고된 `15°C` 온도 차이가 인상적이라고 지적했다. 이는 비표준 “chinesium” 변형임에도 냉각/온도가 경쟁력 있을 수 있음을 시사한다. 다른 사용자는 **3-fan version**을 주문했다고 말해, 쿨러 설계가 변형별로 중요한 요소일 수 있음을 암시했다.

### Less Technical AI Subreddit Recap

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude Coding: Opus 4.8, CLAUDE.md, Rate Limits

- **[Differences Between Opus 4.7 and Opus 4.8 on MineBench](https://www.reddit.com/r/ClaudeAI/comments/1tt3a8h/differences_between_opus_47_and_opus_48_on/)** (Activity: 1821): **MineBench 작성자는 **Claude Opus 4.8**이 Minecraft와 유사한 3D 블록 배치 벤치마크에서 **Opus 4.7**보다 개선됐다고 보고했다 ([MineBench](https://minebench.ai/), [repo](https://github.com/Ammaar-Alam/minebench)). `15`개 빌드 비용은 `$41.52`였고 평균 `24.8 min` / `1,487 s` 추론(inference) 시간이 걸렸다. API 가격은 변하지 않았지만 Opus 4.8은 4.7보다 저렴했는데, apparently 더 짧고 간소화된 CoT “thinking” 시간 덕분이었다. 결과물은 주관적으로 더 나은 빌드를 만들었고 **GPT 5.5** 품질에 가깝지만 더 일관성이 떨어진다고 주장됐다. 실행에는 잘못된 블록 팔레트 환각(hallucination)이나 malformed JSON 때문에 `5`회 재시도가 필요했다. 작성자는 이것이 Claude에서는 일반적이지만 adaptive thinking은 유효한 JSON을 내놓기 전에 출력 토큰을 소진할 가능성이 낮아 보인다고 덧붙였다 ([release notes](https://github.com/Ammaar-Alam/minebench/releases/tag/3.6.0)).** 댓글은 대부분 비기술적 감상에 가까웠다. 한 댓글 작성자는 Opus 4.6 대 4.7 비교 링크를 제공했고, 다른 한 명은 “The Knight no longer looks like Bender.”라고 농담했다.
- **장기 비교 참고**: 한 댓글 작성자는 종단적 맥락을 위해 이전 **Opus 4.6 vs 4.7 MineBench comparison**을 링크했다 [reddit.com/r/singularity/comments/1sofehv/differences_between_opus_46_and_opus_47_on](https://www.reddit.com/r/singularity/comments/1sofehv/differences_between_opus_46_and_opus_47_on/). 이는 4.8 변화가 이전 4.6→4.7 단계 대비 점진적인지 평가하기 위한 기준점을 제공한다.
- **budget mode 제안**: 한 기술적 제안은 각 모델이 **동일한 수의 블록**을 사용하도록 제한하는 *“budget mode”*를 추가하자는 것이었다. 이는 제한 없는 출력만 비교하는 대신 사용 가능한 건설 자원을 정규화해 MineBench 비교를 더 통제된 방식으로 만들 수 있다.
- **진행 추적 사이트**: 다른 댓글 작성자는 **동일 프롬프트에서 시간에 따른 모델 진행**을 추적하는 전용 사이트를 제안했다. 이는 개별 MineBench 게시물을 재현 가능한 종단 벤치마크로 바꿔, 모델 버전별 시각/공간 구성 품질 비교를 더 쉽게 만들 수 있다.

- **[Karpathy's CLAUDE.md just crossed 220k GitHub stars. Here's why it works.](https://www.reddit.com/r/ClaudeCode/comments/1tte5sb/karpathys_claudemd_just_crossed_220k_github_stars/)** (Activity: 1462): **게시물은 Forrest Chang의 **Andrej Karpathy** 가이드 구현으로 여겨지는 최소한의 `CLAUDE.md`/Claude Code 프로젝트 지침 파일이 인기를 얻은 이유가 일반적인 에이전트 코딩 실패 모드를 완화하기 때문이라고 주장했다. 여기에는 콜드 스타트에서 프로젝트 메모리가 없는 문제, 검증되지 않은 가정, 불필요한 리팩터링, 과신한 실행이 포함된다. 핵심 규칙은 가정하기 전에 묻기, 가장 단순하게 작동하는 해법 구현, 관련 없는 코드 변경 피하기, 불확실성 명시다. 작성자는 이것이 Magic Hour/Kling 스타일 통합을 포함한 비디오 생성 파이프라인처럼 상태가 있고 API가 많은 프로젝트에서 특히 유용하다고 주장했다.** 댓글 작성자들은 엇갈렸다. 한 명은 이런 규칙이 초기에만 유용하고 더 자동화된 “harness engineering” 워크플로에 비해 느려진다고 주장했다. 또 다른 한 명은 하드코딩된 성격 오버라이드가 진화하는 Claude Code/모델 동작과 충돌할 수 있으므로 전역이 아니라 세션 또는 프로젝트 단위로 제한해야 한다고 경고했다.
- **온보딩과 효율성**: 여러 댓글 작성자는 Karpathy 스타일 `CLAUDE.md` 규칙이 “일반 코딩”에서 Claude Code로 전환하는 사용자를 온보딩할 때 주로 유용하지만, 더 고급 *harness engineering* 워크플로를 만들고 나면 비효율적이 된다고 주장했다. 기술적 우려는 반복적인 확인/체크포인트 프롬프트가 반복 속도를 늦추고, 숙련 사용자는 같은 결정을 반복 승인하지 않고 “fire a query off”할 수 있는 자동화 패턴을 선호할 수 있다는 점이었다.
- **하드코딩 규칙의 취약성**: 실질적 비판은 Claude Code 릴리스 변화에 따라 하드코딩된 성격 또는 워크플로 오버라이드가 취약하다는 점에 집중됐다. 한 댓글 작성자는 새 모델 버전과 하네스 업데이트가 이전 가정을 뒤집을 수 있다고 말했다. 예를 들어 오래된 모델이 “질문을 충분히 하지 않았다”는 이유로 쓴 프롬프트가 새 모델이 질문을 너무 많이 하는 경우 오히려 역효과가 될 수 있으므로, 이런 규칙을 전역 동작 오버라이드가 아니라 세션 또는 프로젝트 수준으로 제한하라고 권했다.
- **중복 지침 가능성**: 또 다른 기술적 지점은 인기 있는 `CLAUDE.md` 파일이 권장하는 많은 동작이 이미 Claude Code의 하네스/시스템 프롬프트에 구현되어 있을 수 있다는 것이었다. 댓글 작성자들은 이것이 이전 소스 유출에서 보였다고 주장했다. 사실이라면 사용자 수준 파일에 그런 지침을 중복하는 것은 한계 효과가 작고, Anthropic의 기존 RLHF와 하네스 설계 위에 놓인 placebo 또는 약한 steering layer처럼 작동할 수 있다.

- **[Rate limit reset](https://www.reddit.com/r/ClaudeCode/comments/1ttzjoq/rate_limit_reset/)** (Activity: 918): **[image](https://i.redd.it/hpmsm3l4jp4h1.jpeg)는 **ClaudeDevs / X.com announcement**의 스크린샷으로, 일부 **Claude Code** 세션이 과도한 **parallel subagents**를 생성해 사용자 쿼터를 빠르게 소모하던 버그를 Anthropic이 수정한 뒤 **Claude Pro and Max 5-hour and weekly rate limits were reset**됐다는 내용이다. 맥락상 이 문제는 폭주하는 도구 호출 또는 에이전트 루프를 일으킨 것으로 보이며, 한 댓글 작성자는 **Opus 4.8 subagents**를 보고했고 다른 사용자는 Max 플랜 세션 한도가 주말 동안 두 번 소진되고 주간 한도의 `70%+`에 도달했다고 말했다.** 댓글은 예고 없는 재설정이 혼란스럽거나 무책임하다고 본 사용자와, 주말 동안 망가진 Claude Code 동작을 겪은 사용자에게는 적절하거나 관대한 보상이라고 본 사용자로 나뉘었다.
- **과도한 병렬 서브에이전트**: 사용자들은 재설정이 **“excessive parallel subagents”** 동작과 관련 있다고 추론했다. 한 댓글 작성자는 스크린샷을 공유하며 관련 에이전트가 **all Opus 4.8**이었다고 언급했다: https://preview.redd.it/gye31dlekp4h1.png?width=348&format=png&auto=webp&s=bd740cb1239c5dbc12a5fedd3957ec197d47c8ee. 논의된 기술적 함의는 병렬 에이전트 실행이 특히 여러 고성능 모델 인스턴스가 동시에 생성될 때 rate/session limit 대비 사용량을 빠르게 증폭할 수 있다는 점이었다.
- **쿼터 소진 사례**: 한 사용자는 **endless tool-call loops**가 주말 동안 **Max plan**의 전체 세션 한도를 두 번 소진했고 주간 한도의 **`70%` 이상**까지 밀어 올렸다고 보고했다. 이는 에이전트/도구 오케스트레이션이 의미 있는 진전 없이 쿼터를 태울 수 있는 실패 모드를 시사한다. 또 다른 사용자는 예상치 못한 재설정 전에 주간 사용량 **`96%`**에 도달해 있었다고 말해, 재설정이 하드 주간 한도에 가까운 사용자들에게 실질적 영향을 줬음을 보여준다.

---

## AI Discord Recap

### Discord 접근 중단

- **접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형태로는 다시 가져오지 않겠지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
