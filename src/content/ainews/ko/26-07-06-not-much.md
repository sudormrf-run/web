---
title: "Tencent Hy3가 Apache 2.0으로 공개"
summary:
  - "Tencent Hy3가 Apache 2.0으로 공개"
  - "Anthropic이 Claude J-space 연구를 발표"
  - "AutomationBench-AA가 에이전트 평가 공개"
  - "OpenAI가 GPT-Realtime-2.1-mini 출시"
  - "MIRA가 실시간 플레이 월드 모델을 시연"
date: 2026-07-06
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-07-06-not-much.md"
hasHeadline: false
headline: "Tencent Hy3가 Apache 2.0으로 공개"
tags:
  - Tencent
  - Hy3
  - Anthropic
  - vLLM
  - Fable
isFeatured: false
---

## 헤드라인: Tencent Hy3가 Apache 2.0으로 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Tencent가 Apache 2.0 라이선스의 Hy3를 공개했다. 295B MoE, 21B 활성 파라미터, 256K 컨텍스트, MTP 기반 추측 디코딩(speculative decoding)을 갖춘 오픈웨이트 모델로, 출시 직후 vLLM 네이티브 지원과 NVIDIA/AMD 검증까지 갖추며 배포 완성도 면에서 특히 주목받았다.

---

## AI Twitter Recap

### Tencent Hunyuan의 Hy3 출시와 오픈웨이트 프런티어

- **Hy3가 진지한 오픈 모델로 등장**: Tencent가 **Apache 2.0**으로 **Hy3**를 공개했다. 이는 **295B MoE**, **21B 활성 파라미터**, **192 experts / top-8 routing**, **GQA**, **256K context**, 추측 디코딩(speculative decoding)을 위한 **3.8B MTP layer**를 갖춘 모델이다. 여러 게시물은 추론(reasoning), 코딩, 에이전트 작업에서 훨씬 큰 시스템과 경쟁 가능하다고 평가했으며, 특히 tool-calling 안정성 및 환각 억제 같은 신뢰성 개선을 강조했다 [@eliebakouch](https://x.com/eliebakouch/status/2074011171661701466), [@HuggingPapers](https://x.com/HuggingPapers/status/2074024501201813797), [@ShunyuYao12](https://x.com/ShunyuYao12/status/2074151389945827744).
- **추론(inference) 지원이 이례적으로 출시 당일부터 성숙**: [@vllm_project](https://x.com/vllm_project/status/2074147504254517529)는 Hy3가 출시와 동시에 **vLLM**에서 네이티브로 실행되며 tool-call 및 reasoning parser, **MTP speculative decoding**, **NVIDIA와 AMD** 검증 지원을 제공한다고 밝혔다. 후속 글에서는 Tencent의 프로덕션 커널이 vLLM main에 업스트림되었다고 설명했으며, 여기에는 load-balanced decode scheduling과 fused FP8 MoE serving이 포함된다. 혼합 길이 decode에서 **최대 2.95x** 개선, 기본 백엔드 대비 약 **24% TTFT** 및 **17% TPOT** 지연 감소가 보고됐다 [@vllm_project](https://x.com/vllm_project/status/2074147506875969754). 커뮤니티 반응도 커서 [@Teknium](https://x.com/Teknium/status/2074264567803531589)은 Hy3를 Nous Portal에서 2주간 무료로 제공하기 시작했다.
- **더 넓은 오픈 모델 맥락**: Hy3는 즉시 **GLM-5.2**와 비교됐다. 일부는 벤치마크와 vibe-test 결과가 유지된다면 Tencent가 최상위 오픈소스 랩 반열에 올랐다고 주장했다 [@teortaxesTex](https://x.com/teortaxesTex/status/2074012467886178725). 반면 실사용 기준으로는 여전히 **GLM-5.2**가 현재 최고의 오픈웨이트 모델이라는 의견도 있었다 [@__tinygrad__](https://x.com/__tinygrad__/status/2074206866641752190), [@mbusigin](https://x.com/mbusigin/status/2074238100251799998). 핵심 결론은 오픈 프런티어가 빠르게 압축되고 있으며, 경쟁의 중심이 단순 리더보드 점수 차이보다 배포 견고성으로 이동하고 있다는 점이다.

### 에이전트 벤치마크, 하네스, 장기 실행 메모리

- **AutomationBench-AA가 더 현실적인 에이전트 평가 추가**: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2074194764510208230)는 Zapier의 **AutomationBench**에 대한 독립 리더보드를 출시했다. 이는 **657개 작업**과 **40개 시뮬레이션 SaaS 앱**에서 목표와 가드레일을 함께 평가한다. **Claude Fable 5**가 **48.6%**로 1위였고, **Opus 4.8**이 **48.5%**, **Gemini 3.5 Flash**가 **42.6%**, **GPT-5.5 xhigh**가 **42.1%**를 기록했다. 순위보다 흥미로운 점은 모든 모델이 여전히 비즈니스 규칙을 어긴다는 것이며, Gemini는 **guardrail violation 대비 objective 달성률**과 **비용 효율성**에서 특히 강해 보였다. 오픈웨이트 모델은 여전히 의미 있게 뒤처져 있으며, 등록된 오픈 모델 중 최고는 **GLM-5.2 max**의 **27.8%**였다.
- **능력 지표가 다차원화**: Artificial Analysis는 단일 스칼라 모델 점수를 넘어서기 위해 **Finance & Accounting, Legal, Healthcare & Medical, Strategy & Ops, Engineering, Economics**의 여섯 도메인별 지표도 도입했다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2074299714699469221). 헤드라인은 익숙했다. **Claude Fable 5**와 **Opus 4.8 fallback** 조합이 선두였다. 하지만 더 유용한 통찰은 도메인별로 순위가 크게 재편되고, 가격 대비 성능 프런티어가 매우 가팔라졌다는 점이다. 이는 벤치마크 점수를 **작업당 비용(cost per task)** 없이 보고하는 것이 점점 무의미해지고 있다는 [@fchollet](https://x.com/fchollet/status/2074242671103889799)의 주장과도 맞닿아 있다.
- **지속형 에이전트의 병목은 여전히 메모리와 검색(retrieval)**: 이 주제에서 두 논문이 주목받았다. 첫째, **A-TMA**는 장기 실행 어시스턴트에서 오래된 사실과 현재 사실이 함께 검색되는 “ghost memory” 문제를 다룬다. LTP 벤치마크에서 Graphiti에 이를 추가하면 conflict accuracy가 **+0.240 absolute** 개선된 것으로 보고됐다 [@omarsar0](https://x.com/omarsar0/status/2074121191846261022). 둘째, **ReContext**는 학습이 필요 없는 long-context inference 하네스로, 답변 생성 직전에 모델 내부 증거를 다시 재생해 8개 128K 데이터셋에서 evidence utilization을 개선했다 [@dair_ai](https://x.com/dair_ai/status/2074178316819677238). million-token in-context retrieval을 위한 **BlockSearch** [@dair_ai](https://x.com/dair_ai/status/2074117920133898707)와 함께 보면, 더 나은 메모리 동작은 점점 학습만이 아니라 추론 시점에서 엔지니어링되고 있다는 흐름이 뚜렷하다.

### Anthropic의 J-Space / Global Workspace 결과

- **기계적 해석 가능성(mechanistic interpretability)이 중심 무대에**: Anthropic은 Claude 내부에 **global-workspace-like internal structure**가 있다는 연구를 공개했다. 이는 **J-space**라고 부르는 작은 activation 부분집합을 중심으로 한다 [@AnthropicAI](https://x.com/AnthropicAI/status/2074185348142280912), [@AnthropicAI](https://x.com/AnthropicAI/status/2074185387577094398). 핵심 주장은 chain-of-thought 추출이 아니라, 보고(report), 조절(modulation), 유연한 추론(reasoning)에 사용 가능한 특권적 내부 표현 기반을 식별했다는 것이다. Anthropic은 오픈웨이트 모델용 Neuronpedia 데모도 공개했다 [@AnthropicAI](https://x.com/AnthropicAI/status/2074185390060110138).
- **연구자들이 주목한 이유**: 해석 가능성 연구자들은 프레이밍에는 동의하지 않더라도, 이를 모델의 “working memory” 또는 내부 workspace에 대한 이전 공개 연구보다 강한 증거로 받아들였다. [@NeelNanda5](https://x.com/NeelNanda5/status/2074193936588148891)는 working-memory-like mechanism에 대한 지금까지 최고의 증거라고 평가했다. [@Jack_W_Lindsey](https://x.com/Jack_W_Lindsey/status/2074215950602379388)는 이 특권적 공간을 이해하는 것이 LLM cognition의 핵심일 수 있다고 주장했다. 게시물들은 실용적 안전성 측면도 강조했다. 이 workspace는 숨은 개념을 드러내고, prompt injection을 감지하며, 언어화되기 전 sabotage 관련 내부 feature를 노출할 수 있다고 한다 [@mlpowered](https://x.com/mlpowered/status/2074190714100146483), [@LiorOnAI](https://x.com/LiorOnAI/status/2074198891990548940), [@omarsar0](https://x.com/omarsar0/status/2074264122330612223).
- **하지만 “consciousness” 표현은 논쟁적**: Anthropic의 공개 프레이밍은 강한 반발을 불렀다. 지지자들은 이 결과가 phenomenal consciousness가 아니라 **access consciousness**의 기능적 유사체를 시사한다고 말했다 [@BorisMPower](https://x.com/BorisMPower/status/2074201312531734567). 반면 비판자들은 회사가 특권적 latent activation을 의식과 혼동하며 과장하고 있다고 주장했다 [@AlanCowen](https://x.com/AlanCowen/status/2074265992570736919). 우호적인 해석조차도 더 큰 이야기는 철학이 아니라 모델 감사(auditing)와 조향(steering)을 위한 새로운 **intervention point**라고 강조했다.

### 추론, 서빙, 시스템 효율성

- **Speculative decoding은 여전히 뜨거운 인프라 주제**: [@lmsysorg](https://x.com/lmsysorg/status/2074176669108367549)는 confidence-driven variable-length verification을 위해 SGLang에 **DSpark**를 추가했다. 핵심 주장은 고부하 상황에서 모든 draft token을 검증하지 않아 fixed-budget speculative 방식보다 처리량/지연 시간 균형을 개선한다는 것이다. DeepSeek-V4-Pro는 **B300에서 batch=1 기준 383.7 tok/s**에 도달한 것으로 보고됐다. Microsoft도 출시 후 지연 시간과 토큰 효율성을 개선하기 위해 GitHub Copilot 하네스에서 **GPT-5.5**의 prompt-level optimization을 논의했다 [@code](https://x.com/code/status/2074178799512539571), [@pierceboggan](https://x.com/pierceboggan/status/2074180737147027757).
- **추론 효율성이 전략적 병목으로 부상**: [@jon_durbin](https://x.com/jon_durbin/status/2074169183835685351)는 이제 학습만이 아니라 추론이 “the whole game”이라고 주장했다. 모든 데이터 파이프라인, RL 루프, 에이전트 런타임은 결국 test-time compute로 귀결되기 때문이다. 이 관점은 더 낮은 수준의 커널 작업에서도 드러났다. Chutes는 **MiniMax MSA**와 **GatedDeltaNet-2**에서 주요 속도 향상을 보고했으며, **RTX Pro 6000 / SM120**에서 **~7x** sparse-attention training 개선과 더 나은 fused FP8 커널을 포함했다 [@jon_durbin](https://x.com/jon_durbin/status/2074119835366134188).
- **모델 서빙 외 인프라 출시**: Cloudflare는 표준 HTTP 헤더로 설정되는 Worker entrypoint 앞단의 지역 계층형 캐시인 **Workers Cache**를 출시했다 [@Cloudflare](https://x.com/Cloudflare/status/2074117419728007181). OpenAI는 **GPT-Realtime-2.1-mini**를 출시해 이전 mini와 같은 가격으로 mini realtime 라인에 reasoning과 tool use를 추가했으며, 캐싱 개선으로 **25%+ p95 latency reductions**를 주장했다 [@OpenAIDevs](https://x.com/OpenAIDevs/status/2074255408013955466), [@OpenAIDevs](https://x.com/OpenAIDevs/status/2074255420831735824).

### 월드 모델, 음성, 문서 AI

- **MIRA는 주목할 만한 월드 모델 데모**: General Intuition과 Kyutai는 Epic Games와 함께 **MIRA**를 소개했다. 이는 bot-collected data **10k hours**로 학습한 Rocket League용 플레이 가능한 멀티플레이어 월드 모델이다 [@gen_intuition](https://x.com/gen_intuition/status/2074104524596457706). 실시간 **20 fps**로 실행되며, 게시물들은 명시적 physics 또는 rendering engine 없이 단일 **NVIDIA B200**에서 2v2 경기 전체를 실행하는 **5B-parameter** 모델을 강조했다 [@TheRundownAI](https://x.com/TheRundownAI/status/2074184559768277398). 이는 video/world-model 작업이 장난감 데모에서 상호작용형 시뮬레이터로 이동하고 있다는 가장 선명한 신호 중 하나였다.
- **음성 분야 경쟁도 치열**: AssemblyAI는 **Universal-3.5 Pro Realtime**을 출시했다. 이는 AA-WER Streaming에서 **4.1% WER**를 기록한 streaming STT 모델이며, 통화 중 재연결 없이 업데이트 가능한 contextual priming을 지원한다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2074160133702402314). TTS 쪽에서는 Artificial Analysis가 **Speechify Simba 3.2**가 Speech Arena에서 **1233 Elo**로 Gemini 3.1 Flash TTS, Sonic 3.5, Inworld Realtime TTS 1.5 Max를 앞섰고, 상위 모델 중 가장 저렴하다고 밝혔다 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2074265309985570890).
- **문서 컨텍스트 파이프라인은 기본적으로 멀티모달화**: LlamaIndex와 LanceDB는 지저분한 PDF를 위한 검색(retrieval) 파이프라인을 설명했다. 이는 **pages, chunks, extracted assets**를 연결된 멀티모달 테이블로 분리하며, 라벨링된 ESG-report 벤치마크에서 **82% any-page-hit@5**와 **74% answer accuracy**를 보고했다 [@lancedb](https://x.com/lancedb/status/2074153945631457663), [@llama_index](https://x.com/llama_index/status/2074170470119752084). 이는 에이전트를 위한 전용 “document context layer”가 필요하다는 Jerry Liu의 더 넓은 주장과도 맞물린다 [@jerryjliu0](https://x.com/jerryjliu0/status/2074165277634253106).

### 참여도 기준 상위 트윗

- **Anthropic의 global workspace 논문**이 참여도를 지배했다. Claude 내부 workspace/J-space에 대한 기본 발표가 다른 모든 게시물보다 크게 앞섰다 [@AnthropicAI](https://x.com/AnthropicAI/status/2074185348142280912).
- **Tencent Hy3**는 순수 모델 출시 소식 중 가장 컸으며, 특히 오픈소스 경쟁력과 배포를 논의하는 기술 계정들 사이에서 주목받았다 [@teortaxesTex](https://x.com/teortaxesTex/status/2074012467886178725), [@ShunyuYao12](https://x.com/ShunyuYao12/status/2074151389945827744).
- **MIRA의 플레이 가능한 월드 모델**은 가장 돋보인 멀티모달/시스템 데모였다 [@gen_intuition](https://x.com/gen_intuition/status/2074104524596457706).
- **Will Depue의 “Stargate for Data”** 스레드는 가장 실질적인 전략 글이었다. 프런티어 랩의 제약과 해자가 compute만이 아니라 데이터 수집에서 형성된다고 주장했다 [@willdepue](https://x.com/willdepue/status/2074178395462848800).
- **John Carmack의 메모리 시스템 스레드**는 대규모 모델 서빙에서 추론 하드웨어가 deterministic access pattern과 HBM보다 훨씬 저렴한 메모리 계층을 활용할 수 있다고 주장하며 큰 기술적 관심을 모았다 [@ID_AA_Carmack](https://x.com/ID_AA_Carmack/status/2074248758422864226).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: 대형 오픈웨이트 MoE 모델 출시

- **[longcat 2.0 (1.6T, ~48B active) weights are now open under MIT license](https://www.reddit.com/r/LocalLLaMA/comments/1unyvnz/longcat_20_16t_48b_active_weights_are_now_open/)** (Activity: 638): **LongCat 2.0** 가중치가 [elie](https://x.com/eliebakouch/status/2073690402503487902)와 [ModelScope](https://x.com/ModelScope2022/status/2073710226365165679)의 발표를 통해 **MIT license**로 공개됐고, 기술 세부사항은 [LongCat 2.0 blog post](https://longcat.chat/blog/longcat-2.0/)에 정리돼 있다. 이 모델은 `1.6T` 전체 파라미터와 추론(inference)당 약 `48B` 활성 파라미터를 가진 초대형 **MoE** 시스템이다. 댓글에서는 공개된 가중치가 **BF16** 기준 약 `3.55 TB`, **FP8** 기준 `2.05 TB`를 차지한다고 언급했다. 댓글 작성자들은 멀티테라바이트급 가중치가 만드는 실질적 배포 부담을 강조했고, **Meituan**이 이를 완전한 중국산 칩으로 학습했다는 점도 지정학적·시장적 의미로 논의했다.
- **LongCat 2.0 규모와 배포 부담**: 댓글들은 `1.6T` 전체 파라미터와 약 `48B` 활성 파라미터가 sparse/MoE 스타일 아키텍처를 시사한다고 짚었다. 한 사용자는 가중치가 **BF16**에서 약 `3.55 TB`, **FP8**에서 `2.05 TB`를 요구한다고 언급했으며, 이는 로컬 저장소나 추론 인프라 계획에 중요하다.
- **중국산 칩 학습의 의미**: **Meituan**이 모델을 `100%` 중국산 칩에서 학습했다는 점이 AI 하드웨어 공급망 독립성 측면에서 중요하게 받아들여졌다. Meituan이 전통 AI 랩이라기보다 Groupon과 Uber Eats의 혼합에 가까운 대형 중국 인터넷 기업이라는 점도 주목됐다.
- **라이선스와 벤치마크 기대**: 여러 사용자는 관대한 **MIT license**와 **Qwen**, **DeepSeek** 같은 프런티어 오픈 모델과의 벤치마킹 계획에 관심을 보였다. `1.6T` 전체 파라미터, `~48B` 활성 파라미터, 오픈웨이트 조합은 추론 툴링이 아키텍처를 효율적으로 지원한다면 고급 MoE 오픈 모델과 비교할 수 있음을 시사한다.
- **[New open  model from Tencent Hy: Hy3 (295B total 21B active - apache 2.0)](https://www.reddit.com/r/LocalLLaMA/comments/1uoozt4/new_open_model_from_tencent_hy_hy3_295b_total_21b/)** (Activity: 604): **Tencent**가 [Hugging Face](https://huggingface.co/collections/tencent/hy3)에 non-preview **Hy3** 모델 컬렉션을 공개했다. 이는 `295B` 파라미터 MoE, `21B` 활성 파라미터 모델이며, 이전의 제한적 community license가 아니라 **Apache 2.0**으로 제공된다. 댓글은 연결된 벤치마크 차트와 *“pretty impressive claimed gains over HY3-Preview”*라는 주장을 강조했고, 실제 성능이 보고된 결과와 맞는다면 고급 로컬/홈 추론 환경에 의미가 있을 수 있다고 평가했다. 핵심 논의는 라이선스 변경에 긍정적이었다. 지리적·사용 제한이 있던 라이선스에서 **Apache 2.0**으로 이동한 것이 Tencent의 최근 Apache 라이선스 번역 모델들과 함께 가장 중요한 개선으로 받아들여졌다.
- **Hy3의 실사용 가능성**: 댓글들은 **Tencent Hunyuan Hy3**가 **`295B` 전체 파라미터와 `21B` 활성 파라미터**를 가진 대형 MoE 출시라고 강조했다. 한 사용자는 **HY3-Preview** 대비 주장된 벤치마크 개선이 실제 워크로드에도 이어진다면 “high end home setups”에도 관련성이 있을 수 있다고 말했다. 실질적 추론 가능성, 특히 **GGUF quantizations** 제공 여부가 로컬 배포 가능성을 좌우할 것으로 보인다.
- **Apache 2.0 전환의 중요성**: Tencent가 **South Korea, the UK, and the EU** 같은 지역의 사용을 제한하던 더 엄격한 “community” 라이선스에서 **Apache 2.0**으로 이동했다는 점이 기술적으로 중요하게 언급됐다. 댓글들은 이것이 더 넓은 상업 및 연구 재사용을 가능하게 하며, Tencent의 최근 Apache 라이선스 번역 모델들과 일관된다고 봤다.
- **Qwen 및 MiniMax 대안 가능성**: 한 댓글 작성자는 Hy3를 **Qwen**과 **MiniMax**의 잠재적 대안으로 보며, 벤치마크와 실제 성능이 현재 선두 오픈웨이트 중국 모델 패밀리들과 경쟁할 수 있을지에 관심을 보였다.
- **[New model: GigaChat3.5-432B-A28B (with day-0 GGUF support!)](https://www.reddit.com/r/LocalLLaMA/comments/1uotkm7/new_model_gigachat35432ba28b_with_day0_gguf/)** (Activity: 439): **Sberbank/ai-sage**가 Hugging Face에 **GigaChat3.5-432B-A28B**를 [instruct](https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B)와 [base](https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-base) 변형으로 공개했고, 출시 당일 [GGUF weights](https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-GGUF)도 제공했다. `llama.cpp` 지원은 PR [ggml-org/llama.cpp#25342](https://github.com/ggml-org/llama.cpp/pull/25342)를 통해 가능하지만 아직 master에는 병합되지 않았다. 댓글들은 모델 카드 내용을 인용해, 이전 **GigaChat 3.1 Ultra 700B**를 대체하는 **custom MoE**로서 약 `40%` 더 작지만 code/math/agentic tasks에서 더 강하고, token당 KV cache를 약 `4×` 덜 쓰며, 같은 메모리에서 `>2×` 더 많은 컨텍스트를 담고, generation throughput을 약 `20%` 개선한다고 설명했다. 아키텍처상 **hybrid MLA + GatedDeltaNet linear-attention** 스택과 **two MTP heads**를 사용하며, greedy decoding에서 head 하나는 약 `1.5×`, 두 개는 최대 `2.2×` 속도 향상을 주장한다. 주요 기술적 주의점은 **DeepSeek 3.2**와의 벤치마크 비교가 최신 프런티어 모델 대비 약한 기준일 수 있고, GigaChat3.5가 **non-reasoning** 모델이므로 해석 시 이를 고려해야 한다는 점이었다.
- **비교 기준과 non-reasoning 특성**: 댓글들은 **GigaChat3.5-432B-A28B**가 *non-reasoning* 모델이라는 점을 고려해야 하며, reasoning/frontier 모델과의 비교가 오해를 부를 수 있다고 봤다. 한 사용자는 **DeepSeek 3.2**를 기준점으로 쓰는 것을 두고 “~year behind the frontier models”라고 지적했고, 다른 사용자는 non-reasoning baseline이 점점 드물어 별도 평가가 필요하다고 말했다.
- **대형 모델치고 높은 개방성**: 이 릴리스는 이 규모 모델 중 이례적으로 열려 있다는 평가를 받았다. 댓글들은 **intermediate checkpoints and the base model are open-weighted**라는 점을 “top 10% of openness of models on HF”라고 표현했다. 다만 **정확한 학습 데이터셋**은 공개되지 않아 완전한 재현성과 데이터 오염 분석에는 한계가 있다.
- **아키텍처와 효율성 주장**: 상세 아키텍처 발췌에 따르면 **GigaChat 3.5 Ultra**는 **GigaChat 3.1 Ultra 700B**보다 약 `40%` 작으면서 code, math, agentic performance를 개선했고, token당 KV-cache를 약 `4×` 줄이며, 같은 메모리에서 `>2×` 더 많은 컨텍스트를 담고, throughput을 약 `20%` 높인다. 모델은 **MLA**와 **GatedDeltaNet** linear-attention layer를 결합한 custom MoE hybrid attention 설계와 두 개의 head를 가진 **Multi-Token Prediction**을 사용하며, greedy decoding speedup은 head 하나에서 약 `1.5×`, 두 개에서 최대 `2.2×`로 보고됐다.

### /r/LocalLlama + /r/localLLM: 소비자 하드웨어에서 프런티어급 모델 실행

- **[If trends hold, Mythos-class capability may be running on high-end consumer hardware within ~2 years](https://www.reddit.com/r/LocalLLaMA/comments/1uoij3s/if_trends_hold_mythosclass_capability_may_be/)** (Activity: 1992): [image](https://i.redd.it/5xwuga6pwhbh1.png)는 **“From frontier to running on a laptop”**라는 추측성 추세 차트다. 오픈웨이트 노트북 실행 가능 모델이 역사적으로 프런티어 출시보다 평균 `24.8 months` 뒤처졌다고 주장한다. 예시는 **GPT-3 → Llama 2 70B** `37 months`, **ChatGPT/GPT-3.5 → Llama 3 70B** `17 months`, **GPT-4 → Gemma 3/Qwen3-class** `24 months`다. 이 추세를 외삽해 **GPT-5/Claude 4-class** 기능은 **mid-2027**, **Fable/Mythos-class** 기능은 **July 2028**경 고급 소비자 하드웨어에서 가능할 수 있다고 예측한다. 다만 이는 벤치마크 결과가 아니라 휴리스틱 예측이다. 댓글들은 이 추세가 맞더라도 “consumer hardware”가 계속 저렴할지에 회의적이었고, 고급 로컬 추론이 기업용 compute 비용에 수렴할 수 있다고 봤다.
- **Gemma 4 성능 이슈와 설정 수정**: 한 사용자는 **Gemma 4 26B A4B QAT**가 **RTX 5080**의 긴 컨텍스트에서 처음에는 `20K` context 기준 약 `6 tok/s`만 생성해, 가상의 **Gemma 4 31B dense** 모델이 노트북급 하드웨어에서 실용적일지 의문을 제기했다. 이후 설정 문제로 확인했고, `llama.cpp` 스타일 플래그 `--no-mmap --batch-size 256 --ubatch-size 512`를 적용한 뒤 idle 약 `100 tok/s`, load 시 `60 tok/s`로 개선됐다고 보고했다. 참고한 설정 가이드는 [running Gemma 4 26B A4B locally](https://carteakey.dev/blog/local-inference/running-gemma-4-26b-a4b-locally/)다.
- **Mythos-class 예측의 불확실성**: 한 댓글 작성자는 **Mythos-class** 로컬 실행 가능성을 외삽하는 것은 실제 모델 크기와 아키텍처를 모르기 때문에 추측적이라고 경고했다. 모델이 “`3 times the size of Opus 4.8`”일 수도 있어, 현재 고급 소비자 GPU에 들어갈 것이라는 가정은 신뢰하기 어렵다는 것이다.
- **[I managed to run GLM-5.2 (744B MoE) on a humble 25 GB RAM laptop — pure C, experts streamed from disk](https://www.reddit.com/r/LocalLLM/comments/1uocapw/i_managed_to_run_glm52_744b_moe_on_a_humble_25_gb/)** (Activity: 546): 작성자는 **GLM-5.2 744B MoE**용 순수 C, 무의존성 inference engine인 **[colibrì](https://github.com/JustVugg/colibri)**를 만들었다. dense `int4` 부분은 약 `9.9–10 GB` RAM에 상주시킨 뒤, 약 `21k` routed experts, 즉 `~370 GB int4`를 디스크에서 필요할 때 스트리밍한다. GLM-5.2의 forward path를 구현하며 **MLA attention**, compressed KV cache, DeepSeek-style routing, MTP speculative decoding, `int8/int4` AVX2 kernels, async expert readahead, batch-union MoE, FP8→int4 converter를 포함한다. 12-core/25 GB RAM WSL2 NVMe 노트북에서 보고된 성능은 디스크 병목으로 cold 기준 약 `0.05–0.1 tok/s`, token당 약 `11 GB` random read다. 상위 댓글들은 `0.1 t/s`에서 이를 모델을 “running”한다고 부르는 데 대체로 회의적이거나 농담 섞인 반응을 보였고, 이제 진짜 지표는 tokens per second가 아니라 seconds per token이라는 말도 나왔다.
- **디스크 스트리밍 MoE의 한계**: 한 댓글은 throughput이 약 `0.1 tokens/s`에 불과하다고 보고하거나 추정했고, 다른 댓글들은 결과를 tokens per second가 아니라 **seconds per token**으로 재해석했다. 논의상 디스크 스트리밍 MoE 설정은 기술적으로 작동하지만 I/O latency, 특히 spinning disk나 구형 DDR3 시스템에서 지배적인 병목이 된다.
- **mmap 대안 질문**: 한 기술적 질문은 custom pure-C disk-streaming 접근 대신 `llama.cpp`와 `mmap`을 시도했는지 물었다. 이는 명시적 expert streaming 대신 OS paging과 memory-mapped model weights를 활용하는 대안 구현 경로를 가리킨다.

### Less Technical AI Subreddits: Fable 5 기능 데모와 긴 컨텍스트 사용

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[I misunderstood Fable at first, now I get it.](https://www.reddit.com/r/ClaudeAI/comments/1uo1xpz/i_misunderstood_fable_at_first_now_i_get_it/)** (Activity: 1626): 게시물은 **Fable**이 “raw intelligence”에서는 **Opus**보다 약간 앞설 뿐이지만, 실제 장점은 더 크고 상호 의존적인 산출물 전반에서 일관된 컨텍스트를 유지하는 데 있다고 주장한다. `8`개 schematic sheet가 있는 PCB review workflow에서 작성자는 Fable이 Opus가 약 `2`장 이후 “misses the mark”하는 cross-sheet dependencies를 더 잘 추적한다고 보고했다. 이는 더 나은 local reasoning보다 강한 long-context/global-reasoning 동작을 시사한다. 상위 댓글들은 대체로 동의하며, Fable의 가치를 “seeing the bigger picture”와 긴 컨텍스트에서 코드/설계 품질을 유지하는 능력으로 봤다.
- **Fable의 오케스트레이션 강점**: 여러 댓글은 **Fable**이 기존 코드베이스와 문서를 분석하고, 격차를 식별하며, Opus로 항목별 구현에 들어가기 전 추천/구현 계획을 만드는 고수준 소프트웨어 엔지니어링 오케스트레이션에서 **Opus**보다 강하다고 평가했다. 보고된 워크플로는 Fable로 architecture/codebase assessment와 planning을 수행한 뒤, Opus로 구체적 구현을 진행하는 방식이다.
- **품질 유지와 잘못된 경로 회피**: 반복된 기술적 구분은 Fable이 Opus보다 즉시 “더 나은” 코드를 만드는 것은 아닐 수 있지만, dead-end implementation path를 피하며 *maintain quality for longer*하는 것처럼 보인다는 점이다. 한 댓글은 Opus가 알려진 비실용적 접근을 반복했지만 Fable은 전략이 생산적이지 않음을 인식했다고 설명했다.
- **상호작용 방식의 트레이드오프**: 사용자들은 Fable이 project outlining, gap analysis, existing system 이해에는 강하지만, chat mode에서는 명확화 질문을 하고 기다리라는 지시 대신 결론으로 서두를 수 있다고 말했다. 이는 Fable의 강점이 통제된 대화형 요구사항 수집보다 autonomous planning/review에 더 가깝다는 점을 시사한다.
- **[Google DeepMind Product and Design Lead using and advertising a competitor's model](https://www.reddit.com/r/singularity/comments/1uo3af4/google_deepmind_product_and_design_lead_using_and/)** (Activity: 1192): [image](https://i.redd.it/0k8376mn5fbh1.png)는 게시물 제목상 **Google DeepMind Product and Design Lead**로 식별된 **Ammaar Reshi**가 경쟁 모델 **“Fable 5”**를 사용해 *Command & Conquer: Generals Zero Hour*를 **iPhone/iPad**로 포팅했다고 공개적으로 말한 장면이다. 기술적으로 주목할 점은 **2003 PC RTS engine**을 **ARM64**로 네이티브 컴파일하고 **touch controls**를 붙였다는 주장이다. 이는 아키텍처, 플랫폼 API, 입력 패러다임을 넘나드는 LLM-assisted code migration/porting을 의미한다. 댓글들은 대체로 이를 불충보다 경쟁 정보 수집으로 해석했다.
- **실제 프로젝트와 포팅 구조**: 기술적으로 실질적인 스레드는 실제 프로젝트인 [`Generals-Mac-iOS-iPad`](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad)를 가리켰다. 이는 *Command & Conquer: Generals*를 Apple 플랫폼으로 감싸거나 포팅하는 것으로 보인다. 한 댓글은 결과가 인상적이지만 legacy `DX8` codebase 위의 “`4 abstraction layers`”에 의존할 가능성이 높다고 보고, 더 깔끔한 engine-level rewrite인 [`TheSuperHackers/GeneralsGameCode`](https://github.com/TheSuperHackers/GeneralsGameCode/)를 기다리는 편이 낫다고 제안했다.
- **경쟁사 모델 사용에 대한 해석**: 여러 댓글은 Claude 사용을 불충이 아니라 경쟁 분석으로 봤고, Product/Design lead라면 경쟁 모델 역량을 직접 이해해야 한다고 말했다. 한 댓글은 Google이 Anthropic과 상당한 관계가 있으며 Google이 Anthropic의 약 `18%`를 보유한다고 주장해, “competitor” 프레이밍이 기술적·상업적으로 더 복잡하다고 덧붙였다.
- **Apple 우선 포팅의 의미**: 놀라운 점은 Claude/Fable급 도구 사용 자체보다 포팅 대상이 Android보다 Apple 플랫폼이었다는 관찰도 있었다. 논의는 단순한 모델 선택보다 legacy PC games를 iOS/macOS/iPadOS로 가져오는 platform/runtime feasibility와 tooling maturity에 관한 것이기도 했다.
- **["The Room" - One shot by Fable](https://www.reddit.com/r/singularity/comments/1uow9c8/the_room_one_shot_by_fable/)** (Activity: 683): Reddit 게시물은 **Fable**이 만든 **one-shot** 작품으로 설명된 **“The Room”** 영상을 보여준다. 하지만 연결된 Reddit-hosted media URL인 ([v.redd.it/68csn9fdulbh1](https://v.redd.it/68csn9fdulbh1))는 Reddit이 **HTTP `403 Forbidden`**을 반환해 외부 접근이 불가능했으므로 실제 미디어나 구현 세부사항은 검증할 수 없었다. 댓글들은 이 클립이 매우 상세한 continuous zoom 또는 scale-transition visualization임을 암시했고, 시청자들은 그런 디테일이 어떻게 생성됐는지 추측하며 *code/cost*를 물었다.
- **생성 파이프라인에 대한 궁금증**: 댓글들은 Fable의 one-shot video 제작 설정에 대해 기술적 호기심을 드러냈다. 특히 **prompt**, 암시된 production pipeline, 그리고 해당 장면 디테일을 달성하는 데 필요한 compute/code cost를 물었다.
- **줌 개념의 범위에 대한 지적**: 한 댓글은 “zoom inward” 개념을 quarks 너머로 확장하지 않은 점을 아쉬워했다. quarks가 가능한 가장 작은 구성 요소라는 확정된 물리 규칙은 없으므로 더 깊은 가설적 구조를 탐색할 수 있었다는 것이다.

### Less Technical AI Subreddits: 실무 워크플로와 에이전트 대시보드 속 Claude

- **[Claude meets Government Oversight 🫡🇺🇸](https://www.reddit.com/r/ClaudeAI/comments/1uobmts/claude_meets_government_oversight/)** (Activity: 744): OP는 **“Article One,” a Claude-powered multi-agent dashboard**를 만들고 있다. 이 대시보드는 의원 프로필, 지역구/캠페인 맥락, 직무 수행 지표, 캠페인 기부자 분석, 의회 사무실 지출/납세자 부담 운영을 집계하는 투명성 인터페이스를 목표로 한다. 프로젝트는 아직 공개되지 않았고, OP는 **weekly Claude usage limits** 때문에 repo/dashboard 공개가 지연되고 있다며 개발 속도를 높이기 위해 Claude Max 비용을 [Buy Me a Coffee](https://buymeacoffee.com/AJK28)로 후원받고자 한다고 밝혔다. 댓글들은 투명성 유스케이스를 강하게 지지했지만, AI 환각이나 오해의 소지가 있는 주장을 피하려면 모든 지표에 **verifiable sources, methodology, and auditability**가 필요하다고 강조했다.
- **검증 가능한 정치 지표의 필요성**: 댓글들은 Claude 기반 정부 투명성 도구가 모든 파생 통계에 **검증 가능한 인용과 방법론**을 가져야 한다고 강조했다. 특히 한 사용자가 하원의 `33%`가 “AOC보다 더 진보적”이라는 주장이 그럴듯하지 않아 보인다고 지적한 뒤 이런 우려가 커졌다. 핵심 기술적 우려는 환각되었거나 부실하게 출처가 붙은 정치 지표가 시스템을 유익하기보다 해롭게 만들 수 있다는 점이었다.
- **재정 및 이해상충 분석 기능 요청**: 실질적인 기능 요청은 공개 이력 요약을 넘어 **campaign-finance and conflict-of-interest analysis**로 확장하는 것이었다. 각 정치인을 누가 후원하는지, 재임 중 배우자/가족 자산이 어떻게 변하는지, 관련 당사자가 hedge fund나 투자 수단을 운영하는지, **AIPAC** 같은 단체의 기부가 투표 행동과 상관되는지를 분석해야 한다는 것이다. 이는 financial disclosures, campaign-contribution databases, voting records, 가족/사업 관계 entity-resolution의 구조화된 수집이 필요함을 뜻한다.
- **[Thank you anthropic. As a teacher claude cowork has been Godsend.](https://www.reddit.com/r/ClaudeAI/comments/1uox9uu/thank_you_anthropic_as_a_teacher_claude_cowork/)** (Activity: 688): 한 교사는 **Anthropic Claude**(“Claude cowork”)를 curriculum design, grading support, PowerPoint generation, student-grade data analysis에 사용하며, 업로드한 pedagogy documents와 lesson-planning workflow를 결합해 시간을 절약한다고 보고했다. 주요 요청 기능은 **personal account용 Microsoft 365 / OneNote connector**였다. 학교가 work/education Microsoft 365 tenant를 쓰지 않아 기존 수업 자료와의 통합이 제한되기 때문이다. 상위 댓글들은 구체적인 데이터 거버넌스 우려를 제기했다. 학생 이름, 성적, 식별 가능한 과제를 Claude에 업로드하는 것은 데이터가 익명화되거나 시스템이 승인되지 않았다면 학교 정책이나 데이터 보호 규칙을 위반할 수 있다는 것이다.
- **학생 데이터 프라이버시 위험**: 여러 댓글은 교육 환경에서 Claude를 사용할 때 **student-data privacy risks**에 초점을 맞췄다. 학생 이름이나 식별 가능한 맥락을 승인되지 않은 AI/work system에 입력하면 학교 정책을 위반하거나 징계를 받을 수 있다는 지적이다. 한 교사는 Year 11 essay feedback에 Claude를 써봤지만 *“scrubbing names and identifiers”*에 너무 많은 시간이 들어 생산성 이득이 줄거나 사라졌다고 말했다.
- **가벼운 보호장치 제안**: 제안된 완화책은 Claude에 학생 데이터 보호 지침을 명시하고, 학교 데이터 보호 정책을 업로드하며, 민감 정보를 감지하면 멈추도록 요청하는 것이었다. 댓글들은 이것이 **완전한 해결책은 아니지만**, 가벼운 guardrail로 작동할 수 있다고 강조했다. Claude에게 민감 데이터가 personalization에 필요할 때 privacy-preserving workflow나 workaround를 제안하게 할 수도 있다.
- **Microsoft 365 / PowerPoint 통합 수요**: 개인 계정을 쓰는 학교를 중심으로 더 긴밀한 **Microsoft 365 / PowerPoint integration**에 대한 관심도 있었다. 댓글들은 승인된 connector 부재가 workflow friction을 만들고 교사들을 수동 workaround로 밀어 넣어 시간 비용과 데이터 거버넌스 위험을 모두 키울 수 있다고 봤다.
- **[I feel like we're rapidly heading to a place where people have all sorts of local bespoke tools that are amazing and only for them](https://www.reddit.com/r/ClaudeAI/comments/1uopekl/i_feel_like_were_rapidly_heading_to_a_place_where/)** (Activity: 875): 게시물은 **AI-assisted “bespoke local tools”**라는 패턴이 커지고 있다고 관찰한다. 이는 한 사용자나 조직의 워크플로에 강하게 결합돼 있으며 일반화하거나 배포될 가능성은 낮지만 매우 유용한 개인/조직 전용 소프트웨어다. 댓글들은 깨지기 쉬운 개인 자동화 설정, custom workout/alarm apps, “vibecoding”으로 만든 niche-company **ERP** 등 일반 소프트웨어 개발 시장에서는 정당화되지 않을 사례를 들었다. 댓글들은 대체로 긍정적이었다. AI가 매우 작은 niche를 위한 소프트웨어 제작 비용을 낮추며, 결과물이 이전 가능하지 않거나 깨지기 쉽거나 제작자만 유지보수할 수 있더라도 가치가 있다는 것이다.
- **개인화됐지만 이전 불가능한 소프트웨어**: 여러 댓글은 로컬 AI-built software를 **highly personalized but non-transferable**로 묘사했다. 한 사용자는 자기 설정을 다른 사람이 건드리면 깨질 *“magic little box”*라고 표현했다. 기술적 함의는 많은 AI-generated tools가 maintainability, portability, onboarding, generalized product-market fit보다 개인 워크플로 최적화에 집중할 수 있다는 점이다.
- **niche ERP의 경제성**: 한 사용자는 “vibecoding”으로 niche company용 custom **ERP system**을 만들었다고 보고하며, AI-assisted development가 전통적 vendor나 developer market으로는 정당화되지 않을 소프트웨어를 경제적으로 가능하게 한다고 주장했다. 이는 재사용 가능한 SaaS를 만드는 것보다 좁은 운영 필요를 해결하는 데 ROI가 있는 내부 domain-specific tools로의 이동을 보여준다.
- **소규모 비즈니스 행정 업무 변화**: 다른 댓글은 **Claude**를 효과적으로 사용할 수 있는 운영자가 소규모 비즈니스의 행정 노동을 곧 대체할 수 있다고 예측했다. 이를 *“a team of administrators and interns”*라고 표현하고, 협업형 AI tooling을 고급 executive assistant와 비교했다. 핵심은 가치가 일반적인 “AI automation” 제품보다 LLM을 구체적 business administration workflow에 통합할 수 있는 직원에게 더 많이 돌아갈 수 있다는 점이다.

---

## AI Discord Recap

### 접근 종료

- **Discord 접근 종료**: Discord가 오늘 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 감사하며, 좋은 여정이었다.
