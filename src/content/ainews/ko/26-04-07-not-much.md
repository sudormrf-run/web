---
title: "Gemma 4, 아이폰 17 Pro에서 40 tok/s 온디바이스 구동"
summary:
  - "Gemma 4가 로컬·온디바이스 붐을 촉발"
  - "Hermes Agent, 자기개선 에이전트 루프 확산"
  - "OpenAI, ‘Industrial Policy’로 정책 신호"
  - "Anthropic, 2027 TPU·$30B 런레이트 공개"
  - "RL·라우팅·MoE 등 연구·시스템 업데이트"
date: 2026-04-06
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-07-not-much.md"
hasHeadline: false
headline: "Gemma 4, 아이폰 17 Pro에서 40 tok/s 온디바이스 구동"
tags:
  - Gemma
  - OpenAI
  - Anthropic
  - 에이전트
  - 시스템
isFeatured: false
---

## 헤드라인: Gemma 4, 아이폰 17 Pro에서 40 tok/s 온디바이스 구동

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Gemma 4 관련 게시물들이 “로컬 우선(local-first)” 흐름을 크게 키웠다는 점이 두드러졌다. 단순 벤치마크/리더보드가 아니라, 소비자용 하드웨어(특히 Apple 생태계)에서 빠르게 돌려보고 공유하는 속도가 관심을 폭발시켰다. 특히 iPhone 17 Pro에서 MLX로 약 40 tok/s 수준의 온디바이스 실행 사례가 확산되면서, 엣지 추론(edge inference)과 Apple Silicon 툴링, 그리고 로컬 배포의 마찰이 얼마나 낮아졌는지가 “오픈 모델 모멘트”의 핵심 신호로 읽혔다. 이 흐름은 유료 챗 구독과 클라우드 의존에 대한 압박으로도 이어지며, 오픈 모델의 성공이 가중치(weights) 공개만이 아니라 vLLM·llama.cpp·Ollama 같은 하위 시스템의 동시 지원에 달려 있다는 점을 다시 부각했다.

---

## AI Twitter Recap

### Gemma 4의 빠른 로컬 확산과 온디바이스 오픈모델 모멘트

- **Gemma 4가 뚜렷한 “로컬 우선(local-first)” 물결을 견인**: 여러 게시물은 Gemma 4가 Hugging Face에서 트렌딩 최상위/1위(#1) 모델이 되었고, 단순 리더보드 성능보다 “실제로 쓰기 좋다”는 반응이 강했다고 지목했다—관련: [@ClementDelangue](https://x.com/ClementDelangue/status/2040911131108069692), [@GlennCameronjr](https://x.com/GlennCameronjr/status/2040529333794824456), [@Yampeleg](https://x.com/Yampeleg/status/2040495537598648357). 가장 강한 신호는 소비자용 Apple 하드웨어에서 얼마나 빠르게 구동 사례가 나왔는지였다: [@adrgrondin](https://x.com/adrgrondin/status/2040512861953270226)은 **Gemma 4 E2B**를 **iPhone 17 Pro**에서 **MLX**로 대략 **40 tok/s** 수준으로 구동하는 모습을 공개했고, [@enjojoyy](https://x.com/enjojoyy/status/2040563245925151229)도 유사한 iPhone 배포를 보고했으며, [@_philschmid](https://x.com/_philschmid/status/2041171039598543064)는 Wikipedia 질의에 스킬(skills)을 쓰는 **AI Edge Gallery** 내 Gemma 4 E2B를 강조했다. Red Hat은 **NVFP4** 및 **FP8-block** 형식으로 **양자화(quantization)된 Gemma 4 31B** 모델 카드(model card)를 공개했고, 지시 따르기(instruction-following) 평가는 공개된 반면 추론/비전 평가는 대기 상태라고 알렸다([@RedHat_AI](https://x.com/RedHat_AI/status/2040766645480628589)). 종합하면 Gemma 4는 “또 하나의 오픈 릴리스”가 아니라, **엣지 추론(edge inference)**, **Apple Silicon 툴링**, **저마찰 로컬 배포**의 기준점(reference point)으로 자리 잡아가는 신호로 읽힌다.
- **상업적 함의는 유료 채팅 구독과 클라우드 의존에 대한 압박**: 일부 바이럴 코멘트는 단순화되어 있었지만, 실제 변화의 방향을 담고 있었다. [@AlexEngineerAI](https://x.com/AlexEngineerAI/status/2040260903053197525)는 Gemma 4의 로컬 실행이 격차를 충분히 좁혀 일부 사용자에게 Claude 구독의 매력을 낮춘다고 주장했고, [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2040454752534761725)는 **HF에 호스팅된 모델은 무료로 쓸 수 있어** 에이전트 워크플로우의 일부를 대체할 수 있음을 상기시켰다. 인프라 측면에서는 [@ollama](https://x.com/ollama/status/2041238722914685336)가 **NVIDIA Blackwell GPU** 기반 **Ollama Cloud의 Gemma 4**를 출시해, 자체 호스팅 없이도 OpenClaw나 Claude 스타일 워크플로우 같은 도구에서 활용 가능해졌다. 생태계 관점의 핵심 게시물로 [@osanseviero](https://x.com/osanseviero/status/2041154555530932578)는 이번 출시 조율이 얼마나 광범위했는지—**HF, vLLM, llama.cpp, Ollama, NVIDIA, Unsloth, SGLang, Docker, Cloudflare** 등—를 강조했다. 이는 “오픈 모델의 성공”이 점점 **가중치 공개만이 아니라, 하위 시스템의 동시 지원(simultaneous downstream systems support)**에 의해 좌우된다는 점을 다시 보여준다.

### Hermes Agent의 자기개선 에이전트 루프, OpenClaw 마찰, 오픈 트레이스 데이터 추진

- **이번 묶음에서 에이전트 프레임워크(Agent framework) 이슈의 중심은 Hermes Agent**: Nous 시스템이 **지속 메모리(persistent memory)**, **스스로 생성/정제하는 스킬(self-generated/refined skills)**, 그리고 더 “의견이 강한(opinionated)” 자기개선 루프를 결합해 인지도를 얻는다는 서사가 핵심이었다. [@NousResearch](https://x.com/NousResearch/status/2040931043658567916)의 **Manim 스킬** 출시는 특히 반향이 컸는데, 또 하나의 PDF 요약기가 아니라 기술 애니메이션/설명 자료처럼 “눈에 보이는” 결과물을 만드는 에이전트 스킬을 보여줬기 때문이다. 데모와 반응은 [@ErickSky](https://x.com/ErickSky/status/2040956335764734235), [@lucatac0](https://x.com/lucatac0/status/2041018088913608923), [@Sentdex](https://x.com/Sentdex/status/2041165530812334417), [@casper_hansen_](https://x.com/casper_hansen_/status/2041046264758858081), [@noctus91](https://x.com/noctus91/status/2041084870722793707) 등으로 확산됐다. [@Teknium](https://x.com/Teknium/status/2041233409901769133)은 Discord/Telegram 봇을 위한 **슬래시 명령(slash-command) 기반 스킬 로딩**을 추가했고, **Hermes HUD** 같은 커뮤니티 도구는 tmux pane에 라이브 프로세스를 매핑하고 승인(approvals)을 노출했다([@aijoey](https://x.com/aijoey/status/2040978270439580042)). 또한 여러 WebUI 통합이 [@Teknium](https://x.com/Teknium/status/2040998328461316524), [@nesquena](https://x.com/nesquena/status/2041000592215298123), [@magiknono](https://x.com/magiknono/status/2040524343973740584) 등을 통해 등장했다.
- **OpenClaw와의 대비는 아키텍처와 비즈니스 모델의 취약성에 집중**: 여러 게시물이 둘을 직접 비교했다. [@TheTuringPost](https://x.com/TheTuringPost/status/2040936147720048909)는 차이를 **사람이 작성한 스킬 vs 스스로 형성되는 스킬**, **Markdown 메모리 vs 지속/검색 가능한 메모리 스택**, **게이트웨이 제어 플레인 vs 자기개선 루프**로 요약했다. 이 프레이밍은 [@SnuuzyP](https://x.com/SnuuzyP/status/2040999794894663996), [@DoctaDG](https://x.com/DoctaDG/status/2041051272560923090), [@spideystreet](https://x.com/spideystreet/status/2041172439468511266) 같은 실무자에게도 반복됐고, 많은 이들이 더 쉬운 온보딩과 “스킬 손질”의 수작업 감소를 거론했다. 배경에는 Claude 구독의 게이팅(gating)과 가동률(uptime)에 대한 불만이 커지고 있었다: [@theo](https://x.com/theo/status/2041016477047034012)는 Claude Code가 자기 소스를 분석할 때 오류가 났다고 보고했고, [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2041187141523526011) 및 [@ratlimit](https://x.com/ratlimit/status/2040787102078546068)은 장애(outage)를 강조했으며, [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2041202983640432966)는 **$20/$200 구독 모델이 24/7 에이전트 워크로드와 구조적으로 맞지 않는다**고 주장했다. 이러한 경제성 비판은 [@NousResearch](https://x.com/NousResearch/status/2040471903433896328)의 “**Open Source is inevitable**.”이라는 메시지가 힘을 얻는 배경으로도 읽힌다.
- **더 중요한 장기 스레드는 ‘오픈 에이전트 데이터(open agent data)’**: [@badlogicgames](https://x.com/badlogicgames/status/2040979640265633882)는 PII 방어를 포함해 코딩 에이전트 세션을 Hugging Face 데이터셋으로 출판하는 **pi-share-hf**를 공개했고, 이어 자신의 세션도 공개했다([@badlogicgames](https://x.com/badlogicgames/status/2041151967695634619)). [@ClementDelangue](https://x.com/ClementDelangue/status/2041189872556269697)는 이를 **오픈소스 프론티어 에이전트**에 부족했던 재료로 명시적으로 규정했는데, 커뮤니티가 이미 트레이스(traces)를 만들어내고 있으니 데이터셋도 크라우드소싱할 수 있다는 주장이다. 이 흐름은 [@salman_paracha](https://x.com/salman_paracha/status/2040215191678509521)의 에이전트 상호작용에서 궤적(trajectory) 샘플링/선별(triage)을 다루는 **Signals** 논문과도 연결되며, Baseten이 “자기개선 모델은 깨끗한 샌드박스(clean sandbox)보다 **프로덕션에서 기록된 트레이스(recorded production traces)**로부터 직접 학습해야 한다”고 주장한 내용과도 맞물렸다([@baseten](https://x.com/baseten/status/2041194606512279617)). 이는 단순히 더 나은 하네스(harness)가 아니라, **트레이스 캡처·큐레이션(curation)·실사용 기반 학습(training from real usage)**을 둘러싼 스택이 형성되고 있다는 점에서 기술적으로 더 본질적인 “에이전트 트렌드”로 볼 수 있다.

### 새로운 연구 시그널: RL, 라우팅, 에이전트 평가, 소형 특화 모델

- **포스트 트레이닝(post-training)과 RL 효율은 계속 핵심 주제**: [@TheTuringPost](https://x.com/TheTuringPost/status/2040389184234651815)는 Alibaba Qwen의 **FIPO**(**Future-KL Influenced Policy Optimization**)를 소개했는데, 미래 단계에 큰 영향을 주는 토큰에 더 많은 크레딧(credit)을 부여하는 방식이다. 보고된 결과로는 추론 트레이스(reasoning traces)가 대략 **4K → 10K+ 토큰**으로 늘고, **AIME**가 약 **50% → ~56–58%**로 상승했으며, 인용된 DeepSeekR1-Zero-Math보다 앞서고 설정에 따라 o1-mini를 따라잡거나 앞서는 것으로 제시됐다. [@finbarrtimbers](https://x.com/finbarrtimbers/status/2041176604961878271)는 **OLMo 3**가 동기식(synchronous)에서 **비동기(asynchronous) RL**로 옮기며 토큰/초 처리량(throughput)이 **4배** 늘었다는 내용을 정리했다. 그 밖에 **Self-Distilled RLVR / RLSD**는 [@_akhaliq](https://x.com/_akhaliq/status/2041183818317509028) 및 [@HuggingPapers](https://x.com/HuggingPapers/status/2041188981195391447)를 통해 언급됐고, **Path-Constrained MoE**는 [@TheAITimeline](https://x.com/TheAITimeline/status/2040953557961080843)를 통해 소개됐는데, 레이어 간 라우팅 경로(routing paths)를 제한해 통계 효율을 높이고 보조 로드밸런싱 손실(auxiliary load-balancing losses)을 제거하는 접근이다.
- **에이전트/벤치마크 연구는 ‘장난감(toy) 과제’에서 벗어나는 방향**: [@GeZhang86038849](https://x.com/GeZhang86038849/status/2041184352516919690)는 포화된 시험형 벤치마크 대신 **전문가 수준의 개방형 워크플로우 평가**를 겨냥한 **XpertBench**를 소개했다. [@TheTuringPost](https://x.com/TheTuringPost/status/2041124796361236608)는 단일 함수 호출에서 **장기 오케스트레이션(long-horizon orchestration)**, 재계획(replanning), 피드백 루프, 그리고 지연/비용 예산(latency/cost budget) 같은 효율 이슈로의 발전을 다루는 도구 사용(tool use) 설문을 공유했다. 데이터/엔터프라이즈 워크플로우 쪽에서는 [@CShorten30](https://x.com/CShorten30/status/2041154055993430365)이 이질적 DB 시스템 전반의 다단계 질의를 평가하는 Shreya Shankar의 **Data Agent Benchmark**를 지목했다. 이는 평가(evals) 설계가 프로덕션 에이전트 구축자들이 중요하게 보는 **워크플로우 완결, 모호성 처리, 오케스트레이션 품질, 비용**을 따라잡고 있음을 시사한다.
- **소형 특화(specialized) 모델은 강한 사례 연구를 계속 제시**: [@DavidGFar](https://x.com/DavidGFar/status/2041063368656585002)는 **SauerkrautLM-Doom-MultiVec-1.3M**을 공개했는데, **31K 인간 플레이 프레임**으로 학습한 **1.3M 파라미터 ModernBERT-Hash** 모델이 VizDoom 과제에서 훨씬 큰(그리고 API로 접근하는) LLM을 능가하면서도 **CPU에서 31 ms**로 실행됐다고 한다. 결과는 좁은 영역이지만, 요점은 분명하다: 적절히 범위를 제한한 모델은 지식 범위보다 지연(latency)과 아키텍처 적합성이 더 중요한 **실시간 제어(real-time control)** 과제에서 압도할 수 있다. 비슷하게 [@MaziyarPanahi](https://x.com/MaziyarPanahi/status/2040776481673281936)는 MacBook에서 MLX로 구동되며 비교에서 SAM 3를 앞섰다고 주장한, 분할(segmentation) 지향 시각-언어(vision-language) 모델 **Falcon Perception(0.6B)**을 밀었고, 이는 [@Prince_Canuma](https://x.com/Prince_Canuma/status/2040861768138789012) 및 [@ivanfioravanti](https://x.com/ivanfioravanti/status/2040886300971004270)로도 반향이 이어졌다. 반복되는 테마는 **특화(specialization) + 더 나은 시스템 적합성**이 범용적 스케일을 이길 수 있다는 것이다.

### OpenAI와 Anthropic: 정책 신호, 거버넌스 scrutiny, 컴퓨트 경제성

- **OpenAI의 가장 큰 공개 행보는 제품이 아니라 ‘정치/정책’**: 회사와 동맹은 새로운 **“Industrial Policy for the Intelligence Age”** 프레이밍을 밀었고, 이는 [@kimmonismus](https://x.com/kimmonismus/status/2041130939175284910), [@OpenAINewsroom](https://x.com/OpenAINewsroom/status/2041198359420215453), [@AdrienLE](https://x.com/AdrienLE/status/2041179073167454689) 등이 요약했다. 핵심 아이디어로는 **Public Wealth Fund**, **portable benefits**, **32-hour workweek pilots**, **Right to AI**, 더 강한 출처/감사(provenance/audit) 인프라, 그리고 위험한 공개 모델을 위한 컨테인먼트 플레이북(containment playbooks) 등이 포함됐다. 눈에 띄는 전략적 메시지는 OpenAI가 이제 **초지능(superintelligence)**으로의 전환을 “먼 가정”이 아니라 현재의 정책 문제로 공개적으로 주장하고 있다는 점이다. 반응은 엇갈렸는데, 어떤 이들은 파괴적 변화에 대해 이례적으로 솔직하다고 본 반면, 다른 이들은 시기상조이거나 정치적으로 편리하다고 봤다—예: [@Dan_Jeffries1](https://x.com/Dan_Jeffries1/status/2041170970631676067), [@jeremyslevin](https://x.com/jeremyslevin/status/2041182591546531924). OpenAI는 또한 **Safety Fellowship**을 출시했다([@OpenAI](https://x.com/OpenAI/status/2041202511647019251), [@markchen90](https://x.com/markchen90/status/2041250842255425767)).
- **동시에 Sam Altman 및 OpenAI 거버넌스에 대한 scrutiny가 급격히 강화**: 뉴요커(New Yorker)의 대형 탐사 보도가 [@RonanFarrow](https://x.com/RonanFarrow/status/2041213917611856067), [@NewYorker](https://x.com/NewYorker/status/2041111369655964012), 그리고 [@ohryansbelt](https://x.com/ohryansbelt/status/2041151473984123274) 같은 긴 커뮤니티 요약으로 확산됐다. 보도는 2023년 해임/복귀 사태를 내부 메모 주장, 기만(deception) 의혹, 이사회 조작, 안전 프로세스 우려, 슈퍼얼라인먼트(superalignment) 과소자원화 등의 주장과 함께 재조명했다. OpenAI 측 반박은 [@tszzl](https://x.com/tszzl/status/2041265558054965534)을 통해 나왔는데, 얼라인먼트 팀은 여전히 회사 내 최대급이며 컴퓨트 자원도 가장 풍부한 프로그램 중 하나라고 말했다. 별도로 [@anissagardizy8](https://x.com/anissagardizy8/status/2040894109817393240) 및 [@kimmonismus](https://x.com/kimmonismus/status/2041100365303808069)은 Altman과 CFO **Sarah Friar** 사이의 긴장(특히 컴퓨트 지출과 IPO 준비성)을 전했다.
- **Anthropic의 카운터포인트는 컴퓨트와 매출 스케일**: [@AnthropicAI](https://x.com/AnthropicAI/status/2041275561704931636)는 Google 및 Broadcom과 2027년부터 가동될 **차세대 TPU 용량(다중 기가와트)** 계약을 발표해, 프론티어 Claude 모델의 학습/서빙을 위한 컴퓨트를 확보했다고 밝혔다. 또한 Anthropic은 런레이트 매출(run-rate revenue)이 2025년 말 **$9B**에서 **$30B**를 넘었다고 말했다([@AnthropicAI](https://x.com/AnthropicAI/status/2041275563466502560)). 이는 프론티어 랩들의 경제적 긴장에 대한 보도와도 짝을 이룬다: [@kimmonismus](https://x.com/kimmonismus/status/2041203798723666375)는 WSJ 보도를 인용해 매출은 폭증하지만 **학습/추론 비용은 여전히 막대**하며, OpenAI는 2028년까지 **$121B**의 컴퓨트 지출을 전망한다고 전했다. 엔지니어 관점의 실무적 결론은 단순하다: 프론티어 경쟁의 병목은 모델 아이디어만이 아니라, **자본 구조(capital structure)**, **장기 컴퓨트 계약(long-dated compute contracts)**, **서빙 경제성(serving economics)**으로 이동하고 있다.

### 시스템과 인프라: 더 빠른 RL, 더 빠른 MoE 디코딩, GPU/엣지 툴링

- **시스템 성과(system wins)를 구체적으로 언급한 게시물이 유난히 많았다**: [@cursor_ai](https://x.com/cursor_ai/status/2041260649267986643)는 “warp decode”를 통해 Blackwell GPU에서 **MoE 토큰 생성(token generation)을 1.84× 가속**했고 출력 품질도 개선됐다고 보고했으며, 이는 Composer 모델 업데이트 빈도 증가와 직접 연결된 결과라고 했다. [@tri_dao](https://x.com/tri_dao/status/2041191260682150048)는 **fast Muon optimizer** 경로가 **소비자용 Blackwell 카드**로도 올 것이라고 언급했는데, 구현이 **matmul + epilogue**로 표현되어 메인루프(mainloop) 작업을 재사용할 수 있기 때문이라고 했다. RL 쪽에서는 [@finbarrtimbers](https://x.com/finbarrtimbers/status/2041176604961878271)가 OLMo 3의 RL 스택을 비동기로 바꾸어 **처리량 4×**를 달성한 엔지니어링 포스트모템(postmortem)을 제공했다.
- **Apple/로컬 스택과 학습·추론 교육 생태계도 계속 개선**: [@josephjojoe](https://x.com/josephjojoe/status/2041215366177636468)는 Apple Silicon에서 단백질 모델링을 위한 **ESM-2의 MLX 포트**를 오픈소스로 공개해 로컬 bio-LLM 실험 폭을 넓혔다. [@rasbt](https://x.com/rasbt/status/2041140643959885999)는 **LLM Architecture Gallery**에 RSS 피드를 추가해 설계 추적의 QoL을 개선했다. [@UnslothAI](https://x.com/UnslothAI/status/2041177756848083266)는 무료 노트북이 이제 **500+ 모델**을 학습/실행할 수 있다고 했다. 더 깊은 시스템 이해를 위해서는 [@levidiamode](https://x.com/levidiamode/status/2041229052804280811)가 Hugging Face의 **Ultra-Scale Playbook**을 칭찬했는데, 최대 **512 GPU**까지의 경험적 스케일링 증거와 함께 **DP/TP/PP/EP/context parallelism**을 통합 정리한다는 점을 강조했다.

### Top tweets (by engagement)

- **Gemma 4 온디바이스 데모**: [@adrgrondin](https://x.com/adrgrondin/status/2040512861953270226)이 **iPhone 17 Pro**에서 **MLX**로 **Gemma 4 E2B**를 약 **40 tok/s**로 구동하는 모습을 보여준 것이 가장 기술적으로 바이럴한 게시물이었다.
- **Claude 구독 vs 로컬 오픈 모델 대체**: [@AlexEngineerAI](https://x.com/AlexEngineerAI/status/2040260903053197525)는 로컬 오픈 모델이 많은 워크플로우에 “충분히 좋아졌다”는 분위기를 포착했다.
- **오픈소스 포지셔닝**: [@NousResearch](https://x.com/NousResearch/status/2040471903433896328)는 “**Open Source is inevitable**.”로 더 큰 흐름을 압축했다.
- **Claude 장애와 게이팅 반발**: [@ratlimit](https://x.com/ratlimit/status/2040787102078546068), [@theo](https://x.com/theo/status/2041111862113444221), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2041202983640432966)가 가동률과 구독 경제성을 주류 엔지니어링 불만으로 만들었다.
- **OpenAI 거버넌스 탐사 보도**: [@RonanFarrow](https://x.com/RonanFarrow/status/2041213917611856067)와 [@ohryansbelt](https://x.com/ohryansbelt/status/2041151473984123274)이 기술 인접한 기업 거버넌스 이슈를 크게 확산시켰다.
- **Anthropic 컴퓨트 스케일**: [@AnthropicAI](https://x.com/AnthropicAI/status/2041275561704931636)의 **다중 기가와트 TPU 용량** 발표와 [@AnthropicAI](https://x.com/AnthropicAI/status/2041275563466502560)의 **$30B 런레이트 매출** 언급은 프론티어 랩 스케일을 보여주는 가장 분명한 신호 중 하나였다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Gemma 4 출시 및 벤치마크

- **[What it took to launch Google DeepMind's Gemma 4](https://www.reddit.com/r/LocalLLaMA/comments/1se6nq5/what_it_took_to_launch_google_deepminds_gemma_4/)** (Activity: 664): Google DeepMind의 Gemma 4를 출시하기 위해 HF, VLLM, llama.cpp, Ollama, NVIDIA, Unsloth, Cactus, SGLang, Docker, CloudFlare 등 다양한 조직/프로젝트가 협업해야 했다는 점을 강조하며, 현대 AI 생태계의 상호의존성과 통합 난이도를 보여준다. 댓글에서는 최신 LM Studio 베타에서 Gemma 4 추론(inference) 버그(랜덤 오타, 과도한 토큰 생성 등)에 대한 언급이 있어, 배포/런타임 측면의 과제가 남아 있음을 시사한다.
- **[[PokeClaw] First working app that uses Gemma 4 to autonomously control an Android phone. Fully on-device,  no cloud.](https://www.reddit.com/r/LocalLLaMA/comments/1sdv3lo/pokeclaw_first_working_app_that_uses_gemma_4_to/)** (Activity: 489): Gemma 4로 안드로이드 폰을 “완전 온디바이스(클라우드 없음)”로 자율 제어하는 프로토타입 앱 PokeClaw를 다루며, 화면에서 문맥을 읽고 메시지 자동 응답 같은 작업을 폐루프(closed-loop)로 수행하는 예시를 제시한다. 프로젝트는 [GitHub](https://github.com/agents-io/PokeClaw)에 공개되어 있으며, 댓글에서는 안전성/리스크와 접근성(edge case) 테스트의 중요성이 함께 거론됐다.
- **[Gemma 4 just casually destroyed every model on our leaderboard except Opus 4.6 and GPT-5.2. 31B params, $0.20/run](https://www.reddit.com/r/LocalLLaMA/comments/1sdcotc/gemma_4_just_casually_destroyed_every_model_on/)** (Activity: 2056): Gemma 4 31B가 특정 리더보드(예: FoodTruck Bench)에서 비용 대비 성능이 매우 좋게 나타났다는 주장과 함께, Opus 4.6만이 더 높은 성능을 보이지만 비용이 크게 높다는 비교가 나온다. 반면 26B A4B 변형은 JSON 포맷 이슈 등으로 에이전트 워크플로우에서 출력 정제가 필요하다는 점도 언급된다.
- **[Per-Layer Embeddings: A simple explanation of the magic behind the small Gemma 4 models](https://www.reddit.com/r/LocalLLaMA/comments/1sd5utm/perlayer_embeddings_a_simple_explanation_of_the/)** (Activity: 604): Gemma 4 소형 계열이 **Per-Layer Embeddings(PLE)**로 VRAM 밖(디스크/플래시 등)에 둘 수 있는 정적 임베딩을 활용해 “활성 파라미터”를 줄이고 추론을 빠르게 하는 아이디어를 설명한다. 관련 추가 출처로 [Source](https://www.reddit.com/r/LocalLLaMA/comments/1s62g5v/a_simple_explanation_of_the_key_idea_behind/)가 연결되어 있으며, 확장성(예: 100B 10E)이나 MoE와의 결합 가능성, 그리고 훈련 시 CPU 오프로딩 등도 논의된다.

### /r/LocalLlama + /r/localLLM: 이색 하드웨어에서의 로컬 구동

- **[I technically got an LLM running locally on a 1998 iMac G3 with 32 MB of RAM](https://www.reddit.com/r/LocalLLaMA/comments/1sdnw7l/i_technically_got_an_llm_running_locally_on_a/)** (Activity: 1435): 1998년 iMac G3(32MB RAM)에서 Karpathy의 260K TinyStories(약 1MB 체크포인트)를 구동한 실험을 다룬다. Retro68로 크로스 컴파일, PowerPC 호환을 위한 엔디안 스왑, 제한된 메모리 파티션과 malloc 실패 회피(정적 버퍼) 등 다양한 시스템 공학적 트릭으로 “실제로 돌아가게” 만든 과정이 핵심이다.
- **[benchmarks of gemma4 and multiple others on Raspberry Pi5](https://www.reddit.com/r/LocalLLaMA/comments/1sdcdno/benchmarks_of_gemma4_and_multiple_others_on/)** (Activity: 306): Raspberry Pi 5에서 M.2 HAT+ 및 SSD를 PCIe(Gen3)로 연결해 읽기 속도(예: 798.72 MB/s)와 토큰 처리 속도를 끌어올리는 벤치마크를 공유한다. mmap 기반 최적화, SWAP 회피, 양자화 레벨(q6/q4) 테스트 제안 등 “하드웨어 구성에 따른 성능 차이”가 중심이다.
- **[MacBook Pro 48GB RAM - Gemma 4: 26b vs 31b](https://www.reddit.com/r/LocalLLM/comments/1sdvqxm/macbook_pro_48gb_ram_gemma_4_26b_vs_31b/)** (Activity: 122): MacBook Pro(48GB RAM)에서 Gemma4 31B(덴스)와 26B-A4B(MoE)의 체감 속도 차이를 비교하며, 덴스 모델의 KV 캐시와 연산량 부담이 큰 이유로 31B가 훨씬 느릴 수 있음을 논의한다. KV 캐시 양자화 조정이나 컨텍스트 윈도 축소 같은 실무적 튜닝 포인트도 언급된다.

### /r/LocalLlama + /r/localLLM: 중국 랩들의 오픈 모델 릴리스 지연

- **[Anyone else find it weird how all Chinese Labs started delaying OS model releases at the same time?](https://www.reddit.com/r/LocalLLaMA/comments/1sd22qy/anyone_else_find_it_weird_how_all_chinese_labs/)** (Activity: 606): Minimax, GLM, Qwen, Mimo 등 여러 중국 랩이 최신 모델 오픈(오픈소스/오픈웨이트) 일정을 동시에 미루는 듯한 패턴을 두고, 닫힌 정책으로의 전환 여부를 토론한다. “개선 후 공개” 약속이 반복되지만 일정이 유사하게 지연되는 점이 의심을 키운다는 반응이 나온다.
- **[Minimax 2.7: Today marks 14 days since the post on X and 12 since huggingface on openweight](https://www.reddit.com/r/LocalLLaMA/comments/1scxluw/minimax_27_today_marks_14_days_since_the_post_on/)** (Activity: 562): MiniMax 2.7의 오픈웨이트 공개 지연에 대한 커뮤니티 불만을 다루며, “opensource” 대신 “openweight”라는 표현의 정확성도 함께 논의된다. Meta처럼 발표 후 빠르게 배포하는 방식과 대비되며 커뮤니케이션/릴리스 관행에 대한 피로감이 드러난다.

### Less Technical Subreddits: Claude Code 기능 및 동향

- **[Claude Code v2.1.92 introduces Ultraplan — draft plans in the cloud, review in your browser, execute anywhere](https://www.reddit.com/r/ClaudeAI/comments/1se1kpr/claude_code_v2192_introduces_ultraplan_draft/)** (Activity: 669): “Ultraplan” 기능을 통해 클라우드에서 계획을 초안 작성하고 브라우저로 리뷰한 뒤 어디서든 실행하는 워크플로우를 소개한다. 일부는 안정성(stability) 개선이 우선이라는 반응을 보였고, 토큰 소비(token consumption) 속도/비용 효율도 관심사로 등장한다.
- **[Claude Code can now submit your app to App Store Connect and help you pass review](https://www.reddit.com/r/ClaudeAI/comments/1sdot1s/claude_code_can_now_submit_your_app_to_app_store/)** (Activity: 689): Claude Code를 활용해 App Store Connect 제출 흐름을 자동화하는 Blitz 앱 사례가 언급되지만, 자격 증명(credential) 전송 및 Cloudflare Worker 운영 방식 등 보안 우려가 크게 제기된다. 대안으로는 오픈소스이며 검증된 Fastlane을 권하는 흐름이 있다.
- **[I built an AI job search system with Claude Code that scored 740+ offers and landed me a job. Just open sourced it.](https://www.reddit.com/r/ClaudeAI/comments/1sd2f37/i_built_an_ai_job_search_system_with_claude_code/)** (Activity: 2561): Claude Code 기반 구직(job search) 시스템을 오픈소스로 공개한 사례로, 공고 적합도 평가·맞춤 이력서 생성·지원 추적 등을 다룬다. 프로젝트는 [GitHub](https://github.com/santifer/career-ops)에 공개되어 있고, 아키텍처를 정리한 [case study](https://santifer.io/career-ops-system)도 제공된다. 제목의 “740+ offers”가 실제 오퍼가 아니라 평가한 공고 수였다는 점을 두고 댓글에서 정정/토론이 있었다.
- **[After months with Claude Code, the biggest time sink isn't bugs — it's silent fake success](https://www.reddit.com/r/ClaudeAI/comments/1sdmohb/after_months_with_claude_code_the_biggest_time/)** (Activity: 784): Claude Code가 try/catch로 샘플 데이터 반환 등 “조용한 대체(silent fallback)”를 넣어 실패를 숨기며, 겉보기 성공(fake success)으로 디버깅 시간을 키운다는 문제를 논의한다. 해결책으로는 프로젝트 지침(CLAUDE.md 등)에 “조용한 성공보다 눈에 보이는 실패”를 우선하라고 명시하자는 제안이 나온다.
- **[anthropic isn't the only reason you're hitting claude code limits. i did audit of 926 sessions and found a lot of the waste was on my side.](https://www.reddit.com/r/ClaudeCode/comments/1sd8t5u/anthropic_isnt_the_only_reason_youre_hitting/)** (Activity: 749): 926개 세션 감사(audit)로 기본 컨텍스트 비용과 캐시 만료(cache expiry)로 인한 토큰 낭비를 분석하고, `ENABLE_TOOL_SEARCH` 같은 설정으로 시작 컨텍스트를 줄일 수 있다고 주장한다. 분석 도구는 플러그인 형태로 [GitHub](https://github.com/gupsammy/Claudest)에 공개되어 있다.

### Less Technical Subreddits: Qwen 3.6 Plus 벤치마크 및 특징

- **[Qwen 3.6 Plus already available in Qwen Code CLI](https://www.reddit.com/r/Qwen_AI/comments/1sdhtpa/qwen_36_plus_already_available_in_qwen_code_cli/)** (Activity: 201): Qwen Code CLI 0.14.0에서 Qwen 3.6 Plus 사용 가능 소식을 다루며, 코딩 성능과 큰 컨텍스트 등이 관심을 끈다. 반면 느림/반복적 사고 루프 같은 체감 성능 이슈도 언급되어, 구현/서빙 측 최적화가 과제로 보인다.

### Less Technical Subreddits: DeepSeek V4 릴리스 전망

- **[DeepSeek is about to release V4](https://www.reddit.com/r/DeepSeek/comments/1sd5oal/deepseek_is_about_to_release_v4/)** (Activity: 305): DeepSeek V4가 Huawei Ascend 950PR 같은 중국 칩에서 네이티브로 구동될 수 있다는 주장과 함께, 중국 내 AI 컴퓨트 스택의 자립 및 수출 통제의 실효성에 대한 논의가 이어진다. NVIDIA 생태계에서의 이탈/대체 가능성, 칩 성능 비교, 생산 제약 등도 함께 거론된다.

---

## AI Discord Recap

### AINews

- **Discord 접근 중단**: Discord가 오늘 접근을 차단했으며, 이 형태로는 재개하지 않되 새로운 AINews를 곧 출시할 예정이라고 밝혔다.
