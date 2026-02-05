---
title: "OpenAI, GPT‑5.2·GPT‑5.2‑Codex 40% 가속"
summary:
  - "OpenAI, GPT‑5.2·GPT‑5.2‑Codex 40% 가속"
  - "Alibaba, Qwen3‑Coder‑Next 80B@3B 공개"
  - "Zhipu, GLM‑OCR 0.9B 출시와 day‑0 지원"
  - "Anthropic, Claude Agent SDK의 Xcode 통합"
  - "LangChain, 에이전트 트레이스·평가 가이드 제시"
date: 2026-02-02
originalUrl: "https://news.smol.ai/issues/26-02-02-context-graphs/"
hasHeadline: false
headline: "OpenAI, GPT‑5.2·GPT‑5.2‑Codex 40% 가속"
tags:
  - OpenAI
  - Codex
  - Qwen
  - vLLM
  - LangChain
isFeatured: false
---

## 헤드라인: OpenAI, GPT‑5.2·GPT‑5.2‑Codex 40% 가속

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [https://news.smol.ai/](https://news.smol.ai/) · [@smol_ai](https://x.com/Smol_AI)

조용한 날에는 특정 하루에만 튀지 않더라도, AI 엔지니어에게 더 넓은 역사적 의미가 있을 만한 “느리게 타오르는(slow-burn)” 이슈를 더 길게 다루겠다는 정책이다. 오늘 Lightning Pod(유튜브 전용 짧은 포맷)는 Context Graphs를 주제로 하며, 이는 [Jaya Gupta launched late December on X](https://x.com/JayaGup10/status/2003525933534179480) 이후 전 게스트였던 [Dharmesh Shah](http://latent.space/p/dharmesh) 같은 인물에게도 영향을 줬다(그는 [reservations](https://simple.ai/p/what-are-context-graphs)도 표했다). 두 저자와 이를 두고 대화했다:

[Play](https://youtube.com/watch?v=zP8P7hJXwE0)

이건 전형적인 thoughtleading(Thought Leadership) 101이지만 확실히 유용하다. 데이터/컨텍스트 엔지니어링 제품을 만드는 창업자라면 “Context Graphs”라는 용어를 만든 사람을 cap table에 올려두었다고 말하고 싶어질 테니 말이다. 다만 문제는 글이(제목에서 드러나듯) 약속하는 바가 큰 반면, 구체적 처방(prescriptive)이 부족하다는 점이다.

또 [Recently](https://x.com/cognition/status/2017057457332506846)에는 Cursor의 [Agent Trace initiative](https://agent-trace.dev/)를 코드 영역의 “Context Graph”로 설명하기도 했다.

이는 특정 도메인(코딩 에이전트)에 대해, 기업들 사이에서 합의된 형태로 나온 첫 “컨텍스트 그래프(context graph)” 실질 사양(specification)이다. 실제로 지속력이 있을지는 아직 두고 볼 일이며, 이는 주로 1) 에이전트 성능에서의 명확한 개선이 입증되는지, 2) 이를 지원하라는 고객 압력이 생기는지에 달려 있다. 원리적으로는(“데이터 메쉬(data mesh)” 전반에 흩어진 의사결정 트레이스(trace), 예외(exceptions), 선례(precedents)를 LLM 컨텍스트로 끌어오는 것) 매력적이지만, 결국 디테일이 관건이다.

---

## AI Twitter Recap

### Zhipu AI의 GLM‑OCR 출시(0.9B)와 day‑0 배포 지원

- **GLM‑OCR (multimodal OCR for complex documents)**: Zhipu가 복잡 문서(표, 수식, 정보 추출, 난잡한 레이아웃) 이해를 위한 경량·배포형 **0.9B** 모델 **GLM‑OCR**를 공개했다. OmniDocBench v1.5에서 **#1 (94.62)**를 주장했고, 저지연/고동시성 친화도 강조했다. 에코시스템 “day‑0 지원”으로 [@lmsysorg](https://twitter.com/lmsysorg/status/2018521181146751486)(SGLang 통합 + PR/cookbook 링크)와 [@vllm_project](https://twitter.com/vllm_project/status/2018582480518091083)(vLLM day‑0 지원) 발표가 있었고, 배포 마케팅은 [@novita_labs](https://twitter.com/novita_labs/status/2018565896013574225)에서 확인됐다.
- **Local-first availability**: Ollama가 즉시 로컬 풀(local pull)과 API 사용(“터미널로 이미지를 드래그앤드롭”, JSON 형식 출력)을 지원해 오프라인 실행이 쉬워졌다는 내용이 공유됐다: [@ollama](https://twitter.com/ollama/status/2018525802057396411) 및 라이브러리 링크 [@ollama](https://twitter.com/ollama/status/2018525804733575492). 커뮤니티 비교에서는 PaddleOCR/DeepSeek OCR 대비 품질이 강하다는 주장도 있었다: [@bdsqlsz](https://twitter.com/bdsqlsz/status/2018663915404841212). LlamaIndex는 벤치마크에서의 대체(기존 1위 모델 대비 50–100% 빠르다는 주장)와 평가(evals) 통합 진행을 강조했다: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2018713059359899729).

### 에이전트 코딩 모델 & 하네스: Qwen3‑Coder‑Next (80B@3B)와 “skills/MCP” 수렴

- **Qwen3‑Coder‑Next**: Alibaba가 오픈 웨이트(open-weight) **80B MoE**(활성 **3B**) **Qwen3‑Coder‑Next**를 공개했다. 코딩 에이전트 + 로컬 개발에 초점을 맞췄고, **256K 컨텍스트**, **800K 검증 가능한(verifiable) 태스크 + 실행 가능한 환경**으로 학습했다고 했다. SWE‑Agent 스캐폴드(scaffold)에서 **SWE‑Bench Verified >70%**를 주장: [@Alibaba_Qwen](https://twitter.com/Alibaba_Qwen/status/2018718453570707465) 및 벤치마크 강조 [@Alibaba_Qwen](https://twitter.com/Alibaba_Qwen/status/2018719026558664987). 주변 요약/코멘트로는 [@UnslothAI](https://twitter.com/UnslothAI/status/2018718997584474191)(메모리 풋프린트 + GGUF 가이드), 장문 컨텍스트 어텐션 선택(예: “Gated DeltaNet”) 논의 [@eliebakouch](https://twitter.com/eliebakouch/status/2018730622358073384) 등이 있었다. vLLM은 **vLLM 0.15.0**에서 day‑0 지원을 발표: [@vllm_project](https://twitter.com/vllm_project/status/2018742511502856568).
- **Open Coding Agents ecosystem (Ai2)**: Allen AI가 온디바이스 친화 코딩 모델 **SERA‑14B**와 원시 트래젝터리(raw trajectories) + 검증 메타데이터를 포함한 오픈 데이터셋을 발표: [@allen_ai](https://twitter.com/allen_ai/status/2018741177734910166) 및 스레드 포인터 [@ethnlshn](https://twitter.com/ethnlshn/status/2018746924803969317).
- **Harness > model (recurring theme)**: 에이전트의 레버리지는 모델 IQ뿐 아니라 권한(permissions), 메모리(memory), 워크플로(workflows), 되돌리기(reversibility) 같은 **하네스(harness)**에 더 있다는 관점이 반복적으로 등장: [@sarahmsachs](https://twitter.com/sarahmsachs/status/2018720637691572634).
- **Agent Client Protocol (ACP)**: Gemini CLI / Claude Code / Codex CLI / OpenClaw 간 에이전트↔에디터 통신을 JSON‑RPC로 표준화(stdio/HTTP, 파일 접근, 터미널, 권한, 스트리밍 업데이트)하자는 제안: [@_philschmid](https://twitter.com/_philschmid/status/2018706591776756216).
- **Skills vs MCP tools**: LlamaIndex가 “skills”(쉽지만 깨지기 쉬우며, 자연어 해석 기반)와 MCP 서버(스키마가 더 결정적, 설정 부담, 네트워크 지연 가능하지만 중앙 업데이트) 비교를 제시: [@llama_index](https://twitter.com/llama_index/status/2018749615907213457) 및 후속 [@jerryjliu0](https://twitter.com/jerryjliu0/status/2018797672258490666), [@itsclelia](https://twitter.com/itsclelia/status/2018821269752611102). 또한 “`.agents/skills`가 기본값이 되어간다”는 언급(Codex/OpenCode/Copilot/Cursor 채택; Claude Code는 아직): [@theo](https://twitter.com/theo/status/2018819504252608710).

### 코딩 에이전트 제품: Codex 앱, Claude Code 공유, Xcode 통합

- **Codex app 모멘텀 + 추론(inference) 가속**: Sam Altman이 day 1에 **200k+ 다운로드**를 언급: [@sama](https://twitter.com/sama/status/2018734731437985930). OpenAI는 API 고객에 대해 **GPT‑5.2 & GPT‑5.2‑Codex 40% 더 빠른 지연시간**(“same weights, lower latency”)을 발표: [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018838297221726482). 또한 Codex의 **Xcode 26.3** 통합도 공지됐다: [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018796432443244897).
- **Claude Code 제품 반복 개선**: 웹/데스크톱/모바일 간 Claude Code **세션 공유** 기능: [@lydiahallie](https://twitter.com/lydiahallie/status/2018740156359229883). 커뮤니티에서는 “Sonnet 5 대기” 추측이 강했고, **Anthropic 이미지 모델이 LMArena에 있다**는 주장도 돌았다: [@kimmonismus](https://twitter.com/kimmonismus/status/2018689719324791022) 및 “Claude Image is coming” 류의 얘기: [@kimmonismus](https://twitter.com/kimmonismus/status/2018669423402660082).
- **Apple Xcode + Claude Agent SDK**: Anthropic이 **Claude Agent SDK**(서브에이전트/백그라운드 태스크/플러그인) 기반으로 Xcode 네이티브 통합을 발표, Apple 개발 워크플로에 Claude Code 유사 역량을 넣는 방향을 제시: [@AnthropicAI](https://twitter.com/AnthropicAI/status/2018771170938724682).

### 에이전트 인프라·관측가능성(observability): traces, evals, memory

- **디버깅의 기준이 코드에서 trace로 이동**: 에이전트 시스템에서는 런타임 의사결정이 모델 내부에서 일어나므로, 이해/디버깅의 1차 산출물이 **traces**라는 주장: [@LangChain](https://twitter.com/LangChain/status/2018739770495512880).
- **딥 에이전트 평가(evaluation) 방법**: 케이스별 성공 기준 정의, 단일 스텝 회귀(regression) 체크, 전체 턴/멀티턴 평가, 깨끗하고 재현 가능한 환경을 강조: [@LangChain](https://twitter.com/LangChain/status/2018769968515404212).
- **DeepAgents 릴리즈들**: [email protected] 수정(체크포인트 복원, 대용량 파일 무한 루프, toolcall 미들웨어 단순화): [@LangChain_JS](https://twitter.com/LangChain_JS/status/2018731100441620517). DeepAgents 0.3.10의 **LocalShellBackend**(로컬 머신에서 코드 실행): [@sydneyrunkle](https://twitter.com/sydneyrunkle/status/2018788505082859863). deepagents-cli 0.0.16의 쉘 실행 제어/가시성 개선: [@masondrxy](https://twitter.com/masondrxy/status/2018741344835870820).
- **메모리: “RAG는 에이전트 메모리를 위해 설계되지 않았다”**: DAIR의 **xMemory**가 계층형 검색(테마/의미/에피소드/메시지)으로 중복을 줄이고 증거 체인을 유지해, 단순 top‑k 유사도 검색보다 적은 토큰으로 더 나은 LoCoMo 점수를 보였다는 주장: [@dair_ai](https://twitter.com/dair_ai/status/2018765444702982395).
- **파일시스템을 컨텍스트 스크래치패드로**: “files-first”(아티팩트를 컨텍스트 밖에 저장해 윈도우를 비대하게 만들지 않기) 워크플로를 재강조: [@LangChain_JS](https://twitter.com/LangChain_JS/status/2018732184694374669).

### 벤치마크·평가 신호: METR, Arena, ARC‑AGI

- **Gemini 3 Pro의 METR time horizon**: 확장된 소프트웨어 태스크( CI 포함 )에서 **~4시간(50% time horizon)** 추정: [@METR_Evals](https://twitter.com/METR_Evals/status/2018752230376210586).
- **WorldVQA (Moonshot/Kimi)**: “원자적(atomic) 시각 중심(world knowledge)”을 추론과 분리해 측정하려는 데이터셋 **WorldVQA**(9개 카테고리, 3,500 VQA 페어, 언어/문화 다양성): [@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2018697552456257945).
- **Arena 리더보드**: Text Arena(오픈 모델, 2026년 1월) #1 **Kimi‑K2.5‑Thinking**, #2 **GLM‑4.7**, #3 **Qwen3‑235B‑A22B Instruct**: [@arena](https://twitter.com/arena/status/2018727506850033854). Search Arena는 Google의 **gemini‑3‑flash‑grounding** 선두, OpenAI search non‑reasoning top 5, Claude 검색 변형 언급: [@arena](https://twitter.com/arena/status/2018760874178342975). Image Arena는 텍스트‑투‑이미지/이미지 편집에서 **품질 대비 이미지당 가격** 파레토 프론티어 공개: [@arena](https://twitter.com/arena/status/2018787949840896119) 및 편집 프론티어 [@arena](https://twitter.com/arena/status/2018792314878234704).
- **ARC‑AGI**: ARC Prize가 **GPT‑5.2 앙상블** 기반의 새 SOTA 공개 제출(비용/태스크 수치 포함)을 보고: [@arcprize](https://twitter.com/arcprize/status/2018746794310766668). ARC‑AGI‑2 진행 속도에 대한 커뮤니티 언급도 지속: [@kimmonismus](https://twitter.com/kimmonismus/status/2018800964891984181).

### 효율·커널·학습/추론 플러밍(plumbing)

- **Karpathy의 fp8 학습 노트**: **fp8 training**을 켜서 “time to GPT‑2”를 **2.91시간**으로 단축했다고 보고, 병목이 순수 연산(compute)만이 아니라 스케일링 변환, GEMM 사이징 등의 오버헤드에 있음을 강조: [@karpathy](https://twitter.com/karpathy/status/2018804068874064198).
- **vLLM + NVIDIA Blackwell 최적화**: Blackwell에서 FlashInfer 통합, torch.compile 퓨전, 비동기 스케줄링, 스트림 간격 최적화로 **gpt‑oss‑120b** 처리량 개선을 보고: [@vllm_project](https://twitter.com/vllm_project/status/2018859316258931161).
- **인퍼런스(inference)는 1급 엔지니어링 표면**: “컨텍스트 엔지니어링(context engineering)은 추론에서, 학습의 데이터 엔지니어링만큼 중요하다”는 문장이 반복적으로 인용됨: [@swyx](https://twitter.com/swyx/status/2018533744442057115).

### Top tweets (by engagement)

- [CEO of highest valued company giving a “conference” in the middle of a street](https://twitter.com/yacinelearning/status/2018689145086898466) — 참여가 폭발한 밈/이벤트 코멘트.
- [SpaceX acquires xAI / “Building an interstellar civilization”](https://twitter.com/elonmusk/status/2018784828129243614) — 화제성 높은 인수/비전 발언.
- [Codex app day‑1 downloads: “More than 200k”](https://twitter.com/sama/status/2018734731437985930) — Codex 앱 다운로드 수 언급.
- [Apple Xcode integrates Claude Agent SDK](https://twitter.com/AnthropicAI/status/2018771170938724682) — Xcode와 Claude Agent SDK 통합.
- [OpenAI hires Head of Preparedness](https://twitter.com/sama/status/2018813527780463027) — Preparedness 책임자 채용.
- [GPT‑5.2 & GPT‑5.2‑Codex now 40% faster (inference stack optimized)](https://twitter.com/OpenAIDevs/status/2018838297221726482) — 추론 스택 최적화로 40% 가속.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen/Qwen3-Coder-Next · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1quvqs9/qwenqwen3codernext_hugging_face/)** (Activity: 842): **Qwen3-Coder-Next**가 총 `80B` 중 `3B activated parameters`로 코딩에 특화되었고 `256k` 컨텍스트를 지원한다는 요지. IDE 통합, `48 layers`, gated attention, MoE 구성, SGLang/vLLM 기반 배포 등도 언급됐다. 자세한 내용은 [original article](https://huggingface.co/Qwen/Qwen3-Coder-Next). 한편 `3B` 활성 모델이 Sonnet 4.5급 품질을 낼 수 있냐는 회의론도 나왔다.
- **[Qwen3-Coder-Next is out now!](https://www.reddit.com/r/LocalLLM/comments/1quw0cf/qwen3codernext_is_out_now/)** (Activity: 228): 이미지로 **80B MoE / 3B active** 출시를 알렸고, 로컬 배포 및 장기(long-horizon) 추론/툴 사용을 강조했다. `46GB` RAM/VRAM 요구 등 하드웨어 요구사항과, CPU-only(64GB RAM) 가능 여부·적절한 양자화(quantization) 질문이 이어졌다.
- **[ACE-Step-1.5 has just been released. It’s an MIT-licensed open source audio generative model with performance close to commercial platforms like Suno](https://www.reddit.com/r/LocalLLaMA/comments/1quzwjf/acestep15_has_just_been_released_its_an/)** (Activity: 408): **ACE-Step-1.5**가 MIT 라이선스 오픈소스 음원 생성 모델로 Suno급 성능을 표방했다. LoRA 지원, Comfy 통합, HuggingFace 데모 등과 함께, 프롬프트 준수(prompt adherence)에 대한 회의적 코멘트도 있었다.
- **[The open-source version of Suno is finally here: ACE-Step 1.5](https://www.reddit.com/r/LocalLLaMA/comments/1quxtkj/the_opensource_version_of_suno_is_finally_here/)** (Activity: 319): ACE-Step 1.5가 `2 seconds`(A100) 생성, 로컬 PC `4GB VRAM`에서도 동작, RTX 3090에서 `10 seconds` 이하 등 주장과 함께 공개됐다. 가중치/학습/LoRA/논문까지 포함한 [GitHub resources](https://github.com/ace-step/ACE-Step-1.5) 링크가 공유됐고, 지시 따르기·일관성은 Suno v3 대비 약하다는 의견도 있었다.
- **[128GB devices have a new local LLM king: Step-3.5-Flash-int4](https://www.reddit.com/r/LocalLLaMA/comments/1qtvo4r/128gb_devices_have_a_new_local_llm_king/)** (Activity: 619): `128GB` RAM 디바이스(예: M1 Ultra) 타깃의 `Step-3.5-Flash-int4`가 `256k` 컨텍스트 및 높은 효율을 강조했다. 모델은 [Hugging Face](http://huggingface.co/stepfun-ai/Step-3.5-Flash-Int4)에서 언급됐고, 커스텀 llama.cpp 포크 필요 및 백엔드/하드웨어별 성능 비교가 논의됐다.
- **[Local model fully replacing subscription service](https://www.reddit.com/r/LocalLLM/comments/1qtuwn5/local_model_fully_replacing_subscription_service/)** (Activity: 270): MacBook Pro M4 Pro(24GB)에서 Ollama + GPT-OSS:20b가 단순 질의·기초 코딩 등에서 구독형 서비스 대체 가능하다는 경험담. Apple Silicon에서 MLX 모델로 속도 `40%` 개선(LM Studio) 같은 팁과, `128k` 컨텍스트를 `17GB` VRAM으로 돌릴 수 있다는 언급, “로컬 에이전트 하네스가 핵심”이라는 흐름도 포함됐다.
- **[New 1.4B Model Victorian LLM - Violet](https://www.reddit.com/r/LocalLLM/comments/1quip6h/new_14b_model_victorian_llm_violet/)** (Activity: 67): 1800–1899 빅토리아 시대 데이터로만 학습한 **Violet(1.4B)** 소개. ONNX 양자화 및 브라우저 실행, 편향/추론 한계 등도 함께 언급됐다. 모델은 [Hugging Face](https://huggingface.co/zakarth/violet-1b4-chat), 데모는 [here](https://huggingface.co/spaces/zakarth/violetdemo).

### Less Technical Subreddits

- **[Sonnet 5 release on Feb 3](https://www.reddit.com/r/ClaudeAI/comments/1qtm9ix/sonnet_5_release_on_feb_3/)** (Activity: 2328): Vertex AI 에러 로그를 근거로 “Claude Sonnet 5(Fennec)”가 2026-02-03 출시될 수 있다는 루머. 비용 50% 절감, `1M token` 컨텍스트, TPU 최적화, SWE-Bench `80.9%` 주장 등이 나오지만, 로그만으로는 확증이 아니라는 반론과 대컨텍스트 정확도 저하 우려도 함께 제기됐다.
- **[Claude Sonnet 5: The “Fennec” Leaks](https://www.reddit.com/r/Bard/comments/1qtnkhu/claude_sonnet_5_the_fennec_leaks/)** (Activity: 193): 트윗 스크린샷 기반 루머 요약과 함께, `1M` 컨텍스트의 실사용 한계(큰 컨텍스트에서 능력 저하) 우려가 나왔다. 이미지: [Image URL](https://i.redd.it/lmphdjb601hg1.png)
- **[Sonnet 5 being release on Wednesday where is Gemini 3.5 ?](https://www.reddit.com/r/Bard/comments/1qtmi53/sonnet_5_being_release_on_wednesday_where_is/)** (Activity: 182): Sonnet 5 루머와 함께 Gemini 3.5 기대가 논의됐지만, Gemini 3 자체가 프리뷰 상태라 3.5는 시기상조라는 반응도 있었다.
- **[Codex 5.2 High vs. Opus: A brutal reality check in Rust development.](https://www.reddit.com/r/ClaudeCode/comments/1qu26n8/codex_52_high_vs_opus_a_brutal_reality_check_in/)** (Activity: 389): Rust 개발에서 Codex 5.2 High가 Opus 대비 문제 해결력이 크게 앞선다는 체감담. 다만 단계적(phase) 접근으로 Opus 성능을 끌어올릴 수 있다는 의견과, Opus 4.5도 충분히 경쟁력 있다는 반론이 함께 달렸다.
- **[How Can OpenAI and Anthropic Stay Solvent With Google, xAI, and Meta in High-End Markets, and Chinese/Open Source Devs in the Rest?](https://www.reddit.com/r/DeepSeek/comments/1qu6h92/how_can_openai_and_anthropic_stay_solvent_with/)** (Activity: 39): 고가 시장(헬스케어/국방/교육/정부 등)과 오픈소스/중국계 경쟁 속에서 OpenAI/Anthropic의 수익성·지속가능성을 묻는 글. 벤치마크 격차 축소, “Too Big To Fail” 전략, 기능 다변화(멀티모달 등) 같은 논점이 오갔다.
- **[Notes after testing OpenAI’s Codex App on real execution tasks](https://www.reddit.com/r/ChatGPTCoding/comments/1qurbr4/notes_after_testing_openais_codex_app_on_real/)** (Activity: 30): Codex가 “대화형 편집”보다 “태스크를 끝까지 실행(계획→실행→테스트→후속 수정)”하는 형태라는 관찰과, 워크트리(worktree) 기반 병렬 작업 등 워크플로 논의. 상세 글: [here](https://www.tensorlake.ai/blog/codex-app-the-cursor-killer)
- **[Seeing the BMW M3 GTR Everywhere — How Are These Videos Made?](https://www.reddit.com/r/Qwen_AI/comments/1quawwl/seeing_the_bmw_m3_gtr_everywhere_how_are_these/)** (Activity: 1): BMW M3 GTR 합성 영상 제작 방식(편집툴/엔진/ML 기반 후처리 등)에 대한 추정과 설명이 오갔다.
- **[How to create videos with swift actions + perfect lip sync](https://www.reddit.com/r/aivideo/comments/1qtu92u/how_to_create_videos_with_swift_actions_perfect/)** (Activity: 1856): 빠른 동작과 립싱크를 자연스럽게 만드는 제작 기법/툴링에 대한 토론(미세한 손동작 등 디테일이 사실감을 만든다는 코멘트 포함).
- **[I created a 10-minute AI film - The Last Signal (YouTube)](https://www.reddit.com/r/VEO3/comments/1qujnte/i_created_a_10minute_ai_film_the_last_signal/)** (Activity: 17): Veo 3.1, Gemini, ElevenLabs 등을 사용해 만든 10분 AI 단편 *The Last Signal* 소개와 반응. 영상: [here](https://youtu.be/61On6nsxvq8)

---

## AI Discord Recap

### Agentic Coding & Dev Tooling Goes Local-First

- **Codex Goes Desktop: macOS Agent Command Center**: OpenAI가 macOS용 Codex 앱을 “에이전트 빌딩 커맨드 센터”로 출시(Plus/Pro/Business/Enterprise/Edu, 일부 기간 Free/Go 제한 제공)했다고 정리하며, [“Introducing the Codex app”](https://openai.com/index/introducing-the-codex-app/) 및 [Codex landing page](https://openai.com/codex)를 참고로 들었다.
- **Codex App hackathon**: 커뮤니티 워크플로(에이전트 페어링, 멀티 에이전트 “커맨드 센터”) 이야기와 함께 $90,000 크레딧 규모 해커톤이 언급됐고, 출처로 [Cerebral Valley’s event page](https://partiful.com/e/nkiMrpg6CHhlUFvvvyfR)가 공유됐다.
- **LM Studio Speaks Anthropic: Claude Code Meets Your Local GGUF/MLX**: LM Studio 0.4.1이 Anthropic `/v1/messages` 호환 API를 추가해, base URL만 바꿔 Claude Code 스타일 툴을 로컬 GGUF/MLX 백엔드로 붙일 수 있다는 요지. 가이드: [“Using Claude Code with LM Studio”](https://lmstudio.ai/blog/claudecode). OpenAI 호환 엔드포인트/SDK도 함께 언급: [SDK link](https://lmstudio.ai/gdmka/openai-compat-endpoint).
- **Arena Mode Everywhere: Windsurf Turns Model Eval into a Game**: Windsurf Wave 14의 Arena Mode(모델 배틀, Battle Groups 등)와 0x 크레딧 프로모가 [Windsurf download page](https://windsurf.com/download/editor)에서 언급됐다. 동시에 LMArena의 [Text Arena](https://arena.ai/c/new?chat-modality=chat) / [Code Arena](https://arena.ai/c/new?chat-modality=code) 같은 “라이브 평가(live eval)” 흐름이 강화된다는 관찰이 뒤따랐다.

### Model Releases & Bench Races (Kimi vs GLM vs Qwen)

- **Kimi K2.5 Speedruns the Leaderboards**: Perplexity Pro/Max에서 Kimi K2.5 제공 및 US 기반 추론 스택(지연/신뢰성/보안)을 강조했다는 스크린샷이 공유: [https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg](https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg). LMArena Code Arena에서의 위치도 화제: [Code Arena](https://arena.ai/c/new?chat-modality=code).
- **GLM-4.7 Flash**: GLM-4.7 flash가 특히 인터랙티브 웹/프론트엔드 작업에서 강하다는 주장과, “thinking 제거”가 성능에 미치는 영향, Claude Code류 툴링과의 조합이 논의됐다(앵커: [ggerganov’s post](https://x.com/ggerganov/status/2016903216093417540)).
- **New Arena Entrants**: step-3.5-flash가 [Text Arena](https://arena.ai/c/new?chat-modality=chat), qwen3-max-thinking이 [Code Arena](https://arena.ai/c/new?chat-modality=code)에 추가됐다는 언급이 있었다.

### Training Signals, Dense Rewards, and New Architectures/Datasets

- **From Binary Rewards to Dense Supervision**: 최종 답변 logprobs와 비이진(non-binary) 리워드로 RL 신호를 풍부하게 만들자는 흐름이 공유됐고, 설명형 피드백을 조밀한(supervision) 신호로 바꾸는 방식으로 [Hübotter thread](https://xcancel.com/jonashuebotter/status/2016950268462608665)가 인용됐다.
- **Complexity-Deep (1.5B)**: Token-Routed MLP 등 MoE 유사 라우팅을 “로드 밸런싱 부담 없이” 노리는 아키텍처가 오픈소스로 공개: [Complexity-ML/complexity-deep](https://github.com/Complexity-ML/complexity-deep).
- **Moltbook Data Dump**: Moltbook 스크랩 데이터셋(50,539 posts 등)이 공개됐다는 공유: [lysandrehooh/moltbook](https://huggingface.co/datasets/lysandrehooh/moltbook).

### GPU/Kernel Engineering: Faster Attention, Better Profiling, Weirder PTX

- **FlashAttention v3 Hits RDNA**: RDNA GPU 지원 추가 관련 논의: [flash-attention PR #2178](https://github.com/Dao-AILab/flash-attention/pull/2178).
- **Triton-Viz v3.0**: 프로파일링 확장(트리톤/Amazon NKI), OOB(out-of-bounds) 산티저, 비효율 루프 플래그 등이 언급됐고, 릴리즈 출처(Discord): [https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563](https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563). 관련 노트북: [Colab](https://colab.research.google.com/drive/1-P2QBqCORGGaJ3THtjlyYDV7m9RRrRup?usp=sharing). 퍼즐 리포: [srush/Triton-Puzzles](https://github.com/srush/Triton-Puzzles).
- **sm120 커널 디버깅**: TMA+mbarrier vs cp.async 비교, cuBLAS 커널 관찰, `__syncthreads()` 추가로 데드락을 해결한 사례 등이 공유됐다.

### Security, Determinism, and Agent Misbehavior (the Practical Kind)

- **Prompt Injection 방어**: 실습 사이트 [“Adversarial Design Thinking”](https://luisladino.github.io/adversarial-design-thinking/)가 공유됐고, 임베딩 기반 필터 + Grammar Constrained Decoding 조합 같은 “belt + suspenders” 방어가 언급됐다.
- **Deterministic Reasoning / Strict Mode**: 결정성(determinism), 재현성(replayability), 추적가능성(traceability) 요구가 커지며 “strict mode” 같은 아이디어가 논의됐다.
- **OpenClaw 비용/보안 우려**: 크레딧이 빠르게 소모된다는 사례와 함께 보안 평가 링크(2/100 주장)가 회자: [Perplexity result](https://www.perplexity.ai/discover/you/openclaw-ai-assistant-scores-2-AtVX4UYVQMutCst63QBy5g).
