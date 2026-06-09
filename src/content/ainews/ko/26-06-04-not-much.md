---
title: "NVIDIA, Nemotron 3 Ultra 출시"
summary:
  - "NVIDIA, Nemotron 3 Ultra 출시"
  - "Anthropic, RSI 초기 신호 주장"
  - "Cloudflare, VoidZero 팀 영입"
  - "OpenAI, ChatGPT 메모리 강화"
  - "Gemma 4 12B 벤치마크 논쟁 확산"
date: 2026-06-04
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-04-not-much.md"
hasHeadline: false
headline: "NVIDIA, Nemotron 3 Ultra 출시"
tags:
  - NVIDIA
  - Nemotron
  - Anthropic
  - Cloudflare
  - OpenAI
isFeatured: false
---

## 헤드라인: NVIDIA, Nemotron 3 Ultra 출시

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

NVIDIA의 Nemotron 3 Ultra는 이날 가장 뚜렷한 기술 출시였다. 550B MoE, 55B 활성 파라미터, 1M 컨텍스트, 장시간 실행되는 에이전트 워크로드에 초점을 맞춘 완전 공개 모델로, 속도와 비용 면에서 강한 주장을 내세웠다. 특히 NVFP4 기반 저정밀 사전학습을 20T 토큰 규모로 확장했다는 점이 기술적으로 눈에 띄었다.

---

## AI Twitter Recap

### NVIDIA의 Nemotron 3 Ultra 및 3.5 ASR 출시

- **Nemotron 3 Ultra**는 이날 가장 분명한 기술 출시였다. **55B 활성 파라미터**, **1M 컨텍스트**, 장시간 실행되는 에이전트 워크로드에 대한 명시적 초점을 가진 완전 공개 **550B MoE** 모델이다. NVIDIA는 에이전트형 작업에서 **최대 5배 빠르고**, **비용은 30% 낮다**고 설명했으며, 가중치, 합성 데이터, 보상 체크포인트, 양자화(quantization) 변형, 학습 레시피를 **OpenMDW 1.1**로 공개했다 ([NVIDIA launch](https://x.com/nvidia/status/2062522316672667770), [NVIDIAAI open artifacts](https://x.com/NVIDIAAI/status/2062521383582646537), [Pavlo Molchanov thread](https://x.com/PavloMolchanov/status/2062538679470657727)). 아키텍처는 **hybrid Mamba/attention**, **LatentMoE**, **native MTP**를 결합하며, **20T 토큰**에 대해 **NVFP4**로 사전학습됐다. 이는 저정밀 사전학습을 새로운 규모로 밀어 올렸다는 점에서 주목할 만하다 ([tech notes](https://x.com/ctnzr/status/2062515418884149451), [scaling discussion](https://x.com/scaling01/status/2062540298933219832)).

- **벤치마크와 서빙 스토리**도 오픈 릴리스치고는 이례적으로 강했다. [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2062527871529439438)는 NVIDIA가 권장한 NVFP4 추론(inference) 가중치 기준 Intelligence Index **47.7**을 측정했으며, BF16에서는 **48.2**였다. 이들은 이 모델을 자신들이 테스트한 가장 강한 **미국 오픈 가중치** 모델로 평가했지만, 여전히 **Kimi K2.6**보다는 뒤처졌다. 더 흥미롭게는 BlackBox를 통해 **400+ output tok/s**를 보고했고, 별도로 턴 제한이 있는 Terminal-Bench 스타일 평가에서 Nemotron 3 Ultra가 **작업 지연시간 대 성능의 Pareto frontier**에 있다고 보였다 ([latency analysis](https://x.com/ArtificialAnlys/status/2062598349757567359), [BlackBox throughput](https://x.com/blackboxai/status/2062546216949588001)). 모델은 스택 전반에 **day 0**로 배포됐다: [vLLM](https://x.com/vllm_project/status/2062574262163280172), [Modal](https://x.com/modal/status/2062528720104227149), [Together](https://x.com/togethercompute/status/2062520009893576974), [Fireworks](https://x.com/FireworksAI_HQ/status/2062568688201646321), [Ollama cloud](https://x.com/ollama/status/2062591290743853291), [Baseten](https://x.com/baseten/status/2062609272815685759), [CoreWeave/W&B](https://x.com/wandb/status/2062577626242580896), [Cline](https://x.com/cline/status/2062620668085297214), [Prime Intellect](https://x.com/PrimeIntellect/status/2062622550300275088), [Nous Portal](https://x.com/NousResearch/status/2062554136625766409).

- **Nemotron 3.5 ASR**은 더 조용했지만 실용적인 동반 출시였다. 단일 **0.6B 체크포인트**, **40개 언어-로캘 조합**, **100ms 미만 지연시간**을 가진 공개 스트리밍 ASR 모델이며, 음성 에이전트와 스트리밍 음성 워크로드에 최적화된 **cache-aware FastConformer / RNN-T** 스타일 설계에 기반한다 ([Piotr Zelasko](https://x.com/PiotrZelasko/status/2062538923776290909), [Together](https://x.com/togethercompute/status/2062520605102993436), [fal availability](https://x.com/fal/status/2062521027020611933)).

### Anthropic의 재귀적 자기개선 프레이밍과 내부 AI 코딩 지표

- Anthropic은 이날 가장 많이 논의된 정책/연구 노트를 발표하며, 현재 시스템이 **재귀적 자기개선(RSI)의 초기 신호**를 보인다고 주장했다. 아직 연구 방향을 완전히 자율적으로 정하는 단계는 아니지만, AI가 AI 개발을 가속하고 있다는 명확한 증거가 있다는 주장이다 ([Anthropic post](https://x.com/AnthropicAI/status/2062568862479208923)). 핵심 운영 지표는 구체적이었다. Anthropic에서 병합된 코드의 **80%+**가 이제 Claude가 작성하며, 일반적인 엔지니어는 이전 해보다 분기당 **8배 더 많은 코드**를 배포하고, 내부의 개방형 엔지니어링 작업에서 Claude의 성공률은 6개월 사이 대략 **26%에서 76%**로 상승했다 ([code metric](https://x.com/AnthropicAI/status/2062568864240836995), [Alex Albert summary](https://x.com/alexalbert__/status/2062580571214389510)).

- 가장 인상적인 실증 데이터는 Anthropic의 반복 테스트인 “작은 모델 학습 스크립트 속도 높이기”였다. **Claude Opus 4**는 평균 약 **3배** 속도 향상을 냈고, **Mythos Preview**는 **약 52배**를 달성했다고 한다 ([Anthropic benchmark claim](https://x.com/AnthropicAI/status/2062568869240476050), [correction on dates](https://x.com/AnthropicAI/status/2062634151556292775)). Anthropic은 또한 연구자가 잘못된 방향으로 갔던 세션에서 Mythos가 인간보다 더 나은 “다음에 무엇을 할지” 연구 제안을 낸 비율이 **64%**였다고 밝혔다 ([research-next-step result](https://x.com/AnthropicAI/status/2062568870872003021)). 더 넓은 논지는 *문제 선택* 자동화는 아직 풀리지 않았지만, 구현과 반복의 큰 부분을 자동화하는 일은 이미 벌어지고 있다는 것이다.

- 거버넌스 관점은 생산성 주장만큼 중요했다. Anthropic은 “세계가 **프런티어 AI 개발을 늦추거나 일시 중단할 선택지**를 갖는 것이 좋다”고 명시하며, RSI 유사 동학이 계속될 경우 검증과 조정 메커니즘이 점점 더 시급해진다고 프레이밍했다 ([Anthropic governance statement](https://x.com/AnthropicAI/status/2062568873321513443), [discussion](https://x.com/scaling01/status/2062572962117562507), [commentary](https://x.com/a_karvonen/status/2062572851916574730)). 이는 Anthropic이 최근 생물/화학 위험 관련 Responsible Scaling Policy 임계값 일부를 **약화했다**는 [@CRSegerie](https://x.com/CRSegerie/status/2062474945377218819)의 비판 속에서 나왔다. 별도로 **Altman, Amodei, Hassabis, Baker** 등을 포함한 연합은 AI가 생물학 지식 장벽을 낮추고 있다며 미국 내 **의무적 DNA 합성 검사와 기록 보관**을 지지했다 ([letter summary](https://x.com/kimmonismus/status/2062485389949145457)).

### Cloudflare, VoidZero 인수로 풀스택 에이전트 툴체인 강화

- 가장 큰 개발자 플랫폼 움직임은 **Cloudflare가 VoidZero를 영입**한 것이다. VoidZero는 **Vite, Vitest, Rolldown, Oxc, Vite+** 뒤에 있는 팀이다. Cloudflare와 VoidZero는 **Vite가 계속 오픈소스, MIT, 벤더 중립**으로 남는다고 강조했으며, Cloudflare는 독립적인 Vite 생태계 개발을 위한 펀드에 **100만 달러**를 투입하겠다고도 약속했다 ([Cloudflare](https://x.com/Cloudflare/status/2062521221132992533), [Vite statement](https://x.com/vite_js/status/2062525206158078047), [Evan You](https://x.com/evanyou/status/2062533668233756677)).

- 개발자들의 전략적 해석은 이것이 Cloudflare에 점점 더 에이전트 친화적으로 변하는 애플리케이션 스택을 더 촘촘히 통제할 수 있게 해준다는 것이었다. 프런트엔드/빌드 툴링, 런타임, 스토리지, 추론, 배포 프리미티브, 보안이 한곳에 모인다. [@wesbos](https://x.com/wesbos/status/2062520527151903090)는 이를 Cloudflare가 “LLM에 넘겨 사이트를 만들게 할 수 있는 깔끔한 패키지”를 조립하는 것으로 설명했으며, 이는 에이전트, MCP, 샌드박스, AI 검색, 결제, 관측성을 통합 플랫폼으로 밀고 있는 Cloudflare의 방향과도 대체로 일치한다 ([Cloudflare agents docs overview](https://x.com/thomasgauvin/status/2062512156076048447)).

### 에이전트, 하네스, 메모리, 평가 인프라

- 여러 트윗은 원시 모델 출시를 넘어 “에이전트 시스템” 계층이 성숙하고 있음을 가리켰다. 반복된 주제는 병목이 점점 프롬프트 자체가 아니라 **harness/orchestrator**라는 점이었다. 한 인기 클립은 Claude Code 워크플로를 “나는 이제 Claude에 프롬프트하지 않고, 루프를 쓴다”로 요약했고, [@omarsar0](https://x.com/omarsar0/status/2062553527730540611)는 분기형 연구, 검증, triage, 데이터 합성, 평가 생성에 쓰는 **동적 워크플로**를 자신의 orchestrator로 역설계하고 있다고 설명했다. 공통 아이디어는 고차 제어 루프가 원샷 프롬프트가 아니라 실제 작업 단위가 되어가고 있다는 것이다.

- 그런 루프를 둘러싼 툴링도 개선됐다. [LangSmith Sandboxes](https://x.com/LangChain/status/2062512156688466083)는 Dockerfile 스냅샷, 인터랙티브 콘솔, TCP 터널링, 표준 Linux 툴링과 함께 GA에 도달했다. Hugging Face는 두 가지 인접 아이디어를 밀었다. Hub에서 커스텀 커널을 배포하는 **Kernels** 경로 ([announcement](https://x.com/RisingSayak/status/2062471134260687264))와 **에이전트 traces**를 1급 아티팩트로 저장하는 더 강한 지원이며, 이는 [@ClementDelangue](https://x.com/ClementDelangue/status/2062542713463980303)도 반향했다. [@julien_c](https://x.com/julien_c/status/2062524414034423969)는 공개 모델이 코딩 에이전트를 플레이하고 로컬 모델이 사용자를 시뮬레이션하게 해 **2,000+ 합성 코딩 에이전트 세션 traces**를 생성한 미니멀 harness인 **SynthTraces**를 공개했다.

- 평가도 실제 에이전트 작업 쪽으로 이동했다. **Arena**는 웹 검색, 파일시스템, bash, 이미지 생성 같은 도구를 포함한 **수백만 개의 라이브 세션**에서 에이전트형 성능을 측정하는 **Agent Arena / Agent Mode**를 출시했다. 현재 순위는 **GPT-5.5**가 1위이고, 뒤이어 **Claude Opus 4.7**, **GLM-5.1**, **Gemini 3.1 Pro**, **Kimi-K2.6**가 따른다. 방법론은 **300K+ 작업**, **2M+ 도구 호출**, **40M 줄의 코드** 전반에서 작업 성공, 조종 가능성, 복구, 사용자 칭찬/불만, 도구 환각을 기반으로 한다 ([launch](https://x.com/arena/status/2062566749418233981), [methodology](https://x.com/arena/status/2062566769659912281)). 엔터프라이즈 쪽에서는 **Cognition**이 Devin용 **AI Productivity Guarantee**를 도입했다. 제품이 긍정적인 엔지니어링 가치를 만들지 못할 경우 최대 **1,000만 달러**의 사용량을 보장하며, **64+시간**에 이르는 작업을 포함한 **258개 엔터프라이즈 세션** 내부 측정 시스템이 뒷받침한다 ([guarantee](https://x.com/cognition/status/2062597242167628019), [technical writeup](https://x.com/cognition/status/2062597246001324518)).

### 메모리, 멀티모달리티, 모델/벤치마크 업데이트

- **OpenAI는 미국 Plus 및 Pro 사용자에게 더 강력한 ChatGPT 메모리 시스템**을 배포했다. 여기에는 **메모리 요약**, 더 많은 조종 컨트롤, **2배 더 많은 메모리**가 포함된다. 회사는 이를 저장된 메모리에서 “dreaming”을 거쳐 현재 시스템으로 이어지는 더 긴 연구 흐름으로 설명했다 ([OpenAI](https://x.com/OpenAI/status/2062567556524003631), [controls](https://x.com/OpenAI/status/2062567559673856346), [Christina Kim explanation](https://x.com/ChristinaHartW/status/2062585124450172956)). 관련 개발자 업데이트로는 **Responses 및 Completions API의 moderation scores** ([OpenAIDevs](https://x.com/OpenAIDevs/status/2062619558440267801))와, 브라우저에서 hot reload로 앱을 보고 테스트하는 새 **Codex iOS app plugin**의 널리 공유된 데모가 있었다 ([OpenAIDevs demo](https://x.com/OpenAIDevs/status/2062599291479478275)).

- 그 밖의 모델/데이터 릴리스도 주목할 만하다. **Gemma 4 12B**는 로컬 코딩 모델 대체재이자 고도로 압축된 형태로 계속 주목받았다. [Unsloth](https://x.com/UnslothAI/status/2062470072179044447)는 **4.66 GB** 크기의 **2-bit GGUF**를 공개했다. [@_philschmid](https://x.com/_philschmid/status/2062546814075609413)는 Gemma 4가 별도 인코더 없이 텍스트/이미지/오디오를 처리하는 방식을 설명한 아키텍처 해설을 강조했다. 멀티모달 연구에서는 [@skalskip92](https://x.com/skalskip92/status/2062549751246066144)가 **Molmo2**를 CVPR의 강력한 공개 VLM 후보로 언급했으며, 비디오 포인팅, 추적, 카운팅, 다중 이미지 추론을 지원한다고 했다. 문서 이해 분야에서는 LlamaIndex의 **ParseBench**가 테이블, 차트, 충실성, 포맷팅, 근거 설정 전반에 걸친 **2,000+ 인간 검증 페이지**와 **167K+ 테스트 규칙**을 갖춘 공개 벤치마크를 도입했다 ([benchmark announcement](https://x.com/llama_index/status/2062525204262236266)).

### Top Tweets (engagement 기준, 기술 관련성 필터링)

- **Anthropic의 RSI 및 내부 자동화**: Claude는 이제 Anthropic에서 병합된 코드의 **80%+**를 작성하고, 엔지니어들은 **8배** 더 많은 코드를 배포하며, 회사는 AI가 AI 개발을 가속하는 일이 점점 그럴듯해지고 있다고 말한다 ([Anthropic](https://x.com/AnthropicAI/status/2062568862479208923)).
- **OpenAI 메모리 업그레이드**: 미국 Plus/Pro 사용자를 위한 요약, 조종 컨트롤, **2배** 더 많은 메모리를 갖춘 더 강력한 ChatGPT 메모리 시스템 ([OpenAI](https://x.com/OpenAI/status/2062567556524003631)).
- **Cloudflare + VoidZero**: Cloudflare가 VoidZero 팀을 영입하면서 **Vite를 MIT 및 벤더 중립**으로 유지하고, 생태계를 위한 **100만 달러 OSS 펀드**도 조성한다 ([Cloudflare](https://x.com/Cloudflare/status/2062521221132992533), [Vite](https://x.com/vite_js/status/2062525206158078047)).
- **Nemotron 3 Ultra 출시**: 장시간 실행 에이전트를 위한 공개 **550B/55B-active** hybrid MoE로, 전체 레시피와 이례적으로 강한 속도 주장을 동반했다 ([NVIDIA](https://x.com/nvidia/status/2062522316672667770)).
- **Cursor canvases + context explorer**: 앱/리포트/내부 도구용 공유 가능한 캔버스와 에이전트 컨텍스트가 어디에 쓰이는지 보여주는 인터랙티브 분석 ([Cursor](https://x.com/cursor_ai/status/2062611883249783083)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

### Gemma 4 12B 출시 및 벤치마크

- **[google/gemma-4-12B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1tvtn6m/googlegemma412b_hugging_face/)** (Activity: 1610): **Google DeepMind가 **Gemma 4** 오픈 가중치 계열의 일부로 [`google/gemma-4-12B`](https://developers.googleblog.com/gemma-4-12b-the-developer-guide/)를 출시했다. 이 계열은 dense 및 MoE 아키텍처, instruction-tuned/pretrained 체크포인트, 멀티모달 입력, `140+`개 언어에 걸친 다국어 지원, 최대 `256K` 토큰 컨텍스트 창을 갖춘 `E2B`, `E4B`, `12B`, `26B A4B`, `31B` 변형을 포함한다. 게시물은 네이티브 `system` role 지원, 설정 가능한 reasoning/thinking 모드, function-calling/agentic 사용 사례, 코딩 개선, [`ggml-org`](https://huggingface.co/ggml-org/gemma-4-12b-it-GGUF) 및 [`unsloth`](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)의 GGUF 빌드를 통한 로컬 배포를 강조한다. 상위 댓글은 Maarten Grootendorst의 [visual guide](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-gemma-4-12b)를 링크하며, 특히 모델의 *“encoder-free architecture”*를 지적했다.** 댓글 작성자들은 주로 실증적 코딩 성능에 관심을 보였고, 한 사용자는 Gemma 4 12B가 코딩 작업에서 **Qwen 3.5 9B**를 이길 수 있는지 테스트하고 싶다고 명시했다. 댓글에는 구체적인 벤치마크 결과가 제공되지 않았다.
- Maarten Grootendorst의 연결된 기술 가이드는 Gemma 4 12B의 **encoder-free architecture**를 강조하며, 모델 내부 구조에 관심 있는 독자에게 주목할 설계 포인트로 제시한다: https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-gemma-4-12b.
- 여러 댓글은 **Gemma 4 12B**를 `E4B` 같은 더 작은 Gemma 변형과 `26B` 같은 더 큰 모델 사이의 실용적인 크기 구간으로 봤으며, 한 사용자는 코딩 작업에서 **Qwen 3.5 9B**를 능가할 수 있는지에 관심을 보였다.
- 한 기술적 질문은 모델의 apparent **오디오 기능**에 관한 것이었고, 멀티모달 지원이 견고하다면 Gemma 4 12B가 **speech/audio translation** 워크플로에 유용할 수 있다는 추측이 나왔다.

- **[New Google Gemma 4 12B Claims Near-26B Performance - We Tested Both!](https://www.reddit.com/r/LocalLLaMA/comments/1tw4tmf/new_google_gemma_4_12b_claims_near26b_performance/)** (Activity: 984): **로컬 단일 `RTX 4090` 비교는 **Google Gemma 4 26B-A4B**가 `15 GB` VRAM을 사용해 `6.9k` 토큰을 `138 tok/s`로 생성했고, 세 가지 HTML5 Canvas 물리 코드 작업에서 **Gemma 4 12B**보다 뛰어났다고 주장했다. Gemma 4 12B는 `9 GB` VRAM을 사용해 `8.9k` 토큰을 `80 tok/s`로 생성했다. 작업은 Galton board, two-block collision, chaotic triple pendulum이었다. 게시자는 MoE 스타일 `26B-A4B` 모델이 총 파라미터는 더 크지만 활성 파라미터가 약 `4B`뿐이라 약 `1.7×` 더 빠르다고 주장했으며, `12B`는 `16 GB` 노트북에 여전히 매력적이라고 했다. 이 테스트는 창업자의 로컬 AI 앱 [atomic.chat](https://atomic.chat/) 홍보에도 쓰였다.** 상위 댓글들은 명시된 승자에 이의를 제기하며, 영상상으로는 **Gemma 4 12B**가 장면 2와 3에서 더 좋아 보인다고 했고, 한 사용자는 라벨이 뒤바뀐 것 아니냐고 물었다. 또 다른 댓글은 **Qwen3.6 35B-A3B**와 비교 가능한 벤치마크를 요청했다.
- 여러 댓글은 테스트 라벨/결과에 의문을 제기하며, 비디오 비교에서 **Gemma 4 12B** 출력이 더 큰 모델보다 강해 보였다고 말했다. 특히 2번과 3번 영상에서 그랬고, 한 사용자는 첫 테스트의 유일한 눈에 띄는 결함이 *“the balls seemed to have too high of a starting velocity”*였다고 지적했다.
- **Gemma 4 12B**의 기술적 장점으로는 멀티모달 능력이 강조됐다. **오디오와 비디오**를 받아들이면서 **더 적은 VRAM**의 기기에서 맞아 들어가기 때문에, 로컬 또는 제약된 배포에서 near-26B 성능이 실용적으로 유용할 수 있다는 것이다.
- 댓글 작성자들은 **Qwen3.6 35B A3B** 같은 더 넓은 기준선을 요청했고, 평가가 작업 영역을 분리해야 한다고 주장했다. **Qwen**은 정량/코딩 벤치마크에서 앞설 것으로 예상되지만, **Gemma 4**는 창작 글쓰기와 번역 같은 정성적 언어 작업에서 더 경쟁력 있을 수 있다는 주장이다.

- **[gemma-4-12b-it vs Qwen3.5-9B on shared benchmarks: Qwen is overall winner beating gemma in 5/8 benchmarks despite a smaller footprint](https://www.reddit.com/r/LocalLLaMA/comments/1tw0lua/gemma412bit_vs_qwen359b_on_shared_benchmarks_qwen/)** (Activity: 520): **이미지는 공식 Hugging Face 모델 카드 점수에서 취합한 **Gemma 4 12B Unified**와 **Qwen3.5-9B**의 기술 벤치마크 표이며, **Qwen3.5-9B가 더 작은 파라미터 풋프린트와 더 가벼운 KV cache로 알려졌음에도 공유 벤치마크 `5/8`에서 승리**했다 ([image](https://i.redd.it/20s4116kg45h1.png)). Qwen은 **MMLU-Pro, GPQA Diamond, TAU2, MMMU-Pro, MedXpertQA-MM**에서 앞서고, Gemma는 **LiveCodeBench v6, MMMLU, MathVision/MATH-Vision**에서 근소하게 앞선다. 게시물은 Qwen이 “GB for GB” 더 강하다는 주장을 펼치되, 코딩에서는 Gemma 또는 **OmniCoder-9B** 같은 Qwen fine-tune이 경쟁할 수 있다고 프레이밍한다.** 댓글은 벤치마크만으로 결론내리는 데 반박했다. 한 사용자는 Qwen이 *“benchmaxxed”*일 수 있고, Gemma가 일반 assistant, 창작 글쓰기, roleplay에서 더 낫게 느껴지는 경우가 많으며, Qwen은 코딩에 강하다고 주장했다. 다른 이들은 Qwen-vs-Gemma 논쟁이 과장됐다고 봤다. 둘 다 스크립팅/코딩 작업에 실용적으로 충분하지만, Qwen의 reasoning mode는 낮은 가치의 reasoning text로 컨텍스트를 채운다는 비판을 받았다.
- 여러 댓글은 **Qwen**이 특히 코딩 지향 벤치마크에서 “benchmaxxed”처럼 보인다고 주장하며, 실제 강점은 코드 생성, 도구 사용, 코딩 스타일 논리가 포함된 작업에서 가장 크다고 본다. 실제 사용에서 사용자들은 **Gemma 4 31B / Gemma 3.6 27B**와 **Qwen** 모두 사용 가능한 스크립트를 생성할 수 있지만, 출력은 수락 전 수동 검사가 여전히 필요하다고 말한다.
- 반복되는 기술적 불만은 **Qwen reasoning mode**가 과도한 chain-of-thought 같은 텍스트를 생성해 컨텍스트를 낭비할 수 있다는 점이다. 한 사용자는 생성된 reasoning 중 유용한 것이 약 `20%`뿐이라고 추정했다. 이는 일부 로컬/SLM 워크플로에서 reasoning을 끄는 것이 유효 컨텍스트 활용도를 높이고 노이즈를 줄일 수 있음을 시사한다.
- 사용자들은 **Gemma**가 일반 assistant 사용, 창작 글쓰기, 요약, roleplay, 일부 vision/image-understanding 사례 같은 비코딩 작업에서 더 낫다고 보고했다. 한 예로 손글씨 노트 전사가 언급됐다. **Qwen**은 어색하게 화살표로 연결된 단어 조각을 반복적으로 부제목으로 잘못 분류했지만, **Gemma 26B**는 그것이 본문 텍스트에 속한다고 추론했다. 또 다른 댓글은 **EQBench**와 창작 글쓰기 벤치마크를 테스트하자고 제안했으며, 여기서 Gemma가 Qwen을 앞설 것으로 예상했다.

### 장문맥 스케일링과 KV Cache 효율

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1twla1k/nvidianvidianemotron3ultra550ba55bbf16_hugging/)** (Activity: 542): **NVIDIA가 [`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)를 출시했다. 이는 `550B` 파라미터 **LatentMoE** hybrid 모델로, `55B` 활성 파라미터를 가지며 **Mamba-2**, MoE, 선택적 attention layer, **Multi-Token Prediction**을 섞는다. 최대 `1M` 토큰 컨텍스트와 `enable_thinking=True/False`를 통한 설정 가능한 reasoning을 내세운다. 이 모델은 frontier reasoning, agentic workflow, tool use, multilingual RAG, long-context analysis를 겨냥하며, 명시된 최소 서빙 풋프린트는 **`8x` GB200/B200/GB300/B300, `16x` H100 또는 `8x` H200** GPU이고 [OpenMDW 1.1 license](https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1)를 따른다.** 상위 댓글은 모델 품질이나 아키텍처를 논하기보다 로컬 사용자에게 비현실적인 하드웨어 요구사항을 주로 농담했다. 예를 들어 *“Hopefully I can get this running on my Nokia 3310”*, *“Damn, I only have 7x H200...”* 같은 반응이었다.
- 한 댓글은 **NVIDIA Nemotron-3-Ultra-550B-A55B-BF16**의 극도로 높은 추론 하드웨어 요구사항을 강조했다. 최소 구성에는 `8x GB200/B200/GB300/B300`, `16x H100` 또는 `8x H200`가 포함되어, 이 모델이 소비자나 소규모 랩이 아니라 대형 멀티 GPU/데이터센터 배포에만 실용적임을 시사한다.
- 한 기술적 포인트는 이 모델의 출력 품질이 **GLM** 같은 대안보다 다소 낮더라도, **크고 낮은 지연시간의 공개 모델**로서 가치가 있을 수 있다는 것이었다. 논의된 트레이드오프는 지연시간에 민감한 애플리케이션에서는 절대적 벤치마크 품질보다 더 빠른 응답/처리가 더 중요할 수 있다는 점이다.

- **[KVarN: new KV-cache quant from Huawei. 3–5× KV cache compression with actual speed-up instead of slow-down, and unlike TurboQuant it holds up on reasoning (Apache 2.0, vLLM single flag)](https://www.reddit.com/r/LocalLLaMA/comments/1twptw2/kvarn_new_kvcache_quant_from_huawei_35_kv_cache/)** (Activity: 438): **Huawei CSL이 **KVarN**을 오픈소스로 공개했다. Apache-2.0 KV-cache 양자화(quantization) 방식으로, **vLLM**에 단일 플래그로 통합되며 FP16 대비 `3–5×` KV-cache 압축, 최대 `~1.4×` FP16 throughput, 최대 `~2.4×` **TurboQuant** throughput을 주장하면서 FP16 수준 품질을 유지한다고 한다 ([repo](https://github.com/huawei-csl/KVarN), [paper](https://arxiv.org/abs/2606.03458)). 게시물은 KVarN을 vLLM FP8 KV cache(`~2×` capacity, near-BF16 throughput) 및 **Google TurboQuant**와 대비한다. [vLLM/Red Hat AI study](https://vllm.ai/blog/2026-05-11-turboquant)에 따르면 TurboQuant는 압축은 달성하지만 BF16 throughput의 `66–80%`로 떨어지고, AIME25 및 LiveCodeBench 같은 벤치마크의 저비트 모드에서 reasoning 점수 `~20`을 잃는다. 핵심 기술 주장은 KVarN이 attention에서 명시적 BF16 dequantization 오버헤드를 피하고, 모델 변경, 재학습, 보정 없이 더 높은 압축률에서 reasoning/code/math 정확도를 유지한다는 것이다.** 댓글은 대부분 주장에 회의적이었고 또 다른 저품질 양자화 PR 물결을 우려했지만, 한 댓글은 **B200**에서 Qwen/Gemma MTP 및 non-MTP 워크로드로 KVarN을 벤치마크해 스케일링과 정확도 유지 여부를 테스트하겠다고 했다.
- 한 댓글은 핵심 검증이 **동시 서빙**, 특히 `batch=1`이 아니라 `batch=16`이라고 주장했다. 많은 KV-cache 양자화 방식은 더 높은 동시성에서 dequantization 오버헤드가 지배적이 되면 겉보기 메모리 이점을 잃기 때문이다. 이들은 KVarN이 주장하는 *speed-up instead of slow-down*이 핵심 프로덕션 신호이며, 압축 오버헤드를 **vLLM** 단일 플래그로 현실적 요청 믹스 전반에 상각할 수 있다면 특히 그렇다고 지적했다.
- 한 사용자는 **NVIDIA B200**에서 KVarN을 벤치마크할 계획이며, **Qwen**과 **Gemma 4**에 대해 **MTP 및 non-MTP** 워크로드를 비교하겠다고 했다. 이는 주장된 `3–5×` KV-cache 압축과 속도 이득이 논문 환경뿐 아니라 고급 추론 하드웨어에서도 확장되는지 검증하는 데 유용할 것이다.
- 또 다른 댓글은 KV 양자화 결과가 최신 아키텍처로 일반화될지 회의적이었다. 많은 방식이 현재 모델들이 KV cache에 정보를 비효율적으로 저장하기 때문에 작동하는 것이라고 제안했다. 그는 **Qwen3.5**와 **DeepSeek V4-style architectures**에서의 평가를 특히 요청했는데, 이들에서는 KV 정보가 더 조밀하게 저장돼 공격적인 압축을 덜 견딜 수 있다는 이유였다.

### Less Technical Subreddits

참고 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 공개 이미지 모델과 로컬 생성 워크플로

- **[Ideogram 4.0 Just Open Sourced!](https://www.reddit.com/r/StableDiffusion/comments/1tvtu2u/ideogram_40_just_open_sourced/)** (Activity: 1087): **[image](https://i.redd.it/9ajk9fuu935h1.jpeg)는 **Ideogram 4.0**이 오픈 가중치가 되었고 “Now on Comfy”라는 게시물의 주장을 홍보하는 **프로모션/비기술 배너**다. 벤치마크 플롯이나 아키텍처 다이어그램이 아니라 Ideogram 로고가 있는 시네마틱 네온 사인 장면을 보여준다. selftext는 `9.3B` text-to-image DiT 모델, `fp8`/`nf4` 체크포인트, 네이티브 ComfyUI 지원, **Qwen3-VL-8B-Instruct** 텍스트 인코딩, hex colors/bounding boxes/text elements를 포함한 JSON 구조 프롬프트, 보고된 `0.97` X-Omni 영어 OCR 정확도를 설명한다.** 댓글은 프로모 이미지보다 안전 동작에 더 초점을 맞췄다. 여러 사용자는 이 모델이 특히 NSFW 프롬프트에서 강하게 검열/“safetymaxxed”되어 있다고 보고했고, 한 사용자는 커뮤니티가 이를 “abliterate”하거나 제한을 제거하려 할 것이라고 예측했다.
- 사용자들은 공개된 **Ideogram 4.0** 모델이 강하게 safety-filtered된 것으로 보인다고 보고했다. **comfyanonymous**는 특정 차단 출력이 **ComfyUI** 문제가 아니라 모델이 *“safetymaxxed”*되어 있기 때문이라고 말했으며, 예시 이미지는 [here](https://preview.redd.it/7lrd6rekg35h1.png?width=1024&format=png&auto=webp&s=988d678c1ecca642b6182749c6ade74e0c7ffaa1)에서 볼 수 있다. 여러 댓글은 또한 NSFW 생성에 대해 hard-censored되어 있다고 묘사하며, 제한이 단순히 UI 쪽이 아니라 모델/프롬프트 수준에 박혀 있음을 시사했다.
- 몇 가지 기술적 도입 장벽도 제기됐다. 댓글은 **watermarking**, **강한 검열**, **상업용 라이선스 부재**를 언급하며, 이런 제약이 공개 릴리스를 프로덕션이나 downstream fine-tuning 워크플로에 덜 유용하게 만든다고 주장했다. 한 사용자는 우려를 *“Watermarked, censored, no commercial license.”*라고 요약했다.
- 한 댓글은 주목할 기능으로 **bounding-box JSON prompting** 능력을 강조하며 예시 출력을 [here](https://preview.redd.it/0bmpbik2e35h1.png?width=1024&format=png&auto=webp&s=8ea4876bd32c8d93e34e5c226ab7a06a1720c68c)에 제시했다. 이는 Ideogram 4.0이 JSON 스타일 공간 제약을 통해 더 구조화된 레이아웃 제어를 지원할 수 있음을 시사하며, 결정론적 구성이나 UI/디자인 생성 워크플로에 유용할 수 있다.

- **[Multiple characters Anima generations are so good. There is some bleeding but its only gonna get better](https://www.reddit.com/r/StableDiffusion/comments/1tvv4j1/multiple_characters_anima_generations_are_so_good/)** (Activity: 932): **게시물은 **Anima**를 사용한 다중 캐릭터 이미지 생성을 보여주며, 워크플로는 작성자의 [Civitai profile](https://civitai.red/user/Smexlo)에 공개됐다. 작성자는 프롬프트 제어, character/detail bleeding, 해부학 관련 문제가 아직 남아 있다고 언급했다. 한 이미지는 “Blair Witch” 막대 인형을 추가하기 위해 **Grok**으로 후편집됐고, 나머지는 Anima에서 생성됐으며, 작성자는 **WAI Anima**를 기대한다고 했다.** 댓글은 Anima의 다중 캐릭터 구성과 프롬프트 준수를 칭찬했다. 한 사용자는 이를 **NovelAI Diffusion V4.5**와 긍정적으로 비교하며, `500M` 파라미터 텍스트 인코더를 감안하면 자연어 파싱이 놀랍다고 강조했다. 다른 사용자는 “don’t even usually have issues bleeding”라고 보고해, bleeding 심각도가 워크플로 또는 프롬프트에 따라 달라질 수 있음을 시사했다.
- 사용자들은 **Anima의 다중 캐릭터 프롬프트 준수**에 초점을 맞췄다. 자연어 프롬프트로 상세한 장면을 구성할 수 있고, character/color/detail bleeding이 비교적 적다는 것이다. 한 댓글은 이를 **Illu/Pony workflows**와 대조했다. 다중 캐릭터 생성이 강한 체크포인트와 캐릭터 LoRA를 요구하는 경우가 많지만 여전히 *“heavy bleeding”*을 겪으며, 이는 부분적으로 **Danbooru-tag prompting이 복잡한 장면 관계를 지정하는 데 더 제한적**이기 때문이라는 설명이다.
- 기술적으로 주목할 만한 주장은 Anima가 **`500M` 파라미터 텍스트 인코더**만 사용하면서도 강한 자연어 파싱을 달성한다는 것이었다. 한 사용자는 prompt-following을 **NovelAI Diffusion V4.5**와 유리하게 비교하며, bleeding-edge 프롬프트 준수의 기준점으로 삼았다. 논의는 Anima를 **SDXL** 주변에서 벌어진 것과 비슷한 커뮤니티 fine-tuning 및 “backyard engineering”을 통해 더 발전할 수 있는 초기 기준선으로 봤다.
- 한 사용자는 **`2560px` width** 예시 출력을 공유하며 *“don’t even usually have issues bleeding”*라고 말했다 ([image](https://preview.redd.it/9cg06yjwo35h1.png?width=2560&format=png&auto=webp&s=bbc1ae3f5a825fb744fb7e351bc0d23d7f61def8)). 이는 Anima 다중 캐릭터 생성에서 bleeding이 보편적이라기보다 프롬프트/모델 의존적일 수 있음을 시사한다.

### 라이브 데이터 스트림 위의 Claude Code

- **[I wired Claude Code into a database of every Polymarket wallet and trades via MCP. What do you want me to ask it next?  This is what I found so far:](https://www.reddit.com/r/ClaudeAI/comments/1tvefqd/i_wired_claude_code_into_a_database_of_every/)** (Activity: 1801): **작성자는 Postgres MCP를 통해 **Claude Code**를 약 `1.3B`건의 거래와 `2.7M`개 지갑을 포함한 라이브 Polymarket ledger에 연결했다고 주장했다. 이를 통해 Claude가 자연어 쿼리를 SQL로 변환하고 실행할 수 있다고 한다. 연결된 글은 `@modelcontextprotocol/server-postgres`를 사전 집계 테이블 위에서 사용해 `1,560,894`개 지갑 전반의 약 `1.3B`건 거래를 다루는 유사한 구성을 설명한다 ([CrowdIntel](https://crowdintel.xyz/blog/claude-mcp-polymarket-ledger)). 보고된 발견에는 순수익 지갑이 약 `20%`뿐이고, `$1,000` 수익을 넘긴 지갑은 `2.4%`, 상위 `0.1%` 지갑에 극단적으로 수익이 집중된다는 내용이 포함된다. 작성자는 Claude가 내부자 또는 봇 같은 거래를 시사하는 의심 패턴도 드러냈다고 주장했다.** 상위 댓글은 NYT/Forbes 등 탐사 기자에게 제보하라고 권했고, 더 엄밀한 분석도 제안했다. 관측된 PnL 분포를 시뮬레이션된 “공정 시장” 귀무모형과 비교하고, 대형 손실 지갑/베팅을 단순한 개인 투자자 손실이 아니라 세탁 또는 내부자 이전 신호일 가능성으로 조사하자는 내용이었다.
- 한 댓글은 내부자 베팅이 없는 공정 시장에서 Polymarket 지갑/거래 분포가 *어떻게 보여야 하는지*에 대한 **baseline null model**을 세운 뒤, 예상 분포를 관측 결과와 비교하자고 제안했다. 또한 **대형 손실 지갑/베팅**을 세분화해 잠재적 내부자 착취와 세탁 가능성을 구분하라고 권했다.
- 또 다른 기술적 스레드는 분석이 Polymarket 시장에 직접 참여한 지갑만 다루는지, 아니면 자본 출처와 수익/손실의 이후 이동을 식별하기 위한 **fund-flow tracing**도 수행하는지 물었다. 이는 지갑 자금 출처, 인출, 잠재적 연결 주소 전반의 그래프 분석을 필요로 한다.
- 한 댓글은 **data freshness / ingestion latency**, 즉 베팅이 이뤄진 뒤 MCP 기반 데이터베이스에 나타나기까지의 지연을 물었다. 이는 뉴스 전 베팅, frontrunning, 해소 후 거래 패턴 같은 시간 민감 이상징후를 탐지하는 데 중요하다.

- **[I Live by SFO and built a projection mapping of the planes flying over my house using ADS-B radio with claude code](https://www.reddit.com/r/ClaudeCode/comments/1tva44g/i_live_by_sfo_and_built_a_projection_mapping_of/)** (Activity: 3616): **게시물은 SFO 근처 작성자 집 위를 지나는 항공기의 **projection-mapping visualization**을 보여준다. 이는 로컬 수신 **ADS-B radio** 데이터로 구동되며 **Claude Code**로 개발됐다. 연결된 Reddit 비디오 ([v.redd.it/gl2b0xivvy4h1](https://v.redd.it/gl2b0xivvy4h1))는 `403 Forbidden` 차단으로 접근할 수 없었고, 수신기 하드웨어, SDR 스택, decoding pipeline, 보정 방법, 지연시간, projection geometry 같은 구현 세부사항은 이용 가능한 텍스트에 제공되지 않았다.** 댓글은 대체로 긍정적이었고 이를 “vibe coding”의 좋은 예로 봤으며, 한 댓글은 구성에 필요한 장비를 물었다.
- 한 댓글은 브라질을 위한 저비용 구현을 설명했다. 원래의 ADS-B/Raspberry Pi 스타일 하드웨어 경로를 **무료 OpenSky API**, `US$40` AliExpress 프로젝터, 개인 PC의 직접 HDMI 출력으로 대체한 것이다. 사용자가 제공한 좌표를 중심으로 지도를 다시 맞출 수 있도록 설정 가능한 latitude, longitude, radius 필드를 추가해, 약 `US$100`로 추정한 로컬 ADS-B 안테나와 비싼 현지 하드웨어 비용을 피했다.
- 공항 근처의 다른 사람들이 자기 프로젝터 설정으로 재사용할 수 있도록 프로젝트를 오픈소스로 만들자는 관심이 있었다. 항공기 projection layer를 별자리/star-map 데이터 같은 다른 데이터셋과 결합할 가능성도 언급됐다.

### 프런티어 AI 채택과 위험 신호

- **[Anthropic - Our internal data shows Claude is accelerating AI development—a possible path to recursive self-improvement, or AI autonomously building a more capable successor.](https://www.reddit.com/r/singularity/comments/1twsm5g/anthropic_our_internal_data_shows_claude_is/)** (Activity: 826): **[image](https://i.redd.it/9ph4lq42la5h1.jpeg)는 **Anthropic의 X 게시물** 스크린샷으로, [“Recursive self-improvement”](https://www.anthropic.com/institute/recursive-self-improvement)라는 글을 홍보하며 내부 사용 데이터가 **Claude가 이미 AI R&D를 가속하고 있음**을 보여주고, 더 유능한 후속 시스템을 만드는 데 AI 시스템이 도움을 주는 초기 경로를 시사할 수 있다고 주장한다. 기술적으로 중요한 주장은 벤치마크 결과가 아니라 조직적/실증적 관찰이다. Anthropic은 Claude가 exploratory tooling 및 지연된 engineering cleanup 같은 작업을 가능하게 한다고 말하며, 이를 **recursive self-improvement**와 미래 AI control risk에 관련된 증거로 프레이밍한다.** 댓글은 이 프레이밍에 회의적이었고, 한 사용자는 이 발표가 재정적 동기의 마케팅임을 암시했다. 또 다른 사용자는 “long-deferred cleanup” 주장을 아이러니하게 강조했고, 세 번째 사용자는 Twitter가 아닌 Anthropic 글 링크를 제공하며 AI가 만든 후속 모델이 통제 상실 위험을 키울 수 있다는 경고를 인용했다.
- 한 댓글은 recursive self-improvement에 관한 Anthropic Institute 전문을 링크했다: https://www.anthropic.com/institute/recursive-self-improvement. 강조된 기술적으로 관련 있는 주장은 Anthropic의 내부 사용 데이터가 Claude가 exploratory tooling 및 long-deferred cleanup처럼 *“simply wouldn’t have happened otherwise”*인 엔지니어링 작업을 이미 가능하게 하고 있음을 시사하며, Anthropic이 이를 더 유능한 후속 시스템 구축을 돕는 AI 시스템으로 향하는 초기 신호로 본다는 점이다.

- **[Sam Altman, Dario Amodei, and Demis Hassabis have signed a joint open letter calling on Congress to mandate screening of synthetic nucleic acid orders](https://www.reddit.com/r/singularity/comments/1two85g/sam_altman_dario_amodei_and_demis_hassabis_have/)** (Activity: 915): ****Sam Altman (OpenAI), Dario Amodei (Anthropic), Demis Hassabis (Google DeepMind)**가 AI 지원 병원체 설계에서 오는 생물보안 위험을 줄이기 위해 **합성 핵산 주문** 검사를 의무화하라고 의회에 촉구하는 공동 공개서한에 서명했다는 [WSJ report](https://www.wsj.com/politics/policy/top-ai-ceos-call-for-law-protecting-against-biological-weapons-88f2f99f) 내용이다. 제안된 메커니즘은 합성 금지가 아니라, 의심스러운 DNA/RNA 서열 또는 구매자를 표시하기 위한 의무적 주문/고객 검사로 설명된다. 대량 비료 구매 같은 전구체 구매 모니터링과 대략 유사하다.** 댓글은 대체로 검사를 가벼운 위험 통제 수단으로 받아들이면서도, AI가 가능하게 하는 “supervirus” 설계가 오늘날 비전문가에게 실제로 가능한지에 의문을 제기했다. 일부는 이 정책을 합법적인 유전공학에 대한 직접 제한이 아니라 합리적인 suspicious-activity trigger로 봤다.
- 댓글 작성자들은 이 제안을 **금지가 아니라 주문 수준 검사**로 프레이밍하며, 의심스러운 대량 비료 구매 모니터링에 비유했다. 이 메커니즘은 잠재적으로 위험한 합성 핵산 주문을 표시하되 합법적 biotech 접근은 보존한다는 것이다.
- 제기된 기술적 우려는 AI 지원 “supervirus” 설계가 비전문가에게 현실적으로 가능한지 여부였다. 암묵적 쟁점은 생물학적 위험이 모델이 생성한 서열뿐 아니라 합성 제공자 접근, wet-lab 능력, 전달 방법, 합성 검사가 병원성 또는 engineered sequence를 포착할 수 있는지에도 달려 있다는 점이다.

- **[ChatGPT makes history and becomes the fastest app to reach 1 billion monthly active users.](https://www.reddit.com/r/OpenAI/comments/1tvh4z4/chatgpt_makes_history_and_becomes_the_fastest_app/)** (Activity: 820): **이미지는 **Kalshi** X 게시물 스크린샷으로, **ChatGPT가 월간 활성 사용자 `10억` 명에 가장 빠르게 도달한 앱**이 됐다고 주장한다: [image](https://i.redd.it/uwgx8zc9j05h1.jpeg). 이는 기술 벤치마크나 구현 세부사항은 아니며, 의미는 주로 시장/채택 맥락에 있다. 댓글 작성자들이 `5일` 만에 `1억` 사용자를 달성했다고 언급한 Threads 같은 이전 바이럴 소비자 앱보다 ChatGPT의 성장을 앞세우는 내용이다.** 댓글은 막대한 MAU가 지속 가능한 매출로 이어지는지 논쟁했다. 한 댓글은 소비자 구독 ARPU를 약 `$1/user`로 추정하며, B2B를 더해도 `$2/user`까지만 오를 수 있다고 농담했다.
- 댓글 작성자들은 보고된 사용자 지표와 매출 함의에 초점을 맞췄다. 한 사용자는 **월간 활성 사용자 `1B`** 주장과 소비자 유료 구독에서 대략 **`$1B`**가 나온다는 점을 함께 언급하며, enterprise/API 매출 전 소비자 ARPU가 약 **`$1/user`**임을 시사했다. 또 다른 사용자는 최근 OpenAI CFO 팟캐스트에서 숫자가 **`900M` users**였다고 들었다며 `1B` 수치에 이의를 제기했고, 확인된 10억 사용자 이정표라면 OpenAI가 더 적극적으로 홍보했을 것이라고 주장했다.
- 막대한 MAU에도 monetization depth에 대한 회의가 있다. 댓글은 보고된 사용자 중 실제 **유료 구독자**가 얼마나 되는지 묻고, headline MAU growth와 recurring revenue, conversion rate, enterprise/API monetization을 구분했다. Threads의 과거 성장 이정표인 **`100M` users in 5 days**와의 비교는 ChatGPT의 규모가 이례적으로 빠르다는 맥락을 제공하지만, active usage와 paying-user retention이 headline adoption number에 부합하는지는 해결되지 않은 채 남는다.

- **[AI Beat Law Professors At Answering Questions, Study Finds—And It Wasn’t Close](https://www.reddit.com/r/singularity/comments/1tvtojx/ai_beat_law_professors_at_answering_questions/)** (Activity: 1187): **Stanford 연결 연구인 [**“Law Professors Prefer AI Over Peer Answers”**](https://law.stanford.edu/publications/law-professors-prefer-ai-over-peer-answers/)는 블라인드 평가를 보고했다. `16`명의 미국 계약법 교수가 `40`개의 단답형 튜터링 질문을 작성하고, 익명화된 인간-vs-LLM 답변 비교 `2,918`건을 판단했다. 댓글에서 **Gemini 2.5 Pro**로 식별된 LLM은 교수 작성 답변 대비 평균 승률 `75.33%`를 달성했고, 최고 강사와 유사하게 수행했으며, harmful로 표시된 비율은 교수 답변 `12.06%`보다 낮은 `3.53%`였다. 초록은 또한 judgment-heavy domain에서 평가를 확장하기 위해 LLM-as-judge 접근을 사용할 것을 제안한다.** 댓글은 튜터링을 넘어선 함의를 논의했다. 한 사용자는 법적 의사결정이나 치안에서 AI를 너무 이르게 제도적으로 사용하는 것을 경고했고, 다른 사용자는 이 결과가 “six fingers” 이후 LLM 능력이 전반적으로 성숙했음을 반영한다고 주장했다. 한 기술적 댓글은 **GPT-5.5** 같은 최신 frontier 모델로 벤치마크를 다시 돌리자고 제안하며, 법률 작업에서 훨씬 더 강할 수 있다고 주장했다.
- 연결된 Stanford 연구는 `16`명의 미국 계약법 교수, `40`개의 교수 작성 질문, `2,918`개의 블라인드 쌍대 비교를 사용해 **LLM vs. 법학 교수 단답 튜터링**을 평가했다. 교수들은 평균 승률 `75.33%`로 LLM 답변을 선호했으며, LLM 답변이 harmful로 표시된 비율은 교수 답변의 `12.06%` 대비 `3.53%`에 그쳤다. 논문은 또한 전문가 합의 데이터를 별도의 LLM-as-judge 파이프라인으로 확장할 수 있다고 주장한다: https://law.stanford.edu/publications/law-professors-prefer-ai-over-peer-answers/.
- 한 댓글은 연구가 **NotebookLM**과 **Gemini 2.5 Pro**를 매우 제한된 프롬프트와 함께 사용했다는 점을 강조했다. 답변은 office-hours 스타일의 계약법 교수를 모방하고, bullet point/filler를 피하며, 약 `50–108`단어로 유지해야 했고, NotebookLM의 경우 제공된 교과서 장에만 의존하며 외부 판례를 인용하지 않아야 했다. 이 프롬프트 설계는 환각 위험을 줄이고 답변 형식을 표준화했을 가능성이 높아, 벤치마크가 개방형 법률 조사보다 간결한 법적 reasoning/synthesis에 관한 평가가 되게 했다.
- 법은 **RAG-style systems**에 잘 맞는 영역이라는 기술적 주장이 나왔다. 법조계는 개인의 기억 용량을 넘어서는 방대한 법령, 판례, 선례, 이론 corpus에 의존하기 때문이다. 제안된 워크플로는 권위 있는 법률 자료 검색 후 합성이며, 모델이 관련 corpus에 grounded되어 있다면 비보조 변호사보다 더 잘할 수 있다는 것이다.

---

## AI Discord Recap

### Discord 접근 종료

- **접근 종료**: 안타깝게도 Discord가 오늘 접근을 차단했다. 이 형태로는 다시 가져오지 않을 예정이지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
