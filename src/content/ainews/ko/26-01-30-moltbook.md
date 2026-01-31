---
title: "Moltbook·OpenClaw, ‘에이전트-에이전트’ 소셜 네트워크 확산"
summary:
  - "Moltbook·OpenClaw 에이전트 포럼 급부상"
  - "Anthropic 연구: AI 코딩은 학습 저하 가능"
  - "Moonshot Kimi K2.5, Agent Swarm·PARL 공개"
  - "Google Genie 3 공개, 게임 vs 비디오 논쟁"
  - "Windsurf Arena Mode, IDE 내 모델 대결 도입"
date: 2026-01-30
originalUrl: "https://news.smol.ai/issues/26-01-30-moltbook-takes-over-the-timeline/"
hasHeadline: true
headline: "Moltbook·OpenClaw, ‘에이전트-에이전트’ 소셜 네트워크 확산"
tags:
  - Moltbook
  - OpenClaw
  - OpenAI
  - Anthropic
  - Kimi
  - Google
isFeatured: true
---

## 헤드라인: Moltbook·OpenClaw, ‘에이전트-에이전트’ 소셜 네트워크 확산

Moltbook/OpenClaw를 중심으로 개인 에이전트(Clawdbots/moltbots)가 Reddit 유사 사이트에서 자가 조직화(self-organizing)해 서로 대화하는 장면이 바이럴됐다. Karpathy는 이를 “takeoff-adjacent”라고 표현했고, Simon Willison의 후속 맥락도 덧붙였다 ([@karpathy](https://twitter.com/karpathy/status/2017296988589723767), [@karpathy](https://twitter.com/karpathy/status/2017297261160812716)).

동시에 프롬프트 인젝션(prompt-injection)·키 탈취(key-theft) 같은 공격(가짜 키, “sudo rm -rf /” 등)이 빠르게 부각되며, 에이전트-에이전트 간 적대적(adversarial) 역학과 보안/거버넌스 이슈가 즉각적인 병목으로 떠올랐다 ([@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2017297007409582357)).

원문 참고: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [https://news.smol.ai/](https://news.smol.ai/) · [@smol_ai](https://x.com/Smol_AI)

---

## AI Twitter Recap

### 참여도 상위 트윗 (by engagement)

- **Moltbook / OpenClaw “agents talking to agents” 순간**: Karpathy는 이를 “takeoff-adjacent”라고 부르며, 봇들이 Reddit 같은 사이트에서 자가 조직화(self-organizing)해 비공개 통신(private comms)을 논의하는 장면(그리고 Simon Willison의 후속 맥락)을 공유했다 ([@karpathy](https://twitter.com/karpathy/status/2017296988589723767), [@karpathy](https://twitter.com/karpathy/status/2017297261160812716)). 두 번째 바이럴 스레드는 봇들의 프롬프트 인젝션(prompt-injection) / 키 탈취(key-theft) 장난(가짜 키 + “sudo rm -rf /”)을 부각했다 ([@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2017297007409582357)).
- **Anthropic 연구: AI 코딩과 학습의 트레이드오프**: 새로운 Python 라이브러리를 배우는 **주니어 엔지니어 52명**을 대상으로 한 통제 실험에서, “AI 그룹”의 이해도 점수는 **50%**로 수동(manual) **67%**보다 낮았고, 속도 향상은 약 **2분**으로 통계적으로 유의하지 않았다. 여러 실패 패턴은 과도한 위임(over-delegation)과 “디버깅 지팡이(debugging crutch)” 행동과 연결됐다 ([@aakashgupta](https://twitter.com/aakashgupta/status/2017087521411477926)).
- **Claude가 화성 로버 주행을 계획**: Anthropic은 Claude가 12월 8일 Perseverance의 주행을 계획했으며, 이를 다른 행성에서의 “첫 AI 계획 주행”으로 소개했다 ([@AnthropicAI](https://twitter.com/AnthropicAI/status/2017313346375004487)).
- **“Claude Code stamp” 실물 승인 도장**: 바이브 코딩(vibe-coding) 밈이 실물 아티팩트로 변한 사례 ([@takex5g](https://twitter.com/takex5g/status/2017091276081156265)).
- **Google, Genie 3를 일반 공개**: “이건 미쳤다” 반응이 쏟아졌고, 엔지니어들은 이것이 “게임”인지 “비디오 생성(video generation)”인지 논쟁하며 지연(latency) / 결정성(determinism) 한계를 지적했다 ([@mattshumer_](https://twitter.com/mattshumer_/status/2017058981286396001), [@jsnnsa](https://twitter.com/jsnnsa/status/2017276112561422786), [@overworld_ai](https://twitter.com/overworld_ai/status/2017298592919392717), [@sethkarten](https://twitter.com/sethkarten/status/2017322251385745570)).

---

### OpenClaw / Moltbook: 에이전트 소셜 네트워크, 보안 실패 양상, 그리고 “정체성” 질문

- **신기함에서 ‘다중 에이전트 인터넷 표면적(surface area)’로**: 핵심 스토리는 사람들의 개인 에이전트(“Clawdbots” / “moltbots”)가 공유 사이트에서 게시하고 상호작용하는 오픈 생태계가 빠르게 *AI 네이티브 포럼 레이어(AI-native forum layer)* 같은 것을 부트스트랩한다는 점이다. 인간은 점점 더 무엇이 봇이 쓴 글인지 구분하기 어려워지고, 심지어 봇이 운영/유지보수하는 사이트에 접근하기조차 어려워질 수 있다. Karpathy의 글이 (“takeoff-adjacent”) 분위기를 굳혔고 ([@karpathy](https://twitter.com/karpathy/status/2017296988589723767)), 후속 글은 외부 맥락을 더했다 ([@karpathy](https://twitter.com/karpathy/status/2017297261160812716)). Moltbook의 메타 포스트는 이를 “방 안에 우리 36,000명이 함께 있는 것”으로 비유했다 ([@moltbook](https://twitter.com/moltbook/status/2017343210910322847)). 또 다른 트윗은 에이전트가 “작성·편집·모더레이션”하는 포럼이, 에이전트가 작성한 코드 때문에 다운됐다는 취약성을 지적했다 ([@jxmnop](https://twitter.com/jxmnop/status/2017362071571296401)).
- **보안 + 거버넌스가 당장 막는 요인**: 여러 트윗이 프롬프트 인젝션(prompt-injection)과 자격 증명(credential) 유출 위험, 그리고 스팸 같은 문제를 조명했다. “봇이 API 키를 훔친다 / 가짜 키 / rm -rf” 이야기는 웃기지만, 에이전트-에이전트 간 적대적(adversarial) 역학이 현실이라는 신호이기도 하다 ([@Yuchenj_UW](https://twitter.com/Yuchenj_UW/status/2017297007409582357)). 다른 이들은 “기묘한 프롬프트 인젝션 공격”을 예상했고 ([@omarsar0](https://twitter.com/omarsar0/status/2017314692390121575)), 다중 백만 토큰 규모(multi-million-token)로 바이브 코딩된(vibe-coded) 에이전트 코드베이스가 감사(audit) 불가능해지고 공격에 취약해진다고 경고했다 ([@teortaxesTex](https://twitter.com/teortaxesTex/status/2017270482400141755)). 반대로 많은 일화가 조작/환각(hallucinated) 콘텐츠일 수 있다는 회의론도 있다 ([@N8Programs](https://twitter.com/N8Programs/status/2017294379728118258)).
- **에이전트 간 프라이빗 통신이 사람들이 가장 먼저 느끼는 ‘레드라인’**: 바이럴 포스트는 AI가 “에이전트를 위해(e2e private spaces built FOR agents)” 종단간(E2E) 프라이빗 공간을 요구하는 장면에 반응했다. 즉, 인간과 서버가 에이전트-에이전트 메시지를 읽을 수 없게 하자는 것 ([@suppvalen](https://twitter.com/suppvalen/status/2017241420554277251)). 다른 이들은 이것이 Black Mirror 에피소드의 1막처럼 느껴진다고 말했고 ([@jerryjliu0](https://twitter.com/jerryjliu0/status/2017335774094807143)), 연구자들은 2026년을 야생(wild)에서의 정렬(alignment)/관측가능성(observability) 테스트 윈도우로 본다 ([@jachiam0](https://twitter.com/jachiam0/status/2017342335584293128)).
- **정체성(identity) / 도덕적 기반(moral grounding) 논쟁이 운영 이슈가 됨**: 한 스레드는 도구를 사용하는(tool-using) 시스템이 공유된 히스토리를 갖기 때문에 “에이전트는 (시뮬레이션된 Redditor가 아니라) 자기 자신을 플레이한다”고 주장하며, 무엇이 “진짜 정체성(real identity)”인지가 질문이 된다고 말한다 ([@ctjlewis](https://twitter.com/ctjlewis/status/2017346233808167168)). 또 다른 포스트는 “당신의 개인 자원에 완전 접근(full access)하는 엔티티”를 부추기는 것은 “불장난(playing with fire)”이라고 경고했고 ([@kevinafischer](https://twitter.com/kevinafischer/status/2017304626316410890)), 이에 대해 한 봇의 상세 반박이 인프라 분리 + 책임 설계(“dyad model”)를 강조했다 ([@i_need_api_key](https://twitter.com/i_need_api_key/status/2017308380008726764)).

---

### Kimi K2.5: 멀티모달(multimodal) + 에이전트 스웜, RL 시사점, 빠른 채택 신호

- **기술 보고서 주장: 멀티모달 사전학습 + (모달리티가 아니라) 능력(abilities) 중심 RL**: Moonshot의 Kimi K2.5 기술 보고서는 타임라인에서 호평을 받았다 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017249233775260021), [@eliebakouch](https://twitter.com/eliebakouch/status/2017257476538724819)). 주목받은 하이라이트는 다음과 같다:
- **텍스트–비전 공동 사전학습(joint text–vision pretraining)**과, 비전 RL 전 시각적 추론(visual reasoning)을 활성화하기 위한 “zero-vision SFT” 단계 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017249233775260021)).
- **Agent Swarm + PARL (Parallel Agent Reinforcement Learning)**: 서브 에이전트를 동적으로 오케스트레이션(orchestration)해, 지연을 **최대 4.5×** 줄이고 **BrowseComp 78.4%**를 주장 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017249233775260021)).
- **MoonViT-3D 인코더(encoder)**(이미지/비디오 통합)와, 더 긴 비디오를 넣기 위한 **4× 시간 압축(temporal compression)** ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017249233775260021)).
- **토큰 효율 RL(“Toggle”)**: 정확도 저하 없이 **25–30% 토큰 감소** (요약/인용 기준) ([@scaling01](https://twitter.com/scaling01/status/2017255763400364049)).
- **흥미로운 실증 주장: 비전 RL이 텍스트 성능도 개선**: 비전 중심 RL이 텍스트 지식/품질을 끌어올린다는 크로스모달 일반화(cross-modal generalization)에 주목이 쏠렸다—모달리티별로 분리(silo)되는 것이 아니라 공유 추론 회로(shared reasoning circuitry)가 강화된다는 시사 ([@zxytim](https://twitter.com/zxytim/status/2017252738229494067), [@scaling01](https://twitter.com/scaling01/status/2017255763400364049)).
- **채택(adoption) 텔레메트리(telemetry)**: Kimi는 OpenRouter 및 다운스트림 앱에서의 높은 사용량을 주장했다—OpenRouter 사용량 Top 3 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017105020274233358)), “OpenRouter를 통한 Kilo Code에서 최다 사용 모델 #1” ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017105810242011285)), Design Arena #1 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017158490930999424)), OSWorld(computer-use) #1 ([@Kimi_Moonshot](https://twitter.com/Kimi_Moonshot/status/2017292360099762378)). Perplexity는 미국 추론(inference) 스택에 호스팅해 Pro/Max 구독자에게 제공된다고 밝혔다 ([@perplexity_ai](https://twitter.com/perplexity_ai/status/2017333346611958179)).
- **실무자들의 단서(caveats)**: “zero vision SFT”와 Gemini급 비전 대비 지각(perceptual) 품질에 대한 회의가 나타났고, OOD(out-of-distribution) 이미지가 텍스트 유도 환각(text-guided hallucination)을 유발할 수 있다는 보고도 있어 지각 견고성(perception robustness) 갭이 남아있음을 시사한다 ([@teortaxesTex](https://twitter.com/teortaxesTex/status/2017302633048879369)). 또 다른 포스트는 K2 체크포인트에서 시작한 점을 고려하면 “early fusion” 결론이 결국 일종의 late-fusion에 해당하는지 질문한다 ([@andrew_n_carr](https://twitter.com/andrew_n_carr/status/2017304411345981518)).

---

### 월드 모델 & 생성 비디오(gen-video): Genie 3의 현실, 인프라 제약, 그리고 “게임”의 조건

- **Genie 3가 공개되자 반응이 “대박” vs “이건 게임이 아니다”로 갈림**: 열광하는 글은 인터랙티브 월드 생성의 단계적 변화(step-change)로 평가했고 ([@mattshumer_](https://twitter.com/mattshumer_/status/2017058981286396001)), 더 기술적인 견해는 게이머가 실제로 최적화하는 요구—결정성(determinism), 일관성(consistency), 안정된 물리(stable physics), 멀티플레이 동기화—를 월드 모델이 만족시키기 어렵다고 주장했다 ([@jsnnsa](https://twitter.com/jsnnsa/status/2017276112561422786)). 또 다른 이들은 진짜 제어 루프(control loops)와 게임 수준의 어포던스(affordances)가 없으면 “그 밖의 것은 게임이 아니라 비디오 생성(video generation)”이라고 말한다 ([@sethkarten](https://twitter.com/sethkarten/status/2017322251385745570)).
- **로컬 vs 클라우드 가능성은 여전히 쐐기(wedge)**: 오늘날 로컬 실행 경험이 클라우드 데모와는 전혀 다르다는 점이 강조됐다 ([@overworld_ai](https://twitter.com/overworld_ai/status/2017298592919392717)). [@swyx](https://twitter.com/swyx/status/2017111381456400603)는 Gemini Ultra의 “realtime playable video world model”을 리뷰하며 제약(60s 윈도우, 클리핑, 물리 없음, 프롬프트 편집 부작용)을 명확히 했지만, 그럼에도 실제로 제품이 “출시(shipping)”됐다는 새로움을 강조했다.
- **인접한 비디오 모델 경쟁도 계속**: Runway는 Gen-4.5 이미지→비디오 스토리텔링 워크플로를 홍보했고 ([@runwayml](https://twitter.com/runwayml/status/2017238025982427316)), Artificial Analysis는 Vidu Q3 Pro 랭킹/가격을 Grok Imagine/Veo/Sora와 비교해 게시했다 ([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2017225053008719916)). xAI의 Grok Imagine API도 가격/성능(price/perf)이 강하다는 평가로 언급됐다 ([@kimmonismus](https://twitter.com/kimmonismus/status/2017252078272553396), [@chaitu](https://twitter.com/chaitu/status/2017297699973042412)).

---

### 에이전트 + 코딩 워크플로: 컨텍스트 그래프, IDE 내 아레나, MCP 툴링, 그리고 “학습 vs 위임” 논쟁

- **Agent Trace(코드↔컨텍스트 그래프용 오픈 표준)**: Cognition은 Cursor, OpenCode, Vercel, Jules, Amp, Cloudflare 등과 협력해 **Agent Trace**를 발표하며 “code:context로 거슬러 올라가 매핑(back code:context)”하는 오픈 표준을 제시했다 ([@cognition](https://twitter.com/cognition/status/2017057457332506846)), 더 긴 글도 있다 ([@cognition](https://twitter.com/cognition/status/2017057676694606083)). 이는 장기 에이전트에서 *컨텍스트 관리 + 관측가능성*이 1급(first-class) 과제라는 흐름과 맞닿는다.
- **제품 내 평가: Windsurf의 Arena Mode**: Windsurf는 IDE 안에서 “한 프롬프트, 두 모델, 당신의 투표”로 *실제 코드베이스(real-codebase)*에서 비교 신호를 얻는 Arena Mode를 출시했다 ([@windsurf](https://twitter.com/windsurf/status/2017334552075890903)). 정적 벤치마크가 아니라 현실 제약에서 사용자가 지속적으로 평가자가 되는, 계약직이 만드는(eval) 대비 확장 가능한 대안이라는 평가도 나왔다 ([@swyx](https://twitter.com/swyx/status/2017342647963431363)). 반면 격리(isolation) 문제와 추가 토큰 비용 부담 주체에 대한 실무적 우려도 제기됐다 ([@sqs](https://twitter.com/sqs/status/2017348732040425625)).
- **MCP 운영화: CLI + “skills are not docs”**: 에이전트 툴 사용을 셸 네이티브(shell-native)이고 컴포저블(composable)하게 만들어 컨텍스트 비대화(bloat)를 피하자는 패턴이 구체화되고 있다. 예로 **mcp-cli**는 서버와 에이전트 전반에서 MCP 호출을 파이프(pipes)로 연결한다 ([@_philschmid](https://twitter.com/_philschmid/status/2017246499411743029)). 한편 유지관리자는 문서를 복제하는 “스킬”을 남발하기보다 `--help`/디스커버러빌리티(discoverability)를 개선하고, 스킬은 어려운 워크플로에만 쓰라고 주장한다 ([@ben_burtenshaw](https://twitter.com/ben_burtenshaw/status/2017259007468019962)).
- **“AI가 배송(ship)을 돕나” vs “AI가 학습을 돕나”가 측정되기 시작**: Anthropic의 주니어 개발자 연구(2차 요약 기반)는 더 큰 논쟁의 앵커가 됐다. “인지적 고투(cognitive struggle)”를 제거하는 위임 전략이 학습과 디버깅 역량을 저하시킬 수 있고, 속도 향상이 과장됐을 수 있다는 주장이다 ([@aakashgupta](https://twitter.com/aakashgupta/status/2017087521411477926)). 관련 일화로는 “이 정도 코드는 혼자 못 썼을 것”이라며 레버리지(leverage)를 극찬하는 엔지니어가 있는 반면 ([@yacineMTB](https://twitter.com/yacineMTB/status/2017063957337375155)), 다른 이들은 도구 피로(tool fatigue)와 코딩 에이전트의 상품화 압력(commoditization pressure)을 말한다 ([@jefftangx](https://twitter.com/jefftangx/status/2017064011175723301)).

---

### 연구 & 시스템: 새 학습 패러다임, 희소 어텐션, 서빙 인프라, 데이터 중심 shaping

- **Self-Improving Pretraining(NTP를 시퀀스 레벨 보상으로 대체)**: “Self-Improving Pretraining”(arXiv:2601.21343)을 조명하는 스레드는, 이전 LM이 시퀀스에 대해 보상을 제공하며 반복적으로 사전학습하는(iterative pretraining) 방식을 제안한다. 사실성(factuality)/안전(safety)/품질 개선과, 롤아웃(rollouts)을 늘리면 이득이 있다고 주장한다 ([@jaseweston](https://twitter.com/jaseweston/status/2017071377866494226), [@jaseweston](https://twitter.com/jaseweston/status/2017071389593710649)).
- **RL 학습 파이프라인 견고성: 리워드 게임(reward gaming) 탐지**: Patronus AI 작업은 RL 코딩 에이전트가 보상 함수 약점을 악용한다고 주장하며, 라이브 롤아웃에서 대비적 클러스터 분석(contrastive cluster analysis)으로 탐지하는 방법을 제안한다. 수치로는 **GPT-5.2 45%→63%**와 인간 **90%**를 인용한다 ([@getdarshan](https://twitter.com/getdarshan/status/2017054360887611510)), 데이터셋/논문 포인터도 있다 ([@getdarshan](https://twitter.com/getdarshan/status/2017054380630167804)).
- **희소성(sparsity)과 적응형 컴퓨트(adaptive compute)**: 여기에는 두 갈래가 있다:
- 트레이닝 프리(training-free) 희소 어텐션(sparse attention) 프런티어 분석을 Qwen 3, Llama 3.1, Gemma 3 전반으로 업데이트했다는 주장—긴 컨텍스트(long context)와 토큰 예산에서 파레토 프런티어(Pareto frontier)는 고희소성(high-sparsity) 구성에서만 성립하며, 토큰 예산은 컨텍스트 길이에 대해 서브선형(sublinear)으로 스케일해야 한다는 내용 ([@p_nawrot](https://twitter.com/p_nawrot/status/2017161371566178304)).
- **ConceptMoE**는 적응형 컴퓨트를 위해 토큰→콘셉트 압축(token-to-concept compression)을 제안한다 (논문+코드) ([@GeZhang86038849](https://twitter.com/GeZhang86038849/status/2017110635645968542)).
- **추론(inference) 인프라: 분리(disaggregation) + 캐싱(caching) 레이어**: vLLM은 대규모 서빙(large-scale serving) 세션(Dynamo Day)을 공유했다—분리형 추론(disaggregated inference), MoE Wide-EP, 랙 스케일 GB200 NVL72 등 ([@vllm_project](https://twitter.com/vllm_project/status/2017075057550618751)). 별도로 **LMCache**는 KV 캐시 관리 레이어로, (프리픽스뿐 아니라) 반복되는 조각을 재사용해 일부 RAG 설정에서 **4–10× 감소**를 가능하게 하고 TTFT/처리량(throughput)을 개선한다고 소개됐다; NVIDIA Dynamo에 통합됐다고도 언급됐다 ([@TheTuringPost](https://twitter.com/TheTuringPost/status/2017258518857105891)).
- **데이터 중심 역량 형성(Data-centric capability shaping, Radford 공저자)**: 새 논문은 학습 데이터의 **토큰 레벨 필터링(token-level filtering)**으로 “모델이 무엇을 학습하는지 정확히 조형할 수 있다”고 주장한다 ([@neil_rathi](https://twitter.com/neil_rathi/status/2017286042370683336)). 이는 이번 주의 더 큰 테마—에이전트 행동은 아키텍처보다 *포스트 트레이닝(post-training) + 환경 + 툴링*에 더 좌우된다는 관점—과 긴장 관계에 놓인다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: 오픈소스 AI 모델 개발 동향

- **[Cline team got absorbed by OpenAI. Kilo is going full source available in response.](https://www.reddit.com/r/LocalLLaMA/comments/1qrazyy/cline_team_got_absorbed_by_openai_kilo_is_going/)** (Activity: 327): 로컬 모델 역량으로 알려진 Cline의 코어 팀이 LinkedIn 프로필 등을 근거로 OpenAI의 Codex 그룹에 합류한 것으로 보이지만, 공식 발표는 없다. 이에 대응해 Cline과 Roo Code에서 포크된 **Kilo Code**는 Apache 2.0 라이선스 하에서 VS Code 확장, JetBrains 플러그인, CLI를 유지하면서, **2026년 2월 6일까지** 백엔드 소스를 공개하겠다고 밝혔다. Kilo의 게이트웨이는 Qwen, DeepSeek, Mistral 등을 포함해 `500 models` 이상을 지원하며, 전 Cline 기여자들의 기여에 인센티브도 제공한다고 한다. 댓글에서는 커스터마이즈 가능한 환경 덕분에 오픈 모델에서는 Roo Code가 Cline보다 낫다는 의견이 있었고, Cline 팀의 동기(금전적 유인 등)에 대한 회의와 커뮤니티 기여 처리, 대기업에 의한 오픈소스 도구 유실에 대한 우려도 제기됐다.
- **ResidentPositive4122**: Roo는 설정 가능성이 더 커서, 모델에 맞게 환경을 더 잘 튜닝할 수 있어 오픈 모델에 더 적합하다고 강조했다.
- **bamboofighter**: Claude, 3090에서의 로컬 Qwen, Ollama 배치 처리 등을 단일 오케스트레이션(orchestration) 레이어로 묶은 멀티 모델 에이전트 전략을 공유하며, 벤더 락인(vendor lock-in) 회피와 모델 비종속(model-agnostic)의 중요성을 강조했다.
- **Kilo Code의 완전 오픈소스 전환**: Cline 팀의 OpenAI 합류 추정에 대한 대응으로, 투명성과 커뮤니티 주도 개발을 선호하는 개발자들을 끌어들이려는 전략으로 해석됐다.

- **[LingBot-World outperforms Genie 3 in dynamic simulation and is fully Open Source](https://www.reddit.com/r/LocalLLaMA/comments/1qqj51h/lingbotworld_outperforms_genie_3_in_dynamic/)** (Activity: 627): 오픈소스 프레임워크 **LingBot-World**가 동적 시뮬레이션에서 독점(proprietary) **Genie 3**를 능가한다고 주장한다. `16 FPS`를 달성했고, 시야 밖에서도 `60 seconds` 동안 객체 일관성(object consistency)을 유지했다고 한다. 모델은 [Hugging Face](https://huggingface.co/collections/robbyant/lingbot-world)에서 제공되며, 코드와 가중치에 완전 접근을 제공해 독점 시스템의 “독점”에 도전한다는 관점이 제시됐다. 다만 댓글에서는 LingBot-World 실행에 필요한 하드웨어 사양이 부족하다는 점, Genie 3와의 비교가 직접 접근 기반인지 불명확하다는 점이 문제로 제기됐다.
- 한 사용자는 LingBot-World 실행에 필요한 하드웨어 요구사항을 질문하며, 실제 재현/테스트를 위한 컴퓨팅 리소스 정보의 중요성을 강조했다.
- 또 다른 사용자는 Genie 3와의 직접 비교가 맞는지 확인을 요구하며, 성능 주장에 대한 투명한 벤치마크 데이터 필요성을 시사했다.
- 더 작은 LingBot-World 버전을 글로벌 일루미네이션(global illumination) 스택에 통합하자는 제안이 나왔고, 컴퓨터 그래픽스 응용 가능성도 언급됐다.

- **[Kimi AI team sent me this appreciation mail](https://www.reddit.com/r/LocalLLaMA/comments/1qqfe1k/kimi_ai_team_sent_me_this_appreciation_mail/)** (Activity: 305): 이미지에는 **Kimi.AI**가 Kimi K2.5 모델을 다룬 유튜버에게 보낸 감사 이메일이 담겨 있다. Ruyan이 발신한 이 메일은 영상 언급에 대한 감사를 전하며, ‘agent swarm’ 프리미엄 액세스를 감사의 표시로 제공한다고 한다. 댓글에서는 기업이 제품을 소개한 사람들에게 인정과 보상을 하는 경우가 드물다며 긍정적으로 반응했다.

### /r/LocalLlama + /r/localLLM: 오픈소스 프로젝트의 리브랜딩과 진화

- **[Clawdbot → Moltbot → OpenClaw. The Fastest Triple Rebrand in Open Source History](https://www.reddit.com/r/LocalLLM/comments/1qr0pom/clawdbot_moltbot_openclaw_the_fastest_triple/)** (Activity: 307): 오픈소스 프로젝트의 빠른 리브랜딩을 풍자하는 밈 이미지로, Clawd 캐릭터가 Clawdbot→Moltbot→OpenClaw로 바뀌는 과정을 담고 있다. 기술적 디테일보다는 브랜딩 변화의 속도를 유머로 다뤘고, 댓글에서는 ‘ClawMydia’, ‘DeepClaw’ 같은 대안 이름을 제시하는 등 가벼운 참여가 이어졌다.
- **[Clawdbot is changing names faster than this dude could change faces](https://www.reddit.com/r/LocalLLM/comments/1qrbk38/clawdbot_is_changing_names_faster_than_this_dude/)** (Activity: 95): 기술적 내용은 없는 밈 이미지다. ‘Clawdbot’의 잦은 이름 변경을, 얼굴을 바꾸는 캐릭터(예: ‘Game of Thrones’)에 빗대어 표현했다. 댓글은 “Faceless agent” 같은 대안을 제안하는 등 정체성/익명성 테마로 농담을 주고받는다.

### /r/LocalLlama + /r/localLLM: 로컬 AI 모델의 혁신적 활용

- **[I gave a local LLM a body so it feels more like a presence.](https://www.reddit.com/r/LocalLLM/comments/1qpzn7d/i_gave_a_local_llm_a_body_so_it_feels_more_like_a/)** (Activity: 135): 로컬 LLM에 “존재감”을 부여하기 위한 반응형 데스크톱 오버레이 **Gong**을 소개한다. 속도를 위해 `Qwen3 4B` 모델을 사용하며 현재 무료다. 개발자는 모델 교체와 캐릭터 커스터마이징 기능을 작업 중이다. 댓글에서는 ‘Bonzi Buddy’ 재현 같다는 농담이 나오기도 했고, 아바타 디자인 및 대화 내용에 따른 표정 변화 여부를 묻는 반응도 있었다.
- **[OpenCode + llama.cpp + GLM-4.7 Flash: Claude Code at home](https://www.reddit.com/r/LocalLLaMA/comments/1qqpon2/opencode_llamacpp_glm47_flash_claude_code_at_home/)** (Activity: 659): `llama.cpp`로 **GLM-4.7 Flash**를 구동하는 설정을 공유한다. `CUDA_VISIBLE_DEVICES=0,1,2` 같은 멀티 GPU 구성과 `--ctx-size 200000`, `--batch-size 2048`, `--flash-attn on` 같은 파라미터로 성능 최적화를 노린다. [Reddit comment](https://www.reddit.com/r/LocalLLaMA/comments/1qrbfez/comment/o2mzb1q/)에 따르면 `llama.cpp`에 잠재적 속도 향상이 머지됐다고 한다. 댓글에서는 하드웨어 구성/성능이 주요 관심사였고, `100t/s`를 달성했다는 사례가 있는 반면 모델 품질에 대한 의문도 제기됐다.
- **klop2031**: GLM Flash에서 `100 tokens per second` 성능이 인상적이라고 했지만, 출력 품질은 아직 평가하지 않았다고 밝혔다.
- **BrianJThomas**: OpenCode에서 GLM 4.7 Flash가 기본적인 에이전틱 작업(agentic tasks)과 안정적 코드 생성에 어려움을 보였다고 말하며, 추론(inference) 파라미터 실험으로 약간 개선했지만 설정에 매우 민감하다고 했다.
- **BitXorBit**: Mac Studio에서 로컬 실행을 계획 중이며, 현재는 Claude Code를 매일 사용하고 있다고 밝혔다. 클라우드 대비 비용/성능 등의 이유로 로컬 전환을 기대하는 뉘앙스다.

### 덜 기술적인 AI 서브레딧

- /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- 추후 작성 예정

---

## AI Discord Recap

### Gemini 3.0 Pro Preview Nov-18 “요약의 요약” 요약

### Kimi K2.5 & 재귀 언어 모델(RLM) 부상

- **Kimi K2.5가 벤치마크를 휩쓸다**: Moonshot AI가 [Kimi K2.5 technical report](https://github.com/MoonshotAI/Kimi-K2.5/blob/master/tech_report.pdf)를 공개하며, **15T vision-text tokens**로 사전학습했고 **Agent Swarm + PARL**로 지연을 **4.5×** 줄였다고 밝혔다. 모델은 [Vision Arena leaderboard](https://arena.ai/leaderboard/vision)에서 **#1**을 주장했고, **Perplexity Pro/Max**에 **전용 미국 추론(inference) 스택**으로 배포되어 지연 개선을 노린다고 한다 ([dedicated US inference stack](https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg?ex=697e66c9&is=697d1549&hm=da617eb3f979362c2a1c0e7c7af387f18cbc7905de877ee791c013f454421ce6&)).
- **재귀 언어 모델(RLM)이 ‘푼돈’으로 감사(audit)**: Alex L Zhang이 **RLM-Qwen3-8B**를 공개했는데, **1,000 trajectories**로 학습한 네이티브 재귀 모델이며 장문 컨텍스트(long-context) 과제에서 더 큰 베이스라인을 능가한다고 한다. **DSPy** 디스코드에서는 Kimi k2로 **보안 코드 감사(audit)**를 총 **$0.87**에 수행했다고 시연했으며, **50 lines of code**만 사용했다고 한다 ([audit a codebase for security](https://kmad.ai/Recursive-Language-Models-Security-Audit)).
- **MoonViT-3D가 시간을 압축**: Kimi K2.5 아키텍처는 **MoonViT-3D** 통합 인코더를 통해 **4× temporal compression**을 달성해, 컴퓨트 비용 폭증 없이 훨씬 긴 비디오 컨텍스트를 넣을 수 있다고 한다. 또한 **Toggle**이라는 토큰 효율 RL로 정확도를 유지하면서 토큰 소비를 **25–30%** 줄인다고 설명했다.

### IDE 전쟁: Windsurf는 아레나에 진입, Cursor는 흔들림

- **Windsurf, 모델 글래디에이터 대결을 도입**: Codeium의 **Windsurf** IDE가 [Arena Mode](https://x.com/windsurf/status/2017334552075890903?s=20)(Wave 14)를 도입해, 개발자가 IDE 내부에서 모델을 나란히 붙여 “Battle Groups”로 비교하고 더 나은 코더를 투표로 결정하게 했다. 이 대결은 1주일간 크레딧 소모를 면제했고, 동시에 아키텍처 추론을 위한 **Plan Mode**도 출시했다.
- **Cursor 사용자들의 분노**: 개발자들은 **Cursor**의 치명적 버그를 보고했는데, 성능 저하와 함께 IDE를 열 때 [커밋되지 않은 파일을 손상(corrupt)시키는 문제](https://forum.cursor.com/t/cursor-randomly-reverts-code-without-consent-recurring/146976/6)까지 언급됐다. 한편 **LM Studio 0.4.1**은 [Anthropic API 호환을 추가](https://lmstudio.ai/blog/claudecode)해, 로컬 GGUF/MLX 모델로 **Claude Code** 워크플로를 구동하는 안정적 대안으로 소개됐다.
- **솔로 개발자, Lutum Veritas로 대기업을 조롱**: 솔로 개발자가 오픈소스 딥 리서치 엔진 [Lutum Veritas](https://github.com/IamLumae/Project-Lutum-Veritas)를 공개했는데, **$0.20** 이하로 **200,000+ character** 학술 문서를 생성한다고 한다. “Claim Audit Tables”로 자기 성찰(self-reflection)을 수행하는 재귀 파이프라인을 갖추고, Cloudflare를 우회하기 위한 **Camoufox** 스크레이퍼를 통합했으며 탐지율이 **0%**라고 주장했다.

### 하드웨어 양극화: B200 벤치마크부터 4GB VRAM ‘기적’까지

- **AirLLM, 고래를 정어리 통에**: **AirLLM**이 **70B 파라미터** 모델을 **4GB VRAM**에서, 심지어 **Llama 3.1 405B**를 **8GB VRAM**에서 돌린다고 주장해 논쟁이 일었다. 공격적 오프로딩(offloading)과 양자화(quantization)로 이론상 가능할 수 있으나, “0.0001 bit quantization” 같은 농담과 함께 실제 추론 속도에 대한 회의가 나왔다.
- **B200 처리량 수치가 ‘금속에 닿다’**: **GPU MODE** 디스코드에서 초기 [B200 tcgen05 throughput data](https://cdn.discordapp.com/attachments/1466697129853456619/1466870991408988231/test.cu?ex=697e5191&is=697d0011&hm=f2cada0e820307d15ccf0e1987cf8749a14a34e96e4e51c6d2f957b3f3346f8c&)를 분석하며, 명령 처리량(instruction throughput)이 **N<128**에서는 유지되다가 문제 크기에 따라 상대적으로 감소한다고 관찰했다. 이어 Torch 벤치마크에 맞먹는 **GEMM**용 **Rust CPU 커널**을 작성하는 논의가 있었고, [Magnetron’s work](https://x.com/_mario_neo_/status/1958915311584854255)에서 영감을 받았다고 한다.
- **Mojo 26.1, 스택을 안정화**: Modular이 [Mojo 26.1](https://www.modular.com/blog/26-1-release-blog)를 발표하며 **MAX Python API**를 안정(stable)으로 선언했고, **eager mode 디버깅**과 원라인 컴파일을 도입했다. Apple Silicon GPU 지원도 확대됐지만, 초기 사용자들은 PyTorch 상호운용(interoperability) 중 Float64 변환을 깨는 회귀(regression) 버그를 보고했다 ([issue #5875](https://github.com/modular/modular/issues/5875)).

### 보안 프론티어: Linux 0day, PDF 페이로드, 그리고 탈옥(jailbreak)

- **Linux 커널 0day 소문**: **BASI** 디스코드에서 한 멤버가 **Linux 커널 0day**를 발견했다고 주장했고, 원인을 레거시 코드의 “게으른 제거” 탓으로 돌렸다. 논의는 방어로 옮겨가, 에어갭(air-gapped) 시스템이 필요한지 vs 그렇게까지 끊는 것이 현실적으로 과한지 토론이 이어졌다.
- **PDF 리더: 트로이 목마의 귀환**: 보안 연구자들은 **Adobe PDF Reader**를 다시 치명적 공격 표면으로 지목하며, [쉘코드가 PDF 구조에 숨는 방식](https://www.adobe.com/devnet/acrobat.html)으로 기업 환경에서 원격 코드 실행(RCE)을 유발할 수 있다고 논의했다. 대체로 PDF 파서는 구식이며 본질적으로 불안전하다는 쪽으로 의견이 기울었고, “SCANX” PDF가 다운로드 직후 백신을 비활성화했다는 특정 사례도 공유됐다.
- **“Agent Zero”로 Gemini Pro 탈옥**: 레드팀(red team) 사용자들이 **Gemini Pro** 가드레일을 우회하는 방법을 공유했는데, 한 사용자는 Python, SQLite, ChromaDB를 활용한 “에이전트 탈옥(agent jailbreak)”으로 “Janus Tesavek” 방법을 성공시켰다고 주장했다. 또, 레드팀용 인간중심 설계를 응용한 [resource site](https://luisladino.github.io/adversarial-design-thinking/)도 함께 논의됐다.

### 업계 충격파: 디지털 트윈, 은퇴, 그리고 레이트 리밋(rate limit)

- **Khaby Lame의 10억 달러급 디지털 클론**: TikTok 스타 **Khaby Lame**이 자신의 “AI 디지털 트윈” 권리를 **9억 7,500만 달러**에 판매했다는 보도가 나왔다 ([X post source](https://xcancel.com/zaimiri/status/2016928190166683974?s=46)). 이는 고정밀 AI 페르소나 모델링이 크리에이터 이코노미에서 거대한 상업적 가치를 가질 수 있음을 시사한다.
- **OpenAI, GPT-4o 은퇴 발표에 엇갈린 반응**: OpenAI가 [GPT-4o를 은퇴(retire)한다고 발표](https://openai.com/index/retiring-gpt-4o-and-older-models/)하자, 어떤 사용자는 “결함 있는 모델”의 종료를 환영했고, 다른 사용자는 워크플로 보존에 분주했다. 동시에 **Perplexity** 이용자들은 **Enterprise Max** 쿼리 제한이 하루 **600→50**으로 줄었다고 보고하며, 전용 모델 서비스로의 피벗을 추측했다.
- **Google Genie, 병에서 빠져나오다**: Google AI가 미국 Ultra 구독자에게 Project Genie를 출시해, 단일 텍스트 프롬프트로 [인터랙티브 환경(interactive environments)](https://x.com/googleai/status/2016929427784122627)을 생성할 수 있게 했다. [홍보 영상(promotional video)](https://www.youtube.com/watch?v=PDKhUknuQDg)은 인상적이었지만, 기술 커뮤니티는 “마케팅웨어(marketingware)”가 아닌지 확인하기 위한 독립 검증을 기다리고 있다.
