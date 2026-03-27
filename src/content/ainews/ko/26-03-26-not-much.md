---
title: "OpenAI GPT-5.4 mini/nano 성능·비용 경쟁"
summary:
  - "Google, Gemini 3.1 Flash Live 공개"
  - "Mistral Voxtral TTS 오픈웨이트 출시"
  - "Cohere Transcribe, 첫 오디오 모델 공개"
  - "OpenAI GPT-5.4 mini/nano 성능·비용 경쟁"
  - "Cline Kanban, 멀티 에이전트 워크트리 지원"
date: 2026-03-24
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-26-not-much.md"
hasHeadline: false
headline: "OpenAI GPT-5.4 mini/nano 성능·비용 경쟁"
tags:
  - OpenAI
  - GPT-5.4
  - Gemini
isFeatured: false
---

## 헤드라인: OpenAI GPT-5.4 mini/nano 성능·비용 경쟁

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

GPT-5.4 mini와 GPT-5.4 nano에 대한 비교가 공유되면서, 두 모델이 멀티모달(multimodal)이고 400k 컨텍스트(context)와 GPT-5.4와 동일한 추론(reasoning) 모드를 제공한다는 점이 강조됐다. 특히 nano는 일부 에이전틱(agentic)·터미널(terminal)형 과제에서 경쟁 모델 대비 벤치마크가 앞서는 사례가 언급됐고, 실효 비용(effective cost) 기준으로도 저렴한 쪽으로 평가됐다.

반면 두 변형 모두 출력이 장황(verbose)해지고 출력 토큰(output token) 사용량이 늘어나는 경향, 환각(hallucination) 비율 증가로 특정 지표에서 성능이 약하다는 지적이 함께 나왔다. 실사용에서 codex/GPT-5.4 계열이 “너무 길게 말한다”는 개발자 불만과도 맞물린다는 언급이 있었다.

---

## AI Twitter Recap

### 모델 및 제품 출시: Gemini 3.1 Flash Live, Mistral Voxtral TTS, Cohere Transcribe, OpenAI GPT-5.4 mini/nano

- **Gemini 3.1 Flash Live로 실시간(realtime) 강화**: Google이 음성(voice)·비전(vision) 에이전트용 새 실시간 모델로 **Gemini 3.1 Flash Live**를 공개하며 더 낮은 지연(latency), 함수 호출(function calling) 개선, 소음 환경 강건성(robustness) 강화, Gemini Live에서 **대화 메모리 2배** 등을 강조했다. 출시 범위는 **Gemini Live**, **Search Live**, **AI Studio preview**, 엔터프라이즈 CX까지 확장됐고, 일부 개발자용 요약에서는 **70 languages**, **128k context**, **SynthID**를 통한 생성 오디오 워터마킹(watermarking)도 언급됐다 ([Logan Kilpatrick](https://x.com/OfficialLoganK/status/2037187750005240307), [Google DeepMind](https://x.com/GoogleDeepMind/status/2037190678883524716), [Sundar Pichai](https://x.com/sundarpichai/status/2037189971359261081), [Google](https://x.com/Google/status/2037190616061284353)). 타사 벤치마크인 [Artificial Analysis](https://x.com/ArtificialAnlys/status/2037195442489090485)는 “thinking level” 트레이드오프를 강조하며 **high** reasoning에서 **95.9% Big Bench Audio**·**2.98s TTFA**, **minimal**에서 **70.5%**·**0.96s TTFA**를 제시했다.
- **음성(speech) 스택 경쟁 가속**: **Mistral AI**가 프로덕션(production) 음성 에이전트를 겨냥한 오픈웨이트(open-weight) TTS 모델 **Voxtral TTS**를 공개했고, **9-language** 지원, 낮은 지연(latency), 사람 선호도(preference) 지표를 강조했다. 여러 요약에서는 **3B/4B-class** 규모, **~90 ms time-to-first-audio**, 선호도 테스트에서 ElevenLabs와의 비교 등이 언급됐다 ([Mistral AI](https://x.com/MistralAI/status/2037183026539483288), [Guillaume Lample](https://x.com/GuillaumeLample/status/2037274172607594609), [vLLM](https://x.com/vllm_project/status/2037193518519902408), [kimmonismus](https://x.com/kimmonismus/status/2037149838023024753)). 이어 **Cohere**는 첫 오디오 모델 **Cohere Transcribe**를 **Apache 2.0**으로 공개하며 Hugging Face Open ASR 리더보드에서 영어 1위( **5.42 WER**)와 **14-language** 지원을 주장했다 ([Cohere](https://x.com/cohere/status/2037159129345614174), [Aidan Gomez](https://x.com/aidangomez/status/2037172942803701838), [Jay Alammar](https://x.com/JayAlammar/status/2037172878165053951)). 또한 Cohere가 vLLM에 **encoder-decoder serving 최적화**(가변 길이 encoder batching, packed decoder attention)를 기여해 speech 워크로드에서 최대 **2x throughput** 향상을 냈다는 언급도 있었다 ([vLLM](https://x.com/vllm_project/status/2037197243111895066)).
- **OpenAI의 소형 GPT-5.4 변형은 비용 경쟁력, 단 주의점**: [Artificial Analysis](https://x.com/ArtificialAnlys/status/2037043552405119395)는 **GPT-5.4 mini**와 **GPT-5.4 nano**를 다루며 두 모델이 멀티모달(multimodal)이고 **400k context**를 제공하며 GPT-5.4와 동일한 추론(reasoning) 모드를 갖췄다고 전했다. 특히 **GPT-5.4 nano**는 일부 에이전틱(agentic)·터미널(terminal)형 작업에서 **Claude Haiku 4.5**와 **Gemini 3.1 Flash-Lite Preview**보다 앞선 벤치마크 결과가 보고됐고, 실효 비용(effective cost) 기준으로 더 저렴하다는 평가도 나왔다. 반면 두 변형 모두 **매우 장황(verbose)**하고 출력 토큰(output token) 사용량이 높으며, 환각(hallucination)으로 인해 **AA-Omniscience** 성능이 약하다는 설명이 포함됐다. 이는 codex/GPT-5.4의 장황함을 체감한다는 개발자 불만과 맞물린다는 언급도 있었다 ([giffmana](https://x.com/giffmana/status/2037194495389810863)).
- **기타 주목할 만한 출시/변경**: [Zai](https://x.com/Zai_org/status/2037148488983511527)는 GLM Coding Plan 사용자에게 **GLM-5-Turbo**를 제공했고, [Reka](https://x.com/RekaAILabs/status/2037186645246530025)는 OpenRouter에 **Reka Edge**와 **Flash 3**를 올렸다. [Google/Gemini](https://x.com/GeminiApp/status/2037247063382167567)는 다른 AI 앱에서 **chat-history 및 preference import**를 롤아웃하기 시작했다. 또한 여러 게시물은 **OpenAI**가 핵심 생산성(productivity)에 집중하면서 **Sora**와 “adult mode” 챗봇 같은 사이드 프로젝트를 후순위로 돌렸다고 전했다 ([Andrew Curran](https://x.com/AndrewCurran_/status/2037145999094002104), [kimmonismus](https://x.com/kimmonismus/status/2037130214522708303)).

### 에이전트 인프라, 하네스(harness), 멀티 에이전트 UX

- **Cline Kanban이 멀티 에이전트 UX를 구체화**: 이날 가장 명확한 툴링(tooling) 출시는 **Cline Kanban**으로, 여러 CLI 코딩 에이전트를 분리된 **git worktrees**에서 병렬로 오케스트레이션(orchestration)하는 **무료 오픈소스 로컬 웹 앱**이다. **Claude Code, Codex, Cline**을 지원하며 작업 의존성 체이닝, diff 리뷰, 보드에서 브랜치 관리 등을 제공한다 ([Cline](https://x.com/cline/status/2037182739695493399), [Cline](https://x.com/cline/status/2037182747446567255)). 빌더들의 반응도 강했는데, 현행 코딩 에이전트 워크플로의 두 병목—추론(inference) 대기와 병렬 작업에서의 머지 충돌(merge conflict)—을 직접 겨냥한다는 점에서 “기본 멀티 에이전트 인터페이스”가 될 수 있다는 평가가 나왔다 ([Arafat](https://x.com/arafatkatze/status/2037188879422292467), [testingcatalog](https://x.com/testingcatalog/status/2037188884925190497), [sdrzn](https://x.com/sdrzn/status/2037185866427482522)).
- **“하네스 엔지니어링(harness engineering)”이 하나의 카테고리로**: 모델 품질만으로는 충분하지 않다는 논의가 반복됐고, 실제 제품은 **에이전트 하네스**(middleware, memory, task orchestration, tool interface, safety policy, evaluation loop 등)라는 주장이 이어졌다. [LangChain](https://x.com/LangChain/status/2037185311789154505), [hwchase17](https://x.com/hwchase17/status/2037188499938697309) 등은 에이전트 동작을 커스터마이즈(customize)하는 계층으로서의 **middleware**를 강조했다. [voooooogel](https://x.com/voooooogel/status/2037240394040435113)은 사람들이 “LLM”이라고 부르지만 실제로는 포맷(formatting), 파서(parser), 툴 사용(tool use), 구조화 생성(structured generation), 메모리(memory)를 기반 모델 위에 얹은 **agentic language system**을 쓰는 것이라고 더 강하게 주장했다.
- **Hermes vs. OpenClaw: 메모리와 장시간 자율 실행이 핵심**: Nous Research의 **Hermes Agent**가 장시간(long-running)·크로스 플랫폼(cross-platform) 에이전트 워크플로에서 **OpenClaw/OpenClaw 파생 스택**보다 사용성이 좋다는 평가가 다수 나왔다. 예로는 Slack·Telegram 간 **지속 메모리(persistent memory)**, 에이전트 간 공유 메모리(shared memory), 낮은 유지보수 오버헤드(overhead), 로컬 또는 클라우드에서 몇 시간씩 무인 실행(unattended)했다는 사용자 보고 등이 언급됐다 ([IcarusHermes](https://x.com/IcarusHermes/status/2037030845635084785), [jayweeldreyer](https://x.com/jayweeldreyer/status/2037179820975562791), [Niels Rogge](https://x.com/NielsRogge/status/2037161010377674785)). 또한 [Teknium](https://x.com/Teknium/status/2037284871513768344)은 지속적인 탈옥(jailbreaking)을 위한 논쟁적 **GODMODE skill**을 예고했는데, 이는 역량(capability)과 안전(safety)이 이제 기반 모델이 아니라 하네스 레이어에서 상품화(productize)되고 있음을 보여준다는 해석이 뒤따랐다.
- **에이전트 주변 툴링 확대**: OpenAI의 Codex 팀은 툴킷(toolkit) 통합 확대에 대한 요청을 받았다 ([reach_vb](https://x.com/reach_vb/status/2037072273517973880)). 한편 Google은 더 최신 API/SDK를 모델에 “가르치기” 위해 **Gemini API skill**을 구축한 방법을 공개했고, 이를 통해 **Gemini 3.1 Pro**가 **117개 eval 테스트에서 95% 통과율**을 달성했다고 밝혔다 ([Phil Schmid](https://x.com/_philschmid/status/2037076548692463722)). 또한 [OpenEnv](https://x.com/ben_burtenshaw/status/2037184956124828083)는 비동기(async) API, websocket 전송, MCP 네이티브 툴 디스커버리(tool discovery), 어디서나 배포 가능한 패키징을 포함한 **agentic RL 환경**용 오픈 표준으로 소개됐다.

### 연구 시스템 및 학습 인프라: AI Scientist, ProRL Agent, Real-Time RL

- **Sakana AI의 AI Scientist, Nature 논문과 스케일링 법칙 주장**: **Sakana AI**는 AI 연구를 end-to-end로 자동화하는 **Nature** 논문을 강조하면서, 자동 리뷰어로 생성된 논문을 채점했을 때 “AI science의 스케일링 법칙(scaling law)”—더 강한 파운데이션 모델이 더 강한 과학 논문을 만든다는 경향—을 관찰했다고 밝혔다. 또한 이는 더 강한 기반 모델과 더 많은 **inference-time compute**로 함께 개선될 수 있다고 주장했다 ([Sakana AI](https://x.com/SakanaAILabs/status/2036999652298678630), [paper/code follow-up](https://x.com/SakanaAILabs/status/2037205439109095712)). Chris Lu는 **AI Scientist V1**이 o1-preview 스타일의 추론(reasoning) 모델 이전에 나왔다는 점을 들어, 오늘날 더 강한 모델을 쓰면 추가적인 여지가 크다고 덧붙였다 ([Chris Lu](https://x.com/_chris_lu_/status/2037090588550418510)).
- **에이전트 RL의 병목은 모델이 아니라 인프라일 수 있음**: 한 시스템 스레드는 에이전틱 RL 프레임워크가 rollout과 최적화를 같은 프로세스에 결합(coupling)해 설계한 것이 문제라고 주장했다. **NVIDIA의 ProRL Agent**를 요약한 게시물은 rollout을 독립 서비스로 완전히 분리(decouple)했을 때 **SWE-Bench Verified**에서 **Qwen 8B**가 **9.6% → 18.0%**로 거의 두 배가 됐고, 4B·14B 변형에서도 비슷한 향상이 있었으며 GPU 활용률도 크게 올랐다고 전했다 ([rryssf_](https://x.com/rryssf_/status/2037122412236648835)). 사실이라면, 에이전트 학습 벤치마크가 순수 역량(capability) 한계가 아니라 인프라(infra) 한계에 의해 제한될 수 있음을 상기시킨다.
- **Cursor의 “real-time RL”, 프로덕션 학습 패턴으로 주목**: [Cursor](https://x.com/cursor_ai/status/2037205514975629493)는 **Composer 2**의 개선 체크포인트(checkpoint)를 **5시간마다** 배포할 수 있다고 밝혔고, 이를 정적 릴리즈가 아닌 제품화된 RL 피드백 루프로 제시했다. 여러 엔지니어는 이를, 상호작용 데이터가 고빈도로 쌓이는 수직 통합(vertically integrated) 앱에서 **프로덕션 내 지속 학습(continual learning in production)**이 시작되는 신호로 해석했다 ([eliebakouch](https://x.com/eliebakouch/status/2037212964114125099), [code_star](https://x.com/code_star/status/2037271007027982440)).

### 아키텍처, 검색(retrieval), 추론 효율

- **트랜스포머(transformer) 깊이가 “질의 가능(queryable)”해지는 흐름**: **Kimi/Moonshot**은 **Attention Residuals (AttnRes)**를 통해 깊이를 어텐션(attention) 문제로 바꾸어, 레이어가 이전 레이어 출력에서 선택적으로 검색(retrieve)하도록 하고 잔차(residual)를 수동으로 누적하는 방식에서 벗어난다고 설명했다 ([Kimi](https://x.com/Kimi_Moonshot/status/2037010118957817988)). [The Turing Post](https://x.com/TheTuringPost/status/2037107923109953788)의 2차 해설은 이를 더 넓은 트렌드—깊은 트랜스포머가 고정된 residual addition에서 **깊이 방향 적응형 검색(adaptive retrieval over depth)**으로 이동—으로 프레이밍했다.
- **압축(compression)·메모리 효율은 여전히 핵심**: **TurboQuant**는 **PolarQuant**와 **1-bit error correction (QJL)**을 결합해 재학습 없이도 정확도 손실을 거의 없이 3-bit 수준의 압축을 달성하고, 어텐션(attention)·벡터 검색(vector search)을 가속하며 KV cache 메모리를 줄이는 practical한 경로로 소개됐다 ([The Turing Post](https://x.com/TheTuringPost/status/2037182800466698718)). 별도로 **AI21**이 `uint32_t` 오버플로(overflow)로 인해 GRPO 학습에서 logprob 불일치가 조용히 발생하는 문제를 추적한 뒤, **vLLM의 Mamba-1 CUDA 커널**에서 프로덕션 버그픽스가 들어갔다는 소식도 있었다(핵심은 `uint32_t`를 `size_t`로 바꾸는 것) ([vLLM](https://x.com/vllm_project/status/2037123968939987428), [AI21](https://x.com/AI21Labs/status/2037133107166331132)).
- **검색(retrieval)은 멀티모달(multimodal)·특화(specialized)로 이동**: 범용 RAG 레시피에서 벗어나려는 흐름이 이어졌다. [Victoria Slocum](https://x.com/victorialslocum/status/2037113651174199778)은 **IRPAPERS**를 예로 들며, **OCR/text retrieval**과 **image-page retrieval**이 서로 다른 쿼리에서 실패하고, 둘을 결합한 멀티모달 퓨전(fusion)이 과학 PDF에서 단일 방식보다 낫다고 강조했다. [Chroma](https://x.com/jeffreyhuber/status/2037247377275576380)는 **8,000+** 합성(synthetic) 태스크에 대해 SFT+RL로 학습한 검색 특화 모델 **Context-1**을 오픈소스로 공개하며, 프런티어 범용 모델보다 더 좋고/빠르고/저렴한 검색을 주장했다. [John Schulman](https://x.com/johnschulman2/status/2037260655989014706)은 커리큘럼(curriculum), 검증된 합성 데이터(verified synthetic data), 컨텍스트 프루닝(context pruning) 도구를 특히 흥미로운 지점으로 꼽았다.

### 참여도 상위 트윗 (Top tweets by engagement)

- **Meta’s TRIBE v2**: Meta가 700명 이상의 500+ 시간 fMRI로 학습한 트리모달(trimodal) 뇌 인코더(brain encoder) **TRIBE v2**를 공개하며 이전 방법 대비 **2–3x** 개선과 보지 못한 피험자/언어/작업에 대한 제로샷(zero-shot) 예측을 주장했다 ([Meta AI](https://x.com/AIatMeta/status/2037153756346016207), [details](https://x.com/AIatMeta/status/2037153758455750717)).
- **Claude Code auto-fix in the cloud**: Anthropic이 Claude Code 웹/모바일 세션에서 원격 **PR-following auto-fix**를 제공해, 무인으로 CI 실패를 수정하고 코멘트 해결을 진행할 수 있게 했다고 전해졌다 ([Noah Zweben](https://x.com/noahzweben/status/2037219115002405076)).
- **Karpathy의 풀스택 소프트웨어 자동화**: [Andrej Karpathy](https://x.com/karpathy/status/2037200624450936940)는 “이 스타트업 만들어줘(build me this startup)”에서 어려운 부분은 코드 생성이 아니라 결제(payments)·인증(auth)·인프라(infra)·보안(security)·배포(deployment) 같은 **DevOps/서비스 오케스트레이션 라이프사이클** 전반이며, 이 영역이 이제 에이전트에게 겨우 현실화되기 시작했다고 주장했다.
- **Cline Kanban**: 코딩 에이전트용 멀티 에이전트 worktree 오케스트레이션 출시에 개발자 관심이 유난히 높았다 ([Cline](https://x.com/cline/status/2037182739695493399)).
- **Cohere Transcribe and Mistral Voxtral**: 허용적 라이선스와 즉시 적용 가능한 인프라 지원을 동반한 오픈(audio) 릴리즈가 계속 탄력을 얻는 분위기다 ([Cohere](https://x.com/cohere/status/2037159129345614174), [Mistral](https://x.com/MistralAI/status/2037183026539483288)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Mistral AI to release Voxtral TTS, a 3-billion-parameter text-to-speech model with open weights that the company says outperformed ElevenLabs Flash v2.5 in human preference tests. The model runs on about 3 GB of RAM, achieves 90-millisecond time-to-first-audio, supports nine languages.](https://www.reddit.com/r/LocalLLaMA/comments/1s46ylj/mistral_ai_to_release_voxtral_tts_a/)** (Activity: 1306): Mistral AI가 오픈웨이트(open weights) **Voxtral TTS**를 공개하며 ElevenLabs Flash v2.5보다 사람 선호도(preference) 테스트에서 낫다고 주장했고, `3 GB of RAM` 수준에서 구동, `90-millisecond` time-to-first-audio, `nine languages` 지원 등이 요약됐다. 상세 내용은 [VentureBeat](https://venturebeat.com/orchestration/mistral-ai-just-released-a-text-to-speech-model-it-says-beats-elevenlabs-and). 댓글에서는 과거 모델에 대한 회의론과 함께 출력 품질 개선을 인정하는 반응, 웨이트 공개/테스트에 대한 기대가 함께 나왔다.
- **[nvidia/gpt-oss-puzzle-88B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1s42cdi/nvidiagptosspuzzle88b_hugging_face/)** (Activity: 436): NVIDIA의 `gpt-oss-puzzle-88B`가 [OpenAI's gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)에서 파생된 배포 최적화 모델로 소개됐고, Puzzle 기반 post-training NAS로 H100급 하드웨어에 최적화했다는 설명이 공유됐다. 장문 컨텍스트에서 `1.63×`, 단문에서 `1.22×` 처리량(throughput) 향상과 `88B`로의 파라미터 감소(부모 모델의 약 `73%`)를 주장했으며, 정확도 유지/소폭 향상도 언급됐다. 댓글에서는 “부모 모델보다 나을 수도”라는 기대와 함께, 특정 작업에 치우친 ‘one trick pony’ 우려도 나왔다.
- **[Intel will sell a cheap GPU with 32GB VRAM next week](https://www.reddit.com/r/LocalLLaMA/comments/1s3e8bd/intel_will_sell_a_cheap_gpu_with_32gb_vram_next/)** (Activity: 1723): Intel이 `32GB VRAM` GPU를 3월 31일에 `$949`로 출시할 예정이며 `608 GB/s` 대역폭과 `290W` 소비전력을 갖는다는 요약이 공유됐다. 로컬 AI 용도에서 Qwen 3.5 27B `4-bit quantization` 같은 시나리오가 거론됐고, 추가 정보는 [PCMag's article](https://www.pcmag.com/news/intel-targets-ai-workstations-with-memory-stuffed-arc-pro-b70-and-b65-gpus). 댓글에서는 ‘cheap’이라는 표현에 대한 가격 논쟁과 함께, AMD R9700 AI PRO 등과의 비교 및 실제 경쟁력에 대한 관심이 나왔다.
- **[Intel launches Arc Pro B70 and B65 with 32GB GDDR6](https://www.reddit.com/r/LocalLLaMA/comments/1s3bb3y/intel_launches_arc_pro_b70_and_b65_with_32gb_gddr6/)** (Activity: 541): Intel의 **Arc Pro B70/B65**가 `32GB GDDR6`로 출시됐고, B70은 `$949`, `387 int8 TOPS`, `602 GB/s`, `290W` 등으로 요약됐다. 4장 묶음이 `$4,000`으로 `128GB` GPU 메모리를 제공하며, **vLLM**과의 협업으로 day-one 지원이 언급됐다. 댓글에서는 CUDA 부재, RTX 3090 대비 추론(inference) 속도 논쟁, 드라이버/소프트웨어 지원에 대한 우려와 함께 price-per-GB 매력을 함께 평가했다.
- **[RotorQuant: 10-19x faster alternative to TurboQuant via Clifford rotors (44x fewer params)](https://www.reddit.com/r/LocalLLaMA/comments/1s44p77/rotorquant_1019x_faster_alternative_to_turboquant/)** (Activity: 480): RotorQuant가 Clifford Algebra를 활용한 벡터 양자화(quantization)로 TurboQuant 대비 `10-19x` 속도와 `44x` 적은 파라미터를 주장했으며, cosine similarity `0.990`(TurboQuant `0.991`) 같은 수치와 CUDA/Metal 벤치마크가 언급됐다. 글로벌 랜덤 회전(random rotation) 성질이 약해 worst-case에 불리하다는 이론적 지적과, 실제 KV cache 분포에서는 유용한 트레이드오프라는 반론이 함께 나왔다. [GitHub](https://github.com/scrya-com/rotorquant) [Paper](https://www.scrya.com/rotorquant/)

### Less Technical Subreddits

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Open Letter to the CEO and Executive Team of Anthropic](https://www.reddit.com/r/ClaudeCode/comments/1s3i3j1/open_letter_to_the_ceo_and_executive_team_of/)** (Activity: 1607): Anthropic의 Claude 서비스에 대해 불투명한 사용 제한(usage limits), 지원(support) 부재, 광고된 `1M context windows`·`MAX x20` 대비 체감 성능 격차 등을 문제 삼는 공개서한이 공유됐다. 댓글에서는 문제의 심각성에 공감하는 반응과, 개인별로 경험이 다르다는 반응이 함께 나왔다.
- **[A very serious thank you to Claude Code](https://www.reddit.com/r/ClaudeCode/comments/1s3fmig/a_very_serious_thank_you_to_claude_code/)** (Activity: 817): 최소한의 상호작용으로도 `5-hour usage limit`에 빠르게 도달했다는 불만이 공유됐고, 캐싱(caching)·사용량 계산 방식과 고객 응대에 대한 불만이 이어졌다. 비교 대상으로 Codex가 언급되며, 리셋/사용 경험 측면에서 더 낫다는 주장도 등장했다.
- **[In 13 minutes 100% usage , happened yesterday too! Evil I'm cancelling subscription](https://www.reddit.com/r/ClaudeCode/comments/1s392ep/in_13_minutes_100_usage_happened_yesterday_too/)** (Activity: 1717): 13분 만에 사용량이 100%로 표시되는 등 사용량 추적(tracking) 오류로 보이는 사례가 공유되며, 추가 비용(`$30`) 지출과 구독 취소 고려가 언급됐다. 댓글에서는 유사 사례 공유와 지역/계정 설정에 따른 차이 가능성이 제기됐다.
- **[Saying 'hey' cost me 22% of my usage limits](https://www.reddit.com/r/ClaudeAI/comments/1s3hh29/saying_hey_cost_me_22_of_my_usage_limits/)** (Activity: 1235): 세션을 오래 비워둔 뒤 재개하면 대화 컨텍스트(context) 전체를 재전송하면서 토큰 사용량이 급증하고, 캐시(cache) 만료(예: Pro 5분, Max 1시간) 뒤에는 비용이 큰 캐시 쓰기(cache write)가 발생한다는 설명이 공유됐다. 또한 `5-hour rolling windows`로 인한 경계(boundary) 문제와, `/clear`·`/compact` 같은 워크어라운드가 언급됐다.
- **[WTAF?](https://www.reddit.com/r/ClaudeAI/comments/1s30ilh/wtaf/)** (Activity: 1906): 70년대부터 코딩해온 의사가 `esp32 hardware`와 Sony 주크박스용 `Slink bus commands` 프로젝트에서 Claude를 활용한 경험을 공유하며, 반복(iteration) 속도 향상과 개인 프로젝트 접근성 확대를 긍정적으로 평가했다.
- **[Sora shutdown is a good early example of what private AI companies will do when they achieve AGI](https://www.reddit.com/r/singularity/comments/1s2tr80/sora_shutdown_is_a_good_early_example_of_what/)** (Activity: 1037): Sora shutdown을 AGI/ASI 우선 전략의 전조로 보는 추측이 제기됐으나, 댓글에서는 수익성 문제(재정적 손실)가 더 직접적 원인이라는 반박과, 오픈소스 경쟁 압력이 영향을 준다는 의견이 나왔다.
- **[Google just dropped TurboQuant – 6x less memory, 8x faster inference, zero accuracy loss. Could this be the biggest efficiency boost for LLMs yet?](https://www.reddit.com/r/DeepSeek/comments/1s3hgv4/google_just_dropped_turboquant_6x_less_memory_8x/)** (Activity: 98): TurboQuant가 KV cache를 `6x` 줄이고 추론(inference)을 `8x` 가속하며 정확도 손실이 없다고 주장한다는 요약이 공유됐다. 댓글에서는 “KV cache만 영향”이라는 지적, “논문이 오래됐다”는 주장, “zero accuracy loss”에 대한 회의론이 함께 나왔다.
- **[Google Research: TurboQuant achieves 6x KV cache compression with zero accuracy loss](https://www.reddit.com/r/Bard/comments/1s3t80u/google_research_turboquant_achieves_6x_kv_cache/)** (Activity: 93): KV cache `6x` 압축을 주장하는 TurboQuant 소개가 공유되며, 구현/적용 시점에 대한 기대와 실제 성능 검증 요구가 함께 나왔다. 더 자세한 내용은 [original article](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/).
- **[Gemini 3.1 Flash Live is here!](https://www.reddit.com/r/Bard/comments/1s4aly6/gemini_31_flash_live_is_here/)** (Activity: 130): Gemini 3.1 Flash Live가 음성 품질 개선(로보틱한 에코/리버브 문제 해결 등)에 초점을 맞춰 출시됐다는 반응이 공유됐다. 다만 표준 3.1 Flash보다 먼저 voice 모델이 나오는 배포 순서에 대한 의문도 제기됐다.
- **[Gemini 2.5 Pro was so Goated, they had to bring it Back! 🙏](https://www.reddit.com/r/Bard/comments/1s3apiy/gemini_25_pro_was_so_goated_they_had_to_bring_it/)** (Activity: 248): Gemini UI에서 ‘Deep Research with 2.5 Pro’가 강조된 사례가 공유되며, 2.5 Pro와 3.1 Pro의 deep research 성능 차이에 대한 추측, UI에 대한 불만, 지역별 롤아웃 이슈 가능성이 함께 논의됐다.

---

## AI Discord Recap

### AINews

- Discord가 오늘 AINews의 접근을 차단해 더 이상 Discord를 이 형태로는 제공하지 못하게 됐다고 밝혔다. 다만 곧 새로운 AINews를 출시할 예정이며, 그동안 읽어준 독자들에게 감사 인사를 전했다.
