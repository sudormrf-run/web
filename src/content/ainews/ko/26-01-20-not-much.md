---
title: "X가 ‘For You’ 추천 알고리즘을 오픈소스 공개"
summary:
  - "X가 ‘For You’ 추천 알고리즘을 오픈소스 공개"
  - "OpenAI가 ChatGPT 연령 예측을 전 세계 적용"
  - "GLM-4.7-Flash 로컬 추론(inference) 주목"
  - "Liquid AI가 900MB 온디바이스 추론 모델 공개"
  - "Microsoft가 내부 Claude Code 배포를 일시 중단"
date: 2026-01-20
originalUrl: "https://news.smol.ai/issues/26-01-20-not-much/"
hasHeadline: false
headline: "X가 ‘For You’ 추천 알고리즘을 오픈소스 공개"
tags:
  - X
  - OpenAI
  - GLM-4.7-Flash
  - Microsoft
  - MCP
isFeatured: false
---

## 헤드라인: X가 ‘For You’ 추천 알고리즘을 오픈소스 공개

X가 랭킹/추천 스택을 오픈소스로 공개하면서, 커뮤니티가 시스템 다이어그램을 빠르게 역분석했고 동시에 크리에이터들은 노출 감소 등 운영/UX 불만을 제기했다.

X는 “xAI의 Grok 모델과 같은 트랜스포머(transformer) 아키텍처”로 구동된다고 소개하며 GitHub에 코드를 공개했다 ([XEng](https://twitter.com/XEng/status/2013471689087086804)). 공개 직후 “이제 누구나 대형 플랫폼 알고리즘이 어떻게 작동하는지 ‘물어볼’ 수 있다” 같은 낙관적 반응([David Holz](https://twitter.com/DavidSHolz/status/2013522548642980290))과 “내가 고친다” 같은 적대적 반응([Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2013501949333905919))이 함께 나왔다. 시스템 다이어그램을 바탕으로 후보 생성(candidate generation) 분리, “콘텐츠 특징(content features) 없음”, 네트워크 밖(out-of-network) 콘텐츠 발견에 대한 강한 강조 등이 요약됐고([nearcyan](https://twitter.com/nearcyan/status/2013527283399545064)), ‘트랜스포머를 쓴다’는 설명이 Grok이 “모든 게시물을 읽는다”는 식으로 과장됐다는 회의론([nearcyan](https://twitter.com/nearcyan/status/2013527810946519375))과 팔로잉 피드에서 “generic slop”으로의 제품 드리프트가 인센티브의 예측 가능한 결과라는 평가([nearcyan](https://twitter.com/nearcyan/status/2013528777360298082))도 이어졌다. 한편 크리에이터들은 “reach is nuked”라며 갑작스런 도달(리치) 감소를 호소해([giffmana](https://twitter.com/giffmana/status/2013509540843606156)), 투명성이 곧 공정성으로 이어지지 않는다는 긴장을 드러냈다.

---

## AI Twitter Recap

### 플랫폼 알고리즘 오픈소스: X “For You” 추천기 공개

- **X Engineering open-sources the X algorithm (Grok-style transformer recommender)**: X는 랭킹/추천 스택인 “새 알고리즘을 오픈소스화했다”고 밝히며, “xAI의 Grok 모델과 같은 트랜스포머 아키텍처”로 구동된다고 설명했고 GitHub에 코드를 공개했다 ([XEng](https://twitter.com/XEng/status/2013471689087086804)). 공개 직후 커뮤니티 반응은 낙관(“이제 누구나 대형 플랫폼 알고리즘이 어떻게 작동하는지 ‘물어볼’ 수 있다”)([David Holz](https://twitter.com/DavidSHolz/status/2013522548642980290))과 적대(“내가 고친다”)([Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2013501949333905919))가 동시에 나왔다.

- **Early reverse-reading of the system diagram**: 한 요약은 상위 수준 아키텍처가 놀랍지 않다고 보며, **candidate generation isolation**, “no content features”, **out-of-network discovery**에 대한 강한 강조를 꼽았다 ([nearcyan](https://twitter.com/nearcyan/status/2013527283399545064)). 또 “트랜스포머를 쓴다”는 말이 Grok이 “모든 게시물을 읽는다”는 식으로 과장 판매(oversold)된다는 회의론도 제기됐다 ([nearcyan](https://twitter.com/nearcyan/status/2013527810946519375)). 다른 메타 관점으로는 “following feed”에서 “generic slop”으로의 제품 드리프트가 인센티브의 예측 가능한 결과라는 해석이 나왔다 ([nearcyan](https://twitter.com/nearcyan/status/2013528777360298082)).

- **Operational/user impact narrative**: 코드 공개와 동시에 크리에이터들은 갑작스러운 노출(리치) 억제에 대해 “reach is nuked”라고 불평했고([giffmana](https://twitter.com/giffmana/status/2013509540843606156)), 알고리즘 투명성이 자동으로 ‘체감 공정성’으로 이어지지 않는다는 엔지니어링/UX 긴장을 다시 부각했다.

### 오픈 웨이트와 로컬 추론(inference): GLM-4.7-Flash 모멘텀과 KV-cache 현실

- **GLM-4.7-Flash becomes the “local workhorse” candidate**: 여러 트윗이 **GLM-4.7-Flash (30B-A3B)**의 파라미터 대비 성능을 강조했다. 벤치마크와 체감 평가가 더 큰 로컬 기본값을 대체할 정도로 경쟁력이 있다는 주장도 나왔다 ([sam_paech](https://twitter.com/sam_paech/status/2013476096269000763)). Unsloth는 **200K 컨텍스트**, **SWE-Bench 및 GPQA에서 최고 30B** 주장, “**24GB RAM**으로 로컬 실행”과 GGUF 패키징까지 포함한 “run locally” 내러티브를 밀었다 ([UnslothAI](https://twitter.com/UnslothAI/status/2013482180564132092)).

- **Systems detail: MLA / KV-cache cost dominates**: GLM-4.7-Flash 관련 스레드에서는 **KV cache memory**가 예상보다 빨리 병목이 될 수 있고, **MLA가 공짜가 아니다**(MLA 모델을 순진한(naïve) MHA 방식으로 돌리면 캐시 사용량이 폭증할 수 있음)라는 점이 강조됐다 ([teortaxesTex](https://twitter.com/teortaxesTex/status/2013626183330439348)). 또 한 가지 구체적인 디버깅 질문으로, vLLM이 naïve MHA에서 GLM-4.7-Flash의 컨텍스트 비용을 ~**1MB/token**으로 보여주는 이유(반면 1원리(first principles) 기반 주장치는 **~54KB**)가 제기됐다 ([teortaxesTex](https://twitter.com/teortaxesTex/status/2013467545882235256)).

- **Quantization behavior & mitigation**: Unsloth는 양자화(quantization)된 GLM-4.7-Flash에서 **looping 이슈**를 보고하며 **`--dry-multiplier 1.1`** 튜닝, 더 고품질 퀀트(예: **UD-Q4_K_XL+**) 사용, 캘리브레이션(calibration) 중 **tool-calling 데이터 추가** 등을 제안했다 ([danielhanchen](https://twitter.com/danielhanchen/status/2013496370880008395)).

- **Local throughput engineering**: exo labs는 4× M4 Pro Mac Mini에서 RDMA over Thunderbolt + MLX 백엔드로 **tensor parallel GLM-4.7-Flash**를 구동해 **~100 tok/s**를 달성했고 목표는 **~200 tok/s**라고 밝혔다 ([alexocheema](https://twitter.com/alexocheema/status/2013694573910937980)).

- **GLM ecosystem spillover**: 가벼운 신호지만, dev들이 로컬에서 작은 프로젝트를 “one-shotting”하고 있다는 사례(예: Claude Code + Ollama로 GLM-Flash를 돌려 마리오 게임 제작)가 공유됐다 ([nopmobiel](https://twitter.com/nopmobiel/status/2013530965516173448)). 또한 GLM-Image가 해당 시점 스냅샷에서 오픈 모델 중 이미지 리더보드 #8에 올랐다 ([arena](https://twitter.com/arena/status/2013783860023062990)).

### 추론 및 학습 연구: societies of thought, multiplex tokens, distillation, 컴퓨트 배분

- **“Societies of Thought” as the mechanism behind reasoning traces**: 널리 공유된 Google AI 논문 요지로, 추론 모델(OpenAI o-series, DeepSeek-R1, QwQ)의 성능은 단순히 “더 오래 생각”이 아니라 **내부 토론 패턴**(단계 검증, 대안 탐색, 불일치, 수렴)의 출현이 정확도 향상을 매개하며, 이 매개 효과가 장점의 **20%+**를 설명한다는 주장이 소개됐다 ([rohanpaul_ai](https://twitter.com/rohanpaul_ai/status/2013431689889095767)).

- **Multiplex Thinking (branch-and-merge tokens)**: “Multiplex Thinking” 논문은 불확실성에 따라 적응적으로, 한 스텝마다 **K 토큰을 샘플링해 하나의 multiplex token**으로 묶는(branch-and-merge) 방식을 제안한다. 확신이 큰 스텝은 CoT처럼 동작하고, 불확실할 때는 여러 경로를 함께 표현해 **더 짧은 시퀀스**로 더 나은 결과를 낸다고 한다 ([HuggingPapers](https://twitter.com/HuggingPapers/status/2013524300800627119), [akhaliq](https://twitter.com/_akhaliq/status/2013629394804179422)).

- **Distillation via logistic/ranking loss**: KL/SFT 대신, teacher의 top-K logits에서 채굴한 토큰 쌍에 대해 로지스틱(logistic) 로스로 **teacher 토큰 랭킹을 보존**하도록 student를 학습시키는 아이디어가 소개됐다. ‘깔끔한 PyTorch 연습’으로 프레이밍되며 DistillKit도 함께 링크됐다 ([cwolferesearch](https://twitter.com/cwolferesearch/status/2013468452774645876), [cwolferesearch](https://twitter.com/cwolferesearch/status/2013468538728513634)).

- **Synthetic reasoning data: “sample more, not bigger”**: DeepMind 결과 요약에서는 **compute-matched sampling**(동일 연산량 조건)에서 작은 모델이 더 좋은 합성 추론 데이터를 만들 수 있다고 주장했다. 더 저렴한 모델이 더 많은 시도를 생성해 **coverage**(+11%)와 **diversity**(+86%)를 높이고, 동일한 추론 예산에서 학습 성능이 최대 **31.6%**까지 개선된다고 보고됐다 ([LiorOnAI](https://twitter.com/LiorOnAI/status/2013582631124771104)).

- **RL compute scaling guidance**: 별도 RL-on-LLMs 스레드에서는 LLM RL에서 **최적 컴퓨트 배분이 예측 가능하게 스케일링**하며, RL 미세조정 예산에 대한 사전학습 스케일링 법칙(scaling laws)에 해당하는 ‘빠진 등가물’을 제공하려 한다고 주장했다 ([ChengZhoujun](https://twitter.com/ChengZhoujun/status/2013686575499223474)).

- **NanoGPT “speedrun” optimization**: 새로운 NanoGPT speedrun 기록 **~99.3s**가 공유됐는데, **bigram hash embedding**을 매 레이어 전 잔차 스트림(residual stream)에 추가하는 방식( Hash Embeddings 및 DeepSeek Engram에서 영감)과 Chinchilla 노름에서 벗어난 토큰/파라미터 비율이 포인트로 언급됐다 ([classiclarryd](https://twitter.com/classiclarryd/status/2013520088297558274)).

### 프로덕션 에이전트: RLM, 트레이스 분석, “boring agents”, 에이전트 프레임워크

- **Recursive Language Models (RLMs) as compute/context management**: 여러 트윗이 RLM을 장기 실행(long-running) 시스템을 위한 유망한 추상화로 보며, 단순히 “더 큰 컨텍스트”가 아니라 **계산(computation), 재귀(recursion), 선택적 읽기(selective reading)**를 관리하는 방법으로 프레이밍했다 ([doesdatmaksense](https://twitter.com/doesdatmaksense/status/2013534540300722278)). 핵심 장점으로 **symbolic recursion**이 거론됐는데, 모델이 중간 과정을 전부 토큰으로 내보내지 않고도 다수의 서브 읽기/편집을 ‘의뢰’할 수 있어 서브에이전트 프롬프팅에서 흔한 컨텍스트 윈도우 폭발을 피할 수 있다는 주장이다 ([lateinteraction](https://twitter.com/lateinteraction/status/2013662243167088776), [lateinteraction](https://twitter.com/lateinteraction/status/2013663944066379841)).

- **Trace understanding becomes a first-class product requirement**: LangChain은 하루 **100K+ 트레이스** 규모에서는 기존 모니터링/수동 로그 리뷰가 작동하지 않으므로, “Insights Agent”로 트레이스에 대한 **클러스터링/패턴 발견**이 필요하다고 주장했다 ([LangChain](https://twitter.com/LangChain/status/2013642970944413905), [hwchase17](https://twitter.com/hwchase17/status/2013662250167652491)). 또 실무자들은 evals가 유닛 테스트(unit tests)처럼 유용하지만 한계가 있고, 프로덕션 트레이스가 ‘unknown unknowns’를 드러낸다고 강조했다 ([samecrowder](https://twitter.com/samecrowder/status/2013696879083634789)).

- **Agent “swarm fallacy” and structured execution**: AI21은 병렬 에이전트가 읽기 전용(read-only)일 때는 쉽지만, 파일을 변경하거나 현실 세계에서 행동하는 순간 조율/일관성이 어려워진다고 보며 “그냥 에이전트를 더 붙이는 것”보다 **구조화된 실행(structured execution)**과 **test-time compute**를 주장했다 ([AI21Labs](https://twitter.com/AI21Labs/status/2013582278845440055)).

- **Framework/tooling churn & interoperability**: Artificial Analysis는 Stirrup을 browser-use 및 Open Responses 호환(프로바이더 중립(provider-agnostic) 에이전트 클라이언트)으로 업데이트했다 ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2013612928117940293)). CopilotKit은 LangChain “Deep Agents”를 위한 프론트엔드 미들웨어(human-in-the-loop, generative UI, shared state)를 추가해 에이전트 백엔드를 풀스택 앱으로 옮길 수 있게 했다 ([CopilotKit](https://twitter.com/CopilotKit/status/2013636626623443110)). FastMCP도 “차세대 MCP 애플리케이션”을 위한 대규모 재구성을 출시했다 ([jlowin](https://twitter.com/jlowin/status/2013651883647209520)).

- **Pragmatic “agents work if your codebase isn’t a mess”**: AI 코딩 도구는 기존 엔지니어링 위생(테스트/문서 등)을 증폭한다는 휴리스틱이 공유됐다. 테스트/문서가 있는 팀은 더 빨리 나아가지만, 어수선한 코드베이스는 더 빨리 어수선해진다는 것 ([svpino](https://twitter.com/svpino/status/2013608715933581586)). 엔터프라이즈 도입 측면에서는 2년차 이상 구매자들이 ROI를 재평가하고, “worst engineers have the biggest AI bills”라는 말과 함께 버그가 더 많은 코드를 낸다는 지적도 나왔다 ([TheEthanDing](https://twitter.com/TheEthanDing/status/2013465333714055670)).

### 소형 모델 및 엣지 배포: 온디바이스 추론, 브라우저 음성, OCR, Jetson CLIP

- **Liquid AI’s LFM2.5-1.2B-Thinking**: Liquid는 온디바이스 추론(on-device reasoning) 모델을 공개하며 **간결한 추론 트레이스**와 **~900MB 메모리 풋프린트**(휴대폰급 하드웨어)를 강조했다. 도구 사용(tool use), 수학, 지시사항 수행(instruction-following) 등을 내세웠다 ([liquidai](https://twitter.com/liquidai/status/2013633347625324627), [maximelabonne](https://twitter.com/maximelabonne/status/2013631295172084168)). Ollama도 빠르게 모델 라이브러리에 추가했다 ([ollama](https://twitter.com/ollama/status/2013711111590150590)).

- **Kyutai voice model in-browser**: 순수 JavaScript + WebGPU(jax-js)로 브라우저에서 **~100M 파라미터** 음성 모델을 돌리는 데모가 공유됐다. 의존성 마찰이 낮고 실용적인 보이스 클로닝(voice cloning) 유연성을 강조했다 ([ekzhang1](https://twitter.com/ekzhang1/status/2013455049175748791)).

- **OCR and document agents continue to get cheaper**: LightOn은 Apache-2.0으로 **1B OCR 모델**을 공개하며 속도/비용(예: “< $0.01 per 1k pages”)을 주장했고, day-0 transformers 지원도 언급했다 ([mervenoyann](https://twitter.com/mervenoyann/status/2013577704419819942)). 별도로, “문서 처리(document processing)”가 엔터프라이즈 에이전트 워크플로(특히 금융)에서 핵심 기반이라는 포지셔닝도 나왔다 ([jerryjliu0](https://twitter.com/jerryjliu0/status/2013695214008049890)).

- **Edge multimodal embeddings**: Weaviate는 NVIDIA Jetson에서 로컬 멀티모달 임베딩/검색 파이프라인을 위해 CLIP 추론을 지원해 텍스트-이미지 검색을 클라우드 왕복 없이 수행할 수 있게 했다 ([philipvollet](https://twitter.com/philipvollet/status/2013630649492468041)).

### 거버넌스·안전 및 다보스 내러티브(AI 리더십, 얼라인먼트, 세이프가드)

- **Amodei vs Hassabis: “scientist-led” governance framing**: 다보스 발언을 둘러싼 여러 인용에서 “과학자 주도(scientist-led)” 연구소와 “소셜 미디어 기업가” 리더십 스타일을 대비하며, 인센티브(광고/참여 vs 책임)가 안전 태세에 영향을 준다는 프레이밍이 반복됐다 ([scaling01](https://twitter.com/scaling01/status/2013651299519074729)). Hassabis는 DeepMind의 “full-stack” 우위 내러티브와 물리 지능/로보틱스가 단기 돌파구가 될 수 있다는 관점을 강조했고([scaling01](https://twitter.com/scaling01/status/2013718310194475379)), 전 세계적으로 조율된다면 일시 중단(pause)을 지지할 수 있다고도 말했다 ([emilychangtv](https://twitter.com/emilychangtv/status/2013726877706313798)).

- **Alignment trend signal**: Jan Leike는 2025년까지 **Anthropic, GDM, OpenAI** 전반에서 자동 감사(automated-audit) 기반 “misaligned behavior”가 감소 추세처럼 보인다고 보고했다 ([janleike](https://twitter.com/janleike/status/2013669924950970781)). (트윗 안에 방법론 세부는 없지만 방향성 신호로는 주목할 만하다는 평가가 붙었다.)

- **OpenAI rolls out age prediction for ChatGPT**: OpenAI는 전 세계적으로 **age prediction(연령 예측)**을 도입해 18세 미만으로 보이는 계정을 탐지하고 청소년 세이프가드를 적용하며, 성인 계정은 검증을 통한 override가 가능하다고 밝혔다( EU는 이후 롤아웃) ([OpenAI](https://twitter.com/OpenAI/status/2013688237772898532)). 이에 대해 “ads strategy” 같은 숨은 동기를 의심하는 반응도 나왔다 ([scaling01](https://twitter.com/scaling01/status/2013688152750215500)).

- **Altman on guardrails tradeoffs**: Sam Altman은 안전이 “tragic and complicated”하다고 하며, 취약한 사용자 보호와 도구의 광범위한 유용성 사이 균형을 강조했고, 다른 안전 필수(safety-critical) 기술 배포와의 유사점도 언급했다 ([sama](https://twitter.com/sama/status/2013703158459978076)).

### 참여도 상위 트윗

- **X algorithm open-sourced** — [XEng](https://twitter.com/XEng/status/2013471689087086804)
- **OpenAI: ChatGPT age prediction rollout** — [OpenAI](https://twitter.com/OpenAI/status/2013688237772898532)
- **Unsloth: run GLM-4.7-Flash locally (24GB RAM, 200K ctx)** — [UnslothAI](https://twitter.com/UnslothAI/status/2013482180564132092)
- **Liquid AI: LFM2.5-1.2B Thinking on-device reasoning model** — [liquidai](https://twitter.com/liquidai/status/2013633347625324627)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: GLM 4.7 Flash 동향

- **[My gpu poor comrades, GLM 4.7 Flash is your local agent](https://www.reddit.com/r/LocalLLaMA/comments/1qhii5v/my_gpu_poor_comrades_glm_47_flash_is_your_local/)** (Activity: 743): 에이전트형 프레임워크에서 **GLM 4.7 Flash**가 `30B` 이하 MoE 모델들보다 안정적으로 동작했다는 경험담이 공유됐다. 사용자는 **opencode**에서 30분 넘게 돌리며 수십만 토큰을 오류 없이 생성했고, GitHub 레포 클론·파일 편집 같은 작업도 수행했다고 한다. 추후 **GGUFs**로 로컬 실행을 시도할 계획이며, 업데이트로 모델 PR이 **llama.cpp**에 머지돼 접근성과 통합성이 넓어졌다고 전했다. 댓글에서는 **Nemotron 30b**와의 비교를 원한다는 의견과, `4090`에서 꽤 빠르지만 ‘깊게 생각’하는 편이라 속도/처리 깊이 트레이드오프가 있다는 관찰이 나왔다. 추가로, Q4_K_M 변형이 NVIDIA 4090에서 효율적으로 돌아간다는 언급과, MXFP4_MOE-GGUF 구성에서 SEED OSS 36B에 준하는 성능일 수 있다는 벤치 비교도 공유됐다.

- **[GLM 4.7 Flash official support merged in llama.cpp](https://www.reddit.com/r/LocalLLaMA/comments/1qhitrj/glm_47_flash_official_support_merged_in_llamacpp/)** (Activity: 477): `llama.cpp`가 **GLM 4.7 Flash** 지원을 머지했으며, 대상은 `Glm4MoeLiteForCausalLM`( **DeepseekV3**를 이름 변경·재구성한 버전)이라고 설명됐다. 이 통합은 **Z.ai** 개발자가 직접 한 것이 아니라 커뮤니티 주도였고, **Hugging Face**의 GLM-4.7-Flash 모델 참조를 포함해 프레임워크 기능을 확장한다. 모델은 [Hugging Face](https://huggingface.co/noctrex/GLM-4.7-Flash-MXFP4_MOE-GGUF)에서 확인할 수 있다. 커뮤니티는 VLLm 시도보다 빠르게 들어왔다며 반겼고, 여기서 ‘official’은 Z.ai의 공식 인정이 아니라 `llama.cpp`에서 제대로 동작한다는 의미라는 설명이 덧붙었다. 또한 CUDA에서 flash-attention이 오히려 느려 `-fa 0`으로 끄면 3배 빨라질 수 있다는 팁과, 간단한 응답 생성에 몇 분이 걸릴 정도로 지나치게 느리다는 불만도 나왔다.

- **[Unsloth GLM 4.7-Flash GGUF](https://www.reddit.com/r/LocalLLaMA/comments/1qhlnsv/unsloth_glm_47flash_gguf/)** (Activity: 314): [Hugging Face](https://huggingface.co/unsloth/GLM-4.7-Flash-GGUF)에서 **GLM-4.7-Flash GGUF**가 공개되며, 반복을 줄이기 위해 `UD-Q4_K_XL` 양자화와 `--temp 0.2 --top-k 50 --top-p 0.95 --min-p 0.01 --dry-multiplier 1.1` 같은 파라미터가 권장됐다(필요 시 `--dry-multiplier`를 `1.5`로 올리라는 제안도 있음). `UD-Q2_K_XL` 같은 낮은 양자화는 성능 문제로 제거됐고, non-UD-Q 버전은 비추천이라는 코멘트가 뒤따랐다. 다만 **llama.cpp** 통합 측면에서는 PR #18936 머지 이후에도 segfault, V cache 양자화 요구 등 불안정성이 남아 있고, RTX 4090·125GB RAM 같은 고사양에서도 불안정하다는 보고가 나왔다. 추가 설정과 권장 사항은 [documentation](https://unsloth.ai/docs/models/glm-4.7-flash)에 정리돼 있다.

- **[zai-org/GLM-4.7-Flash · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1qh5wdq/zaiorgglm47flash_hugging_face/)** (Activity: 1169): **zai-org**가 [Hugging Face](https://huggingface.co/zai-org/GLM-4.7-Flash)에 공개한 `30B-A3B` MoE 모델로, **MLA**를 활용해 KV 캐시(KV cache) 메모리 풋프린트를 줄여 `200k` 컨텍스트를 더 많은 사용자가 다룰 수 있다고 설명됐다. **AIME**, **GPQA** 같은 벤치에서 강하다는 주장과 함께, **vLLM**·**SGLang** 등으로 로컬 추론이 가능하다고 안내한다. 댓글에서는 메모리 효율을 특히 반기며 `70B` 같은 더 큰 모델을 기대한다는 반응도 있었다. 또한 소스 코드 기준 ‘30b’ 설명이 실제로는 ‘3B thinking model’을 가리키는 것일 수 있다는 지적이 나왔고, 관련 근거로 [Hugging Face Transformers repository](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glm4_moe_lite/modular_glm4_moe_lite.py#L169)가 공유됐다.

### /r/LocalLlama + /r/localLLM: Deepseek 모델 및 시스템 빌드

- **[768Gb Fully Enclosed 10x GPU Mobile AI Build](https://www.reddit.com/r/LocalLLaMA/comments/1qi4uj2/768gb_fully_enclosed_10x_gpu_mobile_ai_build/)** (Activity: 903): Deepseek·Kimi K2 같은 대형 MoE 모델과 고해상도 이미지/비디오 생성을 겨냥한 ‘이동 가능한’ 커스텀 AI 시스템 빌드가 소개됐다. **Threadripper Pro 3995WX** CPU, `512GB DDR4` RAM, `8x RTX 3090` + `2x RTX 5090` GPU 조합을 **Thermaltake Core W200** 케이스에 넣었고, 라이저로 GPU를 수용하는 듀얼 시스템 케이스 구성을 사용했다. 전원은 **EVGA 1600W**와 **Asrock 1300W** PSU를 사용했으며, Qwen 235b에서 `31.54 tokens per second` 같은 토큰 생성 벤치가 언급됐다. 총 비용은 약 `$17,000`로, 성능과 예산의 균형을 강조했다.

- **[It’s been one year since the release of Deepseek-R1](https://www.reddit.com/r/LocalLLaMA/comments/1qhs2sd/its_been_one_year_since_the_release_of_deepseekr1/)** (Activity: 364): **DeepSeek-R1** 출시 1주년 이미지가 공유됐으며, **OpenAI-o1**과 비슷한 성능이라는 설명과 함께 코드/모델이 **MIT License**로 완전 오픈소스라고 강조됐다. 사용자들은 [chat.deepseek.com](http://chat.deepseek.com)에서 라이브 웹사이트 및 API로 모델을 사용할 수 있고, 이미지에는 문제 해결 시나리오를 암시하는 채팅 UI 일부도 담겼다. 댓글에서는 DeepSeek-R1이 가격 인하·추론 출력의 투명성 강화 등 경쟁사 대응을 촉발해 AI 지형에 큰 영향을 줬으며, 원조 LLaMA 출시 다음으로 중요한 순간이었다는 평가가 나왔다. 추가로, 더 작은 모델 중 Deepseek-R1 수준을 따라잡는 모델이 무엇인지/크기는 어떤지에 대한 질문과, **Meta**의 전략 변화에 영향을 줬다는 언급도 있었다.

- **[768Gb Fully Enclosed 10x GPU Mobile AI Build](https://www.reddit.com/r/LocalLLM/comments/1qi5q2v/768gb_fully_enclosed_10x_gpu_mobile_ai_build/)** (Activity: 195): 같은 빌드가 /r/LocalLLM에도 공유됐으며, Deepseek V3.1에서 `24.92 tps`, Qwen 235b에서 `31.54 tps` 같은 벤치가 다시 언급됐다. W200 케이스로 마이닝 프레임의 미관/구조 문제를 피하면서도 공기 흐름과 소음 관리가 괜찮았다는 설명이 있었고, 높은 전력 소모로 PSU를 별도 회로에 물려야 하는지 등 실사용 제약에 대한 우려도 제기됐다.

### /r/LocalLlama + /r/localLLM: AI 하드웨어 및 시스템 구성

- **[LLM Sovereignty For 3 Years.](https://www.reddit.com/r/LocalLLM/comments/1qhqf8p/llm_sovereignty_for_3_years/)** (Activity: 101): 향후 3년간 로컬 LLM 환경을 구축하려는 사용자가 약 `$10,000` 예산으로 조언을 구했다(클라우드 비용 상승·검열 우려 등). 제안으로는 `80 GPU cores`·`512 GB` 메모리를 가진 **Apple M3 Ultra**(10k 이하 가능)와, `128 GB RAM` + **RyzenAI 395** 또는 **Mac** 같은 밸런스형 시작점, 그리고 **RTX GPU** + `128 DDR RAM`의 타워 구성 등이 언급됐다. 다만 로컬 셋업이 좋아지고는 있어도, 다수의 `$50k GPU`와 수백B 파라미터를 쓰는 클라우드 AI를 완전히 따라가긴 어렵다는 의견도 함께 나왔다.

- **[Can I add a second GPU to use it’s vram in addition of the vram of my main GPU to load bigger models?](https://www.reddit.com/r/LocalLLM/comments/1qii3h2/can_i_add_a_second_gpu_to_use_its_vram_in/)** (Activity: 44): `5070 Ti 16GB`에 추가 GPU(`24GB RTX 3090` 또는 `16GB RTX 5060 Ti`)를 붙여 더 큰 모델을 로드할 수 있는지에 대한 질문이다. 결론은 단일 모델 로딩을 위해 VRAM을 ‘직접 합치기’는 어렵고, 대신 멀티 GPU 병렬 처리로 활용하는 형태가 일반적이라는 쪽이었다. 추천은 `24GB VRAM`과 높은 메모리 대역폭을 가진 RTX 3090 쪽이 많았고, Ampere의 fp8/nvfp4 미지원은 지적되었지만 대체로 VRAM이 더 중요하다는 분위기였다. `llama.cpp`와 LM Studio 같은 툴이 멀티 GPU 셋업과 함께 언급됐고, GPU가 토큰/초는 빠르지만, `128GB+` 통합 메모리(unified memory) 시스템은 더 큰 모델을(더 느리게) 돌릴 수 있다는 트레이드오프도 논의됐다.

- **[AMD Ryzen AI Halo for AI Developers](https://www.reddit.com/r/LocalLLM/comments/1qgueu7/amd_ryzen_ai_halo_for_ai_developers/)** (Activity: 72): AMD Ryzen AI Halo가 NVIDIA 중심 구도를 흔들 수 있다는 기대가 나오지만, Linux에서 ROCm 드라이버가 불안정하고 다루기 어렵다는 점이 큰 장벽으로 지적됐다. ‘Day-0 Support’나 fp8 지원 등 마케팅 주장과 달리 실제로는 bf16으로 우회해야 하는 경우가 있고, NPU 등 일부 기능이 광고대로 동작하지 않는다는 비판이 있었다. 반면 `128GB unified memory`는 대형 생성 모델 실행에 유효하게 “작동하는 유일한 기능”으로 언급됐다.

- **[dev here - has anyone thought on training a model on your own codebase?](https://www.reddit.com/r/LocalLLM/comments/1qhek55/dev_here_has_anyone_thought_on_training_a_model/)** (Activity: 42): `5060 16GB`와 `Qwen2.5 Coder`로 자신의 라라벨(Laravel) 코드베이스에 모델을 학습시키려는 실험이 공유됐다. 오래된 브랜치를 활용해 점진적으로 반복하는 계획이며, 코드베이스 맞춤형 모델의 이점을 탐색하려는 목적이다. 댓글에서는 `Qwen2.5 Coder`가 구식이라 `Qwen3-Coder`나 `Devstral-2` 같은 최신 모델을 권했고, 미세조정(fine-tuning) 대신 RAG나 Roo/Kilo Code의 코드베이스 인덱싱 같은 접근이 더 효과적일 수 있다는 의견이 나왔다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude Code 및 AI 코딩 도구

- **[Microsoft pauses Claude Code rollout after Satya intervention](https://www.reddit.com/r/ClaudeAI/comments/1qgx6br/microsoft_pauses_claude_code_rollout_after_satya/)** (Activity: 1367): **Satya Nadella**와 경영진 개입 이후 Microsoft가 내부에서 **Claude Code** 배포를 중단하고 직원들을 **GitHub Copilot**로 돌렸다는 내용이다. 내부 커뮤니케이션에서는 Copilot이 Claude Code와의 격차를 “mostly closed”했다고 주장했지만, “high-priority R&D” 프로젝트는 정당한 사유가 있으면 **Anthropic API**를 계속 사용할 수 있다고 했다. 기존 사용자는 접근을 유지하되 신규 초대는 철회됐다. 댓글에서는 이 결정이 자사 제품 개선을 위해 ‘dogfooding’을 강제하는 전략일 수 있다는 회의론과, Microsoft가 자사 도구 대신 경쟁사 도구를 쓰고 있었다고 인정한 점이 눈에 띈다는 반응이 나왔다.

- **[Tried Claude Cowork last night, and it was a top 3 most exciting moments I’ve ever had with technology.](https://www.reddit.com/r/ClaudeCode/comments/1qh78yf/tried_claude_cowork_last_night_and_it_was_a_top_3/)** (Activity: 483): 인터넷 검색을 활용해 복잡한 문제를 푸는 방식으로 **Claude Code** 기능을 강화하는 것으로 보이는 **Claude Cowork** 사용기가 공유됐다. 글쓴이는 ‘wispr flow app’ 제작 관련 프로젝트에서 Cowork가 오류를 찾아 수정하는 데 더 나은 상식(common sense)을 보여줬다고 주장했으며, Claude Code가 MCPs(Model Checkpoints)에 의존하는 반면 Cowork는 인터넷을 더 효율적으로 검색해 정보를 더 많이 유지하는 것 같다고 했다. 댓글에서는 Claude Code도 이미 인터넷 검색이 가능한데 Cowork가 필요한지 의문을 제기하거나, 과장이라며 ‘AI psychosis’일 수 있다는 반응, 그리고 샌드박스/VM 제약으로 Claude for Mac의 터미널/Code 탭 접근이 안 되는 등 통합 한계가 있다는 지적이 나왔다.

- **[has anyone tried Claude Code with local model? Ollama just drop an official support](https://www.reddit.com/r/ClaudeCode/comments/1qhj13v/has_anyone_tried_claude_code_with_local_model/)** (Activity: 421): **Ollama**의 공식 지원으로 **Claude Code**를 로컬 모델과 연동하는 셋업이 논의됐다. 이미지에는 간단한 HTML 사이트를 만드는 코딩 UI가 보이며, 작은 작업에는 **GLM 4.7 flash 30B**를 써서 사용량 제한 없이 반복할 수 있다는 맥락이 소개됐다. 댓글에서는 로컬 모델이 클라우드 Claude/GPT보다 더 명시적인 지시와 프롬프트 엔지니어링이 필요하다는 비교와 함께, tool call/컨텍스트 관리를 위해 최소 `24GB` VRAM이 필요하다는 의견이 나왔다. 또한 **llamacpp** 서버 + `litellm` 프록시 같은 구성이 언급되며, 높은 지능 작업에서는 Ollama 기반 모델을 권하지 않는다는 코멘트도 있었다.

- **[Are we sure this is 100% allowed by Anthropic?](https://www.reddit.com/r/ClaudeCode/comments/1qibh6o/are_we_sure_this_is_100_allowed_by_anthropic/)** (Activity: 313): Ollama를 Anthropic의 Claude messages API와 통합해, 오픈소스 모델로 Claude code 워크플로(에이전트 루프, tool use, 코딩)를 구동할 수 있다는 이미지/포스트가 논의됐다. 댓글에서는 이 방식이 Amazon Bedrock 같은 플랫폼에서 프록시 레이어로 Claude를 쓰는 대기업 패턴과 유사하다고 설명했고, Anthropic의 핵심 제한은 정액제에서 무제한 액세스를 뽑아 쓰는 행위이지, 자사 harness를 다른 LLM 게이트웨이로 쓰는 것 자체가 아니라는 해석이 나왔다. 게이트웨이를 통한 타 LLM 사용을 허용하는 공식 문서가 있다는 주장과 함께, 최근 Ollama의 지원이 이를 더 정당화한다는 의견이 이어졌다.

- **[[P] I Gave Claude Code 9.5 Years of Health Data to Help Manage My Thyroid Disease](https://www.reddit.com/r/MachineLearning/comments/1qi8twv/p_i_gave_claude_code_9_5_years_of_health_data_to/)** (Activity: 207): Apple Watch와 Whoop의 9.5년 건강 데이터를 **Claude**로 분석해 Graves’ disease(그레이브스병) 에피소드를 관리했다는 사례다. 여러 ML 모델을 시험한 뒤 **XGBoost**로 약 `98%` 검증 정확도를 얻어 증상 3~4주 전 경보를 제공했고, 백테스트(backtest)로 실험했다고 한다. iOS 앱을 만들고 프로젝트(Claude code 셋업 포함)를 오픈소스로 공개했으며 [Medium](https://medium.com/data-science-collective/i-gave-claude-code-9-5-years-of-health-data-to-help-manage-my-thyroid-disease-85fcd8c0449f)에도 정리했다. 댓글에서는 `98%` 정확도가 데이터 누출(data leakage)일 수 있다는 지적과, out-of-time 테스트 필요성, 개인 의료 데이터를 Anthropic에 제공하는 데 대한 우려가 나왔다.

- **[The creator of Node.js says the era of writing code is over](https://www.reddit.com/r/ClaudeCode/comments/1qhiicv/the_creator_of_nodejs_says_the_era_of_writing/)** (Activity: 309): Node.js 창시자 **Ryan Dahl**이 ‘코드를 쓰는 시대가 끝나가고 있다’는 취지의 발언을 했다는 공유 글이다. Karpathy, Stroustrup 등도 문제 해결 중심의 소프트웨어 엔지니어링으로 이동할 수 있다고 보는 관점이 함께 언급됐다. 자세한 내용은 [original article](https://jpcaparas.medium.com/the-creator-of-node-js-says-the-era-of-writing-code-is-over-8320c868043b?sk=66b1c9454345f17c08a532986a4e0bcc)에서 확인할 수 있다. 댓글에서는 기업 환경이 보안/정책 제약으로 AI 도구 도입이 4~5년 뒤처졌다는 지적도 나왔다.

### Gemini 및 Google AI 동향

- **[Rumors of Gemini 3 PRO GA being “far better”, “like 3.5”](https://www.reddit.com/r/singularity/comments/1qh591s/rumors_of_gemini_3_pro_ga_being_far_better_like_35/)** (Activity: 657): “Gemini 3 PRO GA”로 불리는 새 버전이 AI 스튜디오에서 A/B 테스트 중이며 “훨씬 낫다”, “3.5 같다”는 루머가 공유됐다. 현재 3.0 모델은 기본 지능은 강하지만 미세조정이 부족하다는 관점에서, 새 버전이 이를 메울 수 있다는 추정이 나온다. 댓글에서는 “GA”가 General Availability인지에 대한 질문과, 현 모델의 코딩 타이포가 잦아 큰 개선이 필요하다는 회의론이 함께 나타났다.

- **[Gemini integration into Chrome browser is just too darn good and useful](https://www.reddit.com/r/Bard/comments/1qhzifv/gemini_integration_into_chrome_browser_is_just/)** (Activity: 178): Chrome 브라우저에 Gemini가 통합돼, 시청 중인 영상/이미지 등 미디어에 대해 실시간 컨텍스트와 정보를 제공하는 기능이 소개됐다. 미국 외 지역에서도 제공되길 바란다는 의견과, 기능을 어떻게 활성화하는지에 대한 궁금증이 이어졌다.

- **[Even Gemini 3 Pro is acting stupid lately](https://www.reddit.com/r/Bard/comments/1qh7j8l/even_gemini_3_pro_is_acting_stupid_lately/)** (Activity: 54): Ultra 티어에서도 **Gemini 3 Pro**가 원치 않는 이미지/비디오를 생성하는 등 요청을 잘못 해석한다는 불만이 나왔다(예: 아이디어만 원했는데 스토리보드를 만들어버림). 모델이 과도하게 ‘최종 목표’를 달성하려는 설계 때문일 수 있고, 더 명확한 지시가 필요하다는 해석이 제기됐다.

- **[Gemini Live preps big upgrades with ‘Thinking Mode’ and ‘Experimental Features’](https://www.reddit.com/r/Bard/comments/1qhf7zz/gemini_live_preps_big_upgrades_with_thinking_mode/)** (Activity: 170): Google이 Gemini Live 앱에 ‘Thinking Mode’와 ‘Experimental Features’ 등을 추가하는 대규모 업그레이드를 준비 중이라는 내용이다. ‘Labs’ 이니셔티브로 제공될 수 있고, 현재는 **Gemini 2.5 Flash**지만 향후 **Gemini 3** 기반으로 옮겨갈 가능성이 거론됐다. 기능으로는 멀티모달 메모리, 노이즈 처리 개선, 개인화 결과, “UI Control”(에이전트가 폰을 조작해 작업 수행), ‘Deep Research’ 등이 언급됐으며 일부는 미국 한정일 수 있다는 추정도 나왔다.

- **[BabyVision: A New Benchmark for Human-Level Visual Reasoning](https://www.reddit.com/r/singularity/comments/1qh1omx/babyvision_a_new_benchmark_for_humanlevel_visual/)** (Activity: 574): BabyVision-Mini 벤치마크에서 LLM의 시각 추론 성능을 연령대별 인간과 비교한 차트가 공유됐다. 12세 인간 성능이 LLM을 상회하며, LLM 중에서는 Gemini3-Pro-Preview가 가장 높게 나온다는 요지다. 댓글에서는 멀티모달 사전학습과 비전 RL 스케일링이 성능을 끌어올려 로보틱스 등 응용을 열 수 있다는 전망이 나왔다.

- **[The Thinking Game documentary is sitting at 305M views on Youtube in less than 2 months. Ridiculous numbers.](https://www.reddit.com/r/singularity/comments/1qhuuqf/the_thinking_game_documentary_is_sitting_at_305m/)** (Activity: 545): Google DeepMind의 다큐 “The Thinking Game”이 2개월도 안 돼 YouTube에서 `305 million views`를 기록했다는 내용이 화제가 됐다. AlphaGo 다큐(2020년, 6년간 `37 million views`)와 비교하며 대중 관심이 급증했다고 보기도 했지만, `190K likes`·댓글 `4000` 등 참여 지표 대비 조회수가 비정상적으로 높아 봇/인위적 부풀림을 의심하는 반응이 많았다. 추천 알고리즘이 2주간 과도하게 노출했다는 경험담도 공유됐다.

### DeepSeek AI 영향 및 동향

- **[One Year Since the “DeepSeek Moment”: The Impact is Still Real.](https://www.reddit.com/r/DeepSeek/comments/1qgy3lk/one_year_since_the_deepseek_moment_the_impact_is/)** (Activity: 204): “DeepSeek Moment” 1주년을 기념하며 **DeepSeek-R1**이 추론을 핵심 역량으로 부각하고 효율적 학습을 촉진해, 더 작고 똑똑한 모델 흐름을 만들었다는 평가가 공유됐다. 신흥 시장 확산과 모듈형·툴 인지(tool-aware) 시스템으로의 전환도 언급된다. 댓글에서는 OpenAI를 넘어서기보다 비서구권의 역량을 보여준 사건이라는 해석과, R1에서 MoE로 전환하며 실망했다는 의견, fine-grained sparsity·RLVR(GRPO) 같은 기여가 업계 표준이 될 수 있다는 논의가 나왔다.

- **[The Race to Build the DeepSeek of Europe Is On](https://www.reddit.com/r/DeepSeek/comments/1qh15va/the_race_to_build_the_deepseek_of_europe_is_on/)** (Activity: 181): 유럽이 미국 기술 의존을 줄이고 기술 주권(sovereignty)을 확보하기 위해 ‘유럽의 DeepSeek’를 만들려는 전략적 드라이브를 다룬 기사다. 정부 투자와 유럽 AI 연구소 간 오픈 협업이 언급되며, 영국의 **DeepMind**와 프랑스의 **Mistral** 등이 핵심 플레이어로 거론됐다. AI를 핵심 인프라로 보고 자립을 강화해야 한다는 주장과 함께, 더 자세한 내용은 [Read more](https://www.wired.com/story/europe-race-us-deepseek-sovereign-ai/)에 있다. 댓글에서는 미국과의 관계 변화 속에서 유럽이 AI 역량을 키우는 전략적 중요성이 강조됐고, 관련 맥락으로 [Wired article](https://www.wired.com/story/europe-race-us-deepseek-sovereign-ai/)이 다시 인용됐다. 또한 규제·세금 환경 때문에 유럽이 경쟁하기 어렵다는 회의론과, 전기차 등 다른 정책 요구가 혁신을 방해할 수 있다는 우려가 나왔다.

- **[What do you mainly use DeepSeek for?](https://www.reddit.com/r/DeepSeek/comments/1qi8rdi/what_do_you_mainly_use_deepseek_for/)** (Activity: 49): DeepSeek를 주로 애플리케이션 개발/아키텍처 분석, 문서 생성에 활용한다는 답변이 많았고, 유료 API로 사용한다는 맥락이 공유됐다. 수학·통계 영역 성능을 탐색하거나, 생활 주제/레시피 같은 캐주얼 대화에도 쓴다는 언급도 있었다. 댓글에서는 기술적인 도메인에서 강점이 있을 수 있다는 기대와, 보다 일반적인 대화 능력에 대한 관심이 함께 나타났다.

---

## AI Discord Recap

### GLM-4.7-Flash 채택: 프롬프트, 양자화(quants), “Thinking” 토글

- **Claude Prompt Gives GLM a Glow-Up**: Unsloth 사용자들이 Anthropic 문서의 수정된 **Claude Sonnet 4.5 system prompt**를 넣었더니 **GLM-4.7-Flash**의 일관성과 역량이 체감상 크게 좋아졌다고 보고했다(“*a skill difference*”). 관련 근거로 [Claude system prompts release notes](https://platform.claude.com/docs/en/release-notes/system-prompts)가 공유됐다.
- 시스템 프롬프트 스캐폴딩(scaffolding)이 가중치(weights)가 같아도 지시 수행/스타일 제어에서 체감 품질을 지배할 수 있다는 증거로 해석됐다.
- **High-Quant Weirdness: Q2 Beats Q6 (???), Everyone Panics**: 여러 사용자가 **GLM-4.7-Flash**가 더 높은 퀀트에서 더 나쁘게 동작해 **Q2KXL**을 **Q6KL**보다 선호하는 현상을 봤다고 하며, **llama.cpp/Ollama** 전반의 퀀트 툴링 문제 가능성과 연결했다. 관련 스레드로 [ggml-org/llama.cpp PR discussion](https://github.com/ggml-org/llama.cpp/pull/18936#issuecomment-3774525719)이 인용됐다.
- 커뮤니티 합의로는 이런 사례가 드물고(“*first time a model has behaved badly at high quants*”), 단순 샘플러 설정보다 **quantization artifacts**나 **production pipeline** 문제일 가능성이 크다는 쪽이었다.
- **Chat Templates Eat Your Reasoning for Breakfast**: LM Studio 사용자들은 **chat templates**가 **Qwen3** 같은 모델에서 추론을 제거/억제해 “**interleaved thinking**”을 깨뜨릴 수 있다고 주장했다. 또한 **GLM4.7-Flash**에는 *clear_thinking* 같은 템플릿 플래그가 있어, 명시적으로 끄지 않으면 thinking 콘텐츠가 제거될 수 있다고 지적했다.
- 이런 템플릿 동작이 에이전트형 코딩 확장/툴 워크플로와 연결되며, “모델 퇴행(model regression)” 보고가 실제로는 가중치가 아니라 **template defaults**에서 비롯될 수 있다는 시사로 정리됐다.

### MCP 및 에이전트 도구: 성장통(그리고 새 장난감)

- **MCP Inspector vs 401: The Re-Auth Boss Fight**: MCP 기여자들은 **MCP Inspector**가 **401** 이후 재인증에 실패한다고 보고하며, 401 응답에서 **resource metadata**를 파싱해 재인가를 시도해야 한다고 제안했다. 또한 리다이렉트에서 **resourceMetadata persistence across redirects**가 깨지는 SDK 버그가 있고, [inspector issue #576](https://github.com/modelcontextprotocol/inspector/issues/576#issuecomment-3766294454)에 추적된다고 언급했다.
- 일부는 **VS Code**가 Inspector를 초기 연결에만 쓰고 이후 401에는 쓰지 않는 것처럼 보인다며, 문제의 원인이 **SDK 내부**일 수 있고 서버 측 수정은 이미 들어갔으며 SDK 업데이트가 대기 중이라고 관찰했다.
- **LM Studio Calls the MCP SDK a House of Cards**: LM Studio 사용자들은 공식 SDK 기반 **MCP 백엔드**가 심각한 보안 문제와 “*0 dev UX in mind*”를 갖고 있지만, 다른 에이전트 프레임워크 대비 여전히 “*the best we have right now*”라는 상반된 평가를 내놨다.
- 결론은 실용적이었다. 개발자들은 MCP를 원하지만 현재 구현은 **fragile**하게 느껴져, SDK·인증 플로·툴콜 UX에서 변화(churn)를 예상한다는 것.
- **OpenRouter Ships More Clients: OkeyBot + Inforno**: OpenRouter 사용자들은 Discord용 **OkeyBot**(BYO 키, 스레드별 사용량/비용 추정)을 [okeybot.ai](https://okeybot.ai/)에서, 그리고 **OpenRouter + Ollama**를 지원하며 히스토리를 **.rno**로 저장하는 오픈소스 데스크톱 멀티-LLM 앱 **Inforno**를 소개했다([Inforno intro video](https://youtu.be/oJyj0mroFtY), 코드: [alexkh/inforno](https://github.com/alexkh/inforno)).
- 별도로, Google/OpenAI 같은 프로바이더에 대한 **batch API** 요구가 [an X post](https://x.com/nopainkiller/status/2013522059662614653)로 인용되며, 에이전트 워크로드에서 비용/통제 니즈와 연결됐다.

### 성능 엔지니어링: 커널, 콜렉티브, CUDA 미세 최적화

- **YALI Tries to Dunk on NCCL (with Tail Latency Receipts)**: GPU MODE 사용자들이 2-GPU **NVLink AllReduce** 라이브러리 **YALI**를 소개했다. **NVIDIA NCCL** 대비 **1.2×–2.4×** 처리량과 “*50×+ more stable tail latency*”를 주장하며 GitHub에 공개했다 ([Venkat2811/yali](https://github.com/Venkat2811/yali)).
- 작성자는 flash/stream 모드 등에서 **ops와 compute의 공격적 오버랩**을 강조했고, AI 피치가 프로젝트를 덜 진지하게 보이게 만든다는 피드백 후 마스코트를 제거한 일화도 공유됐다(오픈소스 마케팅의 ‘톤 조절’ 사례로 해석됨).
- **One PTX Suffix, Seven Instructions Saved**: GPU MODE는 `rcp.approx.ftz.f32`이 단일 `MUFU.RCP`로 컴파일되는 반면 `rcp.approx.f32`는 **7개 추가 명령**을 만들 수 있다고 강조하며 NVIDIA [PTX docs](https://developer.nvidia.com/ptx-compiler-driver)를 인용했다.
- 또한 **ftz**(flush-to-zero) 없이 subnormal reciprocal이 **INF**로 오버플로될 수 있어, `.ftz`가 성능뿐 아니라 수치 동작 선택이기도 하다고 지적했다.
- **Flash-Attention Stride Bug: Divisibility Constraints Vanish**: flash-attention의 stride divisibility 회귀(regression)가 “*stride divisibility constraints를 제거한 버그로 요약된다*”며, [flash-attention issue comment](https://github.com/Dao-AILab/flash-attention/issues/2192#issuecomment-3770977193)가 링크됐다.
- 고성능 커널이 취약한 shape/stride 가정에 의존하고, 제약 하나 변경이 정확성/성능 절벽으로 이어질 수 있다는 상기점으로 정리됐다.

### 코딩 워크플로 및 모델 경제성: IDE 텔레메트리, 검색, “Cheap Models”

- **Cursor Counts Your AI Lines (Enterprise Spreadsheets, Assemble!)**: Cursor 사용자들은 엔터프라이즈 플랜에서 코드베이스 중 **AI vs humans**가 작성한 비율 인사이트를 보여준다고 말했으며, 이는 **Opus 4.5 API**(Claude Code와는 별개)로 구동된다고 했다. 다만 해당 기능의 정확한 프롬프트는 공개되지 않았다.
- 반응은 호기심과 회의가 섞였다. 프롬프트 투명성이 없으면 측정 편향(bias)이나 이 지표가 엔지니어링 신호보다 **sales dashboard**에 가까운지 판단하기 어렵다는 것.
- **mgrep Declares Grep Ragnarok**: Cursor 사용자들은 `mgrep`을 grep 대체재로 논의하며, LLM 워크플로에서 더 적은 잡음 컨텍스트를 반환해 관련성과 토큰 효율을 **95%** 개선한다고 주장했다.
- 반면 Cursor는 이미 `rgrep`과 내부 시맨틱 검색을 쓰고 있고(마케팅 이름만 없을 뿐), 차별점은 아이디어 자체보다 패키징/기본값일 수 있다는 반론도 나왔다.
- **Search Engines & Model Pricing: Searxng, Kagi, and Grok’s “Cheap But Chatty” Tax**: Unsloth 멤버들은 Google 검색이 잘 못 찾는다고 주장하며 **Searxng**를 밀었고, 다른 이들은 개인정보/스크래핑 관점에서 **Kagi**를 칭찬했다. 관련 데모 영상으로 [YouTube: ThgVTNVOZ7g](https://www.youtube.com/watch?v=ThgVTNVOZ7g)가 링크됐다.
- 한편 Cursor 사용자들은 **Grok**이 Opus/Sonnet/GPT보다 저렴할 수 있지만 반복이 더 필요해, 프롬프트·컨텍스트 최적화가 없으면 “싼 옵션”이 오히려 비싸질 수 있다고 말했다.

### 벤치마크·평가(evals)와 “커뮤니티 그라운드 트루스” 현실

- **LMArena Hits 5M Votes, Ships Leaderboard Moves**: LMArena는 Text Arena가 **5 million comparisons**를 넘겼고, Text-to-Image 리더보드 업데이트에서 **GLM-Image**가 오픈 모델 중 **#8**, 전체 **#35**(점수 **1018**)에 올랐다고 밝혔다.
- 동시에 사용자들은 이미지 모델 품질 저하와 신뢰성 문제(captcha 루프, “Something went wrong” 오류)를 불평하며, 측정 가치가 제품 안정성과 계속 충돌한다고 지적했다.
- **Eleuther Wants Agent Evals: Less Vibes, More Judge Pipelines**: Eleuther 엔지니어들은 수동 리뷰 비용을 줄이기 위해 **agent evaluation** 자동화를 논의했으며, “**LLM as judge**” 워크플로를 거론하는 한편 데이터 품질 검증과 성공 기준 정의가 먼저라고 경고했다.
- 별도 스레드에서는 오픈 웨이트 모델(예: **Llama 7B/13B/70B**)에 대해 문제당 **100회** 반복 실행으로 답변 확률을 추정하는 다지선다(eval) 방식을 요청했으며, 모델이 답을 생성하기보다 미리 작성된 답을 택하게 하자는 방향을 강조했다.
