---
title: "FrontierCode가 병합 가능 코드 평가 공개"
summary:
  - "FrontierCode가 병합 가능 코드 평가 공개"
  - "Kimi Code와 Kimi Work가 동시 출시"
  - "Gemma 4 QAT·MTP로 로컬 추론 강화"
  - "Agent Arena가 실사용 세션으로 평가 시작"
  - "Claude Code 보안·사용량 논란 확산"
date: 2026-06-09
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-08-not-much.md"
hasHeadline: false
headline: "FrontierCode가 병합 가능 코드 평가 공개"
tags:
  - Cognition
  - FrontierCode
  - Coding Agents
isFeatured: false
---

## 헤드라인: FrontierCode가 병합 가능 코드 평가 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Cognition이 새 코딩 평가 벤치마크(benchmark) FrontierCode를 공개했다. 핵심은 코드가 단순히 단위 테스트를 통과하는지가 아니라, 실제 오픈소스 프로젝트에 병합(merge) 가능한 수준인지 평가한다는 점이다.

각 과제는 오픈소스 메인테이너와 함께 설계됐고, 회귀 안정성, 코드 정리 상태, 범위 관리, 테스트 정확성, 유지보수성을 함께 본다. 가장 강한 모델인 Opus 4.8도 가장 어려운 하위 집합에서 약 13%에 그쳐, SWE-Bench류 평가에서 보이던 50% 이상 성적과 실제 병합 가능한 소프트웨어 사이의 간극을 드러냈다.

---

## AI Twitter Recap

### 코딩 에이전트, 루프, 그리고 “테스트 통과”에서 병합 가능한 소프트웨어로의 이동

- **FrontierCode가 코딩 평가 기준을 높임**: Cognition이 새 벤치마크 **FrontierCode**를 소개했다. 이 벤치마크는 코드가 단순히 단위 테스트를 통과하는지가 아니라 실제로 **병합 가능(mergeable)** 한지를 명시적으로 겨냥한다. 과제는 오픈소스 메인테이너와 함께 만들었고, 각 과제는 **40시간 이상** 걸리며 회귀 안정성, 깔끔함, 범위, 테스트 정확성, 유지보수성 같은 차원으로 평가된다. 핵심 결과는 최고 모델인 **Opus 4.8**도 가장 어려운 하위 집합에서 약 **13%**에 그쳤다는 점이다. SWE-Bench식 평가에서 흔한 50% 이상 구간과 비교하면, 코딩이 대중적 벤치마크가 암시하는 것보다 훨씬 덜 “해결”됐다는 뜻이다 ([Cognition announcement](https://x.com/cognition/status/2064061031912288715), [Scott Wu’s summary](https://x.com/ScottWu46/status/2064073699368800475), [swyx breakdown](https://x.com/swyx/status/2064081945567580323), [theo’s questions on variance/reproducibility](https://x.com/theo/status/2064126021088215385), [Cognition response](https://x.com/cognition/status/2064215347503452649)).
- **“루프”가 지배적인 에이전트 제어 은유가 되고 있지만 단서도 있음**: 이날 가장 크게 들린 실무 주제는 코딩 에이전트(agent)에 일회성 프롬프트가 아니라 **명확한 목표, 검증 기준, 반복 구조**를 줘야 한다는 것이었다. 대표 사례로 [dzhng’s “don’t use loops, design state machines”](https://x.com/dzhng/status/2063931263312892406), [Claude Code’s retrospective on auto mode, routines, and verification](https://x.com/ClaudeDevs/status/2064032814392352816), [bcherny’s thread](https://x.com/bcherny/status/2064034799711588805), [OpenAI Codex tips on outcome-first prompting](https://x.com/reach_vb/status/2064028260070215772), [Approve-for-me defaults](https://x.com/reach_vb/status/2064044955421769755), [LangChain OSS “rubrics”](https://x.com/sydneyrunkle/status/2064034061165682931)가 있었다. 하지만 여러 실무자는 순진한 루프 과열에 반론을 냈다. [Omar Sar0](https://x.com/omarsar0/status/2064024230396604469)와 [Greg Neubig](https://x.com/gneubig/status/2064011013637234728)는 쉽게 검증 가능한 영역 밖에서는 인간 체크포인트가 여전히 필수라고 강조했고, [Hamel Husain](https://x.com/HamelHusain/status/2064019243990188259)은 그 단어 자체를 음소거하고 싶다고 농담했다.
- **검증과 오케스트레이션 중심으로 에이전트 사용성이 개선 중**: 스택 전반의 제품 변화도 이런 이동을 반영한다. [ClaudeDevs added observability dashboards for MCP connector developers](https://x.com/ClaudeDevs/status/2064072801062121906)는 MCP 커넥터 개발자를 위해 도입률, 지연 시간, 오류 뷰를 포함한 관측성 대시보드를 추가했다. [MagicPath launched a Builder plan](https://x.com/skirano/status/2064035120483352776)은 외부 에이전트 워크플로와 멀티플레이어 캔버스 편집을 위한 Builder 플랜을 출시했다. [LangSmith Sandboxes](https://x.com/LangChain/status/2064030008738296065)와 [Modal’s sandbox scaling story](https://x.com/AmplifyPartners/status/2063998736703856737)는 같은 인프라 추세를 가리킨다. 에이전트에는 격리되고, 검사 가능하며, 오래 실행되는 환경이 필요하다.
- **실무 사용 패턴이 정착 중**: 가장 강한 운영 조언은 측정 가능한 결과, 제한된 자율성, 스레드 위생으로 수렴했다. [Angaisb_ warned against overlong Codex threads degrading performance](https://x.com/Angaisb_/status/2064103464142065852)는 너무 긴 Codex 스레드가 성능을 떨어뜨린다고 경고했고, [reach_vb reported success with single-thread context accumulation](https://x.com/reach_vb/status/2064115851503059418)는 단일 스레드에서 컨텍스트(context)를 누적해 성공했다고 보고했다. 이 불일치 자체가 유용한 신호다. 현재 에이전트 성능은 기본 모델 품질뿐 아니라 **하네스(harness) 동작과 워크플로 선택**에 강하게 좌우된다.

### 모델 출시, 로컬 추론, 서빙 스택 업그레이드

- **Kimi가 더 강한 코딩 에이전트와 데스크톱 에이전트 제품을 함께 출시**: Moonshot은 오픈소스 코딩 에이전트 **Kimi Code**에 대규모 업데이트를 내놨다. **한 줄 CLI 설치**, 드래그앤드롭 **동영상 코딩 컨텍스트**, ACP 지원, 플러그인, IDE 통합이 추가됐다 ([announcement](https://x.com/KimiDevs/status/2063981516708024369)). 또한 최대 **300개 로컬 서브에이전트**, 확장 프로그램을 통한 브라우저 사용, 금융 중심 도구 접근, 지속 메모리를 갖춘 데스크톱 에이전트 제품 **Kimi Work**를 출시했다 ([product launch](https://x.com/Kimi_Moonshot/status/2063990409903112344), [desktop availability](https://x.com/crystalsssup/status/2063992904209842215)).
- **Google이 효율적인 로컬 배포를 강하게 밀어붙임**: Gemma에는 여러 주요 업그레이드가 있었다. 새 **QAT Gemma 4** 체크포인트는 **약 4배 적은 메모리**를 쓰면서 성능을 보존한다고 알려졌고, **Gemma 4 E2B**는 모바일 양자화(quantization) 형식을 쓰면 약 **1GB**에 들어간다고 한다 ([@_philschmid](https://x.com/_philschmid/status/2063990553826439378)). 별도로 **Gemma 4 MTP**가 **llama.cpp**에 병합되어 QAT 체크포인트와 함께 사용할 때 더 빠른 디코딩이 가능해졌다 ([Gemma team](https://x.com/googlegemma/status/2064030477628182814)). [llama.cpp also added video input support](https://x.com/osanseviero/status/2063985470489448887)도 추가되어 로컬 멀티모달 사용 사례가 확장됐다.
- **오픈소스와 오픈웨이트 경쟁은 여전히 치열**: [Artificial Analysis reported MiniMax-M3 at 55 on its Intelligence Index](https://x.com/ArtificialAnlys/status/2064066303863005254)에 따르면, 가중치가 공개되면 MiniMax-M3가 선두 오픈웨이트 모델이 될 수 있다. M3는 **네이티브 멀티모달리티**와 **100만 토큰 컨텍스트 창**을 추가했고, GPQA/MMMU-Pro 수치는 강하지만 환각 민감 평가에서는 주목할 만한 기권이 있었다. 한편 [norpadon announced Apple-hardware-optimized quantized Qwen3.5 checkpoints](https://x.com/norpadon/status/2064040631479976240)는 Apple 하드웨어에 최적화된 양자화 Qwen3.5 체크포인트를 발표했다.
- **서빙 인프라가 텍스트 LLM에서 월드 모델과 옴니 모델로 확장**: **vLLM-Omni 0.22.0**은 **NVIDIA Cosmos 3 월드 모델**에 대한 day-0 지원, 로봇 서빙 API, **Qwen3-TTS**와 **VoxCPM2** 같은 TTS 모델, 더 빠른 이미지/동영상 서빙, 더 넓은 양자화 및 하드웨어 지원을 추가했다 ([release](https://x.com/vllm_project/status/2064013506882703421)). 이는 텍스트 전용 추론(inference) 스택에서 일반화된 멀티모달 서빙으로 가는 더 큰 흐름을 반영한다.

### 벤치마크, 평가 방법론, 실제 에이전트 측정

- **에이전트 평가는 합성 과제에서 실제 원격측정으로 이동 중**: Arena가 **Agent Arena**를 출시했다. 이는 **100만 건 이상 실제 세션**을 기반으로 한 리더보드이며, 투표 대신 **인과 추적(causal tracing)** 을 사용해 오케스트레이터와 하네스의 처치 효과를 다섯 신호, 즉 **확인된 성공, 칭찬 대 불만, 조종 가능성, bash 복구, 도구 환각**으로 추정한다 ([overview](https://x.com/arena/status/2064021507681276234), [methodology thread](https://x.com/ml_angelopoulos/status/2064028763697127844)). 방법론이 완전히 버틸지는 지켜봐야 하지만, 배포된 에이전트를 실제 사용 흔적으로 벤치마크하려는 가장 명확한 시도 중 하나다.
- **특화 벤치마크가 새 출력 영역으로 계속 확산**: Hugging Face와 Mecado는 도면이나 STEP 수정으로부터 **엔지니어링급 3D CAD 부품**을 생성하고 편집하는 벤치마크 **CADGenBench**를 공개했다. 지표는 형상, 위상, 인터페이스 호환성, CAD 유효성을 포괄한다 ([launch thread](https://x.com/MikushRab/status/2063999885796614522), [Thom Wolf summary](https://x.com/Thom_Wolf/status/2064029993638764672)). 이는 의미 있는 변화다. 평가는 텍스트와 코드 밖으로 확장되어, 정확성이 물리적이고 기하학적인 구조물까지 다루기 시작했다.
- **반복되는 명제: 좋은 벤치마크는 훈련 파이프라인이 된다**: [Ofir Press argued](https://x.com/OfirPress/status/2063990430350340575)는 최고의 벤치마크가 확장 가능하고 **현실에서 크롤링한 데이터 소스**에 뿌리내려야 하며, 그래서 측정뿐 아니라 데이터 생성에도 유용하다고 주장했다. 이 관점은 FrontierCode와 Agent Arena 양쪽에 암묵적으로 나타난다. 벤치마크는 더 이상 정적 점수판이 아니라 **제품과 RL 개선을 위한 피드백 루프**가 되고 있다.

### Google, Apple, 소비자 AI 플랫폼 경쟁

- **Google이 AI 패키징, Search, 개발자 표면을 확장**: Google은 에이전트형 채팅, 더 강한 추론, Ultra 구독자를 위한 더 많은 출력 형식을 갖춘 더 유능한 **NotebookLM**을 발표했다 ([launch](https://x.com/NotebookLM/status/2064016460964585549)). 또한 **Google AI Plus** 가격을 **월 $7.99에서 $4.99**로 낮추면서 저장 공간을 **400GB**로 두 배 늘렸다 ([pricing update](https://x.com/NewsFromGoogle/status/2064066310393209100)). 플랫폼 측면에서는 [Google highlighted a major Search upgrade](https://x.com/Google/status/2064034586762354893)를 통해 멀티모달 검색과 AI Mode의 새 기본값인 **Gemini 3.5 Flash**를 강조했다.
- **Apple의 WWDC AI 서사는 프런티어 리더십보다 통합에 초점**: WWDC 관련 해설은 화면 인식, 앱 액션, 개인 컨텍스트, 개선된 음성 상호작용을 갖춘 재구축 **Siri AI**에 집중했고, 동시에 **EU 이용 가능성**과 하드웨어 제한에 대한 우려도 있었다 ([kimmonismus live thread](https://x.com/kimmonismus/status/2064059964709388774), [regional limitation note](https://x.com/kimmonismus/status/2064047278105464868)). 기술적으로 눈에 띄는 세부 사항은 [awnihannun](https://x.com/awnihannun/status/2064202168618422396)에서 나왔다. Apple의 온디바이스 모델은 쿼리마다 NAND에서 RAM으로 전문가를 한 번 로드하는 **20B 파라미터 쿼리 라우팅 아키텍처**로 알려졌으며, 기기 제약에 최적화된 비표준 설계다.

### 연구 방향: 지속 학습, 에이전트 훈련, 최적화 논쟁

- **Anthropic은 과학에서 AI의 핵심 병목을 인프라 불일치로 제시**: 새 과학 블로그는 AI가 생물학보다 코딩에서 더 빨리 발전한 이유가 생물학 데이터베이스와 도구가 에이전트 사용을 위해 설계되지 않았기 때문이라고 주장한다. 병목은 원초적 지능보다 **에이전트 호환 과학 인프라**에 가깝다 ([Anthropic blog thread](https://x.com/AnthropicAI/status/2064054837294354677)). 이는 하네스와 환경 표준화 요구와 잘 맞물린다.
- **오픈소스 RL과 환경 프로토콜이 조정 지점으로 부상**: [OpenEnv was transferred to a consortium including Hugging Face, Meta-PyTorch, Reflection, Unsloth, Modal, Prime Intellect, NVIDIA, and others](https://x.com/ben_burtenshaw/status/2063991191415267492). 주장은 프런티어 랩이 결합도가 높은 하네스와 함께 모델을 공동 훈련하는 반면, 오픈 생태계에는 모델, 하네스, 환경, 트레이너 사이의 **공유 프로토콜 계층**이 필요하다는 것이다.
- **에이전트의 지속 학습이 실용적 시스템 문제로 재부상**: [Hivemind announced a system that turns traces from agents like Claude Code, Codex, Cursor, and Hermes into reusable skills](https://x.com/kimmonismus/status/2064001045391462907)는 Claude Code, Codex, Cursor, Hermes 같은 에이전트의 트레이스를 재사용 가능한 스킬로 바꾸는 시스템을 발표했고, 여러 설정에서 측정 가능한 향상을 주장했다. 관련해서 [Nando de Freitas posted a long thread](https://x.com/NandoDF/status/2063938859583389837)는 토큰 시퀀스만이 아니라 **상호작용의 결과**로부터 학습하는 연구 프로그램을 설명했다.
- **최적화 담론이 이례적으로 활발**: 여러 스레드가 **Muon**이 **Shampoo**와 실질적으로 다른지 논쟁했다. [Arohan hinting at a better-than-Shampoo optimizer](https://x.com/_arohan_/status/2064036303021494418)와 [Keller Jordan benchmarking Shampoo and Spectral Descent publicly](https://x.com/kellerjordan0/status/2064062891607888058)가 대표적이다. 소란 아래의 실질적 요점은, 단순한 벤치마크 잡음이 아니라 진짜 프런티어 지렛대로서 **옵티마이저 수준의 이득**에 대한 관심이 다시 커졌다는 것이다.

### Top Tweets by engagement

- **영국 기기 스캔에 대한 Signal의 신호**: 가장 참여도가 높았던 기술 관련 게시물은 [Signal’s statement opposing UK demands for on-device scanning and age-verification-linked content inspection](https://x.com/signalapp/status/2064069692168519931)였다. 이는 AI보다는 개인정보/보안 정책에 가깝지만, 클라이언트 측 추론과 플랫폼 신뢰에 직접 관련된다.
- **OpenAI의 기업 방향과 유동성**: [Sam Altman shared OpenAI’s current plan](https://x.com/sama/status/2064088940932641225)했고, 얼마 지나지 않아 [OpenAI announced it had confidentially filed an S-1](https://x.com/OpenAINewsroom/status/2064094175541461220). AI 엔지니어에게 핵심 함의는 전략적이다. OpenAI와 Anthropic 모두 용량과 제품 폭을 늘리면서 IPO 선택지를 보존하는 것으로 보인다.
- **NotebookLM과 FrontierCode가 이날 가장 큰 순수 제품/평가 출시**: [NotebookLM’s upgrade](https://x.com/NotebookLM/status/2064016460964585549), [Kimi Code](https://x.com/KimiDevs/status/2063981516708024369), [Kimi Work](https://x.com/Kimi_Moonshot/status/2063990409903112344), [FrontierCode](https://x.com/cognition/status/2064061031912288715)가 기술 대화를 지배했다. 특히 FrontierCode는 “좋은 코딩 성능”이 무엇을 뜻해야 하는지에 대한 담론을 재편했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

### 범용 하드웨어 LLM 추론 업데이트

- **[llama.cpp Gemma4 MTP support merged!](https://www.reddit.com/r/LocalLLaMA/comments/1tzbcyp/llamacpp_gemma4_mtp_support_merged/)** (Activity: 1097): **llama.cpp**가 [PR #23398](https://github.com/ggml-org/llama.cpp/pull/23398)를 병합해 **Gemma 4 multi-token prediction (MTP)** 지원을 추가했다. `--spec-type draft-mtp`와 draft/assistant GGUF 모델을 통해 지원되는 Gemma 4 변형에서 speculative 스타일 디코딩이 가능하다. 한 댓글러는 **RTX 4070 Super 12GB VRAM**에서 **Gemma 4 12B**를 **`140 tok/s`**로 실행했다고 보고했다. 설정은 [Unsloth QAT GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF), [MTP assistant/drafter Q8_0 GGUF](https://huggingface.co/Janvitos/gemma-4-12B-it-qat-assistant-MTP-Q8_0-GGUF), `--spec-draft-n-max 4`를 사용했다. PR의 `mtp-bench` 결과는 비-MTP dense 모델 대비 대략 **2배 초과 처리량 향상**을 보였고, MoE 변형은 작성자 시스템에서 속도 향상이 없었다고 한다. 구현은 31B와 26B-4B 모델에서 Gemma 팀의 AIME-26 성능 약 **87%**를 재현한 것으로 보고됐다. E4B/E2B 변형은 아직 지원되지 않으며, 멀티 GPU는 `-sm layer`와 함께 `--spec-draft-device`가 필요할 수 있다. 댓글러들은 **QAT + MTP** 조합에 열광했고, llama.cpp 통합 기여자 [u/am17an](https://www.reddit.com/user/am17an/)에게 명시적으로 감사를 전했다.
  - 한 사용자는 새로 병합된 llama.cpp MTP 지원, **Unsloth QAT GGUF** 가중치, MTP drafter 모델을 사용해 **Gemma 4 12B**를 **RTX 4070 Super 12GB VRAM**에서 `140 tok/s`로 실행했다고 보고했다. 명령은 `--model-draft`, `--spec-type draft-mtp`, `--spec-draft-n-max 4`, 큰 `--ctx-size 131072`를 사용했고, 모델 링크는 [Unsloth QAT GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)와 [MTP assistant/drafter Q8_0 GGUF](https://huggingface.co/Janvitos/gemma-4-12B-it-qat-assistant-MTP-Q8_0-GGUF)다.
  - **NVIDIA GB10 Grace Blackwell / Asus Ascent GX10**에서 한 벤치마크는 `Gemma-4-31B-it-Q8_0.gguf`와 `gemma-4-31B-it-MTP-Q8_0.gguf`를 테스트했고, Q8을 “사실상 full precision”이라고 설명했다. MTP 없이 처리량은 꾸준히 `6.2-6.4 tok/s`였고, `--spec-type draft-mtp --spec-draft-n-max 7`을 쓰면 과제에 따라 `15.7-31.2 tok/s`로 올라가 약 **3-5배 속도 향상**을 보였으며 `--reasoning on`으로 reasoning mode도 유지했다.
  - 상세 MTP 벤치마크는 과제별 수락 동작 차이를 보여준다. 번역은 draft acceptance `0.699`로 `31.2 tok/s`, 요약은 `0.645`로 `29.4 tok/s`를 기록한 반면, 창작 글쓰기는 수락률 `0.277`에 `15.7 tok/s`로 훨씬 낮았다. 이는 Gemma 4 MTP 가속이 워크로드에 매우 민감하며, 개방형 창작 생성보다 결정적이거나 제약된 과제가 speculative multi-token prediction의 혜택을 더 크게 받는다는 뜻이다.

- **[You don't need a GPU to run gemma-4-26B-A4B](https://www.reddit.com/r/LocalLLaMA/comments/1tz5ffp/you_dont_need_a_gpu_to_run_gemma426ba4b/)** (Activity: 902): OP는 [KoboldCpp](https://github.com/LostRuins/koboldcpp)를 통해 Linux에서 **Intel i5-8500 + `32GB` RAM**만으로, GPU 없이 **Gemma `26B-A4B`**를 실행해 약 **`7 tok/s`**를 얻었다고 보고했다. 이전 `~12B` dense 모델은 사용 가능했지만 더 느렸다고 한다. 댓글러들은 핵심 기술적 이유가 모델의 총 파라미터가 `26B`이지만 활성 파라미터가 약 **`4B`**뿐이라는 점이라고 설명했다. 따라서 양자화된 가중치가 시스템 RAM에 들어가기만 하면 CPU 추론이 실용적이다. 댓글들은 대체로 유능한 로컬 추론에 클라우드 접근이나 고급 GPU 장비가 반드시 필요하지 않다는 데 동의했지만, 한 댓글러는 `8GB` VRAM의 저렴한 중고 GPU만 있어도 큰 속도 향상을 줄 것이라고 주장했다.
  - 댓글러들은 **Gemma 26B-A4B**가 토큰당 활성 파라미터가 약 **`4B`**뿐이기 때문에 CPU/소비자 하드웨어에서 비교적 실현 가능하다고 지적했다. 주된 제약은 고급 GPU 연산보다 모델 가중치를 시스템 RAM에 넣는 것이다.
  - 한 기술적 단서로, **`8GB` VRAM**의 작은 중고 GPU만 있어도 모델 또는 활성 작업 집합이 GPU 가속의 혜택을 받을 경우 CPU 전용 실행보다 약 **`5x`** 성능 개선이 가능하다는 추정이 나왔다.

- **[Xiaomi just claimed 1,000+ tps on a 1T model using a standard 8-GPU server](https://www.reddit.com/r/LocalLLaMA/comments/1u0buhm/xiaomi_just_claimed_1000_tps_on_a_1t_model_using/)** (Activity: 818): **Xiaomi MiMo**는 [`MiMo-V2.5-Pro-UltraSpeed`](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)가 단일 “표준” **8-GPU 범용 노드**에서 **`1T` 파라미터 MoE**에 대해 **`1000+` tokens/s decode throughput**, 최대 약 `1200 tps`에 도달한다고 주장했다. 이는 TileRT의 persistent/fused/pipelined 커널과 acceptance length `4.3-6.3` 토큰 수준의 **DFlash speculative decoding**을 통해 가능하다고 한다. 핵심 모델 측 최적화는 선택적 **MXFP4 QAT**다. Xiaomi는 FP4를 순진하게 전체 모델에 적용하면 reasoning/code가 손상되므로, 파라미터 대부분을 차지하고 양자화 내성이 높은 **MoE experts**만 양자화하고, 다른 모듈은 원래 정밀도로 유지해 품질 손실을 최소화하면서 대역폭 압박을 줄인다고 말한다. 접근은 **2026년 6월 9-23일** 제한적 기업/API 시험으로 포지셔닝되며, 홍보 가격은 **MiMo-V2.5-Pro의 3배**다. 댓글러들은 “표준 8-GPU 노드”가 어떤 GPU인지 불명확하다는 데 집중했고, 이 결과를 압축 sparse/MoE 아키텍처가 과거 회의론에도 불구하고 점점 경제적이 되고 있다는 증거로 봤다. 한 댓글러는 진짜 “Token Winter”가 모델 능력이 아니라 데이터센터가 비효율적인 추론을 위해 GPU를 독점하면서 생기는 소비자 하드웨어 부족과 가격 문제라고 주장했다.
  - 댓글러들은 Xiaomi의 `1,000+ TPS`가 불명확한 “표준 8-GPU 서버” 구성에 크게 의존한다고 지적했다. GPU가 데이터센터급 카드인지 `RTX 5090/3090` 같은 소비자 GPU인지가 빠져 있어, 하드웨어 세부 정보 없이 처리량 주장을 평가하기 어렵다는 것이다.
  - 핵심 기술 포인트는 **MiMo-V2.5-Pro**를 위한 Xiaomi의 선택적 FP4 양자화 전략이었다. FP4를 전체 모델에 적용하지 않고, 대부분의 파라미터를 포함하며 양자화 내성이 더 큰 **MoE expert layers**만 양자화하고, non-expert 모듈은 원래 정밀도로 유지한다. 인용된 주장은 **FP4 QAT**가 reasoning/code 능력을 보존하면서 모델 크기를 줄이고 메모리 대역폭 활용을 개선한다는 것이다.
  - 공개된 가중치는 Hugging Face에 링크됐다: [XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash). 한 댓글러는 모델이 사실상 `1T-A1B`인지 물으며, 총 파라미터가 매우 큰 MoE 모델이지만 토큰당 활성 파라미터는 훨씬 작다는 뜻인지 아키텍처 표기에도 의문을 제기했다.

- **[Gemma 4 Chat Template now has preserve thinking](https://www.reddit.com/r/LocalLLaMA/comments/1u084qi/gemma_4_chat_template_now_has_preserve_thinking/)** (Activity: 447): **Google Gemma Team이 공식 `google/gemma-4-31B-it` 채팅 템플릿을 `preserve_thinking` 지원으로 업데이트했다**고 [`google/gemma-4-31B-it`](https://huggingface.co/google/gemma-4-31B-it/discussions/118#6a26a7088a64389a0709d3d2)의 연결된 Hugging Face 논의가 전한다. 이 스레드는 멀티모달 31B instruction 모델의 실용 추론/배포 경로도 문서화한다. 여기에는 `transformers` `pipeline` / `AutoProcessor` + `AutoModelForImageTextToText`, 그리고 **vLLM**과 **SGLang**을 통한 OpenAI 호환 서빙이 포함된다. 댓글러들은 공식 `preserve_thinking` 지원을 앞선 커뮤니티의 “aftermarket” 채팅 템플릿 수정에 대한 검증으로 봤고, 한 명은 “잘 작동한다는 것을 알고 있다”고 말했다. 여러 사용자는 업데이트된 템플릿을 더 잘 활용할 더 큰 **Gemma 4 `124B` MoE** 변형, 특히 에이전트형 코딩 작업용 변형을 원했다.
  - 사용자들은 공식 **Gemma 4 채팅 템플릿**이 `preserve_thinking`을 추가하는 것처럼 보인다고 언급했다. 일부는 이미 aftermarket/custom 템플릿으로 이 동작을 활성화해 효과를 봤다. 기술적 주장은 여러 턴에 걸쳐 숨겨진/구조화된 reasoning을 유지하는 것이 도구 사용과 다단계 컨텍스트 연속성이 중요한 **에이전트형 코딩 워크플로**에 특히 유용하다는 것이다.
  - 한 댓글러는 이 변경이 실제로 아직 적용되지 않았을 수 있다고 경고했다. 아직 **open PR**이지 병합된 것이 아니며, 모델 파일도 약 `21 days` 동안 업데이트되지 않았다고 보고했다. 이는 사용자가 `preserve_thinking`이 공식 Gemma 4 아티팩트에서 사용 가능하다고 가정하기 전에 템플릿 버전을 확인해야 함을 시사한다.

### Less Technical AI Subreddit Recap

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude Code 보안, 개인정보, 토큰 제한

- **[An active attack is planting backdoors inside Claude Code right now. If you use npm, your credentials may already be compromised.](https://www.reddit.com/r/ClaudeAI/comments/1u05t5e/an_active_attack_is_planting_backdoors_inside/)** (Activity: 1039): 이 게시물은 `@redhat-cloud-services` 패키지들, 즉 `32`개 패키지와 주간 약 `117k` 다운로드, 그리고 이후 “Phantom Gyp” 파동, 즉 `57`개 패키지와 월간 약 `647k` 다운로드를 겨냥한 활성 npm 공급망 캠페인이 있다고 주장한다. 악성 install/build hook이 자격 증명을 유출하고 `~/.claude/settings.json`의 **Claude Code** `SessionStart` hook과 `.vscode/tasks.json`의 `folderOpen` task를 통해 지속성을 확보한다는 내용이다. 출처로는 **Microsoft**의 Miasma 글, [`binding.gyp` abuse](https://www.stepsecurity.io/blog/binding-gyp-npm-supply-chain-attack-spreads-like-worm)에 대한 **StepSecurity**, **Snyk** 정리 지침이 언급됐다. 권장 사고 대응 순서는 영향받은 패키지/버전의 dependency tree/lockfile 확인, 에디터 지속성 검사, 비밀값을 회전하기 전 연결 해제 및 정리, 이후 신뢰할 수 있는 머신에서 npm/GitHub/SSH/cloud/Kubernetes/Vault 전반의 비밀값 회전, npm publish 이력/GitHub 보안 로그/self-hosted runner/OIDC trust 감사, 그리고 일시적으로 `npm install --ignore-scripts`와 lockfile integrity hash 및 최소 권한 CI/CD 토큰을 사용하는 것이다. 상위 댓글은 대부분 운영적 반응이었다. 한 댓글러는 작성자에게 감사했고, 다른 댓글러는 이것이 이전 사건과 같은 것인지 별개의 새 캠페인인지 물었다.
  - 상세한 복구 체크리스트는 잠재적으로 영향받은 npm 패키지로 `@redhat-cloud-services`, `@vapi-ai/server-sdk`, `ai-sdk-ollama`를 식별했고, `June 1` 및 `June 3-4` 무렵 게시된 버전에 대해 `npm ls` 확인과 lockfile 검토를 권장했다. 지침은 **토큰 회전 전 격리**를 강조한다. `~/.claude/settings.json`에서 예상치 못한 `SessionStart` hook을, `.vscode/tasks.json`에서 의심스러운 `folderOpen` task를 검사한 뒤, 연결을 끊고 정리한 다음 신뢰할 수 있는 머신에서 자격 증명을 회전하라는 것이다.
  - 댓글은 GitHub/npm 공급망 표면 전반의 의심스러운 웜 동작도 설명했다. [GitHub security log](https://github.com/settings/security-log)에서 예상치 못한 저장소, GitHub Actions 워크플로, self-hosted runner, “Miasma” 또는 “Shai-Hulud” 같은 참조를 확인하라고 했다. 특히 **GitHub Actions OIDC trust relationships**를 고가치 회전 대상으로 지목했으며, 이것이 Red Hat 침해에 사용됐다고 주장되는 구멍이라고 설명했다. 또한 무단 재게시된 패키지 버전을 찾기 위해 npm publish 이력을 검토하라고 조언했다.
  - 완화책으로는 **integrity hashes**로 의존성을 고정해 내용이 다른 재게시 패키지가 실행 전에 실패하도록 하는 것, 그리고 악성 install hook, `binding.gyp`, `node-gyp` 빌드 시점 실행을 막기 위해 일시적으로 `npm install --ignore-scripts`를 사용하는 것이 논의됐다. 또 다른 댓글러는 Red Hat 저장소에 직접 push가 가능했다는 주장 자체를 문제 삼으며, 보호된 `main`/`master` 브랜치는 여러 승인자의 PR 기반 병합을 요구해야 한다고 주장했다.

- **[Anthropic changed their privacy policy today and there's a specific clause that every Claude user needs to know about](https://www.reddit.com/r/ClaudeAI/comments/1u0kq84/anthropic_changed_their_privacy_policy_today_and/)** (Activity: 784): OP는 **Anthropic**이 `2026-06-08`에 개정 [Privacy Policy](https://www.anthropic.com/legal/privacy)를 게시했고, `2026-07-08`부터 효력이 발생한다고 주장했다. 변경점은 법 집행기관 공개 기준이 외부의 강제적 법적 절차에서, 필요하다는 Anthropic 내부의 *“good faith belief”* 에 근거한 공개로 바뀌었다는 것이다. 게시물은 이것이 자동 안전 분류기의 오탐, 특히 롤플레이, 소설, 서사적 맥락의 위협, 정신건강 관련 토로에서 위험을 만든다고 주장했다. 법원 명령, 사용자 통지, 항소 경로, 정의된 증거 기준 없이 대화가 당국에 에스컬레이션될 수 있다는 것이다. OP는 이를 OpenAI/Mistral 정책과 불리하게 비교하고 UK GDPR/DBS 우려도 제기했지만, 게시물에는 직접적인 정책 변경 링크가 없었다. 상위 댓글러는 명시적으로 출처 URL을 요청했다. 상위 댓글은 강하게 부정적이었고, 이 변화를 중대한 개인정보 후퇴이자 더 넓은 “enshittification”의 일부로 봤다. 한 댓글러는 높은 비용, 제한적 동작, 약해진 개인정보 보호 인식 때문에 Codex로 돌아가겠다고 말했다. 또 다른 댓글러는 주장된 새 정책을 검증할 링크를 요청했다.
  - 한 댓글러는 Anthropic의 정책 변경을 더 넓은 AI 제공자 duty-of-care 문제와 연결했다. 가족들이 대량 총격범의 ChatGPT 사용이 *내부적으로 flagged됐지만 경찰에 보고되지 않았다*고 주장하는 **OpenAI/Sam Altman** 상대 소송을 인용했다 ([BIV report](https://www.biv.com/news/tumbler-ridge-families-likely-to-seek-us1-billion-in-lawsuit-against-openai-lawyer-12209582)). 함의는 내부 안전 시스템이 심각한 위험을 식별할 때 제공자들이 사용자 활동을 모니터링하거나 에스컬레이션할 권리를 점점 더 보유할 수 있다는 것이다.
  - 또 다른 댓글러는 고위험 오남용에 대해서는 Anthropic의 에스컬레이션이 정당화될 수 있다고 주장하며, Anthropic 자체의 **biorisk red-team work**를 구체적으로 연결했다 ([Anthropic Red Teaming: Biorisk](https://red.anthropic.com/2025/biorisk/)). 이는 AI가 생물학적 위해에 도움을 줄 수 있는 구체적 위협 모델 속에서, 사용자 콘텐츠 검토나 보고가 안전 통제로 포지셔닝될 수 있음을 보여준다.

- **[Claude's new usage limits are insane.](https://www.reddit.com/r/ClaudeAI/comments/1tzwrxs/claudes_new_usage_limits_are_insane/)** (Activity: 1122): 스크린샷 ([image](https://i.redd.it/6x64517caz5h1.png))은 **Opus 4.8 with 1M context**의 Claude 코딩 세션이 약 `12m 54s` 동안 `1.1M tokens`를 소비해, 단일 프롬프트 뒤 5시간 제한의 `21%`만 남긴 모습을 보여준다. 게시물은 **Opus + 1M context + UltraCode** 조합이 토큰 사용량을 곱할 수 있다고 주장했다. 여러 병렬 에이전트가 각자 큰 컨텍스트를 읽을 수 있어, 하나의 요청이 단일 효율적 추론 패스가 아니라 여러 비싼 호출처럼 동작한다는 것이다. 댓글러들은 대체로 불만에 반박했다. 가장 비싼 모델/컨텍스트/에이전트 모드 조합을 쓰면 예상되는 동작이라는 것이다. 비유는 *“굴착기로 개미를 누르는 격”* 이었다. 이들은 **UltraCode가 의도적으로 토큰 효율적이지 않으며**, 기본 “max thinking” 모드처럼 쓰기보다 좁고 가치가 높은 작업에 남겨야 한다고 강조했다.
  - 여러 댓글러는 사용자가 **Ultra Code**, 높은 “thinking” 수준, 큰 컨텍스트라는 가장 토큰 집약적인 설정을 결합했기 때문에 높은 사용량은 예상 가능한 일이라고 주장했다. 기술적 takeaway는 Ultra Code가 “Max thinking”의 토큰 효율적 대체물이 아니라는 점이다. 이는 훨씬 높은 토큰 소모와 비용이 받아들여질 수 있는 더 좁은 종류의 작업을 위해 설계됐다.
  - 반복된 요점은 개발자가 작업 복잡도와 비용 제약에 따라 모델/도구 구성을 선택해야 한다는 것이었다. 댓글러들은 이를 최적화 문제로 봤다. 일상 작업에 과도한 코딩 모드를 쓰면 제한이 소진되는 것은 예측 가능하므로, Ultra Code식 모드는 추가 reasoning/context 예산이 결과를 실질적으로 개선하는 경우에만 남겨야 한다는 것이다.

### Mythos 5와 Ideogram 4.0 창작 모델 보고

- **[Mythos 5: We're Not Ready](https://www.reddit.com/r/ClaudeAI/comments/1tzg6dk/mythos_5_were_not_ready/)** (Activity: 1348): 한 게시물은 **Anthropic의 “Mythos 5”** 테스트 모델이 **SVG/코드 기반 시각 생성**, 프런트엔드/UI 생성, 게임, 웹사이트, 심지어 코드 생성 음악에서도 이례적으로 강하며, 출력 생성에 때로 몇 분이 걸린다고 주장했다. 또한 숙련 인간의 약 `4x` 대비 훈련 코드 최적화 속도를 최대 `52x`까지 높였다는 Anthropic 내부 결과를 인용했고, 공개 릴리스는 테스트 모델보다 **비싸고 아마 nerfed**될 것이라고 예상했다. 상위 댓글은 대체로 회의적이거나 냉소적이었다. 댓글러들은 “너무 위험한 SVG 생성” 프레이밍에 의문을 제기했고, 한 댓글러가 그나마 그럴듯하다고 본 유일한 주장은 공개 모델이 다운그레이드/nerfed 버전일 수 있다는 것이었다. 또 다른 댓글러는 예상되는 더 높은 비용에 반대했다.
  - 한 댓글러는 출시 모델이 내부 테스트 버전과 크게 다를 수 있다는 회의론을 강조하며 *“the public version will likely be a nerfed version of the current testing model.”* 라는 주장을 인용했다. 기술적 함의는 **Mythos 5**에 대한 보고된 능력 주장이 Anthropic이 공개 전 post-training 제한, capability gating, 안전/성능 tradeoff를 적용할 경우 production에 그대로 이전되지 않을 수 있다는 것이다.
  - 한 실질적 제안은 **Mythos 5** 실행 비용이 훨씬 비싸다면 Anthropic이 단일 프런티어 generalist 모델에 기대기보다 **더 작고 저렴한 도메인 특화 모델**을 내야 할 수 있다는 것이다. 이는 전문 모델이 제한된 도메인에서 작업 성능을 유지하면서 추론 비용과 지연 시간을 줄일 수 있다는 흔한 배포 tradeoff를 반영한다.

- **[Ideogram 4.0's Understanding of Characters and IP is Crazy for an Open Model](https://www.reddit.com/r/StableDiffusion/comments/1u0e1g0/ideogram_40s_understanding_of_characters_and_ip/)** (Activity: 1081): 이 게시물은 **Ideogram 4.0**을 **ComfyUI**에서 로컬 실행했을 때, **INT8** 모델 변형으로 `1440×1024` 약 `1.5 MP`에서 강한 zero-LoRA 캐릭터/IP 회상을 보였다고 보고했다. 사용한 것은 **Kijai’s Ideogram 4 Prompt Builder KJ** 노드와 **SilverOxide’s workflow**다 ([Pastebin](https://pastebin.com/xpYezwZp)). 작성자는 Ideogram 4.0의 inpainting 품질도 강조했고, 필요하면 [`ComfyUI-Inpaint-CropAndStitch`](https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch)를 선택적으로 사용한다고 했다. Mario/Sonic 프롬프트 JSON도 공유했으며, 여기에는 `high_level_description`, `style_description`, bounding-box 기반 `compositional_deconstruction` 같은 구조화 필드가 있었다. 댓글러들은 샘플에 **LoRA가 없었다**는 점에 특히 놀랐다. 한 명은 Ideogram 4.0용 LoRA 훈련이 이미 실용적인지 물었다. 또 다른 댓글러는 *“Link가 Zelda에게 보낸 쪽지”* 같은 구체적 IP/디테일 처리에 찬사를 보냈다.
  - OP는 **Ideogram 4.0이 LoRA 없이도 인식 가능한 캐릭터/IP 개념을 재현할 수 있다**고 보고하며, 이 사용 사례에서 자신이 써본 가장 강한 오픈 모델이라고 불렀다. 이미지는 **ComfyUI**에서 `1440x1024` (`~1.5 MP`)로 로컬 생성됐고, **INT8 Ideogram 4.0 models**, **Kijai's Ideogram 4 Prompt Builder KJ node**, **SilverOxide's workflow**를 사용했다 ([pastebin](https://pastebin.com/xpYezwZp)).
  - 공유된 기술 워크플로 세부 사항은 `high_level_description`, `style_description`, `compositional_deconstruction` 필드를 포함한 구조화 프롬프트 JSON 사용이었다. 여기에는 객체 수준 `bbox` 영역과 설명이 포함됐다. 예시 프롬프트는 Mario와 Sonic을 bounding box, 제스처, 표정, 배경 프랜차이즈 맥락과 함께 명시적으로 배치해, Ideogram 4.0이 공간적으로 분해된 프롬팅에서 이점을 얻는다는 점을 시사했다.
  - OP는 또한 **Ideogram 4.0이 inpainting에서도 잘 작동**해 종종 정리가 필요 없지만, 필요할 때는 마스크된 얼굴/세부 영역 수정을 위해 **ComfyUI-Inpaint-CropAndStitch**를 사용한다고 했다 ([GitHub](https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch)). 이를 통해 낮은 메가픽셀에서 생성한 뒤 문제가 있는 영역만 선택적으로 inpaint해 더 높은 충실도를 얻는 실용 워크플로가 가능하다.

---

## AI Discord Recap

아쉽게도 Discord가 오늘 접근을 차단했다. 이 형태로는 다시 가져오지 않겠지만, 새 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙다. 좋은 여정이었다.
