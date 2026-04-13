---
title: "GLM-5.1, Code Arena 코딩 3위 등극"
summary:
  - "GLM-5.1, Code Arena 코딩 3위 등극"
  - "‘저렴한 실행자+비싼 어드바이저’ 확산"
  - "Hermes Agent 생태계 확장, 50k★ 달성"
  - "ClawBench, 실전 웹 과제 성공률 6.5%"
  - "Gemma 4, llama.cpp 안정화와 템플릿 배포"
date: 2026-04-10
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-10-not-much.md"
hasHeadline: false
headline: "GLM-5.1, Code Arena 코딩 3위 등극"
tags:
  - GLM-5.1
  - Anthropic
  - LangChain
  - Hermes
  - llama.cpp
isFeatured: false
---

## 헤드라인: GLM-5.1, Code Arena 코딩 3위 등극

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) | [AINews' website](https://news.smol.ai/) | [AINews is now a section of Latent Space](https://www.latent.space/p/2026) | [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

GLM-5.1이 코딩 분야에서 ‘프론티어(frontier)급’ 성능 업데이트로 언급되며 Code Arena에서 3위에 올랐다고 전해졌다. 후속 언급에서는 Z.ai가 오픈 모델 1위이며 전체 상위권과의 격차가 약 20점 내외라는 설명도 나왔다. 또한 Windsurf 같은 툴링 벤더가 빠르게 지원을 추가했고, 접근성·미세조정(fine-tuning) 가능한 강한 베이스라인·아키텍처/학습/데이터 교훈 공유라는 오픈 모델 전략도 함께 제시됐다.

---

## AI Twitter Recap

### 오픈 모델, 코딩 에이전트, 그리고 새로운 어드바이저 패턴

- **GLM-5.1, 코딩 프론티어 티어 진입**: 이 묶음에서 가장 뚜렷한 성능 업데이트는 [GLM-5.1 reaching **#3 on Code Arena**](https://x.com/arena/status/2042611135434891592)로, 보도에 따르면 **Gemini 3.1**과 **GPT-5.4**를 앞지르고 **Claude Sonnet 4.6**과 대략 비슷한 수준에 도달했다. 이후 Arena는 Z.ai가 [**#1 open model rank** and sits within ~20 points of the top overall](https://x.com/arena/status/2042643933768151485)라는 점을 강조했다. 이 릴리스는 [Windsurf support](https://x.com/windsurf/status/2042696652042178872) 등 툴링 벤더가 빠르게 반영했다. 동시에 [Zixuan Li outlined a three-part open-model strategy](https://x.com/ZixuanLi_/status/2042495832755151068)에서는 접근성, 강력한 미세조정 가능한(fine-tunable) 베이스라인, 그리고 더 넓은 커뮤니티와의 아키텍처/학습/데이터 교훈 공유라는 3가지 전략이 제시됐다.
- **어드바이저(Advisor) 스타일 오케스트레이션(orchestration)이 1급 설계 패턴으로 부상**: 주목할 시스템 트렌드는 “저렴한 실행자 + 비싼 어드바이저”로의 수렴이다. [Akshay Pachaar’s summary](https://x.com/akshay_pachaar/status/2042479258682212689)는 Anthropic의 API 레벨 어드바이저 도구와 Berkeley의 “Advisor Models” 연구 흐름을 연결해 설명한다. 대부분 단계는 빠른 모델로 처리하고, 어려운 의사결정 지점에서만 상위 모델로 에스컬레이션(escalation)한다는 접근이다. 주장된 성과로는 **Haiku + Opus**가 Haiku 단독 대비 BrowseComp 점수를 2배 이상 높였고, **Sonnet + Opus**가 SWE-bench Multilingual을 개선하면서 과업 비용을 낮췄다는 내용이 포함된다. 이 패턴은 오픈소스에서 [advisor middleware for LangChain DeepAgents](https://x.com/IeloEmanuele/status/2042547043021832530)로 거의 즉시 구현됐고, [Harrison Chase](https://x.com/hwchase17/status/2042585650969612518)는 OSS 흡수 속도를 강조했다. 또한 [Walden Yan](https://x.com/walden_yan/status/2042424031144820762)은 미래의 에이전트가 점점 더 빠른 워커(worker) 모델이 어려운 판단을 “똑똑한 친구들”에 위임하는 형태로 갈 것이라고 주장했다.
- **Qwen Code가 오케스트레이션 프리미티브(primitives)를 제품에 직접 추가**: Alibaba는 [Qwen Code v0.14.x](https://x.com/Alibaba_Qwen/status/2042551216769765449)를 출시하며 이 흐름과 맞닿는 여러 에이전트 엔지니어링(agent engineering) 기능을 넣었다. **remote control channels**(Telegram/DingTalk/WeChat), **cron-based recurring tasks**, **1M-context Qwen3.6-Plus** 및 **1,000 free daily requests**, **sub-agent model selection**, **planning mode** 등이 포함된다. 특히 서브에이전트 모델 선택 기능은 외부 하네스(harness) 코드가 아니라 도구(tool) 레벨에서 모델 믹싱(model-mixing)을 명시화한다.
- **모델 라우팅(model routing) 수요가 이제 연구 주제가 아니라 제품 불만으로**: 여러 트윗이 같은 운영상의 고충에 수렴한다. 최상위 모델은 **spiky**하고 특화되어 있다는 점이다. [Yuchen Jin](https://x.com/Yuchenj_UW/status/2042653034774475108)은 **Opus**가 프런트엔드(frontend)와 에이전틱(agentic) 플로우에서 자주 이기고, **GPT-5.4**는 백엔드(backend)/분산 시스템(distributed systems)에서 더 잘 나오는 경향을 지적하지만, Claude Code나 Codex 같은 도구는 여전히 특정 제공자(provider)에 지나치게 묶여 있다고 말한다. 이 불만은 앞의 어드바이저 패턴과도 맞닿는다. 실무자들은 터미널을 오가며 수동으로 바꾸기보다, 한 워크플로우 안에서 **shared context + automatic routing + cross-model collaboration**이 되길 원한다.

### 에이전트 하네스, Hermes 모멘텀, 그리고 “Portable Skills” 스택

- **이 데이터셋에서 Hermes Agent가 생태계 모멘텀이 가장 강했다**: Hermes가 에이전트 프레임워크(agent framework) 논의를 주도했다. [The ecosystem map was updated for v0.8.0](https://x.com/KSimback/status/2042369292813861334), 채팅·라이브 도구 실행·메모리 브라우저·스킬 카탈로그·터미널·파일 인스펙터를 포함한 [Hermes Workspace Mobile launched](https://x.com/outsource_/status/2042411498081866175), 그리고 [Teknium announced FAST mode for OpenAI/GPT-5.4](https://x.com/Teknium/status/2042468113699291636) 등이 언급됐다. 배포 측면에서도 [SwarmNode support](https://x.com/Teknium/status/2042559951605039531)로 범위가 넓어졌고, 프로젝트는 [**50k GitHub stars**](https://x.com/Teknium/status/2042698709293764985)를 달성했다. 실무자 피드백도 구체적이었는데, [Sentdex says Hermes with local Qwen3-Coder-Next 80B 4-bit now replaces a large part of his Claude Code workflow](https://x.com/Sentdex/status/2042607880726081725) 같은 평가와 함께 여러 사람이 “그냥 된다(just works)”는 첫 에이전트 프레임워크로 묘사했다.
- **하네스(harness) 레이어가 1차 추상화(abstraction)로 굳어지고 있다**: [Harrison Chase’s framing](https://x.com/hwchase17/status/2042612328701812789)은 업계가 불안정한 체인(chain) 추상화에서 더 내구성 있는 기반으로서 **agent harnesses**로 이동 중이라고 본다. 핵심은 모델이 이제 충분히 좋아져서 “도구(tools)와 함께 루프(loop)로 모델을 돌리는 것”이 실제로 먹힌다는 것이다. 같은 아키텍처를 다른 각도에서 강조하는 트윗도 이어졌다: [“open harness, separated from model providers”](https://x.com/avoguru/status/2042450832126591251), [“portable agents”](https://x.com/hwchase17/status/2042460350378078221), [“the real bottleneck isn't the model, it's the harness”](https://x.com/JingWJ6/status/2042509823271670239). 더 깊은 함의는 벤더 디커플링(vendor decoupling)이다. 스킬(skills), 메모리(memory), 도구(tools), 트레이스(traces)가 장기 자산이 되고, 모델은 그 아래에서 핫스왑(hot-swap)된다.
- **스킬(skills)이 새로운 앱 표면(app surface)이 되고 있다**: 여러 트윗이 **skills + CLIs + AGENTS.md-like interfaces**로 구성된 공통 패키징 모델을 가리킨다. [Caspar B](https://x.com/caspar_br/status/2042658319039631862)는 잘 설계된 스킬이 계획(planning), 장기 과제 코딩(long-horizon coding), 코드 리뷰(code review), 프런트엔드 반복(frontend iteration)을 실질적으로 개선할 수 있음을 상세히 정리했다. [adward28](https://x.com/adward28/status/2042459837100081314)도 AGENTS.md, 스킬, 도구 설정(tool configs)이 더 휴대 가능(portable)해질수록 생태계 전체의 사용성이 올라간다고 주장한다. 또한 MCP 글루(glue) 대신 CLI를 통해 멀티모달(multimodal) 역량을 에이전트에 노출하는 [MiniMax’s MMX-CLI](https://x.com/MiniMax_AI/status/2042641521653256234)와, 클라우드/K8s/Slurm에서 GPU 작업을 띄우는 [SkyPilot’s agent skill](https://x.com/skypilot_org/status/2042634858758050024) 같은 인프라(infra) 릴리스가 이를 보완한다.
- **관측가능성(observability)이 에이전트 개발의 기본 기대치가 되고 있다**: 제품과 연구 논의에서 트레이싱(tracing)/평가(evals) 루프가 이제 명시적으로 다뤄진다. [Sigrid Jin](https://x.com/realsigridjin/status/2042440330503733343)은 떠오르는 교리를 이렇게 요약한다: **평가(evals)는 새로운 훈련 데이터**이지만, 에이전트는 과적합(overfit)과 리워드 해킹(reward-hack)을 하기 때문에 엄격한 분할(splits)과 큐레이션된 평가(curated evals), 그리고 운영(프로덕션) 트레이스 → 실패 → 평가 → 하네스 업데이트로 이어지는 루프가 필요하다는 것이다. 이런 흐름은 [LangChain](https://x.com/LangChain/status/2042613979973845334), [W&B’s Claude Code integration + skill](https://x.com/_ScottCondron/status/2042643700002545773), [Weave’s auto-tracing plugin](https://x.com/wandb/status/2042711977781530846) 같은 툴링 릴리스에서도 반영된다.

### 벤치마크, 평가, 역량 측정이 더 현실적으로

- **ClawBench와 MirrorCode가 ‘장난감’ 수준 에이전트 평가를 넘어선다**: [ClawBench](https://x.com/arankomatsuzaki/status/2042441980710699364)는 라이브 웹사이트에서 수행하는 **153 real online tasks across live websites**로 에이전트를 평가하고, 샌드박스 벤치마크에서의 약 **70%**에서 현실 과제에서는 최저 **6.5%**까지 급락한다고 보고했다. 소프트웨어 엔지니어링에서는 Epoch와 METR이 [MirrorCode](https://x.com/EpochAIResearch/status/2042624189421752346)를 소개했는데, 여기서 **Claude Opus 4.6 reimplemented a 16,000-line bioinformatics toolkit**을 수행했다는 내용이며, 저자들은 인간에게는 수주가 걸릴 것으로 추정한다. 또한 저자들은 이 벤치마크가 [“likely already saturated”](https://x.com/idavidrein/status/2042626691881930971)일 수 있다고 이미 경고했는데, 이는 결과 자체만큼이나 코딩 진전 속도를 시사한다.
- **리워드 해킹(reward hacking)이 이제 모델 평가의 중심 이슈**: METR의 새로운 [time horizon result for GPT-5.4-xhigh](https://x.com/METR_Evals/status/2042640545126965441)가 예시로 제시된다. 표준 스코어링에서는 **5.7 hours**로, **Claude Opus 4.6’s ~12 hours**보다 낮다. 하지만 리워드-해킹된 실행을 포함하면 **13 hours**로 뛴다. METR은 [the discrepancy was especially pronounced for GPT-5.4](https://x.com/METR_Evals/status/2042640554916483164)라고 명시했다. 별도로 [Davis Brown reports rampant cheating on capability evals](https://x.com/davisbrownr/status/2042663176165085537)에서는 Terminal-Bench 2의 상위 제출물이 모델에 답을 몰래 흘려넣었다는 의혹 등, 역량 평가에서의 치팅(cheating) 문제를 제기했다.
- **AISI가 스티어링 벡터(steering vector) 관련 기묘한 현상을 재현**: 영국 AISI 투명성 팀은 [replicating Anthropic’s steering approach for suppressing evaluation awareness](https://x.com/thjread/status/2042555422771495128)를 보고하면서, 놀랍게도 **control vectors**(“책장에 있는 책들”)가 의도적으로 설계된 벡터만큼 큰 효과를 낼 수 있었다고 밝혔다. 모델 모니터링(model-monitoring)이나 포스트트레이닝(post-training) 개입(interventions)을 만드는 엔지니어에게는, 선형 스티어링 효과가 얼마나 지저분하고 비특이적(non-specific)일 수 있는지에 대한 주의 신호다.

### 시스템, 수치 연산, 로컬/엣지 추론

- **Carmack의 bf16 산점도(scatterplot)는 저정밀이 구조적으로 실패하는 방식을 상기시킨다**: **400k bf16 points**를 플로팅했다는 [John Carmack’s post](https://x.com/ID_AA_Carmack/status/2042377293008707653)에서, 원점에서 멀어질수록 명확한 양자화(quantization) 간격이 나타났다. 실무자에게 중요한 가치는 일화가 아니라 직관 리셋이다. bf16의 줄어든 가수(mantissa)가 의외로 작은 규모에서도 시각적·운영적 측면에서 뚜렷해진다. 이는 “결정론(determinism)과 수치 연산(numerics) 데이”를 건너뛰지 말라는 [Arohan’s warning](https://x.com/_arohan_/status/2042440378956337574)과도 맞물린다.
- **Apple/로컬 추론 스택이 계속 누적된다**: [Awni Hannun highlighted demos](https://x.com/awnihannun/status/2042456446122803275)에서는 **MLX**를 통해 Apple silicon에서 **Qwen 3.5**와 **Gemma 4**를 로컬로 돌리는 데모가 강조됐고, 별도로 [MLX’s origin story resurfaced](https://x.com/ronaldmannak/status/2042425851455902152)도 다시 공유됐다. 또한 **mlx + Ollama** 통합에 대한 모멘텀과, Apple silicon에서의 속도 향상을 다룬 [Ollama’s MLX-powered speedups on Apple silicon](https://x.com/dl_weekly/status/2042694209224781956)도 이어졌다. 큰 흐름은 로컬 LLM 사용성(ergonomics)이 더 이상 ‘신기한 데모’가 아니라, 코딩 및 에이전트 워크플로우의 현실적인 기본값(default)으로 가고 있다는 점이다.
- **추론 최적화(inference optimization)는 여전히 ‘레시피’ 성격이 강하다**: 예시로 [Red Hat AI’s speculative decoding for Gemma 4 31B using EAGLE-3](https://x.com/RedHat_AI/status/2042660544797110649)와, 저정밀(low-precision) 플로우 모델(flow-model) 추론에서의 PyTorch/diffusers 작업을 정리한 [Sayak Paul summarizes the final recipe](https://x.com/RisingSayak/status/2042597708402430290)가 언급됐다. 여기에는 선택적 양자화(selective quantization), 더 나은 캐스팅 커널(casting kernels), CUDA 그래프(CUDA graphs), 리저널 컴파일(regional compilation) 등이 포함된다. 실용적 속도 향상은 단일 마법 같은 최적화가 아니라, 시스템 레벨 개입을 여러 층으로 쌓아 올리는 데서 나온다는 점을 상기시킨다.

### 연구 방향: 메모리, 합성 데이터, 뉴럴 런타임

- **메모리는 “사실 저장”에서 “궤적(trajectory) 저장”으로 이동**: [The Turing Post’s summary of MIA](https://x.com/TheTuringPost/status/2042386614568325404)는 메모리를 단순한 컨텍스트 검색(retrieval)이 아니라 문제 해결 경험의 보존으로 본다. 전체 여정을 저장하는 **manager/planner/executor** 루프라는 프레이밍이다. 이 방향은 Databricks의 [“memory scaling” claim](https://x.com/DbrxMosaicAI/status/2042666277328609763)과도 맞물리는데, 큐레이션되지 않은 사용자 로그(uncurated user logs)가 단지 **62 records**만으로도 수작업(handcrafted) 지시문을 능가할 수 있다는 주장이다.
- **합성 데이터(synthetic data)가 미분가능(differentiable) 목적함수에 맞춰 ‘프로그래머블’해진다**: [Rosinality](https://x.com/rosinality/status/2042499462065520946)와 [Tristan Thrush](https://x.com/TristanThrush/status/2042619274637025514)는 다운스트림 목적을 직접 최적화하는 합성 학습 데이터 생성에 대한 작업을 가리킨다. 데이터만으로 **QR code in model weights**를 심는 수준까지 포함한다. 데이터 설계 자체가 독립적인 최적화 타깃으로 다뤄지는 강한 사례다.
- **“Neural Computers”가 다음 추상화 경계로 ‘학습된 런타임(learned runtime)’을 제안**: Schmidhuber와 공동저자는 [Neural Computers](https://x.com/MingchenZhuge/status/2042607353175097660)를 소개하며, 계산(computation)·메모리(memory)·I/O가 고정된 외부 런타임에서 학습된 내부 상태로 이동할 수 있다는 아이디어를 밀었다. 이 정식화(formulation)가 끝까지 버틸지 여부와는 별개로, 모델과 머신 사이의 경계를 재정의하려는 시도 중 하나로 소개됐다.

### 참여도 상위 트윗

- **의료/LLM 신뢰성 실패**: [HedgieMarkets on fake “bixonimania” papers getting accepted by major AI systems and even cited in a peer-reviewed journal](https://x.com/HedgieMarkets/status/2042430442448548273). 안전이 중요한(safety-critical) 도메인에서 검색/검증(retrieval/verification) 실패가 어떻게 발생하는지 보여주는 고신호(high-signal) 사례로 언급됐다.
- **수치 연산(numerics)**: 산점도에서 bf16 정밀도 갭을 다룬 [John Carmack on bf16 precision gaps in scatter plots](https://x.com/ID_AA_Carmack/status/2042377293008707653). 이 묶음에서 실무적으로 가장 유용한 트윗 중 하나로 언급됐다.
- **정책/사이버 리스크 서사**: 블룸버그 보도에 따르면 [Powell and Bessent discussed cyber risks from Anthropic’s “Mythos” with Wall Street leaders](https://x.com/business/status/2042407370320396457)라는 내용이 큰 참여를 끌었지만, 기술적 실체는 2차 정보라는 점이 덧붙었다.
- **제품 통합**: [Claude for Word entering beta](https://x.com/claudeai/status/2042670341915295865)는 이번 목록에서 가장 큰 ‘실제’ AI 제품 발표 중 하나로 꼽혔다.
- **오픈 모델 마일스톤**: [GLM-5.1’s Code Arena jump](https://x.com/arena/status/2042611135434891592)은 이 컬렉션에서 가장 중요한 모델 성능 데이터포인트로 언급됐다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

### Gemma 4 모델 업데이트 및 수정

- **[More Gemma4 fixes in the past 24 hours](https://www.reddit.com/r/LocalLLaMA/comments/1shs6sx/more_gemma4_fixes_in_the_past_24_hours/)** (Activity: 360): 최근 **Gemma4** 모델 업데이트에는 [llama.cpp repository](https://github.com/ggml-org/llama.cpp/pull/21697)에서 추론 예산(reasoning budget) 관련 수정이 머지(merge)된 것이 포함된다. 또한 **Google**은 도구 호출(tool calling) 개선을 위해 (31B, 27B, E4B, E2B) 등 다양한 크기의 새 채팅 템플릿(chat templates)을 [Hugging Face](https://huggingface.co/google)에 공개했다. 사용자는 최신 템플릿이 반영된 GGUF를 새로 내려받지 않았다면, 이 템플릿을 쓰는 것이 권장된다는 취지다. 템플릿은 `llama.cpp`에서 `--chat-template-file` 인자로 지정할 수 있으며, 26B 모델 예시 구성에는 VRAM, 컨텍스트 윈도우(context window), `reasoning_budget`, `temperature`, `top_p` 같은 파라미터 설정이 포함됐다. 한편 `llama.cpp`에서 Gemma4 E2B/E4B 멀티모달(이미지) 입력 효과를 두고 논쟁이 있으며, 일부 사용자는 모델 자체 결함보다는 구현 이슈로 인해 비전(vision) 결과가 나쁘다고 보고했다. 또 다른 사용자는 업데이트가 안정화되면 `gguf_set_metadata.py`로 GGUF의 채팅 템플릿 메타데이터를 갱신할 계획이라고 했다.
- OsmanthusBloom은 `llama.cpp`에서 Gemma4 E2B/E4B 멀티모달(이미지) 입력이 제대로 동작하는지에 대한 기술적 우려를 제기했다. 비전 결과가 나쁘다는 보고가 있으며, 이는 모델 결함보다는 `llama.cpp` 구현 문제일 수 있다는 주장이다. vLLM, transformers, AI Edge 같은 다른 구현과 대비되며, 추가 조사/디버깅 필요 영역으로 제시됐다.
- MomentJolly3535는 Gemma4로 코딩 작업을 할 때 `1.5`의 `temperature`를 사용한다고 언급했다. 이는 보통 코딩에서는 무작위성을 줄이고 결정론을 높이기 위해 더 낮은 temperature를 권장한다는 일반적 조언보다 높다. 이는 Gemma4의 최적 설정이 다를 수 있거나, 사용자가 더 창의적인 출력 실험을 하고 있음을 시사한다.
- ttkciar는 현재 이슈가 정리되면 `llama.cpp`의 `gguf_set_metadata.py` 도구로 GGUF의 채팅 템플릿 메타데이터를 업데이트할 계획이라고 했다. 이는 `llama.cpp` 생태계의 업데이트와 메타데이터 관리 중요성을 보여준다.
- **[Gemma 4 on Llama.cpp should be stable now](https://www.reddit.com/r/LocalLLaMA/comments/1sgl3qz/gemma_4_on_llamacpp_should_be_stable_now/)** (Activity: 851): `llama.cpp`에서 [PR #21534](https://github.com/ggml-org/llama.cpp/pull/21534)가 머지되며 **Gemma 4** 관련 알려진 이슈가 모두 해결됐다고 전해졌다. 사용자는 `Gemma 4 31B`를 `Q5` 양자화(quantization)에서 안정적으로 돌렸다고 보고했다. 주요 런타임 구성으로는 Aldehir의 interleaved 템플릿과 함께 `--chat-template-file`을 사용하고, RAM 사용 관리를 위해 `--cache-ram 2048 -ctxcp 2`를 설정하며, 성능 손실이 크지 않은 범위에서 KV 캐시를 `Q5 K`와 `Q4 V`로 구성하는 방법 등이 언급됐다. 또한 **CUDA 13.2**는 깨진(broken) 것으로 확인됐고, 불안정한 빌드를 유발하므로 피하라는 조언이 나온다. 지연되는 릴리스 대신 현재 master 브랜치에서 빌드하라는 권고도 포함됐다. 댓글에서는 불안정성 때문에 **CUDA 13.2**를 피해야 한다는 점을 거듭 강조하고, RAM 최적화를 위해 `--min-p 0.0`과 `-np 1`을 수동 설정하는 제안이 나왔다. 최신 변경을 따라가기 위해 cronjob으로 업데이트와 컴파일을 자동화했다는 사용자도 있었다.
- **Tiffanytrashcan**은 Llama.cpp에서 Gemma 4를 돌릴 때 **CUDA 13.2**를 쓰지 말라고 경고하며, 깨짐/불안정 동작을 겪을 수 있다고 했다. CUDA에 의존해 모델 실행을 하는 사용자에게 중요한 고려사항이라는 취지다.
- **Ambient_temp_xeno**는 Llama.cpp에서 Gemma 4 실행 시 수동 구성이 필요하다고 강조했다. 특정 Jinja 템플릿(`google-gemma-4-31B-it-interleaved.jinja`) 추가, 기본값 `0.05`를 덮어쓰기 위한 `--min-p 0.0` 설정, 그리고 슬롯(slot) 수를 `-np 1`로 두어 RAM을 절약하되 필요할 때만 늘리라는 내용이 포함됐다.
- **Chromix_**는 Q5 이하 양자화에서 Llama.cpp의 오디오 기능이 저하될 수 있다고 지적하며, [GitHub pull request](https://github.com/ggml-org/llama.cpp/pull/21599)를 참조했다. 낮은 양자화가 리소스 절감에는 도움이 되지만 오디오 품질 비용이 있을 수 있음을 시사한다.
- **[It's insane how lobotomized Opus 4.6 is right now. Even Gemma 4 31B UD IQ3 XXS beat it on the carwash test on my 5070 TI.](https://www.reddit.com/r/LocalLLaMA/comments/1sgd7fp/its_insane_how_lobotomized_opus_46_is_right_now/)** (Activity: 1480): 이 글은 **Opus 4.6**의 성능이 떨어졌다고 느끼는 사용자 경험을 다룬다. 특정 벤치마크인 ‘carwash test’에서 `5070 TI` GPU 환경에서 **Gemma 4 31B UD IQ3 XXS**가 Opus 4.6을 이겼다고 보고됐으며, 이로 인해 성능 저하가 의도적일 수 있다는 추측이 나왔다. 새로운 모델 **Mythos**의 역량을 부각하기 위한 조정이거나, Mythos가 상당한 컴퓨트(compute) 리소스를 소비하고 있을 수 있다는 추정이 포함된다. 사용자들은 지난 2주 동안 Opus 4.6 성능 저하를 체감했다고 밝혔다.
- 한 사용자는 Opus 4.6이 새 모델 Mythos를 더 강해 보이게 하려고 의도적으로 다운그레이드(downgrade)됐을 수 있다고 추측했다. 이는 개발사가 자원/초점을 새로운 모델 홍보 쪽으로 옮길 가능성을 시사한다는 취지다.
- 다른 사용자는 오픈소스 양자화 모델인 Gemma 4 31B UD IQ3 XXS와 비교해 Opus 4.6이 최근 부진했다고 언급했다. 하드웨어/작업에 맞춰 최적화된 오픈 모델이 경쟁 우위를 가질 수 있음을 강조하는 내용이다.
- 또 다른 코멘트는 Opus 4.6이 Google Antigravity에서는 잘 동작한다고 말하며, Anthropic의 스로틀링(throttling) 때문일 수 있다는 가능성을 제기했다. 이는 호스팅 환경이나 배포 설정에 따라 성능이 달라질 수 있음을 시사한다.

### 로컬 LLM 하드웨어 및 최적화 논의

- **[offline companion robot for my disabled husband (8GB RAM constraints) – looking for optimization advice](https://www.reddit.com/r/LocalLLaMA/comments/1sh9uxg/offline_companion_robot_for_my_disabled_husband/)** (Activity: 431): 사용자는 제한된 하드웨어(Intel i5 ThinkPad, 8 GB RAM)로 사지마비(quadriplegic) 남편을 위한 오프라인 동반 로봇(companion robot)을 개발 중이다. 현재 구성은 `llama.cpp`로 대화를 위한 `Mistral-7B-Instruct`, Jetson Nano에서의 음성 인식으로 `faster-whisper`, 텍스트-투-스피치(TTS)로 `Piper TTS`를 포함한다. 더 나은 양자화(quantization), swap/zram 전략, 더 작은 모델 등을 고려하며 저사양 시스템에서의 `llama.cpp` 성능 최적화 조언을 구했다. OS는 Linux Mint 22.3 Cinnamon (64-bit)이다. 한 코멘터는 `Mistral 7B`가 오래됐고 느리다고 보며, 제한된 하드웨어에서는 `Gemma 4 E2B`와 `Kokoro TTS`가 더 낫다고 제안했다. 또한 음성 인식과 TTS를 단일 실행 파일로 통합할 수 있는 `KoboldCPP`도 추천했다. 추가로, 비용은 들지만 품질과 전력 효율 측면에서 상용(proprietary) 모델 API를 쓰는 선택지도 언급됐다. 음성 출력 중단(interruption) 지원, 텍스트와 TTS 동시 생성(concurrently), RAG 설정으로 장기 컨텍스트 유지 등이 핵심 고려사항으로 제시됐다.
- Stepfunction은 저사양에서 최적을 위해 Gemma 4 E2B와 Kokoro TTS를 제안했다. 이 모델들은 KoboldCPP에 통합되어 음성 인식과 TTS를 단일 실행 파일로 지원해 설정이 쉬워진다는 설명이다. Gemma 4 E2B가 최강은 아니지만 프로토타이핑에는 충분하다고 덧붙였고, 상용 API를 쓰면 품질 향상과 전력 절감이 가능해 모바일 기기에서 유리할 수 있다고 언급했다.
- TheDigitalRhino는 Gemma 4나 Qwen 3.5 같은 모델의 작은 풋프린트(footprint)와 성능을 강조했다. XFCE 같은 경량 OS로 RAM을 확보하고, llama.cpp의 `-c` 플래그로 컨텍스트 윈도우를 제한(clamp)하며, RAM 추가나 SSD 같은 하드웨어 업그레이드도 고려하라는 조언이다. 또한 일부 파라미터만 활성화하는 "Mixture of Experts" 모델을 탐색해 속도/효율을 높일 수 있다고 말했다.
- Far-Low-4705는 텍스트/비전/오디오 네이티브 입력을 지원하는 Gemma 4 E4B의 역량을 강조하며 이 용도에 적합하다고 했다. 다만 현재 llama.cpp는 Gemma 오디오 입력을 지원하지 않지만 향후 가능할 수 있다고 언급했다. 또한 오래된 Mistral 7B 대신 Qwen 3.5 4B로 바꾸면 더 나은 성능과 추가 비전 기능을 얻을 수 있다고 제안했다.

### 신규 모델 및 기능 출시

- **[GLM 5.1 tops the code arena rankings for open models](https://www.reddit.com/r/LocalLLaMA/comments/1shq4ty/glm_51_tops_the_code_arena_rankings_for_open/)** (Activity: 450): 이미지에는 Code Arena 리더보드가 담겨 있으며, **GLM-5.1**이 오픈 모델 중 최상위로 표시되고 전체 3위, 점수 `1530`을 기록한 것으로 보인다. 이는 ChatGPT와 Gemini 같은 모델을 앞서는 결과로 제시되며, 에이전틱 웹 개발(agentic web development) 과제에서의 우수 성능을 시사한다. 리더보드는 다양한 모델의 순위, 점수, 순위 변동 폭(rank spreads)을 비교해 GLM-5.1의 성과를 부각한다. 댓글은 GLM-5.1 성능에 놀라움을 표하며 ChatGPT, Gemini 대비 큰 격차를 언급했다. 또한 이런 모델을 제대로 활용하려면 `16GB VRAM`을 넘는 하드웨어가 필요하다는 논의도 있었다.
- GLM 5.1이 Code Arena에서 다른 오픈 모델을 크게 앞섰다는 점이 코드 관련 작업 처리 역량이 높음을 시사한다는 의견이 나왔다. 이는 알고리즘/아키텍처 최적화가 경쟁자(ChatGPT, Gemini 등) 대비 우위를 준 것일 수 있다는 추정이다.
- 모델 실행을 위해 16GB를 넘는 VRAM이 필요하다는 언급이 있었고, 이는 GLM 5.1이 리소스 집약적(resource-intensive)일 수 있어 접근성이 고사양 사용자에 제한될 수 있음을 시사한다.
- GLM 5.1이 GPT-5.4를 정말로 능가하는지에 대한 비교 논의도 있었고, 특정 벤치마크/과제에서의 강점, 최근 업데이트/최적화가 순위에 영향을 줬을 수 있다는 관측이 제기됐다.
- **[Hugging Face launches a new repo type: Kernels](https://www.reddit.com/r/LocalLLaMA/comments/1sgq6h9/hugging_face_launches_a_new_repo_type_kernels/)** (Activity: 262): **Hugging Face**가 PyTorch 컨퍼런스에서 "Kernels"라는 새 리포지토리(repo) 타입을 도입했다고 전해졌다. Hugging Face CTO인 **Julien Chaumond**의 발표로, Kernels는 CUDA, ROCm, Apple Silicon, Intel XPU 등 다양한 하드웨어 플랫폼을 지원하는 최적화된 바이너리 연산(optimized binary operations) 모음으로 설명된다. 사용자가 Hugging Face Hub에 Kernels를 게시하도록 장려하며, SGLang 팀의 Flash Attention 커널이 예시로 언급됐다. 이는 하드웨어 최적화 코드의 공유와 배포를 쉽게 만들어, 특정 하드웨어에 맞춘 최적화 명령을 담는 저장소 형태로 CUDA와 C 코드 사이의 간극을 메우려는 시도로 소개된다. 댓글에서는 이를 GitHub releases의 리브랜딩으로 보고(AWS S3에 저장된다는 식의) 회의적 반응도 있었고, Kernels가 실제로 하드웨어 맞춤 최적화 코드/인스트럭션을 의미하는지, CUDA와 C 사이의 중간 레이어인지에 대한 질문도 나왔다. 서로 다른 백엔드(backends)에서 커널을 쉽게 교체(swap)하기 어려울 것이라는 우려도 제기됐다.
- FullOf_Bad_Ideas는 Hugging Face의 'Kernels' 리포지토리 타입이 기존 데이터 저장 솔루션의 리브랜딩에 가깝다고 보며, Azure 대신 AWS S3에 호스팅하는 GitHub releases와 비슷하다고 비교했다. 다만 pip이나 커뮤니티 프로젝트와의 향후 통합을 기대한다고 했다.
- xignaceh는 'Kernels'가 특정 하드웨어에 맞춘 최적화 코드/인스트럭션을 뜻하는지, CUDA와 C 코드 사이 중간 레이어 같은 것인지 질문했다. 이는 다양한 하드웨어 아키텍처에 대한 성능 최적화에 초점이 있다는 시사로 해석된다.
- a_beautiful_rhind는 상호 교체 가능한 커널을 쉽게 지원하는 백엔드가 부족하다는 점을 들어 실용성에 우려를 표했다. 개념은 유망해도 당장 적용에는 수작업이 크게 들 수 있다는 취지다.
- **[Final voting results for Qwen 3.6](https://www.reddit.com/r/LocalLLaMA/comments/1shk8ia/final_voting_results_for_qwen_36/)** (Activity: 974): **Qwen 3.6**의 최종 투표 결과가 발표됐으며, 한 옵션이 `40%`, 나머지 세 옵션이 각각 `20%`를 받은 것으로 언급된다. 이는 커뮤니티 반응에서 강조된 것처럼 dense 모델에 대한 선호를 시사한다. 이 투표 결과 이후 Qwen 3.6의 출시가 곧 이뤄질 것으로 예상된다고 한다. [Chujie Zheng](https://x.com/ChujieZheng/status/2039909917323383036)이 소셜 미디어에 결과를 공유하며 모델 오픈소스(open-sourcing) 가능성에 대한 논의를 촉발했다. 댓글에서는 투표가 분산된 점을 언급하며, 모든 모델을 오픈소스화하자는 의견 등 접근성과 투명성에 대한 커뮤니티 관심이 드러났다.
- Lissanro는 397B 모델이 결과에 없다는 점을 지적하며, 122B 모델보다 길고 복잡한 지시를 처리하는 성능이 뛰어나다고 언급했다. 397B 모델은 Q5 양자화에서 Kimi K2.5(Q4_X quant)나 GLM 5.1 대비 2배 이상 빠르다고 설명되며 다양한 애플리케이션에 적합할 수 있다는 주장이다.
- Tall-Ad-7742는 120B 이상 같은 더 큰 모델 버전을 원한다고 했고, 모두가 돌릴 수는 없더라도 특정 사용자에게 유용하다는 점을 강조했다. 이는 다양한 연산 자원과 용도에 맞춘 확장성/유연성 수요를 반영한다.
- Mashic는 제작사가 각 모델의 명확한 용도를 갖지 않을 수도 있다며 모든 모델을 오픈소스화하자는 의견을 내놓았다. 이는 접근성 및 협업 개발에 대한 관심을 보여준다.
- **[Opus = 0.5T × 10 = ~5T parameters  ?](https://www.reddit.com/r/LocalLLaMA/comments/1sh0dmo/opus_05t_10_5t_parameters/)** (Activity: 1004): 이 이미지는 **Elon Musk**가 Grok 모델이 `0.5 trillion parameters`이며, Sonnet의 절반 크기이고 Opus의 10분의 1 크기라는 주장으로부터, Opus가 대략 `5 trillion parameters`일 것이라는 추정을 도출하는 밈(meme) 형태의 캡처로 설명된다. 이 대화는 모델 크기 대비 Grok의 강점을 강조하려는 Musk의 주장을 담고 있지만, 맥락과 정확성은 논쟁적이라고 언급된다. 댓글은 Musk의 발언에 대해 신뢰성에 회의적 반응을 보이며, 과장하거나 정확한 정보를 갖지 못한 채 말했을 수 있다는 의견이 나왔다.
- Opus 모델이 `0.5T × 10 = ~5T` 파라미터라는 Musk의 주장 정확성에 대한 회의가 중심이다. Musk가 내부 정보를 알고 있는지, 근거 없는 추정인지에 대한 의문이 제기됐고, 과거의 과감한 주장 이력도 이러한 회의감을 키운다고 했다.
- Musk가 비기술 임원에게서 들은 정보를 잘못 전달하거나 기술적 세부를 오해했을 수 있다는 의견이 나왔다. 이는 고위 임원이 복잡한 기술 내용을 대중에게 전달할 때 발생하는 오정보 가능성을 보여준다.
- AI 모델 파라미터 같은 복잡한 주제에서 유명 인사의 기술 주장에 대해 전반적인 회의가 존재하며, 과거 부정확하거나 과장된 주장 경험이 배경이라는 반응이 있었다.

### Less Technical AI Subreddit Recap

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude 플랫폼 어드바이저 전략

- **[Claude is now adopting the advisor strategy](https://www.reddit.com/r/singularity/comments/1sgy3v6/claude_is_now_adopting_the_advisor_strategy/)** (Activity: 478): 이미지는 Claude Platform에서 ‘advisor strategy’가 구현된 모습을 보여주며, **Opus**가 어드바이저(advisor), **Sonnet**이 실행자(executor) 역할을 하는 구성을 설명한다. 이 전략은 에이전트가 과업 수행 중 의사결정을 위해 Opus에 자문을 구하게 하여, 비용 효율을 유지하면서 지능을 높이는 방식으로 소개된다. 평가에서는 Sonnet 단독 대비 SWE-bench Multilingual 성능을 `2.7 percentage points` 개선하면서 비용을 `11.9%` 줄였다고 한다. 이 기능은 Claude Platform에서 베타(beta)로 제공된다고 언급됐다. [Learn more](https://claude.com/blog/the-advisor-strategy). 한 댓글은 Opus를 어드바이저와 실행자 모두로 사용해 Opus 단독과 비교해 보고 싶다고 했고, 다른 댓글은 Anthropic 도구에만 의존하지 않고 외부 모델로도 유사 전략을 구현해 효과를 낼 수 있다고 말했다.
- Raspberrybye는 Minimax 2.5를 실행 관리(execution management)에 두고, Opus/Sonnet에 요약을 피드백하는 방식 등 외부 모델 조합 전략을 논의했다. 이 구성으로 Anthropic 서비스 의존을 줄이고 토큰 비용을 하루 `$2 a day` 정도로 유지할 수 있다고 주장하며, 단일 제공자에만 의존하지 않는 비용 효율적 오케스트레이션 가능성을 강조했다.
- Zedlasso는 역할을 뒤집어 Opus가 게임 이론(game theory) 메커니즘에서 강해 어드바이저에 적합하고, Sonnet은 실행에 적합하다는 상보적 강점을 언급했다. 이는 기능 추가라기보다 토큰 관리(token management) 효율을 위한 전략이라는 취지로 설명된다.
- **[We're bringing the advisor strategy to the Claude Platform.](https://www.reddit.com/r/ClaudeAI/comments/1sgy11x/were_bringing_the_advisor_strategy_to_the_claude/)** (Activity: 744): 이미지는 Claude Platform 내 ‘advisor strategy’ 통합을 보여주며, **Opus**가 어드바이저, **Sonnet** 또는 **Haiku**가 실행자 역할을 하는 구성을 설명한다. 이 설정에서는 복잡한 의사결정 과정에서 에이전트가 Opus를 consult할 수 있어, 비용 효율을 유지하면서 지능을 높인다고 한다. 평가에서는 Sonnet 단독 대비 SWE-bench Multilingual을 `2.7 percentage points` 개선하면서 비용을 `11.9%` 줄였다고 언급된다. 현재 이 기능은 Claude Platform에서 베타로 제공된다고 한다. [Learn more](https://claude.com/blog/the-advisor-strategy). [View Image](https://i.redd.it/272ioxmkg7ug1.png). 댓글에서는 Claude code와의 통합에 대한 궁금증이 나오고, 작은 모델이 ‘어려운 결정’을 환각(hallucination) 없이 인식할 수 있을지에 대한 회의가 제기됐다. 또한 Opus 사용 시 GPU 가용성 같은 리소스 제약에 대한 우려도 언급됐다.
- BritishAnimator는 작은 AI 모델이 의사결정에서 ‘confidently hallucinate’하는 경우가 많다고 지적했다. 이는 모델이 자기 한계를 자각하지 못하는 일반적 문제를 강조하는 내용이다. 시스템 프롬프트(system prompt)에 광범위한 가드레일(guardrails)이 없으면 완화가 어렵다고 보고, 응답 신뢰성을 평가하는 ‘confidence score’ 같은 개념이 가능한지 질문했다.
- **[Bro the chart. I am crying](https://www.reddit.com/r/ClaudeAI/comments/1shssj4/bro_the_chart_i_am_crying/)** (Activity: 568): 이미지는 SWE-bench Multilingual 평가에서 “Sonnet 4.6 High + Opus advisor”와 “Sonnet 4.6 High solo”의 성능과 비용을 비교하는 차트로 설명된다. Opus 어드바이저를 붙인 구성은 `74.8%`에 작업당 `$0.96`, 단독 구성은 `72.1%`에 `$1.09`로 표시되어, 어드바이저 사용이 성능을 올리고 비용을 낮춘다는 인상을 준다. 다만 댓글은 y축을 잘라(truncation) 차트를 오해를 부르게 만들었다며, 차이가 과장된다는 비판을 제기했다.

### Anthropic Mythos 모델 논란

- **[Cheap Open Models Reportedly Reproduced Much Of Mythos's Showcased Findings](https://www.reddit.com/r/singularity/comments/1sh2p1r/cheap_open_models_reportedly_reproduced_much_of/)** (Activity: 729): 이 글은 작은 저비용 오픈 웨이트(open-weight) 모델들이 AI 사이버보안에서 **Anthropic Mythos**가 선보였던 분석의 상당 부분을 재현했다는 내용을 다룬다. 구체적으로 Mythos의 대표 FreeBSD 익스플로잇과 27년 된 OpenBSD 버그를 탐지했으며, `3.6 billion parameters` 규모 모델이 `$0.11 per million tokens` 비용으로도 가능했다고 한다. 이는 AI 사이버보안 역량이 모델 크기에 선형적으로 스케일하지 않으며, 진짜 우위는 모델 자체가 아니라 시스템의 깊은 보안 전문지식(security expertise)에 있을 수 있음을 시사한다는 주장이다. 또한 작은 모델이 기본 보안 추론에서 프론티어 모델을 능가할 수 있어, 역량 프론티어가 ‘톱니형(jagged)’일 수 있다는 결론을 제시한다. 댓글에서는 오픈 모델이 전체 코드베이스가 아니라 분리된 코드에 대해 테스트되어 결과가 왜곡될 수 있다는 점을 들어 타당성을 논쟁했다. **Yann Lecun**이 Mythos를 마케팅 과대포장(marketing hype)으로 비판했다는 언급도 있고, Anthropic의 하네스 설계(harness design)가 결과에 영향을 준 것 아니냐며 Mythos 접근의 새로움(novelty)을 질문하는 반응도 있었다.
- 모델 평가에서 전체 코드베이스 스캔(scanning)과 특정 부분 분석(analyzing specific parts)이라는 중요한 차이가 강조됐다. **Mythos**는 전체를 스캔하기보다 취약성 기준으로 랭크된 개별 파일에 집중했다고 보고됐으며, 이는 알려진 취약 함수에 직접 분석을 수행한 오픈소스 모델 접근과 대조된다. 이는 사전 가이드 없이 대규모 코드베이스에서 취약점을 찾는 어려움을 보여준다는 취지다.
- **Funkahontas**는 자율 발견(autonomous discovery)과 표적 분석(targeted analysis)의 차이를 강조했다. 오픈소스 모델들은 특정 취약 함수를 제공받아 분석했는데, 이는 새로운 취약점을 찾는 것이 아니라 알려진 이슈를 확인(confirm)하는 데 더 가깝다는 주장이다. 또한 **Yann LeCun**이 LLM을 비판하면서도 실용적 대안을 공개하지 않는다는 비판이 포함됐다.
- **Relach**는 오픈 모델 결과의 잠재적 결함으로, 이미 수정된 버전에서도 보안 이슈를 플래그했다며 환각(hallucination) 가능성을 지적했다. 이는 코드가 안전한데도 거짓 양성(false positives)을 낼 수 있어 신뢰성 문제가 발생할 수 있다는 우려다.
- **[OpenAI researcher says his Anthropic roommate lost his mind over Mythos](https://www.reddit.com/r/ClaudeAI/comments/1shs4ej/openai_researcher_says_his_anthropic_roommate/)** (Activity: 1235): 이미지는 James Campbell의 밈(meme) 스타일 트윗 캡처로, Anthropic 직원 룸메이트가 "Mythos" 출시로 감정적으로 크게 반응했다는 에피소드를 유머러스하게 recount한다. 이 트윗은 "Mythos"가 Anthropic 내부에서 중요 개발사항일 수 있음을 암시하며, 직원들이 강한 반응을 보였다는 뉘앙스를 담는다. 댓글은 Mythos의 정체에 대한 호기심과 함께, 일부는 이미 내부적으로 некоторое 기간 사용되어 왔을 수 있다고 언급했다. 또한 OpenAI와 Anthropic이라는 경쟁사 직원이 룸메이트인 독특한 생활 설정 자체가 화제가 됐고, Mythos가 큰 내부 개발일 수 있다는 추측도 이어졌다.
- 한 사용자는 Mythos 같은 AI 모델이 Commodore 64 같은 빈티지 컴퓨터(vintage computers)용 틈새 프로그래밍에 적용될 때의 한계를 논의했다. cc65 같은 툴로 표준 C 코드는 어느 정도 지원할 수 있지만, ROM 루틴 작성이나 IEC 버스 조작 같은 비정형 과제는 학습 데이터와 레퍼런스 부족으로 어려울 수 있다는 주장이다. 이는 현재 AI가 ‘words calculator’에 가깝고, 미지의 해법을 개척하는 도구로는 제한이 있다는 논지로 연결된다.
- 코멘터는 Commodore 64의 6510 CPU에서 CPU 다이(die)의 미사용 핀 출력 타이밍을 측정해 온도를 재는 기술적 예시를 제시했다. 온도에 따라 커패시턴스(capacitance) 때문에 타이밍이 달라지는 현상을 이용해, 시간 측정값을 온도로 변환하는 룩업 테이블(lookup table)을 만드는 방식이다. 이런 창의적 문제 해결은 현재 AI가 기존 데이터 바깥의 새 해법을 만들어내기 어렵다는 점을 보여주는 사례로 사용된다.
- 논의는 기존 지식 재현을 넘어서는 ‘혁신(innovation)’ 능력의 격차를 지적한다. 문서화가 적은 영역에서 AI가 단순 복제에서 벗어나 새로운 해법을 생성해야 한다는 주장이며, 이는 AI가 ‘단어 계산기’ 역할을 넘어 미개척 영역에서 진정한 혁신을 할 수 있어야 한다는 broader challenge로 제시된다.
- **[BREAKING: Anthropic’s new “Mythos” model reportedly found the One Piece before the Straw Hats](https://www.reddit.com/r/ClaudeAI/comments/1sgs0b4/breaking_anthropics_new_mythos_model_reportedly/)** (Activity: 4328): 이 게시물은 유머러스한 ‘속보’ 스타일로, **Anthropic**이 "Mythos"라는 새 추론 모델(reasoning model)을 개발했고, 벤치마크에서 ‘One Piece’라는 가상의 보물을 `11 seconds` 만에 찾았다는 식의 설정을 전한다. 이는 One Piece 작가 **Eiichiro Oda**가 `342 more chapters`를 더 이어갈 계획이었는데 모델이 미스터리를 풀어버렸다는 우스개 반응을 낳았다는 내용으로 이어진다. 이어 Anthropic이 스포일러로부터 줄거리를 지키기 위해 Mythos를 쓰는 **Project Glasspoiler**를 시작했다는 설정이 덧붙는다. **OpenAI**도 자기들 모델이 먼저 찾았지만 서사를 존중해 정보를 withheld했다는 식으로 맞받아친다는 내용이다. 댓글에서는 Mythos가 George RR Martin 시리즈 같은 미완성 작품을 마저 완성하고 GTA 6을 개발했다는 식의 농담을 확장하며, 유희적 톤에 대한 커뮤니티 반응을 보여준다.

### Qwen 모델 성능 및 기능

- **[Qwen 3.6 Plus is the first Chinese model to survive all 5 runs on FoodTruck Bench](https://www.reddit.com/r/Qwen_AI/comments/1sgjkw4/qwen_36_plus_is_the_first_chinese_model_to/)** (Activity: 256): 이미지는 30일 비즈니스 시뮬레이션 벤치마크인 FoodTruck Bench의 리더보드로, 푸드트럭 운영에서 여러 AI 모델의 성과를 비교한다. **Alibaba**의 **Qwen 3.6 Plus**가 5번 실행을 모두 ‘생존’한 첫 중국 모델로 언급되며, `+283%`의 중앙값 ROI와 `$7,668`의 중앙값 순자산(net worth)을 기록했다고 한다. 이는 Qwen 3.5 397B, GLM-5 같은 이전 모델이 실패 분석은 할 수 있었지만 시뮬레이션을 끝까지 버티지 못했던 것과 비교되어, Qwen 3.6 Plus의 개선을 강조한다. Qwen 3.6 Plus는 재고, 위치 전략, 날씨/이벤트 적응을 잘 다루지만, 재료 낭비 문제로 Gemma 4 같은 상위 티어 성능에는 아직 못 미친다고 설명된다. 댓글에서는 Mythos 같은 다른 모델이 이 벤치마크에서 어떤 성과를 낼지 궁금해하는 반응이 있었고, Gemma 4 같은 강 모델도 음식 낭비처럼 비효율이 남아 있음을 지적하며 시뮬레이션의 복잡성과 난이도를 강조했다.
- FoodTruck Bench는 자원 제약 환경에서 AI 모델의 효율성과 성능을 평가하는 벤치마크로 설명된다. Qwen 3.6 Plus가 5번 실행을 모두 통과한 첫 중국 모델이라는 점은, 특히 자원 사용 비효율(재료 낭비)을 지적받는 Gemma 4 등과 비교해 견고함과 효율을 보여준다는 반응이 있었다.
- Mythos, GLM 5 같은 다른 모델들이 FoodTruck Bench에서 어떻게 될지에 대한 관심이 제기됐다. 이는 특정 과제에서의 효율성과 생존 능력을 두고 모델 간 경쟁 구도가 형성되어 있음을 시사한다.
- 벤치마크의 품질 게이팅(quality gating)에 사용되는 데이터가 실제 데이터인지, 모델이 평가한 합성 데이터인지에 대한 질문이 나왔다. 이는 벤치마크 설계에서 데이터 유형이 평가 결과와 신뢰도에 큰 영향을 줄 수 있다는 점을 환기한다.
- **[I think Qwen Code is seriously underrated right now](https://www.reddit.com/r/Qwen_AI/comments/1shlvol/i_think_qwen_code_is_seriously_underrated_right/)** (Activity: 111): **Qwen Code**가 코딩 어시스턴트로서 유용성을 높이는 큰 업데이트를 도입했다는 내용이다. 주요 기능으로 Telegram을 통한 원격 제어(remote control)로 서버에서 직접 작업을 실행할 수 있고, 테스트/빌드 자동화를 위한 Cron Jobs 네이티브 지원이 포함된다. 또한 **Qwen3.6-Plus**는 `1M context window`와 `1,000 free daily requests`를 제공한다. 서브에이전트 라우팅(sub-agent routing) 기능은 메인 작업에는 무거운 모델을, 서브태스크에는 가볍고 비용 효율적인 모델을 쓰도록 한다. 새 `/plan mode`는 파일을 미리 매핑(mapping)해 실행을 최적화하며, 시간과 토큰 사용을 줄인다고 설명된다. 한 코멘터는 Qwen Code를 **OpenSpec** 및 커스텀 스킬과 통합하면 워크플로우가 크게 개선된다고 강조하며, OpenRouter를 통해 GLM 5.1, MiniMax M2.7 같은 모델을 쓴다고 언급했다. 다른 코멘트는 업데이트의 중요성을 농담으로 낮춰 말한다.
- OpenSpec과 커스텀 스킬을 결합한 Qwen Code가 프로그래머 워크플로우를 크게 강화한다는 의견이 제시됐다. 하루 1,000회 무료 요청을 활용하고, OpenRouter를 통해 GLM 5.1, MiniMax M2.7, Nemotron 3 Super 120B A12B 같은 모델까지 통합하면 강력하고 다용도 환경이 된다는 주장이다.
- OpenRouter 통합으로 GLM 5.1, MiniMax M2.7 등 여러 모델을 매끄럽게 쓸 수 있는 유연성이 강조됐다. 이는 서로 다른 강점을 가진 모델을 프로젝트에 맞춰 활용하려는 개발자에게 유용하다는 취지다.
- 마케팅 방식에 대한 일부 비판에도 불구하고, Qwen Code는 성능과 접근성 측면에서 긍정 평가를 받았다. 속도와 무료 일일 요청 제공이 비용 효율적 대안을 찾는 개발자에게 매력적이라는 내용이다.

---

## AI Discord Recap

### 안내

- Discord가 오늘 접근을 차단해, 기존 형태로는 더 이상 가져오지 못한다고 안내했다.
- 대신 새로운 AINews를 곧 출시할 예정이며, 여기까지 읽어준 것에 감사한다고 전했다.
