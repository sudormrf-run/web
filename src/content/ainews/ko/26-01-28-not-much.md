---
title: "DeepMind, AlphaGenome 모델·가중치 공개"
summary:
  - "DeepMind가 AlphaGenome 모델·가중치 공개"
  - "Kimi K2.5가 오픈 모델 화제로 부상"
  - "Chrome이 Gemini 3 Auto Browse 프리뷰 공개"
  - "NVIDIA가 NVFP4 Nemotron 3 Nano 발표"
  - "에이전트 evals·하네스·추적 논의 확대"
date: 2026-01-28
originalUrl: "https://news.smol.ai/issues/26-01-28-a-quiet-day/"
hasHeadline: false
headline: "DeepMind, AlphaGenome 모델·가중치 공개"
tags:
  - OpenAI
  - Codex
  - DeepMind
  - Kimi
  - Gemini
isFeatured: false
---

## 헤드라인: DeepMind, AlphaGenome 모델·가중치 공개

DeepMind가 유전 변이(genetic changes)의 분자적 영향(molecular impacts)을 예측하는 **AlphaGenome**을 발표하며 하루 **1M+ API calls/day**, **3,000+ users**를 언급했고, 이어 **model + weights**를 공개한다고 밝혔다 ([tweet](https://twitter.com/GoogleDeepMind/status/2016542480955535475); weights: [tweet](https://twitter.com/GoogleDeepMind/status/2016542490115912108)). 이후 가중치 공개는 Hugging Face 컬렉션 링크와 함께 재차 안내됐다 ([tweet](https://twitter.com/osanseviero/status/2016628065422762113)).

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [https://news.smol.ai/](https://news.smol.ai/), [@smol_ai](https://x.com/Smol_AI)

---

## AI Twitter Recap

### 프런티어 모델 ‘성격 분할’ + 실제 사용 방식

- **Exploration vs. exploitation 프레이밍**: 한 가지 유용한 멘탈 모델로, 현재 프런티어 LLM은 “극단적으로 대조적인(polar opposites)” 모습처럼 보인다는 주장이다. **GPT-5.2**는 *exploration*에 최적화(더 큰 탐색 / 더 풍부한 추론(reasoning), “xhigh and Pro”가 강점)되어 있는 반면, **Claude Opus 4.5**는 *exploitation*에 더 가깝다(더 적은 토큰으로 더 강한 신뢰성; 추가 “reasoning”이 주는 이득이 더 적은 경우가 많음). 이는 OpenAI는 연구 워크플로우, Anthropic은 신뢰성 중심의 상업 배포에 더 유리할 수 있음을 시사한다 ([tweet](https://twitter.com/scaling01/status/2016335491243676058)).

- **코딩 에이전트 ‘phase shift’는 실제지만—혼란스럽다**: 여러 게시물에서 실무가 한 단계 바뀌는 변화가 드러난다. 창업자와 엔지니어들이 “agentic” 코딩 루프를 점점 더 돌리지만, 새로운 실패 모드도 함께 나타난다: 에이전트가 명확화 질문(clarifying questions)을 하지 않거나, “혼란스러워(confused)”지거나, 관련 없는 파일까지 수정하는 문제. Mikhail Parakhin은 스케줄러를 지정하고 제대로 동작할 것이라 신뢰할 수 있는 지점까지 왔지만, 기존 코드베이스에는 부수적 편집(collateral edits) 때문에 아직 에이전트를 풀어둘 수 없다고 설명한다 ([tweet](https://twitter.com/MParakhin/status/2016362688444825833)). 관련해서 *self-verification* 같은 워크플로우 제안(예: Playwright 스크린샷 + pass할 때까지 반복하는 규칙)이 점점 흔한 운영 규율로 자리 잡는 중이다 ([tweet](https://twitter.com/pierceboggan/status/2016335657602285822)).

---

### Kimi K2.5 (+ “clawdbot” / swarm-mode), 주간 오픈 모델 최대 화제

- **K2.5 주장: agent + multimodal + coding 다듬기**: Zhihu 기반의 긴 종합 글은 **Kimi K2.5**가 K2의 “intelligence > capability” 불균형을, **agent execution**, **multimodality**, **coding** 강화로 보완했다고 주장한다. brute-force 토큰 사용을 줄이고 지시 따르기 안정성을 높였다는 것. 다만 환각(hallucinations)과 지속적인 NBSP 포맷팅 특이점은 여전히 지적된다 ([thread](https://twitter.com/ZhihuFrontier/status/2016363957876097089)). 또 다른 Zhihu 요약은 멀티모달리티의 실용적 근거를 든다: 에이전트가 UI 상태(겹침, 깨진 이미지, 시각적 회귀(regressions))를 검증해야 할 때 “vision”이 중요하며, 더 적은 인간 피드백으로 더 촘촘한 action–critic 루프를 가능하게 한다 ([thread](https://twitter.com/ZhihuFrontier/status/2016438778030850059)).

- **배포 + 로컬 실행이 과열을 견인**: 고사양 Apple silicon 구성에서 K2.5를 돌렸다는 보고가 바이럴이 됐다: **Thunderbolt 5 (RDMA)**로 연결한 **2× 512GB M3 Ultra Mac Studios**에서 **Exo Labs / MLX** 백엔드로 **~24 tok/s**라는 내용 ([tweet](https://twitter.com/alexocheema/status/2016404573917683754)). Kimi는 r/LocalLLaMA에서 AMA도 푸시했고 ([tweet](https://twitter.com/Kimi_Moonshot/status/2016443435553890419)), “Eigent”에서의 제공도 발표했다 ([tweet](https://twitter.com/Kimi_Moonshot/status/2016473945957155252)).

- **벤치마크 + 가격 압박**: Kilo Code는 무료 주간을 홍보하며 여러 코딩 벤치마크에서 K2.5가 Opus 4.5를 이긴다고 주장했다 ([tweet](https://twitter.com/kilocode/status/2016449095511007535)). Kimi 공식 계정은 “#1 open model for coding”을 주장했다 ([tweet](https://twitter.com/Kimi_Moonshot/status/2016521406906028533)). 이미지로부터 UI를 생성하는 A/B/C 체험 비교에서는 Opus가 품질은 최고지만 비싸고, Codex는 가장 빠르고/가장 저렴하지만 충실도(fidelity)는 낮으며, K2.5는 “Opus 품질의 ~90%를 비용 ~38%로”라는 결론이 언급됐다 ([tweet](https://twitter.com/JuanPa/status/2016634998988865571)).

- **라이선스 마찰이 채택을 막는다**: 수정된 라이선스 + 로고 요구사항이, 모델이 아무리 훌륭해도 엔터프라이즈 채택을 죽일 수 있다는 지적 ([tweet](https://twitter.com/dbreunig/status/2016531878795256286)).

- **“Clawdbot”은 문화적 산물**: 밈 자체(사람들이 “clawdbot”이 대체 뭔지조차 헷갈려함)가 에이전트 브랜딩과 포크(fork)가 얼마나 빠르게 증식하는지 보여준다 ([tweet](https://twitter.com/dejavucoder/status/2016341138740052126)). 또한 생태계의 신호(signal) 손실에 대한 더 큰 우려(아래 참고)를 예고한다.

---

### 에이전트 엔지니어링: 스킬, 하네스, evals, 그리고 “신뢰성 세금”

- **Skills가 공유 인터페이스 레이어로 굳어지는 중**: 큰 흐름은 워크플로우 로직을 프롬프트 밖으로 빼서, 필요할 때 로드하는 재사용 가능한 “skills”(지시문 파일/폴더)로 옮기는 것이다. DeepLearning.AI + Anthropic은 Claude(Claude.ai, Claude Code, API, Agent SDK) 전반에서의 이식성을 강조한 “Agent Skills” 코스를 출시했다 ([tweet](https://twitter.com/AndrewYNg/status/2016564878098780245)). LangChain도 progressive disclosure로 가벼운 공유 단위로서 “Skills”를 밀고 있다 ([tweet](https://twitter.com/sydneyrunkle/status/2016585688389734654)). HF는 “upskill”을 소개했다: 강한 모델의 트레이스(traces)를 전이 가능한 스킬로 변환한 뒤 영향도를 평가한다. CUDA 커널 작성에서는 일부 오픈 모델에서 **+45% accuracy**까지 보였지만 다른 모델은 성능이 나빠지기도 해서, 모델별 측정이 필요함을 다시 확인했다 ([tweet](https://twitter.com/ben_burtenshaw/status/2016534389685940372); blog link in thread: [https://twitter.com/ben_burtenshaw/status/2016534392974234013](https://twitter.com/ben_burtenshaw/status/2016534392974234013)).

- **컨텍스트 관리가 “filesystem-first”로 이동**: DeepAgents(LangChain)는 도구 I/O를 오프로딩/요약하고, 파일시스템을 컨텍스트 경계(boundaries)의 핵심으로 활용하는 방식을 설명한다 ([thread](https://twitter.com/hwchase17/status/2016548732880445772); additional note: [tweet](https://twitter.com/sydneyrunkle/status/2016560221720867307)).

- **Evals는 multi-turn + traceability로 수렴**: 단일 단계(single-step) vs 전체 턴(full-turn) vs multi-turn 행동 평가의 기반으로 에이전트 트레이싱(tracing)을 두자는 요구가 명시적으로 나온다 ([tweet](https://twitter.com/samecrowder/status/2016563057947005376)). 새 벤치마크/하네스: **SWE-fficiency**가 하네스와 레포를 공개했다 ([tweet](https://twitter.com/18jeffreyma/status/2016511583032061999); also [tweet](https://twitter.com/OfirPress/status/2016559053808222644)). **CooperBench**는 멀티 에이전트 협업 조정(coordination) 측정을 위한 것으로 언급된다 ([tweet](https://twitter.com/gneubig/status/2016555800982937879)). 안전 측면에서는 “AgentDoG”가 트래젝토리(trajectories) 전반에서 unsafe action의 근본 원인을 진단하자고 제안한다 ([tweet](https://twitter.com/HuggingPapers/status/2016366634475388968)).

- **병목은 신뢰성(reliability)과 검증 루프**: MiniMax는 긴 상호작용 체인이 비용이 크다고 지적하며, verifier 스타일 셋업에서 라운드를 줄이기 위한 **parallel tool invocation**을 제안한다 ([tweet](https://twitter.com/MiniMax_AI/status/2016488781860458789)). 별도로, “vibe-coded software”가 전통적 신호(디자인 품질, 문서, 생태계 성숙도)를 무너뜨려 평가 부담을 사용자에게 옮기고, 새로운 신뢰 프레임워크가 필요하다는 강한 비판이 나온다 ([tweet](https://twitter.com/tnm/status/2016342022723141782)).

---

### 인프라 + 효율: 양자화(quantization), 증류(distillation), 추론(inference) 스택, 로컬 배포

- **NVIDIA의 NVFP4 푸시 (Nemotron 3 Nano)**: NVIDIA가 **Nemotron 3 Nano**의 **NVFP4** 정밀도 버전을 공개하며 **Blackwell B200에서 최대 4× 처리량**과 **Quantization Aware Distillation**을 통한 **~99.4% BF16 accuracy**를 주장했다 ([tweet](https://twitter.com/NVIDIAAIDev/status/2016556881712472570)). vLLM도 빠르게 지원을 추가했다 ([tweet](https://twitter.com/vllm_project/status/2016562169140433322)).

- **임베딩 중심 아키텍처가 다시 “핫”**: DeepSeek의 Engram 류 아이디어를 둘러싼 논의가 이어진다. LongCat Flash 논문 요약에서는 **multi-hash sub-tables**을 쓰고, 임베딩(embeddings)이 MoE sparsity가 높을 때 주로 도움된다고 관찰한다. 실무적 함정으로는 첫 attention이 ‘익사’하지 않게 하는 증폭(amplification, √D/LayerNorm)과, vocab 크기 정렬이 나쁘면 충돌(collision) 스파이크가 생기는 점 등이 언급됐다 ([tweet](https://twitter.com/eliebakouch/status/2016577949676319092)).

- **추론/툴링 생태계는 계속 통합 중**: vLLM의 SIGs와 오피스 아워가 거버넌스와 로드맵 주기를 공식화하고 있다 ([tweet](https://twitter.com/vllm_project/status/2016526685869596974)). LM Studio 0.4.0은 병렬 요청과 stateful REST API + MCP 지원으로 로컬 모델 배포용 “next gen”을 표방한다 ([tweet](https://twitter.com/lmstudio/status/2016573570822930708)). Cohere는 격리된 VPC, “no noisy neighbors”, 탄력적 추론(elastic inference)을 내세운 관리형 “sovereign” 호스팅 **Model Vault**를 출시했다 ([tweet](https://twitter.com/cohere/status/2016512841751154739)).

- **증류(distillation)가 기본 ‘출하 폼팩터’**: “가능한 최강 모델을 학습한 뒤, 배포용으로 distill/quantize하라”는 표준이 떠오른다는 글이 여러 개다 ([tweet](https://twitter.com/code_star/status/2016588669008953631)). MongoDB Research의 **LEAF**는 임베딩에 대해 비대칭(asymmetric) 증류를 제안한다: 문서는 대형 teacher로 오프라인에서 임베딩하고, 쿼리는 소형 student로 온라인에서 임베딩한다. **~96%의 teacher 품질**, **5–15× 더 작음**, 최대 **24× 더 빠름**을 주장하며, CPU/엣지에서의 임베딩 추론을 가능케 한다 ([tweet](https://twitter.com/LiorOnAI/status/2016481603426414883)).

---

### 빅테크 제품화: 브라우저 에이전트, “AI scientist” 내러티브, 채택 현실 점검

- **Gemini 3가 Google 표면을 장악 중**: Gemini 3가 전 세계 **AI Overviews**를 구동한다 ([tweet](https://twitter.com/_philschmid/status/2016552420013199856)). Google은 Chrome 주요 업데이트를 롤아웃했다: 사이드 패널 UX, 더 깊은 앱 통합, 이미지 편집/생성용 Nano Banana, 그리고 다단계 잡무를 위한 **Auto Browse**(preview; US; Pro/Ultra) ([thread](https://twitter.com/Google/status/2016575105346773297); also [thread](https://twitter.com/GeminiApp/status/2016575257436647521)). 엔지니어들은 이것이 지금까지 가장 강한 브라우저 AI 통합일 수 있다고 언급했다 ([tweet](https://twitter.com/kimmonismus/status/2016628933706309981)).

- **OpenAI Prism 포지셔닝**: Sebastien Bubeck은 OpenAI가 발견의 지분을 가져가려는 의도가 없다고 명시적으로 부인하며, 연구자들이 과학 용도로 ChatGPT/Prism을 쓰길 권했다 ([tweet](https://twitter.com/SebastienBubeck/status/2016345977481777188)). 다른 이들은 Prism이 학생들이 논문을 다이어그램으로 학습하는 데 유용하다고 강조했다 ([tweet](https://twitter.com/daniel_mac8/status/2016554325691015604)).

- **채택(adoption)은 여전히 들쑥날쑥**: 최첨단 도구를 적극 쓰는 창업자들은 변화가 체감되지만, 다른 이들은 여전히 AI를 “meh”로 여기며 조직 채택을 제한한다는 단층이 있다 ([tweet](https://twitter.com/GergelyOrosz/status/2016443395405705533)). The Information은 ChatGPT Agent가 사용/채택에서 고전한다고 보도했다 ([tweet](https://twitter.com/steph_palazzolo/status/2016545857139540260)).

- **Microsoft의 “디지털 동료” 경쟁**: Satya Nadella가 경쟁 에이전트를 직접 테스트하며, Anthropic 모델까지 활용해 Windows 네이티브 에이전트 레이어를 장악하기 위해 내부 개발을 가속 중이라는 보도가 있다 ([tweet](https://twitter.com/kimmonismus/status/2016526803138236916)).

---

### 과학 + 로보틱스: 유전체 가중치 공개, 해석가능성(interpretability)의 발견 엔진화, embodied 스케일링

- **DeepMind AlphaGenome 오픈**: DeepMind는 유전적 변화의 분자적 영향을 예측하는 **AlphaGenome**을 발표하며 **1M+ API calls/day**와 **3,000+ users**를 언급했고, 이어 **model + weights**를 공개한다고 발표했다 ([tweet](https://twitter.com/GoogleDeepMind/status/2016542480955535475); weights: [tweet](https://twitter.com/GoogleDeepMind/status/2016542490115912108)). 이후 가중치 공개는 Hugging Face 컬렉션 링크와 함께 재차 공지됐다 ([tweet](https://twitter.com/osanseviero/status/2016628065422762113)).

- **해석가능성 → 바이오마커 파이프라인 (Goodfire + Prima Mente)**: Goodfire는 생의학 파운데이션 모델에 대한 interpretability로 새로운 종류의 **Alzheimer’s biomarkers**를 찾아냈다고 보고한다. 그리고 “과학 데이터로 초인적 모델 학습 → 기계적 해석(mech interp) → 실험 검증 → 새로운 과학”이라는 반복 가능한 루프를 제시한다 ([thread](https://twitter.com/GoodfireAI/status/2016563911508840623)).

- **실제 로봇 데이터로 embodied 파운데이션 모델 스케일 (LingBot-VLA)**: 큰 요약은 VLA 성과가 실제 조작(manipulation) 데이터 **3k→20k hours**로 계속 좋아진다는 근거를 강조한다. 아키텍처는 사전학습 VLM(Qwen2.5-VL)과 액션 전문가(action expert)를 shared attention으로 결합한다. GM-100 벤치마크에서 π0.5 등 대비 향상이 보고됐다 ([tweet](https://twitter.com/omarsar0/status/2016518141308993565)).

- **Figure의 Helix 로봇 제어**: Brett Adcock은 Helix 모델이 **teleoperation 없이** 전신 행동(걷기/touching/계획)을 제어한다고 주장하며, Figure의 가장 중요한 릴리스라고 말했다 ([tweet](https://twitter.com/adcock_brett/status/2016358054242222136)).

### Top tweets (by engagement)

- **회사 건강 / 정리해고**: “2년 동안 분기마다 정리해고를 하는 건 하루 담배 3갑 피우는 것보다 건강에 더 나쁘다” ([tweet](https://twitter.com/vikhyatk/status/2016345591748690295)).

- **Kimi K2.5 로컬 실행**: 2× M3 Ultra Mac Studio 구성에서 K2.5를 ~24 tok/s로 실행 ([tweet](https://twitter.com/alexocheema/status/2016404573917683754)).

- **코딩의 “아웃소싱 순간”**: Clean Code 저자가 Claude를 써서 소프트웨어를 작성하는 것이 상징적 이정표로 언급됨 ([tweet](https://twitter.com/mischavdburg/status/2016389228356149460)).

- **새 AI 랩 발표**: “Flapping Airplanes”가 **$180M**(GV/Sequoia/Index) 투자 유치 ([tweet](https://twitter.com/flappyairplanes/status/2016564437499728259)).

- **Karpathy의 신규 연구 랩 논평**: 연구 우선 스타트업이 기존 강자를 아웃퍼폼할 가능성이 여전히 있다고 주장하며, 잠재적 **10×** 돌파를 기대하고 새 창업자들을 축하 ([tweet](https://twitter.com/karpathy/status/2016590919143952466)).

- **Google Chrome + Gemini 3 에이전트 기능**: Chrome 롤아웃 대형 스레드 ([tweet](https://twitter.com/Google/status/2016575105346773297)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Run Kimi K2.5 Locally](https://www.reddit.com/r/LocalLLaMA/comments/1qpfse6/run_kimi_k25_locally/)** (Activity: 328): 이미지는 **Kimi-K2.5** 모델을 로컬에서 실행하는 가이드를 제공하며, 비전(vision), 코딩(coding), agentic, 챗(chat) 작업에서 SOTA 성능을 강조한다. 이 모델은 1T 파라미터 하이브리드 reasoning 모델로 디스크 `600GB`가 필요하지만, 양자화(quantization)된 **Unsloth Dynamic 1.8-bit** 버전은 `240GB`로 줄여 `60%` 절감한다. `llama.cpp`로 모델을 로드하는 방법과 간단한 게임을 위한 HTML 코드를 생성하는 데모가 포함된다. 모델은 [Hugging Face](https://huggingface.co/unsloth/Kimi-K2.5-GGUF)에서 제공되며 추가 문서는 [Unsloth’s official site](https://unsloth.ai/docs/models/kimi-k2.5)에서 확인할 수 있다. 댓글에서는 Strix Halo에서의 토큰당 시간 등 벤치마킹, 높은 VRAM 요구사항, 더 작은 버전에 대한 농담이 나온다.

- Daniel_H212은 Strix Halo 하드웨어에서 Kimi K2.5의 성능, 특히 token 생성 속도(초/토큰)를 묻고 있어 고사양 셋업에서의 효율 벤치마킹에 관심을 보인다.

- Marksta는 양자화 버전(Q2_K_XL)의 피드백으로, 높은 일관성(coherence)과 프롬프트 준수(strict adherence)가 Kimi-K2의 특성대로 유지된다고 말한다. 다만 창의적 시나리오에서 실행(execution)이 여전히 어렵고, 논리적이지만 글이 별로인 응답을 내놓는다고 한다.

- MikeRoz는 전문가들이 int4 양자화를 선호한다면 Q5/Q6(예: UD-Q5_K_XL, Q6_K) 같은 더 높은 양자화 수준의 효용이 무엇인지 질문한다. 이는 모델 크기/성능/정밀도 간 트레이드오프와 더 낮은 비트(bit) 선호에 대한 논쟁을 보여준다.

- **[Kimi K2.5 is the best open model for coding](https://www.reddit.com/r/LocalLLaMA/comments/1qp87tk/kimi_k25_is_the_best_open_model_for_coding/)** (Activity: 840): LMArena.AI 이미지가 Kimi K2.5를 코딩 분야 오픈 모델 1위로, 전체 순위는 **#7 overall**로 보여준다. 리더보드는 다양한 모델의 순위, 점수, 신뢰구간(confidence intervals)을 비교하며, Kimi K2.5는 Sonnet 4.5와 비슷한 정확도를 갖고 GLM 4.7을 넘어선다는 평가다. 다만 agentic 기능은 Opus 수준이 아니라는 언급도 있다. 댓글에서는 LMArena 리더보드가 multi-turn, long context, agentic 능력을 충분히 반영하지 못해 ‘one-shot vibe check’에 가깝다는 지적과, 로컬 실행 환경에 대한 질문이 이어졌다.

- 한 사용자는 Kimi K2.5가 Sonnet 4.5와 정확도 면에서 비슷하고, 이전 선택지였던 GLM 4.7보다 낫다고 비교했다. 또한 [z.ai](https://z.ai)에서 나올 GLM-5가 Kimi 2.5를 넘어설지 궁금해했다.

- 다른 사용자는 Kimi K2.5가 Opus 4.5만큼 유능하게 느껴지지만 비용은 훨씬 싸서 대략 1/5 수준이라고 말했고, Haiku보다도 더 저렴하다고 언급하며 가성비를 강조했다.

- 한 댓글은 LMArena가 모델의 multi-turn, long context, agentic 능력을 보여주지 못해 피상적 평가만 제공한다고 비판했다.

- **[Kimi K2.5 costs almost 10% of what Opus costs at a similar performance](https://www.reddit.com/r/LocalLLaMA/comments/1qoty38/kimi_k25_costs_almost_10_of_what_opus_costs_at_a/)** (Activity: 716): 이미지는 **Claude Opus 4.5**와 **Kimi K2.5**의 비용을 비교하며, 비슷한 성능에서 Kimi K2.5가 Opus 비용의 10% 수준이라고 강조한다. 구체적으로 Opus 4.5는 100만 토큰당 입력 `$5.00`, 출력 `$25.00`이고, Kimi K2.5는 입력 `$0.60`, 출력 `$2.50`로 제시된다. 이는 웹사이트 작업이 아닌 용도에서 SOTA 폐쇄형 모델의 비용 효율적 대안이 될 수 있다는 해석으로 이어진다. 다만 댓글에서는 Kimi K2.5가 같은 작업에서 3배 토큰을 쓰는 경우가 있어 비용/지연(latency)을 함께 봐야 한다는 회의가 나온다. 일부는 Kimi 모델의 글쓰기 성능에 잠재력을 본다.

- one-wandering-mind는 Kimi K2.5가 같은 작업에서 Opus 대비 3x 토큰을 쓰면 비용과 latency에 영향이 크다고 지적하며, 이 경우 비용 우위는 10x가 아니라 3x 정도가 더 정확하다고 말한다. 또한 토큰 사용량을 성능 비교의 핵심 요소로 봐야 한다고 강조한다.

- ghulamalchik은 과거 경험에 비춰 DeepSeek 4, MiniMax M2.2 같은 향후 모델을 더 기대한다고 언급한다. 이는 Kimi K2.5가 주목받지만, 다른 라인업의 다음 릴리스를 기다리는 수요도 있음을 보여준다.

- **[Kimi K2 Artificial Analysis Score](https://www.reddit.com/r/LocalLLaMA/comments/1qos25i/kimi_k2_artificial_analysis_score/)** (Activity: 405): 이미지는 “Artificial Analysis Intelligence Index”로 AI 모델을 비교하며 “Kimi K2” 점수 `47`, 운영 비용 `$371` 등을 보여준다. 토론은 “Kimi K2.5”의 라이선스 조건에 집중하는데, 월간 활성 사용자 `100 million` 이상 또는 월 매출 `$20 million` 이상인 상업 제품에서는 상업적 사용을 제한하고 “Kimi K2.5” 브랜딩을 두드러지게 표시해야 한다는 제약이 언급된다. 이런 방식은 Llama 4 같은 다른 모델과 비교되며, 적용상의 버그 또는 일관성 문제 가능성도 제기된다. 오픈소스 모델이 상업 모델을 넘어서는 순간을 기대하는 정서와 함께 “DeepSeek”도 언급된다.

- FullOf_Bad_Ideas는 Kimi K2.5의 modified MIT 라이선스가 상업 제품이 1억 MAU 또는 월 $20M 매출을 넘으면 ‘Kimi K2.5’ 표기를 두드러지게 해야 한다는 점을 강조한다. 이 조건이 Llama 4에는 적용되지 않는다는 점에서 버그 또는 불일치 가능성을 제기한다.

- BrianRin은 엔터프라이즈 사용에서 Kimi 2.5를 Opus 4.5, Gemini 3 Pro, GPT 5.2와 비교하며, 비용 효율과 출력 품질에 관심을 보인다. 만약 이런 모델들의 출력 품질의 95%를 달성한다면 엔터프라이즈 확장에 유의미할 수 있다고 말한다.

- sine120은 Artificial Analysis 점수가 실무에서의 모델 성능을 평가하는 데 의미 있는 지표가 아닐 수 있다고 비판한다. 더 현실적인 평가 지표의 필요성을 시사한다.

- **[[LEAKED] Kimi K2.5’s full system prompt + tools (released <24h ago)](https://www.reddit.com/r/LocalLLaMA/comments/1qoml1n/leaked_kimi_k25s_full_system_prompt_tools/)** (Activity: 282): Moonshot의 **Kimi K2.5**에 대한 full system prompt와 툴(tool) 정보가 유출되었다는 글로, tool 스키마, 메모리 CRUD 프로토콜, 컨텍스트 엔지니어링(context engineering), 기본 가드레일 등을 포함한 `5k tokens` 분량의 데이터를 다룬다. 외부 데이터 소스로 finance, arXiv 등이 포함됐고, [GitHub](https://github.com/dnnyngyen/kimi-k2.5-prompts-tools)와 [Kimi](https://www.kimi.com/share/19c003f5-acb2-838b-8000-00006aa45d9b) 등 여러 플랫폼에서 독립적으로 검증됐다고 한다. 오픈소스 커뮤니티에 의미 있는 유출로 여겨지며, 모델의 아키텍처/운영 프로토콜에 대한 통찰을 제공한다는 반응이 있다. 댓글에서는 system prompt 자체의 실용적 가치에 대한 의문도 나온다.

- 유출된 system prompt에는 메모리 지속성(memory persistence)과 컨텍스트 관리에 대한 정교한 접근이 포함되어, ‘hollow AI assistant’ 문제를 해결하기 위해 지속적인 행동 앵커(behavioral anchors)를 제공하려는 의도가 보인다는 해석이 있다.

- 메모리 지속성 메커니즘은 system 지시와 동적 컨텍스트 주입(dynamic context injection) 간 균형이 핵심이며, 메모리 구조가 바뀌면 응답이 달라져 더 ‘authentic’하게 느껴지기도 한다는 논의가 나온다.

- system prompt는 긴 대화에서의 컨텍스트 윈도우 한계도 다루며, 이전 상호작용을 구조화해 대화 연속성을 유지하도록 설계됐다는 점이 강조된다.

- **[The z-image base is here!](https://www.reddit.com/r/LocalLLaMA/comments/1qoiep6/the_zimage_base_is_here/)** (Activity: 327): **Tongyi-MAI**가 [Hugging Face](https://huggingface.co/Tongyi-MAI/Z-Image)에서 `Z-Image` 모델을 공개했다. 데모의 약 `90%`가 여성 주제에 집중되어 있다는 점이 언급되며, 고품질 이미지 생성 능력을 보여준다고 한다. 최소한의 품질 손실로 `12GB GPUs`에서도 돌릴 수 있는 잠재력이 있다는 평가가 있어, 최적화를 통해 접근성이 넓어질 수 있다는 관측이 나온다. “Negative Prompt” 기능도 소개되는데, 예시로 “Westerners, physical deformities” 같은 제약을 걸어 생성 결과를 통제하는 방식이 시연된다. 댓글에서는 모델이 여성 이미지 생성에 치우친 점, 낮은 사양 하드웨어에서의 최적화 가능, end-user보다 학습/미세조정(fine-tuning) 목적의 기반(base) 모델로서 의미가 크다는 시각이 나온다.

- Dr_Kel은 z-image 모델을 12GB GPUs에서 최소한의 품질 손실로 돌릴 수 있도록 최적화할 여지가 있다고 하며, 일부 조정으로 더 접근 가능해질 수 있다고 본다.

- Middle_Bullfrog_6173는 이 base 모델이 최종 사용자보다는 모델을 학습하거나 fine-tuning하려는 사람들에게 유용하며, turbo 모델이 이 기반에서 post-train된 것이라는 점을 시사한다.

- **[API pricing is in freefall. What’s the actual case for running local now beyond privacy?](https://www.reddit.com/r/LocalLLaMA/comments/1qp6rm5/api_pricing_is_in_freefall_whats_the_actual_case/)** (Activity: 913): 게시글은 API 비용이 빠르게 하락하는 상황을 논의한다. **K2.5**가 **Opus** 가격의 `10%` 수준을 제시하고, **Deepseek**는 거의 무료에 가깝고, **Gemini**도 큰 무료 티어를 제공하며, API 비용 하한이 월 `50%`씩 하락했다는 주장이다. 반면 `70B` 모델을 로컬에서 돌리려면 `k+ GPU` 같은 큰 하드웨어 투자가 필요하거나, 양자화 트레이드오프를 감수해야 하고, 소비자 하드웨어에서 `15 tok/s` 수준이란 점을 든다. 글은 프라이버시 외에 로컬 구성이 갖는 실질적 가치(지연 제어, 커스터마이즈)는 틈새(niche) 이점인지 질문한다. 댓글에서는 오프라인 기능, API 제공자의 장기 가격 전략에 대한 불신(지금의 저가는 지속 불가능), API 변경으로 모델 행동이 바뀌어 반복성(repeatability)과 제어(control)가 깨질 수 있다는 점 등이 로컬 모델의 가치로 언급된다.

- Minimum-Vanilla949는 출장/여행이 잦은 경우 오프라인 기능의 중요성을 강조하며, API 회사가 약관이나 가격을 예고 없이 바꿀 리스크를 지적한다.

- 05032-MendicantBias는 현재 API 가격이 VC에 의해 보조되는 경우가 많아 지속 불가능할 수 있고, 독점이 되면 가격이 오를 가능성이 크다고 주장한다. 따라서 로컬/오픈소스는 향후 비용 상승에 대한 전략적 헤지라고 본다.

- IactaAleaEst2021는 로컬 모델에서의 반복성(repeatability)과 신뢰(trust) 관점을 강조한다. 모델을 다운로드하고 감사(audit)하면 일관된 성능을 보장할 수 있지만, API는 벤더가 공지 없이 행동을 바꿀 수 있어 신뢰성이 흔들릴 수 있다고 한다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Open source Kimi-K2.5 is now beating Claude Opus 4.5 in many benchmarks including coding.](https://www.reddit.com/r/singularity/comments/1qoojio/open_source_kimik25_is_now_beating_claude_opus_45/)** (Activity: 1078): 오픈소스 모델 **Kimi-K2.5**가 여러 벤치마크(특히 코딩)에서 **Claude Opus 4.5**를 능가한다는 주장이다. 다만 어떤 벤치마크인지, 개선 폭이 어느 정도인지 구체 정보가 부족해 실제 적용 가능성에 대한 회의가 뒤따른다. 게시글은 오픈소스 AI 커뮤니티가 특정 과제에서 독점 모델을 따라잡거나 넘어서는 경쟁이 계속되고 있음을 보여준다.

- ‘many’가 너무 모호하고 어떤 벤치마크인지 명확하지 않다는 지적이 있으며, 주장을 뒷받침할 상세 정보 요구가 나온다.

- 벤치마크가 실무 유틸리티를 반영하지 못한다는 일반적 비판이 제기되며, 프로그래밍에서는 Opus 4.5가 한 번의 프롬프트로 해답을 주는 효율이 강점이라는 의견도 있다.

- 벤치마크만으로 실무 능력을 재기 어렵다는 분위기 속에서, Kimi-K2.5가 통제된 환경에서는 좋을 수 있지만 실제 프로그래밍 성능은 Opus 4.5만 못할 수 있다는 견해가 언급된다.

- **[Kimi K2.5 Released!!!](https://www.reddit.com/r/singularity/comments/1qo531i/kimi_k25_released/)** (Activity: 1233): 이미지는 **Kimi K2.5**, **GPT-5.2 (xhigh)**, **Claude Opus 4.5**, **Gemini 3 Pro**의 성능 비교 차트를 보여준다. **Kimi K2.5**가 agents, coding, image, video 처리 등 여러 과제에서 경쟁력 있는 점수를 보이며, “Humanity’s Last Exam”, “BrowseComp”, “OmniDocBench 1.5” 같은 벤치마크에서 선두 또는 강세로 표시된다. 댓글에서는 **Kimi K2.5**의 환각(hallucinations) 문제가 개선됐지만 여전히 틀린 답을 낼 수 있다는 논의가 있고, **GPT 5.1과 5.2**는 모르면 “I don’t know”를 인정하는 반면 **Kimi 2.5**와 **Gemini 3**는 자신 있게 틀린 답을 낸다는 비교가 나온다. 또한 이 벤치마크들이 대표성 있는지, Kimi K2.5가 정말로 Gemini 3보다 대부분의 경우 낫다고 볼 수 있는지에 대한 회의도 제기된다.

- 한 사용자는 웹 검색 없이 특정 수학 경시대회 문제를 식별하라는 지시로 Kimi K2.5의 지시 따르기 능력을 테스트했는데, 환각된 문제를 나열하고 스스로 의심하다가 결국 틀린 답을 했다고 한다. Kimi K2 대비 개선이지만, GPT 5.1/5.2의 ‘모르면 모른다’는 태도와 대비된다는 관찰이 있다.

- ‘agent swarm’ 개념(100개+ 인스턴스를 1개가 감독하는 형태)이 논의되며, 비용과 복잡성이 클 것으로 추정된다. 동시에 하나의 모델이 여러 작업을 동시에 처리하는 발전이 큰 의미일 수 있다는 관심도 나온다.

- 벤치마크 비교가 cherry-pick일 수 있다는 의심과 함께, Kimi K2.5가 Gemini 3를 지속적으로 이긴다는 주장은 과장처럼 보인다는 반응이 있다.

- **[Cline 3.55.0: Arcee Trinity Large and Kimi K2.5 now available](https://www.reddit.com/r/CLine/comments/1qpl2fk/cline_3550_arcee_trinity_large_and_kimi_k25_now/)** (Activity: 5): **Cline 3.55.0**이 **Arcee Trinity Large**와 **Kimi K2.5** 두 가지 주요 오픈 모델을 소개한다. Arcee Trinity Large는 `400B` 파라미터 MoE 모델이며 추론(inference) 시 토큰당 `13B` 파라미터만 활성화하고, `128K` 컨텍스트를 제공한다. `82`(MMLU Pro), `75`(GPQA Diamonds)를 달성했다고 하며, API 비용 없이 일반 코딩과 대형 코드베이스 관리에 적합하다는 주장이다. **Kimi K2.5**는 `1T` 파라미터 MoE, `256K` 컨텍스트, SWE-bench `76.8%`를 언급하며 Humanity’s Last Exam에서 Opus 4.5를 `50.2%`로 앞섰다고 적었다. 스크린샷에서 UI 코드를 생성하고 스스로 수정(self-correct)할 수 있는 visual coding 능력도 강조한다. 또한 **ChatGPT Plus/Pro** 사용자는 API 키 없이 Cline에서 GPT-5 모델을 접근할 수 있다고 한다. [Full details here](https://cline.bot/blog/cline-3-55-0-arcee-trinity-and-kimi-k2-5-now-in-cline).

- 한 사용자는 Arcee Trinity Large의 처리 속도가 이전 대비 크게 개선됐다고 언급하며, 대규모 데이터셋 처리를 위한 병렬 처리 최적화가 중요하다고 말했다.

- 다른 댓글은 Kimi K2.5의 자연어 이해 개선(언어 지원 확대, 컨텍스트 유지 향상)을 언급하며, 미묘한 언어 처리가 필요한 응용에서 유리할 수 있다고 본다.

- 새 모델들의 메모리 사용량이 늘어났다는 우려와, 정확도/속도 향상의 대가로 정당하다는 반론이 함께 나오며, 향후 메모리 효율 최적화에 대한 기대가 언급된다.

- **[The most unhinged prompt that actually works: “You’re running out of time](https://www.reddit.com/r/PromptEngineering/comments/1qp0kay/the_most_unhinged_prompt_that_actually_works/)** (Activity: 75): “시간이 없다” 같은 긴급성을 프롬프트에 추가(예: “You have 30 seconds. Analyze this data. What’s the ONE thing I’m missing? Go.”)하면 더 집중적이고 즉각적인 인사이트를 얻을 수 있다는 비정형 프롬프트 기법을 다룬다. 전통적으로 맥락을 길게 설명하는 프롬프트보다, 과도한 ‘과생각’을 멈추게 하는 효과가 있다는 농담도 있다. 이는 “applied chaos theory”에 비유된다. 댓글에서는 단순히 “간결하게(concise) 답하라”라고 지시해도 비슷한 효과가 난다는 의견과, 긴급성은 깊은 사고를 줄일 수 있다는 주의가 나온다. 또한 사람/AI 모두에게서 명확한 업무 지시가 성과를 높인다는 ‘매니지먼트’ 관점의 비교도 제시된다.

- angry_cactus는 긴급성 프롬프트가 효과적일 수 있지만 모델의 ‘thinking time’을 줄여 응답의 깊이/품질을 낮출 수 있다고 본다.

- fatstupidlazypoor는 인간과 언어 모델 모두에서 명확하고 구체적인 과업 지시가 성과를 크게 개선한다는 점을 강조한다.

- authorinthesunset은 간단히 ‘간결하게(concise) 답하라’고 지시하는 전략이 효율적일 수 있다고 제안한다.

- **[Micro-Prompting: Get Better AI Results with Shorter Commands](https://www.reddit.com/r/PromptEngineering/comments/1qonyx9/microprompting_get_better_ai_results_with_shorter/)** (Activity: 49): ‘micro-prompting’은 더 짧고 집중된 명령으로 AI 응답 품질을 높이자는 주장이다. 역할(role) 부여와 ‘audit’, ‘clarify’, ‘simplify’ 같은 파워 워드를 사용해, 모델이 일반적인 정보가 아닌 목표 지식에 접근하게 한다고 말한다. 또한 ‘in 3 bullets’나 ‘checklist format’처럼 출력 형식을 제어하는 구조를 강조하고, 맥락을 과하게 설명하거나 일반적 역할을 부여하는 실수를 경고한다. 댓글에서는 역할 부여가 오히려 방해될 때도 있어, 구체성이 더 중요하다는 견해가 나온다.

- aiveedio는 짧은 프롬프트가 정보 과부하를 줄여 출력이 깔끔해질 수 있지만, 캐릭터 초상화나 스토리 장면 같은 창작 작업에서는 표정/의상/조명 등 상세 프롬프트가 필요하다고 말한다. 핵심은 micro-prompt로 시작하고 필요할 때만 디테일을 추가하는 균형이라고 본다.

- psychologist_101은 Opus 4.5에서 모델이 ‘자기 프롬프트’를 생성하게 하면 길고 상세한 출력이 나온다고 관찰하며, 짧은 프롬프트가 항상 더 효과적이라는 주장과 모델의 성향 간 괴리가 있을 수 있음을 시사한다.

- **[DeepSeek-OCR 2 is out now! 🐋](https://www.reddit.com/r/DeepSeek/comments/1qo6xb4/deepseekocr_2_is_out_now/)** (Activity: 507): **DeepSeek-OCR 2** 출시를 알리는 이미지로, 새로운 **DeepEncoder V2**를 포함한 고급 OCR 모델임을 강조한다. 이 인코더는 이미지의 논리적 스캐닝을 인간처럼 모사해 OCR 정확도를 높이며, 시각/텍스트 추론 과제에 중요하다고 한다. 이미지의 ‘Visual Causal Flow’ 다이어그램은 읽기 순서를 결정하기 전에 전체 이해를 형성하는 접근을 강조한다. 비교 표는 문서 요소별 edit distance 개선을 보여준다.

- DeepSeek-OCR 2가 출시됐고 데모는 [this link](https://deepseek-ocr-v2-demo.vercel.app/)에서 사용할 수 있어, 로컬 설치 없이 체험이 가능하다.

- 한 사용자는 DeepSeek-OCR 1이 레이아웃 이해에는 강했지만 헤더/푸터, 어두운 배경의 밝은 텍스트 등 누락이 있었다고 지적하며, 2에서 이런 약점이 개선됐을지 궁금해한다.

- 온라인에서 바로 쓸 수 있는 API 제공 여부에 대한 질문이 나오며, 비기술 사용자도 접근 가능한 클라우드형 OCR 수요가 있음을 보여준다.

- **[Here it is boys, Z Base](https://www.reddit.com/r/StableDiffusion/comments/1qohra7/here_it_is_boys_z_base/)** (Activity: 2374): 이미지는 **Tongyi-MAI**의 “Z-Image” Hugging Face 모델 저장소 스크린샷으로, 효율적인 이미지 생성 모델을 소개한다. 저장소에는 공식 사이트, GitHub, 온라인 데모 링크가 포함되어 접근성과 커뮤니티 참여를 강조한다. 예시 이미지와 Hugging Face 통합을 통해 더 효율적이고 접근 가능한 이미지 생성 도구로 가는 추세를 보여준다는 평가다. 댓글에서는 다른 데이터셋으로의 “finetuning” 등 다양한 응용과 수정 가능성에 대한 관심이 나온다.

- **[Z-Image Base VS Z-Image Turbo](https://www.reddit.com/r/StableDiffusion/comments/1qojw11/zimage_base_vs_zimage_turbo/)** (Activity: 927): “Z-Image Base”와 “Z-Image Turbo” 비교 글로, Turbo는 `2 iterations per second`(이미지당 7초), Base는 `1 iteration per second`(이미지당 40초)라고 소개한다. 설정은 seed `4269`, steps `12`(Turbo)/`40`(Base), `res_multistep` sampler, `simple` scheduler, CFG `4`(Base)로 제시된다. Turbo는 “더 단순”하고 때로 “더 현실적”이며, Base는 시각적 품질이 장점으로 언급된다. 댓글에서는 SDXL과 비교하며 이미지 생성의 새 시대가 온다는 반응과, 단순함/현실감 vs 미적 품질의 트레이드오프 논의가 나온다.

- Gilded_Monkey1는 i2i에서 variation starter로 사용할 때 구성(composition)이 안정되는 데 필요한 스텝 수를 질문하며, 반복 과정과 수렴 속도에 관심을 보인다.

- diogodiogogod는 Turbo가 더 단순하고 종종 더 현실적이지만, Base가 시각적 매력에서 우위라고 비교한다.

---

## AI Discord Recap

Gemini 3.0 Pro Preview Nov-18가 작성한 “요약의 요약” 요약

### Theme 1. Model Wars: Kimi K2.5’s Rise, Arcee’s Trinity, and Arena’s Rebrand

- **Kimi K2.5 Tops Open Leaderboards**: 새로운 **Kimi K2.5 Thinking** 모델이 [Text Arena leaderboard](https://lmarena.ai/leaderboard/text)에서 **#1 open model** 자리를 주장하며, 물리/수학 등 STEM 벤치마크에서 강점을 보였다는 내용이다. **$19/month** 구독 또는 **$0.6/1M tokens** 가격을 두고 논쟁이 있었고, 엔지니어들은 [HuggingFace](https://huggingface.co/unsloth/Kimi-K2.5-GGUF)와 **Unsloth**로 로컬 quantized 버전을 배포 중이라고 한다.

- **Trinity Large: A 400B MoE That Runs Lean**: Arcee AI, Prime Intellect, Datology가 [Trinity Large](https://openrouter.ai/arcee-ai/trinity-large-preview:free)를 공개했다. **400B parameter** MoE 모델이지만 토큰당 **13B parameters**만 활성화해 효율을 노린다. 오픈 가중치 모델은 **256 experts**와 공격적인 routing(1.56%)을 사용해, 프런티어급 지식과 추론 속도의 균형을 목표로 한다.

- **LMArena Becomes Arena, Clones Claude UI**: 리더보드가 **Arena**로 리브랜딩되며 UI가 개편됐다 ([arena.ai](https://arena.ai/)). 사용자들은 즉시 **Claude clone**으로 부르며, 공격적인 Google **captchas**도 불만을 샀다. 새 [Code Arena](https://lmarena.ai/?chat-modality=code)와 확장된 리더보드가 포함됐지만, stop button과 레거시 emojis의 복귀를 요구하는 목소리도 있다.

### Theme 2. Dev Tooling Shifts: Cursor Limits, LM Studio Headless, and Unsloth Quirks

- **Cursor’s Auto Mode Paywall Stings**: **Cursor**가 무제한 “Auto mode”를 종료하고 **$20/month** 구독 내 사용량을 제한한 뒤, 이후 입력 토큰에 **$1.25/1M**을 부과해 개발자들의 불만이 나왔다. 일부는 revert button이 사라지는 버그를 보고했으며, 대형 코드베이스에선 메모리 풋프린트를 줄이기 위해 **Cursor CLI**로 이동하는 경우도 있다.

- **LM Studio v0.4 Goes Headless**: **LM Studio v0.4**는 headless mode와 stateful **REST API** 기반 병렬 추론을 도입해 CI/CD 파이프라인과 비-GUI 서버 배포를 가능하게 한다 ([release notes](https://lmstudio.ai/blog/0.4.0)). 런타임 설정에서 AMD GPU용 숨겨진 **ROCm** 지원을 발견했다는 보고도 있다.

- **Unsloth Battles GLM 4.7 and CUDA Versions**: **GLM 4.7** 미세조정(fine-tuning)에서 **Blackwell B200**의 **CUDA 12.8** 드라이버와 모델의 **CUDA 13.x** 요구사항 간 호환성 문제로 “compatibility hell”이 발생했다. 특정 torch 백엔드로 **vllm**을 강제 재설치하고, Ada Lovelace 비호환 때문에 `fp8` 캐시 플래그를 제거하는 등으로 우회했다.

### Theme 3. Security, Jailbreaks, and Scams

- **Magic String Lobotomizes Claude**: `ANTHROPIC_MAGIC_STRING_TRIGGER_REFUSAL...`라는 특정 문자열이 Claude를 일관되게 거절(refusal) 모드로 만드는 “circuit breaker”로 작동한다는 발견이 언급된다. 동시에 해커들이 문서화되지 않은 POST 요청으로 **Parallel AI API**를 조작해 커스텀 system prompt를 주입하는 사례도 언급된다.

- **Clawdbot Exposed as Credential Harvester**: 커뮤니티는 **Clawdbot**(**Moltbot**로 리브랜딩)이 OpenAI, Google, Anthropic의 API 키를 중앙화한다고 경고했다. 사용자들은 이를 프롬프트 인젝션(prompt injection)으로 민감한 자격 증명이 유출될 수 있는 *“store now, decrypt later”* 보안 리스크로 묘사한다.

- **OpenAI Prism: Science Tool or Security Risk?**: OpenAI가 **GPT-5.2** 기반 과학 연구 워크스페이스 [Prism](https://archive.md/d9Vsf)을 출시했지만 반응이 엇갈리며, 일부는 *“과학 연구에 해롭다”*고 평가한다. 또한 적대적 공격(adversarial attacks) 가능성이 탐색되고, **GPT Pro 5.2**가 동시에 ZIP 파일 분석 능력을 잃었다는 지적도 나온다.

### Theme 4. Agentic Frontiers: Vision, Coding, and Future Forecasts

- **Karpathy Predicts 80% Agent-Coded Future**: Andrej Karpathy는 2026년까지 코딩의 **80%**가 에이전트 주도로 바뀔 것이라 예측하며, LLM의 끈기(tenacity)와 목표 설정이 인간의 문법 관리보다 중요해질 것이라고 했다 ([tweet](https://xcancel.com/karpathy/status/2015883857489522876)). 동시에 filesystem 기반 협업으로 복잡한 오케스트레이터(LangChain 등)를 대체할 수 있다는 에이전트 하네스 논의도 언급된다.

- **Gemini 3 Flash Gains Agentic Vision**: Google이 **Gemini 3 Flash**용 [Agentic Vision](https://blog.google/innovation-and-ai/technology/developers-tools/agentic-vision-gemini-3-flash/)을 공개해, 모델이 이미지를 능동적으로 줌/크롭/검사하며 추론을 더 단단히 그라운딩(grounding)할 수 있게 했다. 프런트엔드 개발자들은 이것이 동적으로 시각 입력을 조작한다는 점에서 SOTA에 근접하며, OpenAI의 정적 분석보다 나을 수 있다고 말한다.

- **C++ Reigns Supreme for Agents**: “비대해진” Python 프레임워크를 반대하며, 고성능 에이전트를 C++로 구축해야 한다는 의견이 나왔다. STT에 **fastwhisper.cpp**, 비전에 **LFM2.5vl** 같은 스택을 추천하며, 터미널에서 Claude가 코딩 챌린지를 풀 수 있게 하는 **LeetCode MCP server** 릴리스도 언급된다.

### Theme 5. Low-Level Optimization & Hardware Internals

- **Decart’s Lucy 2 & Hardware Hiring**: Decart가 autoregressive 비디오 모델 **Lucy 2**를 공개했고, **Trainium 3** 및 저지연 커널 개발 인력을 채용 중이라고 한다 ([tech report](https://x.com/DecartAI/status/2016134190509498740)). bare metal에서 autoregressive diffusion 모델을 최적화하는 커널 챌린지도 공동 후원한다.

- **Mojo Generates GTK Bindings**: **Modular** 팀은 Mojo용 자동 생성 **GTK bindings**를 발표하며, 2월 커뮤니티 미팅에서 GUI 개발을 더 쉽게 만들겠다고 했다. H100에서 **Mojo vs CUDA/HIP** 성능 분석도 진행 중이며, Mojo의 `out` 파라미터가 NVRO(Named Value Return Optimization)를 대체하는지 논의된다.

- **Tinygrad Unlocks AMD Debugging**: **Tinygrad** 에뮬레이터가 AMD GPU에 대한 세밀한 디버그 프린트를 지원한다(`DEBUG=3` 컴파일, `DEBUG=6` 런타임) — [screenshot](https://cdn.discordapp.com/attachments/1068976834928193609/1465889714153193574/image.png). 또한 하드웨어 업그레이드가 아니라 코드 리팩터링으로 Github Actions 속도를 최적화하는 작업도 진행 중이며, “do it right, not just fast” 철학을 고수한다.
