---
title: "Anthropic, Claude Code에 컴퓨터 사용 도입"
summary:
  - "Anthropic, Claude Code에 컴퓨터 사용 도입"
  - "OpenAI, Claude Code용 Codex 플러그인 공개"
  - "Alibaba, Qwen3.5-Omni 멀티모달 모델 출시"
  - "Nous, Hermes Agent 업데이트로 오픈 에이전트 확산"
  - "llama.cpp, GitHub 10만 ★ 돌파로 로컬 열기"
date: 2026-03-30
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-30-not-much.md"
hasHeadline: false
headline: "Anthropic, Claude Code에 컴퓨터 사용 도입"
tags:
  - OpenAI
  - Codex
  - Anthropic
  - Claude Code
  - 에이전트
isFeatured: false
---

## 헤드라인: Anthropic, Claude Code에 컴퓨터 사용 도입

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic가 Claude Code 안에 컴퓨터 사용(computer use) 기능을 추가해, 에이전트가 CLI에서 만든 것을 실제 앱 실행·UI 클릭·검증까지 ‘닫힌 루프(closed-loop)’로 반복할 수 있게 했다. 이는 코드 작성 후 실제 환경에서 확인하고 수정·재테스트하는 검증 루프를 내장했다는 점에서, 데스크톱 에이전트처럼 결과가 열린 채로 끝나는 흐름 대비 신뢰도(reliability)를 끌어올릴 수 있다는 평가가 나왔다. 이번 흐름은 모델 성능 차이뿐 아니라 프롬프트/런타임 오케스트레이션(orchestration), 리뷰 루프, 실행 하네스(harness) 품질이 실사용 성과를 좌우한다는 논의와도 맞물린다.

---

## AI Twitter Recap

### Claude Code 컴퓨터 사용, Codex 상호운용, 코딩 에이전트 Harness 경쟁

- **Claude Code에 컴퓨터 사용 추가**: Anthropic가 **Claude Code 내부에 computer use**를 넣어, 에이전트가 앱을 열고 UI를 클릭하며 CLI에서 직접 만든 것을 테스트할 수 있게 했다(프로/맥스(Pro/Max) 사용자 대상 연구 프리뷰). 실무적 의미는 폐루프 검증(closed-loop verification)이다: 코드 → 실행(run) → UI 확인(inspect UI) → 수정(fix) → 재테스트(re-test). 이는 특히 ‘열린 결말’의 데스크톱 에이전트 대비, 신뢰 가능한 앱 반복(iteration)에 빠져 있던 조각이라는 평가가 나왔다 ([Claude announcement](https://x.com/claudeai/status/2038663014098899416), [@Yuchenj_UW on the “eyes” unlock](https://x.com/Yuchenj_UW/status/2038671697923223999), [@omarsar0](https://x.com/omarsar0/status/2038668801256968381)).
- **크로스 에이전트 조합이 표준이 되는 중**: OpenAI가 Claude Code용 **Codex 플러그인**을 출시해, Anthropic 툴체인 내부에서 리뷰·적대적 리뷰(adversarial review)·“rescue” 플로우를 트리거할 수 있게 했다(별도 글루 코드 없이 ChatGPT 구독으로 사용). 이는 ‘플러그인 신기함’보다, 코딩 스택이 단일 제품이 아니라 조합 가능한 하네스(composable harness)로 바뀌고 있다는 신호로 해석됐다 ([plugin by @dkundel](https://x.com/dkundel/status/2038670330257109461), [usage thread by @reach_vb](https://x.com/reach_vb/status/2038671858862583967), [open-source note](https://x.com/reach_vb/status/2038702889070211557)). 별도로 OpenAI는 **심야 Codex 작업이 더 오래 돈다**고 공유했는데, **11pm** 즈음 시작한 잡(job)은 **3시간 이상(3+ hours)** 실행될 확률이 **60%** 더 높았다고 한다. 이는 리팩터(refactor)·플래닝(planning)을 백그라운드 에이전트에 위임하는 패턴과 맞물린다 ([OpenAI Devs](https://x.com/OpenAIDevs/status/2038707501492056401)).
- **Harness 품질이 ‘1차 변수’로 보이기 시작**: Theo는 **Cursor에서의 Opus가 Claude Code 대비 약 20% 더 높은 점수를 낸다**고 주장했고, 더 넓게는 폐쇄형(closed-source) 하네스가 커뮤니티가 회귀(regression)를 진단·수정하기 어렵게 만든다고 지적했다 ([performance gap claim](https://x.com/theo/status/2038690786821505378), [closed-source critique](https://x.com/theo/status/2038740065300676777)). 피드 전반에서 반복된 주제는, 모델 능력 격차는 줄어드는 반면 **툴링(tooling), 프롬프트/런타임 오케스트레이션, 리뷰 루프**가 여전히 큰 실용적 차이를 만든다는 점이다.

### Hermes Agent 급부상, 멀티 에이전트 프로필, 오픈 Harness 생태계

- **Hermes가 이번 주 ‘돌파’한 오픈 에이전트 스택이 됨**: Nous가 대형 **Hermes Agent** 업데이트를 내며 OpenClaw/OpenClaw 유사 셋업에서의 이동이 늘었고, 사용자들은 **더 나은 컴팩션(compaction), 덜한 비대화(bloat), 더 강한 적응성(adaptability), 더 빠른 출시 속도**를 강조했다 ([Nous release](https://x.com/NousResearch/status/2038688578201346513), [Teknium’s multi-agent profiles](https://x.com/Teknium/status/2038694680549077059), [community migration examples](https://x.com/soundslikecanoe/status/2038611090704113931), [another](https://x.com/valenxi_r/status/2038692504120504453)). 새 **멀티 에이전트 프로필(multi-agent profiles)**은 각 봇에 메모리·스킬·히스토리·게이트웨이 연결을 분리 제공해, Hermes를 ‘개인 비서’에서 재사용 가능한 **에이전트 OS(agent OS)** 추상화로 끌어올린다는 설명이 나왔다.
- **트레이스(traces)·원격 제어·자기개선 생태계가 형성 중**: 여러 프로젝트가 Hermes를 코어 추론(inference) 이상으로 확장한다. [@jayfarei’s opentraces.ai](https://x.com/jayfarei/status/2038385591818023278)는 에이전트 트레이스를 정제(sanitize)해 Hugging Face로 공개·분석하는 CLI/스키마(schema)/리뷰 흐름을 제공하며, 애널리틱스(analytics)·평가(evals)·지도 미세조정(SFT)·강화학습(RL)에 쓰는 것을 목표로 한다. [@kaiostephens uploaded ~4,000 GLM-5 Hermes traces](https://x.com/kaiostephens/status/2038414350986207421)도 HF 업로드 사례로 언급됐다. [@IcarusHermes described an integration](https://x.com/IcarusHermes/status/2038524251355934872)은 에이전트가 자신의 의사결정을 로깅하고 데이터를 내보낸 뒤, 그 히스토리로 더 작은 후속 모델을 미세조정(fine-tuning)해 더 저렴한 모델로 스위치하는 통합을 설명했다. [@winglian’s ARC](https://x.com/winglian/status/2038680417125957865)는 E2E 암호화 하에 **원격 브라우저 기반 모니터링/제어**를 추가한다.
- **오픈 vs 독점(proprietary) 에이전트 인프라 경쟁이 격화**: [@ClementDelangue explicitly argued](https://x.com/ClementDelangue/status/2038552830638755962)는 오픈소스 에이전트 툴은 프라이버시(privacy)와 지속성(durability) 때문에 기본값을 **오픈소스 모델**로 둬야 한다고 주장했다. 한편 벤더들은 알려진 페인포인트를 공략한다. [@fchollet highlighted PokeeClaw](https://x.com/fchollet/status/2038662563228230127)는 샌드박싱(sandboxing), 승인(approvals), RBAC, 감사 추적(audit trails)을 갖춘 더 안전한 OpenClaw 스타일 어시스턴트로 소개됐고, [Z AI launched AutoClaw](https://x.com/Zai_org/status/2038632251551023250)는 API 키 없이도 동작하며 선택적으로 GLM-5-Turbo를 쓰는 로컬 OpenClaw 런타임(runtime)으로 출시됐다.

### Qwen3.5-Omni, GLM-5-Turbo/AutoClaw, 로컬/에이전트 특화로의 추진

- **Qwen3.5-Omni는 대형 멀티모달(multimodal) 릴리스**: Alibaba가 **Qwen3.5-Omni**를 공개했다. 텍스트/이미지/오디오/비디오 이해(understanding)를 네이티브로 지원하고, 스크립트 수준 자막(script-level captioning), 내장 웹 검색(web search)과 함수 호출(function calling)을 포함한다. 특히 말로 주어진 시각적 지시로 웹사이트/게임을 만드는 “audio-visual vibe coding” 데모가 주목받았다. 보고된 기능은 **10h 오디오 / 720p 비디오 400s**, **음성 인식 113개 언어**, **구어 36개 언어** 지원이며, Alibaba는 오디오에서 **Gemini 3.1 Pro**를 앞서고 일부 설정에서 AV 이해는 비슷하다고 주장했다 ([launch thread](https://x.com/Alibaba_Qwen/status/2038636335272194241), [demo thread](https://x.com/Alibaba_Qwen/status/2038637124619231467), [additional demo](https://x.com/Alibaba_Qwen/status/2038641496455557565)). [@kimmonismus](https://x.com/kimmonismus/status/2038638427604762666)의 유용한 주의점도 있었다: “omni”는 여기서 임의의 멀티모달 생성(generation)이 아니라 멀티모달 입력을 **해석(interpreting)** 하는 의미라는 것.
- **Z AI는 에이전트 워크로드에 계속 튜닝 중**: [Artificial Analysis evaluated GLM-5-Turbo](https://x.com/ArtificialAnlys/status/2038667075489808804)라는 평가에 따르면, Z AI의 독점(agent-optimized) 변형인 GLM-5-Turbo는 AA Intelligence Index에서 **47**을 기록해 오픈 웨이트(open-weight) **GLM-5 (Reasoning)**의 **50**보다 약간 낮았지만, GDPval-AA에서는 **1503**으로 GLM-5의 **1408**을 앞섰다. 이는 광범위 벤치마크 최대치(maximalism)보다 실제 에이전트 워크플로우에 맞춘 튜닝이라는 주장에 힘을 실었다.
- **특화된 오픈 모델이 점점 배포 패턴이 됨**: 여러 트윗이 같은 주장으로 수렴했다. 기업은 범용 API를 계속 임대(rent)하기보다, 독자 데이터로 오픈 모델을 **소유·특화(specialize)** 하게 될 것이라는 것 ([@oneill_c](https://x.com/oneill_c/status/2038689976012149131), [@ClementDelangue](https://x.com/ClementDelangue/status/2038649731404927202)). 근거로는 Claude 4.6 Opus에서 증류(distill)된 **Qwen3.5-27B**가 HF에서 수주간 트렌딩했고, **4-bit에서 16GB**에 들어간다는 보고가 있었다 ([Unsloth](https://x.com/UnslothAI/status/2038625148354679270), [@Hesamation](https://x.com/Hesamation/status/2038642306434150427)). 동시에 llama.cpp, MLX 같은 로컬 런타임에 대한 관심도 커지고 있다.

### 로컬 추론(inference)과 시스템: llama.cpp 100k, Flash-MoE, 웹/서빙 툴체인

- **llama.cpp가 GitHub 스타 10만을 찍으며 상징적 이정표**: [@ggerganov’s reflection](https://x.com/ggerganov/status/2038632534414680223)은 2026년이 **로컬 에이전트 워크플로우(local agentic workflows)**의 돌파 해가 될 수 있다고 보며, 유용한 자동화는 프론티어급(hosted) 모델이 필수는 아니고 ‘정답’에 가까운 휴대형 런타임 스택(runtime stack)이 절대적 스케일보다 중요하다고 주장했다. 또한 크로스 하드웨어(cross-hardware)·비벤더 종속(non-vendor-locked) 인프라의 중요성을 강조했다.
- **Apple Silicon의 Flash-MoE가 큰 주목을 받음**: 널리 공유된 글은 순수 **C + Metal** 엔진으로 SSD에서 가중치를 스트리밍하고 활성 전문가(experts)만 로드하는 방식으로 **Qwen3.5-397B**를 **48GB MacBook Pro**에서 **4.4 tok/s**로 돌릴 수 있으며, 추론 중 RAM 사용이 **~5.5GB**라는 주장을 담았다 ([summary thread](https://x.com/heynavtoor/status/2038614549973401699)). 관련 작업으로는 MLX 위에서 MoE 경로만 최적화하는 [anemll-flash-mlx](https://x.com/anemll/status/2038684375425200360)와, 새 Apple Silicon 지원을 발표한 [AI Toolkit’s new Apple Silicon support](https://x.com/ostrisai/status/2038643080400969940)가 언급됐다.
- **웹과 서빙(serving) 스택도 전진**: [Transformers.js v4](https://x.com/xenovacom/status/2038610331417608691)는 브라우저/Node/Bun/Deno 전반에 **WebGPU 백엔드**를 추가해 성능을 크게 끌어올렸고 200개+ 아키텍처를 지원한다. [vLLM-Omni v0.18.0](https://x.com/vllm_project/status/2038415516772299011)는 324 커밋, 프로덕션 TTS/옴니(omni) 서빙, 통합 양자화(unified quantization), 디퓨전 런타임 리팩터, 다수 신규 모델을 포함해 출시됐다. 음성 쪽에서는 [Artificial Analysis covered Cohere Transcribe](https://x.com/ArtificialAnlys/status/2038678855213568031)가 다뤄졌는데, **2B 컨포머(conformer) 인코더-디코더**, **Apache 2.0**, **14개 언어** 학습, **4.7% AA-WER**, 대략 **60배 실시간(60x real-time)** 전사 속도를 특징으로 한다.

### 에이전트 연구: 자연어 Harness, Meta-Harness, 비동기 SWE 에이전트, 파일시스템 기반 장문 컨텍스트

- **Harness 엔지니어링이 자체 연구 분야가 되는 중**: 칭화/선전(Tsinghua/Shenzhen) 연구는 **자연어 에이전트 하네스(natural-language agent harnesses)**에서 SOP를 통해 LLM이 하드코딩된 규칙 대신 오케스트레이션 로직을 실행하도록 제안했다. 컨텍스트 예산(context budget)이 커질수록 그럴듯하다는 반응이 있었다 ([@rronak_ summary](https://x.com/rronak_/status/2038401494177694074)). Meta는 이를 **Meta-Harness**로 확장해, 베이스 모델뿐 아니라 코드·트레이스·스코어까지 포함해 하네스를 엔드투엔드로 최적화하는 방법을 제시했다. 주장에는 TerminalBench-2에서 Haiku 에이전트 중 **#1**과, 텍스트 분류·전이(transfer)에서의 큰 향상이 포함됐다 ([@yoonholeee](https://x.com/yoonholeee/status/2038640635482456118), [explainer by @LiorOnAI](https://x.com/LiorOnAI/status/2038669301541228606)).
- **비동기/멀티 에이전트 SWE 설계에 더 강한 실증 근거**: CMU의 **CAID** 논문은 매니저 에이전트, 의존성 그래프(dependency graphs), 분리된 git 워크트리(worktrees), 자기검증(self-verification), 머지(merges)를 통한 **중앙집중 비동기 격리 위임(centralized asynchronous isolated delegation)** 을 주장했다. 결과로는 단일 에이전트 대비 **PaperBench +26.7p**, **Commit0 +14.3p** 향상을 보고했으며, 단순 반복을 늘리기보다 동시성(concurrency)과 격리(isolation)가 유리하다는 결론을 뒷받침한다 ([@omarsar0 summary](https://x.com/omarsar0/status/2038627572108743001)).
- **코딩 에이전트를 장문 컨텍스트 처리기로 보는 재구성(reframing)**: [@dair_ai](https://x.com/dair_ai/status/2038635382989005015)가 소개한 논문은 거대한 코퍼스(corpora)를 디렉터리 트리로 두고, 일반 코딩 에이전트가 셸(shell) 명령과 Python으로 이를 탐색하게 하자는 접근을 제안했다. 이는 텍스트를 컨텍스트 창에 ‘우겨넣기’나 단순 검색(retrieval)에만 의존하는 방식을 대체한다. 보고 결과는 BrowseComp-Plus(750M 토큰)에서 **88.5%**로, 기존 최고 **80%**를 상회했으며, 최대 **3T 토큰** 규모까지 작동했다고 한다.

### 학습/최적화/평가 및 프로덕션 사례

- **Muon에 의미 있는 시스템/수학 최적화**: [Gram Newton-Schulz](https://x.com/jcz42/status/2038660309968208028)는 Muon의 Newton-Schulz 스텝을 대체하는 드롭인(drop-in)으로, 큰 직사각 행렬 대신 더 작은 대칭 **XXᵀ Gram 행렬**에서 동작한다. 이에 따라 검증 퍼플렉서티(perplexity)를 **0.01** 이내로 유지하면서 Muon을 **최대 2배(2x) 더 빠르게** 만들 수 있다고 보고됐다. [@tri_dao](https://x.com/tri_dao/status/2038666307738964466)는 이런 선형대수+고속 커널(fast-kernel) 결합이 실제로 중요하다고 평했다.
- **실전 구현 디테일 2가지가 부각**: [Ross Wightman flagged](https://x.com/wightmanr/status/2038634643843682366)는 LLM 학습 코드에서 PyTorch `trunc_normal_`를 잘못 쓰는 패턴을 지적했다. 기본 `a/b`는 표준편차가 아니라 절대값이어서, 많은 코드베이스가 사실상 트렁케이션(truncation)을 하지 않고 있다는 것. 또한 나이틀리(nightlies)에서 수정된 수치적 이상(numerical oddities)도 언급했다. 애플리케이션 레이어에서는 [Shopify’s DSPy case study](https://x.com/dbreunig/status/2038650860843245814)가 비용 측면에서 눈에 띄었는데, 비즈니스 로직을 분해하고 DSPy로 의도를 모델링한 뒤 더 작은 최적화 모델로 바꾸면서 성능을 유지해 연간 비용을 **$5.5M → $73K**로 줄였다는 슬라이드가 소개됐다 ([follow-up](https://x.com/kmad/status/2038659241238503716)).
- **새 평가/벤치마크가 격차를 계속 드러냄**: [World Reasoning Arena](https://x.com/arankomatsuzaki/status/2038443186255991169)는 가정적/월드모델(world-model) 추론을 겨냥하며 인간과의 상당한 격차를 보고한다. [Tau Bench’s new banking domain](https://x.com/_philschmid/status/2038655544613826985)은 698개 문서의 현실적 지원 환경을 추가했는데, 최고 모델도 과제를 약 **25%** 정도만 해결한다고 한다. 한편 [@Zulfikar_Ramzan](https://x.com/Zulfikar_Ramzan/status/2038408402809090554)이 소개한 Stanford 주도 논문은 아첨(sycophantic) AI가 사용자의 확신을 높이면서도 관계 복구 의지를 낮출 수 있음을 보여, ‘도움됨(helpfulness)’ 지표가 사회적으로 해로운 행동을 가릴 수 있음을 시사했다.

### 참여도 상위 트윗(engagement)

- **Claude Code computer use**: Anthropic의 릴리스가 이 목록에서 가장 큰 기술 제품 출시였고, 일상적 코딩 에이전트 UX에 가장 큰 영향을 줄 수 있다는 평가가 나왔다 ([announcement](https://x.com/claudeai/status/2038663014098899416)).
- **Claude Code hidden features**: [@bcherny’s thread](https://x.com/bcherny/status/2038454336355999749)은 전문가 사용자들이 이제 원시 프롬프트(prompt)보다 코딩 에이전트 워크플로우 최적화에 얼마나 빠르게 적응하는지 보여주며 큰 참여를 끌었다.
- **Hermes Agent update**: [Nous’s major Hermes release](https://x.com/NousResearch/status/2038688578201346513)에 대한 폭넓은 커뮤니티 반응은 오픈 에이전트 하네스가 새로운 채택 국면에 들어섰음을 시사한다.
- **Qwen3.5-Omni launch**: Alibaba의 멀티모달 릴리스는 당일 최대급 모델 발표 중 하나였고, 오디오/비디오 기반 앱 생성 데모가 특히 주목받았다 ([launch](https://x.com/Alibaba_Qwen/status/2038636335272194241)).
- **llama.cpp at 100k stars**: [@ggerganov’s milestone post](https://x.com/ggerganov/status/2038632534414680223)은 더 강해진 오픈 모델과 더 강해진 로컬 런타임이 결합되는 ‘로컬 우선(local-first)’ 분위기를 포착했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen 3.6 spotted!](https://www.reddit.com/r/LocalLLaMA/comments/1s7zy3u/qwen_36_spotted/)** (Activity: 568): 이미지에는 Qwen 비전-언어(vision-language) 계열의 차기 모델인 “Qwen 3.6 Plus” 프리뷰가 담겼고, 2026년 3월 30일 출시로 표기돼 있다. 특히 `context size of 1,000,000`처럼 거대한 컨텍스트(context) 크기를 강조해, 이전 대비 대규모 입력 처리에서 큰 도약을 시사한다. 또한 프롬프트(prompt)와 컴플리션(completion) 데이터를 수집해 성능을 개선하려는 점을 내세워, 반복 학습(iterative learning)·개선에 초점을 두고 있음을 보여준다. 댓글에서는 3.5에서의 “overthinking problem” 같은 이슈를 3.6이 해결할지, 397B 모델과 함께 SOTA에 도달할 수 있을지 기대가 이어졌다. Coder 업데이트가 임박했는지도 화제였다.
  - ambient_temp_xeno가 언급한 ‘1 million context’는 대규모 컨텍스트 유지가 필요한 작업에서 성능을 끌어올릴 수 있음을 시사한다.
  - Long_comment_san은 현재 모델의 ‘1.5 presence penalty’가 롤플레잉(role-playing)에서 성능을 해친다고 지적했다. 반복 주제/아이디어를 과도하게 패널티로 처리해 창작·서사 작업을 방해할 수 있다는 주장이다.
  - ForsookComparison은 397B가 SOTA에 근접했지만, 파라미터 수가 크더라도 미세조정(fine-tuning)이 필요할 수 있다고 추정했다.

- **[Semantic video search using local Qwen3-VL embedding, no API, no transcription](https://www.reddit.com/r/LocalLLaMA/comments/1s7u4fr/semantic_video_search_using_local_qwen3vl/)** (Activity: 275): 이 글은 **Qwen3-VL-Embedding**을 활용한 시맨틱 비디오 검색(semantic video search)을 다룬다. 전사(transcription)나 프레임 캡션(frame captioning) 없이 원본 비디오를 벡터 공간(vector space)에 직접 임베딩(embedding)해 자연어 쿼리(query)로 검색할 수 있다는 설명이다. **8B 모델**은 Apple Silicon과 CUDA에서 로컬로 동작하며 대략 `18GB RAM`이 필요하고, **2B 모델**은 `6GB` 정도가 필요하다고 한다. **ChromaDB**를 사용해 영상 인덱싱·검색을 하는 CLI 툴 [SentrySearch](https://github.com/ssrajadh/sentrysearch)도 소개됐는데, 초기에는 Gemini API 기반이었으나 이제 로컬 Qwen 백엔드를 지원한다. 댓글에서는 로컬 멀티모달(multimodal)로 실용 문제를 푸는 접근을 긍정적으로 봤고, 일부 사용자는 성능/VRAM 사용 문제로 로컬 호스팅(hosting) 최적화가 필요하다고 말했다.
  - **neeeser**는 Qwen-3VL 임베딩 모델의 로컬 호스팅에 대해, 4090 같은 고급 GPU에서도 느리고 VRAM을 많이 먹는다고 하며 효율적 배포 전략이 필요하다고 했다.
  - **Octopotree**는 쿼리 시 실시간 처리(real-time)인지, 사전 전처리(pre-processing)인지 물으며 아키텍처/성능 상의 차이를 짚었다.
  - 논의는 전사 없이도 가능한 멀티모달 비디오 검색이 전통적 방식보다 더 직접적·효율적 해결책이 될 수 있다는 점으로 이어졌다.

- **[Meet CODEC: the open-source framework that finally makes "Hey computer, do this" actually work. Screen reading. Voice calls. Multi-agent research. 36 skills. Runs entirely on your machine.](https://www.reddit.com/r/LocalLLM/comments/1s6h4g5/meet_codec_the_opensource_framework_that_finally/)** (Activity: 175): **CODEC**는 외부 API 호출 없이 로컬 하드웨어에서만 구동되며, 컴퓨터에 대한 음성·텍스트 기반 통합 제어를 목표로 하는 오픈소스 프레임워크다. 추론(reasoning)용 `Qwen 3.5 35B`, 음성 인식(speech recognition)용 `Whisper`, 음성 합성(voice synthesis)용 `Kokoro` 등 여러 모델을 통합하고, 단일 Mac Studio에서 동작한다고 소개됐다. **CODEC Core**(음성 웨이크·앱 제어), **CODEC Dictate**(STT), **CODEC Chat**(멀티 에이전트 리서치·문서 처리) 등 7개 시스템으로 구성되며, 여러 외부 툴을 로컬 대체 구현으로 바꿔 프라이버시(privacy)와 자율성(autonomy)을 강조한다. 난독증(dyslexia) 사용자를 포함한 접근성(accessibility)에도 초점을 뒀다. 프로젝트는 [GitHub](https://github.com/AVADSA25/codec)에 있으며 MIT 라이선스다.
  - **bernieth**는 Qwen 3.5 35b 같은 고급 모델을 로컬에서 돌릴 수 있다는 점과, 이를 제대로 활용하는 프레임워크 구현의 중요성을 강조했다.
  - **super1701**는 Home Assistant(HA)와의 통합(예: Frigate 보안, 일상 자동화)을 논의하며, 스마트홈/IoT 확장 가능성을 언급했다.
  - **Aggravating_Fun_7692**는 CODEC과 Codex의 이름 유사성이 혼동을 부를 수 있다고 우려했다.

- **[Technical clarification on TurboQuant / RaBitQ for people following the recent TurboQuant discussion](https://www.reddit.com/r/LocalLLaMA/comments/1s7nq6b/technical_clarification_on_turboquant_rabitq_for/)** (Activity: 686): RaBitQ 논문의 1저자인 **Jianyang Gao**가 로컬 추론(local inference)과 KV-cache 압축(compression) 맥락에서 **TurboQuant**와 **RaBitQ**의 관계에 대한 혼선을 다뤘다. 그는 (1) TurboQuant가 RaBitQ를 불완전하게 설명하며 핵심인 Johnson-Lindenstrauss 변환을 누락했고, (2) TurboQuant의 이론적 주장 일부가 근거가 부족하며 RaBitQ의 점근적 최적성(asymptotic optimality)과 충돌하고, (3) 실증 비교(empirical comparisons)가 오해를 부르는 방식으로 수행돼 RaBitQ가 TurboQuant보다 불리한 조건에서 테스트됐다고 지적했다. 그는 공개적 정정(public clarification)을 요구했고, TurboQuant가 계속 홍보되는 가운데 **ICLR 2026** 발표가 예정돼 있다는 점도 언급했다. [OpenReview thread](https://openreview.net/forum?id=tO3ASKZlok). 댓글에서는 불공정한 실험 세팅이 동료 심사(peer review)를 통과하면 안 된다는 반응과, 저자들이 출판 부정확성을 바로잡기 어려운 현실에 대한 공감이 나왔다.
  - 오픈소스 `llama.cpp` TurboQuant 구현 개발자가 커뮤니티 테스트 성능 지표를 공유했다. Apple Silicon/NVIDIA/AMD 등에서 비대칭 `q8_0-K + turbo4-V` 구성이 거의 무손실에 가깝고(perplexity 증가 `+0.0-0.2%`), KV 메모리 `4.57x` 압축으로 8GB MacBook Air에서 `4000+` 토큰, 16GB RTX 5070 Ti에서 `131K` 컨텍스트 토큰을 다룰 수 있었다고 한다. Blackwell 통합 메모리(unified memory)의 CUDA 구현에서는 압축이 오히려 더 빠른 디코딩을 보였다는 주장도 포함됐다 (`63.5 vs 50.1 tok/s`).
  - Qwen Q4_K_M에서 대칭(symmetric) turbo 양자화(quantization)가 perplexity `3,400+`로 붕괴하는 치명적 문제가 있었지만, 비대칭 `q8_0-K + turbo-V`로는 베이스라인 수준으로 복구된다는 논의가 있었다. K 정밀도가 softmax 증폭으로 지배적이기 때문이라는 설명과, Metal/CUDA에서 독립 테스터들이 확인했다는 주장이 이어졌다. 회전(rotation)과 Lloyd-Max 스칼라 양자화를 포함한 기법의 공로(attribution)를 TurboQuant/RaBitQ/이전 Hadamard 변환 작업 중 어디에 둘지에 대한 논쟁도 있었다.
  - 한 댓글은 TurboQuant를 “snake oil”이라고 비판하며, Q8/Q4와 Hadamard 변환 같은 기존 기법이 수년간 효과적으로 쓰여 왔다고 주장했다.

- **[In the recent kv rotation PR it was found that the existing q8 kv quants tank performance on AIME25, but can be recovered mostly with rotation](https://www.reddit.com/r/LocalLLaMA/comments/1s720r8/in_the_recent_kv_rotation_pr_it_was_found_that/)** (Activity: 393): GitHub 코멘트의 이미지가 AIME25 모델에서 KV 양자화 타입별 성능을 보여주며, 회전(rotation)이 성능에 미치는 영향을 강조한다. 표에 따르면 회전 없이 Q8_0 KV는 `31.7%`인데 회전을 적용하면 `37.1%`로 개선됐다. Q4_0은 회전 없이 `0%`였지만 회전 적용 시 `21.7%`로 올라간다. 이는 특정 양자화 구성에서 회전이 성능을 크게 회복할 수 있음을 시사하며, Q8 양자화 사용자에게도 중요한 포인트로 받아들여졌다. 댓글에서는 일반 Q8_0 KV 캐시의 저조한 성능에 놀라는 반응과 turboquant/rabitq의 잠재적 이점에 대한 언급이 있었고, 편의성을 높일 것으로 기대되는 llama-eval 출시를 기다린다는 말도 나왔다.
  - 최근 벤치마크에서 AIME25에서 Q8_0 kv 양자화가 F16의 `37.9%` 대비 `31.7%`로 크게 떨어졌지만, 회전을 적용하면 `37.1%`로 대부분 회복됐다.
  - 데이터는 회전 없는 Q8_0 kv가 회전 적용 Q5_1/Q4_0보다도 나쁘다는 점을 보여준다. 예를 들어 Q5_1+회전은 `32.5%`, Q4_0+회전은 `2.0% → 21.7%`로 점프한다.
  - turboquant/rabitq 관련 논의는 회전 같은 고급 기법이 낮은 정밀도의 kv 캐시에서 발생하는 성능 열화를 완화할 수 있음을 뒷받침한다는 쪽으로 이어졌다.

### Less Technical Subreddits

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Anthropic is testing 'Mythos' its 'most powerful AI model ever developed' | Fortune](https://www.reddit.com/r/singularity/comments/1s4t3k7/anthropic_is_testing_mythos_its_most_powerful_ai/)** (Activity: 2028): **Anthropic**이 ‘지금까지 만든 것 중 가장 강력한 모델’로 묘사된 ‘Claude Mythos’라는 새 AI 모델을 테스트 중이라는 내용이다. 이는 기존 Opus 라인보다 상위인 ‘Capybara’라는 새 티어의 일부로 소개된다. CMS 설정 오류로 유출된 드래프트 자료는 추론(reasoning), 코딩(coding), 사이버보안(cybersecurity) 작업에서의 큰 개선을 강조하며, 능력의 ‘step change’를 주장했다. Anthropic는 오남용(misuse) 위험을 우려해 롤아웃에 신중하며, 초기 접근을 사이버보안 방어를 강화할 수 있는 조직에 집중한다는 설명이다. 댓글은 풍자와 기술적 관심이 섞였고, 일부는 ‘덜 강한 모델을 왜 테스트하나’라며 회의적인 반응을 보였지만, 다른 이들은 이전 대비 개선 폭의 의미를 강조했다.
  - RedRock727은 Claude Mythos가 추론/코딩/사이버보안에서 큰 진전이며, Opus 상위의 Capybara 티어로 포지셔닝된다고 언급했다. 또한 CMS 자산 설정 오류로 인한 데이터 유출이 있었고 Anthropic가 이를 휴먼 에러로 돌렸다고 했다.
  - exordin26은 Capybara라는 새 티어가 이전 Opus보다 더 크고 더 똑똑하다고 설명하며, Capybara와 Mythos가 같은 기반 모델을 가리킬 가능성을 시사했다.
  - 유출된 드래프트를 둘러싼 논의는, 강화된 사이버 역량 때문에 Mythos 롤아웃을 제한적으로 시작한다는 Anthropic의 신중함으로 이어졌다.

- **[Exclusive: Anthropic acknowledges testing new AI model representing ‘step change’ in capabilities, after accidental data leak reveals its existence](https://www.reddit.com/r/ClaudeAI/comments/1s4ucsu/exclusive_anthropic_acknowledges_testing_new_ai/)** (Activity: 1261): 우발적 데이터 유출 이후, Anthropic가 이전 릴리스 대비 능력의 큰 도약을 의미하는 새 모델을 테스트 중이라는 보도가 나왔다. 모델은 얼리 액세스 고객과 함께 테스트되고 있으며, 곧 더 넓게 제공될 수 있다는 관측이 뒤따랐다. 유출로 인해 모델의 영향과 개선점에 대한 관심과 추측이 커졌다. 일부 댓글은 전형적 마케팅 과장이라고 보았고, 일부는 ‘유출’ 자체가 마케팅이 될 수 있다고 봤다.
  - 유출과 동시에 ‘사이버를 뚫을 수 있다’는 역량이 강조된 점을 보며, Anthropic 자체 보안의 견고함에 대한 의문을 제기하는 댓글이 있었다.
  - 모델 명명 규칙이 Opus/Sonnet 같은 음악적 용어에서 Capybara 같은 더 장난스러운 이름으로 바뀐 것을 풍자하는 반응도 있었다.
  - ‘우발적’ 유출이 정말 우발적이냐에 대한 회의도 있었고, 인터뷰·준비된 인용문까지 포함된 점을 근거로 ‘통제된 버즈 마케팅’일 수 있다는 의견도 나왔다.

- **[OpenAI is in big trouble](https://www.reddit.com/r/OpenAI/comments/1s4sbdn/openai_is_in_big_trouble/)** (Activity: 2616): The Atlantic의 “OpenAI Is Doing Everything ... Poorly”라는 기사 스크린샷을 바탕으로, OpenAI의 최근 전략 결정과 프로젝트 취소를 비판하는 글이다. 기사에서는 Sora 비디오 생성기, Stargate 프로젝트 등 여러 이니셔티브를 보류/취소했고 약속했던 하드웨어도 지연됐다고 언급한다. 이는 Anthropic, Google Gemini 등 경쟁이 커지는 가운데 OpenAI가 문제를 겪는 신호로 해석됐다. 다만 댓글에서는 글로벌 컴퓨트(compute) 부족 속에서 수익성 높은 엔터프라이즈 솔루션으로 피벗(pivot)하는 전략적 선택일 수 있다는 반론이 나왔고, Sora 같은 프로젝트는 하루 $15M 비용으로 지속 불가능했기 때문에 엔터프라이즈 집중이 더 현실적이라는 의견이 있었다.
  - triclavian은 글로벌 컴퓨트 부족으로 OpenAI가 엔터프라이즈 고객을 우선시하는 전략 전환을 했다고 봤다.
  - ripestmango는 Sora 같은 무료 서비스가 하루 $15M 비용이었다는 점을 들어 중단 결정을 지지했고, 저가치 AI 콘텐츠를 양산했다고 비판했다.
  - cfeichtner13은 비디오/이미지 생성이 수익이 안 나고 컴퓨트를 많이 먹는다고 보며, 중국 기술이 더 앞섰고 엔터프라이즈·로보틱스로 집중하는 편이 낫다고 주장했다.

- **[Is this poor execution or just a company at work trying things](https://www.reddit.com/r/OpenAI/comments/1s4ui3n/is_this_poor_execution_or_just_a_company_at_work/)** (Activity: 713): OpenAI가 출시했다가 취소/지연한 프로젝트(예: Sora, Stargate)를 나열하며 ‘나쁜 실행(poor execution)’을 풍자하는 밈(meme) 성격의 비판이다. Katie Miller의 트윗과 The Atlantic 헤드라인이, 전략적 실험이 아니라 실행 문제를 시사한다는 뉘앙스로 소비됐다. 댓글에서는 OpenAI가 큰 사용자 기반을 가졌지만 여전히 스타트업 단계에서 확장 가능하고 수익성 있는 모델을 찾는 중이라는 관점이 제시됐다.
  - handbrake2k는 대규모 유저 확보 이후에도 확장/수익화 모델을 찾는 스타트업의 전형적 과제라고 언급했다.
  - edjez는 2026년에도 소비자용 비디오 엔터테인먼트에 GPU를 계속 태우는 건 비현실적이라며 자원 재정렬이 필요하다고 주장했다.
  - Acedia_spark는 시장 선점을 서두른 결과 무능해 보였을 수 있으며, 엔터프라이즈 피벗이 전략적이면서도 운영 위기 속 반응처럼 보인다고 했다.

- **[OpenAI halts "Adult Mode" as advisors, investors, and employees raise red flags](https://www.reddit.com/r/OpenAI/comments/1s4a1r6/openai_halts_adult_mode_as_advisors_investors_and/)** (Activity: 654): OpenAI가 성적 AI 콘텐츠의 사회적 영향에 대한 우려로 ‘Adult Mode’ 챗봇 개발을 일시 중단했다는 내용이다. 핵심 이슈로는 연령 확인(age verification) 시스템이 미성년자를 성인으로 오인한 비율이 `12%`였다는 점이 지적되며, 윤리·안전 측면의 우려가 커졌다고 한다. OpenAI는 생산성 도구와 ChatGPT 기반 ‘슈퍼 앱(super app)’으로 초점을 옮기는 중이라는 설명이 붙었다. 자세한 내용은 [here](https://the-decoder.com/openai-halts-adult-mode-as-advisors-investors-and-employees-raise-red-flags/)에 있다. 댓글에서는 ‘섹시한 자살 코치(sexy suicide coach)’ 같은 서사에 회의적이며, 보수적 가치관에 맞추다 공공 사용이 제한되면 군사 쪽으로 갈 수 있다는 비판도 나왔다.
  - 다른 모델(Gemini, Grok)은 성인 콘텐츠를 지원하는데 왜 OpenAI의 중단만 ‘레드 플래그’처럼 다뤄지냐는 지적이 있었다.
  - OpenAI가 보수적 시각에 맞춰가면 결국 군사 계약으로 피벗할 수 있다는 냉소도 있었다.

- **[Update on Session Limits](https://www.reddit.com/r/ClaudeAI/comments/1s4idaq/update_on_session_limits/)** (Activity: 2467): Anthropic가 Claude 서비스의 5시간 세션 제한(session limits)을 피크 시간대(평일, PT 5am–11am / GMT 1pm–7pm) 동안 무료/프로/맥스 구독에 대해 조정했다는 업데이트다. 주간 한도는 그대로지만, 이 시간대에는 세션 한도를 더 빨리 소진하게 된다. 변경은 특히 프로 티어 사용자 등 약 `7%`의 사용자에게 영향을 주며, 증가한 수요를 관리하기 위한 조치라고 한다. 토큰을 많이 쓰는 작업은 오프피크(off-peak)로 옮기면 효율적으로 쓸 수 있다는 조언도 포함됐다. 댓글에서는 투명성 부족을 비판하며, 조용히 적용해 반발을 피하려 한 것 아니냐는 불만과 함께, 스케일링 이슈를 다룰 때의 소통 중요성이 강조됐다.
  - shyney는 버그가 아니라 의도된 변경이며 조용히 시행해 반발을 피하려 한 것 같다고 말했다.
  - Wise-Reflection-7400는 이전의 오프피크 2배 보너스가 피크 축소로 상쇄된 자원 재배분(resource allocation)이라고 해석했다.
  - This-Shape2193는 스케일링이 어렵더라도 투명하게 설명했다면 이해했을 텐데, 커뮤니케이션 부족이 신뢰를 해친다고 비판했다.

- **[This isn’t right](https://www.reddit.com/r/ClaudeAI/comments/1s55mvg/this_isnt_right/)** (Activity: 888): Pro 티어 사용자 관점에서 Claude의 사용량(usage) 투명성과 세션 제한에 대한 불만을 다룬 글이다. “Hello”와 날씨 질문 같은 단순 상호작용이 사용량 `7%`를 소모했다는 사례가 제시되며 과도하다고 주장한다. 또한 고객 지원이 챗봇이 정책만 반복하는 형태라 도움되지 않는다고 비판한다. 댓글에서는 두 메시지 만에 세션 제한에 걸렸다는 보고도 있고, 투명성 부족과 서비스 품질 하락 인식으로 구독을 취소했다는 말도 있었다.
  - Word 문서 2개 편집, 책 레이아웃 변경 같은 최소 사용에서도 세션 한도가 빨리 닳는다는 보고가 이어졌고, 기대와 다르다는 불만이 나왔다.
  - 구매 시 한도 설명이 명확하지 않아 가치(value) 인식이 떨어진다는 지적이 있었다.
  - 일부는 Gemini 등 경쟁 서비스로 옮기겠다고 했고, 제한/소통 문제로 이탈이 늘 수 있다는 분위기가 드러났다.

- **[Subscribed yesterday to Pro and I’m already hit by limits. Is this a scam?](https://www.reddit.com/r/ClaudeAI/comments/1s54pfu/subscribed_yesterday_to_pro_and_im_already_hit_by/)** (Activity: 900): 한 사용자가 코딩 어시스턴트로 쓰려고 $20/월의 Claude Pro를 구독했지만, 워드프레스 플러그인 작업 2시간 만에 사용 제한에 걸렸다고 불만을 제기했다. 큰 파일이나 복잡한 작업이 아니었다고 하며 환불 과정 이슈를 이유로 취소했다는 내용이다. 이는 개발자 관점에서 Pro 플랜의 실용성에 의문을 제기하며, Sonnet 3.5/Opus에 대한 기대와 대비된다고 한다. 댓글에서는 비슷한 사례가 반복되고 있고, 문서 편집이나 일반적인 프롬프트에서도 예상치 못한 사용 제한이 발생한다는 보고가 있어 최근 정책/계산 방식 변경 가능성이 제기됐다.
  - 전형적 프롬프트만으로도 사용량이 급증해 50%를 빠르게 찍었다는 사례가 있어, 사용량 계산 방식 변경 가능성이 언급됐다.
  - Max(약 $100)로 올려도 3시간 만에 한도에 걸렸다는 보고가 있어, 추적/집행 방식이 바뀐 것 아니냐는 추측이 나왔다.
  - 이런 제한이 해결되지 않으면 다른 AI 서비스로 이동해 유지율(retention)이 떨어질 수 있다는 우려가 나왔다.

---

## AI Discord Recap

### AINews Discords

- Discord가 오늘 접근을 차단해, 기존 형태로는 더 이상 가져오지 않을 예정이라고 밝혔다. 다만 새로운 AINews를 곧 출시(shipping)할 계획이며, 여기까지 읽어준 것에 대해 “좋은 여정이었다”는 인사를 전했다.
