---
title: "Claude, macOS 컴퓨터 사용(Computer Use) 공개"
summary:
  - "Claude, macOS 컴퓨터 사용(Computer Use) 공개"
  - "Cursor, Instant Grep로 초고속 검색 공개"
  - "Sakana AI, 일본용 Sakana Chat 출시"
  - "WebArena-Infinity, 환경 생성 비용 절감"
  - "LeWorldModel, 1 GPU JEPA 레시피 주목"
date: 2026-03-23
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-23-not-much.md"
hasHeadline: false
headline: "Claude, macOS 컴퓨터 사용(Computer Use) 공개"
tags:
  - OpenAI
  - Codex
  - Anthropic
isFeatured: false
---

## 헤드라인: Claude, macOS 컴퓨터 사용(Computer Use) 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic가 Claude를 통해 데스크톱에서의 컴퓨터 사용(Computer Use)을 본격적으로 확장했다. Claude Cowork와 Claude Code를 통한 macOS 연구 프리뷰에서 Claude는 마우스·키보드·화면을 제어하며, 브라우저 샌드박스나 API 호출을 넘어 임의의 앱을 직접 조작할 수 있게 됐다. 커뮤니티에서는 “이제 많은 작업에 노트북이 필요 없어질 수 있다”는 반응과 함께, Anthropic가 외부 에이전트 스택을 인수하기보다 ‘컴퓨터에서 뭐든 수행’하는 폐루프(closed loop)를 직접 소유하려는 전략이라는 해석도 나왔다.

---

## AI Twitter Recap

### Claude 컴퓨터 사용(Computer Use), 에이전트 하네스, 그리고 “Codegen”에서 전체 워크플로 자동화로의 전환

- **Anthropic가 컴퓨터 사용을 데스크톱으로 확장**: Claude는 이제 Claude Cowork와 Claude Code를 통해 **마우스, 키보드, 화면**을 제어하며 **macOS 연구 프리뷰**에서 임의의 앱을 조작할 수 있다. 이는 API와 브라우저 샌드박스를 넘어 에이전트 표면을 크게 넓힌 것으로, “많은 작업에 더 이상 노트북이 필요 없을 수 있다”는 반응과 함께 Anthropic가 외부 에이전트 스택 인수보다 ‘컴퓨터에서 무엇이든’ 루프를 직접 소유하려 했을 가능성에 대한 논의도 이어졌다 ([Claude announcement](https://x.com/claudeai/status/2036195789601374705), [Felix Rieseberg](https://x.com/felixrieseberg/status/2036193240509235452), [Yuchen Jin](https://x.com/Yuchenj_UW/status/2036197273496068102), [Alex Albert](https://x.com/alexalbert__/status/2036227208675729687)).
- **에이전트 스택이 장기 실행·병렬·툴 풍부한 워크플로로 수렴**: 코딩/운영 에이전트를 둘러싼 하네스(harness) 레이어가 성숙해지고 있다는 신호가 다수의 트윗에서 포착됐다. **Hermes Agent**의 모멘텀과 생태계 큐레이션 ([awesome-hermes-agent](https://x.com/nyk_builderz/status/2035958826973733150), [Teknium tips](https://x.com/Teknium/status/2036068990867603720), [open-source vibe shift](https://x.com/NousResearch/status/2036122143398961659)); **T3 Code**의 브라우저/터미널 통합 기능 ([T3 Code browser integration](https://x.com/LLMJunky/status/2035856842224497049), [Theo on open-sourcing T3 Code](https://x.com/theo/status/2036216034949312851)); 하나의 워크스페이스에서 다수 에이전트를 병렬 실행하는 **Command Center** 같은 오케스트레이션 도구 ([Jimmy Koppel](https://x.com/jimmykoppel/status/2036077396210728974)); 그리고 매우 장기 실행 자율 작업을 위한 **Parchi** / BYOK 워크플로 ([0xSero](https://x.com/0xSero/status/2036197042045751563), [Qwen3.5-REAP in Parchi](https://x.com/0xSero/status/2036204079056081043)).
- **병목은 이제 모델 IQ가 아니라 운영 현실(ops)**: 최신 상위 모델이 지나치게 ‘의욕적’이거나(over-agentic) 약한 서브에이전트에 위임되는 방식 때문에 실제 코딩 워크플로가 악화된다는 불만이 나왔다. **GPT-5.2 Pro subagents**, **Claude 브라우저/컴퓨터 사용의 취약성**, 그리고 피상적 병렬화가 처리량 증가가 아니라 “**slop theater**”가 된다는 비판이 반복됐다 ([Mikhail Parakhin](https://x.com/MParakhin/status/2035879791027773732), [Sarana](https://x.com/saranormous/status/2035932898218713170), [Jeremy Howard](https://x.com/jeremyphoward/status/2035966832197427509), [bentlegen](https://x.com/bentlegen/status/2035943186841915711)). 반복되는 메시지는, 단순 코드 생성이 아니라 트레이스(traces)·평가(evals)·인시던트(incidents)·프로덕션 피드백으로 **폐루프를 닫는(close the loop)** 제품이 승자가 될 가능성이 높다는 것 ([LangSmith “close the loop”](https://x.com/jakebroekhuizen/status/2036137460288332077), [PlayerZero summary](https://x.com/kimmonismus/status/2036126784887071221)).

### 자기개선 에이전트, RL 후처리, 벤치마크 생성 연구

- **고정된 메타 절차를 넘어선 자기개선**: Meta 관련 작업인 **Hyperagents / DGM-H**는 Darwin Gödel Machine 아이디어를 확장해, 에이전트가 과제 행동뿐 아니라 **미래의 개선을 만들어내는 절차(procedure)** 자체도 개선할 수 있게 한다. 이러한 메타 수준 개선이 코딩, 논문 리뷰, 로보틱스 보상 설계, 올림피아드 채점 등 여러 도메인으로 전이된다는 주장으로, 기존 자기개선 시스템에서 ‘자기개선 루프 자체가 사람이 설계한 고정물’이던 한계를 겨냥한다 ([Jenny Zhang](https://x.com/jennyzhangzt/status/2036099935083618487)).
- **RL 후처리(post-training) 통합 스토리**: **RLLM = RL + LM-as-RM**은 정책(policy) 출력에서 **온폴리시(on-policy)**로 언어모델 보상모델(reward model)을 학습해, **검증이 쉬운/어려운/불가능한** 과제 전반의 후처리를 통합하려는 시도다. 생성형 LM 보상모델을 쓰면 취약한 맞춤형 보상 설정보다 전반적으로 보상 품질을 높일 수 있다는 주장이 강조됐다 ([Jase Weston](https://x.com/jaseweston/status/2036119252214620513)).
- **벤치마크/환경(environment) 생성이 급격히 스케일업**: **WebArena-Infinity**는 브라우저 환경 구축 비용을 ‘수개월의 대학원생 노동’에서 **10시간 미만·환경당 <$100**으로 낮췄다고 주장하며, 강한 오픈소스 모델도 점수가 **50% 미만**인 더 어려운 검증가능(verifiable) 과제를 만든다고 한다. 에이전트용 RL은 소수의 수제 테스트베드가 아니라 자동 생성된 고진정성(high-authenticity) 환경이 필요해지고 있다는 점에서 의미가 크다 ([Shuyan Zhou](https://x.com/shuyanzh36/status/2036098118023049630)).
- **토픽형 RL 정리는 여전히 인기(다만 새로움은 덜함)**: The Turing Post가 RLHF, RLAIF, RLVR, 프로세스 보상(process rewards), 자기 피드백(self-feedback), 크리틱 기반(critique-based) 등을 포함한 **16개 RL 변형**을 정리했다. 분류(taxonomy)로는 유용하지만, 이번 사이클에서 더 기술적으로 중요한 흐름은 **환경과 보상모델이 산업화**되는 방식에 대한 논의였다 ([Turing Post RL list](https://x.com/TheTuringPost/status/2035857987705954760)).

### 월드 모델, JEPA, 메커니스틱 해석, 그리고 학습 이론

- **JEPA/월드 모델이 강한 기술적 존재감을 보임**: **LeWorldModel**은 교사-학생 트릭, EMA, 과도한 휴리스틱 없이 픽셀에서 직접 안정적인 JEPA 학습을 달성했다고 주장한다. **15M params**, **1 GPU**, **1초 미만 플래닝(planning)**과, 후속 요약에서는 **~48–50× 플래닝 속도 향상** 및 기존 월드 모델 베이스라인과 경쟁 가능한 성능을 강조했다. JEPA 계열이 ‘취약하거나 트릭이 많다’는 인식이 있었던 만큼, 단순한 학습 레시피를 제시했다는 점이 주목받았다 ([Lucas Maes](https://x.com/lucasmaes_/status/2036080584569618741), [Randall Balestriero](https://x.com/randall_balestr/status/2036086865460171110), [RobotsDigest](https://x.com/robotsdigest/status/2036104283192709345)).
- **메커니스틱 해석(mech interp)이 ‘감’에서 리버스엔지니어링으로 성숙**: Anthropic의 “On the Biology of a Large Language Model”을 요약한 스레드는, 현재의 메크 인터프가 회로(circuits)와 내부 특성(features)을 과거보다 훨씬 구체적으로 밝혀내는 단계에 왔다고 설명했다. 동시에 추적된 회로가 모델이 자기 추론을 언어로 명시적으로 설명할 수 있는 것과 일치할 필요는 없다는 경고도 덧붙였다 ([summary thread](https://x.com/mathemagic1an/status/2035850046735098065)).
- **학습 이론과 옵티마이저 스케일링도 주목**: Antonio Orvieto는 적응형(adaptive) 방법의 최적화 이론이 알려진 **LLM 하이퍼파라미터 스케일링**의 상당 부분을 설명하며, 무차별 스윕 없이도 전이(transfer) 규칙을 제안할 수 있다고 주장했다. 후속 논의에서는 옵티마이저 의존성과 Muon류 세팅의 함의가 언급됐다 ([Orvieto](https://x.com/orvieto_antonio/status/2036129786205008188), [giffmana reaction](https://x.com/giffmana/status/2036156010272849950), [leloykun follow-up](https://x.com/leloykun/status/2036178508809118067)). 경험적 ‘스케일링 속설’을 도출(derivation)로 대체하려는 시도가 늘고 있다는 점이 유의미한 저류로 보였다.

### 문서 파싱, 리트리벌, 검색 인프라의 “에이전트 네이티브”화

- **문서 파싱이 보조 유틸이 아닌 시스템 레이어로 부상**: Google Devs와 LlamaIndex는 난이도 높은 금융 PDF에서 구조화 데이터를 추출하기 위해 **LlamaParse + Gemini 3.1 Pro** 조합을 사용하는 워크플로를 소개하며, 증권사 명세서·복잡한 표에서 **정확도 ~15% 개선**을 주장했다. 또한 LlamaIndex의 **LiteParse**는 URL/스트림 지원과 VLM 비의존 경로로 더 가벼운 파싱을 지향하며, 에이전트가 저렴하고 빠르게 호출할 수 있는 구성으로 피치됐다 ([Google Devs](https://x.com/googledevs/status/2036101456239939750), [Jerry Liu](https://x.com/jerryjliu0/status/2036155687848518097), [LiteParse](https://x.com/jerryjliu0/status/2036171132806869251)).
- **코딩 에이전트용 검색/리트리벌 인프라가 체감 개선**: Cursor는 **Instant Grep**을 출시하며 수백만 파일을 밀리초 단위로 정규식(regex) 검색할 수 있다고 홍보했고, 인덱싱/알고리즘 트레이드오프를 다룬 기술 글도 함께 공개했다. 에이전트 코딩에서는 작은 모델 개선보다 검색 지연이 반복 속도를 좌우한다는 점에서 이런 프리미티브가 중요하다는 논지였다 ([Cursor announcement](https://x.com/cursor_ai/status/2036122609931165985), [blog link](https://x.com/cursor_ai/status/2036122612472881574)).
- **레이트 인터랙션(late interaction) / 멀티-벡터 리트리벌이 다시 주목**: Weaviate/LightOn 관련 논의는 레이트 인터랙션 시스템이 특히 코드·추론 중심 리트리벌에서 이제 더 폭넓게 실용적일 수 있다고 주장했다. 토큰 단위 멀티-벡터 표현이 풀 크로스-인코더(cross-encoder)보다 여전히 저렴하고 재사용 가능하면서도, 리콜과 랭킹 품질을 크게 개선할 수 있다는 논리다 ([Connor Shorten podcast](https://x.com/CShorten30/status/2036080609362161900), [softwaredoug](https://x.com/softwaredoug/status/2036082251734138904), [Amélie Chatelain](https://x.com/AmelieTabatta/status/2036082256482062606)).

### 모델·제품 출시: Sakana Chat, MiniMax 플랜, Luma Uni-1, NVIDIA Kimodo 등

- **Sakana AI가 가장 구체적인 제품 출시를 진행**: 일본 사용자를 대상으로 **Sakana Chat**을 출시했으며, 새로운 **Namazu alpha** 모델 패밀리를 기반으로 한다. 이는 상위 모델의 편향을 줄이고 일본의 맥락과 가치에 더 맞추도록 튜닝된 후처리 모델로 설명됐다. Sakana는 이를 소비자 제품이자 문화적 현지화(localization) 후처리의 데모로 포지셔닝했으며, 기술 블로그에서는 1.1M 소셜 포스트에서 내러티브를 추출하기 위해 앙상블(ensembles)과 **노벨티 서치(novelty search)**를 활용한 과거 작업(Yomiuri 협업)과도 연결했다 ([Sakana Chat](https://x.com/SakanaAILabs/status/2036246622141849724), [Namazu alpha](https://x.com/SakanaAILabs/status/2036247684139589688), [Hardmaru on the OSINT workflow](https://x.com/hardmaru/status/2035884310356754715)).
- **MiniMax는 제품화(productization)를 계속 밀어붙임**: 텍스트·음성·음악·비디오·이미지 API를 하나의 구독으로 묶은 정액제 **“Token Plan”**을 도입했고, 예측가능한 멀티모달(all-modality) 과금과 서드파티 하네스 호환성을 강조했다. 멀티모달 API 소비가 운영적으로 번거로워진 상황에서, 가격 단순화 자체가 차별점이 된다는 맥락이다 ([MiniMax Token Plan](https://x.com/MiniMax_AI/status/2036123727373672910)).
- **생성 미디어에서도 눈에 띄는 아티팩트가 등장**: **Luma’s Uni-1**은 “생각과 픽셀 생성을 동시에” 수행하는 모델로 소개됐고, **NVIDIA’s Kimodo**는 **700시간 모션캡처(mocap)**로 학습된 프롬프트 기반 모션/타임라인 모델로 강한 반응을 얻었다. 인간과 로봇 스켈레톤을 모두 지원하며 Hugging Face에 공개됐다 ([Luma Uni-1](https://x.com/LumaLabsAI/status/2036107826498544110), [Kimodo](https://x.com/victormustar/status/2036043907776098345)).
- **기타 릴리스 노트**: Hugging Face **Kernels 0.12.3**는 `cutlass.cute` 커널을 통해 **Flash-Attention 4**를 지원했다 ([Sayak Paul](https://x.com/RisingSayak/status/2036038782793994541)). **TRL v1.0.0**은 AsyncGRPO를 통한 장문(long-sequence) 학습에서 **최대 44× VRAM 절감**을 주장했다 ([Amine Dirhoussi](https://x.com/DirhousssiAmine/status/2036131263803781305)). 또한 **AI2’s MolmoPoint GUI**는 좌표 회귀(coordinate regression) 대신 그라운딩 토큰(grounding tokens)을 사용한 VLM GUI 자동화를 겨냥하며 **ScreenSpotPro 61.1**을 보고했다 ([HuggingPapers](https://x.com/HuggingPapers/status/2036101402477404284)).

### 주요 트윗(참여도 기준, 기술 관련 필터링)

- **Claude computer use launch**: Anthropic의 데스크톱 제어 기능은 이번 묶음에서 가장 중요한 제품 출시로, 메인스트림 어시스턴트가 “답변”에서 **소프트웨어를 직접 조작**하는 방향으로 이동하고 있음을 보여주는 신호로 해석됐다 ([announcement](https://x.com/claudeai/status/2036195789601374705)).
- **Cursor Instant Grep**: 단순 벤치마크 수치가 아니라 코딩 에이전트의 실제 병목인 저장소(repo) 규모 검색 지연을 줄였다는 점에서 큰 반응을 얻었다 ([Cursor](https://x.com/cursor_ai/status/2036122609931165985)).
- **Luma Uni-1**: 추론과 이미지 생성을 하나의 제품 표면으로 접어 넣었다는 주장에 관심이 집중됐지만, 트윗 자체의 상세 정보는 제한적이었다 ([Luma Labs](https://x.com/LumaLabsAI/status/2036107826498544110)).
- **Sakana’s narrative intelligence / OSINT workflow**: LLM 앙상블, 노벨티 서치, 가설 생성, 인간 검증을 결합해 **1.1M posts**를 다룬 응용 AI 사례로 비교적 실질적인 내용이 있었다 ([Sakana](https://x.com/SakanaAILabs/status/2035883994940887161)).
- **JEPA / LeWorldModel**: 예상보다 단순하고 빠른 소형 월드 모델 레시피가 주목을 받았고, 일반 연구실에서도 재현 가능성이 높아 보인다는 반응이 있었다 ([LeWorldModel](https://x.com/lucasmaes_/status/2036080584569618741)).
- **Hyperagents / DGM-H**: 단순 과제 수행 개선이 아니라 **메타 수준 자기개선**을 겨냥해 기술적으로 특히 흥미롭다는 평가를 받았다 ([Hyperagents](https://x.com/jennyzhangzt/status/2036099935083618487)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[The current state of the Chinese LLMs scene](https://www.reddit.com/r/LocalLLaMA/comments/1s1gm9z/the_current_state_of_the_chinese_llms_scene/)** (Activity: 472): 중국 LLM 생태계가 **ByteDance**, **Alibaba**, **Tencent**, **Baidu** 같은 주요 플레이어 중심으로 전개되고, `dola-seed`, `Qwen Max`, `Seed OSS 36B`, `Hunyuan 3D`, `Ling 2.5 1T`, `LongCat-Flash-Chat`, `MiniMax 2.5` 등 다양한 모델/아키텍처(예: MoE)가 언급됐다. 오픈 웨이트(open weights) 공개 속도가 미국 기업보다 빠르다는 인식과 함께, ByteDance는 [Hugging Face](https://huggingface.co/ByteDance-Seed/models)에서 보이듯 오픈 웨이트를 내놓지 않았다는 점이 대비로 거론됐다.
- **[Alibaba confirms they are committed to continuously open-sourcing new Qwen and Wan models](https://www.reddit.com/r/LocalLLaMA/comments/1s0pfml/alibaba_confirms_they_are_committed_to/)** (Activity: 1269): Alibaba가 ModelScope DevCon에서 Qwen/Wan 시리즈의 지속적인 오픈소스 공개 의지를 확인했다는 내용으로, 커뮤니티에서는 기대감과 함께 핵심 인력 이탈이 향후 모델 품질에 미칠 영향, 그리고 ‘Qwen 3.5 Coder’ 가능성 등이 논의됐다.
- **[So cursor admits that Kimi K2.5 is the best open source model](https://www.reddit.com/r/LocalLLaMA/comments/1s19ik2/so_cursor_admits_that_kimi_k25_is_the_best_open/)** (Activity: 575): **Kimi K2.5**를 퍼플렉서티(perplexity) 기반으로 ‘가장 강한 오픈소스 베이스 모델’로 평가했다는 주장과, 그런 평가 방법론의 타당성(사전 크기 등 변수), Fireworks 훈련 주장과 효율, Workshop Labs의 비판 등 반론이 함께 나왔다.
- **[Honest take on running 9× RTX 3090 for AI](https://www.reddit.com/r/LocalLLaMA/comments/1s0p28x/honest_take_on_running_9_rtx_3090_for_ai/)** (Activity: 675): 9× RTX 3090 구성에서 PCIe 레인, 안정성, 전력 관리, 지연/대역폭 한계로 인해 6장 이상부터 효율이 떨어질 수 있다는 경험담이 공유됐다. Proxmox로 실험을 권하거나, PCIe 스위치·P2P 드라이버 등으로 병목을 완화해야 한다는 논의가 이어졌다.
- **[Is there anyone who actually REGRETS getting a 5090?](https://www.reddit.com/r/LocalLLM/comments/1s0ibbj/is_there_anyone_who_actually_regrets_getting_a/)** (Activity: 388): **NVIDIA 5090/4090** 구매를 지금 할지 기다릴지, 가격 상승과 모델 효율 개선 추세를 어떻게 볼지에 대한 토론이었다. 일부는 GPU 대여(예: SaladCloud `$0.25/hr`)나 가격 하락을 기대했고, 일부는 초기 후회 이후 성능/가격 변동으로 만족하게 됐다는 경험을 나눴다.
- **[7MB binary-weight LLM running in the browser, no FPU needed](https://www.reddit.com/r/LocalLLM/comments/1s0zoyi/7mb_binaryweight_llm_running_in_the_browser_no/)** (Activity: 248): `57M` 파라미터 모델에서 가중치의 `99.9%`를 이진(`{-1, +1}`)으로 만들어 `7MB`로 줄이고, WebAssembly(WASM)로 브라우저에서 `~12 tokens/sec`로 추론(inference)한다는 프로젝트가 소개됐다. 오프라인 구동과 정수 연산 기반 최적화가 주목을 받았고, BitNet 같은 양자화(quantization) 계열과의 연결도 언급됐다.
- **[Qwen3.5-9B-Claude-4.6-Opus-Uncensored-v2-Q4_K_M-GGUF](https://www.reddit.com/r/LocalLLaMA/comments/1s0fn0e/qwen359bclaude46opusuncensoredv2q4_k_mgguf/)** (Activity: 483): `.safetensors`에서 `.gguf`로 변환 중 어텐션/익스퍼트 레이어가 수학적으로 깨지는 문제를 수정하고 `Q3_K_M`, `Q4_K_M`, `Q8_0` 등 다양한 양자화 포맷으로 배포했다는 내용이다. 수정된 모델은 [HuggingFace](https://huggingface.co/LuffyTheFox/Qwen3.5-35B-A3B-Uncensored-Kullback-Leibler)에 공유됐고, LM Studio 설정 및 `llama.cpp` 기반 머지/재양자화 과정도 함께 다뤄졌다.

### Less Technical Subreddits

- **[Claude can now use your computer](https://www.reddit.com/r/ClaudeAI/comments/1s1ujv6/claude_can_now_use_your_computer/)** (Activity: 1001): Anthropic의 **Claude**가 **Claude Cowork** 및 **Claude Code**를 통해 컴퓨터를 사용(앱 열기, 브라우저 탐색, 스프레드시트 입력 등)하는 기능을 연구 프리뷰로 제공한다는 내용이다. Slack/Calendar 같은 커넥터가 먼저 활용되고, 없으면 앱을 직접 조작하며, **macOS**의 **Pro/Max** 플랜에서 제공된다고 소개됐다 ([here](https://claude.com/product/cowork#dispatch-and-computer-use)).
- **[The 5 levels of Claude Code (and how to know when you've hit the ceiling on each one)](https://www.reddit.com/r/ClaudeAI/comments/1s1ipep/the_5_levels_of_claude_code_and_how_to_know_when/)** (Activity: 853): Claude Code 사용을 5단계로 정리한 글로, 기본 프롬프트에서 `CLAUDE.md`, 재사용 가능한 ‘Skills’, 자동 검증 ‘Hooks’, 다중 에이전트 오케스트레이션으로 발전하는 흐름과 각 단계의 한계를 설명했다. 관련 시스템은 [Citadel](https://github.com/SethGammon/Citadel)에서 오픈소스로 공개됐다.
- **[Petition to force Claude to check datetime before making reference to date, time, or going to bed.](https://www.reddit.com/r/ClaudeAI/comments/1s16eiz/petition_to_force_claude_to_check_datetime_before/)** (Activity: 770): 장시간 세션에서 Claude가 현재 날짜/시간을 잘못 언급하는 문제를 지적하며, 시스템 프롬프트의 시간 정보가 세션 시작 시점에만 주입돼 ‘초기 타임스탬프에 갇히는’ 구조적 한계가 원인일 수 있다는 설명이 공유됐다.
- **[Claude (Opus 4.6) figured out how to patch my childhood game to play it on modern Windows](https://www.reddit.com/r/ClaudeAI/comments/1s0z27t/claude_opus_46_figured_out_how_to_patch_my/)** (Activity: 819): 1996년 게임 Tonka Construction을 DOSBox/VM 없이 현대 Windows에서 실행하기 위해 `WING32.dll`을 패치해 호출을 현대 OS 호출로 변환하는 방식이 소개됐다. 패치는 [GitHub](http://github.com/Quackster/TonkaReconstruction)에 공개됐다.
- **[Serious Regression in Gemini quality](https://www.reddit.com/r/GeminiAI/comments/1s0dagg/serious_regression_in_gemini_quality/)** (Activity: 642): Google의 **Gemini Ultra** 품질이 최근 업데이트 이후 대화 맥락 유지와 히스토리 보존 등에서 크게 후퇴했다는 불만이 제기됐고, 구독 취소를 고려할 정도라는 반응과 함께 컨텍스트 윈도 축소 관측 등도 논의됐다.
- **[Alibaba Unveils Qwen Glasses at MWC Barcelona, Accelerating AI Hardware Ambitions](https://www.reddit.com/r/Qwen_AI/comments/1s0lki0/alibaba_unveils_qwen_glasses_at_mwc_barcelona/)** (Activity: 134): Alibaba가 MWC Barcelona에서 **Qwen Glasses**를 공개하며 실시간 번역, HD 촬영, 시각 인식 등 기능과 2026년까지의 롤아웃 계획을 소개했다. 보조금 적용 후 약 `$275` 가격대와 Qwen App 연동(음성으로 주문/예약 등)도 언급됐다.

---

## AI Discord Recap

### 공지

- Discord가 오늘 접근을 차단해, 이번 형식으로는 더 이상 Discord를 다루지 않으며 새로운 AINews를 곧 출시할 예정이라고 밝혔다. 끝까지 읽어준 독자들에게 감사 인사를 전했다.
