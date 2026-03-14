---
title: "Anthropic, Opus 4.6 1M 컨텍스트 기본 제공"
summary:
  - "Anthropic, Opus 4.6 1M 컨텍스트 기본 제공"
  - "Perplexity Computer, iOS 크로스디바이스 동기화"
  - "RandOpt, 가우시안 탐색으로 RL 성능 근접"
  - "OmniCoder-9B, 262K 컨텍스트 오픈 웨이트 공개"
  - "OpenFold3 preview 2, 학습셋·설정까지 공개"
date: 2026-03-13
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-13-not-much.md"
hasHeadline: false
headline: "Anthropic, Opus 4.6 1M 컨텍스트 기본 제공"
tags:
  - OpenAI
  - Codex
  - Anthropic
  - MCP
  - Qwen
isFeatured: false
---

## 헤드라인: Anthropic, Opus 4.6 1M 컨텍스트 기본 제공

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) | [AINews' website](https://news.smol.ai/) | [AINews is now a section of Latent Space](https://www.latent.space/p/2026) | [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic이 Opus 4.6의 1M 컨텍스트를 Max/Team/Enterprise 기본값으로 적용하고, API에서 롱 컨텍스트(long context) 추가 요금과 베타 헤더 요구를 제거했으며, 요청당 최대 600장 이미지/PDF 페이지까지 미디어 한도를 확장했다. 1M 토큰에서 MRCR v2 78.3%라는 지표도 함께 언급되며 장문 컨텍스트 성능의 새로운 고점으로 평가됐다.

---

## AI Twitter Recap

### 에이전트 인프라, MCP 마찰, 지속 메모리

- **MCP 반발은 수요보다 사용성(ergonomics) 이슈**: 피드의 상당 부분이 **MCP**가 “죽었다” 혹은 단지 과노출됐는지를 두고 엔지니어들이 논쟁했다. [@pamelafox](https://x.com/pamelafox/status/2032315760530665895)는 “curl에 대규모로 노출된 뒤 Twitter에서 MCP 사망 선고가 났다”고 농담했고, [@tadasayy](https://x.com/tadasayy/status/2032327227472589282)는 사용이 여전히 폭증 중이라고 반박했다. 더 실질적인 해석은 [@llama_index](https://x.com/llama_index/status/2032487366129233950)에서 나왔는데, 결정적(deterministic)이고 중앙에서 유지되는 API 및 빠르게 바뀌는 그라운드 트루스(ground truth)가 필요할 때 **MCP tools**가 강하고, **skills**는 더 가벼운 로컬 자연어 절차지만 실패 가능성이 더 높다고 정리했다. 이어서 [@bromann](https://x.com/bromann/status/2032554703863820325)는 **Chrome v146의 web MCP 지원**을 예로 들며, X를 지속적으로 브라우징하고 일일 요약을 컴파일하는 LangChain Deep Agent를 시연했다.
- **메모리(memory)가 에이전트의 차별화 요소로 부상**: 기술적으로 가장 흥미롭다고 평가된 스레드는 **지속 메모리(persistent memory)**와 자기개선(self-improvement)을 다뤘다. [@dair_ai](https://x.com/dair_ai/status/2032459951306866714)는 에이전트 궤적(trajectory)에서 재사용 가능한 전략/복구/최적화 팁을 추출하는 IBM 작업을 소개하며, AppWorld에서 **작업 완료(task completion)를 69.6%→73.2%**, **시나리오 목표(scenario goals)를 50.0%→64.3%**로 끌어올렸고 특히 어려운 과제에서 개선 폭이 컸다고 강조했다. 동시에 [@omarsar0](https://x.com/omarsar0/status/2032465974159618452)는 다중 에이전트 메모리를 “그냥 컨텍스트를 더 넣는 것”이 아니라 캐시/메모리 계층(hierarchy), 일관성(coherence), 접근 제어(access control) 문제를 갖는 **컴퓨터 아키텍처(computer architecture) 문제**로 재정의한 논문을 요약했다. 이는 여러 트윗에서 시간이 지나도 스킬과 사용자별 메모리를 유지하는 셀프 호스팅(self-hostable) 에이전트로 소개된 **Hermes Agent** 같은 제품 흐름과도 맞물린다 ([overview via @abxxai](https://x.com/abxxai/status/2032463531627663540), [demo via @Teknium](https://x.com/Teknium/status/2032435764588646839)).
- **에이전트 UX는 상시(always-on)·크로스디바이스로 이동**: 여러 출시가 에이전트를 “개인 컴퓨터가 오케스트레이터(orchestrator)”인 형태에 더 가깝게 밀어붙였다. **Perplexity Computer**가 iOS로 확장되며 크로스디바이스 동기화를 제공해, 사용자가 휴대폰이나 데스크톱에서 브라우저-컴퓨터 작업을 시작하거나 관리할 수 있게 됐다 ([announcement](https://x.com/perplexity_ai/status/2032494752642568417), [Arav follow-up](https://x.com/AravSrinivas/status/2032495364088238147)). [@bcherny](https://x.com/bcherny/status/2032578639276159438)는 **Claude Code**에서도 휴대폰에서 노트북 세션을 시작하는 유사한 흐름을 보여줬다. Genspark의 **Claw** 역시 지속적인 클라우드 컴퓨터를 가진 “AI 직원”으로 비슷하게 포지셔닝됐다 ([summary by @kimmonismus](https://x.com/kimmonismus/status/2032501165154332711)). 공통 패턴은 지속 세션 상태, 원격 실행(remote execution), 그리고 여러 모델/도구를 가로지르는 오케스트레이션(orchestration)이다.

### 추론(inference), 롱 컨텍스트(long context), 시스템 성능

- **Anthropic이 조용히 큰 인프라 업데이트를 반영**: **Opus 4.6 1M context**가 Max/Team/Enterprise 사용자 기본값이 됐고 ([via @_catwu](https://x.com/_catwu/status/2032515975556509827)), Anthropic은 API의 롱 컨텍스트(long context) 추가 요금을 제거하는 동시에 베타 헤더 요구를 없애고, 요청당 미디어 한도를 **이미지/PDF 페이지 600개**로 확장했다 ([details from @alexalbert__](https://x.com/alexalbert__/status/2032522722551689363)). 함께 언급된 지표로는 1M 토큰에서 **MRCR v2 78.3%**가 있었고, 여러 관찰자가 이를 롱 컨텍스트 성능의 새로운 고점으로 봤다 ([e.g. @kimmonismus](https://x.com/kimmonismus/status/2032531949571477517)).
- **스파스 어텐션(sparse attention) 최적화는 여전히 실질적 이득**: [@realYushiBai](https://x.com/realYushiBai/status/2032299919999189107)는 **IndexCache**를 소개했는데, **DeepSeek Sparse Attention**에서 스파스 어텐션 인덱스 정보를 레이어 간 재사용하도록 해 최적화한다. 보고된 성과는 GLM-5 (744B)에서 품질을 유지하며 엔드투엔드 약 **1.2×** 속도 향상, 그리고 30B급 실험 모델의 **200K context**에서 **75% of indexers**를 제거한 뒤 **1.82× prefill**, **1.48× decode**였다. “minimal code change”로 생산 규모의 스파스 어텐션 스택을 겨냥했다는 점이 특히 주목을 받았다.
- **KV/cache 및 서빙(serving) 최적화가 오토리그레시브(autoregressive) LLM 밖으로 확장**: [@RisingSayak](https://x.com/RisingSayak/status/2032427185345273928)는 Black Forest Labs의 **Klein KV**를 언급하며, 다중 참조 편집(multi-reference editing)을 위해 이후 DiT 디노이징(denoising) 단계에 캐시된 참조 이미지 KV를 주입해 최대 **2.5×** 가속을 주장했다. 인프라 측면에서는 [@satyanadella](https://x.com/satyanadella/status/2032515189086761005)가 Microsoft가 **NVIDIA Vera Rubin NVL72** 시스템을 검증하는 “first cloud”라고 말했고, [@LambdaAPI](https://x.com/LambdaAPI/status/2032427317696602575)는 Rubin 시대 클러스터에서 “hypervisor보다 bare metal” 접근을 밀었다. [@__tinygrad__](https://x.com/__tinygrad__/status/2032429289443053705)는 더 급진적으로 2027년에 “exabox”를 단일 거대한 Python-구동 GPU처럼 노출하는 엔드포인트를 언급했다.

### 포스트 트레이닝(post-training), RL 대안, 평가 연구

- **도발적인 포스트 트레이닝 결과: 랜덤 가우시안 탐색이 RL 미세조정(fine-tuning)에 근접**: MIT 인접 저자들의 **RandOpt / Neural Thickets**가 가장 많이 논의됐는데, [@yule_gan](https://x.com/yule_gan/status/2032482266773926281)과 [@phillip_isola](https://x.com/phillip_isola/status/2032483868603822402)가 공유했다. 주장 요지는 사전학습(pretrained) 가중치에 가우시안 노이즈를 더해 앙상블(ensembling)하면 추론, 코딩, 글쓰기, 화학, VLM 작업에서 **GRPO/PPO**와 비슷하거나 더 나은 성능에 도달할 수 있다는 것. 설명으로는 대형 사전학습 모델이 유용한 작업 특화자(task specialist)들이 촘촘히 분포한 국소 이웃—“**neural thickets**”—에 존재해, 포스트 트레이닝이 표준 최적화 직관보다 훨씬 쉽다는 점을 들었다.
- **제네릭 데이터 리플레이(replay)와 “pre-pre-training” 논의 재점화**: [@TheTuringPost](https://x.com/TheTuringPost/status/2032441644143055316)는 스탠퍼드의 **generic data replay** 연구를 요약하며, 미세조정에서 **1.87×**, 미드 트레이닝(mid-training)에서 **2.06×** 개선을 보고했고, 에이전틱 웹 내비게이션에서 **+4.5%**, 바스크 QA에서 **+2%** 같은 다운스트림 향상도 제시했다. 별도로 “pre-pre-training”에 대한 대화에서는, 포스트 트레이닝 트릭뿐 아니라 훈련 파이프라인의 더 이른 단계에서 스테이징/믹스처 설계를 다시 보자는 흐름이 나타났다 ([commentary from @teortaxesTex](https://x.com/teortaxesTex/status/2032611773308641493)).
- **평가는 여전히 병목—특히 진실성(truthfulness)과 검색 전략**: [@i](https://x.com/i/status/2032458037823483953)는 **BrokenArXiv**를 공유하며, **GPT-5.4**조차 최근 논문의 교란된 거짓 수학 명제 중 **40%**만 거부했다고 소개했다. [@paul_cal](https://x.com/paul_cal/status/2032526200766103944)은 이 결과가 진명 판별(proof-verification) 스타일의 “bullshit detection”에서 GPT-5.4가 Claude보다 우위일 수 있음을 시사한다고 주장했지만, 다른 진실성 벤치마크는 결론이 엇갈린다고 덧붙였다. 검색/리트리벌 측면에서는 **MADQA**가 문서 위를 전략적으로 내비게이션하기보다 무차별 탐색(brute-force search)으로 인간에 근접한 답변 정확도에 도달했다고 보고하며, 오라클(oracle) 성능 대비 약 **20%** 격차가 남아 있다고 했다 ([via @HuggingPapers](https://x.com/HuggingPapers/status/2032490352502792228)).

### 오픈소스 릴리스, 데이터셋, 재현성

- **OpenFold3 프리뷰가 프런티어 생물학 기준으로 이례적으로 “완결”**: [@MoAlQuraishi](https://x.com/MoAlQuraishi/status/2032471033760903511)는 **OpenFold3 preview 2**를 발표하며, 여러 모달리티에서 AlphaFold3와의 격차를 상당 부분 줄였다고 주장했다. 특히 가중치(weights)뿐 아니라 **training sets와 configs**까지 공개해 “처음부터 기능적으로 학습 가능하고 재현 가능한(from scratch) 유일한 AF3 기반 모델”이라고 강조했다.
- **저대표 언어 음성 데이터가 의미 있게 확장**: [@osanseviero](https://x.com/osanseviero/status/2032452729059045881)는 17개 아프리카 언어의 TTS와 19개 언어의 ASR을 포함하는 오픈 다국어 음성 데이터셋 **WAXAL**을 발표했다. 이후 [@GoogleResearch](https://x.com/GoogleResearch/status/2032482132619387348)는 이를 **2,400+ hours**로, **27 Sub-Saharan languages**와 **100M+ speakers**를 포괄한다고 설명했다. 게시물마다 언어/작업 수가 달랐지만, 둘 다 WAXAL을 아프리카 보이스 AI를 위한 드문 커뮤니티 기반 리소스로 위치지었다.
- **학습 데이터 재사용에 대한 오픈소스 정서가 “관대함” 쪽으로 경화**: 가장 강한 주장은 [@ID_AA_Carmack](https://x.com/ID_AA_Carmack/status/2032460578669691171)에서 나왔는데, 오픈소스 코드는 선물이며 AI 학습으로 그 가치가 **확대(magnified)**되는 것이지 훼손되는 게 아니라고 주장했다. [@giffmana](https://x.com/giffmana/status/2032528855215276282)와 [@perrymetzger](https://x.com/perrymetzger/status/2032543203795284218)도 비슷한 견해를 보였다. 반면 가장 미묘한 반론으로 [@wightmanr](https://x.com/wightmanr/status/2032555294296084755)는 코딩 에이전트가 어트리뷰션(attribution)·라이선싱 기대를 우회할 수 있어 메인테이너 동기를 꺾을 수 있다며, 에이전트 컴플라이언스 프로토콜이 중요해질 수 있다고 말했다.

### 개발자 도구, 코딩 에이전트, 연구 자동화

- **코딩 에이전트 워크플로가 더 자율적이고 더 ‘의견 주도(opinionated)’로**: 많은 사례가 “코파일럿(copilot)”에서 **멀티 에이전트 소프트웨어 팩토리**로의 전환을 보여줬다. [@matvelloso](https://x.com/matvelloso/status/2032502379694932178)는 코드 리뷰/테스트/보안/성능을 맡는 **5 agents**와 PR 머지 및 회귀(regression) 체크를 담당하는 **2 more** 에이전트로 구성된 셋업을 설명했다. [@swyx](https://x.com/swyx/status/2032464562214293776)는 이를 “**Your Code is your Infra**”로 압축했고, [@gokulr](https://x.com/gokulr/status/2032304707398746584)와 [@matanSF](https://x.com/matanSF/status/2032561391408918797)는 **FactoryAI**를 점점 흔한 “software factory” 레이어로 지목했다.
- **자율 연구(autonomous research)가 제품 카테고리로—하지만 새 아이디어는 아님**: Karpathy의 **autoresearch**와 관련 해커톤이 주목을 받았지만, 여러 트윗은 **DSPy**, **GEPA**, 베이지안 최적화(Bayesian optimization) 파이프라인 같은 기존 시스템과 개념적 중첩을 지적했다. 실용적인 추천으로 [@dbreunig](https://x.com/dbreunig/status/2032313870233321956)는 이런 반복적 자기개선(iterative self-improvement) 스타일에 관심 있는 사람들에게 **optimize_anything**을 권했다. Together AI는 앱, 평가 데이터셋(eval dataset), 코드, 블로그를 오픈소스로 내놓는 **Open Deep Research v2**도 출시했다 ([launch](https://x.com/togethercompute/status/2032524281461223614)).

### 참여도 상위 트윗(Top tweets)

- **xAI 채용 재점검**: [@elonmusk](https://x.com/elonmusk/status/2032341856944865487)은 강한 인재를 많이 놓쳤음을 인정한 뒤, 과거 인터뷰 파이프라인을 재검토하고 이전에 탈락시킨 유망 후보자에게 다시 연락하고 있다고 말했다.
- **Claude 차트 UI**: [@crystalsssup](https://x.com/crystalsssup/status/2032334906517536969)은 Claude의 새로운 **interactive chart** UX에 대한 반응을 올렸고 높은 참여를 끌어냈다.
- **모바일 Perplexity Computer**: [@perplexity_ai](https://x.com/perplexity_ai/status/2032494752642568417)는 iOS에서 크로스디바이스 **Computer** 접근을 출시했는데, 이번 주 원격 에이전트 실행을 제품화한 가장 뚜렷한 사례 중 하나로 꼽혔다.
- **Microsoft, Rubin NVL72 검증**: [@satyanadella](https://x.com/satyanadella/status/2032515189086761005)는 Azure가 **NVIDIA Vera Rubin NVL72** 시스템을 검증하는 첫 클라우드라고 발표했다.
- **Nous/Hermes 모멘텀**: Hermes Agent와 메모리 중심 프레이밍이 [@Teknium](https://x.com/Teknium/status/2032435764588646839) 등의 트윗을 통해 폭넓게 논의되며, 셀프 호스팅(self-hosted) 가능한 “개선되는” 에이전트 하네스(harness)에 대한 높은 관심을 반영했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[OmniCoder-9B | 9B coding agent fine-tuned on 425K agentic trajectories](https://www.reddit.com/r/LocalLLaMA/comments/1rs6td4/omnicoder9b_9b_coding_agent_finetuned_on_425k/)** (Activity: 781): **OmniCoder-9B**는 [Tesslate](https://tesslate.com/)가 개발한 90억(9B) 파라미터 코딩 에이전트로, 표준 어텐션과 교차(interleaved)된 Gated Delta Networks를 사용하는 [Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B) 아키텍처 기반으로 파인튜닝됐다. Claude Opus 4.6, GPT-5.4 등의 데이터를 포함한 `425,000+` 에이전틱 코딩 궤적을 큐레이션해 실제 소프트웨어 엔지니어링 작업에 맞췄고, `262,144` 토큰 컨텍스트(최대 `1M+` 확장)와 LSP 진단 대응, 최소 편집 diff 활용 등 오류 복구/추론 능력을 강조한다. Apache 2.0 라이선스로 완전 오픈 웨이트를 공개했으며, 댓글에서는 Qwen3.5-9B 기반 소형 모델이 더 큰 모델이 필요하던 작업을 수행하는 점과 27B 같은 더 큰 버전에 대한 기대가 함께 언급됐다.
- **[Omnicoder-9b SLAPS in Opencode](https://www.reddit.com/r/LocalLLaMA/comments/1rsa8wd/omnicoder9b_slaps_in_opencode/)** (Activity: 351): 게시글은 Opus 트레이스 기반으로 `qwen3.5-9b`를 강하게 파인튜닝한 **OmniCoder-9B** 성능을 다뤘고, 모델은 [Hugging Face](https://huggingface.co/Tesslate/OmniCoder-9B)에서 제공된다고 했다. `8GB VRAM` 환경에서도 `ik_llama`와 `Q4_km gguf`로 `100k` 컨텍스트에서 `40tps` 속도를 보고했으며, `-ngl 999`, `-fa 1`, `-b 2048`, `-ub 512`, `-t 8`, `-c 100000`, `--temp 0.4`, `--top-p 0.95`, `--top-k 20` 같은 파라미터가 공유됐다. 또한 전체 프롬프트 재처리 버그가 언급되었고 `ctx-checkpoints` 조정으로 완화할 수 있다는 제안이 나왔다. 댓글에서는 Opencode에서의 툴 호출(tool calling) 비교, `grep`/`read`/`write` 등 도구를 제대로 쓰지 못하고 `cat`/`ls`로만 가는 문제, TypeScript 프론트엔드에서 사소한 포맷 변경이 붕괴로 이어진 사례 등 안정성 우려도 함께 제기됐다.
- **[Qwen3.5-9B is actually quite good for agentic coding](https://www.reddit.com/r/LocalLLaMA/comments/1rrw8df/qwen359b_is_actually_quite_good_for_agentic_coding/)** (Activity: 606): 소비자용 **Nvidia Geforce RTX 3060** `12 GB VRAM`에서 에이전틱 코딩에 **Qwen 3.5-9B**가 의외로 잘 동작했다는 경험담이 공유됐다. 작성자는 **Qwen 2.5 Coder**와 **Unsloth quantizations on Qwen 3 Coder** 등을 시험했지만 **Qwen 3.5-9B**가 한 시간 넘게 큰 문제 없이 유지됐다고 했고, 코드 완성(code completion)에는 **Unsloth-Qwen3 Coder 30B UD-TQ1_0**도 괜찮다고 덧붙였다. 반면 `2-bit quants`처럼 더 큰 모델/저비트 양자화는 더 느리고 불안정했다는 평가도 있었다. 댓글에서는 `gpt120b` 수준과의 비교 주장, 빌드 시스템을 망가뜨리거나 프로젝트를 삭제하는 등 큰 실패 경험, 저양자화 모델의 실용성에 대한 논쟁이 함께 이어졌다.

### Less Technical Subreddits

- 대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[Palantir CEO Boasts That AI Technology Will Lessen The Power Of Highly Educated, Mostly Democrat Voters](https://www.reddit.com/r/singularity/comments/1rsnwhl/palantir_ceo_boasts_that_ai_technology_will/)** (Activity: 2076): Palantir CEO Alex Karp가 AI가 “고학력·대체로 민주당 성향” 유권자의 영향력을 줄이고 직업훈련 기반의 노동계층 남성의 힘을 키울 것이라는 취지의 발언을 했다는 내용이 논의됐다. 그는 [CNBC interview](https://newrepublic.com/post/207693/palantir-ceo-karp-disrupting-democratic-power)에서 AI가 인문학 기반 유권자의 경제적 힘을 약화시키고 이를 다른 계층으로 이동시킨다고 주장했으며, 이런 발언이 2028년까지 AI에 대한 반감을 급진화시킬 수 있다는 우려도 나왔다. 댓글에서는 Palantir의 정치적 중립성에 대한 회의, Karp 자신의 인문학 배경에 대한 아이러니, 지적 노동(예: 소프트웨어 엔지니어링) 자동화가 육체 노동보다 먼저 올 수 있다는 전망, 보편적 기본소득(UBI) 같은 완충 정책 논의가 이어졌다.
- **[Bernie Sanders officially introduces legislation to BAN the construction of all new AI data centers, citing existential threat to humanity.](https://www.reddit.com/r/singularity/comments/1rrjcon/bernie_sanders_officially_introduces_legislation/)** (Activity: 4564): Bernie Sanders가 새 AI 데이터 센터 건설을 전면 금지하자는 법안을 발의했다는 소식이 공유됐다. 데이터 센터는 모델 학습/운영에 핵심 인프라이기 때문에, 해당 제안은 AI 개발과 배포에 큰 영향을 줄 수 있다는 관점에서 논의가 확산됐다. [Source](https://youtu.be/qu2m7ePTsqY?si=zdl_cuRg22Nv_Df5). 댓글에서는 미국 내 금지가 해외(예: 중국) 건설을 막지 못할 수 있다는 지적, 금지보다 규제(독립 전력망, 지역 환경 부담 제한 등)가 현실적이라는 의견, CERN 같은 국제 AI 연구 시설 구상 등이 오갔다.
- **[SAM ALTMAN: “We see a future where intelligence is a utility, like electricity or water, and people buy it from us on a meter.”](https://www.reddit.com/r/singularity/comments/1rro8ej/sam_altman_we_see_a_future_where_intelligence_is/)** (Activity: 9032): Sam Altman이 지능이 전기·수도처럼 유틸리티(utility)가 되어 계량(meter) 기반으로 판매될 미래를 언급했다는 내용이 토론됐다. 일부는 이를 2015년의 OpenAI 미션과 연결지었고, 다른 한편에서는 전력처럼 규제되는 공공재 모델(가격 상한, 정부 감독 등)이 된다면 OpenAI의 높은 밸류에이션과 투자자 기대와 충돌할 수 있다는 비판이 제기됐다. 댓글에서는 “유틸리티” 비유의 함의(규제 가능성)와, 실제로는 더 덜 규제되는 산업 모델을 지향하는 것 아니냐는 해석 등이 오갔다.
- **[Gemini’s task automation is here and it’s wild | The Verge](https://www.reddit.com/r/singularity/comments/1rs1r4j/geminis_task_automation_is_here_and_its_wild_the/)** (Activity: 722): Gemini의 작업 자동화(task automation)가 Uber 주문이나 메뉴 선택 같은 복잡한 작업을 처리하며, 필요한 확인 질문을 하고 불필요한 단계를 건너뛰거나 맥락적 결정을 내린다는 사례가 공유됐다. 항공사 같은 사업자가 가격 투명성 때문에 이런 자동화를 저지하려 할 수 있다는 논의와 함께, 개인이 만든 가격 비교 크롬 플러그인 사례 및 기업의 법적 대응 가능성에 대한 대화도 이어졌다. 댓글에서는 일상적 효용(재무 관리, 세금, 쇼핑 리스트 자동화 등)에 대한 기대와 현재 데모의 실용성에 대한 비판이 맞섰다.
- **[Enshittification of Nano Banana Pro](https://www.reddit.com/r/GeminiAI/comments/1rs58vz/enshittification_of_nano_banana_pro/)** (Activity: 1069): Gemini 생태계의 이미지 생성기 Nano Banana Pro가 3월 10일 이후 품질이 떨어졌다는 불만이 제기됐다. 이전에는 선명한 2K 이미지를 내던 것이 픽셀화되고 흐릿해졌다는 보고가 나오며, 초기 고품질로 사용자를 끌어모은 뒤 비용 절감을 위해 성능을 낮추는 ‘bait-and-switch’라는 해석이 공유됐다. 댓글에서는 이런 비용/수익 압박이 업계 전반의 레이트 리밋(rate limit)·제한 정책으로 나타난다는 지적과, 오픈 모델·로컬 모델(예: ‘flux 2 Klein 9b’) 같은 대안을 찾자는 흐름이 함께 언급됐다.
- **[New Gemini UI/UX 2.0 Upgrade is here!](https://www.reddit.com/r/Bard/comments/1rsnwx6/new_gemini_uiux_20_upgrade_is_here/)** (Activity: 730): Gemini UI/UX 2.0 업그레이드가 개인화·인터랙티브 UI를 내세우며 ‘Google AI Ultra’ 업그레이드를 강조하는 모습이 공유됐다. 댓글에서는 Ultra가 $250 구독으로 보인다는 언급과 함께, Pro가 대부분의 요구를 충족한다는 의견, ‘Deep Think’와 ‘agents mode’ 접근의 가치, Pro 버전에 광고가 붙을 수 있다는 우려, ChatGPT Pro·Claude Opus 4.6과의 비교 등이 오갔다. **IfNightThen**은 Ultra에서 Pro로 내리면 월 `$220` 절감이며 손실은 주로 ‘Deep Think’와 ‘agents mode’ 정도였다고 했고, **Appropriate-Heat-977**은 Pro를 결제해도 Ultra 업그레이드를 계속 유도하고 레이트 리밋이 있을 수 있다는 점을 문제 삼았다.
- **[Drastically Stronger: Qwen 3.5 40B dense, Claude Opus](https://www.reddit.com/r/Qwen_AI/comments/1rsa7h0/drastically_stronger_qwen_35_40b_dense_claude_opus/)** (Activity: 273): 33개의 파인튜닝된 Qwen 3.5 모델 컬렉션 중 하나로 소개된 **Qwen 3.5 40B Claude Opus** 커스텀 모델이 논의됐다. 고추론(reasoning) 성능을 목표로 하고, `325 likes` 이상을 받은 데이터셋을 사용했으며, 저장소에 데이터셋이 업데이트로 포함됐다고 한다. 또한 27B dense 모델 등 다양한 변형, XML 기반 도구 설명을 쓰는 **Architect series**, Star Trek 테마의 Instruct 설정을 가진 **Holodeck** 모델 등이 언급됐다. 벤치마크로는 **Qwen3.5-27B-Engineer-Deckard-Claude**의 `arc: 0.668`, `perplexity: 3.674 ± 0.022` 등 여러 지표가 공유됐고, 8/6bit를 섞는 qx86-hi 양자화 공식이 straight q8보다 낫다는 주장도 있었다. 댓글에서는 레이어 복제(layer duplication), 양자화 전략, 그리고 보안(Blue Team/Red Team) 테스트 용도 적합성 같은 기술적 질문이 이어졌다.

---

## AI Discord Recap

### AINews

- **접근 종료**: Discord가 오늘 접근을 중단해 더 이상 이 형태로 수집할 수 없게 됐다.
- **다음 단계**: 같은 방식으로는 재개하지 않지만, 새로운 AINews를 곧 출시할 예정이라고 밝혔다.
- **마무리 인사**: “끝까지 읽어줘서 고맙다, 좋은 run이었다”는 메시지로 글을 마쳤다.
