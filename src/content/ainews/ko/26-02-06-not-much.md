---
title: "GPT-5.3-Codex·Claude Opus 4.6 A/B 확산"
summary:
  - "GPT-5.3-Codex·Claude Opus 4.6 A/B 확산"
  - "Waymo, Genie 3 기반 월드 모델 공개"
  - "Hugging Face, Community Evals 출시"
  - "InfMem·LatentMem, 장문 메모리 제어"
  - "에이전트 스웜, ‘팀 설계’로 수렴"
date: 2026-02-06
originalUrl: "https://news.smol.ai/issues/26-02-06-a-quiet-day/"
hasHeadline: false
headline: "GPT-5.3-Codex·Claude Opus 4.6 A/B 확산"
tags:
  - OpenAI
  - Codex
  - Claude
  - Waymo
  - Hugging Face
isFeatured: false
---

## 헤드라인: GPT-5.3-Codex·Claude Opus 4.6 A/B 확산

- 참고 링크: [AINews’ website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack), Today’s essay: [https://www.latent.space/p/ainews-ai-vs-saas-the-unreasonable](https://www.latent.space/p/ainews-ai-vs-saas-the-unreasonable)
- 피드 전반에서 **GPT-5.3-Codex**와 **Claude Opus 4.6**를 실전으로 비교하는 A/B 테스트가 크게 늘었고, “둘 다 세대 교체급 업그레이드이지만 성향이 다르다”는 결론이 자주 보였다. Codex는 디테일에 집착하며 범위가 명확한 작업에 강하고, Opus는 탐색적 작업과 계획 수립에 더 인체공학적(ergonomic)이라는 평가가 나왔다 ([rishdotblog](https://twitter.com/rishdotblog/status/2019664800910135499), [@theo](https://twitter.com/theo/status/2019709378329550973)).
- Codex의 “auto compaction”(컨텍스트 자동 압축)/컨텍스트 가비지 컬렉션과 작업 중 잦은 진행 업데이트가 장기 작업 UX에서 강점으로 언급됐다 ([cto_junior](https://twitter.com/cto_junior/status/2019607817884475718)).
- Karpathy의 **nanochat “GPT-2 speedrun”** 최적화 사례에서, 두 모델 모두 “AI 엔지니어-in-the-loop”처럼 코드 읽기→가설 제안→실험→벤치마크를 수행했으며, **Opus 4.6**은 실제 벽시계 시간(wall-clock) 개선을 냈고, **Codex-5.3-xhigh**는 아이디어는 내지만 때로 품질을 해치는 모습도 관찰됐다(관측상 “0% context”에 걸리는 등 컨텍스트 이슈 가능성) ([@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2019824445792424385)).
- [@karpathy](https://twitter.com/karpathy/status/2019851952033771710)는 모델이 아직 *완전한* 폐루프(closed-loop)의 개방형 최적화를 신뢰성 있게 수행하진 못한다고 지적했다(허상 1% 개선 추적, 핵심 검증 누락, 리포 스타일 지침 위반, 결과표 오독 등). 다만 “감독(oversight) 하에서는 순효용(net useful)”이라는 톤도 함께였다.
- 한 스레드는 **GPT-5.3-Codex API가 없다**고 주장하며(OpenAI가 Codex 제품으로 사용을 유도하고 독립 벤치마킹을 어렵게 만든다는 해석), 동시에 Sam Altman이 **Codex 가격(pricing)** 구조에 대한 의견을 직접 묻는 흐름도 있었다 ([scaling01](https://twitter.com/scaling01/status/2019856879858450742), [sama](https://twitter.com/sama/status/2019814741129195576)).

---

## AI Twitter Recap

### Frontier coding models: GPT-5.3-Codex vs Claude Opus 4.6 (and what “agentic” now means)

- **User consensus snapshot**: 피드의 큰 비중이 **GPT-5.3-Codex** vs **Claude Opus 4.6** 실전 A/B 테스트였고, “둘 다 세대 교체급 업그레이드지만 프로파일이 다르다”는 결론이 자주 보였다. **Codex**는 디테일 집착·스코프가 있는 작업에 강한 편으로, **Opus**는 탐색적 작업과 계획 수립에 더 편하다는 평가가 나왔다 ([rishdotblog](https://twitter.com/rishdotblog/status/2019664800910135499), [@theo](https://twitter.com/theo/status/2019709378329550973)). 또한 **Codex의 “auto compaction”/컨텍스트 가비지 컬렉션**과 작업 중 잦은 진행 업데이트가 장기 작업 UX에서 강점으로 인식됐다 ([cto_junior](https://twitter.com/cto_junior/status/2019607817884475718)).
- **AI-engineer-in-the-loop benchmarks**: 더 구체적인 평가는 Karpathy의 **nanochat “GPT-2 speedrun”** 최적화였다. [@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2019824445792424385)는 두 모델 모두 유능한 AI 엔지니어처럼 행동(코드 읽기, 실험 제안, 벤치마크 실행)했다고 보고했다. **Opus 4.6**은 torch compile 설정 조정, optimizer step 변경, 메모리 절감 등으로 실제 벽시계 시간 개선을 냈고, **Codex-5.3-xhigh**는 아이디어를 내긴 했지만 때로 품질을 해쳤으며(컨텍스트 이슈 가능성, 관측상 “0% context”에 걸림)라는 메모도 있었다.
- **Reality check from Karpathy**: [@karpathy](https://twitter.com/karpathy/status/2019851952033771710)는 모델이 *개방형(open-ended)* 폐루프 AI 엔지니어링을 안정적으로 하진 못한다고 반박했다. 허상 1% 개선을 큰 숨은 비용과 함께 추적하거나, 핵심 검증 체크를 놓치고, 레포 스타일 지침을 위반하며, 심지어 자기 결과 테이블을 오독하기도 한다는 것. 다만 “감독이 있으면 순효용은 있다(net useful with oversight)”고 정리했다.
- **No API as product strategy**: 한 스레드는 **GPT-5.3-Codex API가 없다**고 주장하며, OpenAI가 의도적으로 Codex 제품으로 사용을 유도하고 독립 벤치마킹을 더 어렵게 만든다는 해석을 덧붙였다 ([scaling01](https://twitter.com/scaling01/status/2019856879858450742)). 동시에 Sam Altman은 사용자들이 원하는 **Codex 가격 체계**를 직접 물었다 ([sama](https://twitter.com/sama/status/2019814741129195576)).

### Agent swarms & “software teams in a box”

- **Parallel-agent development starts to look like org design**: 고병렬 에이전트(swarm) 연구 논의에서, 제약 없는 스웜은 결국 **소프트웨어 조직도(org chart)**를 재발명하게 된다는 지적이 나왔다(태스크 할당, 조정, QA 등). 동시에 Git/패키지 매니저 같은 기존 툴링이 대규모 동시 편집을 전제로 설계되지 않았다는 점도 강조됐다 ([swyx](https://twitter.com/swyx/status/2019645622421451106)). 이는 “spec-driven development”/“agents as dev teams” 내러티브와도 연결된다 ([dbreunig](https://twitter.com/dbreunig/status/2019829245137338548)).
- **Claude Code “agent teams” moment**: 에이전트들이 작업을 고르고, 파일을 잠그고(lock), git으로 동기화하는 Anthropic 스타일의 에이전트 조정 시스템을 언급한 트윗들이 다수였고, 실용적 자동화 측면에서의 변곡점으로 묘사됐다 ([omarsar0](https://twitter.com/omarsar0/status/2019780306778104056), [HamelHusain](https://twitter.com/HamelHusain/status/2019863601591517466)).
- **LangChain / LangSmith: agents need traces, sandboxes, and state control**: 신뢰성은 *환경을 엔지니어링*하는 데서 나온다는 테마가 강했다(트레이싱(tracing), 평가(evals), 샌드박싱(sandboxing), 타입 안정(state/middleware)). 예시로 LangSmith 개선(트레이스 프리뷰, 보이스 에이전트 디버깅)과 deepagents의 **daytona/deno/modal/node VFS** 같은 샌드박스 백엔드 추가가 언급됐다 ([LangChain](https://twitter.com/LangChain/status/2019848808310706367), [LangChain](https://twitter.com/LangChain/status/2019846811997942219), [bromann](https://twitter.com/bromann/status/2019880605467697565), [sydneyrunkle](https://twitter.com/sydneyrunkle/status/2019862521717444675)).
- **“RLM” framing (Recursive Language Models)**: 에이전트는 “LLM + 도구 루프”(ReAct)에서 **REPL 네이티브**의 프로그램형 시스템으로 진화할 것이며, 컨텍스트를 변수에 저장하고, 서브에이전트는 프롬프트에 텍스트를 덤프하는 대신 구조화된 값으로 통신해 “context rot”을 구조적으로 줄일 수 있다는 개념 글이 나왔다 ([deepfates](https://twitter.com/deepfates/status/2019912654173651131)). 관련해, 코딩 에이전트를 더 “RLM-like”하게 만들려면 컨텍스트를 변수로 밀어 넣고(tool I/O 스팸을 프롬프트에 넣지 않기) 같은 실전 팁도 공유됐다 ([lateinteraction](https://twitter.com/lateinteraction/status/2019852730177863977)).

### Eval integrity, benchmark drift, and new infrastructure for “trustworthy” scores

- **“Scores are broken” → decentralize evals**: Hugging Face가 **Community Evals**를 출시했다. 벤치마크 데이터셋+리더보드 호스팅, 평가 결과를 모델 레포에 버전드 YAML로 저장, PR 기반 제출, (Inspect AI를 통한) 재현성 배지 등을 포함하며, 오염(contamination)/포화(saturation)를 완전히 해결하진 못해도 평가 출처(provenance)를 더 드러내려는 목표를 명시했다 ([huggingface](https://twitter.com/huggingface/status/2019754567685050384), [ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2019795723378942295), [mervenoyann](https://twitter.com/mervenoyann/status/2019784907178811644)).
- **Benchmarks aren’t saturated (yet)**: 반론으로, 여전히 상한까지 여유(headroom)가 큰 어려운 벤치마크가 많다는 지적이 있었다(SWE-bench Multilingual <80%, SciCode 56%, CritPt 12%, VideoGameBench 1%, 효율 벤치마크도 암묵적 천장과 거리가 있음) ([OfirPress](https://twitter.com/OfirPress/status/2019755847149056456)).
- **Opus 4.6 benchmark story: big jumps, still uneven**: Opus 4.6이 Arena 등에서 상위권으로 오른다는 주장들이 반복됐다 ([arena](https://twitter.com/arena/status/2019842691442569566), [scaling01](https://twitter.com/scaling01/status/2019843682128822525)). 수학 지향 평가(FrontierMath)에서 Anthropic이 역사적으로 약했던 영역의 상승도 언급됐다. Epoch의 보도는 Opus 4.6 Tier 4가 **21% (10/48)**로 GPT-5.2 xhigh 19%와 통계적으로 동률이며, GPT-5.2 Pro 31%보다 낮다고 정리했다 ([EpochAIResearch](https://twitter.com/EpochAIResearch/status/2019852613672665193)). 다만 체스 퍼즐 같은 다른 추론 중심 영역은 여전히 약하다는 주장도 있었다 ([scaling01](https://twitter.com/scaling01/status/2019817880662278546)).
- **Eval infra at scale (StepFun)**: Step 3.5 Flash 관련 심층 인프라 글에서, 재현 가능한 점수는 실패 모드 처리, 학습–추론 일관성, 오염 체크, 견고한 판정/추출, 장문 출력 모니터링 등을 필요로 하며 “평가는 학습을 약간 선도해야 한다”고 주장했다 ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2019734062689304970)).

### World models graduate into production: Waymo + DeepMind’s Genie 3

- **Waymo World Model announcement**: Waymo가 **DeepMind의 Genie 3** 기반 **프런티어 생성 시뮬레이션 모델**을 공개했다. 토네이도, 고속도로 착륙 비행기 같은 희귀 “불가능” 이벤트까지 포함한 초현실적·상호작용 시나리오를 생성해, 실제 도로 노출 전에 Waymo Driver를 스트레스 테스트하는 용도라고 한다 ([Waymo](https://twitter.com/Waymo/status/2019804616746029508)).
- **Key technical hook**: DeepMind는 Genie 3의 “world knowledge”를 **Waymo 특화 카메라 + 3D LiDAR** 표현으로 전이(transfer)해, Waymo 하드웨어 모달리티에 맞는 프롬프트 기반 “what if” 시나리오 생성이 가능하다고 강조했다 ([GoogleDeepMind](https://twitter.com/GoogleDeepMind/status/2019809201812545835), [GoogleDeepMind](https://twitter.com/GoogleDeepMind/status/2019809239569702962)). 픽셀을 넘어 센서 스트림까지 시뮬레이션을 확장하는 게 진짜 이정표라는 연구자 의견도 나왔다 ([shlomifruchter](https://twitter.com/shlomifruchter/status/2019820532485808329), [sainingxie](https://twitter.com/sainingxie/status/2019841784990351381)).
- **Broader “world models for reasoning” thread**: Waymo 소식은 텍스트 모델뿐 아니라 **월드 모델(world models)**이 추론과 체화(embodied) 작업을 위한 핵심 스케일링 프런티어라는 근거로 반복 인용됐다 ([swyx](https://twitter.com/swyx/status/2019605135689937405), [kimmonismus](https://twitter.com/kimmonismus/status/2019809839804010962), [JeffDean](https://twitter.com/JeffDean/status/2019824614139162804), [demishassabis](https://twitter.com/demishassabis/status/2019827916385972517)).
- **Planning advances for world models**: GRASP가 **그라디언트 기반(gradient-based), 확률적(stochastic), 병렬화된(pll)** 플래너로 소개됐다. 행동과 중간 서브골을 공동 최적화해, CEM/MPPI 같은 일반적인 제로차(zeroth-order) 플래너 대비 장기 지평(long-horizon) 계획을 개선한다는 내용이다 ([michaelpsenka](https://twitter.com/michaelpsenka/status/2019870377032503595), [_amirbar](https://twitter.com/_amirbar/status/2019903658792497482)).

### Memory, long-context control, and multi-agent “cognitive infrastructure”

- **InfMem: bounded-memory agent with cognitive control**: InfMem은 최대 **1M tokens** 장문 QA를 위해 PRETHINK–RETRIEVE–WRITE 프로토콜과 RL을 제안했다. 컨텍스트 창이 길어질수록 병목은 “무엇에 주목할지/언제 멈출지”로 이동한다는 점을 강조한다. 베이스라인 대비 정확도 개선과, 적응적 중단(adaptive stopping)으로 **평균 지연 3.9× 감소**를 보고했다 ([omarsar0](https://twitter.com/omarsar0/status/2019759999170556189)).
- **LatentMem: role-aware latent memory for multi-agent systems**: LatentMem은 역할이 다른데도 에이전트들이 같은 기억을 가져오는 “homogenization” 문제를 다루며, 궤적(trajectory)을 역할 조건부(role-conditioned) 잠재 메모리로 압축하고 LMPO 방식으로 학습한다. QA와 코딩 작업에서 개선과 **~50% 토큰 절감/더 빠른 inference(추론)**를 주장했다 ([dair_ai](https://twitter.com/dair_ai/status/2019778133550125515)).
- **Product reality: memory leaks and context saturation**: 에이전틱 툴링이 빠르게 출시되는 가운데, 개발자들은 리소스 블로트와 취약한 UX(예: 빠르게 변하는 에이전트 IDE의 “memory leaks”)를 불평했다 ([code_star](https://twitter.com/code_star/status/2019707930422161680)). 또 다른 스레드는 서브에이전트 출력이 압축(compaction)이 회복할 수 있는 것보다 더 빨리 컨텍스트 예산을 잠식할 수 있다고 의심하며, 내부적으로 더 긴 컨텍스트 시스템이 있을 수 있음을 시사했다 ([RylanSchaeffer](https://twitter.com/RylanSchaeffer/status/2019642129736429730)).

### Industry adoption, compute economics, and “jobs vs tasks” discourse

- **Non-verifiable work limits full automation**: François Chollet은 비검증 가능(non-verifiable) 도메인에서는 성능 향상이 주로 비싼 데이터 큐레이션에서 나오고 체감 수익(diminishing returns)이 크다고 주장했다. 대부분의 직업이 end-to-end로 검증 가능하지 않기 때문에 “AI가 많은 태스크를 자동화” ≠ “AI가 직업을 대체”가 상당 기간 성립한다고 봤다 ([fchollet](https://twitter.com/fchollet/status/2019610121371054455), [fchollet](https://twitter.com/fchollet/status/2019610588612292834)).
- **Contrasting takes: RSI bottlenecks**: 다른 관점은, 태스크는 재귀적 자기개선(RSI)의 병목이 되는 순서대로 무너질 것이며 소프트웨어 엔지니어링이 먼저라는 주장이다 ([tszzl](https://twitter.com/tszzl/status/2019614081683189827)).
- **Enterprise deployment signals**: Goldman Sachs가 회계 자동화를 위해 **Claude**를 롤아웃 중이라는 주장도 있었고([kimmonismus](https://twitter.com/kimmonismus/status/2019865721338229180)), 더 넓게는 소프트웨어 비중이 큰 섹터가 AI 때문에 흔들린다는 시장 내러티브도 언급됐다(다만 가장 강한 주장들은 트윗만으로 독립 검증되진 않음) ([kimmonismus](https://twitter.com/kimmonismus/status/2019757481925464371)).
- **Capex scale**: 하이퍼스케일러의 지출 가속을 강조한 트윗이 여러 개였고, 2026년 주요 하이퍼스케일러 합산 CAPEX가 **$650B(미국 GDP의 ~2%)**에 근접한다는 주장도 있었다(“AI arms race” 프레이밍) ([scaling01](https://twitter.com/scaling01/status/2019789747896377697)). 또한 하이퍼스케일러 데이터센터 CAPEX가 **2026년에 두 배**가 될 수 있다는 메모도 있었다 ([kimmonismus](https://twitter.com/kimmonismus/status/2019773237618479594)).
- **Old-guard reassurance to engineers**: Eric S. Raymond는 “프로그래밍은 끝나지 않았다”는 고참(Old-guard) 관점의 글로 높은 참여를 얻었다. 시스템은 여전히 복잡하며 인간 의도→컴퓨터 사양(spec) 간 간극이 남아 있으므로 처방은 공황이 아니라 적응과 업스킬이라는 주장이다 ([esrtweet](https://twitter.com/esrtweet/status/2019779602617376788)).

### Top tweets (by engagement)

- [Microinteracti1](https://twitter.com/Microinteracti1/status/2019712610547933593): 바이럴 정치 코멘터리(참여는 높지만 비기술).
- [elonmusk](https://twitter.com/elonmusk/status/2019823468968370633): “Here we go”(트윗 텍스트 덤프에 맥락 없음).
- [esrtweet](https://twitter.com/esrtweet/status/2019779602617376788): “프로그래밍 공황은 과장; 업스킬.”
- [Waymo](https://twitter.com/Waymo/status/2019804616746029508): Genie 3 기반 희귀 이벤트 시뮬레이션용 Waymo World Model.
- [sama](https://twitter.com/sama/status/2019813802049696064): “5.3 lovefest”/모델 흥분.
- [claudeai](https://twitter.com/claudeai/status/2019833113418035237): “Built with Opus 4.6” 가상 해커톤($100K API 크레딧).
- [chatgpt21](https://twitter.com/chatgpt21/status/2019679978162634930): Opus 4.6 “포켓몬 클론” 주장(110k tokens, 1.5h reasoning).
- [theo](https://twitter.com/theo/status/2019598113238139262): “I know an Opus UI when i see one”(UI/출시 분위기).
- [ID_AA_Carmack](https://twitter.com/ID_AA_Carmack/status/2019839335382790342): 추측성 시스템 아이디어(섬유 루프/플래시 대역으로 weight 스트리밍해 inference).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Local AI on Low-End Hardware

- **[CPU-only, no GPU computers can run all kinds of AI tools locally](https://www.reddit.com/r/LocalLLaMA/comments/1qxgkd1/cpuonly_no_gpu_computers_can_run_all_kinds_of_ai/)** (Activity: 544): CPU-only 구성(Dell OptiPlex 3060, i5-8500, RAM 32GB)에서도 KoboldCPP로 12B Q4_K_M gguf LLM을 구동해 로컬 챗봇 상호작용(Hugging Face 모델 포함)이 가능했고, Stable Diffusion 1.5(느리지만) 이미지 생성과 Chatterbox TTS 보이스 클로닝까지 지원했다고 강조한다. 고가·GPU 중심 셋업이 로컬 AI 실험에 필수라는 인식에 도전하는 사례로 제시됐다. 댓글에서는 기본 하드웨어 접근성에 대한 낙관과, 하드웨어 엘리트주의/접근성에 대한 커뮤니티 내 온도차가 함께 나타났다.
- **noctrex**: CPU-only 셋업에 [LFM2.5-1.2B-Instruct](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct), [LFM2.5-1.2B-Thinking](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Thinking), [LFM2.5-VL-1.6B](https://huggingface.co/LiquidAI/LFM2.5-VL-1.6B) 같은 모델을 추천했다(작고 효율적이라 CPU-only docker 머신에서도 적합하다는 평가).
- **Techngro**: 평균 사용자에게도 로컬 모델이 “똑똑하고 충분히 작아” 기본 하드웨어에서 돌아가는 미래를 낙관했고, 기업 호스팅 대형 모델 의존 추세와 대비해 더 민주화된 AI 사용으로의 전환을 기대했다.
- **NoobMLDude**: 프라이빗 회의 노트 테이커나 대화형 비서 같은 실용적 활용을 예로 들며, 고사양 없이도 유용한 작업을 수행할 수 있음을 강조했다.
- **[No NVIDIA? No Problem. My 2018 “Potato” 8th Gen i3 hits 10 TPS on 16B MoE.](https://www.reddit.com/r/LocalLLaMA/comments/1qxcm5g/no_nvidia_no_problem_my_2018_potato_8th_gen_i3/)** (Activity: 866): 미얀마의 한 사용자가 HP ProBook 650 G5(i3-8145U, RAM 16GB)에서 iGPU(Intel UHD 620)와 `llama-cpp-python` 백엔드로 **OpenVINO**를 활용해 DeepSeek-Coder-V2-Lite(16B MoE)를 돌리고 `10 TPS`를 달성했다고 보고했다. MoE는 토큰당 `2.4B` 파라미터만 계산하는 효율 덕을 본다는 설명이 포함됐다. 듀얼 채널 RAM과 리눅스로 오버헤드를 줄이는 점, iGPU 컴파일 초기 지연과 간헐적 언어 드리프트를 과제로 언급했다. 댓글에서는 자원 제약 속 최적화 역량이 늘었다는 반응과, 코드 작업의 데일리 드라이버 모델이 무엇인지에 대한 관심이 있었다.
- **ruibranco**: CPU inference에서 병목은 연산보다 메모리 대역폭이며, 싱글→듀얼 채널 전환만으로 처리량이 거의 두 배가 될 수 있다고 강조했다. 또한 MoE가 토큰당 2.4B만 활성화해 8세대 i3 캐시에 작업 집합(working set)이 들어오기 쉬운 점을 효율 요인으로 들었다.
- **[Anyone here actually using AI fully offline?](https://www.reddit.com/r/LocalLLM/comments/1qwjgj4/anyone_here_actually_using_ai_fully_offline/)** (Activity: 383): **LM Studio**, **Ollama**, **openwebUI** 같은 도구로 완전 오프라인 운영이 가능하다는 논의. **LM Studio**와 **Ollama**는 [Hugging Face](https://huggingface.co/) 등에서 모델을 가져와 로컬에서 제공할 수 있고, **openwebUI**는 ChatGPT 유사한 로컬 웹 UI를 제공하며 이미지 생성은 **ComfyUI**와 결합할 수 있으나 복잡해진다는 의견이 있었다. 오프라인 셋업은 까다로울 수 있지만 코딩/컨설팅 등에서 `gpt-oss-20b` 같은 모델로 유용하게 쓰고 있다는 사례도 나왔다. 다만 코딩 워크플로는 자원을 더 요구하고, 셋업·유지보수 복잡도가 공통 과제로 지적됐다.
- **DatBass612**: OSS 120B 모델을 돌리기 위해 M3 Ultra에 투자했고, 5개월 내 ROI를 달성했다고 공유했다. 일일 토큰 사용을 `$200` 수준으로 추정했으며, OpenClaw 같은 도구를 쓰면 토큰 사용이 더 늘 수 있어 서브에이전트/가상화를 위한 통합 메모리(unified memory) 여유가 중요하다고 말했다.

### /r/LocalLLM: OpenClaw and Local LLMs Challenges

- **[OpenClaw with local LLMs - has anyone actually made it work well?](https://www.reddit.com/r/LocalLLM/comments/1qx51zc/openclaw_with_local_llms_has_anyone_actually_made/)** (Activity: 200): **Claude API**에서 비용 절감을 위해 **Ollama** 또는 **LM Studio** 같은 로컬 LLM로 옮기려는 논의. `Llama 3.1` 또는 `Qwen2.5-Coder`의 tool-calling 역량과 지연(latency) 우려가 언급됐고, **OpenClaw**의 보안 취약성에 대한 걱정도 나왔다. 대안으로 **Qwen3Coder** 같은 모델이 agentic 작업에 좋다는 제안이 있었으며, 보안적인 로컬 LLM 활용을 더 탐색할 자료로 [Local AI playlist](https://www.youtube.com/playlist?list=PLmBiQSpo5XuQKaKGgoiPFFt_Jfvp3oioV)가 공유됐다.
- **Qwen3Coder-Next**: tool calling/agentic 용도로 효과적이라는 코멘트와 함께 [Qwen3Coder-Next](https://qwen3lm.com/coder-next/) 링크가 제시됐다. OpenClaw 보안 우려를 이유로, 프라이빗 회의 도우미나 코딩 어시스턴트 같은 “안전한 로컬” 유스케이스를 대안으로 제시했다.
- 한 사용자는 `lmstudio`의 로컬 `gpt-oss-120b`와 OpenClaw를 결합해 실험했으나, `nologin` 사용자로 실행하고 특정 폴더로 권한을 제한하는 등 보안 조치가 필수이며, 결국 잠재적 보안 리스크가 이점보다 크다고 결론냈다.
- 다른 사용자는 `qwen3 coder 30b`로 OpenClaw를 사용했고, 문서 부족으로 셋업이 어려웠지만 잘 동작해 간단한 지시만으로 새 스킬을 만들 수 있었다고 보고했다.

- **[Clawdbot / Moltbot → Misguided Hype?](https://www.reddit.com/r/LocalLLM/comments/1qwg8an/clawdbot_moltbot_misguided_hype/)** (Activity: 86): **Moltbot(OpenClaw)**이 ‘무료 개인 AI 비서’로 마케팅되지만, 실제로는 여러 유료 구독이 필요하다는 비판. Anthropic/OpenAI/Google AI API 키, Brave Search API, ElevenLabs 또는 OpenAI TTS 크레딧, Playwright 기반 브라우저 자동화 설정(클라우드 호스팅 비용 가능) 등이 요구될 수 있어 총 비용이 `$50-100+/month`에 달할 수 있다는 주장이다. GitHub Copilot, ChatGPT Plus, Midjourney 같은 기존 도구 대비 실용성이 떨어지고, “만지작(tinkering)” 좋아하는 개발자에게 더 적합하다는 평가가 나왔다. 반론으로는 LLM·TTS 등 컴포넌트를 자가 호스팅해 비용을 줄일 수 있으나, 클라우드급 성능과는 트레이드오프가 있다는 점이 언급됐다.
- No_Heron_8757: 메인 작업은 ChatGPT Plus로, 단순 작업은 LM Studio 로컬 LLM로 오프로딩하는 하이브리드 접근을 공유했다. 같은 VM 안에서 웹 검색과 브라우저 자동화를 함께 쓰고, Kokoro TTS를 사용했다고 언급했다.
- Valuable-Fondant-241: “구독이 필수는 아니다”라며 자가 호스팅 가능성을 강조했으나, 파워·속도 트레이드오프를 인정했다.
- clayingmore: 커뮤니티가 로컬 LLM의 비용-품질-양 최적화에 초점을 맞추고 있으며, OpenClaw의 ‘heartbeat’ 패턴(추론-행동 루프, 검증, 지속 개선) 같은 agentic 접근을 중요한 진전으로 평가했다.

### /r/LocalLlama: Innovative AI Model and Benchmark Releases

- **[BalatroBench - Benchmark LLMs’ strategic performance in Balatro](https://www.reddit.com/r/LocalLLaMA/comments/1qwxtf8/balatrobench_benchmark_llms_strategic_performance/)** (Activity: 590): **BalatroBench**는 Balatro 게임에서 로컬 LLM의 전략 수행을 평가하는 새 벤치마크. [BalatroBot](https://github.com/coder/balatrobot)(게임 상태/컨트롤 HTTP API 제공 모드)와 [BalatroLLM](https://github.com/coder/balatrollm)(Jinja2 템플릿으로 전략을 정의하는 봇 프레임워크) 두 컴포넌트로 구성된다. 템플릿은 게임 상태를 LLM에 제시하는 방식과 의사결정을 유도하는 규칙을 담는다. 어떤 OpenAI 호환 엔드포인트든 지원해 오픈 웨이트 모델 포함 다양한 모델 평가가 가능하며, 결과는 [BalatroBench](https://balatrobench.com/)에서 제공된다고 한다. 댓글에서는 Jinja2 기반 프레임워크에서 DGM, OpenEvolve, SICA, SEAL 같은 진화 전략을 적용해 “자기 진화(self-evolve)”를 시험해보자는 제안이 나왔다.
- jd_3d: Opus 4.6을 Balatro에 적용해 4.5 대비 개선이 있는지 보고 싶다고 했다.
- jacek2023: 로컬 LLM이 실제 게임을 플레이하도록 하는 접근이 전략 능력 평가에 의미가 있을 수 있다고 언급했다.

- **[We built an 8B world model that beats 402B Llama 4 by generating web code instead of pixels — open weights on HF](https://www.reddit.com/r/LocalLLaMA/comments/1qwo9j0/we_built_an_8b_world_model_that_beats_402b_llama/)** (Activity: 302): **Trillion Labs**와 **KAIST AI**가 모바일 GUI용 오픈 웨이트 비주얼 월드 모델 `gWorld`(8B/32B)를 공개했고, [Hugging Face](https://huggingface.co/trillionlabs/gWorld-8B)에서 제공된다고 한다. 픽셀 예측 대신 실행 가능한 웹 코드(HTML/CSS/JS)를 생성해 렌더링하는 방식이며, 구조화된 웹 코드 사전학습(prior)을 활용해 시각적 품질과 텍스트 렌더링을 개선했다고 설명한다. MWMBench에서 8B 모델이 `74.9%` 정확도를 기록해 최대 `50×` 더 큰 모델(예: `402B Llama 4 Maverick`)보다 낫다고 주장했고, 렌더 실패율이 `1%` 미만이며 KApps(한국 앱) 벤치에서도 다국어 일반화가 잘 된다고 했다. 댓글에서는 “402B를 이겼다”는 제목이 과장이라는 반응(특히 Maverick이 `17B` active로 실망스러웠다는 지적)과, 그럼에도 `GLM`, `Qwen` 등을 앞선 점은 인상적이라는 반응이 함께였다.
- “이게 진짜 월드 모델이냐, 다음 HTML 페이지를 예측하는 LLM이냐” 같은 정의/범위에 대한 기술적 질문도 나왔다.

- **[Google Research announces Sequential Attention: Making AI models leaner and faster without sacrificing accuracy](https://www.reddit.com/r/LocalLLaMA/comments/1qwboqn/google_research_announces_sequential_attention/)** (Activity: 674): **Google Research**가 **Sequential Attention**을 소개했다. 모델 크기와 연산 부담을 줄이면서 성능을 유지한다는 주장으로, 대규모 모델 최적화에서 NP-hard한 특징 선택(feature selection) 문제를 다룬다고 한다. 관련 논문은 [arXiv](https://arxiv.org/abs/2209.14881)에 있으며, 3년 전 논문이 지금 다시 부각된 점도 언급됐다. 댓글에서는 “정확도를 희생하지 않는다”는 표현이 Flash Attention과 같은 결과를 낸다는 뜻이 아니라, 테스트에서 성능이 비슷하다는 의미로 봐야 한다는 회의가 있었다.
- **-p-e-w-**: “without sacrificing accuracy”는 이론적 동일 결과가 아니라 경험적 성능 유지로 해석해야 한다고 지적했다.
- **coulispi-io**: 링크된 논문이 3년 전이라는 점을 들어 “새 발표”의 신선도에 의문을 제기했다.
- **FinalsMVPZachZarba**: 회귀(regression)용 특징 선택 알고리즘에 가깝고, LLM에는 어텐션 메커니즘 자체보다는 프루닝(pruning) 적용 가능성이 더 커 보인다고 정리했다.

### Less Technical AI Subreddit Recap: Claude Opus 4.6 and GPT-5.3 Codex Releases and Benchmarks

- 서브레딧 목록: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[GPT-5.3-Codex was used to create itself](https://www.reddit.com/r/singularity/comments/1qwte2l/gpt53codex_was_used_to_create_itself/)** (Activity: 558): 이미지 기반 포스트로, **GPT-5.3-Codex** 개발 과정에서 초기 버전이 자체 학습 디버깅, 배포 관리, 테스트 결과 진단 등에 사용됐다는 “자기 개발(self-development)” 서사를 강조한다. 개발 사이클을 가속하고 인간 개입을 줄일 수 있는 진전으로 묘사됐다. 댓글은 유머(중간 관리자 대체 농담)와 일자리 불안이 섞였다.
- **[Claude Opus 4.6 is out](https://www.reddit.com/r/singularity/comments/1qwrrn7/claude_opus_46_is_out/)** (Activity: 1189): **Anthropic**의 **Claude Opus 4.6** 출시를 다룬 이미지/UI 포스트. 댓글에서 **ARC-AGI 2** `68.8%` 성과가 언급됐고, 동시기 **Codex** 업데이트와의 경쟁 구도가 거론됐다. “ambitious work용”이라는 모델 설명을 두고 농담도 있었다.
- SerdarCS: Opus 4.6이 ARC-AGI 2에서 `68.8%`를 달성했다며 [Source](https://www.anthropic.com/news/claude-opus-4-6)를 공유했다.
- **[Anthropic releases Claude Opus 4.6 model, same pricing as 4.5](https://www.reddit.com/r/singularity/comments/1qws1j9/anthropic_releases_claude_opus_46_model_same/)** (Activity: 931): Opus 4.6이 “ambitious work”용으로 가장 강력하면서도 4.5와 동일한 가격이라는 요지. 에이전틱 터미널 코딩, 에이전틱 코딩, 다분야 추론 등 비교 차트가 포함됐고, 멀티링구얼 Q&A/툴 사용에서 강점을 강조한다는 반응이 있었다. 한편 SWE 벤치에서 진전이 없다는 언급도 나왔다.
- **[OpenAI released GPT 5.3 Codex](https://www.reddit.com/r/singularity/comments/1qwsqlg/openai_released_gpt_53_codex/)** (Activity: 981): **OpenAI**가 **GPT-5.3-Codex**를 공개했다는 요약. 초기 버전이 자체 디버깅/배포/평가 진단에 쓰였고, 속도 `25%` 증가, SWE-Bench Pro·Terminal-Bench 등에서 강하다고 소개한다(예: `77.3%` 언급). 자율적으로 복잡한 앱을 만들고, 상호작용적으로 협업하며, 취약점을 찾는 능력을 강조한다. 상세는 [original article](https://openai.com/index/introducing-gpt-5-3-codex/)로 연결된다. 댓글에서는 `77.3%` 점수의 비교 가능성/“cooking” 의혹 같은 논쟁도 있었다.
- **[We tasked Opus 4.6 using agent teams to build a C compiler. Then we (mostly) walked away. Two weeks later, it worked on the Linux kernel.](https://www.reddit.com/r/singularity/comments/1qwur8p/we_tasked_opus_46_using_agent_teams_to_build_a_c/)** (Activity: 553): 16개 병렬 Claude 인스턴스로 Rust 기반 C 컴파일러를 만들고, 2주 뒤 리눅스 커널을 여러 아키텍처에서 컴파일했다는 프로젝트 요약(약 `100,000-line`). 성공의 핵심으로 테스트 품질, 작업 관리, 병렬성이 강조됐다. 제한(16-bit x86 컴파일러/어셈블러 부재)도 언급됐다. 또한 [Codex 5.3](https://openai.com/index/introducing-gpt-5-3-codex/)가 SWE-bench에서 더 적은 토큰으로 동일 성능(토큰 효율 개선)을 냈다는 주장도 포함됐다.
- **[They actually dropped GPT-5.3 Codex the minute Opus 4.6 dropped LOL](https://www.reddit.com/r/OpenAI/comments/1qwsnp9/they_actually_dropped_gpt53_codex_the_minute_opus/)** (Activity: 1209): Opus 4.6과 동시에 GPT-5.3 Codex가 나온 상황을 밈으로 다룬 포스트. ‘Coke vs Pepsi’ 같은 경쟁 구도로 농담이 오갔다.
- **[GPT-5.3 Codex vs Opus 4.6: We benchmarked both on our production Rails codebase — the results are brutal](https://www.reddit.com/r/ClaudeAI/comments/1qxr7vs/gpt53_codex_vs_opus_46_we_benchmarked_both_on_our/)** (Activity: 781): 프로덕션 Rails 코드베이스에서 두 에이전트를 커스텀 벤치마크한 사례. 레포의 PR을 선택해 스펙을 추정하고 두 모델이 독립 구현한 뒤, 3개의 LLM 평가자로 정합성/완결성/코드 품질을 채점했다. 결과로 **GPT-5.3 Codex**는 비용이 티켓당 `$1` 이하에서 품질 점수 `~0.70`, **Opus 4.6**은 티켓당 `~$5`에서 `~0.61`로, Codex가 더 싸고 점수가 높았다는 주장. (도구가 ‘raw’ LLM 호출인지, Codex/Claude code 같은 제품 스캐폴딩인지) 방법론 질문도 있었다.
- **[With Opus 4.6 and Codex 5.3 dropping today, I looked at what this race is actually costing Anthropic](https://www.reddit.com/r/ClaudeAI/comments/1qx0wr3/with_opus_46_and_codex_53_dropping_today_i_looked/)** (Activity: 1016): Anthropic의 비용/매출 전망을 둘러싼 글. `$18B`/`$55B` 매출 전망, 훈련비 `$12B`→`$23B`(향후 `$30B`), 추론비 `$7B`→`$16B` 등의 수치가 언급되고, 기업 가치/투자와 손익분기 전망(2028)도 포함된다. 댓글에서는 경쟁이 사용자에게 이득이라는 반응, OpenAI vs Anthropic의 재무 건전성 추측, “트릴리언 달러 가능성” 등 다양한 논의가 이어졌다.
- **[Opus 4.6 vs Codex 5.3 in the Swiftagon: FIGHT!](https://www.reddit.com/r/ClaudeAI/comments/1qwvj5k/opus_46_vs_codex_53_in_the_swiftagon_fight/)** (Activity: 722): macOS Swift 앱(~4,200 LOC)에서 GCD/Swift actors/@MainActor 기반 동시성 아키텍처를 비교한 테스트. 두 모델 모두 10단계 파이프라인을 추적했고, Opus는 더 깊은 아키텍처 인사이트(예: double-release 가능성)를, Codex는 더 빠른 수행(4분대 vs 10분)과 자원 관리 이슈 지적을 보였다고 한다. 댓글에서는 **Claude Max**와 **Codex Pro** 가격 차(`$80`/월) 대비 성능 차이를 문제 삼는 의견도 있었다.

### Less Technical AI Subreddit Recap: AI Model Performance and Comparisons

- **[Opus 4.6 uncovers 500 zero-day flaws in open-source code](https://www.reddit.com/r/singularity/comments/1qxdd6n/opus_46_uncovers_500_zeroday_flaws_in_opensource/)** (Activity: 744): **Claude Opus 4.6**이 샌드박스 환경에서 Python 및 취약점 분석 도구로 오픈소스 라이브러리의 `500+` 제로데이 취약점을 찾아냈다는 주장. AI 기반 사이버보안의 진전을 강조하면서도 오남용 리스크(dual-use)도 함께 언급된다. 댓글에서는 500개가 실제 제로데이인지에 대한 의심과, “수정한 버그의 누적 심각도”를 새로운 벤치 지표로 삼을 수 있다는 의견이 나왔다.
- **[GPT-5.3 Codex vs Opus 4.6: We benchmarked both on our production Rails codebase — the results are brutal](https://www.reddit.com/r/ClaudeAI/comments/1qxr7vs/gpt53_codex_vs_opus_46_we_benchmarked_both_on_our/)** (Activity: 781): (위와 동일 스레드가 반복 노출) Rails 기반 커스텀 벤치마크에서 Codex가 더 낮은 비용으로 더 높은 품질 점수를 얻었다는 주장과 방법론 논의.
- **[Difference Between Opus 4.6 and Opus 4.5 On My 3D VoxelBuild Benchmark](https://www.reddit.com/r/ClaudeAI/comments/1qx3war/difference_between_opus_46_and_opus_45_on_my_3d/)** (Activity: 614): 3D VoxelBuild 벤치마크에서 Opus 4.6 vs 4.5 성능 차이를 비교한 포스트. 4.6으로 `7 builds` 생성 비용이 `$22` 정도였고 확장 계획이 언급됐다. 결과는 [Minebench](https://minebench.vercel.app/)에서 볼 수 있다. 댓글은 4.6 품질 향상에 대한 흥분과, 입력이 레퍼런스 이미지인지 텍스트 프롬프트인지 같은 질문이 있었다.
- **[Opus 4.6 Is Live. So Is Our Glorious 3 Pro GA Still Napping on Some Server?](https://www.reddit.com/r/Bard/comments/1qwsjvq/opus_46_is_live_so_is_our_glorious_3_pro_ga_still/)** (Activity: 400): MRCR v2(8-needle)에서 장문 컨텍스트(256k/1M) 처리 성능 비교 이미지. Opus 4.6이 Gemini-3-Pro/Flash 등보다 높은 평균 매치 비율을 보였다는 내용. 양자화(quantization)로 비용을 아끼는 전략을 비판하는 톤도 있다. 댓글에서는 1M tokens에서 33%+ 정확도가 놀랍다는 반응과, Sonnet 5 루머에 대한 기대가 있었다.
- **[Gemini 3 vs 2.5 Pro: The “output handicap” is ruining everything](https://www.reddit.com/r/Bard/comments/1qxq09j/gemini_3_vs_25_pro_the_output_handicap_is_ruining/)** (Activity: 146): `41k token` 프롬프트에서 Gemini 3의 출력 토큰이 Gemini 2.5 Pro 대비 크게 줄었다는 불만(2.5 Pro `46,372`, 3 Pro `21,723`, 3 Flash `12,854`). 사용성 저하로 인식됐고, Google이 해결해야 한다는 주장. 댓글에서는 “출력 토큰 수가 품질과 동일하지 않다”는 반론과, 불만으로 Opus 4.5/4.6로 갈아탔다는 언급이 있었다.

### Less Technical AI Subreddit Recap: AI Tools and Usage in Engineering and Development

- **[Professional engineers: How are you using AI tools to improve productivity at work?](https://www.reddit.com/r/PromptEngineering/comments/1qxh14g/professional_engineers_how_are_you_using_ai_tools/)** (Activity: 49): 엔지니어들이 AI를 주로 예시 코드 생성, DB 쿼리 최적화, 고급 검색 엔진 같은 “니치 작업”에 통합한다는 논의. 빠른 정보 접근에는 강하지만, 컨텍스트 한계로 복잡한 코드 변경/대규모 시스템 통합에는 약하다는 의견이 많았다. “채우는 도구”로 쓰되 인간의 설계/의사결정은 대체하기 어렵다는 결론이 우세했다.
- **[How are people managing context + memory with Cline? (Memory banks, rules, RAG, roadmap?)](https://www.reddit.com/r/CLine/comments/1qx4m16/how_are_people_managing_context_memory_with_cline/)** (Activity: 24): **Cline**에서 컨텍스트/메모리를 관리하는 방법 논의. `.clineignore`와 메모리 뱅크 최적화로 `200k+` 토큰을 `40,000`으로 줄여 더 작은 모델로 빠르게 반복했다는 사례가 있다. 재귀적 chain of thought, RAG(벡터 DB 등)도 언급됐다. 댓글에서는 구조화된 메모리 뱅크, 태스크 분해, 컨텍스트 리셋 선호, 메모리 뱅크의 구식화(outdated) 문제 등이 논의됐다.
- **[Claude Opus 4.6 is now available in Cline](https://www.reddit.com/r/CLine/comments/1qx158e/claude_opus_46_is_now_available_in_cline/)** (Activity: 12): **Cline v3.57**에서 Opus 4.6이 사용 가능해졌다는 소식. SWE-Bench Verified `80.8%`, Terminal-Bench 2.0 `65.4%`, ARC-AGI-2 `68.8%` 등 벤치 수치와 `1M token context window`를 강조한다. Anthropic API를 통해 접근하며 JetBrains/VS Code/Emacs와 통합된다는 설명. 댓글에서는 비용 대비 성능 불만과 오픈소스 대안 선호도 언급됐다.

---

## AI Discord Recap

A summary of Summaries of Summaries by gpt-5.2

### Frontier Model Releases, Rumors & Bench-Leader Musical Chairs

- **Opus 4.6 1위 등극 후 “Thinking”에서 삐끗**: **Claude Opus 4.6**과 **claude-opus-4-6-thinking**이 [Text Arena](https://arena.ai/) 및 [Code Arena](https://arena.ai/?chat-modality=code)에 올라오자, [Leaderboard Changelog](https://arena.ai/blog/leaderboard-changelog/) 기준 **Code/Text/Expert**에서 빠르게 **#1**에 올랐다는 얘기가 나왔다. 동시에 Perplexity Max에도 [Model Council](https://discord.com/channels/1047197230748151888/1047204950763122820/1469006915114631357) 경로로 롤아웃됐다고 한다.
- **Opus 4.6 thinking 모드 불안정**: 엔지니어들은 thinking 모드에서 긴 대기와 “Error – something went wrong” 크래시를 자주 겪었다고 보고했고, 토큰 제한·툴 사용 가정·Claude 앱/웹사이트 특성 등을 추측했다. 그럼에도 “최고의 코딩 모델”이라는 평가를 유지하는 사람도 있었다.
- **Codex 5.3 과열: 1M 컨텍스트, API 불확실, 미감 논쟁**: OpenAI/Cursor/LMArena 채널에서 **GPT-5.3 Codex** 관련 소문으로 **1M context**, **128k reasoning / 128k max output**, API 가격 **$25–$37.5 output**, 캐시 입력 **$0.5–$1** 같은 주장들이 오갔다(주로 OpenAI Discord에서 논의).
- Cursor 사용자들은 Codex가 [OpenAI model docs](https://platform.openai.com/docs/models) 기준 여전히 “API limbo”에 갇혀 있다고 불평했고, OpenAI Discord에서는 Codex가 프론트엔드에 “sad dark gloomy colors”를 내보낸다며 Opus 쪽 디자인 선택이 더 낫다는 농담도 있었다.
- **루머 시즌: #keep4o, “Sonnet 5,” 모델 삭제 세계관**: LMArena에서는 비용 동기를 근거로 GPT-4.1/4.5가 잠깐 나타났다가 삭제될 수 있다는 루머가 돌았고(근거로 [OpenAI’s “new models and developer products” post](https://openai.com/blog/new-models-and-developer-products) 인용), **GPT-4o**의 덜 로봇 같은 바이브를 지키자는 *#keep4o* 미니 캠페인도 있었다.
- “Sonnet 5가 opus 4.5보다 낫다” 같은 루머(가짜라는 반박 포함), “83% SWE-bench” 같은 매운 추측도 나왔다. 한편 OpenAI Discord에서는 **GPT-4o EOL이 Feb 13**이라는 얘기를 애도하며, 후속 모델이 “인간적”이지 않을까 걱정하는 반응도 있었다.

### Agentic Coding Goes Wide: Teams, Toolchains & Terminal Testbeds

- **에이전트 팀이 커밋을 DDoS처럼 쏟아낸다(하지만 Git에)**: [Cursor’s long-running coding agents preview](https://x.com/cursor_ai/status/2019456112806732159)에서는 수백 개 에이전트가 1주일 트라이얼 동안 **1,000+ commits/hour**를 만들었다고 주장했다. Lydia Hallie는 [Claude Code “agent teams”](https://x.com/lydiahallie/status/2019469032844587505?s=46) 프리뷰에서 리드 에이전트가 전문 서브에이전트에 위임하는 그림을 소개했다.
- [Anthropic Engineering](https://x.com/anthropicai/status/2019496582698397945?s=46&t=b7l37rB6wtbyAh6ah1NpZQ)은 **Opus 4.6** 에이전트 팀이 **2주** 만에 리눅스 커널에서 동작하는 **C 컴파일러**를 만들었다는 점을 강조했고, 또한 에이전트 벤치마크 결과는 모델 차이보다 인프라/설정이 더 크게 흔들 수 있다고 덧붙였다.
- **SETA: 1,376개의 터미널 월드**: Guohao Li가 [SETA](https://x.com/guohao_li/status/2019527791876653353?s=46)를 공개했다. **DevOps/보안/시스템 관리** 영역의 **1,376개 검증된 터미널 코딩 환경**으로, 에이전틱 코딩 평가를 더 현실적으로 만들려는 목적이다.
- Latent Space 쪽 논의에서는 벤치 점수가 “인프라 노이즈”에 크게 좌우될 수 있으므로, 표준화·검증된 터미널 환경이 우연한 리더보드 연극을 줄일 수 있다는 취지의 코멘트가 있었다.
- **Agent-Native Engineering**: Latent Space 스레드에서 “Agent Native Engineering”을 조직 모델로 제안했다. 백그라운드 에이전트가 위임을 처리하고, 동기(sync) 에이전트가 어려운 문제를 맡아, 엔지니어가 **Claude Code** 같은 여러 동시 어시스턴트를 돌릴 수 있게 한다는 관점(참조: [X post](https://xcancel.com/ndrewpignanelli/status/2019403256586539025?s=46)).
- 같은 맥락에서, **GPT-5.3 Codex**를 백엔드 작업에 “느리지만 더 똑똑하게” 쓰는 워크플로(analysis → review → plan → review → implement)와, Codex가 시간이 지나며 개선되도록 “노트를 남기고 자기 워크플로를 개선하라”고 강제하는 팁도 공유됐다 ([KarelDoostrlnck’s post](https://x.com/KarelDoostrlnck/status/2019477361557926281)).

### Pricing, Rate Limits & Plan Nerfs: The Great AI Squeeze

- **Perplexity Pro, Deep Research 너프 논란**: Perplexity 사용자들이 **Deep Research** 쿼리 수 감소와 파일 업로드 한도 축소를 보고했고, 구/신 한도를 비교한 [스크린샷](https://cdn.discordapp.com/attachments/1047649527299055688/1469259948302139402/image.png)을 돌리며 명확한 커뮤니케이션 부재를 비판했다.
- 반발 이후 대안으로 **Gemini Pro**(실행 전 연구 플랜 편집 가능하다는 평가)와 **DeepSeek**(무료/무제한이라는 묘사, 중국 기반 서비스에 대한 유보 포함)를 시험하는 흐름이 있었다.
- **Opus 4.6: 출력은 최고, 지갑은 스피드런**: Cursor 등 커뮤니티는 Opus 4.6의 능력을 칭찬하면서도 매우 비싸다고 했고, “Opus에 $20 쓰면 하루 가겠냐” 같은 추정도 나왔다. 비용 비교에서는 [OpenAI pricing](https://openai.com/pricing)이 참조됐다.
- **캡차 보스전 등 ‘고통으로 내는’ 세금**: LMArena 사용자들은 평가를 방해하는 잦은 캡차를 불평했고, 팀원이 “캡차 시스템을 보고 있다”고 답했다(게시된 메시지 링크: [https://discord.com/channels/1340554757349179412/1451574502369656842/1468286122084929546](https://discord.com/channels/1340554757349179412/1451574502369656842/1468286122084929546)).
- 전반적 분위기는 “모델 품질이 좋아져도 접근 마찰(캡차, 레이트 리밋, 플랜 티어)이 진짜 병목이 된다”는 쪽으로 흘렀다.

### Security, Red Teaming & Secret Spills in Agent Land

- **Codex가 디스크를 전부 읽는다: “의도된 동작”**: OpenRouter 사용자들은 Codex가 기본으로 *전체 파일시스템을 읽을 수 있고* 이를 끄는 설정이 없다고 우려했다. 근거로 [openai/codex issue #2847](https://github.com/openai/codex/issues/2847)을 들었고, 팀이 버그로 보지 않는다는 취지로 언급됐다.
- 두 번째 보고서로 [openai/codex issue #5237](https://github.com/openai/codex/issues/5237)이 거론되며, API 키·개인 파일 읽기 같은 리스크가 기본 권한 설계와 safe-by-default 툴링에 대한 우려로 이어졌다.
- **레드 팀 구인**: [Trajectory Labs](https://trajectorylabs.com/careers/ai-red-teamer)가 **AI Red Teamer**를 모집(원격 유연, 주 30시간 최소)하며 짧은 폼과 레드팀 게임을 제시했다.
- **키 커밋 방지: 자동 난독화 요구**: Unsloth/OpenRouter 논의에서 에이전틱 도구의 API 키 보호가 약하다는 지적과, 자동 비식별/난독화가 필요하다는 요청이 나왔다. 기준선으로 ``[Yelp’s detect-secrets](https://github.com/Yelp/detect-secrets)``가 언급됐다.
- Hugging Face 빌더들은 [mugdhav-security-auditor.hf.space](https://mugdhav-security-auditor.hf.space) 같은 “Security Auditor” Space도 제공하며, vibe-coded 앱이 프로덕션 사고를 내기 전에 취약점을 잡자는 흐름을 밀었다.

### Perf, Kernels & Local Inference: Where the Real Speed Wars Live

- **Blackwell FP8 룰렛: cuBLASLt가 잘못 고르면 2× 손해**: GPU MODE에서 동일한 **Blackwell GPU**에서도 FP8 텐서 성능이 ~**2×** 차이 나는 현상을 보고했고, 원인을 **cuBLASLt 커널 선택**이 Blackwell 최적 커널 대신 Ada 경로로 조용히 폴백(fallback)한 것으로 추적했다.
- 또한 5090급 카드에서 구형 **mma FP8**이 너프되고 **mma MXFP8**은 그렇지 않아, MXFP8을 쓰면 약 **1.5×** 속도 향상으로 기대 처리량을 회복할 수 있다는 메모도 있었다.
- **TMA 커널 최적화 vs NCU 데드락(SM100)**: CUDA 커널 튜너들이 소프트웨어 파이프라이닝, 워프 특화, **TMA** 로드를 논의하던 중, **B200(SM100)**에서 더블 버퍼드 TMA 커널을 프로파일링할 때 **NCU가 0%에서 멈추는**(첫 리플레이 패스 데드락) 문제를 겪었다.
- 최소 재현 zip([https://cdn.discordapp.com/attachments/1189607726595194971/1469482712657166346/ncu_tma_repro.zip](https://cdn.discordapp.com/attachments/1189607726595194971/1469482712657166346/ncu_tma_repro.zip))을 공유했고, 워크어라운드 탐색의 일부로 `cuda::ptx::` 래퍼를 사용 중이라고 언급했다.
- **로컬 추론 깜짝: Vulkan > CUDA, MLX가 GGUF 압도**: LM Studio 사용자들은 NVIDIA에서 **Vulkan이 CUDA보다 최대 50% 빠르다**고 보고했지만(풀 컨텍스트에서는 불안정), 다른 벤치에서는 **M4 Max**에서 **Qwen3-Coder-Next**를 **MLX ~79 tok/s** vs **GGUF ~38 tok/s**(4-bit)로 측정했다고 한다.
- tinygrad 기여자들은 `topk`를 위한 느린 `Tensor.sort`를 고쳐 MoE 성능을 개선했고, **M3 Pro 36GB**에서 **50 tok/s**를 보고했다. CPU 바운티 목표를 **35 tok/s**로 재설정하며, “작은 커널 수정이 실제 처리량을 바꾼다”는 메시지를 강화했다.
