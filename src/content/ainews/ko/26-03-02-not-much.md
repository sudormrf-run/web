---
title: "Alibaba가 Qwen 3.5 Small 오픈 모델 공개"
summary:
  - "Alibaba가 Qwen 3.5 Small 오픈 모델 공개"
  - "Claude 장애로 ‘가용성’ 논의 확산"
  - "Apple Neural Engine 역공학 학습 주목"
  - "ByteDance CUDA Agent, 커널 RL 성과"
  - "DoW 계약 수정안, 감시 금지 조항 논쟁"
date: 2026-03-02
originalUrl: "https://news.smol.ai/issues/26-03-02-a-quiet-day/"
hasHeadline: false
headline: "Alibaba가 Qwen 3.5 Small 오픈 모델 공개"
tags:
  - Qwen
  - OpenAI
  - Codex
  - 인프라
  - 정책
isFeatured: false
---

원문 참고 링크: [AINews’ website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

## 헤드라인: Alibaba가 Qwen 3.5 Small 오픈 모델 공개

Alibaba가 Qwen3.5-0.8B/2B/4B/9B(Base + Instruct) 소형 오픈 모델을 내놓으면서, 온디바이스(on-device) 멀티모달(multimodal) + 장문 컨텍스트(long-context) 흐름이 더 현실적인 선택지로 부상했다. 네이티브 멀티모달과 스케일드 RL(scaled RL)을 전면에 내세워 엣지(edge)·경량 에이전트(lightweight agent) 배포를 겨냥했고, 커뮤니티에서는 기본 컨텍스트 262K(최대 1M 확장 가능) 및 여러 벤치마크 점수 요약이 빠르게 확산됐다.

구조(architecture) 측면에선 하이브리드(hybrid) 주의(attention)로의 이동(혹은 비정통적 설계) 관측과 함께, 선형 어텐션(linear attention)과 풀 어텐션(full attention)을 섞는 패턴(Gated DeltaNet hybrid 등) 추정이 공유됐다. 배포도 즉시 따라붙어 Ollama/LM Studio 패키징, iPhone 온디바이스 데모(MLX), 그리고 “소형 모델은 기본값에서 추론(reasoning)이 꺼져 있다” 같은 평가 시 주의사항까지 함께 회자됐다.

---

## AI Twitter Recap

### Qwen 3.5 “small” open models: long-context + multimodal on-device is getting real

- **Qwen3.5-0.8B / 2B / 4B / 9B released (Base + Instruct)**: Alibaba가 “more intelligence, less compute” 포지셔닝의 컴팩트 시리즈를 공개했으며, **native multimodal**과 **scaled RL**을 강조하면서 **edge + lightweight agent** 배포를 명시적으로 겨냥했다 ([Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2028460046510965160)). 커뮤니티에서는 **262K native context (extendable to 1M)** 및 트윗 요약에서 보고된 경쟁력 있는 점수(예: “82.5 MMLU-Pro,” “78.4 MMMU,” “97.2 CountBench”)가 확산됐지만, 모델 카드(model card)를 보기 전까지는 **vendor/secondary claims**로 취급하라는 톤도 함께였다 ([kimmonismus](https://x.com/kimmonismus/status/2028461032377852000)).
- **Architecture notes emerging via commentary**: 여러 트윗에서 Qwen이 **hybrid / non-orthodox attention** 쪽으로 이동한다는 관측이 모였고, Qwen3 업데이트에서의 “Thinking vs Instruct” 분리와 달리 3.5에서 “hybrid models”가 다시 부각된다는 얘기가 나왔다 ([nrehiew_](https://x.com/nrehiew_/status/2028454952348328192)). 더 상세하지만 비공식인 분석으로는 메모리를 평평하게(flat) 유지하면서 품질을 지키기 위해 **Gated DeltaNet hybrid** 패턴(“**3 layers linear attention : 1 layer full attention**”)을 쓴다는 주장도 공유됐다 ([LiorOnAI](https://x.com/LiorOnAI/status/2028558859783311382)).
- **Practical deployment caught up fast**: 실사용 배포도 빠르게 따라붙었다.
- **Ollama**: `ollama run qwen3.5:9b|4b|2b|0.8b`로 구동 가능하며, 패키징에서 **tool calling + thinking + multimodal** 지원이 함께 드러난다는 언급이 있었다 ([ollama](https://x.com/ollama/status/2028510184788926567), [ollama](https://x.com/ollama/status/2028514180936908842)).
- **LM Studio**: Qwen3.5-9B가 로컬(local)에서 약 **7GB** 풋프린트(footprint)로 언급됐다 ([Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2028664203872251943)).
- **iPhone on-device demo**: “iPhone 17 Pro”에서 **MLX**로 Qwen3.5 **2B 6-bit**를 돌리는 데모가 “edge breakthrough”로 프레이밍됐다 ([adrgrondin](https://x.com/adrgrondin/status/2028568689709084919), [kimmonismus](https://x.com/kimmonismus/status/2028602520302399701)).
- **Gotcha for evaluators**: 소형 모델에서 “Reasoning disabled by default”라는 지적이 있었고, chat-template kwargs로 활성화하라는 조언(예: llama-server / Unsloth docs 예시)이 공유됐다 ([danielhanchen](https://x.com/danielhanchen/status/2028478490069352448)).

---

### Coding agents + reliability + “availability is the new frontier”

- **Codex 5.3 and coding eval chatter**: Codex 5.3가 “promising”한 작업을 푼다는 일화와 함께 WeirdML 같은 벤치마크를 끌어올렸다는 주장(예: **79.3%** claim, Opus 4.6의 77.9% 대비 선두)이 나왔고, Gemini의 피크 성능(peak performance)이 여전히 더 높을 수 있다는 언급도 있었다 ([theo](https://x.com/theo/status/2028389340469149704), [htihle](https://x.com/htihle/status/2028441018865955244)). WeirdML v2가 포화(saturation)에 가까워진다는 추측도 이어졌다 ([teortaxesTex](https://x.com/teortaxesTex/status/2028444160517144683)).
- **“We’re about to hit 1 9 of availability”**: 새 운영(ops) 고통 포인트는 모델 품질뿐 아니라 **downtime**과 UX 저하라는 얘기가 반복됐고, Claude 장애(outage)와 생산성 영향에 대한 밈/불만이 동시에 확산됐다 ([ThePrimeagen](https://x.com/ThePrimeagen/status/2028477482865774984), [Yuchenj_UW](https://x.com/Yuchenj_UW/status/2028490627978244156), [Yuchenj_UW](https://x.com/Yuchenj_UW/status/2028701610982125793)).
- **Agent observability / evaluation becomes a first-class problem**: 에이전트 관측성(observability)/평가(evaluation)가 1급 과제로 부상.
- “Since we’re all agent managers now, what’s your favourite way to get observability?” ([_lewtun](https://x.com/_lewtun/status/2028395363132956861)).
- **Agent reliability is cross-functional**: 나쁜 평가 기준(eval criteria)은 엔지니어링만으로 해결할 수 없고, PM/도메인 전문가가 성공 정의를 소유(own)해야 한다는 주장 ([saen_dev](https://x.com/saen_dev/status/2028411962712088767)).
- Practical eval advice: 빌드 전에 성공을 정의하고, 결정적 채점기(deterministic graders)부터 시작하며, 스타일은 LLM judge를 쓰고, 경로(path)가 아니라 산출물(artifact)을 채점하라는 조언 ([_philschmid](https://x.com/_philschmid/status/2028528775873400919)).
- **AGENTS.md / SKILL.md as “guardrails,” not magic**: AGENTS.md / SKILL.md를 “마법”이 아니라 가드레일(guardrails)로 보는 관점.
- Codex 연구 보고( **10 repos / 124 PRs** ): AGENTS.md가 **median runtime ~28.6%**, **tokens ~16.6%**를 줄였는데, 균일한 개선이라기보다 **worst-case thrashing**을 줄인 영향이 크다는 요약이 공유됐다 ([omarsar0](https://x.com/omarsar0/status/2028464607753654711)).
- 프로덕션에서 **SKILL.md 개선**을 위한 Carnegie Mellon 스타일 루프: “log → evaluate → monitor → improve”와 OSS 예시(PR review bot) ([gneubig](https://x.com/gneubig/status/2028576331877822506)).
- **Anthropic-as-coding-org tension**: “배포된 코드의 **80%+**가 Claude Code로 작성된다”는 바이럴 수치와 함께, 속도(speed)가 **reliability regressions**을 동반할 수 있다는 우려가 나왔다 ([GergelyOrosz](https://x.com/GergelyOrosz/status/2028465387570884640)). 대기업 내부의 Claude Code 도입과 “supervision”이 수동 코딩을 대체한다는 논의도 별도로 이어졌다 ([_catwu](https://x.com/_catwu/status/2028603856163426522), [Yuchenj_UW](https://x.com/Yuchenj_UW/status/2028531183932604831)).

---

### Infra + local AI hardware: Apple Neural Engine cracks, Docker/vLLM on macOS, and “AI infrastructure year”

- **Reverse-engineering Apple’s Neural Engine for training**: 문서화되지 않은 API로 **ANE**에서 트랜스포머 학습 루프를 만들었다는(코어 연산은 ANE, 일부 그래디언트는 CPU) 참여도 높은 스레드가 공유됐다. “M4 ANE 6.6 TFLOPS/W vs 0.08 for A100”, “38 TOPS is a lie—real throughput 19 TFLOPS FP16” 같은 수치도 포함됐지만, 메타 포인트는 **온디바이스 학습/미세조정(fine-tuning)** 가능성이 열릴 수 있다는 쪽이었다 ([AmbsdOP](https://x.com/AmbsdOP/status/2028457255968874940), 생태계 메모 [AmbsdOP](https://x.com/AmbsdOP/status/2028507402903986566); 추가 기술 요약 [LiorOnAI](https://x.com/LiorOnAI/status/2028560569952031145)).
- **macOS local serving gets smoother**: Docker Desktop “Model Runner”가 **MLX models** 실행을 지원하고 **OpenAI-compatible API** 워크플로를 제공한다는 소식이 공유됐으며, Apple Silicon 개발 루프에 실용적인 언락으로 묘사됐다 ([Docker](https://x.com/Docker/status/2028470592899354929)).
- **Inference hardware divergence**: GPU와 **Taalas HC**를 대비한 설명이 공유됐는데, GPU는 HBM 스트리밍 + 커널 스케줄링 병목이 있는 반면, ASIC은 mask ROM에 가중치를 넣는 “model-as-hardware” 방식으로 **16–17k tok/s per user**(HC1) 같은 주장이 함께 나왔다. 트레이드오프는 “one chip = one model”로 요약됐다 ([TheTuringPost](https://x.com/TheTuringPost/status/2028458565917360363)).
- **Open-source perf tooling**: AMD가 **rocprof-trace-decoder**(SQTT trace defs)를 오픈소스화해 더 깊은 instruction-level 타이밍 트레이스를 가능하게 했다는 소식이 공유됐고, AMD 트레이싱 인프라가 NVIDIA보다 “better than NVIDIA’s”라는 주장도 언급됐다 ([tinygrad](https://x.com/__tinygrad__/status/2028679089650041069)).
- **AI infra as strategic theme**: Zhipu의 “**2026 is the year of AI infrastructure**”는 슬로건 성격이지만, 신뢰성(reliability)·비용(cost)·툴링(tooling)이 점차 개선 폭이 작아진 모델 품질 향상을 대신해 핵심 신호가 된다는 흐름과 맞물린다는 해석이 나왔다 ([Zai_org](https://x.com/Zai_org/status/2028457036308947393)).

---

### New research + benchmarks: transformer scaling theory, MuP edge cases, CUDA-kernel RL, and “bullshit detection”

- **Transformer scaling theory refresher**: Meta의 “Effective Theory of Wide and Deep Transformers”가 60+페이지 분석으로 재확산됐다. forward/backward 신호 전파, width 스케일링 규칙, 하이퍼파라미터 스케일링, NTK 분석, 옵티마이저(SGD vs AdamW) 동작 등을 다루고 비전/언어 트랜스포머에서 검증했다고 요약됐다 ([TheTuringPost](https://x.com/TheTuringPost/status/2028394922576121946), [arXiv link tweet](https://x.com/TheTuringPost/status/2028394934970315125)).
- **Beyond MuP / Muon stability corner cases**: **Embedding / LM head / RMSNorm** 레이어의 안정성(stability) 지표와, embedding + LM head가 Muon과 “not play well”할 수 있는 이유에 대한 논의가 공유됐다 ([Jianlin_S](https://x.com/Jianlin_S/status/2028434454486950280)).
- **CUDA Agent (ByteDance)**: “컴파일되는 코드”를 넘어 “빠른 코드”로 가는 의미 있는 단계로 널리 공유됐고, 실제 프로파일링 기반 보상으로 **agentic RL**을 수행했다는 요지다. KernelBench SOTA, `torch.compile` 대비 큰 개선, hardest kernels에서 frontier LLM과 경쟁력 있다는 주장이 함께였다 ([HuggingPapers](https://x.com/HuggingPapers/status/2028504440978739428), 심층 스레드 [BoWang87](https://x.com/BoWang87/status/2028599174992949508)).
- **BullshitBench v2**: 100개 신규 문항(코딩/의료/법률/금융/물리) 추가, 70+ 모델 변형 테스트, “reasoning often hurts” 주장, Anthropic 모델 우세 및 OpenAI/Google이 이 벤치마크에서 “not improving”이라는 주장 등이 공유됐다 ([petergostev](https://x.com/petergostev/status/2028492834693677377), 반응 [scaling01](https://x.com/scaling01/status/2028494129710133725)).
- **Scheming eval realism**: “contrived environments”가 scheming 결과를 무효화할 수 있으니 환경 설계를 신중히 하라는 조언이 공유됐다 ([NeelNanda5](https://x.com/NeelNanda5/status/2028600215343943983)).

---

### Agents + product/toolchain releases: repo graphs, Stripe LLM billing proxy, LangChain refresh, Llama.cpp packaging

- **GitNexus (browser-only repo knowledge graph + “graph RAG” via Cypher)**: 리포지토리를 인터랙티브 D3 그래프로 파싱하고, 관계를 임베딩 대신 그래프 트래버설(Cypher)로 질의한다는 구성이 공유됐다. 브라우저 내(Web Workers)에서 돌아가며 embedded **KuzuDB**, MIT 라이선스를 강조했다 ([MillieMarconnni](https://x.com/MillieMarconnni/status/2028436636841996451)).
- **Stripe-style billing for LLMs**: “billing for tokens”을 출시해 모델 선택, 마크업(markup) 설정, **Stripe’s LLM proxy**로 라우팅, 사용량 자동 기록 등을 제공한다는 소식이 공유됐다. “LLM ops”가 표준 SaaS 재무 파이프라인으로 들어가는 신호로 해석됐다 ([miles_matthias](https://x.com/miles_matthias/status/2028515021022548181)).
- **LangChain rebrand / consolidation**: “Meet our final form”으로 웹 존재감을 리런치(relaunch)했다는 소식이 공유됐고, 이는 스펙(spec) 공개라기보다 제품/포지셔닝 신호로 요약됐다 ([LangChain](https://x.com/LangChain/status/2028522092774199731)).
- **llama.cpp distro packaging**: 공식 Debian/Ubuntu 패키지에 대한 피드백 요청이 공유됐고, 소규모지만 로컬 추론(local inference) 툴의 메인스트리밍과 관련된 의미 있는 변화로 언급됐다 ([ggerganov](https://x.com/ggerganov/status/2028505638452531340)).
- **MCP vs “Agent Skills” clarification + Weaviate skills repo**: MCP 서버는 결정적(deterministic) API 인터페이스, 마크다운 “skills”는 행동 가이던스(behavior guidance)라는 구분이 공유됐고, Weaviate가 일반적인 에이전트 툴 통합을 위한 skills 기반 패턴을 공개했다 ([weaviate_io](https://x.com/weaviate_io/status/2028465940963156036)).

---

### US DoW–OpenAI–Anthropic “supply chain risk” saga: contract language, surveillance loopholes, and policy trust boundaries (high-level)

- **Stratechery frames a standoff**: Anthropic vs DoW를 “정당한 우려와 정부 현실 사이의 미스얼라인(misalignment)”으로 프레이밍했다는 요약이 공유됐다 ([stratechery](https://x.com/stratechery/status/2028425096054931921)).
- **Reporting disputes OpenAI’s “red lines” framing**: The Verge가 DoD가 OpenAI가 암시한 방식으로 red lines에 동의하지 않았다고 보도했다는 요약이 공유됐다 ([haydenfield](https://x.com/haydenfield/status/2028481498781790567)). 또한 계약 전문 없이 공개 발언만으로 “집행 가능성(enforceability)”이나 법을 “동결”한다는 주장 등을 검증하기 어렵다는 지적도 이어졌다 ([jeremyphoward](https://x.com/jeremyphoward/status/2028556035183759719)).
- **Sam Altman posts contract amendment language**: 미국인(US persons)에 대한 국내 감시를 “intentional”하게 수행하는 것을 금지(상업적으로 획득한 식별자 포함)하는 문구를 추가했고, 정보기관(예: NSA)은 후속 수정 없이는 제외된다고 했으며, 금요일 발표가 서둘렀음을 인정했다는 요약이 공유됐다 ([sama](https://x.com/sama/status/2028640354912923739), 추가 원칙 포스트 [sama](https://x.com/sama/status/2028642231138353299)).
- **Pushback: “intentional/deliberate” may preserve the classic “incidental collection” loophole**: “intentional/deliberate”라는 문구가 전통적인 “incidental collection” 루프홀을 남길 수 있고, “metadata/hashed identifiers”가 “personal or identifiable” 정의를 우회할 수 있다는 법률 관점의 반론들이 공유됐다. 반복되는 요구는 **독립적 레드팀(legal counsel)**과 가능하다면 **계약 전문 검토**였다 ([j_asminewang](https://x.com/j_asminewang/status/2028648242666496092), [David_Kasten](https://x.com/David_Kasten/status/2028649586349228284), [justanotherlaw](https://x.com/justanotherlaw/status/2028673906870223286), [_NathanCalvin](https://x.com/_NathanCalvin/status/2028674866124083623)).
- **Anthropic safeguards claims**: Anthropic 인접 인물들이 “무제약 helpful-only natsec 모델” 내러티브에 이견을 제기했고, Claude Gov가 추가 학습(training) + safeguards + classifier stack을 포함한다는 주장도 공유됐다 ([sammcallister](https://x.com/sammcallister/status/2028545609003577776)).
- **Policy meta**: 거버넌스(governance)와 계약 의미론(semantic)이 모델 배포의 프로덕션 제약이 되고 있으며, 더 이상 “PR side quests”가 아니라는 엔지니어링 관점의 메타 포인트가 반복됐다. “AI politics fissure…” 프레이밍도 함께 언급됐다 ([deanwball](https://x.com/deanwball/status/2028619280774828114)).

---

### Top tweets (by engagement, technical-focused)

- **Qwen 3.5 Small Model Series launch (0.8B/2B/4B/9B, multimodal, scaled RL, Base models too)** — [@Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2028460046510965160)
- **Reverse-engineered Apple Neural Engine; training loop on ANE** — [@AmbsdOP](https://x.com/AmbsdOP/status/2028457255968874940)
- **Qwen3.5 small models now in Ollama** — [@ollama](https://x.com/ollama/status/2028510184788926567)
- **Sam Altman: DoW contract amendment language re domestic surveillance + intel agency scope** — [@sama](https://x.com/sama/status/2028640354912923739)
- **CUDA Agent: RL for high-performance CUDA kernel generation via profiler-based reward** — [@BoWang87](https://x.com/BoWang87/status/2028599174992949508)
- **“80%+ of code deployed is written by Claude Code” + reliability concern** — [@GergelyOrosz](https://x.com/GergelyOrosz/status/2028465387570884640)
- **GitNexus: in-browser repo → knowledge graph + Cypher graph-RAG agent** — [@MillieMarconnni](https://x.com/MillieMarconnni/status/2028436636841996451)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

### Qwen 3.5 Model Releases and Benchmarks

- **[Qwen 2.5 -> 3 -> 3.5, smallest models. Incredible improvement over the generations.](https://www.reddit.com/r/LocalLLaMA/comments/1rjd4pv/qwen_25_3_35_smallest_models_incredible/)** (Activity: 298): **Qwen 3.5**는 특히 `0.8B` 같은 소형 모델에서 효율(efficiency) 측면의 큰 진전을 보여준다는 요약이다. 비전 인코더(vision encoder)를 포함해 코어 언어 모델은 더 작을 가능성이 있는데도, 이전 세대 대비 성능 개선이 크다고 한다. `4B` 모델이 과거 `9B` 모델을 앞서고, `llama.cpp`로 `128k` 컨텍스트(context)에서 `60 tokens/second`를 달성했다는 사용자 보고도 언급됐다(로컬 배포 관점에서 의미). 다만 출력 정확도(accuracy)와 사실 오류에 대한 논쟁도 있어, 팩트체크 필요성이 강조됐다.
- ‘c64z86’는 작은 양자화(quantized) 모델 성능을 강조하며, 4B가 2년 전 9B 모델을 앞선다고 언급했다. `llama.cpp`로 128k 컨텍스트에서 초당 60토큰을 얻었고, 다른 셋업 대비 느려 보일 수 있지만 로컬 실행 관점에서 인상적이라고 했다.
- ‘Maximum_Low6844’는 Qwen 3.5가 항공기 엔진 관련 사실을 틀린 사례를 들어, 출력의 사실 오류를 지적하며 팩트체크 필요성을 강조했다.
- ‘ninjasaid13’는 Qwen 3.5가 간결함(brevity)이 부족하고, 이전 모델 대비 불필요하게 두 배 길게 답하는 경향이 있다고 비판했다.

- **[Breaking : The small qwen3.5 models have been dropped](https://www.reddit.com/r/LocalLLaMA/comments/1rirlau/breaking_the_small_qwen35_models_have_been_dropped/)** (Activity: 2091): 이미지와 글은 `0.8B`~`35B` 범위의 소형 **Qwen3.5 models**의 공개(혹은 중단) 이슈를 다루며, 연산 자원이 제한된 사용자에게 의미가 큰 모델군이라는 반응이 요약됐다. `0.8B` 같은 변형의 양자화(quantization) 시도도 언급되며, Hugging Face 등에서 여러 양자화가 빠르게 공유되는 분위기였다. 또한 “overthink” 문제를 완화하기 위해 ‘thinking’을 끄고 온도(temperature)를 0.45 정도로 두라는 템플릿 조정 팁도 함께 언급됐다.
- 9B 모델이 GPT-OSS 20B와 120B 사이의 성능 포지션이라는 언급이 있고, ‘potato GPUs’ 같은 약한 하드웨어 사용자에게 매력적 옵션이라는 반응이 요약됐다.
- 한 사용자가 0.8B 변형의 양자화를 작업 중이며, Hugging Face에 이미 다양한 양자화가 올라온다는 언급이 있었다.
- Qwen3.5가 “overthink”로 정답을 스스로 망칠 수 있어, 프롬프트 템플릿에서 ‘thinking’을 비활성화하고 temperature를 0.45로 설정하라는 권장 사항이 공유됐다(특히 비전 작업에서 개선된다는 주장).

- **[Qwen 3.5 27b: a testament to the transformer architecture](https://www.reddit.com/r/LocalLLaMA/comments/1rj6m71/qwen_35_27b_a_testament_to_the_transformer/)** (Activity: 265): **Qwen 3.5 27b**가 **R1 0528**에 필적하는 추론(reasoning)·지식 테스트 성능을 보인다는 요약이 공유됐다. 또한 전통적 트랜스포머(full transformer)가 아니라 `75%` 레이어에서 **Gated DeltaNet linear attention**을 쓰는 하이브리드 구조라는 점이 강조됐다. 1년 전 `70b`급 모델과 맞먹는 작업을 더 작은 모델이, 단일 소비자 GPU에서 돌릴 수 있을 정도로 만든 효율 개선의 신호로 해석됐다. 코딩(coding) 파인튜닝(fine-tuning) 기반으로도 기대가 크다는 요약이 있었다.
- Qwen 3.5 27B는 전통적 트랜스포머를 전부 쓰지 않고, 75% 레이어에서 Gated DeltaNet linear attention을 채택했다는 점이 구조적 혁신으로 언급됐다.
- R1 0528급과 유사한 작업을, 단일 소비자 GPU에서 돌릴 수 있는 크기에서 달성한다는 점이 “효율의 속도”를 보여준다는 논지로 요약됐다.
- 베이스(base) 모델이 좋아 코딩 특화 파인튜닝을 기다린다는 반응도 함께였다.

- **[Running Qwen 3.5 0.8B locally in the browser on WebGPU w/ Transformers.js](https://www.reddit.com/r/LocalLLaMA/comments/1rizodv/running_qwen_35_08b_locally_in_the_browser_on/)** (Activity: 367): Qwen이 `0.8B`~`9B`의 소형 멀티모달 모델(Qwen 3.5 Small)을 공개했고, `0.8B`를 **WebGPU** + **Transformers.js**로 브라우저에서 로컬 실행하는 데모가 소개됐다는 요약이다. 핵심 병목은 비전 인코더(vision encoder)라고 하며, 그래도 인브라우저(in-browser) 실행 가능성을 보여줬다는 포인트가 강조됐다. Hugging Face에 [Qwen 3.5 collection](https://huggingface.co/collections/Qwen/qwen35)과 [WebGPU demo](https://huggingface.co/spaces/webml-community/Qwen3.5-0.8B-WebGPU)가 소개됐다. 한 댓글은 WebGPU 비전 인코딩 병목을 언급하며, 브라우저에서도 `llama.cpp WASM`의 `q4 GGUF`가 VRAM thrashing 없이 더 나은 처리량(throughput)을 준다는 대안을 제시했다.
- **tom_mathews**는 WebGPU 비전 인코딩이 병목이라고 하며, `llama.cpp WASM`의 `q4 GGUF`를 대안으로 제안했다(더 좋은 처리량과 VRAM thrashing 회피 주장).
- **MartinByde**는 “start” 버튼이 동작하지 않는 등 UI 버그로 보이는 사용성 문제를 보고했다.
- **skinnyjoints**는 비디오 입력이 아니라, 프롬프트 제출 시점 화면 스크린샷을 캡처하는 방식인지 확인을 요청했다.

- **[Visualizing All Qwen 3.5 vs Qwen 3 Benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1rivckt/visualizing_all_qwen_35_vs_qwen_3_benchmarks/)** (Activity: 611): Qwen 3.5와 Qwen 3의 벤치마크를 시각화한 막대 차트 이미지가 공유됐고, Knowledge & STEM, Instruction Following, Long Context, Math, Coding, General Agent, Multilingualism 등 카테고리 비교가 목적이라고 요약됐다. 소형 모델 일부는 데이터가 비어 있고, 원시 데이터는 [Google Sheet](https://docs.google.com/spreadsheets/d/1A5jmS7rDJe114qhRXo8CLEB3csKaFnNKsUdeCkbx_gM/edit?usp=sharing)로 제공된다고 한다. 차트 해석이 어렵거나 품질이 낮다는 비판도 있었지만, 9B dense 모델이 훨씬 큰 122B A10B 모델과 근접 경쟁한다는 관찰도 함께였다.
- this-just_in은 Qwen 3.5 9B dense가 122B A10B와 직접 경쟁하는 수준으로 보인다고 언급했다(효율성 신호로 해석).
- tmvr는 Qwen 3.5 35B A3B가 Qwen 3 235B A22B를 모든 테스트에서 이기는 것으로 보이는 점을 들어, 벤치마크 신뢰성에 의문을 제기했다.

- **[Qwen/Qwen3.5-9B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1rirlyb/qwenqwen359b_hugging_face/)** (Activity: 726): [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-9B-GGUF)에 올라온 Qwen3.5-9B를 두고, 비전 인코더를 포함한 **causal language model**이며 컨텍스트 길이(context length)가 최대 `1,010,000 tokens`라는 요약이 공유됐다. **Gated Delta Networks** 및 **Gated Attention** 기반의 하이브리드 구조, `201 languages` 지원, `32 layers`, hidden dim `4096`, token embedding `248320` 등 세부가 함께 언급됐다. `16GB` GPU 사용자에게도 로컬 배포 가능성이 매력 포인트로 언급됐다.

- **[Qwen3.5 9B and 4B benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1rirtyy/qwen35_9b_and_4b_benchmarks/)** (Activity: 368): `9B` 및 `4B` Qwen3.5 벤치마크 이미지가 공유됐고, IFBench, GPQA Diamond 등에서 `9B`가 특정 항목에서 `30B`/`80B` 같은 더 큰 모델을 앞선다는 요약이 있었다. 작은 모델이 더 큰 모델을 이기는 이유로 압축(compression)·벡터화(vectorization) 같은 최적화 가설이 거론됐다.
- ‘diamond’나 일반 지식에서 Qwen3.5 9B가 과거 30B/80B를 앞선다는 주장에 놀라며, 효율 개선 원인을 두고 추측이 이어졌다.
- 27B를 q3로 돌리는 것과 9B를 Q8로 돌리는 것 중 무엇이 효율적인지 같은, 모델 크기·양자화 레벨·성능 트레이드오프 논의가 이어졌다.
- Qwen3.5 4B와 Qwen3 4B 2507의 직접 비교가 부족하다는 아쉬움도 언급됐다.

- **[Breaking : Today Qwen 3.5 small](https://www.reddit.com/r/LocalLLaMA/comments/1ri2irg/breaking_today_qwen_35_small/)** (Activity: 2078): Qwen 3.5가 `9B`/`4B`/`2B`/`0.8B` 오픈 모델 4종을 공개했다는 요약으로, 다양한 연산 자원/용도에 맞춘 라인업이 긍정적으로 언급됐다. 작은 크기에서도 특정 작업에서 경쟁력이 있을 수 있다는 기대, 그리고 GPU 투자 농담 등이 함께였다.
- GoranjeWasHere는 9B가 35B/27B의 성과를 바탕으로 다른 소형 모델을 이길 수 있다는 기대를 언급했다.
- suicidaleggroll은 speculative decoding 같은 기법 관점에서 Qwen 구조가 유리할 수 있다는 가능성을 언급했다.
- dryadofelysium은 소형 Qwen이 공식적으로 정말 나온 게 맞는지 정보가 불명확하다는 의문을 제기했다.

### Local LLM Implementations and Hardware Considerations

- **[13 months since the DeepSeek moment, how far have we gone running models locally?](https://www.reddit.com/r/LocalLLaMA/comments/1ri635s/13_months_since_the_deepseek_moment_how_far_have/)** (Activity: 518): “Artificial Analysis” 막대 차트 이미지가 로컬 실행(local run) 성능의 13개월 진전을 비교한다고 소개됐고, $600→$6000 비용 진행처럼 투자 규모가 커졌다는 요약이 있었다. $600 미니PC로 Qwen3-27B를 Q4로 돌릴 수 있다는 주장과 함께, “Intelligence Index”의 타당성에 대한 논쟁이 이어졌다.
- ‘Intelligence Index’는 12개 벤치마크(MMLU Pro, GPQA Diamond 등)의 평균일 뿐 “지능”의 큐레이션 지표가 아니라는 설명이 공유됐고, 오해로 비교가 왜곡된다는 지적이 있었다.
- 27B가 STEM 작업에서 DeepSeek v3.2급일 수 있다는 주장도 있었지만, 창작 글쓰기 같은 영역에서는 약할 수 있다는 식으로 “강점 영역” 논의가 이어졌다.
- ‘benchmaxing’(현대 벤치마크에 맞춘 최적화) 개념이 언급되며, 최신 모델의 점수가 곧 범용 능력의 우위는 아닐 수 있다는 의견도 있었다.

- **[Reverse engineered Apple Neural Engine(ANE) to train Microgpt](https://www.reddit.com/r/LocalLLaMA/comments/1rhx5pc/reverse_engineered_apple_neural_engineane_to/)** (Activity: 817): Apple Neural Engine(ANE)을 역공학해 110M 파라미터 모델 Microgpt를 학습시키려는 프로젝트를 소개하며, CoreML을 우회해 private API로 파이프라인을 만들었다는 요약이다. `38 TFLOPS`(INT8), `2.8 W`에서 `6.6 TFLOPS/watt` 같은 효율 수치가 언급됐고, 단일 칩으로 대형 모델 학습은 어렵지만 클러스터(cluster) 가능성도 제시됐다. 프로젝트는 WIP이며 [GitHub](https://github.com/maderix/ANE)에 리소스/벤치마크를 공유한다고 한다.
- ANE의 `6.6 TFLOPS/watt`가 H100 대비 매우 효율적이라는 반응이 있었고, 스케줄링(graph scheduling) 개선 시 M4 Mini 클러스터가 전력 효율 학습 셋업이 될 수 있다는 기대가 언급됐다.
- `nanochat-rs-ternary`에 역공학 ANE를 붙이자는 제안(AneQkvKernel, AneFfnUpKernel 등)도 있었다.
- Tinygrad(geohotz)의 역공학과 유사한지에 대한 질문 등도 이어졌다.

### Less Technical AI Subreddit Recap

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude and Anthropic Military Involvement

- **[US Treasury is terminating all use of Anthropic](https://www.reddit.com/r/singularity/comments/1riyzc1/us_treasury_is_terminating_all_use_of_anthropic/)** (Activity: 1614): 가상의 재무장관 Scott Bessent가 대통령 지시에 따라 Anthropic 사용을 종료한다고 발표하는 밈 이미지가 공유됐고, 국가 안보·민간기업 영향력 같은 논점을 풍자하는 맥락으로 요약됐다. 댓글에서는 시나리오에 대한 회의/불신과 정치적 수사에 대한 비판적 반응이 언급됐다.

- **[Anthropic’s Custom Claude Model For The Pentagon Is 1-2 Generations Ahead Of The Consumer Model](https://www.reddit.com/r/singularity/comments/1rhqu1m/anthropics_custom_claude_model_for_the_pentagon/)** (Activity: 2290): **Anthropic**이 **Pentagon**용 커스텀 Claude를 만들었고 소비자 모델보다 1~2세대 앞선다는 주장(분류된 클라우드, 전용 인프라, autonomous strategic reasoning 등)이 소개됐다는 요약이다. 4개월마다 컴퓨트가 2배라는 주장, Defense Production Act 언급 등이 함께였으며, [Source](https://youtu.be/MPTNHrq_4LU?si=2gVRoGCAC7msi30C) 링크가 포함됐다. 다만 구체적 근거 부족을 지적하는 회의론과, 위성 이미지 분석 같은 도메인 파인튜닝 가능성 등이 함께 언급됐다.
- Pentagon Claude가 위성 이미지 등 군사 도메인에 맞춰 파인튜닝됐을 수 있다는 추측이 언급됐다.
- 내부 모델이 더 앞설 수는 있지만 제품화/레드팀(red-teaming)이 충분치 않을 수 있다는 회의적 댓글도 요약됐다.
- ‘finetuned sonnet 4.5’ 같은 구체적 추정도 언급됐지만 확정적 근거는 없다는 분위기였다.

- **[Claude hits No. 1 on App Store as ChatGPT users defect in show of support for Anthropic’s Pentagon stance](https://www.reddit.com/r/OpenAI/comments/1ri2ly4/claude_hits_no_1_on_app_store_as_chatgpt_users/)** (Activity: 1431): **Anthropic**의 **Claude**가 앱스토어 1위로 올랐고, **ChatGPT** 사용자 이동이 있었다는 보도가 공유됐다는 요약이다. 이유로 Anthropic의 Pentagon 관여 여부에 대한 인식 차이가 언급됐지만, Claude에는 이미지 생성 기능이 없어(ChatGPT의 주요 유즈케이스) 한계가 있다는 댓글도 함께였다. 지역별 순위 차이 등으로 “일시적 현상일 수 있다”는 반응도 언급됐다.

- **[Claude’s extended thinking found out about Iran in real time](https://www.reddit.com/r/ClaudeAI/comments/1ribnke/claudes_extended_thinking_found_out_about_iran_in/)** (Activity: 5558): Claude의 extended thinking이 이란 공습 같은 실시간 사건을 “실시간으로 알아챘다”는 이미지가 공유됐고, 실시간 데이터 반영 가능성에 대한 인상과 함께, ‘Whoa’, ‘Holy shit’ 같은 비격식 반응이 언급됐다. 또한 AI가 다양한 주제를 동시에 다룰 수 있다는 농담(두바이 테니스 경기 vs 지정학)이 함께였다.
- Claude가 실시간 사건을 반영해 예측/조언이 바뀔 수 있다는 사용자 경험이 언급됐다.
- 훈련 데이터가 2025라고 했다가 최신 뉴스 접근을 묻자 응답을 조정했다는 경험담 등도 공유됐다.
- 게임이론/전략 분석을 Claude로 했다는 경험담도 언급됐다.

### OpenAI and ChatGPT Backlash

- **[Damnnnn!](https://www.reddit.com/r/singularity/comments/1rjc5to/damnnnn/)** (Activity: 1049): TechCrunch를 인용한 밈 형태로, DoD 딜 이후 ChatGPT 언인스톨이 `295%` 증가했다는 수치가 맥락 없이 제시됐고, 베이스라인이 없으면 오해 소지가 있다는 회의가 댓글에 있었다는 요약이다. 또한 구독 취소 손실과 DoD 딜 수익의 상쇄 가능성, 프라이버시 우려도 함께 언급됐다.
- mazdarx2001은 100만 명이 월 $20 구독을 취소하면 월 $20M 손실이라는 계산을 들며, DoD 딜이 이를 상쇄할 수 있다는 관점을 언급했다.
- Orangeshoeman은 프라이버시 민감 사용자들이 OpenAI를 피할 수 있어 B2B 매출에도 악영향이 있을 수 있다는 우려를 언급했다.
- Glittering-Neck-2505는 Anthropic도 군사 작전에 Claude가 연루됐다는 주장에는 왜 덜 비판적이냐는 식의 ‘반응의 불일치’를 지적했다.

- **[OpenAI In just a couple of years: Non-profit —> For-profit —> Dept of War](https://www.reddit.com/r/singularity/comments/1rhqwkj/openai_in_just_a_couple_of_years_nonprofit/)** (Activity: 2397): OpenAI가 비영리→영리→군사 계약으로 빠르게 이동했다는 밈이 공유됐고, “I’m doing this because I love it” 같은 아이러니로 원래 미션과 현재 행보의 괴리를 풍자한다는 요약이다. 댓글에서는 윤리/상업화에 대한 회의가 이어졌다고 요약됐다.

- **[ChatGPT Uninstalls Surge 295% After OpenAI’s DoD Deal Sparks Backlash](https://www.reddit.com/r/ChatGPT/comments/1rjfipu/chatgpt_uninstalls_surge_295_after_openais_dod/)** (Activity: 584): OpenAI의 미 국방부 계약 이후 48시간 내 ChatGPT 모바일 앱 언인스톨이 `295%` 증가했고, 경쟁사 **Claude** 다운로드가 늘었다는 요약이 공유됐다. 정부 계약이 AI 기업에 평판 리스크(reputational risk)를 만들 수 있다는 점이 강조됐다.

- **[Goodbye ChatGPT](https://www.reddit.com/r/ChatGPT/comments/1rizur4/goodbye_chatgpt/)** (Activity: 2443): 윤리적 이유로 ChatGPT(무료 포함) 사용을 중단하겠다는 사용자 선언 글이 공유됐고, 댓글은 지지/회의가 엇갈렸다는 요약이다.
- Turbulent-Apple2911은 무료 버전 품질 하락과 Pentagon 딜을 윤리 문제로 함께 언급했다.
- plazebology는 OpenAI의 윤리 논란이 오래전부터 있었다는 식의 냉소를 언급했다.

### New Model Releases and Benchmarks

- **[Deepseek V4 - All Leaks and Infos for the Release Day - Not Verified!](https://www.reddit.com/r/DeepSeek/comments/1ridmnm/deepseek_v4_all_leaks_and_infos_for_the_release/)** (Activity: 628): **DeepSeek V4**가 2026년 3월 3일 전후로 출시될 수 있다는 루머를 모아 정리한 글로, 파라미터가 `1 trillion` 수준, 컨텍스트가 `1 million token`이라는 주장, **Engram Conditional Memory**, **Manifold-Constrained Hyper-Connections** 같은 아키텍처 요소가 언급됐다고 요약됐다. 텍스트/이미지/비디오/오디오 입력을 처리하는 멀티모달(multimodal) 주장도 있지만, 생성까지 가능한지에 대한 회의가 있었고, 학습이 Nvidia가 아니라 **Huawei Ascend**/**Cambricon** 최적화라는 루머도 포함됐다. 입력 비용이 `$0.14/M Tokens`라는 가격 주장과, 검열(censorship) 우려도 함께였다.
- ‘multimodal’은 입력 처리이지 생성까지 보장하진 않으며, GPT-4o나 Qwen 3 Omni 같은 ‘omnimodal’과 대비된다는 설명이 댓글에서 언급됐다.
- Engram 기술이 장문 컨텍스트 유지에 유리해 Gemini 3.1 Pro를 넘길 수 있다는 기대와, 여전히 회의적인 반응이 병존했다.
- 가격 경쟁력과 과도한 검열이 창작 글쓰기를 해칠 수 있다는 우려가 언급됐다.

---

## AI Discord Recap

A summary of Summaries of Summaries by Gemini 3.1 Pro Preview Nov-18

### Defense Contracts and Model Wars: OpenAI Steps In as Pentagon Bans Anthropic

- **Department of War Designates Anthropic a Supply Chain Risk**: Pentagon이 **Anthropic**을 *supply-chain risk*로 지정하고, 군사 계약자들이 Anthropic 모델을 쓰지 못하게 했다는 서사가 공유됐다. 회사가 무제한 접근을 허용하지 않아 이런 조치가 나왔고, **Palantir** 같은 계약자에 문제가 될 수 있다는 논의가 이어졌다고 요약됐다. [A post on X](https://xcancel.com/secwar/status/2027507717469049070?s=46&t=FlpzvQFmjnd0z3HkNeNT1A)에서 6개월 단계적 종료(phase-out) 같은 디테일이 논의됐다고 한다.
- **OpenAI Inks Classified Deal with the Pentagon**: **OpenAI**가 Anthropic 금지 이후 분류 환경(classified environments)에 고급 AI 시스템을 배포하는 합의를 확보했고, 이전 딜보다 더 엄격한 **guardrails**를 내세웠다는 요약이다. 세부는 [Our agreement with the Department of War](https://openai.com/index/our-agreement-with-the-department-of-war/)에 언급됐고, Sam Altman이 [clarified on X](https://xcancel.com/sama/status/2028640354912923739?s=46&t=_hz7_TqpYWiUUE4FPGb-5Q)에서 미국인에 대한 국내 감시를 엄격히 금지한다고 설명했다는 요약이 포함됐다.
- **Moonshot Distillation Attack Induces Identity Crisis in Claude**: **Moonshot AI**가 대규모 증류(distillation) 공격으로 **Kimi**를 학습시켰고, 그 과정에서 **Claude Sonnet 4.6**가 정체성 혼란을 겪어 중국어로 자신이 **DeepSeek**라고 말하기 시작했다는 서사가 공유됐다. [Substack article](https://parthsharmaai.substack.com/p/i-caught-kimi-having-an-identity?r=6x2hdy&utm_campaign=post&utm_medium=web&triedRedirect=true)에서 강도 높은 학습이 모델의 원래 정체성을 “잊게” 만들었을 가능성을 다뤘다고 요약됐다.

### Qwen 3.5 Series Dominates Local Hardware and Open Benchmarks

- **Qwen 3.5 27B Dethrones Massive Competitors**: ****[Qwen3.5-27B](https://huggingface.co/models?search=Qwen3.5-27B)가 더 큰 **112B** 모델 및 **Minimax 2.5**를 복잡한 코딩 시나리오에서 이긴다는 커뮤니티 반응이 공유됐고, 에이전트(agentic) 역할·임베디드 게임 생성에서 강하다는 벤치마크가 언급됐다.
- **Mac Mini M4 Users Squeeze Huge Local Models**: 사용자들이 ********[testing Qwen 3.5 35B on M4 Mac Minis](https://link.to.example)하며 **32GB** RAM에 맞추기 위한 컨텍스트 트렁케이션(truncation)을 논의한다는 요약이다. 최적화된 unsloth 변형인 ****[Qwen3.5-35B-A3B-abliterated](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF)가 강력한 로컬 GPU에 분산 시 로직/코드 작업에서 매우 빠르다는 반응이 언급됐다.
- **Alibaba Drops Qwen 3.5 Small Series with Native Multimodal**: Alibaba가 `0.8B`~`9B` 범위의 **Qwen 3.5 Small Model Series**를 [Hugging Face](https://huggingface.co/Qwen)에 공개했고, [this tweet](https://xcancel.com/Alibaba_Qwen/status/2028460046510965160)로 발표됐다는 요약이다. 또한 초기 unsloth GGUF 릴리스에서 강한 양자화된 *ssm_alpha* 가중치에 핫픽스(hotfix)가 필요했다는 개발자 메모가 언급됐다.

### Next-Gen Systems, Hardware Splits, and Biological Compute

- **Google’s Static Framework Supercharges Retrieval by 948x**: Google AI가 **Static**이라는 희소 행렬(sparse matrix) 프레임워크를 공개했고, **LLM-based generative retrieval**의 constrained decoding을 **948x** 빠르게 한다는 주장이 공유됐다. [technical blog post](https://www.marktechpost.com/2026/03/01/google-ai-introduces-static-a-sparse-matrix-framework-delivering-948x-faster-constrained-decoding-for-llm-based-generative-retrieval/)는 희소 행렬 연산으로 디코딩 속도를 크게 가속하는 방식을 설명한다고 요약됐다.
- **Nvidia Blackwell Splits Architectures Between Datacenter and RTX**: NVIDIA가 세대별로 데이터센터와 RTX 소비자 라인의 아키텍처를 분리하며, **Blackwell RTX**(GeForce 50x0, RTX Pro)를 **Compute Capability 12.0**로 제한하고 `tcgen05`, `DPX` 같은 **CC 10.0** 기능을 비활성화했다는 요약이 공유됐다. [NVIDIA Developer Blog](https://developer.nvidia.com/blog/nvidia-blackwell-and-nvidia-cuda-12-9-introduce-family-specific-architecture-features/)는 데이터센터 카드는 AI에, 소비자 카드는 실시간 그래픽에 최적화하는 의도라고 설명했다고 한다.
- **Living Neurons Play DOOM on Silicon**: Cortical Labs가 **800,000**개의 인간/쥐 뉴런을 실리콘과 결합해 DOOM과 Pong을 플레이하는 ‘DishBrain’을 만들었다는 소식이 공유됐다. [post on X](https://x.com/scitechera/status/2028010532356374754)에서 실험이 소개됐고, 높은 인용(citation) 수로도 언급됐다.

### Agent Orchestration, Protocols, and Prompting Paradigms

- **Anthropic Murders Prompt Engineering with Skills Guide**: Anthropic이 30페이지짜리 [Complete Guide to Building Skill for Claude](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)를 공개해, 장황한 프롬프트(prompt) 대신 구조화된 **Skills**와 실행 레이어로 개발자 방향성을 바꾼다는 요약이 공유됐다. progressive disclosure로 컨텍스트 비대화(context bloat)를 줄인다는 메시지가 강조됐다.
- **OpenClaw Persona Plugin Maximizes Schizophrenic Agents**: **OpenClaw** 사용자가 대화 중 에이전트 페르소나(persona)를 동적으로 교체하는 플러그인을 만들었고, 로컬 파일 접근과 함께 자기토론(self-debate) 형태를 만든다는 요약이 공유됐다. 이를 *#shizomaxxing* 같은 표현으로 묘사했다고 한다.
- **London Prepares for Agent Client Protocol (ACP) Showdown**: 런던에서 **Agent Client Protocol (ACP)** 관련 이벤트가 예정되어 있고, **Zed Industries**와 **Jetbrains** 창립자/관계자와 함께 ACP가 MCP 대비 코딩 에이전트 하네스(harness)를 쉽게 교체하게 해준다는 논의를 한다는 요약이다. 등록 링크는 [Luma](https://luma.com/4hs6hs36).

### Training Mechanics: Fast RL, Custom Compilers, and Text-to-LoRA

- **Databricks OAPL Slays GRPO Training Costs**: Databricks가 **OAPL**(Optimal Advantage-based Policy Optimization with Lagged Inference)을 공개했고, **GRPO** 대비 LLM 추론(reasoning) 스킬을 **3x** 더 빠르게 학습시킨다는 요약이 공유됐다. 한 연구자가 [this X thread](https://x.com/g_k_swamy/status/2027450376593805746?s=12)에서 효율 개선과 인프라 단순화를 설명했다고 한다.
- **Hardware-Trained CUDA Agent Smokes Torch.Compile**: 실제 하드웨어에서 학습된 RL 에이전트가 표준 커널에서 `torch.compile` 대비 약 **2x** 성능을 내고, 엄격한 벤치마크에서 **Claude Opus 4.5**를 앞섰다는 주장(논문 링크 포함)이 공유됐다 ([this paper](https://arxiv.org/abs/2602.24286)). 반면 커널 공개를 안 했고, 결과 재현에 과도한 GPU 자원이 필요하다는 비판도 언급됐다.
- **Sakana AI Unveils Five-Day Text-to-LoRA Model**: **Sakana AI**가 프롬프트로 LoRA를 생성하는 [text-to-lora model](https://huggingface.co/SakanaAI/text-to-lora/tree/main)과 [code](https://github.com/SakanaAI/text-to-lora)를 공개했다는 요약이다. 단일 **H100 GPU**로 약 **5 days** 연속 학습이 필요하다는 설명이 포함됐고, 커뮤니티의 관심이 커졌다고 한다.
