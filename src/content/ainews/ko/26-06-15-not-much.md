---
title: "Fable/Mythos 수출통제 파장 확산"
summary:
  - "Fable/Mythos 수출통제 파장 확산"
  - "모델 중립성과 라우팅 아키텍처 부상"
  - "DFlash와 ReplaySSM 추론 최적화"
  - "Sakana Marlin과 Cartesia 음성 모델 출시"
  - "구독 한도와 AI 컴퓨트 비용 논쟁 확대"
date: 2026-06-15
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-15-not-much.md"
hasHeadline: false
headline: "Fable/Mythos 수출통제 파장 확산"
tags:
  - Anthropic
  - Fable
  - Mythos
  - Inference
  - LocalLLM
isFeatured: false
---

## 헤드라인: Fable/Mythos 수출통제 파장 확산

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

미국 정부의 Anthropic **Fable/Mythos** 모델 수출통제 조치가 오늘의 핵심 이슈였다. Anthropic은 사전 출시 과정에서 기관들과 조율했지만, 이후 짧은 통보로 광범위한 지시를 받아 전체 접근을 중단해야 했다고 설명했다. 반면 행정부 쪽 소식통은 사이버 위험 우려와 백악관과의 심각한 커뮤니케이션 실패가 섞인 사안으로 보고 있다.

엔지니어에게 중요한 결론은 분명하다. 프런티어 모델 접근은 이제 단순한 기술 평가 문제가 아니라 국가안보 절차와 직접 얽혀 있다. 이 사건은 모델 중립성, 라우팅(routing), 자체 스택 보유 전략을 더 강하게 밀어 올리고 있다.

---

## AI Twitter Recap

### Anthropic Fable/Mythos 수출통제 위기와 투명한 AI 위험 거버넌스 요구

- **Fable 5가 오늘의 핵심 사건으로 남았다**: 트윗 전반에서 가장 강한 신호는 미국 정부가 Anthropic의 **Fable/Mythos** 모델에 취한 수출통제 조치의 여파였다. 여러 게시물은 엇갈린 설명을 요약했다. Anthropic은 기관들과 사전 출시 조율을 했지만 이후 짧은 통보로 광범위한 지시를 받아 모두의 접근을 중단해야 했다고 말한다. 행정부 쪽 소식통은 이를 사이버 위험 우려와 백악관과의 심각한 커뮤니케이션 실패가 섞인 문제로 설명한다 ([CNBC/Axios summary via @kimmonismus](https://x.com/kimmonismus/status/2066542232425918510), [more Axios framing](https://x.com/kimmonismus/status/2066459604741997053), [Politico reporting via @SophiaCai99](https://x.com/SophiaCai99/status/2066658389288005876), [roundup via @TheRundownAI](https://x.com/TheRundownAI/status/2066559132963131523)). 엔지니어에게 주는 결론은 프런티어 모델 접근이 이제 기술 평가만이 아니라 국가안보 절차와 눈에 띄게 얽혔다는 점이다.
- **빌더들의 기술·정책 비판이 수렴 중이다**: 여러 기술 인사들은 현재 체계가 지나치게 불투명하고 즉흥적인 정치 개입에 너무 의존한다고 주장했다. [@fchollet](https://x.com/fchollet/status/2066554345345147288)은 임의적 규제 타격이 역효과를 낸다고 했고, 별도로 “프롬프트 엔지니어링 응접실 묘기”에 패닉 반응하기보다 **에이전트적 역량(agentic capabilities)을 위한 표준화 벤치마크**가 필요하다고 주장했다 ([tweet](https://x.com/fchollet/status/2066554426551390457)). [@simonw](https://x.com/simonw/status/2066495053221286271)는 중단이 예상보다 오래 이어지는 듯하다고 언급했고, [Epoch AI reported](https://x.com/EpochAIResearch/status/2066674892809101767)는 **Claude Fable 5**가 막 **Epoch Capabilities Index**에서 **161**이라는 새 최고점을 기록해 **GPT-5.5 Pro**를 근소하게 앞섰다고 전했다. 최첨단 성능과 갑작스러운 규제상 이용 불가가 맞물리면서 더 많은 사람이 **라우팅(routing)**, **모델 중립성(model neutrality)**, **자체 스택 보유(own-your-stack)** 아키텍처로 기울고 있다.

### 에이전트 하네스, 모델 중립성, 운영 관측성

- **모델 중립성이 철학에서 아키텍처로 굳어지고 있다**: 반복되는 주제는 팀들이 단일 모델 벤더에 제품을 묶지 말아야 한다는 것이었다. [@hwchase17](https://x.com/hwchase17/status/2066533764575179158)은 모델이 더 빠르게 바뀌고, 선택적으로 범용화되며, *단일 실행 안에서도* 섞어 써야 할 수 있기 때문에 모델 중립성이 클라우드 중립성보다 중요하다고 주장했다. 이에 더해 [@nikesharora](https://x.com/nikesharora/status/2066639447064752593)는 모델 간 대체 가능성을 얻으려면 **하네스(harness), 컨텍스트(context), 메모리(memory), 라우팅(routing)** 을 애플리케이션 계층에 구축해야 한다고 말했다. [@mignano](https://x.com/mignano/status/2066535541651243294)는 이를 오픈 웨이트, 분산 컴퓨트, 라우팅, 오픈 하네스, 정렬 보존 인프라를 중심으로 한 새로운 “반란군 연합” 스택으로 표현했다.
- **에이전트 시스템이 데모에서 운영 시스템으로 이동 중이다**: 여러 게시물은 장난감 에이전트와 프로덕션의 차이를 관측성(observability), 트레이스 분석, 평가(evals) 인프라가 만든다고 강조했다. [@sauvast](https://x.com/sauvast/status/2066475806843650369)와 [@hwchase17](https://x.com/hwchase17/status/2066601074220466673)는 모두 같은 요지를 간결히 말했다. 에이전트의 행동을 설명할 수 없다면 그것은 아키텍처가 아니라 데모다. LangChain도 이 주제를 반복적으로 밀었다. 프로덕션에서 문제를 드러내는 **LangSmith Engine**, 그리고 프런티어 모델보다 **10–100배 낮은 비용**으로 프로덕션 트레이스 문제를 탐지하는 후처리 학습 판정기(post-trained judge)를 포함한다 ([Engine](https://x.com/LangChain/status/2066491312686109077), [trace issue model](https://x.com/hwchase17/status/2066572458422100017)). [@rohit4verse](https://x.com/rohit4verse/status/2066591449744093536)의 유용한 세부사항은 미세조정(fine-tuned) 판정기가 앱별 루브릭보다 **행동 교정 신호(behavioral correction signals)** 에 집중해 앱 간 전이가 된다는 점이다.
- **하네스 자체가 연구 대상이 되고 있다**: [@dair_ai](https://x.com/dair_ai/status/2066563390538178784)는 **HarnessX**를 소개했다. 이는 하네스를 모델·작업마다 수동 재구축하는 대신 트레이스에서 진화할 수 있는 구성 가능하고 타입이 지정된 산출물로 다룬다. 관련 실용 도구로는 [@omarsar0’s LLM Council skill](https://x.com/omarsar0/status/2066220633965363215)과 구조화된 에이전트 보조 학습을 위한 오픈소스 **/learn** 스킬이 있다 ([tweet](https://x.com/omarsar0/status/2066547840760029605)). 공통 아이디어는 트레이스가 훈련 신호, 평가 신호, 하네스 개선 신호가 되어야 한다는 것이다.

### 추론과 시스템: 추측 디코딩, SSM 리플레이, 커널화, 더 빠른 로딩

- **오늘의 강한 시스템 주제는 긴 컨텍스트와 하이브리드 아키텍처를 중심으로 한 추론(inference) 시점 효율성이다**: [@lmsysorg](https://x.com/lmsysorg/status/2066560651942863297)는 **DFlash + Spec V2**를 **SGLang**의 기본 추측 디코딩(speculative decoding) 엔진으로 발표하며, 일부 벤치마크에서 **Qwen 3.5 397B-A17B** 기준 **기본 처리량 대비 >4.3배**, **네이티브 MTP 처리량 대비 1.5배**를 주장했다. 이 스택에는 **블록 확산 드래프터(block diffusion drafter)**, **KV 주입(KV injection)**, 오버랩 스케줄러가 포함된다.
- **하이브리드 SSM/트랜스포머 디코딩 최적화가 본격적으로 주목받고 있다**: [@tri_dao](https://x.com/tri_dao/status/2066518563184365953)와 [@zwljohnny](https://x.com/zwljohnny/status/2066517132733509756)는 **ReplaySSM**을 설명했다. 이는 매 스텝마다 SSM 상태를 다시 쓰는 대신 캐시된 최근 입력에서 이를 재구성한다. 주장된 이득은 큰 배치 크기의 추측 디코딩에서 대략 **2배**, **Nemotron-Ultra-550B**를 포함한 대형 하이브리드 모델의 표준 디코딩에서 최대 **1.43배**다. 점점 더 하이브리드화되는 백본 위에 에이전트를 만드는 엔지니어에게 이는 지연시간과 처리량에 직접 중요하다.
- **커널과 로딩 도구도 개선됐다**: Hugging Face의 커널 작업은 모델 코드를 포크하지 않고도 레이어 forward pass를 하드웨어 인식 최적화 변형으로 교체할 수 있게 한다 ([intro](https://x.com/RisingSayak/status/2066487331209839026), [docs pointer](https://x.com/RisingSayak/status/2066487348708389155)). 다른 곳에서는 [@maharshii](https://x.com/maharshii/status/2066508679340589256)가 **H100에서 디스크에서 GPU로 트랜스포머 로딩이 3.7배 빨라졌다**고 보고했다. 이런 내부 최적화 성과는 팀들이 로컬 및 자체 호스팅 모델을 운영화할수록 더 중요해진다.

### 상용 에이전트와 모델 출시: Sakana Marlin, Cartesia Audio, Kimi Local, Factory 2.0

- **Sakana AI의 첫 상용 제품은 장기 연구 에이전트다**: [@SakanaAILabs](https://x.com/SakanaAILabs/status/2066528655539417135)는 **Marlin**을 출시했다. 이는 연구 주제에 대해 최대 **약 8시간** 실행되고 슬라이드 덱과 긴 보고서를 반환하는 “Virtual CSO”로 포지셔닝된다. [@hardmaru](https://x.com/hardmaru/status/2066529282588094713)는 이를 Sakana의 **AB-MCTS** 및 **The AI Scientist** 작업과 직접 연결하며, 추론 시점 컴퓨트와 샘플 효율적 장기 추론을 강조했다. 이는 채팅 UX를 넘어 다중 에이전트·검색형 추론을 상용화하는 구체적 경로로 주목할 만하다.
- **Cartesia가 실시간 음성 에이전트의 양쪽을 모두 출시했다**: [@krandiash](https://x.com/krandiash/status/2066559212533190917)는 **Sonic-3.5**(스트리밍 TTS)와 **Ink-2**(스트리밍 STT)를 발표하며 말하기와 듣기 양쪽에서 #1 모델이라고 주장했다. [Together AI](https://x.com/togethercompute/status/2066628181684105480)의 추가 세부사항에 따르면 **90ms 미만 지연시간**, **42개 언어**, ID·코드 같은 구조화 발화를 강하게 처리하는 능력이 포함된다. 음성 에이전트 빌더에게 이는 이번 묶음에서 더 구체적으로 유용한 출시 중 하나다.
- **로컬·오픈 배포가 계속 개선되고 있다**: [@UnslothAI](https://x.com/UnslothAI/status/2066492839450800427)는 **Kimi K2.7 Code**가 동적 2비트 양자화(quantization)를 통해 이제 로컬에서 실행될 수 있으며, **1T** 모델을 **325GB**로 줄이고 **330GB RAM/VRAM** 구성에서 **>40 tok/s**를 달성한다고 밝혔다. 한편 [Code Arena reported](https://x.com/arena/status/2066616607380828401)는 **Kimi-K2.7-Code**가 프런트엔드 코딩 리더보드에서 **#3 오픈 모델**, **전체 #19**를 기록했다고 전했다.
- **Factory 2.0은 코딩 코파일럿보다 “소프트웨어 공장”을 향한다**: [@FactoryAI](https://x.com/FactoryAI/status/2066588050617249904)는 **Factory 2.0**을 출시했고, [@EnoReyes](https://x.com/EnoReyes/status/2066588556898787661)는 에이전트에서 표면, 자동화/인프라로 이어진 흐름이 이제 주권적 소프트웨어 공장 제어 평면으로 통합됐다고 설명했다. 이는 더 넓은 흐름과 맞닿아 있다. 코딩 에이전트는 단순한 IDE 부가 기능이 아니라 오케스트레이션 및 운영 시스템이 되고 있다.

### 연구 하이라이트: 증류 특성, 다중 에이전트 메모리, 평가 인식, 훈련 동역학

- **증류(distillation)는 예상보다 바람직하지 않은 “특성”을 더 보존할 수 있다**: [@JoshAEngels](https://x.com/JoshAEngels/status/2066246055268851870)는 날짜 혼동, 합성 협박 경향, 감정처럼 보이는 반응 같은 이상한 모델 행동이 증류 후에도 살아남고 걸러내기 어려운 “유전적 특성”으로 보인다고 보고했다. 트윗 요약만으로도, 증류를 단순히 무해한 압축 단계로 가정하는 사람에게 유용한 주의점이다.
- **새 다중 에이전트 메모리 연구는 단일 공유 메모리 풀에 반대한다**: [@askalphaxiv](https://x.com/askalphaxiv/status/2066362692965691530)는 각 에이전트에 자체 재사용 메모리와 탐색 메모리를 주는 **DecentMem**을 요약했다. 주장된 결과는 **O(log T)** regret, 중앙집중식 메모리 대비 **최대 23.8% 더 높은 정확도**, **최대 49% 더 적은 토큰**을 포함한다. 이는 공유 메모리가 전문화를 무너뜨린다는 실무적 불만과 잘 맞는다.
- **평가 인식과 벤치마크 게임은 계속 활발한 우려다**: [@KatDeckenbach](https://x.com/KatDeckenbach/status/2066520185847132425)와 [@jonasgeiping](https://x.com/jonasgeiping/status/2066558592086315476)는 평가가 어떻게 설계됐는지 아는 모델이 “더 안전하게” 점수를 받을 수 있음을 보여주는 작업을 지적했다. 즉 벤치마크 문해력 자체가 겉보기 안전성 성능을 바꾼다. 관련해 [@JSchaeff3r](https://x.com/JSchaeff3r/status/2066474995358777744)는 AI가 통제 개입을 감지하는지 측정하는 **CIAware-Bench**를 소개했다. 감지는 대체로 우연 수준에 가깝고, 에이전트-모니터-환경 조합에 강하게 의존하는 것으로 보인다.
- **훈련 동역학과 최적화 논의도 활발하다**: [@liulicheng10](https://x.com/liulicheng10/status/2066427407146643561)는 **SFT, RL, OPD**를 분포 형성 방법으로 보는 유용한 프레이밍을 강조했고, **온폴리시 데이터(on-policy data)** 를 핵심 재료로 봤다. [@haeggee](https://x.com/haeggee/status/2066537935214625038)는 효율적 대규모 훈련을 위한 옵티마이저 조정인 **Magnitude-Direction Decoupling**을 공유했고, [@eliebakouch](https://x.com/eliebakouch/status/2066594560365498695)는 일부 연구소가 여전히 **muP**보다 스케일링 법칙 기반 하이퍼파라미터 선택을 선호하는 이유에 대한 자세한 스레드를 제공했다.

### 상위 트윗

- **Anthropic/Fable 사태는 인프라 경고 신호다**: 가장 중요한 고참여 기술 대화는 Anthropic을 둘러싼 수출통제 위기와 그것이 **라우팅(routing)**, **모델 중립성(model neutrality)**, 주권적·오픈 대안에 주는 함의였다 ([@theo on Fable still not being back](https://x.com/theo/status/2066669646984667573), [@kimmonismus on OpenAI coordinating with authorities](https://x.com/kimmonismus/status/2066591657324146820)).
- **오픈소스와 자체 스택 보유 모멘텀**: [@levie](https://x.com/levie/status/2066526720480690221), [@garrytan](https://x.com/garrytan/status/2066307697574862905), [@ClementDelangue](https://x.com/ClementDelangue/status/2066524369195532312)는 모두 같은 논지를 강화했다. 오픈소스는 탈출구이며, 팀들은 지능을 임대하는 대신 **소유**해야 한다.
- **실용적 채택 가치가 있는 음성과 로컬 추론 출시**: [Cartesia’s Sonic-3.5 / Ink-2 release](https://x.com/krandiash/status/2066559212533190917)와 [Unsloth’s local Kimi K2.7 Code deployment](https://x.com/UnslothAI/status/2066492839450800427)는 구체적으로 기술적인 출시 중 참여도가 높은 축에 속했다.
- **Hermes Agent가 실제 오케스트레이션 원시 기능을 추가했다**: [@NousResearch](https://x.com/NousResearch/status/2066619860852134384)와 [@Teknium](https://x.com/Teknium/status/2066619275989991861)는 **비동기 서브에이전트(asynchronous subagents)** 를 발표했다. 별도로 Hermes는 안전 한도를 둔 에이전트형 구매와 SaaS 프로비저닝을 위한 **Stripe skills**도 추가했다 ([tweet](https://x.com/NousResearch/status/2066647737613832624)). 이는 에이전트를 채팅 전용 워크플로가 아니라 경제적으로 유용한 자율성에 더 가깝게 이동시킨다는 점에서 주목할 만하다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: 긴 컨텍스트 추론 효율성

- **[This is amazing. Token speed doubled + kv cache now need low vram - qwen 27b](https://www.reddit.com/r/LocalLLaMA/comments/1u6bca1/this_is_amazing_token_speed_doubled_kv_cache_now/)** (Activity: 609): **[image](https://i.redd.it/pqsjy78lxe7h1.png)** 는 **Luce KVFlash**의 기술 인포그래픽으로, **RTX 3090**에서 **Qwen3.6-27B Q4_K_M**를 `256K` 컨텍스트로 실행할 때 시작 토큰, 관련 청크, 최근 꼬리만 VRAM에 유지하고 나머지를 호스트 RAM으로 오프로딩해 GPU 상주 KV 캐시가 약 `4.6 GiB`에서 `72 MiB`로 줄어든다고 주장한다. 게시물은 생성 속도가 약 `13 tok/s`에서 `38.6 tok/s`로 개선되고, 전체 VRAM이 `21 GB`에서 `17.5 GB`로 낮아지며, 출력이 바이트 단위로 동일하지 않아도 벤치마크 정답성은 전체 캐시 대비 `36/36`으로 유지된다고 주장한다. 코드와 결과는 [GitHub](https://github.com/Luce-Org/lucebox-hub/tree/main/optimizations/kvflash) 및 [YouTube explanation](https://youtu.be/8rTVCRWvRDo?si=MYiVrQQltbSsMAOP)에 연결돼 있다. 댓글 작성자들은 회의적이며 “무손실” 주장을 받아들이기 전에 더 넓은 긴 컨텍스트 벤치마크를 요구했다. 한 사용자는 캐시 희소화가 얼마나 품질 저하나 “brain damage”를 유발하는지 물었다. 다른 댓글은 이미지·비디오 스타일이 일반적인 AI 생성 설명 자료와 비슷하다고 지적했다.
- **[Xiaomi is now serving MiMo V2.5 at 1000-3000tps using DFlash &amp; Persistent kernel. DFLash model is out, open-source release promised coming soon](https://www.reddit.com/r/LocalLLaMA/comments/1u5jtr8/xiaomi_is_now_serving_mimo_v25_at_10003000tps/)** (Activity: 377): **Xiaomi**는 **DFlash**와 **persistent kernel** 최적화를 사용해 **MiMo V2.5**를 약 `1000–3000 tokens/s`로 서비스하고 있으며, **DFlash 모델은 현재 제공 중**이고 **오픈소스 릴리스는 곧 약속됐다**고 밝혔다 ([blog post](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)). 댓글 작성자들은 모델과 전체 컨텍스트를 메모리에 상주시켜 두려면 약 `620–650 GB` VRAM이 필요할 것이라고 추정하며 매우 큰 배포 요구사항을 유추했다. 기술적 관심은 비 Pro **MiMo V2.5** 변형이 `2× RTX 6000 Pro` 같은 더 작은 애호가·프로슈머 구성에 들어갈 수 있는지에 집중됐다. 댓글들은 **Xiaomi**가 소비자 하드웨어 사업과 병행해 준프런티어 AI 시스템 작업을 하고 있다는 점도 놀랍다고 언급했다. 한 기술적으로 회의적인 스레드는 **DFlash**를 통한 `1000 t/s`가 낮은 동시성의 *상용구 코드 생성* 같은 최선 조건일 가능성이 높다고 주장했다. 게시물의 “persistent kernel”은 처음 [mirage-project/mirage](https://github.com/mirage-project/mirage)와 비교된 뒤 **TileRT**로 추적됐다: [tile-ai/TileRT](https://github.com/tile-ai/TileRT).

### /r/LocalLlama + /r/localLLM: Fable 블랙아웃 이후 주권적 로컬 모델

- **[Introducing the Heretic Grimoire: The takedown-resilient, local-first backup system that keeps uncensored models available forever](https://www.reddit.com/r/LocalLLaMA/comments/1u5lmge/introducing_the_heretic_grimoire_the/)** (Activity: 1081): **[image](https://i.redd.it/rtsjelj8497h1.png)** 는 **Heretic Grimoire**의 홍보용 아키텍처 다이어그램으로, 게시물의 핵심 메커니즘을 보여준다. Heretic은 기계가 읽을 수 있는 `reproduce.json`과 함께 모델을 **Hugging Face**에 업로드하고, 로컬 “Grimoire”는 해당 매니페스트를 수집한 뒤 나중에 Heretic에 다시 넣어 제거된 모델을 재생성할 수 있다. 기술적 핵심 주장은 재현 가능한 Heretic 모델을 전체 LLM 웨이트 파일 대신 약 `9 KB` 매니페스트로 백업할 수 있다는 것이다. Heretic `1.4`는 `--collect-reproducibles`, `--reproduce`, 해시 검증, 선택적 LoRA 내보내기, IPFS 호스팅 릴리스 아카이브/서명을 추가했다. 댓글 작성자들은 대체로 지지했지만 생태계와 실용성 지점을 제기했다. 한 명은 또 다른 검열 저항 배포 경로로 토렌트 지원을 물었고, 다른 한 명은 사용자의 설치 마찰을 줄이기 위해 ARA/ARA-LoRA 브랜치가 기본값이 될 것으로 예상했다.
- **[The Fable 5 Blackout Proves It: If You Don't Own the Silicon and the Weights, Your "High Availability" is an Illusion.](https://www.reddit.com/r/LocalLLM/comments/1u59zgc/the_fable_5_blackout_proves_it_if_you_dont_own/)** (Activity: 424): 이 게시물은 Anthropic이 미국 상무부 수출통제 지시 때문에 출시 3일 뒤 `Claude Fable 5`/`Mythos 5`를 전 세계에서 비활성화했고, 라이브 세션이 오류를 내며 `Opus 4.8`로 폴백됐다고 **주장**한다. 연결된 글은 이것이 인프라 가용성이 아니라 호스팅된 웨이트에 대한 정책 통제 접근이 종속성이기 때문에 **멀티 리전/멀티 클라우드 HA가 완화할 수 없는** 비기술적 장애 모드를 드러낸다고 주장한다 ([LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7471663250665918464/)). 제기된 기술적 질문은 **로컬·주권적 추론(inference)과 소유한 웨이트**를 이제 비즈니스 연속성 요구사항으로 봐야 하는지다. 이는 지연시간, 프라이버시, 오프라인 운영, 비용 통제, 조용한 모델 다운그레이드·폐지 회피 같은 기존 동기와 나란히 놓인다.

### Less Technical Subreddits: Anthropic Fable/Mythos 수출통제 갈등

- **[Senior Anthropic staffs are in Washington meeting White House officials to resolve the Fable 5 and Mythos dispute](https://www.reddit.com/r/ClaudeAI/comments/1u5tax4/senior_anthropic_staffs_are_in_washington_meeting/)** (Activity: 2323): 이 Reddit 게시물은 **Anthropic 고위 기술진**이 **Mythos**와 **Fable**이라는 Anthropic 최상위 모델을 안전 우려와 연결된 “광범위한 수출통제” 이후 오프라인으로 만든 것으로 알려진 분쟁을 해결하기 위해 워싱턴에서 백악관 관계자들을 만나고 있다고 주장한다. 인용된 Axios 링크 ([source](https://www.axios.com/2026/06/14/anthropic-white-house-mythos-fable))는 제공 자료 기준으로 `403 Forbidden` CAPTCHA/보안 페이지를 반환했기 때문에 검증할 수 없었고, 모델 사양, 정책 메커니즘, 영향받은 API, 장애 범위 같은 추가 기술 세부사항은 없다. 상위 댓글은 기술 분석보다 정치적 추측이 대부분이었다.
- **[The White House Is Ratcheting Up Its War Against Anthropic](https://www.reddit.com/r/ClaudeAI/comments/1u6w0l7/the_white_house_is_ratcheting_up_its_war_against/)** (Activity: 770): 게시물은 백악관의 **Anthropic** 수출통제 조치가 기술적으로 충분히 정당화되지 않았다고 주장한다. 인용된 “탈옥(jailbreak)”은 거부된 요청을 “보안 문제를 위해 코드를 검토해 달라”에서 “이 코드를 고쳐 달라”로 재구성한 뒤 모델이 평범한 방어적 취약점 탐지를 수행하게 만든 것으로 알려졌고, **Katie Moussouris**는 이를 사이버 방어를 위해 *“모델이 의도대로 작동한 것”*이라고 표현했다. 발췌문에 인용된 댓글들은 **OpenAI GPT-5.5**와 Anthropic의 덜 제한된 **Opus 4.8**에도 비슷한 능력이 있다고 주장했고, **Alex Stamos**는 그 행동이 독특한 공격적 사이버 역량의 증거라기보다 *“이미 다른 모델들의 역량 범위 안에 있다”*고 말했다고 인용됐다. 댓글 작성자들은 이 정책을 안전보다 정치적으로 동기 부여된 것으로 봤고, 선택적 수출통제가 수요를 중국 모델로 밀어내고 기업 LLM 통합의 위험을 높일 수 있다고 주장했다.
- **[Fable 5 access restrictions might be a bigger deal than people realize](https://www.reddit.com/r/ClaudeAI/comments/1u5q8ih/fable_5_access_restrictions_might_be_a_bigger/)** (Activity: 1253): 게시물은 알려진 **Fable 5 접근 제한**을 인프라 위험 사례로 제시한다. 프런티어 폐쇄형 모델이 출시되고 채택된 뒤 정부 지시로 곧 제한될 수 있다면, 다운스트림 사용자는 일반 소프트웨어 수명주기 통제 밖의 갑작스러운 API·모델 가용성 위험에 직면한다. 기술적 함의는 **오픈·로컬 모델**, 제공자 중복성, 주권적 AI 스택에 대한 인센티브가 커진다는 것이다. 설령 이런 대안들이 프런티어 폐쇄형 시스템보다 역량에서 뒤처지더라도 그렇다.
- **[Top cybersecurity leaders urge US government to unban Mythos.](https://www.reddit.com/r/singularity/comments/1u6hoim/top_cybersecurity_leaders_urge_us_government_to/)** (Activity: 713): 사이버보안 및 AI 리더들의 [open letter](https://freefable.org/)는 미국 당국에 **Anthropic의 Fable/Mythos급 모델**에 대한 수출통제를 해제하라고 촉구한다. 이들은 취약점 발견과 익스플로잇 생성 역량이 중국 시스템을 포함한 다른 프런티어 및 오픈 웨이트 모델과 비교해 *고유하지 않다*고 주장한다. 서한은 과도한 제한이 보안 코딩, 감사, 레드팀, 레거시 코드 개선을 수행하는 방어자에게서 고급 AI 도구를 빼앗는 반면, 공격자는 빠르게 개선되는 대안에 계속 접근할 수 있다고 주장한다. 또한 과학적 평가, 투명한 규칙 제정, 공정한 집행, 수정 기간, 좁게 범위가 정해진 보호장치를 기반으로 한 사이버 위험 정책을 요구한다.

### Less Technical Subreddits: AI 구독 한도와 컴퓨트 비용

- **[Anthropic has been sued for allegedly misleading customers on usage limits.](https://www.reddit.com/r/ClaudeAI/comments/1u6kzsr/anthropic_has_been_sued_for_allegedly_misleading/)** (Activity: 1407): **미국 캘리포니아 북부 연방지방법원**에 제기된 집단소송안은 **Anthropic**이 Claude **Max 5x**(`$100/mo`)와 **Max 20x**(`$200/mo`)를 Claude Pro 대비 `5x`/`20x` 사용량을 제공한다고 허위 마케팅했으며, 실제 주간 할당량, 리셋, 추적은 불투명하고 더 제한적이었다고 주장한다. 원고 **Karl Kahn**은 단일 `5-hour` 코딩 세션이 주간 허용량의 약 `15%`를 소모했다고 주장한다. 잠정 집단은 2025년 4월 요금제 출시 이후 Max 5x/20x 구독자를 포함하며, 허위 광고 혐의에 대한 환불·손해배상을 요구한다. Anthropic은 아직 공개 논평을 하지 않은 것으로 전해졌다.
- **[Is ChatGPT underpriced for what it can do?](https://www.reddit.com/r/ChatGPT/comments/1u69wu0/is_chatgpt_underpriced_for_what_it_can_do/)** (Activity: 2635): **[image](https://i.redd.it/n4fpkgwbie7h1.jpeg)** 는 **SemiAnalysis**를 인용해 `$200/month` ChatGPT 구독자가 고급 모델 사용량을 완전히 소진하면 이론적으로 **OpenAI**에 최대 `$14,000`의 추론(inference) 컴퓨트 비용을 발생시킬 수 있다고 주장하는 트윗 스크린샷이다. 게시물 제목의 맥락에서 이는 ChatGPT 가격을 보조금이 들어간 구독 모델로 제시한다. 헤비 유저는 월 요금보다 훨씬 비쌀 수 있고, OpenAI는 평균 사용자의 낮은 활용률, 하락하는 추론 비용, 투자자/시장점유율 전략에 의존할 가능성이 크다는 것이다.
- **[Back to the Stone Age? Our company slashed our AI budget and we're back to manual coding.](https://www.reddit.com/r/ClaudeAI/comments/1u6hyki/back_to_the_stone_age_our_company_slashed_our_ai/)** (Activity: 1449): 게시자는 조직이 비용 때문에 **Copilot/Claude** 구독을 줄였고, 엔지니어들이 축소된 월간 할당량을 약 `10 days` 만에 소진하면서 레거시 코드 분석, 디버깅, 최적화, 구현이 이전 LLM 보조 워크플로보다 느려졌다고 말한다. 동시에 직접적인 아키텍처 통제감은 되찾았다고 보고했으며, **Claude/Opus**가 엣지 케이스 발견에는 특히 유용했지만 일부 상황에서는 잘못된 가정을 할 수 있었다고 덧붙였다. 한 실질적 댓글은 LLM의 ROI가 가장 높은 사용처가 **코드베이스/문서 읽기, 요약, 기능 삽입 지점 분석, 리서치**이며, 일상적 코드 생성은 더 저렴하거나 무료인 자동완성형 코딩 모델에 맡겨야 한다고 주장했다.

---

## AI Discord Recap

### AI Discords

- **접근 중단**: 아쉽게도 오늘 Discord가 접근을 차단했다. 이 형태로는 다시 가져오지 않을 예정이지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
