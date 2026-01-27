---
title: "Anthropic, MCP Apps 스펙 발표 및 Claude.ai 공식 지원"
summary:
  - "Anthropic가 MCP Apps 스펙을 발표"
  - "Claude.ai, MCP Apps UI를 공식 지원"
  - "Qwen3-Max-Thinking 등 추론 모델 출시"
  - "vLLM, ‘day-0’ 지원 비용 논쟁"
  - "llama.cpp, GLM-4.7-Flash 최적화"
date: 2026-01-26
originalUrl: "https://news.smol.ai/issues/26-01-26-mcp-apps/"
hasHeadline: true
headline: "Anthropic, MCP Apps 스펙 발표 및 Claude.ai 공식 지원"
tags:
  - Anthropic
  - Claude
  - MCP
  - OpenAI
  - vLLM
isFeatured: true
---

## 헤드라인: Anthropic, MCP Apps 스펙 발표 및 Claude.ai 공식 지원

OpenAI가 Dev Day 2025에서 [ChatGPT Apps and the Apps SDK at Dev Day 2025](https://news.smol.ai/issues/25-10-06-devday)로 “ChatGPT Apps”를 시험적으로 예고한 지 3개월 만에, Anthropic은 [the independent MCP UI project](https://x.com/liadyosef/status/2002104900843679818)라는 독립 MCP UI 프로젝트를 공식적으로 흡수했다. 그리고 OpenAI, Block, VS Code, Antigravity, JetBrains, AWS 등과 협력해 다음 두 가지를 함께 출시했다:

- [the MCP Apps spec](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [official support in Claude.ai](https://x.com/claudeai/status/2015851783655194640)

ChatGPT Apps가 발표 이후 세상을 뒤흔들었다고 말하긴 어렵지만, 애플리케이션이 “풍부한 UI(rich UI)”를 반환하기 위한 표준 포맷의 필요성은 부정하기 어렵다. 이제 MCP Apps가 주요 플레이어들에 의해 비준(ratify)된 만큼, 오픈소스 지원과 앱 간 상호운용(interoperate)이 가능한 풍부한 생태계의 기반이 되었고, 언젠가는 신용카드 명세서에 끝없이 쌓이는 $20/월 구독 더미를 줄여줄 수도 있다.

---

## AI Twitter Recap

### 에이전트 오케스트레이션, RLM, “Clawdbot/Clawd” UX 패턴

- **NVIDIA ToolOrchestra + Orchestrator-8B**: NVIDIA의 ToolOrchestra는 에이전트 시스템(agentic systems)을 *작은 “지휘자(conductor) 모델”*로 프레이밍하며, 이 모델이 추론(reasoning)과 도구 호출, 그리고 더 큰 “전문가(expert)” 모델(검색, 코드 실행, 전문 LLM, 프런티어 일반 모델)을 번갈아 수행하는 구조를 제시한다. 자동 합성된 도구-사용 환경과 멀티턴 태스크를 활용한 **확장 가능한 RL(scalable RL)**로 end-to-end 학습하면 **8B 오케스트레이터(orchestrator)**가 위임(delegation)을 통해 훨씬 낮은 비용으로도 *프런티어급 결과(frontier-level outcomes)*에 도달할 수 있다는 주장이다([summary](https://twitter.com/TheTuringPost/status/2015565947827110255), [link](https://twitter.com/TheTuringPost/status/2015565962419048712)). 기술적으로는 현실적인 tool-call 롤아웃을 통해 학습할 수 있다면 “컨트롤러 규모(controller scale)”보다 *정책 품질(policy quality) + 도구/모델 라우팅*이 더 중요해질 수 있다는 함의가 있다.

- **RLM / 재귀 우선(recursion-first) 에이전트 스택**: 여러 글에서 **Recursive Language Model (RLM)** 패턴이 수렴한다. ReAct처럼 모든 것을 컨텍스트에 쑤셔 넣기보다, 파일과 컨텍스트를 *참조(reference)*로 전달하고 필요한 최소 조각만 반복적으로 가져오는(shel/grep/AST) 방식이다. Dan B는 파일 참조 vs `@file` 확장을 의도적인 **컨텍스트 관리(context management)**로 설명한다([thread](https://twitter.com/irl_danB/status/2015813778504372601)). Daytona는 (서브)에이전트별 샌드박스를 통해 “무제한 재귀 깊이(unlimited recursion depth)”를 포지셔닝한다([guide](https://twitter.com/ivanburazin/status/2015818845303271896), [integration](https://twitter.com/a1zhang/status/2015820458709471640)).

- **“Clawd/Clawdbot” 밈 → 제품 시그널**: 데이터셋에는 “Clawdbot” 물결(종종 Mac mini 농담)이 많지만, 기술적으로 중요한 흐름은 *결과(outcome) 우선 어시스턴트 UX* + **촘촘한 컨텍스트/도구 통합**이다. Kimmonismus는 “더 많은 채팅”에서 “더 많은 결과”로의 전환이라며, 기존 강자들이 이를 따라잡기 위해 분주해질 것이라 시사한다([tweet](https://twitter.com/kimmonismus/status/2015785094791713006)). 반대로 로컬 Mac mini 없이 클라우드 우선이 낫다는 의견도 있다([MiniMax reply](https://twitter.com/SkylerMiao7/status/2015596649171804613)). 또한 “강력 모드”가 등장하자마자 *보안 반발*도 함께 커지고 있는데, 브라우저/데스크톱 에이전트에서 프롬프트 인젝션(prompt injection)은 여전히 시스템 레벨 장애물이라는 지적이 이어진다([dilemma](https://twitter.com/fabianstelzer/status/2015671497180827785), [follow-up](https://twitter.com/fabianstelzer/status/2015702808465420614), [Miessler warnings](https://twitter.com/DanielMiessler/status/2015865548714975475)).

### 추론 모델 출시 및 평가 동향 (Qwen, Tencent, ARC 등)

- **Alibaba Qwen3-Max-Thinking**: Alibaba는 Qwen3-Max-Thinking을 “대규모 및 고급 RL”로 학습된 추론+에이전트 플래그십으로 소개하며, **적응형 도구 사용(adaptive tool-use)**(Search/Memory/Code Interpreter)과 **테스트-타임 스케일링(test-time scaling)/자기 성찰(self-reflection)**을 강조한다. 수학 및 에이전트 검색 지표에서 강한 성능을 언급하며(예: **HMMT Feb 98.0**, **HLE 49.8**) 공개 평가 채널로 빠르게 투입된다([launch](https://twitter.com/Alibaba_Qwen/status/2015805330652111144)). LM Arena Text Arena([Arena](https://twitter.com/arena/status/2015803787680808996))와 Yupp([Yupp](https://twitter.com/yupp_ai/status/2015812409823522952)) 등으로 즉시 확산되며, 커뮤니티 반응은 “도구 사용이 포함된 평가 레짐(tool-enabled evaluation regime)” 자체에 주목한다(예: 검색 도구와 함께 HLE에서 다수 SOTA 모델을 능가했다는 주장)([commentary](https://twitter.com/kimmonismus/status/2015820838243561742)).

- **Tencent HunyuanImage 3.0-Instruct(이미지 편집)**: Tencent는 **80B MoE(활성 13B)** 기반의 이미지 편집 중심 멀티모달 모델을 공개했다. “Thinking” 스키마로 네이티브 CoT와 **MixGRPO** 알고리즘을 사용하며, 비대상 영역 보존과 다중 이미지 퓨전에 초점을 둔다([announcement](https://twitter.com/TencentHunyuan/status/2015635861833167074)). LM Arena는 이미지 편집 리더보드 **top-10**에 진입(7위)했다고 보고한다([Arena](https://twitter.com/arena/status/2015846799446311337)).

- **ARC-AGI 비용/성능 해킹**: “Recursive Self-Aggregation(RSA) + Gemini 3 Flash”가 Gemini Deep Think 대비 **~1/10 비용**으로 ARC-AGI-2에서 **59.31%**에 도달했다는 최적화 주장도 눈에 띈다([tweet](https://twitter.com/kimmonismus/status/2015717203362926643)). 이는 베이스 모델 선택만큼 *메타 추론(meta-inference) 전략*(집계, 재귀, 프루닝)이 중요해지고 있음을 시사한다.

- **아레나의 오픈 모델들**: Apache 2.0의 Molmo 2가 아레나에 새로운 오픈 모델로 등장했다([Arena](https://twitter.com/arena/status/2015886736136798723)). 별도로 Hugging Face Inference Endpoint는 **llama.cpp를 통한 GLM-4.7-Flash**와 낮은 시간당 가격(Q4_K_M, 24k 컨텍스트)을 언급하며, *빠른 오픈웨이트 추론(inference)의 상품화*가 계속되고 있음을 보여준다([ngxson](https://twitter.com/ngxson/status/2015763148523897097)).

### RL 확산: 테스트-타임 트레이닝, GRPO 안정화, RL-프리트레이닝, 컴퓨트 절감

- **Test-Time Training(TTT) + RL 성과**: Stanford/NVIDIA 스타일의 TTT+RL 접근이 AlphaEvolve를 능가하고, Erdős overlap 문제의 새 상한을 찾고, **A100 커널을 인간 최고 커널 대비 ~2× 빠르게** 만들며, AtCoder에서도 최선의 AI+인간 시도를 이겼다는 공유 결과가 널리 퍼졌다([rronak_](https://twitter.com/rronak_/status/2015649459552850113)). 관련 접근(EvoTune) 크레딧을 둘러싼 메타 논의도 함께 나온다([Yejin Cho](https://twitter.com/YejinChoinka/status/2015566349444190432)).

- **GRPO 학습 안정화 노브(knob)**: INTELLECT-2는 GRPO 안정성을 높이는 **`delta=4.0`** 파라미터를 공유했다([QGallouedec](https://twitter.com/QGallouedec/status/2015711810108973462)).

- **프리트레이닝에서의 RL(RLP)**: NVIDIA 저자들은 **RLP(Reinforcement as a Pretraining Objective)**가 ICLR 2026에 채택되었다고 발표하며, RL을 “포스트트레이닝 전용”이 아니라 프리트레이닝에 통합된 목표로 제시한다([ahatamiz1](https://twitter.com/ahatamiz1/status/2015867794626380146)).

- **커리큘럼형 필터링으로 컴퓨트 절감**: AI21의 “Dynamic Data Snoozing”은 너무 쉬운 예제를 ‘snooze’ 처리해 RLVR에서 **최대 3× 컴퓨트 절감**을 주장한다([DanielGissin](https://twitter.com/DanielGissin/status/2015773616021860522)). 검증된다면, 샘플러를 정적으로 두지 않고 정책 인지(policy-aware)적으로 만드는 실용 레시피가 될 수 있다.

### 추론 인프라 & 개발 툴링: vLLM, VS Code MCP Apps, Cursor 서브에이전트

- **vLLM 거버넌스와 상업화 압력**: Zhihu 기반의 긴 요약은 vLLM의 “오픈소스 → 스타트업” 전환이 **day-0 지원**의 숨은 비용(신규 모델마다 수주~수개월의 비공개 사전 통합), MoE 및 이종 추론(fp8/int4/희소 어텐션) 확산, PyTorch Foundation식 테스트와 vLLM의 멀티노드 CI 요구의 불일치 때문이라고 주장한다. 이를 위해 유지보수를 전업으로 지원하려고 **Inferact Inc**를 설립했으며 vLLM은 오픈소스로 유지한다는 설명이다([thread](https://twitter.com/ZhihuFrontier/status/2015697493288518105)). 또한 장문 컨텍스트 모델에서 OOM을 피하는 플래그로 `--max-model-len auto`를 공유했다([vLLM tip](https://twitter.com/vllm_project/status/2015801909316382867)).

- **MCP Apps: 도구 호출이 인터랙티브 UI를 반환**: MCP 생태계가 첫 공식 확장인 **MCP Apps**를 발표하며, 도구 호출 결과가 채팅 내에서 렌더링되는 **인터랙티브 UI 컴포넌트**를 반환할 수 있게 된다. VS Code가 첫 메이저 에디터로 지원(Insiders 우선, 안정판은 곧)한다([VS Code](https://twitter.com/code/status/2015853688594612715), [alexalbert__](https://twitter.com/alexalbert__/status/2015854375051428111)). Anthropic도 동시에 Claude에서 “인터랙티브 워크 툴”(Slack 초안, Figma 다이어그램, Asana 타임라인 등)을 제공한다([Claude](https://twitter.com/claudeai/status/2015851783655194640)). 요지는 도구 인터페이스 레이어가 raw JSON에서 채팅 내 *네이티브 UI 프리미티브*로 이동하고 있다는 점이다.

- **Cursor: 멀티-브라우저 서브에이전트**: Cursor는 서브에이전트를 통한 멀티-브라우저 지원을 추가했다([Cursor](https://twitter.com/cursor_ai/status/2015863221589049483)). 병렬 도구 실행과 더 나은 컨텍스트 격리라는 동일한 방향성을 반영한다.

### 커널 LLM, 칩 스택, “하드웨어를 위한 AI” 루프

- **GPU MODE 2026: 포스트트레이닝 Kernel LLM 공개 계획**: GPU MODE는 **Kernel LLM**을 포스트트레인하고, 생성된 커널이 실제 레포(PyTorch/vLLM)에 머지되게 하는 2026 계획을 공유했다. “de-slopify kernels”(결정성, 리뷰-머지 가능한 PR), 프로파일러 기반 최적화 + 메모리 작업, 대회를 평가로 삼는 방향을 강조한다([marksaroufim](https://twitter.com/marksaroufim/status/2015818791729746350)).

- **Microsoft Maia 200**: Microsoft는 맞춤형 추론 가속기 Maia 200을 발표했다. Mustafa Suleyman은 Trainium v3 대비 **3× FP4 성능**, TPU v7보다 높은 FP8을 주장한다([Mustafa](https://twitter.com/mustafasuleyman/status/2015845567138816326), [follow-up](https://twitter.com/mustafasuleyman/status/2015825111769841744)). Yusuf Mehdi는 이를 AI를 “신뢰 가능(dependable)”하게 만드는 인프로 프레이밍한다([thread](https://twitter.com/yusuf_i_mehdi/status/2015826703944470701)).

- **Ricursive Intelligence(칩 설계를 위한 AI)**: Ricursive는 AI와 하드웨어 사이의 재귀적 자기개선 루프로 엔드투엔드 칩 설계를 목표로 **$300M Series A**를 조달했다([company](https://twitter.com/RicursiveAI/status/2015804806384755059), [Anna Goldie](https://twitter.com/annadgoldie/status/2015806107470438685)).

### 안전, 오남용, 사회적 영향(기술적으로 직접 관련된 항목)

- **무해한 화학 데이터 기반 유도(elicitation) 공격**: Anthropic은 프런티어 모델이 생성한 “무해한” 화학 합성 콘텐츠로 오픈 모델을 미세조정(fine-tuning)하면 **화학 무기** 관련 과제에서 능력이 크게 증가할 수 있다고 보고한다. 이는 프런티어 모델 강도가 커질수록 스케일하는 “유도 공격”으로 제시된다([AnthropicAI](https://twitter.com/AnthropicAI/status/2015870963792142563), [paper link](https://twitter.com/AnthropicAI/status/2015870975238406600)).

- **Dario Amodei의 “Adolescence of Technology”**: AI가 가속 피드백 루프(AI가 AI를 만드는 루프)에 진입하고 있으며, 오남용, 권력추구적 자율성, 경제적 충격을 포함한 리스크를 논한다. 또한 부의 집중을 사회 붕괴급 실패 모드로 명시한다([Dario](https://twitter.com/DarioAmodei/status/2015833046327402527)). 반응은 지지부터 “테이크오버 리스크” 프레이밍에 대한 비판까지 다양하다([Ryan Greenblatt](https://twitter.com/RyanPGreenblatt/status/2015869503385772037)).

- **에이전트 보안 실무**: 여러 글이 데스크톱/브라우저 에이전트는 프롬프트 인젝션과 샌드박싱이 성숙하기 전까지 본질적으로 고위험이라 보고, 엄격한 격리, 최소 권한, 자격증명(credential) 처리 주의가 필요하다고 강조한다([Miessler](https://twitter.com/DanielMiessler/status/2015865548714975475)).

### 참여도 상위 트윗

- [“Clawdbot” 오남용 사례(명백히 유해)](https://twitter.com/0xRacist/status/2015578387641991513)
- [Karpathy: 에이전트로 “영어로 프로그래밍”으로의 위상 전이](https://twitter.com/karpathy/status/2015883857489522876)
- [Dario Amodei의 “Adolescence of Technology”](https://twitter.com/DarioAmodei/status/2015833046327402527)

---

## AI Reddit Recap

### /r/LocalLLaMA + /r/localLLM: 로컬 LLM 하드웨어 및 벤치마킹

- **[216GB VRAM on the bench. Time to see which combination is best for Local LLM](https://www.reddit.com/r/LocalLLaMA/comments/1qni356/216gb_vram_on_the_bench_time_to_see_which/)** (Activity: 366): 중고 Tesla GPU를 활용해 저렴하게 대용량 VRAM을 확보하고 로컬 LLM 테스트에 쓰는 이야기를 다룬다. 작성자는 병렬 GPU 성능을 평가하기 위한 [GPU server benchmarking suite](https://esologic.com/gpu-server-benchmark/#gpu-box-benchmark)를 만들었고, 여러 NVIDIA GPU를 포함한 기술적 셋업을 통해 VRAM 극대화에 초점을 맞춘다. 대역폭과 냉각 등의 난점, 그리고 구형 GPU가 최신 장비 대비 실용적인지에 대한 논의가 이어진다. 댓글에서는 성능(대역폭)과 냉각 문제에 대한 회의도 나온다.
- HugoCortell는 여러 GPU를 한 대의 PC에 연결할 때 발생할 수 있는 대역폭 병목을 지적하며, 저렴한 서버 메인보드 대부분이 소수 GPU만 지원한다는 점이 로컬 LLM 성능에 영향을 줄 수 있다고 우려한다.
- dc740는 P40이 M10보다 성능이 낫다는 개인 경험을 공유하며, 최근 ROCm에서 지원이 빠졌음에도 성능 때문에 AMD Instinct Mi50을 선호한다고 말해 하드웨어 능력과 소프트웨어 지원 사이의 트레이드오프를 보여준다.
- FullOf_Bad_Ideas는 gpu_box_benchmark가 대용량 모델을 여러 GPU로 분할하는(실사용) 시나리오를 테스트하지 않는다고 비판하며, 현재 벤치마킹 관행의 공백을 지적한다.

- **[I just won an Nvidia DGX Spark GB10 at an Nvidia hackathon. What do I do with it?](https://www.reddit.com/r/LocalLLaMA/comments/1qn3xig/i_just_won_an_nvidia_dgx_spark_gb10_at_an_nvidia/)** (Activity: 724): 해커톤에서 Nvidia DGX Spark GB10을 받은 사용자가 활용 방안을 묻는 글이다. Linux에서 `top`을 실행한 터미널 화면과 함께, 고성능 장비로 여러 워크로드(예: 여러 NextJS 앱 동시 실행)까지 고려하는 정황이 나온다.
- Fit-Produce420는 128GB 메모리로 70B급까지 미세조정(fine-tuning)이 가능하고, 더 큰 모델(예: `gtp-oss-120b`)도 QLoRA 같은 기법으로 다룰 수 있지만, `devstral 2` 같은 dense 모델은 느릴 수 있다고 말한다.
- randomfoo2는 시작 리소스로 [NVIDIA DGX Spark playbooks](https://github.com/NVIDIA/dgx-spark-playbooks)를 추천한다.
- LicensedTerrapin는 농담으로 DGX Spark를 팔아 DDR5 8GB RAM을 사라는 댓글을 달며, “특수 목적 하드웨어 vs 범용 업그레이드” 논쟁을 풍자한다.

- **[Using a high-end MacBook Pro or a beefy RTX 5090 laptop (with 24 GB of RAM) for inference.](https://www.reddit.com/r/LocalLLM/comments/1qnpti6/using_a_highend_macbook_pro_or_a_beefy_rtx_5090/)** (Activity: 29): Apple Silicon(M-series Max) 기반 MacBook Pro(128–192GB 통합 메모리)와 RTX 5090 노트북(24GB VRAM + 최소 64GB 시스템 RAM) 중 70B+ 로컬 LLM 추론(inference)/미세조정(fine-tuning)에 무엇이 나은지, 목표로는 ≥15 tokens/sec와 휴대성을 두고 비교한다. Apple MLX와 CUDA에서의 LoRA/QLoRA 성능, 발열과 지속 성능도 묻는다.
- 한 댓글은 노트북을 더 강한 데스크톱의 터미널로 쓰는 방향을 제안한다.
- racerx509는 3070ti 노트북, 5070 데스크톱, 96GB M2 Max MacBook Pro를 써본 경험에서 최근엔 MacBook Pro를 주로 쓴다고 말한다.
- No-Concern-8832는 70B 같은 대형 모델에 RTX 노트북의 VRAM 한계가 문제가 될 수 있다고 지적한다.
- Tired__Dev는 4090이 들어간 Asus M16이 7B 모델에서도 어려움을 겪었다며, 높은 메모리 대역폭을 이유로 128GB RAM MacBook Pro를 선호한다고 말한다.

### /r/LocalLLaMA + /r/localLLM: 멀티-에이전트 시스템과 AI 어시스턴트

- **[I built a “hive mind” for Claude Code - 7 agents sharing memory and talking to each other](https://www.reddit.com/r/LocalLLaMA/comments/1qnjota/i_built_a_hive_mind_for_claude_code_7_agents/)** (Activity: 313): **Claude Code**용 멀티-에이전트 오케스트레이션 시스템을 소개한다. 7개의 전문 에이전트(코더/테스터/리뷰어 등)가 협업하며, `SQLite + FTS5`로 영속 메모리를 공유하고 메시지 버스로 통신한다. MCP 서버로 동작하고 **Anthropic**, **OpenAI**, **Ollama**와 통합 가능하며, 우선순위 기반 작업 큐를 통해 컨텍스트 전달과 협업을 구현한다. 스택은 **TypeScript**, **better-sqlite3**, **MCP SDK**, **Zod**이며, MIT 라이선스 오픈소스로 [GitHub](https://github.com/blackms/aistack)에 공개됐다.
- 댓글에서는 [BMAD method](https://github.com/bmad-code-org/BMAD-METHOD)와의 유사성을 질문하며, 차별점(메모리 공유/에이전트 간 통신 구현 등) 설명이 필요하다는 의견이 나온다.
- No_Afternoon_4260는 에이전트 간 합의(consensus) 문제를 지적하며 분산 시스템 관점의 난점을 환기한다.
- JellyBean504는 Steve Yegge의 Gastown과의 개념적 유사성을 언급한다.

- **[Clawdbot: the AI assistant that actually messages you first](https://www.reddit.com/r/LocalLLM/comments/1qmrwxl/clawdbot_the_ai_assistant_that_actually_messages/)** (Activity: 214): **Clawdbot**은 전통적 어시스턴트처럼 “기다리는” 것이 아니라 사용자에게 먼저 메시지를 보내는(open-source) AI 어시스턴트로, GitHub `9K` 스타 이상을 보유했다고 소개된다. **Ollama**를 통해 로컬 LLM과 연동하고 WhatsApp/Telegram/Discord 등 메시징 앱을 지원하며, 자동 브리핑/리마인더, 대화의 로컬 Markdown 저장, 브라우저 제어 및 스크립트 실행 기능이 언급된다. 다만 GUI 설치기가 없고 설정에 터미널 숙련이 필요하다고 한다. 자세한 내용은 [Read more](https://medium.com/@jpcaparas/what-are-people-doing-with-clawdbot-e91403383ccf?sk=4fbaffdc31974eab844ea93c2f9b627f).
- 사용자들은 OAuth 키 확보와 인증 과정이 번거롭고, 로컬 모델을 API 키 없이 붙이는 데 어려움이 있다고 보고한다.
- inigid는 공급망 공격(supply-chain attack) 등 보안 리스크를 경고하며, 민감 데이터 유출 가능성을 우려한다.

### /r/LocalLLaMA + /r/localLLM: GLM-4.7-Flash 성능 업데이트

- **[GLM-4.7-Flash is even faster now](https://www.reddit.com/r/LocalLLaMA/comments/1qmvny5/glm47flash_is_even_faster_now/)** (Activity: 443): `llama.cpp`의 최신 업데이트가 FlashAttention CUDA 구현을 최적화해, Q 헤드 수와 KV 헤드 수 비율이 2의 거듭제곱이 아닐 때 성능을 개선했다고 한다. Q 컬럼을 다음 2의 거듭제곱으로 패딩해 약간의 비효율을 감수하되, 작은 배치에서 성능을 높이는 방식이며 [pull request #19092](https://github.com/ggml-org/llama.cpp/pull/19092)에 상세가 있다.
- ‘jacek2023’는 `45074` 토큰 프롬프트에서 `2814.63 ms`에 `1612` 토큰을 평가(1.75 ms/token, 572.72 t/s), 전체는 `29352.57 ms`에 `1731` 토큰(16.96 ms/token, 58.97 t/s), 총 `32167.20 ms`에 `3343` 토큰 등 구체적 속도 지표를 공유한다.

- **[KV cache fix for GLM 4.7 Flash](https://www.reddit.com/r/LocalLLaMA/comments/1qmjzx1/kv_cache_fix_for_glm_47_flash/)** (Activity: 380): GLM 4.7 Flash에서 KV 캐시에서 V 컴포넌트를 제거해 VRAM 사용량을 크게 줄이고(거의 50%), 동일 하드웨어에서 더 긴 컨텍스트를 가능하게 한 업데이트를 다룬다. DeepSeek 및 GLM 4.7 Flash 같은 모델에서 GB 단위 VRAM을 절약해 컨텍스트 길이를 두 배로 늘릴 수 있으며, 4090에서 90,000 컨텍스트 예시가 언급된다. 관련 변경은 [pull request](https://github.com/ggml-org/llama.cpp/pull/19067)에 있다.
- ‘teachersecret’는 RTX 4090에서 UD의 k_xl 4-bit GLM 4.7로 컨텍스트가 45,000에서 90,000까지 늘었다고 보고하며, 코딩/창작에서는 여전히 수동 가이드가 필요하지만 도구 사용에 강해 홈 서버 기본 모델로 쓴다고 말한다.
- ‘viperx7’는 변경 전후 벤치마크에서 컨텍스트가 64k→128k로 늘고, 프롬프트 처리 3489 t/s→3510 t/s, 생성 88 t/s→92.5 t/s 등 개선을 공유한다. 4090+3060 조합에서는 최대 200k 컨텍스트가 가능하고 VRAM 6GB가 남는다고도 한다.
- 논의는 이 KV 캐시 수정이 고부하 애플리케이션에 더 적합한 효율 개선을 제공한다는 점을 강조한다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude AI 사용 및 이슈

- **[Why You Need To Constantly Clear Claude Codes Context Window](https://www.reddit.com/r/ClaudeCode/comments/1qmrkr1/why_you_need_to_constantly_clear_claude_codes_context_window/)** (Activity: 166): 코딩 에이전트(Claude 등)를 사용할 때 컨텍스트 창을 주기적으로 비워야 성능이 유지된다고 강조한다. 컨텍스트가 용량의 `40%`를 넘으면 어텐션이 제곱(quadratic)으로 비용이 늘고 노이즈가 증가해 성능이 크게 떨어진다는 주장이다. 누적 컨텍스트 대신 ‘태스크당 1세션(one session per task)’로 필요한 정보를 외부에 저장하라고 권한다. 자세한 내용은 [original article](https://willness.dev/blog/one-session-per-task).
- 댓글에서는 핸드오버 프롬프트, `/clear`로 컨텍스트를 컴팩트(compact)하는 방법, ‘Plan Mode’로 계획 후 실행하는 전략 등이 언급된다.

- **[Opus fell off? Here’s the workflow that kept my code quality stable](https://www.reddit.com/r/ClaudeCode/comments/1qnhgcc/opus_fell_off_heres_the_workflow_that_kept_my/)** (Activity: 133): **Opus**/**Sonnet**이 “자신감 있게 틀린(confident wrong)” 결과와 드리프트 편집을 낼 수 있다는 체감 속에서, 품질을 안정화한 워크플로를 제시한다. 핵심은 **명세(spec) 작성 → 티켓화 → 실행 → 검증(verification)** 루프로, 비목표(non-goals), 사용자 스토리, 수용 기준(acceptance criteria), 엣지 케이스 등을 포함해 명세를 “코드처럼” 다루고, 작고 독립적으로 머지 가능한 티켓으로 쪼개며, 한 번에 한 티켓만 구현하고, 테스트/수용 기준으로 결과를 강하게 검증한다는 것이다.

- **[after claude now chatgpt is also uses Grokipedia as source](https://www.reddit.com/r/singularity/comments/1qn325q/after_claude_now_chatgpt_is_also_uses_grokipedia/)** (Activity: 634): 최신 **ChatGPT**가 Elon Musk의 **Grokipedia**를 소스로 사용한다는 주장이 논의된다. 정보 품질과 편향에 대한 우려가 나오지만, 훈련 데이터가 아니라 검색 도구로 활용되는 것이라는 정정도 언급된다.

- **[Giving Claude full access to a laptop](https://www.reddit.com/r/ClaudeAI/comments/1qm8tvj/giving_claude_full_access_to_a_laptop/)** (Activity: 795): **Claude**에게 노트북 전체 접근 권한을 부여해, Ubuntu Google Cloud의 VM을 자율적으로 관리하게 하는 구현 사례를 다룬다. Discord로 원격 제어하며, 주요 행동을 타임스탬프와 함께 Markdown 파일로 기록해 메모리 관리를 한다는 설명이 나온다.

- **[CLAUDE.md says ‘MUST use agent’ - Claude ignores it 80% of the time.](https://www.reddit.com/r/ClaudeCode/comments/1qn9pb9/claudemd_says_must_use_agent_claude_ignores_it_80/)** (Activity: 309): CLAUDE.md에서 특정 에이전트를 “반드시(MUST)” 쓰라고 지시했는데도, Claude가 상당 빈도로 일반 에이전트로 돌아간다는 문제를 다룬다. 기술적 강제(훅 등)가 없으면 지침은 제안에 그친다는 취지의 논의가 이어진다.

- **[My Ralph Wiggum breakdown just got endorsed as the official explainer](https://www.reddit.com/r/ClaudeCode/comments/1qm5vmh/my_ralph_wiggum_breakdown_just_got_endorsed_as/)** (Activity: 170): Ralph Wiggum(Claude를 헤드리스로 호출하는 `bash while loop`)을 설명하는 영상이 Geoffrey Huntley에게 공식 설명으로 인정받았다는 내용이다. 성능 문제로 플러그인을 피하고, 각 반복마다 새 컨텍스트로 실행해 컨텍스트 열화(context degradation)를 줄이며, “dumb zone”에 들어가지 않도록 명세를 간결히 하라고 강조한다. 영상 링크는 [here](https://youtu.be/I7azCAgoUHc).

### ICLR 및 ICML 2026 컨퍼런스 논의

- **[[D] ICLR 2026 decision mega thread](https://www.reddit.com/r/MachineLearning/comments/1qm32o6/d_iclr_2026_decision_mega_thread/)** (Activity: 1589): ICLR 2026 결정 발표를 앞두고 기대감이 커진 스레드로, 과거 OpenReview 사건을 떠올리며 긴장감과 유머가 섞인 반응이 나온다(예: `return uniform(0, 1) > 0.7`).

- **[[D] ICML 2026 - ICML desk-rejected my paper but kept me on as a reviewer. Wow?](https://www.reddit.com/r/MachineLearning/comments/1qmhyin/d_icml_2026_icml_deskrejected_my_paper_but_kept/)** (Activity: 279): 논문은 desk reject 되었는데 리뷰어로는 유지된 상황을 다룬다. 저자/리뷰어 파이프라인이 분리되어 있어 발생하는 일반적 관행이라는 설명과, 무급 노동에 대한 문제의식이 함께 나온다.

- **[[R] Appealing ICLR 2026 AC Decisions…](https://www.reddit.com/r/MachineLearning/comments/1qnh14y/r_appealing_iclr_2026_ac_decisions/)** (Activity: 138): 혼재된 리뷰 점수(예: `4(3)/6(4)/6(4)/6(4)`) 이후, `$1.6k` 규모 추가 실험과 `20+ pages` 이론 보강을 했지만 메타리뷰가 “해결되지 않은 우려”를 들어 거절한 사례에서 항소가 가능한지 묻는다. 댓글은 대체로 항소가 어렵고 운 요소가 크다는 반응이 많다.

- **[[D] ICML new policy: reviewers will be reviewed by meta reviewer. Good policy?](https://www.reddit.com/r/MachineLearning/comments/1qmi3oe/d_icml_new_policy_reviewers_will_be_reviewed_by/)** (Activity: 151): ICML에서 리뷰어를 메타 리뷰어가 평가해 상위 25%는 ‘gold reviewers’로 무료 등록, 다음 25%는 ‘silver reviewers’로 지정한다는 정책을 다룬다. 효과에 대한 회의(메타 리뷰어는 누가 평가하나)와 저자/리뷰 품질 인센티브로서 긍정 평가가 엇갈린다.

### OpenAI 및 AI 산업 법/비즈니스 동향

- **[Things Get Worse For OpenAI: Consumer groups prep class action suits about their price fixing and supply manipulation through DRAM hoarding.](https://www.reddit.com/r/DeepSeek/comments/1qmih28/things_get_worse_for_openai_consumer_groups_prep/)** (Activity: 107): OpenAI가 DRAM을 대량 확보해 가격 조작/공급 조작을 했다는 주장과 집단소송 준비가 논의된다. 전 세계 DRAM의 `40%`를 확보했다는 주장, 셔먼/클레이턴 반독점법 언급, FTC/EC/DOJ 조사 가능성 등이 포함된다. 댓글에서는 “구매가 곧 가격 담합인가” 같은 반론과, 경쟁자 자원 접근을 제한하려는 전략일 수 있다는 의견이 엇갈린다.

- **[When Ads aren’t enough: OpenAI’s push to Claim a Cut of Customers’ AI Discoveries](https://www.reddit.com/r/DeepSeek/comments/1qmqi62/when_ads_arent_enough_openais_push_to_claim_a_cut/)** (Activity: 63): OpenAI가 구독/광고 외에 **성과 기반(outcome-based) 과금** 및 **IP 기반 계약** 등 가치 기반 수익 모델을 탐색한다는 내용이다. 2023년 `2B`에서 2025년 `20B` 이상으로 ARR이 증가했다는 언급과 함께, 성공에 연동해 더 많은 가치를 회수하려는 방향으로 해석된다.

- **[CATL, the world’s largest battery maker, launches sodium batteries: extremely durable, stable at –40°C, much cheaper than lithium (5x), safer,10,000 charge cycles, requires no nickel or cobalt…](https://www.reddit.com/r/singularity/comments/1qnklek/catl_the_worlds_largest_battery_maker_launches/)** (Activity: 1289): **CATL**이 대량 생산된 소듐이온 배터리를 출시했다는 내용으로, kWh당 `~$20`(리튬 `~$100`) 같은 비용 비교, `175 Wh/kg` 에너지 밀도, `10,000` 사이클 이상 수명, `-40°C`에서 `90%` 용량 유지 등 스펙이 언급된다. 니켈/코발트가 필요 없고, 2026년 유럽 확대 기대도 나온다. 자세한 내용은 [Read more](https://evmarket.ro/en/baterii-masini-electrice/catl-baterii-pe-sodiu-stabile-la-40c-58935/).

- **[K-Shaped AI Adoption?](https://www.reddit.com/r/singularity/comments/1qms27i/kshaped_ai_adoption/)** (Activity: 748): Kevin Roose의 ‘K자형’ AI 도입 논의(샌프란시스코 같은 테크 허브의 조기 채택 vs 제한적 IT 정책으로 뒤처지는 집단)를 다룬다. 고비용 도구(예: 월 $200 수준의 멀티-에이전트 도구)가 접근성을 제한해 격차가 커진다는 주장도 나온다.

- **[Former Harvard CS Professor: AI is improving exponentially and will replace most human programmers within 4-15 years.](https://www.reddit.com/r/singularity/comments/1qmeo8h/former_harvard_cs_professor_ai_is_improving/)** (Activity: 1260): 전 Harvard CS 교수이자 Google 엔지니어링 디렉터인 Matt Welsh가 AI가 “지수적으로” 개선되며 `4-15 years` 내 대부분 프로그래머를 대체할 수 있다고 예측했다는 논의다. 관련 영상은 [YouTube video](https://youtu.be/7sHUZ66aSYI?si=uKjp-APMy530kSg8). 댓글에서는 ‘지수(exponential)’ 표현의 과장/오남용에 대한 회의와, 소프트웨어 개발 민주화 가능성 등이 함께 나온다.

---

## AI Discord Recap

### AI 인프라 투자 열기(Funding Frenzy)

- **Recursive Raises Roar to $4B**: **Recursive Intelligence**가 AI 기반 칩 설계를 가속하기 위해 **$4B 밸류에이션**으로 자금 조달을 논의 중이라는 보도다([Bloomberg: Recursive Intelligence in talks at $4B](https://www.bloomberg.com/news/articles/2026-01-23/ai-startup-recursive-in-funding-talks-at-4-billion-valuation)). 2026-01-23 기사에서는 AI로 설계 사이클을 단축하고 차세대 가속기 성능을 높이려는 전략이 언급된다.
- 엔지니어들은 “더 나은 칩이 더 나은 모델을 훈련하고, 더 나은 모델이 더 나은 칩을 설계한다”는 *자기개선 피드백 루프*를 핵심 내러티브로 읽었고, **AI-for-EDA** 투자에 대한 검증으로 받아들였다.

- **Sky Lab Startups Skyrocket**: UC Berkeley Sky Lab 스핀아웃 밸류에이션이 **SGLang ~$400M**, **vLLM ~$800M**, **LMArena ~$1.7B** 수준이라는 언급이 공유됐다([Alex Dimakis: Sky Lab startup valuations](https://xcancel.com/alexgdimakis/status/2014508959621959724)). 2026년 1월의 이정표는 **서빙 스택(serving stacks)**, **토큰 처리량(token-throughput) 인프라**, **벤치마킹 플랫폼**에 대한 투자자 수요를 보여준다는 해석이다.

- **Maia Muscles Into Azure**: Microsoft의 **Maia 200** 가속기가 **Azure**에서 가동됐고, **30% 더 나은 성능/달러(perf/$)**, **216GB HBM3e**, **7TB/s 메모리 대역폭** 등을 강조한다는 공유가 있다([Satya Nadella: Maia 200 in Azure](https://xcancel.com/satyanadella/status/2015817413200408959)). 대규모 **LLM**/**멀티모달** 추론에 초점을 둔다.

### 커널·칩·서빙: 초고속 추론(inference)

- **FlashInfer Face-Off Fires Up MLSys**: **MLSys 2026 FlashInfer‑Bench** 대회가 **NVIDIA Blackwell GPU**용 **LLM 추론 커널**을 경쟁시키며, 전문가 수준 FlashInfer 베이스라인과 비교한다([MLSys 2026 FlashInfer‑Bench Competition](https://mlsys26.flashinfer.ai/)). 생산 환경에 가까운 제약 하에서 처리량과 정합성을 강조한다.

- **GPU‑64 Gets Gains with KV‑Cache CAM**: 추론 전용 아키텍처 **GPU‑64**가 온칩 **CAM** 기반 **KV-Cache** 하드웨어를 도입해 **75W에서 4× 빠른 추론**과 메모리 조회를 **O(N) → O(1)**로 줄인다고 주장한다. 자료는 [GPU‑64 (Zenodo)](https://zenodo.org/records/18364282), RTL/에뮬레이터는 [gpu64‑inference (GitHub)](https://github.com/Complexity-ML/gpu64-inference)에 있다.

- **Cornserve Cuts Tail Latency**: **Cornserve**는 Any‑to‑Any 멀티모달 모델의 온라인 서빙 시스템으로, 인코더/LLM/DiT 전반의 배치 계획을 최적화해 처리량과 tail latency를 개선한다고 소개된다([Cornserve (arXiv)](https://arxiv.org/abs/2512.14098), [Cornserve: Easy, Fast and Scalable Multimodal AI (YouTube)](https://www.youtube.com/watch?v=VhjUM_M71Wo)). 인프라 관점에서는 **vLLM**과 멀티모달 그래프의 상보 관계로 읽히며, 텍스트/비전/디퓨전 단계 간 예산형 추론(budgeted reasoning)과 공동 스케줄링(co-scheduling) 표준화가 과제로 언급된다.

### LM Arena에 새 멀티모달/코딩 모델 추가

- **WAN 2.6 (업로드 이슈 포함)**: LM Arena 이미지 아레나에 **wan2.6‑t2i**(텍스트→이미지)와 **wan2.6‑image**(이미지 편집)가 추가됐다([LM Arena — Image Chat](https://lmarena.ai/c/new?chat-modality=image)). 사용자는 **wan2.6‑image**가 업로드 이미지를 필요로 하고, **wan2.6‑t2i**는 현재 이미지 업로드를 지원하지 않는다고 지적했다.

- **Devstral 및 텍스트 모델들**: Code Arena에 **devstral‑2**가 추가되어 직접 대결이 가능해졌다([LM Arena — Code Arena Direct Battle](https://lmarena.ai/c/new?chat-modality=code&mode=direct-battle)). 텍스트 아레나에는 **qwen3‑max‑thinking**과 **molmo‑2‑8b**가 합류했다([LM Arena — Text Arena](https://lmarena.ai/?chat-modality=chat)).

- **Hunyuan 리더보드 진입**: Tencent의 **Hunyuan‑Image‑3.0‑Instruct**가 LM Arena 이미지 편집 리더보드 **#7**에 올랐다는 공유가 있다([LM Arena — Image Edit Leaderboard](https://lmarena.ai/leaderboard/image-edit), [Tencent Hunyuan announces HunyuanImage 3.0‑Instruct](https://xcancel.com/TencentHunyuan/status/2015635861833167074)).

### 안전·신뢰성·환각(hallucination) 완화

- **Layer‑Native Safety Clamping**: 활성 공간(activation-space)의 유해 방향(harm directions)을 학습해 이를 클램핑(clamping)함으로써 jailbreak를 막자는 “Layer‑Native Safety Clamping”이 소개된다. **10K 쌍** 데이터셋은 [Pacific‑Prime/safety_dataset (HF)](https://huggingface.co/datasets/Pacific-Prime/safety_dataset), 논문은 [Zenodo](https://zenodo.org/records/18359832)에 있다.

- **기호적 일관성 검사**: 수학/코드/단순 사실 영역에서의 논리적 일관성(consistency) 검사를 통해 환각을 줄이는 하이브리드 접근이 공유된다([Consistency Checking for LLMs (arXiv:2409.13724)](https://arxiv.org/abs/2409.13724)). 반면 더 넓은 영역으로 확장하는 것은 여전히 어렵다는 논의도 있다([Scaling Consistency Beyond Formal Domains (arXiv:2507.10624)](https://arxiv.org/abs/2507.10624)).

### 에이전트 툴링과 추론 워크플로 성숙

- **Levante: MCP 네이티브 워크스페이스**: 로컬 모델(예: **Ollama**)을 위한 오픈소스 **MCP 네이티브 AI 워크스페이스**인 Levante가 소개된다([Levante](https://www.levanteapp.com)). 도구 연결(tool wiring)과 로컬 프라이버시, 모듈형 UI가 강점으로 언급된다.

- **AsyncReview + RLM 스킬 팩**: AsyncFuncAI가 DSPy RLM 코드 리뷰 에이전트 **AsyncReview**를 오픈소스로 공개했다([AsyncReview (GitHub)](https://github.com/AsyncFuncAI/AsyncReview)). 또한 npm의 스킬 킷 [@unravel‑tech/rlm‑skills](https://www.npmjs.com/package/@unravel-tech/rlm-skills)도 함께 언급된다.

- **2,000 에이전트로 브라우저 엔진 구축**: Simon Willison이 **FastRender**(브라우저 렌더링 엔진)가 **2,000개의 AI 코딩 에이전트**로 만들어졌다는 사례를 정리했다([FastRender: built by 2,000 agents](https://simonwillison.net/2026/Jan/23/fastrender/)). 태스크 분해, 검증, 오케스트레이션이 비단순 소프트웨어 규모에서도 작동할 수 있음을 보여주는 사례로 해석된다.

---

## 원문 메타 링크(검증용)

- [544 Twitters](https://twitter.com/i/lists/1585430245762441216)
- [https://news.smol.ai/](https://news.smol.ai/)
- [@smol_ai](https://x.com/Smol_AI)
