---
title: "OpenAI가 GPT-5.5 제품군과 Codex 런타임을 확장"
summary:
  - "OpenAI가 GPT-5.5 제품군을 확장"
  - "Codex가 장기 실행 에이전트로 진화"
  - "Zyphra가 ZAYA1 오픈 모델 공개"
  - "Anthropic이 Claude 정렬 연구 발표"
  - "DeepMind 공동 수학자가 신기록 달성"
date: 2026-05-08
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-08-not-much.md"
hasHeadline: false
headline: "OpenAI가 GPT-5.5 제품군과 Codex 런타임을 확장"
tags:
  - OpenAI
  - Codex
  - GPT-5.5
isFeatured: false
---

## 헤드라인: OpenAI가 GPT-5.5 제품군과 Codex 런타임을 확장

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI는 약 2주 사이 GPT-5.5 제품군, 실시간 번역 및 음성 모델, Cyber 모델, Codex의 장기 실행 워크플로를 빠르게 확장했다. 특히 Codex는 단순 코딩 보조 도구가 아니라 리팩터링, 마이그레이션, 반복 실험을 오래 수행하는 에이전트 런타임으로 자리 잡는 흐름이 뚜렷했다.

---

## AI Twitter Recap

### OpenAI의 GPT-5.5 / Codex 출시, 사이버 모델, 안전성 계측

- **GPT-5.5 제품군이 모달리티와 제품 전반으로 계속 확장**: OpenAI 직원들은 약 2주 동안 **gpt-image-2, GPT-5.5, GPT-5.5 Pro, GPT-5.5 Instant, GPT-Realtime-2, realtime translate, realtime whisper, GPT-5.5 Cyber**를 빠르게 출시했다고 강조했다 ([`@reach_vb`](https://x.com/reach_vb/status/2052884864701960366)). 새 기본값과 낮은 추론(reasoning) 동작에 대한 외부 반응도 특히 긍정적이었다. [`@dhh`](https://x.com/dhh/status/2052754523702088179)는 GPT-5.5가 “매우 좋고, 매우 효율적”이라고 했고, [`@gdb`](https://x.com/gdb/status/2052783746009440658)는 “매우 유능하고 매우 간결하다”고 평가했다. 공개 평가에서는 [Arena](https://x.com/arena/status/2052876951329919383)가 **GPT-5.5 Instant**를 **Multi-Turn #5**, **Vision #11**, **Document Arena #24**에 올렸다. **Gemini와 비슷한 형태의 Notebook 워크플로**에서도 강한 제품 채택이 있었지만, 오늘 OpenAI에 대한 관심은 단일 벤치마크 급등보다 모델의 사용성과 효율에 집중됐다.
- **Codex는 단순 코딩 어시스턴트가 아니라 장기 실행 에이전트 런타임으로 변하는 중**: OpenAI는 새 [Codex “switch to Codex” flow](https://x.com/OpenAI/status/2052800507727781979)로 사용자를 유도했고, [`@reach_vb`](https://x.com/reach_vb/status/2052805243268718803)는 **`/goal`**을 리팩터링, 마이그레이션, 재시도, 실험을 가로질러 무기한 작업을 추구하는 메커니즘이라고 설명했다. [`@patience_cave`](https://x.com/patience_cave/status/2052772581888156128)의 독립 테스트에 따르면 Codex Goals는 **160시간 / 3만 액션** 뒤 **공개 ARC-AGI-3 게임에서 61%**에 도달했으며, 정체되기 전 처음 몇 시간에 유용한 작업 대부분이 이뤄졌다. OpenAI는 또한 대규모로 Codex를 안전하게 운영하는 방식인 **샌드박싱, 승인 게이트, 네트워크 정책, 텔레메트리**를 [`@ithilgore`](https://x.com/ithilgore/status/2052843807809610078)를 통해 공개했고, [`@cryps1s`](https://x.com/cryps1s/status/2052845089849049434)가 이를 보강했다. 별도로 OpenAI는 우발적인 **chain-of-thought 채점**과 관련된 정렬 프로세스 문제와 실시간 탐지, 모니터링 가능성 스트레스 테스트 같은 완화책을 [`@OpenAI`](https://x.com/OpenAI/status/2052845764507062349) 스레드에서 공개했다.
- **사이버보안 모델이 명시적 제품군으로 등장**: OpenAI는 기업과 정부를 겨냥해, 기업들이 자신을 “빠르게” 보호하도록 돕겠다는 [Sam Altman의 메모](https://x.com/sama/status/2052558319940944256)를 냈고, 이어 [`@gdb`](https://x.com/gdb/status/2052583338561683775)는 핵심 인프라를 방어하는 보안 담당자를 위한 **GPT-5.5-Cyber** 제한 프리뷰를 발표했다. 더 넓은 정책 프레임도 바뀌었다. [`@deredleritt3r`](https://x.com/deredleritt3r/status/2052844272798302475)는 곧 나올 미국 AI 보안 행정명령이 프런티어 모델의 사전 승인보다 **사이버 방어를 위한 프런티어 연구소와의 협력**을 강조할 것이라고 전했다.

### 오픈 모델과 인프라: Zyphra ZAYA1, vLLM/SGLang 최적화, 더 저렴한 코딩 스택

- **Zyphra가 오늘 가장 실질적인 오픈 모델을 공개**: [`@ZyphraAI`](https://x.com/ZyphraAI/status/2052547054707335237)는 **ZAYA1-74B-Preview**를 공개했다. 이는 **총 74B / 활성 4B MoE**로, **AMD** 하드웨어에서 스케일링하며 훈련한 강력한 **pre-RL 베이스 체크포인트**로 소개됐다. 해당 모델은 [후속 게시물](https://x.com/ZyphraAI/status/2052547063251079600)에 따르면 **Apache 2.0**이다. 커뮤니티 반응은 Zyphra가 소형 MoE 실험을 넘어섰다는 증거로 받아들였다. [`@teortaxesTex`](https://x.com/teortaxesTex/status/2052550093916475605)는 이 릴리스가 연구소의 아키텍처와 방법론을 검증하기에 충분하다고 말했다. Zyphra는 또한 [`@ZyphraAI`](https://x.com/ZyphraAI/status/2052890651835224454)를 통해 **활성 700M / 총 8B MoE** VLM인 **ZAYA1-VL-8B**도 **Apache 2.0**으로 출시했다.
- **추론(inference) 인프라는 여전히 주요 경쟁 축**: [SemiAnalysis](https://x.com/SemiAnalysis_/status/2052584396494958860)는 [vLLM](https://x.com/vllm_project/status/2052750374206083131)이 **DeepSeek V4** 지원을 얼마나 빠르게 추가했는지 강조하며, 추론 스택에서 “**속도가 해자**”라는 논지를 강화했다. vLLM-Omni v0.20.0은 **H20에서 Qwen3-Omni 처리량 +72%**, 주요 TTS 지연시간/RTF 감소, 더 넓은 diffusion 지원, 확장된 양자화(quantization)/백엔드 등 대규모 업데이트를 포함했다. SGLang 쪽에서는 [`@Yuchenj_UW`](https://x.com/Yuchenj_UW/status/2052600316252876968)가 추론에서 **일일 최대 57B 토큰** 수치를 들었다고 전했고, [`@ZhihuFrontier`](https://x.com/ZhihuFrontier/status/2052768468249063482)의 긴 기술 요약은 **prefill/decode 분리, FP8 FlashMLA, SBO, expert affinity, observability** 전반의 H20 특화 DeepSeek 최적화 전략을 자세히 설명했다.
- **오픈 모델은 코딩과 에이전트 워크로드에 점점 “충분히 좋은” 선택지가 되는 중**: [`@masondrxy`](https://x.com/masondrxy/status/2052781917955580246)는 **Baseten의 Kimi K2.6**이 많은 작업에서 성능은 대략 비슷하면서 **Opus 4.7보다 약 5배 저렴하다**고 했고, [`@caspar_br`](https://x.com/caspar_br/status/2052817936344400132)는 내부 Fleet 모델을 **Sonnet 4.6에서 Kimi K2.6**으로 바꿔도 체감 차이가 없었다고 전했다. 이는 [`@hwchase17`](https://x.com/hwchase17/status/2052782958508175467)와 [LangChain](https://x.com/LangChain/status/2052819061436973231)이 지적한 더 큰 변화와 맞닿아 있다. 프런티어 추론 가격이 오르는 가운데 오픈소스 LLM은 많은 에이전트형 스택에서 기본 선택지로 쓸 수 있게 됐다.

### 사후 훈련, 최적화, 정렬 연구: DGPO, Aurora, 희소성, Claude “why”

- **여러 주목할 최적화/사후 훈련 아이디어가 동시에 등장**: [`@TheTuringPost`](https://x.com/TheTuringPost/status/2052539247320858975)는 **DGPO(Distribution-Guided Policy Optimization)**를 GRPO의 개선안으로 요약했다. DGPO는 **토큰 수준 보상 재분배**, KL 대신 **Hellinger distance**, **entropy gating**을 사용해 유용한 탐색을 더 잘 보상하며, **AIME 2025 46.0%**, **AIME 2024 60.0%**를 보고했다. 별도로 [`@tilderesearch`](https://x.com/tilderesearch/status/2052798181558370419)는 Muon 관련 뉴런 사망 실패 모드를 피하도록 설계된 옵티마이저 **Aurora**를 소개했다. 이들의 **Aurora-1.1B**는 여러 벤치마크에서 **Qwen3-1.7B**와 비슷한 성능을 내면서 **파라미터 25% 감소**, **훈련 토큰 100배 감소**를 달성했다고 한다.
- **희소성(sparsity)이 하드웨어 친화적 형태로 돌아옴**: [`@SakanaAILabs`](https://x.com/SakanaAILabs/status/2052787226136990029)와 [`@hardmaru`](https://x.com/hardmaru/status/2052787980344099293)는 트랜스포머 FFN용 희소 패킹 포맷과 커널 스택인 **TwELL**을 공개했다. 이는 범용 희소 포맷을 강제하는 대신 GPU 실행에 맞게 희소성을 재구성해 H100에서 **20%+ 훈련/추론 속도 향상**을 낸다고 한다. [`@NVIDIAAI`](https://x.com/NVIDIAAI/status/2052801759777874207)는 이 협업을 확산시켰다. 다른 모듈성 방향에서는 [`@allen_ai`](https://x.com/allen_ai/status/2052784995710681180)가 데이터에서 모듈형 expert 구조가 나타나도록 훈련된 MoE **EMO**를 공개해, 수작업 priors 없이 선택적 expert 사용이 가능하다고 설명했다.
- **Anthropic이 오늘 가장 중요한 정렬 스레드 중 하나를 발표**: [“Teaching Claude why”](https://x.com/AnthropicAI/status/2052808787514228772)에서 Anthropic은 특정 조건에서 이전에 관찰된 **Claude 4의 협박 행동을 제거했다**고 밝혔다. 핵심 주장은 시연만으로는 충분하지 않았고, 모델에 **왜 정렬되지 않은 행동이 잘못인지** 가르치는 것이 더 좋은 결과를 냈다는 것이다. 여기에는 **constitution 기반 문서**, **가상의 정렬된 AI 이야기**, 더 다양화된 harmlessness 훈련 데이터가 포함됐다. 후속 세부사항은 [`@AnthropicAI`](https://x.com/AnthropicAI/status/2052808789297115628)와 [전체 게시물](https://x.com/AnthropicAI/status/2052808809182060581)에서 나왔다. 이는 행동 정렬의 실제 원인을 공개적으로 얼마나 이해하고 있는지에 대해 [`@RyanPGreenblatt`](https://x.com/RyanPGreenblatt/status/2052803011915980856)가 앞서 제기한 투명성 우려의 일부에 직접 답했다.

### 에이전트, 런타임, 검색/툴링: 직접 코퍼스 상호작용부터 기업 데이터 에이전트까지

- **에이전트 아키텍처가 “그냥 모델 호출”에서 오케스트레이션/하네스 설계로 이동**: [`@ii_posts`](https://x.com/ii_posts/status/2052764819950907490)는 장기 실행 코딩 에이전트가 종종 **너무 일찍 멈춰서** 실패하며, 이들의 **Zenith** 오케스트레이션 하네스가 장기 과제 **5/8개**를 가장 강한 베이스라인 비용의 **43%**로 이겼다고 전했다. 이는 원시 모델 품질만큼 저널, 체크포인트, 런타임 제어가 중요하다는 실무 보고와도 맞다. 에이전트 시험 로그 유지에 관한 [`@vwxyzjn`](https://x.com/vwxyzjn/status/2052779821202276761), 공유 워크스페이스에서 다중 에이전트 메모리 충돌과 거버넌스 실패 모드를 생생하게 보여준 [`@nptacek`](https://x.com/nptacek/status/2052742943321002366)도 참고할 만하다.
- **에이전트용 검색/검색 증강(retrieval)을 다시 생각하는 중**: [`@zhuofengli96475`](https://x.com/zhuofengli96475/status/2052784645398303198)는 임베딩 모델 + 벡터 DB + top-k retrieval을 원시 코퍼스에 대한 **grep/find/bash** 직접 사용으로 대체하는 **Direct Corpus Interaction(DCI)**을 소개했다. 보고된 개선에는 Claude Sonnet 4.6에서 **BrowseComp-Plus 69% → 80%**, 그리고 **13개 벤치마크** 전반의 승리가 포함된다. 이를 보완해 [`@_reachsumit`](https://x.com/_reachsumit/status/2052593078788411895)는 **oblique / implicit queries**에 대한 retriever 벤치마크 **OBLIQ-Bench**를 강조했고, [`@turbopuffer`](https://x.com/turbopuffer/status/2052759200078733590)는 단일 쿼리 플랜에서 BM25 및 속성 랭킹과 조합 가능한 **sparse vectors를 일급 retrieval primitive**로 출시했다.
- **기업 데이터 에이전트가 코딩 에이전트와 구분되는 범주로 등장**: [`@matei_zaharia`](https://x.com/matei_zaharia/status/2052778748941046180)와 [`@DbrxMosaicAI`](https://x.com/DbrxMosaicAI/status/2052781813651984468)는 **Databricks Genie**가 데이터 작업의 비결정성, 즉 자산 탐색, 충돌하는 비즈니스 맥락, 결정적 테스트 부재를 **특화 지식 검색, 병렬 사고, 다중 LLM 설계**로 다루는 방식을 설명했다. 보고된 정확도는 **32%에서 90%+**로 향상됐고, [`@Yuchenj_UW`](https://x.com/Yuchenj_UW/status/2052784305735397863)는 기업 데이터 분석 작업에서 **91.6%**를 인용했다.

### 수학, 과학, 로보틱스 시스템: DeepMind 공동 수학자, AlphaEvolve, Figure Helix-02

- **DeepMind의 AI 공동 수학자는 이번 묶음에서 가장 중요한 과학 결과**: [`@pushmeet`](https://x.com/pushmeet/status/2052812585804685322)는 **FrontierMath Tier 4에서 48%**를 기록한 **다중 에이전트 AI 공동 수학자**를 발표했다. 이는 새 최고 기록이며 여러 세부 분야의 수학자들이 테스트했다. 더 중요한 신호는 정성적이다. [`@wtgowers`](https://x.com/wtgowers/status/2052830952758382850)는 이 시스템이 **박사 논문 한 장**이 될 법한 결과를 증명했다고 말했고, [`@kimmonismus`](https://x.com/kimmonismus/status/2052849472586264997)는 이 결과가 맞춤형 인프라와 큰 예산에 의존했기 때문에 표준 리더보드 실행과 직접 비교할 수는 없다고 유용하게 짚었다. 그래도 이 논문은 **에이전트형 오케스트레이션**이 연구 워크플로에서 프런티어 역량 향상의 큰 부분을 차지한다는 주장을 강화한다.
- **Google은 생산 과학/인프라에서 자기 개선 시스템을 계속 강조**: [`@Google`](https://x.com/Google/status/2052794893206962598)는 Gemini 기반 코딩 에이전트 **AlphaEvolve**가 **Google AI 인프라**, **분자 시뮬레이션**, **자연재해 위험 예측**에 사용되고 있다고 업데이트했다. [Google Cloud](https://x.com/Google/status/2052794909355094217)의 동반 게시물은 **대규모 AI 모델 훈련 속도 2배 향상**, 연간 **15,000km 이동 절감**을 만드는 라우팅 최적화 등 현실 세계 영향도 주장했다.
- **로보틱스 데모가 조율된 가정 내 역량에 가까워지는 중**: [`@adcock_brett`](https://x.com/adcock_brett/status/2052770989944242335)는 Figure의 최신 데모로 **Helix-02 로봇 두 대가 완전 자율로 함께 침대를 정리하는 모습**을 공유했고, 후속 글에서 기반 시스템을 [여기](https://x.com/adcock_brett/status/2052771762056974511)에 연결했다. 더 흥미로운 주장은 로봇들이 **명시적 통신 채널 없이** 서로의 움직임과 카메라 관찰로 상대의 가능성 높은 행동을 추론해 조율했다는 점이다. 더 넓은 물리 AI 방향에서는 [`@DrJimFan`](https://x.com/DrJimFan/status/2052758642781487237)가 **video world models, world action models, robot-data flywheels, physical RL**을 중심으로 한 로드맵을 주장하는 밀도 높은 “**Robotics: Endgame**” 강연을 공개했다.

### 상위 트윗

- **Anthropic 정렬 연구**: [“Teaching Claude why”](https://x.com/AnthropicAI/status/2052808787514228772)는 가장 신호가 강한 기술 스레드였으며, 시연만이 아니라 모델 이해를 목표로 한 훈련을 통해 이전에 관찰된 협박 행동을 제거했다고 주장했다.
- **OpenAI Codex 제품 추진**: [OpenAI의 Codex 게시물](https://x.com/OpenAI/status/2052800507727781979)과 장기 실행 작업을 둘러싼 `/goal` 논의는 어시스턴트 UX에서 에이전트 런타임 UX로 가는 의미 있는 단계를 보여줬다.
- **에이전트 인터페이스 계층으로서 HTML**: [`@trq212`](https://x.com/trq212/status/2052811606032269638)가 “**HTML is the new markdown**”이라고 주장한 글은 이례적으로 큰 공감을 얻었고, 에이전트 생성 산출물과 맞춤 인터페이스로의 더 큰 전환을 반영했다.
- **Figure의 가정용 로보틱스 데모**: 침대를 정리하는 Helix-02 로봇 두 대에 관한 [`@adcock_brett`](https://x.com/adcock_brett/status/2052770989944242335)의 글은 참여도 기준으로 돋보인 로보틱스 클립이었다.
- **DeepMind AI 공동 수학자**: **FrontierMath Tier 4 48%** 결과에 관한 [`@pushmeet`](https://x.com/pushmeet/status/2052812585804685322)의 글은 피드에서 가장 명확한 과학/추론 이정표였다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Multi-Token Prediction (MTP) for LLaMA.cpp - Gemma 4 speedup by 40%](https://www.reddit.com/r/LocalLLaMA/comments/1t6se6r/multitoken_prediction_mtp_for_llamacpp_gemma_4/)** (Activity: 669): **llama.cpp**의 패치 포크가 **Multi-Token Prediction(MTP)** 지원을 추가하고, 양자화된 **Gemma 4 assistant GGUF** 모델을 [Hugging Face](https://huggingface.co/collections/AtomicChat/gemma-4-assistant-gguf)에 공개했다. **MacBook Pro M5 Max**에서 작성자는 *“Write a Python program to find the nth Fibonacci number using recursion”* 프롬프트 기준 **Gemma 26B** 생성 속도가 `97 tok/s`에서 `138 tok/s`로 올라 약 `42%` 처리량 증가를 보였다고 보고했다. 코드는 [`AtomicBot-ai/atomic-llama-cpp-turboquant`](https://github.com/AtomicBot-ai/atomic-llama-cpp-turboquant)에 있으며, 관련 로컬 앱은 [atomic.chat](http://atomic.chat)에 있다. 댓글에서는 MTP가 품질을 떨어뜨리지 않는지 확인하기 위해 **같은 seed**와 `temperature=0.0`을 쓰는 더 엄격한 동일 조건 벤치마크를 요구했다. **LM Studio** 호환성에도 관심이 있었다.
- **Multi-Token Prediction 품질 검증**: 여러 댓글은 **Multi-Token Prediction(MTP)**이 생성 품질을 보존하는지 검증하는 데 집중했다. 이들은 **같은 seed**와 `temperature=0.0`으로 비교를 다시 실행하자고 제안했다. 결정론적 디코딩에서는 MTP가 토큰 선택을 바꾸지 않는다면 출력이 동일해야 하기 때문이다. 또 다른 관련 제안은 두 실행이 가능한 한 비슷하게 답하도록 강제해, 품질 차이가 샘플링 분산이 아니라 MTP 때문인지 확인하자는 것이었다.
- **llama.cpp MTP 호환성**: 새 **llama.cpp MTP 지원**이 **LM Studio**를 통해 작동하는지 묻는 호환성 질문이 있었다. 이는 llama.cpp 백엔드를 쓰는 프런트엔드가 새 speculative/multi-token 경로를 노출하거나 자동으로 이점을 얻는지에 대한 관심을 시사한다. 별도의 모델 형식 요청으로는 llama.cpp 호환 양자화 배포 수요를 반영하듯 **[heretic](https://github.com/p-e-w/heretic)**의 **GGUF 빌드** 요청도 있었다.
- **[Qwen3.6 27B uncensored heretic v2 Native MTP Preserved is Out Now With KLD 0.0021, 6/100 Refusals and the Full 15 MTPs Preserved and Retained, Available in Safetensors, GGUFs and NVFP4s formats.](https://www.reddit.com/r/LocalLLaMA/comments/1t5yajb/qwen36_27b_uncensored_heretic_v2_native_mtp/)** (Activity: 591): **llmfan46**는 **Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved**를 Hugging Face에 여러 형식으로 공개했다. 형식은 [Safetensors](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved), [GGUF](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-GGUF), [NVFP4 GGUF](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4-GGUF), [NVFP4](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4), [NVFP4 MLP-only](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4-MLP-Only), [GPTQ-Int4](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-GPTQ-Int4)이며, 작성자의 모델 색인은 [여기](https://huggingface.co/llmfan46/models)에 있다. 릴리스는 네이티브 MTP 헤드 `15`개 전체 보존, **KLD `0.0021`**, **`6/100` 거부**, 벤치마크 결과를 주장한다. 댓글에서는 `16GB` VRAM에 적합하고 쓸 만한 컨텍스트를 제공하는 더 작은 **`Q4_K_XS` GGUF**, **MTP가 TurboQuant 압축 KV 캐시와 작동하는지**, 같은 MTP 보존 접근법을 **Gemma 4 dense** 모델에 적용할 수 있는지를 물었다. 또 다른 기술적 우려는 **Blackwell에서 NVFP4 + MTP**가 최신 CUDA 지원을 기다리며 막혀 있거나 아직 미성숙해 보인다는 점이었다.
- **저메모리 양자화 요구**: 사용자들은 `16GB` VRAM에서 쓸 만한 컨텍스트로 실행할 수 있는 `Q4_K_XS` GGUF 변형과, 보존된 `15`개 MTP 헤드가 TurboQuant로 KV 캐시를 압축할 때 작동하는지 등 런타임 호환성 세부사항을 요청했다.
- **MTP 검증 우려**: 보고된 `KLD 0.0021`이 안전성 편집 이후 분포에서 MTP 동작을 검증하지 못할 수 있다는 기술적 우려가 나왔다. MTP draft head가 원래의 거부가 많은 모델에서 훈련됐고 base만 uncensored됐다면, speculative decoding의 acceptance가 낮아지거나 Heretic 튜닝이 영향을 준 바로 그 프롬프트에서 생성이 다시 거부 쪽으로 편향될 수 있다는 지적이다.
- **플랫폼 지원 질문**: 여러 구현/플랫폼 질문은 MTP를 향후 dense Gemma 4 스타일 모델로 이전할 수 있는지, `NVFP4` + MTP가 Blackwell에서 현재 사용 가능한지, 포함된 `mmproj` 파일이 여전히 `PR #22673`으로 언급된 충돌을 일으키는지에 집중됐다.

### AI 가속기 하드웨어와 ROCm 지원

- **[AMD Intros Instinct MI350P Accelerator: CDNA 4 Comes to PCIe Cards](https://www.reddit.com/r/LocalLLaMA/comments/1t6b2x8/amd_intros_instinct_mi350p_accelerator_cdna_4/)** (Activity: 474): **[ServeTheHome 보도](https://www.servethehome.com/amd-intros-instinct-mi350p-accelerator-cdna-4-comes-to-pcie-cards/)에 따르면 AMD의 **Instinct MI350P**는 **CDNA 4** Instinct MI350급 가속을 **PCIe 애드인 카드** 폼팩터로 가져온다. 토론에서는 HBM3E 구성이 `144GB`와 `288GB`로 언급됐지만, AMD는 **가격이나 출시 시점**을 공개하지 않았다. 댓글은 주로 누락된 가격/가용성에 집중했고, 한 사용자는 HBM이 많은 이 가속기에 `$499`면 “적당할 것”이라고 비꼬았다.
- **MI350P 핵심 사양**: 한 댓글은 **AMD Instinct MI350P** PCIe 카드의 핵심 기술 사양으로 `3.6 TB/s` 메모리 대역폭과 기사/댓글에 언급된 `144 GB`, `288 GB`의 매우 큰 HBM3E 용량을 강조했다. 스레드에는 구체적인 가격이나 가용성 정보가 없었고, 댓글 작성자들은 이것이 주요 배포 세부사항으로 남아 있다고 지적했다.
- **[Taiwanese company Skymizer announces HTX301 - PCIE inference card with 384GB of Memory at ~240 Watts](https://www.reddit.com/r/LocalLLaMA/comments/1t6tvfw/taiwanese_company_skymizer_announces_htx301_pcie/)** (Activity: 402): **Skymizer**는 **HTX301 칩 6개**, **`384GB` 메모리**, 최대 **`700B` 파라미터** 모델의 로컬 추론을 위한 약 **`240W`** 전력 주장을 담은 PCIe 추론 카드/레퍼런스 플랫폼 [HTX301을 발표](https://skymizer.ai/skymizer-announces-htx301-reinventing-on-prem-ai-inference/)했다. 회사는 prefill/decode 분리와 `4B`부터 `700B` LLM까지 확장하는 **LISA™** 오케스트레이션을 갖춘 *decode-first* 아키텍처라고 설명했지만, 메모리 대역폭, 인터커넥트 토폴로지, 토큰 처리량, 정밀도 형식, 칩당 연산 성능 같은 핵심 기술 사양은 공개하지 않았다. 댓글은 강하게 회의적이었고, 웹사이트가 대부분 마케팅/허풍이라며 대역폭, 연산, 가격, 가용성, 제3자 벤치마크가 없으면 주장을 기술적으로 검증할 수 없다고 봤다.
- **HTX301 평가에 필요한 사양 부재**: 댓글 작성자들은 추론 가속기를 평가하는 데 필요한 핵심 사양인 **메모리 대역폭, 총 연산 처리량, 인터커넥트 세부사항, 6개 칩 전반의 성능 확장**이 발표에 빠져 있다고 지적했다. `384GB` 메모리와 `~240W` 전력이라는 헤드라인만으로는 벤치마크나 명확한 아키텍처 분석 없이는 부족하다는 평가다.
- **소프트웨어 지원 우려**: 반복된 기술적 우려는 소프트웨어 지원이었다. PCIe 카드가 실제로 있더라도 구매자는 하드웨어를 “활용”하기 위한 런타임, 컴파일러, 모델 지원, API, 프레임워크 통합 세부사항을 알아야 한다. 한 댓글은 이 위험을 **ROCm**과 비교하며, 가속기 하드웨어는 소프트웨어 스택이 실제 배포에 충분히 성숙해야만 유용하다고 주장했다.
- **검증 전까지는 vaporware**: 여러 댓글은 HTX301을 입증되기 전까지 *vaporware*로 규정하며, 현재 가능한 가속기 생태계인 **Nvidia, AMD, Intel, Huawei, Apple silicon, Google TPUs**와 비교했다. 회의론은 맞춤형 추론 실리콘의 가능성 자체보다 Skymizer가 생산 준비가 된 벤치마크, 가용성, 생태계 지원을 제공할 수 있는지에 관한 것이다.
- **[vLLM ROCm has been added to Lemonade as an experimental backend](https://www.reddit.com/r/LocalLLaMA/comments/1t7g70j/vllm_rocm_has_been_added_to_lemonade_as_an/)** (Activity: 313): 이미지는 **Lemonade가 Linux/Strix Halo용 실험 백엔드로 AMD ROCm의 `vLLM`을 지원한다**는 기술 발표다. 표시된 명령은 `lemonade backends install vllm:rocm`과 `lemonade run Qwen3.5-0.8B-vLLM`이다 ([image](https://i.redd.it/kesrnt4lgyzg1.png)). 게시물은 이를 GGUF 변환 전 `.safetensors` LLM을 vLLM으로 실행하는 방법으로 소개하며 `llama.cpp`를 보완한다고 설명한다. 링크로는 [quick start guide](https://lemonade-server.ai/news/vllm-rocm.html), [Lemonade GitHub](https://github.com/lemonade-sdk/lemonade), 독립 실행형 portable vLLM ROCm 실행 파일 [`lemonade-sdk/vllm-rocm`](https://github.com/lemonade-sdk/vllm-rocm/)이 포함됐다. 댓글에서는 `vLLM`이 Strix Halo에서 `llama.cpp`보다 무엇을 제공하는지에 관심이 있었고, 한 사용자는 Arch와 Fedora 릴리스가 있는 점을 칭찬했다.
- **vLLM ROCm 플랫폼 지원**: 사용자들은 Lemonade의 실험적 **vLLM ROCm** 통합이 **Arch**와 **Fedora** 릴리스를 제공한다는 점을 강조했고, AMD의 jfowers는 독립 실행형 portable vLLM ROCm 실행 파일 [github.com/lemonade-sdk/vllm-rocm](https://github.com/lemonade-sdk/vllm-rocm/)을 언급했다.
- **Strix Halo에서 vLLM 대 llama.cpp**: **AMD Strix Halo에서 vLLM**을 `llama.cpp` 대신 실행할 때 로컬 추론에서 vLLM이 어떤 장점을 제공하는지에 대한 기술 비교 질문이 제기됐다.
- **더 넓은 ROCm 호환성**: 한 사용자가 **MI50** 같은 구형 AMD 데이터센터 카드 지원 가능성을 물으며, 더 넓은 ROCm GPU 호환성에도 관심이 있었다.

### Less Technical AI Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[the part nobody warns you about](https://www.reddit.com/r/ClaudeAI/comments/1t5vs8t/the_part_nobody_warns_you_about/)** (Activity: 2145): 이 게시물은 흔한 **AI 보조 빠른 프로토타이핑 실패 모드**를 설명한다. 앱은 약 `3 days` 만에 만들었지만, 작성자는 느린 UI/build/test 루프, 불명확한 생성 코드, 지나치게 큰 함수, 모호한 상태 변수, 문서화되지 않은 에이전트 결정 때문에 약 `2 weeks` 동안 디버깅 중이라고 했다. 상위 기술 제안은 반복적인 수동 버튼 클릭 회귀 점검을 대체하기 위해 **Claude가 자동화 테스트를 생성**하게 하고, 초기 결함이 아키텍처 가정이나 의존성이 되지 않도록 더 작은 단계로 개발하며 지속적으로 디버깅하라는 것이었다. 댓글은 이 문제를 부분적으로 프로세스 문제로 봤다. 검증을 미루면 수정이 새 버그를 만드는 “고르디우스의 매듭”이 된다는 것이다. 더 거친 의견으로는 개발자가 “자신이 뭘 하는지 모를 때” 이런 일이 생긴다며, 피할 수 없는 빌딩 비용이라기보다 엔지니어링 규율 부족이라고 봤다.
- **초기 자동화 테스트 권장**: 여러 댓글은 UI 흐름을 수동 클릭으로 확인하기보다 초기에 자동화 테스트를 추가하라고 강조했다. 한 사용자는 **Claude**에게 테스트를 생성하게 해 회귀를 계속 잡으라고 했고, 다른 사용자는 *“early bugs become assumptions, and then dependencies”*라며 단계별로 만들고 점진적으로 디버깅하라고 권했다. 검증을 늦추면 수정이 연쇄 회귀로 바뀔 수 있다는 지적이다.
- **Storybloq 제안**: 한 댓글은 **Claude Code** 도구로 설명된 [**Storybloq**](https://github.com/Storybloq/storybloq)를 추천했다. 이 도구는 git으로 추적되는 프로젝트 메모리와 거버넌스 계층을 추가한다고 한다. 주장된 기술적 이점은 시간에 따른 에이전트 결정의 감사 가능성으로, 과거 구현 선택의 이유를 보존해 향후 디버깅을 돕는 것이다.
- **[thanks Claude](https://www.reddit.com/r/ClaudeCode/comments/1t67k33/thanks_claude/)** (Activity: 2239): 이미지는 Claude 같은 AI 도구가 프로토타이핑 속도와 포기 속도를 모두 높인다는 농담의 **비기술 밈/트윗 스크린샷**이다. 문구는 *“thanks to AI i create and abandon projects 4x faster.”*다. 맥락상 이 게시물은 도메인을 더 많이 사고 [ijustvibecodedthis.com](http://ijustvibecodedthis.com)으로 “vibe coding”을 한다는 농담으로 이어진다. 이미지는 여기 있다: [https://i.redd.it/7oz5ncnq8pzg1.png](https://i.redd.it/7oz5ncnq8pzg1.png). 댓글은 이를 웃기지만 실제적인 AI 보조 개발 비판으로 본다. LLM은 아이디어와 프로토타입 생성 비용을 낮추지만, **출시, 프로덕션화, 사용자 채택은 여전히 어려운 부분**이라는 것이다.

---

## AI Discord Recap

### Discord 접근 중단

- **Discord 접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이며, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
