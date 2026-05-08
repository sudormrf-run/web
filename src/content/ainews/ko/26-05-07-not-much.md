---
title: "GPT-Realtime-2, OpenAI API에 출시"
summary:
  - "OpenAI가 GPT-Realtime-2를 API에 출시"
  - "Codex가 Chrome 브라우저 제어 지원"
  - "Anthropic이 Natural Language Autoencoders 공개"
  - "Qwen3.6 27B 로컬 추론 속도 2.5배 향상"
  - "Claude Code 사용 한도가 SpaceX 컴퓨트로 확대"
date: 2026-05-07
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-07-not-much.md"
hasHeadline: false
headline: "GPT-Realtime-2, OpenAI API에 출시"
tags:
  - OpenAI
  - GPT-Realtime-2
  - Codex
  - Anthropic
  - Qwen
isFeatured: false
---

## 헤드라인: GPT-Realtime-2, OpenAI API에 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI가 API에 GPT-Realtime-2를 출시했다. 이 모델은 GPT-5급 추론(reasoning), 도구 사용, 끼어들기 처리, 더 긴 대화를 지원하는 OpenAI의 가장 강력한 음성 모델로 소개됐다. 함께 공개된 GPT-Realtime-Translate는 70개 이상 입력 언어와 13개 출력 언어의 스트리밍 번역을 제공하며, GPT-Realtime-Whisper는 저지연 스트리밍 전사(transcription)를 지원한다.

---

## AI Twitter Recap

### OpenAI 음성, Codex, 사이버보안 출시

- **GPT-Realtime-2와 새로운 오디오 스택**: OpenAI가 API에 **GPT-Realtime-2**를 출시했다. OpenAI는 이를 **GPT-5급 추론(reasoning)**, 도구 사용, 끼어들기 처리, 더 긴 대화를 갖춘 가장 강력한 음성 모델로 설명했다. 이 모델은 **70개 이상 입력 언어 / 13개 출력 언어**의 스트리밍 번역을 위한 **GPT-Realtime-Translate**, 저지연 스트리밍 전사를 위한 **GPT-Realtime-Whisper**와 함께 제공된다 ([@OpenAI](https://x.com/OpenAI/status/2052438194625593804)). OpenAI는 ChatGPT 음성 업데이트는 아직 예정되어 있다고 밝혔다 ([@OpenAI](https://x.com/OpenAI/status/2052438197695877316)). Artificial Analysis는 GPT-Realtime-2가 **Big Bench Audio 96.6%**, Conversational Dynamics 벤치마크 **96.1%**로 선두를 기록했고, 컨텍스트가 **32K에서 128K**로 확장됐으며 오디오 가격은 그대로 유지된다고 보고했다 ([@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2052486470469140777)). Scale AI도 Audio MultiChallenge S2S 리더보드에서 GPT-Realtime-2를 #1에 올렸으며, GPT-Realtime-1.5 대비 지시 유지율이 **36.7%에서 70.8% APR**로 상승했다고 밝혔다 ([@ScaleAILabs](https://x.com/ScaleAILabs/status/2052451341071683732)).
- **Codex의 브라우저 제어 지원**: OpenAI가 macOS와 Windows용 **Codex Chrome 플러그인**을 출시했다. 이를 통해 Codex는 사용자의 브라우저를 장악하지 않고 백그라운드 탭 전반에서 동작할 수 있다. 가능한 경우 플러그인을 사용하고, 로그인된 사이트에는 Chrome을 쓰며, 브라우저 플로우 디버깅, 대시보드 확인, 리서치, CRM 업데이트 같은 워크플로에 도구를 결합할 수 있다 ([@OpenAI](https://x.com/OpenAI/status/2052480800004956323)). 개발팀은 브라우저 DevTools, 다중 탭 병렬 처리, 웹앱 테스트를 핵심 사용 사례로 강조했다 ([@OpenAIDevs](https://x.com/OpenAIDevs/status/2052481136971125158)).
- **사이버 전용 GPT-5.5 접근**: OpenAI는 방어 워크플로를 위한 **GPT-5.5 with Trusted Access for Cyber**와, 강화된 검증 및 계정 통제 아래 승인된 레드팀, 침투 테스트, 검증을 위한 제한 프리뷰 **GPT-5.5-Cyber**를 발표했다 ([@cryps1s](https://x.com/cryps1s/status/2052508963409998283)). 별도로 Micah Carroll은 OpenAI가 스캐너를 만든 뒤 과거 RL 실행에서 우발적인 **CoT grading** 사례를 발견했지만, 해당 사례가 CoT 모니터 가능성을 저하시켰다는 명확한 증거는 찾지 못했다고 말했다 ([@MicahCarroll](https://x.com/MicahCarroll/status/2052451995467018427)).

### Anthropic, 해석가능성, AI 안전 도구

- **Natural Language Autoencoders**: Anthropic이 **Natural Language Autoencoders**를 소개했다. 이는 모델 활성값을 사람이 읽을 수 있는 텍스트로 번역해 연구자가 희소 특징이나 지도학습 프로브만이 아니라 “사고와 유사한” 내부 표현을 점검할 수 있게 하는 방법이다 ([@AnthropicAI](https://x.com/AnthropicAI/status/2052435436157452769)). Miles Brundage/ML-powered의 해설은 NLA를 프로빙과 dictionary learning의 보완재로 설명하며, 계획 행동을 드러내고 학습 파이프라인의 번역 버그를 식별하는 데 도움을 줬다고 언급했다. 오픈 모델 NLA는 Neuronpedia에서 제공된다 ([@mlpowered](https://x.com/mlpowered/status/2052446867037020402)). Ryan Greenblatt은 초기 테스트가 단일 순전파 수학 사례에서 “internal CoT”를 복원하지 못했다며, 한계나 누락된 활성 위치가 있을 수 있다고 경고했다 ([@RyanPGreenblatt](https://x.com/RyanPGreenblatt/status/2052458229624672549)).
- **Goodfire의 neural geometry 아젠다**: Goodfire는 신경망이 “형태로 사고한다”고 주장하는 연구 시리즈를 시작했다. 여기서 **manifolds**는 행동을 해석하고 제어하는 핵심 원시 요소로 제시된다 ([@GoodfireAI](https://x.com/GoodfireAI/status/2052420446910644616)). 이 스레드는 manifold 수준 구조를 SAE식 feature shattering과 대비하고, 학습된 manifold를 따라 steering하면 일관된 세계 모델 행동이 보존되는 예시를 포함하며, 비지도 manifold 발견과 in-context geometry 연구를 예고했다 ([@GoodfireAI](https://x.com/GoodfireAI/status/2052420594193650167)). Goodfire는 또한 곡선형 manifold 안의 바이오마커 구조를 발견하기 위해 과학 foundation model을 역공학한 사례를 들며 이 아젠다를 과학적 발견과 연결했다 ([@GoodfireAI](https://x.com/GoodfireAI/status/2052468622103085107)).
- **Anthropic 안전 인프라**: Anthropic은 **The Anthropic Institute**의 연구 아젠다를 공유했다. 초점은 경제적 확산, 위협과 회복력, 실제 환경의 AI 시스템, 인간의 가시성과 통제를 갖춘 **AI-driven R&D**다 ([@AnthropicAI](https://x.com/AnthropicAI/status/2052385812881228218)). 또한 오픈소스 상호작용형 행동 평가 도구 **Petri**를 독립 프로젝트로 Meridian Labs에 이전했고 ([@AnthropicAI](https://x.com/AnthropicAI/status/2052494460966019137)), HackerOne에서 보안 버그 바운티를 공개했다 ([@AnthropicAI](https://x.com/AnthropicAI/status/2052466175540629965)).

### 에이전트, RL 환경, 코딩 워크플로

- **Prime Intellect Lab과 Ramp Fast Ask**: Prime Intellect는 RL 환경과 평가, 평가 실행, 사후학습(post-training), 배포, 에이전트 서빙을 위한 풀스택인 **Lab**을 베타에서 공개 전환했다 ([@PrimeIntellect](https://x.com/PrimeIntellect/status/2052225145725698102)). Ramp Labs는 Prime Intellect를 사용해 스프레드시트 QA용 소형 RL 학습 서브에이전트 **Fast Ask**를 훈련했으며, **Haiku급 지연시간**에서 **Opus 대비 정확 일치 +4%**를 기록했다고 밝혔다 ([@RampLabs](https://x.com/RampLabs/status/2052448843099254956)). Prime은 이 모델이 Opus 4.6보다 빠르고 저렴하게 동작하면서 더 높은 성능을 냈다고 말했다 ([@PrimeIntellect](https://x.com/PrimeIntellect/status/2052465182014840987)).
- **Hermes Agent 모멘텀**: Nous/Teknium은 Kanban을 통한 멀티 에이전트 오케스트레이션, `/goal`을 통한 목표 완료 강제, 디스크 사용 최적화, 커스텀 LLM 제공자, 커스텀 게이트웨이 채널을 포함한 **Hermes Agent v0.13.0**을 출시했다 ([@Teknium](https://x.com/Teknium/status/2052495174404874714)). 이전 업데이트에는 Hermes Gateway를 통한 에이전트 없는 cron 작업, 즉 프로그래밍 가능한 반복 작업 ([@Teknium](https://x.com/Teknium/status/2052219963591762194)), `--no-skills`로 시작하는 빈 프로필 ([@Teknium](https://x.com/Teknium/status/2052351650279645590)), Chrome fallback을 갖춘 머신 네이티브 브라우저 백엔드 Lightpanda가 포함됐다 ([@lightpanda_io](https://x.com/lightpanda_io/status/2052369346928758861)).
- **Cursor 오케스트레이션과 PR 워크플로**: Cursor는 Cursor SDK를 통해 planner, worker, verifier 에이전트를 재귀적으로 생성하는 skill인 `/orchestrate`를 소개했다. 내부적으로 skill 토큰 사용량을 **20%** 줄이면서 평가 성능을 개선했고, 백엔드 cold-start 시간을 **80%** 줄였다고 한다 ([@cursor_ai](https://x.com/cursor_ai/status/2052432778743210127)). Cursor 3는 diff, commit, comment, review status, file tree, skill quick-action pill을 포함하는 통합 PR 리뷰 경험도 추가했다 ([@cursor_ai](https://x.com/cursor_ai/status/2052489387305488609)).
- **에이전트 인프라 패턴**: LangGraph는 장기 컨텍스트 에이전트의 저장소 비대를 제어하기 위해 checkpoint history를 diff로 저장하는 **delta channels**를 추가하고 있다 ([@sydneyrunkle](https://x.com/sydneyrunkle/status/2052344141963555312)). Deep Agents는 Daytona, Modal, Runloop, LangSmith 전반에서 제공자 독립적 격리 실행을 위한 sandbox backend를 추가했고, prompt-injectable sandbox에서 credentials를 빼내기 위한 **auth proxy** 패턴을 제공한다 ([@sydneyrunkle](https://x.com/sydneyrunkle/status/2052459962169966752)).

### 모델, 벤치마크, 추론 시스템

- **xAI, Zhipu, Zyphra, DeepSeek 생태계**: xAI는 Grok에서 **3억 장 이상 이미지**를 구동한 뒤 xAI API에서 **Image Generation Quality Mode**를 제공하기 시작했으며, 더 나은 사실감, 텍스트 렌더링, 창의적 제어를 주장했다 ([@xai](https://x.com/xai/status/2052193877675983031)). Zhipu는 CogViT dual-teacher distillation, 멀티모달 multi-token prediction, 멀티모달 코딩/도구 사용, 30개 이상 과제 범주의 RL을 강조한 **GLM-5V-Turbo technical report**를 공개했다 ([@Zai_org](https://x.com/Zai_org/status/2052426777654387168)). Zyphra의 **ZAYA1-8B**는 AMD에서 학습됐고 **10억 미만 활성 파라미터**, 대규모 RL, **Markovian RSA**라는 테스트 타임 방법을 사용한다고 설명됐다 ([@kimmonismus](https://x.com/kimmonismus/status/2052346978240205249)). Antirez도 llama.cpp/GGML 계보 위에 구축된 **DeepSeek v4 Flash**용 특화 추론(inference) 엔진 **DS4**를 공개했다 ([@antirez](https://x.com/antirez/status/2052405820235678175)).
- **Google 모델 및 API 업데이트**: Google AI Studio는 대량 에이전트 작업, 번역, 단순 데이터 처리에 가장 비용 효율적인 모델로 **Gemini 3.1 Flash-Lite**를 발표했다 ([@GoogleAIStudio](https://x.com/GoogleAIStudio/status/2052453828272812310)). Google은 또한 **Gemini Interactions API**를 역할 기반 `user/model` 메시지에서 `user_input`, `thought`, `function_call`, `tool_call`, `model_output` 같은 typed **steps**로 발전시켜 더 풍부한 다단계 에이전트 워크플로를 겨냥했다 ([@GoogleAIStudio](https://x.com/GoogleAIStudio/status/2052487438967140700)). Gemma 4의 MTP/speculative decoding은 온디바이스 추론을 최대 **3배 빠르게** 제공한다고 보고됐으며 ([@googlegemma](https://x.com/googlegemma/status/2052468624657654194)), 독립 vLLM 테스트에서는 RTX Pro 6000에서 단순 생성 기준 **129 tok/s**와 큰 처리량 개선이 나타났다 ([@bnjmn_marie](https://x.com/bnjmn_marie/status/2052286398707687650)).
- **Sequence model과 코딩 평가**: Aviv Bick과 Albert Gu는 어떤 유한 메모리 슬롯을 업데이트할지 학습하는 fixed-state sequence model **Raven**을 소개했다. 이는 SSM과 sliding-window attention의 지속성 실패를 고치고, **학습 시퀀스 길이 16배**에서도 기존 선형 모델을 능가하는 것을 목표로 한다 ([@avivbick](https://x.com/avivbick/status/2052438903924396377)), ([@_albertgu](https://x.com/_albertgu/status/2052442144879862003)). Scale은 에이전트가 회귀 없이 코드를 재구성할 수 있는지 테스트하는 **SWE Atlas Refactoring** 리더보드를 공개했으며, **Claude Opus 4.7 with Claude Code**가 선두다 ([@ScaleAILabs](https://x.com/ScaleAILabs/status/2052434456510878021)). Arena의 장기 분석은 오픈 모델들이 Text Arena 격차를 대체로 좁혔고, 독점 모델의 우위는 현재 약 **+30 Arena points** 수준이지만 전문가 프롬프트는 여전히 더 어렵다고 밝혔다 ([@arena](https://x.com/arena/status/2052455463573426452)).

### AI 인프라, 헬스, 로보틱스, 적용 제품

- **컴퓨트와 인프라**: Anthropic의 SpaceX/xAI 컴퓨트 계약은 계속 주요 주제였다. Dario Amodei는 SpaceX 파트너십을 “visionary engineering + Claude”라고 불렀고 ([@Mononofu](https://x.com/Mononofu/status/2052212359536496961)), Simon Willison은 Anthropic이 **Colossus 1**을 받고 xAI는 더 큰 **Colossus 2**를 유지하며 Colossus 1에는 환경 논란이 있다고 짚었다 ([@simonw](https://x.com/simonw/status/2052436629365948920)). Lambda는 AI factory 확장을 위해 **10억 달러 senior secured credit facility**를 마감했고 ([@LambdaAPI](https://x.com/LambdaAPI/status/2052373882963972496)), AMD는 **144GB HBM3E**와 최대 **2299 TFLOPS MXFP4**를 갖춘 **MI350P PCIe**를 홍보했으며 ([@AMD](https://x.com/AMD/status/2052373018400219648)), Ai2는 **1억 5,200만 달러** NSF/NVIDIA 투자로 **NVIDIA Blackwell Ultra** 시스템을 갖춘 새로운 NSF OMAI 컴퓨트를 온라인화했다 ([@allen_ai](https://x.com/allen_ai/status/2052403904139169940)).
- **Google Health와 의료 AI**: Google은 5월 26일 Fitbit을 **Google Health** 앱으로 전환해 Fitbit 추적 기능, Google 서비스, Gemini 기반 **Google Health Coach**를 결합한다 ([@googlehealth](https://x.com/googlehealth/status/2052392762255761701)). Google은 Health Premium이 AI Pro와 Ultra 플랜에 포함될 것이라고 밝혔고 ([@shimritby](https://x.com/shimritby/status/2052439569136767291)), 화면 없는 웨어러블 **Fitbit Air**를 발표했다. 이 기기는 최대 1주일 배터리와 $99.99 사전 주문 가격을 제공한다 ([@Google](https://x.com/Google/status/2052501704155775481)). 별도로 Glass Health는 전사에 **시간당 $0.85**와 토큰 가격 기반 노트 생성을 결합한 ambient scribing API를 출시했다 ([@GlassHealthHQ](https://x.com/GlassHealthHQ/status/2052385429010121130)).
- **로보틱스와 로컬 에이전트**: Perplexity는 새로운 Mac 앱에서 **Personal Computer**를 출시했다. 에이전트가 로컬 파일, 네이티브 Mac 앱, 웹, Perplexity 서버 전반에서 동작할 수 있으며, iPhone 원격 시작과 always-on Mac mini 설정도 포함된다 ([@perplexity_ai](https://x.com/perplexity_ai/status/2052445405754040816)). NVIDIA Robotics는 Hugging Face의 Reachy Mini “agentic robotics app store”와 LeRobot 워크플로에 통합된 **Isaac GR00T N**을 강조했다 ([@NVIDIARobotics](https://x.com/NVIDIARobotics/status/2052446013949149649)). EO-1은 이제 로봇 제어 학습/평가/배포 워크플로를 위한 표준 LeRobot policy interface를 통해 사용할 수 있다 ([@SongHaomin92651](https://x.com/SongHaomin92651/status/2052360599703867415)).

### 참여도 상위 트윗

- **OpenAI GPT-Realtime-2 API 출시**: **11.7K** engagement ([@OpenAI](https://x.com/OpenAI/status/2052438194625593804))
- **Anthropic Natural Language Autoencoders**: **10.1K** engagement ([@AnthropicAI](https://x.com/AnthropicAI/status/2052435436157452769))
- **Claude Mythos가 Firefox가 4월에 이전 15개월보다 더 많은 보안 버그를 고치는 데 도움**: **9.7K** engagement ([@alexalbert__](https://x.com/alexalbert__/status/2052468573516513762))
- **OpenAI Codex Chrome 플러그인**: **7.7K** engagement ([@OpenAI](https://x.com/OpenAI/status/2052480800004956323))
- **Goodfire neural geometry 연구 아젠다**: **5.1K** engagement ([@GoodfireAI](https://x.com/GoodfireAI/status/2052420446910644616))
- **고맥락 AI 인터페이스로서 음성에 대한 Sam Altman의 언급**: **5.0K** engagement ([@sama](https://x.com/sama/status/2052462271667028211))
- **xAI Image Generation Quality Mode API**: **4.5K** engagement ([@xai](https://x.com/xai/status/2052193877675983031))

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[2.5x faster inference with Qwen 3.6 27B using MTP - Finally a viable option for local agentic coding - 262k context on 48GB - Fixed chat template - Drop-in OpenAI and Anthropic API endpoints](https://www.reddit.com/r/LocalLLaMA/comments/1t57xuu/25x_faster_inference_with_qwen_36_27b_using_mtp/)** (Activity: 1798): 최근 **llama.cpp** MTP PR ([#22673](https://github.com/ggml-org/llama.cpp/pull/22673))이 Qwen 3.6 27B의 내장 multi-token prediction tensor를 speculative decoding에 사용할 수 있게 했다. 작성자는 MTP 지원 GGUF 양자화(quantization)를 변환해 공개했고 ([HF](https://huggingface.co/froggeric/Qwen3.6-27B-MTP-GGUF)), M2 Max 96GB에서 **~`2.5×` 빠른 생성**과 `--spec-type mtp --spec-draft-n-max 3` 기준 **`28 tok/s`**를 보고했다. 또한 고정된 Jinja chat template을 공개했으며 ([HF](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)), `q8_0` KV cache와 최대 **`262144` context**를 갖춘 OpenAI/Anthropic 호환 로컬 서빙용 `llama-server` 설정을 제공했다. 권장 사항은 속도/품질 면에서 `q8_0-mtp`가 가장 좋고, `64k`를 넘는 경우 `q4_0` KV를 피하라는 점, Qwen3.6-27B가 hybrid linear attention 때문에 **`16/65` layers**에서만 KV cache를 사용해 KV 메모리를 약 `4×` 줄인다는 점을 강조했다. 한 댓글 작성자는 **RTX Pro 6000 Max-Q**에서 Qwen 3.6 “2.7B” Q8이 MTP 사용 시 **`36 tok/s`에서 `78 tok/s`**로 증가했고, 프롬프트 처리는 약 `20%` 느려졌지만 출력 품질 저하는 보지 못했다고 보고했다. 게시물은 또한 **vision이 MTP와 결합될 때 현재 llama.cpp에서 crash를 일으킨다**고 경고했다. 댓글 전반은 이를 로컬 추론(inference)의 최근 대폭 가속의 일부로 보며, 소비자 하드웨어에서 에이전트 코딩을 더 현실적으로 만든다고 평가했다. 한 기술적 질문은 `turbo3`/`turbo4`가 별도로 merge됐는지, 아니면 MTP PR의 일부인지 물었다.
- **[Quality comparison between Qwen 3.6 27B quantizations (BF16, Q8_0, Q6_K, Q5_K_XL, Q4_K_XL, IQ4_XS, IQ3_XXS,...)](https://www.reddit.com/r/LocalLLaMA/comments/1t53dhp/quality_comparison_between_qwen_36_27b/)** (Activity: 820): 이 게시물은 의도적으로 특이한 PGN-to-SVG 체스 렌더링 작업에서 **Qwen 3.6 27B** GGUF 양자화(quantization)를 벤치마크했다. 같은 `llama.cpp` sampling 설정(`temp=0.6`, `top_p=0.95`, `top_k=20`, `ctx=65536`)으로 보드 상태 추적, 말 배치, 방향, 마지막 수 하이라이트를 테스트했다. 작성자는 **BF16/Q8_0**은 사실상 정확하고, **Q6_K**는 배치 품질 저하가 있으며, **Q5_K_XL/Q4_K_XL/IQ4_XS**는 여전히 사용할 만하고, **IQ3_XXS**는 대체로 정확하지만 보드 방향이 틀렸으며, **Q2_K_XL**은 말 위치가 맞아도 구조적으로 망가졌다고 보고했다. 전체 출력은 [qwen3-6-27b-benchmark.vercel.app](https://qwen3-6-27b-benchmark.vercel.app/)에 게시됐다. 로컬 16GB VRAM 사용에는 **IQ4_XS**를 선호하며, vanilla `llama.cpp`에서 약 `pp 100 tps` / `tg 8 tps`, **TheTom's TurboQuant** fork에서 `-ngl 99`, `turbo4/turbo2` KV-cache quantization, 약 `75k` 미만 context 제한을 사용하면 약 `pp 760 tps` / `tg 22 tps`까지 개선된다고 했다. 댓글의 주요 기술적 주의점은 평가가 **단일 실행**으로 보인다는 점이며, stochastic variance로 개별 양자화 결과가 outlier일 수 있다는 것이다. 그래도 관찰된 저하 추세는 대체로 예상과 맞는다는 반응이 있었다.
- **[Qwen3.6 27B uncensored heretic v2 Native MTP Preserved is Out Now With KLD 0.0021, 6/100 Refusals and the Full 15 MTPs Preserved and Retained, Available in Safetensors, GGUFs and NVFP4s formats.](https://www.reddit.com/r/LocalLLaMA/comments/1t5yajb/qwen36_27b_uncensored_heretic_v2_native_mtp/)** (Activity: 530): **llmfan46**이 Hugging Face에 **Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved**를 공개했다. `KLD = 0.0021`, `6/100` refusals, 전체 `15`개 native MTP head의 보존/유지를 주장하며, [Safetensors](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved), [GGUF](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-GGUF), [NVFP4](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4), [NVFP4-GGUF](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4-GGUF), [NVFP4-MLP-only](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-NVFP4-MLP-Only), [GPTQ-Int4](https://huggingface.co/llmfan46/Qwen3.6-27B-uncensored-heretic-v2-Native-MTP-Preserved-GPTQ-Int4) 변형을 제공한다. 게시물은 릴리스에 벤치마크가 포함됐고 모든 변형이 full MTP retention을 확인받았다고 말한다. 작성자의 전체 모델 목록은 [here](https://huggingface.co/llmfan46/models)에 있다. 댓글에서는 `16GB` 시스템을 위한 `Q4_K_XS` 같은 배포 지향 양자화 지원과, MTP가 TurboQuant 압축 KV cache와 함께 작동하는지 또는 Gemma 4 dense model에 적용 가능한지 질문했다. 한 기술적 우려는 MTP draft head가 원래 refusal-aligned model에서 학습됐고 base만 미세조정(fine-tuning)됐다면, 낮은 aggregate `KLD = 0.0021`에도 새로 열린 refusal/tail-behavior 사례에서 MTP acceptance가 저하되거나 *“fight the heretic”*할 수 있다는 점이었다.

### Less Technical Subreddits

- **[Doubled Rate Limits for Claude Code](https://www.reddit.com/r/ClaudeCode/comments/1t5hs98/doubled_rate_limits_for_claude_code/)** (Activity: 3901): **Anthropic**은 **SpaceX**와의 새로운 컴퓨트 용량 파트너십 및 다른 최근 컴퓨트 계약 덕분에 **Claude Code**와 **Claude API** 전반의 사용 한도를 높일 수 있었다고 밝혔다 ([announcement](https://www.anthropic.com/news/higher-limits-spacex)). 즉시 적용되는 변경으로 **Claude Code Pro/Max**는 이전의 *peak-hours limit reduction*이 없어지고, **Opus 모델 API rate limits**가 “substantially” 상향된다. 상위 댓글은 대체로 비기술적 반응으로, 발표가 진짜인지에 대한 놀라움/회의감과 SpaceX/Anthropic 결합이 Elon Musk와 Sam Altman의 경쟁을 반영한다는 추측이 많았다.
- **[SpaceX Conpute Deal - Double Limits](https://www.reddit.com/r/ClaudeAI/comments/1t5htq1/spacex_conpute_deal_double_limits/)** (Activity: 1931): **Anthropic은 SpaceX와의 컴퓨트 파트너십**을 발표해 다른 컴퓨트 계약과 함께 용량을 “substantially increase”한다고 밝혔다. 즉시 **Claude Code Pro/Max**의 **peak-hours limit reductions**를 제거하고 **Opus 모델 API rate limits**를 크게 올린다 ([Anthropic announcement](https://www.anthropic.com/news/higher-limits-spacex)). 게시물은 정확한 새 rate-limit 숫자나 SpaceX 컴퓨트 arrangement의 성격을 명시하지 않았다. 댓글은 더 높은 한도가 실제 사용 가능 용량을 크게 개선할지 회의적이다. 한 댓글은 사용자가 주간 cap에 더 빨리 도달할 뿐일 수 있다고 했고, 다른 댓글은 Claude를 OpenAI Codex 사용 경제성과 불리하게 비교했다. 또한 개선이 일시적이며 몇 주나 몇 달 안에 되돌아갈 수 있다는 우려도 있었다.
- **[Sam Altman texts Mira Murati. November 19, 2023. [This document is from Musk v. Altman (2026).]](https://www.reddit.com/r/OpenAI/comments/1t5tn1n/sam_altman_texts_mira_murati_november_19_2023/)** (Activity: 5431): 이 게시물은 **“Sam Altman texts Mira Murati. November 19, 2023”**라는 이미지/문서를 언급하며, 이것이 **Musk v. Altman (2026)**에서 나온 것이라고 주장한다. 그러나 연결된 Reddit gallery는 **403 Forbidden**으로 접근할 수 없어 실제 문자 내용은 검증하거나 요약할 수 없었다. 제공된 게시물 메타데이터에서는 기술적 주장, 모델 세부사항, 벤치마크, 구현 사실, 소송 문서의 실질 내용이 확인되지 않았다.
- **[xAI will be dissolved as a separate entity.](https://www.reddit.com/r/singularity/comments/1t5q5jm/xai_will_be_dissolved_as_a_separate_entity/)** (Activity: 2116): 이미지는 **Elon Musk**에게 귀속된 **X.com 게시물의 비기술적 스크린샷**으로, **xAI가 별도 회사로 해산**되고 “**SpaceXAI**”에 편입될 것이라고 주장한다. SpaceX의 AI 제품으로 묘사된 이미지 링크는 [image](https://i.redd.it/tzexewkj2lzg1.jpeg)다. 게시물/제목에는 구현 세부사항, 모델 변경, 인프라 계획, 제품 로드맵이 없으므로 중요성은 주로 **기업 구조/맥락**에 있으며 기술적이지 않다. 댓글은 이 움직임이 Musk가 AI 작업을 다른 회사들과 결합하려는 과거 바람과 일치한다고 보거나, 회의적으로는 수익성이 낮은 AI 노력을 수익성 있고 정부 계약 지원을 받는 SpaceX로 옮기는 것일 수 있다고 평가했다.

---

## AI Discord Recap

### Discord 접근 종료

- **접근 중단**: Discord가 오늘 접근을 차단했다. 이 형태로는 다시 가져오지 않을 예정이며, 곧 새로운 AINews를 출시할 계획이라고 밝혔다. 읽어줘서 고맙고, 좋은 여정이었다고 마무리했다.
