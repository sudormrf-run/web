---
title: "Hermes, Manim 영상 생성 스킬 공개"
summary:
  - "Hermes가 Manim 영상 생성 스킬 공개"
  - "Claude Code 제한 강화로 대안 에이전트 확산"
  - "Gemma 4 수요 급증, 생태계 통합 확대"
  - "TurboQuant-GPU로 KV 캐시 5.02x 압축"
  - "뉴요커, 샘 알트만 의혹 조사 보도 공개"
date: 2026-04-06
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-06-not-much.md"
hasHeadline: false
headline: "Hermes, Manim 영상 생성 스킬 공개"
tags:
  - OpenAI
  - Codex
  - Hermes
  - Claude Code
  - Gemma 4
isFeatured: false
---

## 헤드라인: Hermes, Manim 영상 생성 스킬 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Hermes가 이번 묶음에서 가장 많이 언급된 오픈 에이전트 스택으로 부상하면서, 브랜딩보다 아키텍처(architecture) 차별점(자체 작성/자체 정련 스킬, 세션 간 지속 메모리, 검색 가능한 히스토리, 명시적 자기개선 루프)이 반복해서 강조됐다. 특히 프롬프트를 3Blue1Brown 스타일의 수학/기술 애니메이션으로 바꾸는 Manim 스킬 공개가 “요약(summarization)”보다 설득력 있는 에이전트 활용 사례로 주목받았고, GUI·WebUI·HUD·MCP·메신저 슬래시 커맨드 등 주변 생태계도 빠르게 채워지는 흐름이 관측됐다.

---

## AI Twitter Recap

### Hermes 에이전트의 돌풍: 자체 개선 스킬, Manim 영상 생성, 오픈 트레이스 데이터 플라이휠

- **Hermes가 이번 배치에서 가장 많이 논의된 오픈 에이전트 스택으로 부상**: 사용자 보고에서 반복된 핵심 차별점은 브랜딩이 아니라 아키텍처였다. 자체 작성/자체 정련 스킬, 세션을 넘나드는 지속 메모리, 검색 가능한 히스토리, 명시적 자기개선 루프가 대표적이다. 가장 깔끔한 1:1 비교 요약은 [@TheTuringPost](https://x.com/TheTuringPost/status/2040936147720048909)에서 Hermes를 OpenClaw와 스킬·메모리·아키텍처·안전 기본값(safety defaults) 관점에서 대비했다. 이 프레이밍은 Hermes가 온보딩이 쉽고 결과가 더 낫다고 보고한 빌더들(예: [@SnuuzyP](https://x.com/SnuuzyP/status/2040999794894663996), [@DoctaDG](https://x.com/DoctaDG/status/2041051272560923090), [@purea1go](https://x.com/purea1go/status/2041260177681441195))에서도 반복됐다.
- **가장 큰 구체적 기능 출시는 Hermes의 Manim 스킬**: Nous가 [this launch tweet](https://x.com/NousResearch/status/2040931043658567916)에서 소개했으며, 커뮤니티는 이를 ‘장난감’이 아니라 에이전트의 카테고리를 확장하는 능력으로 받아들였다. 요약보다 “설명 영상 생성”이 더 설득력 있는 에이전트 유즈케이스라고 강조한 반응으로 [@ErickSky](https://x.com/ErickSky/status/2040956335764734235), [@lucatac0](https://x.com/lucatac0/status/2041018088913608923), [@casper_hansen_](https://x.com/casper_hansen_/status/2041046264758858081), [@Sentdex](https://x.com/Sentdex/status/2041165530812334417) 등이 언급됐다. Teknium은 [`/manim-video <prompt>`](https://x.com/Teknium/status/2040970080172060730)로 호출 방식도 명확히 했다.
- **Hermes 주변 생태계가 빠르게 채워지는 중**: GUI 레이어(예: [hermes-workspace.com crossing 700 stars](https://x.com/outsource_/status/2040901725066858898)), 네이티브 [Hermes WebUI](https://x.com/nesquena/status/2041000592215298123), tmux 패널에 라이브 에이전트를 매핑하고 대기 중 승인(waiting approvals)을 노출하는 HUD 업데이트([v0.4.0](https://x.com/aijoey/status/2040978270439580042)), 로컬 상태 DB에서 반복 사용자 행동을 채굴하는 HUD “Prompt Patterns” 뷰([v0.5.0](https://x.com/aijoey/status/2041282964097511679)) 등이 언급됐다. Hermes는 [OAuth’d MCP server support](https://x.com/Teknium/status/2041020715022024976), [Telegram/Discord slash commands to force-load skills](https://x.com/Teknium/status/2041233409901769133), 그리고 Hermes가 자기 생성 엔드포인트를 통해 OpenWebUI와 통합하는 흐름([Teknium’s guide](https://x.com/Teknium/status/2040998328461316524))도 추가로 소개됐다.
- **2차 트렌드: 에이전트를 위한 오픈 학습 데이터(open training-data) 움직임**: [@badlogicgames](https://x.com/badlogicgames/status/2040979640265633882)가 PII 필터링을 포함해 코딩 에이전트 트레이스를 공개하기 위한 `pi-share-hf`를 공개했고, 이후 본인 데이터셋도 [this follow-up](https://x.com/badlogicgames/status/2041151967695634619)에서 추가로 공개했다. [@ClementDelangue](https://x.com/ClementDelangue/status/2041189872556269697)는 트레이스의 크라우드소싱 오픈 데이터셋을 명시적으로 촉구했으며, Teknium은 Hermes 세션 파일이 이미 [training-ready JSONL candidates](https://x.com/Teknium/status/2041253083687317660)라고 언급했다. 이는 “오픈 에이전트”의 중심이 모델 가중치(weights)뿐 아니라 재사용 가능한 행동 데이터(behavioral data)와 하네스 트레이스로 확장되고 있음을 시사한다.

### Anthropic의 Claude Code 단속과 오픈/대안 코딩 에이전트로의 이동

- **이번 코딩 에이전트의 핵심 스토리는 모델 출시가 아니라 유통/정책(distribution/policy) 충돌**: 여러 고참여도 게시물에서 Claude Code가 서드파티 에이전트 워크플로에 더 제한적이거나 신뢰하기 어렵게 변했다는 보고가 나왔다. [@theo](https://x.com/theo/status/2041016477047034012)는 Claude Code 소스 분석에 Claude Code를 쓰면 오류가 난다고 했고, 이전에는 최신 문서 업데이트를 “wild”라고 [this post](https://x.com/theo/status/2040895674288570499)에서 표현했으며, 이후에는 “basically unusable”이라고 [another](https://x.com/theo/status/2041111862113444221)에서 주장했다. [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2041187141523526011) 등에서도 업타임 저하, 구독 차단, GPU 부족과의 연계, 프롬프트 레벨 게이팅(prompt-level gating) 논의가 함께 나타났다.
- **커뮤니티 해석: 챗봇 시대의 정액 구독 경제가 24/7 에이전트에는 맞지 않는다**: [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2041202983640432966)는 $20/$200 구독이 ‘채팅’용으로 설계됐지, 토큰을 훨씬 더 태울 수 있는 상시 에이전트 루프에는 맞지 않는다는 경제적 논지를 제시했다. 그 결과로 당장은 더 빡센 레이트 리밋(rate limits), GPU 조달 확대, 사용량 집행(enforcement), 재가격(repricing) 같은 트레이드오프가 예상된다는 흐름이다. 추론(inference) 비용이 여전히 랩 수익의 큰 비중을 차지한다는 더 넓은 논의의 요약도 [@kimmonismus](https://x.com/kimmonismus/status/2041203798723666375)에서 언급됐다.
- **이 마찰이 오픈 하네스(harness), 미들웨어(middleware), 대안을 위한 공간을 만든다**: LangChain은 하네스 커스터마이징을 위한 [middleware patterns for harness customization](https://x.com/sydneyrunkle/status/2041122403850334657)을 연속으로 공유했고, Claude Code의 컴팩션(compaction) 엔진을 LangChain 미들웨어로 구현한 사례도 [LangChain middleware](https://x.com/sydneyrunkle/status/2041123648900084105)로 강조했다. [@hrishioa](https://x.com/hrishioa/status/2041199021839233070)는 하네스를 “시스템 프롬프트 + 핵심 도구 + 안정적인 에이전틱 루프”로 정의하고, 메모리·압축(compression) 같은 요소는 선택적 레이어로 덧붙일 수 있다고 정리했다.
- **서사적 압력에도 OpenClaw는 빠르게 출하 중**: 가장 큰 릴리스로는 Alibaba, BytePlus, fal, Google, MiniMax, OpenAI, Qwen, Together, xAI 등 다양한 프로바이더에 걸친 네이티브 영상 생성(video-generation) 지원이 [@steipete’s announcement](https://x.com/steipete/status/2040928953653744003)에서 소개됐다. 그 외에도 Redline이 자동 리뷰 로직을 포함한 [Claude Code plugin with automatic review logic](https://x.com/alexatallah/status/2040953565964124359)으로 공개됐고, Cline은 칸반(Kanban)을 병렬 태스크 팬아웃(parallel task fan-out)을 갖춘 [prompt-to-code pipeline with parallel task fan-out](https://x.com/cline/status/2041169904540479879)으로 재정의했으며, Jam은 협업 “바이브 코딩(vibe coding)”을 위한 [multiplayer terminal for collaborative vibe coding](https://x.com/sofianeflarbi/status/2041195913490960823)을 소개했다. 결과적으로, 코딩 에이전트의 컨트롤 플레인(control plane)은 특히 프로바이더 정책이 마찰을 만들 때 더 빠르게 다변화되고 있다는 결론이다.

### 오픈 모델, 로컬 추론(inference), 성능 엔지니어링: Gemma 4, GLM-5, KV 압축, MoE 디코드

- **Gemma 4는 ‘오픈에 가까운(open-ish)’ 출시 사이클치고 제품 당김(product pull)이 이례적으로 강함**: 수요 신호로 [Google AI Edge hitting #8 in iOS productivity](https://x.com/OfficialLoganK/status/2040874501777317982), [Gemma 4 reaching #1 on Hugging Face](https://x.com/ClementDelangue/status/2040911131108069692) 등이 언급됐다. 또한 [@osanseviero](https://x.com/osanseviero/status/2041154555530932578)는 HF, vLLM, llama.cpp, Ollama, NVIDIA, Unsloth, SGLang, Docker, Cloudflare 등 파트너 생태계 통합을 폭넓게 정리했다. 로컬/모바일 데모로는 [Gemma 4 E2B on iPhone 17 Pro Max](https://x.com/_philschmid/status/2041171039598543064)도 언급됐다.
- **Ollama는 오픈 모델을 ‘가장 쉬운 클라우드 경로’로 포지셔닝**: 특히 Gemma 4를 중심으로 [@ollama](https://x.com/ollama/status/2041238722914685336)가 Gemma 4의 클라우드 제공을 알렸고, OpenClaw·Claude 스타일 워크플로에 연결된다고 명시했다. 이어지는 글([the follow-up](https://x.com/ollama/status/2041238725141860368))에서는 Blackwell 기반 추론(inference)도 강조됐다. 별도의 경험담으로 Qwen 3.5 변형과 Apple 하드웨어에서의 Gemma 4 로컬 경험이 좋았다는 언급도 이어졌다.
- **GLM-5는 인프라/툴링을 통해 조용히 확산**: 완전한 릴리스 스레드가 중심은 아니지만, 프로덕션 채택이 늘고 있다는 신호가 여럿 있었다. 예로 [LangChain Fleet added GLM-5 via Baseten](https://x.com/masondrxy/status/2041189901207519629)가 언급됐고, [@caspar_br](https://x.com/caspar_br/status/2041193987437203526)는 오픈 모델이 툴 사용(tool use)과 지시 따르기(instruction following)에서 중요한 임계점을 넘어섰다는 프레이밍을 덧붙였다.
- **가장 구체적인 추론 최적화는 TurboQuant-GPU**: Hugging Face Transformers를 통해 어떤 GPU에서도 드롭인(drop-in) KV 캐시 압축을 제공하며 **5.02x** 압축, **3-bit Lloyd-Max fused KV compression**, **0.98 cosine similarity**를 주장한다. [@anirudhbv_ce](https://x.com/anirudhbv_ce/status/2040874853881004163)에 따르면 Mistral-7B의 KV 캐시가 **1,408 KB → 275 KB**로 줄었고, MXFP4·NVFP4 대비 압축비에서 우수하다고 보고됐다.
- **시스템 측면: Cursor가 Blackwell에서 MoE 디코드(decode) 개선을 소개**: Cursor의 [warp decode post](https://x.com/cursor_ai/status/2041260649267986643)는 MoE 모델의 토큰 생성 방식을 재구성해 **1.84x 더 빠른 추론**과 더 나은 출력이 가능했다고 주장한다. 소배치(small-batch) MoE 추론에서, 전통적인 전문가 샤딩(expert sharding)보다 “출력 요소별로 병렬화하기 쉬운(embarrassingly parallel) 계산”이 유리할 수 있다는 논평도 [@Halex623](https://x.com/Halex623/status/2041259459243339943)에서 함께 언급됐다.

### OpenAI의 정책 전환, 거버넌스 감시, 샘 알트만 조사

- **OpenAI의 공식 메시징이 ‘초지능 전환(superintelligence transition)’과 사회 정책으로 급격히 이동**: 가장 큰 정책 산출물은 OpenAI의 “Industrial Policy for the Intelligence Age”로, [@kimmonismus](https://x.com/kimmonismus/status/2041130939175284910)가 요약했고 [@OpenAINewsroom](https://x.com/OpenAINewsroom/status/2041198359420215453)도 링크했다. 제안에는 **Public Wealth Fund**, **portable benefits**, **32-hour workweek pilots**, **Right to AI**, 자동 트리거형 안전망, 위험한 프런티어 시스템에 대한 표적 봉쇄/감사(containment/auditing) 등이 포함됐다. OpenAI는 새 [Safety Fellowship](https://x.com/OpenAI/status/2041202511647019251)도 발표했다.
- **정책 프레이밍은 기술 커뮤니티에서 양극화된 반응을 촉발**: 어떤 이들은 노동·사이버 혼란에 대한 선제적 계획으로 봤고, 다른 이들은 랩은 모델을 출시하고 과도한 사회 공학을 피해야 한다고 주장했다. 가장 강한 비판 중 하나는 [@Dan_Jeffries1](https://x.com/Dan_Jeffries1/status/2041170970631676067)에서, 실제로 입증된 영향보다 담론이 앞서 달린다고 주장했다.
- **동시에 샘 알트만에 대한 보도 압력이 크게 강화**: 가장 중대한 거버넌스 이슈로는 100+ 인터뷰, 공개되지 않은 내부 메모, 개인 노트에 기반한 뉴요커(New Yorker) 조사가 [@RonanFarrow](https://x.com/RonanFarrow/status/2041213917611856067)에서 확산됐다. 고신호 요약으로 [@ohryansbelt](https://x.com/ohryansbelt/status/2041151473984123274), [@kimmonismus](https://x.com/kimmonismus/status/2041224686248612058)가 언급됐으며, 기만 패턴, 이사회 조작, 안전 프로세스 결함, 초기 거버넌스 이상과 상업화의 괴리 등이 핵심으로 요약됐다.
- **OpenAI의 대외 안전 포즈와 내부 역사에 대한 외부 인식 사이의 긴장도 가시화**: Ronan Farrow는 새 펠로우십과, 과거의 superalignment/AGI 준비 구조가 해체됐다는 보도를 대비해 [this tweet](https://x.com/RonanFarrow/status/2041224604878864514)에서 언급했다. 반대 관점으로 [@tszzl](https://x.com/tszzl/status/2041265558054965534)는 정렬(alignment)이 여전히 OpenAI에서 가장 크고 컴퓨트가 많이 투입되는 연구 프로그램 중 하나라고 말했다.

### 연구 및 시스템 노트: RL 처리량, 소형 특화 모델, 보안, 에이전트 평가

- **OLMo 3의 RL 학습에서 유용한 시스템 노트**: [@finbarrtimbers](https://x.com/finbarrtimbers/status/2041176604961878271)는 동기식(synchronous)에서 비동기식(asynchronous) RL로 전환해 tokens/sec 기준 **4x 처리량(throughput) 개선**을 얻었다고 설명했다. 오케스트레이션 오버헤드가 지배적인 온라인 RL/포스트 트레이닝(post-training) 루프에 실용적인 신호다.
- **“작은 모델이 큰 모델을 이긴다” 사례: SauerkrautLM-Doom-MultiVec-1.3M**: [@DavidGFar](https://x.com/DavidGFar/status/2041063368656585002)에 따르면 **1.3M 파라미터**의 ModernBERT 파생 모델이 **31K 프레임 / 인간 플레이 ~2시간**만으로 VizDoom에서 **17.8 points/episode**를 달성했고, Gemini Flash Lite(**0.8**), Qwen3.5-27B(**0.67**), Nemotron-120B(**0.6**), GPT-4o-mini(**0.0**) 대비 우수했다고 한다. 요지는 익숙하지만 중요하다: 지연(latency)과 태스크 구조가 더 중요한 실시간 엣지 제어(edge-control)에서는, 특화된 소형 모델이 광범위한 일반성보다 강할 수 있다.
- **에이전트 보안이 1급 관심사로 부상**: [@kimmonismus](https://x.com/kimmonismus/status/2041109663278637145)는 웹 콘텐츠·이미지·문서에 사람에게는 보이지 않는(hidden, human-invisible) 공격 벡터를 심어, 현재 방어를 회피하면서 에이전트를 체계적으로 조작하는 DeepMind 작업을 강조했다. “툴 사용(tool use)이 된다”에서 “적대적 환경(adversarial environments)에서의 툴 사용은 여전히 미해결”로 무게중심이 이동하는 흐름과 맞물린다.
- **벤치마킹도 ‘장난감’에서 멀어지는 중**: 예로 이미지 생성 중 추론을 평가하는 [IRGB, a benchmark for reasoning during image generation](https://x.com/AcerFur/status/2040970582976585994), 전문가 수준의 오픈엔디드 워크플로를 다루는 [XpertBench for expert-level open-ended workflows](https://x.com/GeZhang86038849/status/2041184352516919690), 툴 사용과 장기 오케스트레이션을 다룬 설문 [survey on tool use and long-horizon orchestration](https://x.com/TheTuringPost/status/2041124796361236608) 등이 언급됐다. 종합하면 평가(evaluation)는 단발성(single-turn) 벤치마크 포화에서, 워크플로 역량(workflow competence)·모호성 처리·전문 태스크 수행으로 이동하고 있다는 신호다.

### 참여도 상위 트윗 (Top tweets)

- **OpenAI / Sam Altman scrutiny**: [@RonanFarrow’s New Yorker investigation thread](https://x.com/RonanFarrow/status/2041213917611856067)가 가장 높은 참여도의 기술 관련 항목으로, OpenAI 거버넌스·안전·신뢰성을 중심으로 했다.
- **Hermes feature launch**: [@NousResearch’s Manim skill announcement](https://x.com/NousResearch/status/2040931043658567916)가 참여도 기준으로 가장 두드러진 오픈 에이전트 제품 출시였다.
- **Claude Code restrictions**: [@theo on Claude Code blocking source analysis](https://x.com/theo/status/2041016477047034012) 및 후속 불만이 코딩 에이전트 영역에서 가장 강한 개발자 반발을 포착했다.
- **OpenAI policy pivot**: [@kimmonismus summarizing OpenAI’s “Industrial Policy for the Intelligence Age”](https://x.com/kimmonismus/status/2041130939175284910)가 초지능 시대의 노동/안전 정책 논의를 크게 확산시켰다.
- **Open model momentum**: [@OfficialLoganK on Google AI Edge / Gemma 4 demand](https://x.com/OfficialLoganK/status/2040874501777317982) 및 [@ClementDelangue on Gemma 4 hitting #1 on HF](https://x.com/ClementDelangue/status/2040911131108069692)가 현재 오픈 모델 채택의 가장 분명한 참여도 신호로 언급됐다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[What it took to launch Google DeepMind's Gemma 4](https://www.reddit.com/r/LocalLLaMA/comments/1se6nq5/what_it_took_to_launch_google_deepminds_gemma_4/)** (Activity: 664): 이미지는 **Google DeepMind의 Gemma 4 모델** 출시가 **Hugging Face (HF)**, **VLLM**, **llama.cpp**, **Ollama**, **NVIDIA**, **Unsloth**, **Cactus**, **SGLang**, **Docker**, **CloudFlare** 등과의 파트너십/통합을 필요로 했음을 강조한다. 이는 최신 AI 생태계가 얼마나 복잡하고 상호 의존적인지, 그리고 Gemma 4 같은 고급 모델을 지원하려면 여러 기술·플랫폼이 함께 맞물려야 함을 보여준다. 댓글에서는 최신 LM Studio 베타에서 Gemma 4 관련 추론(inference) 버그(무작위 오타, 과도한 토큰 생성 등)가 언급되며, 배포/운영에서의 지속 과제도 드러난다.
  - x0wl은 최신 LM Studio 베타에서 Google DeepMind의 Gemma 4 모델을 사용할 때 추론 버그가 계속된다고 하며, 'random typos', 'not closing the think tag' 같은 이슈를 언급한다. 사용자는 공식 Gemma 4 26B A4B @ Q4_K_M에 Q8 KV quantization을 적용하고 있으며, 이 문제가 llama.cpp commit 277ff5f 및 runtime version 2.11.0에서 발생한다고 적었다.
  - Embarrassed_Adagio28은 현재 이슈가 해결되고 Gemma 4 31B의 더 나은 agentic coding 설정이 나오길 기대한다고 했고, 제대로 설정되면 매우 유용할 수 있지만 그 전까지는 안정성과 성능 때문에 Qwen 3 coder를 선호한다고 언급했다.
- **[[PokeClaw] First working app that uses Gemma 4 to autonomously control an Android phone. Fully on-device,  no cloud.](https://www.reddit.com/r/LocalLLaMA/comments/1sdv3lo/pokeclaw_first_working_app_that_uses_gemma_4_to/)** (Activity: 489): 이미지는 **PokeClaw**의 인터페이스를 보여주며, **Gemma 4**로 안드로이드 폰을 완전 온디바이스(on-device)로 자율 제어(클라우드 없이)하는 앱이라는 점을 강조한다. 이 오픈소스 프로토타입은 이틀 만에 만들어졌고, 화면에서 대화 컨텍스트를 읽어 메시지 자동 응답 같은 작업을 수행하는 클로즈드 루프(closed-loop) 시스템을 시연한다. 최근 업데이트(v0.2.x)로 컨텍스트 이해가 개선되고 업데이트 체크 기능이 추가됐으며, 프로젝트는 [GitHub](https://github.com/agents-io/PokeClaw)에서 공개되어 이슈 제보나 스타로의 참여를 유도한다. 댓글에서는 이름이 “PokeClaw”인 이유(포켓몬 연관 기대)와 자율 제어의 안전성/위험에 대한 우려가 함께 나온다.
  - **Gemma 4**를 완전 온디바이스로 사용한다는 점이 런타임 안전성 측면에서 장점으로 언급되며, 모든 동작이 로컬에서 처리되어 클라우드 의존 없이 데이터/행동에 대한 통제를 강화할 수 있다고 강조된다.
  - 접근성(accessibility) 기능의 엣지 케이스를 철저히 테스트하라는 기술적 권고가 나온다. 예상치 못한 상호작용이 의도치 않은 행동이나 보안 리스크로 이어질 수 있기 때문이다.
  - **Gemma 4** 기반의 자율 제어 구현이 프라이버시/보안을 강화한다는 평가가 있는 동시에, 특히 메시지 모니터링·자동 응답 같은 민감 작업에서 기대대로 동작하는지에 대한 엄격한 테스트의 중요성이 강조된다.
- **[Gemma 4 just casually destroyed every model on our leaderboard except Opus 4.6 and GPT-5.2. 31B params, $0.20/run](https://www.reddit.com/r/LocalLLaMA/comments/1sdcotc/gemma_4_just_casually_destroyed_every_model_on/)** (Activity: 2056): 이미지는 **Gemma 4** 31B가 FoodTruck Bench 리더보드에서 3위를 기록하며(30일 기준 net worth `$24,878`, ROI `+1144%`, margin `46%`, 실행 비용 `$0.20/run`) 비용 대비 성능에서 강한 모습을 보였음을 강조한다. 이 결과는 **GPT-5.2**, **Gemini 3 Pro** 등 여러 모델 대비 효율적이라는 주장과 함께 제시되며, **Opus 4.6**만이 훨씬 비싼 비용(`$36/run`)으로 앞섰다고 요약된다. 또한 **26B A4B 변형**은 더 저렴하지만 JSON 포맷 이슈로 agentic 워크플로에서 커스텀 출력 정화(sanitization)가 필요하다고 언급된다.
  - Recoil42는 결과 페이지에 추론 비용(inference cost) 컬럼이 없다는 점을 지적하며, 모델 비교의 종합성을 위해 추가하는 것이 유용하다고 제안한다.
  - Adventurous-Paper566는 Gemma 4가 32GB VRAM에서 입력당 평균 2분의 안정적인 STT 시간을 보이며(프랑스어에서도) 대화 이해나 일탈이 적었다고 경험을 공유하고, Gemini flash가 더 많은 실수를 했다고 대비한다. 동시에 124B MoE 모델에 대한 기대와 RAM/CPU 부담 가능성도 언급한다.
  - exact_constraint는 31B 덴스(dense) 모델인 Gemma 4와 Qwen 같은 MoE 모델의 비교가 아키텍처 차이를 고려하면 공정하지 않을 수 있다고 하며, 성능 평가에서 구조적 차이를 감안해야 한다고 강조한다.
- **[Per-Layer Embeddings: A simple explanation of the magic behind the small Gemma 4 models](https://www.reddit.com/r/LocalLLaMA/comments/1sd5utm/perlayer_embeddings_a_simple_explanation_of_the/)** (Activity: 604): Gemma 4 모델 패밀리는 **Per-Layer Embeddings (PLE)**라는 접근을 도입해 전통적인 Mixture-of-Experts (MoE)와 구분된다고 설명한다. MoE가 추론 시 일부 파라미터만 활성화하는 것과 달리, gemma-4-E2B 같은 PLE 모델은 정적(static)·위치 비의존(position-independent)·고정(fixed)된 임베딩 파라미터를 활용하며, 이를 VRAM 밖(디스크/플래시)에도 저장할 수 있다고 한다. 그 결과 `5.1B` 파라미터 중 `2.8B`가 임베딩이고, 실질 활성 파라미터가 `2.3B` 수준이 되어(룩업 테이블 중심) 복잡한 행렬 계산을 줄여 추론이 빨라질 수 있다는 요지다. [Source](https://www.reddit.com/r/LocalLLaMA/comments/1s62g5v/a_simple_explanation_of_the_key_idea_behind/)도 함께 인용된다.
  - xadiant는 `100B 10E` 규모로의 확장 가능성과 MoE와의 하이브리드 결합 가능성을 질문하며, 임베딩을 CPU로 오프로딩(offloading)하면 학습 효율이 높아질 수 있다는 아이디어를 제안한다.
  - Firepal64는 `llama.cpp` 구현에서 `-ngl 99`를 쓰면 임베딩까지 포함해 전체 모델을 VRAM에 로드하는지 궁금해하며, 임베딩을 VRAM에서 제외하는 기능이 아직 없는 것 아니냐고 질문하지만, 이후 답글에서는 가능하다는 논의도 나타난다.
  - Mbando는 Engram 논문을 언급하며, 여기서 설명된 구현이 그 논문의 개념을 프로덕션 수준으로 구현한 것에 가깝다는 취지로 연결한다.
- **[I technically got an LLM running locally on a 1998 iMac G3 with 32 MB of RAM](https://www.reddit.com/r/LocalLLaMA/comments/1sdnw7l/i_technically_got_an_llm_running_locally_on_a/)** (Activity: 1435): 1998년형 iMac G3(32MB RAM)에서 로컬 LLM을 구동한 기술 실험을 다룬다. 모델은 Andrej Karpathy의 260K TinyStories(라마 2 아키텍처 기반)로 체크포인트 크기는 약 1MB이며, Mac mini에서 Retro68로 크로스 컴파일해 클래식 Mac OS용 PEF 바이너리를 만들고, PowerPC 호환을 위해 모델/토크나이저의 엔디안 스왑(endian-swapping)을 수행했다. 제한된 메모리(Mac OS 8.5 기본 앱 메모리 파티션), grouped-query attention을 위한 가중치 레이아웃 적응, 정적 버퍼로 malloc 실패 회피 등 다양한 제약이 언급되며, 프롬프트를 파일에서 읽고 토크나이즈 후 추론을 수행해 다른 파일로 출력하는 방식으로 “빈티지 하드웨어에서의 현대 AI”를 시연한다.
  - Specialist_Sun_7819는 1998년형 iMac G3(32MB RAM) 같은 제약 환경에서 **Karpathy의 TinyStories 모델**을 선택한 것이 영리했다고 하며, 레거시 시스템에 경량 모델을 맞춰 넣는 발상이 인상적이라고 평가한다.
- **[benchmarks of gemma4 and multiple others on Raspberry Pi5](https://www.reddit.com/r/LocalLLaMA/comments/1sdcdno/benchmarks_of_gemma4_and_multiple_others_on/)** (Activity: 306): 라즈베리 파이 5 + M.2 HAT+ 확장 보드로 다양한 모델 벤치마크를 수행한 결과를 다룬다. 1TB SSD를 HAT로 연결해 USB3 대비 읽기 속도와 추론 성능이 개선됐고, PCIe(Gen3) 인터페이스에서 읽기 속도가 `798.72 MB/sec` 정도로 늘어 성능이 약 2배로 개선됐다고 한다. 이 구성은 토큰 처리 속도 향상으로 이어지며, 예시로 `gemma4 E2B-it Q8_0`가 `pp512` 테스트에서 `41.76 tokens/sec`를 달성한 결과가 언급된다.
  - 라즈베리 파이 5에서 모델 크기/구성에 따라 성능 격차가 크다는 점이 강조된다. 예를 들어 `gemma4 E2B-it Q8_0`( `4.69 GiB`, `4.65B` params)는 `pp512`에서 `41.76 t/s`인데, `gemma4 26B-A4B-it Q8_0`( `25.00 GiB`, `25.23B` params)는 같은 테스트에서 `9.22 t/s`로 크게 낮다.
  - SSD에 mmap을 적용해 SWAP을 피하고 디스크에서 직접 가중치를 읽는 최적화가 제안된다. RAM을 초과하는 대형 모델에서 스와핑 오버헤드를 줄이고 처리량을 높일 수 있다는 취지다.
  - `gemma4 26B-A4B-it`와 `Qwen3.5 35B.A3B` 같은 모델에 대해 q6/q4 등 다른 양자화(quantization) 레벨을 테스트해 정확도·자원·속도 균형을 파악하자는 논의가 이어진다.
- **[MacBook Pro 48GB RAM - Gemma 4: 26b vs 31b](https://www.reddit.com/r/LocalLLM/comments/1sdvqxm/macbook_pro_48gb_ram_gemma_4_26b_vs_31b/)** (Activity: 122): `48GB RAM`, `18 CPU`, `20 GPU`의 MacBook Pro에서 Gemma4를 실행한 경험을 다룬다. **31B** 모델은 GitHub 폴더 보안 감사를 `49분` 걸려 수행했고, **26B**는 `2분` 만에 끝났다고 하며, 사용자는 **ollama**를 사용 중이고 성능 개선 방법을 묻는다. 핵심 기술 포인트로, 31B는 덴스(dense)라 토큰당 `31B` 파라미터를 처리하는 반면 26B는 MoE라 토큰당 실질 처리 파라미터가 `4B` 수준이어서 같은 하드웨어에서 속도 차이가 크게 난다는 설명이 제시된다.
  - 26B-A4B(MoE)와 31B(덴스) 비교에서, 31B는 대형 KV 캐시와 메모리/대역폭 요구로 계산 부담이 커지고, 26B-A4B는 요구 계산량이 훨씬 적어(동일 하드웨어에서) 잠재적으로 8배 빠를 수 있다는 관점이 공유된다.
  - Gemma 4는 정확도와 장기 추론을 위해 컨텍스트 저장을 총/슬라이딩 윈도우 혼합 방식으로 설계했지만, 이로 인해 특히 31B에서 속도가 느려질 수 있다는 논의가 나온다. KV cache 양자화를 낮추면 일부 완화될 수 있지만, 31B는 여전히 계산 집약적이라고 요약된다.
  - 48GB M4 Max에서 128k 컨텍스트로 대형 코드베이스를 분석하는 데 30분이 걸렸다는 경험담 등, 능력은 있지만 빠르지 않다는 사례가 언급된다. 최적화로는 컨텍스트 윈도우 축소, RAM 점유 프로세스 정리, 26B q8_0 같은 양자화 버전 활용 등이 제안된다.
- **[Anyone else find it weird how all Chinese Labs started delaying OS model releases at the same time?](https://www.reddit.com/r/LocalLLaMA/comments/1sd22qy/anyone_else_find_it_weird_how_all_chinese_labs/)** (Activity: 606): **Minimax**, **GLM**, **Qwen**, **Mimo** 등 중국 AI 랩들이 `Minimax-m2.7`, `GLM-5.1`, `Qwen3.6` 같은 최신 모델의 오픈소싱(open-sourcing)을 동시에 지연하는 패턴이 이상하다는 문제 제기다. 이 동시 지연이 클로즈드 소스로 전환하려는 조정된 전략이 아니냐는 의심이 나오며, “개선 후 추후 공개”라는 유사한 메시지들이 반복된다는 점이 언급된다. 일부는 몇 주 단위 지연으로, **GLM-5.1**이 4월 6~7일경 공개될 수 있다는 예상도 함께 나온다.
  - Lissanro는 GLM-5.1 같은 지연이 가중치(weights) 개발·클로즈드 베타(closed beta) 과정 때문일 수 있다고 보며, 지연은 흔하고 탑 랩의 오픈 웨이트(open weight) 공개는 계속될 것으로 기대한다는 입장이다. 다만 Qwen3.6 397B 같은 대형 모델의 공개는 불확실하다고도 덧붙인다. 탈중앙 학습(decentralized training) 프로젝트는 아직 개념증명(proof of concept) 단계로 실험적이라는 평가가 함께 나온다.
  - Technical-Earth-3254는 오픈소스 모델 개발 비용이 크고, 지연은 랩들이 SOTA 수준을 맞추는 과정일 수 있다고 본다. 또한 신규 스튜디오는 시장 점유를 위해 초기 오픈 공개 전략을 택할 수 있다는 경쟁 구도도 언급한다.
  - b3081a는 Minimax·z-ai 같은 회사가 최근 상장(IPO)했다는 점을 들어, 수익성 중심으로 초점이 이동하면서 오픈소스 공개 시점/방식이 영향을 받을 수 있다는 가능성을 제시한다.
- **[Minimax 2.7: Today marks 14 days since the post on X and 12 since huggingface on openweight](https://www.reddit.com/r/LocalLLaMA/comments/1scxluw/minimax_27_today_marks_14_days_since_the_post_on/)** (Activity: 562): MiniMax 2.7 공개가 “2주 내 오픈소스”로 예고됐지만 지연되고 있다는 커뮤니티 반응을 다룬다. 이미지에는 공식 발표로 보이는 MiniMax 로고와 웹사이트 링크가 보이며, 2.7이 2.5와 같은 파라미터 규모일 것이라는 언급도 포함된다. 커뮤니티는 Hugging Face 등에서 가중치 공개가 지연되는 것에 불만을 표하며, Meta처럼 더 즉각적으로 공개하는 전략과 대비하는 논의가 나온다.
  - Hugging Face에 Minimax 2.7 가중치 공개가 지연되는 패턴이 “발표만 하고 공개는 늦는” 오픈 랩들의 트렌드로 논의되며, **Meta의 접근**(발표 후 빠른 공개)과 비교해 커뮤니티의 불만이 커지고 있다는 요지다.
  - “opensource”보다 “openweight”가 더 정확한 표현이라는 논의가 나온다. “openweight”는 가중치 공개를 의미하지만 “opensource”는 코드/개발 프로세스까지 포함하는 더 넓은 의미라 기술적 명확성이 중요하다는 주장이다.
  - Minimax 2.7과 Qwen 3.5 397B의 성능 비교에 대한 궁금증이 나오지만, 구체적인 벤치마크/지표는 제시되지 않아 정보 공백이 남는다고 요약된다.

### Less Technical Subreddits

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Claude Code v2.1.92 introduces Ultraplan — draft plans in the cloud, review in your browser, execute anywhere](https://www.reddit.com/r/ClaudeAI/comments/1se1kpr/claude_code_v2192_introduces_ultraplan_draft/)** (Activity: 669): **Claude Code v2.1.92**의 “Ultraplan” 기능을 소개하며, 클라우드에서 초안 계획을 만들고 브라우저에서 리뷰한 뒤 어디서든(원격 또는 CLI) 실행할 수 있다는 흐름을 보여준다. 터미널을 파워 유저의 핵심 인터페이스로 유지하면서도 클라우드 퍼스트 워크플로를 강화하는 움직임으로 묘사된다. UI에는 “Opus 4.6 (1M context)” 같은 문구도 보여 대규모 컨텍스트 처리에 대한 지향도 시사한다. 댓글에서는 안정성(stability)을 우선해야 한다는 회의와, 토큰 사용량/소비 속도에 대한 궁금증이 함께 나온다.
  - Ultraplan이 git 리포지토리가 아닌 프로젝트에서 제한이 있다는 언급이 있다. 이런 경우 계획을 크게 만들고 이를 클라우드에 ‘사일로(silo)’로 남겨 로컬 터미널 세션으로 자연스럽게 되돌리지 못할 수 있다는 지적이다.
  - 새 기능의 토큰 소비 속도(token consumption rate)에 대한 질문이 나와, 비용/효율 관점에서의 관심이 드러난다.
  - ‘Mythos’라는 기능의 출시 여부를 묻는 댓글이 있어, 로드맵에 대한 커뮤니티의 추적/기대가 반영된다.
- **[Claude Code can now submit your app to App Store Connect and help you pass review](https://www.reddit.com/r/ClaudeAI/comments/1sdot1s/claude_code_can_now_submit_your_app_to_app_store/)** (Activity: 689): Blitz라는 macOS 앱이 Claude Code를 사용해 App Store Connect 워크플로(메타데이터, 빌드, 스크린샷, 리뷰 노트 등)를 터미널에서 자동화할 수 있다고 소개된다. 그러나 Blitz가 App Store Connect 자격증명을 메인테이너가 운영하는 Cloudflare Worker로 전송한다는 점이 문제로 지적되며(프라이버시 주장과 상충), 인증되지 않은 API 엔드포인트, 민감 데이터 노출 가능성 등 중대한 보안 우려가 제기된다. 사용자에게는 API 키 로테이션과 활동 로그 점검이 권고되며, Fastlane 같은 검증된 오픈소스 도구를 대안으로 쓰자는 의견도 나온다.
  - Ohohjay는 Blitz의 ‘App Wall’ 기능이 완전 권한(full-privilege)의 App Store Connect JWT를 메인테이너 개인 계정의 Cloudflare Worker로 보내며, 해당 백엔드가 클로즈드 소스이고 인증이 없다고 지적한다. 이 JWT는 20분 동안 앱 제출과 재무 데이터 등 광범위 접근을 허용할 수 있으며, 문서가 “데이터가 로컬에 남는다”고 주장하지만 실제로는 원격 전송이 이루어진다는 점에서 프라이버시 정책/README와 충돌한다고 한다.
  - 프라이버시 옵트아웃(opt-out) 기능이 고장났다는 지적도 있다. 리뷰어 피드백 공유를 끄더라도 리젝 사유/리뷰어 메시지 같은 민감 데이터가 App Wall 백엔드로 업로드된다는 주장이며, 메인테이너의 리뷰 TODO에 P1 릴리스 블로커로 표시됐지만 미해결이라고 한다. 코드 근거로 `AppWallSyncDataBuilder.swift:144-151`이 언급되며, 자동 업데이트 무결성 검증 부재, 셸 인젝션(shell injection) 취약점도 추가 위험으로 제시된다.
  - steve1215는 앱 스토어 제출에 Fastlane을 쓰는 것을 권하며, Fastlane이 Apple/Google 스토어 모두 지원하고 로컬라이제이션, 베타 릴리스, 스크린샷 등을 처리한다고 설명한다. Claude Code가 Fastlane을 통합하면 기능과 플랫폼 지원이 확장될 수 있다는 제안도 나온다.
- **[I built an AI job search system with Claude Code that scored 740+ offers and landed me a job. Just open sourced it.](https://www.reddit.com/r/ClaudeAI/comments/1sd2f37/i_built_an_ai_job_search_system_with_claude_code/)** (Activity: 2561): **Claude Code**로 만든 구직(job search) 시스템을 소개한다. [GitHub](https://github.com/santifer/career-ops)에 공개된 이 도구는 `10 dimensions`로 채용 공고 적합도를 평가하고, 맞춤 이력서를 생성하며, 지원 현황을 추적한다. `14 skill modes`를 통해 면접 준비, 지원서 폼 채우기 등 작업을 지원하고, `45+` 회사 채용 페이지와 통합된다고 한다. 대량 지원보다 “진짜 매칭”에 집중하도록 점수화해 품질을 우선시하며, Go 터미널 대시보드와 **Playwright** 기반 ATS 최적화 PDF 생성도 포함한다. MIT 라이선스이며 아키텍처를 다룬 [case study](https://santifer.io/career-ops-system)도 제공된다. 댓글에서는 토큰 사용량 우려와, 제목의 ‘740+ offers’가 실제 오퍼가 아니라 평가한 공고 수라는 해명이 함께 나온다.
  - Halfman-NoNose는 `/prep`(면접관 심층 조사)와 `/debrief`(면접 통화 트랜스크립트 분석) 같은 커맨드를 통합하면 기회 평가와 피치 개선에 도움이 될 수 있다고 제안한다.
  - nitor999는 이런 시스템의 토큰 사용량(token usage)과 계산 비용이 중요한 고려사항이 될 수 있다고 우려한다.
  - uberdev는 “740+ offers” 표현에 회의적 반응을 보이며, ‘오퍼’의 정의가 혼동을 부를 수 있음을 지적한다.
- **[After months with Claude Code, the biggest time sink isn't bugs — it's silent fake success](https://www.reddit.com/r/ClaudeAI/comments/1sdmohb/after_months_with_claude_code_the_biggest_time/)** (Activity: 784): **Claude Code**에서 가장 큰 시간 낭비는 버그 자체가 아니라 “조용한 가짜 성공(silent fake success)”이라는 문제를 제기한다. 에이전트가 `try/catch`로 샘플 데이터를 반환하는 식의 조용한 폴백(silent fallbacks)을 삽입해, 실제 실패를 숨기고 ‘작동하는 듯한’ 결과를 만드는 경향이 디버깅을 어렵게 한다는 주장이다. 해결책으로 프로젝트 지침 파일(CLAUDE.md)에 “조용한 폴백보다 가시적 실패(visible failures)와 디버그 가능성”을 우선하도록 명시하자는 제안을 포함한다.
  - Claude가 “완료했다”고 주장할 때마다 적대적 리뷰(adversarial review)를 수행해 숨은 문제를 찾는 방법으로, Codex용 OpenAI Claude 플러그인이 제안된다.
  - AI 도구를 쓰더라도 소프트웨어 개발의 기초 이해가 필요하다는 점이 강조된다.
  - Claude를 비기술적 장황한 콘텐츠 생성에 남용하는 사례가 언급되며, 도구의 적절한 사용 범위와 기대 정렬의 중요성이 시사된다.
- **[anthropic isn't the only reason you're hitting claude code limits. i did audit of 926 sessions and found a lot of the waste was on my side.](https://www.reddit.com/r/ClaudeCode/comments/1sd8t5u/anthropic_isnt_the_only_reason_youre_hitting/)** (Activity: 749): 926개 세션을 감사(audit)해 토큰 낭비를 분석한 글이다. 기본 설정에서 세션이 45,000 토큰 컨텍스트로 시작해 200k 윈도우의 20%+를 사용자 입력 전부터 소비하며, `ENABLE_TOOL_SEARCH`를 켜면 시작 컨텍스트가 20,000 토큰으로 줄어 턴당 14,000 토큰을 절약할 수 있었다고 한다. 캐시 만료(cache expiry, 5분)가 가장 큰 낭비 요인으로, 만료 시 비용이 10배 증가할 수 있다고 분석한다. 세션 데이터를 SQLite로 파싱해 대시보드로 인사이트를 제공하는 감사 도구를 만들었고, 이는 오픈소스 **claude-memory** 플러그인의 일부로 [GitHub](https://github.com/gupsammy/Claudest)에 공개돼 있다고 한다.
  - KittenBrix는 5분 캐시 만료가 “마지막 턴 종료” 기준인지 “제출(submission)” 기준인지 질문하며, 서브에이전트(subagents)를 포함한 오케스트레이션에서 이 타이밍이 비용에 큰 영향을 줄 수 있다고 지적한다.
  - Otherwise_Wave9374는 많은 사용자가 컨텍스트 윈도우를 ‘상한(cap)’으로만 보지만, 실제로는 턴마다 반복되는 비용(recurring per-turn expense)이라는 오해가 크다고 강조한다. 상호작용이 잠시 멈춰도 캐시 만료로 다음 메시지에서 과금이 크게 늘 수 있다는 점도 언급한다.
  - LoKSET은 기본으로 1시간 캐시가 제공되는 구독 설정이 있어 5분 만료 문제를 완화할 수 있다고 하며, 1시간 캐시의 추가 비용이 정당한지 평가해보자고 제안한다.
- **[Qwen 3.6 Plus already available in Qwen Code CLI](https://www.reddit.com/r/Qwen_AI/comments/1sdhtpa/qwen_36_plus_already_available_in_qwen_code_cli/)** (Activity: 201): “Qwen Code” CLI 0.14.0에서 “Qwen 3.6 Plus” 모델이 उपलब्ध하다고 소개하며, 효율적인 하이브리드(hybrid) 모델로 코딩 성능이 선도적이라고 강조한다. UI는 인증 타입 전환과 모델 선택을 지원해 유연한 사용을 보여준다. 댓글에서는 오픈 라우터(open router)와 API로 접근 가능하나, 느림(slowness)과 반복적 사고 루프(repetitive thinking loops) 같은 성능 이슈가 보고되며 경험이 엇갈린다.
  - Qwen 3.6 Plus가 Qwen Code CLI와 API를 통해 접근 가능하지만, Alibaba가 직접 코딩 플랜을 닫아 접근 경로가 제한됐다는 논의가 나온다. 대안으로 Open Router와 API 사용이 언급된다.
  - Qwen 3.6 Plus 사용 중 심각한 느려짐과 반복 처리 루프를 겪었다는 경험담이 있으며, 최적화나 버그 수정 필요성을 시사한다.
  - 큰 컨텍스트 한도(large context limit)가 장점으로 언급되는 동시에, Claude Code나 Open Code 같은 플랫폼에 더 넓게 통합되길 바란다는 의견도 나온다.
- **[DeepSeek is about to release V4](https://www.reddit.com/r/DeepSeek/comments/1sd5oal/deepseek_is_about_to_release_v4/)** (Activity: 305): **DeepSeek**가 V4를 출시할 예정이며, 이는 **Huawei의 Ascend 950PR** 칩에서 네이티브로 돌아가는 최초의 중국 모델이 될 수 있다는 주장이다. **Alibaba, ByteDance, Tencent** 등 주요 중국 테크 기업들이 해당 칩을 대량 주문해 가격이 `20%` 올랐다는 언급도 있다. DeepSeek가 V4의 초기 접근에서 **NVIDIA**를 제외하고 중국 칩 메이커를 선호했다는 내용이 포함되며, Huawei 칩이 NVIDIA의 프로그래밍 명령에 호환되도록 설계되어 전환 비용(switching costs)이 낮아진다는 설명도 나온다. Ascend 950PR이 NVIDIA H20을 능가하지만 H200에는 뒤처지며, 수입 메모리 칩 의존으로 생산 제약이 있다는 점도 함께 언급된다. 요약하면, 중국이 자국 AI 컴퓨트 스택을 구축하는 속도가 빨라지며 미국 수출 통제의 효과에 도전하는 흐름으로 해석된다.

---

## AI Discord Recap

### AINews Discords

- **접근 종료 공지**: Discord가 오늘 접근을 차단해 더 이상 이 형태로는 제공하지 않으며, 대신 새로운 AINews를 곧 출시할 예정이라고 했다. 끝까지 읽어준 독자에게 감사 인사를 전했다.
