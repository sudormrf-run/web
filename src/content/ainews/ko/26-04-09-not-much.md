---
title: "Meta가 MSL 첫 모델 Muse/Spark를 공개했다"
summary:
  - "Meta가 MSL 첫 모델 Muse/Spark를 공개했다"
  - "OpenAI가 Codex 5배 $100 Pro를 도입했다"
  - "LangChain이 Deep Agents deploy를 출시했다"
  - "Gemma 4가 첫 주 1000만 다운로드를 돌파했다"
  - "RAGEN-2가 에이전트 RL 붕괴를 분석했다"
date: 2026-04-09
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-09-not-much.md"
hasHeadline: false
headline: "Meta가 MSL 첫 모델 Muse/Spark를 공개했다"
tags:
  - Meta
  - OpenAI
  - LangChain
  - Gemma
  - Anthropic
isFeatured: false
---

## 헤드라인: Meta가 MSL 첫 모델 Muse/Spark를 공개했다

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Meta Superintelligence Labs(MSL)의 첫 공개 모델인 Muse/Spark가 등장하면서, 모델 성능 자체뿐 아니라 대규모 제품 표면(surfaces)에 얹어 배포(distribution)할 수 있는 역량이 핵심 변수로 다시 부각됐다. 논의에서는 “프런티어 코딩/수학”만큼이나, 무료 보조(assistant)를 대규모 사용자 기반에 확산시킬 수 있는 제품 채널이 경쟁 구도를 좌우할 수 있다는 관점이 강조됐다.

기술 측면에서는 강화학습(RL) 중 ‘생각(thinking)’ 과정에서 추론 길이가 늘었다가 줄었다가 다시 늘어나는 위상전이(phase transition) 관찰이 소개되며, 더 긴 CoT만으로 밀어붙이기보다 적응형 컴퓨트 라우팅(adaptive compute routing) 여지가 있다는 해석이 덧붙었다.

---

## AI Twitter Recap

### Mythos, Glasswing, 그리고 제한형 사이버 역량 모델로의 전환

- **제한형 사이버 모델 출시가 ‘표준’이 되고 있다**: 가장 큰 테마는 Anthropic의 **Mythos** 후폭풍이 이어지고, OpenAI도 비슷하게 제한된 사이버 역량(cyber-capable) 모델/제품을 단계적으로 내놓을 준비를 한다는 보도였다. [@kimmonismus](https://x.com/kimmonismus/status/2042174533155836174)는 OpenAI가 Anthropic과 유사한 방식으로 **제한적·순차적 롤아웃(limited, staggered rollout)** 을 갖춘 고급 사이버보안 모델을 보유했다는 Axios 보도를 요약했고, 이후 해당 제한 모델이 **“Spud”** 가 아니라 별개의 시스템임을 [update](https://x.com/kimmonismus/status/2042253455100699043)로 덧붙였다. 논쟁은 ‘원칙적으로 위험한가’보다 ‘현재 공개된 증거가 가장 극단적 주장들을 뒷받침하는가’에 더 집중됐다.
- **커뮤니티 반발은 평가(evals) 설계, 벤치마크(benchmark) 상한, 보안 현실성에 집중됐다**: 여러 기술적 비판은 공개된 Mythos 내러티브가 증거보다 앞서 있다고 주장했다. [@paul_cal](https://x.com/paul_cal/status/2042139619840475491)은 대표적인 익스플로잇(exploit) 데모가 **부정직하다(disingenuous)** 고 지적하며, 모델에 ~20줄 코드와 맞춤 컨텍스트만 주고 “성공”을 보여줬지만 실제 취약점 발굴(vulnerability discovery)에는 **교차-파일 추론(cross-file reasoning)** 이 필요하다고 했다. [@gneubig](https://x.com/gneubig/status/2042218039626674450)은 관점을 바꿔, 소프트웨어에는 이미 **수백만 개의 미해결 취약점** 이 존재하므로 코딩 에이전트가 이색적 제로데이(zero-day) 발견보다 일상적 CVE를 수정하는 쪽이 더 큰 효과를 낼 수 있다고 말했다. [@KentonVarda](https://x.com/KentonVarda/status/2042227174137061744)은 퍼저(fuzzer)와의 역사적 유비를 들며, 자동 취약점 탐지가 널리 퍼진 뒤 결과적으로 소프트웨어를 더 단단하게 만들었고(하드닝(hardening)) 여전히 방어자에게 유리할 수 있다고 봤다. 반대편에서는 [@boazbaraktcs](https://x.com/boazbaraktcs/status/2042131701728461313)이 이런 모델을 내부에만 두는 것이 오히려 위험하다며 Anthropic에 제약된 공개 버전을 내라고 권했고, [@ylecun](https://x.com/ylecun/status/2042224846881349741)은 상당 부분을 “자기기만에서 나온 BS”라고 일축했다. 또 [@deanwball](https://x.com/deanwball/status/2042238507507134912) 등은 이러한 시스템이 소프트웨어 하드닝을 실질적으로 가속한다면, 전체적으로는 **사이버보안에 순(+)효과** 가 될 수 있다고 주장했다.

### 에이전트 하네스(harness), 오픈 메모리(open memory), 그리고 새로운 인프라 스택

- **LangChain의 Deep Agents deploy가 부상 중인 아키텍처를 구체화했다**: [Deep Agents deploy](https://x.com/LangChain/status/2042268554364592543) 출시는 모델 비종속(model-agnostic)·프로덕션 지향 에이전트 하네스(harness)를 내세우며 **오픈 메모리(open memory)**, 샌드박스(sandbox) 지원, MCP/A2A 노출(exposure), 그리고 동일한 에이전트 정의 스택에서의 배포 가능성을 강조했다. 관련 논의에서 [@hwchase17](https://x.com/hwchase17/status/2042271439496315102), [@Vtrivedy10](https://x.com/Vtrivedy10/status/2042269655985741858) 등은 장기 실행(long-running) 에이전트의 경우 **메모리 소유권(ownership)** 이 가치 레이어(value layer)라는 점을 부각하며, 관리형 에이전트 상품이 팀을 ‘가장 중요한 자산’에서 락인(lock-in) 시킬 수 있다고 경고했다. 반복된 설계 원칙은 **open harness, model choice, open memory, open protocols**였다.
- **샌드박스가 추론(inference)과 RL 모두에서 1급 프리미티브(primitive)로 자리잡는 중**: [@sarahcat21](https://x.com/sarahcat21/status/2042269181396042036)의 인프라 딥다이브는 샌드박스가 코딩 에이전트 지원을 넘어 **RL 사후학습(post-training)** 의 핵심 기반으로 이동했음을 설명했다. 한 주요 연구소가 이미 **동시 10만(100K) 개** 수준의 샌드박스를 운용하고 **100만(1M)** 까지 목표로 한다는 대목도 포함됐다. 글은 이 워크로드에서 VM보다 샌드박스가 유리한 이유로 더 낮은 오버헤드, 리워드 해킹(reward hacking)에 대한 더 강한 격리(isolation), 그리고 스냅샷/볼륨을 통한 상태ful(stateful) 워크플로 지원을 꼽는다. 이는 향후 에이전트 평가(evals)가 점점 **샌드박스 환경** 으로 옮겨갈 것이라는 [@Vtrivedy10](https://x.com/Vtrivedy10/status/2042089899415744729)의 주장과도 맞닿는다.
- **Hermes Agent 모멘텀이 이어졌다**: Nous/Hermes는 꾸준한 제품 트랙션을 보였다. [Multica](https://x.com/jiayuan_jy/status/2042097537981751544)는 지원을 발표했고, [@Teknium](https://x.com/Teknium/status/2042141382970876077)은 초기 **iMessage/BlueBubbles 게이트웨이** 지원을 추가했다. 커뮤니티 사용자들은 자동 설정(auto-setup), 스킬 축적(skill accumulation), UI 완성도 등을 칭찬했으며, 모델별 토큰 비용 추적(per-model token cost tracking)이 포함된 웹 기반 **Hermes HUD**도 [@aijoey](https://x.com/aijoey/status/2042290964497105048)에서 언급됐다. 여러 포스트의 저류는 팀들이 이제 모델만이 아니라 **에이전트 운영 환경(operating environment)** 자체를 최적화하기 시작했다는 점이다.

### 평가(evals), 검증기(verifiers), 그리고 장기 지평(long-horizon) 에이전트 훈련

- **평가(evals) 담론이 더 구체화됐다**: 비교적 개념적으로 좋은 글로 [@Vtrivedy10](https://x.com/Vtrivedy10/status/2042089899415744729)은 에이전트에서 **“evals ~= training data ~= environments.”** 라고 주장했다. 이 프레이밍은 하루 종일 반복됐다: 프로덕션 트레이스(traces)가 eval이 되고, eval이 최적화 목표가 되며, 환경(environments)은 eval의 더 풍부한 보상(reward) 버전이 된다. [@_philschmid](https://x.com/_philschmid/status/2042248973847613878)도 API 시대의 소프트웨어에서 에이전트로 옮겨가며 **text is state**, 제어권을 넘기고, 유닛 테스트(unit tests)에서 eval로 이동한다는 전환을 강조했다.
- **검증기(verifier)와 장기 평가(long-horizon evaluation) 연구가 빈 틈을 메웠다**: [@omarsar0](https://x.com/omarsar0/status/2042249194409501054)은 Microsoft의 **Universal Verifier**를 소개하며, 웹 작업 검증에서 기존 시스템의 **45%+ / 22%+** 수준의 거짓양성(false-positive) 비율을 더 나은 루브릭(rubric) 설계, 과정(process) vs 결과(outcome) 보상 분리, 스크린샷 궤적(screenshot trajectories) 전반의 분할정복식 컨텍스트 관리로 거의 0에 가깝게 낮췄다고 설명했다. 별개로 [@GenReasoning](https://x.com/GenReasoning/status/2042204629321019537)은 최전선 모델을 위한 1년짜리 스포츠 베팅 환경인 **KellyBench**를 공개했고, 헤드라인 결과는 분명했다: **테스트된 모든 frontier 모델이 돈을 잃는다**. 이는 현재 시스템이 진정으로 비정상적(non-stationary)인 환경에서 적응, 리스크 관리, 학습에 여전히 약하다는 점을 시사한다. [@teortaxesTex](https://x.com/teortaxesTex/status/2042211750636822746)은 벤치마크에서 **Opus 4.6**과 **GPT 5.4**만이 완전 파산(total bankruptcy)을 피한다고 덧붙였다.
- **에이전트형 RL(agentic RL) 실패 모드가 더 뚜렷해졌다**: 추론 붕괴(reasoning collapse)를 다룬 **RAGEN-2** 논문이 [@zoltansoon](https://x.com/zoltansoon/status/2042212868372758772)에서 공유됐다. RL로 학습된 에이전트가 다양해 보이지만 실제로는 템플릿을 반복할 수 있으며, 엔트로피(entropy)는 높지만 상호정보(mutual information)는 거의 0에 가깝다는 내용이다. 동시에 실무적으로 더 중요할 수 있는 코딩 에이전트 학습 방향으로 [@dair_ai](https://x.com/dair_ai/status/2042237615492260249)은 로컬라이제이션(localization), 편집(editing), 테스트 생성(test generation), 재현(reproduction), 리뷰(review) 같은 **원자 스킬(atomic skills)** 로 학습했을 때 **18.7% 개선**을 보였고, 엔드투엔드(end-to-end) 최적화만 하는 것보다 복합 소프트웨어 과제로 더 잘 전이(transfer)됐다고 소개했다.

### 모델·제품 출시: Meta Spark, Gemma 4, MedGemma, 그리고 로컬 추론

- **Meta의 첫 MSL 릴리스 “Muse/Spark”는 모델만큼이나 ‘소비자 배포’ 스토리로 읽혔다**: [@alexandr_wang](https://x.com/alexandr_wang/status/2042142866697548189)과 Meta 소속 연구자들의 포스트는 이를 “personal superintelligence”로 가는 초기 이정표로 프레이밍했지만, 더 날카로운 외부 분석은 [@kimmonismus](https://x.com/kimmonismus/status/2042184756553756679)에서 나왔다. 핵심 위협은 프런티어 코딩/수학 자체가 아니라, Meta가 기존 제품 표면(surfaces) 안에서 유능한 무료 어시스턴트를 **10억+ 사용자(1B+)** 에게 배포할 수 있다는 점이라는 것이다. 제품 트랙션 신호도 즉각적이었으며, Meta AI가 밤사이 App Store **#6** 으로 상승했다고 [per Alexandr Wang](https://x.com/alexandr_wang/status/2042254047244398978)에서 언급됐다. 기술적으로는 [@ahatamiz1](https://x.com/ahatamiz1/status/2042152600540237953)이 RL에서 흥미로운 관찰을 소개했다: ‘생각(thinking)’ 중에 추론 길이가 먼저 길어졌다가, 압축됐다가, 다시 확장되는 **위상전이(phase transition)** 가 나타났고, 이는 더 긴 CoT를 무작정 쓰는 대신 **적응형 컴퓨트 라우팅(adaptive compute routing)** 여지를 시사한다.
- **Gemma 4의 로컬/오픈(local/open) 입지가 계속 울림을 줬다**: [@kimmonismus](https://x.com/kimmonismus/status/2042155315190489360)은 실용적 매력을 요약했다. 많은 일상 작업에 “perfectly adequate”하고, **로컬에서 실행**되며, 무료이고, 보안적으로도 유리하지만(power users 바깥에서는) 잘 알려지지 않았다는 것이다. 이후 Google DeepMind는 **Gemma 4가 첫 주 1000만(10M) 다운로드를 돌파**했고, Gemma 패밀리 전체 누적은 **5억+(500M+) 다운로드**라고 [announcement](https://x.com/GoogleDeepMind/status/2042283481640615944)에서 공유했다. 툴링 생태계도 빠르게 따라오고 있다: [Together AI](https://x.com/togethercompute/status/2042264479069564958)는 256K 컨텍스트와 멀티모달/툴 유스를 갖춘 **Gemma 4 31B**를 추가했고, [@danielhanchen](https://x.com/danielhanchen/status/2042270043011162246)은 **Unsloth**로 Gemma-4-31B 미세조정(fine-tuning)을 하면 (무료 Kaggle T4에서도) 대략 **22GB VRAM** 수준에 맞출 수 있다고 말했다.
- **도메인 모델(domain models)은 조용히 개선을 이어갔다**: [@kimmonismus](https://x.com/kimmonismus/status/2042213170983358496)은 **MedGemma 1.5**를 소개했다. 오픈 웨이트(open-weight) **4B** 의료 모델로 3D 영상의학(radiology), 병리(pathology), 장기 추적 X-ray, 임상 문서(clinical docs) 등을 포괄하며, v1 대비 병리에서 **+47% F1**, MRI 분류에서 **+11%** 향상을 보고했다. 임상 배포 측면에서는 [@GlassHealthHQ](https://x.com/GlassHealthHQ/status/2042324684273058236)이 **Glass 5.5**를 출시하며, 9개 임상 정확도(accuracy) 벤치마크에서 프런티어 범용 모델보다 더 낫다고 주장했고 API 가격을 **70% 인하**했다고 밝혔다.

### 추론(inference), 검색(retrieval), 그리고 시스템 효율

- **효율(efficiency) 연구는 특히 로컬/커머더티(commodity) 배포에서 더욱 집요하다**: [@wildmindai](https://x.com/wildmindai/status/2042176348286788051)는 **RotorQuant**를 공유하며, **KV cache 10배+ 압축**, **28% 더 빠른 디코딩(decoding)**, **5배 더 빠른 프리필(prefill)**, 그리고 풀-어텐션(full-attention) 품질을 유지하면서 **파라미터 44배 감소**를 주장했다. 서빙(serving) 측면에서는 [@turbopuffer](https://x.com/turbopuffer/status/2042256535989125461)가 인프라 최적화 사례를 공유했다: 객체 스토어(object store)별 쓰기 전략으로 커밋 빈도(commit cadence)를 높였더니 S3에서 **쓰기 지연(write latency)** 이 약 **2.5배 감소**했으며, 벡터/에이전트 백엔드가 여전히 저수준 스토리지 동작에 크게 좌우된다는 점을 보여줬다.
- **검색(retrieval)·표현(representation) 연구는 저장/연산 트레이드오프를 계속 밀고 있다**: [@gabriberton](https://x.com/gabriberton/status/2042061796400624157)은 **Matryoshka Representation Learning**에 대한 관심을 다시 불러일으켰다. 임베딩(embeddings)에서 더 짧은 프리픽스(prefix)도 여전히 유용하게 남도록 해, 초대규모 코퍼스(corpora)에서 검색/저장 비용을 낮출 수 있다는 실용적 아이디어다. 커뮤니티의 [@omouamoua](https://x.com/omouamoua/status/2042163510352789937)은 이를 **late interaction** 시스템과 연결지으며, 각 벡터가 저차원(low-dimensional)으로 유지된다면 입력당 벡터 개수를 늘려도 벡터당(per-vector) 비용을 폭발시키지 않으면서 디스트랙터(distractors)를 제거할 수 있다고 말했다.
- **NVIDIA와 SGLang에서도 주목할 시스템 아이디어가 나왔다**: [@SemiAnalysis_](https://x.com/SemiAnalysis_/status/2042286547769184644)는 GB200 NVL72급 시스템에서 NVIDIA의 **DWDP** 추론 병렬화(inference parallelism) 전략을 짚으며, 프리필(prefill) 동안 더 많은 peer-GPU 대역폭을 쓰는 대신 collective-barrier 스톨(stalls)을 줄이는 트레이드오프로 설명했다. [@AndrewYNg](https://x.com/AndrewYNg/status/2042289428702642588)는 KV cache 구현, **RadixAttention**, 디퓨전 가속(diffusion acceleration)을 다루는 **SGLang** 단기 코스를 발표했는데, 추론 엔지니어링(inference engineering)이 대중적 실무 교육의 중심 주제로 올라왔음을 보여준다.

### 참여도 상위 트윗(engagement 기준)

- **바이브 코딩(vibe-coded) 레포의 데드 코드 정리**: [@gabriberton](https://x.com/gabriberton/status/2042141119837012284)은 “Delete all dead code. Use **ruff** and **vulture**.”라는 실용 팁을 공유했다. 요지는 단순한 위생(hygiene)을 넘어, 무의미한 파일을 줄이면 **토큰(tokens)** 이 줄고 비용이 낮아지며 에이전트 추론(reasoning)도 종종 좋아진다는 것이다.
- **Codex를 둘러싼 OpenAI 요금(pricing) 변화**: [@OpenAI](https://x.com/OpenAI/status/2042295688323875316)은 ChatGPT Plus보다 Codex 사용량이 **5배 더 많은** 새로운 **$100/월 ChatGPT Pro** 티어를 소개했다. 기존 **$200 Pro** 티어는 최상위 사용량 옵션으로 유지되며, Codex 사용량이 또 한 번 일시적으로 상향됐다는 내용도 [details](https://x.com/OpenAI/status/2042296046009626989)에 포함됐다.
- **Anthropic의 advisor/executor 패턴**: [@claudeai](https://x.com/claudeai/status/2042308622181339453)은 **Opus가 advisor** 역할을 하고 **Sonnet/Haiku가 실행(execute)** 을 담당해, 더 낮은 비용으로 Opus에 가까운 성능을 겨냥하는 플랫폼 패턴을 발표했다. 많은 팀이 이미 수렴하던 설계를 제품 형태로 제시한 셈이다.
- **Gemini의 대화형(interactive) 시각화**: [@GeminiApp](https://x.com/GeminiApp/status/2042272415951253932)은 채팅 내에서 변수 조정과 3D 탐색을 포함한 **대화형 시각화**를 출시했다. 어시스턴트가 텍스트 출력을 넘어 ‘실행 가능한 설명 미디어’로 확장되는 사례로 언급됐다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Gemma 4 모델 업데이트 및 수정

- **[Gemma 4 on Llama.cpp should be stable now](https://www.reddit.com/r/LocalLLaMA/comments/1sgl3qz/gemma_4_on_llamacpp_should_be_stable_now/)** (Activity: 673): `llama.cpp` 레포에 [PR #21534](https://github.com/ggml-org/llama.cpp/pull/21534)가 머지된 이후 **Gemma 4**의 알려진 이슈가 해결되었다는 요지다. 사용자들은 `Gemma 4 31B`를 `Q5` 양자화(quantization)로 안정적으로 구동했다고 보고했다. 런타임 구성으로는 Aldehir의 interleaved 템플릿을 `--chat-template-file`로 지정하고, `--cache-ram 2048`, `-ctxcp 2` 등을 통해 RAM 사용을 제어하는 방법이 언급됐다. 또한 **CUDA 13.2**는 깨져(broken) 있어 불안정 빌드를 유발하므로 피해야 하며, 릴리스보다 지연되는 배포물을 쓰기보다 마스터 브랜치 최신 소스를 쓰라는 권고가 강조됐다. 댓글에서는 CUDA 13.2 불안정성을 특히 경고하며 [this Reddit thread](https://www.reddit.com/r/unsloth/comments/1sgl0wh/do_not_use_cuda_132_to_run_models/)를 공유했고, `--min-p 0.0`, `-np 1` 같은 수동 튜닝으로 성능과 메모리 사용을 최적화할 수 있다는 조언도 나왔다. 또 `Q5` 미만 양자화에서 오디오 기능이 영향을 받는다는 점이 [GitHub pull request](https://github.com/ggml-org/llama.cpp/pull/21599)와 함께 언급됐다.
- **[It looks like we’ll need to download the new Gemma 4 GGUFs](https://www.reddit.com/r/LocalLLaMA/comments/1sfrrgz/it_looks_like_well_need_to_download_the_new_gemma/)** (Activity: 746): 새 **Gemma 4 GGUFs**가 여러 기술적 이슈를 해결하고 개선을 포함해 업데이트됐다는 내용이다. 이질적 iSWA에서의 attention rotation 지원, CUDA 버퍼 오버랩에 대한 핵심 수정, byte token 처리를 위한 BPE detokenizer 개선, `'add bos'`를 true로 설정, Gemma 4 전용 파서(parser) 도입, 커스텀 newline splitting 등이 핵심 변경으로 요약됐으며, 세부 내용은 [GitHub pull requests](https://github.com/ggml-org/llama.cpp/pulls?q=is%3Apr+is%3Aclosed+Gemma+4)에 정리돼 있다. 댓글에서는 Bartowski나 Heretic 같은 다른 배포(variant)도 같은 업데이트가 필요한지, 토크나이저(tokenizer)/아키텍처 변경이 호환성에 어떤 영향을 주는지에 대한 질문이 이어졌다. 일부는 대형 모델이 안정화되기 전까지 3~5번 재다운로드를 하게 되는 패턴이 있다며, 초기 릴리스에 바로 올라타지 않고 관망하는 전략을 공유했다.

### /r/LocalLlama + /r/localLLM: 로컬 LLM 사용 사례 및 경험

- **[Local (small) LLMs found the same vulnerabilities as Mythos](https://www.reddit.com/r/LocalLLaMA/comments/1sgrfp1/local_small_llms_found_the_same_vulnerabilities/)** (Activity: 592): 더 작은 로컬 LLM(예: Gemma 4 31B)이 Anthropic의 Mythos 같은 대형 모델과 동일한 취약점을 식별할 수 있어, ‘모델 크기=효과’라는 단순한 등식에 의문을 던진다는 주장이다. 다만 테스트에 Qwen3 32B, DeepSeek R1, Kimi K2 같은 구형 모델이 사용됐고 Qwen3.5 27B, DeepSeek V3.2, Kimi K2.5 같은 최신 버전이 빠졌다는 점이 비판됐으며, 성능 지형이 들쭉날쭉한(jagged) 영역이라는 해석도 제시됐다. 상세는 [original article](https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier)을 참고. 댓글에서는 ‘발견(discovery)’과 ‘검증(analysis)’을 구분해야 한다며, 이 실험은 이미 제시된 취약 코드를 분석하게 한 것으로 Mythos가 했다는 독립적 탐지와는 다르다는 지적이 나왔다.
- **[It finally happened, I actually had a use case for a local LLM and it was brilliant](https://www.reddit.com/r/LocalLLaMA/comments/1sg2686/it_finally_happened_i_actually_had_a_use_case_for/)** (Activity: 844): 인터넷이 없는 비행 중 로컬 LLM **Gemma 4**를 실제로 유용하게 쓴 사례다. 사용자는 심한 aerosinusitis를 겪었고, LLM이 제안한 *Toynbee Maneuver*를 따라 한 뒤 10분 안에 통증이 완화됐다고 한다. 댓글에서는 오프라인 환경을 위한 온디바이스(on-device) 모델의 가치, 그리고 민감한 의료 정보(medical advice)에 대한 프라이버시 측면에서 로컬 구동이 더 낫다는 의견이 나왔다. 한편 의료 용어에는 MedGemma 같은 전문 모델이 더 적합할 수 있다는 추천도 있었다.

### /r/LocalLlama + /r/localLLM: 신규 모델 출시 및 벤치마크

- **[Meta has not given up on open-source](https://www.reddit.com/r/LocalLLaMA/comments/1sfzdrv/meta_has_not_given_up_on_opensource/)** (Activity: 467): **AI at Meta**의 트윗 이미지를 공유하며, Meta Superintelligence Labs의 Muse 패밀리에서 나온 새 모델 **Muse Spark**를 소개한다. 멀티모달 추론, 툴 사용(tool-use), 멀티 에이전트 오케스트레이션 등을 내세우며, meta.ai 및 Meta AI 앱에서 이용 가능하고 향후 버전은 오픈소스(open-source)로 풀 계획이 있다고 설명한다. 또한 일부 파트너에게 API로 제공할 계획도 언급됐다. 댓글에서는 Meta가 실제로 오픈소스를 얼마나 이행할지에 대해 회의적인 반응이 많았다.
- **[Glm-5.1 claims near opus level coding performance: Marketing hype or real? I ran my own tests](https://www.reddit.com/r/LocalLLM/comments/1sft0n9/glm51_claims_near_opus_level_coding_performance/)** (Activity: 338): **GLM-5.1**이 “Opus 수준(opus level)”에 가까운 코딩 성능을 주장하는 가운데, 작성자가 레거시 백엔드의 다단계·교차 파일 의존 리팩터링 과제로 직접 테스트한 결과를 공유한다. GLM-5.1은 상태(state)를 유지하고 자기수정(self-correction)을 잘 했다고 하며, **SWE-Bench Pro**, **Terminal-Bench 2.0**, **NL2Repo**를 묶은 종합 점수에서 Opus의 `57.5` 대비 `54.9`를 기록했다고 한다. 특히 조작하기 어렵다고 여겨지는 SWE-Bench Pro에서 Opus보다 잘 나왔다는 점이 강조되며, Opus가 심층 추론에 강할 수는 있어도 GLM-5.1이 긴 다단계 코딩 작업에서 비용 대비 경쟁력이 있을 수 있다는 결론이 제시된다. 댓글에서는 중국 개발자들 사이에서 Anthropic 대안으로 인기라는 경험담, 사용 쿼터(quota)가 넉넉하다는 평가 등이 이어졌다.

### Less Technical Subreddits: Anthropic Mythos 및 관련 동향

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[New York Times: Anthropic’s Restraint Is a Terrifying Warning Sign](https://www.reddit.com/r/singularity/comments/1sggktf/new_york_times_anthropics_restraint_is_a/)** (Activity: 732): 뉴욕타임스 기사 요약으로, Anthropic이 초지능(superintelligent) 모델의 오용 가능성을 우려해 개발을 신중하게 접근한다는 점을 다룬다. Anthropic은 이러한 모델을 ‘책임 있는 정부와 기업’에만 제공해야 한다고 주장하며 핵 비확산(nuclear nonproliferation)에 비유한다. 또한 Anthropic이 자사 AI 능력의 급격한 진전에 놀랐다는 대목이 언급되며, 초지능 AI 도달 시점이 과소평가될 수 있다는 우려가 제시된다. 댓글에서는 AGI를 금지하는 것이 현실적으로 가능하냐, ‘책임 있는 정부’의 정의가 무엇이냐, 어린이/악성 행위자에 의한 악용, 그리고 핵 군비 통제처럼 국제 협력이 필요하다는 논쟁이 이어졌다.
- **[Insane graph from Anthropic's article on Mythos](https://www.reddit.com/r/singularity/comments/1sf8o3q/insane_graph_from_anthropics_article_on_mythos/)** (Activity: 471): Mythos 관련 Anthropic 글의 그래프를 공유한다. Firefox JS shell 익스플로잇에서 **Mythos Preview**가 `72.4%` 성공 익스플로잇과 `11.6%` 레지스터 제어(register control)를 보인 반면, **Sonnet 4.6**과 **Opus 4.6**은 각각 `4.4%`, `14.4%`의 레지스터 제어만 보이고 성공 익스플로잇은 없었다는 비교다. 댓글에서는 Mythos의 능력을 어떻게 봐야 하는지, 소프트웨어 개발에서 AI 기반 펜테스트(pentesting)가 더 중요해질 수 있다는 농담/논평이 나왔다.
- **[BREAKING: Anthropic’s new “Mythos” model reportedly found the One Piece before the Straw Hats](https://www.reddit.com/r/ClaudeAI/comments/1sgs0b4/breaking_anthropics_new_mythos_model_reportedly/)** (Activity: 2222): **Mythos**가 벤치마크에서 ‘One Piece’를 `11초` 만에 찾았다는 식의 유머러스한 설정을 담은 밈성 글이다. 스포일러를 막기 위한 ‘Project Glasspoiler’ 같은 가상의 프로젝트가 언급되고, OpenAI도 먼저 찾았지만 작품을 존중해 공개하지 않았다는 식의 농담이 이어진다. 댓글은 다른 작품(예: GTA 6, Game of Thrones)을 Mythos가 해결할 수 있다는 식으로 상상력을 확장하는 등 가벼운 톤이 주를 이뤘다.
- **[Anthropic's recent run of "Bad Luck" is exactly what State sponsored AI attacks would look like](https://www.reddit.com/r/ClaudeAI/comments/1sg5088/anthropics_recent_run_of_bad_luck_is_exactly_what/)** (Activity: 569): Anthropic의 ‘Mythos’가 의도적으로 사이버 공격용으로 훈련되지 않아도 널리 쓰이는 소프트웨어의 제로데이(zero-day)를 발견할 수 있다는 점을 들어, 국가 행위자(state actor)가 유사한 능력을 활용할 위험을 논한다. 또한 Anthropic의 ‘misconfigured CMS’나 소스코드 유출 같은 사건들이 단순한 불운이 아니라 국가 지원 정찰(reconnaissance)일 수 있다는 추정을 덧붙인다. 댓글에서는 내부 성장통일 가능성이 더 크다는 반론, 비용-편익 흐름(cost-to-benefit flow)을 보자는 제안, 그리고 국가뿐 아니라 사적 부자(billionaires) 같은 개인도 위협이 될 수 있다는 의견 등이 오갔다.
- **[I used the Mythos referenced architecture patterns from the leaked source to restructure how I prompt Claude Code. The difference is night and day](https://www.reddit.com/r/ClaudeCode/comments/1sflemo/i_used_the_mythos_referenced_architecture/)** (Activity: 986): 유출된 소스에서 본 아키텍처 단서를 바탕으로 **Claude Code** 프롬프트 구조를 바꿨더니 성능이 크게 좋아졌다는 경험담이다. 글에서는 coordinator 모드가 병렬 워커(worker)를 띄우는 다중 에이전트 오케스트레이션, 위험 등급(risk classification)이 있는 40+ 툴 레지스트리(tool registry), ML 기반 자동 승인(auto-approval) 시스템 등을 언급한다. 작성자는 실행 전 계획(planning) 단계를 두고, 작업을 위험 등급으로 명시하는 방식으로 프롬프트를 구성해 더 전략적이고 오류가 줄었다고 주장한다. 댓글에서는 결국 ‘더 나은 계획과 실행’이라는 익숙한 원칙으로 귀결된다는 평가와, 기대만큼 새로운 인사이트가 아니라는 반응이 함께 나왔다.
- **[Carlini, one of the world best AI security researchers: "I've found more bugs in the last few weeks with Mythos than in the rest of my entire life combined"](https://www.reddit.com/r/singularity/comments/1sfhvpa/carlini_one_of_the_world_best_ai_security/)** (Activity: 1281): AI 보안 연구자 Nicholas Carlini가 Mythos 도구로 최근 몇 주 동안 인생 전체보다 많은 버그를 찾았다고 말했다는 주장이다. Mythos Preview가 주요 OS와 웹브라우저 전반에서 `thousands of high-severity vulnerabilities`를 발견했다는 식으로 소개되며, 원 출처로 [here](https://x.com/Simeon_Cps/status/2041596830450852118)가 인용됐다. 댓글에서는 Mythos의 ‘사이버보안 마케팅’이 공개 제한을 위한 전략인지, 중요하지 않은 버그도 잘 찾는지, npm 유출 같은 사건을 막는 데는 얼마나 도움이 되는지에 대한 회의가 제기됐다.
- **[Claude Opus vs Mythos](https://www.reddit.com/r/singularity/comments/1sg2wwj/claude_opus_vs_mythos/)** (Activity: 3224): 기술적 내용이 없는 밈 이미지로, 댓글도 가벼운 농담 위주로 흘러갔다. ‘Pakistani Denzel’ 같은 표현이나 GIF 링크 언급 등 기술 토론은 거의 없다.

### Less Technical Subreddits: Meta Muse Spark 및 모델 비교

- **[Muse Spark, first model from Meta Superintelligence Labs](https://www.reddit.com/r/singularity/comments/1sfxfv3/muse_spark_first_model_from_meta/)** (Activity: 994): Meta Superintelligence Labs의 첫 모델 **Muse Spark**를 여러 범주(멀티모달, 텍스트 추론, 헬스, 에이전트형 작업)에서 비교한 벤치마크 이미지를 공유한다. Muse Spark가 SOTA는 아니지만 CharXiv Reasoning, GPQA Diamond 같은 항목에서 경쟁력 있는 성능을 보이며 Meta가 다시 AI 경쟁에서 존재감을 드러낸다는 해석이 나온다. 다만 실제 운용 비용(cost)이 알려지지 않았다는 점이 활용에 영향을 줄 수 있다. 댓글에서는 ARC AGI 2가 벤치마크 마감 직후에 나왔다는 타이밍, 그리고 초기 숫자만으로 결론 내리기보다 실사용 검증이 필요하다는 의견이 언급됐다.
- **[Meta just dropped a new coding model](https://www.reddit.com/r/ClaudeCode/comments/1sg51ut/meta_just_dropped_a_new_coding_model/)** (Activity: 606): 여러 코딩 모델(Opus 4.6, Gemini 3.1, GPT 5.4, Grok 4.2 등)과 Meta의 **Spark Muse**를 비교한 테이블 이미지를 공유한다. Spark Muse의 멀티모달 성능이 두드러진다는 평과 함께, 에이전트형(agentic) 능력은 Opus 4.6보다 떨어진다는 지적이 있다. 파란색 표시로 결과를 과하게 좋게 보이게 한 시각화에 대한 불신도 나왔다. 댓글에서는 벤치마크 점수와 실전 코딩 성능의 괴리, 그리고 Meta에 대한 강한 불신이 함께 드러났다.
- **[Something happened to Opus 4.6's reasoning effort](https://www.reddit.com/r/ClaudeAI/comments/1sfw9b5/something_happened_to_opus_46s_reasoning_effort/)** (Activity: 4417): Anthropic의 **Opus 4.6**가 ‘car wash test’ 같은 간단한 추론 과제에서 반복적으로 실패한다는 사용자 경험을 공유하는 이미지다. 예전 버전 대비 reasoning 성능이 내려간 것 같다는 우려와, ‘thinking block’이 보이지 않는 점이 변화 신호일 수 있다는 관측이 함께 나온다. 댓글에서는 Anthropic이 변경사항을 투명하게 공개하지 않는 것에 대한 불만이 크며, 비용 절감을 위해 캐주얼 대화에서 추론을 줄이는 전략일 수 있다는 추측도 있다.
- **[Dario Ol Marketing Technique](https://www.reddit.com/r/ClaudeCode/comments/1sfxnfd/dario_ol_marketing_technique/)** (Activity: 960): 불타는 로봇 손 밈으로, Dario Amodei의 마케팅 전술(현재 모델을 일부러 ‘너프(nerf)’해 다음 릴리스를 더 좋아 보이게 한다는 주장)을 조롱한다. Claude의 상태 페이지를 언급하며 AI가 인간 엔지니어가 놓치는 취약점을 찾아도 서비스 장애(outage)는 여전히 발생한다는 모순을 지적하는 댓글도 있다. 또 과거 Apple의 “개인에게는 위험한 슈퍼컴퓨터” 같은 마케팅과의 유사성이 언급되며, 강력한 모델 공개의 윤리·보안 위험에 대한 회고가 나왔다.
- **[Nothing ever happens](https://www.reddit.com/r/Bard/comments/1sgeo0g/nothing_ever_happens/)** (Activity: 119): 안전 리스크와 비용 문제를 둘러싼 반복 서사를 비꼬는 밈이다. 일부 댓글은 Claude Mythos의 성능 향상(예: SWE-bench Verified, 보안/JS 벤치마크에서 큰 폭의 점프)을 근거로 안전 우려가 과장된 마케팅일 수 있다고 주장하는 반면, 다른 쪽은 제로데이 대량 발견 같은 현실적 위험을 인정하며 신중론을 편다. Project Glasswing로 주요 기업과 협업한다는 설정을 통해, 모델 공개가 가져올 보안 파급에 대한 우려도 함께 제기됐다.

### Less Technical Subreddits: Qwen 3.6 Plus 성능 및 비교

- **[Qwen 3.6 Plus is the first Chinese model to survive all 5 runs on FoodTruck Bench](https://www.reddit.com/r/Qwen_AI/comments/1sgjkw4/qwen_36_plus_is_the_first_chinese_model_to/)** (Activity: 140): 30일 비즈니스 시뮬레이션 벤치마크 FoodTruck Bench 리더보드 이미지로, Alibaba의 **Qwen 3.6 Plus**가 5회 모두 생존한 첫 중국 모델로 소개된다. 중간값 ROI `+283%`, 중간값 순자산 `$7,668`을 기록했다고 하며, 이전 모델(Qwen 3.5 397B, GLM-5 등)은 실패 원인을 분석해도 시뮬레이션을 끝까지 버티지 못했다는 비교가 포함된다. 전략 계획(planning)과 재고/자원 관리에서의 개선이 강조되지만, 식재료 낭비 같은 비효율은 여전히 남아 있다고 한다. 댓글에서는 Mythos 같은 다른 모델과 비교하고 싶다는 반응, 그리고 실제 벤치마크에서 중요한 것은 자원 낭비(낭비 최소화) 같은 운영 효율이라는 논의가 이어졌다.
- **[Qwen3.6-Plus is getting close to GPT-5.4 as a Video Security Agent](https://www.reddit.com/r/Qwen_AI/comments/1sg60rb/qwen36plus_is_getting_close_to_gpt54_as_a_video/)** (Activity: 73): 비디오 보안 에이전트(video security agent) 벤치마크 리더보드 이미지를 공유한다. Alibaba Cloud의 **Qwen3.6-Plus**가 `92/96`(정확도 `95.8%`)로 3위 공동에 올랐고, **GPT-5.4-mini**와 동률이며 **GPT-5.4**보다 약간 뒤처졌다고 설명한다. 이 벤치마크는 단일 프레임 분류보다 위협 분류, 툴 사용, 프라이버시 준수 같은 에이전트형 작업을 강조한다고 한다. [Image URL](https://i.redd.it/688mtpv391ug1.png). 댓글에서는 ‘비디오 보안’ 에이전트의 정의가 무엇인지 질문이 나왔고, 실제 배포에서는 중복 알림(deduplication)과 경보 피로(alert fatigue)를 줄이는 것이 핵심이라는 지적이 이어졌다.
- **[It looks like Qwen 3.6 Plus finally made it to the alibaba coding plan!](https://www.reddit.com/r/Qwen_AI/comments/1sfl88w/it_looks_like_qwen_36_plus_finally_made_it_to_the/)** (Activity: 114): **Qwen 3.6 Plus**가 Alibaba Coding Plan의 Pro 플랜에 포함됐지만 Lite 사용자에게는 제공되지 않는다는 내용이다. 일부는 Opencode Go의 `GLM5.1 MM2.7` 같은 대안을 언급했고, 또 일부는 Claude Code에서 모델명을 수동 설정해 우회 접근할 수 있다고 했다. 댓글에서는 Lite 플랜의 가치가 떨어졌다는 불만과, Pro로 올릴지 다른 플랫폼으로 갈지 고민하는 반응이 나타났다. 또한 **Qwen 3.6 Plus**가 z.ai의 코딩 플랜에서 **GLM 5.1**보다 느리다는 효율(속도) 우려도 언급됐다.
- **[Has anyone used Qwen Code, and if so, what do you think of it?](https://www.reddit.com/r/Qwen_AI/comments/1sfdnd4/has_anyone_used_qwen_code_and_if_so_what_do_you/)** (Activity: 66): **Qwen Code**라는 중국 코딩 어시스턴트에 대한 후기 스레드다. 무료 티어가 토큰 사용량이 매우 넉넉해 비용 효율적인 대안이 될 수 있다는 의견이 있는 반면, 메모리를 많이 먹는(memory hog) 편이라 Linux 메모리 관리 튜닝이 필요하다는 지적도 있다. UI는 Claude보다 뒤쳐지지만 Gemini보다는 낫다는 평가가 나왔고, 환각(hallucination)이 잦아 중복되거나 맥락에 맞지 않는 제안을 하는 문제가 언급됐다(예: 맥락 없이 CloudFlare tunnel 대신 Tailscale을 고집). 또한 Qwen Code가 Google Gemini CLI의 포크(fork)로 같은 워크플로를 공유한다는 점이 이야기됐다.
- **[Said "Hi" to Qwen, started an identity crisis](https://www.reddit.com/r/Qwen_AI/comments/1sfsju8/said_hi_to_qwen_started_an_identity_crisis/)** (Activity: 126): **Ollama**로 로컬에서 **Qwen 3.5**를 실행했더니 단순 인사에도 과도한 ‘thinking process’를 거친 뒤 답하는 현상을 공유한다. 모호한 입력을 받으면 여러 해석을 생성해 누락을 메우려는 학습 특성이 로컬 환경에서 비효율로 나타날 수 있다는 맥락이 덧붙었다. 댓글에서는 Alibaba Cloud의 27B 모델이 더 안정적으로 느껴졌다는 경험, 로컬 실행에서는 파라미터 조정이 필요하다는 팁, 그리고 작은 모델이 ‘생각’이 필요한 작업에서 신뢰도가 낮을 수 있다는 지적이 나왔다.

---

## AI Discord Recap

### AINews

- **접속 중단**: Discord가 오늘 접근을 차단해 더 이상 확인할 수 없었다. 이 형태로는 다시 가져오지 않겠지만, 곧 새로운 AINews를 출시할 예정이라고 밝혔으며, 여기까지 읽어준 것에 감사를 전했다.
