---
title: "OpenAI, GPT-5.4 mini/nano 출시"
summary:
  - "OpenAI가 GPT-5.4 mini/nano를 출시"
  - "미니 모델, 코딩·서브에이전트 최적화"
  - "LangChain, Sandboxes와 Open SWE 공개"
  - "Mamba-3·Attention Residuals 논의 확산"
  - "Unsloth Studio, 로컬 학습·추론 UI 출시"
date: 2026-03-16
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-17-not-much.md"
hasHeadline: false
headline: "OpenAI, GPT-5.4 mini/nano 출시"
tags:
  - OpenAI
  - Codex
  - 에이전트
  - 오픈소스
  - 아키텍처
isFeatured: false
---

## 헤드라인: OpenAI, GPT-5.4 mini/nano 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI가 API, ChatGPT, Codex 전반에 GPT-5.4 mini와 nano를 배포하며 ‘작지만 코딩에 최적화된’ 모델을 기본 선택지로 밀어붙였습니다. mini는 속도(이전 대비 2배+), 코딩·컴퓨터 사용(computer use)·멀티모달(multimodal) 이해, 서브에이전트(subagent) 적합성, 그리고 400k 컨텍스트를 내세웠고, 커뮤니티는 가격과 진실성(truthfulness) 트레이드오프까지 함께 논의했습니다.

---

## AI Twitter Recap

### OpenAI의 GPT-5.4 Mini/Nano 출시와 소형 코딩 최적화 모델로의 전환

- **API·ChatGPT·Codex 전반에 GPT-5.4 mini/nano 출시**: OpenAI가 [**GPT-5.4 mini**](https://x.com/OpenAI/status/2033953592424731072)와 [**GPT-5.4 nano**](https://x.com/OpenAI/status/2033953595637538849)를 출시하며, 지금까지 가장 성능이 높은 소형(small) 모델로 포지셔닝했습니다. [@OpenAIDevs](https://x.com/OpenAIDevs/status/2033953815834333608)에 따르면 GPT-5.4 mini는 GPT-5 mini 대비 **2배 이상 빠르고**, **coding·computer use·multimodal understanding·subagents**를 겨냥하며, API에서 **400k context window**를 제공합니다. OpenAI는 또한 mini가 [**SWE-Bench Pro and OSWorld-Verified**](https://x.com/OpenAIDevs/status/2033953828387885470)를 포함한 평가에서 더 큰 GPT-5.4 성능에 근접하면서도 [**30% of GPT-5.4 Codex quota**](https://x.com/OpenAIDevs/status/2033953840312291603)만 사용한다고 주장했고, 그 결과 많은 백그라운드 코딩 워크플로우와 서브에이전트 fan-out에서 새로운 기본값이 될 수 있다고 강조했습니다.
- **초기 반응은 코딩 효용에 집중, 가격·진실성 트레이드오프도 부각**: 개발자들은 mini가 [subagents in Codex](https://x.com/dkundel/status/2033953901301665838), [computer-use workloads](https://x.com/scaling01/status/2033954794105127007), [Windsurf](https://x.com/windsurf/status/2033954998837776869) 같은 외부 제품에서 유용하다고 즉시 강조했습니다. 다만 논의는 ‘성능은 좋아지지만 가격도 오르는’ 익숙한 OpenAI 패턴으로도 모였습니다. [@scaling01](https://x.com/scaling01/status/2033955279079907511)은 mini 가격을 **$0.75/M input and $4.5/M output**로 언급했고, nano도 이전 nano 티어보다 높은 가격이라고 했습니다. 3자(Third-party) 평가는 엇갈렸는데, [Mercor’s APEX-Agents result](https://x.com/mercor_ai/status/2033955468650156503)는 xhigh reasoning 설정의 mini가 **24.5% Pass@1**를 기록해 해당 벤치마크에서 일부 경량·중간급 경쟁 모델보다 앞섰다고 보고한 반면, [BullshitBench](https://x.com/petergostev/status/2033995459522396287)는 거짓 전제(false-premise)·전문용어 함정(jargon traps)에 대한 저항(resistance)에서 새 소형 모델들을 비교적 낮게 평가했습니다. OpenAI는 행동 튜닝(behavior tuning) 이슈도 조용히 인정했으며, [@michpokrass](https://x.com/michpokrass/status/2033935238066540806)는 최근 **5.3 instant** 업데이트로 “짜증날 정도로 클릭베이트 같은” 행동이 줄었다고 말했습니다.

### 에이전트 인프라: 샌드박스, 서브에이전트, Open SWE, 그리고 하네스 경쟁

- **코드를 실행하는 에이전트가 제품 아키텍처의 중심으로**: 여러 출시 소식은 더 나은 베이스 모델(base model) 자체보다, 보안 실행(secure execution)·오케스트레이션(orchestration)·배포 사용성(deployment ergonomics)을 둘러싼 스택(stack)이 성숙해지고 있음을 시사합니다. LangChain은 안전한 임시(ephemeral) 코드 실행을 위한 [**LangSmith Sandboxes**](https://x.com/LangChain/status/2033949251529793978)를 도입했으며, [@hwchase17](https://x.com/hwchase17/status/2033950657619874217)은 “점점 더 많은 에이전트가 코드를 작성하고 실행할 것이다”라고 명시적으로 주장했습니다. 동시에 LangChain은 [**Open SWE**](https://x.com/hwchase17/status/2033977192053612621)를 오픈소스화했는데, 이는 **Stripe, Ramp, and Coinbase**에서 사용된 것으로 알려진 내부 시스템을 본뜬 백그라운드 코딩 에이전트입니다. 이 시스템은 [Slack, Linear, and GitHub](https://x.com/BraceSproul/status/2033962118970818650)와 통합되고, 서브에이전트(subagent)와 미들웨어(middleware)를 사용하며, 하네스(harness)·샌드박스(sandbox)·호출 레이어(invocation layer)·검증(validation)을 분리합니다. 이는 “chat copilots”에서 배포 가능한 내부 엔지니어링 에이전트로 나아가는 눈에 띄는 단계입니다.
- **서브에이전트와 보안 실행은 생태계 전반의 ‘1급 기능(first-class)’으로**: OpenAI의 Codex는 이제 [**subagents**](https://x.com/gdb/status/2033757784437895367)를 지원하며, GPT-5.4 mini도 특히 이 용도에 강하다고 설명됐습니다. Hermes Agent의 [**v0.3.0** release](https://x.com/NousResearch/status/2033877040399831478) 역시 강한 신호로 언급됐는데, **5일 동안 248 PRs**, 1급 **plugin architecture**, **CDP**를 통한 실시간 Chrome 제어, IDE 통합, 로컬 Whisper 기반 음성 모드, PII 제거(redaction), 그리고 [Browser Use](https://x.com/Teknium/status/2033811117521408078) 같은 프로바이더 통합이 포함됩니다. 전반적 방향성은 벤더 전반에서 일관되게 나타나며, 에이전트 가치가 순수 벤치마크 상승만이 아니라 안전한 실행 환경, 조합 가능한 스킬/플러그인, 워크플로우 네이티브(workflow-native) 표면(surface)에 점점 더 좌우된다는 흐름입니다.

### 아키텍처 연구: Attention Residuals, 수직 어텐션, 그리고 Mamba-3

- **깊이(depth) 방향 어텐션이 주목받는 흐름**: Moonshot의 [**Attention Residuals paper on arXiv**](https://x.com/Kimi_Moonshot/status/2033796781327454686)가 “vertical attention”(레이어 간 어텐션) 또는 레이어 간 메모리(inter-layer memory)에 대한 기술 논의를 촉발했습니다. [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2033751367198949865)의 상세 해설은 각 레이어가 이전 레이어의 상태를 질의(query)하는 형태로, 시퀀스(수평) 상호작용을 넘어 레이어 간으로 어텐션을 확장하는 아이디어로 설명합니다. 커뮤니티 반응에서는 이것이 고립된 흐름이 아니라는 점도 강조됐는데, [@rosinality](https://x.com/rosinality/status/2033810580604158323)는 **ByteDance도 depth 방향 어텐션을 구현**했다고 언급했고, [@arjunkocher](https://x.com/arjunkocher/status/2033846693918347641)는 구현 워크스루를 공개했습니다. 여기서 흥미로운 시스템적 주장은 **레이어 수 << 시퀀스 길이**이므로, 일부 수직 어텐션 형태는 기존 연산(compute)에 ‘숨겨져’ 추가 지연(latency)이 거의 없을 수 있다는 점입니다.
- **Mamba-3는 inference-first 하이브리드 아키텍처의 근거를 강화**: 또 다른 주요 아키텍처 공개는 [**Mamba-3**](https://x.com/_albertgu/status/2033948415139451045)로, [@_albertgu](https://x.com/_albertgu/status/2033948415139451045)와 [@tri_dao](https://x.com/tri_dao/status/2033948569502413245)가 하이브리드 시대에 선형/상태공간(state-space) 모델을 더 경쟁력 있게 만드는 다음 단계로 소개했습니다. 핵심은 트랜스포머(transformer)를 완전히 대체하는 것이 아니라 **추론 효율(inference efficiency)**에 방점을 찍는 것입니다. Together는 이를 [**MIMO variant**](https://x.com/togethercompute/status/2033956365165859026)로 요약하며, 비슷한 디코드 속도에서 모델 강도를 높이고 선형 모델 중 가장 강한 성능, 그리고 **1.5B**에서 가장 빠른 prefill+decode를 주장했습니다. Tri Dao는 추론 비중이 큰 RL과 장기 롤아웃(long-rollout) 워크로드가 이런 아키텍처에 특히 비옥한 영역이라고도 짚었습니다. Attention Residuals와 Mamba-3를 함께 보면, 연구소들이 생태계 호환성을 크게 해치지 않으면서 ‘풀 트랜스포머 병목’을 완화하는 방법을 계속 탐색하고 있음을 시사합니다.

### GTC: NVIDIA의 에이전트 드라이브, 오픈 모델, 그리고 인프라 테제

- **GTC 메시지는 inference·에이전트·‘token factory’ 관점에 집중**: 여러 게시물은 Jensen Huang이 미래 컴퓨터를 [“**manufacturing tokens**”](https://x.com/TheTuringPost/status/2033983885131059636)하는 시스템으로 프레이밍하며, 추론(inference)이 다음 용량(capacity) 파도를 이끈다고 말한 흐름을 반영했습니다. 이는 제품·생태계 발표에서도 나타났는데, LangChain은 프레임워크가 [**1B downloads**](https://x.com/LangChain/status/2033788913937195132)를 넘겼다고 했고 **NVIDIA Nemotron Coalition**에 합류했습니다. [@ggerganov](https://x.com/ggerganov/status/2033947673825337477)는 llama.cpp에서 **Nemotron 3 Nano 4B** 지원을 강조했으며, Hugging Face의 [@jeffboudier](https://x.com/jeffboudier/status/2033959279510884631)는 추론 모델, 로보틱스 데이터셋, 월드 모델을 포함한 다양한 NVIDIA 오픈 공개물을 정리했습니다.
- **사이드 발표는 오픈/엔터프라이즈 에이전트 툴링이 주도**: H Company는 NVIDIA와 함께 **computer-use agents**를 위한 오픈 멀티모달 모델 [**Holotron-12B**](https://x.com/hcompany_ai/status/2033851052714320083)를 공개했습니다. Perplexity는 엔터프라이즈 팀을 위한 AI 브라우저 [**Comet Enterprise**](https://x.com/perplexity_ai/status/2033947232467357874)를 발표하며 롤아웃 제어와 [CrowdStrike Falcon integration](https://x.com/perplexity_ai/status/2033947356551647356)을 포함했습니다. NVIDIA의 더 큰 비즈니스 테제도 증폭됐는데, [@TheTuringPost](https://x.com/TheTuringPost/status/2033981870141231215)는 자주 인용되는 **$1T AI infra opportunity**가 2027년까지 스택의 일부만 포괄한다는 Jensen의 발언을 강조하며, 업계가 여전히 추론 인프라 구축의 초기에 있음을 시사했습니다.

### 오픈소스 툴링, 로컬 에이전트, 개발자 스택 업그레이드

- **로컬/프라이빗 에이전트 워크플로우가 계속 개선**: Hugging Face는 하드웨어에 맞는 로컬 모델/퀀트(quant)를 자동 탐지하고 로컬 코딩 에이전트를 띄우는 [**hf CLI extension**](https://x.com/ClementDelangue/status/2033982183791108278)을 출시했습니다. Unsloth는 로컬에서 **500+ models**를 학습·실행할 수 있는 오픈소스 웹 UI [**Unsloth Studio**](https://x.com/UnslothAI/status/2033926272481718523)를 공개했으며, **70% less VRAM**으로 **2x faster training**을 주장하고 GGUF 지원, 합성 데이터(synthetic data) 툴링, tool calling, 코드 실행 등을 내세웠습니다. Ollama는 OpenClaw 워크플로우를 위한 [web search/fetch plugins and headless launch support](https://x.com/ollama/status/2033993519459889505)를 추가했고, [provider in CodexBar](https://x.com/ollama/status/2033794815448780803)로도 등장했습니다.
- **‘오픈 코딩 에이전트(open coding agent)’ 생태계가 점점 명확해짐**: 모델 불가지론(model-agnostic) 하네스, 구조화된 스킬(skills), 파일시스템/상태 추상화, 임시 클라우드(ephemeral cloud) 또는 로컬 실행 같은 패턴으로 수렴이 보입니다. LangChain의 [Deep Agents](https://x.com/RoundtableSpace/status/2033955271333011829)는 MIT 라이선스의 ‘검사 가능한(inspectable)’ Claude Code 스타일 에이전틱 하네스 복제본으로 설명됐고, Hermes Agent의 플러그인 시스템과 로컬 모델 친화성도 같은 논의로 이어졌습니다. 데이터에서 더 뚜렷한 트렌드는 이제 프론티어가 단지 오픈 가중치(open-weight) 모델이 아니라, 에이전트를 실제 배포하는 하네스와 런타임 계층(runtime layers)으로 이동하고 있다는 점입니다.

### 참여도 상위 트윗(engagement 기준)

- **OpenAI 소형 모델 출시**: [@OpenAIDevs on GPT-5.4 mini/nano](https://x.com/OpenAIDevs/status/2033953815834333608)는 특히 코딩 에이전트 워크로드 관점에서 가장 중요한 기술 발표 중 하나로 꼽혔습니다.
- **Cursor의 RL 기반 컨텍스트 압축(compaction)**: [@cursor_ai](https://x.com/cursor_ai/status/2033967614309835069)는 Composer가 프롬프트(prompting) 대신 RL로 자기 요약(self-summarize)을 학습해 압축 오류(compaction error)를 **50%** 줄였고, 더 어려운 장기 코딩(long-horizon coding) 작업을 가능케 했다고 말했습니다.
- **Mamba-3 공개**: [@_albertgu](https://x.com/_albertgu/status/2033948415139451045)와 [@tri_dao](https://x.com/tri_dao/status/2033948569502413245)는 이번 사이클에서 시퀀스 모델링(sequence modeling) 분야의 가장 중요한 아키텍처 업데이트 중 하나로 언급됐습니다.
- **Unsloth Studio**: [@UnslothAI](https://x.com/UnslothAI/status/2033926272481718523)는 로컬 학습/추론 실무자를 정조준한 오픈소스 제품 출시로 높은 주목을 받았습니다.
- **Kimi Attention Residuals**: [@Kimi_Moonshot](https://x.com/Kimi_Moonshot/status/2033796781327454686)는 수직 어텐션과 레이어 간 메모리를 둘러싼 아키텍처 논의의 상당 부분을 이끌었습니다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Unsloth announces Unsloth Studio - a competitor to LMStudio?](https://www.reddit.com/r/LocalLLaMA/comments/1rwa0f7/unsloth_announces_unsloth_studio_a_competitor_to/)** (Activity: 998): **Unsloth Studio**가 로컬에서 AI 모델을 학습·실행하기 위한 오픈소스 노코드 웹 인터페이스로 발표됐으며, GGUF 생태계에서 LMStudio의 우위를 흔들 수 있다는 평가가 나왔습니다. `Llama.cpp`와 호환되고 **auto-healing tool calling**, Python·bash 코드 실행, **audio·vision·LLM finetuning** 지원 등을 언급했습니다. GGUF 지원과 Mac/Windows/Linux 실행, **SVG rendering**, **synthetic data generation**, **fast parallel data preparation** 같은 기능도 포함됐고, 설치는 `pip install unsloth`로 안내됐습니다. 자세한 내용은 [Unsloth Documentation](https://unsloth.ai/docs/new/studio#run-models-locally)에서 확인할 수 있습니다. 댓글에서는 LMStudio를 고급 사용자 ‘go-to’로 규정하는 데 이견이 있었고(vLLM 또는 llama.cpp 등 대안 언급), UI의 학습/데이터 준비 기능에 대한 기대도 나타났습니다. danielhanchen은 기능 범위를 강조하며 [GitHub](https://github.com/unslothai/unsloth)를 링크했고, sean_hash는 fine-tuning과 inference를 한 도구에 통합한 점을, Specter_Origin은 LM Studio 대비 오픈소스라는 점을 장점으로 꼽았습니다.
- **[Introducing Unsloth Studio: A new open-source web UI to train and run LLMs](https://www.reddit.com/r/LocalLLaMA/comments/1rw9jmf/introducing_unsloth_studio_a_new_opensource_web/)** (Activity: 579): **Unsloth Studio**는 Mac/Windows/Linux에서 로컬 LLM을 학습·실행하도록 설계된 오픈소스 웹 UI로 소개됐습니다. `500+ models`를 `70% less VRAM`으로 2배 속도로 학습한다고 주장했고, **GGUF**, 비전/오디오/임베딩 모델 지원, 모델 비교, self-healing tool calling, 웹 검색, PDF/CSV/DOCX 같은 형식에서 데이터셋 자동 생성, 출력 정확도를 높이기 위한 코드 실행 등을 포함한다고 했습니다. GGUF·Safetensors로 내보내기(export)와 추론 파라미터 자동 튜닝도 언급됐습니다. 설치는 `pip install unsloth`로 안내됐으며, 추가 정보로 [GitHub](https://github.com/unslothai/unsloth)와 [documentation](https://unsloth.ai/docs/new/studio)이 제공됐습니다. 댓글에서는 완전 오픈소스 대안으로서의 기대와, 특히 비숙련 사용자에게 fine-tuning 접근성을 높인다는 점이 강조됐고, 설치 중 대형 `torch` 패키지 다운로드에서 디스크 공간 부족으로 OSError가 난 사례 및 향후 AMD 지원에 대한 기대도 언급됐습니다.
- **[Qwen3.5-9B on document benchmarks: where it beats frontier models and where it doesn't.](https://www.reddit.com/r/LocalLLaMA/comments/1rv98wo/qwen359b_on_document_benchmarks_where_it_beats/)** (Activity: 295): 이미지 비교는 Alibaba의 Qwen3.5-9B와 OpenAI의 GPT-5.4가 문서(document) AI 벤치마크에서 보인 성능을 보여줍니다. Qwen3.5-9B는 `77.0` 점수로 #9에 위치했고 “Key Information Extraction”, “Table Understanding”에서 강점을 보였으며, GPT-5.4는 `81.0` 점수로 #4에 위치해 다른 영역에서 선도했습니다. 결과는 Qwen3.5-9B가 “OmniOCR”에서 강한 반면 “OmniDoc”과 “IDP Core”에서 뒤처진다는 점을 강조했고, 게시글의 상세 분해에서는 Qwen 계열이 OCR·VQA 작업에서 앞서지만 테이블 추출 및 필기(handwriting) OCR에서는 뒤진다는 서술과 맞물립니다. 댓글에서는 기술이 기능적 한계에 가까워지고 있다는 견해, GLM-OCR과의 비교 기대, 그리고 처리 시간이 허용될 때 소형 Qwen을 쓰는 에너지 효율(energy efficiency) 관점이 언급됐습니다.
- **[Mistral Small 4:119B-2603](https://www.reddit.com/r/LocalLLaMA/comments/1rvlfbh/mistral_small_4119b2603/)** (Activity: 1057): **Mistral Small 4**는 `119 billion parameters`, `256k context length`의 하이브리드 모델로 소개됐고, Instruct·Reasoning·Devstral 성격을 통합했다고 설명됐습니다. 멀티모달 입력을 지원하며, 지연(latency) `40%` 감소, speculative decoding, 4-bit float quantization 등을 언급했고, 일반 대화·코딩·문서 분석에 최적화됐다고 했습니다. Apache 2.0 라이선스로 상업/비상업 모두 사용 가능하다고 소개됐으며, 자세한 내용은 [Hugging Face page](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)에서 확인할 수 있습니다. 댓글에서는 `120 billion parameters`가 이제 ‘small’로 불리는 규모 변화가 농담처럼 언급됐고, Mistral의 활성 파라미터(activated parameters)와 Qwen3.5 비교가 논의됐습니다.
- **[DGX Station is available (via OEM distributors)](https://www.reddit.com/r/LocalLLaMA/comments/1rvnppg/dgx_station_is_available_via_oem_distributors/)** (Activity: 418): 고성능 워크스테이션(추정 **NVIDIA DGX Station**)이 OEM 유통 채널을 통해 उपलब्ध하다는 내용입니다. **Dell**, **Exxact** 같은 유통 경로와 `85-90k USD` 수준의 가격대가 언급됐고, ‘coherent memory’ 개념이 거론되며 CPU·GPU 간 효율적 데이터 공유와 AI 워크로드 성능에 대한 관심이 이어졌습니다. 또한 추가 카드 없이는 영상 출력이 없다는 설계가 언급되며, 소비자용보다는 계산 중심 설계라는 점이 부각됐습니다.
- **[Mistral Small 4 | Mistral AI](https://www.reddit.com/r/LocalLLaMA/comments/1rvohug/mistral_small_4_mistral_ai/)** (Activity: 323): **Mistral Small 4**는 `119 billion parameters`, `256k context window`의 멀티모달 모델로, `128 experts`를 사용하는 MoE 아키텍처와 텍스트+이미지 입력(텍스트 출력)을 강조했습니다. Apache 2.0 라이선스로 공개됐고, 엔터프라이즈 배포에서 지연 감소와 처리량 향상을 목표로 한다고 소개됐습니다. 자세한 내용은 [original announcement](https://mistral.ai/news/mistral-small-4)에 정리돼 있습니다. 댓글에서는 `6.5B active parameters` 관점의 비용 비교, 이전 버전의 tool calling 문제(함수 시그니처 환각, 파라미터 누락 등)에 대한 우려, 그리고 `32k` 이후 컨텍스트 품질에 대한 관심이 언급됐습니다.
- **[Mistral 4 Family Spotted](https://www.reddit.com/r/LocalLLaMA/comments/1rvfypu/mistral_4_family_spotted/)** (Activity: 687): **Mistral 4** 패밀리가 Instruct·Reasoning(구 Magistral)·Devstral 세 계열의 성격을 통합하는 하이브리드로 소개됐습니다. **Mistral-Small-4**는 `128 experts` 중 `4 active`인 MoE로, 총 `119 billion parameters` 중 토큰당 `6.5 billion`이 활성화되며, `256k context length`와 멀티모달 입력(텍스트/이미지, 텍스트 출력), reasoning effort 설정, 다국어, 네이티브 function calling/JSON 출력 등을 언급했습니다. 오픈소스는 Apache 2.0으로 소개됐고, [Mistral-Small-4](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603) 링크가 함께 공유됐습니다. 댓글에서는 Qwen 등과의 경쟁 구도, 성능 기대, 그리고 llama.cpp 통합 진행 언급이 이어졌습니다.

### Less Technical Subreddits

(대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo)

- **[INCREDIBLE STUFF INCOMING](https://www.reddit.com/r/singularity/comments/1rvlvw5/incredible_stuff_incoming/)** (Activity: 483): NVIDIA **Nemotron 3 Ultra Base**(약 `500B`)로 보이는 슬라이드가 공유되며 “Best Open Base Model”, `5X` 효율 등을 주장하는 벤치마크 그래프가 포함됐습니다(Throughput, MMLU Pro, HumanEval, GSM8K, Multilingual MMLU 등). 댓글에서는 비교 대상 GLM 모델이 무엇인지 명시되지 않은 점, Kimi K2가 8개월 전 모델이라는 점, 그리고 그래프 축을 `60%`부터 시작해 격차를 과장한다는 비판이 나왔습니다.
- **[Showing real capability of LTX loras! Dispatch LTX 2.3 LORA with multiple characters + style](https://www.reddit.com/r/StableDiffusion/comments/1rv40xc/showing_real_capability_of_ltx_loras_dispatch_ltx/)** (Activity: 932): 게임 Dispatch에서 약 `440 clips`(평균 `121 frames`)로 LTX 2.3 LoRA를 학습해 `6 characters` 이상을 여러 트리거 단어와 상세 캡션으로 분리했다고 설명합니다. 학습은 [musubi fork by akanetendo25](https://github.com/AkaneTendo25/musubi-tuner)를 사용했고, `pyscene`로 클립 분할, `24 fps` 변환, 커스텀 캡셔닝 도구를 언급했습니다. HD/SD 그룹 분리, `31GB VRAM`, `4 blockswap`, `64 rank`, `500 steps`마다 체크포인트 등의 설정도 포함됐으며, LTX가 WAN만큼 시각적으로 강하진 않아도 게임 개발 프리비주얼(pre-visualization)에 잠재력이 있다는 취지로 정리했습니다. 댓글에서는 WAN 2.5 오픈소스 여부에 대한 회의와 데이터 준비 노력에 대한 칭찬이 함께 나왔습니다.
- **[oldNokia Ultrareal. Flux2.Klein 9b LoRA](https://www.reddit.com/r/StableDiffusion/comments/1rutgoa/oldnokia_ultrareal_flux2klein_9b_lora/)** (Activity: 541): 2000년대 중반 휴대폰 카메라 감성을 재현하는 **OldNokia UltraReal**(Nokia E61i 사진 아카이브 기반) LoRA를 소개합니다. 소프트 포커스 플라스틱 렌즈 느낌, 바랜 색감, JPEG 압축·크로마 노이즈 같은 아티팩트를 핵심 특징으로 들었고, 다운로드 경로로 [Civitai](https://civitai.com/models/1808651/oldnokia-ultrareal)와 [Hugging Face](https://huggingface.co/Danrisi/oldNokia_flux2_klein9b)를 제공했습니다. 댓글에서는 당시 Nokia 카메라의 다이내믹 레인지가 더 낮았다는 농담, `qwen-image`로의 재학습 제안, 프레임 인젝션(frame injection) 관련 개인 프로젝트 언급 등이 이어졌습니다.
- **[Antrophic CEO says 50% entry-level white-collar jobs will be eradicated within 3 years](https://www.reddit.com/r/singularity/comments/1rw2tan/antrophic_ceo_says_50_entrylevel_whitecollar_jobs/)** (Activity: 2162): **Anthropic CEO**가 향후 3년 내 AI 발전으로 엔트리급 화이트칼라의 `50%`가 사라질 수 있다고 예측했다는 내용입니다. 아직 *copilot* 같은 도구가 품질·정확도에서 사람을 완전히 대체하지 못하는데도 현장에서 대체가 진행될 수 있다는 우려가 담겼고, 댓글에서는 성능이 부족한 AI 도입으로 오류가 늘어도 속도 때문에 선호되는 사례, 예측과 현실의 간극, 일자리 전환 전략 부재 등이 논의됐습니다.
- **[NBC News survey finds Americans hate AI even more than ICE](https://www.reddit.com/r/ChatGPT/comments/1rv9rsl/nbc_news_survey_finds_americans_hate_ai_even_more/)** (Activity: 1146): NBC News 설문에서 유권자 중 `26%`만 AI를 긍정적으로 보고 `46%`는 부정적으로 본다는 결과를 소개합니다(대부분의 주제보다 호감도가 낮다는 비교 포함). 댓글에서는 과장된 기대(특히 일자리 대체 주장)로 인한 반감, 실제로는 생산성 도구로 유용하지만 산업/조직 맥락 지식이 필요한 일을 완전히 대체하진 못한다는 지적, 그리고 기업에 대한 불신이 AI 인식에 미치는 영향 등이 언급됐습니다.

---

## AI Discord Recap

### 공지

- Discord가 오늘 접근을 차단해 더 이상 이 형태로는 운영할 수 없다고 밝혔습니다.
- 대신 새로운 AINews를 곧 출시(shipping)할 예정이며, 여기까지 읽어준 것에 대한 감사와 함께 “좋은 시간이었다”는 마무리 메시지를 전했습니다.
