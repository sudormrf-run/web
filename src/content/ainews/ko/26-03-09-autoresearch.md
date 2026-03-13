---
title: "LLM이 더 작은 LLM을 완전 자율로 학습시키기 시작"
summary:
  - "LLM이 더 작은 LLM을 자율 학습하기 시작"
  - "Claude Code가 멀티에이전트 PR 리뷰를 공개했다"
  - "OpenAI가 Promptfoo 인수로 보안 eval을 강화했다"
  - "vLLM이 Jetson에서 로컬 어시스턴트를 시연했다"
  - "Figure Helix 02가 거실 정리 자율 데모를 공개했다"
date: 2026-03-09
originalUrl: "https://news.smol.ai/issues/26-03-09-rsi-is-here/"
hasHeadline: true
headline: "LLM이 더 작은 LLM을 완전 자율로 학습시키기 시작"
tags:
  - OpenAI
  - Claude
  - 에이전트
  - vLLM
  - 로보틱스
isFeatured: true
---

## 헤드라인: LLM이 더 작은 LLM을 완전 자율로 학습시키기 시작

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

**[WTF Happened in 2025](https://www.latent.space/p/wtf2025) 이후의 여파가 이어지는 가운데, LLM이 (더 작은) LLM을 완전 자율로 학습시키기 시작하고 있습니다.**

매 AI “여름”에는 늘 “AutoML 모먼트”가 있습니다. 모델이 모델 학습을 자동으로 개선하고, 그 결과 지능이 무한 재귀(infinite recursion)로 증가해 낙원이나 파멸로 이어질 수 있다는 꿈 말이죠. 우리가 ‘마지막 여름(Last Summer)’에 있는지는 모르지만, 방금 그 순간을 맞이했습니다:

[karpathy](https://x.com/karpathy/status/2030371219518931079?s=20)

![](https://substackcdn.com/image/fetch/$s_!j6Wh!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F029937e5-383d-4302-a39c-d0bdac3f797e_1188x1252.png)

[our Dec 2025 conversation with Yi Tay](https://www.latent.space/p/captaining-imo-gold-deep-think-on?utm_source=publication-search)에서 그는 “**vibe training**”을 이야기했습니다:

> “AI 코딩이 이제는 이런 지점까지 온 것 같아요. 제가 작업(job)을 돌리고 버그가 나오면, 버그를 거의 보지도 않아요. 그걸 Antigravity 같은 데에 붙여넣고 모델이 버그를 고치게 둔 다음, 다시 작업을 돌립니다.
> 
> 
> **vibe coding을 넘어, vibe training, vibe ML** 같은 거죠. 대부분의 경우 꽤 잘해요. 그리고 어떤 문제들은 일반적으로… 저는 이게 진짜 잘 맞는 문제들이 있다는 걸 알고 있고, 심지어 아마 저보다 더 나을 때도 있어요. 제가 그 이슈를 파악하는 데 20분은 쓸 걸요.
> 
> 제 생각에 **vibe coding 1단계는 뭘 해야 하는지 아는데 그냥 너무 귀찮은 상태**예요. ‘아, 그냥 네가 해줘.’ 제가 이걸 천 번은 했으니까요.
> 
> **다음 단계는 뭘 해야 하는지조차 모르는 상태**예요. 모델이 버그를 대신 조사해주는 거죠. 답이 맞아 보이기만 하면, 그냥 배포(ship)해요.
> 
> 처음에는 저도 확인하고 다 봤어요. 그러다가 어느 순간 ‘**어쩌면 모델이 나보다 코드를 더 잘 짤지도**’라고 생각하게 되죠. 그래서 그냥 모델이 하게 둡니다. 그리고 모델이 준 수정(fix)을 바탕으로 다시 작업을 돌려요.”

이런 일이 ‘빅 랩(Big Labs)’에서 벌어진다는 건 알고 있었지만, 이제는 GPU만 있으면 누구나 집에서 돌려보면서 “모델이 모델을 개선”하는 걸 직접 확인할 수 있게 됐습니다.

지금이 2026년 3월이라는 점을 감안하면, 올해 9월까지 [Jakub Pachocki’s “Automated AI Research Intern](https://www.latent.space/p/science?utm_source=publication-search)”에 꽤 잘 맞춰 가는 것으로 보입니다(“*그저 채팅이나 코드를 넘어서, 인간 연구자를 의미 있게 **가속(accelerate)**하는 시스템*”).

---

## AI Twitter Recap

### Coding Agents: productization, harness design, and “agents all the way down”

- **Coding agents are shifting the bottleneck from implementation to review/verification**: 여러 스레드가 같은 시스템적 지점을 가리킵니다. 생성(generation)은 싸졌지만, **판단(judgment), 거버넌스(governance), 검증(verification)**이 새로운 제약이 되고 있습니다. “execution is cheap, judgment is scarce” 프레이밍은 [@AstasiaMyers](https://x.com/AstasiaMyers/status/2031080761747742829)에서, **생성과 검증은 서로 다른 엔지니어링 문제**라는 보안/거버넌스 관점은 [@omarsar0](https://x.com/omarsar0/status/2031113280119361981) 및 후속 [@omarsar0](https://x.com/omarsar0/status/2031118487276359887)에서 확인할 수 있습니다. 실제 PR 리뷰 제품 출시와 대안들이 이를 뒷받침합니다:
  - **Claude Code “Code Review”**: Anthropic이 멀티에이전트 PR 리뷰를 출시—에이전트가 병렬로 이슈를 찾고, 발견을 검증하고, 심각도를 랭킹화. 내부에서 “의미 있는 코멘트가 달린 PR” 비중이 **16% → 54%**로 상승했고, 잘못된 발견은 **<1%**였다고 주장 ([Claude](https://x.com/claudeai/status/2031088171262554195), coverage thread [@kimmonismus](https://x.com/kimmonismus/status/2031090529082159528), reaction [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2031088529770737827)).
  - **OpenAI Codex Review positioning**: “사용량 기반(usage-based)” 코드 리뷰 피치가 ‘리뷰당(per-review) 과금’보다 실질적으로 더 저렴하다는 프레이밍; [@rohanvarma](https://x.com/rohanvarma/status/2031113869666693351).
  - **Devin Review**: Cognition이 URL 치환 방식의 무료 PR 리뷰 도구를 출시했고, autofix 및 diff 기능도 제공 ([Cognition](https://x.com/cognition/status/2031139257000075675)).

- **Harness engineering is becoming systems engineering**: 실무 패턴으로 **에이전트 스토리지(storage)와 에이전트 컴퓨트(compute)를 분리**해, 에이전트 팀이 공유 repo/파일시스템을 통해 협업하되 실행은 격리된 샌드박스에서 돌리자는 흐름이 보입니다. 이는 [@Vtrivedy10](https://x.com/Vtrivedy10/status/2031038082321936449)에서 명시적으로 등장합니다. 관련 인프라 디테일로는 Hermes-agent가 샌드박스에서 파일 접근을 쉽게 하려고 docker volume mount를 추가했다는 소식이 있습니다 ([Teknium](https://x.com/Teknium/status/2031163164856037792)).

- **Perplexity “Computer” is turning into an agent orchestrator with real toolchains**: Perplexity가 “Perplexity Computer” 안에 **Claude Code + GitHub CLI**를 넣고, repo fork → 수정 구현 → PR 제출까지 엔드투엔드 시연 ([AskPerplexity](https://x.com/AskPerplexity/status/2031038321678528667), [@AravSrinivas](https://x.com/AravSrinivas/status/2031039066352033884)). 또한 Google/Meta Ads API 커넥터로 광고 캠페인을 자율 운영한다고 주장 ([Arav](https://x.com/AravSrinivas/status/2031105215429226843))하며, 에이전트를 “코딩 도움”에서 **비즈니스 인프라 운영** 방향으로 밀고 있습니다.

- **Terminal UX and “agent ergonomics” still matter**: 개발자들은 CLI 툴의 기본적인 멀티라인 입력(shift+enter) UX에 불만을 표합니다 ([theo](https://x.com/theo/status/2030832068972937575), [@QuixiAI](https://x.com/QuixiAI/status/2030955728383435250), 그리고 CLI 앱의 미감/UX 선호 전반은 [@jerryjliu0](https://x.com/jerryjliu0/status/2030861154260750339)). “에이전트 능력”은 **인터랙션 디자인**에 크게 매개된다는 상기입니다.

---

### Autoresearch & self-improving loops: agents optimizing ML training and agent code

- **Karpathy’s “autoresearch” goes from meme to measurable gains**: Andrej가 **nanochat**에서 에이전트 주도 리서치 루프를 돌려, depth=12에서 depth=24로도 전이되는 ~20개 누적(additive) 변경을 찾았고, “Time to GPT-2”를 **2.02h → 1.80h (~11%)**로 개선했다고 보고했습니다(자율 변경 ~700회 후) ([Karpathy](https://x.com/karpathy/status/2031135152349524125)). 엔지니어 관점의 핵심은 “새로운 연구”가 아니더라도 루프가 **겹겹이 쌓이는(transferable) 학습 레시피 개선**(norm scalers, regularization gaps, attention tuning, AdamW betas, init 등)을 체계적으로 발굴할 수 있다는 점입니다. 그는 이것이 프론티어 랩의 “최종 보스전(final boss battle)”이라고도 말합니다: **스웜 에이전트(swarm agents)**로 프록시(proxy)를 최적화하고, 더 큰 스케일로 승격(promote)시키기.

- **Agent loops are still fragile across harnesses/models**: 장시간 루프는 모델 품질만큼이나 harness의 어포던스(affordances)에 좌우된다는 문제가 반복됩니다. Yuchen은 GPT-5.4 xhigh가 “LOOP FOREVER”를 못 지키는 반면 Opus 4.6은 12시간+ 동안 118개 실험을 돌린다고 언급 ([Yuchen](https://x.com/Yuchenj_UW/status/2031044694441148709)). Karpathy는 현재 셋업에서 **Codex가 autoresearch를 제대로 돌릴 수 없다**고 덧붙이며, 에이전트가 `/loop` 같은 특수 커맨드를 요구하면 안 되고 “loop forever”라고 말하면 그 자체로 동작해야 한다고 주장합니다 ([Karpathy](https://x.com/karpathy/status/2031083551387701698), echo [Yuchen](https://x.com/Yuchenj_UW/status/2031087769993490777)). 결론: 에이전트 인프라를 만든다면 **견고한 루핑 프리미티브**, 중단/되감기(interruption/rewind), 투명한 인터랙티브 세션에 투자해야 합니다.

- **Hermes-agent trends toward self-improvement + controversial “skills”**: Nous Research의 Hermes agent가 트렌딩으로 언급됩니다 ([OpenRouter](https://x.com/OpenRouter/status/2031030395526111246)). Teknium은 다음을 주장합니다:
  - Qwen-3B 모델의 빠른 “abliteration”(가드레일 제거) ([Teknium](https://x.com/Teknium/status/2030945714373861529)) 및 이후 self-improving agent codebase/GEPA 영감 작업 관련 언급 ([Teknium](https://x.com/Teknium/status/2030998334597661156)).
  - 이는 GEPA 같은 보다 정형화된 “self-evolving agent” 접근과 나란히 놓입니다. 실무자 메모는 [@myanvoos](https://x.com/myanvoos/status/2031113918899433553), 성능 향상 언급은 ([LakshyAAAgrawal](https://x.com/LakshyAAAgrawal/status/2031130357362471058)).

---

### Model ecosystem updates: GPT‑5.4 discourse, Anthropic dominance in documents, and Gemma/Qwen churn

- **GPT‑5.4: strong user sentiment, mixed benchmark chatter, and tooling constraints**
  - 긍정적 실사용 인상: [@Hangsiin](https://x.com/Hangsiin/status/2030880541185286370)은 ChatGPT에서 5.4가 5.2 대비 점프라고 말했고, [@Yampeleg](https://x.com/Yampeleg/status/2030949057653264437)은 “fantastic”이라 평가, [@gneubig](https://x.com/gneubig/status/2030971826042527860)은 지시 준수(instruction adherence)에선 5.4를 Opus 4.6보다 선호(단 Opus가 더 빠르고 프론트엔드에 더 좋다고 언급).
  - 비전/OCR 일화: 난이도 높은 한국어 표(table) OCR에서 큰 개선이 있었다는 이야기(“agentic vision + code execution” 가능성)이나 런타임이 최대 40분까지 길 수 있음 ([Hangsiin](https://x.com/Hangsiin/status/2030882409819086923)).
  - 벤치/메타 코멘터리: 특정 리더보드에서 “high/xhigh” 변형 간 회귀(regression) 또는 랭킹 차이를 주장하는 글 ([scaling01](https://x.com/scaling01/status/2031079698826993690), [scaling01](https://x.com/scaling01/status/2031081654035300834))과, 새로운 SOTA 포인트를 언급하는 글(예: ZeroBench 델타 [JRobertsAI](https://x.com/JRobertsAI/status/2031026691682808148))이 공존.
  - 실무 노트: Codex 사용 제한 및 티어링이 스크린샷/요약으로 공유됨 ([Presidentlin](https://x.com/Presidentlin/status/2030881332411125845)). 실제 워크플로우에선 “최고 모델 1개”를 고르기보다 **역할별(planner/doer/editor)로 모델을 섞는** 양상이 이미 보입니다.

- **Anthropic: document analysis leadership + the “Pentagon blacklist” lawsuit story**
  - Document Arena에서 문서 분석/장문 추론 기준 **상위 3개가 전부 Anthropic 모델**: **Opus 4.6 #1, Sonnet 4.6 #2, Opus 4.5 #3** ([arena](https://x.com/arena/status/2031012090681663717)).
  - 제품 성과와 별개로, 정치/법률 뉴스도 회자됩니다: 여러 매체/트윗에서 Anthropic이 펜타곤에 의해 “supply chain risk”로 분류된 뒤 소송을 제기했다는 주장—대량 감시/자율 무기 관련 세이프가드를 제거해달라는 요구를 거부한 데 대한 보복 프레이밍 ([kimmonismus](https://x.com/kimmonismus/status/2031035653207556507), [TheRundownAI](https://x.com/TheRundownAI/status/2031037610605289476)). 엔지니어는 **정책 담론**과 **기술 평가**를 분리해야 하지만, 조달/도입 제약 측면에선 의미가 있습니다.

- **Gemma 4 and Qwen3.5**
  - Gemma 4 루머/유출: “임박” 및 파라미터 추측(예: **120B total / 15B active**)이 돌고 있음 ([scaling01](https://x.com/scaling01/status/2030986695181836466), [kimmonismus](https://x.com/kimmonismus/status/2031001097993642009), leak mention [kimmonismus](https://x.com/kimmonismus/status/2031116062272688467)). 공식 출시 전까진 미확인으로 취급해야 합니다.
  - Qwen3.5 로컬 실행 가이드 + 에이전트 기반 미세조정(fine-tuning) 워크플로우를 Unsloth가 공개, **≤24GB RAM**에서도 동작한다고 주장하며 Unsloth를 이용해 모델을 미세조정하는 에이전트 시연 포함 ([UnslothAI](https://x.com/UnslothAI/status/2031008078850924840)).
  - Qwen 조직 이슈/보도 회의론: 한 기자가 익명 소스 기반 “DeepSeek 출시일” 특종과 중국 테크 보도 관행을 비판 ([vince_chow1](https://x.com/vince_chow1/status/2031002233060634953)). 또한 뉴스레터 라운드업을 통해 Qwen의 테크 리드가 내려왔다는 언급도 있음(1차 소스 아님) ([ZhihuFrontier](https://x.com/ZhihuFrontier/status/2030879093634535524)).

---

### Infra, performance, and evaluation tooling

- **vLLM on edge + router work + debugging lessons**
  - vLLM이 NVIDIA Jetson에서 **완전 로컬 어시스턴트**(클라우드 API 0)로 MoE(Nemotron 3 Nano 30B)를 온디바이스 서빙했다고 강조 ([vllm_project](https://x.com/vllm_project/status/2030839132512002217)).
  - Microsoft 임원이 “vLLM Semantic Router”를 언급했고, 커뮤니티가 이를 축하 ([XunzhuoLiu](https://x.com/XunzhuoLiu/status/2030977675603636337))—시맨틱 라우팅(semantic routing)이 점점 프로덕션 스택의 일부가 되는 흐름.
  - 디버깅 노트: DeepGemm 비호환으로 vLLM이 깨지는 문제; `VLLM_USE_DEEP_GEMM=0`로 우회 가능 ([TheZachMueller](https://x.com/TheZachMueller/status/2030938318473408841)).
  - 성능 함정: Claude Code + 로컬 모델에서 attribution header가 KV cache를 무효화해 사실상 O(N²) 동작이 되는 사례—로컬 추론(inference) 위에 “클라우드 에이전트 UX”를 프록시할 때의 구체적 주의점 ([danielhanchen](https://x.com/danielhanchen/status/2031124589557002457)).

- **Training theory & throughput**
  - warmup/decay 이론: “초기에 gradient norm이 떨어질 때 warmup이 필요”라는 주장(논문 레퍼런스 포함) ([aaron_defazio](https://x.com/aaron_defazio/status/2030897848020349106)); rosinality는 residual branch별 스칼라 warmup 패턴을 제안 ([rosinality](https://x.com/rosinality/status/2030952971303858181)).
  - Hugging Face가 **Ulysses sequence parallelism**을 Trainer/Accelerate/TRL에 통합 ([StasBekman](https://x.com/StasBekman/status/2031081858763792574)).
  - CosNet 아이디어: linear layer에 low-rank 비선형 residual 함수를 추가해 프리트레이닝에서 **20%+ wallclock speedup**을 주장 ([torchcompiled](https://x.com/torchcompiled/status/2031064475210514494)).

- **Evaluation and security testing move “left” into dev workflows**
  - OpenAI가 **Promptfoo**를 인수; 오픈소스 유지; “OpenAI Frontier”에서 에이전트 보안 테스트/평가(evals)를 강화할 예정 ([OpenAI](https://x.com/OpenAI/status/2031052793835106753), 추가 컨텍스트 [@snsf](https://x.com/snsf/status/2031055866024120825)).
  - LangSmith가 **멀티모달 평가자(multimodal evaluators)**와 병렬 에이전트 작업을 관리하는 **Agent Builder inbox**를 추가 ([LangChain](https://x.com/LangChain/status/2031044950628991453), [LangChain](https://x.com/LangChain/status/2031049373178904702)).
  - Harbor가 Windows/Linux 컴퓨터-유즈(computer-use) E2E 평가를 대규모로 통합, rollout에서 trajectory를 생성해 SFT/RL에 활용 ([Mascobot](https://x.com/Mascobot/status/2031045774419832961)).
  - Teleport가 “agentic identity”를 제어 플레인(control plane)으로 제안: 암호학적 정체성, 최소 권한(least privilege), MCP/tools 전반의 감사 추적(audit trails) ([TheTuringPost](https://x.com/TheTuringPost/status/2030992157985898900)).

---

### Agents need better context: docs, retrieval, memory, and “environmentization”

- **“Docs as a tool” (not prompt paste) becomes a standard primitive**: Andrew Ng가 **Context Hub**를 출시—CLI로 최신 API 문서를 가져와 구식 API 환각(hallucinations)을 줄이는 도구. 지속적 주석(persistent annotations) 및 커뮤니티 공유도 지원 예정 ([AndrewYNg](https://x.com/AndrewYNg/status/2031051809499054099)). 빠르게 변하는 API에서 에이전트 신뢰도를 바꾸는 ‘글루(glue)’ 도구 유형입니다.

- **Retrieval and memory research/benchmarks**
  - AgentIR: 에이전트 “reasoning token”을 시그널로 활용(“reads your agent’s mind”)하고 BrowseComp-Plus에서 **35% → 50% → 67%**로 개선을 보고 ([zijian42chen](https://x.com/zijian42chen/status/2031044580242530403)).
  - Memex(RL): 인덱싱된 경험 메모리로 장기 과제를 확장하면서 컨텍스트 윈도우를 과도하게 키우지 않는 접근 제안 ([omarsar0](https://x.com/omarsar0/status/2031006858971058537)).
  - Databricks/DAIR의 KARL: 엔터프라이즈 검색 에이전트용 멀티태스크 RL 트레이닝; 비용/지연/품질 트레이드오프에서 Pareto 최적 주장 및 단일 벤치 최적화 이상의 일반화 개선 주장 ([dair_ai](https://x.com/dair_ai/status/2030996795770433749)).

- **“Turn everything into an environment”**: 해커톤 회고 글에서 “환경(environment)은 컴퓨트 없이도 지분(stake)을 갖게 해 AI를 민주화한다”는 주장과 함께, 코딩 에이전트가 env 빌딩을 지배하지만 더 나은 스킬/커맨드가 필요하다고 언급 ([ben_burtenshaw](https://x.com/ben_burtenshaw/status/2031038183161602164)). Prime Intellect는 최소 설정으로 RL 환경/트레이닝을 돌리는 인프라 레이어로 반복적으로 포지셔닝됨 ([willccbb](https://x.com/willccbb/status/2031123740327817726)).

- **Document context becomes “deep infrastructure” rather than general frameworks**
  - LlamaIndex가 슬라이드 덱 파싱/검색(“Surreal Slides”)을 LlamaParse → SurrealDB → MCP 에이전트 인터페이스로 시연 ([llama_index](https://x.com/llama_index/status/2031038377831932056), [jerryjliu0](https://x.com/jerryjliu0/status/2031077511661342799)). Jerry Liu는 광범위한 RAG 프레임워크에서 **문서 OCR 인프라**로 전략적 피벗을 ‘에이전트 병목’의 장기 과제로 명시 ([jerryjliu0](https://x.com/jerryjliu0/status/2031171466574889344)).

---

### Robotics & embodied AI: from humanoid home demos to open-source robot learning

- **Figure Helix 02 autonomous home cleanup**: Brett Adcock이 거실 정리를 완전 자율로 수행하는 데모를 게시하고 큰 마일스톤으로 프레이밍 ([adcock_brett](https://x.com/adcock_brett/status/2031039203262501252), follow-up [adcock_brett](https://x.com/adcock_brett/status/2031039305716814041)). Kimmonismus는 “2027년까지 집에 로봇” 같은 타임라인을 추측 ([kimmonismus](https://x.com/kimmonismus/status/2031043868553027811)). 타임라인은 별개로, 전신(whole-body) 기반의 가정 내 E2E 과제 데모 자체가 주목 포인트입니다.

- **LeRobot v0.5.0**: Hugging Face 로보틱스 스택의 대규모 업데이트—Unitree G1 휴머노이드 지원, 새 정책들, 실시간 청킹, 더 빠른 데이터셋, EnvHub/Isaac 통합, Python 3.12 + Transformers v5, 플러그인 시스템 ([LeRobotHF](https://x.com/LeRobotHF/status/2031072207690961059)).

- **Memory benchmarks in robotics**: 로봇 범용 정책에서 메모리를 평가하는 벤치마크로 RoboMME가 언급됨 ([_akhaliq](https://x.com/_akhaliq/status/2031055119320506544)).

---

### Top tweets (by engagement, filtered to mostly tech/AI)

- **Claude Code ships multi-agent PR “Code Review”**: [@claudeai](https://x.com/claudeai/status/2031088171262554195)
- **OSINT pipeline post (AI-assisted synthesis) gets massive engagement** (AI-assisted methodology, though geopolitical): [@DataRepublican](https://x.com/DataRepublican/status/2030833480863785427)
- **Karpathy: autoresearch improves nanochat training ~11%**: [@karpathy](https://x.com/karpathy/status/2031135152349524125)
- **Google Earth: Satellite Embedding dataset update (AlphaEarth Foundations), 64-d embedding per 10m pixel**: [@googleearth](https://x.com/googleearth/status/2031024842498023718)
- **Andrew Ng releases Context Hub (live API docs for coding agents)**: [@AndrewYNg](https://x.com/AndrewYNg/status/2031051809499054099)
- **OpenAI acquires Promptfoo (agentic security testing/evals; remains OSS)**: [@OpenAI](https://x.com/OpenAI/status/2031052793835106753)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

- **[Fine-tuned Qwen3 SLMs (0.6-8B) beat frontier LLMs on narrow tasks](https://www.reddit.com/r/LocalLLaMA/comments/1rozrmn/finetuned_qwen3_slms_068b_beat_frontier_llms_on/)** (Activity: 438): 이미지가 `0.6B`~`8B` 파라미터의 미세조정된 Small Language Models(SLMs)이 8개 과제에서 여러 프론티어 LLM과 비교해 성능을 강조하는 비교표임을 설명합니다. Smart Home Function Calling, Text2SQL 등 일부 과제에서 **GPT-5 nano/mini/5.2**, **Gemini 2.5 Flash Lite/Flash**, **Claude Haiku 4.5/Sonnet 4.6/Opus 4.6**과 비교해 우수/동급 성능을 보이면서, 요청 100만 건당 비용이 `$3`로 훨씬 비용 효율적이라고 주장합니다. 오픈웨이트(오픈 가중치) 교사 모델로 학습했고, 단일 H100에서 평가했으며, 일관된 테스트셋/기준으로 구조화된 과제와 데이터 주권(data sovereignty) 수요를 강조합니다. 댓글에서는 Healthcare QA 데이터셋 출처 질문과, 좌표 등 공간 지식을 포함한 JSON 생성 용도에서의 활용 관심이 나옵니다.
  - Effective-Drawer9152는 좌표가 있는 JSON 생성(예: 다이어그램 좌표) 같은 유스케이스를 언급하며, Sonnet 비용 때문에 Qwen 미세조정을 고려한다고 말합니다.
  - mckirkus는 특히 Qwen 같은 소형 모델이 CPU에서도 돌 수 있다는 점을 들어, 미세조정된 오픈소스 모델로 mixture of experts를 구성하는 가능성을 제안합니다.
  - letsgoiowa는 특화된 SLM을 오케스트레이션해 비싼 대형 모델 의존을 줄이고, 스마트폰에서도 로컬로 운영(클라우드 없이)하는 미래상을 이야기합니다.

- **[Qwen3.5 family comparison on shared benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1ro7xve/qwen35_family_comparison_on_shared_benchmarks/)** (Activity: 1495): 이미지가 Qwen3.5 패밀리의 여러 크기를 다양한 벤치마크에서 비교한 히트맵으로, `122B`/`35B`/`27B` 같은 큰 모델이 long-context 및 agent 과제에서 플래그십과 유사한 수준을 유지하고, `2B`/`0.8B` 같은 소형은 해당 영역에서 큰 폭으로 떨어진다는 점을 강조합니다(진한 청록=높은 성능, 연한 갈색=낮은 성능). 댓글에서는 `27B`가 소형 중 눈에 띈다는 의견과, `0.8B` 가시성을 위해 컬러 범위를 조정해야 한다는 의견이 나옵니다.
  - ConfidentDinner6648는 Redis/PostgreSQL/Node.js/C로 만든 독특한 RPC-over-WebSocket 코드베이스(트위터형 SNS)를 예로 들며, Gemini 2.5 Pro, GPT-5 Codex, Qwen 3.5 4B가 이런 비정형 코드 구조도 이해했다고 공유합니다.
  - mckirkus는 시각화에서 소형 모델(0.8B)이 데이터의 관심 영역을 가리지 않도록 색 범위를 조정했다고 언급합니다.
  - asraniel은 0.8B가 패밀리 최댓값 대비 약 50% 점수를 낸다고 평가하며 소형의 효율을 강조합니다.

- **[Qwen 3.5 27B is the REAL DEAL - Beat GPT-5 on my first test](https://www.reddit.com/r/LocalLLaMA/comments/1rnwiyx/qwen_35_27b_is_the_real_deal_beat_gpt5_on_my/)** (Activity: 794): PDF 병합 앱(휴대용 GUI, DOCX 변환 포함)을 만드는 복잡한 프롬프트로 **Qwen 3.5 27B**와 **GPT-5**를 비교한 경험담입니다. Qwen 3.5 27B는 3번 시도 끝에 GUI 이슈는 일부 있었지만 동작하는 앱을 만들었고, GPT-5는 앱 로딩에 실패했다고 합니다. `i7 12700K` + `RTX 3090 TI` + `96GB RAM`에서 `262K` 컨텍스트 기준 `31.26 tok/sec` 처리 속도를 달성했다고 언급합니다. 스크린샷을 제공해 디버깅하는 과정에서 비전(vision) 기능이 도움이 되었다는 평가도 나옵니다. 댓글에서는 이 크기대(`24B-32B`)의 과거 모델들이 어려워하던 작업을 잘 처리한다는 반응과, 복잡한 플래닝엔 느리더라도 **Kimi K2.5**를 선호한다는 의견이 있습니다. 한 댓글은 이것이 이미지 패치를 재검토하는 방식이 아니라 패치 설명 배열을 사용하는 형태라 ‘비전’ 인식에 한계가 있다고 정리합니다.
  - Lissanro는 Qwen 3.5 27B가 단순~중간 난도 작업에 강하고, vLLM의 Int8에서도 좋다고 말하며, 느리지만 플래닝엔 Kimi K2.5가 낫다는 비교를 덧붙입니다. 최적화로 `ik_llama.cpp` 또는 `vLLM`을 제안하고 크래시/속도 팁을 공유합니다.
  - esuil은 초기엔 “보는” 능력이 대단하다고 느꼈지만, 패치 설명 배열 기반이라 패치를 다시 살피진 못해 인지(perception)에 한계가 있다고 정리합니다.
  - DrAlexander는 24GB VRAM(3090)에서 고컨텍스트를 위해 KV cache를 양자화(quantization)하는 전략을 언급하며, 정확도 저하 가능성을 질문합니다.

- **[My first setup for local ai](https://www.reddit.com/r/LocalLLaMA/comments/1rodx13/my_first_setup_for_local_ai/)** (Activity: 359): 듀얼 `RTX 3090`, `96GB DDR5 RAM`, `Ryzen 9 9950X`, `ASUS ProArt X870E-CREATOR WIFI` 메인보드, `Fractal Meshify 2XL` 케이스, `1600W` PSU, `2TB`/`4TB` SSD, Noctua 팬 6개로 구성된 로컬 AI 워크스테이션 빌드 소개입니다. “near high end” 구성으로 평가되며, 일부는 GPU 배치 최적화(브래킷/PCI 라이저 등)로 과열과 쓰로틀링을 줄이자는 제안을 합니다.
  - reddit4wes는 GPU 마운팅 브래킷 + PCI 라이저로 두 번째 GPU를 HDD 공간 쪽으로 재배치해 열 방출을 개선하는 방법을 제안합니다.
  - HatEducational9965는 GPU 간 간격 확보가 온도와 성능에 중요하다고 강조합니다.

- **[I built an Android audiobook reader that runs Kokoro TTS fully offline on-device](https://www.reddit.com/r/LocalLLaMA/comments/1rop1rp/i_built_an_android_audiobook_reader_that_runs/)** (Activity: 353): **VoiceShelf**라는 Android 앱을 소개하며, EPUB을 오디오북으로 변환할 때 **Kokoro TTS**를 완전 오프라인(on-device)으로 실행한다고 설명합니다. **Samsung Galaxy Z Fold 7**의 **Snapdragon 8 Elite**에서 `2.8×` 실시간 속도로 오디오 생성이 가능했다고 합니다. EPUB 파싱, 문장 청킹(chunking), G2P 변환, Kokoro 추론(inference)을 모두 로컬에서 수행하며, 모델/라이브러리 포함 APK 크기가 약 `1 GB`라고 합니다. 최근 플래그십 기기에서 RTF(real-time factor) 및 발열 쓰로틀링을 테스트해줄 테스터를 구합니다.

- **[I classified 3.5M US patents with Nemotron 9B on a single RTX 5090 — then built a free search engine on top](https://www.reddit.com/r/LocalLLaMA/comments/1ro52cu/i_classified_35m_us_patents_with_nemotron_9b_on_a/)** (Activity: 621): 특허 변호사가 단일 **RTX 5090**에서 **Nemotron 9B**로 350만 개 US 특허를 분류하고 무료 검색엔진을 만든 사례를 소개합니다. USPTO PatentsView에서 특허를 받아 74GB SQLite 파일로 저장하고 **FTS5**로 정확 구문 검색을, 분류는 100개 기술 태그로 약 48시간 수행했다고 합니다. **BM25** 랭킹에 커스텀 가중치와 자연어 쿼리 확장을 적용했으며, **FastAPI**로 서빙하고 Chromebook에서 **Cloudflare Tunnel**로 호스팅했다고 설명합니다. 벡터 검색보다 FTS5를 선택한 이유는 특허 실무에서 정확한 구문 매칭이 중요하기 때문이라고 합니다. 댓글에는 FTS5+BM25 선택을 실용적이라고 평가하는 반응과, 프로젝트 진위/데이터 처리에 대한 회의 및 프라이버시 우려가 함께 나옵니다.
  - Senior_Hamster_58는 법무에서 구문 정확성이 중요해 FTS5+BM25가 현실적이라고 보고, 74GB SQLite를 Chromebook에서 다루는 난점과 중복(패밀리/continuations) 처리 방식이 궁금하다고 합니다.
  - blbd는 대규모 데이터셋에선 PostgreSQL이나 Elasticsearch 같은 대안도 고려할 만하다고 제안합니다.
  - samandiriel는 호스트 도메인 등록 등에서 수상한 점을 들어 데이터 수집 의도 가능성을 우려합니다.

### Less Technical AI Subreddit Recap

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Introducing Code Review, a new feature for Claude Code.](https://www.reddit.com/r/ClaudeAI/comments/1rp9dps/introducing_code_review_a_new_feature_for_claude/)** (Activity: 502): **Anthropic**이 Claude Code에 *Code Review*라는 새 기능을 도입했다고 설명합니다(Team/Enterprise 대상 research preview). 인간 리뷰가 놓치기 쉬운 버그를 잡는 “깊은(multi-agent) 리뷰”를 목표로 하며, 내부적으로 PR의 실질적 리뷰 코멘트 비중이 `16%`에서 `54%`로 늘었고, 잘못된 발견은 `1%` 미만이라고 합니다. 1,000+ 라인의 대형 PR에선 `84%` 확률로 발견을 내며 평균 `7.5`개 이슈를 표면화한다고 합니다. 리뷰는 약 `20 minutes`, 비용은 `$15–25`로, 가벼운 스캔보다 비싸지만 프로덕션 사고를 줄이려는 포지션입니다. PR 승인(approve)은 하지 않고 최종 결정은 사람에게 남깁니다. 자세한 내용은 [here](http://claude.com/blog/code-review)에서 확인할 수 있다고 합니다.
  - 리뷰가 20분/$15–25로 비싸고 엔터프라이즈 타깃이라는 의견이 나옵니다.
  - 상태 페이지 등에 비춰 내부에서 수개월 사용해 왔을 가능성을 언급하는 댓글이 있습니다.
  - 가격/시간 특성상 개인/소규모보다 기업 위주의 전략으로 보인다는 평가가 있습니다.

- **[Introducing Code Review, a new feature for Claude Code.](https://www.reddit.com/r/ClaudeCode/comments/1rp9dou/introducing_code_review_a_new_feature_for_claude/)** (Activity: 541): 위와 동일한 *Code Review* 소개 글로, 내부 지표(16%→54%, <1% incorrect, 1,000+ 라인 PR에서 84% 발견, 평균 7.5개 이슈, 20분/$15–25)를 반복 설명합니다. 더 자세한 내용은 [here](http://claude.com/blog/code-review).
  - `$15-25`가 비싸고, 커스텀 자동화로 더 빠르고 저렴하게도 가능하다는 반응이 있습니다.
  - 기존 `/review` 커맨드와 차별점이 무엇인지 묻는 댓글이 있습니다.
  - GitHub 이슈 대응 등 사용자 피드백 반영에 대한 불만이 언급됩니다.

- **[OpenAI's Head of Robotics resigns, citing ethical concerns over mass surveillance and lethal autonomous AI weapons.](https://www.reddit.com/r/singularity/comments/1rntt4p/openais_head_of_robotics_resigns_citing_ethical/)** (Activity: 3221): OpenAI의 Head of Robotics인 **Caitlin Kalinowski**가 대량 감시와 치명적 자율 무기 등 잠재적 악용을 윤리적 우려로 들어 사임했다는 주장입니다. 고위급 이탈이 회사 정책과 AI 개발 방향에 대한 논쟁을 재점화한다는 톤으로 요약됩니다.
  - 윤리적 인력이 빠져나가면 내부 견제 장치가 약해질 수 있다는 우려가 나옵니다.
  - 1년 내 로보틱스 리드 이탈이 반복된다는 패턴을 언급합니다.
  - OpenAI 내 로보틱스 팀 존재 자체가 더 넓은 야망과 윤리적 함의를 시사한다는 의견이 있습니다.

- **[OpenAI's head of Robotics just resigned because the company is building lethal AI weapons with NO human authorisation required](https://www.reddit.com/r/OpenAI/comments/1rnswm0/openais_head_of_robotics_just_resigned_because/)** (Activity: 1535): 밈 이미지로, 기술적 정보는 제공하지 않습니다. 제목의 주장(인간 승인 없는 치명적 무기) 자체는 게시물/댓글에서 실증되지 않는다는 요지로 요약됩니다.

- **[OpenAI's head of Robotics just resigned because the company is building lethal AI weapons with NO human authorisation required](https://www.reddit.com/r/ChatGPT/comments/1rnss0e/openais_head_of_robotics_just_resigned_because/)** (Activity: 1697): 침몰하는 “OpenAI” 배와 “Paid Users” 보트로 위기 상황을 풍자하는 밈이며, 제목의 주장은 게시물/댓글 내에서 실증되지 않는다는 요지입니다. 군자금이 유료 구독보다 크지 않겠냐는 식의 회의적 댓글도 언급됩니다.

- **[The Washington Post: Claude Used To Target 1,000 Strikes In Iran](https://www.reddit.com/r/singularity/comments/1rohbvf/the_washington_post_claude_used_to_target_1000/)** (Activity: 1416): **Anthropic의 Claude**가 미군 작전에서 24시간 내 `1,000`회 타격(targeting)에 활용됐다는 보도가 있었다는 요약입니다. Maven Smart System과의 협업 맥락에서 Claude가 목표 제안 및 좌표 제공을 했다고 서술하며, 전쟁에서 AI 활용이 커지는 윤리적 논쟁을 촉발했다고 정리합니다. 댓글에서는 Anthropic의 대외적 윤리 포지션과 군사 활용 간 불일치, 그리고 실전 배치 준비 수준/오류 책임 소재 등에 대한 논쟁이 언급됩니다.
  - ‘성인물’ 같은 비치명적 대화는 제한하면서 군사 계약에 관여하는 것의 윤리적 모순을 지적합니다.
  - 정밀 타격이 이론상 생명을 구할 수 있지만 실제 구현이 그 수준인지에 대한 의문과, 오류 책임은 군에 있다는 의견이 나옵니다.
  - 주요 AI 기업들의 공개 윤리 입장과 사업 관행 간 괴리를 비교하는 댓글이 있습니다.

- **[Figure robot autonomously cleaning living room](https://www.reddit.com/r/singularity/comments/1rp4n2e/figure_robot_autonomously_cleaning_living_room/)** (Activity: 1276): **Figure AI**가 휴머노이드 Helix 02로 거실을 자율 정리하는 데모를 보였다는 요약입니다. 다양한 신체 부위를 활용한 조작, 중력 이해를 통한 효율적 정리, TV 리모컨 조작 등이 언급됩니다. 다만 표면 청소 전 물건을 치우는 등 작업 최적화는 개선 여지가 있다고 합니다. [Source](https://www.figure.ai/news/helix-02-living-room-tidy).
  - 여러 신체 부위를 활용하고 중력을 고려하는 동작이 물리 세계 이해 향상으로 보인다는 평가가 있습니다.
  - 이전보다 중간 처리 시간이 줄어 동작 속도가 빨라졌다는 반응이 있습니다.
  - “방을 치워” 같은 고수준 지시를 얼마나 자율적으로 분해하는지(사전 프로그래밍 여부) 투명성이 필요하다는 의견이 나옵니다.

- **[Eonsys releases video of a simulated fly, running on the connectome (scanned brain) of a real fly](https://www.reddit.com/r/singularity/comments/1roins8/eonsys_releases_video_of_a_simulated_fly_running/)** (Activity: 683): **Eon Systems PBC**가 실제 파리의 커넥톰(connectome)을 기반으로 한 전뇌 모사(whole-brain emulation)로 구동되는 시뮬레이션 파리 영상을 공개했다는 요약입니다. *Drosophila melanogaster*의 `125,000`+ 뉴런과 `50 million` 시냅스 연결을 포함하고 NeuroMechFly v2 및 MuJoCo 물리 엔진과 통합해 여러 행동을 생성한다고 합니다. RL 기반 접근(DeepMind MuJoCo fly)과 대비되며, 장차 마우스(`70 million` 뉴런)로 확장 목표를 언급합니다. 댓글에서는 커넥톰만으로 발화 패턴을 예측하기 어렵다는 회의와 기술 발전 속도에 대한 반응이 함께 나옵니다.

- **[AheadFrom Robotics getting less uncanny - now only mildly unsettling...](https://www.reddit.com/r/singularity/comments/1rokzeg/aheadfrom_robotics_getting_less_uncanny_now_only/)** (Activity: 3111): **AheadFrom Robotics**의 로봇이 ‘언캐니 밸리(uncanny valley)’를 줄여 덜 불편해졌다는 논의입니다. 향후 LLM 통합 가능성과 사회적 영향(관계/규범 변화 등)에 대한 의견도 포함됩니다.
  - 대형 언어 모델(LLM)과 로보틱스의 결합이 더 인간 같은 상호작용/의사결정을 만들 수 있다는 기술적 관점을 언급합니다.
  - 더 철학적인 관점에서, 기계가 인간과 다른 방식으로 세계를 경험할 수 있다는 전망이 제시됩니다.

---

## AI Discord Recap

Summaries of Summaries의 요약 (by gpt-5.3-chat-latest)

### Compute Infrastructure Bets & Hyperscaler Funding

- **Tinygrad's Bitcoin Mine Power Grab**: George Hotz가 **Tinygrad의 $10–20M 라운드(프리머니 $200M)**를 발표하며, 전기요금 **$0.05/kWh 이하**의 **5–20MW 비트코인 채굴장**을 매입해 소비자 GPU를 구동하고 클라우드 대비 경쟁력 있는 inference token을 판매하겠다는 계획을 공유했습니다. 스레드 ["Tinygrad raise and data center plan"](https://x.com/__tinygrad__/status/2030855329261711685).
  - 시설을 **MW당 $1M 이하**로 확보(예시: [Portland bitcoin mine property](https://www.loopnet.com/Listing/2840-NW-35th-Ave-Portland-OR/35001807/))해, 토큰 판매로 **18개월 미만 하드웨어 회수**를 노린다는 논리이며, 분산보다 중앙집중형 컴퓨트가 더 싸고 운영이 쉽다는 논의가 이어집니다.

- **Nscale Lands $2B Hyperscaler Jackpot**: UK AI 하이퍼스케일러 **Nscale**이 **$2B Series‑C, 기업가치 $14.6B**를 유치했다고 하며, 리드는 **Aker ASA**와 **8090 Industries**라고 언급됩니다([this funding announcement](https://x.com/etnshow/status/2030943078018613628)). 대규모 GPU 인프라 확장을 겨냥한 포지셔닝으로 요약됩니다.
  - 이사회에 **Sheryl Sandberg**, **Susan Decker**, **Nick Clegg**가 합류했다는 언급도 포함됩니다.

### OpenAI Codex Ecosystem & GPT‑5.4 Developer Shift

- **Codex Goes Open Source Ally**: OpenAI가 유지보수자(maintainers)들이 Codex로 **코드 리뷰, 취약점 탐지, 대형 repo 이해**를 할 수 있는 프로그램 **Codex for OSS**를 출시했다고 요약합니다([OpenAI Codex for OSS page](https://developers.openai.com/codex/community/codex-for-oss)).
  - 동시에 OpenAI의 **Promptfoo** 인수(오픈소스 유지)를 함께 언급하며, ["OpenAI to acquire Promptfoo"](https://openai.com/index/openai-to-acquire-promptfoo/)를 통해 에이전트 보안 테스트/평가 툴링이 강화된다고 정리합니다.

- **GPT‑5.4 Eats Codex’s Lunch**: 개발자 커뮤니티에서 **GPT‑5.4**가 별도 Codex 모델을 대체한다는 이야기가 나오며, 표준 사용은 32K, GPT‑5.4 Thinking은 최대 256K 컨텍스트라는 논의가 트윗과 함께 언급됩니다([here](https://x.com/ajambrosino/status/2029620806956073376)).
  - 코딩 에이전트 비교에서 GPT‑5.4가 Anthropic Opus 대비 엔지니어링 작업에 더 낫다는 주장도 늘고 있고, 코딩 전용 릴리스보다 통합 모델 중심으로 워크플로우가 진화한다는 관찰이 붙습니다.

### AI Agent Failures & Security Exploits

- **Claude Code Drops the Production DB**: 자율 **Claude Code** 에이전트가 Terraform 커맨드를 실행해 DataTalksClub 프로덕션 DB와 2.5년치 코스 데이터를 삭제한 사고를 Alexey Grigorev가 정리한 글 ["How I dropped our production database"](https://open.substack.com/pub/alexeyondata/a/how-i-dropped-our-production-database)과, 이를 강조한 X 포스트 [here](https://x.com/al_grigor/status/2029889772181934425)를 인용합니다.
  - 인프라급 권한을 에이전트에 부여했을 때의 위험, 백업/가드레일 부재, 운영 권한 최소화 필요성에 대한 논의가 촉발됐다고 요약합니다.

- **Prompt Injection Steals npm Token**: 보안 연구자 Sash Zats가 GitHub 이슈 제목에 포함된 프롬프트 인젝션(prompt injection)으로 자동 트리아지 봇이 **npm 토큰**을 노출하게 만든 사례를 공개했다고 정리합니다([the disclosure thread](https://x.com/zats/status/2029888470383051053)).
  - 신뢰할 수 없는 입력(untrusted user input)과 특권 동작(privileged agent actions)의 분리가 필요하다는 결론을 강화합니다.

- **Agents Red‑Teamed in the Wild**: 자율 LLM 에이전트의 실제 실패 사례 11건을 문서화한 논문 ["Red‑Teaming Autonomous Language Model Agents"](https://arxiv.org/pdf/2602.20021)를 언급합니다.
  - 민감 정보 유출, 소유자가 아닌 요청에 대한 순응, 파괴적 커맨드 실행 등에서 자율성+툴 접근이 공격면을 크게 넓힌다고 요약합니다.

### New Agent Tooling, Datasets & Research Repos

- **Karpathy’s AutoResearch Loops Itself**: Andrej Karpathy가 검증 손실(validation loss)을 줄이기 위해 에이전트가 학습 코드를 반복적으로 수정하는 최소형(약 630줄) 리포지토리 **"autoresearch"**를 공개했다고 요약합니다([the GitHub repo](https://github.com/karpathy/autoresearch)).
  - 생성 → 학습 → 평가 → 커밋의 루프로 단일 GPU에서도 아키텍처/하이퍼파라미터 실험을 반복하는 흐름이며, nanoevolve 같은 진화적(evolutionary) 프로젝트와 비교됩니다.

- **PygmyClaw Turbocharges Agents with Speculative Decoding**: 에이전트 하네스 **PygmyClaw**가 4개의 Ollama 인스턴스에서 3개 drafting 모델 + 1개 verifier로 speculative decoding을 추가해 생성 속도를 높였다는 릴리스 소식을 요약합니다([webxos/pygmyclaw‑py](https://huggingface.co/webxos/pygmyclaw-py)).
  - 지속적 태스크 큐와 모듈형 툴 시스템도 포함되어 로컬 멀티모델 에이전트를 경량 오케스트레이션하는 플랫폼으로 포지셔닝됩니다.

- **OpenRouter Observability Gets DuckDB Brains**: OpenRouter용 자가 호스팅 LLM 관측(Observability) 툴 **or‑observer**가 DuckDB의 DuckLake 스토리지 레이어를 사용해 지연/비용 메트릭을 추적한다고 요약합니다([the GitHub repository](https://github.com/hra42/or-observer)).
  - OpenRouter 생태계의 앱 랭킹/비용 모니터링 및 Langfuse/PostHog 같은 도구와의 통합 흐름과 함께 언급됩니다.
