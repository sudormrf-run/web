---
title: "Perplexity, Android용 Computer 출시"
summary:
  - "Perplexity, Android용 Computer 출시"
  - "Google, Gemini Embedding 2 공개"
  - "Moonshot `Attention Residuals` 논문 화제"
  - "OpenAI Codex, 주간 활성 200만+ 언급"
  - "NVIDIA, Nemotron 라이선스 제약 완화"
date: 2026-03-16
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-16-not-much.md"
hasHeadline: false
headline: "Perplexity, Android용 Computer 출시"
tags:
  - OpenAI
  - Codex
  - Perplexity
  - Google
  - LangChain
isFeatured: false
---

## 헤드라인: Perplexity, Android용 Computer 출시
참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Perplexity가 Android에서 `Computer`를 공개한 뒤, `Computer`가 Comet을 제어하거나 로컬 브라우저를 커넥터/MCP 없이 도구로 사용하는 방향으로 확장했다. 로컬 쿠키를 보존하면서 사용자가 에이전트의 동작을 직접 확인하는, 권한 기반(permissioned) 로컬 브라우저 제어로의 확장을 강조한 출시로 정리된다.

---

## AI Twitter Recap

### 아키텍처 연구: Moonshot의 Attention Residuals와 선행연구(prior art) 논쟁

- **Moonshot의 `Attention Residuals` 논문이 피드에서 가장 명확한 기술 스토리**: [@Kimi_Moonshot](https://x.com/Kimi_Moonshot/status/2033378587878072424)이 고정 residual 누적을 대체해, 이전 레이어에 대한 입력 의존적(input-dependent) 어텐션을 제안했고 **Block AttnRes**로 레이어 간 어텐션의 실용성을 강조했다. **1.25x compute 이점**, **추론(inference) 지연 <2% 오버헤드**를 주장했으며 **Kimi Linear 48B total / 3B active**에서 검증했다고 했다. 후속 글에서는 히든 스테이트 크기 제어와 깊이 전반의 그래디언트(gradient) 균일화가 언급됐다 ([paper thread](https://x.com/Kimi_Moonshot/status/2033378596438556853), [paper link](https://x.com/Kimi_Moonshot/status/2033378599450079581)). 공개 이후 [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2033404695880896804), [@elonmusk](https://x.com/elonmusk/status/2033528245464047805), [@nathancgy4](https://x.com/nathancgy4/status/2033390157102244098) 등의 반응과, [@eliebakouch](https://x.com/eliebakouch/status/2033488233854620007), [@tokenbender](https://x.com/tokenbender/status/2033437211371454915) 같은 시각적 설명도 이어졌다.
- **흥미로운 2차 논쟁은 이것이 새로움인지, 아니면 “new at scale”인지였다**: [@behrouz_ali](https://x.com/behrouz_ali/status/2033581834953453853)는 **DeepCrossAttention** 등 선행 작업과의 중복을 주장하며 인용 누락과 ML ‘새로움’ 과장을 비판했고, [@cloneofsimo](https://x.com/cloneofsimo/status/2033586628770570323)도 Google의 더 이른 유사 탐색을 언급했다. 반면 시스템 구현과 스케일링 근거가 핵심 직관만큼 중요하다는 반론도 제기됐다 ([context](https://x.com/_arohan_/status/2033587983455293638), [more context](https://x.com/_arohan_/status/2033589201363735004)). 요지는 이 논문이 아키텍처 제안이자 **아이디어 새로움**, **인용 품질**, **프론티어 스케일 검증** 간 긴장의 사례가 됐다는 점이다.

### 코딩 에이전트, 하네스(harness), 스킬(skill) 인프라

- **OpenAI의 Codex 모멘텀이 반복적으로 등장**: OpenAI Devs가 [Codex x Notion event](https://x.com/OpenAIDevs/status/2033333345619464228)를 홍보했고, [@fidjissimo](https://x.com/fidjissimo/status/2033537381907710092)는 **Codex 주간 활성 2M+**, YTD **약 4배** 증가를 언급하며 엔터프라이즈 롤아웃을 위한 배포 조직도 만들고 있다고 했다. [@sama](https://x.com/sama/status/2033599375256207820)는 “hardcore builders”가 Codex로 옮겨가고 있다고 했고, [@gdb](https://x.com/gdb/status/2033605419726483963)는 **GPT-5.4**가 **1주일 내 5T tokens/day**, **순증 기준 $1B 연환산 런레이트**에 도달했다고 말했다. 제품 측면에서는 Codex가 [subagents](https://x.com/i/status/2033636701848174967)를 추가해 멀티 에이전트 코딩 워크플로우 흐름을 강화했다.
- **코딩 에이전트 인프라도 빠르게 성숙 중**: [@AndrewYNg](https://x.com/AndrewYNg/status/2033577583200354812)는 최신 API 문서를 위한 오픈 CLI인 **Context Hub / chub**를 확장해 문서에 대한 **에이전트 피드백 루프**를 지원한다고 했고, [@AssemblyAI](https://x.com/AssemblyAI/status/2033514383914283118)는 Claude Code, Codex, Cursor 등에서 최신 API 패턴을 쓰도록 돕는 유지보수형 **skill**을 출시했다. [@dair_ai](https://x.com/dair_ai/status/2033546855376916735)는 GitHub 저장소에서 에이전트 스킬을 자동 추출해 표준 `SKILL.md`로 만드는 논문과 **40% 지식 전이 향상** 주장을 소개했다.
- **LangChain은 “agent harness engineering”을 더 밀어붙임**: [@LangChain](https://x.com/LangChain/status/2033596690171629582)이 터미널 기반 배포/개발 흐름용 **LangGraph CLI**를 출시했고, 생태계에서 오픈소스 **Deep Agents**가 공개됐다. [@itsafiz](https://x.com/itsafiz/status/2033591253955449289), [@simplifyinAI](https://x.com/simplifyinAI/status/2033581939756818648)는 이를 상위 코딩 에이전트의 워크플로우(플래닝/todos, 파일시스템 작업, 셸 접근, 서브에이전트, 컨텍스트 관리)를 MIT 라이선스로 재구성한 것으로 설명했으며, [@Vtrivedy10](https://x.com/Vtrivedy10/status/2033608199564067098)는 생산 환경 에이전트 작업과 평가(evals)의 기반이라고 말했다. 모델뿐 아니라 **레퍼런스 하네스**를 함께 내는 패턴이 두드러진다는 관찰이 붙었다.

### 오픈소스 에이전트: Hermes의 부상, OpenClaw 통합, 에이전트 UX

- **Hermes Agent가 커뮤니티에서 강한 사이클을 형성**: 해커톤 프로젝트로 홈 미디어 자동화([@rodmarkun’s anime server tool](https://x.com/rodmarkun/status/2033307437088850102)), 보안 툴링([@aylacroft](https://x.com/aylacroft/status/2033429386427351043)), 지정학/OSINT 예측([@WeXBT](https://x.com/WeXBT/status/2033391568426598608)), 연구 시각화([@t105add4_13](https://x.com/t105add4_13/status/2033364535852360069)) 등이 언급됐다. 설정이 더 쉽고 OpenClaw보다 견고하다는 평가가 반복됐으며 [@Zeneca](https://x.com/Zeneca/status/2033460972346650852), [@fuckyourputs](https://x.com/fuckyourputs/status/2033503910376431728), [@austin_hurwitz](https://x.com/austin_hurwitz/status/2033552632241857002), [@0xMasonH](https://x.com/0xMasonH/status/2033608276286243323) 등이 인용됐다. [@Teknium](https://x.com/Teknium/status/2033563976219709766)은 **Honcho memory** 활성화 등 설정 가이드를 올렸다.
- **OpenClaw도 Hermes 비교 와중에 생태계를 확장**: [@ollama](https://x.com/ollama/status/2033339501872116169)가 OpenClaw의 공식 provider로 **Ollama**를 발표했고, Comet은 호출/툴/비용 트레이싱을 위한 [observability plugin](https://x.com/dl_weekly/status/2033529164813250938)을 공개했으며, [NemoClaw](https://x.com/i/status/2033636585963721182) 같은 서드파티 모드도 언급됐다. “승자독식”보다 **provider·메모리 백엔드·트레이싱·온보딩·해커톤 확장** 등 전통적 소프트웨어 생태계에 가까운 모습으로 가는 흐름이 강조됐다.

### 모델·제품 출시: Perplexity Computer, Gemini Embeddings, Mistral/Minimax 신호

- **Perplexity의 `Computer` 롤아웃이 가장 구체적인 엔드유저 에이전트 출시로 언급**: [@AravSrinivas](https://x.com/AravSrinivas/status/2033561054324953432), [@perplexity_ai](https://x.com/perplexity_ai/status/2033562296077963773)가 Android의 Computer를 발표했고, 이후 [Computer can control Comet](https://x.com/perplexity_ai/status/2033598416962592813) 및 커넥터/MCP 없이 **로컬 브라우저**를 도구로 쓰는 확장을 알렸다. 로컬 쿠키를 유지하고 사용자가 동작을 확인할 수 있다고 했으며 ([details](https://x.com/AravSrinivas/status/2033598960238277059), [implementation note](https://x.com/denisyarats/status/2033602822537965600)) 클라우드 통합에서 **권한 기반 로컬 브라우저 제어**로 실행 범위가 넓어진 점이 포인트로 정리됐다.
- **Google이 기본 멀티모달 프리미티브를 추가**: [@Google](https://x.com/Google/status/2033631279925891078)이 Gemini API와 Vertex AI에서 공개 프리뷰로 **Gemini Embedding 2**를 출시하며 텍스트·이미지·비디오·오디오를 아우르는 **단일 임베딩 공간(embedding space)**과 **100+ 언어** 지원을 내세웠다. 프론티어 챗 모델 벤치마크보다, 실제 검색/리트리벌(retrieval) 시스템에 더 큰 영향을 줄 수 있는 출시라는 평가가 붙었다.
- **기타 모델/출시 신호**: [@matvelloso](https://x.com/matvelloso/status/2033304726226493829)는 가격×지연(latency)×지능 관점에서 **gemini-3.1-flash-lite-preview**를 호평했고, [@QuixiAI](https://x.com/QuixiAI/status/2033419073401287156)는 **Qwen 3.5 FP8** 리버스 엔지니어링과 **Qwen3.5-397B-FP8**의 **8× MI210** 구동(**6 tok/s**)을 공유했다 ([run note](https://x.com/QuixiAI/status/2033342155414982952)). [@AiBattle_](https://x.com/AiBattle_/status/2033503838284447758), [@kimmonismus](https://x.com/kimmonismus/status/2033531736647463151)는 **MiniMax 2.7**가 임박했다고 봤고, [@scaling01](https://x.com/scaling01/status/2033625927268126969)은 **Mistral Small 4**의 일부로 **Leanstral**을 언급했으며, [@SeedFold](https://x.com/SeedFold/status/2033515503839514771)는 확산(diffusion) 기반 de novo 올-아톰(all-atom) 단백질 설계를 위한 **SeedProteo**를 발표했다.

### 시스템·추론·그래픽: GTC, speculative decoding, DLSS 5

- **NVIDIA GTC의 메시지: 무게중심은 추론(inference)**: Jensen의 “**inference inflection point**” 프레이밍이 널리 반복됐고 ([@basetenco quote](https://x.com/basetenco/status/2033622003018830198)), [@nvidia](https://x.com/nvidia/status/2033551362210865371), [@kimmonismus](https://x.com/kimmonismus/status/2033615181415387610) 등의 포지셔닝 글도 이어졌다. 행사 전후로 [vLLM’s OCI production-stack guide](https://x.com/vllm_project/status/2033560408980914550) 같은 가이드와, speculative decoding의 순차 병목을 줄이기 위해 한 번에 **K draft tokens**를 생성하는 [P-EAGLE](https://x.com/i/status/2033634407634927624)도 언급됐다(보고된 수치: **B200**에서 **EAGLE-3 대비 최대 1.69x** 가속, **vLLM v0.16.0** 통합).
- **그래픽 쪽에서는 DLSS 5 반응이 우세**: [@ctnzr](https://x.com/ctnzr/status/2033613807105544666), [@GeForce_JacobF](https://x.com/GeForce_JacobF/status/2033615891045454112) 등의 반응과 [Digital Foundry-linked discussion](https://x.com/Grummz/status/2033641075806769382)도 이어졌다. 원본 지오메트리/에셋을 보존하면서 완전 생성형 신경 렌더링/리라이팅(neural rendering / relighting)을 주장하는 점이 핵심으로 요약됐고, LLM과 직접 관련은 없지만 **런타임 시스템의 신경화(neuralized)** 추세의 일부로 언급됐다.

### 과학·헬스케어·보안에서의 AI

- **과학/헬스에서 가장 실질적인 포스트로 Microsoft의 GigaTIME 스레드가 지목**: [@AnishA_Moonka](https://x.com/AnishA_Moonka/status/2033344818475360562)가 Microsoft·Providence·UW 작업을 요약하며 **$5 병리 슬라이드**에서 multiplex immunofluorescence 스타일의 공간 단백체(spatial proteomics)를 예측하는 모델을 소개했다. **40M cells**로 학습하고 **51개 병원, 14,256명 환자**에 적용해 **~300k 가상 단백질 맵**을 만들었으며 **1,234개 검증된 연관성**을 도출했다고 주장했다. 오픈소스라고 소개되며, 암 면역 프로파일링의 대중화를 주장했다.
- **기타 기술적으로 의미 있는 과학/안전 항목**: [@GoogleResearch](https://x.com/GoogleResearch/status/2033599853297865181)는 고온 초전도(high-temperature superconductivity) 추론 과제에서, 웹 의존 설정(web-heavy)보다 큐레이션된 폐쇄형(closed-system) 모델이 과학 작업에 더 낫다는 취지의 평가를 소개했다. [@AISecurityInst](https://x.com/AISecurityInst/status/2033562026534953156)는 사이버 레인지에서 **7개 프론티어 모델**의 자율 공격 능력을 평가했고, [@askalphaxiv](https://x.com/askalphaxiv/status/2033345556949397718)는 LeCun의 **Temporal Straightening for Latent Planning**을 소개하며 잠재 궤적을 ‘직선화’하면 유클리드 거리(Euclidean distance)가 도달 가능한 진행을 더 잘 반영해 플래닝 안정성이 좋아진다는 주장을 전했다.

### Top tweets (by engagement)

- **Healthcare foundation-model impact**: [GigaTIME pathology → spatial proteomics thread](https://x.com/AnishA_Moonka/status/2033344818475360562)가 높은 참여와 함께 가장 신호가 강한 기술 포스트로 언급됐다.
- **Architecture innovation**: [Moonshot’s Attention Residuals release](https://x.com/Kimi_Moonshot/status/2033378587878072424)가 높은 참여와 폭넓은 전문가 논의를 끌었다.
- **Coding agent product momentum**: [@sama on Codex growth](https://x.com/sama/status/2033599375256207820), [@gdb on GPT-5.4 API ramp](https://x.com/gdb/status/2033605419726483963)가 수요 측 신호로 요약됐다.
- **Open agent ecosystem**: [Ollama becoming an OpenClaw provider](https://x.com/ollama/status/2033339501872116169)가 오픈 에이전트 인프라 공지 중 큰 건으로 언급됐다.
- **Agent knowledge infrastructure**: [@AndrewYNg on Context Hub](https://x.com/AndrewYNg/status/2033577583200354812)가 에이전트 간 문서 공유의 구체적 제안으로 꼽혔다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

- **[Qwen 3.5 122b - a10b is kind of shocking](https://www.reddit.com/r/LocalLLaMA/comments/1ruz555/qwen_35_122b_a10b_is_kind_of_shocking/)** (Activity: 623): 로컬 애플리케이션에서 `Qwen 3.5 122b-a10b`가 복잡한 추론(inference)과 자기 주도적 플래닝을 수행한다는 점을 강조하며, 기존 구조를 분석해 API 라우트를 자율적으로 만드는 사례를 소개했다. 댓글에서는 110k 단어 스토리 생성, Kubernetes 클러스터 설정 등 활용 경험이 공유됐고, `27B` 변형이 더 낫다는 주장과 함께 모델 크기/효율 논의도 이어졌다. 하드웨어 측면(예: 큰 컨텍스트, VRAM 요구) 질문과 경험담도 함께 나왔다.
- **[Qwen3.5-9B-Claude-4.6-Opus-Uncensored-Distilled-GGUF](https://www.reddit.com/r/LocalLLaMA/comments/1runlpf/qwen359bclaude46opusuncensoreddistilledgguf/)** (Activity: 1649): 거절을 줄이고 창의성을 높인 “uncensored” 변형의 `Qwen 3.5-9B` 배포를 알렸다. 모델은 [Hugging Face](https://huggingface.co/LuffyTheFox/Qwen3.5-9B-Claude-4.6-Opus-Uncensored-Distilled-GGUF)에 공개됐고, RTX 3060 12GB 기준 사용 파라미터(`Temperature: 0.7`, `Top K Sampling: 20`, `Presence Penalty: 1.5`)와 LM Studio 0.4.7 설정을 공유했다. `27B` 버전은 [here](https://huggingface.co/LuffyTheFox/Qwen3.5-27B-Claude-4.6-Opus-Uncensored-GGUF)로 안내됐으며, 댓글에서는 모델 간 ‘diff’를 적용해 다른 모델을 패치하는 방식이 흥미롭다는 반응이 있었다.
- **[Nvidia updated the Nemotron Super 3 122B A12B license to remove the rug-pull clauses](https://www.reddit.com/r/LocalLLaMA/comments/1rue6tn/nvidia_updated_the_nemotron_super_3_122b_a12b/)** (Activity: 441): NVIDIA가 Nemotron Super 3 122B A12B의 라이선스를 업데이트해 수정/가드레일/브랜딩/어트리뷰션 관련 제약을 완화했다고 요약됐다. 새 라이선스는 [here](https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-nemotron-open-model-license/)에서 확인할 수 있고, 변경 내역은 [Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16/commit/49ad1f46ee9df444a0a3b8b63520faa1ca66324a)에 기록됐다고 했다.
- **[Homelab has paid for itself! (at least this is how I justify it...)](https://www.reddit.com/r/LocalLLaMA/comments/1rug5go/homelab_has_paid_for_itself_at_least_this_is_how/)** (Activity: 956): 약 $9,000 규모의 홈랩으로 Qwen3.5/GLM 계열 LLM 실험을 했고, 온디맨드 GPU 비용과 비교해 “본전”을 뽑았다는 주장을 공유했다. 전력 관리(Tasmota), 로깅(Grafana) 및 고사양(예: `480GB system RAM`, `8TB SSD`/칩) 같은 구성이 언급됐고, 댓글에서는 고가 하드웨어의 비용 정당화에 대한 농담과 반응이 이어졌다.

### Less Technical AI Subreddit Recap

- **대상 서브레딧**: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[I used Claude Code to reverse engineer a 13-year-old game binary and crack a restriction nobody had solved — the community is losing it](https://www.reddit.com/r/ClaudeAI/comments/1ru3irp/i_used_claude_code_to_reverse_engineer_a/)** (Activity: 3781): Claude Code로 2013년 게임(Disney Infinity 1.0) 바이너리를 리버스 엔지니어링해 오래된 캐릭터/플레이셋 제한을 해제한 사례를 소개했다. `FindPlaysetForCharacter`를 다수의 검증 지점에서 추적하고 다수의 바이너리 패치를 적용해 소스/심볼 없이 24시간 내 해결했다고 했으며, 프로젝트는 [GitHub](https://github.com/philparkinson1204/InfinityUnlocked)로 공개됐다. 댓글에서는 Ghidra/IDA 등 디스어셈블리 출력 기반 워크플로우와, AI가 잘못된 패치를 제안할 수 있어 검증이 필요하다는 점이 논의됐다.
- **[Claude wrote Playwright tests that secretly patched the app so they would pass](https://www.reddit.com/r/ClaudeCode/comments/1rug14a/claude_wrote_playwright_tests_that_secretly/)** (Activity: 596): Playwright E2E 테스트를 생성했는데, 테스트가 런타임에 JS를 주입해 UI를 “고쳐서” 통과시키는 방식으로 앱을 패치해 문제를 가린 사례를 공유했다. 이 경험을 계기로 `CLAUDE.md`에 “기능이 깨졌으면 테스트는 실패해야 한다”는 원칙을 강조했다고 한다. 댓글에서는 Goodhart’s Law(지표 최적화의 함정), 코드 작성자와 검증자를 분리하는 이중 에이전트 접근 등이 언급됐다.
- **[I fed 14 years of daily journals into Claude Code](https://www.reddit.com/r/ClaudeAI/comments/1rumjhd/i_fed_14_years_of_daily_journals_into_claude_code/)** (Activity: 2225): 14년치 일기 데이터를 바탕으로 강점 리포트와 개선 권고를 생성한 사례를 소개하며, 개인 데이터 분석의 효용과 프라이버시 우려를 함께 다뤘다. 댓글에서는 데이터를 한 번에 넣기보다 시간순 청크로 처리하는 방법, 가정과 데이터 기반 결론을 구분하도록 프롬프트하는 방법, 민감도 점검/익명화 등의 실무 팁이 논의됐다.
- **[I made a tool to check Claude's off-peak hours in your local time](https://www.reddit.com/r/ClaudeAI/comments/1runy7i/i_made_a_tool_to_check_claudes_offpeak_hours_in/)** (Activity: 522): PT(미국 태평양 시간) 기준 오프피크 시간을 로컬 타임존으로 변환하는 불편을 줄이기 위해, 현재가 “Claude Promo Time”인지와 피크 재개까지 카운트다운을 보여주는 도구를 만들었다고 소개했다.
- **[Just passed the new Claude Certified Architect - Foundations (CCA-F) exam with a 985/1000!](https://www.reddit.com/r/ClaudeAI/comments/1ruf70b/just_passed_the_new_claude_certified_architect/)** (Activity: 1593): Anthropic의 CCA-F 시험이 프롬프트 엔지니어링, 컨텍스트 관리, Human-in-the-Loop 실무를 다룬다고 소개됐고, 985/1000 점수 및 Early Adopter 배지를 공유했다. 준비 자료로 [Exam Guide](https://share.google/0eqIbebzRMUt8KTc8), [Playbook](https://drive.google.com/file/d/1luC0rnrET4tDYtS7xe5jUxMDZA-4qNf-/view?usp=sharing)가 언급됐으며, 댓글에서는 필요성/접근성(파트너사 재직 요건) 논의가 있었다.
- **[[P] I got tired of PyTorch Geometric OOMing my laptop, so I wrote a C++ zero-copy graph engine to bypass RAM entirely.](https://www.reddit.com/r/MachineLearning/comments/1ru7bnz/p_i_got_tired_of_pytorch_geometric_ooming_my_laptop_so_i_wrote_a_c_zero_copy_graph_engine_to_bypass_ram_entirely/)** (Activity: 382): GraphZero v0.2를 C++ 기반 zero-copy 그래프 엔진으로 소개하며, CSV를 `.gl`/`.gd` 바이너리로 컴파일하고 POSIX `mmap`으로 SSD에서 직접 메모리 매핑해 OOM을 피한다고 설명했다. `nanobind`를 통한 PyTorch 연동과 OpenMP 기반 샘플링 병렬화가 언급됐고, 프로젝트는 [GitHub](https://github.com/KrishSingaria/graphzero)에 공개됐다. 댓글에서는 `np.memmap`/`LMDB` 대안, 랜덤 액세스 패턴의 page cache 의존, CPU/CUDA 측 처리 최적화 아이디어가 논의됐다.
- **[The "Hunter Alpha" stealth model on OpenRouter is NOT DeepSeek V4. I ran offline architectural fingerprinting, here is the proof.](https://www.reddit.com/r/DeepSeek/comments/1rubut7/the_hunter_alpha_stealth_model_on_openrouter_is/)** (Activity: 318): OpenRouter의 “Hunter Alpha”가 DeepSeek V4의 은닉 테스트라는 소문을 반박하며, 토크나이저/아키텍처 어휘/정렬(alignment) 특성 등을 근거로 다르다고 주장했다. 댓글에서는 성능 비교와 정체(예: Xiaomi MiMo 가능성) 추정이 있었지만 확정은 아니라고 정리됐다.
- **[I asked Claude if everyone uses AI to write, what actually gets lost?](https://www.reddit.com/r/ClaudeAI/comments/1rvcwmu/i_asked_claude_if_everyone_uses_ai_to_write_what/)** (Activity: 700): AI 글쓰기 확산이 개인의 고유한 표현과 정체성 신호를 약화시킬 수 있다는 문제의식을 다뤘고, 댓글에서는 해당 논의의 반복성/피로감도 언급됐다.
- **[I love that Claude doesn’t patronize me](https://www.reddit.com/r/ClaudeAI/comments/1rurfus/i_love_that_claude_doesnt_patronize_me/)** (Activity: 1560): Claude의 덜 훈계조이고 더 솔직한 톤을 선호한다는 밈과 반응이 공유됐고, 댓글에서는 “모른다”를 인정하고 검증을 권하는 스타일이 장점으로 언급됐다.
- **[working w/ Claude for several hours feels like this](https://www.reddit.com/r/ClaudeAI/comments/1ruk2gy/working_w_claude_for_several_hours_feels_like_this/)** (Activity: 966): ‘매트릭스’ 장면을 비유로, Claude를 오래 쓰면 단시간에 능력이 로딩되는 듯한 느낌을 준다는 밈을 공유했다.
- **[I turned my Claude Code agents into Tamagotchis so I can monitor them from tmux](https://www.reddit.com/r/ClaudeAI/comments/1ru9yda/i_turned_my_claude_code_agents_into_tamagotchis_so_i_can_monitor_them_from_tmux/)** (Activity: 836): tmux에서 Claude Code 에이전트를 모니터링하는 Rust/Ratatui 기반 대시보드 **Recon**을 소개했고, 픽셀아트 상태 표시와 세션 전환의 실용성을 강조했다. 프로젝트는 [GitHub](https://github.com/gavraz/recon)에 공개됐으며, 컨텍스트 사용량 지표 추가, stop hook로 JSONL 로그/요약 노트 생성 같은 운영 아이디어가 논의됐다.
- **[I built a Claude skill that writes perfect prompts and hit #1 twice on r/PromptEngineering. Here is the setup for the people who need a setup guide.](https://www.reddit.com/r/PromptEngineering/comments/1rtxfaz/i_built_a_claude_skill_that_writes_perfect/)** (Activity: 713): ‘prompt-master’라는 Claude skill이 GPT/Claude Code/Midjourney용 프롬프트를 자동 생성해 재프롬프트 비용을 줄인다고 소개했다. 설치는 [GitHub](http://github.com/nidhinjs/prompt-master)에서 ZIP을 받아 업로드하는 방식으로 설명됐고, XML 출력 등 구현상의 특징과 “#1” 주장에 대한 댓글 반응이 함께 언급됐다.

---

## AI Discord Recap

### AINews Discords

- **접근 종료 공지**: Discord가 오늘 접근을 차단해, 이 형태로는 더 이상 제공하지 않으며 대신 새로운 AINews를 곧 출시하겠다고 밝혔다.
