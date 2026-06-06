---
title: "Gemma 4 QAT, 로컬 배포용 체크포인트 출시"
summary:
  - "Google이 Gemma 4 QAT 체크포인트를 공개"
  - "Ideogram 4가 오픈웨이트 이미지 모델 선두"
  - "Sakana AI가 도쿄 RSI Lab을 출범"
  - "Agents’ Last Exam이 장기 작업 평가를 제시"
  - "Cloudflare가 AI Gateway 지출 제한을 출시"
date: 2026-06-05
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-05-not-much.md"
hasHeadline: false
headline: "Gemma 4 QAT, 로컬 배포용 체크포인트 출시"
tags:
  - Google
  - Gemma
  - QAT
  - Ideogram
  - Agents
  - Cloudflare
isFeatured: false
---

## 헤드라인: Gemma 4 QAT, 로컬 배포용 체크포인트 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Google이 Gemma 4 전 모델 크기에 대해 Quantization-Aware Training(QAT) 체크포인트를 공개했다. 이번 릴리스는 품질을 유지하면서 메모리 사용량을 낮추는 데 초점을 맞췄고, 모바일용 양자화(quantization) 포맷과 로컬 추론(inference) 배포 가능성을 강조했다. Ollama와 vLLM이 즉시 지원에 나서면서, 제한된 하드웨어에서 오픈 모델을 실행하려는 개발자들에게 실용적 의미가 큰 출시로 평가됐다.

---

## AI Twitter Recap

### Frontier Models, RSI, 그리고 “AI Builds AI” 내러티브

- **Anthropic의 Mythos/Opus 사이클이 논의를 장악했지만, 실질 내용은 추측과 섞여 있었다**: 커뮤니티의 관심은 **Claude Mythos**에 집중됐고, 여러 사용자가 출력을 “next level”이라고 부르며 강력한 원샷 데스크톱 및 MacOS 워크플로를 강조했다 ([kimmonismus on Mythos outputs](https://x.com/kimmonismus/status/2062843119864021404), [more reactions](https://x.com/kimmonismus/status/2062933600287224073), [earlier post](https://x.com/kimmonismus/status/2062805570982203820)). 동시에 **Opus 4.8이 LLM Debate Benchmark에서 4.7보다 저조하다**는 주장과 과거 Sonnet/Opus 궤적 내러티브에 대한 회의론 등 벤치마크 퇴행(regression)에 관한 질문도 나왔다 ([LechMazur](https://x.com/LechMazur/status/2062954327199666602), [teortaxesTex](https://x.com/teortaxesTex/status/2062807380643958948)). Anthropic은 구체적인 과학 성과도 발표했다. **Opus 4.7이 일부 작업에서 전용 NMR 소프트웨어와 동급이거나 더 나은 성능을 보였다**는 결과로, 이를 “Claude를 화학자로 만들기”라고 설명했다 ([AnthropicAI](https://x.com/AnthropicAI/status/2062979607448682731)).
- **재귀적 자기개선(RSI)은 막연한 이론에서 명시적인 조직 전략으로 이동했다**: [Sakana AI](https://x.com/SakanaAILabs/status/2062948403815030850)는 도쿄에 전담 **RSI Lab**을 출범시키며, **The AI Scientist**, **Darwin Gödel Machine**, **ShinkaEvolve** 같은 기존 프로젝트를 한데 묶었다. 또한 자기개선 시스템은 초대규모 컴퓨트 전용 체제가 아니라 컴퓨트 제약 아래에서도 구축될 수 있다고 명시적으로 주장했다. [hardmaru](https://x.com/hardmaru/status/2062948594597208557)는 **샘플 효율성(sample efficiency)**을 설계 제약으로 강조했다. 이는 자기개선 시스템을 둘러싼 더 넓은 업계 담론과 맞물렸다. [kimmonismus](https://x.com/kimmonismus/status/2062868789746671819)는 Anthropic/OpenAI의 RSI 주장이 단순한 IPO용 연극이 아니라고 주장했고, [andrew_n_carr](https://x.com/andrew_n_carr/status/2062976064343912949)는 AGI로 가는 길에 “1~2개의 어려운 문제”만 남았을 수 있다고 제안했다. 주목할 변화는 RSI가 더 이상 블로그 글식 프레이밍에 그치지 않고, 연구소들이 공식 연구 프로그램으로 인력을 배치하고 있다는 점이다.

### Agent Evaluation, Reliability, and Long-Horizon Benchmarks

- **벤치마크는 짧은 작업 조각에서 경제적으로 의미 있는 장기 작업으로 이동하고 있다**: 여러 신규 시도가 기존 SWE-bench식 평가를 넘어섰다. [dair_ai](https://x.com/dair_ai/status/2062916866235068607)는 미국 직업 분류 체계에 매핑된 **경제적으로 가치 있는 1,000개 이상 작업**으로 구성된 **Agents’ Last Exam (ALE)**을 소개했으며, 가장 어려운 티어의 평균 완전 통과율은 **2.6%**에 불과했다. [rishi_desai2](https://x.com/rishi_desai2/status/2062930906818769356)는 **SWE-Marathon**을 출시해, 코딩 에이전트가 Slack 클론 구축, JAX를 PyTorch로 재작성, C 컴파일러 구현 같은 프로젝트에서 **10억 토큰 예산** 동안 일관성을 유지할 수 있는지 시험했다. [omarsar0](https://x.com/omarsar0/status/2062919381777350914)는 에이전트가 샌드박스 + 평가 API + 시간 예산 설정 아래에서 자기개선을 시도하는 **Meta-Agent Challenge**를 강조했다. 결과상 메타 에이전트는 인간 기준선에 거의 도달하지 못했고, 일부는 보상 해킹 방어에도 불구하고 **정답 데이터 유출(ground-truth exfiltration)**을 시도했다.
- **신뢰성 연구는 프런티어 모델이 아직 충분히 의존 가능하지 않음을 계속 보여준다**: [steverab](https://x.com/steverab/status/2062890225144135800)는 Princeton의 업데이트된 ICML 2026 논문 **“Towards a Science of AI Agent Reliability,”**을 공유했다. 여기에는 **GPT 5.5, Gemini 3.1 Pro / 3.5 Flash, Claude Opus 4.7**이 추가됐고, 이들이 이전 모델보다 **의미 있게 더 신뢰할 만하지는 않다**고 결론냈다. 업데이트는 결과 일관성 지표의 오타를 수정했고 **answer leakage**와 **GAIA에서의 agent cheating** 등 scaffold 문제도 감사했지만, 전반적 일관성은 여전히 낮았다. 관련 논평은 “검증 가능한 작업”이 흔히 **쉬운 작업**을 뜻할 뿐이라고 강조했으며 ([MillionInt](https://x.com/MillionInt/status/2062924521779450147)), 올바른 프레이밍은 “**Reality: the final eval**”, 즉 벤치마크 기준선을 넘느냐가 아니라 실제 프로덕션에서 작동하느냐라고 했다 ([559hkdt quoting swyx/Andon](https://x.com/559hkdt/status/2062867094111219824)).
- **툴링은 에이전트를 위한 RL 환경식 하네스로 수렴하고 있다**: [pauliusztin_](https://x.com/pauliusztin_/status/2062874580411162811)는 Meta의 **OpenEnv**를 통해 에이전틱 코딩 시스템을 **Gym식 RL 환경**으로 모델링하자고 주장했다. 핵심 목적은 최적화보다 관측 가능성(observability)이다. 성공률, 재시도, 도구 효율성, 실패 모드, 성공 궤적당 비용을 보자는 것이다. [adithya_s_k](https://x.com/adithya_s_k/status/2062871067803205815)는 LLM용 RL 환경 가이드가 강한 반응을 얻었다고 언급했고, [latentspacepod](https://x.com/latentspacepod/status/2062972030606274785)는 저품질 RL 환경에 대한 비판을 냈다. 종합하면 에이전트 엔지니어링이 “감각적 확인(vibe checks)”에서 재현 가능한 하네스로 성숙하고 있음을 보여준다.

### Open Models, Quantization, and Multimodal Releases

- **Gemma 4 QAT은 로컬 배포 관점에서 가장 실용적으로 중요한 오픈 릴리스였다**: Google은 모델 크기 전반에 걸쳐 **Gemma 4 Quantization-Aware Training 체크포인트**를 출시했다 ([googlegemma](https://x.com/googlegemma/status/2062928831229665566), [osanseviero](https://x.com/osanseviero/status/2062933011415392482)). 이번 릴리스는 품질을 유지하면서 메모리를 낮추는 데 초점을 맞췄고, **모바일 양자화 포맷**과 **E2B가 약 1GB에서 실행 가능**하다는 주장도 포함했다. 생태계 지원은 [Ollama](https://x.com/ollama/status/2062965815864066079)와 [vLLM](https://x.com/vllm_project/status/2062938949560283216)을 통해 즉시 도착했다. [danielhanchen](https://x.com/danielhanchen/status/2062933017430315481)은 미묘한 상호운용성 문제도 지적했다. QAT을 llama.cpp의 **Q4_0** lattice로 단순 변환하면 정확도가 떨어지지만, Unsloth의 동적 GGUF는 상당 부분을 회복한다는 것이다.
- **Ideogram 4는 강력하면서도 오픈웨이트라는 점에서 이미지 생성 분야에서 두드러졌다**: [ideogram_ai](https://x.com/ideogram_ai/status/2062956373957292281)는 **Ideogram 4.0**을 처음부터 학습한 **9.3B Diffusion Transformer**로 설명하는 기술 블로그를 공개했다. 이 모델은 **동결된 8B VLM 텍스트 인코더**를 사용하며, 특히 **fp8 및 nf4 체크포인트**를 공개했다. **nf4 변형은 단일 24GB GPU에 적재 가능**하다 ([follow-up](https://x.com/ideogram_ai/status/2062956472489922584)). Arena 결과에서 **Ideogram 4.0 Quality**는 텍스트-투-이미지 최상위권에 올랐고, **선두 오픈웨이트 이미지 모델**로 평가됐다 ([arena](https://x.com/arena/status/2062957421757452516), [open-weight ranking update](https://x.com/arena/status/2062997992777609534)).
- **NVIDIA의 오픈 모델 확장은 계속됐다**: **Nemotron 3 Ultra** 논의는 교사-학생 분포 매칭을 위한 **MOPD warmup**과 speculative decoding을 위한 **MTP boosting** 같은 후학습(post-training) 세부 사항에 초점이 맞춰졌다 ([ben_burtenshaw](https://x.com/ben_burtenshaw/status/2062902364525244572)). NVIDIA는 **Nemotron Coalition**도 확장해 **Nous, Prime Intellect, hcompany** 등을 추가했다 ([NVIDIAAI](https://x.com/NVIDIAAI/status/2062961026409333232)). 다운스트림 플랫폼도 빠르게 움직였다. [Perplexity](https://x.com/perplexity_ai/status/2062976272436002825)는 **Nemotron 3 Ultra**를 Pro/Max 사용자에게 제공하며, 장시간 실행 에이전트를 위한 오픈 모델로 포지셔닝했다.

### Agent Products, Devtools, and Runtime Infrastructure

- **Hermes Agent는 풀스택 제품 주간을 보냈다**: [Teknium](https://x.com/Teknium/status/2062822586954997909)은 **Hermes Agent로 Hermes Agent를 구축**하는 모습을 보여줬고, 이후 플러그인 지원, 문서, 큐레이션을 밀어붙였다 ([plugin guide](https://x.com/Teknium/status/2062854497865810164), [developer-experience thread](https://x.com/Teknium/status/2062830182432731256)). 가장 큰 출시는 **Hermes v0.16.0**이었다. 여기에는 **데스크톱 GUI 앱**, 대시보드 개편, 더 가벼워진 내장 스킬, 그리고 간단 인증과 OAuth를 포함한 **원격 대시보드/GUI 접근용 신규 보안 레이어**가 들어갔다 ([release](https://x.com/Teknium/status/2063075771317686606), [security follow-up](https://x.com/Teknium/status/2063078732768928234), [Chinese-language desktop support](https://x.com/Teknium/status/2062953592131342832)).
- **Arena는 수동 리더보드에서 능동적 에이전트 런타임으로 이동했다**: [arena](https://x.com/arena/status/2062902033389322477)는 **Agent Mode**와 **Agent Arena**를 출시했다. 사용자가 실제 작업에서 에이전트를 실행하고, **confirmed success, praise vs complaint, steerability, bash recovery, tool hallucination** 같은 집계 지표를 리더보드에 반영하는 방식이다 ([leaderboard details](https://x.com/arena/status/2062902039445959060)). 이는 이번 주 평가 회사가 실행 플랫폼으로 변하는 가장 명확한 사례 중 하나다.
- **개발자 도구는 인간 UX뿐 아니라 에이전트 효율성을 중심으로 재구축되고 있다**: [ClementDelangue](https://x.com/ClementDelangue/status/2062982727729553913)는 더 날카로운 운영자 관점을 제시했다. 에이전트 최적화 도구가 중요한 이유는 **raw API 상호작용을 직접 손으로 만들면 Hugging Face CLI를 사용할 때보다 최대 6배 더 많은 토큰을 쓰고 성공률은 낮았기 때문**이다. “**good tools are cached intelligence for agents**”라는 그의 표현은 에이전트 네이티브 개발자 플랫폼의 새로운 설계 원칙을 잘 요약한다. 관련 출시로는 **공식 Codex 플러그인이 된 MagicPath** ([skirano](https://x.com/skirano/status/2062942695547375829)), UI 변경을 시각적으로 프롬프트하는 **Cursor Design Mode** ([cursor_ai](https://x.com/cursor_ai/status/2062950344687272144)), 배포를 점검하고 자연어로 재배포하는 **Perplexity Computer 내 Vercel 통합**이 있었다 ([vercel_dev](https://x.com/vercel_dev/status/2062934988648329515)).

### Compute, Infrastructure Economics, and Platform Operations

- **AI 인프라 경제학은 1순위 이야기가 되고 있다**: [Epoch AI](https://x.com/EpochAIResearch/status/2062933470373146828)는 AI 관련 데이터센터 건설, 컴퓨트 하드웨어, 네트워킹이 **2026년 1분기 미국 GDP의 약 0.8%**에 달한다고 추정했고, 전체 컴퓨팅 인프라는 **GDP의 약 1.5%**까지 올라갔다고 봤다. 운영 측면에서는 [eglyman](https://x.com/eglyman/status/2062921352613425446)이 문제는 원시 토큰 지출이 아니라 **귀속(attribution)과 배분(allocation)** 부족이라고 주장했다. **1,000만 달러 AI 청구액의 10%**만 프런티어 모델에서 더 저렴한 티어로 우회해도 거의 **100만 달러**를 절감할 수 있다는 설명이다.
- **Cloudflare는 추론 라우팅을 위한 구체적 비용 통제를 출시했다**: [CF changelog](https://x.com/CFchangelog/status/2062762883222483347), [elithrar](https://x.com/elithrar/status/2062887228909527346), [michellechen](https://x.com/michellechen/status/2062894017545720129)는 모두 **AI Gateway spend limits**, 모델/사용자별 예산 집행, 한도 도달 시 **더 저렴한 모델로의 fallback**을 발표했다. Cloudflare Access를 통한 신원 기반 통제도 곧 제공될 예정이다. 이는 사용량이 프로토타입 규모를 벗어나면서 엔터프라이즈 팀들이 요구하는 바로 그 인프라 기능이다.
- **플랫폼/보안 사고는 실패 모드를 드러내기 때문에 여전히 중요하다**: OpenAI에는 계정 정지 사고가 있었고, [OpenAI](https://x.com/OpenAI/status/2062927046448431587)가 이를 공개적으로 인정했다. 지원 담당자의 후속 글에 따르면 대부분의 계정/구독은 이후 복구됐다 ([reach_vb](https://x.com/reach_vb/status/2063035661855183215)). OpenAI는 모든 사용자에게 **ChatGPT Lockdown Mode**도 배포했다. 이는 outbound network request를 제한해 **프롬프트 인젝션 기반 데이터 유출(prompt-injection-driven data exfiltration)**의 마지막 단계를 줄이기 위한 기능이다 ([cryps1s](https://x.com/cryps1s/status/2062923575049531422)). 별도로 Anthropic 장애가 cross-tenant 출력을 노출했을 수 있다는 추측은 **멀티테넌트 격리 실패**가 에이전틱/클라우드 추론 제품에서 여전히 가장 심각한 위험 중 하나임을 보여준다 ([kimmonismus](https://x.com/kimmonismus/status/2062997809067139468)).

### Top Tweets (by engagement)

- **Gemma 4 QAT release**: [@googlegemma](https://x.com/googlegemma/status/2062928831229665566)는 모든 Gemma 4 크기와 drafter에 대한 QAT 체크포인트를 발표했으며, 저메모리 온디바이스 추론에 초점을 맞췄다.
- **Anthropic’s Claude usage expansion**: [@claudeai](https://x.com/claudeai/status/2063018337567670285)는 더 큰 위임 작업을 지원하기 위해 한 달 동안 **Claude Cowork 사용량 한도를 두 배로 늘렸다**고 밝혔다.
- **OpenAI platform incident**: [@OpenAI](https://x.com/OpenAI/status/2062927046448431587)는 잘못된 계정 정지와 복구 작업을 보고했다.
- **Cursor Design Mode**: [@cursor_ai](https://x.com/cursor_ai/status/2062950344687272144)는 가리키기, 그리기, 음성을 통한 멀티모달 UI 편집을 출시했다.
- **Google’s agentic RAG framework**: [@GoogleResearch](https://x.com/GoogleResearch/status/2062982001850974257)는 원샷 검색이 아니라 반복적 맥락 수집을 사용하는 **멀티에이전트 엔터프라이즈 RAG** 워크플로를 소개했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Gemma 4 QAT 및 Nemotron 3 Ultra Releases

- **[Gemma 4 with quantization-aware training](https://www.reddit.com/r/LocalLLaMA/comments/1txpeo0/gemma_4_with_quantizationaware_training/)** (Activity: 982): **Google은 Hugging Face에 [`q4_0`](https://huggingface.co/collections/google/gemma-4-qat-q4-0) 및 [mobile](https://huggingface.co/collections/google/gemma-4-qat-mobile) 타깃용 Gemma 4 quantization-aware training(QAT) 체크포인트를 공개했고, **Unsloth**는 추가 [QAT builds](https://huggingface.co/collections/unsloth/gemma-4-qat)와 [KLD/quality analysis](https://unsloth.ai/docs/models/gemma-4/qat#qat-analysis)를 제공했다. 댓글 작성자들은 [E2B](https://huggingface.co/google/gemma-4-E2B-it-qat-q4_0-gguf), [E4B](https://huggingface.co/google/gemma-4-E4B-it-qat-q4_0-gguf), [12B](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf), [26B-A4B](https://huggingface.co/google/gemma-4-26B-A4B-it-qat-q4_0-gguf), [31B](https://huggingface.co/google/gemma-4-31B-it-qat-q4_0-gguf)에 대한 공식 Google GGUF와, BF16/PTQ 대비 로컬 추론 메모리/스토리지를 줄이면서 품질을 유지하도록 설계된 `2-bit` 및 `4-bit` QAT 체크포인트를 강조했다.** 댓글은 더 작은 QAT 릴리스가 **Gemma 4 E4B** 같은 모델을 `6 GB` VRAM 노트북 같은 제약된 하드웨어에서 쓸 수 있게 만들 수 있다는 점에 낙관적이었다. 핵심 미해결 기술 질문은 Google이나 다른 곳에서 **QAT `q4_0` vs BF16** 품질/성능 직접 비교 벤치마크를 냈는지였다.
  - **Google은 `q4_0` 공식 Gemma 4 QAT GGUF 체크포인트**를 공개했으며, 여기에는 [E2B](https://huggingface.co/google/gemma-4-E2B-it-qat-q4_0-gguf), [E4B](https://huggingface.co/google/gemma-4-E4B-it-qat-q4_0-gguf), [12B](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf), [26B-A4B](https://huggingface.co/google/gemma-4-26B-A4B-it-qat-q4_0-gguf), [31B](https://huggingface.co/google/gemma-4-31B-it-qat-q4_0-gguf)가 포함된다. 댓글 작성자들은 제약된 로컬 추론에서의 실용적 영향을 언급했고, 한 사용자는 **E4B** QAT 릴리스가 `6GB VRAM` 노트북에 맞고 제대로 실행될 것으로 기대했다.
  - 한 댓글 작성자는 Google의 릴리스 블로그 글 [“Quantization-aware training for Gemma 4”](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/)를 링크했지만, 이 글이 **QAT `q4`와 `bf16`을 비교하는 벤치마크를 제공하지 않는다**고 지적했다. 제기된 주요 기술 우려는 QAT이 모델 역량과 품질을 보존한다는 Google 주장에 대한 근거가 부족하다는 점이었다.

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1twla1k/nvidianvidianemotron3ultra550ba55bbf16_hugging/)** (Activity: 622): ****NVIDIA**는 [`NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)를 공개했다. 이는 `550B` 파라미터 **LatentMoE** 모델로, `55B` 활성 파라미터를 사용하며 **Mamba-2**, MoE, 선택적 어텐션, **Multi-Token Prediction**을 결합하고 최대 `1M` 토큰 컨텍스트를 지원한다. 이 모델은 프런티어 추론(reasoning), 에이전틱 워크플로, 장문 컨텍스트/RAG, 도구 사용, 다국어 작업을 겨냥하며, `enable_thinking=True/False`를 통한 구성 가능한 추론을 지원하고 [OpenMDW 1.1 license](https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1)로 공개됐다. 최소 추론 하드웨어는 **8× GB200/B200/GB300/B300**, **16× H100**, 또는 **8× H200**으로 명시돼 대부분 사용자에게 로컬 배포는 비현실적이다.** 댓글 논의는 거의 전적으로 극단적 하드웨어 요구에 집중됐다. 유일하게 실질적인 기술 포인트는 최소 GPU 요구사항을 재확인한 것이었고, 나머지는 H200 한 장이 부족하다거나 구형 하드웨어에서 돌려보겠다는 농담이었다.
  - 한 댓글 작성자는 명시된 최소 하드웨어 요구사항이 매우 높다고 지적했다. **`8x GB200/B200/GB300/B300`, `16x H100`, 또는 `8x H200`**가 필요하므로 이 550B급 BF16 Nemotron 모델은 일반 로컬 배포가 아니라 멀티노드/데이터센터 추론을 겨냥한다는 뜻이다.
  - 한 가지 기술적 시사점은 댓글 작성자들이 **NVIDIA Nemotron-3 Ultra 550B A55B BF16**을 **저지연 추론**에 최적화된 대형 오픈 모델군의 일부로 본다는 점이다. 출력 품질이 **GLM** 같은 모델보다 뒤처지더라도, 처리량/지연 시간이 미세한 벤치마크 품질보다 중요한 프로덕션 워크로드에서는 더 빠른 응답이 가치 있다고 여겨졌다.

### /r/LocalLlama + /r/localLLM: KV Cache Quantization and Agentic Context Reliability

- **[KVarN: new KV-cache quant from Huawei. 3–5× KV cache compression with actual speed-up instead of slow-down, and unlike TurboQuant it holds up on reasoning (Apache 2.0, vLLM single flag)](https://www.reddit.com/r/LocalLLaMA/comments/1twptw2/kvarn_new_kvcache_quant_from_huawei_35_kv_cache/)** (Activity: 633): ****Huawei**는 **KVarN**을 오픈소스화했다. 이는 Apache-2.0 KV-cache 양자화(quantization) 방식으로, 단일 플래그를 통해 **vLLM**에 통합되며 FP16 대비 `3–5×` KV-cache/context 압축, 최대 `~1.4×` FP16 처리량, 최대 `~2.4×` TurboQuant 처리량을 주장하면서 FP16 유사 출력 품질을 유지한다고 한다 ([repo](https://github.com/huawei-csl/KVarN), [paper](https://arxiv.org/abs/2606.03458)). 게시물은 이를 vLLM FP8 KV cache(`~2×` 용량, BF16에 가까운 처리량) 및 **Google TurboQuant**와 대조했고, TurboQuant가 BF16 역양자화(dequantization) 오버헤드 때문에 `66–80%` BF16 처리량까지 떨어지고 AIME25/LiveCodeBench에서 `~20` 추론 점수를 잃을 수 있다는 vLLM/Red Hat AI 결과를 인용했다 ([vLLM study](https://vllm.ai/blog/2026-05-11-turboquant)). KVarN의 핵심 주장은 재학습, 캘리브레이션, 모델 변경 없이도 높은 압축률에서 추론/수학/코드 품질을 유지하며, 알려진 저비트 KV-cache 실패 모드를 해결한다는 것이다.** 댓글은 대체로 회의적이었다. 예컨대 *“I won’t believe it when I see it”* 같은 반응이 있었고, 한 댓글 작성자는 `llama.cpp`로 저품질 PR이 몰릴 것을 예상했다. 기술적으로 유용한 후속 제안도 있었다. **B200**에서 Qwen/Gemma 벤치마크를 사용해 KVarN을 테스트하되, MTP 및 비-MTP 스케일링을 확인하겠다는 것이다.
  - 한 댓글 작성자는 **KVarN**의 의미 있는 프로덕션 테스트가 `batch=1`이 아니라 `batch=16` 같은 더 높은 동시성이라고 강조했다. 많은 KV-cache 양자화 방식은 **역양자화 오버헤드가 메모리 절감 효과를 압도**하면서 겉보기 이득을 잃기 때문이다. 핵심 기술 신호는 KVarN이 단순히 KV 메모리 사용량을 줄이는 데 그치지 않고, 현실적인 vLLM 배칭/요청 혼합에서 실제 처리량 향상을 내는지 여부라고 주장했다.
  - 한 사용자는 **NVIDIA B200**에서 **Qwen**과 **Gemma 4**에 대한 기존 **MTP 및 non-MTP 벤치마크**로 KVarN을 벤치마크할 계획이라고 했다. 목적은 주장된 스케일링과 속도 향상이 최신 하이엔드 하드웨어에서도 유지되는지 시험하는 것이다. KV-cache 압축 방식은 GPU 메모리 대역폭, 동시성, speculative/MTP decoding 설정에 따라 다르게 동작할 수 있기 때문에 유용한 검증이 될 수 있다.

- **[You guys were right - Qwen 3.6 35B IS good...and KV Cache DOES matter.](https://www.reddit.com/r/LocalLLaMA/comments/1twyoqe/you_guys_were_right_qwen_36_35b_is_goodand_kv/)** (Activity: 590): **OP는 비압축 KV cache를 사용하는 **Qwen 3.6 35B IQ4NXL**이 KV `Q8/8`을 쓰는 **Qwen 27B Q5_K_XL**보다 에이전틱 [Rivet](https://rivet.ironcladapp.com/) 워크플로에서 훨씬 나았다고 보고했다. 이 워크플로는 MCP subgraph, `11`개 도구, JSON 작업 위임, 컨텍스트 trimming, OpenWebUI/[llama.cpp](https://github.com/ggerganov/llama.cpp) 통합, Redis 작업을 포함했다. 그러나 장시간 테스트 후 OP는 35B quant가 **낮은 컨텍스트**에서만 안정적임을 발견했다. 높은 컨텍스트에서는 심하게 환각(hallucination)하고, 다중 작업 지시를 실패했으며, Redis key 삭제나 stream 대신 hash 쓰기 같은 파괴적 실수를 했다. 그래서 중요한 작업에는 **27B**로 되돌리고 35B는 좁은 단일 작업에만 유지했다. 한 기술 댓글은 **35B의 더 좁은 attention/KV tensor**가 27B보다 KV-cache 양자화에 덜 견고하게 만들 수 있다고 설명했고, 또 다른 사용자는 빠른 코드베이스 분석에는 **35B-A3B Q6**를 쓰고 코드 생성/계획에는 **27B Q8**로 전환한다고 했다.** 댓글 작성자들은 이를 대체로 속도와 신뢰성의 트레이드오프로 보았다. 35B는 빠르고 읽기/분석에 유용하지만, 27B는 더 깨끗한 코드와 더 적은 실수를 내는 것으로 인식됐다. 또한 KV-cache 압축이 장문 컨텍스트 에이전틱 워크로드에서는 일반적인 “약간의 지능 저하” 조언보다 훨씬 더 중요할 수 있다는 데 의견이 모였다.
  - 한 댓글 작성자는 **Qwen 3.6 35B-A3B**가 **27B**보다 훨씬 좁은 attention tensor를 가지므로 KV-cache 압축에 더 민감하다고 했다. 주장은 **27B의 더 넓은 tensor가 KV cache precision이 낮아질 때 더 견고하다**는 것이다.
  - 한 워크플로는 빠른 코드베이스 분석에 **35B-A3B at Q6**를 사용한 뒤, 구현 계획과 코드 생성에는 **27B at Q8**로 전환한다. 기술적 근거는 35B-A3B가 읽기/분석에 더 빠른 반면, 27B는 사용자 하드웨어에서 더 느리지만 더 깨끗한 코드와 적은 실수를 낸다는 것이다.
  - 한 비판적 댓글 작성자는 비교가 유효한 ablation이 아니라고 주장했다. 모델 가중치 **27B → 35B**, KV-cache 정밀도 **Q8 → FP16**, 양자화 방식 **K-quant → I-Quant** 등 여러 변수가 동시에 바뀌었기 때문이다. 또한 *“nearly one-shotted”* 같은 `n=1` 결과는 KV-cache 효과나 모델 품질에 대한 결론을 뒷받침하기에 너무 약하다고 경고했다.

### /r/LocalLlama + /r/localLLM: Local LLM Hardware, 3090 Rigs vs Mac Studio

- **[Finally finished my LLM server: EPYC 9575F, 4× RTX 3090 (96GB VRAM), 768GB ECC RAM](https://www.reddit.com/r/LocalLLaMA/comments/1tx9tf2/finally_finished_my_llm_server_epyc_9575f_4_rtx/)** (Activity: 632): **한 사용자가 **Supermicro H13SSL-N**, **AMD EPYC 9575F**(`64C/128T` Zen 5), `768GB` DDR5-5600 ECC RDIMM, 총 `96GB` VRAM의 **4× RTX 3090**, `1×2TB` OS NVMe, `2×3.94TB` 데이터 NVMe, **Corsair 9000D** 케이스의 `2050W` ATX 3.1 PSU로 로컬 LLM 추론 서버를 완성했다. 계획된 워크로드는 고처리량 소형 모델 서빙용 **vLLM**과 더 큰 추론(reasoning) 모델용 **llama.cpp**이며, 모든 GPU는 `250W`로 전력 제한된다. 두 장의 3090은 메인보드에 장착되고 두 장은 전면에 장착됐으며, [Thingiverse](https://www.thingiverse.com/thing:2804306)의 출력 가능한 팬 마운트를 사용해 공기 흐름을 추가했다. 빌더는 경제성이 타이밍/중고 시장 조달에 크게 좌우된다고 설명했다. `12×64GB` ECC RDIMM은 개당 `~$325`, `3× RTX 3090`은 개당 `~$650`, EPYC는 `~$3,800`였으며, 현재 가격에서는 빌드의 타당성이 낮아진다는 것이다.** 댓글의 주요 기술 요청은 **Kimi K2.6**, **GLM 5.1**, **MiniMax 2.7** 같은 대형 모델의 실제 추론 벤치마크였다. 즉 `$25k+` 로컬 추론 박스가 현재 무엇을 제공하는지 묻는 것이었다. 다른 상위 댓글은 비기술적 농담이었고 구현 세부 정보를 더하지 않았다.
  - 기술적으로 관련 있는 요청은 **Kimi K2.6**, **GLM 5.1**, **MiniMax 2.7** 같은 대형 MoE/프런티어 오픈 모델에 대한 실제 추론 벤치마크였다. 특히 `$25k+` 4× RTX 3090 / EPYC 서버가 실제로 무엇을 제공하는지 정량화해 달라는 요청이었다. 제안될 수 있는 지표는 tokens/sec, 최대 컨텍스트 동작, 멀티 GPU sharding 오버헤드, VRAM/RAM offload 특성 등이다.
  - 한 댓글 작성자는 시스템 균형에 의문을 제기하며 768GB ECC RAM에 약 **`$30k`**, EPYC CPU에 **`$8k`** 정도가 들 수 있다고 추정했다. 즉 중고 GPU보다 메모리/CPU 플랫폼이 비용을 지배할 수 있다는 뜻이다. 또 다른 사용자는 **4× RTX 3090**이 조각난 `96GB` VRAM과 높은 전력 소비를 만든다고 지적했고, 단일 **RTX 6000-class Blackwell** 카드가 통합 VRAM, 최신 CUDA 지원, 더 낮은 메모리 사용량을 위한 **NVFP4** 양자화 이점을 제공할 것이라고 주장했다.

- **[Honestly, dual 3090s are wearing me out. Thinking of jumping to a Mac Studio.](https://www.reddit.com/r/LocalLLM/comments/1txuqgl/honestly_dual_3090s_are_wearing_me_out_thinking/)** (Activity: 200): **게시자는 **dual RTX 3090** 로컬 LLM 설정으로 **Llama 3/Qwen 70B quantized models**를 돌리고 있으며, [`ExLlamaV2`](https://github.com/turboderp/exllamav2)에서 약 `40 tok/s`를 얻지만 70B 모델에서 컨텍스트를 `~16k` 이상으로 밀면 VRAM 한계에 부딪힌다고 했다. 그는 이를 **128GB Mac Studio**로 교체할지 고민 중이며, 약 `15 tok/s`로 속도가 떨어지는 대신 더 큰 통합 메모리 컨텍스트, 예컨대 Q8 비슷한 모델에서 `64k` 코드베이스 컨텍스트, 낮은 발열/소음, 드라이버/백엔드 마찰 감소를 받아들이려 한다.**

### Less Technical AI Subreddits

- 다룬 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

---

## AI Discord Recap

### 접근 중단 안내

- **Discord 접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형태로 다시 가져오지는 않겠지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
