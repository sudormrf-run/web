---
title: "OpenAI가 GPT‑5.3 Instant를 전면 배포"
summary:
  - "OpenAI가 GPT‑5.3 Instant를 전면 배포"
  - "Google이 Gemini 3.1 Flash‑Lite 공개"
  - "Alibaba Qwen 리더십 이탈로 OSS 불안"
  - "Together가 5M 컨텍스트 학습 메모리 87% 절감"
  - "Cursor가 MCP Apps로 대화형 UI를 채팅에 통합"
date: 2026-03-03
originalUrl: "https://news.smol.ai/issues/26-03-03-a-quiet-day/"
hasHeadline: false
headline: "OpenAI가 GPT‑5.3 Instant를 전면 배포"
tags:
  - OpenAI
  - Codex
  - Gemini
  - Qwen
  - MCP
isFeatured: false
---

## 헤드라인: OpenAI가 GPT‑5.3 Instant를 전면 배포

- **ChatGPT 전 사용자 롤아웃**: 5.2가 “too cautious”, “too many caveats”라는 불만에 대응해 대화 자연스러움, 불필요한 거절/방어적 면책(disclaimer) 감소, 검색 통합 답변 개선을 내세움 ([GPT-5.3 Instant](https://openai.com/index/gpt-5-3-instant/); [@OpenAI](https://x.com/OpenAI/status/2028893701427302559), [@nickaturley](https://x.com/nickaturley/status/2028894581191000404))
- **환각(hallucination) 감소 주장**: 내부 기여자 기준으로 “검색 포함 시 26.8%”, “미포함 시 19.7%” 개선 수치가 공유되고, 스태프도 이를 재확인함 ([@aidan_mclau](https://x.com/aidan_mclau/status/2028894122959159434); [@christinahkim](https://x.com/christinahkim/status/2028900228196384978))
- **API/Arena 노출**: 커뮤니티에서 API에 “GPT‑5.3‑chat‑latest”가 보인다는 보고가 나왔고, Text Arena에서 나란히 비교 평가가 가능하다고 공유됨 ([@scaling01](https://x.com/scaling01/status/2028906108291616773); [@arena](https://x.com/arena/status/2028908848204177682))
- **GPT‑5.4 예고**: “sooner than you Think” 게시물로 5.4를 티즈했고, “5.3 Thinking and Pro will follow soon”이라는 대화로 순서 혼선이 커졌으며, DoD/NSA 계약 논란 와중 ‘뉴스 사이클 전환용’이라는 추측도 확산됨 ([@OpenAI](https://x.com/OpenAI/status/2028909019977703752); [@kimmonismus](https://x.com/kimmonismus/status/2028924631084605465); [@kimmonismus](https://x.com/kimmonismus/status/2028803185347875207))

---

## AI Twitter Recap

### Gemini 3.1 Flash‑Lite 출시: “dynamic thinking levels” + 공격적 가격/성능

- **Gemini 3.1 Flash‑Lite (Preview)**: Google의 가장 빠르고 가장 비용 효율적인 Gemini 3 시리즈 엔드포인트로 출시됐으며, 대량 트래픽 워크로드를 위해 *latency*(지연)와 *throughput*(처리량)을 강조. DeepMind 런치 스레드는 조절 가능한 **thinking levels**(작업 복잡도에 따라 연산량을 ‘다이얼’처럼 조절)를 통해 “intelligence at scale”을 내세웠고, AI Studio / Vertex를 통한 API 롤아웃도 함께 언급됨 ([@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2028872381477929185); [@Google](https://x.com/Google/status/2028872509601333594)). Jeff Dean은 **$0.25/M input**과 **$1.50/M output**, **LMArena 1432 Elo**, **GPQA Diamond 86.9%**, 그리고 Gemini 2.5 Flash 대비 **time-to-first-token**이 **2.5×** 더 빠르다고 강조함 ([@JeffDean](https://x.com/JeffDean/status/2028876962580816143)); Noam Shazeer는 “thinking levels”를 “maximum intelligence, minimal latency”를 위한 제품 노브(knob)로 재차 강조 ([@NoamShazeer](https://x.com/NoamShazeer/status/2028909105969283565)); Sundar Pichai도 동일한 속도/비용 메시지를 확산 ([@sundarpichai](https://x.com/sundarpichai/status/2028891212573491715)).
- **Third-party benchmarking/positioning**: Artificial Analysis는 Flash‑Lite가 **1M context**를 유지하고, **>360 output tokens/s** 및 평균 응답 지연 ~**5.1s**를 측정했으며, 2.5 Flash‑Lite 대비 “Intelligence Index”가 개선됐지만 **가격은 인상**(혼합 단가가 유의미하게 상승)됐다고 보고함 ([@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2028882198456352852)). Arena는 Flash‑Lite Preview가 Text Arena #36(1432)이며 Code Arena에서도 #35 근방 동률로, 비용-성능 프런티어에서 강한 포인트로 제시 ([@arena](https://x.com/arena/status/2028876727989289449)). 커뮤니티 반응으로는 네이밍과 빠른 출시 주기를 두고 “Flash‑Lite… very funny Google” ([@JasonBotterill](https://x.com/JasonBotterill/status/2028794893624291569)), “테스트 끝내기도 전에 Google이 더 빨리 모델을 내놓는다” ([@matvelloso](https://x.com/matvelloso/status/2028901252437032982)) 같은 말이 반복됨.
- **Multimodal angle**: Google 내부에서는 텍스트+이미지+비디오+오디오+PDF 인제스트(ingestion)에서 “파서(parser)를 쓰지 말고 Flash‑Lite를 쓰라”는 메시지를 밀며, Flash‑Lite를 프로덕션 워크플로우용 *plumbing model*로 각인시키려는 흐름이 있음 ([@koraykv](https://x.com/koraykv/status/2028876507679191392)).

### OpenAI: GPT‑5.3 Instant 롤아웃 + “less preachy” + GPT‑5.4 예고

- **GPT‑5.3 Instant**: 모든 ChatGPT 사용자에게 롤아웃되었고, 5.2가 “too cautious”하며 “too many caveats”가 많다는 불만을 명시적으로 반영했다고 설명. 대화 자연스러움 개선, 불필요한 거절/방어적 면책 감소, 검색 통합 답변 개선을 주장함 ([@OpenAI](https://x.com/OpenAI/status/2028893701427302559), [@nickaturley](https://x.com/nickaturley/status/2028894581191000404)). 또한 환각 감소를 주장했으며, 내부 기여자에 따르면 검색 사용 시 **26.8%**, 미사용 시 **19.7%** 개선이라고 하고, 스태프도 이를 재확인함 ([@aidan_mclau](https://x.com/aidan_mclau/status/2028894122959159434); [@christinahkim](https://x.com/christinahkim/status/2028900228196384978)).
- **API/Arena exposure**: 커뮤니티 보고에 따르면 API에 “GPT‑5.3‑chat‑latest”가 나타났고 ([@scaling01](https://x.com/scaling01/status/2028906108291616773)), Text Arena에서도 나란히(side-by-side) 평가가 가능하다고 함 ([@arena](https://x.com/arena/status/2028908848204177682)).
- **GPT‑5.4 teased**: 높은 참여를 끈 “sooner than you Think” 게시물로 5.4를 예고함 ([@OpenAI](https://x.com/OpenAI/status/2028909019977703752)). “5.3 Thinking and Pro will follow soon”이라는 말과의 순서 혼선도 커졌고 ([@kimmonismus](https://x.com/kimmonismus/status/2028924631084605465)), DoD/NSA 계약 논란 속에서 5.4가 *news-cycle deflection*(뉴스 사이클 전환)으로 쓰인다는 추측도 반복됨 ([@kimmonismus](https://x.com/kimmonismus/status/2028803185347875207)).

### Alibaba Qwen 쇼크: 리더십 이탈, “Qwen is nothing without its people,” 그리고 오픈소스 불확실성

- **Key departures**: Qwen 기술 리더십과 시니어 기여자들의 이탈이 데이터셋 전반의 큰 흐름. Justin Lin의 “stepping down” 게시물이 큰 반응을 낳았고 ([@JustinLin610](https://x.com/JustinLin610/status/2028865835373359513)), 이후 추가 이탈(“bye qwen, me too”) ([@huybery](https://x.com/huybery/status/2028976346416988612))과 별도 작별 인사 ([@kxli_2000](https://x.com/kxli_2000/status/2028880971945394553))가 이어짐. 외부에서는 Alibaba Cloud가 Qwen의 테크 리드를 “kicking out”했다고 묘사하기도 함 ([@YouJiacheng](https://x.com/YouJiacheng/status/2028880908305219729)).
- **Why it matters technically**: 많은 엔지니어들이 Qwen을 오픈 모델 생태계의 *critical infrastructure*로 봄. 특히 **<10B** 및 “Pareto frontier” 모델, VLM/OCR 파생에 중요하다는 관점이며, 오픈 웨이트(open weights) 출시 속도가 느려지거나 라이선스가 바뀌면 생태계 리스크라는 프레이밍이 등장 ([@natolambert](https://x.com/natolambert/status/2028893211759124890), [@teortaxesTex](https://x.com/teortaxesTex/status/2028874511509000646), [@awnihannun](https://x.com/awnihannun/status/2028902061384057211)). “popular open models wasn’t enough”라는 맥락에서 Qwen의 OSS 태도 변화 가능성도 곧바로 추측됨 ([@code_star](https://x.com/code_star/status/2028913595602616391)).
- **Organizational diagnosis**: 상위 Alibaba 구조(CEO 보고) 아래 “unification”이 정치적 압력(영향력/가시성)을 키웠다는 해석이 반복됨 ([@Xinyu2ML](https://x.com/Xinyu2ML/status/2028891170592473385)). 더 넓게는, 외부 신뢰를 쌓는 “bridges”가 빅테크 위계에서 불리해진다는 코멘터리도 등장 ([@hxiao](https://x.com/hxiao/status/2028932213228900701)).
- **Despite the turmoil, shipping continues**: Qwen 3.5 LoRA fine-tuning 가이드와 저 VRAM 학습 레시피(특히 Unsloth)가 빠르게 확산 ([@UnslothAI](https://x.com/UnslothAI/status/2028845314506150079)), **GPTQ Int4** 웨이트와 vLLM/SGLang 지원도 홍보됨 ([@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2028846103257616477)). Qwen3.5 관련 교육/재구현도 커뮤니티에서 추진 ([@rasbt](https://x.com/rasbt/status/2028961822372425941)). 핵심 긴장은 *강한 출시 속도*와 *리더십 이탈*의 동시 발생.

### Long-context + 학습 효율: “impossible” 컨텍스트 윈도를 현실로

- **87% attention-memory reduction for long-context training**: Together 논문이 **Context Parallelism**과 **Sequence Parallel** 스타일의 head chunking 하이브리드를 강조하며, **8×H100**(단일 노드)에서 **5M context window**의 8B 모델 학습을 주장, attention 메모리 풋프린트를 최대 **87%**까지 줄였다고 함 ([@rronak_](https://x.com/rronak_/status/2028718679123497007)). 또한 장문 컨텍스트(long-context) 프런티어 모델의 RL 포스트 트레이닝(post-training)은 메모리 비용 때문에 여전히 전체 컨텍스트의 일부만 쓰는 경우가 많다는 실무 갭도 지적.
- **FlashOptim (Databricks)**: 업데이트 등가성(update equivalence)을 유지하면서 메모리를 줄이는 AdamW/SGD/Lion 옵티마이저 구현을 오픈소스로 공개했고 `pip install flashoptim`을 안내 ([@davisblalock](https://x.com/davisblalock/status/2028943987349045610)). MosaicAI는 **>50%** 학습 메모리 감소를 요약하며, AdamW 오버헤드를 ~**16 bytes/param**에서 **7 bytes**(gradient release 시 **5**)로 낮추고, 8B 파인튜닝 예시 피크를 **175 GiB → 113 GiB**로 줄였다고 설명 ([@DbrxMosaicAI](https://x.com/DbrxMosaicAI/status/2028977216940589383)).
- **Heterogeneous infra for RL**: SkyPilot은 RL 포스트 트레이닝을 **beefy GPUs (trainer)**, **cheap GPUs (rollouts)**, **high-memory CPUs (replay buffers)**로 분리해야 한다고 주장. Job Groups는 단일 YAML로 오케스트레이션(수명주기 조율, 서비스 디스커버리 포함)을 제공한다고 함 ([@skypilot_org](https://x.com/skypilot_org/status/2028878888211013907)).
- **Kernel/toolchain gotchas**: CuTeDSL + `torch.compile` 회귀(regression) 보고에서, 커스텀 op로 compile 호환을 만들면 wrapped kernel(예: RMSNorm “Quack” kernels)에서 ~**2.5×** 느려질 수 있다고 함. 커널 레벨 속도와 그래프 컴파일 요구 사이의 마찰을 강조 ([@maharshii](https://x.com/maharshii/status/2028863745641112008)).

### Agent engineering 현실 점검: 벤치마크 vs “real work”, 합의 실패, 툴링 변화(MCP, sandbox, 관측성)

- **Benchmarks don’t match labor economics**: 에이전트 벤치마크를 실제 업무 분포와 연결해보려는 새 DB가 등장했고, 현재 평가는 수학/코딩에 과도하게 치우쳐 있으며 실제 노동/자본 분포는 다른 곳에 더 많다고 주장 ([@ZhiruoW](https://x.com/ZhiruoW/status/2028847081507488011)). 이는 “real work”를 위한 AI 벤치마킹의 중심 문제로 부각됨 ([@emollick](https://x.com/emollick/status/2028870529906622677)). Arena의 **Document Arena** 출시는 이에 대한 직접적 대응으로, PDF 추론을 나란히 비교 평가하며 Claude Opus 4.6이 선두( Arena 주장 )라고 함 ([@arena](https://x.com/arena/status/2028915403704156581)).
- **Multi-agent coordination is fragile**: Byzantine 합의 게임에서 LLM 에이전트의 합의가 선의 환경에서도 신뢰하기 어렵다는 결과가 제시됨. 실패의 상당 부분이 적대적 오염보다 **stalls/timeouts**에서 오며, 그룹 규모가 커질수록 악화된다고 함 ([@omarsar0](https://x.com/omarsar0/status/2028823724196343923)). Theory of Mind + BDI + 심볼릭 검증 관련 보완 연구는, 인지적 “ToM modules”가 자동으로 도움 되는 게 아니라 기본 모델 역량에 강하게 좌우된다고 시사 ([@omarsar0](https://x.com/omarsar0/status/2028913061260935331)).
- **MCP “dead?” vs MCP expanding**: DAIR의 Omar가 “MCP is dead?”를 던지지만 ([@omarsar0](https://x.com/omarsar0/status/2028840977922674842)), 같은 데이터셋에서 MCP 채택은 확장: Notion이 Meeting Notes용 MCP/API 지원을 출시(Claude Code로 원라이너 설치) ([@zachtratar](https://x.com/zachtratar/status/2028881783551570209)); Cursor는 에이전트 채팅 안에서 인터랙티브 UI를 렌더링하는 **MCP Apps**를 출시 ([@cursor_ai](https://x.com/cursor_ai/status/2028953584407085546)).
- **“Kill code review” debate**: swyx는 인간 코드 리뷰 제거를 에이전틱 엔지니어링과 SDLC 역전(inversion)의 “Final Boss”로 프레이밍 ([@swyx](https://x.com/swyx/status/2028795270306079156)). 반면 thdxr는 LLM으로 “이만큼의 코드”를 생산하는 팀은 도구를 잘못 쓰는 것일 수 있으며, 대규모 코드 볼륨이 자기파괴적 코드베이스를 만들고 LLM 자체도 그 복잡성에 취약하다고 주장 ([@thdxr](https://x.com/thdxr/status/2028827251534352764)).
- **Sandboxed “computer use” platforms**: Perplexity의 “Computer”가 큰 참여를 끌며 Srinivas가 기능 요청을 수집 ([@AravSrinivas](https://x.com/AravSrinivas/status/2028742933403574585)). Perplexity는 여러 모델을 오케스트레이션하고, 보안 샌드박스에서 관리형으로 앱에 내장( API 키 관리 불필요 )된다고 포지셔닝 ([@AravSrinivas](https://x.com/AravSrinivas/status/2028903680616087946), [@AskPerplexity](https://x.com/AskPerplexity/status/2028893546447814895)). Cursor의 클라우드 에이전트도 격리 VM에서 실행되고 아티팩트와 함께 머지 가능한 PR을 출력한다고 함 ([@dl_weekly](https://x.com/dl_weekly/status/2028844128729973060)).

### 인재, 거버넌스, 신뢰: Anthropic vs DoD, OpenAI 계약 논란, 고위직 이동

- **Max Schwarzer (VP Post-Training at OpenAI) → Anthropic**: Schwarzer가 OpenAI를 떠나(포스트 트레이닝 리드, GPT‑5/5.1/5.2/5.3-Codex 출시 참여) Anthropic으로 이동, IC RL 연구로 복귀한다고 발표 ([@max_a_schwarzer](https://x.com/max_a_schwarzer/status/2028939154944585989)). “Anthropic의 큰 승리” 서사 ([@kimmonismus](https://x.com/kimmonismus/status/2028952074063331421))와 “legends dropping out” 불안감도 동반 ([@yacinelearning](https://x.com/yacinelearning/status/2028880802797199476)).
- **Anthropic vs Pentagon/Palantir tension**: 보도에 따르면 DoD가 Anthropic을 “supply chain risk”로 분류하겠다고 위협해 Palantir의 연방 업무 사용에 영향을 줄 수 있다는 주장. Anthropic은 (대규모 국내 감시, 자율 무기 등) 가드레일을 원한다는 맥락 ([@srimuppidi](https://x.com/srimuppidi/status/2028943303581024412)), 추가 커버리지 포인터도 공유됨 ([@aaronpholmes](https://x.com/aaronpholmes/status/2028942999548297464)).
- **OpenAI–DoD / NSA trust crisis**: 다수 트윗이 실제 계약 문구 공개를 요구하며, “incidental” 감시 표현이 과거 영장 없는 국내 감시를 가능케 했다는 문제제기와 PRISM/Upstream 및 FISA/EO 12333 맥락이 언급됨 ([@jeremyphoward](https://x.com/jeremyphoward/status/2028805970214912125)). “믿어달라”가 아니라 독립적인 법률 레드팀(legal red-teaming)이 필요하다는 주장도 반복 ([@sjgadler](https://x.com/sjgadler/status/2028899096283758732)). 이는 모델 출시가 내러티브를 돌리려는 시도라는 가설과도 연결됨.
- **Market-share claims**: Claude가 1년 만에 미국 비즈니스 시장 점유에서 ChatGPT 대비 우세로 급상승했다는 바이럴 주장 ([@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2028974344710606905)). 기저 데이터셋을 검증하기 전까지는 방향성 정도로 보라고 하면서도, “coding + agents paid off”라는 인식된 모멘텀을 반영한다고 평가.

### 참여도 상위 트윗(기술 중심)

- **GPT‑5.4 teaser**: “5.4 sooner than you Think.” [@OpenAI](https://x.com/OpenAI/status/2028909019977703752)
- **Gemini 3.1 Flash‑Lite launch thread** [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2028872381477929185)
- **GPT‑5.3 Instant rollout + “less preachy”** [@OpenAI](https://x.com/OpenAI/status/2028893701427302559)
- **Qwen leadership departure (“stepping down”)** [@JustinLin610](https://x.com/JustinLin610/status/2028865835373359513) and follow-on sign-offs [@huybery](https://x.com/huybery/status/2028976346416988612)
- **Unsloth: Qwen3.5 LoRA with ~5GB VRAM claim + notebook** [@UnslothAI](https://x.com/UnslothAI/status/2028845314506150079)
- **Cursor: MCP Apps (interactive UIs inside agent chat)** [@cursor_ai](https://x.com/cursor_ai/status/2028953584407085546)
- **Together long-context training memory reduction (up to 87%)** [@rronak_](https://x.com/rronak_/status/2028718679123497007)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen 2.5 -> 3 -> 3.5, smallest models. Incredible improvement over the generations.](https://www.reddit.com/r/LocalLLaMA/comments/1rjd4pv/qwen_25_3_35_smallest_models_incredible/)** (Activity: 1017): **Qwen 3.5**는 Qwen 모델 계열에서 눈에 띄는 진전으로, 비전 인코더(vision encoder)를 포함한 `0.8B` 파라미터 모델이 있어 언어 모델 부분은 더 작을 수도 있음을 시사한다. 이는 더 작고 효율적인 모델(예: 소형 MoE(Mixture of Experts) 모델)로 향하는 흐름의 일부로, 성능 면에서 호평을 받는다. 다만 크기 대비로도 항공기 엔진 관련 오정보 등 사실 오류가 지적되어 엄격한 팩트체크 필요성이 강조된다. 댓글에서는 Qwen 3.5 같은 소형 모델이 로컬 머신에서 개인 비서를 가능하게 할 수 있다는 기대(효율·접근성)를 강조하는 한편, 사실 환각(hallucination) 경향이 신뢰성을 해칠 수 있다는 우려도 나온다.
- 소형 Qwen 모델, 특히 MoE(Mixture of Experts) 모델은 세대가 바뀌며 성능 향상이 매우 크다는 평가가 있다. 로컬 환경 개인 사용에도 점점 현실적인 선택지가 되고 있다.
- Qwen 3.5의 환각(hallucination) 문제가 지적되며, 항공기 엔진 종류/구성에 대한 구체적 오류 사례가 언급된다. AI 출력이 확신에 차서 틀릴 수 있어 팩트체킹이 중요하다는 맥락이다.
- 4B 같은 소형 양자화(quantized) 모델의 효율이 칭찬되며, `llama.cpp`로 128k 컨텍스트에서 초당 60 토큰을 달성했다는 보고도 있다. 이는 자원 제약 로컬 환경에서 고성능 AI 가능성을 보여준다는 평가다.
- **[Visualizing All Qwen 3.5 vs Qwen 3 Benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1rivckt/visualizing_all_qwen_35_vs_qwen_3_benchmarks/)** (Activity: 736): 이미지는 **Qwen 3.5 models**(신형)과 **Qwen 3 models**(구형)의 벤치마크 성능을 Knowledge & STEM, Instruction Following, Long Context, Math, Coding, General Agent, Multilingualism 등으로 비교한 막대그래프다. 색상으로 버전을 구분하며, 신형 Qwen 3.5는 **Purple/Blue/Cyan**, 구형 Qwen 3는 **Orange/Yellow**로 표시된다. 일부 소형 모델 데이터가 빠졌지만 빠른 비교를 목표로 하며, 원데이터는 [Google Sheet](https://docs.google.com/spreadsheets/d/1A5jmS7rDJe114qhRXo8CLEB3csKaFnNKsUdeCkbx_gM/edit?usp=sharing)에 공개되어 있다. 댓글에서는 차트의 명확성과 유용성을 비판하거나, “모든 테스트에서 Qwen 3.5가 Qwen 3를 이긴다”는 결과 자체를 믿기 어렵다며 성능 주장 정확성에 회의적인 반응도 있다.
- 벤치마크 결과에서 Qwen 3.5, 특히 9B dense 모델이 Qwen 3 122B A10B 같은 대형 모델과 비교해도 예외적으로 잘 나온다는 점이 강조된다. 9B가 10배 이상 작음에도 여러 카테고리에서 근접 경쟁한다는 점이 놀랍다는 반응이다.
- Qwen 3.5 35B A3B가 Qwen 3 235B A22B를 모든 테스트에서 앞선다는 점을 두고, 벤치마크 유효성에 대한 의문이 제기된다. 결과가 실제 역량을 반영하는지에 대한 회의다.
- 댓글에서 공유된 상세 벤치마크 표는 여러 Qwen 모델의 카테고리별 성능을 보여준다. 예를 들어 Qwen 3.5-122B-A10B가 Instruction Following과 Math에서 전 세대 대비 개선을 보인다는 식이다. 다만 표 자체가 해석하기 어렵다는 비판도 있다.
- **[Running Qwen 3.5 0.8B locally in the browser on WebGPU w/ Transformers.js](https://www.reddit.com/r/LocalLLaMA/comments/1rizodv/running_qwen_35_08b_locally_in_the_browser_on/)** (Activity: 501): `0.8B` 파라미터 변형을 포함한 **Qwen 3.5 Small** 모델이 온디바이스 용도로 공개되었고, **WebGPU**와 **Transformers.js**로 브라우저에서 로컬 실행하는 데모가 소개된다. 브라우저 내 실행 가능성을 보여주지만, **vision encoder**가 성능 병목으로 지목된다. 모델은 [Hugging Face](https://huggingface.co/collections/Qwen/qwen35)에 있고, 데모는 [here](https://huggingface.co/spaces/webml-community/Qwen3.5-0.8B-WebGPU)에서 볼 수 있다. 댓글에서는 VRAM 문제 없이 처리량을 높이기 위해 `llama.cpp WASM`으로 `q4 GGUF`를 쓰자는 제안도 나오며, 데모가 비디오 입력이 아니라 정지 스크린샷을 처리한다는 설명도 있다.
- WebGPU에서 vision encoder가 병목이라는 지적과 함께, `llama.cpp WASM`으로 `q4 GGUF`를 쓰면 처리량 개선과 VRAM thrashing 회피에 도움이 된다는 제안이 있다.
- 입력 타입 관련 уточ정: 이 모델은 비디오를 처리하지 않고, 프롬프트를 보낼 때의 현재 화면을 스크린샷으로 캡처해 사용한다는 설명이다.
- ‘start’ 버튼이 반응하지 않아 진행을 시작할 수 없다는 기술적 이슈가 보고된다. UI 버그나 초기화 시퀀스 문제 가능성이 언급된다.
- **[Unsloth fixed version of Qwen3.5-35B-A3B is incredible at research tasks.](https://www.reddit.com/r/LocalLLaMA/comments/1rjh5wg/unsloth_fixed_version_of_qwen3535ba3b_is/)** (Activity: 417): **Unsloth**의 업데이트된 **Qwen3.5-35B-A3B**는 툴 호출(tool calling) 이슈를 고친 뒤 리서치 작업 처리에서 큰 개선을 보였다는 내용. `35 billion parameters`와 하이브리드 선형 어텐션(hybrid linear attention)을 사용해, 메모리 풋프린트 증가 없이 네이티브 컨텍스트 길이를 두 배로 늘릴 수 있다고 한다. **Ryzen AI Max+ 395 system**에서 `llama.cpp-rocm`을 `--ctx-size 262144`, `--n-gpu-layers 999` 등으로 테스트했고, 프롬프트 처리 `600+ tokens/second`, 생성 `25-30 tokens/second`를 달성했다고 한다. `14 web searches`와 `4 full page fetches`를 수행하면서도 툴 사용 밸런스를 유지한 점이 이전 모델(**GLM-4.7-Flash**) 대비 개선으로 언급된다. Linux Fedora 43의 원격 데스크톱 솔루션을 제안하는 성능이 프런티어 모델에 준했다고도 하며, **Sunshine+Moonlight**를 더 강하게 추천했어야 한다는 지적이 있다. 댓글에서는 **RustDesk**가 해당 상황에서 더 좋은 솔루션이라는 주장과, **LM Studio**가 시스템 프롬프트의 `{{CURRENT_DATE}}`를 파싱하지 못할 수 있다는 이슈(수정 필요)도 언급된다.
- 댓글 요약 오류.
- **[Qwen 3.5 27b: a testament to the transformer architecture](https://www.reddit.com/r/LocalLLaMA/comments/1rj6m71/qwen_35_27b_a_testament_to_the_transformer/)** (Activity: 557): **Qwen 3.5 27b**는 **R1 0528**에 준하는 추론/지식 테스트 성능을 보이며 트랜스포머 계열의 진전을 보여준다는 주장. 특히 전체 트랜스포머가 아니라 `75%` 레이어가 **Gated DeltaNet linear attention**을 쓰는 하이브리드 구조를 채택한다. `27b` 파라미터로 단일 컨슈머 GPU에 들어가면서도, 과거 `70b`와 클러스터급 컴퓨트가 필요했던 작업을 수행할 수 있다는 점이 큰 도약으로 평가된다. 코딩 영역 fine-tuning 잠재력도 강점으로 언급된다. 댓글에서는 지시 따르기(instruction-following) 개선과, 시스템 프롬프트로 ‘성격’을 주입할 수 있다는 점이 강조되며, Gated DeltaNet linear attention이 효율·성능에 기여하는 아키텍처 혁신이라는 평가가 나온다.
- victory_and_death는 Qwen 3.5 27b가 전통적 트랜스포머를 완전히 쓰지 않고, 75% 레이어에서 Gated DeltaNet linear attention을 쓴다는 점을 강조한다. 이 구조가 효율과 컨슈머 하드웨어 실행 가능성에 기여했을 것이라는 해석이다.
- Pitiful-Impression70는 Qwen 3.5 27b가 R1 0528 같은 더 큰 모델과 경쟁하는 성능이 인상적이라고 말한다. 270억 파라미터 dense 모델이 과거 700억 파라미터가 필요하던 일을 하고, 단일 컨슈머 GPU에서 돌아간다는 점이 빠른 효율·역량 발전을 보여준다고 평가한다.
- National_Meeting_749는 Qwen 3.5 27b 같은 최신 모델의 instruction-following이 개선되어, 시스템 프롬프트로 성격을 주입해 상호작용 품질을 높일 수 있다고 말한다. 이는 이전 세대 대비 큰 진전이라는 맥락이다.
- **[Running Qwen3.5-0.8B on my 7-year-old Samsung S10E](https://www.reddit.com/r/LocalLLaMA/comments/1rj5ngc/running_qwen3508b_on_my_7yearold_samsung_s10e/)** (Activity: 330): 이미지는 `llama.cpp`로 Samsung S10E에서 Qwen3.5-0.8B를 성공적으로 실행한 모습을 보여준다. `12 tokens per second` 처리 속도를 달성했는데, 기기 연식과 하드웨어 제약을 감안하면 주목할 만하다는 평가다. `llama.cpp`의 NEON SIMD 경로 같은 최적화를 통해 ARM 칩에서 성능을 끌어올릴 수 있다는 점이 강조되며, 오래된 하드웨어에서도 고도화된 AI를 돌릴 잠재력을 보여준다고 한다. 댓글에서는 1년 전이면 이런 기기에서의 대화 역량이 예상 밖이었다는 반응과, `llama.cpp` 설치 방법 및 사용한 양자화(quantization)(Q4_0 또는 Q8)에 대한 궁금증이 나온다.
- sean_hash는 Snapdragon 855에서 Qwen3.5-0.8B를 초당 `12 tokens`로 돌린 성능을 강조한다. NEON SIMD 경로가 오래된 ARM 칩에서 성능을 크게 개선해 준다는 맥락이다.
- rm-rf-rm는 `llama.cpp` 설치 과정을 질문하며 재현하려는 관심을 보인다. 구현 디테일과 구동 난이도에 대한 기술적 호기심을 반영한다.
- WPBaka는 0.8B 모델의 실용적 용도에 의문을 제기하며, 기본 대화 이상이 가능한지 회의적이다. 이는 소형 모델의 유틸리티를 둘러싼 더 넓은 논쟁을 반영한다.
- **[Apple unveils M5 Pro and M5 Max, citing up to 4× faster LLM prompt processing than M4 Pro and M4 Max](https://www.reddit.com/r/LocalLLaMA/comments/1rjqsv6/apple_unveils_m5_pro_and_m5_max_citing_up_to_4/)** (Activity: 822): Apple이 M5 Pro와 M5 Max 칩을 발표했고, M4 Pro/Max 대비 LLM 프롬프트 처리에서 최대 4× 빠르다고 주장한다. M5 Pro는 최대 64GB 통합 메모리와 307GB/s 대역폭, M5 Max는 최대 128GB 통합 메모리와 614GB/s 대역폭을 지원한다. 또한 SSD 속도가 최대 2× 향상되어 14.5GB/s에 이르며, Wi‑Fi 7을 위한 Apple N1 무선 칩을 포함해 라우터가 호환되면 다운로드 속도가 개선된다고 한다. 이미지에는 3D 모델링·프로그래밍 같은 복잡 작업을 효율적으로 처리한다는 메시지가 담긴다. 댓글에서는 Neural Accelerator 같은 더 진보한 AI 전용 실리콘 부재를 아쉬워하는 반응과, 향후 Mac Studio에서의 잠재력을 기대하는 반응이 공존한다.
- M5 Pro/Max는 메모리 용량과 대역폭 측면에서 큰 개선을 제공한다. 대규모 ML 모델과 데이터 집약 작업 처리에 중요하다는 관점이다.
- SSD 14.5GB/s 수준의 2× 향상과 Wi‑Fi 7 지원(N1 칩 포함)으로 데이터 접근 및 연결성 개선이 언급된다.
- M5 Max의 성능이 향후 Mac Studio, 그리고 M5 Ultra 변형에 대한 기대치를 가늠하게 할 수 있다는 관측이 있고, 일부는 Mac Studio 업데이트가 M6까지 미뤄질 수 있다고 추측한다.
- **[ChatGPT uninstalls surged by 295% after Pentagon deal](https://www.reddit.com/r/LocalLLM/comments/1rjlzgy/chatgpt_uninstalls_surged_by_295_after_pentagon/)** (Activity: 348): 이미지는 ChatGPT와 Pentagon의 ‘딜’ 이후 ChatGPT 앱 uninstall이 295% 급증했다는 상관관계를 밈으로 표현한다. 하락 그래프와 Pentagon 로고 등 시각 요소로 부정적 반응을 암시하지만, 댓글에서는 출처와 맥락이 부족해 uninstall 데이터의 유효성과 규모를 의심한다. 전체 사용자 대비 uninstall 비율의 의미가 과장될 수 있다는 회의도 나온다.
- Pentagon 딜 이후 uninstall 295% 급증 주장에 대해, 베이스라인 규모에 따라 절대 수치가 작을 수 있다는 지적이 나온다(전체 churn 대비 작은 변동일 수도 있다는 추측).
- 군사 분야 AI 적용의 함의가 언급되며, 방위 시스템에 AI가 통합되는 것이 기술 발전의 자연스러운 흐름이라는 의견도 등장한다. 이는 군사 적용의 윤리·전략적 논쟁으로 이어진다.
- TechCrunch 기사 링크가 제공되며 uninstall 급증 주장을 뒷받침하는 듯하다는 언급이 있다. 다만 원 게시물은 초기에 출처 부족으로 의심을 받았다는 맥락이다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[We know why!](https://www.reddit.com/r/singularity/comments/1rjyy3f/we_know_why/)** (Activity: 994): 이미지는 Thariq라는 사용자가 “Claude and Claude Code” 트래픽이 예상을 넘어 급증했고 예측이 어려웠다고 말하는 트윗을 담고 있다. 스케일링을 진행하는 동안 기다려준 사용자에게 감사하는 내용이며, 서비스가 급성장하며 확장 문제를 겪는 것으로 보인다. 댓글에서는 경쟁과 정치적 요인이 업계 역학에 영향을 준다는 암시도 나온다.
- FalconsArentReal는 중동의 AWS 데이터센터가 이란의 미사일 공격을 받았다는 주장(알legedly)을 언급하며, Anthropic이 AWS를 사용하므로 영향이 있었을 수 있다고 추측한다. 중동 트래픽이 북미로 우회되면서, OpenAI에서 넘어온 사용자로 이미 부담된 북미 데이터센터에 추가 압력이 생겨 운영상 큰 문제가 발생했을 수 있다는 가설이다.
- legaltrouble69는 상위 2개 AI 회사 중 하나가 ‘캔슬’되거나 장애가 나면, 다른 하나가 스케일링 문제로 버티기 어려울 수 있다는 전략적 취약성을 농담 섞어 제안한다. 업계 상호의존성과 취약성을 강조하는 코멘트다.
- SomewhereNo8378는 미국 정부에 맞서는 기업이 드물고, 그렇게 하면 큰 어려움을 겪는다는 정치적 관찰을 덧붙인다.
- **[Claude and Claude Code traffic grew faster than expected this week](https://www.reddit.com/r/ClaudeAI/comments/1rjyp7d/claude_and_claude_code_traffic_grew_faster_than/)** (Activity: 1518): **Anthropic**이 Claude와 Claude Code 트래픽이 예상보다 빠르게 증가했다고 보고했고, 인프라를 확장 중이라는 맥락이다. Thariq의 트윗을 스크린샷으로 보여주며, 급증과 대응을 강조한다. 댓글에서는 유료 구독자 증가가 원인일 수 있다는 추측과, 제한이 더 빨리 걸린다는 체감(부하) 언급이 나온다.
- **[New: Voice mode is rolling out now in Claude Code, live for ~5% of users today, details below](https://www.reddit.com/r/ClaudeAI/comments/1rjkwqk/new_voice_mode_is_rolling_out_now_in_claude_code/)** (Activity: 950): **Claude Code**에 *Voice Mode*가 도입되었고, 오늘 기준 사용자 `~5%`에 공개되었으며 점진 확장 예정. 스페이스바를 누른 채로 push-to-talk로 말하면 커서 위치에 텍스트가 스트리밍되며 기존 텍스트를 덮어쓰지 않는다. 비용 추가나 토큰 제한 변화 없이 Pro/Max/Team/Enterprise에서 사용 가능하다고 한다. [Source](https://x.com/i/status/2028628570692890800) 댓글에서는 실시간 대화형 보이스 어시스턴트에 대한 수요(회의·제안서 등)와, Wispr Flow 같은 스타트업을 기능 하나로 위협할 수 있다는 관측이 나온다.
- universenz는 Claude Code의 음성 기능이 더 상호작용적인 개인 비서를 만들 여지가 있다고 본다. ChatGPT 음성으로 회의·제안 내용을 말로 풀고 AI가 기술 요약으로 바꾸는 사용 방식과 비교한다.
- PulpAssets는 Claude의 음성 기능이 Wispr Flow 같은 니치 스타트업에 타격이 될 수 있다고 말한다(대형 모델의 단일 기능이 시장을 잠식할 수 있다는 관점).
- **[Gemini 3.1 Flash Lite](https://www.reddit.com/r/Bard/comments/1rjtfa3/gemini_31_flash_lite/)** (Activity: 394): 이미지는 **Google’s Gemini 3.1 Flash Lite** 프리뷰를 보여주며, 대량 사용(high-volume)을 위한 고효율 모델이고 컨텍스트가 `1,048,576`임을 강조한다. 2026년 3월 3일 출시 일정과 입력/출력/오디오 토큰 가격이 포함되어 있다. Gemini 2.5 Flash Lite의 후속처럼 보이지만 비용 상승이 커 기존 구현에 경제성이 맞는지 논쟁이 나온다.
- Scary_Light6143는 3x 가격 인상을 강조하며, 대부분 구현에서 성능 향상이 비용을 정당화할지 의문을 제기한다.
- Accurate-Tap-8634는 Gemini 2.5 Flash Lite 가격(`$0.1` 입력, `$0.4` 출력, `$0.3` 오디오)을 구체적으로 제시해 비교 기준을 제공한다.
- cmredd는 입력 `2.5x`, 출력 `3.75x` 수준의 증가를 지적하며, 모델이 더 비싸지는 추세에 회의적이다.
- **[Gemini 3.1 Flash-Lite Benchmark Comparison](https://www.reddit.com/r/Bard/comments/1rjusj5/gemini_31_flashlite_benchmark_comparison/)** (Activity: 146): **Gemini 3.1 Flash-Lite**가 **3 Flash**가 아니라 **2.5 Flash**와 비교된다는 점을 논의한다. **Gemini 3.1 Flash Lite** 모델 카드 [here](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/), **3 Flash** 모델 카드 [here](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Flash-Model-Card.pdf). 가격은 `3.1 Flash Lite - $0.25 input/$1.50 output`, `2.5 Flash Lite - $0.10 input/$0.40 output`로, 3.1이 3 Flash보다는 싸지만 대량 데이터 처리에서 비용 효율이 낮을 수 있다는 관점이 제시된다.
- Important-Farmer-846는 대량 처리에서는 2.5 Flash Lite가 여전히 더 비용 효율적이라고 본다(3.1이 Flash 3의 절반 가격이지만 2.5 Lite의 두 배라는 관점).
- ExpertPerformer는 모델별 비용 비교를 제시하며, 3.1 Flash Lite가 다른 대안 대비 cost-performance가 약할 수 있다고 주장한다(예: MinMax M2.5, Grok 4.1 등과 비교).
- ThomasMalloc는 ‘High’ thinking 모드에서 3.1 Flash Lite가 2.5 Lite보다 14배 오래 걸렸고 출력 토큰을 과도하게 사용했다고 지적한다(65,436 vs 6,980). 비용/토큰 사용을 줄이려면 ‘Minimal’ 또는 ‘Low’ thinking이 낫다는 제안이다.
- **[Damnnnn!](https://www.reddit.com/r/singularity/comments/1rjc5to/damnnnn/)** (Activity: 2419): TechCrunch의 X.com 스크린샷 형태 밈으로, DoD 딜 이후 ChatGPT uninstall이 `295%` 증가했다는 메시지가 크게 확산된 사례. 상단 댓글은 퍼센트가 베이스라인 없이 오해를 부를 수 있다고 지적한다. 또 다른 댓글은 uninstall로 인한 수익 감소가 있어도 DoD 계약이 이를 상쇄할 수 있다는 추측을 한다. 개인정보/프라이버시 우려도 논쟁의 중심이다.
- mazdarx2001는 유료 사용자 100만 명이 월 $20을 해지하면 월 $2천만 손실이라 계산하지만, DoD 계약이 세금 기반으로 그 이상을 가져올 수 있다는 논리를 제시한다.
- Orangeshoeman는 DoD 계약이 프라이버시 민감층의 이탈로 이어져 B2B/다운스트림 매출에도 악영향이 있을 수 있다고 우려한다.
- **[ChatGPT Uninstalls Surge 295% After OpenAI’s DoD Deal Sparks Backlash](https://www.reddit.com/r/ChatGPT/comments/1rjfipu/chatgpt_uninstalls_surge_295_after_openais_dod/)** (Activity: 2938): OpenAI의 미국 국방부(DoD) 파트너십 이후 ChatGPT 모바일 앱 uninstall이 `295%` 증가해 강한 반발이 나타났다는 주장. 정부 계약이 평판 리스크를 만들고, 경쟁사 Claude 다운로드가 늘었다는 맥락도 제시된다. 자세한 내용은 [original article](https://techputs.com/chatgpt-uninstalls-surge-295-percent-dod-deal/) 참조. 댓글에서는 OpenAI가 소비자 서비스보다 광고/정부 계약 같은 다른 수익원으로 이동할 수 있다는 추측과, 이러한 반발이 예상된 일이었다는 반응이 나온다.
- EnotHOME는 295%가 베이스라인에 따라 의미가 작을 수 있다고 말한다(예: 1,000 → 4,000 uninstall).
- coronakillme는 295%가 “세 배 조금 안 되게 늘었다”는 의미로 이해하고, 원래 uninstall 수가 얼마였는지가 중요하다고 지적한다.
- **[Cancelling subscription - goodbye Sam I’m not funding your war machine!](https://www.reddit.com/r/ChatGPT/comments/1rjg8m0/cancelling_subscription_goodbye_sam_im_not/)** (Activity: 606): 이미지에는 OpenAI가 ChatGPT Plus 구독 해지를 확인하는 이메일이 있고, 구독이 2026년 3월 23일까지 유지된다는 내용이 담겼다. 제목은 OpenAI가 군사 적용에 관여한다고 보는 항의의 맥락이다. 댓글에서는 Yahoo Mail 사용을 두고 농담이 나오거나, DoD 관련 Anthropic 논란을 함께 언급한다. 링크된 Bloomberg 기사에서 Pentagon 드론 스웜 콘테스트 관련 Anthropic 맥락이 소개된다는 설명도 있다.
- VVadjet는 빅테크의 국방/정보기관 협업이 보편적이라며, Anthropic의 최근 행보가 PR 실수였을 수 있다고 말한다. 또한 [Bloomberg article](http://bloomberg.com/news/articles/2026-03-02/anthropic-made-pitch-in-drone-swarm-contest-during-pentagon-feud)을 인용한다.
- ClankerCore는 구호나 스크린샷이 아니라 계약 문구, 제약, 집행, 감시(oversight) 등 구체 분석이 필요하다고 강조한다. 또한 Claude의 제한/아웃티지 등 인프라 문제도 언급한다.
- LiteratureMaximum125는 Yahoo의 정부 감시 협조 관련 보도를 언급하며, [source](https://lieu.house.gov/media-center/in-the-news/yahoo-helped-us-government-spy-emails-report-says)를 연결한다.

---

## AI Discord Recap

Gemini 3.0 Pro Preview Nov-18가 만든 “요약의 요약의 요약” 요약본

### Frontier Models: GPT-5.3 Fallout, Gemini CoT, and Qwen Uncertainty

- **GPT-5.3 “Safety Lobotomy” and 5.4 Teasers**: OpenAI가 [GPT-5.3 Instant](https://openai.com/index/gpt-5-3-instant/)를 출시했으나 반응이 엇갈렸고, **LMArena** 사용자들은 이를 “safety lobotomy”로 부르며 건강 벤치마크에서 5.2-chat보다 못하다고 라벨링했다. **Nous Research**에서는 다가오는 **GPT-5.4**가 *military capabilities*를 가졌다는 루머가 돌고, **OpenAI** 디스코드에서는 **Sora** 통합을 포함한 빠른 후속 출시를 기대한다는 맥락이다.
- **Gemini 3.1 Pro vs. Claude Opus 4.6 Coding Duel**: 코딩 우위에 대한 **LMArena** 논쟁이 지속되며, **Claude Opus 4.6**은 **Anthropic** 서비스 아웃티지에도 추론이 좋다는 평가를 받고, **Gemini 3.1 Pro**는 더 빠르지만 환각이 잦다는 인식이 있다. **Unsloth** 엔지니어들은 `<think>` 태그로 Gemini의 *true* **Chain of Thought (CoT)**를 뽑아내면 표준 요약보다 결과가 좋다고 했고, 근거로 [this screenshot](https://cdn.discordapp.com/attachments/1179779344894263297/1478209505404784650/Screenshot_20260203-015813_Firefox.png?ex=69a8e2e1&is=69a79161&hm=c61029735f4655d6d5e4f03137673befc563c3417393f4dd014b71c6795fb35c)을 제시한다.
- **Qwen Team Exit and Rollout Failures**: [departure of the Qwen team lead](https://bsky.app/profile/natolambert.bsky.social/post/3mg6eisffss2j) 이후 **Unsloth**와 **OpenRouter** 사용자들이 롤아웃 결함과 오픈 웨이트(open weights) 미래에 대한 우려를 보고한다. 그럼에도 기술 탐구는 이어지며, Andrew Carr가 **Qwen 3.5 0.8B** 내부의 [ranking individual neurons](https://xcancel.com/andrew_n_carr/status/2028649735809319013?s=12) 프로젝트를 공유했다는 내용이 포함된다.

### Hardware Acceleration: CUDA Agents, Blackwell Splits, and Custom Silicon

- **CUDA Agents Crush Torch Compile**: **GPU MODE**에서 논의된 새로운 **CUDA-specialized RL agent**가 중간 크기 커널에서 `torch.compile` 대비 **2x** 빠르고, 복잡한 벤치마크에서 **Claude Opus 4.5**보다 낫다는 주장 ([paper](https://arxiv.org/abs/2602.24286)). 동시에 **ByteDance**도 빠른 커널을 작성하는 유사한 [CUDA Agent](https://cuda-agent.github.io)를 공개해, 수동 최적화보다 자동 커널 생성에 대한 관심을 촉발했다는 맥락이다.
- **NVIDIA Blackwell Architecture Bifurcation**: **GPU MODE** 엔지니어들이 **NVIDIA’s Blackwell** 세대에서 데이터센터(**CC 10.0**)와 컨슈머(**CC 12.0**) 트랙이 크게 갈라졌다고 확인했다. 일부 기능이 **sm_100a** 또는 **sm_100f** 타깃을 요구하면서 호환성 깨짐이 예상되며, 세부는 [NVIDIA’s blog](https://developer.nvidia.com/blog/nvidia-blackwell-and-nvidia-cuda-12-9-introduce-family-specific-architecture-features/)에 정리돼 있다고 한다.
- **Taalas and Apple Silicon Push Limits**: **Unsloth**에서는 특정 아키텍처에 고정된 하드와이어드 모델이지만 **Taalas HC1** 칩이 **17,000 tokens/s**를 낸다는 논의가 있었다. 한편 **Latent Space** 사용자는 **Apple M5 Neural Engine**이 **Llama2 110M**을 A100 대비 **80x** 효율로 돌린다고 보고하고, **OpenClaw** 멤버들은 **M5 Pro** 칩으로 로컬 에이전트를 호스팅하고 있다는 내용이다.

### Agentic Frameworks: C-Coded Binaries, RLM, and Kimi

- **ShadowClaw Emerges as Minimalist C Agent**: **OpenClaw**와 **HuggingFace** 커뮤니티가 **ShadowClaw v1.1**을 주목. **C**로 작성된 단일 바이너리 개인 AI 에이전트로, **Ollama** 같은 로컬 LLM과 `curl`로 통신한다. 도구는 [GitHub](https://github.com/webxos/webxos/tree/main/shadowclaw)에서 제공되며, 셸 실행, 파일 조작, 상태 지속 저장 등 낮은 오버헤드를 강조한다.
- **Recursive Language Modeling (RLM) Paradigm**: **DSPy** 사용자들이 에이전트 패러다임이 **RLM**으로 수렴할 수 있다고 논쟁한다. RLM은 LLM이 정적 도구보다 **REPL**에 접근하는 방식이며, 사용자 정의 Python 함수보다 나을 수 있다는 주장도 있다. 이 재귀 접근은 서브 에이전트가 스스로 코드를 실행하도록 스폰되는 특징을 가지며, 표준 **ReAct** 루프와 구별된다고 한다.
- **Kimi Code Challenges Claude**: **Moonshot AI**가 **Kimi Code**를 출시했는데, 이는 **Claude Code**와 다른 에이전트다. **OpenClaw** 사용자들은 특정 작업에서 Minimax 대비 *5 times better*하다고 주장한다. 일부는 오픈소스 **OpenCode** 대안을 선호하지만, **Kimi**가 iPython 환경을 통해 뉴스 집계를 하며 [replace YouTube](https://cdn.discordapp.com/attachments/1371757564005711973/1478272020889210992/tech_gaming_news_prompt.txt?ex=69a8745a&is=69a722da&hm=3c69473f87fa6f0eb449e3cbd498cb96a7e7d3c3f9b17a8b422ca813d4d9ee3d)하는 용도로 쓰인다는 맥락도 포함된다.

### Developer Infrastructure: Real-Time Evals and $255B Inference Markets

- **Real-Time Training Observability**: **HuggingFace** 사용자가 **TrainTrackLabs**를 강조. **PyTorch**에 플러그인되는 새로운 관측성(observability) 레이어로, **LLM-as-a-judge**로 환각과 추론을 실시간 스코어링해 fine-tuning 중 회귀(regression)를 조기에 잡아 GPU 낭비를 줄이려는 목적이라고 한다 ([traintracklabs.com](https://traintracklabs.com/)).
- **Time Travel Debugging with AI**: **Latent Space** 엔지니어들이 [Replay MCP](https://docs.replay.io/basics/replay-mcp/overview)를 통한 타임-트래블 디버깅의 부활을 논의. **React 19** 업그레이드 디버깅이 모호한 에러 오버레이에서 30초 만에 근본 원인 파악으로 줄었다는 주장도 포함된다.
- **Inference Market Valuation Soars**: **Latent Space**의 애널리스트가 AI 추론(inference) 시장이 2030년까지 **$255 billion**에 이를 것으로 전망. 프로덕션 배포 비용이 학습 비용을 앞지른다는 관점이며, **Unsloth**의 추론 최적화(Taalas) 논의와 **HuggingFace**의 효율적 전사(transcription) 도구 [easytranscriber](https://huggingface.co/blog/KBLab/easytranscriber) 논의가 이를 뒷받침한다고 한다.

### Research & Theory: Spectral Norms, Drift Sinks, and Jailbreaking

- **Spectral Norm Scaling for Feature Learning**: **Eleuther** 연구자들이 가중치 행렬의 **spectral norm**을 스케일링하면 특징 학습(feature learning)이 달성된다는 내용을 보이는 [2023 paper](https://arxiv.org/abs/2310.17813)를 논의. 이 도출이 **maximal update parametrization (muP)** 및 최근 **Modula** 작업과 연결된다는 맥락이다.
- **Drift Sinks and Persona Tokens**: **OpenAI** 사용자들이 분석 시스템에서 “semantic drift”를 인식론적 중력(epistemic gravity)으로 억제하는 **Drift Sinks** 같은 이론 프레임을 제안. 또한 분산 플랫폼에서 에이전트 정체성을 유지하기 위한 휴대형 [persona-containers](https://cdn.discordapp.com/attachments/1046317269069864970/1478457675560784082/image.png?ex=69a87882&is=69a72702&hm=3c848f8b335aee2d6a607399d78352706e1d29f463c2d268fb204737874f6c12)로서 **self-tokens**를 탐구했다는 내용도 포함된다.
- **Chemical Synthesis and Jailbreaking**: **BASI Jailbreaking** 멤버들이 **Safrole**로부터 **MDMA**를 합성하는 4단계 합성(synthesis)(수율 70-80%)을 언급하고, 수익 목적의 “Eni jailbreaks”를 논의했다는 내용. 이는 **LMArena**의 **GPT-5.3** 강한 검열(censorship) 보고 및 **Nous Research**에서 제약된 하드웨어(8GB VRAM)로 특화 펜테스트(pentest) 모델을 만든다는 논의와 대비된다고 한다.

---

### 참고 링크

- [544 Twitters](https://twitter.com/i/lists/1585430245762441216)
- [AINews’ website](https://news.smol.ai/)
- [AINews is now a section of Latent Space](https://www.latent.space/p/2026)
- [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)
