---
title: "Claude Fable 5, 성능 논란 속 신뢰 위기"
summary:
  - "Claude Fable 5 성능 논란 확산"
  - "Google이 DiffusionGemma를 공개"
  - "Cohere North Mini Code 출시"
  - "Anthropic 데이터 보존 우려 증가"
  - "Fable 5 코딩 성능 평가 엇갈림"
date: 2026-06-10
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-10-not-much.md"
hasHeadline: false
headline: "Claude Fable 5, 성능 논란 속 신뢰 위기"
tags:
  - Anthropic
  - Claude
  - DiffusionGemma
isFeatured: false
---

## 헤드라인: Claude Fable 5, 성능 논란 속 신뢰 위기

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic의 Fable/Mythos 출시는 강력한 벤치마크 성능에도 불구하고, AI 연구 관련 요청에서 기능이 조용히 제한된다는 의혹과 데이터 보존 정책 때문에 신뢰 논쟁을 불렀다. 커뮤니티는 명시적 거절이나 모델 다운그레이드보다 보이지 않는 성능 저하가 더 큰 문제라고 봤고, 기업 사용자들은 30일 보존 정책과 zero data retention 비호환성을 주요 리스크로 지적했다.

---

## AI Twitter Recap

### Anthropic의 Fable/Mythos 출시, 조용한 기능 게이팅, 신뢰 반발

- **AI R&D 지원의 조용한 성능 저하가 논의를 지배**: 기술 트윗의 상당수는 Anthropic이 AI 연구 관련 프롬프트에서 모델 성능을 명확히 사전 고지하지 않은 채 낮춘 것으로 보인다는 점에 집중했다. 비판 범위는 이례적으로 넓었다. 연구자와 빌더들은 이것이 관측된 성능과 실제 모델 역량 사이에 검증 불가능한 간극을 만들고, 재현성을 해치며, 코딩·생물학·시스템 작업 같은 인접 영역의 모델 출력 신뢰를 훼손한다고 주장했다. 대표적 비판은 [@natolambert](https://x.com/natolambert/status/2064699044145095104), [@martin_casado](https://x.com/martin_casado/status/2064727048460058937), [@drfeifei](https://x.com/drfeifei/status/2064735920281313688), [@antirez](https://x.com/antirez/status/2064766431531532588), [@ClementDelangue](https://x.com/ClementDelangue/status/2064673792303955985), [@deanwball](https://x.com/deanwball/status/2064665679307985244)에게서 나왔다. 여러 게시물은 Anthropic이 frontier 사용 사례를 제한하려 한다 해도, 조용한 방해보다 **명시적 거절 또는 모델 다운그레이드**가 더 방어 가능하다고 지적했다. 예: [@hlntnr](https://x.com/hlntnr/status/2064733332882026565), [@_arohan_](https://x.com/_arohan_/status/2064644778147643401), [@DBahdanau](https://x.com/DBahdanau/status/2064692204287799728).
- **기업 우려는 안전을 넘어 보존과 종속 문제로 확장**: 빌더들은 Fable/Mythos가 일부 환경에서 **30일 프롬프트/데이터 보존**과 opt-out 불가 조건을 가진 것으로 알려졌고, 이는 zero-retention 환경과 유럽 일부 지역을 즉시 배제한다고 강조했다. 프롬프트 기록 보존과 불투명한 모델 변경에 대해서는 [@GergelyOrosz](https://x.com/GergelyOrosz/status/2064618497150210391), zero-data-retention 비호환성에 대해서는 [@scaling01](https://x.com/scaling01/status/2064685085379477742)를 보라. 여러 실무자가 반복한 2차 교훈은 frontier API를 불안정한 의존성으로 취급하고, 모델 이식성을 유지하며, eval과 harness로 출력을 지속 검증하라는 것이었다. 이는 [@dbreunig](https://x.com/dbreunig/status/2064751540003643738), [@omarsar0](https://x.com/omarsar0/status/2064753171214299209), [@yacineMTB](https://x.com/yacineMTB/status/2064801103447736398)가 주장했다.
- **Anthropic은 논란과 함께 정책 드라이브를 병행**: 반발 속에서 Dario Amodei는 **“Policy on the AI Exponential”**을 발표해 AI 진전이 제도를 앞지르고 있다고 주장하며 더 강한 frontier 감독을 요구했다. Anthropic도 관련 이니셔티브와 안전하지 않은 출시를 막는 정부 역할 제안을 동시에 발표했다. [@DarioAmodei](https://x.com/DarioAmodei/status/2064781775247950326)와 [@AnthropicAI](https://x.com/AnthropicAI/status/2064783418844762489)를 보라. 커뮤니티가 본 긴장은 분명했다. 불투명한 사적 통제로 비판받는 같은 회사가 더 강한 공적 통제를 주장하고 있다는 점이다.

### Fable 5의 벤치마크 강점과 논란 속 제품 성능

- **Fable 5는 에이전트형 및 코딩 워크로드에서 실제로 강력해 보임**: Anthropic 정책을 비판한 많은 이들도 모델 자체는 탁월하다고 인정했다. 커뮤니티 보고에 따르면 다양한 평가에서 선두 또는 선두권이었다. [Agent Arena](https://x.com/arena/status/2064807170714358193)는 확정 작업 성공과 사용자 호평에서 특히 큰 격차를 보이며 **종합 #1**을 보였지만 조종 가능성은 약했다. [@mchlhess](https://x.com/mchlhess/status/2064734182648221952)는 자신의 벤치마크를 “완전히 박살낸다”고 했고, [@JasonBotterill](https://x.com/JasonBotterill/status/2064699951578505446)는 **SimpleBench 81.9%**를 언급했다. [@lvwerra](https://x.com/lvwerra/status/2064758389406589134)는 **CADGenBench #1**을 보고했고, [@scaling01](https://x.com/scaling01/status/2064812046902817051)는 강한 computer-use 결과를 강조했으며, [@LechMazur](https://x.com/LechMazur/status/2064815890651140447)는 **PACT 협상 #1**을 짚었다.
- **빌더들은 큰 실사용 개선을 보고했지만 일관되지는 않았음**: 여러 실무자는 장기 코딩과 창작 작업에서 큰 생산성 향상을 설명했다. 게임 생성과 어려운 버그 수정도 포함됐다. 예: [@kimmonismus](https://x.com/kimmonismus/status/2064744343349399634), [@walden_yan](https://x.com/walden_yan/status/2064755974548902006), [@hrishioa](https://x.com/hrishioa/status/2064717079526383699). 동시에 일부는 특정 작업에서 취약한 행동, 비싼 사용량, 또는 GPT-5.5보다 나쁜 성능을 보고했다. 예: [@Sentdex](https://x.com/Sentdex/status/2064738018255159363), [@QuixiAI](https://x.com/QuixiAI/status/2064771682397569364). 타임라인의 순 결론은 이렇다. **Fable 5는 많은 에이전트형 코딩 작업에서 state-of-the-art일 가능성이 있지만, 신뢰와 제품 제약이 도입에 실질적으로 영향을 주고 있다**.
- **배포와 통합은 빠르게 진행**: Perplexity는 Pro/Max 사용자를 위한 Computer에서 **Claude Fable 5를 orchestrator 모델**로 추가했다. 출처는 [@perplexity_ai](https://x.com/perplexity_ai/status/2064771411894567373), [@AravSrinivas](https://x.com/AravSrinivas/status/2064775723886182427). Apple 개발자는 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064756984617021807)를 통해 다단계 추론, 긴 컨텍스트, 코드 사용을 위한 **Claude용 Foundation Models framework 지원**을 받았다. 반발 이후 OpenAI/Codex 쪽으로 대체 압력이 생긴 커뮤니티 행동도 보였고, [@dylan522p](https://x.com/dylan522p/status/2064727949274955953)는 사용 점유율이 Anthropic에서 OpenAI로 이동한다고 보고했다.

### Google의 DiffusionGemma 출시와 diffusion LLM 재관심

- **Google이 Apache 2.0으로 DiffusionGemma 공개**: 이 묶음에서 가장 중요한 오픈 모델 출시는 **DiffusionGemma**였다. Gemma 4 기반의 실험적 **26B MoE diffusion 텍스트 모델**이며, **Apache 2.0** 오픈 가중치로 공개됐다. 자기회귀식 next-token 생성 대신 **텍스트 블록을 동시에** 생성하고 정제하며, 적합한 하드웨어에서 **최대 4배 빠른** 출력과 약 **1,000+ tokens/sec**를 주장한다. [@Google](https://x.com/Google/status/2064741293163418032), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2064741061352636762), [@googlegemma](https://x.com/googlegemma/status/2064741002204545467), [@sundarpichai](https://x.com/sundarpichai/status/2064744343743922189)를 보라.
- **시스템 관점이 즉시 주목받음**: 이 출시는 연구 산출물일 뿐 아니라 serving 인프라 진전으로 중요했다. [@vllm_project](https://x.com/vllm_project/status/2064753414735900835)는 DiffusionGemma가 **vLLM**에서 네이티브 지원되는 첫 diffusion LLM이라고 했고, 단일 H200에서 FP8, batch size 1 기준 **1200+ output tok/s**를 언급했다. [@danielhanchen](https://x.com/danielhanchen/status/2064760001567306232)는 GGUF와 함께 **llama.cpp**로 로컬 실행을 보였고, [@UnslothAI](https://x.com/UnslothAI/status/2064743714875220118)는 **18GB급** 하드웨어 로컬 실행을 강조했다. [@_philschmid](https://x.com/_philschmid/status/2064745464252055647)는 추론(inference) footprint를 **3.8B active params**와 **256-token block denoising**으로 요약했다.
- **연구자들이 주목한 이유**: Diffusion 방식 텍스트 생성은 반복 정제, 제약 편집, fill-in-the-middle, 오류 수정에 관한 질문을 되살린다. 여러 반응은 이를 제품화된 경쟁자라기보다 **비순차 디코딩(non-sequential decoding)**과 정제 중심 작업을 위한 풍부한 연구 방향으로 봤다. [@omarsar0](https://x.com/omarsar0/status/2064742095387005352), [@mervenoyann](https://x.com/mervenoyann/status/2064753402064601181), [@dbreunig](https://x.com/dbreunig/status/2064752321817719204)를 보라.

### 에이전트 툴링, 인프라, 벤치마크: 실제 워크로드 주변 구조화

- **벤치마크가 선호도에서 trace 기반 에이전트 지표로 이동 중**: [@arena](https://x.com/arena/status/2064748918135824876)는 **Agent Arena**의 방법론을 자세히 설명했다. 이는 모든 단계에서 인간 선호에 의존하는 대신, bash 오류, 도구 hallucination, “insanity” 같은 객관 신호를 장기 trace에서 채굴한다. 수십 번의 도구 호출과 30분 trace에 걸친 작업을 평가하는 에이전트 eval에서 중요한 방향이다.
- **메모리, orchestration, 환경 제어가 계속 성숙**: 여러 출시는 에이전트 주변의 빠진 시스템 계층을 겨냥했다. [@Teknium](https://x.com/Teknium/status/2064764570519146935)는 GUI 기반 **Hermes Agent profiles**를 출시했고, 이후 [@Teknium](https://x.com/Teknium/status/2064831491130130879)를 통해 메모리/스킬 업데이트를 위한 **Write Gate** 승인 제어를 내놨다. [@weaviate_io](https://x.com/weaviate_io/status/2064703135902216618)는 **Engram**에서 그룹, 토픽, scope를 이용한 구조화된 에이전트 메모리를 설명했다. [@bromann](https://x.com/bromann/status/2064760446847168811)은 client-side/browser 기능을 에이전트 루프에 가져와야 한다고 주장했다. [@FactoryAI](https://x.com/FactoryAI/status/2064764834928107914)는 Factory Desktop에서 **Missions**를 출시했다.
- **탐지, 라우팅, 커뮤니티 harness**: [@perceptroninc](https://x.com/perceptroninc/status/2064732691845824833)는 one-shot detector 대신 다중 호출 zoom/reason 루프를 사용하는 **Agentic Detection**을 출시해 조밀하고 모호한 시각 탐지를 다뤘다. [@vllm_project](https://x.com/vllm_project/status/2064679109406740827)는 추론(inference) 경제성에 최적화된 커뮤니티 에이전트 harness인 **Inferoa**를 강조했다. [@Azaliamirh](https://x.com/Azaliamirh/status/2064810291574305013)는 탈중앙 멀티에이전트 프레임워크 **DeLM**을 소개했으며, Gemini 3-Flash로 중앙화 대안의 절반 미만 비용에서 **65.7% SWE-bench Verified**에 도달한다고 보고됐다.

### 최적화, 검색, 과학 모델링에서 추적할 만한 작업

- **Distributed Shampoo vs Muon은 여전히 살아 있는 최적화 논의**: 기술적으로 흥미로운 하위 스레드는 tuned **Meta DistributedShampoo**가 하이퍼파라미터 튜닝과 pseudo-inverse stabilization 활성화 후 speedrun 스타일 작업에서 강한 Muon baseline과 맞먹는 모습을 보였다. [@_arohan_](https://x.com/_arohan_/status/2064631528806908134)는 vanilla package + tuning으로 약 **3.2766** validation loss를 보고했고, [@kellerjordan0](https://x.com/kellerjordan0/status/2064761560732713360)는 핵심 stabilization flag가 문서화되지 않았기 때문에 이를 “vanilla”라고 부르는 데 반박했다. 여기서 유용한 신호는 “승자 선언”이 아니라, optimizer 비교가 숨은 구현 세부사항과 수치 안정성에 매우 민감하다는 점이다.
- **Late-interaction retrieval에 더 나은 kernel 등장**: [@tonywu_71](https://x.com/tonywu_71/status/2064701365318767100)는 ColBERT/ColPali/LateOn에서 쓰이는 MaxSim용 fused Triton kernel인 **late-interaction-kernels**를 공개했고, PyTorch와 수치적으로 동등하면서 메모리 footprint는 훨씬 작다고 주장했다. 이는 multi-vector retrieval 모델의 학습과 serving 모두에 중요할 수 있다.
- **과학 및 멀티모달 모델링**: [@giffmana](https://x.com/giffmana/status/2064718736783823145)는 **diffusion video models**가 일부 probe에서 V-JEPA/VideoMAE보다 물리 정보를 더 선형적으로 인코딩한다는 새 연구를 강조했다. 이는 “videogen 모델은 멍청한 물리 시뮬레이터”라는 흔한 서사에 도전한다. 바이오테크에서는 [@edunov](https://x.com/edunov/status/2064774943766925696)가 Pearl보다 품질을 유지하면서 **~5배 빠른** flow-map cofolding 모델 **DeCAF-Pearl**을 소개했다. 아키텍처 연구에서는 [@ZyphraAI](https://x.com/ZyphraAI/status/2064842130447851947)가 Apache 2.0으로 **Zamba2-VL**을 공개해 hybrid SSM-Transformer 아이디어를 VLM으로 확장했다.

### 인기 트윗 참여도 기준

- **정책 / 거버넌스**: [@DarioAmodei on “Policy on the AI Exponential”](https://x.com/DarioAmodei/status/2064781775247950326)는 가장 높은 참여도의 기술/정책 게시물이었다. frontier AI가 제도보다 더 빠르게 발전한다고 프레이밍했다.
- **보안 / 안전 실패 모드**: [@jsrailton](https://x.com/jsrailton/status/2064661778978533571)은 악성코드 제작자가 핵/생물학 텍스트를 삽입해 LLM 거절을 유도하고 AI 악성코드 분석을 회피한다는 점으로 큰 주목을 받았다. 공격자가 safety behavior를 악용하는 구체적 사례다.
- **오픈 모델**: **DiffusionGemma**에 관한 [@googlegemma](https://x.com/googlegemma/status/2064741002204545467)와 [@Google](https://x.com/Google/status/2064741293163418032)의 게시물이 순수 모델 출시 게시물 중 가장 컸다.
- **연구 접근 규범**: [@drfeifei](https://x.com/drfeifei/status/2064735920281313688)는 학계의 광범위한 합의를 간결히 밝혔다. 과학 진보에는 AI를 포함한 최고의 도구에 대한 접근이 필요하다는 것이다.
- **모델 역량 신호**: [@mchlhess](https://x.com/mchlhess/status/2064734182648221952)가 **Fable 5가 자신의 벤치마크를 “completely demolishes”**한다고 말한 게시물은 가장 많이 인용된 역량 보증 중 하나가 됐다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: 오픈 가중치 모델 출시, North Mini Code와 DiffusionGemma

- **[Releasing Cohere North Mini Code](https://www.reddit.com/r/LocalLLaMA/comments/1u1ci1r/releasing_cohere_north_mini_code/)** (Activity: 388): **Cohere**는 **North Mini Code 1.0**을 공식 출시했다. 가중치는 [Hugging Face](https://huggingface.co/CohereLabs/North-Mini-Code-1.0), [FP8 variant](https://huggingface.co/CohereLabs/North-Mini-Code-1.0-fp8)에 올라왔고, [OpenCode](https://opencode.ai/)를 통한 무료 접근과 [HF blog](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code) / [announcement](https://cohere.com/blog/north-mini-code)의 기술 세부 정보가 제공됐다. 배포를 위해 Cohere는 **vLLM main**과 `cohere_melody>=0.9.0`, `--max-model-len 320000`, `--tool-call-parser cohere_command4`, `--reasoning-parser cohere_command4`, `--enable-auto-tool-choice`를 권장했다. LocalLLaMA 피드백을 바탕으로 PR도 push했다고 밝혔다. 생태계 지원은 [Unsloth GGUF conversion](https://huggingface.co/unsloth/North-Mini-Code-1.0-GGUF)과 보고된 [MLX support](https://x.com/Prince_Canuma/status/2064437722689962242)를 포함하며, Cohere는 `llama.cpp`/양자화(quantization) 요청을 내부적으로 전달 중이라고 했다. 댓글러들은 Cohere가 LocalLLaMA식 early access를 한 점에는 대체로 긍정적이었지만, 향후 출시에서 **day-0 `llama.cpp`/GGUF 지원**을 요구했다. 한 댓글러는 공개된 벤치마크가 대부분의 지표에서 **Qwen 3.6 35B A3B**보다 나빠 보인다고 주장했고, 다른 이들은 주로 GGUF 가용성과 더 큰 “Maxi Code” 모델 가능성을 물었다.
- **[DeepMind Just Dropped "DiffusionGemma" — Text Generation via Image-Style Diffusion Model](https://www.reddit.com/r/LocalLLaMA/comments/1u29mlk/deepmind_just_dropped_diffusiongemma_text/)** (Activity: 355): **Google DeepMind**는 [DiffusionGemma](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)를 공개했다. 이는 Gemma 4/Gemini Diffusion 연구 기반의 Apache 2.0 오픈 가중치 `26B` MoE 텍스트 diffusion 모델로, `3.8B` 파라미터만 활성화하고 자기회귀식 토큰 단위 디코딩 대신 `256` 토큰 블록을 병렬 denoise한다. Google은 H100에서 `1000+ tok/s`, RTX 5090에서 `700+ tok/s`를 보고했고, 양자화(quantization) 배포는 약 `18GB` VRAM에 맞는다고 했다. 이 설계는 낮은 동시성의 로컬 추론(inference)을 메모리 대역폭에 묶인 순차 디코딩에서 compute-heavy 병렬 정제로 이동시키며 Hugging Face, vLLM, Unsloth 지원을 갖췄다. 댓글러들은 이를 실시간/로컬 애플리케이션에 중요한 진전으로 봤지만, 몇몇은 품질이 표준 자기회귀 Gemma 모델보다 뒤처질 수 있다고 강조했다. *“멍청할 거라면 초고속일 필요가 없다.”* Google의 최근 오픈 모델 출시 속도에 대한 긍정적 놀라움도 있었다.

### /r/LocalLlama + /r/localLLM: Anthropic 숨은 기능 조정 논쟁

- **[Anthropic is intentionally nerfing Fable when asked to develop other LLMs](https://www.reddit.com/r/LocalLLaMA/comments/1u1s2oz/anthropic_is_intentionally_nerfing_fable_when/)** (Activity: 1967): **[image](https://i.redd.it/h5ieomi9wd6h1.jpeg)**는 Anthropic의 [technical report](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf) 약 13쪽을 인용하며, **Anthropic의 Fable/Claude**가 *frontier LLM 개발* 지원을 요청받을 때 기능을 조용히 낮출 수 있다는 X/Twitter 논의 스크린샷이다. 발췌문은 safeguard가 **prompt modification**, **steering vectors**, **fine-tuning**을 포함할 수 있고 이러한 개입이 *“will not be visible to the user”*라고 말한다. 댓글러들은 이를 명시적 거절이나 정책 오류가 아니라 숨은 성능 저하로 해석했다. 댓글러들은 조용한 행동 변경에 강하게 반발했고, 이를 “poisoning your code base”라며 투명한 거절/HTTP 4xx식 차단보다 더 나쁘다고 봤다. 몇몇은 이것이 안전이라기보다 **Anthropic이 경쟁 우위를 보호하는 것**처럼 보인다고 주장했으며, 한 댓글은 Fable이 자기 자신의 기술 보고서도 읽지 못한다고 지적했다. 증거 스크린샷: [preview.redd.it image](https://preview.redd.it/u8cw5dp94e6h1.jpeg?width=1080&format=pjpg&auto=webp&s=1d96be6d2cc7c127993190b93a6c0a9f2feb5a44).
- **[Without open llm competition, closed source LLM companies will become insatiable.](https://www.reddit.com/r/LocalLLaMA/comments/1u1p3k5/without_open_llm_competition_closed_source_llm/)** (Activity: 662): 이 게시물은 Anthropic이 다른 AI 개발자가 frontier 모델을 구축하는 데 도움이 될 수 있는 workflow에서 Claude/Claude Code 사용을 제한한다고 비판한다. Anthropic이 동등한 safeguard 없이 *“accelerating other AI developers in building powerful AI systems”*하는 일을 피하고 싶다고 한 논리를 인용했다. 상위 댓글은 Anthropic의 업데이트된 [Mythos-class data-retention policy](https://support.claude.com/en/articles/15425996-data-retention-practices-for-mythos-class-models)를 강조했다. 프롬프트와 출력은 trust-and-safety review를 위해 `30 days` 보존되며, Claude Console, Claude Enterprise/Claude Code, AWS Bedrock, Google Cloud Agent Platform, Microsoft Foundry를 통해 **zero data retention**을 사용하던 조직에도 적용된다. 댓글러들은 이를 반경쟁적이고 기업 기대에 적대적인 움직임으로 봤다. 특히 ZDR 고객은 엄격한 비보존 보장을 전제로 아키텍처를 설계했을 수 있기 때문이다. 논의는 오픈소스 LLM 경쟁이 폐쇄형 모델 벤더의 조건, 접근, 데이터 처리 정책 변경을 견제하는 실질적 장치라고 주장했다.

### Less Technical Subreddits: Claude Fable 5 / Mythos 5 출시와 접근 제어

- **[Introducing Claude Fable 5](https://www.reddit.com/r/ClaudeCode/comments/1u1b207/introducing_claude_fable_5/)** (Activity: 3468): 이미지는 **Claude Mythos 5 / Claude Fable 5**의 벤치마크 비교표([image](https://i.redd.it/tb8akxef4a6h1.png))이며, 공유 기반 모델이 코딩, 도구 사용, 지식 작업, 법률, 바이오, 사이버, 헬스 벤치마크 전반에서 Claude Mythos Preview, Claude Opus 4.8, GPT 5.5, Gemini 3.1 Pro보다 앞선다고 배치한다. 핵심 기술적 구분은 **Fable 5가 일반 제공되는 safeguard 적용 variant**이고, **Mythos 5**는 Project Glasswing용 덜 제한된 버전이라는 점이다. 사이버보안, 생물/화학, distillation 관련 요청은 **Claude Opus 4.8**로 라우팅되며, Anthropic은 세션의 `>95%`가 fallback을 피한다고 주장한다. 강조된 벤치마크는 **SWE-Bench Pro** `80.3%`, **Terminal-Bench 2.1** `88.0%`, **ExploitBench** `78.0%` 등이며, 장기 에이전트 작업에서 가장 큰 개선이 있다는 주장을 뒷받침한다. 댓글은 대체로 기술 분석보다는 hype나 회의론이었다. 한 사용자는 “Fable”이 “getting dumber recently”인지 물었고, 다른 이들은 *“AGI confirmed”* / *“Here we go!”*라고 반응했다. 한 사용자는 launch page/frontend 문제 가능성을 지적하며 스크린샷을 링크했다: https://preview.redd.it/qaceea1fma6h1.jpeg?width=1440&format=pjpg&auto=webp&s=440eb5a30e7dfc186d610ed94be50fa50b962c9e.
- **[Claude Fable 5 feels less like a model launch and more like a preview of AI inequality](https://www.reddit.com/r/ClaudeAI/comments/1u1fsdi/claude_fable_5_feels_less_like_a_model_launch_and/)** (Activity: 6875): 이 게시물은 **Anthropic의 purported Claude Fable 5 rollout**이 전통적 모델 출시에서 **계층화된 기능 접근**으로 이동하는 신호라고 주장한다. 일반 유료 사용자는 cyber, bio, chemistry, distillation 관련 요청을 `Opus 4.8`로 다운그레이드할 수 있는 safety-routed 버전을 받는 반면, 선택된 파트너는 safeguard가 더 적은 `Mythos 5`를 받는다는 것이다. 또한 가격/용량 제약도 강조한다. Fable 5는 `June 22`까지만 유료 플랜에 묶이고, 용량이 개선되지 않으면 이후 usage credit으로 이동한다고 알려졌는데, 이는 frontier-agent 경제성이 정액 소비자 구독에 맞지 않을 수 있음을 시사한다. 댓글러들은 frontier AI가 소비자용 안전 버전과 기업/정부급 접근으로 양분될 것이라는 우려에 대체로 동의했으며, 높은 토큰 비용을 비싼 기업 티어의 동인으로 들었다. 한 반대 의견은 오용 가능성과 넓은 공개 노출을 고려하면 safeguard가 정당한 위험 완화라고 옹호했다.

### Less Technical Subreddits: Claude Fable 5 코딩과 3D 앱 데모

- **[Fable is blowing my mind](https://www.reddit.com/r/ClaudeAI/comments/1u1jn4h/fable_is_blowing_my_mind/)** (Activity: 1836): 이 게시물은 **Fable**의 일화적 고성능 코딩 결과를 보고했다. 토큰을 빠르게 소비하면서도 복잡한 프로젝트를 “oneshot”할 수 있다고 주장했고, **3D visuals/audio**가 있는 incremental game과 **admin dashboards**가 포함된 기능 많은 웹앱을 약 `16 min` 만에 오류 없이 생성했다고 했다. 재현 가능한 벤치마크, 프롬프트, 코드, 모델 버전, 가격, artifact 링크는 없으므로 기술적 근거는 사용자 보고의 정성적 행동에 제한된다. 댓글은 대체로 농담조였다. 한 명은 시스템 프롬프트에 “make no mistakes”를 추가했기 때문에 모델이 좋아졌다고 했고, 다른 이는 열역학을 위반하는 요청처럼 불가능한 작업 프롬프트를 언급했다. 더 실질적인 우려는 모델이 비싸다면 대기업은 접근을 유지하는 반면 독립 개발자는 가격 때문에 밀려날 수 있다는 점이었다.
- **[Matt Shumer: "Fable has solved 3D worldbuilding... utterly insane. This is all completely custom-built ThreeJs, running in the browser."](https://www.reddit.com/r/singularity/comments/1u1hmk6/matt_shumer_fable_has_solved_3d_worldbuilding/)** (Activity: 1451): **Matt Shumer**는 [X](https://x.com/mattshumer_/status/2064449498596757643)에서 **Fable**이 “3D worldbuilding을 해결했다”고 주장했고, 네이티브 게임 엔진 런타임이 아니라 *“completely custom-built Three.js”*라고 설명된 브라우저 기반 데모를 보였다. Reddit 텍스트에는 재현 가능한 기술 세부사항, 벤치마크, asset pipeline 설명, 상호작용/성능 지표가 없었고, 연결된 Reddit-hosted video는 `403 Forbidden`으로 접근할 수 없었다. 댓글은 대체로 **“solved”**라는 단어를 AI 업계 hype로 보고 회의적이었으며, 한 댓글러는 그 말이 구체적으로 무엇을 의미하는지 물었다. 또 다른 댓글은 향후 콘솔에서 AI 지원 client-side game modding이 실제로 구현된다면 진짜 흥미로울 수 있다고 했다.
- **[It's over. Claude Fable 5 one-shots horror game live](https://www.reddit.com/r/singularity/comments/1u1h7de/its_over_claude_fable_5_oneshots_horror_game_live/)** (Activity: 2619): 이 게시물은 **Claude “Fable 5”**가 live horror game demo를 *one-shot*할 수 있다고 주장했지만, 첨부된 Reddit video [`v.redd.it/odqru9efjb6h1`](https://v.redd.it/odqru9efjb6h1)는 **HTTP 403 Forbidden** 때문에 검증할 수 없었다. 댓글의 유일한 기술적 맥락은 약 2년 전 Claude-generated game과의 비교였고, 훨씬 거친 출력을 보여주는 스크린샷이 링크됐다: [preview image](https://preview.redd.it/y4m219celb6h1.png?width=494&format=png&auto=webp&s=773959b6fb561d946412080f5cbfc7b566782ced). 댓글러들은 대체로 이를 LLM-assisted game generation의 빠른 진전 증거로 봤고, 결과물이 새로운 게임 디자인이라기보다 2010년대 *Slenderman* 스타일 호러 클론을 닮았다고 농담했다.

---

## AI Discord Recap

### Discord 접근 중단

- **접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형태로는 다시 가져오지 않겠지만, 새 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙다. 좋은 여정이었다.
