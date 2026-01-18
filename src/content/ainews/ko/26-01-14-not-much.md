---
title: "GPT-5.2-Codex, 1주일 자율 실행으로 브라우저 제작"
summary:
  - "GPT-5.2-Codex API 출시, Cursor 통합"
  - "에이전트가 1주일 자율로 브라우저 제작"
  - "OpenAI-씨브라스, 추론 속도 경쟁 가속"
  - "LangSmith Agent Builder 정식 출시"
  - "Gemini 개인화, Gmail·Photos 연동"
date: 2026-01-14
originalUrl: "https://news.smol.ai/issues/26-01-14-a-quiet-day/"
hasHeadline: false
headline: "에이전트가 1주일 자율로 브라우저 제작"
tags:
  - OpenAI
  - Codex
  - Cerebras
  - Gemini
isFeatured: false
---

## 헤드라인: 에이전트가 1주일 자율로 브라우저 제작

**a quiet day**

> 

1/13/2026-1/14/2026의 AI 뉴스입니다. 여러분을 위해 12개 서브레딧, ****[544 Twitters](https://twitter.com/i/lists/1585430245762441216) 및 **24**개 Discord(**204**개 채널, **5168**개 메시지)를 확인했습니다. (200wpm 기준) 절약된 예상 읽기 시간: **445분**. **Our new website**가 이제 전체 메타데이터 검색과, 과거 모든 이슈를 아름답게 vibe-coded로 보여주는 프레젠테이션과 함께 공개되었습니다. 전체 뉴스 브레이크다운은 [https://news.smol.ai/](https://news.smol.ai/)에서 확인하고, [@smol_ai](https://x.com/Smol_AI)로 피드백을 주세요!

GPT 5.2 Codex API 출시를 둘러싼 화제와, Cursor가 이를 활용해 1주일간 자율 실행하며 어느 정도 작동하는 브라우저를 만드는 데 성공했다는 이야기가 있었습니다!

특히 눈에 띄는 보고에 따르면, 한 팀이 “Cursor에서 GPT-5.2로 브라우저를 만들었고” **중단 없이 1주일** 동안 실행했으며, 수천 개 파일에 걸쳐 **300만+ 줄의 Rust**(HTML 파싱 → CSS 캐스케이드/레이아웃 → 페인팅 → 커스텀 JS VM)를 생성했고, 단순한 웹사이트에서는 “어느 정도 작동한다”고 합니다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)). 이는 “연속적인 에이전트 시간(continuous agent time)”과 자율 코드 생성의 실질적 프런티어를 보여주는 레퍼런스로 회자되었습니다 ([gdb](https://twitter.com/gdb/status/2011570314216718510); [kevinweil](https://twitter.com/kevinweil/status/2011587644468445445)). 또한 엔지니어들은 출력 품질과 안전성을 높이기 위해 **에이전트 시스템에 1급(first-class) ‘리뷰(review) 루프’가 필요**하다는 신흥 모범 사례를 강조했습니다 ([scaling01](https://twitter.com/scaling01/status/2011580895573262717)).

---

## AI Twitter Recap

**OpenAI + GitHub + Cursor: GPT-5.2-Codex goes “long-horizon” (and shows up everywhere)**

- **GPT-5.2-Codex in the API (and IDEs)**: OpenAI는 **Responses API**에 **GPT-5.2-Codex**를 출시하며, 기능 개발, 리팩터(refactor), 버그 탐지 같은 **장시간(long-running) 작업**을 위한 자사 최강 코딩 모델로 포지셔닝했습니다. 또한 코드베이스 취약점 이해 측면에서 지금까지 “가장 사이버 역량(cyber-capable)이 뛰어나다”고 명시했습니다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219)). Cursor는 즉시 통합했고, 이를 “장시간 작업을 위한 프런티어 모델(frontier model)”로 소개했습니다 ([cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)). 긴 워크플로에서의 성실함(diligence)을 강조하는 빌더들의 추가 지지도 있었습니다 ([sherwinwu](https://twitter.com/sherwinwu/status/2011503049890808040)). GitHub도 이를 **@code**에 반영했으며 ([code](https://twitter.com/code/status/2011503658815668623)), 엔터프라이즈 도입 마찰을 줄이기 위해 프리뷰/GA 라벨링을 바꾸고 있다고 언급했습니다 ([pierceboggan](https://twitter.com/pierceboggan/status/2011519932392226898)).

- **A concrete “agents ran for a week” datapoint**: 한 팀이 “Cursor에서 GPT-5.2로 브라우저를 만들었고” **중단 없이 1주일** 동안 실행했으며, 수천 개 파일에 걸쳐 **300만+ 줄의 Rust**를 생성했고(HTML 파싱 → CSS 캐스케이드/레이아웃 → 페인팅 → 커스텀 JS VM), 단순한 웹사이트에서는 “어느 정도 작동한다”고 했다는 보고가 화제가 됐습니다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)). 이는 “연속적인 에이전트 시간”과 자율 코드 생성의 실질적 프런티어를 보여주는 지표로 언급되었습니다 ([gdb](https://twitter.com/gdb/status/2011570314216718510); [kevinweil](https://twitter.com/kevinweil/status/2011587644468445445)). 또한 엔지니어들은 출력 품질과 안전성을 개선하기 위해 **에이전트 시스템에 1급 ‘리뷰’ 루프가 필요**하다는 모범 사례를 강조했습니다 ([scaling01](https://twitter.com/scaling01/status/2011580895573262717)).

- **Evaluation discourse: metrics vs “vibes” vs time horizon**: 여러 트윗에서 코딩 모델의 진전이 평가(evaluation) 설계와 개발자가 일상 업무에서 체감하는 바에 따라 과소/과대 계상되고 있다는 주장이 나왔습니다. METR의 장기 평가가 표준 벤치마크보다 더 일찍 “점프(jumps)”를 포착한다는 점이 인용되었습니다 ([swyx](https://twitter.com/swyx/status/2011344788486774942)). 다른 이들은 플롯만으로 결론을 뒷받침할 수 있는지, “time horizon” 지표가 실제 스캐폴딩(scaffolds)에서 무엇을 의미해야 하는지 논쟁했습니다 ([_lewtun](https://twitter.com/_lewtun/status/2011393239774048658); [RyanPGreenblatt](https://twitter.com/RyanPGreenblatt/status/2011648823458689304)).

---

**Inference infrastructure: Cerebras partnership + “speed is the product” economics**

- **OpenAI 🤝 Cerebras**: Cerebras가 OpenAI와의 파트너십을 발표했습니다 ([cerebras](https://twitter.com/cerebras/status/2011531740804964855)). 타임라인 전반의 프레이밍은, ChatGPT 스타일 경험에서 **지연(latency)과 초당 토큰(tokens/sec)**이 (Gemini 대비 경쟁을 포함해) 점점 더 사용자에게 체감되는 제품 차별점이 되고 있다는 것입니다. 일반 워크로드에서 CUDA만큼 범용적인 소프트웨어 스택은 아닐 수 있어도 말입니다 ([Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2011537073292132565)).

- **Provider benchmarking gets more granular**: Artificial Analysis가 **GLM-4.7**에 대한 프로바이더 비교를 게시하며 속도/지연/비용 트레이드오프를 강조했습니다. 예시 수치로, Cerebras가 GLM-4.7을 **~1,445 output tokens/s**, **TTFAT ~1.6s**로 서빙하는 반면, Fireworks/Baseten 같은 GPU 프로바이더는 처리량/지연에서 뒤처지지만 더 큰 컨텍스트 창을 지원합니다(Cerebras는 **131k**, 다른 곳은 Parasail을 제외하고 **200k**) 및 서로 다른 캐싱 할인도 언급됐습니다 ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2011581689567592641)).

- **Operational scaling content**: Modal이 셀프 호스팅 추론(self-hosted inference)이 이제 API 경제성을 맞추거나 능가할 수 있다는 가이던스를 기법+코드 샘플과 함께 공개했습니다 ([charles_irl](https://twitter.com/charles_irl/status/2011484220032762114)). SemiAnalysis는 Modal의 운영 글에서 **2만 GPU** 플릿을 건강하게 유지하는 방법을 다룬 내용을 하이라이트했습니다 ([SemiAnalysis_](https://twitter.com/SemiAnalysis_/status/2011498598043660777)). vLLM과 Modal 쪽 콘텐츠는 H100을 포화시키기 위한 **배치 추론(batch inference)**(FlashInfer 백엔드, 비동기 스케줄링, 배치 사이징)에 초점을 맞췄습니다 ([vllm_project](https://twitter.com/vllm_project/status/2011585247297880501)).

---

**Agent engineering becomes productized: skills, dynamic tool loading, and architecture selection**

- **Skills as a portability layer**: Phil Schmid가 `antigravity`용 **Agent Skills**를 출시했으며, 표준화된 폴더(`.agent/skills/`, `~/.gemini/antigravity/skills/`)와 Gemini CLI / Claude Code / OpenCode 스타일 생태계 전반의 호환성을 제시했습니다 ([_philschmid](https://twitter.com/_philschmid/status/2011345054343053370)). Hugging Face 실무자들은 “/plugin 인터페이스”가 버저닝 마찰이 크다고 공감했고, 대부분 팀에게는 **작은 수직(vertical) 스킬 + CLI/MCP**가 견고한 경로라고 강조했습니다 ([ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2011460800427286783)).

- **LangSmith Agent Builder launch**: LangChain이 **LangSmith Agent Builder**를 출시하며 “에이전트를 파일시스템으로(agents as a filesystem)”, 내장 메모리(memory), 앰비언트 에이전트용 트리거, 그리고 **skills/MCP/subagents** 지원을 내세웠습니다 ([LangChain](https://twitter.com/LangChain/status/2011501888735494184); [hwchase17](https://twitter.com/hwchase17/status/2011503746312987128)). 실제 예시로는 “코드 없이 프롬프트만으로” 만든 앰비언트 Slack-to-Linear 티켓 에이전트가 소개됐습니다 ([docs_plz](https://twitter.com/docs_plz/status/2011536177556570203)). CopilotKit은 LangChain 사전 구축 에이전트를 UI 지향 앱으로 바꾸는 미들웨어(“Deep Agents” 포함)를 추가했습니다 ([CopilotKit](https://twitter.com/CopilotKit/status/2011453920321929237)).

- **When to go multi-agent (usually: don’t)**: LangChain 포스트는 **Subagents**, **Skills**, **Handoffs**, **Router** 네 가지 패턴을 정리하면서, 제약(컨텍스트 윈도, 분산 소유권, 분해 필요성)에 부딪히기 전까지는 **단일 에이전트(single agent)**로 시작하라고 명시적으로 권고합니다 ([LangChain](https://twitter.com/LangChain/status/2011527733176856671); [sydneyrunkle](https://twitter.com/sydneyrunkle/status/2011514042075222029)). 이 주제는 OSS 계정의 가이던스에서도 반복됐습니다 ([LangChain_OSS](https://twitter.com/LangChain_OSS/status/2011515750625001609)).

---

**Model + research notes engineers actually argued about: long context, memory modules, pruning/distillation, multimodal RAG, and eval fragility**

- **DroPE / No positional embeddings for long context**: 한 스레드는 간단한 레시피를 요약합니다. 사전학습 LLM에서 **RoPE를 제거(drop RoPE)**하고, **포지셔널 임베딩 없이** 미세조정(fine-tuning)한다는 것으로, 표준 데이터셋에서 비슷한 성능과 더 나은 장문 컨텍스트(long-context) 동작을 보고했습니다. **SmolLM-1.7B**와 **Llama2-7B**에서 테스트했다고 합니다 ([gabriberton](https://twitter.com/gabriberton/status/2011326182986564090); [gabriberton](https://twitter.com/gabriberton/status/2011326193082253413)).

- **DeepSeek “Engram” memory module discourse**: 여러 트윗이 DeepSeek + PKU의 작업을 논의하며, **MoE(희소 연산, sparse compute)** + **Engram(희소 저장, sparse storage)**로 “생각(thinking)과 기억(remembering)을 분리”하자고 주장했습니다. n-gram을 해시 기반 O(1)로 조회해 벡터로 가져오고(transformer 스트림에 융합), 프리페치/지연 숨기기(latency hiding), RAM 상주 메모리 테이블 같은 인프라 함의도 언급됩니다 ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2011357373772845097); [LiorOnAI](https://twitter.com/LiorOnAI/status/2011468534887469448); code link [LiorOnAI](https://twitter.com/LiorOnAI/status/2011526199420600378)).

- **Mistral “Ministral 3” (small model recipe)**: 새 기술 보고서에 대한 밀도 높은 요약은 **프루닝(pruning) + 증류(distillation)**(사전학습/사후학습에 교사 모델 사용; 포스트 트레이닝에서 온라인 DPO)을 강조했습니다. 또한 구체적인 프루닝 휴리스틱(출력/입력 노름 비율로 레이어 프루닝; PCA 회전으로 히든 차원 프루닝; 게이트 활성 점수로 FFN 프루닝)도 제시합니다 ([eliebakouch](https://twitter.com/eliebakouch/status/2011548952676499480); paper pointer [qtnx_](https://twitter.com/qtnx_/status/2011510403550024087)).

- **Multimodal RAG system design**: UniversalRAG는 **모달리티 인지 라우팅(modality-aware routing)**(모든 것을 하나의 임베딩 공간으로 강제하지 않기)과, **모달리티 + 그래뉼러리티(granularity)**(문단 vs 문서; 클립 vs 전체 비디오; 표/이미지) 전반에서의 검색(retrieval)을 제안합니다. 학습된 또는 학습 없이(training-free) 라우팅(프런티어 모델에 프롬프트로 모달리티/그래뉼러리티 선택)을 포함하며 10개 벤치마크에서 성능 향상을 보고했습니다 ([omarsar0](https://twitter.com/omarsar0/status/2011442693134754243)). 멀티모달 RAG 평가를 위한 ViDoRe V3 벤치마크 논문도 공개됐습니다 ([antonio_loison](https://twitter.com/antonio_loison/status/2011398238910517249)).

- **Benchmark fragility (VLMs)**: VPBench는 작은 프레젠테이션 변화(예: **red vs blue markers**)만으로도 VLM 리더보드 순위가 뒤바뀔 수 있다고 주장하며, 리더보드 변화를 견고한 신호로 취급하는 사람들에게 유용한 근거를 제공합니다 ([lisabdunlap](https://twitter.com/lisabdunlap/status/2011521499182875116)).

---

**Product + org moves: “open” as strategy, and talent reshuffles across labs**

- **Airbnb hires Meta Llama lead as CTO**: Ahmad Al-Dahle가 Airbnb의 CTO로 합류한다고 발표했습니다. 그는 Meta의 Llama 오픈소스 전략(**1.2B+ downloads**, **60K+ derivatives**)을 언급하며, Airbnb를 모델 역량 발전을 적용할 제품 프런티어로 프레이밍했습니다 ([Ahmad_Al_Dahle](https://twitter.com/Ahmad_Al_Dahle/status/2011440460821320056)). 여러 리더들이 이 이동을 지지했습니다 ([sama](https://twitter.com/sama/status/2011490615985414382); [ClementDelangue](https://twitter.com/ClementDelangue/status/2011455261329023329); [markchen90](https://twitter.com/markchen90/status/2011545090737782810)).

- **Thinking Machines Lab / OpenAI leadership churn**: Mira Murati가 Barret Zoph가 TML을 떠났고 **Soumith Chintala**가 CTO가 됐다고 발표했습니다 ([miramurati](https://twitter.com/miramurati/status/2011577319295692801)). 직후 OpenAI는 Barret Zoph, Luke Metz, Sam Schoenholz가 OpenAI로 복귀한다고 발표했습니다 ([fidjissimo](https://twitter.com/fidjissimo/status/2011592010881446116); [barret_zoph](https://twitter.com/barret_zoph/status/2011593621435531355)).

- **Open source and “mid-sized orgs”**: HF의 Clement Delangue는 스타트업과 중견 기술 기업이 오픈 사이언스/오픈소스 AI를 실질적으로 진전시킬 수 있다고 주장했고, **fal**과 **Lightricks**의 트렌딩 모델을 근거로 들었습니다. 또한 이를 Airbnb CTO 영입과 연결해 가능한 시그널로 해석했습니다 ([ClementDelangue](https://twitter.com/ClementDelangue/status/2011477703698895245)). LTX-2는 **1,000,000 HF downloads**를 기념하며, “오픈 배포(open distribution)”가 이제 성장 채널임을 재확인했습니다 ([ltx_model](https://twitter.com/ltx_model/status/2011432938819252566)).

---

**Top tweets (by engagement)**

- **Gemini “Personal Intelligence” rollout**: Google이 Gmail/Photos/Search/YouTube history 등 Google 앱을 연결하는 Gemini 개인화를 발표하며, 옵트인(opt-in)과 프라이버시 컨트롤을 강조했습니다. Google/Gemini 리더십 계정 전반에서 높은 참여가 있었습니다 ([Google](https://twitter.com/Google/status/2011473056921706852); [sundarpichai](https://twitter.com/sundarpichai/status/2011475851670667356); [joshwoodward](https://twitter.com/joshwoodward/status/2011471375521710130)).

- **GPT-5.2-Codex shipping + ecosystem uptake**: API 출시와 Cursor 통합은 엔지니어링 트윗 중에서도 높은 참여를 받았습니다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219); [cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)).

- **“3M lines browser” long-horizon agent anecdote**: 연속적인 에이전트 작업의 생생한 예시로 널리 퍼졌습니다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)).

- **Vercel’s agent evals/skills for React performance**: “에이전트 스킬(agent skill)” + 평가(evals) 스위트로서 `react-best-practices`가 높은 참여를 받았습니다 ([vercel](https://twitter.com/vercel/status/2011589806250426615)).

---

## AI Reddit Recap

## /r/LocalLlama + /r/localLLM Recap

### 1. Local LLM Hardware and Performance Comparisons

- 

**[M4/M5 Max 128gb vs DGX Spark (or GB10 OEM)](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/)** (Activity: 153): **사용자는 로컬 LLM 추론(inference)에서, 특히 코드 완성 및 리팩터링 같은 코딩 작업을 위해 NVIDIA DGX Spark와 M4 Max(128GB RAM) 탑재 MacBook Pro를 비교하고 있습니다. DGX Spark는 CUDA 생태계와 강력한 GPU 연산을 제공하는 반면, MacBook Pro는 통합 메모리(unified memory)와 Apple의 ML 스택이 강점입니다. 사용자는 대형 모델 학습(training)에는 관심이 없고, 빠르고 신뢰할 수 있는 로컬 추론을 원합니다. 핵심 고려사항은 Apple Silicon 생태계가 Claude Code 같은 클라우드 기반 코딩 어시스턴트를 대체할 수 있는지 여부입니다. MacBook의 더 높은 메모리 대역폭이 추론에 유리하다는 점이 언급되지만, 클라우드 기반 성능과 동일하리라는 기대는 조정해야 한다는 의견도 있습니다. 벤치마크는 M5가 M4 대비 큰 성능 향상을 제공하며, 새로운 MacBook Pro 모델이 곧 출시될 수 있음을 시사합니다.** 댓글에서는 텍스트 생성에서 Apple Silicon과 NVIDIA 하드웨어의 성능을 두고 논쟁합니다. 일부는 특히 M3 Ultra를 탑재한 MacBook Pro가 순수 텍스트 생성 작업에서 뛰어나다고 주장하는 반면, DGX Spark는 광범위한 GPU 역량이 필요한 작업에 더 적합하다고 말합니다. MacBook의 높은 메모리 대역폭은 추론에 유리한 요소로 강조되며, NVIDIA의 CUDA 지원은 더 폭넓은 프레임워크 호환성 측면에서 장점으로 언급됩니다.

- M4 Max는 DGX Spark에 비해 메모리 대역폭이 크게 높아 추론 작업에 유리합니다. 다만 DGX Spark는 NVIDIA CUDA와의 호환성 덕분에 대부분 프레임워크에서 지원이 더 좋아, 다양한 ML 프레임워크를 쓰는 사용자에게 큰 장점입니다.

- M3 Ultra Mac Studio가 DGX Spark보다 순수 텍스트 생성 작업에서 더 우수하다는 점이 강조됩니다. NVIDIA 하드웨어 역량에도 불구하고, M3 Ultra가 텍스트 생성 속도에서 지속적으로 더 낫다는 주장인데, 이는 텍스트 생성에 최적화된 아키텍처 덕분이라고 합니다. 이는 DGX Spark가 미세조정(fine-tuning)과 이미지/비디오 생성 같은 다른 영역에서 더 폭넓은 역량을 가진 것과 대비됩니다.

- DGX Spark는 100W 미만으로 동작하고 유휴(idle) 시 약 10W 수준인 컴팩트한 크기와 에너지 효율로 언급됩니다. 또한 추가 유닛을 연결할 수 있는 확장성도 장점으로 꼽힙니다. 다만 대역폭 한계에 대한 우려가 있어, 특정 작업에서는 Mac Studio 같은 대안과 성능이 같지 않을 수 있다는 지적이 있습니다.

- 

**[What is the biggest local LLM that can fit in 16GB VRAM?](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/)** (Activity: 103): **RTX 5080과 16GB VRAM에서 실행 가능한 최대 로컬 LLM은, 유의미한 컨텍스트 크기를 유지하려면 대체로 `14B` 파라미터 수준일 가능성이 높습니다. `GPT-OSS-20B` 같은 모델도 들어갈 수 있지만, `4-bit` 이하로 상당한 양자화(quantization)가 필요해 품질 저하가 생길 수 있습니다. 최적의 성능을 위해서는 크기와 컨텍스트 용량의 균형이 좋은 `14B` 모델을 권장합니다. `30B` 같은 더 큰 모델은 CPU 오프로딩(offloading)이 필요하며, VRAM 제약상 실용적이지 않을 수 있습니다.** 댓글에서는 강한 양자화로 `30B` 모델이 이론상 가능하더라도, 품질과 컨텍스트 한계 때문에 실용적이지 않을 수 있다는 의견이 나옵니다. 전반적 합의는 16GB VRAM 구성에서는 `14B` 모델이 성능과 사용성을 유지하기에 더 적합하다는 것입니다.

- **SKirby00**는 16GB VRAM에 30B 같은 대형 모델을 넣는 한계를 지적하며, 4-bit 이하로 공격적 양자화를 하면 품질이 크게 떨어질 수 있다고 말합니다. 크기와 컨텍스트 용량의 균형을 위해 14B 수준을 권하며, 14.5GB 모델이 기술적으로 “들어갈” 수 있어도 현실적으로는 비실용적일 수 있다고 언급합니다.

- **BigYoSpeck**는 Ryzen 9 5900x, 64GB DDR4, 16GB Radeon RX 6800 XT에서 다양한 모델 성능 벤치마크를 공유합니다. `gpt-oss-20b`를 120+ tok/s, `Qwen3 30b`를 부분 CPU 오프로딩으로 40 tok/s, `gpt-oss-120b`를 32 MoE 레이어 CPU 오프로딩으로 23 tok/s로 구동했다고 하며, 다른 시스템에서도 비슷하거나 더 나은 성능이 가능할 수 있다고 시사합니다.

- **PermanentLiminality**는 컨텍스트 공간을 위해 모델 크기를 VRAM의 80% 이하로 유지하라고 조언하며, 16GB VRAM에서는 13GB 모델이 실용적 상한일 수 있다고 말합니다. 시스템 RAM으로 넘칠(spill) 수는 있지만 속도가 크게 떨어진다고 합니다. 다만 `Qwen 3 30B`는 일부 spillover를 비교적 잘 처리해, 이 제약하에서 효율적으로 돌릴 수 있는 가장 큰 모델 중 하나일 수 있다고 언급합니다.

- 

**[Small AI computer runs 120B models locally: Any use cases beyond portability and privacy?](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)** (Activity: 49): ****TiinyAI**가 `80GB RAM`과 `30W` 전력 소비로 `120B` 파라미터 모델을 로컬에서 실행할 수 있는 컴팩트 AI 디바이스를 개발했습니다. 이 디바이스는 `128GB RAM`과 더 높은 성능을 제공하지만 더 비싸고 큰 **DGX Spark** 같은 시스템의, 더 휴대 가능하고 비용 효율적인 대안으로 포지셔닝됩니다. TiinyAI 디바이스는 특히 현장 연구나 인터넷이 불안정한 지역처럼, 순수 연산 성능보다 휴대성과 프라이버시가 우선되는 상황에서 잠재적 활용이 주목됩니다.** 댓글은 메모리 대역폭에 대해 회의적이며, 약 `80Gb/s` 수준일 수 있다고 추정해 표준 PC/노트북 대비 성능이 제한될 수 있다고 봅니다. 가격과 출시 가능성에도 의문이 있으며, 일부는 정부에 의해 인터넷이 제한되는 상황에서 유용할 수 있다고 언급합니다.

- 주요 기술적 우려는 120B 같은 대형 모델을 효율적으로 돌리기 위한 메모리 대역폭이며, `80Gb/s`에서 `200Gb/s`까지 추정이 오갑니다. 대역폭이 낮으면 일반 PC/노트북보다 낫지 않을 수 있어, 휴대성과 프라이버시 외 실용성이 제한될 수 있다는 지적입니다.

- 가격은 80GB RAM 단일 보드 컴퓨터(SBC) 기준 약 $1400로 추정되지만, 즉시 구매 가능하지 않다는 점이 회의감을 키우며, 시장에서의 실현 가능성에 의문이 제기됩니다.

- 인터넷 차단에 대한 회복력(resilience)이라는 사용 사례가 언급되며, 권위주의 정권 등에서 인터넷 접근이 제한/감시되는 상황에서 로컬 처리의 가치가 강조됩니다.

### 2. Innovative AI Model Implementations and Experiments

- 

**[Shadows-Gemma-3-1B: cold start reasoning from topk20 logprob distillation](https://www.reddit.com/r/LocalLLaMA/comments/1qcd9m1/shadowsgemma31b_cold_start_reasoning_from_topk20/)** (Activity: 41): ****Shadows-Gemma-1B**는 Google Tunix Hackathon을 위해 훈련된 추론(reasoning) 모델로, `1569 samples`로 TPUv5-8e에서 약 `10분`, A40에서 `20분` 만에 학습되었습니다. 이 모델은 비추론 교사 모델 **gemma-3-4b-it**의 topk20 logprob 증류(distillation)로부터 *shadow tokens*라는 새로운 접근을 사용합니다. 이 토큰들은 초기에 낮은 순위로 나타나다가 나중에 선택되는 경향이 있으며, 이는 되돌아가기(backtracking)나 해법 탐색 같은 추론 행동을 시사할 수 있습니다. 모델은 추론을 교차(interleaved)하도록 유도하는 시스템 프롬프트로 학습되었고, 다른 모델보다 우수하다고 주장하진 않지만 복잡한 질문에서 더 나은 추론 능력을 보여줍니다. 손실 함수와 코드 최적화 등 훈련 과정의 추가 세부 사항은 추후 포스트 모템에서 공유될 예정입니다.** 한 댓글은 gemma-12b-it 또는 gemma-27-it 같은 더 큰 교사 모델로 다른 결과를 볼 수 있다고 제안합니다. 또 다른 댓글은 증류에 Deep Cogito v2.1이 효과적이었다며 학습 데이터셋 공개를 기대한다고 말합니다.

- 한 사용자는 `gemma-12b-it` 또는 `gemma-27-it` 같은 더 큰 모델을 교사(teacher)로 증류하면, 더 큰 용량과 더 미묘한 이해 덕분에 결과가 개선될 수 있다고 제안합니다.

- 또 다른 사용자는 확률 분포에서 토큰의 지속성을 추론 깊이의 측정치로 쓰는 혁신적 접근을 강조합니다. 이는 추론 행동을 강화하도록 모델을 훈련할 수 있게 해주는 새로운 개념입니다. 또한 PyTorch에서 JAX로 전환하는 과정의 기술적 난관에도 관심을 표하며, 프레임워크별 최적화/이슈에 대한 통찰이 있을 수 있다고 암시합니다.

- 

**[Using local VLMs for OCR to feed into an NLP categorization pipeline - looking for beta testers (Loggr)](https://www.reddit.com/r/LocalLLaMA/comments/1qcd8sw/using_local_vlms_for_ocr_to_feed_into_an_nlp/)** (Activity: 10): ****Loggr**는 Apple Silicon에서 완전 오프라인으로 동작하는 건강 저널링 앱을 개발 중이며, 자유 형식 텍스트에서 구조화된 건강 데이터를 추출하는 커스텀 NLP 파이프라인을 서브-100ms 지연으로 제공한다고 합니다. 또한 `Qwen2.5-VL-3B` 모델을 MLX로 양자화해 OCR에 활용, `8GB` 통합 메모리에 맞추어 손글씨 저널을 스캔하는 기능을 통합 중입니다. `12GB+`가 필요한 `7B` 모델은 더 지저분한 손글씨를 더 잘 처리합니다. 앱은 배치 모드로 밤새 처리하며, 빠른 프리뷰를 위해 Apple Vision 프레임워크와의 하이브리드 접근도 고려합니다. 팀은 어려운 손글씨와 레이아웃에서 성능을 평가할 베타 테스터를 모집합니다. 자세한 내용과 신청은 [loggr.info](http://loggr.info)에서 가능합니다.** 댓글은 지저분한 손글씨에서는 일반 VLM보다 특화 OCR 모델이 더 나을 수 있다며 커스텀 손글씨 모델과 함께 `PaddleOCR`를 시도하라고 제안합니다. 또 다른 추천은 `Qwen2.5-VL`과 호환되는 `MiMo-VL-7B-RL`을 테스트해보라는 것이며, 텍스트-투-스피치 지원 여부에도 관심이 있습니다.

- 한 사용자는 OCR 작업에서 `PaddleOCR`와 커스텀 손글씨 모델을 추천하며, `Qwen2.5-VL` 같은 범용 비전-언어 모델(VLM)보다 특화 OCR이 지저분한 손글씨에서 더 좋은 성능을 보일 수 있다고 말합니다.

- 다른 사용자는 `Qwen2.5-VL 7B`의 대안으로 `MiMo-VL-7B-RL`을 추천하며, 완전 호환이고 사용 사례에서 더 ‘똑똑해 보였다’고 말합니다. Hugging Face 링크도 공유합니다: [MiMo-VL-7B-RL](https://huggingface.co/XiaomiMiMo/MiMo-VL-7B-RL-2508).

### 3. AI Protocols and Frameworks for E-commerce and Development

- 

**[Google just opensourced Universal Commerce Protocol.](https://www.reddit.com/r/LocalLLM/comments/1qcpoaw/google_just_opensourced_universal_commerce/)** (Activity: 32): ****Google**이 **Universal Commerce Protocol (UCP)**을 오픈소스로 공개했습니다. 이는 AI 에이전트가 상품 탐색, 장바구니 관리, 결제 처리 같은 이커머스 작업을 자율적으로 수행할 수 있게 합니다. 주요 통합으로는 멀티스텝 워크플로를 위한 **Agent2Agent (A2A)**, 안전한 결제를 위한 **Agents Payment Protocol (AP2)**, 그리고 vLLM/Ollama 같은 기존 LLM 스택과 통합을 위한 **Model Context Protocol (MCP)**가 포함됩니다. 프로토콜은 [GitHub](https://github.com/Universal-Commerce-Protocol/ucp)에서 제공됩니다.** 댓글에서는 소매업체 측 채택 현황, Google의 지원 기간, 실제 사용 중인지 또는 이제 막 오픈소스화된 것인지 등을 질문합니다.

- UCP는 Google이 새롭게 오픈소스로 공개했지만, 소매업체 채택 여부에 대한 불확실성이 있습니다. 한 사용자는 현재 리테일러 채택이 있는지 묻고, 지원이 없다면 유틸리티가 떨어질 수 있다고 지적합니다.

- Google의 장기 지원과 Gemini와의 통합 여부에 대한 호기심이 있습니다. 사용자들은 UCP의 로드맵, 특히 Gemini 등 기존 플랫폼과의 관계를 이해하길 원합니다.

- 논의는 UCP가 신규 프로토콜인지, 기존 프로토콜이 이제 오픈소스화된 것인지의 성숙도(maturity) 문제를 제기합니다. 이는 도입을 검토하는 개발자에게 중요한 구분입니다.

- 

**[Would 16k context coding on consumer GPUs make H100s irrelevant for independent devs?](https://www.reddit.com/r/LocalLLM/comments/1qcmv3z/would_16k_context_coding_on_consumer_gpus_make/)** (Activity: 36): **이 पोस्ट는 `NVIDIA 3060` 같은 소비자 GPU에서 코딩을 위한 `16k context window`를 달성하는 것이, 독립 개발자에게 `H100` 같은 하이엔드 GPU를 무의미하게 만들지 추측합니다. 논의는 `16k context`가 작다고 보고, `64k`는 평균, `128k`나 `1M`은 크거나 매우 크다고 봅니다. 현재 로컬 모델은 메모리가 충분하더라도 `64k`를 넘어서면 효용이 떨어진다는 주장도 있으며, `4x3090s`로 `128k` 또는 `256k`를 돌리는 사용자 경험도 언급됩니다.** 댓글의 합의는 `16k context`가 복잡한 작업에는 불충분해, 더 높은 컨텍스트가 필요하다는 것입니다.

- 논의는 16k 컨텍스트가 LLM 영역에서 작다고 강조합니다. Codex와 Claude는 각각 290k와 240k처럼 훨씬 큰 컨텍스트로 동작하고, Gemini Pro는 최대 100만 토큰까지 가능하다는 언급이 나오며, 16k 달성이 소비자 GPU의 코딩 역량을 근본적으로 바꾸진 못할 것이라는 시각입니다.

- 한 사용자는 4x3090에서 128k 또는 256k 컨텍스트를 쓰지만, 대부분 로컬 모델이 메모리와 무관하게 64k를 넘으면 성능이 저하된다고 말합니다. 이는 큰 컨텍스트가 기술적으로 가능해도 모델 한계로 실질적 이점이 제한될 수 있음을 시사합니다.

- 합의는 16k 컨텍스트가 단순 코드 조각이나 자동완성 이상에는 부족하다는 것입니다. 의미 있는 코딩 모델을 돌리기엔 속도가 느릴 가능성이 크며, 따라서 소비자 GPU에서 16k를 달성해도 독립 개발자에게 H100이 무의미해지진 않는다는 결론입니다.

## Less Technical AI Subreddit Recap

> 

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1. Mathematical Theorem and Problem Solving with AI

- 

**[Gemini “Math-Specialized version” proves a Novel Mathematical Theorem](https://www.reddit.com/r/singularity/comments/1qcq1ld/gemini_mathspecialized_version_proves_a_novel/)** (Activity: 553): ****Gemini**의 “math-specialized” AI 모델이, 한 [tweet](https://x.com/A_G_I_Joe/status/2011213692617285729?s=20)와 동반 [arXiv paper](https://arxiv.org/abs/2601.07222)에 따르면 새로운 수학 정리를 증명했다고 전해집니다. 이 모델은 상징 계산(symbolic computation)과 정리 증명(theorem proving)에서의 고급 기법을 활용해 수학적 추론에 최적화된 아키텍처와 훈련을 갖췄다고 합니다. 이는 AI가 복잡한 수학 과제를 다루는 데 한계가 있다는 인식을 चुनौती하며, 수학 연구를 진전시키는 AI의 잠재력을 보여줍니다.** 댓글은 AI 발전 속도가 매우 빠르며 인간 지식을 가속할 수 있음을 강조하는 한편, 상업적 이해관계가 AI 개발에 미치는 영향에 대한 우려를 표합니다. 또한 수학에서의 AI 역량이 종종 과소평가된다는 정서도 있습니다.

- AI가 특히 수학과 코딩에서 빠르게 가속하고 있다는 논의가 나오며, Gemini의 ‘Math-Specialized’ 버전이 새로운 수학 정리를 증명했다는 소식이 그 예로 언급됩니다. 이러한 돌파구는 중요한 AI 성취 사이의 간격이 줄어드는 듯 보이며, 혁신 속도가 빠르다는 인상을 줍니다.

- Gemini 모델을 Erdős 문제에 적용해 벤치마크로 삼자는 제안이 나옵니다. Erdős 문제는 수학 커뮤니티에서 잘 알려져 있고 인간의 방대한 분석이 존재해, AI 수학 문제 해결 능력을 평가하기에 엄격한 테스트가 될 수 있습니다.

- 일부는 여전히 AI가 수학 작업을 할 수 있는지 회의적이지만, 최근 정리 증명 성과는 이러한 회의를 반박하며 AI가 복잡한 수학 문제를 다룰 수 있고, 이 분야의 인간 진보를 가속할 수 있음을 보여준다는 논의가 있습니다.

- 

**[5.2 Pro makes progress on decades long math problem listed on Wikipedia](https://www.reddit.com/r/OpenAI/comments/1qco4d7/52_pro_makes_progress_on_decades_long_math/)** (Activity: 278): **이미지는 Moser’s worm problem에 대한 새로운 수치적 상한을, AI 모델 **5.2 Pro**를 사용한 **Archivara**가 달성했다는 트윗을 보여줍니다. 해법은 타원-로커스(ellipse-locus) 구성 파라미터를 재최적화해 universal cover의 면적을 `0.260069597`로 낮추었고, 이는 2018년의 `0.26007` 기록을 넘어섰습니다. 이 수십 년 된 미해결 기하 문제(길이 1의 어떤 평면 곡선도 수용하는 최소 면적을 찾는 문제)에서의 진전은 **INRIA**의 수학자에 의해 검증되었습니다. 이는 적절한 도구와 가이드를 제공하면 AI 모델이 복잡한 수학 문제를 다룰 수 있음을 보여주며, 모델이 미해결 문제를 회피하는 경향이 있음에도 가능하다는 점을 강조합니다.** 댓글은 미해결 문제에 AI를 몰입시키는 어려움을 논의하며, **5.2 Pro**가 큐레이션된 도구/문헌과 프롬프트 스티어링을 결합해 진전을 만들었다고 언급합니다. 또한 인터넷 접근을 비활성화해 모델이 문제를 “해결 불가”로 치부하지 않도록 한 전략이 도움이 됐다는 말도 나옵니다.

- 5.2 Pro 모델은 큐레이션된 도구와 문헌, 스캐폴딩 개선을 통해 장기 난제에서 진전을 만들었습니다. AI 모델은 리만 가설 같은 복잡한 문제에서 시도조차 하지 않고 포기하는 경향이 있다는 지적이 있으며, 압박과 프롬프트 스티어링의 연속으로 모델이 문제에 진지하게 임하도록 유도했고, 결과는 INRIA 수학자에 의해 검증됐습니다.

- 어려운 문제를 풀게 하려면 인터넷 접근을 제거해 온라인에서 답을 찾거나 “풀 수 없다”는 결론으로 도망가지 못하게 하는 전략이 유효하다는 논의가 있습니다. 이는 Erdős 문제 해결에서도 사용됐고, 모델이 장시간 자기 추론에 의존하도록 강제했습니다.

- 5.2 Pro의 윤리적 제약이 사용자 요청에 방해가 될 수 있다는 언급도 있습니다. 예로 Linux 시스템을 깨어 있게 하는 방법을 요청했을 때 정책 위반을 이유로 거부한 사례가 언급되며, 비즈니스 응용에서 윤리 가이드라인과 사용자 자율성의 균형이 여전히 과제임을 보여줍니다.

### 2. DeepSeek and Spectral Sphere Optimizer Developments

- 

**[[P] my shot at a DeepSeek style moe on a single rtx 5090](https://www.reddit.com/r/MachineLearning/comments/1qcxhgw/p_my_shot_at_a_deepseek_style_moe_on_a_single_rtx/)** (Activity: 64): **한 개인 프로젝트가 단일 RTX 5090에서 top-2 라우팅을 사용하는 `2.36B parameters`, `8 routed experts`의 MoE 모델을 다룹니다. 모델은 Grouped Query Attention과 QK-normalization, RoPE positional embeddings, SwiGLU 활성화와 RMSNorm을 사용합니다. 학습은 `TorchAO FP8 quantization`, Muon 옵티마이저, 멀티스테이지 학습률 스케줄을 사용합니다. 데이터 파이프라인은 처음에 MeCo(Metadata Conditioning then Cooldown)를 썼지만, 전문가가 8개뿐인 설정에서 문제가 있어 클린 코퍼스로 바꿨습니다. 주요 난관은 부적절한 라우터 초기화와 dense first layer 부재로 인한 불안정성이었습니다. 작성자는 작은 MoE에서는 router scaling(스케일 팩터 `1.2`)을 피하라고 조언하며 불안정을 지적합니다. 현재 학습 지표는 학습률 `3e-4`, 손실 약 `1.9`, 처리 속도 `19,415 tok/s`입니다.** 댓글은 정식 ML 훈련 없이도 안정성과 운영 디테일에 집중한 진전에 감탄하며, 개인 학습 외 배포나 증류 등 실용적 활용 가능성에 대해 질문합니다.

- 논의는 단일 RTX 5090에서 작은 MoE 모델을 구현할 때, 고수준 아키텍처보다 안정성과 운영 디테일이 핵심 난관이라는 점을 강조합니다. 이는 실제 제품 개발에서 마지막 단계가 엣지 케이스 관리로 귀결되는 것과 유사하다는 평가이며, 학습 외 실용적 적용(배포/증류)에 대한 호기심이 있습니다.

- 작은 MoE에서 실패 모드를 추적하기 어렵다는 기술적 통찰이 공유됩니다. 대규모 설정의 기법들이 작은 설정에선 통하지 않는 경우가 많고, 라우팅/스케일링 주변의 불안정성이 언급됩니다. dense first layer와 대칭적 초기화(symmetric initialization)가 중요한 교훈으로 꼽힙니다. 단일 GPU 제약이 확장성에 미치는 영향에 대한 질문도 있지만, 트레이드오프를 명확히 말할 수 있는 점이 강점으로 평가됩니다.

- 처리량이나 손실 곡선보다 실패 모드 이해가 중요하다는 댓글이 강조됩니다. 많은 대규모 트릭이 작은 설정에서는 조용히 실패(silent failure)할 수 있으며, dense first layer와 대칭 초기화의 중요성이 재차 언급됩니다.

- 

**[[R] Controlled LLM Training on Spectral Sphere](https://www.reddit.com/r/MachineLearning/comments/1qcq27u/r_controlled_llm_training_on_spectral_sphere/)** (Activity: 17): **이 논문은 **Spectral Sphere Optimizer (SSO)**를 소개하며, 가중치(weights)와 업데이트(updates)에 스펙트럴 제약(spectral constraints)을 적용해 LLM의 안정성과 수렴을 향상시킨다고 주장합니다. 이는 Maximal Update Parametrization(*mu*P)와 완전히 정렬(aligned)되며, **Megatron**에서 병렬 알고리즘으로 구현됐습니다. Dense 1.7B 및 MoE 8B-A1B 같은 사전학습에서 **AdamW**와 **Muon**보다 더 나은 안정성과 성능을 보였다고 합니다. SSO는 spectral sphere에서의 최급강하 방향(steepest descent direction)을 유도해, MoE 라우터 로드 밸런싱 개선과 activation bounded 같은 이점을 제공합니다.** 한 댓글은 SSO 제약이 Stiefel manifold보다 약간 느슨하다고 지적합니다. Stiefel은 모든 특이값(singular values)이 정확히 1이어야 하지만, SSO는 최대 특이값만 제약합니다. 또 다른 댓글은 유사 기법 경험을 공유하며, 안정성과 배치 크기 확장에 유리한 NorMuon 변형을 언급합니다.

- parlancex는 훈련 중 가중치를 다양한 매니폴드에 프로젝션(projection)한 경험을 공유합니다. Stiefel manifold를 시도했으나 계산 비용이 크고 성능 이득이 없어 hyper-spherical manifold로 되돌렸다고 합니다. 또한 orthogonalization 이후 업데이트를 행(row) 단위로 재정규화하는 NorMuon을 강조하며, 높은 학습률과 배치 크기 증가에 따른 강한 성능 스케일링을 가능하게 한다고 말합니다. 이는 모든 singular value를 1로 강제하는 Stiefel과 달리, 제안 방식이 최대 singular value만 제약하는 점과 대비됩니다.

- radarsat1는 과거 폭주하는 activation 문제를 겪었고, 이를 막기 위해 모든 레이어에서 가중치를 클램프/정규화해 unit sphere로 투영하려 했지만 수렴 우려로 중단했다고 말합니다. 현재 논의가 그 직관과는 다르지만 유익해 보인다며 관심을 표합니다.

### 3. Claude and AI Subscription Challenges

- 

**[Claude PRO is too little, Claude MAX is too much for me](https://www.reddit.com/r/ClaudeCode/comments/1qcg4fp/claude_pro_is_too_little_claude_max_is_too_much/)** (Activity: 139): **사용자는 **Claude AI** 구독 플랜에서 `Claude PRO`는 부족하고 `Claude MAX`는 과하다는 경험을 공유합니다. 현재 없는 `$40-$50` 정도의 중간 플랜이 필요하다고 말합니다. 대안으로 `Claude PRO` 계정 2개를 운영하는 방법을 생각하지만, 데스크톱 앱에서 계정 전환이 번거롭고 대화 컨텍스트를 잃어 토큰을 낭비할 수 있다는 점을 우려합니다.** 댓글은 불편함에도 2개 계정 운영을 제안하거나, 더 나은 사용량을 제공할 수 있는 **OpenAI’s Codex**의 `$20` 플랜을 시도해보라고 권합니다.

- AriyaSavaka는 GLM Codling Pro 플랜을 추천하며, `$12/month`에 `$100 Claude Max` 플랜보다 `3x` 사용량이고 주간 제한도 없다고 주장합니다.

- AdrianPlaysPoE는 ‘Extra Usage’ 옵션으로 지출 상한을 설정해 커스텀 구독을 만드는 방법을 언급합니다. 예를 들어 `$20-30` 상한을 설정해 `$50` 구독에 준하는 형태로 격차를 메울 수 있다는 제안입니다.

- marrone12는 OpenAI의 Codex를 고려하라고 권하며, `$20` 플랜이 Claude 대비 사용량이 훨씬 많다고 언급합니다.

- 

**[Work too cheap for Claude subscription](https://www.reddit.com/r/ClaudeCode/comments/1qcir01/work_too_cheap_for_claude_subscription/)** (Activity: 122): **이 पोस्ट는 소프트웨어/AI 엔지니어가 `2 million line` 코드베이스를 ‘AI ready’로 개편하는 도전 과제를 다루며, 대규모 리팩터링에서 **GitHub Copilot**의 한계를 강조합니다. 작성자는 개인 프로젝트에서는 **Claude Opus 4.5**와 **Claude Code**가 Copilot보다 효과적이라고 느끼지만, 업무에서는 관리진이 Claude Code 도입에 소극적이라 Copilot만 쓰게 한다고 말합니다. 작성자는 Claude 구독 비용(`$200/month`)이 절약되는 시간 대비 매우 작다고 주장하지만, 관리진은 이를 받아들이지 않는다는 점에서 AI 도구 가치에 대한 이해 차이를 지적합니다.** 댓글은 Copilot이 과도한 핸드홀딩이 필요하고 자주 코드를 망친다고 불평합니다. 또한 Claude Code 비용에 대해 ‘work cc is $150usd/m and is apparently equivalent to a max x3 sub, not max x5’라는 정정이 나오며, 구독 티어에 혼선이 있음을 시사합니다.

- Downtown-Pear-6509는 Claude 구독 비용이 월 $150 USD이며 ‘max x3’에 해당하고 ‘max x5’가 아니라는 점을 언급합니다. 이는 구독 가치/역량이 티어에 따라 달라질 수 있어 비용-효익 판단에 영향을 준다는 맥락입니다.

- flackjap은 소프트웨어 개발에서 여러 AI 모델을 조합해 쓰는 전략을 강조합니다. 코드 작성용 모델과 코드 리뷰용 모델을 분리하면, 계획 단계에서 격차와 함정을 조기에 발견하는 데 도움이 된다는 주장입니다.

- Michaeli_Starky는 OpenCode가 Copilot 구독과 함께 동작하며, ‘agentic harness and context management’ 측면에서 Claude와 비슷하다고 언급합니다. 이는 복잡한 작업에서 컨텍스트 관리가 중요하다는 점을 강조합니다.

- 

**[Figured out why /compact loses so much useful context - and a potential fix](https://www.reddit.com/r/ClaudeCode/comments/1qcjwou/figured_out_why_compact_loses_so_much_useful/)** (Activity: 105): **이미지는 Claude Code에서 컨텍스트 윈도 최적화를 위해 메시지를 요약·추출하는 방법을 제안하며, 토큰 사용량을 60-70% 줄일 수 있다고 봅니다. 현재 Claude Code의 `/compact`는 서버 측 요약으로 원문이 영구적으로 사라지고 로컬 백업이 없다고 문제를 제기합니다. 제안된 해결책은 compact 전에 원문을 로컬 파일에 기록하고, 컨텍스트를 요약과 파일 참조로 교체해 특정 메시지를 선택적으로 복원할 수 있게 하는 것입니다. 이는 Cursor의 “dynamic context discovery” 방식(긴 툴 응답을 파일에 써서 나중에 가져오는 방식)에서 영감을 받았다고 합니다.** 일부는 Claude Code가 롤백 기능이 있는데 왜 기본 지원이 없는지 의아해합니다. 다른 이들은 compaction 없이 세션 컨텍스트를 관리하는 유사 도구를 만들었다고 말하며, 제안 방식이 장기 작업에 유용할 수 있다고 봅니다.

- SatoshiNotMe는 Claude-code-tools 저장소의 ‘rollover’ 옵션을 언급하며, 원본 세션 경로를 주입한 새 세션을 시작해 언제든 임의의 디테일을 복구할 수 있다고 설명합니다. 또한 Rust/Tantivy 기반의 빠른 전체 텍스트 검색과, 인간용 TUI 및 에이전트용 CLI/JSON 모드를 제공해 세션 간 상세 복구를 돕는다고 합니다.

- n3s_online은 Claude Code 사용 시 컨텍스트 윈도 관리를 강조하며, 각 작업을 빈 컨텍스트에서 시작해 필요한 맥락만 쌓는 방법을 제안합니다. 컨텍스트가 불필요한 정보로 가득 차면 출력 품질이 떨어지므로, 작업을 더 작은 하위 작업으로 쪼개라고 권합니다. 또한 Beads나 SpecKit 같은 도구를 ‘메모리 레이어’로 활용해 매번 수동으로 컨텍스트를 세팅하지 않도록 하자고 말합니다.

- helldit은 Claude의 컨텍스트 관리에 대한 오해를 바로잡으며, 요약 출력이 전체 히스토리 JSONL의 로컬 저장 위치를 가리킨다고 설명합니다. 이는 필요할 때 Claude가 전체 대화 기록에 접근할 수 있음을 의미하며, 서버 측에서 원본이 완전히 사라진다는 믿음에 반박합니다.

---

## AI Discord Recap

> 

A summary of Summaries of Summaries by gpt-5

**1. New Multimodal and Video Models**

- 

****GLM-Image Goes Hybrid, Nails Text****: **Zai**가 고충실도 디테일과 강한 텍스트 렌더링에 초점을 둔 오픈소스 하이브리드 **autoregressive + diffusion** 이미지 모델 **GLM-Image**를 출시했습니다. 코드는 [GLM-Image (GitHub)](https://github.com/zai-org/GLM-Image), 글은 [GLM-Image: Hybrid AR + Diffusion](https://z.ai/blog/glm-image)에서 확인할 수 있습니다.

- 멤버들은 **text rendering**과 지식 집약 작업에서의 장점, 그리고 풍부한 I2I 도구(편집, 스타일 전환, 아이덴티티 보존, 다중 주체 일관성)를 강조하며, 실무 프로덕션 후보로서 실용적이라고 평가했습니다.

- 

****Veo 3.1 Upscales Like a Boss****: Google의 **Veo 3.1**이 네이티브 세로(portrait) 모드, 사용자 사진 기반 image-to-video, 그리고 **Gemini**, **YouTube**, **Google AI Studio** 전반에서 최첨단 **1080p/4K upscaling**을 추가했습니다. Tulsee Doshi가 발표했습니다: [Veo 3.1 updates](https://x.com/tulseedoshi/status/2011174465720430612).

- 빌더들은 모바일 우선 스토리텔링 각도와 더 높은 충실도 출력으로 이어지는 매끄러운 파이프라인을 칭찬하며, 업그레이드가 기존 **Gemini** 및 **Studio** 워크플로에 자연스럽게 들어맞는다고 봤습니다.

- 

****LTX-2 Drops 20s 4K Open-Source Clips****: **LTX-2**는 오디오 포함 최대 **20초** **4K** 클립을 만들 수 있는 오픈소스 비디오 모델로 언급됐고, 데모는 여기 있습니다: [LTX-2 open-source video model](https://x.com/venturetwins/status/2010878914273697956).

- 크리에이터들은 LTX-2를 커뮤니티 친화적 베이스라인으로 평가하며, 길이 확장, 프롬프트 가능성(promptability), 오디오 정렬(alignment) 확장에 대한 기대를 보였습니다.

**2. Benchmarks and Leaderboards**

- 

****ERNIE Earns Its Stripes on Text Arena****: `ERNIE-5.0-0110`이 [Text Arena leaderboard](https://lmarena.ai/leaderboard/text)에서 **#8 (1460)**, Arena Expert에서 **#12**를 기록했으며, Top 10에 들어간 첫 중국 모델로 소개됐습니다. **Math**와 직업(occupational) 카테고리에서 강점을 보였고, 변경 내역은 [Leaderboard Changelog](https://news.lmarena.ai/leaderboard-changelog/)에서 확인할 수 있습니다.

- 참가자들은 ERNIE의 카테고리 강점과 평가 모드 전반의 일관성을 언급하며, 추가 훈련으로 향후 사이클에서 더 올라갈지 주목했습니다.

- 

****SlopCodeBench Shames Sloppy Agents****: SprocketLab이 [SlopCodeBench](https://github.com/SprocketLab/slop-code-bench)를 공개했으며, 에이전트가 체크포인트로 쪼갠 대규모 프로그래밍 작업에서 초기에 나쁜 설계 결정을 내리고, 단순화 이후에도 일반화에 실패하는 경우가 많다고 보여줍니다.

- 연구자들은 ICLR 워크숍 제출을 논의했고, 괜찮은 에이전트 코딩 성능을 위해 무거운 프롬프트 스캐폴딩이 필수여서는 안 된다고 주장했습니다. 순진한(naïve) 프롬프트가 더 저렴하지만 여전히 성능이 낮았다는 점도 언급됐습니다.

- 

****Arena Adds Models: Lights, Code, Action!****: LM Arena가 [Video Arena](https://lmarena.ai/c/new?chat-modality=video)에 새 비디오 변형(veo-3.1-audio-4k, veo-3.1-audio-1080p, veo-3.1-fast-audio-4k, veo-3.1-fast-audio-1080p)을 추가했고, [Code Arena](https://lmarena.ai/c/new?chat-modality=code)에 **gpt-5.2-codex**, [Image Arena](https://lmarena.ai/c/new?chat-modality=image)에 **glm-image**를 추가했습니다.

- 사용자들은 멀티모달 추론과 코드 합성에서 더 선명한 정면 대결을 기대하며, 신규 참가자가 OCR, 레이아웃 이해, 견고성(robustness) 메타를 바꿀지 추적했습니다.

**3. Systems and Compiler Tooling**

- 

****FP8 Primer Powers TransformerEngine Talk****: 엔지니어들이 NVIDIA의 FP8 노트북 [TransformerEngine FP8 primer](https://github.com/NVIDIA/TransformerEngine/blob/main/docs/examples/fp8_primer.ipynb)를 공유하며, 현재의 **FP8**과 2026년 전후 가능할 **NVFP4** 훈련 지원을 논의했습니다.

- 스레드는 FP 포맷과 장문 컨텍스트(long-context) 동작, 어텐션 희석(attention dilution) 간의 관계를 두고, 실제 훈련에서의 안정성 대 처리량을 놓고 의견을 교환했습니다.

- 

****Helion Hooks Flex Attention and Overbooks SMs****: [Helion 0.2.10](https://github.com/pytorch/helion) 릴리스는 flex attention 예시 커널을 포함했고, persistent kernels에서 **SM oversubscription** 지원을 추가했으며, softmax oversub 그래프도 공개했습니다: [oversubscription perf](https://cdn.discordapp.com/attachments/1425531180002054195/1460722396888563868/get_attachment_url.png).

- GPU 사용자들은 커널 동작과 스케줄링 트레이드오프를 파고들며, oversubscription이 블록과 시퀀스 길이가 흔들릴 때(workloads jitter) 활용률을 평탄화할 수 있다고 언급했습니다.

- 

****AOT Inductor Gets a Fresh Look****: 개발자들이 PyTorch의 [Ahead-of-Time Inductor docs](https://docs.pytorch.org/docs/stable/torch.compiler_aot_inductor.html)를 다시 공유하며, 컴파일 전략을 간소화하고 런타임 오버헤드를 줄이는 방법을 논의했습니다.

- 대화는 그래프를 언제 고정(freeze)할지 vs 동적 경로를 유지할지, 그리고 AOT가 혼합 파이프라인에서 Triton과 CUDA 커널을 어떻게 보완하는지에 초점을 맞췄습니다.

**4. Datasets and Data Engineering**

- 

****Purified Prose Puts Noise on a Diet****: 개편된 프루닝 스크립트가 Python 휴리스틱과 **MTLD** 및 어휘 다양성 같은 지표로 수학/코드를 필터링해, 영어 전용 고품질 데이터셋을 만들었습니다—[Hermes-3-Dataset-enPurified](https://huggingface.co/datasets/enPurified/Hermes-3-Dataset-enPurified-openai-messages), [tulu-3-sft-mixture-enPurified](https://huggingface.co/datasets/enPurified/tulu-3-sft-mixture-enPurified-openai-messages), [project_gutenberg-enPurified](https://huggingface.co/datasets/enPurified/project_gutenberg-enPurified-openai-messages).

- 실무자들은 더 깨끗한 산문 분포가 SFT와 CPT에 유익하다고 평가하며, 이 접근이 다른 언어에도 재사용 가능하고 인스트럭션 트레이스의 스퓨리어스 패턴을 줄인다고 말했습니다.

- 

****Audioform Dataset Paints Sound in Frames****: [audioform_dataset](https://huggingface.co/datasets/webxos/audioform_dataset)는 Three.js 도구 AUDIOFORM으로 WAV 오디오를 프레임 단위의 타임스탬프 시각 프레임으로 변환하고, 프레임별 메타데이터(예: **dominant frequency**, **timestamp**)를 제공합니다.

- 연구자들은 이를 오디오-투-비주얼 멀티모달 ML의 *“Hello World”*로 부르며, 시간 정렬(temporal alignment)과 피처 융합(feature fusion) 파이프라인을 검증하는 데 사용했습니다.

**5. Infra and Ecosystem Moves**

- 

****OpenAI Teams with Cerebras to Scale Compute****: OpenAI가 **Cerebras**와의 전략적 컴퓨팅 파트너십을 발표했습니다: [OpenAI x Cerebras partnership](https://openai.com/index/cerebras-partnership/).

- 관측자들은 타이밍을 다른 하드웨어 제휴에 대한 카운터 무브로 해석하며, 대규모 사전학습과 추론 클러스터에서 더 빠른 반복(iteration)을 예상했습니다.

- 

****Chutes Chooses TEE for Verifiable Inference****: **Chutes**가 검증 가능한 프라이버시를 위한 AI 추론에서 **Trusted Execution Environment (TEE)** 아키텍처로 이동합니다: [Confidential compute for AI inference](https://chutes.ai/news/confidential-compute-for-ai-inference-how-chutes-delivers-verifiable-privacy-with-trusted-execution-environments).

- OpenRouter 사용자들은 벤더들이 TEE 제약과 어테스테이션(attestations)에 적응하면서, 프로바이더 목록 조정(예: R1 0528) 가능성을 언급했습니다.

- 

****OpenRouter Goes OSS and Crowdsources Apps****: OpenRouter 팀이 [awesome-openrouter](https://github.com/OpenRouterTeam/awesome-openrouter)와 [openrouter-apps](https://github.com/OpenRouterTeam/openrouter-apps)를 시작해 커뮤니티 기여와 앱 쇼케이스를 모으고 있습니다.

- 그들은 PR(예: JanitorAI)을 장려하며, 프로바이더와 파라미터 전반에서 마찰을 줄이기 위한 커버리지와 예시 확장을 목표로 한다고 했습니다.
