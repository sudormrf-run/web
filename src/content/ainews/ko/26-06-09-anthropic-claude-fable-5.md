---
title: "Claude Fable 5와 Mythos 5 공개"
summary:
  - "Anthropic이 Claude Fable 5를 공개"
  - "Mythos 5 제한 접근 논란 확산"
  - "Fable 5가 코딩 벤치마크 선도"
  - "숨은 성능 제한이 신뢰 논쟁 촉발"
  - "Cohere가 North Mini Code 공개"
date: 2026-06-09
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-09-anthropic-claude-fable-5.md"
hasHeadline: false
headline: "Claude Fable 5와 Mythos 5 공개"
tags:
  - Anthropic
  - Claude
  - Fable 5
  - Mythos 5
  - AI Safety
isFeatured: false
---

## 헤드라인: Claude Fable 5와 Mythos 5 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic이 Claude Fable 5를 일반 공개하고 Claude Mythos 5를 제한 접근 모델로 공개했다. Fable 5는 코딩과 장기 에이전트 작업 벤치마크에서 강한 성능을 보였지만, 일부 프런티어 AI 개발 요청에서 사용자가 알 수 없는 성능 제한이 적용된다는 점이 신뢰와 개방성 논쟁을 촉발했다.

---

## AI Twitter Recap

### Top Story: Anthropic Claude Fable 5와 Mythos 5 출시

- **발표 내용**: Anthropic은 **Claude Fable 5**를 “처음으로 일반 공개되는 Mythos급 모델”이라고 공식 발표하며, 이전에 광범위하게 제공한 어떤 모델보다 뛰어나고 **테스트한 거의 모든 벤치마크에서 최첨단(state-of-the-art)**이라고 밝혔다 [@claudeai](https://x.com/claudeai/status/2064394146916229443), [@claudeai](https://x.com/claudeai/status/2064394151441863006)
- **모델 관계**: Anthropic은 **Fable 5가 Mythos 5와 같은 기반 모델에 추가 안전장치를 더한 버전**이며, 일부 사이버/바이오/화학/증류 관련 프롬프트는 **Claude Opus 4.8**로 라우팅될 수 있다고 밝혔다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064428347678220691), [@scaling01](https://x.com/scaling01/status/2064398688802205900)
- **Fallback 정책**: Anthropic은 잠재적으로 유해한 “좁은 범위”의 주제에서는 **질문이 투명하게 Opus 4.8로 fallback**된다고 설명했고, 초기 사용자 안내 기준으로 **세션의 95% 이상은 이를 보지 않는다**고 주장했다 [@claudeai](https://x.com/claudeai/status/2064394155258765783), [@mikeyk](https://x.com/mikeyk/status/2064392996288901392)
- **SDK 지원**: Anthropic 개발자 안내는 fallback이 서버 측과 **Python, TypeScript, Go, Java, C#** SDK 미들웨어를 통해 제공된다고 밝혔다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064428351029449214)
- **가격**: **Fable 5와 Mythos 5 모두** 가격은 **입력 토큰 100만 개당 $10, 출력 토큰 100만 개당 $50**로 보고됐다. 캐시 가격은 이후 제3자 평가자들이 **캐시 쓰기 100만 개당 $12.50, 캐시 읽기 100만 개당 $1**로 보고했다 [@scaling01](https://x.com/scaling01/status/2064394893603049625), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **컨텍스트**: Artificial Analysis에 따르면 Fable 5는 Anthropic의 **100만 토큰 컨텍스트 창**을 유지했다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **구독 접근**: Anthropic은 Fable 5를 **6월 22일까지 Pro, Max, Team, 좌석 기반 Enterprise 플랜**에 넣었고, 이후에는 용량 제약 때문에 **사용량 크레딧**이 필요하다고 밝혔다. 나중에 더 넓은 구독 접근을 복구할 계획이라고도 했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064394931033248226), [@scaling01](https://x.com/scaling01/status/2064394893603049625), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992), [@kimmonismus](https://x.com/kimmonismus/status/2064388066354028986)
- **출시 혼선**: 임시 포함 정책을 둘러싼 혼란은 즉각적이었다. 사용자들은 “6월 22일까지 포함”이 무엇을 뜻하는지 물었고 Anthropic 직원들이 롤아웃을 설명했다 [@dejavucoder](https://x.com/dejavucoder/status/2064393509990523102), [@TheAmolAvasare](https://x.com/TheAmolAvasare/status/2064393574431764928)
- **Rate limit 초기화**: Anthropic은 이후 높은 수요가 몰리자 제품 전반의 **5시간 및 주간 rate limit**을 초기화했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064464557951852643)

### 공식 주장과 제3자 벤치마크 데이터

- **Anthropic 주장**: Fable 5는 특히 **소프트웨어 엔지니어링, 지식 작업, 과학 연구, 비전**에서 강하며, **작업 길이와 복잡도가 커질수록 우위가 커진다**고 Anthropic은 밝혔다 [@claudeai](https://x.com/claudeai/status/2064394151441863006)
- **CursorBench**: Cursor는 Fable 5가 **CursorBench SOTA 72.9%**를 기록해 **이전 최고 기록보다 8포인트** 높았다고 밝혔다 [@cursor_ai](https://x.com/cursor_ai/status/2064394824313376787)
- **FrontierCode**: Cognition은 Fable 5가 **FrontierCode #1**에 올랐으며 Devin Cloud Ultra, Desktop, CLI에 통합됐다고 밝혔다 [@cognition](https://x.com/cognition/status/2064398549073453266), [@cognition](https://x.com/cognition/status/2064398551539761387)
- **Terminal-Bench**: Cline은 Fable 5가 **Terminal-Bench 2.1에서 88.0%**를 기록해 GPT-5.5를 **4.6포인트** 앞섰다고 보고했다 [@cline](https://x.com/cline/status/2064427461212045546)
- **Intelligence Index**: Artificial Analysis는 Fable 5를 **Intelligence Index 64.9점으로 #1**에 올렸고, 이는 **GPT-5.5보다 약 5점 앞선** 수준이며 Anthropic이 상위 두 자리를 차지했다고 밝혔다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **GDPval-AA**: Artificial Analysis는 **GDPval-AA Elo 1932**로 실제 지식 작업형 에이전트 평가에서 #1이라고 보고했다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064414308289937869)
- **Humanity’s Last Exam**: Artificial Analysis는 Fable 5가 **Humanity’s Last Exam에서 53%**를 기록해 다음 최고 모델보다 **7포인트 이상** 앞섰고, HLE 작업의 **9%에서 fallback**이 발생했다고 밝혔다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **Fallback 비율**: Intelligence Index 작업 전반에서 **약 8% fallback 라우팅**이 발생했으며, 주로 과학 질문에서 나타났다고 보고됐다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **세션 평균**: Anthropic은 fallback이 평균적으로 **세션의 5% 미만**에서 발생한다고 밝혔다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064414308289937869)
- **SWE-Bench Pro**: 커뮤니티 벤치마크 요약은 코딩에서 큰 격차를 강조했다. **SWE-Bench Pro: Fable 5 80.3% vs GPT-5.5 58.6%** [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2064396097075003739)
- **FrontierCode Diamond**: **FrontierCode Diamond: Mythos 5 30.9% vs 2위 13.4%** [@scaling01](https://x.com/scaling01/status/2064391295620010383)
- **ECI**: **Mythos 5의 Anthropic ECI 161.29** [@scaling01](https://x.com/scaling01/status/2064392088003756431)
- **모델 크기 추정**: Artificial Analysis는 Fable 5의 **AA-Omniscience** 지식 벤치마크 상승이 **이전 공개 Anthropic 모델보다 더 큰 모델**일 가능성을 시사할 수 있다고 봤지만, 이는 확인된 사양이 아니라 추론이라고 덧붙였다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)

### 제품 동작, 사용 프로필, 배포 세부사항

- **장기 작업 모델**: Anthropic 직원과 초기 사용자들은 Fable 5를 **매우 길고 높은 노력(high-effort)이 필요한 작업**용 모델로 반복해서 설명했다. 사용자들은 작업을 주는 방식에서 **목표/책임을 맡기는 방식**으로 이동하고 있다고 말했다 [@felixrieseberg](https://x.com/felixrieseberg/status/2064392202504310900), [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064399512664526853), [@alexalbert__](https://x.com/alexalbert__/status/2064467657483829441)
- **프롬프트 운영**: Anthropic은 사용자가 기본값을 **xhigh/high effort**로 두고, 기존 CLAUDE.md 지침을 다시 작성하며, 모델이 더 많은 판단을 하게 하라고 조언했다 [@alexalbert__](https://x.com/alexalbert__/status/2064467657483829441)
- **멀티 에이전트**: Anthropic 개발자 메시지는 **멀티 에이전트 오케스트레이션**을 강조했다. Claude Managed Agents에서 Fable이 더 작은 모델에 작업을 위임하는 방식이다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064394928948703406)
- **비용과 속도**: 여러 테스터는 Fable을 **느리고, 토큰을 많이 쓰며, 비싸지만** 이례적으로 유능하다고 묘사했다. Dan Shipper는 작업에서 **50만~100만 토큰**을 일상적으로 사용하며 무거운 작업에 아껴 쓰는 것이 좋다고 말했다 [@danshipper](https://x.com/danshipper/status/2064393970856124501)
- **사용감**: Simon Willison은 Fable을 “느리고, 비싸고, 유능하다”고 표현했다 [@simonw](https://x.com/simonw/status/2064501565738930433)
- **한도 문제**: Theo는 빠르게 한도에 도달했고, 이후 Anthropic의 rate-limit 초기화를 반겼다 [@theo](https://x.com/theo/status/2064442054772716020), [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064464557951852643)
- **장기 엔지니어링 작업**: Ethan Mollick은 **15페이지 설계 문서**를 넘기면 Fable이 **9시간 이상** 작업할 수 있다고 말했다 [@emollick](https://x.com/emollick/status/2064395281903346013)
- **대규모 마이그레이션 주장**: Kimmonismus는 Stripe가 Fable로 **5천만 줄 Ruby 마이그레이션을 하루 만에** 수행했다는 Anthropic의 주장을 강조했다. 이는 **팀 전체가 두 달 넘게** 걸렸을 작업을 대체했다는 설명이다 [@kimmonismus](https://x.com/kimmonismus/status/2064401121515274747)
- **성능 개선 사례**: Victor Taelin은 Fable이 미묘한 버그를 찾아냈고 한 사례에서 최대 **1770% 속도 향상**을 냈다고 보고했다. 다만 정확성은 여전히 직접 감사해야 한다고 했다 [@VictorTaelin](https://x.com/VictorTaelin/status/2064448425936994742)
- **벤더 측 주장**: Anthropic 관련 게시물은 **430배 커널 속도 향상**, **69배 self-training 속도 향상**, **10배 drug-design 가속**을 언급했다. 다만 이는 벤치마크/시스템 카드 해석에서 나온 것으로, 독립 재현 전까지는 벤더 측 주장으로 봐야 한다 [@scaling01](https://x.com/scaling01/status/2064392386520780945), [@scaling01](https://x.com/scaling01/status/2064392809293939119), [@scaling01](https://x.com/scaling01/status/2064394250142265367)
- **생태계 롤아웃**: Fable 5는 즉시 **Cursor, Devin, Notion, Microsoft Foundry, GitHub Copilot App/CLI, Cline, Replit, Base44, MagicPath, Arena, MCP Atlas** 등에 등장했다 [@cursor_ai](https://x.com/cursor_ai/status/2064394824313376787), [@cognition](https://x.com/cognition/status/2064398549073453266), [@NotionHQ](https://x.com/NotionHQ/status/2064397568696819984), [@Azure](https://x.com/Azure/status/2064421301108834552), [@pierceboggan](https://x.com/pierceboggan/status/2064402677614911818), [@cline](https://x.com/cline/status/2064427461212045546), [@pirroh](https://x.com/pirroh/status/2064408022651191613), [@ScaleAILabs](https://x.com/ScaleAILabs/status/2064473993919537578)

### 안전 아키텍처와 주요 논란

- **핵심 논쟁**: 가장 큰 논쟁은 Fable/Mythos가 강력한지 여부가 아니라, Anthropic이 일부 프런티어 AI 개발 작업에서 유용성을 조용히 낮추기로 한 결정이었다.
- **숨은 개입**: 여러 사용자가 공유한 Anthropic 시스템 카드 문구에 따르면, Fable 5가 **프런티어 LLM 개발**에 사용될 때 Anthropic은 **프롬프트 수정, steering vectors, PEFT**를 통해 **모델의 효과를 제한**할 수 있으며, 사용자는 **통지받지 않는다**. Anthropic은 이것이 트래픽의 약 **0.03%**에 영향을 준다고 추정했다 [@Hangsiin](https://x.com/Hangsiin/status/2064397550434816088), [@kimmonismus](https://x.com/kimmonismus/status/2064417460715962479)
- **보안 라우팅**: Anthropic은 별도로 **사이버보안과 바이오보안** 요청을 Opus 4.8로 자동 재라우팅한다고 공개했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064394931033248226)
- **중요한 차이**: 일부 위험한 질문은 눈에 보이게 Opus로 재라우팅되고 Opus로 과금되는 반면, **프런티어 LLM 개발 요청은 재라우팅이나 거부가 아니라 조용히 약화될 수 있다**는 점이 핵심이다.
- **비판 1**: 비판자들은 이것이 연구와 엔지니어링 워크플로에 **기록되지 않는 교란 요인(confounder)**을 만든다고 주장했다. “유료 제품에서 조용한 핸디캡은 있어서는 안 된다” [@nrehiew_](https://x.com/nrehiew_/status/2064400440264179923)
- **비판 2**: “사용자에게 알리지 않고 ML 연구 성능을 저하시키는 것은 충격적으로 적대적이다” [@deanwball](https://x.com/deanwball/status/2064434861088395730)
- **비판 3**: “안전 개입은 가시적이고, 감사 가능하며, 귀속 가능해야 한다” [@MattGibsonMusic](https://x.com/MattGibsonMusic/status/2064518301888512486)
- **비판 4**: 모든 나쁜 결과가 모호해지기 때문에 “이것이 신뢰의 붕괴”라는 주장도 나왔다 [@MattGibsonMusic](https://x.com/MattGibsonMusic/status/2064518301888512486)
- **오픈 연구 우려**: 여러 연구자는 이를 오픈 연구와 오픈 웨이트에 대한 **반경쟁적 사다리 걷어차기**로 해석했다. “연구소들이 사다리를 걷어 올리기 시작했다” [@natolambert](https://x.com/natolambert/status/2064404993193754830)
- **오픈소스 경고**: “오픈소스 AI를 보호하고 키워야 한다는 가장 큰 경종”이라는 반응도 있었다 [@rasdani_](https://x.com/rasdani_/status/2064409800641859747)
- **연구 제한 해석**: “그들이 말한 AI 연구 중단은 *당신의* AI 연구를 멈추라는 뜻이었다” [@bayeslord](https://x.com/bayeslord/status/2064437399292203401)
- **계층화 우려**: “독창적 사상가들이 하층 계급이 되어서는 안 된다”는 반응도 나왔다 [@marksaroufim](https://x.com/marksaroufim/status/2064428421774753943)
- **권력 집중**: “권력, 역량, 경제적 부의 집중이 AI에서 가장 큰 위험”이라는 지적도 있었다 [@ClementDelangue](https://x.com/ClementDelangue/status/2064513229099876663)
- **분류기 경계 문제**: 여러 사용자는 분류기 경계가 너무 넓거나 오류가 많다고 우려했다. 한 사용자는 “cancer라는 단어가 바이오보안 위험으로 표시된다”고 말했다 [@DeryaTR_](https://x.com/DeryaTR_/status/2064414826122866707)
- **과잉 차단 사례**: 다른 사용자는 Fable이 “심장은 무엇을 하나요?”에도 답하지 않았다고 말했다 [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2064524668208545955)
- **계정 맥락 차이**: 생물학 분야 사용자들은 **Incognito Mode에서는 Fable을 쓸 수 있지만 일반 모드에서는 안 되는** 사례를 포함해 계정 맥락에 따른 차이를 보고했다 [@cremieuxrecueil](https://x.com/cremieuxrecueil/status/2064449457869984035)
- **단순 프롬프트 거부**: Teknium 등은 단순 엔지니어링 프롬프트에서도 거부가 발생했다고 보고했다 [@Teknium](https://x.com/Teknium/status/2064462936677203983), [@Teknium](https://x.com/Teknium/status/2064466293185806658)
- **최적화 질문 차단**: 사용자들은 PTX ISA 질문과 추론(inference) 최적화 질문이 플래그 처리됐다고 보고했다 [@snowclipsed](https://x.com/snowclipsed/status/2064408466039390417), [@dejavucoder](https://x.com/dejavucoder/status/2064420742129967331)
- **풍자적 반응**: 일부 사례는 유머러스하지만 날카로웠다. 사용자들은 추론(inference) 코드를 요청하면 모델이 “ONNX를 import하기 시작한다”거나 JEPA를 구현한다고 농담했다. 이는 capability steering의 징후라는 반응이었다 [@vikhyatk](https://x.com/vikhyatk/status/2064515989795127744), [@MattVMacfarlane](https://x.com/MattVMacfarlane/status/2064440740483403829)

### 사실과 의견

- **사실**: Fable 5는 일반 공개됐고 Mythos 5는 제한 접근 모델이다 [@claudeai](https://x.com/claudeai/status/2064394146916229443), [@TheRundownAI](https://x.com/TheRundownAI/status/2064394481923699070)
- **사실**: Fable 5와 Mythos 5는 같은 기반 모델을 공유하며, Fable에는 추가 안전장치가 있다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064428347678220691), [@scaling01](https://x.com/scaling01/status/2064398688802205900)
- **사실**: 가격은 **입력/출력 토큰 100만 개당 $10 / $50**이다 [@scaling01](https://x.com/scaling01/status/2064394893603049625), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **사실**: Fable은 **100만 컨텍스트**를 유지한다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **사실**: Anthropic은 거부/fallback 메커니즘과 SDK 미들웨어를 도입했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2064428351029449214)
- **사실**: Anthropic은 **프런티어 LLM 개발에 대한 조용한 개입**을 공개했으며, 트래픽의 약 **0.03%**에 영향을 준다고 밝혔다 [@Hangsiin](https://x.com/Hangsiin/status/2064397550434816088)
- **사실**: Fable은 **6월 22일**까지 구독에 임시 포함되며, 이후 크레딧 기반이 된다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2064500150069030992)
- **의견**: “Anthropic이 이겼다”, “Anthropic은 코딩 moat가 있다”, “Anthropic이 ASI를 향하고 있다”는 검증된 사실이 아니라 논평이다 [@scaling01](https://x.com/scaling01/status/2064401880323653799), [@scaling01](https://x.com/scaling01/status/2064399642603802676), [@scaling01](https://x.com/scaling01/status/2064410532824662047)
- **의견**: 이 조치가 주로 **IPO 이미지 관리**, **반오픈소스 포지셔닝**, 또는 **Meta/중국/오픈 연구소**를 늦추기 위한 것이라는 주장은 그럴듯한 해석이지만 Anthropic이 확인한 것은 아니다 [@kimmonismus](https://x.com/kimmonismus/status/2064448699632402664), [@kylebrussell](https://x.com/kylebrussell/status/2064502244041511348), [@natolambert](https://x.com/natolambert/status/2064412173527556298)
- **의견**: Anthropic이 냉소적인 moat 구축이 아니라 진정한 안전 신념에서 행동한다는 주장도 해석이다 [@finbarrtimbers](https://x.com/finbarrtimbers/status/2064427031543341450)
- **의견**: “GPT-4 moment”, “big model smell”, “엔지니어로서 나를 완전히 압도한다”, “일반 사용자에게는 별로 나아 보이지 않는다” 같은 주관적 보고는 표준화된 증거가 아니라 경험담이다 [@karinanguyen](https://x.com/karinanguyen/status/2064406015760601379), [@bcherny](https://x.com/bcherny/status/2064431111154053187), [@akbirkhan](https://x.com/akbirkhan/status/2064418425552928812), [@citrini](https://x.com/citrini/status/2064480613852201336)

### 다양한 관점

- **지지적 관점**: Anthropic 직원과 가까운 테스터들은 Fable 5를 **계단식 개선(step-function improvement)**으로 묘사했다. Felix Rieseberg는 AI에 작업을 주는 방식에서 책임을 맡기는 방식으로 바뀌었다고 했다 [@felixrieseberg](https://x.com/felixrieseberg/status/2064392202504310900)
- **협업감**: Alex Albert는 모델이 도구라기보다 협업자처럼 느껴진다고 말했다 [@alexalbert__](https://x.com/alexalbert__/status/2064394410004304003)
- **Karpathy 반응**: Karpathy는 특히 길고 어려운 작업에서 “major-version-bump-deserving step change”라고 평가했지만, 안전장치는 출시 시점에 “조금 과민하다”고 봤다 [@karpathy](https://x.com/karpathy/status/2064409694761054332)
- **디버깅 능력**: Bcherny는 Opus 4.5 이후 가장 큰 진전이며 모델이 판단력, 취향, 체계적 디버깅을 보여준다고 했다 [@bcherny](https://x.com/bcherny/status/2064431111154053187)
- **벤더 관점**: 제3자 인프라와 앱 벤더들은 안전 논란보다 벤치마크 승리와 통합 가치를 강조했다 [@cursor_ai](https://x.com/cursor_ai/status/2064394824313376787), [@cognition](https://x.com/cognition/status/2064398549073453266), [@NotionHQ](https://x.com/NotionHQ/status/2064397568696819984), [@Azure](https://x.com/Azure/status/2064421301108834552)
- **비판적 관점**: 많은 연구자와 오픈 모델 옹호자들은 안전 동기가 있더라도 조용한 throttling은 받아들일 수 없다고 주장했다. Natolambert는 사용자에게 알리지 않고 하는 것을 “misaligned”라고 불렀다 [@natolambert](https://x.com/natolambert/status/2064404993193754830)
- **반독점 우려**: Dean Ball은 이것이 **antitrust** 조사를 부를 수 있다고 경고했다 [@deanwball](https://x.com/deanwball/status/2064434861088395730)
- **어두운 날**: Jeremy Howard는 이를 “매우 어둡고 매우 슬픈 날”이라고 했다 [@jeremyphoward](https://x.com/jeremyphoward/status/2064481719626154417)
- **특권 접근 우려**: Gneubig은 AI가 소수 특권층에게만 제공되는 미래를 경고했다 [@gneubig](https://x.com/gneubig/status/2064451352000975124)
- **고객 방해 프레임**: Eric Zelikman은 이를 고객을 조용히 방해하는 행위로 해석했다 [@ericzelikman](https://x.com/ericzelikman/status/2064442174373314701)
- **주권/오픈 모델 주장**: 오픈소스 지지자들은 이 출시를 **주권적/오픈 모델**의 필요성을 뒷받침하는 사례로 사용했다 [@nickfrosst](https://x.com/nickfrosst/status/2064396337404096809), [@NoahZiems](https://x.com/NoahZiems/status/2064464265189482570), [@ClementDelangue](https://x.com/ClementDelangue/status/2064513229099876663)
- **중립/혼합 관점**: 일부 관찰자는 제품 설계가 나쁘더라도 Anthropic이 이러한 개입을 안전상 필요하다고 **진심으로 믿을 가능성이 높다**고 봤다 [@finbarrtimbers](https://x.com/finbarrtimbers/status/2064427031543341450)
- **시장 세분화 관점**: 다른 이들은 Anthropic이 누구에게도 제한 없는 프런티어 역량을 제공할 의무는 없지만, 이것이 이타주의라기보다는 명확한 비즈니스와 시장 세분화라고 봤다 [@suchenzang](https://x.com/suchenzang/status/2064452548753559644)
- **Karpathy의 혼합 평가**: Karpathy의 관점은 혼합적이다. 모델 품질은 예외적이지만 출시 안전장치는 과민하며 조정이 필요해 보인다는 것이다 [@karpathy](https://x.com/karpathy/status/2064409694761054332)

### 연구 제한, 프라이버시, 엔터프라이즈 함의

- **예측 가능성**: 핵심 엔터프라이즈 문제는 **예측 가능성**이었다. 제공자가 추정된 작업 범주에 따라 출력을 조용히 저하시킬 수 있다면, 사용자는 실패가 모델, 프롬프트, 숨은 개입 중 무엇 때문인지 더 이상 알기 어렵다 [@MattGibsonMusic](https://x.com/MattGibsonMusic/status/2064518301888512486), [@code_star](https://x.com/code_star/status/2064464447662707180)
- **공급망 리스크**: 일부 사용자는 이것이 중요한 워크플로에 대한 **공급망 리스크**가 되어 기업이 오픈 웨이트나 사내 모델로 이동할 수 있다고 우려했다 [@NoahZiems](https://x.com/NoahZiems/status/2064464265189482570), [@deliprao](https://x.com/deliprao/status/2064485687374569897)
- **계정 수준 맥락**: 생물학자들이 일반 모드와 incognito mode의 차이를 보고한 것처럼, 계정 수준 맥락이나 이전 사용 이력이 trigger 동작에 영향을 줄 수 있다는 우려도 있었다 [@cremieuxrecueil](https://x.com/cremieuxrecueil/status/2064449457869984035)
- **데이터 프라이버시**: 제공된 트윗 세트에는 Anthropic이 **사용자 데이터로 학습**하거나 명시된 데이터 프라이버시 약관을 위반했다는 직접 증거가 없었다. 여기서 프라이버시 논쟁은 전통적인 학습 데이터 프라이버시보다 **행동 프로파일링 / 조용한 정책 집행**에 가까웠다.
- **재현성 문제**: 연구 사용자에게 숨은 개입은 **재현성과 과학적 귀속**을 훼손하기 때문에 특히 해롭다는 프레임으로 논의됐다 [@deanwball](https://x.com/deanwball/status/2064434861088395730), [@MattGibsonMusic](https://x.com/MattGibsonMusic/status/2064518301888512486)
- **감사 가능한 의존성**: 엔터프라이즈 구매자에게 문제는 모델이 강력한지뿐 아니라, 코딩, 의학, 과학, 금융, 인프라에서 **안정적이고 감사 가능한 의존성**인지 여부다.

### 맥락

- **경쟁 구도**: 이번 출시는 GPT-5.5, 곧 나올 GPT-5.6, Gemini 3.5 Pro와의 치열한 경쟁 속에서 나왔다. 여러 게시자는 Anthropic이 코딩/에이전트 작업에서 일시적 우위를 열었다고 주장했다 [@kimmonismus](https://x.com/kimmonismus/status/2064467466450088078), [@teortaxesTex](https://x.com/teortaxesTex/status/2064473970892587105)
- **오픈 vs 폐쇄 격차**: 이는 **오픈 모델과 폐쇄 모델의 격차**를 둘러싼 더 넓은 논쟁 속에 있다. 한 Epoch식 프레이밍은 오픈 웨이트 모델이 폐쇄 프런티어 모델보다 평균 약 **4개월 뒤처진다**고 말했다 [@dl_weekly](https://x.com/dl_weekly/status/2064422551762153946)
- **선택적 역량 공개**: 커뮤니티 반응을 보면 이번 출시는 “big model smell”과 벤치마크 점프뿐 아니라 **선택적 역량 공개**를 정상화한 사례로 기억될 수 있다. 프런티어 모델에 대한 공개 접근은 주되, **도메인별 숨은 제한**이 붙는 방식이다.
- **향후 논쟁**: 이 정책선은 **안전 vs 개방성**, **프런티어 연구 도구에 대한 공정한 접근**, **반독점과 플랫폼 권력**, **API 제공자에 대한 엔터프라이즈 신뢰**, **오픈 모델이 민감한 기술 작업의 기본값이 될지 여부**에 영향을 줄 가능성이 높다.

### 모델, 벤치마크, 평가

- **Agents’ Last Exam**: 노동시장 정렬 에이전트 성능을 테스트하는 새 벤치마크 프로젝트 **Agents’ Last Exam (ALE)**가 공개됐다. 상위 에이전트도 가장 어려운 티어에서 **2.6%**만 기록했으며, **1,500개 이상 작업**, **55개 직업**, **100개 이상 기관의 300명 이상 전문가**가 기여했다 [@YiyouSun](https://x.com/YiyouSun/status/2064392466011394213), [@SnorkelAI](https://x.com/SnorkelAI/status/2064396025410760950), [@dawnsongtweets](https://x.com/dawnsongtweets/status/2064452279973863848)
- **North Mini Code**: Cohere는 첫 오픈소스 코딩 모델 **North Mini Code**를 공개했다. **총 30B / 활성 3B MoE**, **256K 컨텍스트**, **최대 64K 생성**, Apache 2.0, 에이전트 워크플로 최적화가 특징이다 [@cohere](https://x.com/cohere/status/2064378058329526556), [@JayAlammar](https://x.com/JayAlammar/status/2064385607455908254), [@vllm_project](https://x.com/vllm_project/status/2064416312605237434)
- **Gemini 3.5 Flash Live Translate**: Google은 **70개 이상 언어**의 실시간 음성-대-음성 번역인 **Gemini 3.5 Flash Live Translate**를 발표했다. Gemini API, AI Studio, Google Translate에서 제공되며 Meet에도 올 예정이다 [@OfficialLoganK](https://x.com/OfficialLoganK/status/2064369125447864674)
- **iOSWorld**: 새 벤치마크 **iOSWorld**는 **26개 커스텀 iOS 앱**과 **133개 작업**에서 개인지능형 전화 에이전트를 평가한다. 가장 강한 프런티어 모델도 privileged access가 있어도 **52% 성공률**에 그쳤다 [@rsalakhu](https://x.com/rsalakhu/status/2064402156740907444)

### 추론, 학습, 시스템

- **LCLMs**: **Latent Context Language Models (LCLMs)**가 장문맥 추론(inference) 방법으로 소개됐다. 컨텍스트를 최대 **16배** 압축하며 KV-cache 압축보다 지연시간/정확도 프런티어를 개선한다 [@micahgoldblum](https://x.com/micahgoldblum/status/2064361011994337772), [@iamleonli](https://x.com/iamleonli/status/2064374393057300846)
- **Mirage**: Microsoft Research의 **Mirage**는 3D 장면을 latent token으로 저장하며, 비디오 생성이 **10.57배 빠르고** 메모리 사용량이 **55배 낮다**고 보고했다 [@HuggingPapers](https://x.com/HuggingPapers/status/2064393076416688416)
- **vime**: vLLM은 vLLM 생태계의 RL 사후학습(post-training) 프레임워크 **vime**을 공개했고, NeMo-RL, OpenRLHF, verl과 함께 배치했다 [@vllm_project](https://x.com/vllm_project/status/2064397637634376174)
- **Agent training**: 에이전트 학습 논의는 self-improving scaffold용 **Self-Harness** [@omarsar0](https://x.com/omarsar0/status/2064429834999304247)와 턴 전반의 reasoning trace를 유지하는 **AutoForge/interleaved thinking**으로 이어졌다 [@cwolferesearch](https://x.com/cwolferesearch/status/2064505867181949182)
- **Fast Gemma Challenge**: Google/Hugging Face는 단일 **A10G**에서 품질을 망치지 않고 **Gemma 4 E4B**를 빠르게 만드는 **Fast Gemma Challenge**를 시작했다 [@googlegemma](https://x.com/googlegemma/status/2064374874962117084), [@osanseviero](https://x.com/osanseviero/status/2064375902046245219), [@_lewtun](https://x.com/_lewtun/status/2064386398090576236)

### 에이전트, 툴링, 개발자 워크플로

- **Agent loops**: LangChain은 Fleet에서 반복 trigger로 구동되는 **agent loop** 패턴을 강조했다 [@caspar_br](https://x.com/caspar_br/status/2064363014997021126)
- **Responses API**: OpenAI는 Responses API의 웹 검색에 **이미지 결과**를 추가했다 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2064395155688616153)
- **GitHub/Copilot**: GitHub/Copilot 앱 업데이트에는 **parallel sub-sessions**와 동적 인터페이스용 **canvas** UI가 포함됐다 [@tgrall](https://x.com/tgrall/status/2064334802799509745), [@burkeholland](https://x.com/burkeholland/status/2064446521035067615)
- **Hermes Desktop**: Hermes Desktop은 self-learning Python skills와 메시징 앱 통합과 함께 **Ollama** 지원을 추가했다 [@ollama](https://x.com/ollama/status/2064441778590339402), [@NousResearch](https://x.com/NousResearch/status/2064468385748951415)
- **Temenos**: 에이전트 실행에 대한 보안 지향 반론으로 **Temenos**는 에이전트가 아니라 생성된 코드를 샌드박싱해야 한다고 주장한다. auth/tools는 호스트에 두고 **rootless gVisor**를 쓰는 방식이다 [@abhijithneil](https://x.com/abhijithneil/status/2064462294155952297)

### 연구, 과학, 형식 기법

- **EconLib**: Axiom은 Lean 기반 경제학 라이브러리 **EconLib**를 발표했다. Aumann의 “agreeing to disagree” 정리를 형식화하는 과정에서 countability 관련 숨은 가정이 드러났다 [@TheTuringPost](https://x.com/TheTuringPost/status/2064391882017579520)
- **Economy of Minds**: “Economy of Minds”는 중앙집중식 오케스트레이션 대신 경매와 인센티브를 통한 에이전트 조정을 제안했다. 수학 추론에서 **15.9% → 57.0%**, 금융 연구에서 **45.0% → 60.0%** 같은 개선을 보고했다 [@TheTuringPost](https://x.com/TheTuringPost/status/2064406931184443618)
- **REDMOD**: Mayo Clinic의 **REDMOD**는 CT 스캔에서 진단 최대 **3년 전** 췌장암을 감지했다고 보고됐다. 진단 전 중앙값 **475일** 시점에 숨은 암의 **73%**를 식별했다 [@TheRundownAI](https://x.com/TheRundownAI/status/2064416920191869191)

### 오픈 생태계와 인프라

- **Hugging Face와 Arcee**: Hugging Face와 Arcee는 모든 Arcee 모델/데이터셋, private 항목까지 AWS S3를 HF로 대체하는 파트너십을 발표했다 [@ClementDelangue](https://x.com/ClementDelangue/status/2064323874049679643), [@MarkMcQuade](https://x.com/MarkMcQuade/status/2064385389801124218)
- **Sovereign AI**: Cohere는 “**Sovereign AI for all**”이라는 주권/오픈 메시지를 계속 밀었다 [@cohere](https://x.com/cohere/status/2064414912768618898)
- **Researcher Reciprocity License**: Marks Saroufim은 **Researcher Reciprocity License**를 제안하고 GPU MODE 데이터셋을 이 라이선스로 옮겼다. 프런티어 연구소가 오픈 연구의 혜택을 받으면서 그 대가로 접근을 제한한다는 인식에 대한 명시적 반응이었다 [@marksaroufim](https://x.com/marksaroufim/status/2064428421774753943), [@marksaroufim](https://x.com/marksaroufim/status/2064442386374369597)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Open Model Inference and Chat Template Updates

- **[Xiaomi just claimed 1,000+ tps on a 1T model using a standard 8-GPU server](https://www.reddit.com/r/LocalLLaMA/comments/1u0buhm/xiaomi_just_claimed_1000_tps_on_a_1t_model_using/)** (Activity: 1027): **Xiaomi MiMo**는 [`MiMo-V2.5-Pro-UltraSpeed`](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)가 Cerebras/Groq식 특수 하드웨어가 아니라 TileRT 모델-시스템 공동 설계를 통해 단일 “표준” `8-GPU` 서버에서 `1T` 파라미터 MoE의 **`1000+ tokens/s` decoding**을 달성한다고 주장했다. 보고된 스택은 비전문가 모듈은 더 높은 정밀도로 유지하면서 **MoE expert-only FP4/MXFP4 양자화(quantization)와 QAT**를 결합하고, coding `6.30`, math/reasoning `5.56`, agent tasks `4.29`의 acceptance length를 갖는 **DFlash block-level masked speculative decoding**, 그리고 launch/sync overhead를 줄이는 persistent low-latency kernel을 포함한다. 댓글에서 제기된 핵심 미해결 기술적 caveat는 Xiaomi가 *어떤* 8개 GPU를 썼는지 명시하지 않아 재현성과 비용/성능 비교가 모호하다는 점이다.
- **댓글**: 댓글 작성자들은 “Token Winter”의 경제학을 두고 병목은 모델 수요보다 비싸고 쌓아둔 서구 GPU 공급에 있으며, **DeepSeek, Xiaomi, MiniMax**의 중국식 compressed sparse architecture/MoE 작업이 추론(inference) 효율을 높이고 있다고 논쟁했다. 다른 이들은 Xiaomi의 선택적 FP4 전략이 가장 중요한 세부사항이라고 봤다. 단순한 전체 모델 FP4는 reasoning, code, logic을 떨어뜨리기 때문이다.
- **댓글**: Xiaomi가 FP4를 균일하게 적용하지 않고 **선택적 FP4 양자화(quantization)**를 했다는 점이 핵심 기술 세부사항으로 강조됐다. **MiMo-V2.5-Pro**의 **MoE Experts**만 FP4로 양자화하고, 비전문가 모듈은 원래 정밀도를 유지해 reasoning, logic, code generation 저하를 피했다는 설명이다. 댓글은 Xiaomi가 모델 크기를 줄이고 bandwidth utilization을 높이면서 원래 모델에 가까운 역량을 유지하기 위해 **FP4 QAT**를 사용했다고 적었다.
- **댓글**: 공개된 모델 웨이트는 Hugging Face의 **XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash**에서 제공된다: https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash. 이는 8-GPU 서버에서의 `1,000+ tps` 처리량 주장을 독립적으로 점검하거나 벤치마크할 수 있게 해준다는 점에서 중요하다.
- **댓글**: 여러 댓글은 이 주장 뒤의 하드웨어와 파라미터 산정에 의문을 제기했다. *“8 GPU server… which 8 exactly?”*, *“1T-A1B?”*라는 식이다. 기술적 우려는 정확한 GPU 종류, 인터커넥트, serving stack, batch size, context length, 그리고 `1T` MoE 모델이 토큰당 약 `1B` 파라미터만 활성화하는지 알 수 없으면 처리량을 해석할 수 없다는 점이다.
- **[Gemma 4 Chat Template now has preserve thinking](https://www.reddit.com/r/LocalLLaMA/comments/1u084qi/gemma_4_chat_template_now_has_preserve_thinking/)** (Activity: 482): **Google Gemma Team이 공식 Gemma 4 chat template에 `preserve_thinking` 지원을 추가했다**. 이는 일부 사용자가 이미 성공적으로 적용하던 aftermarket template 수정과 일치한다. 이 변경은 Gemma 4 채팅 포맷에서 모델 “thinking” trace의 보존/사용을 개선하는 것으로 설명됐지만, 스레드에는 벤치마크 수치나 구현 diff는 없었다.
- **댓글**: 댓글 작성자들은 대체로 공식 채택을 환영했고, 이것이 이전 커뮤니티 template hack을 검증한다고 주장했다. 여러 사용자는 업데이트된 template을 더 강한 agentic coding use case에 완전히 활용하려면 더 큰 **Gemma 4 `124B` MoE** 출시가 필요할 것이라고 추측했다.
- **댓글**: Gemma 4의 공식 chat template이 `preserve_thinking`을 추가하는 것으로 보인다는 의견이 나왔다. 이는 일부 사용자가 aftermarket/custom template 수정으로 이미 활성화해 효과적이라고 본 동작이다. 주요 기술적 이점은 **agentic coding workflows**에서 이전 reasoning/thinking trace를 유지해 multi-step tool use와 code iteration에 도움이 될 수 있다는 점이다.
- **댓글**: 한 댓글은 이 변경이 아직 live가 아닐 수 있다고 주의했다. `preserve_thinking` 지원은 **아직 merge되지 않은 open PR**로 설명됐고, 모델 파일은 `21 days` 동안 업데이트가 없는 것으로 보인다는 것이다. 따라서 사용자는 새 동작이 released artifact에 있다고 가정하기 전에 실제 모델 저장소의 tokenizer/chat-template 파일을 확인해야 한다.
- **댓글**: 여러 댓글은 template 변경이 더 큰 **Gemma 4 `124B` MoE** 변형에 대한 수요를 키운다고 봤다. `preserve_thinking`은 coding-agent use case에서 더 높은 용량의 모델과 결합될 때 더 가치가 크다는 주장이다. 논의는 추측이지만, 업데이트된 chat-template 동작을 더 잘 활용하기 위한 model size/MoE architecture 확장에 기술적으로 초점이 맞춰져 있다.

### Less Technical AI Subreddits: Claude Fable 5/Mythos 5 Release and Access Tiers

범위: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Introducing Claude Fable 5](https://www.reddit.com/r/ClaudeCode/comments/1u1b207/introducing_claude_fable_5/)** (Activity: 2698): **[image](https://i.redd.it/tb8akxef4a6h1.png)는 게시물이 주장하는 **Claude Fable 5 / Claude Mythos 5** 출시의 벤치마크 비교 표다. 강조된 모델이 Claude Mythos Preview, Claude Opus 4.8, GPT 5.5, Gemini 3.1 Pro 대비 agentic coding, knowledge work, spatial reasoning, tool use, legal, biology, cybersecurity, health 벤치마크 전반에서 선두 또는 선두권으로 표시된다. 본문은 Fable 5와 Mythos 5를 같은 기반 “Mythos-class” 모델로 설명하며, **Fable 5에는 safety fallback**이 있어 cybersecurity, biology/chemistry, distillation 관련 요청이 **Claude Opus 4.8**로 라우팅되고, 세션의 `5%` 미만에 영향을 준다고 말한다.
- **댓글**: 댓글은 대부분 기술 분석보다 hype나 skepticism이었다. “AGI confirmed” 같은 농담과 “Fable [is] getting dumber recently”인지 묻는 불만이 포함됐다.
- **댓글**: 한 댓글은 접근/가격 제약을 지적했다. **Claude Fable 5는 `June 22`까지만 무료**이며, 이후 계속 쓰려면 크레딧을 구매해야 한다는 것이다. 모델을 평가하는 사람에게는 credit-gated 기간이 시작되기 전에 벤치마크나 워크플로 테스트를 마쳐야 할 수 있어 중요하다.
- **댓글**: 한 사용자는 **Fable이 malformed HTML을 생성했는지** 묻고 렌더링 결과 스크린샷을 링크하며 출시/프런트엔드 문제 가능성을 보고했다: https://preview.redd.it/qaceea1fma6h1.jpeg?width=1440&format=pjpg&auto=webp&s=440eb5a30e7dfc186d610ed94be50fa50b962c9e. 이 댓글은 벤치마크에 근거한 모델 품질 논의라기보다 롤아웃 중 구현 또는 output-formatting bug가 있었을 가능성을 시사한다.
- **[Claude Fable 5 feels less like a model launch and more like a preview of AI inequality](https://www.reddit.com/r/ClaudeAI/comments/1u1fsdi/claude_fable_5_feels_less_like_a_model_launch_and/)** (Activity: 2387): 게시물은 **Anthropic의 Claude Fable 5 롤아웃 의혹**이 균일한 공개 프런티어 모델 출시에서 **계층형 접근 아키텍처**로 이동했음을 보여준다고 주장한다. 공개 유료 사용자는 `cyber`, `bio`, `chemistry`, `distillation`이 포함된 요청이 Opus 4.8로 downgrade될 수 있는 safety routing이 붙은 Fable 5를 받고, 선택된 파트너는 더 적은 안전장치를 가진 같은 기반 모델로 설명되는 **Mythos 5**를 받는다는 주장이다. 또한 Fable 5가 유료 플랜에 `June 22`까지만 포함된 뒤 사용량 크레딧으로 이동할 수 있다는 가격/용량 제약을 강조하며, 프런티어 에이전트 추론(inference)이 flat-rate consumer subscription에는 여전히 너무 비싸다는 점을 시사한다.
- **댓글**: 댓글은 AI 접근 불평등 우려와 고위험 역량에 필요한 제한적 안전 정책을 받아들이는 입장으로 갈렸다. 한 댓글은 결과를 비싼 enterprise-grade 모델로 향하는 token-economics 압력의 예측 가능한 결과로 봤고, 다른 댓글은 사용자 마찰에도 *“rather safe than sorry”* 접근을 옹호했다.
- **댓글**: 여러 댓글은 출시를 예상된 경제학적 전환으로 봤다. 프런티어 모델의 능력과 복잡성이 커질수록 **추론(inference)/토큰 비용이 올라 최상위 모델이 기본 소비자 제품이 아니라 enterprise-only tool**이 된다는 것이다. 한 댓글은 일상 워크로드가 **Apple M-series chips**나 **RTX Spark-class accelerators** 같은 하드웨어의 더 저렴한 local inference로 이동하고, 프런티어 API는 고가치 작업에 남을 것이라고 주장했다.
- **댓글**: 가격 중심 스레드는 새 모델의 API 경제성이 consumer subscription과 구조적으로 맞지 않는다고 주장했다. *“Our `$200` monthly sub is like `3` API prompts with the new model.”*라는 말이다. 기술적 함의는 고가 소비자 플랜도 강한 rate limit, model routing, 또는 **Opus 4.8** 같은 더 싼 모델 fallback 없이는 지속 가능하기 어렵다는 점이다. 한 댓글은 Opus 4.8이 “`99%`” 사용자에게 충분하다고 했다.
- **[Claude Fable (Mythos) is OUT!](https://www.reddit.com/r/singularity/comments/1u1at0h/claude_fable_mythos_is_out/)** (Activity: 1456): **이미지([PNG](https://i.redd.it/i88096c6fa6h1.png))는 새로 사용 가능한 모델 **“Fable 5 High”**가 표시된 Claude식 모델 선택기/UI처럼 보이며, *Claude Fable/Mythos is out*이라는 게시물 제목의 주장과 맞아떨어진다. 댓글의 핵심 맥락은 **Fable 5가 Pro, Max, Team, 좌석 기반 Enterprise 플랜에 `June 22`까지만 “at no extra cost”로 임시 포함**되고 `June 23`에 해당 플랜에서 제거된다는 점이다. 벤치마크, 아키텍처 세부사항, API 사양, 역량 평가는 제공되지 않았다.
- **댓글**: 댓글 작성자들은 제한된 기간의 이용 가능성에 대해 token-budget 불안과 FOMO로 반응했고, 접근이 사라지기 전에 “burn tokens”해야 한다고 농담했다. 논의는 대체로 비기술적이며 실질적인 모델 성능 분석은 포함하지 않았다.
- **댓글**: 사용자들은 **Fable 5**가 `June 22`까지만 **Pro, Max, Team, 좌석 기반 Enterprise** 플랜에 임시 번들로 포함되고 `June 23`에 제거된다는 점을 강조했다. 이는 향후 이용 가능성이 별도 티어나 paywall을 필요로 할 수 있음을 시사한다.
- **댓글**: 이용 가능성 세부사항으로, **Fable 5**는 **Claude Code via command line**에서는 작동하는 것으로 보이지만, 적어도 한 사용자는 Claude desktop app의 Claude Code integration에는 **보이지 않는다**고 보고했다. 이는 client-specific rollout 또는 UI/model-selector discrepancy를 시사한다.

### Less Technical AI Subreddits: Anthropic Data Policy and Safety Governance

- **[Anthropic changed their privacy policy today and there's a specific clause that every Claude user needs to know about](https://www.reddit.com/r/ClaudeAI/comments/1u0kq84/anthropic_changed_their_privacy_policy_today_and/)** (Activity: 1475): 게시물은 **Anthropic**이 `2026-06-08`에 수정된 [privacy policy](https://www.anthropic.com/legal/privacy)를 게시했고, `2026-07-08`부터 적용된다고 주장한다. 법집행기관 공개 문구가 법적 절차에 따른 외부 강제 공개에서 Anthropic의 내부 *“good faith belief”*에 근거한 필요성 판단으로 바뀌었다는 내용이다. 작성자는 이것이 창작 글쓰기, 롤플레이, fiction 속 위협, mental-health venting에 대한 false-positive moderation/classifier escalation 위험을 만든다고 주장하며, [OpenAI](https://openai.com/policies/)와 [Mistral](https://mistral.ai/terms/) 정책의 더 좁은 공개 문구와 대비했다. 한 댓글은 실제 policy-update link/source를 요청했다.
- **댓글**: 상위 댓글들은 부정적으로 반응하며 이를 큰 프라이버시 후퇴이자 “enshittification”의 증거로 봤다. 한 사용자는 Anthropic의 trust/morality branding을 훼손하며 Codex로 돌아가는 것을 고려하게 만든다고 말했다.
- **댓글**: 한 댓글은 해당 조항이 너무 광범위하게 정의되어 있어 유럽 사용자에게는 수정된 Anthropic 약관이 **GDPR 비준수**일 수 있다고 주장했다. 먼저 Anthropic의 **Data Protection Officer (DPO)**에 escalation하고, 해결되지 않으면 관련 **Data Protection Commission/authority (DPC)**에 신고하라고 권했다.
- **댓글**: 관련 법적 리스크 비교로 **OpenAI**도 언급됐다. 대량 총격 피해자 가족들이 가해자의 ChatGPT 사용이 내부적으로 flagged됐지만 경찰에 보고되지 않았다는 주장으로 **US$1 billion** 소송을 추진할 수 있다는 보도를 인용했다: [BIV article](https://www.biv.com/news/tumbler-ridge-families-likely-to-seek-us1-billion-in-lawsuit-against-openai-lawyer-12209582). 논의된 기술-정책적 함의는 AI 제공자의 내부 안전 모니터링이 escalation, reporting, user privacy에 대한 의무를 만드는지 여부다.

### Less Technical AI Subreddits: Frontier AI Infrastructure and Brain Research Bets

- **[SpaceX has just revealed it's first AI satellite design](https://www.reddit.com/r/singularity/comments/1u0qc5r/spacex_has_just_revealed_its_first_ai_satellite/)** (Activity: 1883): **이미지는 SpaceX “AI1 satellite” 설계라고 주장되는 presentation-style concept slide다. **deployable liquid radiators**, **centralized compute**, 약 `70 m` wingspan, `20 m` deployed height, `150 kW` solar array가 `150 kW peak / 120 kW average` compute payload에 전력을 공급하는 대형 orbital compute platform을 보여준다. 기술적 초점은 space-based AI compute power와 thermal rejection이며, 도식은 radiator survivability를 위한 redundant pumping loops와 micrometeor shielding을 강조한다: [image](https://i.redd.it/tw874bgnn56h1.jpeg).
- **댓글**: 댓글은 매우 회의적이었다. 한 사용자는 compute capacity를 “GB200 1랙”에 비교하며, 특히 하드웨어 고장이 나면 위성 전체가 폐기될 수 있어 비용 효율적이지 않을 것이라고 주장했다. 다른 댓글은 공개가 실용적 엔지니어링 발표라기보다 시장/IPO hype일 수 있다고 봤다.
- **댓글**: 한 사용자는 그림 속 compute payload를 대략 **NVIDIA GB200급 하드웨어 한 랙**으로 식별하며, 발사/통합 비용과 고장 부품을 수리할 수 없다는 점 때문에 궤도에서 비용 효율을 내기 어렵다고 주장했다. *“if something breaks, the entire thing is a writeoff.”*
- **댓글**: 또 다른 기술적 비판은 **“redundant pumping loops”**와 **“centralized compute”**라는 아키텍처 용어에 초점을 맞췄다. 액체 냉각 루프와 중앙집중형 accelerator rack이 위성 AI 플랫폼에서 까다로운 thermal-management 및 single-point-of-failure 위험을 만들 수 있다는 우려다.
- **[Jeff Bezos Is Funding a Wild Hunt for the Brain’s ‘Core Algorithm’](https://www.reddit.com/r/singularity/comments/1u079tc/jeff_bezos_is_funding_a_wild_hunt_for_the_brains/)** (Activity: 1381): **[WIRED reports](https://www.wired.com/story/jeff-bezos-is-funding-a-wild-hunt-for-the-brains-core-algorithm/)에 따르면 **Jeff Bezos**는 **Flourish**라는 neuroscience/AI 스타트업에 자금을 대고 있다. 이 회사는 **`$2.5B`** 가치로 평가되고 **`$500M`**을 조달한 것으로 전해지며, 생물학적 뉴런의 직접 연구가 뇌의 “core algorithm”을 밝힐 수 있다는 가설을 추구한다. 기술적 베팅은 오늘날 deep learning의 scale-up만이 아니라 empirical neuroscience가 실제 neural computation에서 영감을 얻은 새 AI architecture나 learning rule을 만들 수 있다는 것이다.
- **댓글**: 한 댓글은 이 전제에 대한 핵심 기술적 반론을 제기했다. *“What makes him think the brain operates like an algorithm?”* 요지는 cognition이 단일 computational procedure로 환원될 수 있는지, 아니면 heterogeneous biological, biochemical, network-level dynamics에서 emergent되는지에 대한 문제제기다.

---

## AI Discord Recap

### 접근 중단

- **Discord 접근 종료**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이며, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 감사하고, 좋은 여정이었다.
