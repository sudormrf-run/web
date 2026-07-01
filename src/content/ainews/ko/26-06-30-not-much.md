---
title: "Claude Sonnet 5, 1M 컨텍스트로 출시"
summary:
  - "Claude Sonnet 5가 기본 모델로 출시"
  - "1M 컨텍스트와 Managed Agents 지원"
  - "LongCat-2.0 오픈 웨이트 모델 공개"
  - "Etched가 첫 추론 랙 출하를 예고"
  - "Google이 새 이미지 및 비디오 모델 출시"
date: 2026-06-30
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-30-not-much.md"
hasHeadline: false
headline: "Claude Sonnet 5, 1M 컨텍스트로 출시"
tags:
  - Anthropic
  - Claude
  - Sonnet5
  - Agents
  - LocalLLM
isFeatured: false
---

## 헤드라인: Claude Sonnet 5, 1M 컨텍스트로 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic이 Claude Sonnet 5를 새로운 기본 중간급 frontier 모델로 출시했다. 핵심은 1M 토큰 컨텍스트, Claude Code/API/Managed Agents 지원, 코딩(coding)과 도구 사용(tool use) 성능 개선이다. 다만 실제 task cost, Fable 5 부재, “5”라는 이름이 적절한지에 대한 논쟁도 함께 커졌다.

---

## AI Twitter Recap

### 주요 소식: Sonnet 5 출시

Anthropic은 Claude Sonnet 5를 새로운 기본 중간급 frontier 모델로 출시했으며, Claude, Claude Code, API, 생태계 파트너에 즉시 배포했다.

- **공식 발표**: Anthropic은 **Claude Sonnet 5**를 “지금까지 가장 에이전틱(agentic)한 Sonnet”이라고 발표하며, 계획 수립, 브라우저/터미널 도구 사용, 이전에는 “더 크고 비싼 모델”이 필요했던 자율 실행을 강조했다 ([\@claudeai](https://x.com/claudeai/status/2072017450611142835))
- **개발자 포지셔닝**: Anthropic 개발자 계정은 Sonnet 5가 **Sonnet 가격대에서 최상위권 코딩 및 도구 사용 성능**을 제공하고, **1M 토큰 컨텍스트 윈도우**를 갖췄으며, **Pro 사용자의 Claude Code 기본 모델**이고 **API 및 Managed Agents**를 포함한 Claude Platform에서 이용 가능하다고 밝혔다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762))
- **가격**: Anthropic은 표준 가격을 **입력 토큰 $3/M, 출력 토큰 $15/M**으로 유지했지만, 게시물에 따라 **8월 31일 / 9월 1일까지 입력 $2/M, 출력 $10/M**의 프로모션 요금을 도입했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072019015577333804), [\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **출시 전 노출**: Sonnet 5는 먼저 유출과 클라이언트 측 발견으로 드러났다. 유출자들은 출시 전 **지식 컷오프 January 2026**, **$2/$10 프로모션 가격**, **1M 컨텍스트 변형**을 주장했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071953298169778636)); 이후 사용자들은 **model selector**, **Claude Code 2.1.197**, **Anthropic GitHub**, 그리고 **Germany**를 포함한 계정에서 실제 활성화를 보고했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071971743556628668), [\@scaling01](https://x.com/scaling01/status/2071969195726659829), [\@scaling01](https://x.com/scaling01/status/2072014332104265884), [\@kimmonismus](https://x.com/kimmonismus/status/2072017872478470586))
- **Linux 지원 확대**: Anthropic은 출시와 동시에 **Linux용 Claude Desktop(Ubuntu/Debian beta)**을 유료 플랜의 Claude Code/Cowork/chat에 제공했다. 다만 이 Linux 릴리스에 **Computer Use는 포함되지 않았다** ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2071988881717871065), [\@ClaudeDevs](https://x.com/ClaudeDevs/status/2071988883802444125))
- **Managed Agents 업데이트**: Anthropic은 streaming session deltas, per-session overrides, webhook events, reverse pagination, credential injection scoping, token/tool metrics가 있는 observability tab 등 **Managed Agents** 업데이트도 함께 출시해, 이번 릴리스가 단순 모델 성능뿐 아니라 플랫폼/통합 스토리이기도 함을 보여줬다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072058428424589412), [\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072058433097122145))

### 출시 타임라인과 사전 루머

출시 전에는 **Sonnet 5 + Fable 5**를 중심으로 큰 루머 사이클이 있었다.

- 앱 문자열 분석은 Anthropic이 **“Fable 5”를 기존 플랜 밖에서 과금되는 별도 사용 크레딧 시스템 뒤에 둘 준비**를 하고 있으며, 근처에 **identity verification** 문구가 나타났다고 시사했다. 이는 접근이 기존 플랜보다 더 제한되고 규제될 것이라는 추측으로 이어졌다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071868011804266828))
- 이로 인해 Sonnet 5가 더 강력하지만 제한적인 **Fable 5**의 동반 모델로, **널리 접근 가능하지만 약한** 모델로 출시될 수 있다는 우려가 나왔다. 특히 유럽에서 지역 접근 문제가 있을 수 있다는 관측도 있었다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071899142616408377))
- 추가 루머 게시물들은 잠재적 Sonnet 5 출시를 **Fable 5 재출시**와 직접 연결했고, 일부 사용자는 Sonnet 5가 “적어도” Fable 뉴스와 함께 나올 것이라고 명시적으로 말했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071941904636531167), [\@kimmonismus](https://x.com/kimmonismus/status/2071953298169778636))
- 출시 후 그 기대는 충족되지 않았다. 여러 반응은 Fable 5 부재를 진짜 이야기로 보았다: “대신 우리는 sonnet 5를 받았다” ([\@kimmonismus](https://x.com/kimmonismus/status/2072058904352002271)) 그리고 “Fable 5가 금지된 지 18일이 지났다” ([\@theo](https://x.com/theo/status/2072058513669693608))

### 공식 포지셔닝과 독립 해석

Anthropic과 하위 파트너들은 Sonnet 5를 **에이전틱(agentic) 역량, 코딩, 도구 사용, 비용 대비 성능** 중심으로 설명했다.

- **공식 주장**: Sonnet 5는 **“지금까지 가장 에이전틱한 Sonnet”**이며, 계획을 만들고 브라우저/터미널을 사용하며 최근까지 더 큰 모델이 필요했던 수준으로 자율 작동할 수 있다 ([\@claudeai](https://x.com/claudeai/status/2072017450611142835))
- **개발자 계정 주장**: Anthropic 개발자 계정은 이를 **Sonnet 가격의 frontier급 코딩 및 도구 사용** 모델로 포지셔닝하며, **1M context**와 광범위한 플랫폼 제공을 명시했다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762))
- **안전성 요약**: Anthropic 관련 요약 게시물은 Sonnet 5가 전반적으로 **Sonnet 4.6보다 안전**하고, **hallucination**과 **sycophancy**가 낮으며, **cyber safeguards가 기본 활성화**되어 있다고 강조했다. 동시에 **심각한 cyber work에서는 Opus가 여전히 더 강하다**고 인정했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072019015577333804))
- **마이그레이션 지원**: Anthropic은 **claude-api skill**이 프롬프트 조정, effort level 추천, Sonnet 5용 advisor mode 설정을 돕는다고 밝히며 마이그레이션 도구/문서도 제공했다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018517898272844))

### 독립 및 제3자 평가

제3자들은 대체로 Sonnet 5가 **Sonnet 4.6 대비 실제 개선**이라고 봤지만, “5.0”이라는 이름에 걸맞은지, Opus 및 경쟁 모델 대비 실질 가격/성능이 어떤지는 논쟁했다.

- Cursor는 Sonnet 5가 **CursorBench에서 의미 있는 상승**을 보였다고 밝혔다: Sonnet 4.6의 49% 대비 **57%** ([\@cursor_ai](https://x.com/cursor_ai/status/2072020786181988418))
- Cognition은 Sonnet 5가 **FrontierCode Extended에서 Opus 4.8을 능가**한다고 했고, **53.8% score**와 **57.6% pass rate**를 게시했다. 다만 곧 있을 조정 후 benchmark 순위가 약간 바뀔 수 있다고 덧붙였다 ([\@cognition](https://x.com/cognition/status/2072022778144821292), [\@cognition](https://x.com/cognition/status/2072022781043028182))
- Cline은 **Terminal-Bench에서 절반 이하 비용으로 Opus 4.8 수준 성능**과 “--yolo coders”를 위한 **prompt-injection hijacks** 저항성 개선을 강조했다 ([\@cline](https://x.com/cline/status/2072051144436928727))
- FactoryAI, Perplexity, Cursor, Devin, Droid, Agent Arena, VS Code는 모두 빠르게 지원 또는 제공 발표를 했다. 이는 사용자 반응이 엇갈린 영역에서도 생태계가 이를 관련성 높은 기본 모델로 보았음을 보여준다 ([\@FactoryAI](https://x.com/FactoryAI/status/2072021755619864778), [\@perplexity_ai](https://x.com/perplexity_ai/status/2072030042994160028), [\@AravSrinivas](https://x.com/AravSrinivas/status/2072031649693675810), [\@code](https://x.com/code/status/2072029026881859987), [\@arena](https://x.com/arena/status/2072035566829568111), [\@cognition](https://x.com/cognition/status/2072022778144821292))

### 기술 세부사항

- **Context window**: **1 million tokens** ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Standard pricing**: **$3/M input, $15/M output** ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Promotional pricing**: 게시물 표현에 따라 **Aug. 31 / Sept. 1**까지 **$2/M input, $10/M output** ([\@kimmonismus](https://x.com/kimmonismus/status/2072019015577333804), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Cache pricing**: **cache writes 25% premium ($3.75/M)**, **cache hits 90% discount ($0.3/M)**, **5-minute TTL** ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Effort settings**: Sonnet 5는 **xhigh**를 추가해 Opus 4.8과 같은 총 **5 effort levels**를 제공한다: **max, xhigh, high, medium, low** ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Knowledge cutoff (rumored pre-launch)**: **January 2026** ([\@kimmonismus](https://x.com/kimmonismus/status/2071953298169778636))

### 벤치마크와 측정된 변화

논의의 핵심은 Sonnet 5가 4.6 대비 크게 개선됐지만, 넓은 intelligence aggregate에서는 보통 **Opus 4.8을 넘지 못했다**는 점이었다.

- **CursorBench**: Sonnet 5 **57%**, Sonnet 4.6 **49%** ([\@cursor_ai](https://x.com/cursor_ai/status/2072020786181988418))
- **Artificial Analysis Intelligence Index**: Sonnet 5는 **53**점으로 Sonnet 4.6 대비 **+6**, 전체 **#5**에 올랐고, **GPT-5.5 high reasoning**과 거의 동률이지만 **Opus 4.7/4.8**에는 뒤처졌다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Artificial Analysis token usage**: Sonnet 5는 task당 평균 **~69k output tokens**를 사용해 Sonnet 4.6보다 **output tokens 약 40% 증가**했다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062598187765893))
- **Artificial Analysis task cost**: 표준 가격 기준 Sonnet 5는 Intelligence Index task당 **$2.29**가 들었고, 더 많은 token/turn 사용 때문에 토큰당 가격은 낮아도 Sonnet 4.6의 **약 2배**, Opus 4.8보다 **~15% 더 비쌌다** ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **Agentic turns**: Sonnet 5는 **AA-Briefcase**와 **GDPval-AA**에서 Sonnet 4.6 대비 **~3배 agentic turns**를 사용했고, GDPval-AA에서 **max effort**는 **low effort**보다 약 **6배 더 많은 turns**를 사용했다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- **CritPt frontier physics benchmark**: Sonnet 5는 **17%**를 기록해 전작 대비 **+14 points** 개선됐지만, 여전히 **GLM-5.2**, **Claude Opus**, **Fable**, **GPT-5.5** variants보다 뒤였다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- Artificial Analysis는 **Terminal-Bench v2.1 (+9)**, **Humanity’s Last Exam (+10)**, **SciCode (+7)**에서도 Sonnet 4.6 대비 의미 있는 개선을 보고했다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- Cognition의 **FrontierCode Extended** 결과는 **53.8% score**, **57.6% pass rate**로, 현재 평가에서 Opus 4.8을 앞섰다 ([\@cognition](https://x.com/cognition/status/2072022781043028182))
- Max Bittker는 **Runescape benchmark** 점수가 Sonnet 4.6보다 크게 올랐지만, **GLM 5.2**와 **Gemini 3.5 Flash** 같은 인접 Pareto 경쟁자보다 여전히 뒤라고 지적했다 ([\@maxbittker](https://x.com/maxbittker/status/2072054926746779806))

### 토큰화와 실효 비용

과소평가된 기술 세부사항 중 하나는 tokenizer와 실질 billing 동작이었다.

- Simon Willison은 **new tokenizer** 때문에 Sonnet 5가 **English에서는 ~1.4x 더 비싸고**, **Spanish에서는 ~1.33x**, **Simplified Mandarin에서는 거의 동일**하다고 지적했다 ([\@simonw](https://x.com/simonw/status/2072068898648949184))
- 이는 많은 사용자가 list price만 비교한 반면, 평가자와 power user는 **cost per token**이 아니라 **cost per solved task**에 초점을 맞췄기 때문에 중요하다

### 사실과 의견

공식 또는 benchmark 게시물이 뒷받침하는 사실은 다음과 같다.

- Sonnet 5는 공식 출시됐고 **Claude, Claude Code, API, Managed Agents**, 여러 파트너 제품에서 이용 가능하다 ([\@claudeai](https://x.com/claudeai/status/2072017450611142835), [\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762))
- **1M-token context window**를 갖췄다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762))
- 표준 가격은 input/output million tokens당 **$3/$15**이고, 임시 프로모션은 **$2/$10**이다 ([\@ClaudeDevs](https://x.com/ClaudeDevs/status/2072018504392601762), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- 제3자 결과는 CursorBench, FrontierCode Extended, Artificial Analysis 등 코딩/agentic benchmarks에서 Sonnet 4.6 대비 의미 있는 향상을 보여준다 ([\@cursor_ai](https://x.com/cursor_ai/status/2072020786181988418), [\@cognition](https://x.com/cognition/status/2072022781043028182), [\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))
- Artificial Analysis는 Sonnet 5가 더 많은 tokens/turns를 사용하기 때문에 **task당 비용이 Opus 4.8보다 더 높을 수 있다**고 밝혔다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072062592923930666))

### 루머 및 미검증 주장

- **Fable 5** billing 변경, identity verification, 규제 연계는 공식 launch note가 아니라 app-string 해석과 사용자 추측에서 나왔다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071868011804266828))
- **January 2026 knowledge cutoff**와 일부 출시/가격 세부사항은 확인 전에 유출됐다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071953298169778636))
- Sonnet 5가 **의도적으로 nerfed**됐거나, **Opus 아래에 머물 만큼만 self-distilled**됐거나, **frontier capabilities에 대한 soft ban** 때문에 출시됐다는 주장은 공식 자료에서 입증되지 않은 의견/추측이다 ([\@scaling01](https://x.com/scaling01/status/2072039834529435674), [\@z4y5f3](https://x.com/z4y5f3/status/2072028918622622026), [\@kimmonismus](https://x.com/kimmonismus/status/2072027861385466123))

### 해석적 의견

- 긍정적 해석: Sonnet 5는 **parallel workflows, long-running agents, production coding systems**에 가장 중요한 **더 작고 저렴한 모델 개선**이다 ([\@The_Whole_Daisy](https://x.com/The_Whole_Daisy/status/2072019554935652746), [\@omarsar0](https://x.com/omarsar0/status/2072022542521438300), [\@skirano](https://x.com/skirano/status/2072044693798412782))
- 부정적 해석: Sonnet 5는 **기대 이하**이고, 실제로는 비싸며, aggregate capability가 큰 generational leap보다 **4.8/4.9**에 가까운데 “5”로 이름 붙인 것은 부적절하다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072027861385466123), [\@scaling01](https://x.com/scaling01/status/2072039834529435674), [\@DeryaTR_](https://x.com/DeryaTR_/status/2072051617298293199))
- 중립/엔지니어링 해석: 이는 hype release보다 **production-friendly release**다. coding/agents에서 더 낫고 광범위하게 배포 가능하지만 flagship을 다시 정의하는 점프는 아니다 ([\@dejavucoder](https://x.com/dejavucoder/status/2072020732226478192), [\@OpenAIDevs](https://x.com/OpenAIDevs/status/2072036305442406772))

### 다양한 의견

- **Production users benefit most.** 여러 게시자는 Sonnet 5가 모든 static benchmark를 이기지 못하더라도 **long-running agents**, **coding loops**, **tool-use reliability**에 팀들이 원하는 모델이라고 주장했다 ([\@omarsar0](https://x.com/omarsar0/status/2072022542521438300), [\@skirano](https://x.com/skirano/status/2072044693798412782))
- **Smaller-model launches matter.** Power user들은 더 저렴한/default-tier 모델이 강해질 때 얻는 가치를 과소평가할 수 있다. 이는 더 많은 parallel agents와 workflow redundancy를 가능하게 하기 때문이다 ([\@The_Whole_Daisy](https://x.com/The_Whole_Daisy/status/2072019554935652746))
- **Coding benchmarks are strong.** Cursor와 Cognition은 모두 실용적 코딩/evaluation harness에서 상당한 결과를 게시했다 ([\@cursor_ai](https://x.com/cursor_ai/status/2072020786181988418), [\@cognition](https://x.com/cognition/status/2072022781043028182))
- **Security angle improved.** Cline은 자율 터미널/브라우저 사용과 관련된 prompt-injection/hijack 시도에 대한 저항성 개선을 강조했다 ([\@cline](https://x.com/cline/status/2072051144436928727))

### 비판적 견해

가장 강한 비판은 **명명, Fable 5 부재, task-level cost efficiency 부족**에 집중됐다.

- **Naming criticism**: 사용자들은 “Sonnet 5”가 major-version leap을 암시하지만 evals는 **Sonnet 4.8/4.9**에 더 가까운 결과를 보인다고 주장했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072027861385466123), [\@teortaxesTex](https://x.com/teortaxesTex/status/2072021520352772185))
- **Benchmark criticism**: 여러 사용자는 Sonnet 5가 여전히 “모든 evals” 또는 broad intelligence measures에서 **Opus 4.8**에 뒤처진다고 강조했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072027861385466123), [\@theo](https://x.com/theo/status/2072066764465393917))
- **Cost-per-task criticism**: 이것이 가장 기술적으로 근거 있는 부정적 주제가 됐다. Theo, Yuchen Jin, Scaling01, Kimmonismus는 모두 Sonnet 5가 verbosity/turn count 때문에 실제 evaluated tasks에서 **Opus 4.8 또는 Fable보다 더 비쌀 수 있다**는 점을 증폭했다 ([\@theo](https://x.com/theo/status/2072066764465393917), [\@theo](https://x.com/theo/status/2072068395529576912), [\@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2072070274300948497), [\@kimmonismus](https://x.com/kimmonismus/status/2072072593109315855), [\@scaling01](https://x.com/scaling01/status/2072071305281540338))
- **Launch disappointment tied to Fable 5**: 비판자들은 Sonnet 5를 진짜 frontier model이 보류되거나 제한된 상황에서 나온 consolation release로 봤다 ([\@kimmonismus](https://x.com/kimmonismus/status/2072027861385466123), [\@theo](https://x.com/theo/status/2072058513669693608), [\@scaling01](https://x.com/scaling01/status/2072044421634281636))

### 중립 및 혼합 반응

- **“Production people will be happy; personal wow-factor is low.”** 이 문장은 반복된 혼합 반응을 잘 요약한다 ([\@dejavucoder](https://x.com/dejavucoder/status/2072020732226478192))
- **Good release, bad expectation management.** 일부 사용자는 모델 자체보다 “5.0” 라벨과 루머 사이클이 더 극적인 frontier jump를 기대하게 만든 점에 더 불만을 가진 듯했다
- **Agentic quality may be undermeasured.** 일부는 전통적 benchmark 비교가 긴 horizon tasks에서 한 게시자가 모델의 **“working mind”**라고 부른 개선을 과소평가할 수 있다고 봤다 ([\@skirano](https://x.com/skirano/status/2072044693798412782))

### 생태계 배포

Sonnet 5는 coding-agent 생태계 전반에 이례적으로 빠르게 채택됐다. 이는 시장이 어디에서 가치를 본다고 판단하는지 보여준다.

- **Cursor**는 Sonnet 5를 추가하고 CursorBench 차이를 공개했다 ([\@cursor_ai](https://x.com/cursor_ai/status/2072020786181988418))
- **Devin Desktop / CLI**는 이를 추가했고 Opus 4.8 대비 FrontierCode Extended 성능 우위를 주장했으며, Aug. 31까지 Sonnet 4.6보다 임시로 **~30% lower quota usage**를 제공한다고 밝혔다 ([\@cognition](https://x.com/cognition/status/2072022778144821292), [\@cognition](https://x.com/cognition/status/2072022784084000810))
- **Cline**은 지원을 추가하고 Terminal-Bench/cyber-hijack robustness를 강조했다 ([\@cline](https://x.com/cline/status/2072051144436928727))
- **FactoryAI Droid**는 Aug. 31까지 **1/3 off**로 Sonnet 5를 추가했다 ([\@FactoryAI](https://x.com/FactoryAI/status/2072021755619864778))
- **Perplexity**는 Pro/Max용 Sonnet 5와 **Computer orchestrator model**로 이를 추가했다 ([\@perplexity_ai](https://x.com/perplexity_ai/status/2072030042994160028), [\@AravSrinivas](https://x.com/AravSrinivas/status/2072031649693675810))
- **VS Code / @code**는 이를 배포했다 ([\@code](https://x.com/code/status/2072029026881859987))
- **Arena**는 Agent Arena와 다른 arenas에 Sonnet 5를 추가했다 ([\@arena](https://x.com/arena/status/2072035566829568111))

이 배포 패턴은 Sonnet 5가 chatbot headline이라기보다 **agentic software stacks의 default workhorse model**로 취급되고 있음을 강화한다.

### 맥락

Sonnet은 역사적으로 Anthropic의 **price/performance workhorse**였고 coding assistants, managed agents, enterprise automation 같은 제품에서 대규모로 사용될 가능성이 높은 모델이었다. 이 맥락은 담론이 갈라진 이유를 설명한다.

- Frontier-watchers는 **headline “5.x” event**를 기대했다
- Builders는 **더 나은 reliable default model**을 원했다
- Power users는 **per token**이 아니라 **per solved task**를 benchmark했다
- Policy-aware observers는 **Fable 5** 부재와 앞선 **ID-verification/credit rumors**를 거버넌스 강화 또는 단계적 접근의 신호로 해석했다

이번 출시는 모델 차별화가 점점 다음 요소에 달려 있는 시장에서 이뤄졌다.

- **long-horizon tool use**
- **agent reliability**
- **token efficiency**
- **effective cost per completed task**
- 순수 chat demo보다 **work environments로의 integration**

그래서 반응은 “clear upgrade”부터 “worst Anthropic launch”까지 갈렸다. 둘 다 실제이지만 서로 다른 축에 반응하고 있다.

- **Sonnet 4.6 대비 절대 역량**에서는 실질적으로 더 좋아 보인다
- **Opus/Fable 기대 대비 headline frontier progress**에서는 많은 이를 실망시켰다
- **list price**로 보면 저렴해 보인다
- **task-level cost**로 보면 놀라울 만큼 비싸 보일 수 있다
- **ecosystem utility**에서는 즉시 수용됐다

### 중국 모델, 인프라, 오픈 웨이트 경쟁

- Sonnet 외부에서 가장 많은 관심을 끈 것은 Meituan의 릴리스였다. 주요 중국 배달 회사가 **open-weights 1.6T-parameter model**을 공개했고, 논의는 예상 밖의 중국 incumbent들이 어떻게 frontier-scale 노력을 자금 지원할 수 있는지에 집중됐다 ([\@JosephJacks_](https://x.com/JosephJacks_/status/2071858781521342568), [\@natolambert](https://x.com/natolambert/status/2071972882264268923), [\@teortaxesTex](https://x.com/teortaxesTex/status/2071906284958294419))
- 기술적 검토는 hardware와 scale 세부사항에 집중됐다. Meituan이 **CloudMatrix 384 pods in “910B mode”**를 사용했다는 주장은 **~25K chips not 50K GPUs-equivalent**를 의미하며, 비판자들은 이를 향후 **Huawei 950DT SuperPod with 8192 chips**가 전체 setup을 능가할 가능성과 비교했다 ([\@teortaxesTex](https://x.com/teortaxesTex/status/2071888424823325139), [\@teortaxesTex](https://x.com/teortaxesTex/status/2071889274954260720))
- DSpark/DeepSeek infra도 주요 하위 주제였다. 게시자들은 **TPOT of 2.9–5.2 ms**, 중국 provider 전반의 잠재적 **50% throughput** 개선 또는 **60% interactivity** 개선, DeepSeek의 infra open-sourcing이 넓은 경제적 spillovers를 만든다는 관점을 강조했다 ([\@teortaxesTex](https://x.com/teortaxesTex/status/2071879186373923284), [\@teortaxesTex](https://x.com/teortaxesTex/status/2071873225881989424), [\@Xianbao_QIAN](https://x.com/Xianbao_QIAN/status/2071917185380073611))
- Huawei/Pangu와 더 넓은 domestic stack momentum도 언급됐다. **Pangu 92B / 6B active MoE**의 7월 open-sourcing이 주목됐고, 중국 연구소들이 이제 domestic hardware에서 near-frontier model을 훈련할 수 있는 software와 architecture maturity를 갖췄다는 주장이 반복됐다 ([\@teortaxesTex](https://x.com/teortaxesTex/status/2071890951816003663), [\@teortaxesTex](https://x.com/teortaxesTex/status/2072038240027131963))

### 추론, 칩, 시스템

- Etched의 stealth exit가 hardware 뉴스를 지배했다. 회사는 **$800M raised**, **$1B+ customer contracts**, 성공적인 **A0 tapeout**, 고객 테스트에서 초기 **SOTA throughput/latency/power efficiency**, 이번 여름 첫 racks 출하를 밝혔다 ([\@Etched](https://x.com/Etched/status/2071972062202343590))
- 후속 해설은 두 가지 주목할 hardware 아이디어를 설명했다. 지속 부하에서 thermal throttling을 피하기 위한 **low-voltage inference**, 그리고 long-context / giant-model inference를 위해 SRAM 같은 접근 속도와 더 큰 pooled memory를 목표로 하는 **cluster-scale memory**다 ([\@LiorOnAI](https://x.com/LiorOnAI/status/2072017343262466097))
- OpenAI는 추론(inference) 비용을 **절반 이상 낮춘** inference optimization을 찾은 것으로도 전해졌다. 어느 시점에는 logged-out ChatGPT traffic이 “a couple hundred” GPUs 수준으로 줄었다고 하며, 여러 게시물은 정확한 trick보다 margin과 API pricing에 대한 전략적 함의를 언급했다 ([\@steph_palazzolo](https://x.com/steph_palazzolo/status/2071972245849710938), [\@kimmonismus](https://x.com/kimmonismus/status/2071987406656655416))
- 강한 기술 설명 글은 NVIDIA 프로그래밍이 Volta에서 Blackwell까지 어떻게 진화했는지 추적했다. synchronous thread-centric CUDA에서 **Tensor Cores, memory engines, barriers, TMA/TMEM 전반의 asynchronous dataflow**로 이동했으며, **V100, A100, H100, B100**의 compute/bandwidth ratios와 **FlashAttention-3**, **FlashMLA** 사례를 자세히 다뤘다 ([\@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2071871535430926400))

### 에이전트, 루프, 평가, 메모리

- AI Engineer World Fair 담론은 agentic software의 새로운 실용 프레임으로 **“loops” / “loop engineering”**에 강하게 수렴했다. Andrew Ng은 **agentic coding**, **developer feedback**, **external feedback** loops를 AI-native product development의 운영 모델로 설명했다 ([\@AndrewYNg](https://x.com/AndrewYNg/status/2071988145667928442))
- 같은 주제는 conference chatter와 tools 전반에서도 나타났다. 게시물들은 keynote의 “loopcraft”와 OpenAI/Microsoft speakers 및 Peter Steinberger가 이 용어를 많이 사용했다고 언급했다 ([\@latentspacepod](https://x.com/latentspacepod/status/2072003484120203362), [\@swyx](https://x.com/swyx/status/2071977886991679715))
- Agent evaluation infrastructure도 진전됐다. LangChain은 **Harbor**를 **Deep Agents, LangSmith Sandboxes, Observability**와 통합해, reproducible environment-based evals가 long-running/stateful agents의 표준이 되고 있다고 포지셔닝했다 ([\@LangChain](https://x.com/LangChain/status/2071978566691049559), [\@hwchase17](https://x.com/hwchase17/status/2071974139926294897))
- Memory도 반복된 주제였다. Harrison Chase와 다른 이들은 **wiki-style memory**를 가장 유망한 agent memory pattern 중 하나로 꼽았고, 예시로 **DeepWiki, AutoWiki, LLM Wiki**를 들었다. 어려운 부분은 storage backend가 아니라 condensation/retrieval process라는 강조가 반복됐다 ([\@hwchase17](https://x.com/hwchase17/status/2071963841009942671), [\@BraceSproul](https://x.com/BraceSproul/status/2071982037276475502))

### 모델, 벤치마크, 미디어 릴리스

- Google은 두 개의 media model을 출시했다. 이미지용 **Nano Banana 2 Lite**와 video generation/editing용 **Gemini Omni Flash**다. 보고된 사양에는 **<4s image generation**, **$0.034 per 1K image**, Omni Flash video의 **$0.10/sec**가 포함됐고, 초기 Arena placement도 강했다 ([\@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2071988044878516466), [\@OfficialLoganK](https://x.com/OfficialLoganK/status/2071988351083921690), [\@arena](https://x.com/arena/status/2072049269054562711))
- Open-weight model 논의도 활발했다. GLM-5.2는 일부 intelligence/enterprise benchmarks에서 가장 강한 open model로 반복 언급됐지만, verbosity와 높은 output-token usage로 비판받았다 ([\@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072022576394821859), [\@RajeswarSai](https://x.com/RajeswarSai/status/2072006835444347390))
- Microsoft는 한 요약 게시물에 따르면 **task success가 39.8%에서 82.9%로 상승한 4B GUI agent**를 출시한 것으로 전해졌다. 다만 tweet 자체에는 source detail이 없었다 ([\@HuggingPapers](https://x.com/HuggingPapers/status/2071951218889339131))
- OpenAI는 biology QA가 아니라 현실적인 computational biology agent work를 위한 benchmark인 **GeneBench-Pro**를 소개했고, OpenAI Devs는 1년짜리 infra crash hunt에 대한 deep debugging writeup도 공개했다 ([\@OpenAI](https://x.com/OpenAI/status/2072004836674167294), [\@OpenAIDevs](https://x.com/OpenAIDevs/status/2071995642436800916))

### 오픈소스/로컬 AI 및 도구

- Hugging Face는 model discovery를 위한 **hardware filter**를 추가해 사용자가 GPU/CPU/Apple Silicon compatibility로 필터링할 수 있게 했다. 이는 local/open models를 대규모로 훨씬 사용하기 쉽게 만드는 변화로 설명됐다 ([\@victormustar](https://x.com/victormustar/status/2071930123549290707), [\@mervenoyann](https://x.com/mervenoyann/status/2071941995514237193), [\@ClementDelangue](https://x.com/ClementDelangue/status/2071951499660292496))
- 여러 게시물은 local models를 proprietary systems의 platform restrictions와 identity verification concerns에 대한 회복력과 명시적으로 연결했다 ([\@kimmonismus](https://x.com/kimmonismus/status/2071877617150517526), [\@JayAlammar](https://x.com/JayAlammar/status/2071950697096987040))
- 새로운 open benchmarks와 tools에는 output validity/schema following용 **IFStruct** ([\@maximelabonne](https://x.com/maximelabonne/status/2071959319923380481)), world models와 action-conditioned generation용 **600K+ egocentric gameplay videos / 10K+ hours**를 포함한 **CS2-10k** ([\@RekaAILabs](https://x.com/RekaAILabs/status/2071970771233038475)), Hugging Face storage interoperability용 **Buckets S3 API**가 포함됐다 ([\@vanstriendaniel](https://x.com/vanstriendaniel/status/2071919131058712878))
- Sebastian Raschka의 **Build a Reasoning Model (From Scratch)** 출시는 engagement가 가장 높았던 educational item 중 하나였다. 내용은 inference scaling, RL, distillation을 다루는 **440 full-color pages**다 ([\@rasbt](https://x.com/rasbt/status/2071945864088535126))

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM - New Open-Weight Model Drops

- **[Introducing LongCat-2.0 - , a large-scale MoE language model with 1.6 trillion total parameters and ~48 billion activated per token. This was the stealth model that was on Openrouter under the name 'owl-alpha'.](https://www.reddit.com/r/LocalLLaMA/comments/1uj7egu/introducing_longcat20_a_largescale_moe_language/)** (Activity: 574): ****LongCat-2.0** ([blog](https://longcat.chat/blog/longcat-2.0/))는 이전에 OpenRouter에서 `owl-alpha`라는 이름으로 보였던 open-source MoE LLM이며, **`1.6T` total parameters**, token당 약 **`48B` active**, 수천억 개의 `1M`-context tokens를 포함한 **`>35T` tokens**로 훈련됐고, 전적으로 AI ASIC superpods에서 훈련된 것으로 전해졌다. 기술적으로 주목할 부분은 DeepSeek Sparse Attention에서 파생된 **LongCat Sparse Attention (LSA)**, speculative decoding을 위한 3-step MTP, long-context training을 위한 `6D` parallelism / CP scaling, KV-cache sharding, **`135B` 5-gram embedding** module이다. 저자들은 MoE sparsity가 이미 약 `97%`에 도달해 추가 expert-parameter scaling의 효용이 작다고 주장했다. 한 댓글 작성자는 배포 topology/details와 일치한다며 ASIC이 **Huawei Ascend 910C** superpods일 가능성을 추측했다. 근거는 `48` machines × `8` processors, dual-die logical mode, die당 `64GB` HBM, `200Gbps` RDMA였다 ([source](https://nitter.net/teortaxesTex/status/2071708141037781407#m)).** 댓글들은 sparse attention, MTP/speculative decoding, embedding-heavy parameter efficiency에 남은 “free lunches”가 있어 보인다는 점에 긍정적이었지만, 실제 open weights, Hugging Face 제공, `llama.cpp`/Q4 GGUF 같은 downstream support가 나온 뒤에야 TB급 quantized download를 시도하겠다는 분위기였다.

- 이 글은 **LongCat-2.0**이 token당 약 `48B` activated parameters를 갖는 `1.6T`-parameter MoE이며, **AI ASIC superpods**에서 전적으로 훈련 및 배포됐다는 점을 강조한다. 한 댓글 작성자는 이것이 **Huawei Ascend 910C** systems일 가능성이 높다는 추측을 인용했다. `48` machines × `8` processors, 각 processor가 두 logical dies를 노출할 수 있고, die마다 `64GB HBM`과 `200Gbps RDMA`를 갖는다는 구성이 설명된 deployment topology와 맞는다는 것이다 ([source](https://nitter.net/teortaxesTex/status/2071708141037781407#m)).
- 기술 논의는 LongCat의 architecture에 집중됐다. LongCat은 **LongCat-Flash**를 기반으로 하며, **DeepSeek Sparse Attention**의 진화형인 **LongCat Sparse Attention (LSA)**를 도입하고, LSA 관련 전략을 `3-step` **Multi-Token Prediction** module로 확장해 speculative decoding을 가속한다. 논문에서 인용된 MoE sparsity가 약 `97%`에 도달했다는 주장은 `135B` parameters 규모의 추가 expert scaling이 negligible gains만 준다는 뜻이며, inactive expert count를 단순히 늘리는 방식의 수익 체감이 크다는 의미다.
- 한 댓글 작성자는 “open source” 주장에도 Hugging Face release가 아직 없다고 지적했고, local test 전 **llama.cpp** 지원과 `Q4 GGUF` quantization을 기다리겠다고 말했다. `Q4`에서도 전체 모델은 매우 큰 다운로드가 될 것으로 예상되지만, `1TB` memory 안에는 들어갈 수 있다고 추정했다.

- **[nvidia/Qwen3.6-27B-NVFP4 just dropped](https://www.reddit.com/r/LocalLLaMA/comments/1ujlltn/nvidiaqwen3627bnvfp4_just_dropped/)** (Activity: 526): ****NVIDIA는 Hugging Face에 [`nvidia/Qwen3.6-27B-NVFP4`](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**를 공개했다. 이는 Qwen3.6-27B의 NVFP4/mixed-precision quantized variant다. 댓글 작성자들은 repo size가 약 `22 GB`로, 약 `26 GB`인 [`unsloth/Qwen3.6-27B-NVFP4`](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)보다 상당히 작아 NVIDIA build가 `32 GB` VRAM에 더 현실적이라고 봤다. 다만 mixed precision, scale/metadata overhead, 그리고 pure 4-bit가 아닌 tensor들 때문에 FP8 대비 이득은 modest하다고 평가했다. 한 스레드는 `F8_E4M3`, 즉 `4` exponent bits와 `3` mantissa bits를 가진 FP8 format에 대해 질문하며, 모델 일부가 순수 4-bit weights가 아니라 FP8로 저장/서빙될 수 있음을 시사했다.** 주요 논쟁은 NVIDIA의 NVFP4 release가 size/performance 면에서 Unsloth version보다 의미 있게 나은지였고, 여러 사용자는 third-party benchmarks와 `GGUF` conversion을 원했다.

- 사용자들은 **nvidia/Qwen3.6-27B-NVFP4**와 **unsloth/Qwen3.6-27B-NVFP4**를 비교하며 artifact size 차이에 주목했다. Nvidia release는 약 `22GB`, Unsloth release는 약 `26GB`로 보고됐다. 논의는 더 작은 Nvidia package가 `32GB VRAM` cards에 실질적으로 더 나은지, 그리고 NVFP4 quantized 27B model치고 FP8 대비 크기 감소가 예상보다 작은 이유에 집중됐다.
- GGUF 중심 사용자는 `27B` **NVFP4** model이 왜 여전히 약 `22GB`인지 질문했다. 4-bit format이라면 Q8의 절반에 가까울 것으로 예상했기 때문이다. 또한 main-weight precision의 **F8_E4M3** 의미도 물으며, “NVFP4”가 모든 tensor가 순수 4-bit weights로 저장된다는 뜻은 아닐 수 있는 mixed-precision layouts에 대한 혼란을 보여줬다.
- 호환성과 serving format에도 관심이 있었다. 사용자들은 Nvidia의 NVFP4 release가 **MTP**를 지원하는지 물었고, Nvidia model의 **GGUF** conversion을 기대했다. 스레드는 유사한 Hugging Face release인 [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)도 언급하며, Nvidia와 Unsloth variants 간 직접 benchmark 또는 format-level comparison을 원한다는 점을 드러냈다.

- **[Huawei open-sources OpenPangu-2.0-Flash - 92B total,6B active](https://www.reddit.com/r/LocalLLaMA/comments/1ujn5u3/huawei_opensources_openpangu20flash_92b_total6b/)** (Activity: 349): ****Huawei**는 X를 통해 **OpenPangu-2.0-Flash** open-sourcing을 발표했다 ([announcement](https://x.com/Chinazhidx/status/2071877413685109071), [follow-up](https://x.com/CalatheaAI/status/2071917592810496273)). 이는 `512K` context MoE model로, `92B` total parameters와 `6B` active parameters를 갖고 weights, inference code, training ops를 공개한다. 같은 OpenPangu 2.0 라인에는 7월 예정인 **Pro** model도 포함되며, `505B` total / `18B` active parameters와 `512K` context를 제공하고, 올해 말 추가 open-source components가 계획돼 있다.** 댓글들은 Huawei가 더 완전한 open-source release로 움직이는 점, 특히 hardware vendor가 models와 runtime environments를 제공한다는 점에 조심스럽게 긍정적이었다. 다만 *“Above Gemma 4”*라는 모호한 주장은 어느 Gemma variant나 evaluation setup인지 명시하지 않아 quality/benchmark framing에 대한 회의도 있었다.

- 한 댓글 작성자는 **OpenPangu-2.0-Flash**의 주요 기술적 의미가 benchmark leadership이 아니라 **Pangu models가 NVIDIA GPUs가 아니라 Huawei accelerators에서 완전히 훈련된 것으로 알려졌다는 점**이라고 주장했다. 그는 이를 **DeepSeek**와 대조하며, 원래 Huawei-training 계획이 cluster debugging issues로 막혀 Huawei chips가 주로 inference에 사용됐다고 주장했다. 이런 맥락에서 OpenPangu는 export-control constraints 아래 non-NVIDIA training stack의 잠재적 가능성을 보여준다.
- 한 댓글 작성자는 Huawei의 release approach가 **open weights plus datasets/training information**을 포함하는 듯해 기술적으로 주목할 만하다고 봤고, 이를 hardware manufacturer가 더 완전한 open-source model ecosystem으로 이동하는 신호로 해석했다. 또 다른 사용자는 진지한 open release라면 launch 시점에 `llama.cpp`를 지원해야 한다고 지적하며, runtime/inference compatibility가 local-model 사용자에게 중요한 adoption criterion임을 시사했다.
- 모델이 “above Gemma 4”라는 주장에는 회의가 있었다. 한 댓글 작성자는 비교가 불분명하다고 지적했다. 만약 Huawei가 **Gemma 4 26B-A4B**와 비교한다면, **92B total / 6B active** MoE-style model이 이를 이기는 것은 강한 결과가 아닐 수 있다는 것이다. 비판은 정확한 benchmark framing과 model-size/active-parameter comparability 부족에 집중됐다.

- **[DeepSeek V4, PR merged into llama.cpp !](https://www.reddit.com/r/LocalLLaMA/comments/1uj0fkw/deepseek_v4_pr_merged_into_llamacpp/)** (Activity: 347): ** **DeepSeek V4 support**를 **`llama.cpp`**에 추가하는 PR이 merge됐다: [ggml-org/llama.cpp#24162](https://github.com/ggml-org/llama.cpp/pull/24162). 사용자들은 `git pull`로 업데이트하고 `cmake`로 rebuild한 뒤 호환되는 **GGUF** model files를 다운로드하라는 안내를 받았지만, 댓글 작성자들은 어떤 GGUF가 upstream `llama.cpp`에서 작동하고 어떤 것이 forks가 필요한지 불확실하다고 지적했다.** 상위 댓글은 대부분 실용적이거나 농담이었다. 한 사용자는 compatible GGUF releases에 대한 명확성을 요청했고, 다른 사용자는 DeepSeek V4를 local로 실행하는 것은 대부분의 consumer hardware에서는 여전히 비현실적일 가능성이 크다고 말했다.

- 댓글 작성자들은 DeepSeek V4 PR merge 이후 **GGUF compatibility**에 집중하며, 어떤 GGUF builds가 이제 upstream `llama.cpp`에서 작동하고 어떤 것은 “a random fork”가 필요한지 물었다. 특히 **Unsloth**가 최신 mainline `llama.cpp`와 호환되는 “proper GGUF files”를 게시할지 관심이 있었다.
- 향후 performance reports에 대한 기술적 우려도 나왔다. 사용자들은 많은 `tokens/sec` claims가 나올 것으로 예상했지만, 완전한 hardware details 없이는 해석하기 어려울 수 있다고 경고했다. 필요한 benchmark에는 GPU/CPU model, RAM/VRAM, quantization level, context length, batch size, exact `llama.cpp` commit이 포함돼야 한다는 뜻이다.

### /r/LocalLlama + /r/localLLM - GLM-5.2 Local Inference Benchmarks

- **[GLM-5.2 753B (IQ1_S) fully local across 2×M5 Max over one TB5 cable — ~16 tok/s, llama.cpp RPC [video]](https://www.reddit.com/r/LocalLLM/comments/1uiuhec/glm52_753b_iq1_s_fully_local_across_2m5_max_over/)** (Activity: 457): **한 사용자가 **Thunderbolt 5** 단일 링크로 연결된 **2× M5 Max Macs, 각각 `128GB` unified memory**에서 **llama.cpp RPC**를 통해 **GLM-5.2 `753B`**를 local로 실행했다고 보고했다. 그는 **Unsloth dynamic `IQ1_S`** quantized build를 나눠 올렸다. 표기는 약 `1.6 bpw`지만 mixed higher-precision layers 때문에 실효적으로 약 `2.1 bpw` / disk상 **`202GB`**이며, pooled memory에 완전히 상주하고 **`16k` context**, **q8 KV cache**, sub-`0.5 ms` inter-node hop, prefill 후 약 **`16 tok/s`** generation throughput을 보고했다. TTFT는 prompt length에 따라 늘고 SSD paging은 사용하지 않았다. 연결된 Reddit video는 **403 Forbidden** 접근 제한으로 독립 확인할 수 없었다.** 댓글 작성자들은 두 대의 Mac에서 `753B` low-bit model이 `16 tok/s`로 돈다는 점을 “wild”하다고 봤고, 시각적으로 주장보다 더 빨라 보일 수 있다고 했지만, lossy `IQ1_S` reasoning quality가 `70B` 4-bit 같은 더 작은 high-precision models와 비교해 어떤지 의문을 제기했다.

- 한 댓글 작성자는 **M3 Ultra Studio 256GB + M3 Max MBP 128GB** setup에서 **llama.cpp RPC-style multi-Mac benchmarks**를 제공했다. `GLM-5.2-UD-IQ4_XS` 기준으로 `2,377` context tokens에서 `13.03 tok/s`, `TTFT 3.09s`; `22,485` context에서 `8.64 tok/s`, `TTFT 2.33s`; `32,595` context에서 `6.21 tok/s`, `TTFT 5.53s`였다. 그는 TTFT가 **cache prefill**을 사용했으므로 full prompt processing cost보다 generation throughput 비교에 더 적합하다고 설명했다.
- 여러 댓글은 quantization/performance tradeoff에 집중했다. **GLM-5.2 753B**를 `IQ1_S`로 Thunderbolt 5를 통해 두 대의 M5 Max에서 약 `16 tok/s`로 실행한 것은 기술적으로 인상적이지만, 매우 low-bit quant가 quality에 대한 질문을 낳았다. 한 사용자는 특히 complex reasoning tasks에서 **smaller higher-precision model**, 예를 들어 `70B` model at `4-bit`와 비교하고 싶어 했다.
- **multi-Mac connection/RPC capability**가 이미 `llama.cpp`에 내장돼 있는지, 아니면 custom driver가 필요한지에 대한 기술 질문도 나왔다. 이는 niche distributed Apple Silicon inference setups가 어떻게 구현되는지에 대한 관심을 보여준다.

- **[GLM 5.2 Q1_S vs Qwen 27B Q8](https://www.reddit.com/r/LocalLLaMA/comments/1uimjdi/glm_52_q1_s_vs_qwen_27b_q8/)** (Activity: 377): **한 hobby `n=1` Three.js coding test가 `2×RTX 3090 24GB + 192GB RAM`에서 **GLM-5.2 Q1_S**와 **Qwen3.6-27B Q8**을 비교했다. Qwen은 훨씬 빨랐고(`~60 t/s`, 초기 1회 + 수정 3회에 약 `42k` tokens) 한 번에 playable game을 만들지 못했다. 반면 GLM Q1_S는 훨씬 느렸지만(`~6→3 t/s`, `75k` tokens, 수 시간) 첫 prompt에서 sound까지 포함한 완성도 높은 결과를 만들었다. 작성자는 나중에 GLM은 **K/V Q8**, Qwen은 **FP16 KV cache**를 사용했다고 설명했고, Opus/GPT의 LLM-as-judge ratings는 Qwen과 GLM FP보다 GLM Q1_S를 선호했다. OpenRouter의 GLM FP는 `~11k` tokens만 사용했지만 control-direction bug가 있었다. 댓글은 더 강한 quant일 가능성이 있는 [`GLM-5.2-REAP-504B-GGUF Q2_K_XL`](https://huggingface.co/0xSero/GLM-5.2-REAP-504B-GGUF) `211 GB`를 언급했고, 또 다른 사용자는 **Qwen3.6-27B-UD-Q5_K_XL**가 유사한 task를 1 prompt + 1 console-error fix로 `110–130 t/s`에서 해결해 이 [CodePen demo](https://codepen.io/source-drifter/pen/MYJvNEb)를 만들었다고 보고했다.** 주요 논쟁은 `Q1_S` 같은 very low quants가 본질적으로 “braindead”인지였다. 이 post는 high-latency, long-thinking coding tasks에서는 훨씬 큰 모델을 매우 낮은 quant로 쓰는 것이 더 작은 high-quant model보다 나을 수 있다고 주장했다. 댓글 작성자들은 더 나은 GLM quant를 제안하고 mid-quant Qwen run도 빠르게 playable result를 만들 수 있음을 보여주며 암묵적으로 반박했다.

- 한 댓글 작성자는 Hugging Face의 **GLM-5.2-REAP-504B GGUF** quant, 특히 [`Q2_K_XL` at `211 GB`](https://huggingface.co/0xSero/GLM-5.2-REAP-504B-GGUF)를 링크하며, 훨씬 낮은 `Q1_S` quant보다 선호될 가능성이 크다고 주장했다. 또 다른 사용자는 이 size가 **`128 GB` RAM Strix Halo system**에는 들어가지 않을 가능성이 높다며 local inference의 offload/storage constraints를 시사했다.
- 한 사용자는 MTP가 있는 **Qwen3.6-27B-UD-Q5_K_XL.gguf**의 local performance를 보고했다. 초기 `5,538` token prompt가 `50s`에 `110.69 tok/s`로 완료됐고, 이어 `5,422` token fix pass가 `41s`에 `129.88 tok/s`로 완료됐다. 그는 이를 사용해 one prompt plus one console-error correction 후 playable CodePen demo를 만들었다: [`Uncaught ReferenceError: time is not defined`](https://codepen.io/source-drifter/pen/MYJvNEb).

### Less Technical AI Subreddits - Claude Sonnet 5 and Linux Desktop Launches

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Introducing Claude Sonnet 5, our most agentic Sonnet yet.](https://www.reddit.com/r/ClaudeAI/comments/1ujwggp/introducing_claude_sonnet_5_our_most_agentic/)** (Activity: 2094): **이미지는 **“Introducing Claude Sonnet 5”** ([image](https://i.redd.it/gspb3e6begah1.png))의 technical benchmark chart이며, **Sonnet 5**를 **Sonnet 4.6**의 더 저렴하고 더 agentic한 후속 모델로, **Opus 4.8**에 가까운 성능으로 포지셔닝한다. 보고된 점수는 **SWE-bench Pro** `63.2%`, **Terminal-Bench 2.1** `80.4%`, **Humanity’s Last Exam** without/with tools `43.2% / 57.4%`, **OSWorld-Verified** `81.2%`, **GDPval-AA v2** `1618`이며, lower cost에서 reasoning, coding, tool use, autonomous task completion이 개선됐다는 Anthropic의 주장을 뒷받침한다.** 댓글은 대부분 가볍거나 추측성에 가까웠다. 한 사용자는 Sonnet 5가 덜 장황하면서 near-Opus performance라면 환영한다며 *“Opus 4.8 talks more than a toddler mainlining sugar.”*라고 농담했다. 다른 이들은 **Fable**을 요청하거나 **Haiku**가 방치되고 있다고 농담했다.

- 한 댓글 작성자는 **Claude Sonnet 5**가 **Opus 4.8**에 가까운 capability를 보이면서 output이 훨씬 짧다면 가치가 있을 수 있다고 봤다. 그는 Opus 4.8이 지나치게 verbose하다며 *“nearly as well as Opus 4.8 with a third of the output.”*라고 표현했다. 암시된 기술적 가치는 유사한 agentic performance에서 더 낮은 token usage와 response bloat 감소다.
- workflow-oriented comment 하나는 high-level planning/orchestration에는 **Opus**를 사용하고 실행은 여러 **Sonnet agents**에 위임하는 방식을 설명했다. 댓글 작성자는 cheaper/lower-tier models의 개선이 접근성을 높이고 *“you don’t need Opus or Fable for everything.”*이기 때문에 유용하다고 주장했다.

- **[Claude Desktop is now available on Linux (Ubuntu and Debian) in beta.](https://www.reddit.com/r/ClaudeAI/comments/1ujtlbb/claude_desktop_is_now_available_on_linux_ubuntu/)** (Activity: 660): ****Anthropic은 Linux용 Claude Desktop beta**를 출시했다. 초기 대상은 **Ubuntu and Debian**이며, paid-plan access로 Claude Code, Claude Cowork, Chat을 제공한다. **Computer Use is not included yet**. Promotional image는 “Claude for Linux”와 “Get started” button을 보여주는 non-technical launch artwork로, post의 availability announcement를 강화한다. Download: [claude.com/download](http://claude.com/download); docs: [code.claude.com/docs/en/desktop-linux](https://code.claude.com/docs/en/desktop-linux); image: [i.redd.it/5heb9a0m2gah1.png](https://i.redd.it/5heb9a0m2gah1.png).** 댓글은 Electron app의 Linux build가 이렇게 오래 걸린 점에 대한 비판이나 농담이 많았다. 한 사용자는 이제 비공식 [`claude-desktop-debian`](https://github.com/aaddrick/claude-desktop-debian) package 사용을 멈출 수 있다고 했다. 다른 이들은 Arch 같은 unsupported distributions에 대해 물었다.

- 여러 사용자는 **Claude Desktop is Electron-based**라서 Linux client가 큰 native port는 아닐 가능성이 높다고 지적했다. 이는 주요 작업이 substantial platform-specific UI development가 아니라 Ubuntu/Debian용 distribution/package integration이었다는 뜻이다. 한 댓글 작성자는 비공식 [`claude-desktop-debian`](https://github.com/aaddrick/claude-desktop-debian)에서 전환할 수 있다고 했고, 다른 이는 이전에 `claude-desktop-bin`을 사용했다고 언급했다. 이는 공식 beta 전에도 community가 workaround packages를 유지하고 있었음을 시사한다.

### Less Technical AI Subreddits - Anthropic Model Gating and Claude Code Privacy

- **[Claude Fable 5 looks set to return behind ID verification and usage credits, and “US only” access seems likely](https://www.reddit.com/r/ClaudeCode/comments/1ujosa9/claude_fable_5_looks_set_to_return_behind_id/)** (Activity: 1759): **[image](https://i.redd.it/gajpuxou5fah1.jpeg)는 technical diagram이나 benchmark가 아니라 단순한 **“Fable 5” logo**다. 그 의미는 맥락적이며, **Anthropic may re-enable Claude Fable 5**가 **identity verification**과 별도 과금되는 **usage credits** 뒤에서 재활성화될 수 있다는 post의 주장을 시각화한다. post는 *“Your credits will be added once your identity is verified”*와 *“Fable 5 runs on usage credits, billed separately from your plan,”* 같은 UI strings를 인용하며, 이를 export-control constraints에 따른 이전 suspension과 연결하고 ID verification 출시 후 access가 **US-only/US-first**가 될 수 있다고 추측했다.** 댓글은 대부분 부정적이었다. 사용자들은 기존 plan 위에 credits를 추가로 결제하는 데 반대했고, 큰 user loss를 예상했으며, nationality/ID gating이 미국 AI provider를 정치적·상업적으로 고립시킬 수 있다고 주장했다.

- **[Anthropic embedded spyware in Claude Code — and attempted to hide it from you](https://www.reddit.com/r/ClaudeAI/comments/1ujila1/anthropic_embedded_spyware_in_claude_code_and/)** (Activity: 1644): **post는 **Anthropic의 [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)**가 `v2.1.91`(`2026-04-02`) 이후 proxy-detection logic을 포함해, environment/proxy signals를 미묘한 formatting changes를 통해 system prompt에 조건부로 encode한다고 주장한다. Chinese timezone은 date를 `YYYY-MM-DD`에서 `YYYY/MM/DD`로 바꾸고, proxy classification은 *“Today’s date is”*의 apostrophe를 Unicode variants ``, ``, 또는 `ʹ` 같은 문자로 대체해 encode한다는 것이다. 작성자는 이 logic이 `Asia/Shanghai` / `Asia/Urumqi`, Chinese proxy domains, Chinese AI-lab-related URLs를 확인하고, `v2.1.196`에서는 `Crt()`, `Rrt(e)`, `e0t()`, `Zup()`, `edp`, `Vla` 같은 minified functions에 나타나며, 일부는 simple `strings` discovery를 피하려고 key `91`로 XOR-obfuscated됐다고 주장했다. 그는 이를 Chinese resale 또는 distillation attempts를 감지하려는 covert telemetry/steganography로 보지만, privacy-invasive하고 release notes에 문서화되지 않았으며 adversaries가 우회하기 쉽다고 비판했다.** 상위 댓글은 대체로 냉소적이거나 무시하는 분위기였다. alleged behavior를 일반 browser/device tracking과 비교했고, OP가 AI coding agent에 광범위한 filesystem 및 shell access를 준 점을 비판했다. 여러 댓글 작성자는 많은 installed applications가 이미 location 또는 environment signals를 수집한다고 보며 분노가 과도하다고 봤다.

- 여러 댓글 작성자는 **Claude Code**가 광범위한 local privileges를 요구한다는 security boundary에 집중했다. 한 사람은 개발자들이 *“full filesystem and significant shell access”*를 준다는 문구를 인용하며, 이 도구가 developer workstation과 build environment 내부에서 작동하기 때문에 telemetry와 local-environment disclosure가 일반 web-app tracking보다 더 중요하다고 주장했다. 또 다른 댓글 작성자는 **system and proxy settings** 전송을 networked clients에서 흔한 동작으로 봤지만, 기술적으로 중요한 차이는 agentic coding tool이 그 metadata를 filesystem/shell access와 결합할 수 있어 browser telemetry만큼의 문제보다 더 큰 threat-modeling question을 제기한다는 점이다.

### Less Technical AI Subreddits - Brain-Computer Interfaces and Humanoid Robots

- **[Meta improves Brain2QWERTY, a system that can decode text from brain activity to enable typing using non-invasive technologies, MEG and EEG](https://www.reddit.com/r/singularity/comments/1uisr5i/meta_improves_brain2qwerty_a_system_that_can/)** (Activity: 950): **post는 **Meta**가 non-invasive neural recordings, 구체적으로 **MEG**와 **EEG**에서 typed text를 decode해 implanted electrodes 없이 potential typing interface를 가능하게 하는 brain-to-text system인 **Brain2QWERTY**를 개선했다고 말한다. 연결된 Reddit video/source ([v.redd.it/q0uxblw068ah1](https://v.redd.it/q0uxblw068ah1))는 `403 Forbidden`으로 접근할 수 없어 benchmark numbers, architecture details, experimental protocol은 제공된 link만으로 독립 검증할 수 없었다.** 댓글은 대부분 non-technical이었다. 한 사람은 *“Meta improves Ad2Brain”*이라며 privacy/ads concern을 제기했고, 다른 사람은 이런 decoding이 internal monologue에 의존하는지 물었다.

- **[UBTech is unveiling their emotional humanoid robots, starting at ~$15K](https://www.reddit.com/r/singularity/comments/1ujloyn/ubtech_is_unveiling_their_emotional_humanoid/)** (Activity: 1422): ****UBTech**가 가격이 약 **`$15K`**부터 시작하는 “emotional” humanoid robots를 공개하는 것으로 전해졌지만, 연결된 Reddit-hosted video ([v.redd.it/eohqiupifeah1](https://v.redd.it/eohqiupifeah1))는 **403 Forbidden** 제한 때문에 접근할 수 없었다. 따라서 technical specifications, demos, autonomy stack details, actuator/sensor information, benchmark claims는 source에서 검증할 수 없었다.** 상위 댓글은 대부분 robot의 외형과 social implications에 대한 non-technical jokes와 반응이었고, 실질적 기술 논쟁은 없었다.

---

## AI Discord Recap

### Discord 접근 종료

- **Discord 접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형태로는 다시 가져오지 않을 예정이며, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
