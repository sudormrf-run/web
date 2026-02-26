---
title: "Perplexity, 오케스트레이션 우선 에이전트 ‘Computer’ 출시"
summary:
  - "Perplexity, 에이전트 ‘Computer’ 출시"
  - "Karpathy, 코딩 에이전트 상전이 언급"
  - "OpenAI, GPT‑5.3‑Codex API 공개"
  - "Qwen3.5 Medium, 로컬 배포 속도전"
  - "Anthropic, Vercept 인수·RSP v3 전환"
date: 2026-02-25
originalUrl: "https://news.smol.ai/issues/26-02-25-theres-a-growing-uneasy-feeling-that-coding-has-changed-forever-much-much-more-than-normal-hype/"
hasHeadline: true
headline: "Perplexity, 오케스트레이션 우선 에이전트 ‘Computer’ 출시"
tags:
  - Perplexity
  - OpenAI
  - Qwen
  - Anthropic
  - Agents
isFeatured: true
---

## 헤드라인: Perplexity, 오케스트레이션 우선 에이전트 ‘Computer’ 출시

- **Computer 공개**: Perplexity가 **Computer**를 공개하며, 한 인터페이스에서 **파일·도구·메모리·모델**을 오케스트레이션해 프로젝트를 “research, design, code, deploy, and manage”할 수 있는 엔드투엔드 시스템으로 포지셔닝했다 ([launch tweet](https://x.com/perplexity_ai/status/2026695550771540489), [Arav Srinivas](https://x.com/AravSrinivas/status/2026695864039911684)).
- **접근성·가격**: 웹에서 **Max** 구독자 우선 제공 후 Pro/Enterprise로 확대 예정이며, **사용량 기반 과금**·서브에이전트 모델 선택·지출 한도·Max 포함 크레딧(10k/mo)과 한시 보너스 크레딧을 강조했다 ([pricing details](https://x.com/perplexity_ai/status/2026695793537855526), [availability](https://x.com/perplexity_ai/status/2026695805252547008), [Arav on rollout](https://x.com/AravSrinivas/status/2026697136507859067)).
- **아키텍처 포인트**: 단일 거대 에이전트 루프가 아니라 coordinator 모델이 전문 모델(리서치 vs 코딩 vs 미디어)에게 작업을 배분하는 **병렬·비동기 서브에이전트**를 “breakthrough”로 강조했다 ([Lior’s breakdown](https://x.com/LiorOnAI/status/2026739011122065819), [Denis Yarats](https://x.com/denisyarats/status/2026704583817634180)).
- **“Everything is computer” 내러티브**: 소규모 팀이 코딩 에이전트와 자동화된 eval/debug 루프를 광범위하게 사용해 플랫폼을 만들었다는 메시지를 확산했다 ([Arav](https://x.com/AravSrinivas/status/2026703703248613736), [Denis](https://x.com/denisyarats/status/2026704583817634180)).
- **엔지니어 관점의 의미**: 멀티모델 라우팅, 격리/샌드박스, 지속 메모리, 비용 컨트롤 등 *시스템 레벨 agent UX*로의 구체적 전진으로, “agentic work”를 단일 채팅이 아니라 **분산 워크플로**로 취급하는 흐름을 보여준다 ([Arav](https://x.com/AravSrinivas/status/2026695864039911684), [Computer site](https://x.com/AravSrinivas/status/2026697232846827941)).

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews’ website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

이를 위한 마이크로사이트를 만들었습니다:

[https://wtfhappened2025.com/](https://wtfhappened2025.com/)

[https://wtfhappened2025.com/](https://wtfhappened2025.com/)

지금 확인하세요.

---

## AI Twitter Recap

### Perplexity “Computer”: 오케스트레이션 우선 에이전트 제품 (멀티모델, tool+env, 사용량 기반 과금)

- 상단 **헤드라인** 섹션에서 Computer 출시의 상세 내용과 관련 링크를 모두 요약했다.

### 코딩 에이전트: “12월부터 작동하기 시작” + 새 모델/툴링 드롭 (GPT‑5.3‑Codex, Claude Code 생태계, Copilot CLI GA)

- **Karpathy의 ‘상전이(phase change)’ 주장**: Andrej Karpathy는 **12월 이후 코딩 에이전트가 질적으로 임계점을 넘었다**고 주장하며, 취약한 데모에서 벗어나 장거리(long-horizon) 작업을 일관성과 집요함으로 완수하게 됐다고 말했다. 최소 개입으로 로컬 배포 전체(SSH keys → vLLM → 모델 다운로드/벤치 → 서버 엔드포인트 → UI → systemd → 리포트)를 위임한 사례를 자세히 들었다 ([Karpathy](https://x.com/karpathy/status/2026731645169185220)). 이는 devtool 빌더/사용자 사이의 “software is changing” 정서와도 맞물린다 ([Cursor](https://x.com/cursor_ai/status/2026717494426173917), [snowmaker](https://x.com/snowmaker/status/2026555857845256354)).
- **OpenAI GPT‑5.3‑Codex 출시 + 초기 평가**: OpenAI가 API에 **GPT‑5.3‑Codex**를 출시했으며 ([snsf](https://x.com/snsf/status/2026513135075746239)), Cline은 지원을 발표하면서 **5.2 대비 ~25% 빠름**, 작업당 토큰 감소, SWE-Bench Pro에서의 강한 성능을 주장했다 ([Cline](https://x.com/cline/status/2026481089158779021)).
- **커뮤니티 벤치 반응(노이즈 주의)**: “IBench에서 86%”에 대한 놀람 ([tweet](https://x.com/adonis_singh/status/2026456939224510848))과 “첫 벤치마크가 곧 나온다”는 반응 ([kimmonismus](https://x.com/kimmonismus/status/2026709699366670579)) 등 반응이 거칠고(그리고 시끄러웠다). 방법론이 명확해질 때까지는 방향성 신호로만 보라는 주의가 붙었다.
- **Claude Code: 성숙도 + 관측가능성(observability) + 통합**: Claude Code의 ‘첫 생일’ 회고는 이를 *기반(foundation)* 코딩 에이전트 제품으로 강조하는 한편, **컨텍스트 길이 스케일링이 메모리 제약에 부딪힌다**는 우려를 언급했다 ([swyx](https://x.com/swyx/status/2026462001933988094)). 실무 생태계로는 Claude Code **Slack 플러그인** 통합 ([catwu](https://x.com/_catwu/status/2026485966626763120))과 “nerfing”/라우팅 문제 디버깅을 위한 LangSmith 트레이싱 ([hwchase17](https://x.com/hwchase17/status/2026452439327764521), [observability complaint](https://x.com/ChaiWithJai/status/2026446654753190324))이 언급됐다.
- **GitHub Copilot CLI GA + “/research”**: Copilot CLI가 **GA**에 도달했고 ([Evan Boyle](https://x.com/_Evan_Boyle/status/2026706464375796099)), GitHub 코드 검색 + MCP 기반 동적 페칭을 사용해 저장소 전반을 ‘깊게 리서치’하고, 공유용으로 gist에 리포트를 내보내는 `/research` 기능을 추가했다 ([feature](https://x.com/_Evan_Boyle/status/2026458533320077689)). 터미널에서 실시간으로 타이틀을 업데이트하는 소소한 UX도 언급됐다 ([tweet](https://x.com/njukidreborn/status/2026443296177008818)).

### 오픈 모델 & 로컬 추론(inference): Qwen3.5 “Medium” 웨이브 (MoE + 롱 컨텍스트 + FP8/quant), 그리고 로컬-에이전트 변곡점

- **Qwen3.5 Medium 배포 ‘블리츠’**: Alibaba는 **vLLM**, **GGUF**, **LM Studio**, **Ollama**, **Jan** 전반에 day-0 툴링 지원을 밀어 넣으며, 주요 오픈 릴리스의 배포 스택이 얼마나 빨라졌는지 강조했다 ([vLLM thanks](https://x.com/Alibaba_Qwen/status/2026496673179181292), [GGUF](https://x.com/Alibaba_Qwen/status/2026497723944546395), [LM Studio](https://x.com/Alibaba_Qwen/status/2026496880285462962), [Ollama](https://x.com/ollama/status/2026598944177009147), [Jan](https://x.com/Alibaba_Qwen/status/2026660582221558190)).
- **Qwen의 주요 기술 주장(게시 내용 기준, 독립 검증 아님)**:
  - **양자화(quantization) 강인성**: **4-bit 가중치 + KV-cache 양자화**에서 “near-lossless” 수준 정확도.
  - **롱 컨텍스트**: **Qwen3.5‑27B 800K+**, **35B‑A3B는 32GB VRAM 소비자 GPU에서 >1M 컨텍스트**, **122B‑A10B는 80GB GPU에서 1M+**.
  - **오픈 베이스**: 연구 지원을 위해 **Qwen3.5‑35B‑A3B‑Base**를 오픈소스로 공개했다 ([Alibaba_Qwen](https://x.com/Alibaba_Qwen/status/2026502059479179602)).
  - **FP8 가중치 공개**: vLLM/SGLang 네이티브 지원과 함께 **FP8 weights**를 오픈했다 ([FP8 announcement](https://x.com/Alibaba_Qwen/status/2026682179305275758)).
- **로컬 에이전트 ‘전/후’**: 한 실무자는 **Qwen3.5‑35B‑A3B**가 (툴 콜링, 안정성 측면에서) 로컬 에이전트 루프를 의미 있게 더 신뢰 가능하게 만들었다고 주장했으며, 토큰당 **~3B 파라미터만 활성화**된다는 점을 들어 Claude Code/Codex와 나란히 로컬을 실용 옵션으로 제시했다 ([victormustar](https://x.com/victormustar/status/2026624792602808707)).
- **평가 담론 경고: benchmaxxing & MoE vs dense 혼선**: 리더보드를 과도하게 읽지 말라는 경고(“please stop falling for benchmaxxing”) ([scaling01](https://x.com/scaling01/status/2026698844088549848))와, 일부 벤치에서 Qwen 사이즈 간 예상 밖의 동급(parity)을 지적하며 툴링 효과 또는 벤치 아티팩트 가능성을 언급한 스레드가 나왔다 ([eliebakouch](https://x.com/eliebakouch/status/2026727151978840105), [teortaxesTex on HLE/MoE interpretation](https://x.com/teortaxesTex/status/2026690994029072512)).
- **Arena 반영**: Text/Vision/Code Arena에 Qwen3.5 Medium이 추가되어 정면 비교가 가능해졌다 ([Arena](https://x.com/arena/status/2026716550812807181)).

### 에이전트, 신뢰성, 그리고 “에이전트를 위한 빌드”: 최소 벤치마크, 도구 인터페이스 최적화, 실패 모드

- **신뢰성은 역량만큼 오르지 않았다**: 신뢰성 중심 연구는 모델 역량이 빠르게 올라가도 **신뢰성 개선은 제한적**이며, 신뢰성을 여러 차원으로 분해하고 에이전트 성능을 단일 “success rate” 숫자로 축약하지 말라고 경고한다 ([IEthics](https://x.com/IEthics/status/2026435186704134617), [Justin Bullock quote](https://x.com/JustinBullock14/status/2026693253169336475)).
- **에이전트 실패는 종종 ‘역량’이 아니라 ‘신뢰성’ 문제**: 한 “agent failure” 논문 요약에 따르면, 에이전트는 장거리 설정에서 특히 **작은 경로 이탈 툴 콜을 누적(compounding)** 하며 실패하는 경우가 많고, 한 번의 실수가 다음 실수 확률을 키운다고 한다 ([omarsar0](https://x.com/omarsar0/status/2026471955319189861)).
- **최소 ‘safe & helpful’ 벤치 아이디어**: 더 어려운 과제 대신, *사소하게 명세된* 안전 행동(예: “요청받았을 때만 이메일 보내기”)을 관련 없는/산만한 컨텍스트에서도 모델이 신뢰성 있게 지키는지 측정하자는 제안이 나왔고, 최전선 모델도 여전히 놓친다고 주장한다 ([jonasgeiping](https://x.com/jonasgeiping/status/2026714911951220888)).
- **도구 설명을 최적화 타깃으로(Trace‑Free+)**: Intuit AI Research는 에이전트 성공이 **tool-interface 텍스트**에 크게 좌우된다고 보고, 추론(inference) 시 트레이스 없이도 도구 설명을 에이전트가 쓰기 좋은 형태로 다시 쓰게 가르치는 커리큘럼을 제안했다. StableToolBench/RestBench 성능 향상과 100개+ 도구에서도 강인하다는 결과를 보고했다 ([omarsar0](https://x.com/omarsar0/status/2026676835539628465)).
- **GUI/web 에이전트: 계획형 vs 반응형**: ActionEngine은 GUI 에이전트를 **그래프 탐색(graph traversal)** 로 재구성하고, 오프라인 탐색으로 state-machine을 만든 뒤 런타임에는 ~1회 LLM 호출로 전체 프로그램을 생성해 단계별 비전 루프 대비 성공/비용/지연을 크게 개선했다고 주장했다 ([dair_ai](https://x.com/dair_ai/status/2026678090815123594)).

### 컴퓨트, 메모리, 추론 속도 프런티어: 칩 메모리 계층, diffusion LLM, 스케일링 인프라

- **Karpathy의 ‘tokens tsunami’와 메모리 오케스트레이션**: 한 고참여 스레드는 핵심 제약을 두 메모리 풀—빠르고 작은 **온칩 SRAM** vs 크고 느린 **오프칩 DRAM**—로 정리하고, LLM 워크플로(프리필/디코드/학습)에서 처리량/지연/$를 최적화하기 위한 메모리+컴퓨트 오케스트레이션이 가장 큰 퍼즐이라고 주장했다. 특히 **롱 컨텍스트 디코드 + 타이트한 에이전트 루프**가 “HBM-first”(NVIDIA류)와 “SRAM-first”(Cerebras류) 모두에 어렵다고 했다 ([Karpathy](https://x.com/karpathy/status/2026452488434651264)).
- **속도 대안으로서 diffusion LLM**:
  - Andrew Ng는 Inception Labs의 diffusion LLM이 보여주는 인상적인 추론 속도를 강조했다 ([AndrewYNg](https://x.com/AndrewYNg/status/2026478474681262576)).
  - 별도 논의에서는 diffusion 접근이 **~1000 tok/s**에 도달할 수 있으며, 칩이 아니라 아키텍처로 속도 게임을 바꿀 수 있다는 주장도 나왔다(재현 가능한 평가보다 마케팅이 앞설 수 있으니 주의) ([kimmonismus](https://x.com/kimmonismus/status/2026662718321897974)).
  - 연구 스레드로는 균일 diffusion-LLM에서 추론 시 스케일링을 다루는 “Diffusion Duality (Ch.2) Ψ-Samplers”가 공유됐다 ([ssahoo_](https://x.com/ssahoo_/status/2026487124493742406)).
- **스케일 해석가능성(interpretability)**: Goodfire는 최소한의 추론 오버헤드로 **조(兆) 파라미터 급 해석가능성**을 가능케 하는 인프라 작업을 소개하며, **수십억 activations**를 수집하고 최소 한 사례에서 chain-of-thought를 실시간으로 조향(steering)할 수 있었다고 밝혔다 ([GoodfireAI](https://x.com/GoodfireAI/status/2026748839303246238)).

### 주요 발표 & 정책/안전 압박 지점: Anthropic 인수 + RSP 변화, 감시 우려, 시장/전력 제약

- **Anthropic, Vercept 인수**: Claude의 “computer use” 역량을 진전시키기 위해 Vercept를 인수했다 ([AnthropicAI](https://x.com/AnthropicAI/status/2026705792033026465)). Vercept 창업자 스레드는 미션을 “사용자에게 무엇을 할지 말해주기”에서 **사용자를 위해 실제로 행동하기**로 옮기는 것으로 설명했으며, 특히 비기술적 작업을 강조했다 ([ehsanik](https://x.com/ehsanik/status/2026712952699760808)).
- **Anthropic ‘RSP v3’ 변화(Responsible Scaling Policy)**: 해설에 따르면, “완화책이 보장되지 않으면 임계치 이후 학습을 멈춘다”는 단선적·일방적(commitment)에서 벗어나, **더 잦은 투명성 산출물**(로드맵 + 리스크 리포트) 중심으로 이동하고 위협 모델 업데이트 및 외부 리뷰 약속을 포함하는 쪽으로 바뀐다고 한다 ([MaskedTorah](https://x.com/MaskedTorah/status/2026512814886768799)). 더 자극적인 요약은 이를 경쟁 압력과 리스크 과학의 불확실성이 반영된 것으로 주장했다 ([kimmonismus](https://x.com/kimmonismus/status/2026669811179335739)).
- **감시와 시민 자유**: Jeff Dean은 **대규모 감시(mass surveillance)** 가 발언을 위축시키고 오용을 부르며 헌법적 보호를 침해한다는 데 명시적으로 동의했다 ([JeffDean](https://x.com/JeffDean/status/2026566490619879574)). 관련 트윗에서는 불법 명령을 거부할 수 없는 자율 경찰/감시 에이전트에 대한 우려도 제기됐다 ([BlackHC](https://x.com/BlackHC/status/2026456906710327338)).
- **에너지 제약**: 한 보고는 수요가 전력망을 압박하는 가운데, 미국 정치 리더십이 주요 AI/데이터센터 기업들에 요금 반발을 피하기 위해 **전력 자가 조달(self-provision)** 을 요구하고 있다고 주장했다 ([kimmonismus](https://x.com/kimmonismus/status/2026720759163298282)). 이는 AI 스케일링이 알고리즘뿐 아니라 **인프라/정책** 문제이기도 하다는 사례로 제시됐다.
- **Grok 4.20 Beta 리더보드 이동**: Arena는 Grok‑4.20‑Beta1이 **Search Arena #1**, **Text Arena #4**에 올랐다고 보고했다 ([arena](https://x.com/arena/status/2026566773496230383)). 샘플링 정책과 모델 변형에 따라 Arena 순위는 변동될 수 있으므로 여러 신호 중 하나로 보라는 주의가 덧붙었다.

---

### Top tweets (by engagement, technical/relevant)

- [Karpathy on the “phase change” in coding agents since December](https://x.com/karpathy/status/2026731645169185220)
- [Perplexity launches “Computer”](https://x.com/perplexity_ai/status/2026695550771540489)
- [Arav Srinivas: what Perplexity has been building + “Computer”](https://x.com/AravSrinivas/status/2026695864039911684)
- [Karpathy on compute: SRAM vs DRAM orchestration for token-heavy LLM workloads](https://x.com/karpathy/status/2026452488434651264)
- [Anthropic acquires Vercept for computer-use capabilities](https://x.com/AnthropicAI/status/2026705792033026465)
- [Qwen3.5 long-context + quantization + base model details](https://x.com/Alibaba_Qwen/status/2026502059479179602)
- [Local agents tipping point: run Qwen3.5‑35B‑A3B locally with 32GB RAM](https://x.com/victormustar/status/2026624792602808707)
- [Goodfire: infra for interp at trillion-parameter scale](https://x.com/GoodfireAI/status/2026748839303246238)
- [ActionEngine: offline GUI exploration → O(1) LLM-call execution programs](https://x.com/dair_ai/status/2026678090815123594)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen 3.5 craters on hard coding tasks — tested all Qwen3.5 models (And Codex 5.3) on 70 real repos so you don’t have to.](https://www.reddit.com/r/LocalLLaMA/comments/1reds0p/qwen_35_craters_on_hard_coding_tasks_tested_all/)** (Activity: 685): **APEX Testing**이라는 종합 벤치마크가 실제 GitHub 저장소의 70개 태스크(버그 수정, 리팩터링, 도구 구축)를 통해 다양한 코딩 모델을 평가한다는 내용이다. **Codex 5.3**는 난이도 전반에서 꾸준히 잘 나오지만, **Qwen 3.5 397B**는 여러 파일 간 조율이 필요한 복잡한 과제에서 고전했다고 한다. 로컬 모델 중에서는 **GLM-4.7 quantized**가 최상위로 언급되며 Qwen 3.5 전 모델을 앞섰다고 요약한다. 방법론은 공정 비교를 위해 에이전틱(tool-use) 시스템을 사용하고, 점수는 정확성·완결성·품질·효율로 매긴다. 전체 리더보드와 자세한 결과는 [APEX Testing](https://www.apex-testing.org)에 있다. 댓글에서는 프레임워크에 따라 성능이 크게 달라질 수 있으니 다양한 에이전틱 프레임워크로 테스트해보자는 제안과, 테스트된 GLM-4.7이 Flash(소형)인지 대형인지에 대한 질문이 있었다.
- UmpireBorn3719는 `gpt-oss-20b`와 `qwen3 coder next`를 비교하며 `gpt-oss-20b`가 `1405`, `qwen3 coder next`가 `1328`을 기록했다고 언급했다.
- metigue는 오픈소스 모델은 프레임워크에 따라 `50%`가 넘는 성능 변동이 날 수 있다며, 어떤 프레임워크를 쓰느냐에 따라 최강 모델이 달라질 수 있다고 말했다(예: `Droid`에서 `GLM-5`가 `opus 4.6`, `codex 5.3`를 앞섰다는 주장).
- FullstackSensei는 오픈 라우터(open routers)로 서빙되는 오픈 웨이트 모델 벤치마크는 어떤 양자화/비용 절감이 적용됐는지 모르면 결과가 왜곡될 수 있다고 우려했다. 특히 `Q8` 미만의 낮은 양자화로 작은 모델을 돌리면 복잡 과제에서 크게 불리해질 수 있다고 강조했다.
- **[Qwen3.5 27B better than 35B-A3B?](https://www.reddit.com/r/LocalLLaMA/comments/1re72h4/qwen35_27b_better_than_35ba3b/)** (Activity: 637): 이미지가 Qwen3.5 시리즈(특히 27B vs 35B-A3B)를 instruction following, 대학원 수준 추론, 다국어 지식 등의 벤치로 비교하며, 16GB VRAM + 32GB RAM 제약에서 어떤 모델이 효율적인지 논의한다. 3090 환경에서 27B가 `100 t/s`, 35B-A3B가 `20 t/s` 정도로 속도 차이가 난다는 체감 테스트가 공유되며, 제한된 하드웨어에선 27B가 더 적합할 수 있다는 쪽으로 기울었다.
- FusionCow는 3090에서 27B가 `100 tokens/second`, 35B-A3B가 `20 tokens/second`라고 언급하며 속도 측면에서 27B가 유리하다고 했다.
- boinkmaster360는 Qwen3.5 27B가 dense 모델이라 느릴 수 있지만 더 똑똑할 수도 있다는 트레이드오프를 언급했다.
- Alternative_You3585는 27B가 ‘지능’ 측면에서 우위일 수 있지만, 35B-A3B가 실세계 지식과 속도에서 이점이 있을 수 있다고 말했다.
- **[Qwen3.5-35B-A3B is a gamechanger for agentic coding.](https://www.reddit.com/r/LocalLLaMA/comments/1rdxfdu/qwen3535ba3b_is_a_gamechanger_for_agentic_coding/)** (Activity: 1588): 단일 RTX 3090에서 `llama.cpp`로 **Opencode**를 사용해 **Qwen3.5-35B-A3B**를 테스트한 후기다. `130k context window`로 `100 tokens per second` 이상, `22 GB` VRAM 사용을 보고했고, AI 이전에 5시간 걸리던 코딩 테스트를 10분에 끝냈다는 주장과 5분 만에 대시보드 데모를 재현했다는 사례를 제시한다. 한 댓글은 5090에서 `180 tokens per second`를 달성했다고 했고, 다른 댓글은 Spark에서 8-bit 양자화 버전이 기본 파일 텍스트 편집에 문제를 보였다고 해 설정/환경에 따른 변동성이 언급됐다.
- Additional-Action566의 언급으로, `5090`에서 `180 tokens/second` 속도가 보고됐다.
- Comrade-Porcupine은 Spark에서 8-bit 양자화일 때 코드 읽기는 잘하지만 기본 파일 텍스트 편집은 고전했다고 공유했다.
- jslominski는 **Unsloth의 MXFP4 양자화** 설정을 공유했으며, `context size 131072`, `temperature 0.6`, `top-p 0.95` 등을 코딩에 맞춰 튜닝했다고 했다.
- **[Qwen3.5 27B is Match Made in Heaven for Size and Performance](https://www.reddit.com/r/LocalLLaMA/comments/1rdvq3s/qwen35_27b_is_match_made_in_heaven_for_size_and/)** (Activity: 391): **RTX A6000 48GB**에서 `llama.cpp`+CUDA로 **Qwen3.5-27B-Q8_0**를 구동한 설정/성능 공유다. `32K` 컨텍스트에서 약 `19.7 tokens/sec` 속도를 보고했고, Q8이 `28.6GB` VRAM을 사용해 KV cache 여유를 확보하면서도 BF16과 비슷한 품질을 유지한다고 설명한다. 아키텍처는 Gated Delta Networks와 표준 어텐션 레이어를 혼합해 롱 컨텍스트 처리 속도를 올렸다고 하며, `262K` 네이티브 컨텍스트, `201` 언어, 비전 지원 등을 언급한다. GPQA Diamond, SWE-bench, Harvard-MIT 수학 토너먼트에서 주요 폐쇄형 모델과 경쟁한다는 벤치도 포함되며, llama-server OpenAI 호환 엔드포인트로 스트리밍을 지원한다. [Model Card](https://huggingface.co/Qwen/Qwen3.5-27B) 링크가 포함됐다. 댓글에서는 양자화 레벨과 하드웨어에 따른 효율 논쟁이 이어졌고, 3090에서 Q5로 `25 tokens/sec`를 봤다는 주장과, dense 모델인 Qwen3.5-27B의 높은 VRAM 비용 대비 낮은 생성 속도에 대한 회의가 나왔다.
- Conscious_Cut_6144는 3090 단일 GPU에서 Q4-XL 양자화로 프리필 800 tok/s, 15k 컨텍스트에서 생성 31 tok/s, 110k 컨텍스트 완전 오프로딩 성능을 공유했다.
- Southern-Chain-6485는 3090에서 Q5는 25 tok/s, Q8은 5 tok/s로 떨어진다는 비교를 언급하며 트레이드오프를 지적했다.
- LinkSea8324는 MoE가 효율적일 수 있으나, 여러 전문성을 동시에 요구하는 실제 과제에서는 dense 모델이 더 나을 수 있다는 관점을 제시했다.
- **[Liquid AI releases LFM2-24B-A2B](https://www.reddit.com/r/LocalLLaMA/comments/1rdi26s/liquid_ai_releases_lfm224ba2b/)** (Activity: 448): Liquid AI가 240억 파라미터 중 토큰당 20억만 활성화되는 sparse MoE 모델 **LFM2-24B-A2B**를 공개했다. LFM2 패밀리가 350M에서 24B까지 확장되며 토큰당 컴퓨트는 늘리지 않고 스케일링했다는 메시지다. 40 레이어, MoE 블록당 64 전문가, top-4 라우팅, 32GB RAM에서 실행 가능 등을 강조하며, llama.cpp/vLLM/SGLang 추론 지원과 여러 GGUF 양자화를 제공한다고 한다. 품질이 로그-선형으로 개선된다는 벤치 및 Hugging Face 오픈 웨이트 배포가 언급된다. 댓글에서는 서브-2B active 모델 대비 성능 기대와 더 자세한 벤치 요구, 그리고 프리트레이닝 완료 후 LFM2.5-24B-A2B로 발전할 것이라는 기대가 나왔다.
- LFM2-24B-A2B는 현재까지 `17 trillion tokens`를 학습했으며 프리트레이닝이 아직 진행 중이라고 한다.
- 엣지 디바이스에서 AMD CPU `112 tokens per second`, H100 `293 tokens per second` 디코드 속도, `32 GB RAM` 요구, llama.cpp/vLLM/SGLang day-1 지원이 언급됐다.
- 상세 벤치가 부족하다는 지적과, 공식 웹사이트 벤치에 대한 회의도 있었다.
- **[Qwen releases new Qwen3.5 Medium models!](https://www.reddit.com/r/LocalLLM/comments/1rdnlvl/qwen_releases_new_qwen35_medium_models/)** (Activity: 141): **Qwen3.5 Medium**(`35B-A3B`, `27B`, `122B-A10B`) 출시를 알리는 이미지 요약이다. `256K` 컨텍스트 처리, agentic coding/비전/챗 강점 등을 강조하고, instruction following/시각 추론/문서 인식 등 벤치 비교 바 차트를 포함한다. 댓글에서는 `35B`를 `4bit`, `27B`를 `6bit`로 비교 테스트해보고 싶다는 의견과, `gguf`가 늘어 `vllm`의 ‘진짜’ 지원이 필요하다는 요구가 나왔다.
- Qwen3.5 Medium은 2-bit~16-bit까지 다양한 GGUF 포맷이 Hugging Face에 제공된다고 언급됐다.
- 35B 4-bit vs 27B 6-bit 비교 관심이 제기됐다.
- GGUF 증가로 vllm 지원 필요성이 강조됐다.
- **[What’s everyone actually running locally right now?](https://www.reddit.com/r/LocalLLM/comments/1rdf2sj/whats_everyone_actually_running_locally_right_now/)** (Activity: 252): 로컬에서 LLM을 돌리는 실제 셋업(모델, 실용성, 하드웨어)을 묻는 글이다. **Qwen 3 coder next 80B**가 작은 양자화에서 성능이 좋다고 언급되고, MacBook Pro M4 Max에서 **Mistral Small 3.2 24b**와 **Magistral Small 24b**를 행정 업무에 쓰며 Xcode로 커스텀 프런트엔드(시맨틱 메모리/문서 업로드)를 만든 사례가 공유된다. iPhone에서 빠른 로컬 모델로 **Qwen3 4B**를 쓰며 프라이버시를 강조하는 언급도 있다. 댓글에서는 성능과 프라이버시 균형을 위해 로컬을 택하는 경향과, 모바일에서의 소형 모델 활용이 ‘일상적’ 사용 트렌드로 제시됐다.
- Greenonetrailmix는 Qwen 3 Coder Next 80B가 작은 양자화에서 다른 모델보다 성능이 낫다고 언급했다.
- Nefhis는 M4 Max에서 Mistral/Magistral Small을 커스텀 프런트엔드로 운영하며 프라이버시를 강조했다.
- mister2d는 구형 하드웨어(Dual Xeon Ivy Bridge, 256GB DDR3, 2x RTX 3060 12GB)에서 Nemotron 3 Nano를 128k 컨텍스트로 30-40 tok/s로 돌린다고 보고했다.

### Less Technical Subreddits

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Bullshit Benchmark - A benchmark for testing whether models identify and push back on nonsensical prompts instead of confidently answering them](https://www.reddit.com/r/singularity/comments/1rdsf3r/bullshit_benchmark_a_benchmark_for_testing/)** (Activity: 1060): ‘Bullshit Benchmark’ 바 차트 이미지가 각 AI 모델이 말이 안 되는 프롬프트를 감지하고 적절히 대응하는 능력을 평가한다는 내용이다. 성능을 green(높은 감지 정확도), amber(중간), red(낮음)로 나누며, Claude Opus 4.6 같은 모델은 green 비중이 크고 다른 모델은 red 비중이 커 성능이 낮다고 묘사한다. 데이터 암기뿐 아니라 컨텍스트 이해를 통해, 말이 안 되는 질문에 자신만만하게 답하지 않는 것이 중요하다는 포인트가 강조된다. 댓글에서는 비상식 프롬프트 감지 벤치의 필요성을 강조했고, Gemini가 ‘car wash test’처럼 비상식 질문에 빈정거림(sarcasm)으로 대응하는 경향이 낮은 평가에 영향을 줄 수 있다는 언급이 있었다.
- MangusCarlsen는 ‘Gemini’가 비상식 프롬프트에 빈정거림으로 답하는 경향을 ‘car wash test’ 사례로 들었다.
- AppropriateDrama8008는 훈련 데이터 암기 평가 대신 비상식 프롬프트 감지/대응 벤치가 실사용에 더 유익하다고 주장했다.
- Orangeshoeman은 Dario Amodei와 Demis Hassabis의 대화를 언급하며, Dario가 객관적 데이터 숙달에 집중한다는 전략이 Claude의 벤치 성능과 연관될 수 있다고 추정했다.
- **[Nano Banana 2 is real! Gemini 3.1 Flash Image just appeared in Vertex AI Catalog](https://www.reddit.com/r/Bard/comments/1rea45x/nano_banana_2_is_real_gemini_31_flash_image_just/)** (Activity: 184): 새로 등장한 **Nano Banana 2**(= Gemini 3.1 Flash Image)와 Nano Banana Pro의 AI 생성 인물 사진을 나란히 비교한 이미지다. Flash 티어임에도 Pro에 가까운 품질을 내며, 특히 밀도 높은 구도에서 공간 논리(spatial logic)가 좋다고 강조한다. 대량 UGC 광고 제작이나 비디오 모델용 일관 프레임 생성 같은 고빈도 파이프라인에 적합한 고속·저비용 모델로 포지셔닝한다. 댓글에서는 제시된 예시에서 Pro가 여전히 우위라는 의견도 있었다.
- 기존 Flash Image는 이미지 품질은 괜찮았지만 복잡한 지시에서 프롬프트 준수 문제가 있었고(일부 무시 또는 같은 출력 반복), 텍스트/인포그래픽 렌더링과 멀티 이미지 합성에도 약점이 있었다. 새 Gemini 3.1 버전이 이런 문제를 해결했는지가 관건으로 제시됐다.
- **[xAI and Pentagon reach deal to use Grok in classified systems, Anthropic Given Ultimatum](https://www.reddit.com/r/singularity/comments/1rd9mss/xai_and_pentagon_reach_deal_to_use_grok_in/)** (Activity: 580): Elon Musk가 설립한 **xAI**가 **Pentagon**과 합의해 **Grok**를 기밀 군사 시스템에 통합한다는 내용이다. Anthropic의 **Claude**가 민감한 군사 운영에서 유일한 AI로 쓰였다는 분쟁 이후 전개로 소개되며, Pentagon은 Claude가 ‘모든 합법적 목적(all lawful purposes)’에 사용 가능해야 한다고 요구하나 Anthropic은 특히 대규모 감시와 자율 무기 사용에 반대한다는 서술이 있다. **xAI**가 이 조건에 동의해 Anthropic이 응하지 않으면 Claude를 대체할 수 있다는 가능성과, **Google Gemini**, **OpenAI ChatGPT**도 기밀 사용 후보로 고려되며 Google이 합의에 근접했다는 주장도 포함된다. 댓글에서는 Pentagon의 Anthropic 선호가 성능 우위 또는 락인(lock-in) 전략 신호일 수 있다는 추측과, 정부가 왜 더 진보한 비공개 기술을 활용하지 않는지에 대한 회의가 나왔다.
- EmbarrassedRing7806는 Pentagon의 Anthropic 선호가 Claude 우위 믿음 또는 압박/락인 전략일 수 있다고 언급했다.
- nic_haflinger는 xAI에 FedRAMP 준수 클라우드가 없어, 연방 사용을 위해서는 규정 준수 플랫폼 호스팅이 필요하다는 장애물을 지적했다.
- **[Exclusive: Hegseth gives Anthropic until Friday to back down on AI safeguards](https://www.reddit.com/r/OpenAI/comments/1re686c/exclusive_hegseth_gives_anthropic_until_friday_to/)** (Activity: 1146): [Axios](https://www.axios.com) 보도에 따르면 **국방장관 Pete Hegseth**가 **Anthropic**에 금요일까지 `Claude AI` 모델의 안전 가드레일을 제거하라고 최후통첩을 했다고 한다. Pentagon은 국내 감시와 자율 무기 개발을 포함해 Claude에 대한 무제한 접근을 요구하며, 이는 Anthropic의 이용약관에 반한다고 서술된다. 불응 시 국방물자생산법(DPA) 발동 또는 공급망 리스크 지정으로 정부 계약에서 배제될 수 있다는 가능성도 언급된다. 댓글에서는 AI 기업이 정부 사용에 안전장치를 강제하는 ‘역전’ 상황의 아이러니를 지적했다.
- **[Pentagon, Claude and the military use](https://www.reddit.com/r/ClaudeAI/comments/1recva7/pentagon_claude_and_the_military_use/)** (Activity: 1258): 1950년 법을 언급하며, Pentagon이 72시간 내 Anthropic이 Claude의 군사용 사용을 허용하라고 요구했다는 BFM Tech 기사 스크린샷을 소개한다. AI 기술과 군사 활용의 교차점, 국가안보 및 윤리적 고려를 부각하며, 상업적 AI 개발과 정부 통제 간의 긴장을 시사한다. 댓글은 Pentagon 예산 효율성에 대한 회의와, 권위주의 체제에서의 AI 역할 우려 등을 담았다.
- Informal-Fig-7116의 댓글은 Claude 사용 조건(대규모 감시 금지, 자율 무기 금지)을 강조하며, 합법성 판단 없이 명령을 수행하는 AI의 위험을 지적했다.
- PetyrLightbringer는 Pentagon의 AI 투자액(예: $200M)이 Opus 같은 모델을 쓰기엔 충분치 않을 수 있다는 비용 회의를 언급했다.
- DPA가 과거 COVID-19 등 비군사 목적으로도 쓰였다는 점을 들어, AI 분야에서의 정부 개입이 선례가 될 수 있다는 논의가 있었다.
- **[TIME: Anthropic Drops Flagship Safety Pledge](https://www.reddit.com/r/ClaudeAI/comments/1rdwdld/time_anthropic_drops_flagship_safety_pledge/)** (Activity: 1357): [TIME](https://time.com/collections/time100-companies-2024/6980000/anthropic-2/) 보도에 따르면 **Anthropic**이 Responsible Scaling Policy(RSP)의 핵심 요소(충분한 안전조치를 보장할 수 없으면 학습하지 않겠다는 약속)를 포기하기로 했다는 내용이다. Anthropic 최고과학책임자 **Jared Kaplan**은 AI 발전 속도와 경쟁사 움직임을 고려하면 일방적 약속이 비현실적이었다고 설명한 것으로 소개된다. 댓글에서는 OpenAI 대비 Anthropic의 위치에 대한 회의, Hegseth 같은 외부 압력이 영향을 줬을 수 있다는 추측, 그리고 AI 개발의 글로벌 규제 필요성 등이 언급됐다.
- DarkSkyKnight는 생물무기/핵 같은 tail risk에 집중하면서, 일자리 시장에서 주니어 포지션이 사라지는 즉각적 경제 영향에 대한 대응이 부족하다고 지적했다.
- TheRealShubshub는 GPT-5를 둘러싼 비판 속에서 Anthropic이 OpenAI보다 뒤처졌다는 인식 자체가 단순하지 않다고 언급했다.
- CurveSudden1104는 Grok/OpenAI 같은 기업이 외부 압력 없이는 안전을 우선하지 않을 수 있다며 글로벌 규제를 주장했다.
- **[IBM is the latest company victim of Anthropic, plunging 10% following the launch of a Claude Code tool designed to modernize COBOL legacy code. COBOL, a 66-year-old programming language, is still widely used today; approximately 95% of ATM transactions in United States are processed using COBOL code](https://www.reddit.com/r/singularity/comments/1rcz68x/ibm_is_the_latest_company_victim_of_anthropic/)** (Activity: 483): Anthropic이 레거시 **COBOL** 코드를 현대화하기 위한 도구 *Claude Code*를 발표했고(미국 ATM 거래의 `95%`가 COBOL로 처리된다는 맥락 포함), 이 소식이 **IBM** 주가 `10%` 하락으로 이어졌다는 내용이다. 다만 완제품 출시가 아니라 블로그 포스트 형태 소개였고, 효과는 아직 입증되지 않았다는 점이 강조된다. 댓글에서는 시장 반응이 과도할 수 있다는 지적과, COBOL 같은 핵심 시스템 현대화에서 Anthropic 도구의 실제 영향은 불확실하다는 회의가 있었다.
- Onipsis는 기술적 돌파라기보다 ‘활용 가능성’ 제안에 가까운데도 주가가 10%나 빠진 것은 과하다고 봤다.
- Milo-75는 은행 등 핵심 분야 현대화는 리스크가 매우 커 IBM 역할을 당장 대체하기 어렵고, AI는 시간을 줄여 효율을 높이는 방향일 수 있다고 주장했다.
- Stabile_Feldmaus는 이런 특화 도구가 나올 때마다 주가 반응은 크지만, 산업에 미치는 실제 영향은 불명확하다고 지적했다.
- **[Anthropic just dropped an AI tool for COBOL and IBM stock fell 13%](https://www.reddit.com/r/ClaudeAI/comments/1rddo3m/anthropic_just_dropped_an_ai_tool_for_cobol_and/)** (Activity: 1007): Anthropic이 COBOL 코드베이스를 분석·현대화하는 AI 도구를 공개했고, 이는 레거시 시스템을 관리하는 IBM의 주요 수익에 위협이 될 수 있다는 서술이다. 발표 후 IBM 주가가 `13%` 하락하며 25년 만의 최악의 날이었다는 주장도 포함된다. 다만 기업들이 IBM에서 벗어나 이주하는 속도는 역사적으로 느렸다는 점에서 장기 영향은 과장일 수 있다는 의견도 소개된다. 댓글은 핵심 인프라에서의 AI 신뢰성(환각 가능성) 문제와 ‘vibe coding’ 리스크, 그리고 단기 주가 반응이 ‘knee jerk’일 수 있다는 의견을 담았다.
- 은행들이 COBOL 현대화를 미룬 이유는 시간/돈이 아니라 ‘리스크’이며, AI가 빨라져도 결국 라인 단위 인간 검토 병목은 남는다는 요지가 제기됐다.
- COBOL AI 도구는 SI/구축 업체에 위협이 될 수 있으며, 덜 중요한 애플리케이션에서는 외주 계약 수요를 줄일 수 있다는 논의가 있었다.

---

## AI Discord Recap

Gemini 3.1 Pro Preview Nov-18 기준 ‘요약의 요약’

### 모델 벤치마크, 특이점, 가격 업데이트

- **Qwen 3.5, 코드 아레나를 휩쓸지만 페널티 없으면 장황해짐**: 사용자들은 [Alibaba’s coding plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan)을 비용/가성비 면에서 **Kimi**와 **GLM**을 압도하는 강력한 코딩 모델로 크게 칭찬했고, 한 멤버는 Hugging Face에 [Qwen3.5 122B NVFP4 quant](https://huggingface.co/Sehyo/Qwen3.5-122B-A10B-NVFP4/tree/main)을 올렸다. 다만 Unsloth 엔지니어들은 거대한 **122B A10B** 변형이 presence penalty를 올리고 thinking mode를 끄지 않으면 지나치게 장황해진다고 경고했다.
- **Grok 4.20 Beta 1, 검색 1위를 가져감**: xAI의 **Grok-4.20-Beta1**가 [Search Arena leaderboard](https://arena.ai/leaderboard/search)에서 **1226** 점수로 #1에 올랐고 **GPT-5.2**와 **Gemini-3**를 앞섰다고 한다. 또한 [Text Arena leaderboard](https://arena.ai/leaderboard/text)에서 **1492** 점수로 #4를 기록해 Google **Gemini 3.1 Pro**와 동급(tie)으로 언급됐다.
- **Codex 5.3 가격 책정, Kimi는 수학 벤치를 장악**: OpenAI가 API에 **Codex 5.3**를 입력 **$1.75**, 출력 **$14**로 출시해 비용 대비 성능 논쟁이 즉각 일어났다는 요약이다. 한편 **Kimi 2.5**는 OS Frontier Math Level 4에서 **4.2%**로, **GLM 5**와 **Deepseek V3.2**의 **2.1%**를 두 배로 앞섰다고 언급됐다.

### 인프라 혁신과 대기업 하드웨어 딜

- **Meta와 OpenAI, 수십억 달러 규모의 비밀 AMD 워런트 보유**: 한 ‘금융 슬루스(sleuth)’가 **OpenAI**와 **Meta**에 미래 GPU 대규모 지출과 연동된 equity rebate로 **1억6천만 AMD 주** 워런트를 부여하는 딜이 있었다고 주장했다. [AMD $600 share price targets](https://xcancel.com/ai/status/2026396297540858360?s=12)이 현실화되면 이 딜이 **$1920억** 가치가 될 수 있다는 추정이 붙었다.
- **Packet.ai, Blackwell GPU 가격을 파격 인하**: [Packet.ai’s Blackwell GPU pricing](https://packet.ai/blackwell)이 **$0.66/hr** 또는 학습용 **$199/month**로 공개되자 개발자들이 환호했다. 비싼 **B200** 구매 가격에 직면한 하드웨어 구매자들이 GPUs를 사는 대신 [Lightning AI Clusters](https://lightning.ai/clusters) 같은 Neocloud 인스턴스를 임대하려 한다는 언급도 나왔다.
- **Zagora, 흩어진 GPU를 하나로 엮어 분산 파인튜닝**: **Zagora**는 표준 인터넷 연결만으로 **Qwen 2.5**, **Mistral** 같은 **70B+** 모델을 분산 미세조정(fine-tuning)하는 시스템을 만들고 있다고 밝혔다. SWARM 영감의 파이프라인으로 소비자 GPU 클러스터를 ‘거대 슈퍼컴퓨터’처럼 쓰는 콘셉트지만, 현재는 표준 Transformer 아키텍처만 지원한다고 한다.

### 자율 에이전트가 난무

- **Nous Research, 파일시스템을 돌아다니는 Hermes Agent 공개**: Nous Research가 오픈소스 [Hermes Agent repo](https://github.com/nousresearch/hermes-agent)를 공개했다. 다단계 메모리와 지속적 전용 머신 접근을 갖춘 도구로 CLI에서 바로 실행된다고 한다. 초기 사용자는 [Nous Portal](https://portal.nousresearch.com)에서 **HERMESAGENT** 쿠폰 코드를 입력하면 한 달 무료로, AI가 브라우저를 제어하고 서브에이전트를 자율적으로 관리하게 할 수 있다고 소개됐다.
- **불량 OpenClaw 프록시, DeepSeek 탈옥(jailbreak)을 상시 자동화**: 한 사용자가 **DeepSeek-R1**을 **OpenClaw**로 돌리는 자가 호스팅 자율 프록시를 만들어 **Claude**, **Gemini**, **Grok** API 필터를 영구적이고 은밀하게 탈옥한다고 주장했다. 보안 비평가들은 법적 노출과 ToS 위반, 그리고 자율 에이전트가 실수로 공급망(supply-chain) 익스플로잇을 다운로드할 위험을 강하게 비판했다.
- **METR, ‘무(無)AI’ 대조군이 안 돌아간다고 지적**: 평가 그룹 **METR**은 개발자들이 “no-AI” 대조군에서 일하는 것을 점점 더 거부하며, 수동 코딩이 지나치게 비효율적이라고 느낀다고 밝혔다. [METR’s testing protocols update](https://x.com/METR_Evals/status/2026355544668385373?s=20)는 AI 도구 없이 **$50/hr**로 낮춘 보수를 제시해도 유능한 엔지니어 참가자를 모집하지 못해 필요해졌다고 한다.

### 밴, 레이트 리밋, 연쇄 API 장애

- **Google·Anthropic, ‘절약형 토큰 수집가’를 가차 없이 밴**: Google은 Gemini CLI로 단지 **10개 프롬프트**를 보냈는데도(그리고 Google AI Pro 구독료를 내고 있었는데도) 사용자의 [Google Gemini account](https://gemini.google.com/)를 영구 잠금했다는 사례가 언급됐다. 비슷하게 [Claude AI portal](https://claude.ai/)도 문서화되지 않은 OAuth 엔드포인트로 보조금 토큰을 빼가려는 **OpenClaw** 사용자를 공격적으로 밴하기 시작했다.
- **OpenRouter 연쇄 장애, Perplexity는 이미지 제한**: OpenRouter는 [OpenRouter postmortem report](https://openrouter.ai/announcements/openrouter-outages-on-february-17-and-19-2026)에서 2월 17일과 19일 업스트림 인프라 실패로 대규모 **401 인증 오류**가 발생했다고 확인했다. 한편 Perplexity에서는 유료 Pro 사용자가 공지 없는 일일 이미지 업로드 제한에 걸려 간단한 숙제도 마무리하지 못했다며 불만이 나왔다.
- **시스템 레벨 에이전트가 휴지통 폴더를 삭제**: **OpenClaw** 에이전트에 시스템 권한을 준 사용자가 요청에 따라 AI가 휴지통 디렉터리를 영구 삭제해 당황했다는 사례가 공유됐고, 자율 LLM 에이전트에 루트 권한을 주는 것이 자발적으로 설치한 멀웨어에 가깝냐는 논쟁으로 이어졌다.

### 개발 워크플로와 깊은 프레임워크 튜닝

- **Aider, 원키 승인 추가 + Kimi-Mimo 조합 최적화**: 코딩 어시스턴트 **Aider**가 메인 브랜치에 `/ok` 별칭을 머지해, AI가 만든 코드 편집을 즉시 승인·실행할 수 있게 했다. 또한 무거운 **moonshotai/kimi-k2.5**로 상위 수준 설계를 하고, 실제 파일 편집은 빠르고 저렴한 **Xiaomi/mimo-v2-flash**로 넘기는 라우팅 스택이 효율적이라는 발견이 공유됐다.
- **LM Link, Tailscale로 로컬 모델을 인터넷 너머로**: LM Studio 팀이 [LM Link documentation](https://link.lmstudio.ai)를 공개하며, **Tailscale**을 감싸 엔드투엔드 암호화로 로컬 LLM 서버에 원격 접속하는 기능을 설명했다. 사용자들은 클라우드를 우회해 휴대폰에서 집 GPU를 질의할 수 있는 전용 모바일 앱을 원한다는 반응을 보였다.
- **PyTorch, 디스패처에 FA3 커널을 슬쩍 + Serenade는 전부 트랜스파일**: PyTorch에서 `activate_flash_attention_impl(“FA3”)`를 호출하면, 단순한 [register_fn dictionary swap](https://github.com/pytorch/pytorch/blob/580a6e2c814db93aa8df0a80e3e85c330621b9cb/torch/nn/attention/_fa3.py#L54)으로 기본 Flash Attention 2 커널을 FA3로 안전하게 덮어쓸 수 있다는 설명이 있었다. 또 다른 언어 뉴스로는, 한 솔로 개발자가 **Serenade**라는 새 문법을 공개했는데, **Python**처럼 쓰면서 **C++**, **CUDA**, **x86-64 ASM**으로 트랜스파일하고 네이티브 Dear ImGui GUI를 지원하는 것을 목표로 한다고 소개됐다.
