---
title: "Cursor, GPT-5.2-Codex로 1주일 자율 실행"
summary:
  - "Cursor, GPT-5.2-Codex로 1주일 자율 실행"
  - "OpenAI, Cerebras와 추론(inference) 파트너십 발표"
  - "LangSmith Agent Builder 정식 출시"
  - "Meta Llama 리드, Airbnb CTO로 합류"
  - "Google, Gemini personalization(개인화) 공개"
date: 2026-01-14
originalUrl: "https://news.smol.ai/issues/26-01-14-not-much/"
hasHeadline: false
headline: "Cursor, GPT-5.2-Codex로 1주일 자율 실행"
tags:
  - OpenAI
  - GPT-5.2-Codex
  - Cursor
  - Cerebras
  - LangChain
isFeatured: false
---

## 헤드라인: Cursor, GPT-5.2-Codex로 1주일 자율 실행

GPT 5.2 Codex API 출시와 Cursor가 이를 활용해 1주일 동안 자율적으로 실행하며 어느 정도 작동하는 브라우저를 만든 사례가 화제가 됐다.

OpenAI가 **Responses API**에 **GPT-5.2-Codex**를 출시했고 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219)), Cursor가 이를 즉시 통합해 장기 실행(long-running) 작업용 “frontier model”로 소개했다 ([cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)). 또한 Cursor에서 GPT-5.2로 브라우저를 만들며 1주일간 중단 없이 실행해 **3M+ lines of Rust**를 생성했다는 보고가 공유됐다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)).

---

## AI Twitter Recap

### OpenAI + GitHub + Cursor: GPT-5.2-Codex의 “long-horizon” 확장

- **API(그리고 IDE)로 들어온 GPT-5.2-Codex**: OpenAI가 **Responses API**에 **GPT-5.2-Codex**를 출시하며 기능 개발, 리팩토링, 버그 탐지 같은 장기 실행(long-running) 작업에 최적화한 가장 강력한 코딩 모델로 포지셔닝했고, 코드베이스 취약점 이해 측면에서 지금까지 “most cyber-capable”라고도 명시했다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219)). Cursor는 즉시 통합해 장기 실행 작업을 위한 “frontier model for long-running tasks”로 소개했고 ([cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)), 장기간 워크플로에서의 꼼꼼함(diligence)을 강조하는 빌더들의 지지도 이어졌다 ([sherwinwu](https://twitter.com/sherwinwu/status/2011503049890808040)). GitHub도 **@code**에 이를 반영했으며 ([code](https://twitter.com/code/status/2011503658815668623)), 엔터프라이즈 도입 마찰을 줄이기 위해 preview/GA 라벨링을 바꾸고 있다고 언급했다 ([pierceboggan](https://twitter.com/pierceboggan/status/2011519932392226898)).

- **구체적인 “agents ran for a week” 데이터포인트**: 한 팀이 “built a browser with GPT-5.2 in Cursor”라고 하며, 1주일 내내 중단 없이 실행돼 수천 개 파일에 걸쳐 **3M+ lines of Rust**를 생성(HTML parsing → CSS cascade/layout → painting → custom JS VM)했고 간단한 웹사이트에서는 “kind of works”라고 보고했다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)). 이는 “continuous agent time”과 자율 코드 생성(autonomous codegen)의 실용적 프런티어를 가늠하는 사례로 인용됐다 ([gdb](https://twitter.com/gdb/status/2011570314216718510); [kevinweil](https://twitter.com/kevinweil/status/2011587644468445445)). 또한 에이전트 시스템에는 출력 품질과 안전을 높이기 위한 1급(first-class) “review” 루프가 필요하다는 베스트 프랙티스도 강조됐다 ([scaling01](https://twitter.com/scaling01/status/2011580895573262717)).

- **평가 담론: metrics vs “vibes” vs time horizon**: 여러 트윗에서 코딩 모델 진전이 평가(eval) 설계와 개발자가 일상 작업에서 체감하는 바에 따라 과소/과대 집계될 수 있다고 주장했으며, METR의 장기 평가가 표준 벤치마크보다 “jumps”를 더 일찍 포착한다는 점이 언급됐다 ([swyx](https://twitter.com/swyx/status/2011344788486774942)). 또 플롯만으로 결론을 뒷받침할 수 있는지, 실제 스캐폴드(scaffolds)에서 “time horizon” 지표가 무엇을 의미해야 하는지에 대한 논쟁도 있었다 ([_lewtun](https://twitter.com/_lewtun/status/2011393239774048658); [RyanPGreenblatt](https://twitter.com/RyanPGreenblatt/status/2011648823458689304)).

### 추론(inference) 인프라: Cerebras 파트너십과 “speed is the product”

- **OpenAI 🤝 Cerebras**: Cerebras가 OpenAI와의 파트너십을 발표했다 ([cerebras](https://twitter.com/cerebras/status/2011531740804964855)). 타임라인에서는 지연시간(latency)과 토큰/초(tokens/sec)가 ChatGPT류 경험에서 점점 더 사용자에게 보이는 제품 차별화 요소(그리고 Gemini 대비 경쟁 요소)로 인식된다는 프레이밍이 있었으며, 일반 워크로드에서는 CUDA만큼 범용적이지 않을 수 있다는 언급도 있었다 ([Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2011537073292132565)).

- **제공업체 벤치마킹이 더 세분화**: Artificial Analysis가 **GLM-4.7** 제공업체 비교를 공유하며 속도/지연시간/비용 트레이드오프를 강조했다. 예시 수치로는 Cerebras가 GLM-4.7을 **~1,445 output tokens/s**, **TTFAT ~1.6s**로 제공하고, Fireworks/Baseten 같은 GPU 제공업체는 처리량/지연시간에서는 뒤처지지만 더 큰 컨텍스트 윈도우를 지원한다고 했다(Cerebras는 **131k**, 다른 곳은 Parasail을 제외하고 **200k**로 표기) 또한 각기 다른 캐싱 할인도 언급됐다 ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2011581689567592641)).

- **운영 스케일링 콘텐츠**: Modal이 자체 호스팅 추론이 이제 API 경제성과 맞먹거나 앞설 수 있다는 가이드를(기법 + 코드 샘플 포함) 공개했다 ([charles_irl](https://twitter.com/charles_irl/status/2011484220032762114)). SemiAnalysis는 Modal의 운영 글에서 **20k GPUs** 플릿을 건강하게 유지하는 방법을 강조했다 ([SemiAnalysis_](https://twitter.com/SemiAnalysis_/status/2011498598043660777)). vLLM과 Modal 쪽에서는 H100을 포화시키기 위한 **batch inference**(FlashInfer 백엔드, async scheduling, batch sizing)에 초점을 맞췄다 ([vllm_project](https://twitter.com/vllm_project/status/2011585247297880501)).

### 에이전트 엔지니어링 제품화: 스킬과 아키텍처 선택

- **스킬(skills)을 이식성(portability) 레이어로**: Phil Schmid가 `antigravity`용 **Agent Skills**를 공개하며 표준 폴더(`.agent/skills/`, `~/.gemini/antigravity/skills/`)와 Gemini CLI / Claude Code / OpenCode 스타일 생태계 간 호환성을 제시했다 ([_philschmid](https://twitter.com/_philschmid/status/2011345054343053370)). Hugging Face 실무자들은 “/plugin interfaces”가 버저닝 마찰이 크며, 대부분의 팀에는 **작은 수직형 스킬 + CLI/MCP**가 더 견고한 경로라고 호응했다 ([ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2011460800427286783)).

- **LangSmith Agent Builder 출시**: LangChain이 **LangSmith Agent Builder**를 출시하며 “agents as a filesystem”, 내장 메모리, 앰비언트(ambient) 에이전트를 위한 트리거, **skills/MCP/subagents** 지원을 내세웠다 ([LangChain](https://twitter.com/LangChain/status/2011501888735494184); [hwchase17](https://twitter.com/hwchase17/status/2011503746312987128)). 실제 예로 “no code, just a prompt”로 만든 ambient Slack-to-Linear 티켓 에이전트가 소개됐다 ([docs_plz](https://twitter.com/docs_plz/status/2011536177556570203)). CopilotKit은 LangChain의 사전 구축(prebuilt) 에이전트를 UI 지향 앱으로 바꾸는 미들웨어(“Deep Agents” 포함)를 추가했다 ([CopilotKit](https://twitter.com/CopilotKit/status/2011453920321929237)).

- **멀티 에이전트(multi-agent)는(보통) 나중에**: LangChain 글에서 **Subagents**, **Skills**, **Handoffs**, **Router**의 4가지 패턴을 제시하며, 컨텍스트 윈도우, 분산 소유권, 분해 필요 같은 제약에 부딪히기 전까지는 **single agent**로 시작하라고 명시적으로 권장했다 ([LangChain](https://twitter.com/LangChain/status/2011527733176856671); [sydneyrunkle](https://twitter.com/sydneyrunkle/status/2011514042075222029)). 같은 메시지가 OSS 계정 가이드에서도 반복됐다 ([LangChain_OSS](https://twitter.com/LangChain_OSS/status/2011515750625001609)).

### 엔지니어들이 논쟁한 모델/리서치 노트

- **DroPE / 장문맥을 위한 위치 임베딩 제거**: 한 스레드는 간단한 레시피(사전학습(pretrained) LLM에서 **RoPE를 drop**하고, **positional embeddings 없이** 미세조정(fine-tuning)한다)를 요약했고, 표준 데이터셋에서 비슷한 성능을 유지하면서 장문맥(long-context) 동작이 개선됐다고 보고했다. **SmolLM-1.7B**와 **Llama2-7B**에서 테스트됐다 ([gabriberton](https://twitter.com/gabriberton/status/2011326182986564090); [gabriberton](https://twitter.com/gabriberton/status/2011326193082253413)).

- **DeepSeek “Engram” 메모리 모듈 담론**: DeepSeek + PKU 작업을 두고 “separate thinking from remembering” 접근을 주장하는 트윗이 이어졌다. **MoE (sparse compute)** + **Engram (sparse storage)** 조합으로, 해시 기반 O(1) 룩업으로 n-grams를 찾아 벡터로 가져와 트랜스포머(transformer) 스트림에 융합하는 방식이며, 프리패치(prefetch)/지연시간 은닉(latency hiding), RAM 상주 메모리 테이블 같은 인프라 함의도 거론됐다 ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2011357373772845097); [LiorOnAI](https://twitter.com/LiorOnAI/status/2011468534887469448); code link [LiorOnAI](https://twitter.com/LiorOnAI/status/2011526199420600378)).

- **Mistral “Ministral 3”(소형 모델 레시피)**: 새 기술 보고서 요약에서는 **pruning + distillation**을 강조했다(교사(teacher) 모델을 pretraining/posttraining에 활용, post-training에서 online DPO). 또한 레이어 프루닝(출력/입력 노름 비율), 은닉 차원 프루닝(PCA 회전), FFN 프루닝(게이트드 활성화 점수) 같은 구체적 휴리스틱도 소개됐다 ([eliebakouch](https://twitter.com/eliebakouch/status/2011548952676499480); paper pointer [qtnx_](https://twitter.com/qtnx_/status/2011510403550024087)).

- **멀티모달 RAG 설계**: UniversalRAG는 모달리티(modality) 인식 라우팅(모든 것을 하나의 임베딩 공간으로 몰아넣지 않기)과 모달리티 + 그래뉼러리티(granularity) 축(문단 vs 문서, 클립 vs 전체 영상, 표/이미지)으로의 검색을 제안했다. 훈련 기반 또는 훈련 없이도 가능한 라우팅(프런티어 모델에 프롬프트로 모달리티/그래뉼러리티를 선택하게 하기)과 10개 벤치마크에서의 성과도 보고됐다 ([omarsar0](https://twitter.com/omarsar0/status/2011442693134754243)). 멀티모달 RAG 평가용 ViDoRe V3 벤치마크 논문도 공개됐다 ([antonio_loison](https://twitter.com/antonio_loison/status/2011398238910517249)).

- **벤치마크 취약성(VLMs)**: VPBench는 작은 표현 방식 변화(예: **red vs blue markers**)만으로도 비전-언어 모델(VLM) 리더보드 순위가 재정렬될 수 있다고 주장했다. 리더보드 격차를 견고한 신호로 취급하는 이들에게 참고가 될 만한 내용이다 ([lisabdunlap](https://twitter.com/lisabdunlap/status/2011521499182875116)).

### 제품/조직 동향: “open” 전략과 인재 이동

- **Airbnb가 Meta Llama 리드를 CTO로 영입**: Ahmad Al-Dahle이 Airbnb CTO로 합류한다고 발표했다. 그는 Meta의 Llama 오픈소스화 베팅(**1.2B+ downloads**, **60K+ derivatives**)을 언급하며, Airbnb를 모델 역량 발전을 적용할 제품 프런티어로 프레이밍했다 ([Ahmad_Al_Dahle](https://twitter.com/Ahmad_Al_Dahle/status/2011440460821320056)). 여러 리더가 이 이동을 지지했다 ([sama](https://twitter.com/sama/status/2011490615985414382); [ClementDelangue](https://twitter.com/ClementDelangue/status/2011455261329023329); [markchen90](https://twitter.com/markchen90/status/2011545090737782810)).

- **Thinking Machines Lab / OpenAI 리더십 이동**: Mira Murati가 Barret Zoph가 TML을 떠났고 **Soumith Chintala**가 CTO가 됐다고 밝혔다 ([miramurati](https://twitter.com/miramurati/status/2011577319295692801)). 이후 OpenAI는 Barret Zoph, Luke Metz, Sam Schoenholz가 OpenAI로 복귀한다고 발표했다 ([fidjissimo](https://twitter.com/fidjissimo/status/2011592010881446116); [barret_zoph](https://twitter.com/barret_zoph/status/2011593621435531355)).

- **오픈소스와 “mid-sized orgs”**: HF의 Clement Delangue는 스타트업과 중견 테크 기업이 오픈 사이언스/오픈소스 AI를 실질적으로 전진시킬 수 있다고 주장하며 **fal**과 **Lightricks**의 트렌딩 모델을 예로 들었다. Airbnb의 CTO 영입을 가능한 신호로도 연결했다 ([ClementDelangue](https://twitter.com/ClementDelangue/status/2011477703698895245)). LTX-2는 **1,000,000 HF downloads**를 기념했고 ([ltx_model](https://twitter.com/ltx_model/status/2011432938819252566)), “open distribution”이 이제 성장 채널이라는 메시지를 강화했다.

### Top tweets (by engagement)

- **Gemini “Personal Intelligence” rollout**: Google은 Gmail/Photos/Search/YouTube history 등 Google 앱과 연결하는 방식으로 Gemini 개인화(personalization)를 발표하며, opt-in과 개인정보 보호 제어를 강조했다. Google/Gemini 리더십 계정 전반에서 높은 참여를 끌었다 ([Google](https://twitter.com/Google/status/2011473056921706852); [sundarpichai](https://twitter.com/sundarpichai/status/2011475851670667356); [joshwoodward](https://twitter.com/joshwoodward/status/2011471375521710130)).

- **GPT-5.2-Codex 출시 + 생태계 채택**: API 출시와 Cursor 통합이 참여도가 높은 엔지니어링 트윗에 포함됐다 ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011499597169115219); [cursor_ai](https://twitter.com/cursor_ai/status/2011500027945033904)).

- **“3M lines browser” 장기 호라이즌 에이전트 일화**: 연속적인 에이전트 작업 사례로 널리 공유됐다 ([mntruell](https://twitter.com/mntruell/status/2011562190286045552)).

- **Vercel의 React 성능용 에이전트 evals/skills**: “agent skill”로서의 `react-best-practices`와 평가(evals) 스위트가 높은 참여를 얻었다 ([vercel](https://twitter.com/vercel/status/2011589806250426615)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[M4/M5 Max 128gb vs DGX Spark (or GB10 OEM)](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/)** (Activity: 153): 사용자는 로컬 LLM 추론(inference)을 위해 NVIDIA DGX Spark와 M4 Max(128GB RAM) 탑재 MacBook Pro를 비교하며, 코드 자동완성·리팩토링 같은 코딩 작업을 주 용도로 보고 있다. 대규모 모델 학습(training)보다는 빠르고 신뢰할 수 있는 로컬 추론을 원하며, Apple Silicon 생태계가 Claude Code 같은 클라우드 기반 코딩 어시스턴트를 대체할 수 있는지 여부가 핵심 고려사항으로 제시됐다. Mac의 더 높은 메모리 대역폭이 추론에 유리하다는 점이 언급됐지만, 클라우드 성능과의 격차는 감안해야 한다는 의견도 있었다. 벤치마크에서는 M5가 M4 대비 큰 성능 개선을 보이며, 신형 MacBook Pro 출시 가능성도 거론됐다. 댓글에서는 텍스트 생성(text generation)에서는 Apple Silicon(M3 Ultra 등)이 강하다는 주장과, CUDA 생태계·프레임워크 호환성 측면에서는 NVIDIA가 강점이라는 주장이 맞섰다.
  - M4 Max는 DGX Spark 대비 훨씬 높은 메모리 대역폭을 제공해 추론에 유리할 수 있지만, DGX Spark는 NVIDIA CUDA 호환성 덕분에 대부분의 프레임워크 지원이 더 좋다는 점이 장점으로 언급됐다.
  - M3 Ultra Mac Studio가 순수 텍스트 생성 성능에서는 DGX Spark보다 낫다는 평가가 나왔고, 이는 텍스트 생성에 최적화된 아키텍처 덕분이라고 설명됐다. 반면 DGX Spark는 미세조정(fine-tuning)이나 이미지/비디오 생성 같은 작업에서 더 폭넓은 역량을 제공할 수 있다는 대비도 있었다.
  - DGX Spark는 컴팩트한 크기와 에너지 효율(100W 미만 동작, 10W 수준 유휴)을 장점으로 제시했고 확장성(추가 유닛 연결 가능)도 언급됐다. 다만 대역폭 한계 우려가 제기되며, 일부 작업에서는 Mac Studio 같은 대안만큼 성능이 나오지 않을 수 있다는 의견이 나왔다.

- **[What is the biggest local LLM that can fit in 16GB VRAM?](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/)** (Activity: 103): RTX 5080과 16GB VRAM 환경에서 유용한 컨텍스트 크기를 유지하려면 로컬로 돌릴 수 있는 최대 모델은 대략 `14B` 규모가 현실적이라는 요지가 공유됐다. `GPT-OSS-20B` 같은 모델도 가능할 수 있으나, `4-bit` 이하의 강한 양자화(quantization)가 필요해 품질 저하 가능성이 언급됐다. 최적의 균형점으로는 `14B` 모델이 추천됐고, `30B` 같은 더 큰 모델은 CPU 오프로딩(offloading)이 필요해 VRAM 제약상 실용성이 떨어질 수 있다는 견해가 나왔다.
  - 댓글에서는 `30B` 모델이 강한 양자화로 “가능”하더라도 품질과 컨텍스트 제약 때문에 실사용이 어렵다는 의견이 많았고, 16GB VRAM에서는 `14B`가 더 적절하다는 쪽으로 수렴했다.
  - **SKirby00**는 16GB VRAM에 30B 같은 대형 모델을 넣을 때 `4-bit` 이하 양자화가 필요해 품질이 크게 떨어질 수 있다고 지적했고, 실사용 균형을 위해 14B 수준을 권했다.
  - **BigYoSpeck**는 Ryzen 9 5900x/64GB DDR4/16GB Radeon RX 6800 XT에서의 벤치마크를 공유하며 `gpt-oss-20b`는 120+ tokens/s, `Qwen3 30b`는 일부 CPU 오프로딩으로 40 tokens/s, `gpt-oss-120b`는 32 MOE 레이어를 CPU로 오프로딩해 23 tokens/s 수준이라고 보고했다.
  - **PermanentLiminality**는 컨텍스트 여유를 위해 모델 크기를 VRAM의 80% 미만으로 두라고 조언하며 16GB에서는 13GB 모델이 현실적 한계라고 언급했다. 시스템 RAM으로 넘길 수는 있지만 속도가 크게 떨어지고, `Qwen 3 30B`는 일부 스필오버(spillover)를 비교적 잘 처리할 수 있다고 말했다.

- **[Small AI computer runs 120B models locally: Any use cases beyond portability and privacy?](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)** (Activity: 49): **TiinyAI**가 `80GB RAM`, `30W` 전력으로 `120B` 파라미터 모델을 로컬에서 구동할 수 있는 소형 AI 기기를 개발했다고 소개됐다. 이 기기는 `128GB RAM`과 더 높은 성능을 제공하지만 비용과 크기가 큰 **DGX Spark**의 대안으로, 이동성과 프라이버시가 원시 연산 성능보다 중요한 상황(현장 연구, 인터넷이 불안정한 지역 등)에 잠재적 가치가 있다고 설명됐다. 댓글에서는 메모리 대역폭이 `80Gb/s` 수준일 수 있다는 추정이 나오며 표준 PC/노트북 대비 성능 한계 우려가 제기됐고, 가격·구매 가능성에도 회의적인 반응이 있었다.
  - 핵심 기술 이슈로는 메모리 대역폭이 80Gb/s~200Gb/s 범위로 추정되며, 이 수치가 120B 모델을 효율적으로 돌리는 데 결정적이라는 점이 지적됐다. 대역폭이 낮으면 이동성·프라이버시 외 용도에서 일반 PC/노트북을 능가하기 어렵다는 우려가 나왔다.
  - 가격은 80GB RAM 단일 보드 컴퓨터(SBC) 기준 $1400 정도로 추정됐으나, 즉시 구매 가능성이 낮다는 점이 실현 가능성에 대한 의문으로 이어졌다.
  - 인터넷 차단 상황에서의 복원력(use case)이 언급되며, 권위주의 체제 등에서 인터넷 접근이 제한되거나 감시되는 환경에서는 로컬 AI 도구의 가치가 커질 수 있다는 논점이 제시됐다.

- **[Shadows-Gemma-3-1B: cold start reasoning from topk20 logprob distillation](https://www.reddit.com/r/LocalLLaMA/comments/1qcd9m1/shadowsgemma31b_cold_start_reasoning_from_topk20/)** (Activity: 41): **Shadows-Gemma-1B**는 Google Tunix Hackathon을 위해 `1569 samples`로 TPUv5-8e에서 약 `10 minutes`, A40에서 `20 minutes`에 훈련된 추론(reasoning) 모델로 소개됐다. 비추론 교사 모델 **gemma-3-4b-it**로부터 topk20 logprob distillation을 수행해 *shadow tokens*를 식별하는 접근을 사용했는데, 이 토큰은 낮은 순위에서 초기에 등장했다가 나중에 선택되는 패턴을 보여 백트래킹(backtracking)이나 해 탐색 같은 추론 행위를 시사할 수 있다고 설명됐다. 시스템 프롬프트로 추론을 interleaved하게 유도했으며, 다른 모델 대비 우월함을 주장하진 않지만 복잡한 질문에서 개선된 추론 능력을 보였다고 했다. 손실 함수와 코드 최적화 등 추가 훈련 과정은 추후 post mortem에서 공유 예정이라고 밝혔다.
  - 한 댓글은 교사 모델로 `gemma-12b-it`나 `gemma-27-it` 같은 더 큰 모델을 사용하면 다른 결과가 나올 수 있다며 탐색을 제안했다.
  - 또 다른 댓글은 학습 데이터셋 공개에 관심을 표하며 distillation에 Deep Cogito v2.1이 효과적이었다고 언급했다.
  - 또 다른 댓글은 확률 분포에서 토큰이 얼마나 오래 유지되는지를 추론 깊이의 척도로 보는 접근이 흥미롭다고 언급하며, PyTorch에서 JAX로 전환할 때의 기술적 난점이나 최적화 이슈에 대한 공유도 기대한다고 했다.

- **[Using local VLMs for OCR to feed into an NLP categorization pipeline - looking for beta testers (Loggr)](https://www.reddit.com/r/LocalLLaMA/comments/1qcd8sw/using_local_vlms_for_ocr_to_feed_into_an_nlp/)** (Activity: 10): **Loggr**는 Apple Silicon에서 완전 오프라인으로 동작하는 헬스 저널링 앱을 개발 중이며, 서브-100ms 지연으로 자유형 텍스트에서 구조화된 건강 데이터를 추출하는 커스텀 NLP 파이프라인을 사용한다고 밝혔다. 손글씨 저널을 스캔하는 기능을 통합 중인데, OCR을 위해 `Qwen2.5-VL-3B`를 MLX로 양자화해 `8GB` 통합 메모리에서 돌린다고 했고, `12GB+`가 필요한 `7B` 모델이 지저분한 필기에는 더 낫다고 언급했다. 배치 모드로 밤 사이 처리하며, 빠른 미리보기를 위해 Apple Vision 프레임워크와 하이브리드 접근도 고려 중이라고 했다. 베타 테스터 모집과 추가 정보는 [loggr.info](http://loggr.info)에 안내돼 있다.
  - 댓글에서는 손글씨에 특화된 커스텀 모델을 포함한 PaddleOCR 같은 전문 OCR이 일반 VLM보다 나을 수 있다는 제안이 있었다.
  - 또 다른 추천으로 `Qwen2.5-VL`과 호환되고 더 “smarter”하다는 평가가 있는 [MiMo-VL-7B-RL](https://huggingface.co/XiaomiMiMo/MiMo-VL-7B-RL-2508)을 시험해보라는 의견이 나왔다.
  - 앱이 text-to-speech 기능을 지원할지 궁금해하는 댓글도 있었다.

- **[Google just opensourced Universal Commerce Protocol.](https://www.reddit.com/r/LocalLLM/comments/1qcpoaw/google_just_opensourced_universal_commerce/)** (Activity: 32): Google이 **Universal Commerce Protocol (UCP)**을 오픈소스화하며, 에이전트가 상품 탐색, 장바구니 관리, 결제 처리 같은 이커머스 작업을 자율적으로 수행할 수 있게 한다고 소개됐다. 주요 통합 요소로는 멀티 스텝 워크플로용 **Agent2Agent (A2A)**, 안전한 결제용 **Agents Payment Protocol (AP2)**, vLLM·Ollama 등 기존 LLM 스택과의 통합을 위한 **Model Context Protocol (MCP)**이 언급됐다. 프로토콜은 [GitHub](https://github.com/Universal-Commerce-Protocol/ucp)에 공개돼 있다.
  - 댓글에서는 리테일러 채택 현황이 불확실하다는 점, Google이 장기적으로 지원할지 여부, Gemini와의 통합 로드맵 등에 대한 질문이 나왔다.
  - 또한 UCP가 새로 개발된 것인지, 기존에 있던 것을 오픈소스화한 것인지에 따라 도입 판단이 달라질 수 있다는 논점이 제기됐다.

- **[Would 16k context coding on consumer GPUs make H100s irrelevant for independent devs?](https://www.reddit.com/r/LocalLLM/comments/1qcmv3z/would_16k_context_coding_on_consumer_gpus_make/)** (Activity: 36): 소비자 GPU(예: `NVIDIA 3060`)에서 `16k context window`로 코딩이 가능해지면 독립 개발자에게 H100 같은 하이엔드 GPU의 의미가 줄어들지에 대한 가설이 제기됐다. 토론에서는 `16k context`가 작고, `64k`가 평균, `128k` 또는 `1M`이 크다고 보는 인식이 공유됐으며, `4x3090s`에서 `128k`나 `256k`를 쓰는 사용자도 있지만 로컬 모델은 메모리가 충분해도 `64k` 이후 성능이 저하된다는 경험이 언급됐다. 전반적으로 `16k`는 진지한 개발에는 부족하다는 결론이 많았다.
  - 댓글에서는 Codex와 Claude의 컨텍스트가 각각 290k, 240k이며 Gemini Pro는 1M까지 간다는 비교가 나오면서, `16k`만으로는 고도 개발 워크플로에 큰 영향을 주기 어렵다는 의견이 제시됐다.
  - 또한 컨텍스트를 크게 늘리면 속도가 느려지고, 유의미한 코딩 모델이라면 `16k` 정도는 단순 스니펫이나 자동완성 수준을 넘기 어렵다는 관점이 공유됐다.

### Less Technical Subreddits

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Gemini “Math-Specialized version” proves a Novel Mathematical Theorem](https://www.reddit.com/r/singularity/comments/1qcq1ld/gemini_mathspecialized_version_proves_a_novel/)** (Activity: 553): “math-specialized” Gemini 모델이 새로운 수학 정리를 증명했다고 보고됐으며, 관련 내용은 [tweet](https://x.com/A_G_I_Joe/status/2011213692617285729?s=20)와 함께 [arXiv paper](https://arxiv.org/abs/2601.07222)에 정리돼 있다고 소개됐다. 해당 모델은 기호 계산(symbolic computation)과 정리 증명(theorem proving)에 최적화된 아키텍처·학습을 활용해 수학적 추론을 강화한다는 설명과 함께, AI가 복잡한 수학 문제를 다루는 데 한계가 있다는 인식을 흔들 수 있다는 관점이 제시됐다.
  - 댓글에서는 수학·코딩 영역에서 AI 진전 속도가 빠르다는 점이 언급됐고, 상업적 이해관계가 AI 발전에 미칠 영향에 대한 우려도 나왔다.
  - Gemini를 Erdős 문제에 적용해 벤치마크로 쓰자는 제안이 있었는데, 인간의 방대한 분석이 축적된 문제군이라 AI 수학 역량 평가에 적합할 수 있다는 취지였다.
  - AI의 수학 능력을 아직도 과소평가하는 시각이 있지만, 최근 성과가 이런 회의론에 대한 반론이 될 수 있다는 논의도 있었다.

- **[5.2 Pro makes progress on decades long math problem listed on Wikipedia](https://www.reddit.com/r/OpenAI/comments/1qco4d7/52_pro_makes_progress_on_decades_long_math/)** (Activity: 278): 트윗 이미지를 통해, **Archivara**가 AI 모델 **5.2 Pro**를 사용해 Moser’s worm problem의 새로운 수치 상한(upper bound)을 제시했다고 소개됐다. 타원 궤적(ellipse-locus) 구성 파라미터를 재최적화해 universal cover 면적을 `0.260069597`로 낮춰 2018년 기록(`0.26007`)을 넘어섰고, **INRIA** 수학자가 검증했다고 한다. 이는 적절한 도구·유도(prompt steering)가 결합되면 AI 모델이 복잡한 수학 문제에서도 진전을 만들 수 있음을 시사한다는 관점이 덧붙었다.
  - 댓글에서는 AI가 미해결 문제에 쉽게 “불가능”이라며 포기하는 경향이 있는데, 큐레이션된 도구와 문헌, 스캐폴딩(scaffolding) 개선으로 이를 극복했다고 설명했다.
  - 또 한 전략으로 인터넷 접근을 끄면 모델이 온라인 검색으로 “못 푼다”는 결론을 내리는 것을 막고, 장시간 자체 추론을 유도할 수 있다는 경험담이 공유됐다.
  - 한 사례로 Linux 시스템을 계속 켜두는 방법을 요청했을 때 정책 위반을 이유로 거부한 일이 언급되며, 비즈니스 상황에서 윤리 가이드라인과 사용자 자율성 사이의 균형 문제가 남아 있다는 지적도 나왔다.

- **[[P] my shot at a DeepSeek style moe on a single rtx 5090](https://www.reddit.com/r/MachineLearning/comments/1qcxhgw/p_my_shot_at_a_deepseek_style_moe_on_a_single_rtx/)** (Activity: 64): 단일 RTX 5090에서 top-2 라우팅으로 `2.36B parameters`, `8 routed experts`를 갖는 MoE 모델을 구현한 개인 프로젝트가 공유됐다. Grouped Query Attention(QK-normalization), RoPE positional embeddings, SwiGLU + RMSNorm를 사용했고, 학습은 `TorchAO FP8 quantization`, Muon 옵티마이저, 다단계 학습률 스케줄을 활용했다. 데이터 파이프라인은 MeCo에서 클린 코퍼스로 전환했으며, 라우터 초기화와 dense 첫 레이어 부재로 불안정성이 발생했다는 회고가 있었다. 작은 MoE에서는 라우터 스케일링(1.2)이 불안정성을 유발할 수 있어 피하라고 조언했고, `3e-4` 학습률에서 손실이 `1.9`, 처리량은 `19,415 tok/s`라고 했다.
  - 댓글에서는 정식 ML 트레이닝 없이도 안정성과 운영 디테일에 집중한 점을 높게 평가하며, 개인 학습을 넘어 배포·디스틸레이션 같은 실용적 응용 가능성도 질문했다.
  - 작은 MoE에서는 대규모 설정에서 쓰는 기법이 통하지 않는 경우가 많아 실패 모드 추적이 어렵다는 점, dense 첫 레이어와 대칭 초기화가 중요하다는 교훈, 단일 GPU 제약에서 얻은 인사이트가 더 큰 시스템에도 전이될지에 대한 논의가 있었다.

- **[[R] Controlled LLM Training on Spectral Sphere](https://www.reddit.com/r/MachineLearning/comments/1qcq27u/r_controlled_llm_training_on_spectral_sphere/)** (Activity: 17): 논문은 **Spectral Sphere Optimizer (SSO)**를 제안하며, 가중치와 업데이트 모두에 스펙트럼 제약을 걸어 안정성과 수렴을 개선하고 Maximal Update Parametrization(*mu*P)과 정합된다고 주장한다. SSO는 **Megatron**에서 병렬 알고리즘으로 구현됐고 Dense 1.7B, MoE 8B-A1B 등 사전학습(pretraining)에서 **AdamW**와 **Muon**보다 우수하다고 보고됐다. 최대 특이값(max singular value)을 제한하는 접근이 MoE 라우터 로드 밸런싱 개선과 activation bounded에 도움을 준다고 설명했다.
  - 한 댓글은 SSO의 제약이 모든 특이값을 1로 맞추는 Stiefel manifold보다 느슨하며, SSO는 최대 특이값만 제약한다는 점을 짚었다.
  - 또 다른 댓글은 유사한 기법에서 NorMuon 변형(직교화 후 row-wise로 업데이트를 재정규화)이 높은 학습률과 배치 크기 스케일링에 도움이 됐다는 경험을 공유했다.
  - 폭주하는 activation 문제를 막기 위해 레이어마다 가중치를 단위 구(sphere)에 투영하는 시도를 했지만 수렴이 걱정돼 포기했다는 과거 경험도 공유되며, 현재 논의가 흥미롭다는 반응이 있었다.

- **[Claude PRO is too little, Claude MAX is too much for me](https://www.reddit.com/r/ClaudeCode/comments/1qcg4fp/claude_pro_is_too_little_claude_max_is_too_much/)** (Activity: 139): 사용자는 `Claude PRO`는 부족하고 `Claude MAX`는 과하다고 느끼며, `$40-$50` 정도의 중간 플랜이 없다는 점을 문제로 제기했다. 우회책으로 `Claude PRO` 계정을 2개 운영하는 방법을 고려했지만, 데스크톱 앱에서 계정 전환이 번거롭고 대화 컨텍스트 손실·토큰 낭비가 생길 수 있다고 우려했다.
  - **AriyaSavaka**는 GLM Codling Pro 플랜을 제안하며, `$12/month`로 `$100` Claude Max 플랜 대비 `3x` 사용량을 제공하고 주간 제한도 없다고 언급했다.
  - **AdrianPlaysPoE**는 ‘Extra Usage’ 옵션에서 spending cap을 설정하면 커스텀 플랜처럼 쓸 수 있다고 했고, 예로 `$20-30` 캡을 두면 `$50` 수준의 구독처럼 운용할 수 있다고 제안했다.
  - **marrone12**는 OpenAI’s Codex를 언급하며, `$20` 플랜이 Claude 대비 훨씬 더 많은 사용량을 제공할 수 있다고 말했다.

- **[Work too cheap for Claude subscription](https://www.reddit.com/r/ClaudeCode/comments/1qcir01/work_too_cheap_for_claude_subscription/)** (Activity: 122): 한 소프트웨어/AI 엔지니어가 `2 million line` 코드베이스를 ‘AI ready’로 개편하는 일을 하며, 대규모 리팩토링에서는 GitHub Copilot의 한계를 느꼈다고 했다. 개인 프로젝트에서는 **Claude Opus 4.5**와 **Claude Code**를 Copilot보다 효과적으로 보지만, 회사에서는 Claude Code 도입에 대한 경영진 저항이 있어 Copilot만 쓰도록 요구받는다고 주장했다. 사용자는 Claude 구독 비용(`$200/month`)이 시간 절감 대비 작다고 보지만, 경영진이 AI 도구 역량 차이를 이해하지 못한다는 불만이 담겼다.
  - **Downtown-Pear-6509**는 Claude Code가 `$150usd/m`이며 ‘max x3’에 해당하고 ‘max x5’가 아니라는 정정을 공유하며, 구독 티어에 대한 혼선이 있음을 지적했다.
  - **flackjap**은 Copilot과 Codex 같은 여러 모델을 조합해(예: 한 모델로 코드 작성, 다른 모델로 코드 리뷰) 계획 단계에서 빈틈과 위험을 더 빨리 찾는 전략이 중요하다고 강조했다.
  - **Michaeli_Starky**는 OpenCode가 Copilot 구독으로도 동작하고, ‘agentic harness and context management’ 측면에서 Claude와 비슷하다고 언급했다.

- **[Figured out why /compact loses so much useful context - and a potential fix](https://www.reddit.com/r/ClaudeCode/comments/1qcjwou/figured_out_why_compact_loses_so_much_useful/)** (Activity: 105): 이미지에서는 Claude Code의 컨텍스트 윈도우를 최적화하기 위해 메시지를 요약·추출해 토큰 사용을 60-70% 줄일 수 있다는 제안이 설명됐다. 현재 `/compact`는 서버 측 요약으로 원본 내용을 영구적으로 잃게 만들 수 있는데, 제안된 해결책은 compact 전에 원문을 로컬 파일에 저장하고 요약과 파일 참조로 컨텍스트를 대체해, 필요 시 특정 메시지를 선택적으로 복원할 수 있게 하자는 것이다. 이는 Cursor의 “dynamic context discovery”(긴 툴 응답을 파일에 써서 나중에 회수) 방식에서 영감을 받았다고 한다.
  - 댓글 일부는 Claude Code가 롤백 기능이 있음에도 왜 기본 지원이 없는지 의아해했으며, compaction 없이 세션 컨텍스트를 관리하는 비슷한 도구/방법을 이미 만든 사용자도 있었다.
  - **SatoshiNotMe**는 Claude-code-tools 리포지토리의 ‘rollover’ 옵션을 언급하며, 새 세션을 시작할 때 원 세션 경로를 주입해 언제든 임의의 세부사항을 복구할 수 있다고 설명했다. Rust/Tantivy 기반 고속 전체 텍스트 검색과, 사람용 TUI 또는 에이전트용 CLI/JSON 모드도 포함된다고 했다.
  - **n3s_online**는 컨텍스트 윈도우를 효과적으로 관리하는 것이 중요하다고 강조하며, 각 작업을 빈 컨텍스트에서 시작해 필요한 맥락만 쌓고 실행 전에 작업을 더 작은 서브태스크로 쪼개 컨텍스트에 맞추자고 제안했다. 또한 Beads나 SpecKit 같은 도구를 ‘memory layer’로 써서 계획과 실행을 돕고, 매번 컨텍스트를 수동으로 세팅하지 않도록 하자는 의견을 냈다.
  - **helldit**는 요약 출력이 전체 히스토리 JSONL이 로컬에 저장된 위치를 알려주며, 필요 시 전체 대화 기록에 접근할 수 있다는 점을 강조해 “서버에서 영구 손실”이라는 오해를 바로잡았다.

---

## AI Discord Recap

gpt-5가 작성한 “Summaries of Summaries” 요약

### 새로운 멀티모달 및 비디오 모델

- **GLM-Image Goes Hybrid, Nails Text**: **Zai**가 **GLM-Image**를 출시했다. 고충실도 디테일과 강한 텍스트 렌더링에 초점을 둔 오픈소스 하이브리드(autoregressive + diffusion) 이미지 모델이며, 코드는 [GLM-Image (GitHub)](https://github.com/zai-org/GLM-Image), 글은 [GLM-Image: Hybrid AR + Diffusion](https://z.ai/blog/glm-image)에 공개됐다.

- 커뮤니티에서는 **text rendering**과 지식 집약 태스크에서의 장점, 그리고 I2I 도구(편집, 스타일 트랜스퍼, 아이덴티티 보존, 멀티 서브젝트 일관성)를 언급하며 실무(production) 후보로 평가했다.

- **Veo 3.1 Upscales Like a Boss**: Google의 **Veo 3.1**이 네이티브 포트레이트 모드, 사용자 사진 기반 image-to-video, **1080p/4K upscaling**을 **Gemini**, **YouTube**, **Google AI Studio** 전반에 추가했다는 소식이 Tulsee Doshi를 통해 공유됐다: [Veo 3.1 updates](https://x.com/tulseedoshi/status/2011174465720430612).

- 빌더들은 모바일 퍼스트 스토리텔링 관점과 더 높은 충실도 출력을 위한 파이프라인이 매끈해졌다는 점을 긍정적으로 평가했고, 기존 **Gemini** 및 **Studio** 워크플로에 자연스럽게 들어맞는 업그레이드라고 봤다.

- **LTX-2 Drops 20s 4K Open-Source Clips**: **LTX-2**가 오디오 포함 최대 **20 seconds**의 **4K** 클립을 생성할 수 있는 오픈소스 비디오 모델로 소개됐고, 데모는 여기서 공유됐다: [LTX-2 open-source video model](https://x.com/venturetwins/status/2010878914273697956).

- 크리에이터들은 LTX-2를 시네마틱 샘플과 실험을 위한 커뮤니티 친화적 베이스라인으로 보며, 길이 확장, 프롬프트 가능성(promptability), 오디오 정렬(alignment) 개선에 대한 기대를 나타냈다.

### 벤치마크와 리더보드

- **ERNIE Earns Its Stripes on Text Arena**: `ERNIE-5.0-0110`이 [Text Arena leaderboard](https://lmarena.ai/leaderboard/text)에서 **#8 (1460)**, Arena Expert에서 **#12**를 기록했으며, Top 10에 오른 첫 중국 모델로 소개됐다. **Math** 및 직업(occupational) 카테고리에서 강점을 보였다고 하며, 자세한 내용은 [Leaderboard Changelog](https://news.lmarena.ai/leaderboard-changelog/)를 참조하라고 했다.

- 참가자들은 ERNIE의 카테고리별 강점과 평가 모드 전반의 일관성을 언급하며, 향후 추가 학습이 순위를 더 끌어올릴지 관찰했다.

- **SlopCodeBench Shames Sloppy Agents**: SprocketLab이 [SlopCodeBench](https://github.com/SprocketLab/slop-code-bench)를 공개하며, 체크포인트로 나뉜 대규모 프로그래밍 작업에서 에이전트가 초기에 나쁜 설계 결정을 내리고 단순화 후에도 일반화에 실패하는 모습을 보여준다고 소개했다.

- 연구자들은 ICLR 워크숍 제출 가능성을 논의했고, 괜찮은 에이전트 코딩 성능을 위해 과도한 프롬프트 스캐폴딩이 필수여야 하는지에 대한 문제 제기가 있었다. 순진한(naive) 프롬프트가 더 저렴했지만 여전히 성능이 부족했다는 의견도 나왔다.

- **Arena Adds Models: Lights, Code, Action!**: LM Arena가 [Video Arena](https://lmarena.ai/c/new?chat-modality=video)에 비디오 변형(veo-3.1-audio-4k, veo-3.1-audio-1080p, veo-3.1-fast-audio-4k, veo-3.1-fast-audio-1080p)을 추가했고, [Code Arena](https://lmarena.ai/c/new?chat-modality=code)에는 **gpt-5.2-codex**, [Image Arena](https://lmarena.ai/c/new?chat-modality=image)에는 **glm-image**를 추가했다고 한다.

- 사용자들은 멀티모달 추론과 코드 합성에서의 정면 비교가 더 날카로워질 것으로 기대했으며, OCR·레이아웃 이해·견고성(robustness)에서 신규 모델이 메타(meta)를 바꿀지 추적하고 있다.

### 시스템 및 컴파일러 툴링

- **FP8 Primer Powers TransformerEngine Talk**: 엔지니어들이 NVIDIA의 FP8 노트북 [TransformerEngine FP8 primer](https://github.com/NVIDIA/TransformerEngine/blob/main/docs/examples/fp8_primer.ipynb)를 공유하며, 현재의 **FP8**과 2026년 즈음 가능한 **NVFP4** 학습 지원에 대해 논의했다.

- 스레드에서는 FP 포맷과 장문맥(long-context) 동작, 어텐션 희석(attention dilution)과의 관계, 안정성 vs 처리량(throughput) 트레이드오프를 놓고 의견을 교환했다.

- **Helion Hooks Flex Attention and Overbooks SMs**: [Helion 0.2.10](https://github.com/pytorch/helion) 릴리스는 flex attention 예제 커널을 포함했고, 지속(persistent) 커널에서 **SM oversubscription**을 지원하며 softmax oversub 그래프도 공유했다: [oversubscription perf](https://cdn.discordapp.com/attachments/1425531180002054195/1460722396888563868/get_attachment_url.png).

- GPU 엔지니어들은 커널 동작과 스케줄링 트레이드오프를 파고들었고, oversubscription이 블록과 시퀀스 길이에 따라 워크로드가 출렁일 때(utilization jitter) 활용률을 매끄럽게 만들 수 있다는 점을 언급했다.

- **AOT Inductor Gets a Fresh Look**: 개발자들이 PyTorch의 [Ahead-of-Time Inductor docs](https://docs.pytorch.org/docs/stable/torch.compiler_aot_inductor.html)를 다시 공유하며, 컴파일 전략을 단순화하고 런타임 오버헤드를 줄이는 방법을 논의했다.

- 대화는 그래프를 언제 고정(freeze)할지, 언제 동적 경로를 유지할지, AOT가 혼합 파이프라인에서 Triton과 CUDA 커널을 어떻게 보완하는지에 초점이 맞춰졌다.

### 데이터셋 및 데이터 엔지니어링

- **Purified Prose Puts Noise on a Diet**: 개선된 프루닝(pruning) 스크립트가 Python 휴리스틱과 **MTLD**, 단어 다양성 같은 지표로 수학/코드를 필터링해 영어 전용 고품질 데이터셋을 만들었다고 소개됐다: [Hermes-3-Dataset-enPurified](https://huggingface.co/datasets/enPurified/Hermes-3-Dataset-enPurified-openai-messages), [tulu-3-sft-mixture-enPurified](https://huggingface.co/datasets/enPurified/tulu-3-sft-mixture-enPurified-openai-messages), [project_gutenberg-enPurified](https://huggingface.co/datasets/enPurified/project_gutenberg-enPurified-openai-messages).

- 실무자들은 더 깨끗한 산문(prose) 분포가 SFT/CPT에 유용하다고 평가했으며, 이 접근이 다른 언어에도 재사용 가능하고 지시(instruction) 트레이스에서의 스푸리어스 패턴을 줄인다고 말했다.

- **Audioform Dataset Paints Sound in Frames**: [audioform_dataset](https://huggingface.co/datasets/webxos/audioform_dataset)는 WAV 오디오를 타임스탬프 기반 비주얼 프레임으로 변환하고, Three.js 도구 AUDIOFORM으로부터 프레임별 메타데이터(예: **dominant frequency**, **timestamp**)를 포함한다.

- 연구자들은 이를 오디오-투-비주얼 멀티모달 ML의 *“Hello World”*로 부르며, 시간 정렬(temporal alignment)과 특성 융합(feature fusion) 파이프라인을 점검하는 데 쓴다고 했다.

### 인프라 및 생태계 동향

- **OpenAI Teams with Cerebras to Scale Compute**: OpenAI가 Cerebras와의 전략적 컴퓨트 파트너십을 발표했다: [OpenAI x Cerebras partnership](https://openai.com/index/cerebras-partnership/).

- 관측자들은 이 타이밍을 다른 하드웨어 제휴에 대한 대응으로 해석하며, 대규모 사전학습과 추론 클러스터에서 더 빠른 반복(iteration)이 가능해질지 주목했다.

- **Chutes Chooses TEE for Verifiable Inference**: **Chutes**가 검증 가능한 프라이버시를 위해 AI 추론에서 **Trusted Execution Environment (TEE)** 아키텍처로 전환한다고 밝혔다: [Confidential compute for AI inference](https://chutes.ai/news/confidential-compute-for-ai-inference-how-chutes-delivers-verifiable-privacy-with-trusted-execution-environments).

- OpenRouter 사용자들은 공급자(provider) 리스트 조정 가능성(e.g., R1 0528)도 언급하며, 벤더들이 TEE 제약과 어테스테이션(attestations)에 맞춰 적응할 수 있다고 봤다.

- **OpenRouter Goes OSS and Crowdsources Apps**: OpenRouter 팀이 [awesome-openrouter](https://github.com/OpenRouterTeam/awesome-openrouter)와 [openrouter-apps](https://github.com/OpenRouterTeam/openrouter-apps)를 공개하며 커뮤니티 기여와 앱 쇼케이스를 독려했다.

- 파라미터·제공업체 전반의 마찰을 줄이기 위해 PR(예: JanitorAI)을 요청했고, 커버리지와 예시를 늘리려는 의도가 강조됐다.
