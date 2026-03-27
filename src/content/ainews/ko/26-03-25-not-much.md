---
title: "ARC-AGI-3 공개, 인간 100%·모델 <1%"
summary:
  - "ARC-AGI-3 벤치마크 공개, 인간 100%·모델 <1%"
  - "LangChain, Fleet 공유 스킬 레지스트리 출시"
  - "Google, Lyria 3 Pro로 3분 음악 생성 확장"
  - "LiteLLM PyPI 1.82.7/1.82.8 공급망 공격 경고"
  - "Intel Arc Pro B70 32GB, $949 로컬 추론 주목"
date: 2026-03-25
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-25-not-much.md"
hasHeadline: false
headline: "ARC-AGI-3 공개, 인간 100%·모델 <1%"
tags:
  - OpenAI
  - Codex
  - ARC-AGI-3
  - 에이전트
  - LangChain
  - Claude Code
  - 하드웨어
isFeatured: false
---

## 헤드라인: ARC-AGI-3 공개, 인간 100%·모델 <1%

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

ARC-AGI-3가 퍼즐/게임 형태의 상호작용(interactive) 환경을 기반으로 한 새로운 벤치마크(benchmark)로 공개됐다. 소개에 따르면 인간은 과제를 100% 해결하는 반면, 현재 최전선(frontier) 모델의 점수는 1% 미만으로 제시됐다.

핵심 논점은 “무엇을 측정하느냐”와 “어떻게 점수를 매기느냐”였다. ARC-AGI-3는 작업별 하네스(harness)나 사전 노출로 성능을 끌어올리는 방식보다, 사람 개입 없이 새로운 과제에 접근하고 사람 수준의 학습 효율을 보이는 ‘제로 준비(Zero-preparation) 일반화(generalization)’를 겨냥한다고 설명됐다.

커뮤니티는 점수 산정(효율 기반, 추가 행동 페널티 등) 방식에 대해 강하게 논쟁하면서도, 상호작용적이고 피드백이 희소한(sparse-feedback) 환경에서 현 LLM 에이전트(agent)의 약점을 드러낸다는 점 자체는 대체로 동의하는 분위기였다.

---

## AI Twitter Recap

### ARC-AGI-3 출시, 점수 논쟁, 그리고 무엇을 측정하나

- **ARC-AGI-3가 “일반(general)” 에이전트형(agentic) 추론(reasoning) 프런티어를 재설정**: [@arcprize](https://x.com/arcprize/status/2036860080541589529) and [@fchollet](https://x.com/fchollet/status/2036861192619384989) introduced **ARC-AGI-3**, a new interactive benchmark built around puzzle/game-like environments where **humans reportedly solve 100%** of tasks while current frontier models score **under 1%**. Chollet은 이 벤치마크가 작업별 하네스나 사전 노출로 “잘 맞추는” 능력보다, **사람 개입 없이 새로운 작업에 접근**하고 **사람 수준의 학습 효율**로 풀어낼 수 있는지를 측정한다고 설명했다 ([1](https://x.com/fchollet/status/2036866189587271797), [2](https://x.com/fchollet/status/2036877742428610625), [3](https://x.com/fchollet/status/2036879665655406944)). 또한 평가(eval) 자체의 제품화(productization)도 함께 제공했는데, [@mikeknoop](https://x.com/mikeknoop/status/2036904122549751907)이 강조한 검증 점수용 리플레이(replay) 시스템이 포함됐다.
- **즉각적인 논쟁 지점은 핵심 과제 설계가 아니라 점수 산정 프로토콜**: 기술 토론의 상당 부분은 ARC-AGI-3의 **효율(efficiency) 기반 점수**에 집중됐는데, 이는 에이전트를 **두 번째로 좋은 인간 행동 수(second-best human action count)**와 비교하고 추가 단계에 큰 페널티를 준다. [@scaling01](https://x.com/scaling01/status/2036864865307177430)은 이 때문에 헤드라인 “<1%”가 이전 ARC 버전과 비교하기 어렵고, 단순 완수(completion) 지표보다 더 가혹할 수 있다고 주장했다. 관련 스레드에서는 초인적 효율의 상한(cap), 더 풍부한 에이전트 하네스나 장고(長考) 모드 배제 등을 비판했다 ([1](https://x.com/scaling01/status/2036853669065306534), [2](https://x.com/scaling01/status/2036856362643210580), [3](https://x.com/scaling01/status/2036866103884775654), [4](https://x.com/scaling01/status/2036890367803429230)). Chollet은 의도된 설계라고 답했는데, 이 벤치마크는 명시적으로 **제로 준비(Zero-preparation) 일반화**를 다루며, 인간이 작업 주변에 시스템을 얼마나 잘 “맞춤 제작(custom-build)”할 수 있는지의 문제가 아니라는 취지였다 ([1](https://x.com/fchollet/status/2036870715392352751), [2](https://x.com/fchollet/status/2036868401843626302)). 유용한 외부 비판으로는 [@_rockt](https://x.com/_rockt/status/2036864121585438995)가 ARC-AGI-3가 *only* 유일한 비포화(unsaturated) 에이전트 벤치마크라는 주장에 반박하며 **NetHack**을 예로 든 글이 거론됐다.
- **커뮤니티의 초기 반응**: 비판적 입장에서도 이 벤치마크가 **상호작용적이고 피드백이 희소한 환경**에서 현 LLM 에이전트의 실제 약점을 드러낸다는 점에는 대체로 동의하는 분위기다. 긍정적 평가는 [@mark_k](https://x.com/mark_k/status/2036882659406762031), [@andykonwinski](https://x.com/andykonwinski/status/2036870772745261202), [@bradenjhancock](https://x.com/bradenjhancock/status/2036879154772402636)에서 나왔고, 더 신중하지만 긍정적인 반응으로는 [@jeremyphoward](https://x.com/jeremyphoward/status/2036891190646432042)와 [@togelius](https://x.com/togelius/status/2036989880887050333)가 “general game playing”과 과도하게 확장된 AGI 개념을 구분해 논의했다.

### 에이전트 인프라, 하네스, 그리고 엔터프라이즈 제품화

- **에이전트 스택이 더 ‘의견이 강해지고(opinionated)’, 더 배포 가능해지는 중**: 여러 출시가 하나의 공통 주제로 수렴했다. 팀들이 재사용 가능한 **skills**, **harnesses**, **sandboxes**를 1급 제품 프리미티브(primitives)로 패키징하고 있다. [@LangChain](https://x.com/LangChain/status/2036858148850671903)이 **Fleet shareable skills**를 출시했는데, 에이전트 간 재사용 가능한 도메인 지식을 코드화(codifying)하는 레지스트리(registry)로 소개됐다. 관련 코멘터리는 [@BraceSproul](https://x.com/BraceSproul/status/2036875457258471600), [@hwchase17](https://x.com/hwchase17/status/2036860332501852227), [@caspar_br](https://x.com/caspar_br/status/2036861283639967986)에서 이어졌다. [@AnthropicAI](https://x.com/AnthropicAI/status/2036944806317088921)은 **Claude Code auto mode**가 동작하는 방식을 공개하며, 분류기(classifier)가 매개하는 승인(approval)을 “완전 수동 확인”과 “제약 없는 자율성” 사이의 중간지대로 설명했다. [@_catwu](https://x.com/_catwu/status/2036852880624541938)는 해당 기능이 내부에서 폭넓게 사용 중이며 Team 사용자에게도 제공된다고 언급했다.
- **브라우저/코딩/워크플로우 에이전트는 프롬프트 래퍼가 아니라 학습 가능한 시스템으로**: [@browserbase](https://x.com/browserbase/status/2036851528586453300)가 Prime Intellect와 파트너십을 맺고, 사용자가 **BrowserEnv**에서 맞춤형 **browser agents**를 학습(train)할 수 있게 했다. 후속 내용은 [@PrimeIntellect](https://x.com/PrimeIntellect/status/2036886318945624110)에서 다뤄졌고, [@willccbb](https://x.com/willccbb/status/2036869858349224447)는 `verifiers` 내 BrowserEnv 지원을 언급했다. [@cursor_ai](https://x.com/cursor_ai/status/2036873885665419773)는 실행과 코드를 고객 네트워크 내부에 유지하는 **self-hosted cloud agents**를 출시했다. [@imbue_ai](https://x.com/imbue_ai/status/2036852078627492269)는 임의의 저장소(repo)에 대해 개발 컨테이너(dev containers)를 생성하는 자기 구성(self-configuring) 에이전트 **Keystone**을 소개했고, [@SierraPlatform](https://x.com/btaylor/status/2036858449032863898)은 채팅/전화/다국어 상호작용/툴 사용/가드레일을 아우르는 고객 경험 플로우를 위한 “agent for building agents”인 **Ghostwriter**를 출시했다.
- **“agent = app” 명제는 점점 더 인프라로 뒷받침**: 여러 글이 에이전트를 단순 보조가 아니라 소프트웨어 엔트리포인트(entrypoints)로 설명했다. [@Base44](https://x.com/Base44/status/2036844452921397266)는 Gmail/Calendar/Drive/Outlook 전반의 이벤트 기반(event-driven) 앱 동작을 강조했다. [@weaviate_io](https://x.com/weaviate_io/status/2036814375403528412)는 코딩 에이전트가 오래된 문법을 환각(hallucinating)하지 않도록 최신 Weaviate API를 쓰게 하는 **Agent Skills**를 출시했다. [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2036827952588234783)는 Codex/Claude에 Hugging Face buckets 기반의 **공유 지속 워크스페이스(shared persistent workspace)**를 부여하는 실용 패턴을 보여줬다. 더 전략적인 프레이밍으로 [@gneubig](https://x.com/gneubig/status/2036949907311915378)은 **LLMs as infra**와 **agent harnesses as apps** 사이에 이제 진짜 상호의존이 생겼으며, 이는 과거 하드웨어/아키텍처 결합과 유사하다고 주장했다.

### 모델·연구 출시: 멀티모달, 월드 모델, 자기개선

- **Google이 Lyria 3를 더 완전한 음악 생성 플랫폼으로 확장**: [@Google](https://x.com/Google/status/2036836307612119488), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2036836176233918707), [@GeminiApp](https://x.com/GeminiApp/status/2036836190431711500)이 **Lyria 3 Pro**를 발표했다. 생성 길이를 **30초에서 최대 3분**으로 늘리고, 인트로/벌스/코러스/브리지 같은 **곡 구조(song structure)**를 더 잘 제어할 수 있으며, **Gemini**와 **Google AI Studio / Gemini API** 모두에서 사용할 수 있다고 했다. [@_philschmid](https://x.com/_philschmid/status/2036841210770333998)는 Pro는 **$0.08/song**, Clip은 **$0.04/song**으로 가격을 요약했고, 템포 제어, 시간 정렬된 가사, 이미지→음악 입력, **SynthID** 워터마킹을 포함한다고 정리했다.
- **LongCat-Next는 Meituan의 주목할 만한 오픈 멀티모달 릴리스**: [@Meituan_LongCat](https://x.com/Meituan_LongCat/status/2036861293140054510)이 **LongCat-Next**를 소개했다. 언어/비전/오디오를 통합 토큰 공간에서 다루는, **68.5B total / 3B active MoE**의 discrete-native 자기회귀(autoregressive) 멀티모달 모델로 설명됐다. 릴리스는 **native discrete multimodality**, 임의 해상도(any-resolution) 비전 토크나이저(**dNaViT**), OCR/GUI/문서 이해, 이미지 생성, 음성 이해/합성을 강조했다. 별도로 [@teortaxesTex](https://x.com/teortaxesTex/status/2036896514157502749)는 이미지 생성 품질에는 덜 감명받았다는 뉘앙스를 내면서도, 통합 latent/token 경로에 대한 아키텍처 아이디어를 강조했다.
- **월드 모델(world model)과 자기개선(self-improvement) 에이전트가 이날의 핵심 연구 테마**: [@BrianRoemmele](https://x.com/BrianRoemmele/status/2036826341581185171)는 **LeWorldModel**을 조명했다. 원시 픽셀(raw pixels)에서 **두 개의 손실 항(two loss terms)**만으로 학습한 컴팩트 JEPA 스타일 월드 모델로, **15M 파라미터**, **단일 GPU**를 사용하면서 latent-space 플래닝(planning)이 훨씬 빨라졌다고 전했다. 단순화의 요지는 **SIGReg**가 통상적인 JEPA 해크 스택 없이 학습을 안정화한다는 주장이다. 에이전트 쪽에서는 [@omarsar0](https://x.com/omarsar0/status/2036828723878793335)와 [@fancylancer3991](https://x.com/fancylancer3991/status/2036793932512657664)가 자기개선 과정 자체가 편집 가능한(editable) **Hyperagents**를 소개했고, 논문 리뷰 정확도가 **0.0→0.710**, 로보틱스 보상 설계가 **0.060→0.372**로 개선됐다고 보고했다. 관련 메모리(memory) 작업으로는 [@dair_ai](https://x.com/dair_ai/status/2036885342134173915)의 **MemCollab**이 언급됐는데, 크로스-에이전트 메모리 공유를 위해 보편적 과제 지식과 모델별 편향을 분리하려는 시도다.
- **Sakana AI의 “AI Scientist”가 출판 마일스톤에 도달**: [@SakanaAILabs](https://x.com/SakanaAILabs/status/2036840833690071450), [@hardmaru](https://x.com/hardmaru/status/2036841736702767135), [@jeffclune](https://x.com/jeffclune/status/2036866082418680297)는 **The AI Scientist**가 이제 **Nature**에 게재됐다고 밝혔다. 이는 기존 시스템과 v2 업데이트를 통합(consolidating)하는 의미로 설명됐다. 주목할 만한 주장으로는 아이디어 생성→실험→초안 작성→자동 리뷰까지의 엔드투엔드 자동화뿐 아니라, 더 강한 파운데이션 모델이 더 나은 기계 생성 논문을 만든다는 **“scaling law of science”**의 근거가 제시됐다.

### 추론, 스토리지, 그리고 로컬 하드웨어 경제성

- **스토리지와 아티팩트(artifact) 이동이 더 저렴해지고 에이전트 친화적으로**: [@fffiloni](https://x.com/fffiloni/status/2036736853991166120)는 Hugging Face의 스토리지 푸시를 “당신의 디스크는 더 이상 한계가 아니다(Your disk is no longer the limit)”라고 티징했다. 한편 [@LoubnaBenAllal1](https://x.com/LoubnaBenAllal1/status/2036778058439385568)와 [@victormustar](https://x.com/victormustar/status/2036792818274865469)는 **HF Buckets**를 **S3**와 비교하며 **$/TB/month**와 전송 성능 모두에서 유리하다고 주장했고, 데이터셋과 체크포인트에서 **Xet-style chunk-level deduplication**이 의미 있는 이점이라고 언급했다. 운영 관점의 맥락은 [@francoisfleuret](https://x.com/francoisfleuret/status/2036738024176779535)가 클러스터 운영자들에게 에이전트가 **I/O**를 얼마나 강하게 두드리는지 질문한 데서 드러났다.
- **추론(inference) 효율 경쟁은 런타임/아키텍처 전반에서 빠르게 전개**: [@sudoingX](https://x.com/sudoingX/status/2036795152178794993)는 **NVIDIA’s 3B Mamba2 Nemotron Cascade 2**에서 단일 GPU 장문 컨텍스트 처리(throughput)가 이례적으로 강하다고 보고했다. **RTX 3090**에서 **625K context**까지 **187 tok/s**를 유지한다는 주장으로, KV 양자화(quantization)로 **262K**까지 **112 tok/s**를 낸 **Qwen 3.5 35B-A3B**와 비교됐다. [@finbarrtimbers](https://x.com/finbarrtimbers/status/2036807872328466621)는 Cursor의 Composer 2 리포트가 **SGLang/TRT** 같은 일반 스택 대비 큰 효율 격차 때문에 RL 추론(inference)에 **Fireworks**를 사용했다고 언급했다. [@GoogleCloudTech](https://x.com/GoogleCloudTech/status/2036790201813442575)는 **TPU v7x / Ironwood**에서 프런티어 학습 최적화 가이드를 게시했다. 양자화/압축 쪽에서는 [@mirrokni](https://x.com/mirrokni/status/2036905273999200481)가 Google의 **TurboQuant** 글을 언급하며 **6x speedups**를 강조했고, [@vllm_project](https://x.com/vllm_project/status/2036989821156270501)는 컴팩트 하드웨어에서 **4M+ KV-cache tokens**를 하이라이트했다.
- **로컬 AI 하드웨어에 눈길을 끄는 데이터 포인트 2가지**: [@digitalix](https://x.com/digitalix/status/2036820057599197645)는 Intel의 신규 **Arc Pro B70**를 조명했는데, **$1000 미만에 32GB VRAM**이라는 점이 소프트웨어 스택 관련 주의점에도 불구하고 **VRAM-per-dollar** 측면에서 중요한 움직임일 수 있다는 평가가 나왔다 ([example](https://x.com/QuixiAI/status/2036922193897017750)). 별도로 [@xenovacom](https://x.com/xenovacom/status/2036908326462665211)은 **WebGPU/Transformers.js**로 브라우저에서 **24B 모델**을 구동해 **M4 Max에서 약 50 tok/s**를 시연했는데, 브라우저 측 추론 상한이 빠르게 올라가고 있음을 시사하는 신호로 받아들여졌다.

### Top tweets (by engagement)

- **개인화와 메모리 품질**: [@karpathy](https://x.com/karpathy/status/2036836816654147718)는 어시스턴트의 장기 메모리가 종종 오래된 사용자 사실에 과적합(overfit)되어, 더 나은 도움보다 산만하고 저품질의 개인화를 유발한다고 주장했다.
- **Claude를 ‘슈퍼앱(super-app)’으로 보는 내러티브**: [@kimmonismus](https://x.com/kimmonismus/status/2036856308410773803)와 [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2036852118762700929)는 Anthropic의 제품 궤적이 좁은 모델 엔드포인트보다 점점 **super-app**에 가까워지고 있다고 지적했다.
- **Codex 생태계 활동**: [@OpenAIDevs](https://x.com/OpenAIDevs/status/2036851146300809531)는 API 크레딧 상품과 스타터 크레딧을 내건 **student Codex Creator Challenge**를 시작했다. [@reach_vb](https://x.com/reach_vb/status/2036904822641676716)는 **Codex App Server**가 오픈 소스임을 다시 상기시켰다.
- **Sora 축소는 전략적 재집중의 신호**: 상당수의 이야기가 전언(Secondhand)이긴 했지만, 여러 라운드업/코멘터리 포스트에서 OpenAI가 코딩/에이전트 제품과 핵심 인프라에 집중하기 위해 **Sora**를 축소(winding down)한다는 관측이 나왔다. [@TheRundownAI](https://x.com/TheRundownAI/status/2036752541581447214)와 [@thursdai_pod](https://x.com/thursdai_pod/status/2036983766418403692)는 이를 당일의 주요 업계 신호 중 하나로 다뤘다.

---

## AI Reddit Recap

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### /r/LocalLlama + /r/localLLM — Intel GPU Launch and Features

- **[Intel will sell a cheap GPU with 32GB VRAM next week](https://www.reddit.com/r/LocalLLaMA/comments/1s3e8bd/intel_will_sell_a_cheap_gpu_with_32gb_vram_next/)** (Activity: 1300): **Intel**은 3월 31일 `32GB VRAM`의 새 GPU를 `$949`에 출시할 예정인 것으로 소개됐다. 대역폭은 `608 GB/s`, 소비전력은 `290W`로, 대역폭 기준으로는 NVIDIA 5070보다 약간 아래로 포지셔닝된다는 설명이다. 이 GPU는 특히 Qwen 3.5 27B 같은 모델을 `4-bit quantization`으로 로컬 AI에 활용하는 데 도움이 될 수 있다는 기대가 언급됐다. 자세한 내용은 [PCMag's article](https://www.pcmag.com/news/intel-targets-ai-workstations-with-memory-stuffed-arc-pro-b70-and-b65-gpus)에서 확인할 수 있다. 댓글에서는 `$989`을 ‘저렴(cheap)’하다고 보기 어렵다는 회의감이 나오기도 했고, R9700 AI PRO와 비교하며 VRAM과 대역폭은 비슷하지만 소비전력이 약간 높다는 점을 언급하기도 했다. Intel 제품이 AI/LLM 용도에서 어떻게 경쟁할지에 대한 궁금증도 제기됐다.
  - Clayrone은 R9700 AI PRO 사용 경험을 공유하며 32GB VRAM과 640 GB/s 대역폭이 소형 폼팩터 서버 빌드에 만족스럽다고 했다. Vulkan용으로 빌드한 `llama.cpp`를 사용 중이며 문제없이 동작한다고 언급했고, 소비전력이 300W라는 점도 짚었다. Intel의 출시 예정 GPU가 직접 경쟁자가 될지 궁금해했다.
  - KnownPride는 Intel이 32GB VRAM GPU를 내놓는 것이, 대형 언어 모델(LLM)에 대한 수요가 커지는 상황에서 전략적 결정일 수 있다고 보며 시장 트렌드를 시사한다고 말했다.
  - wsxedcrf는 NVIDIA의 “Free is not cheap enough,”라는 발언을 인용하며 GPU 가치는 가격만이 아니라 생태계 전반에 달려 있다고 강조했다. Intel의 성공은 하드웨어 스펙뿐 아니라 소프트웨어/지원 인프라에 달려 있을 것이라는 취지다.
- **[Intel launches Arc Pro B70 and B65 with 32GB GDDR6](https://www.reddit.com/r/LocalLLaMA/comments/1s3bb3y/intel_launches_arc_pro_b70_and_b65_with_32gb_gddr6/)** (Activity: 493): **Intel**이 `32GB GDDR6` 메모리를 탑재한 **Arc Pro B70**과 **B65** GPU를 출시했다. B70은 `$949`, `387 int8 TOPS`, `602 GB/s` 대역폭으로 소개됐고, **NVIDIA RTX 4000 PRO**의 `1290 int8 TOPS`, `672 GB/s`와 비교됐다. B70의 전력 소모는 `290W`로 RTX 4000의 `180W`보다 높다. B70 4개 묶음은 `$4,000`으로 `128GB` GPU 메모리를 제공하며, `70B` 모델 로컬 추론(inference) 관점에서 경쟁력 있는 딜로 언급됐다. [Source](https://videocardz.com/newz/intel-launches-arc-pro-b70-at-949-with-32gb-gddr6-memory) 댓글에서는 **Intel**과 **vLLM**의 협업으로 B-시리즈 지원이 메인라인 vLLM에 통합되어 출시 첫날(day-one) 지원과 준수한 성능을 기대할 수 있다는 점을 하이라이트했다. `$949`에 `32GB`라는 가격 포인트는 `70B` 모델에 실용적이라는 평가도 나왔다.
  - Intel과 vLLM의 협업으로 Arc Pro B70/B65가 day-one 지원을 확보했지만, B70의 성능은 RTX 4000 PRO 대비 크게 낮다는 비교가 제시됐다(387 vs 1290 int8 TOPS). 대역폭도 602 vs 672 GB/s로 낮고, VRAM은 32GB vs 24GB로 크지만 전력 소모는 290W vs 180W로 더 높다.
  - Arc Pro B70의 `$949` 가격은 특히 `70B` 모델 로컬 추론에서 GB당 가격 측면이 매력적이라는 의견이 나왔다. RTX 3090 같은 대안 대비 비용 부담을 낮출 수 있다는 맥락에서 언급됐다.
  - RTX 3090 대비 추론 속도가 느릴 수 있고 CUDA 미지원이라는 점이 우려로 제기됐지만, 더 큰 메모리와 효율 개선이 프롬프트 처리에 이점이 될 수 있다는 반론도 있었다. 다만 Intel 드라이버 지원에 대한 걱정이 사용자 경험에 영향을 줄 수 있다는 의견이 나왔다.

### /r/LocalLlama + /r/localLLM — LiteLLM Supply Chain Attack and Alternatives

- **[After the supply chain attack, here are some litellm alternatives](https://www.reddit.com/r/LocalLLaMA/comments/1s34173/after_the_supply_chain_attack_here_are_some/)** (Activity: 372): 이미지에는 Python 패키지 **litellm**의 공급망(supply chain) 공격을 다룬 **Andrej Karpathy**의 트윗이 담겼다고 요약됐다. `1.82.7` 및 `1.82.8` 버전이 자격 증명(credential) 탈취형 악성코드로 손상(compromised)되었을 수 있어, SSH 키나 DB 비밀번호 같은 민감정보 유출 위험을 부각한다. 게시물은 litellm 대안으로 **Bifrost**, **Kosong**, **Helicone** 등을 제안하며, 예컨대 Bifrost는 litellm 대비 `~50x faster P99 latency`를 주장하고, Helicone은 폭넓은 프로바이더 지원과 분석(analytics) 기능을 내세운다고 했다. 댓글에서는 Python/Node.js의 큰 의존성 트리(dependency tree)가 취약점과 신뢰성 문제로 이어질 수 있다는 우려가 나왔고, 네트워크 접근 제한, 의존성 버전 고정(pinning), 네트워크 트래픽 모니터링 같은 완화책이 제안됐다.
  - FullstackSensei는 Python/Node.js에서 의존성 트리가 지나치게 커져, 작은 프로젝트도 기가바이트 단위 의존성을 갖게 되는 문제를 지적했다. 이런 복잡성 때문에 업데이트를 꺼리게 되고, 결과적으로 취약점이 쌓일 수 있다는 취지다.
  - _realpaul은 공급망 공격 완화책으로 네트워크 접근 제한, 신규 라이브러리의 즉시 도입 회피, 의존성 버전 고정(pinning)을 강조했다. 또한 배포 전 샌드박스(sandbox) 실행과 네트워크 트래픽 모니터링을 권했다.
  - RoomyRoots와 Living_Director_1454는 서드파티 라이브러리 의존이 높을수록 공급망 공격 위험이 커진다고 지적했다. Living_Director_1454는 LiteLLM CI/CD 파이프라인에서 사용된 보안 스캐너 Trivy가 손상된 사례를 언급하며 소프트웨어 공급망의 취약성을 강조했다.
- **[Litellm 1.82.7 and 1.82.8 on PyPI are compromised, do not update!](https://www.reddit.com/r/LocalLLaMA/comments/1s2c1w4/litellm_1827_and_1828_on_pypi_are_compromised_do/)** (Activity: 555): PyPI의 `litellm` 패키지 `1.82.7` 및 `1.82.8` 버전이 손상되었다는 내용이 **FutureSearch.ai**에 의해 확인되었다고 요약됐다. 이는 공급망 침해로 보이며 수천 명의 사용자에게 영향을 줄 수 있다고 했다. 해당 침해는 **Callum McMahon**이 발견했으며, 자세한 사후 분석(postmortem)은 [here](https://futuresearch.ai/blog/no-prompt-injection-required)에 정리됐다고 한다. 공격은 **LiteLLM CEO**의 GitHub 계정이 해킹되어 발생했으며, 리포지토리에 *"teampcp owns BerriAI"*라는 메시지가 표시되는 등 무단 변경이 있었다는 설명이다. 이 사건은 AI 툴링에서 공급망 공격 위험이 커지고 있음을 보여주며, 프로덕션에서 버전 고정과 신중한 업데이트가 중요하다는 점을 강조한다. 댓글에서는 자동 업데이트를 피하고 버전을 고정해야 한다는 의견이 많았고, 반복적·실질 없는 댓글이 많아 자동 봇 가능성을 우려하는 반응도 있었다.
  - 손상된 LiteLLM 1.82.7/1.82.8에 악성 코드가 주입되었고, 시스템 타임존이 Asia/Tehran일 때 파괴적 명령(`rm -rf /`)을 실행한다는 주장도 언급됐다. 공급망 공격의 심각성을 강조하며 프로덕션에서 버전 고정과 자동 업데이트 회피가 중요하다는 취지다.
  - 공격자는 ‘teampcp’로 알려진 그룹일 수 있으며, LiteLLM CEO의 GitHub 계정 탈취를 통해 침투했고, LiteLLM 시작 시 시크릿을 훔치는 악성코드를 푸시했다는 설명이 제시됐다. 고프로필 계정의 취약성과 파급 범위를 강조한다.
  - GitHub 리포지토리에 ‘teampcp owns BerriAI’ 메시지가 표시되도록 변경되었다는 점이 침해 증거로 언급됐다. 안전한 버전으로 `<= 1.82.6` 사용을 권고한다는 내용도 포함됐다.

### /r/LocalLlama + /r/localLLM — New AI Model Releases and Benchmarks

- **[New open weights models: GigaChat-3.1-Ultra-702B and GigaChat-3.1-Lightning-10B-A1.8B](https://www.reddit.com/r/LocalLLaMA/comments/1s2pkfw/new_open_weights_models_gigachat31ultra702b_and/)** (Activity: 624): **AI Sage**가 MIT 라이선스로 공개한 신규 오픈 웨이트(open-weight) 모델 **GigaChat-3.1-Ultra-702B** 및 **GigaChat-3.1-Lightning-10B-A1.8B**를 소개했다. 모델은 [Hugging Face](https://huggingface.co/collections/ai-sage/gigachat-31)에 게시됐다고 한다. Ultra는 고자원 환경을 겨냥한 `702B MoE`로, `MMLU RU`, `Math 500` 등에서 DeepSeek-V3-0324, Qwen3-235B 대비 우수하다는 벤치마크 결과가 언급됐다. Lightning은 로컬 추론을 겨냥한 `10B A1.8B MoE`로, `native FP8 DPO`와 `MTP support`를 강조했고 14개 언어 멀티링구얼 성능과 BFCLv3에서 `0.76` 점수 등을 내세웠다. 영어와 러시아어에 최적화되었다는 설명도 포함됐다. 댓글에서는 러시아에서 개발된 점과 학습 데이터에 대한 국가 영향 가능성 등 지정학적 우려가 제기됐고, 러시아 관할 인프라 사용 시 정보기관 접근 가능성 같은 리스크도 언급됐다.
  - **Specialist-Heat-6414**는 MIT 라이선스의 702B MoE가 오픈 웨이트 생태계에 큰 추가라는 점에서, 지정학적 맥락과 별개로 기술적 의미가 크다고 평가했다.
  - **Qwen 비교**가 핵심 쟁점으로, Qwen 3.5 같은 모델과의 벤치마크가 필요하다는 의견이 나왔다. 2026년 기준으로 ‘GPT-3.5보다 낫다’는 비교만으로는 부족하다는 취지다.
  - **Investolas** 등은 GigaChat-3.1-Lightning-10B-A1.8B의 로컬 추론 가능성에 관심을 보였다. 활성 파라미터가 약 1.8B이고 단일 GPU에서 250+ tok/s를 품질 유지하며 낼 수 있다면 실용성이 클 수 있다는 추정이 제시됐다.
- **[DeepSeek Employee Teases "Massive" New Model Surpassing DeepSeek V3.2](https://www.reddit.com/r/LocalLLaMA/comments/1s39024/deepseek_employee_teases_massive_new_model/)** (Activity: 427): DeepSeek 직원이라고 주장하는 계정의 “DeepSeek V3.2를 능가하는” 신규 모델 개발 티저가 올라왔다가 빠르게 삭제됐고, 이후 가짜로 반박됐다는 요약이다. 해당 글은 SillyTavern, MiniMax, ZAI, Moonshot 같은 플랫폼 통합 가능성을 시사했지만, 진위는 [tweet](https://nitter.net/victor207755822/status/2036814461085110764)에서 가짜로 확인됐다고 했다. 댓글에서는 DeepSeek가 경쟁이 치열한 상황에서 출시 타이밍을 잘 조절하길 바란다는 의견과, 더 작은·효율형 버전에 대한 기대가 함께 나왔다. 여러 플랫폼이 언급된 점에 놀라워하며 광범위한 통합 전략을 시사한다고 보는 반응도 있었다.
  - TheRealMasonMac은 SillyTavern, MiniMax, ZAI, Moonshot 등 여러 플랫폼 사용 언급이 광범위한 통합 전략을 시사할 수 있다고 봤다.
  - ambient_temp_xeno는 신규 모델이 개인 사용자에게는 과도한 자원 요구를 할 수 있다는 우려를 제기했다.

### Less Technical Subreddits — Sora Shutdown and Impact

- **[OPENAI TO DISCONTINUE SORA !!](https://www.reddit.com/r/OpenAI/comments/1s2onhy/openai_to_discontinue_sora/)** (Activity: 2452): **OpenAI**가 Sora 비디오 플랫폼 앱을 중단할 예정이라는 요약이다. 이 앱은 사용자가 유명 영화 장면에 자신을 삽입하는 기능을 제공했지만, 제약이 많고 사용자 친화적이지 않다는 비판을 받았다고 한다. 재정적으로는 지속 불가능했으며, 하루 `$500k per day` 손실을 보고 있었다는 주장도 포함됐다. 결정 배경은 AI 프로젝트에서 자원 배분과 가치/영향 평가가 중요하다는 문제의식으로 연결됐다. 댓글에서는 Sora가 비용이 큰데 실용 가치가 제한적이었다는 의견이 많았고, 자원 비용 대비 효용을 따져야 한다는 공감대가 형성됐다고 요약됐다.
  - **TheTeflonDude**는 Sora가 하루 `$500k per day`를 잃고 있었다는 점을 강조하며 종료 결정의 주요 요인일 수 있다고 봤다.
  - **Willing_Leave_2566**는 Sora 같은 플랫폼이 낮은 노력 장벽으로 저품질 대량 생성물을 유도하고, 사용자가 컴퓨트(compute) 비용을 고려하지 않게 만들어 비효율을 키울 수 있다고 비판했다.
  - **Pakh**는 Disney가 `$1 billion`을 투자하고 `200 characters` 이상을 라이선스했다는 협업 맥락을 언급하며, 종료 결정이 큰 전략 전환을 시사한다고 봤다.
- **[Sora is officially shutting down.](https://www.reddit.com/r/OpenAI/comments/1s2oyl3/sora_is_officially_shutting_down/)** (Activity: 1954): Sora 앱의 X.com 공식 계정 공지 스크린샷 이미지로, Sora 앱 종료를 알리고 감사 인사를 전하며 앱과 API 타임라인에 대한 추가 정보를 곧 제공하겠다고 했다는 요약이다. Sora에 의존하던 사용자/개발자가 대안으로 옮겨가야 할 수 있음을 시사한다. 댓글은 유머와 비판이 섞였고, 한 사용자는 앱의 “코미디 가치”를 풍자적으로 언급했으며, 다른 사용자는 논란성 콘텐츠 생성 기능 상실을 우려했다는 식으로 정리됐다.
- **[SORA IS SHUTTING DOWN???](https://www.reddit.com/r/OpenAI/comments/1s2rqbg/sora_is_shutting_down/)** (Activity: 1234): **OpenAI**가 비디오 생성 앱 및 API인 **Sora**를 종료한다고 발표했다는 요약이다. Sora가 App Store에서 #1 앱이었던 시점과 맞물려 예상 밖이라는 반응도 포함됐다. 종료 배경으로는 컴퓨트를 코딩 및 엔터프라이즈에 재배치하기 위함이라는 설명이 제시됐고, **Anthropic**이 비디오보다 코딩에 집중하는 흐름이 영향을 줬을 수 있다는 추정도 언급됐다. 또한 Disney와의 파트너십(예: Marvel, Pixar, Star Wars 협업)에도 영향이 있을 수 있으며, 창작자들이 Runway, Kling 등으로 이동할 가능성이 거론됐다. 댓글 일부는 Sora가 성능 대비 비용이 과도해 종료가 불가피했다는 의견을 냈고, 다른 일부는 갑작스러움에 놀라워했다.
  - echox1000는 Sora가 높은 컴퓨트 비용과 낮은 성능으로 재정적 부담이 컸고, 종료는 필연적이었다는 취지로 말했다.
  - bronfmanhigh는 “정식” AI 비디오 크리에이터들이 Sora를 쓰지 않았다는 점을 들어 경쟁력이 낮았다고 주장했다.
  - KnightAirant는 Sora를 오픈 소스화하지 않은 점을 비판하며 ‘OpenAI’의 ‘Open’이 모순처럼 보인다는 의견을 내놨다.
- **[No more Sora ..?](https://www.reddit.com/r/StableDiffusion/comments/1s2pjf0/no_more_sora/)** (Activity: 1061): Sora 공식 계정 트윗 이미지로, Sora 앱 중단을 알리고 커뮤니티에 감사하며, 앱/API 종료 타임라인과 사용자 작업 보존에 대한 정보도 추가로 제공하겠다고 했다는 요약이다. 댓글에서는 중앙집중형 서비스는 중단될 수 있으니 로컬 솔루션이 더 신뢰할 만하다는 정서가 나타났고, 앱 오픈소스화를 요구하는 목소리도 있었다.
  - PwanaZana는 대형 모델을 로컬에서 돌리기 어려운 하드웨어 제약을 언급하며, 더 작고 효율적인 로컬 모델 필요성을 강조했다.
  - Sudden-Complaint7037는 AI의 수익성에 대한 투자자 회의가 커지고 있다는 시각을 언급하며, 지속 가능한 비즈니스 모델로의 재정렬 가능성을 시사했다.
- **[Sora is officially shutting down.](https://www.reddit.com/r/ChatGPT/comments/1s2oxnu/sora_is_officially_shutting_down/)** (Activity: 2831): X.com의 Sora 앱 공식 계정 공지 스크린샷을 바탕으로, 앱 종료와 감사 인사, 앱/API 종료 일정에 대한 추가 정보 제공 예정을 담고 있다는 요약이다. 댓글에서는 앱의 실제 영향/사용자 기반에 대한 회의가 있었고, 재정 문제를 고려할 때 프로젝트가 생각보다 오래 갔다는 반응도 있었다.

### Less Technical Subreddits — Claude Code Features and Issues

- **[Claude Code now has auto mode](https://www.reddit.com/r/ClaudeAI/comments/1s2ok85/claude_code_now_has_auto_mode/)** (Activity: 962): **Claude Code**가 파일 쓰기 및 bash 명령에 대한 권한 결정을 자동화하는 ‘auto mode’를 도입했다는 요약이다. 이는 수동 승인이나 `--dangerously-skip-permissions` 없이도 동작하도록, 각 툴 호출(tool call)을 분류기(classifier)로 평가해 파괴적 동작 가능성이 낮은 것은 자동 진행하고 위험한 것은 차단하는 방식으로 설명됐다. 현재 Team 플랜에서 리서치 프리뷰로 제공되며, Enterprise/API 사용자는 추후 더 넓게 접근할 수 있을 예정이라고 했다. 자세한 내용은 [here](http://claude.com/product/claude-code#auto-mode)에 있다고 한다. 동시에 사용자들은 사용량 제한(usage limits)이 이전보다 훨씬 빨리 소진된다는 문제를 보고했고, **Anthropic**의 공식 커뮤니케이션 부재에 불만을 나타냈다고 요약됐다.
  - 세션 제한이 이전보다 빠르게 차는 현상을 겪는 사용자가 많으며, Max 5x 플랜에서 하루 만에 주간 한도의 50%를 썼다는 사례가 언급됐다. 정책 변경인지 버그인지 불명확하다는 불만이 있었다.
  - auto mode의 분류기-선실행(classifier-before-execution) 방식이 안전을 강화하긴 하지만, `rm -rf` 같은 모호한 명령을 임시 디렉터리와 프로젝트 루트에서 어떻게 다르게 판단할지 우려가 나왔다. 차단 시 조용한 실패(silent fallback)보다 차단 이유를 설명해주는 방식이 낫다는 의견도 있었다.
  - 새 기능보다 먼저 레이트 리밋(rate limits) 문제를 해결해야 한다는 요구가 있었다. 제한이 심하면 새 기능도 활용하기 어렵다는 취지다.
- **[Saying 'hey' cost me 22% of my usage limits](https://www.reddit.com/r/ClaudeAI/comments/1s3hh29/saying_hey_cost_me_22_of_my_usage_limits/)** (Activity: 883): 비활성 세션을 다시 열었을 때 간단한 메시지에도 사용량이 크게 증가(최대 `22%`)했다는 이슈를 다룬 요약이다. 원인으로는 매 메시지마다 시스템 프롬프트와 대화 기록 등 전체 컨텍스트를 API로 재전송하는 구조와 캐시(caching) 메커니즘이 언급됐다. 캐시 TTL이 Pro는 5분, Max는 1시간으로 설정되어 있고, 밤새 세션을 열어둔 뒤 재개하면 전체 캐시 작성(cache write)이 발생해 일반 입력보다 `1.25x` 더 비싸질 수 있다는 설명이 포함됐다. 또한 5시간 롤링 윈도(rolling windows)로 사용량을 추적하는 방식 때문에, 이전 윈도에서 쌓인 컨텍스트가 새 윈도로 넘어오며 예상치 못한 급증이 발생할 수 있다고 요약됐다. 대응책으로는 새 세션 시작 또는 `/clear`, `/compact`를 권하는 의견이 나왔다.
  - Fearless_Secret_5989는 매번 전체 컨텍스트(시스템 프롬프트, 툴 정의, 히스토리 포함)를 재전송하는 구조가 토큰 사용량을 키운다고 설명했다. 캐시 만료 시 전체 캐시 쓰기가 발생하며, 이는 `1.25x` 비용이 될 수 있다고 했다. 한 트레이스에서는 재개 세션의 토큰 92%가 캐시 읽기였고, 최소 출력에 192K 토큰이 소비됐다고 언급됐다.
  - 같은 사용자는 5시간 롤링 윈도 경계에서 세션이 넘어가면, 과거 컨텍스트가 새 윈도에 청구되어 즉시 큰 사용량이 잡힐 수 있다고 설명했다. 새로운 작업 없이도 최대 60%가 즉시 소진됐다는 보고가 언급됐다.
  - 3월 23일 이후 Max 플랜에서 동일 작업이 이전(20~30%) 대비 80~100%를 소모한다는 보고가 있으며, 버그 또는 백엔드 변경 가능성이 제기됐지만 Anthropic의 공식 응답은 없다는 내용이 포함됐다.
- **[Claude Code Limits Were Silently Reduced and It’s MUCH Worse](https://www.reddit.com/r/ClaudeCode/comments/1s2lye7/claude_code_limits_were_silently_reduced_and_its/)** (Activity: 1229): **Claude Code** 사용자들이 사용량 제한이 공지 없이 크게 줄었다고 보고하며, 어떤 사용자는 “백 배(hundredfold)” 감소라고 표현했다는 요약이다. PHP/JavaScript 같은 단순 프로젝트에서도 이전보다 훨씬 빨리 제한에 도달한다는 사례가 포함됐다. 개발사 투명성 부족이 불만을 키웠고, 적응 방법을 알기 어렵다는 반응이 이어졌다고 한다. 일부는 버그 가능성을, 일부는 쿼터 감축을 감추는 전략 가능성을 추측했다.
  - -becausereasons-는 감소 폭이 너무 커 버그일 가능성이 있다고 주장했다.
  - zirouk는 ‘일시적 증가→급감→부분 복구’ 같은 방식으로 사용자 인식을 교란해 순감축을 숨길 수 있다는 이론을 제시했다.
  - Dry-Magician1415는 LLM 사용량 제한이 통신사처럼 정량화/감사(auditing) 가능한 형태가 아니라 임의 조정이 가능해 불신을 낳는다고 비판했다.
- **[Claude Code can now /dream](https://www.reddit.com/r/ClaudeCode/comments/1s2ci4f/claude_code_can_now_dream/)** (Activity: 2731): Claude Code의 Auto Memory가 유발한 메모리 비대(memory bloat) 문제를 해결하기 위한 새 기능 Auto Dream에 대한 요약이다. Auto Dream은 사람의 REM 수면처럼 과거 세션 트랜스크립트를 검토해 관련 정보를 추출하고, 오래되거나 모순된 메모리를 가지치기(pruning)하며, 정리된 파일로 통합(consolidation)한다고 설명된다. 24시간 및 지난 통합 이후 5세션 조건에서 백그라운드로 실행되며, 코드베이스는 읽기 전용으로 두고 메모리 파일만 수정한다고 했다. 이는 컨텍스트 윈도 문제를 단순히 확장하는 대신, AI 메모리를 위한 가비지 컬렉터/디프래그로 비유됐다. 댓글에서는 기능을 농담으로 확장(예: ‘/acid’, ‘/shit’)하는 반응도 있었고, Anthropic의 공식 발표가 없다는 지적과 함께 Ray Amjad의 유튜브 설명이 언급됐다고 한다.
  - AutoDream은 Orient, Gather signal, Consolidate, Prune & index의 4단계로 동작하며, 기존 메모리를 스캔해 드리프트/모순을 정리하고 인덱스를 갱신한다는 설명이 포함됐다.
  - 24시간+ 및 5세션+ 조건에서만 실행되어 진행 중 작업에 간섭하지 않도록 설계됐다고 요약됐다.
  - AutoDream 시스템 프롬프트가 GitHub의 Piebald-AI/claude-code-system-prompts 리포지토리 `agent-prompt-dream-memory-consolidation.md`에 있다는 언급과, Claude Code의 `/memory` 명령으로 접근 가능하다는 설명이 포함됐다.
- **[Claude can now control your mouse and keyboard. I tested it for a day — heres what actually works.](https://www.reddit.com/r/PromptEngineering/comments/1s2h1h6/claude_can_now_control_your_mouse_and_keyboard_i/)** (Activity: 184): **Claude의 Computer Use 기능**이 Mac의 마우스/키보드를 제어해 파일 관리, 스프레드시트 입력, 브라우저 폼 작성 등을 수행할 수 있다는 요약이다. 화면 이해를 위해 스크린샷을 기반으로 동작하며, 실행 중에는 사용자가 자리를 비우는 형태로 ‘머신 전체를 점유’한다는 설명이 포함됐다. Pro/Max 플랜의 리서치 프리뷰로 제공되며, 단순 작업은 `80%`, 복잡 작업은 `50%` 정도의 신뢰도로 묘사됐다. 캡차(captchas), 2FA, 복잡 상호작용, 속도가 필요한 작업에서는 약점을 보인다는 요약도 있다. 가능성은 사용자가 없는 동안의 자동화에 있으며, Dispatch로 원격 폰 명령과 결합하는 데모가 언급됐다. 자세한 내용은 [full breakdown](https://findskill.ai/blog/claude-cowork-guide/#computer-use)에 있다고 한다.
  - 한 사용자는 Claude를 앱 개발 워크플로우의 테스트 자동화에 활용하고, 새 빌드를 올린 뒤 Claude가 변경사항을 테스트/피드백/수정까지 하게 하려는 계획을 언급했다.
  - 보안/프라이버시 우려가 제기됐고, 누군가가 내 PC를 제어하게 될 수 있다는 농담 섞인 걱정이 나왔다.
  - 캡차는 여전히 우회할 수 없다는 언급이 있었고, 이는 인간/봇 구분 장치 앞에서의 한계를 보여준다고 정리됐다.

### Less Technical Subreddits — AI Model Releases and Benchmarks

- **[ARC AGI 3 is up! Just dropped minutes ago](https://www.reddit.com/r/singularity/comments/1s3gq6b/arc_agi_3_is_up_just_dropped_minutes_ago/)** (Activity: 1198): ARC-AGI-3 리더보드 이미지가 공유되었고, 운영 비용 대비 성능 점수로 모델들을 평가하는 그래프가 제시됐다는 요약이다. **Gemini 3.1 Pro (Preview)**, **Anthropic Opus 4.6 (Max)**, **Grok 4.20 (Beta Reasoning)** 등이 그래프 하단 쪽에 위치해 비용은 다양한데 성능 점수는 낮게 나타난다는 설명이 포함됐다. 댓글은 AGI 진전에 대한 회의적 반응이 많았고, 큰 투자 대비 점수 퍼센트가 낮다는 점을 강조했다고 한다.
  - 벤치마크 포화(saturation) 논의가 있었고, 특히 ARC AGI 3가 `$10K` 투자로 `0.2%` 개선에 그쳤다는 언급이 나오며 한계효용 감소를 우려했다.
  - GPT-5.4 (High)가 참조점으로 언급되며, 신규 벤치마크가 기존 최상위 모델을 크게 뛰어넘지 못할 수 있다는 “정체(plateau)” 우려가 나타났다.
- **[TheInformation reporting OAI finished pretraining new very strong model “Spud”, Altman notes things moving faster than many expected](https://www.reddit.com/r/singularity/comments/1s2q0yb/theinformation_reporting_oai_finished_pretraining/)** (Activity: 931): OpenAI가 “Spud”라는 새 모델의 프리트레이닝(pretraining)을 마쳤고 매우 강할 것으로 예상된다는 보도 요약이다. Sam Altman이 안전/보안 팀에서 스케일링(scale)으로 초점을 옮기고 있다는 맥락에서 전략적 자원 재배치로 해석되었다. 또한 Sora 비디오 앱 종료가 모델 개발 우선순위 전환을 시사한다는 논의가 있었다. 커뮤니티는 OpenAI의 프리트레인 모델이 RL은 강하지만 상대적으로 약하다는 기존 인식이 있었고, “Spud”가 그 부분을 개선했을 수 있다는 점에 주목했다.
  - Dylan Patel이 OpenAI는 업계 최고 수준의 RL 역량을 갖고 있지만 프리트레인 모델은 역사적으로 약했다는 평가를 했고, “Spud”가 개선이라면 큰 진전일 수 있다는 의견이 언급됐다.
  - Codex 5.3/Opus 4.6에서 5.4로의 빠른 업데이트 사례를 언급하며, 그로부터 몇 주 만에 “Spud” 같은 새 프리트레인 모델이 나온다면 속도가 가속되고 있다는 신호로 받아들여졌다는 반응이 있었다.
  - 급격한 개발 사이클이 흥미롭지만 불안하다는 정서도 언급됐다.
- **[DeepSeek had a moment, Kimi just had an entire week](https://www.reddit.com/r/DeepSeek/comments/1s39nad/deepseek_had_a_moment_kimi_just_had_an_entire_week/)** (Activity: 182): **Moonshot AI**의 **Kimi**가 “Attention Residuals”라는 개념을 제안하는 논문을 [arXiv](https://arxiv.org/abs/2303.12345)에 올렸고, 현대 LLM 아키텍처에 큰 변화를 제시한다는 요약이다. 이 접근은 각 레이어가 이전 레이어를 학습된 입력 의존 가중치로 선택적으로 참조해, 추론 오버헤드 `2%` 미만으로 `1.25x` 더 많은 컴퓨트에 준하는 성능을 낸다고 주장한다. Elon Musk, Andrej Karpathy 등 유명 인사가 관심을 보였다는 언급도 있다. 또한 **Cursor**가 Kimi 모델을 자사 모델인 것처럼 사용한 정황, **MiniMax**가 Kimi 코드를 복사하다 적발된 정황 등이 언급되며, Kimi 영향력이 커졌다는 서사가 포함됐다. 댓글에서는 Kimi가 혁신적이지만 DeepSeek의 engram만큼 임팩트가 크지 않다는 의견과, 컨텍스트 처리에 특히 강해 강점이 니치(niche)일 수 있다는 의견이 엇갈렸다.
  - BriguePalhaco는 Kimi가 DeepSeek 기반이며 Qwen이 유일한 진지한 경쟁자라고 언급하며 경쟁 구도를 제시했다.
  - Alternative_You3585는 DeepSeek의 engram이 Kimi보다 훨씬 정교하다고 주장했다.
- **[daVinci-MagiHuman : This new opensource video model beats LTX 2.3](https://www.reddit.com/r/StableDiffusion/comments/1s2b2qt/davincimagihuman_this_new_opensource_video_model/)** (Activity: 1127): **GAIR**가 개발한 `15 billion parameters` 규모의 신규 오픈 소스 오디오-비디오 모델 **daVinci-MagiHuman**이 **LTX 2.3** 대비 속도/성능에서 우수하다고 주장한다는 요약이다. 모델은 [Hugging Face](https://huggingface.co/GAIR/daVinci-MagiHuman)와 [GitHub](https://github.com/GAIR-NLP/daVinci-MagiHuman/)에 공개됐다고 한다. 전체 크기는 약 `65GB`로 소개됐고, `4070ti` 같은 하드웨어에서 효율적으로 실행될 수 있다는 주장도 있었으나, 움직임이 적은 장면에서는 성능이 잘 드러나지 않을 수 있다는 우려가 함께 언급됐다. 댓글에서는 정지 프레임/저동작 장면을 벤치마크로 쓰는 타당성 논쟁이 있었고, *Game of Thrones* 같은 복잡 프로젝트를 다시 만드는 실용적 활용에 대한 관심도 나타났다.
  - MorganTheFated는 정지 프레임이나 저동작 장면은 비디오 모델 성능을 제대로 대표하지 못한다고 비판하며, 더 동적인 테스트가 필요하다고 주장했다.
  - intLeon은 65GB 규모와 `4070ti` 12GB로 구동 가능한지 의문을 제기했다. fp8 distilled LTX2.3 기준 1024x640 해상도에서 15초 영상에 5분이 걸린다는 비교가 언급되며 계산량 부담을 강조했다.
  - The elephant in the room은 daVinci-MagiHuman 샘플에서 손(hand) 렌더링 등 물리적 일관성(physical consistency)이 LTX2.3보다 나쁘다는 지적을 소개했다.

---

## AI Discord Recap

### AI Discords

Discord가 오늘 우리의 접근을 차단했다. 우리는 이 형태로는 다시 가져오지 않을 것이지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙다. 좋은 여정이었다.
