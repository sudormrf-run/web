---
title: "Qwen3.6-27B, 로컬 코딩 모델로 급부상"
summary:
  - "Qwen3.6-27B, 로컬 코딩 성능 급상승"
  - "OpenAI Privacy Filter, PII 마스킹 공개"
  - "Google, TPU 8t/8i와 에이전트 플랫폼 발표"
  - "팀용 워크스페이스 에이전트, Slack 연동 확산"
  - "Anthropic, Claude Code 티어 변경 테스트 논란"
date: 2026-04-22
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-22-not-much.md"
hasHeadline: false
headline: "Qwen3.6-27B, 로컬 코딩 모델로 급부상"
tags:
  - OpenAI
  - Codex
  - Qwen
  - Google
  - Anthropic
isFeatured: false
---

## 헤드라인: Qwen3.6-27B, 로컬 코딩 모델로 급부상

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Alibaba가 공개한 Qwen3.6-27B는 로컬 실행을 전제로 한 오픈 코딩 모델 중 “진짜 경쟁력 있는” 축으로 빠르게 올라섰다는 평가를 받았다. **Apache 2.0** 라이선스, thinking/non-thinking 모드, 멀티모달 체크포인트를 내세우며, SWE-bench 계열과 Terminal-Bench 같은 코딩 평가에서 더 큰 모델 대비 우위를 주장했다. 발표 직후 vLLM·GGUF·llama.cpp·Ollama 등 서빙/배포 생태계가 바로 대응한 점도, 단순한 모델 공개가 아니라 “즉시 실사용 가능한 로컬 코딩 스택”으로 이어졌다는 신호로 읽힌다.

---

## AI Twitter Recap

### 오픈 모델: Qwen3.6-27B, OpenAI Privacy Filter, Xiaomi MiMo-V2.5

- **Qwen3.6-27B lands as a serious local/open coding model**: [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2046939764428009914)가 **Qwen3.6-27B**를 공개했다. 이는 **dense**(밀집형) 구조의 **Apache 2.0** 모델로, **thinking + non-thinking modes**와 **unified multimodal checkpoint**를 제공한다. Alibaba는 주요 코딩 평가에서 더 큰 **Qwen3.5-397B-A17B**를 앞선다고 주장하며, [**SWE-bench Verified 77.2 vs 76.2**](https://x.com/Alibaba_Qwen/status/2046939775924584577), [**SWE-bench Pro 53.5 vs 50.9**](https://x.com/Alibaba_Qwen/status/2046939775924584577), **Terminal-Bench 2.0 59.3 vs 52.5**, **SkillsBench 48.2 vs 30.0**를 제시했다. 또한 [native vision-language reasoning over images and video](https://x.com/Alibaba_Qwen/status/2046939788184547610)를 지원한다. 생태계도 즉각 움직였는데, [vLLM shipped day-0 support](https://x.com/vllm_project/status/2046943674890871019), [Unsloth published 18GB-RAM local GGUFs](https://x.com/UnslothAI/status/2046959757299487029), [ggml added llama.cpp usage](https://x.com/ggerganov/status/2046988075302064209), [Ollama added a packaged release](https://x.com/ollama/status/2047066252523507916)가 이어졌다. [@KyleHessling1](https://x.com/KyleHessling1/status/2046986423736451327), [@simonw](https://x.com/simonw/status/2046995047720378458)의 초기 사용자 후기도 로컬 프런트엔드/디자인 및 이미지 작업에서 특히 강하다는 쪽이었다.
- **OpenAI quietly open-sources a practical privacy model**: 여러 관찰자들이 OpenAI의 신규 [**Privacy Filter**](https://x.com/ClementDelangue/status/2046973714751754479)를 주목했다. **PII detection and masking**(개인정보 식별 및 마스킹)용 경량 **Apache 2.0** 오픈 모델로, [@altryne](https://x.com/altryne/status/2046977133013311814), [@eliebakouch](https://x.com/eliebakouch/status/2046979020890198503), [@mervenoyann](https://x.com/mervenoyann/status/2046980302002602473)에 따르면 **1.5B total / 50M active MoE** 토큰 분류(token-classification) 모델이며 **128k context window**(컨텍스트 윈도)를 제공한다. 매우 큰 코퍼스(corpus)와 로그(log)에 대해 저비용으로 비식별(redaction) 처리를 하려는 목적이라는 점에서, “그냥 작은 오픈 모델”보다 엔터프라이즈/에이전트 파이프라인의 구체적인 인프라(infra) 문제를 겨냥한 운영적(operational) 릴리스로 평가됐다.
- **Xiaomi pushes agentic open models upward**: [@XiaomiMiMo](https://x.com/XiaomiMiMo/status/2046988157888209365)가 **MiMo-V2.5-Pro**와 **MiMo-V2.5**를 발표했다. Xiaomi는 **V2.5-Pro**가 소프트웨어 엔지니어링과 장기 과업(long-horizon) 에이전트 성능에서 큰 도약이라고 주장하며 **SWE-bench Pro 57.2**, **Claw-Eval 63.8**, **τ3-Bench 72.9** 및 1,000+ 자율 툴 호출(tool calls)을 언급했다. 비(非) Pro 모델은 **native omnimodality**와 **1M-token context window**를 추가했다. Arena는 [MiMo-V2.5 in Text/Vision/Code evaluation](https://x.com/arena/status/2047013664142893286)에 빠르게 반영했고, Hermes/Nous 통합도 [@Teknium](https://x.com/Teknium/status/2047093325774385358)을 통해 뒤따랐다.

### Google Cloud Next: TPU v8, Gemini Enterprise Agent Platform, Workspace Intelligence

- **Google’s infra announcements were substantial, not cosmetic**: [@Google](https://x.com/Google/status/2046993420841865508)과 [@sundarpichai](https://x.com/sundarpichai/status/2046981627184902378)가 설계가 분리된 **8th-gen TPUs**를 소개했다. 학습(training)용 **TPU 8t**, 추론(inference)용 **TPU 8i**로 나뉘며, Google은 **8t**가 Ironwood 대비 pod당 컴퓨트(compute)를 거의 **3x** 제공하고, **8i**는 pod당 **1,152 TPUs**를 연결해 저지연 추론과 고처리량 멀티 에이전트 워크로드를 겨냥한다고 밝혔다. [@scaling01](https://x.com/scaling01/status/2046981511753130461)은 TPU8t로 **a million TPUs in a single cluster**까지 스케일(scale) 가능하다는 추가 주장을 강조했다. 단순 하드웨어 스펙만큼이나, 칩·모델·에이전트 툴링·엔터프라이즈 컨트롤 플레인(control plane)을 수직 통합(vertically integrated)하려는 제품화 신호가 중요하다는 해석이 나왔다.
- **Enterprise agents became a first-class Google product surface**: [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2046983340524269713)와 [@Google](https://x.com/Google/status/2046985650868547851)이 **Gemini Enterprise Agent Platform**을 공개했다. Vertex AI가 대규모 에이전트를 구축·거버넌스(governance)·최적화하는 플랫폼으로 진화한다는 포지셔닝이며, **Agent Studio**, **Model Garden의 200+ 모델 접근** 등을 포함한다. 또한 [**Gemini 3.1 Pro**, **Gemini 3.1 Flash Image**, **Lyria 3**, and **Gemma 4**](https://x.com/GoogleDeepMind/status/2046983343481270459) 지원을 언급했다. 관련 발표로 [**Workspace Intelligence** GA](https://x.com/ChanduThota/status/2046946043078848788)(docs/sheets/meetings/mail 등에 대한 시맨틱 레이어), [Gemini Enterprise inbox/canvas/reusable skills](https://x.com/Google/status/2046988686433108417), [Agentic Data Cloud](https://x.com/Google/status/2046997032649277754), [security agents with Wiz integration](https://x.com/Google/status/2047000216188940710), [Gemini Embedding 2 GA](https://x.com/GoogleAIStudio/status/2047007402520674679)(텍스트/이미지/비디오/오디오/문서 통합 임베딩)이 함께 나왔다.

### 에이전트 하네스(harness), 트레이스(trace), 팀 워크플로

- **The “agent harness” abstraction is hardening across vendors**: OpenAI는 [**workspace agents in ChatGPT**](https://x.com/OpenAI/status/2047008987665809771)를 소개했다. 팀이 공유할 수 있는 **Codex-powered** 워크스페이스 에이전트로, 문서·이메일·채팅·코드·외부 시스템을 넘나들며 동작하고 [Slack-based workflows and scheduled/background tasks](https://x.com/OpenAI/status/2047008991944069624)도 포함한다. Google이 Gemini Enterprise Agent Platform으로 유사한 엔터프라이즈 방향을 잡는 동시에, [Cursor added Slack invocation for task kick-off and streaming updates](https://x.com/cursor_ai/status/2047000517751288303)처럼 Slack을 통한 호출/진행상황 스트리밍까지 확산됐다. 단일 사용자 챗에서, 클라우드 호스팅·공유 컨텍스트·승인(approvals)·장기 실행(long-running execution)으로 패턴이 수렴한다는 관찰이다.
- **Developer ergonomics around harness/model independence improved**: VS Code/Copilot이 [bring-your-own-key/model support across plans](https://x.com/pierceboggan/status/2046985841596354815) 및 [business/enterprise](https://x.com/GHchangelog/status/2047023899238400491)로 확장되며, Anthropic·Gemini·OpenAI·OpenRouter·Azure·Ollama·로컬 백엔드 등 다양한 공급자(provider)를 수용하는 흐름이 강화됐다. 이는 [@omarsar0](https://x.com/omarsar0/status/2047006936306962754)이 지적했듯 많은 모델이 아직 자기네 하네스에 과적합(overfit)된 것처럼 보인다는 점에서 전략적으로 중요하다는 평가다. Cognition의 [Russell Kaplan](https://x.com/russelljkaplan/status/2047077659985981616)은 엔터프라이즈 구매자는 특정 연구소(lab)에 붙는 것이 아니라, SDLC 전반을 포괄하는 인프라와 **model flexibility**를 원한다는 사업적 근거를 덧붙였다.
- **Traces/evals/self-improvement are becoming the core agent data primitive**: LangChain 인접 논의에서 특히 강한 흐름이 나왔다. [@Vtrivedy10](https://x.com/Vtrivedy10/status/2046942634321559707)은 **traces**가 에이전트의 오류와 비효율을 포착하며, 더 나은 평가(evals)·스킬(skills)·환경(environments)을 만들기 위해 트레이스를 이해하는 데 컴퓨트를 투입해야 한다고 주장했다. 이어지는 [a longer follow-up](https://x.com/Vtrivedy10/status/2046979341427331522)은 트레이스 마이닝(mining)→스킬→컨텍스트 엔지니어링(context engineering)→서브에이전트(subagents)→온라인 평가(online evals)로 이어지는 루프를 구체화했다. [@ClementDelangue](https://x.com/ClementDelangue/status/2046942871299772441)은 오픈 에이전트 학습을 위한 데이터 기층(substrate)으로 **open traces**를 밀었고, [@gneubig](https://x.com/gneubig/status/2046963826109689983)은 **ADP / Agent Data Protocol** 표준화를 홍보했다. LangChain도 [@hwchase17](https://x.com/hwchase17/status/2046962351090606404)을 통해 테스트/평가 제품 방향을 더 강하게 시사했다.

### 포스트-트레이닝(post-training), RL, 추론 시스템(inference systems)

- **Perplexity and others shared more of the post-training playbook**: [@perplexity_ai](https://x.com/perplexity_ai/status/2047016400292839808)가 사실성(factuality), 인용 품질(citation quality), 지시 따르기(instruction following), 효율을 개선하는 **search-augmented SFT + RL** 파이프라인을 공개했다. 또한 Qwen 기반 시스템이 더 낮은 비용으로 GPT 계열 모델과 사실성에서 맞먹거나 앞설 수 있다고 주장했다. [@AravSrinivas](https://x.com/AravSrinivas/status/2047019688920756504)는 Perplexity가 툴 라우팅(tool routing)과 요약(summarization)을 통합한, 포스트-트레이닝된 Qwen 파생 모델을 프로덕션(production)에 올려 상당한 트래픽을 처리 중이라고 덧붙였다. 연구 측면에서는 [@michaelyli__](https://x.com/michaelyli__/status/2047019938339340602)가 RL로 추론(reasoning)과 **KV-cache retention/eviction**(유지/퇴출)을 프록시(proxy) 목적함수 없이 함께 학습하는 **Neural Garbage Collection**을 소개했고, [@sirbayes](https://x.com/sirbayes/status/2046961503107166689)는 ForecastBench에서 인간 슈퍼예측가(superforecasters)와 맞먹는 베이지안(Bayesian) 언어-신념(linguistic-belief) 예측 에이전트를 언급했다.
- **The “minimal editing” problem in coding models got a useful benchmark treatment**: [@nrehiew_](https://x.com/nrehiew_/status/2046963016428872099)가 코딩 모델이 버그를 고치면서 코드를 “너무 많이” 다시 쓰는 **Over-Editing** 문제를 다뤘다. 최소로 손상된(minimally corrupted) 문제를 구성해 patch-distance와 **Cognitive Complexity**로 과잉 편집(excess edits)을 측정했으며, [GPT-5.4 over-edits the most while Opus 4.6 over-edits the least](https://x.com/nrehiew_/status/2046963041338855791)라는 결과를 제시했다. 또 [RL outperforms SFT, DPO, and rejection sampling](https://x.com/nrehiew_/status/2046963050427879488)로, 재학습 시 최소 편집 스타일을 일반화하면서도 catastrophic forgetting을 피하는 데 RL이 더 낫다는 결론을 내렸다. 이는 실제 코드 리뷰에서 자주 불만이 나오는 실패 모드(failure mode)를 겨냥했다는 점에서 실용적이라는 평가다.
- **Inference efficiency work remained highly active**: [@cohere](https://x.com/cohere/status/2047052557915476304)는 vLLM에 **production W4A8 inference**를 통합하며 Hopper에서 W4A16 대비 **TTFT 최대 58%**, **TPOT 45%** 개선을 보고했다. 세부로는 [per-channel FP8 scale quantization and CUTLASS LUT dequantization](https://x.com/cohere/status/2047052560553681183)을 포함한다. [@WentaoGuo7](https://x.com/WentaoGuo7/status/2047007230847766951)은 Blackwell에서 **SonicMoE**의 처리량(throughput) 향상을 언급하며, **DeepGEMM baseline** 대비 fwd/bwd TFLOPS가 **54% / 35%** 높고 활성 파라미터(active params)가 같을 때 dense와 동등한 activation memory를 유지한다고 설명했다. [@baseten](https://x.com/baseten/status/2047019335542358284)은 reranking에서 shared-prefix 제거를 위한 **RadixMLP**를 소개하며 현실적 환경에서 **1.4–1.6x** 가속을 주장했다.

### Top tweets (by engagement)

- **OpenAI workspace agents**: [@OpenAI](https://x.com/OpenAI/status/2047008987665809771)가 Business/Enterprise/Edu/Teachers용 공유 Codex 기반 워크스페이스 에이전트를 공개했다.
- **Qwen3.6-27B release**: [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2046939764428009914)이 Apache 2.0 라이선스의 신규 오픈 **27B** dense 모델을 발표했다.
- **Google TPU v8**: [@sundarpichai](https://x.com/sundarpichai/status/2046981627184902378)가 학습/추론 분리형 **TPU 8t / 8i**를 예고했다.
- **Flipbook / model-streamed UI**: [@zan2434](https://x.com/zan2434/status/2046982383430496444)가 전통적 UI 스택이 아니라 모델이 픽셀로 화면을 렌더링하는 프로토타입을 시연했다.
- **OpenAI Privacy Filter**: [@scaling01](https://x.com/scaling01/status/2046972437422543064) 등이 Hugging Face의 오픈소스 **PII detection/redaction** 모델을 강조했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen 3.6 27B is out](https://www.reddit.com/r/LocalLLaMA/comments/1ssl1xh/qwen_36_27b_is_out/)** (Activity: 2576): **Qwen 3.6 27B** 신규 언어 모델이 [Hugging Face](https://huggingface.co/Qwen/Qwen3.6-27B)에 공개됐다. `27 billion parameters`를 특징으로 하며, 이전 버전 대비 성능 벤치마크 개선을 목표로 한다. 또한 제한된 컴퓨팅 자원에서 더 효율적으로 배포할 수 있는 FP8 양자화(quantization) 버전 [Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)도 제공된다. 커뮤니티는 벤치마크 개선 폭과 양자화 버전 제공을 함께 긍정적으로 보고 있다.
  - Namra_7는 Qwen 3.6 27B의 벤치마크 이미지(추론 속도, 정확도 등 지표로 추정)를 공유했지만, 댓글에는 세부 수치가 설명돼 있지 않았다.
  - challis88ocarina는 Hugging Face의 FP8 양자화 버전을 언급했다. 양자화는 정확도 손실을 크게 늘리지 않으면서 모델 크기 축소와 추론(inference) 속도 향상에 도움이 될 수 있다.
  - Eyelbee는 추가 이미지 링크를 올렸으나, 댓글만으로는 이미지 내용의 구체적 정보를 확인하기 어렵다.
- **[Qwen3.6-27B released!](https://www.reddit.com/r/LocalLLaMA/comments/1ssl6ki/qwen3627b_released/)** (Activity: 895): **Qwen3.6-27B**는 신규 dense 오픈소스 모델로, 코딩 작업에서 강점을 보이며 주요 코딩 벤치마크에서 이전 모델(Qwen3.5-397B-A17B) 대비 우수하다는 설명이 공유됐다. 텍스트 및 멀티모달 태스크에서 강한 추론 능력을 갖추고, ‘thinking’/‘non-thinking’ 모드를 제공하며, **Apache 2.0** 라이선스로 공개돼 커뮤니티 사용이 용이하다는 점이 강조됐다. 더 자세한 내용은 [blog](https://qwen.ai/blog?id=qwen3.6-27b), [GitHub](https://github.com/QwenLM/Qwen3.6), [Hugging Face](https://huggingface.co/Qwen/Qwen3.6-27B)에 있다. 댓글은 Qwen 팀에 대한 호평과 함께, 자신들의 하드웨어에서 빨리 돌려보고 싶다는 반응이 많았다.
  - ResearchCrafty1804는 27B가 397B-A17B보다 여러 코딩 벤치마크에서 앞선다는 점을 강조하며, SWE-bench Verified 77.2, SWE-bench Pro 53.5, Terminal-Bench 2.0 59.3, SkillsBench 48.2 등의 수치를 언급했다.
  - bwjxjelsbd는 경쟁 구도를 언급하며, Alibaba(Qwen) 진영의 전진이 경쟁과 투명성을 자극하길 바란다는 의견을 남겼다.
- **[Qwen3.6-35B becomes competitive with cloud models when paired with the right agent](https://www.reddit.com/r/LocalLLaMA/comments/1ssilc3/qwen3635b_becomes_competitive_with_cloud_models/)** (Activity: 848): **Qwen3.6-35B**가 `little-coder` 에이전트와 결합될 때 Polyglot 벤치마크에서 `78.7%` 성공률을 기록해 상위 10에 진입했다는 내용이다. 이는 스캐폴드(scaffold)/하네스(harness) 선택이 성능에 큰 영향을 줄 수 있음을 보여주며, 로컬 모델이 벤치마크에서 약하게 보이는 이유가 하네스 불일치(harness mismatch)일 수 있다는 논의로 이어졌다. 추가 테스트로 Terminal Bench와 GAIA를 언급했고, 자세한 내용은 [GitHub](https://github.com/itayinbarr/little-coder)와 [Substack](https://open.substack.com/pub/itayinbarr/p/honey-i-shrunk-the-coding-agent)에 있다.
  - DependentBat5432는 스캐폴드를 바꾸자 `19%`에서 `78%`로 뛰었다는 점을 들어, 스캐폴드 변수를 통제하지 않는 벤치마크 비교의 타당성(validity)을 문제 삼았다.
  - Willing-Toe1942는 pi-coding 에이전트로 Qwen3.6이 opencode 대비 거의 2배 성능을 보였다고 보고하며, 문서 검색 등 실제 작업에서 에이전트 선택이 중요하다는 취지로 말했다.
  - kaeptnphlop는 VS Code에서 GitHub Copilot과 결합한 Qwen-Coder-Next 조합을 언급하며, 다른 도구와의 조합 실험을 시사했다.
- **[Qwen3.6-27B released!](https://www.reddit.com/r/LocalLLM/comments/1sslo98/qwen3627b_released/)** (Activity: 368): 벤치마크 비교 차트를 통해 **Qwen3.6-27B**가 Qwen3.5-27B나 Gemma4-31B 등 대비 Terminal-Bench 2.0, SWE-bench Pro에서 개선됐다는 요지다. 댓글에서는 더 큰 Qwen122b를 기대하는 반응과, ‘thinking’ 과정에서 루프(loop)에 빠질 수 있다는 우려가 함께 나왔다.
  - MrWeirdoFace는 ‘unsloth Q5 quant’ 버전에서 생각 루프(thought cycle)에 빠지는 문제가 있다고 언급했다.
  - andreabarbato도 q4 양자화에서 비슷한 루프 문제가 있다고 말해, 양자화 방식이 안정성에 영향을 줄 수 있음을 시사했다.
  - DjsantiX는 ‘5060 ti 16gb’ 같은 소비자 GPU에 올릴 수 있는지 질문하며, 로컬 구동의 자원 제약이 여전히 주요 관심사임을 보여줬다.
- **[An actual example of "If you dont run it, you dont own it" and Gemma 4 beats both Chat GPT and Gemini Chat](https://www.reddit.com/r/LocalLLaMA/comments/1ss2lib/an_actual_example_of_if_you_dont_run_it_you_dont/)** (Activity: 355): 중국 소설 번역에서 모델 열화(degradation)와 검열(censorship) 이슈를 비교한 사례다. **GPT OSS 120B**는 이름이 섞이는 문제가, **Qwen 3 Max**는 검열 문제가 있었다고 하며, **Chat GPT 4o**는 업데이트 후 번역 실패율이 20%까지 늘었다고 주장한다. 반면 **Gemma 4 31B**가 **Gemini Chat**과 **GPT 5.3**보다 자연스럽고 정확한 번역을 제공했다고 보고됐다.
  - Uncle___Marty는 Gemma 4와 Qwen 3.5가 각자 강점이 다르다는 식으로 정리하며, 무료 제공의 가치를 강조했다.
  - Potential-Gold5298는 [dubesor.de](https://dubesor.de/benchtable), [foodtruckbench.com](https://foodtruckbench.com/#leaderboard) 벤치마크를 언급하며 RP(롤플레잉) 커뮤니티에선 Gemma 4가 큰 전진이라는 취지로 말했다.
  - Sevenos는 Gemma 4가 독일어 챗봇으로도 오류가 적고 구조화가 잘 된다고 평가했다.
- **[Gemma 4 Vision](https://www.reddit.com/r/LocalLLaMA/comments/1srrhi5/gemma_4_vision/)** (Activity: 409): **Gemma 4 Vision**의 vision budget 설정이 핵심이다. 기본값(280 tokens, 약 645K pixels)이 OCR에는 부족할 수 있으며, `llama.cpp`에서 `--image-min-tokens`, `--image-max-tokens`를 560/2240 등으로 올리면 세부 인식이 좋아질 수 있다는 내용이다. 다만 VRAM 사용량이 크게 증가(예: batch 4096에서 63GB→77GB)한다. 적절히 설정하면 Qwen 3.5/3.6, GLM OCR 대비 성능이 좋다는 주장도 언급됐다.
  - Temporary-Mix8022는 더 작은 비전 인코더(c150m)에서 최소 토큰 설정이 어떻게 적용되는지 질문했다.
  - stddealer는 Gemma4 비전이 기대보다 약하다고 느꼈던 이유가 토큰 설정 때문일 수 있다는 경험을 공유했다.
  - eposnix는 LM Studio가 비전 관련 설정 변수를 노출하지 않는 점을 제한으로 지적했다.
- **[Ultimate List: Best Open Models for Coding, Chat, Vision, Audio &amp; More](https://www.reddit.com/r/LocalLLaMA/comments/1sseh00/ultimate_list_best_open_models_for_coding_chat/)** (Activity: 313): 코딩/챗/비전/오디오 등 분야별 “최고” 오픈 모델 리스트를 제시한다. 다양한 모델이 나열됐지만, 댓글에서는 리스트의 신뢰성과 사실 기반(factual basis)에 대한 회의가 나왔다.
  - SatoshiNotMe는 STT/TTS 모델 누락을 지적하며 KyutAI의 `PocketTTS`, STT용 `Parakeet V3` 등을 언급했다.
  - ecompanda는 업데이트가 잦아 “최고 모델” 리스트가 빠르게 낡는다는 점을 강조하며, `Qwen 3.6 Plus`가 리더보드를 재편했다는 취지로 말했다.
- **[Ultimate List: Best Open Source Models for Coding, Chat, Vision, Audio &amp; More](https://www.reddit.com/r/LocalLLM/comments/1ssejd5/ultimate_list_best_open_source_models_for_coding/)** (Activity: 252): 유사한 “오픈소스 모델 베스트” 리스트를 공유했고, 댓글에서는 포맷 개선 요구와 특정 모델 성능 논쟁이 이어졌다.
  - Adrian_Galilea는 Qwen TTS가 1분 이상 오디오에서 성능이 어떤지 문제를 제기하며 Kokoro가 대안일 수 있다고 언급했다.
  - decentralize999는 최신 리더보드를 제공하는 [Artificial Analysis](https://artificialanalysis.ai/leaderboards/models)를 공유하며, Qwen3.6-35B의 존재감을 언급했다.
  - oguza는 Flux.2 dev, Klein 등의 포함 여부를 질문했다.

### Less Technical Subreddits

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[PSA: Claude Pro no longer lists Claude Code as an included feature](https://www.reddit.com/r/ClaudeAI/comments/1srzhd7/psa_claude_pro_no_longer_lists_claude_code_as_an/)** (Activity: 4239): **Claude Pro** 요금제에서 **Claude Code**가 포함 기능으로 더 이상 표시되지 않는다는 관찰이다. [pricing page](https://claude.com/pricing)에서 확인됐고, 지원 문서(현재 제목: “Using Claude Code with your Max plan”)도 Max 플랜 중심으로 바뀐 정황이 언급됐다. 댓글은 불만이 크며 구독 해지 고려가 나타났다.
- **[Anthropic response to Claude Code change](https://www.reddit.com/r/ClaudeAI/comments/1ss5fi4/anthropic_response_to_claude_code_change/)** (Activity: 1975): **Anthropic**이 신규 prosumer 가입자 중 약 `~2%`를 대상으로 구독 플랜 변경 테스트를 진행 중이라는 내용이다. Claude Code, Cowork, 장기 실행 async 에이전트 사용으로 비용이 늘어 주간 캡(weekly caps)과 피크 시간 제한이 강화됐다는 맥락이 제시됐다. [Amol Avasare](https://x.com/amolavasare)가 X에서 이를 언급한 것으로 소개되며, 기존 구독자에는 사전 공지가 있을 것이라는 설명이 포함됐다. 댓글은 투명성 부족과 “가챠” 같다는 비판이 나온다.
  - 일부 사용자는 `2%`만 기능 접근이 가능해 혼란을 키운다고 지적했다.
  - 무작위로 Claude Code 접근이 갈리는 점을 공정성 측면에서 문제 삼는 반응이 있었다.
  - 테스트 목적이 “기대했던 기능이 없을 때 반응을 보는 것” 아니냐는 냉소도 나왔다.
- **[Does Claude's $20 Plan No Longer Include Claude Code?](https://www.reddit.com/r/ClaudeAI/comments/1ss3asp/does_claudes_20_plan_no_longer_include_claude_code/)** (Activity: 1477): 가격표 이미지에서 $20 Pro 플랜에 ‘Claude Code’가 없고 Max 플랜들에만 있다는 점이 혼란을 일으켰다는 내용이다. Claude.com과 Claude.ai 간 정보 불일치도 언급되며, 취미 개발자(hobbyist programming) 관점에서 대안(예: ChatGPT, Codex) 이동 가능성이 거론된다.
  - Pro 플랜에서의 제공 여부가 시점/사용자별로 다르게 보인다는 혼선이 지적됐다.
  - 지원 문서가 Pro+Max를 암시했다가 Max 전용 페이지로 바뀐 것처럼 보인다는 정황이 언급됐다.
  - 불확실성이 커지며 대안 서비스로 이동하겠다는 반응이 나타났다.
- **[Sama is on 🔥🔥](https://www.reddit.com/r/ClaudeCode/comments/1sse789/sama_is_on/)** (Activity: 1164): Sam Altman과 Anthropic의 Claude Code 변경 논란을 둘러싼 밈(meme) 성격의 스크린샷이 화제가 됐다. ‘ok boomer’ 반응이 주목을 받았고, A/B 테스트 윤리 문제에 대한 비판이 댓글에서 강했다.
  - 50명 중 1명꼴로 기능이 줄어드는 테스트를 알리지 않는 건 비윤리적이라는 지적이 있었다.
  - $200/월 플랜으로 즉시 업그레이드를 기대하는 건 비현실적이라는 비판이 나왔다.
- **[Head of Growth at Anthropic regarding Claude Code removal from Pro](https://www.reddit.com/r/ClaudeCode/comments/1ss5bop/head_of_growth_at_anthropic_regarding_claude_code/)** (Activity: 2197): Claude Code를 Pro에서 Max로 옮기는 전략 변화가 `2%` 신규 가입자 테스트의 일환이라는 맥락이 요약된다. 기존 Pro/Max 사용자는 영향이 없다는 설명과 함께, 컴퓨트(compute) 제약이 배경일 수 있다는 추정이 나온다.
  - 컴퓨트 부족이 가격/티어 조정으로 이어졌을 가능성이 제기됐다.
  - 업계 전반의 토큰 비용 증가와 구독 가치 하락 우려가 언급됐다.
  - Claude가 일반 지식보다 코딩에 더 집중된 시장을 가진다는 관찰이 나왔다.
- **[We’re saved! Claude Code is back in the Pro plan!](https://www.reddit.com/r/ClaudeCode/comments/1sscvvo/were_saved_claude_code_is_back_in_the_pro_plan/)** (Activity: 586): Pro 플랜에 Claude Code가 다시 포함된 것으로 보이는 가격표 이미지가 공유됐다. 다만 댓글은 이것이 A/B 테스트의 일부일 수 있고, 제한이 더 빡빡할 수 있다는 회의적 반응도 포함한다.
  - $20 플랜의 실사용 한계(usage limits)에 대한 우려가 나왔다.
  - Pro+ 같은 중간 티어 신설이나 가격 인상 가능성이 추측됐다.
  - 예고 없는 제한 축소에 대한 우려가 제기됐다.
- **[Claude Code no longer listed as a feature for Claude Pro](https://www.reddit.com/r/ClaudeCode/comments/1ss0xsp/claude_code_no_longer_listed_as_a_feature_for/)** (Activity: 2784): Claude Pro 비교표에서 Claude Code가 빠졌다는 내용이며, 공식 발표 없이 변경된 것으로 보여 사용자 불만이 커졌다. [Claude Pricing](https://claude.com/pricing)에서 확인 가능하다고 언급된다.
  - $100/월의 Max 플랜이 취미 프로젝트에는 부담이라는 반응이 있었다.
  - 스크린샷을 통해 변경이 “공식처럼 보인다”는 확인이 공유됐다.
  - 연간 결제를 했던 사용자가 환불을 고민한다는 반응도 있었다.
- **[Claude Code removed from Anthropic's Pro plan](https://www.reddit.com/r/ClaudeCode/comments/1ss3b0t/claude_code_removed_from_anthropics_pro_plan/)** (Activity: 990): Pro에서 Claude Code가 빠지고 Max에만 남은 것으로 보이는 비교표 이미지가 공유됐다. Hacker News를 통해 알려졌고, 테스트였을 수 있다는 트윗도 언급되며 불확실성이 지속된다는 요지다.
- **[Gpt image 2 has the biggest jump in quality ever recorded](https://www.reddit.com/r/singularity/comments/1sry7k9/gpt_image_2_has_the_biggest_jump_in_quality_ever/)** (Activity: 1395): ‘Text-to-Image Arena’ 리더보드에서 OpenAI의 ‘gpt-image-2’가 `1512` 점수를 기록하며 큰 도약으로 묘사됐다. `4.8 million` 투표 기반이며, 2026년 4월 19일 기준이라는 설명이 포함된다. 댓글은 텍스트 렌더링과 포토리얼리즘(photorealism)에서 놀라운 개선을 강조한다.
  - ‘medium’, ‘instant’ 같은 품질 레벨이 있어 보이며 API에 ‘high’가 있을 수 있다는 추측이 나왔다.
  - 인포그래픽 같은 복잡한 이미지에서 이전 모델보다 월등하다는 반응이 있었다.
  - ‘extended thinking’ 프롬프트가 품질 향상과 관련 있을 수 있다는 추측이 언급됐다.
- **[GPT-Image-2 now reviews its own output and iterates until it is satisfied with the correctness of its output.](https://www.reddit.com/r/singularity/comments/1srehi7/gptimage2_now_reviews_its_own_output_and_iterates/)** (Activity: 658): GPT-Image-2가 출력물을 자기 검토(self-review)하고 만족할 때까지 반복(iterate)하는 기능이 소개됐다. 예시에서는 약 11분이 걸렸다고 하며, 내부 반복이 5~10회일 수 있다는 우려가 언급됐다. 빠른 반복이 필요한 UI 목업(workflow)에는 비용/시간 부담이 될 수 있다는 반응이 있다.
  - ‘iteration count’를 사용자 조절 가능하게 해달라는 요구가 나왔다.
  - ‘sepia filter’ 같은 스타일 일관성을 언급하는 반응이 있었다.
  - 숫자(예: 15, 39) 렌더링 오류 같은 정확도 한계 지적도 있었다.
- **[GPT Image 2 is amazing!](https://www.reddit.com/r/OpenAI/comments/1ss40rn/gpt_image_2_is_amazing/)** (Activity: 794): 비교적 비기술적 밈/캐주얼 이미지로, 댓글도 기술 논의보다는 분위기와 농담 중심이었다.
- **[Introducing ChatGPT Images 2.0](https://www.reddit.com/r/OpenAI/comments/1sry11n/introducing_chatgpt_images_20/)** (Activity: 929): OpenAI가 **ChatGPT Images 2.0**을 공개하며 이미지 생성의 정밀도와 제어력을 강화했다고 소개했다. 다국어 텍스트 렌더링과 다양한 스타일을 지원하며, 자세한 내용은 [OpenAI announcement](https://openai.com/index/introducing-chatgpt-images-2-0/)에서 확인할 수 있다고 요약됐다. 댓글은 성능과 제한(콘텐츠 정책) 사이 균형에 대한 토론과 함께, 복잡한 디자인을 잘 만들어낸다는 실험담이 이어졌다.
  - 강력 모델을 먼저 공개한 뒤 비용 때문에 성능을 제한(throttling)하는 패턴을 경계해야 한다는 의견이 있었다.
  - 다른 모델들과의 비교 벤치마크 필요성이 언급됐다.
- **[Wow, GPT Image 2 is superb!](https://www.reddit.com/r/DeepSeek/comments/1ssj9vx/wow_gpt_image_2_is_superb/)** (Activity: 56): GPT Image 2의 인상적인 결과를 언급하지만, 모델 아키텍처나 벤치마크 같은 기술 세부는 부족하다는 요지다.
- **[GPT IMAGE 2 is superb](https://www.reddit.com/r/ChatGPT/comments/1sryveb/gpt_image_2_is_superb/)** (Activity: 563): 패션 에디토리얼 스타일 콜라주를 복잡한 레이아웃 지시와 함께 생성한 사례로, 텍스트 렌더링 개선과 프롬프트 설계의 중요성이 강조됐다.
- **[Google introduces TPU 8t and TPU 8i](https://www.reddit.com/r/singularity/comments/1ssjlk4/google_introduces_tpu_8t_and_tpu_8i/)** (Activity: 550): Ironwood(2025) 대비 TPU 8i(2026)의 pod 크기, FP8 EFLOPS, HBM 용량, scale-up 대역폭 등 향상을 비교하는 이미지가 공유됐다. 하이퍼스케일러(hyperscaler) 자체 실리콘이 NVIDIA에 대한 경쟁 압력을 높일 수 있다는 논의가 이어졌다.
  - NVIDIA의 경쟁 환경이 바뀌고 있다는 관찰이 나왔다.
  - 보다 자세한 설명 자료로 [technical deep dive](https://cloud.google.com/blog/products/compute/tpu-8t-and-tpu-8i-technical-deep-dive)가 공유됐다.
- **[Google's 8th Generation TPU Released  What is your take on this?](https://www.reddit.com/r/Bard/comments/1ssrbtd/googles_8th_generation_tpu_released_what_is_your/)** (Activity: 85): TPU 8t가 `121 exaflops`, native `FP4` 지원 등으로 양자화 모델에 유리할 수 있다는 요지가 언급됐다. 공급과 수요 불일치 같은 하드웨어 산업의 반복 이슈도 함께 거론됐다.
- **[Google AI Studio Madness](https://www.reddit.com/r/Bard/comments/1ssgx0y/google_ai_studio_madness/)** (Activity: 102): Google AI Studio의 쿼터(quota) 제한이 강해 `3.1 Pro model`이 grounding 없이도 `15 messages` 정도면 소진된다는 불만이 제기됐다. `6,250 prompts a day` 같은 표기가 체감과 다르다는 주장도 있다.
  - Pro/Ultra/Free 간 제한이 동일하게 보인다는 불만이 나왔다.
  - `1 million token context size`가 10프롬프트 내외에서 맥락 유지에 한계를 보인다는 지적이 있었다.
- **[Gemini 3.1 Pro limits in AI Studio are now exactly the same for Pro and Free users](https://www.reddit.com/r/Bard/comments/1srloa4/gemini_31_pro_limits_in_ai_studio_are_now_exactly/)** (Activity: 109): Pro와 Free가 `8-12 prompts` 수준으로 동일 제한처럼 보인다는 주장으로, 기대 대비 가치(value)가 떨어진다는 불만이 요약됐다. 간헐적(intermittent)이라 버그일 수 있다는 의견도 있었다.

---

## AI Discord Recap

### 안내

- **접근 종료 공지**: Discord가 오늘 접근을 차단해 기존 형태로는 더 이상 제공하지 못하며, 새로운 AINews를 곧 출시할 예정이라고 밝혔다.
