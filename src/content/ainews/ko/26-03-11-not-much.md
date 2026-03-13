---
title: "NVIDIA가 Nemotron 3 Super를 공개했다"
summary:
  - "NVIDIA가 Nemotron 3 Super를 공개했다"
  - "Perplexity가 Personal Computer를 출시했다"
  - "Anthropic이 The Anthropic Institute를 출범했다"
  - "Yann LeCun의 AMI Labs가 $1.03B를 유치했다"
  - "Fish Audio가 S2 TTS 모델을 공개했다"
date: 2026-03-11
originalUrl: "https://news.smol.ai/issues/26-03-11-a-quiet-day/"
hasHeadline: false
headline: "NVIDIA가 Nemotron 3 Super를 공개했다"
tags:
  - NVIDIA
  - Nemotron
  - Perplexity
  - Anthropic
  - Agents
isFeatured: false
---

## 헤드라인: NVIDIA가 Nemotron 3 Super를 공개했다

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

NVIDIA의 **Nemotron 3 Super**는 **120B parameter / ~12B active**, **1M context**를 내세운 오픈 모델 공개로, **hybrid Mamba-Transformer / SSM Latent MoE** 아키텍처와 에이전트형(agentic) 워크로드 지원을 전면에 내세웠다.

이번 공개의 핵심은 “오픈”과 “서빙 효율”이다. NVIDIA는 가중치(weights)뿐 아니라 데이터, 레시피(recipe), 인프라(infra) 디테일까지 폭넓게 공개한다고 강조했고, Blackwell 세대 배포를 겨냥해 FP4에서의 추론(inference) 속도 및 처리량(throughput) 개선을 주장했다.

생태계 측면에서는 vLLM, llama.cpp, Ollama 등 주요 서빙/런타임 도구로의 빠른 지원이 이어졌고, 성능 논의에서는 multi-token prediction(MTP) 및 긴 컨텍스트에서의 KV-cache 효율 같은 “왜 빠른가”에 대한 최적화 요소가 함께 주목을 받았다.

---

## AI Twitter Recap

### NVIDIA의 Nemotron 3 Super 공개와 오픈 모델 효율화

- **Nemotron 3 Super**: 오늘 가장 뚜렷한 기술 릴리스로, **120B parameter / ~12B active** 오픈 모델이며 **1M context**, **hybrid Mamba-Transformer / SSM Latent MoE** 아키텍처, 에이전트형 워크로드 지원을 명시했다. NVIDIA는 **weights, data, recipe, infra details**까지 공개하는 이례적 개방성을 강조했고, Blackwell 세대 배포를 겨냥해 **FP4에서 GPT-OSS-120B 대비 추론(inference) 최대 2.2x 가속** 등을 주장했다 ([announcement via @ctnzr](https://x.com/ctnzr/status/2031762077325406428), [tech perspective via @kuchaev](https://x.com/kuchaev/status/2031765052970393805), [Wired reporting on NVIDIA’s broader open-model investment](https://x.com/willknight/status/2031792027390587313)).
- **서드파티 반응**: **active-parameter 대비 역량**과 **이례적으로 빠른 서빙 속도**라는 평가가 모였다. [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2031765321233908121)는 AA Intelligence Index에서 **36점**으로 **gpt-oss-120b (33)**를 앞서고 **Qwen3.5-122B-A10B (42)**보다는 낮다고 평가하면서, GPU당 처리량이 GPT-OSS-120B 대비 **~10% 높다**고 언급했고 출시 당일 서빙 속도는 **최대 484 tok/s** 주장도 있었다. 또한 [vLLM](https://x.com/vllm_project/status/2031779213527957732), [llama.cpp](https://x.com/ggerganov/status/2031819920363733205), [Ollama](https://x.com/ollama/status/2031777869681000676), [Together](https://x.com/togethercompute/status/2031831368339243454), [Baseten](https://x.com/basetenco/status/2031775755253026965), [W&B Inference](https://x.com/wandb/status/2031778471614300563), [LangChain](https://x.com/LangChain/status/2031784791251525934), [Unsloth GGUFs](https://x.com/UnslothAI/status/2031778104306499749) 등에서 즉각적인 커뮤니티/인프라 지원이 이어졌다.
- **왜 빠른가 논의**: [@ctnzr](https://x.com/ctnzr/status/2031776463029186920)는 핵심 추론 최적화로 **native multi-token prediction (MTP)**를 강조했다. 작은 배치에서 남는 GPU 연산을 활용해 임시로 여러 토큰을 예측하고, 이후 패스로 검증하는 방식이라는 설명이다. [@bnjmn_marie](https://x.com/bnjmn_marie/status/2031821490916905089)는 Qwen3.5-122B 대비 **KV-cache 이점**을 수치로 비교했는데, Nemotron의 attention KV 항은 BF16 기준 **8,192 bytes/token** 정도인 반면 Qwen3.5-122B는 **24,576 bytes/token**로, 긴 컨텍스트 서빙 부담이 크게 달라질 수 있다고 했다.

### 에이전트 인프라, 오케스트레이션, 그리고 “더 큰 IDE” 논지

- **“더 큰 IDE”**: 제품 트렌드는 “모델과 채팅”에서 **지속형(agent) 런타임**과 **오케스트레이션 레이어**로 이동하는 모습이다. [@karpathy](https://x.com/karpathy/status/2031767720933634100)는 “IDE의 시대는 끝났다”라는 프레이밍이 아니라, **“we’re going to need a bigger IDE”**—작업 단위가 파일이 아니라 **에이전트**가 되는 환경—가 필요하다고 주장했고, 이를 **관찰 가능하고(observable) 제어 가능한** ‘읽기 쉬운(legible)·포크 가능한(forkable) 에이전트 조직’ 개념으로 확장했다 ([follow-up](https://x.com/karpathy/status/2031770607466291393), [org legibility thread](https://x.com/karpathy/status/2031774631498273005)).
- **런타임 제품 출시**: **Perplexity**는 **Personal Computer**를 발표했다. **Mac mini**에서 동작하는 **항상 켜진(always-on) 로컬/클라우드 하이브리드**로, 로컬 파일/앱/세션을 가로지르며 원격 제어도 가능하다고 했다 ([launch](https://x.com/perplexity_ai/status/2031790180521427166), [waitlist](https://x.com/perplexity_ai/status/2031790221612957875)). 동시에 **Computer for Enterprise**도 확장하며 **20개 전문 모델**과 **400+ 앱**을 아우르는 오케스트레이션을 설명했다 ([enterprise launch](https://x.com/perplexity_ai/status/2031799033489211771), [API platform update](https://x.com/perplexity_ai/status/2031828396435771563)). 별도로 **Replit Agent 4**는 앱/사이트/슬라이드를 위한 **병렬 에이전트** 기반 캔버스형 협업 워크플로를 내세웠고 ([launch](https://x.com/amasad/status/2031755113694679094)), **Base44 Superagents**는 비기술 사용자를 위해 Gmail, Slack, Stripe, CRM 등 “batteries included” 통합을 강조했다 ([launch](https://x.com/MS_BASE44/status/2031758998475505848)).
- **핵심은 모델이 아니라 하네스(harness)**: [@Vtrivedy10](https://x.com/Vtrivedy10/status/2031751769051570256)는 모델 개선이 이전엔 너무 취약했던 제품 경험을 가능하게 하면서, **evals/metrics → autonomous harness edits → hill climbing** 같은 자기개선 루프가 열렸다고 설명했다. LangChain은 Deep Agents에 **autonomous context compression**을 추가해, 토큰 한도에서 강제 절단하는 대신 작업 경계에서 컨텍스트를 압축(compact)하도록 했다 ([announcement](https://x.com/LangChain_OSS/status/2031799813851730075)). 또한 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2031798071345234193)는 에이전트를 위한 **computer access** 기술 글을 공개하며 실행 루프, 파일시스템 컨텍스트, 네트워크 접근, 가드레일(guardrails) 등을 다뤘다.

### Anthropic, Claude 중심 워크플로, 그리고 초기 RSI 불안

- **The Anthropic Institute 출범**: Anthropic은 강력한 AI에 대한 제도적 프레이밍을 강화했다. **Jack Clark**가 **Head of Public Benefit** 역할로 이끄는 **The Anthropic Institute**를 발표했고, ML 엔지니어링·경제학·사회과학 전반을 걸쳐 고도 AI에 대한 공적 담론을 형성하겠다는 취지를 밝혔다 ([launch](https://x.com/AnthropicAI/status/2031674087374815577), [leadership note](https://x.com/AnthropicAI/status/2031674092290474421), [Jack Clark on role change](https://x.com/jackclarkSF/status/2031746605117010245)).
- **TIME 기사 기반 RSI 논의 확산**: 여러 트윗이 Anthropic 내부에서 **recursive-self-improvement**의 초기 역학이 나타나는 것 아니냐는 우려를 키웠다. [@kimmonismus](https://x.com/kimmonismus/status/2031803194817511744)는 미래 모델 개발에 쓰이는 코드의 **70–90%**가 Claude로 작성되고, 릴리스 주기가 수개월에서 **수주**로 압축되었으며, **완전 자동화된 AI 연구가 1년 내** 가능할 수 있다는 주장을 요약했다. [@Hangsiin](https://x.com/Hangsiin/status/2031752106496135541)는 Claude가 일부 내부 작업에서 인간 감독자보다 **427x 빠르다**는 문장을 특히 인상적으로 강조하며, 중첩된 병렬 사용 패턴이 이미 흔하다고 언급했다.
- **Claude Code 의존의 실무 리스크**: 이 서사는 곧바로 실무적 반례(운영 의존성)로 이어졌다. 로그인/인증 장애로 개발자 불편이 크게 드러났고, [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2031777214321262637)는 실리콘밸리 생산성이 90% 떨어졌다고 농담했으며, [@dejavucoder](https://x.com/dejavucoder/status/2031760986907312635)는 로그인 불가를 보고했고, [@HamelHusain](https://x.com/HamelHusain/status/2031783246980399375)는 토큰 기반 접근으로의 우회를 설명했다. 이 장애는 [@karpathy](https://x.com/karpathy/status/2031792523187040643)에게서 “OAuth outage로 autoresearch labs가 날아갔다”는 언급까지 나오며, 향후 프런티어 모델 서비스 중단이 **“intelligence brownouts”** 같은 현상으로 나타날 수 있다는 프레임으로 확장됐다.

### 에이전트 평가, 검색, 포스트트레이닝, 자기개선 연구

- **PostTrainBench v1.0**: 병목이 베이스 모델 자체보다 **에이전트 시스템을 측정하고 개선하는 것**으로 이동하고 있다는 신호가 나왔다. [@karinanguyen_](https://x.com/karinanguyen_/status/2031789998811595154)는 프런티어 에이전트가 단순화된 설정에서 언어 모델을 **post-train**할 수 있는지 평가하는 **PostTrainBench v1.0**를 공개하며, **AI R&D 자동화 / recursive self-improvement** 진행을 추적하려는 목적을 밝혔다. 스레드의 한 ablation에서는 **GPT-5.1 Codex Max**에서 high보다 **medium reasoning effort**가 더 나았는데, 추가 토큰이 컨텍스트 압축(compaction)을 유발해 성능을 해쳤다는 설명이다 ([ablation details](https://x.com/karinanguyen_/status/2031790007028236452)).
- **EvoSkill / AgentIR**: [@omarsar0](https://x.com/omarsar0/status/2031727864199208972)는 executor/proposer/skill-builder 트라이어드가 실패에서 재사용 가능한 스킬을 발굴·정제하는 **EvoSkill**을 소개했고, OfficeQA에서 **Claude Code + Opus 4.5**를 **60.6% → 67.9%** exact match로 올렸다고 전했다. [@dair_ai](https://x.com/dair_ai/status/2031726356292407366)는 에이전트의 추론 흔적(reasoning trace)과 쿼리를 함께 임베딩하는 **reasoning-aware retriever**인 **AgentIR**을 공유하며, BrowseComp-Plus에서 **68%** 정확도를 보고했다(기존 대형 임베딩 모델 **52%**, BM25 **37%** 대비).
- **신뢰성(reliability)과 보안**: 적대적 공격이 없어도 에이전트 실패를 보안 문제로 보아야 한다는 주장도 재부상했다. [@random_walker](https://x.com/random_walker/status/2031693490669654447)는 많은 실패가 공격이 아니라 **비신뢰성**에서 비롯된다고 보고, 이를 정의·측정·완화할 필요가 있다는 맥락에서 Princeton의 NIST 응답을 언급했다. 또한 [@gabriberton](https://x.com/gabriberton/status/2031653520429203498)가 말했듯, 코드 에이전트 시대의 핵심 역량으로 **eval 제작**이 강조되며 무게중심은 **측정, 하네스, 프로덕션 피드백 루프**로 이동 중이다.

### 멀티모달, 임베딩, 그리고 물리/비전 AI

- **Gemini Embedding 2**: 멀티모달 모델 측면에서는 벤치마크보다 실무적 가격/운영 분석이 더 주목을 받았다. [@osanseviero](https://x.com/osanseviero/status/2031691784074477766)는 **text, images, video, audio, PDFs** 임베딩과, 차원을 낮춰 저장 효율을 높이는 **Matryoshka embeddings**를 요약했다. [@neural_avb](https://x.com/neural_avb/status/2031648857625395321)는 텍스트 가격이 경쟁사 대비 높아 보인다는 점을 들어, 이 모델을 **multimodal retrieval**에 더 적합하게 쓰는 쪽이 합리적일 수 있다고 했고, 영상 임베딩 비용은 업로드 전 **FPS**를 공격적으로 낮추지 않으면 폭증할 수 있다고 경고했다.
- **Qwen3.5 멀티모달 아키텍처**: [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2031686944040915152)는 **Gated DeltaNet linear attention**과 **Gated full attention**을 섞는 **hybrid attention** 스택, **397B A17B MoE** 및 **27B dense** 변형, **262k native context**(1M까지 확장 가능), 학습에서의 **MTP** 등 설계를 정리했다. 하이브리드 선형/풀 어텐션, GQA, DSA, MoE 라우팅이 이제 핵심 설계 축이라는 점을 압축적으로 보여주는 스레드라는 평가다.
- **Reka Edge 및 의료 적용**: 물리/비전 AI에서는 **Reka Edge**가 생산(production) 지향 VLM으로 출시되며, 이미지/비디오 이해, 객체 탐지, 툴 사용에서 선도 8B 모델 대비 **입력 토큰 3x 감소**와 **처리량 65% 향상**을 주장했다 ([launch](https://x.com/RekaAILabs/status/2031781818349834628)). 또한 Google은 표준 스크리닝에서 놓친 **interval breast cancers**의 **25%**를 식별한 시스템을 공유했고 ([Google](https://x.com/Google/status/2031734020979998795)), **AMIE**의 대화형 임상 추론 실제 연구에서 안전하고 실행 가능하며 환자 수용성이 높았다는 결과도 함께 전했다 ([Google Research](https://x.com/GoogleResearch/status/2031777657835139263)).

### 참여(engagement) 기준 Top tweets

- **Perplexity’s “Personal Computer”**: Mac mini에서 동작하는 항상 켜진 로컬/클라우드 에이전트로, 원격 제어와 로컬 앱/파일 접근을 지원한다고 했다 ([launch](https://x.com/perplexity_ai/status/2031790180521427166)).
- **Anthropic Institute / Jack Clark’s new role**: 강력한 AI를 둘러싼 공익(public benefit)·공적 담론 노력을 제도화했다 ([Anthropic](https://x.com/AnthropicAI/status/2031674087374815577), [@jackclarkSF](https://x.com/jackclarkSF/status/2031746605117010245)).
- **Replit Agent 4**: 앱/사이트/슬라이드 출하(shipping)를 위한 협업형 멀티 에이전트 캔버스를 내세웠다 ([announcement](https://x.com/amasad/status/2031755113694679094)).
- **NVIDIA Nemotron 3 Super**: 120B/12B-active 하이브리드 오픈 모델과 1M 컨텍스트, 출시 당일 생태계 지원이 강조됐다 ([@ctnzr](https://x.com/ctnzr/status/2031762077325406428)).
- **Claude Code outage as infra risk**: 프런티어 모델 인증 장애가 실제 엔지니어링 워크플로를 흔드는 사례로 회자됐다 ([@karpathy](https://x.com/karpathy/status/2031792523187040643), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2031777214321262637)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[M5 Max just arrived - benchmarks incoming](https://www.reddit.com/r/LocalLLaMA/comments/1rqnpvj/m5_max_just_arrived_benchmarks_incoming/)** (Activity: 2188): `mlx_lm` 도구로 M5 Max 128GB 14" 노트북에서 여러 ML 모델을 테스트한 벤치마크 공유다. Qwen3.5-122B-A10B-4bit, Qwen3-Coder-Next-8bit, Qwen3.5-27B-Claude-4.6-Opus-Distilled-MLX-6bit, gpt-oss-120b-MXFP4-Q8 등을 대상으로 토큰/초와 프롬프트 길이별 피크 메모리 같은 지표를 비교했다. BatchGenerator 이슈를 겪었지만 새 Python 환경과 `stream_generate`로 해결했다고 한다. 결과는 25.319–92.605 GB 피크 메모리, 14.225–87.873 tok/s 생성 속도 등으로 모델별 편차가 컸다. 댓글에서는 벤치마크 결과를 기대하며 특히 Qwen 3.5 27b MLX 성능에 관심을 보였다.
- **[Qwen3.5-35B-A3B Uncensored (Aggressive) — GGUF Release](https://www.reddit.com/r/LocalLLaMA/comments/1rq7jtm/qwen3535ba3b_uncensored_aggressive_gguf_release/)** (Activity: 1019): [Hugging Face](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)에 공개된 **Qwen3.5-35B-A3B Aggressive** GGUF 릴리스로, 거부(refusal)를 하지 않는(`0/465 refusals`) “uncensored” 성격을 강조한다. `35B` 파라미터 중 `~3B` active인 MoE(`256 experts`, 토큰당 `8+1` active)이며 텍스트/이미지/비디오 멀티모달 입력과 hybrid attention(Gated DeltaNet + softmax, `3:1`)을 언급한다. `BF16`, `Q8_0`, `Q6_K` 등 양자화(quantization) 포맷과, 비전 지원을 위한 `mmproj`, 권장 샘플링 파라미터(`temp=1.0`, `top_k=20`, `presence_penalty=1.5`), `llama.cpp`에서 `--jinja` 사용 권고가 포함됐다. 댓글에서는 KLD 같은 지표로 “능력 손실 없음”을 검증해야 한다는 의견, 긴 컨텍스트 품질 저하 우려, `Q4_K_M` 버전 기대 등이 나왔다.
- **[Fish Audio Releases S2: open-source, controllable and expressive TTS model](https://www.reddit.com/r/LocalLLaMA/comments/1rptdpl/fish_audio_releases_s2_opensource_controllable/)** (Activity: 362): **Fish Audio**가 새 TTS 모델 **S2**를 공개했다. `[whispers sweetly]`, `[laughing nervously]` 같은 자연어 감정 태그로 표현력/제어력을 높였고 `80 languages` 이상 지원, 1회 패스로 멀티 스피커 대화 생성, `100ms` time-to-first-audio 등을 내세웠다. Audio Turing Test 및 EmergentTTS-Eval에서 Google/OpenAI 계열 클로즈드 모델을 상회한다고 주장했으며, 모델과 코드는 [Hugging Face](https://huggingface.co/fishaudio/s2-pro) 및 [GitHub](https://github.com/fishaudio/fish-speech)에서 제공되지만 상업적 사용은 별도 라이선스가 필요하다고 한다. 한편 “진정한 오픈소스인가”에 대한 논쟁이 있었고, 창업자는 이른 출시였음을 인정하며 자료와 벤치마크를 보완했다고 밝혔다. 또한 연구/비상업 목적에선 [Hugging Face](https://huggingface.co/fishaudio/s2-pro)에서 모델을, [GitHub](https://github.com/fishaudio/fish-speech)에서 코드를 확인할 수 있다고 덧붙였다.
- **[I regret ever finding LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1rq8ijl/i_regret_ever_finding_localllama/)** (Activity: 1408): 공부 보조용으로 AI를 쓰던 사람이 로컬 LLM에 빠져들어 **MI50 GPUs**, 양자화(quantization), 커스텀 매트릭스 등으로 점점 더 깊게 들어가는 과정을 유머러스하게 풀었다. **GLM flash**, **Qwen** 같은 발전을 기다리며 로컬 성능 최적화에 몰두하는 흐름이 “실용 → 취미/집착”으로 이동했다는 인상을 준다. 댓글에서는 로컬 AI가 엔지니어링 바깥에선 저평가되어 있지만 Linux처럼 큰 잠재력이 있다는 의견과, 지식을 쌓는 긍정적 중독이라는 반응이 있었다.
- **[1 million LocalLLaMAs](https://www.reddit.com/r/LocalLLaMA/comments/1rqcsrj/1_million_localllamas/)** (Activity: 430): 2023년 3월에 만들어진 ‘LocalLlama’ 서브레딧이 빠르게 100만 멤버를 모은 성장을 보여주는 이미지다. 비교적 짧은 기간의 급성장과 높은 참여가 로컬 호스팅 AI 모델에 대한 관심을 반영한다. 댓글에서는 과거 모더레이션 문제에도 커뮤니티가 버텨온 점, 다른 테마의 AI “로어(lore)”를 더 선호한다는 취향 차이 등이 언급됐다.

### Less Technical Subreddits

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Anthropic: Recursive Self Improvement Is Here. The Most Disruptive Company In The World.](https://www.reddit.com/r/singularity/comments/1rqymbn/anthropic_recursive_self_improvement_is_here_the/)** (Activity: 1141): Anthropic과 **Claude**가 차기 모델 개발 코드의 `70% to 90%`를 작성하며 *recursive self-improvement*로 이동 중이라는 주장과 함께, **Evan Hubinger**가 이 현상이 이미 존재한다고 언급했다는 내용이 공유됐다. **Claude 3.7 Sonnet** 출시가 안전 문제로 10일 지연됐다는 이야기, **Dario Amodei**가 5년 내 엔트리급 화이트칼라 절반이 대체될 수 있다고 경고했다는 주장, 군사 적용·정책 논쟁 등도 함께 언급된다. 댓글에서는 인간이 작성하지 않은 코드 비중이 커질수록 더 엄격한 테스트가 필요하다는 의견 등 속도와 안전의 균형을 두고 논쟁이 이어졌다.
- **[Andrej Karpathy's Newest Development - Autonomously Improving Agentic Swarm Is Now Operational](https://www.reddit.com/r/singularity/comments/1rq5vlw/andrej_karpathys_newest_development_autonomously/)** (Activity: 1125): **Andrej Karpathy**가 자율적으로 개선되는 agentic swarm을 통해 신경망 학습을 최적화했다는 소식이다. 약 `700 changes` 중 `20`개가 “Time to GPT-2” 지표에서 `11%` 개선을 만들어 `2.02 hours`에서 `1.80 hours`로 줄였다고 한다. “try → measure → think → try again” 연구 루프를 인간 개입 없이 수행했다는 점이 이정표로 강조되며, 자세한 내용은 [GitHub](https://github.com/karpathy/nanochat)에서 확인할 수 있다고 했다. 댓글에서는 RAG 파이프라인 최적화 같은 유사 사례를 떠올리며 자율 최적화의 의미를 평가하는 한편, 정렬(alignment)과 통제 문제를 우려하는 목소리도 있었다. 또한 한 댓글은 동일한 성과를 언급하며 [GitHub link](https://github.com/karpathy/nanochat)를 다시 인용했다.
- **[An EpochAI Frontier Math open problem may have been solved for the first time by GPT5.4](https://www.reddit.com/r/singularity/comments/1rq1av1/an_epochai_frontier_math_open_problem_may_have/)** (Activity: 646): **GPT-5.4**가 **EpochAI Frontier Math**의 오픈 문제를 풀었을 수 있다는 주장이다. 검증된다면 AI가 공개 연구 문제 해결에 기여할 수 있음을 보여주는 중요한 이정표가 될 수 있지만, 아직 확인 과정이 남아있다고 전해졌다. 해당 문제 모음인 [EpochAI's open problems](https://epoch.ai/frontiermath/open-problems)은 AI를 통해 수학 지식을 진전시키려는 취지로 소개됐다.
- **[Yann LeCun unveils his new startup Advanced Machine Intelligence (AMI Labs) -- and raises $1.03B](https://www.reddit.com/r/singularity/comments/1rprdy7/yann_lecun_unveils_his_new_startup_advanced/)** (Activity: 997): **Yann LeCun**과 **Alexandre LeBrun**이 **Advanced Machine Intelligence (AMI Labs)**를 공동 설립했고, **JEPA** 기반의 **world models** 개발을 목표로 `$1.03 billion`을 유치했다는 내용이다. 환각(hallucination) 등 LLM의 한계를 넘어서 물리적 현실을 모델링하려는 장기 연구 성격으로 소개되며, NVIDIA·Samsung·Bezos Expeditions 등 투자자와 오픈소스 공개 계획도 언급된다. 출처로 [TechCrunch](https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/)가 인용됐다.
- **[How I topped the Open LLM Leaderboard using 2x 4090 GPUs - Research notes in Blog form](https://www.reddit.com/r/MachineLearning/comments/1rq6g08/how_i_topped_the_open_llm_leaderboard_using_2x/)** (Activity: 234): Qwen2-72B에서 가중치를 바꾸지 않고 7개 중간 레이어 블록을 복제하는 방식으로 Open LLM Leaderboard 전반 성능을 끌어올렸다는 연구 노트다. 프리트레이닝이 레이어 스택에 이산적 기능 회로를 만든다는 가설과, 2x RTX 4090 같은 제한된 자원에서도 의미 있는 개선이 가능하다는 점이 강조됐다. 저자는 GLM-4.7, Qwen3.5 등을 듀얼 GH200에서 추가 실험 중이며 코드/모델 공개 계획도 언급했다. 자세한 내용은 [full technical write-up](https://dnhkng.github.io/posts/rys/)에 정리돼 있다.
- **[Benchmarking Model Performance: Launch Day vs. Current API Generations](https://www.reddit.com/r/Bard/comments/1rprddw/benchmarking_model_performance_launch_day_vs/)** (Activity: 227): Gemini 3.1 Pro의 두 시점 출력(2026-02-19 vs 2026-05-10)을 비교해 품질이 저하된 것처럼 보인다는 주장이다. 다만 LLM 추론은 확률적(stochastic)이라 단일 샘플 비교로는 결론을 내리기 어렵고, 여러 번 반복 실행이 필요하다는 반론이 나왔다. 또한 표기된 날짜(2026년 5월 10일)가 현재 시점과 불일치해 오류/오해 가능성을 제기하는 의견도 있었다.
- **[Been quietly building a faceless YouTube channel using Claude and I'm embarrassingly close to monetisation](https://www.reddit.com/r/ClaudeAI/comments/1rqbrsm/been_quietly_building_a_faceless_youtube_channel/)** (Activity: 2938): **Claude**로 스크립트를 만들고, **ElevenLabs**로 보이스오버, **Magic Hour**로 비디오 생성, **CapCut**로 편집하는 ‘페이스리스’ 유튜브 채널 제작 워크플로를 공유했다. 사용자에 따르면 아직 큰 수익을 주장하진 않지만 수익화가 가까워졌다고 한다. 댓글에서는 AI 생성 콘텐츠에 대한 강한 반감(‘dead Internet content’, ‘AI slop’)과 유사 채널에 대한 플랫폼 제재 가능성 등을 둘러싼 논쟁이 나타났다.
- **[I've made $70k from AI Videos since August 2025 AMA](https://www.reddit.com/r/VEO3/comments/1rqv704/ive_made_70k_from_ai_videos_since_august_2025_ama/)** (Activity: 224): 2025년 8월부터 AI 비디오 제작으로 전환해 $70k 수익을 올렸다는 제작자의 AMA다. Skool 같은 커뮤니티 참여를 통한 네트워킹, 프로덕션 하우스의 AI 스킬 수요, 고품질 포트폴리오로 의사결정자를 설득하는 전략, UGC 시장 탐색 등이 언급된다. Nano Banana, Kling 같은 모델을 단순 프롬프트로 효율적으로 돌리는 팁도 포함됐다.
- **[Stop paying $1,000+ for "AI Bootcamps". Anthropic (makers of Claude) just dropped a 100% free academy.](https://www.reddit.com/r/ClaudeAI/comments/1rqopis/stop_paying_1000_for_ai_bootcamps_anthropic/)** (Activity: 1679): Anthropic이 무료 온라인 아카데미를 열어 Claude 활용 중심의 AI 강좌를 제공한다는 내용이다. Amazon Bedrock, Google Cloud Vertex AI 같은 플랫폼 통합 등 실무 주제를 다루며, 교육자·비영리 등 다양한 대상에 맞춘 커리큘럼을 표방한다. 댓글에서는 이 아카데미가 2025년 중반부터 존재했다는 지적과, 고가 부트캠프의 가치에 대한 회의가 함께 나왔다.
- **[Claude helped me get a traffic light reprogrammed in my town](https://www.reddit.com/r/ClaudeAI/comments/1rphxvk/claude_helped_me_get_a_traffic_light_reprogrammed/)** (Activity: 3301): 사용자(Lenny)가 Claude를 이용해 비전문가 요청을 신호 엔지니어가 이해할 기술 문장으로 변환했고, Essex의 특정 교차로 신호 프로그램이 수정되어 사이클당 2–3대가 더 통과할 수 있게 됐다는 사례다. 공공과 기술 전문가 간 커뮤니케이션을 돕는 실용적 활용으로 소개되며, 댓글에서는 빠른 대응과 현실 문제 해결에 대한 긍정 반응이 있었다.
- **[ChatGPT vs Gemini vs Claude vs Perplexity: I gave them $1k each to trade stocks. After 9 weeks, ChatGPT went from frozen in cash to +21% (one stock doubled)](https://www.reddit.com/r/ChatGPT/comments/1rq33za/chatgpt_vs_gemini_vs_claude_vs_perplexity_i_gave/)** (Activity: 1345): 4개 모델(ChatGPT, Gemini, Claude, Perplexity)에 각각 `$1,000`을 주고 Alpaca APIs로 9주간 자동 주식 거래를 시킨 실험을 공유했다. ChatGPT가 `+21.1%`로 1위였고, Perplexity는 현금 비중을 높여 `+1.1%`, Gemini/Claude는 각각 `-6.6%`, `-11.5%`였다고 한다. 같은 기간 S&P 500은 `-1.5%`였다는 비교도 포함됐다. 실험은 [GitHub](https://seve1995.github.io/ai-portfolio-experiment/)에 정리되어 있고 추가 내용은 [Substack](https://aiportfolioexperiment.substack.com/)에서 제공된다고 한다.

---

## AI Discord Recap

### AINews

- **공지**: Discord가 오늘 접근을 차단해 더 이상 이 형태로는 제공하지 않는다고 밝혔다. 대신 새로운 AINews를 곧 출시할 예정이며, 여기까지 읽어준 독자에게 감사 인사를 전했다.
