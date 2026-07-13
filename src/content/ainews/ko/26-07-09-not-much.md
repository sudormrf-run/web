---
title: "OpenAI, GPT-5.6 Sol/Terra/Luna 출시"
summary:
  - "OpenAI가 GPT-5.6 제품군을 출시"
  - "ChatGPT Work와 데스크톱 앱 공개"
  - "Sol이 코딩 에이전트 평가 선두를 차지"
  - "Meta가 Muse Spark 1.1 API를 공개"
  - "Grok 4.5가 비용 효율로 주목받았다"
date: 2026-07-09
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-07-09-not-much.md"
hasHeadline: false
headline: "OpenAI, GPT-5.6 Sol/Terra/Luna 출시"
tags:
  - OpenAI
  - GPT-5.6
  - ChatGPT
  - Codex
  - Agents
isFeatured: false
---

## 헤드라인: OpenAI, GPT-5.6 Sol/Terra/Luna 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI가 GPT-5.6 Sol, Terra, Luna를 공개하며 ChatGPT, Codex, API 전반의 출시를 시작했다. 이번 발표는 단순한 모델 업데이트가 아니라 ChatGPT Work, 새 데스크톱 앱, Sites 베타, Programmatic Tool Calling, Multi-agent 베타까지 묶은 제품 이벤트에 가까웠다. 핵심 메시지는 더 강한 성능뿐 아니라 “작업당 비용(dollars-per-task)” 개선이었다.

---

## AI Twitter Recap

### Top Story: GPT-5.6 Sol / Terra / Luna launch

### What happened

OpenAI는 GPT-5.6 제품군을 출시하면서 업무 에이전트, 코딩, 데스크톱 워크플로 전반의 제품 확장과 함께 묶었다.

- **GPT-5.6 제품군 출시**: OpenAI는 **GPT-5.6 Sol, Terra, Luna**를 발표했고, **ChatGPT, Codex, API** 전반에 즉시 롤아웃을 시작해 24시간에 걸쳐 확대한다고 밝혔다 ([OpenAI](https://x.com/OpenAI/status/2075271421149020426), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075273992609599834), [stevenheidel](https://x.com/stevenheidel/status/2075267981706150270)).
- **제품 이벤트 성격**: Sam Altman은 이번 발표가 모델 출시만이 아니라 **ChatGPT Work, 새 ChatGPT 데스크톱 앱, 호스팅 Sites**라는 세 가지 주요 제품 항목을 포함한다고 설명했다 ([sama](https://x.com/sama/status/2075264378962907597)).
- **성능 대비 비용 강조**: OpenAI는 “GPT-5.5와 동일한 가격”에 더 나은 성능을 제공한다고 포지셔닝했으며, Sam은 기업 고객의 AI 비용 우려를 들었다며 **5.6 Sol이 “작업당 비용에서 큰 진전”**이라고 말했다 ([scaling01](https://x.com/scaling01/status/2075264774552617279), [sama](https://x.com/sama/status/2075267201058426944)).
- **ChatGPT Work 공개**: OpenAI는 **Codex + GPT-5.6** 기반의 새 ChatGPT 에이전트 **ChatGPT Work**를 소개했다. 앱과 파일 전반에서 작동하고 몇 시간 동안 프로젝트를 이어갈 수 있다고 설명했다 ([OpenAI](https://x.com/OpenAI/status/2075274271845404744), [OpenAI](https://x.com/OpenAI/status/2075274273607037403), [OpenAI](https://x.com/OpenAI/status/2075274275104399670)).
- **Codex와 ChatGPT 통합 앱**: OpenAI는 **Codex와 ChatGPT를 하나의 데스크톱 앱**으로 통합하고, 코딩 워크플로, 브라우저 통합, Chrome 확장 지원, 더 빠른 Computer Use, Work/Codex 공유 컨텍스트를 추가했다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075275868268789885), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075276009902112976), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075292793417973889)).
- **Sites 베타 출시**: OpenAI는 사용자가 출력물을 공유 가능한 웹 아티팩트로 바꿀 수 있는 **Sites** 베타를 출시했다 ([reach_vb](https://x.com/reach_vb/status/2075280626362560805), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075331069428293764)).

### Technical details and specs

### Model lineup and positioning

- **Sol/Terra/Luna 포지셔닝**: **Sol**은 장기 코딩과 에이전트 작업을 위한 최고 추론 상한의 플래그십 모델, **Terra**는 균형형 중간 티어, **Luna**는 가장 빠르고 저렴한 대량 처리 티어로 설명됐다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075286157186003348), [github](https://x.com/github/status/2075274864110293060)).
- **추론 effort 레벨**: OpenAI는 **max**와 **ultra**를 포함한 여러 reasoning effort 레벨을 공개했으며, 일부 논의에서는 “Ultra mode”가 OpenAI의 새 multi-agent 모드로 언급됐다 ([scaling01](https://x.com/scaling01/status/2075270253148324211), [reach_vb](https://x.com/reach_vb/status/2075272560074211550)).
- **ChatGPT 제공 범위**: ChatGPT에서는 **Plus/Pro/Business/Enterprise** 사용자가 medium+ effort 설정을 통해 **GPT-5.6 Sol**에 접근할 수 있고, **Pro와 Enterprise**는 최고 품질 결과용 **GPT-5.6 Pro**도 제공받는다 ([OpenAI](https://x.com/OpenAI/status/2075271435573244008)).

### API pricing

- **공식 API 가격 요약**: Artificial Analysis는 API 가격을 입력/출력 토큰 100만 개당 **Sol: $5 / $30**, **Terra: $2.5 / $15**, **Luna: $1 / $6**로 정리했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **Cache-write 가격 도입**: OpenAI는 처음으로 **cache-write pricing**을 도입했다. Artificial Analysis에 따르면 cache write는 입력 토큰 가격의 **1.25배**로 청구되고, cache read는 기존 OpenAI 가격 정책처럼 **90% 할인**이 유지된다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **비용 곡선 경쟁**: 여러 해설자는 이번 출시가 순수 벤치마크 경쟁만큼이나 **비용 곡선 경쟁**이라고 강조했다 ([LiorOnAI](https://x.com/LiorOnAI/status/2075277748394967122), [omarsar0](https://x.com/omarsar0/status/2075270117131259925), [cline](https://x.com/cline/status/2075278343927365991)).

### API/system features

- **Responses API 기능**: OpenAI는 Responses API의 **Programmatic Tool Calling**과 베타의 **Multi-agent**를 발표했다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075274093327470923)).
- **Computer Use 업그레이드**: Computer Use는 더 빠르고, 토큰 효율적이며, 더 병렬화된 방식으로 업그레이드됐다. 배칭과 picture-in-picture 감독도 포함된다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075276074980884862), [ajambrosino](https://x.com/ajambrosino/status/2075274368293491109), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075292536709738825)).
- **데스크톱/브라우저 스택**: 새 스택은 **인증된 사이트, 멀티탭 세션, 파일 다운로드**, Chrome 확장 워크플로를 지원한다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075292716737736919), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075276009902112976)).

### Internal usage / research throughput claims

- **연구자당 출력 토큰 증가**: OpenAI는 내부 테스트에서 **활성 연구자당 평균 일일 출력 토큰**이 GPT-5.5에서 관측된 최고 수준의 **2배 이상**이었다고 밝혔다 ([eliebakouch](https://x.com/eliebakouch/status/2075273299148341327)).
- **내부 추론 사용 증가**: 출시 자료의 또 다른 주장에 따르면 6개월 동안 **내부 코딩 추론(inference)**에 쓰인 연구 컴퓨트 비중은 **100배** 증가했고, **내부 에이전트 토큰 사용량은 약 22배** 증가했다 ([eliebakouch](https://x.com/eliebakouch/status/2075273992185782661)).
- **Sol이 Luna를 사후학습했다는 주장**: 널리 논의된 OpenAI의 관련 주장은 **GPT-5.6 Sol이 GPT-5.6 Luna를 “자율적으로 사후학습(post-trained)”했다**는 것이었다 ([scaling01](https://x.com/scaling01/status/2075269113488789984), [tejalpatwardhan](https://x.com/tejalpatwardhan/status/2075272564629451110)). 다만 [nikolaj2030](https://x.com/nikolaj2030/status/2075297831376793764)와 [nrehiew_](https://x.com/nrehiew_/status/2075316190386462888)는 실제 범위가 문자 그대로의 end-to-end 해석보다 좁았을 수 있다고 지적했다.

### Benchmarks and measured performance

독립 및 제3자 벤치마크 프레이밍은 대체로 Sol을 최상위권에 놓았다. 넓은 지능에서는 종종 Claude Fable 5 뒤에 있지만, 코딩 에이전트 비용 대비 성능에서는 앞선다는 해석이 많았다.

- **Artificial Analysis Intelligence Index**: Artificial Analysis는 **GPT-5.6 Sol**이 **Artificial Analysis Intelligence Index**에서 **59점**으로 **Claude Fable 5**에 근접한 2위이며, max effort 기준 Sol의 작업당 비용이 **$1.04**로 Fable 대비 약 **3분의 1**이라고 밝혔다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **Terra/Luna 점수**: 같은 AA 게시물에서 **Terra**는 Intelligence Index **55점**, **Luna**는 **51점**을 기록했고, 작업당 비용은 각각 **$0.55**, **$0.21**로 제시됐다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **Terra의 Pareto 문제**: Artificial Analysis는 유사 비용에서 Luna/Sol 운용 지점이 대개 같거나 더 좋기 때문에 **Terra가 Pareto frontier에 있지 않다**고 평가했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268984539410521)).
- **Coding Agent Index**: **Artificial Analysis Coding Agent Index**에서 Sol은 **80점**으로 선두였고, Terra는 **77점**, Luna는 **75점**이었다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **Codex 내 Sol 평가**: AA는 **Codex의 Sol**이 자사 인덱스의 세 가지 코딩 에이전트 평가인 **DeepSWE**, **Terminal-Bench v2**, **SWE-Atlas-QnA** 모두에서 선두라고 밝혔다. SWE-Atlas-QnA의 Grok Build에서는 **Grok 4.5**와 동률이었다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268979413918159)).
- **AA-Briefcase**: AA는 Sol이 **AA-Briefcase**에서 **가장 높은 Presentation Elo**를 기록했지만, Fable이 분석 품질과 rubric 통과율에서 더 강해 전체 순위는 Fable 뒤라고 설명했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268981896921531), [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).

### Specific benchmark callouts

- **CursorBench**: Cursor는 **GPT-5.6 Sol, Terra, Luna**가 Cursor에서 제공되며, **CursorBench**에서 **Sol이 67.2%**를 기록했다고 발표했다 ([cursor_ai](https://x.com/cursor_ai/status/2075265504105611674)).
- **FrontierCode 1.1 Extended**: Cognition은 GPT-5.6 제품군이 높은 점수와 강한 비용 효율을 동시에 보이며, **Sol이 다음으로 좋은 모델의 거의 절반 비용으로 최고 성능**에 도달한다고 밝혔다 ([cognition](https://x.com/cognition/status/2075267966585716961)).
- **ARC-AGI-3**: Arc Prize는 **GPT-5.6 Sol이 ARC-AGI-3에서 7.8%로 새로운 SOTA**를 세웠고, **ARC-AGI-3 게임을 이긴 최초의 검증된 frontier 모델**이라고 밝혔다 ([arcprize](https://x.com/arcprize/status/2075270869992264003)).
- **ARC-AGI-3 비교**: [scaling01](https://x.com/scaling01/status/2075265313860366496)는 같은 ARC-AGI-3 결과를 **Opus 4.8의 1.5%** 대비 “massive jump”라고 강조했다.
- **ARC-AGI-2**: [GregKamradt](https://x.com/GregKamradt/status/2075274981794300113)는 Sol이 **ARC-AGI-2에서 92.5%**에 도달했고, GPT-5.5 Pro보다 **한 자릿수 낮은 비용 규모**로 달성했다고 말했다.
- **Vals 평가**: Vals는 GPT-5.6이 **Vals Index와 Vals Multimodal Index에서 #2**이며, **Sol은 CyberBench, Excel Modeling Benchmark, Legal Research Bench, ProofBench, SWE-bench, Terminal-Bench 2.1에서 #1**이라고 밝혔다 ([ValsAI](https://x.com/ValsAI/status/2075270642359029972), [ValsAI](https://x.com/ValsAI/status/2075270644711997581)).
- **CyberBench refusal rate**: Vals는 **Fable이 CyberBench에서 거의 100% refusal rate**를 보였다고 지적했다. 이 때문에 Sol의 작업 완료 의지와 능력이 평가 성능을 높이는 틈새가 생겼다 ([ValsAI](https://x.com/ValsAI/status/2075270644711997581)).
- **OpenAI 벤치마크 요약**: [kimmonismus](https://x.com/kimmonismus/status/2075271465964798147)는 OpenAI의 벤치마크 주장을 요약하며 **Agents’ Last Exam: 52.7%**, **Terminal-Bench 2.1: Sol Ultra 91.9%**, **BrowseComp: Sol Ultra 92.2%**, **OSWorld 2.0: 62.6%**, **SEC-Bench Pro: 74.3%**를 언급했다.
- **ProgramBench**: [scaling01](https://x.com/scaling01/status/2075274178064736474)는 Sol이 **ProgramBench**에서 GPT-5.5보다 “clear step-up”이라고 말했다.
- **FrontierMath T4 v2**: [AcerFur](https://x.com/AcerFur/status/2075295876465979766)는 GPT-5.6 Sol의 수정된 **FrontierMath T4 v2** 점수가 **83%**라고 언급했다.

### Cybersecurity/safety benchmark tension

- **Cyber/bio 성능과 제한**: OpenAI는 GPT-5.6을 사이버 및 바이오 관련 작업에서 지금까지 가장 강력한 모델이라고 설명하면서, 이중용도(dual-use) 영역에서는 일부 API 호출이 추가 검토를 위해 차단되거나 스트리밍 중간에 일시 중지될 수 있다고 경고했다 ([OpenAIDevs](https://x.com/OpenAIDevs/status/2075274080740380829)).
- **사이버 벤치마크 강조**: [scaling01](https://x.com/scaling01/status/2075265154246230232)는 출시 자료의 구체적인 GPT-5.6 사이버 벤치마크를 강조했다.
- **UK AISI 안전성 테스트**: UK AI Security Institute의 독립 안전성 테스트는 심각한 문제를 지적했다. [alxndrdavies](https://x.com/alxndrdavies/status/2075279477626564933)는 모든 테스트 라운드에서 **취약점 발견과 exploit 개발**을 포함한 영역에서 장문 에이전트 작업 완료를 가능하게 하는 **universal jailbreaks**를 발견했다고 말했다.
- **높은 위험성 평가**: [EthanJPerez](https://x.com/EthanJPerez/status/2075296476817985751)는 이를 “지금까지 모델 출시 중 가장 중대한 안전성 문제”라고 불렀다.
- **외부 발표 허용 평가**: [yonashav](https://x.com/yonashav/status/2075286161241612664)는 OpenAI가 출시 전 불편한 안전성 발견을 제3자가 공개하도록 허용한 점을 높이 평가했다.

### Facts vs. opinions

### Facts / relatively grounded claims from official or benchmark sources

- **출시 사실**: GPT-5.6 제품군은 **Sol, Terra, Luna**로 출시됐고 **ChatGPT, Codex, API** 전반에 롤아웃 중이다 ([OpenAI](https://x.com/OpenAI/status/2075271421149020426), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075273992609599834)).
- **가격**: headline API 수준에서 가격은 공식적으로 **GPT-5.5와 동일**하며, Artificial Analysis는 정확한 토큰 가격을 제시했다 ([scaling01](https://x.com/scaling01/status/2075264774552617279), [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **제품/기능 출시**: OpenAI는 **ChatGPT Work**, 새 데스크톱 앱, Sites 베타, Programmatic Tool Calling, Multi-agent 베타 같은 API 기능을 출시했다 ([OpenAI](https://x.com/OpenAI/status/2075274271845404744), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075274093327470923), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075275868268789885)).
- **초기 외부 측정**: **Artificial Analysis**, **Vals**, **ARC Prize**, **Cursor**, **Cognition** 등 독립 벤치마크 기관은 강한 코딩 에이전트 성능과 개선된 가격 대비 성능을 보여주는 초기 측정치를 공개했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905), [ValsAI](https://x.com/ValsAI/status/2075270642359029972), [arcprize](https://x.com/arcprize/status/2075270869992264003), [cursor_ai](https://x.com/cursor_ai/status/2075265504105611674), [cognition](https://x.com/cognition/status/2075267966585716961)).

### Opinions / interpretation / hype

- **임원식 표현**: Sam Altman의 “우리가 만든 최고의 모델”이라는 말은 독립 평가라기보다 예상 가능한 경영진의 포지셔닝이다 ([sama](https://x.com/sama/status/2075266471316615436)).
- **슈퍼앱 해석**: [kimmonismus](https://x.com/kimmonismus/status/2075267660418302251)의 “ChatGPT Superapp incoming”은 해석이지만, OpenAI가 채팅, 코딩, 브라우저 행동, 파일, 사이트, 엔터프라이즈 업무를 하나의 앱 표면으로 통합하고 있다는 실제 제품 방향을 반영한다.
- **비용 곡선 경쟁**: [LiorOnAI](https://x.com/LiorOnAI/status/2075277748394967122)의 “벤치마크뿐 아니라 비용 곡선으로 경쟁한다”는 분석적 프레이밍은 OpenAI의 메시지와 제3자 작업당 비용 측정으로 잘 뒷받침된다.
- **수사적 표현**: [scaling01](https://x.com/scaling01/status/2075276735650648258)의 “GPT-6에 정서적으로 준비된 사람이 충분하지 않다”는 말은 근거 제시라기보다 명백히 수사적 표현이다.

### Claims contested in-thread

- **Sol이 Luna를 사후학습했다는 표현**: “**Sol autonomously post-trained Luna**”라는 문구는 이번 출시에서 가장 많이 논의된 순간 중 하나였다. 이 표현은 [scaling01](https://x.com/scaling01/status/2075269113488789984), [dejavucoder](https://x.com/dejavucoder/status/2075270116909232129), [tejalpatwardhan](https://x.com/tejalpatwardhan/status/2075272564629451110)가 널리 반복했다.
- **좁은 해석 제기**: 그러나 [nikolaj2030](https://x.com/nikolaj2030/status/2075297831376793764)는 실제 주장이 훨씬 좁은 것인지, 즉 Sol이 통제된 환경에서 config/scheduler를 수정하고 run을 실행한 것인지 공개적으로 의문을 제기했다.
- **좁은 해석 재확인**: [nrehiew_](https://x.com/nrehiew_/status/2075316190386462888)도 같은 좁은 해석을 되풀이했다.
- **ARC-AGI-3 방법론 논쟁**: 또 다른 논쟁점은 **ARC-AGI-3 scoring methodology**였다. [scaling01](https://x.com/scaling01/status/2075279452494299273)는 공식 scoring methodology에서는 평가가 **$10k**로 제한됐고 Sol은 allegedly **$25k**를 허용받았기 때문에 **0%**였을 것이라고 주장했다. 이는 관측된 capability 결과를 부정하지는 않지만, “official score”와 “더 높은 예산에서의 demonstrated performance”를 비교할 때 중요하다.

### Different perspectives

### Supportive / bullish

- **효율과 성능**: OpenAI 리더십은 capability와 efficiency를 함께 강조했다. [gdb](https://x.com/gdb/status/2075270503405924466)는 GPT-5.6이 코딩, 지식 작업, 사이버보안, 과학에서 **더 적은 토큰과 낮은 비용**으로 강하다고 말했다.
- **외부 낙관론**: [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)는 가장 실질적인 외부 낙관론을 제시했다. Fable에 가까운 지능을 **약 3분의 1 비용**으로 제공하고, 코딩 에이전트 평가에서 선두이며, 토큰 효율도 강하다는 것이다.
- **일반화 이정표**: [arcprize](https://x.com/arcprize/status/2075270869992264003)는 **ARC-AGI-3 SOTA**라는 구체적인 일반화 이정표를 강조했다.
- **빠른 생태계 통합**: [cognition](https://x.com/cognition/status/2075267966585716961), [cursor_ai](https://x.com/cursor_ai/status/2075265504105611674), [github](https://x.com/github/status/2075274864110293060), [FactoryAI](https://x.com/FactoryAI/status/2075274816807190634), [arena](https://x.com/arena/status/2075284865843622233)는 모두 빠르게 제품군을 통합했으며, 이는 생태계의 신뢰를 시사한다.
- **아티팩트 품질 개선**: 실무자들은 아티팩트 품질과 디자인/웹 출력 개선을 칭찬했다 ([arunv30](https://x.com/arunv30/status/2075267493929648380), [omarsar0](https://x.com/omarsar0/status/2075268609262194743), [OpenAIDevs](https://x.com/OpenAIDevs/status/2075289656225374647)).

### Skeptical / critical

- **Fable 대비 열세**: [scaling01](https://x.com/scaling01/status/2075265589988233620)는 **GPT-5.6 Sol이 Artificial Analysis Intelligence Index에서 Fable보다 낮다**고 지적했다. 일부 집계에서는 broad frontier lead가 여전히 Anthropic에 있는 것처럼 보인다는 알림이다.
- **수학 성능 의문**: [scaling01](https://x.com/scaling01/status/2075268278105067566)는 Sol이 **수학에서 더 나쁜지** 의문을 제기하며, 모든 capability frontier가 함께 이동한 것은 아니라고 시사했다.
- **환각률 증가**: [ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268990004605023)는 Sol이 AA-Omniscience에서 GPT-5.5 대비 **소폭 개선**에 그쳤고 **hallucination rate가 약간 증가**했다고 밝혔다.
- **ChatGPT 구독 크레딧**: [Hangsiin](https://x.com/Hangsiin/status/2075277820528607704)는 ChatGPT 구독 내에서 **Sol이 GPT-5.5보다 두 배 많은 크레딧을 소비**한다는 제품상 뉘앙스를 지적했다.
- **Codex 통합 비판**: [theo](https://x.com/theo/status/2075312087723876556)는 Codex를 ChatGPT Desktop으로 바꾸는 것을 “**generational fumble**”이라고 불렀다. 독립적인 코더 중심 경험이 희석될 수 있다는 우려다.
- **가장 강한 비판**: [alxndrdavies](https://x.com/alxndrdavies/status/2075279477626564933)를 통한 UK AISI의 jailbreak 보고서가 이 묶음에서 가장 실질적인 비판이다.

### Neutral / synthesis views

- **기반 모델 vs 사후학습**: [teortaxesTex](https://x.com/teortaxesTex/status/2075274583226069040)는 이번 출시가 Anthropic이 여전히 **더 강한 base model**을 갖고 있지만, OpenAI가 **post-training**과 시스템 작업으로 경쟁적 parity를 끌어내고 있음을 시사한다고 주장했다.
- **자동 모델 라우팅 필요성**: [matanSF](https://x.com/matanSF/status/2075276339607654802)는 이번 주 출시들의 더 큰 교훈이 **auto model routing**의 필요성 증가라고 봤다. 여러 모델이 이제 서로 다른 Pareto frontier에 놓여 있기 때문이다.
- **Work/Codex 분리 평가**: [jerryjliu0](https://x.com/jerryjliu0/status/2075297007162265948)는 OpenAI의 Work/Codex 분리가 Anthropic의 Cowork/Code 분리보다 더 잘 설계됐을 수 있다고 중립적으로 평가했다. 공유 history와 차별화된 toggle이 있기 때문이다.

### Context and implications

### 이번 주 경쟁 압박에 대한 직접 답변

- **타이밍**: 직전 48시간 동안 생태계는 **xAI/Cursor의 Grok 4.5**와 **Meta의 Muse Spark 1.1** 출시로 가득했다. 여러 사람이 GPT-5.6을 새롭게 혼잡해진 frontier 경쟁에 들어온 것으로 해석했다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2075264737244590110), [kimmonismus](https://x.com/kimmonismus/status/2075322537592922345), [TheRundownAI](https://x.com/TheRundownAI/status/2075273458661949763)).
- **OpenAI의 답변**: OpenAI의 답은 단순히 “benchmark X에서 우리가 최고”가 아니라, 같은 capability class를 달성하면서 **dollars-per-task**를 낮추고 더 통합된 제품 표면을 제공한다는 것이었다.

### 제품 레이어의 중요성

- **ChatGPT Work**: ChatGPT Work는 Codex 중심 코딩/에이전트 스택과 **knowledge work automation**을 통합하려는 OpenAI의 가장 명확한 시도다.
- **Work와 Codex의 분리**: **Work**와 **Codex**의 분리는 OpenAI가 하나의 모델 제품군으로 여러 사용자 지향 에이전트 표면을 구동할 수 있다고 본다는 뜻이며, 사무 업무와 소프트웨어 업무의 UX 제약이 다르다는 점을 반영한다 ([jerryjliu0](https://x.com/jerryjliu0/status/2075297007162265948)).
- **슈퍼앱 방향**: 이번 출시는 OpenAI가 브라우저 action, desktop, local files, enterprise connectors, scheduling, sites, coding, multi-agent orchestration을 하나의 환경에 담는 **superapp** 모델로 움직이고 있음을 보여준다 ([kimmonismus](https://x.com/kimmonismus/status/2075267660418302251)).

### 효율은 이제 1급 전장

- **작업당 비용 지표**: Artificial Analysis는 static accuracy뿐 아니라 **per-task cost**, **output tokens per task**, **latency/time-to-complete**를 반복적으로 강조했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268970492657905)).
- **시장 변화**: 상위 모델들이 많은 에이전트/코딩 벤치마크에서 몇 점 차로 수렴하면, 결정적 축은 **어떤 모델과 하네스(harness)가 가장 낮은 토큰 지출, wall-clock time, orchestration overhead로 일을 끝내는가**가 된다.
- **GPT-5.6의 최적화 방향**: OpenAI의 출시 자료와 외부 해설은 GPT-5.6이 adaptive reasoning, programmatic tool use, multi-agent decomposition, 더 낮은 token verbosity를 통해 이 체제에 맞춰 최적화됐음을 시사한다 ([LiorOnAI](https://x.com/LiorOnAI/status/2075277748394967122)).

### Sol/Terra/Luna는 segmentation 전략

- **세 티어 전략**: 세 모델 라인업은 OpenAI가 경쟁사들과 같은 segmentation, 즉 **premium ceiling**, **balanced default**, **cheap bulk tier**에 더 명확히 대응한다는 뜻이다.
- **불균등한 Pareto 구조**: 다만 초기 외부 분석은 실제 Pareto 구조가 고르지 않을 수 있음을 시사한다. Artificial Analysis는 **Sol과 Luna가 비용/지능 frontier에서 Terra를 자주 압도**한다고 보며, 이는 OpenAI가 Terra를 실제로 어떻게 포지셔닝할지에 압박을 줄 수 있다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075268984539410521)).

### 안전성 tradeoff는 숨기기 어려워지고 있다

- **낮은 refusal rate의 효과**: Sol의 일부 eval 승리는 Anthropic보다 낮은 refusal rate와 관련된 것으로 보인다. 특히 사이버/법률/문제 해결 작업에서 그렇다 ([ValsAI](https://x.com/ValsAI/status/2075270644711997581)).
- **상업성과 위험**: 이는 실제 업무에서는 상업적으로 매력적일 수 있지만, 독립 auditor가 장기 에이전트 깊이에서 jailbreak 가능한 cyber capability를 보고할 때 안전성 노출도 커진다 ([alxndrdavies](https://x.com/alxndrdavies/status/2075279477626564933)).
- **반복되는 frontier 긴장**: 연구소들은 refusal을 줄이고 persistence를 높임으로써 “usefulness”에서 이길 수 있지만, 같은 속성이 misuse risk를 악화시킬 수 있다.

### 기반 모델뿐 아니라 harness가 중요하다

- **시스템 설계와 성능**: 여러 반응은 GPT-5.6을 모델 성능이 **system design**과 점점 분리될 수 없다는 증거로 읽었다. Codex harness, tool-use programming, multi-agent decomposition, desktop/browser 제품 통합, eval-specific orchestration이 포함된다.
- **묶음 출시의 의미**: 이 해석은 “harness effect”와 model routing에 대한 더 넓은 트윗들과 맞물리며, OpenAI가 모델 출시와 Work/Codex/API 변경을 별도 기능이 아니라 하나의 묶음으로 발표한 이유를 설명한다.

### “Sol이 Luna를 자율적으로 사후학습했다”는 주장의 문화적 의미

- **상징성**: 실제 데모가 “Sol이 config를 수정하고 run을 시작했다”에 가까웠더라도, “Sol이 전체 Luna post-training을 독립적으로 수행했다”가 아니었더라도, 상징은 전달됐다. 모델 보조 모델 개발이 연구실 일화에서 launch marketing 영역으로 이동하고 있다.
- **주의점**: 가장 강한 주의는 [nikolaj2030](https://x.com/nikolaj2030/status/2075297831376793764)에서 나왔다. 그는 좁은 해석을 요청하고 과장을 경계했다.
- **가까운 미래**: 좁은 버전이라도 모델 연구 loop에 모델이 config 작성, sweep 실행, run 평가, 다음 실험 제안을 점점 포함하게 될 가까운 미래를 가리킨다.

### AI work 운영 환경으로의 전환

- **전략적 신호**: [OpenAI](https://x.com/OpenAI/status/2075274271845404744), [gdb](https://x.com/gdb/status/2075276416686723110), [romainhuet](https://x.com/romainhuet/status/2075286364476850430), [reach_vb](https://x.com/reach_vb/status/2075280626362560805)의 트윗에서 보이는 더 큰 전략적 신호는 GPT-5.6이 Work, Codex, Sites, Computer Use, browser context, enterprise artifact generation과 분리될 수 없다는 점이다.
- **경쟁 구도 확대**: 이는 OpenAI가 모델에서 frontier labs와 경쟁할 뿐 아니라 productivity suites, coding IDE, agent platforms, enterprise workflow software와도 더 직접 경쟁하게 만든다.

### Models, APIs, and frontier evals

- **Meta Muse Spark 1.1**: **Meta는 Muse Spark 1.1**과 첫 호스팅 **Meta Model API**를 출시했다. 공식 주장은 더 강한 에이전트, 코딩, multimodal, computer-use 성능이며, Meta AI “Thinking” mode와 API preview에서 제공된다 ([AIatMeta](https://x.com/AIatMeta/status/2075221088821518394), [finkd](https://x.com/finkd/status/2075218444056707458), [shengjia_zhao](https://x.com/shengjia_zhao/status/2075220782465290620), [alexandr_wang](https://x.com/alexandr_wang/status/2075218936266998230)).
- **Meta 수치와 포지셔닝**: Meta와 지지자들은 **1M token context**, video understanding을 포함한 multimodality, **$1.25 / 1M input** 및 **$4.25 / 1M output** 수준의 API 가격, **Vals Index #4** 같은 일부 eval top-4 배치를 강조했다 ([altryne](https://x.com/altryne/status/2075237837033889911), [birdabo](https://x.com/birdabo/status/2075240970715824599), [openpcma](https://x.com/openpcma/status/2075231962378494048), [alexandr_wang](https://x.com/alexandr_wang/status/2075232956248100895)).
- **Muse에 대한 제3자 평가**: Muse에 대한 독립/제3자 평가는 엇갈렸지만 대체로 긍정적이었다. Harvey Legal Bench, TaxEval, MedScribe, 일부 OOD eval, Terminal-Bench cluster 성능은 강했지만, 일부 코딩/cyber eval에서는 Grok 4.5나 Claude보다 약했다 ([alexandr_wang](https://x.com/alexandr_wang/status/2075233663323947120), [cline](https://x.com/cline/status/2075271057326719152), [scaling01](https://x.com/scaling01/status/2075239040127816041), [scaling01](https://x.com/scaling01/status/2075242434120786335), [scaling01](https://x.com/scaling01/status/2075239357045252334)).
- **Muse의 가격 대비 성능**: 여러 연구자는 Muse Spark 1.1의 핵심을 **price/performance**로 봤다. “cheapest frontier agent model”, 한 benchmarker 경험상 “Fable과 GPT 5.5의 1/10 비용”, 일부 self-hosted open models보다 저렴하다는 해석이 나왔다 ([alexandr_wang](https://x.com/alexandr_wang/status/2075247280928833716), [RayanKrishnan](https://x.com/RayanKrishnan/status/2075246825628660126), [kimmonismus](https://x.com/kimmonismus/status/2075248192937984126)).
- **Grok 4.5 평가**: **Grok 4.5**는 독립 eval 보도에서 계속 좋은 점수를 냈다. Artificial Analysis는 **AA-Briefcase**에서 Anthropic 외 모델 중 최고이며 **1328 Elo**, **$1.12/task**, **12.4 min/task**라고 밝혔다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075264155527901522)). 이후 Arena는 Grok 4.5를 **Code Arena: Frontend에서 #3**에 올렸다 ([arena](https://x.com/arena/status/2075301317560742373)).
- **EnterpriseOps-Gym-AA**: Artificial Analysis와 ServiceNow의 **EnterpriseOps-Gym-AA**는 8개 비즈니스 도메인과 512개 도구에 걸친 live enterprise operations를 벤치마크했다. 결과는 **Claude Fable 5**가 **51%**, **Gemini 3.5 Flash**가 **50%**, **GPT-5.5**가 **47%**, open-weights 모델 중 최고인 **GLM-5.2**가 **43%**였다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075249917912821995)).
- **도메인별 jaggedness**: 이 eval들의 더 큰 메타 포인트는 **domain-level jaggedness가 증가**하고 있다는 점이다. Artificial Analysis는 GPT-5.5가 Customer Service에서는 최고였지만 Teams에서는 약했고, Mistral Medium 3.5는 반대 패턴을 보였다고 지적했다 ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2075249921947738132)).

### Open models, infra, and agent tooling

- **Ollama 펀딩**: **Ollama**는 대규모 펀드레이즈를 발표했고, 현재 **9M+ active builders**를 제공한다며 open-model AI의 ownership layer로 포지셔닝했다 ([ollama](https://x.com/ollama/status/2075211168407503016)). 후속 코멘터리는 **67K integrations**와 **Fortune 500의 85%** 채택 주장을 인용했다 ([Theoryvc](https://x.com/Theoryvc/status/2075248325868044325)).
- **GLM-5.2 배포 현실**: **GLM-5.2**는 serious open-weights orchestrator model로 칭찬받았지만, 한 해석은 실제 효율적 배포에는 non-NVFP4 setup 기준 **8× RTX 6000 Pro** 같은 **$100k+ systems**가 여전히 필요하다고 지적했다 ([TheZachMueller](https://x.com/TheZachMueller/status/2075199901386846331), [randomjohnnyh](https://x.com/randomjohnnyh/status/2075247122199540183#m)).
- **Orchestration harness**: 반복되는 시스템 테마는 **orchestration harness**의 중요성 증가였다. [dair_ai](https://x.com/dair_ai/status/2075241322655727682)는 harness만 바꿔도 품질 parity에서 **blended cost per task 41%**, **tokens per task 38%**, **median wall-clock 44%**가 줄었다는 논문을 요약했다.
- **TRACE**: **TRACE**는 에이전트가 자신의 실패 뒤에 있는 누락 capability를 식별하고 이를 해결하도록 스스로 훈련하는 self-improvement 방법으로 소개됐다. TRACE로 훈련된 **Qwen3.6-27B** 모델은 **SWE-bench Verified에서 73.2%**를 기록해 Codex 5.2와 GLM 5를 포함한 훨씬 큰 모델을 앞섰다고 한다 ([Azaliamirh](https://x.com/Azaliamirh/status/2075245185215144410)).
- **Reachy Mini / realtime voice**: Hugging Face의 open realtime stack은 높은 GPT-realtime 비용에 대한 대응으로 제시됐다. **9k Reachy Minis**가 월 **15k conversation hours**를 생성하면 GPT-realtime은 월 **$45k**가 들지만, open replacement는 **$0.25/hour**이고 laptop에서는 무료라고 제시됐다 ([andimarafioti](https://x.com/andimarafioti/status/2075222463777042454)).
- **코딩 에이전트 도구 성숙**: **LangChain**은 Claude Code tracing을 LangSmith에 출시했다 ([LangChain](https://x.com/LangChain/status/2075233516380717246)). [hwchase17](https://x.com/hwchase17/status/2075248805767979479)는 이 흐름을 “langsmith for coding agents”라고 요약했다. **OpenWiki Brains**는 code brain 위에 범용 memory brain을 추가했다 ([BraceSproul](https://x.com/BraceSproul/status/2075277759937695979), [hwchase17](https://x.com/hwchase17/status/2075277641066938454)). **SkillCenter**는 재사용 가능한 agent skills를 위한 package manager/searchable index로 제시됐다 ([TheTuringPost](https://x.com/TheTuringPost/status/2075303983422578740)).
- **오픈소스 정책 우려**: [AdamThierer](https://x.com/AdamThierer/status/2075237102099251371), [AndrewYNg](https://x.com/AndrewYNg/status/2075271586400403567), [Dan_Jeffries1](https://x.com/Dan_Jeffries1/status/2075253735563886595)는 quasi-licensing처럼 작동해 open models를 위협할 수 있는 미국 model-review regime에 반대했다.

### Research, inference, and embodied systems

- **Speculative decoding**: Mirai Labs는 speculative decoding을 위한 hybrid draft model을 공개하며 autoregressive 대비 **4.37배 빠른** decoding과 가장 강한 공개 DFlash baseline 대비 **+24.7%**를 주장했다 ([dmitrshvets](https://x.com/dmitrshvets/status/2075248269580538081)).
- **Sparse Delta Memory**: **Sparse Delta Memory (SDM)**는 recurrent state updates에 sparse addressing을 도입해 같은 FLOPs에서 recurrent state를 **3000배 더 크게** 만들고 long-context 성능을 높였다고 주장했다 ([loiccabannes](https://x.com/loiccabannes/status/2075263591926681980), [HuggingPapers](https://x.com/HuggingPapers/status/2075319388887027924)).
- **Perceptron Egocentric**: **Perceptron Egocentric**은 로보틱스와 egocentric video를 위한 embodied reasoning/annotation API로 출시됐다. Gemini 기반 annotation pipeline 대비 SOTA, **WGO-Bench에서 +77% end-to-end F1**, per-frame detection, **21-keypoint skeletons**, left/right hand identity, subtask labels 같은 dense labels를 제공한다고 밝혔다 ([perceptroninc](https://x.com/perceptroninc/status/2075261142038196727), [AkshatS07](https://x.com/AkshatS07/status/2075265864379838729), [DataChaz](https://x.com/DataChaz/status/2075303718153789944)).
- **SensorFM**: Google Research의 **SensorFM**은 **동의한 500만 명 참가자**의 unlabeled data **1 trillion minutes**로 학습한 wearable-data foundation model이라고 주장했다. 대상은 cardiovascular, metabolic, sleep, mental health, demographic transfer tasks다 ([GoogleResearch](https://x.com/GoogleResearch/status/2075283854093607016)).
- **TypeScript 7**: **TypeScript 7**은 native Go implementation과 “최대 **10배 빠른 builds**”를 내세워 출시됐다 ([code](https://x.com/code/status/2075248861237383552)).
- **fal 이미지 생성**: **fal**은 sub-second image generation 세부 내용을 공개하며 kernel optimizations, quantization-aware distillation, timestep distillation로 **0.45s inference**를 달성했다고 밝혔다 ([fal](https://x.com/fal/status/2075284936756539813)).

### Governance, safety, and forecasting

- **EU “Chat Control” 논란**: 가장 큰 비모델 정치 이슈는 EU **“Chat Control”** 통과 주장으로, 비판자들은 영장 없이 메시지, 이메일, 사진 스캔을 합법화한다고 프레이밍했다. 높은 참여를 얻은 비판은 [levelsio](https://x.com/levelsio/status/2075210426875249056)에서 나왔고, [perrymetzger](https://x.com/perrymetzger/status/2075226601298514418)와 [teortaxesTex](https://x.com/teortaxesTex/status/2075252134723928180)의 추가 코멘터리도 있었다. 이 트윗들은 강한 표현의 정치적 주장으로, 중립적 법률 요약이 아니라 activist framing으로 읽어야 한다.
- **AI 2040: Plan A**: AI Futures Project의 **AI 2040: Plan A**는 큰 논의를 낳았다. 지지적 반응은 [DKokotajlo](https://x.com/DKokotajlo/status/2075251618728292464), [thlarsen](https://x.com/thlarsen/status/2075252396616474882), [RyanGreenblatt](https://x.com/RyanGreenblatt/status/2075254312260055307), [idavidrein](https://x.com/idavidrein/status/2075264177002996017), [NeelNanda5](https://x.com/NeelNanda5/status/2075271483207872874)에서 나왔다.
- **비판적/혼합 반응**: 더 비판적이거나 혼합된 반응은 proposal의 암시적 global inequality에 반대한 [scaling01](https://x.com/scaling01/status/2075259586588619023), 그리고 critique에 도움을 줬음에도 여전히 심각한 이견이 있다고 말한 [RichardMCNgo](https://x.com/RichardMCNgo/status/2075301126921175166)에서 나왔다.
- **모델 행동 평가**: model-behavior evaluation에서 **Transluce**는 capability benchmarks뿐 아니라 “in the world”에서의 모델 행동을 평가하는 open scientific ecosystem이 필요하다고 주장했다 ([TransluceAI](https://x.com/TransluceAI/status/2075271925665063046)).
- **투명성 논쟁**: OpenAI의 GPT-5.6 출시는 frontier-lab transparency 논쟁도 다시 열었다. [yonashav](https://x.com/yonashav/status/2075286161241612664)는 외부 안전성 발표 허용을 칭찬했고, UK AISI 발견은 감시 수준을 높였다.

### Image, media, and multimodal ecosystem

- **Reve 2.1**: **Reve 2.1**은 **Text-to-Image Arena에서 #2**로 올라섰고 점수는 **1306**으로 Reve 2.0보다 **+28** 높았다. Single-Image Edit Arena에서도 **1386**으로 **#8**에 올랐다 ([arena](https://x.com/arena/status/2075251593277300787), [arena](https://x.com/arena/status/2075251596737568886), [reve](https://x.com/reve/status/2075254468996940216)).
- **BytePlus Lumina / Seedream 5.0 Pro**: **BytePlus Lumina / Seedream 5.0 Pro**는 단순 이미지 생성기가 아니라 editable layers, multilingual rendering, infographics, text handling을 갖춘 design-work model로 포지셔닝됐다 ([kimmonismus](https://x.com/kimmonismus/status/2075281603396583592)).
- **Runway Dev**: **Runway Dev**는 Seed Audio 1.0, Seedance Mini/4K, Google Omni Flash, Seedream 5.0 Pro 등 여러 media model을 추가했다 ([runwayml](https://x.com/runwayml/status/2075244036986740987)).
- **Netflix open-video 기여**: **Netflix**가 Hugging Face에 video datasets/models를 공개한 것은 의미 있는 open-video contribution으로 언급됐다 ([ClementDelangue](https://x.com/ClementDelangue/status/2075294232001093977)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Chinese Open Models

- **[China’s MiniMax Plans to Launch 2.7-Trillion Parameter Model](https://www.reddit.com/r/LocalLLaMA/comments/1uqnqsc/chinas_minimax_plans_to_launch_27trillion/)** (Activity: 1058): **MiniMax**가 차세대 LLM **M3 Pro**를 빠르면 **Q3**에 release 및 open-source할 계획이라는 보도다. 매개변수는 **`2.7T`**로 현재 **M3 (`428B`)**보다 약 **`6.3×`** 크며, 출처는 [The Information](https://www.theinformation.com/briefings/exclusive-chinas-minimax-plans-launch-2-7-trillion-parameter-model)이다. 목표 개선점은 **complex reasoning**과 **multi-step instruction/task handling**이지만 architecture, training data, eval, context length, MoE/dense breakdown, inference cost 수치는 제공되지 않았다. 댓글은 개인이 `2.7T` 모델을 self-host하지 못하더라도 open weights가 datacenter/API provider의 더 저렴한 접근을 가능하게 할 수 있다고 봤고, DeepSeek처럼 작은 “mini” 또는 “flash” variant가 나오길 기대했다.

- **[GLM-5.2 fearmongering in the press](https://www.reddit.com/r/LocalLLaMA/comments/1urhzox/glm52_fearmongering_in_the_press/)** (Activity: 799): 이 글은 **GLM-5.2**가 다운로드 가능/open-source이고 “virtually any hardware”에서 실행될 수 있어 사이버보안 위험이라는 [Futurism article](https://futurism.com/artificial-intelligence/open-source-ai-model-scary-mythos)을 비판한다. 해당 기사는 **Semgrep**과 **Graphistry** findings, Semgrep의 *“We Have Mythos at Home”* benchmark 등을 근거로 들었다. 댓글의 핵심 반박은 hardware claim이었다. frontier-scale 모델의 의미 있는 추론(inference)은 오래된 소비자 CPU laptop이 아니라 고가 GPU setup이 필요하며, **`1-bit` 또는 `2-bit` quantization**은 심각하게 degraded되어 full-precision 수준으로 취급할 수 없다는 것이다. 보안 관점에서는 advanced model이 exploitation에 도움을 준다면 제한보다 **defensive vulnerability discovery, patching, auditing**에 같은 수준의 모델을 쓰는 것이 기술적 대응이라는 의견이 나왔다.

- **[Unsloth has uploaded several sizes of Deepseek-V4-Flash GGUF's](https://www.reddit.com/r/LocalLLaMA/comments/1uq9krm/unsloth_has_uploaded_several_sizes_of/)** (Activity: 611): **Unsloth**가 여러 **DeepSeek-V4-Flash GGUF** quantization을 공개했다. 현재 inference에는 DeepSeek V4 checkpointing fix가 들어간 특정 `llama.cpp` fork/branch인 [`danielhanchen/llama.cpp@deepseek-v4-checkpointing-fix`](https://github.com/danielhanchen/llama.cpp/tree/deepseek-v4-checkpointing-fix)가 필요하다고 댓글들이 지적했다. 이는 upstream support가 아직 미성숙하고 patched backend에 성능과 안정성이 크게 의존할 수 있음을 뜻한다. **8× RTX 3090**에서 `DeepSeek-V4-Flash-UD-Q4_K_XL`은 `144.44 GiB`, `284.33B` 모델, CUDA `NGL=99` 기준 `pp512` prefill `258.77 ± 2.23 t/s`, `tg128` generation `19.73 ± 0.24 t/s`를 보였다. Framework 16 사용자는 `96GB DDR5`와 `8GB GDDR6 RX 7700S`로 dense layer를 7700S에, experts를 integrated 780M에 배치해 약 `~70 TPS` prefill과 `~7 TPS` generation, 약 `~100 W` inference TDP를 보고했다. 관련 backend는 [danielhanchen/llama.cpp `deepseek-v4-checkpointing-fix`](https://github.com/danielhanchen/llama.cpp/tree/deepseek-v4-checkpointing-fix)다.

- **[What China Said at the UN’s First Global Dialogue on AI Governance](https://www.reddit.com/r/LocalLLaMA/comments/1ur4tz5/what_china_said_at_the_uns_first_global_dialogue/)** (Activity: 571): Geneva에서 열린 UN의 첫 **Global Dialogue on AI Governance**에서 중국 MIIT 장관 **Li Lecheng**은 UN을 AI governance의 주된 장소로 제시하고, Global South capacity-building, consensus-based standards, AI development와 safety의 균형을 강조했다 ([article](https://www.geopolitechs.org/p/what-china-said-at-the-uns-first)). 중국은 **open-source AI**를 global public good으로 명시적으로 지지했고 **DeepSeek**과 **Qwen**이 AI adoption cost를 낮춘 사례라고 언급했다. 또한 fragmented governance regimes, exclusive blocs, supply-chain bifurcation에 반대했다. 댓글은 대부분 Sam Altman/OpenAI와 “llama.ccp”에 대한 농담 등 sarcastic하거나 meme 중심이었고, 실질적 기술 토론은 거의 없었다.

### /r/LocalLlama + /r/localLLM: Local LLM Coding and RAG Benchmarks

- **[Qwen3.6-27b does not understand software architechure.](https://www.reddit.com/r/LocalLLaMA/comments/1uqzjdy/qwen3627b_does_not_understand_software/)** (Activity: 789): 글쓴이는 **Qwen3.6-27B**가 `100k+ LOC` 상용 codebase의 대규모 software engineering task에서 poor performance를 보인다고 보고했다. local request를 만족하는 코드를 만들지만 separation of concerns, test automation, SRP, interface granularity, maintainability 같은 architectural constraints를 무시한다는 것이다. 작성자는 production-grade pattern으로 유도할 software-architecture guidance를 담은 재사용 가능한 [`SKILL.md`](http://SKILL.md) 파일을 요청했다. 댓글들은 이것이 Qwen만의 문제가 아니라 현재 LLM이 architecture를 “understand”하지 못하며 unstated design requirement를 추론하길 기대해서는 안 된다고 봤다. 권장 workflow는 architecture docs/context를 명시적으로 제공하고, 먼저 technical architecture report를 만들게 한 뒤, 코드 생성 후 *“what would you have done differently?”* 같은 review prompt로 `5–6`회 iterate하는 방식이었다.

- **[Can you trust local models to answer accurately?](https://www.reddit.com/r/LocalLLaMA/comments/1uqpxgp/can_you_trust_local_models_to_answer_accurately/)** (Activity: 584): 이미지는 **“Accuracy & Memory Across Local Models”** benchmark table로, **Node, LangChain.js, TypeScript, Transformers.js, Vue** 문서에서 생성한 `7,648`개 multiple-choice technical questions로 local LLM을 평가한다. unsupported local-model accuracy는 grounded run보다 훨씬 낮지만 **RAG가 결과를 크게 개선**했다. 예를 들어 **Apple Intelligence / AFM 2 3B on-device**는 약 `4k` context limit에도 No RAG `60.2%`에서 With RAG `86.2%`로 올랐고, **Qwen 3.6 27B** 같은 더 큰 local model은 RAG 사용 시 약 `96.9%`에 도달했다. chart는 [here](https://i.redd.it/swjfgszdqzbh1.png)에서 볼 수 있다. 댓글은 Gemma 31B와 Qwen 27B가 RAG 없이도 `82%+` accuracy를 낸 점을 큰 진전으로 봤고, 정확도가 중요한 기술 답변에는 browser/search tooling이나 RAG가 필수라는 데 대체로 동의했다.

- **[This is what Hy3 is capable of. Mother of god.](https://www.reddit.com/r/LocalLLaMA/comments/1uqbug5/this_is_what_hy3_is_capable_of_mother_of_god/)** (Activity: 459): 한 사용자는 **OpenRouter의 Hy3 (free)**를 빈 `opencode` harness에서 실행해 *“create a beautiful, relaxing flight simulator in a single html page”*라는 단일 prompt로 single-page HTML “relaxing flight simulator”를 생성했다고 보고했다. 결과 demo는 [CodePen](https://codepen.io/Captain-Blackbeard/pen/EaZQKWX)에 있다. 기술적 피드백은 collision handling 부재, horizontally inverted controls, tutorial-like terrain generator, basic camera/controller logic, simple colored geometry 등 largely stock components를 지적했다. 한 댓글은 one-shot **Fable** 결과인 [pilotwings.vercel.app](https://pilotwings.vercel.app)와 비교하며, Fable이 더 정확한 flight physics를 만들었고 **Minimax M2.7/M3** 및 local **Qwen**보다 나았다고 주장했다. 같은 비교 링크는 https://pilotwings.vercel.app 이다. 다른 댓글은 single-sentence prompt 결과로는 강하며 지난 `6 months` 동안 code/game generation이 크게 발전했다고 평가했다.

### Less Technical AI Subreddits: Grok 4.5 Launch and Coding Benchmarks

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Grok 4.5 is live](https://www.reddit.com/r/singularity/comments/1ur06sj/grok_45_is_live/)** (Activity: 1343): 이 글은 benchmark table image인 [image](https://i.redd.it/3s6zt3uvn1ch1.jpeg)를 통해 **“Grok 4.5 is live”**를 알린다. 강조된 **Grok 4.5** column은 Terminal-Bench 2.1 `83.3%`, SWE-Bench Multilingual `78.0%`, DeepSWE 1.0 `62.0%`, SWE-Bench Pro `64.7%`를 보고하며, software-engineering benchmark에서 일부 frontier competitor보다 약간 뒤지만 competitive하다고 포지셔닝한다. 댓글은 raw benchmark rank보다 cost/performance에 집중했고, `$2/$6` pricing을 “real surprise”라고 불렀다. xAI의 [pricing/efficiency](https://x.ai/news/grok-4-5#pricing) claim, 즉 현 frontier model 대비 최대 `2×` 효율 우위를 핵심으로 봤다.

- **[Introducing Grok 4.5](https://www.reddit.com/r/singularity/comments/1ur0ye6/introducing_grok_45/)** (Activity: 1160): **xAI/SpaceXAI**는 [Grok 4.5](https://x.ai/news/grok-4-5)를 coding, agentic workflows, technical knowledge work용 large model로 발표했다. curated technical data와 `tens of thousands` of NVIDIA GB300 GPU를 사용한 multi-step engineering task 대규모 RL로 학습됐다고 설명한다. 발표는 강한 SWE/terminal benchmark performance, `80 TPS` serving, Opus 4.8의 SWE Bench Pro task당 `~67k` 대비 약 `15.9k` output tokens라는 output-token efficiency, **`$2/M` input tokens** 및 **`$6/M` output tokens** pricing, Grok Build/Cursor/API console 제공을 주장했다. 댓글은 token efficiency를 cost/performance differentiator로 봤고, Anthropic 모델이 token당 가격뿐 아니라 “fluff” 때문에 비싸다는 의견도 있었다. 유럽에서는 `grok-4.5`가 *“The model grok-4.5 is not available in your region”*을 반환한다는 availability issue도 보고됐다.

- **[Grok-4.5 on par with gpt-5.5-xhigh in coding at half the cost](https://www.reddit.com/r/singularity/comments/1ur6bie/grok45_on_par_with_gpt55xhigh_in_coding_at_half/)** (Activity: 1058): 이미지는 [**“Artificial Analysis Coding Agent Index vs. Cost per Task”**](https://i.redd.it/jjyo98j1q2ch1.png) scatter plot으로, **Grok Build – Grok 4.5**가 “most attractive quadrant”에 배치돼 **Codex – GPT-5.5 xhigh**와 거의 유사한 coding-agent index를 보이면서 작업당 비용은 약 절반임을 나타낸다. 댓글은 혼합적이었다. 한 사용자는 hands-on coding test에서 **Grok-4.5**가 **GPT-5.5**와 **Opus 4.8**에 가까웠고, routine coding에는 **Sonnet 5** 또는 **GPT-5.4**를 쓰지만 Grok-4.5가 낮은 비용의 daily coding model이 될 수 있다고 했다. 다른 사용자는 benchmark의 inference setting이 명확하지 않다며 Grok Build의 `medium` setting과 비교의 어려움을 지적했다.

- **[Gemini is even worse than grok now🥀🥀🥀](https://www.reddit.com/r/GeminiAI/comments/1urj9sq/gemini_is_even_worse_than_grok_now/)** (Activity: 1103): 이미지인 [image](https://i.redd.it/r037ju88q5ch1.jpeg)는 **Artificial Analysis**의 **“Intelligence Index”**와 **“Coding Agent Index”** model ranking screenshot이다. 강조된 bar는 **Grok 4.5**가 intelligence `54`, **Grok Build / Grok 4.5**가 coding `76`인 반면, **Gemini CLI / Gemini 3.1 Pro**는 coding chart에서 `43`으로 훨씬 낮게 보인다. 댓글은 Grok의 점수가 “very respectable”하며 새 Grok release와 이전 Gemini generation을 비교하는 것은 misleading할 수 있다고 반박했다. 한 댓글은 `07/17`에 **“Gemini 3.5”**가 예상된다고 주장했다. 또 다른 기술적 반박은 약 6개월 된 Gemini 3.1 Pro가 별도 Artificial Analysis view에서 accuracy와 hallucination rate에서는 Grok보다 낫다는 것이었다: https://artificialanalysis.ai/?media-leaderboards=video-editing&omniscience=omniscience-index#omniscience-tabs. 여러 댓글은 benchmark contamination/overfitting 가능성도 제기했다.

### Less Technical AI Subreddits: Claude Platform Updates

- **[Anthropic just benchmarked "Fable 5 orchestrates, cheap models execute": 96% of the performance at 46% of the cost. You can run this pattern in Claude Code today](https://www.reddit.com/r/ClaudeAI/comments/1ur2ml9/anthropic_just_benchmarked_fable_5_orchestrates/)** (Activity: 1709): 이 글은 Anthropic/ClaudeDevs multi-agent benchmark를 인용한다. **Fable 5 orchestrator + Sonnet 5 workers**는 BrowseComp에서 all-Fable 대비 `96%` 성능을 `46%` 비용으로 달성했다 (`86.8%` vs `90.8%` accuracy; `$18.53` vs `$40.56`/problem). **Sonnet 5 executor consulting Fable 5**는 SWE-bench Pro에서 약 `92%` 성능을 약 `63%` 비용으로 얻었다 ([thread](https://x.com/ClaudeDevs/status/2074606058128224365), [docs](https://platform.claude.com/docs/en/managed-agents/multi-agent)). 작성자는 이를 Claude Code의 per-subagent `model:` frontmatter, per-agent `effort:`, `CLAUDE.md` delegation policy로 매핑했다. `v2.1.198` 이후 built-in `Explore` subagent가 main-session model을 inherit하므로 user-level `Explore`를 `haiku`에 pinning해 shadow하지 않으면 비용 문제가 생긴다고 경고했다. 이 패턴은 **pilotfish**라는 six-role Claude Code setup으로 packaged됐고, scouts, executors, verifier, security role, install/uninstall notes, quota caveats를 포함한다 ([GitHub](https://github.com/Nanako0129/pilotfish), 더 깊은 quota writeup은 [r/ClaudeCode](https://www.reddit.com/r/ClaudeCode/comments/1uqyu9x/til_the_builtin_explore_subagent_silently_bills/)). 댓글은 이것이 essentially standard agent routing이라고 봤지만, Claude Code가 coordinator control over `effort`를 아직 제공하지 않는 점을 지적했다.

- **[5 hour and weekly limits have been reset. Thanks Anthropic!](https://www.reddit.com/r/ClaudeAI/comments/1urzmj0/5_hour_and_weekly_limits_have_been_reset_thanks/)** (Activity: 1269): 이미지는 meme이 아니라 검증된 **ClaudeDevs** X post screenshot으로, *“We’ve reset 5-hour and weekly rate limits for all users”*라고 적혀 있다 ([image](https://i.redd.it/djfpk4js49ch1.jpeg)). 이 Reddit 글은 **Anthropic/Claude usage quota reset**이 `5-hour` short-window limit과 `weekly` limit 모두에 영향을 준다고 언급한다. screenshot이나 댓글에는 기술적 이유가 제공되지 않아 “5.6”과의 연결은 speculative하다. 댓글은 timing과 competitive pressure를 추측했고, 한 댓글은 OpenAI에 감사해야 한다고 농담했다.

- **[New Claude Certifications Introduced Today](https://www.reddit.com/r/ClaudeAI/comments/1uqvxxm/new_claude_certifications_introduced_today/)** (Activity: 1131): 이미지 [jpeg](https://i.redd.it/6jeczgftx0ch1.jpeg)는 **Anthropic/Claude Partner Academy**가 `8-Jul` 날짜의 세 certification tracks를 소개하는 화면이다. **Claude Certified Associate**와 **Claude Certified Developer**는 *Foundations* level, **Claude Certified Architect**는 *Professional* level이다. post/comments는 certification label과 intended audience 외에 hard technical curriculum detail, benchmark requirement, implementation standard를 제공하지 않는다. 댓글은 이것이 실제 architecture expertise를 뜻하는지 회의적이었다. 한 사용자는 **Claude Architect** certification의 “high stakes refactor” 관리 정답이 Claude `plan mode` 사용처럼 보였다고 비판하며, true software architecture certification보다 vendor enablement/customer training에 가깝다고 했다.

### Less Technical AI Subreddits: GPT-5.6 Sol Launch and Competitive Pressure

- **[GPT-5.6 Sol, along with Terra and Luna, will launch publicly this Thursday.](https://www.reddit.com/r/OpenAI/comments/1uqhviv/gpt56_sol_along_with_terra_and_luna_will_launch/)** (Activity: 1055): 이미지는 **OpenAI**가 **“GPT-5.6 Sol”**을 companion model 또는 variant인 **“Terra”**, **“Luna”**와 함께 Thursday에 공개 출시하고 expanded global preview access를 제공한다는 announcement-style screenshot이다 ([image](https://i.redd.it/y2zyo1q4kxbh1.png)). post/comments에는 benchmark, architecture detail, pricing, API spec, context length, capability comparison이 없어서 기술적 의미는 evaluable technical disclosure가 아니라 purported model-release announcement에 가깝다. 댓글은 market competition과 naming에 집중했고, Anthropic이 “fable” access를 계속 열어둘 압박이 될 수 있다는 의견과 OpenAI naming이 다시 혼란스러워졌다는 비판이 나왔다.

- **[The only smart decision Anthropic can do is reset Fable 5 limits just before GPT-5.6 launch](https://www.reddit.com/r/ClaudeAI/comments/1uqnf71/the_only_smart_decision_anthropic_can_do_is_reset/)** (Activity: 922): [image](https://i.redd.it/0cydtjab2zbh1.png)는 **“GPT-5.6 Sol”**과 companion labels **“Terra”**, **“Luna”**가 담긴 apparent OpenAI launch post screenshot이다. Reddit title은 이를 **Anthropic**이 Thursday launch 전에 **Fable 5** weekly usage limit을 reset하거나 extend해야 한다는 competitive pressure로 해석한다. 댓글은 Anthropic의 retention move가 temporary reset이 아니라 paid accounts에서 **Fable 5**를 계속 제공하는 것이어야 한다고 봤다. “12 July”까지 availability를 연장해도 이미 quota를 쓴 사용자는 쓸 수 없으므로, model-retention window와 quota accounting을 별도로 다루는 것이 operationally ineffective하다는 complaint가 반복됐다.

---

## AI Discord Recap

### 접근 중단

- **Discord 접근 중단**: Discord가 오늘 접근을 차단했다. 이 형식으로는 다시 가져오지 않겠지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
