---
title: "DeepSeek-V4, 1M 컨텍스트(context) 공개"
summary:
  - "DeepSeek가 DeepSeek-V4 Pro·Flash 공개"
  - "1M 컨텍스트(context)·MIT 라이선스 적용"
  - "V4 API 가격, Flash가 초저가로 주목"
  - "OpenAI, GPT-5.5·Pro를 API에 통합"
  - "Anthropic, Claude Code 저하 원인 공개"
date: 2026-04-24
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-24-deepseek-v4.md"
hasHeadline: false
headline: "DeepSeek-V4, 1M 컨텍스트(context) 공개"
tags:
  - OpenAI
  - Codex
  - DeepSeek
isFeatured: false
---

## 헤드라인: DeepSeek-V4, 1M 컨텍스트(context) 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

DeepSeek가 **DeepSeek-V4 Pro**와 **DeepSeek-V4 Flash**를 공개하며 V3 이후 첫 주요 아키텍처 갱신을 단행했다. 두 모델 모두 **1M-token context**를 전면에 내세우고, 추론(reasoning) 모드와 비추론(non-reasoning) 모드를 함께 제공하는 하이브리드 구성을 취한다. 또한 **MIT license**로 공개돼 오픈 웨이트(open-weight) 생태계에서 재사용과 개조가 쉬워졌다는 점이 크게 주목받았다.

반응을 종합하면 “오픈 웨이트의 초장문 컨텍스트(long-context)와 에이전트형 코딩(agentic coding) 성능을 확실히 끌어올렸지만, 최상위 폐쇄형(closed) 프런티어 모델과의 격차는 남아 있다”는 평가가 사실상 공통분모였다. 독립 벤치마커들은 V4 Pro를 오픈 웨이트 상위권(대략 #2 티어 근처)으로 두는 경향이 있었고, 벤치마크와 모드에 따라 Kimi K2.6 / GLM-5.1 / 강한 Claude Sonnet급~Opus 근처로 비교되기도 했다.

기술적으로는 1M 컨텍스트를 현실적으로 운용하기 위한 KV-cache 엔지니어링이 핵심 하이라이트로 꼽혔다. 공유 KV 벡터(shared KV vectors), 압축 KV 스트림(compressed KV streams), 압축 토큰에 대한 스파스 어텐션(sparse attention), 인접 문맥을 위한 슬라이딩 윈도(sliding-window) 어텐션을 결합한 하이브리드 설계가 반복적으로 요약됐다. 여기에 혼합 정밀도(mixed precision) 체크포인트(FP4+FP8), 추론 모드(3가지) 노출, 그리고 Flash의 공격적인 가격이 “실사용 확산”에 더 직접적인 영향을 줄 수 있다는 관점도 많았다.

이번 릴리스는 “모델 공개”를 넘어서 vLLM 등 서빙(inference serving) 스택과 하드웨어(Blackwell 등), 로컬 실행(Apple Silicon/MLX 양자화(quantization))까지 포함한 풀스택 준비 정도가 곧 경쟁력이라는 흐름을 다시 한 번 부각시켰다.

주의: `## 헤드라인` 섹션에서 새로운 마크다운 링크를 추가하거나, 아래 Recap에 이미 있는 링크를 중복해서 다시 넣지 마세요.

---

## AI Twitter Recap

### Top Story: DeepSeek V4

### What happened

DeepSeek가 **DeepSeek-V4 Pro**와 **DeepSeek-V4 Flash**를 공개했다. 이는 V3 이후 첫 주요 아키텍처 리프레시(refresh)이자, 처음으로 명확한 2티어 라인업을 제시한 것이다. 두 모델은 **1M-token context**, 추론(reasoning)/비추론(non-reasoning) 하이브리드 모드, **MIT license**, 그리고 여러 연구자들이 올해 가장 중요하거나 가장 잘 쓴 모델 페이퍼 중 하나라고 부를 정도로 상세한 기술 리포트를 함께 내세웠다. 반응 전반의 사실상 합의는 “V4가 오픈 웨이트(open-weight) 장문 컨텍스트(long-context) 및 에이전트형 코딩(agentic coding) 성능을 실질적으로 끌어올렸지만, 전체적으로는 최상위 폐쇄형(closed) 프런티어 모델보다 다소 뒤처진다”는 것이었다. 독립 벤치마커들은 **V4 Pro를 오픈 웨이트 #2 티어 근처**(벤치마크/모드에 따라 **Kimi K2.6 / GLM-5.1 / 강한 Claude Sonnet급~Opus 근처**)로 두는 경향이 있었고, GPT-5.x / Opus 4.7에 얼마나 근접했는지, 또 이것이 “민주화(democratizing)” 진전인지 아니면 너무 복잡해 대부분의 오픈 연구소가 재현하기 어려운 아키텍처인지에 대해서는 의견이 갈렸다. 주요 소스로는 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953), [@scaling01](https://x.com/scaling01/status/2047618271310926151), [@nrehiew_](https://x.com/nrehiew_/status/2047665987730993363), [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2047646980139016560), [@TheZachMueller](https://x.com/TheZachMueller/status/2047702488418030066), [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2047664976215839021) 등의 딥다이브 코멘트와, [@vllm_project](https://x.com/vllm_project/status/2047843293447500069), [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047765637808664759), [@Togethercompute](https://x.com/togethercompute/status/2047743446522224987) 등의 인프라/벤더 포스트가 포함된다.

### Core facts and technical details

논의 전반에서 가장 구체적으로 반복된 기술적 주장들:

- **두 모델**
  - **V4 Pro:** **총 1.6T 파라미터 / 활성 49B**
  - **V4 Flash:** **총 284B / 활성 13B**
  - [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953), [@teortaxesTex](https://x.com/teortaxesTex/status/2047630981364883816), [@baseten](https://x.com/baseten/status/2047779549644243146), [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047765637808664759)에서 보고

- **컨텍스트**
  - [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)에 따르면 **1M tokens**(V3.2의 **128K**에서 증가)
  - 여러 포스터가 이를 핵심 성취로 프레이밍: “solid ultra-long context” [@teortaxesTex](https://x.com/teortaxesTex/status/2047623905754448043)

- **훈련 규모**
  - **32T–33T tokens**가 반복적으로 언급
  - [@nrehiew_](https://x.com/nrehiew_/status/2047666048334450754): **1.6T 파라미터**에 **32T tokens**, 즉 대략 **20 tokens/parameter**
  - [@teortaxesTex](https://x.com/teortaxesTex/status/2047630981364883816): **33T** 언급
  - [@nrehiew_](https://x.com/nrehiew_/status/2047840706874749076): 사전학습(pretraining) 연산량을 **~1e25 FLOPs**로 추정

- **추론(reasoning) / 모드**
  - [@Togethercompute](https://x.com/togethercompute/status/2047743446522224987)에 따르면 DeepSeek는 **세 가지 reasoning 모드**를 노출
  - “thinking/non-thinking” 하이브리드 포지셔닝은 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)에서도 언급

- **장문 컨텍스트(long-context) 아키텍처**
  - 여러 스레드에서 새로운 하이브리드 어텐션(attention) 시스템을 요약:
    - shared KV vectors
    - compressed KV streams
    - sparse attention over compressed tokens
    - local/sliding-window attention for nearby context
  - [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2047664976215839021)가 공개적으로 가장 간결한 요약을 제공:
    - 공유 key-value 벡터로 **2× KV 감소**
    - **c4a ≈ 4× compression**
    - **c128a ≈ 128× compression**
    - 압축 토큰에 대한 **top-k sparse attention**
    - **128-token sliding window**
    - **1M context KV cache = 9.62 GiB/sequence (bf16)**
    - DeepSeek V3.2의 **83.9 GiB** 대비 **8.7× 더 작음**
    - FP4 index cache + FP8 attention cache로 추가로 ~**2×** 감소
  - [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2047646980139016560)는 이를 “**10× smaller KV cache**”로 압축
  - [@TheZachMueller](https://x.com/TheZachMueller/status/2047702488418030066), [@TheZachMueller](https://x.com/TheZachMueller/status/2047702996524405175): **CSA + HCA** 레이어 패턴을 설명(교대로 배치), V4 Flash는 일부 구간에서 HCA 대신 sliding-window 레이어를 사용

- **양자화(quantization) / 체크포인트 형식**
  - [@LambdaAPI](https://x.com/LambdaAPI/status/2047654086263320965): 체크포인트는 **FP4 + FP8 혼합(mixed)**
    - **MoE expert weights는 FP4**
    - attention / norm / router는 **FP8**
    - 전체 모델이 단일 **8×B200** 노드에 적재된다는 주장

- **추론(inference) 하드웨어 / 서빙(serving)**
  - [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047765637808664759): **Blackwell Ultra**에서 V4 Pro가 에이전트 워크플로우에 **150+ TPS/user interactivity**를 제공 가능
  - [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047823093578518758): **vLLM**을 사용한 day-0 V4 Pro 퍼포먼스 파레토(pareto)를 공개
  - [@SemiAnalysis_](https://x.com/SemiAnalysis_/status/2047726025748930687): **H200, MI355, B200, B300, GB200/300** 전반의 day-0 지원 및 벤치마킹
  - [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047685898163147125): **256GB Mac**에서 **DeepSeek4-Flash**
  - [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047847095466385899): MLX quants 공개
  - [@simonw](https://x.com/simonw/status/2047844236142497850): 더 적은 RAM의 Mac에서도 가능한지 질문(관심은 크지만 지원 스토리는 미완)
  - [@QuixiAI](https://x.com/QuixiAI/status/2047765475937890474): 많은 로컬 스택이 아직 tensor parallel이 없어 V4급 모델이 추론 인프라를 강하게 압박한다는 점을 상기

- **라이선스 / 가용성 / 가격**
  - [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)에 따르면 **MIT license**
  - 1st-party API + 빠른 3rd-party 제공: [@Togethercompute](https://x.com/togethercompute/status/2047743446522224987), [@baseten](https://x.com/baseten/status/2047779549644243146), [@NousResearch](https://x.com/mr_r0b0t/status/2047673600900010044), [@Teknium](https://x.com/Teknium/status/2047798102091067677)
  - **V4 Pro 가격:** **입력/출력 1M 토큰당 $1.74 / $3.48**
  - **V4 Flash 가격:** **$0.14 / $0.28**
  - cache-hit 가격도 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)에서 언급
  - [@scaling01](https://x.com/scaling01/status/2047707820552831028): 이 가격은 미래의 “Mythos-level” 초저가 코딩 모델을 엿보게 한다는 관점
  - [@scaling01](https://x.com/scaling01/status/2047760776769720360)의 게시된 Reuters 인용: DeepSeek는 H2에 Huawei Ascend 950 슈퍼노드가 대규모로 배치되면 **Pro 가격이 급격히 하락할 수 있다**고 언급

### Independent evaluations and where V4 lands

가장 유용한 독립 벤치마크 종합은 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)에서 나왔다:

- **V4 Pro Max**: Artificial Analysis Intelligence Index **52**
  - **V3.2의 42**에서 **10점 상승**
  - **오픈 웨이트 reasoning 모델 #2**, **Kimi K2.6 (54)** 뒤
- **V4 Flash Max**: **47**
  - 강한 중~상위 오픈 모델 근처, “Claude Sonnet 4.6 max level intelligence”로 표현
- **GDPval-AA**(에이전트형 실전 작업)
  - **V4 Pro: 1554**, 오픈 웨이트 최상위
  - **Kimi K2.6 (1484)**, **GLM-5.1 (1535)**, **MiniMax-M2.7 (1514)**를 상회
- **AA-Omniscience**
  - **V4 Pro: -10**, V3.2 대비 11점 개선
  - 하지만 **hallucination rate 94%**와 함께 제시
  - **V4 Flash: hallucination rate 96%**
- **AA Index 실행 비용**
  - **V4 Pro: $1,071**
  - **V4 Flash: $113**
- **AA Index에서 사용된 출력 토큰**
  - **V4 Pro: 190M**
  - **V4 Flash: 240M**
  - 큰 주의점: 토큰 단가가 싸도, 모델이 과도한 토큰을 뿜으면 전체 작업 비용이 싸다고 말할 수 없다

추가적인 평가 관점:

- [@arena](https://x.com/arena/status/2047714237502677405):
  - 데뷔 시점 Text Arena 전체에서 **오픈 #2**
  - 카테고리 성적:
    - **#1 Medical & Healthcare**
    - **#15 Creative Writing**
    - **#18 Multi-Turn**
  - thinking variant:
    - **#8 Math**
    - **#9 Life/Physical/Social Science**
- [@arena](https://x.com/arena/status/2047774037204742255): **Pro vs Flash 트레이드오프** 강조
  - Pro는 순위가 약 **30계단 높음**
  - 비용은 **12× 더 비쌈**
  - Flash도 중국어/의학/수학에서 경쟁력
- [@scaling01](https://x.com/scaling01/status/2047682465624445015):
  - “~**Opus 4.5 추정**은 현재로선 유지, 적어도 SimpleBench에서는”
- [@scaling01](https://x.com/scaling01/status/2047733998714052819):
  - V4는 “GLM-5.1보다 확실히 낫지만 Opus 4.7, GPT-5.4, Gemini 3.1 Pro는 아니다”
- [@scaling01](https://x.com/scaling01/status/2047686712051048598): <6개월 격차를 확인해줄 점수로 다음을 나열
  - ARC-AGI-1 ~**75%**
  - ARC-AGI-2 ~**35%**
  - GSO ~**26%**
  - METR **4.5–5 hours**
  - WeirdML ~**63%**
- [@TheZachMueller](https://x.com/TheZachMueller/status/2047719857869791352):
  - 본인 eval에서 **Flash@max ≈ Pro@high(추론 과제)**
  - Pro는 지식(SimpleQA)에 더 집중
- [@VictorTaelin](https://x.com/VictorTaelin/status/2047818978664268071):
  - 벤치마크 버그 수정 및 장시간 러닝 모델에 더 오래 돌리자 **DeepSeek와 Kimi가 의미 있게 개선**
- [@mbusigin](https://x.com/mbusigin/status/2047707082007220393):
  - 구체적 근거 없는 초기 부정 인상
- [@petergostev](https://x.com/petergostev/status/2047773402090426548):
  - BullshitBench에서(능력이라기보다 거부/반발 행동), GPT-5.5가 기대보다 낮았다는 언급; 많은 독자가 eval 회의적 환경에서 V4를 비교하기 때문에 포함

### Facts / relatively well-supported claims

- 위 스펙대로 V4 Pro/Flash가 공개됐고, **MIT-licensed**, **1M context**, 공개 기술 문서를 제공한다: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953), [@TheZachMueller](https://x.com/TheZachMueller/status/2047626252425515240)
- 아키텍처는 KV-cache를 크게 줄이는 새로운 장문 컨텍스트 어텐션 시스템을 도입한다: [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2047664976215839021), [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2047646980139016560)
- 독립 벤치마커들은 V4 Pro를 오픈 웨이트 최상단에 가깝게 두되, 최상위 상용(proprietary) 모델보다 아래로 본다: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953), [@arena](https://x.com/arena/status/2047714237502677405), [@scaling01](https://x.com/scaling01/status/2047733998714052819)
- 일부 평가에서 DeepSeek V4는 토큰 사용량이 매우 크다: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)
- 체크포인트는 FP4/FP8 혼합 정밀도이며 8×B200 노드에 적재 가능하다는 주장이 있다: [@LambdaAPI](https://x.com/LambdaAPI/status/2047654086263320965)
- vLLM 및 여러 제공사를 통해 day-0에 빠른 생태계 지원이 들어왔다: [@vllm_project](https://x.com/vllm_project/status/2047843293447500069), [@SemiAnalysis_](https://x.com/SemiAnalysis_/status/2047726025748930687)

### Opinions / interpretation

- [@scaling01](https://x.com/scaling01/status/2047618271310926151), [@scaling01](https://x.com/scaling01/status/2047622501241434581), [@scaling01](https://x.com/scaling01/status/2047626000091971811)의 “V4는 프런티어 대비 ~4–5개월 뒤” 평가는 측정된 사실이라기보다 정보에 기반한 추정
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047616662879248828)의 “오픈 톱3” vs “프런티어에 가까운 유일한 오픈 모델” 논쟁은 벤치마크 신뢰와 프레이밍의 문제도 포함
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047630981364883816)의 “우리가 가진 가장 강한 사전학습(pretraining) 모델” 평가는 규모+아키텍처에 기대는 의견이며 직접적인 벤치마크 우위의 증거는 아님
- [@Dorialexander](https://x.com/Dorialexander/status/2047632551326413109)의 “올해 가장 의미 있는 AI 페이퍼” 평가는 열광에 가깝고, 합의는 아님
- [@scaling01](https://x.com/scaling01/status/2047643722108579936)의 “이게 연구가 가야 할 모습”은 성능뿐 아니라 투명성/문서 스타일을 말하는 것
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047840426371977467)의 “민주화 기술이 아니다”는 강한 아키텍처/정치적 해석

### Different opinions and fault lines

### V4는 프런티어에 근접했나, 아니면 분명히 뒤처졌나?

**더 우호적인 관점**
- [@scaling01](https://x.com/scaling01/status/2047618271310926151): 대략 **GPT-5.2 / Opus 4.5+ 티어**로 본다
- [@scaling01](https://x.com/scaling01/status/2047682465624445015): SimpleBench는 **~Opus 4.5**를 지지
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047630981364883816): 오픈 중 사전학습 기반이 가장 강하고, 사람들이 post-training 잠재력을 과소평가한다고 주장

**더 회의적인 관점**
- [@scaling01](https://x.com/scaling01/status/2047733998714052819): **Opus 4.7 / GPT-5.4 / Gemini 3.1 Pro**보다 아래
- [@scaling01](https://x.com/scaling01/status/2047622501241434581): 폐쇄형 연구소가 더 큰 모델과 더 넓은 과학/법/의학 커버리지, GB200 기반 더 빠른 추론을 갖춰 격차가 다시 벌어질 수 있다고 봄
- [@mbusigin](https://x.com/mbusigin/status/2047707082007220393): 초기 인상 “not great”
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047616897256947967): **K2.6, GLM 5.1** 같은 더 다듬어진 모델이 코딩에서는 체감이 더 좋을 수 있다고 언급

### V4의 진짜 기여는 모델 품질인가, 장문 컨텍스트 시스템 설계인가?

많은 기술 독자들은 **순수 벤치마크 순위보다 장문 컨텍스트 아키텍처가 더 중요**하다고 봤다.

- [@teortaxesTex](https://x.com/teortaxesTex/status/2047623905754448043): “They've completed their quest: Solid Ultra-Long Context”
- [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2047646980139016560): 장문 컨텍스트와 에이전트형 post-training이 처음으로 “만나는” 오픈 모델이라고 표현
- [@scaling01](https://x.com/scaling01/status/2047618271310926151): 다른 오픈 연구소들이 아키텍처 일부를 채택할 것으로 기대
- [@Dorialexander](https://x.com/Dorialexander/status/2047632551326413109): Huawei/주권(sovereignty) 제약을 하드웨어 및 메모리/인터커넥트 설계를 재구성할 기회로 프레이밍
- [@jukan05](https://x.com/jukan05/status/2047861732702662741): 페이퍼가 NVIDIA 하드웨어 로드맵이 MoE/장문 컨텍스트 모델의 방향성과 유난히 잘 맞는다는 증거로 읽힌다고 언급

### V4는 “오픈 민주화”인가, 아니면 너무 복잡해 복제하기 어려운가?

가장 날카로운 전략적 불일치 중 하나였다.

- [@teortaxesTex](https://x.com/teortaxesTex/status/2047840426371977467): 아키텍처가 너무 어려워 대부분의 연구소가 재현하기 힘들기 때문에 “민주화 기술이 아니다”라고 주장
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047648219081974034): DeepSeek조차 리팩터링 없이 같은 아키텍처를 또 하긴 싫어할 수 있다고 시사
- [@stochasticchasm](https://x.com/stochasticchasm/status/2047697372831183245): 하이퍼파라미터 복잡도가 벅차다고 언급
- 반대편으로, [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047685898163147125), [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047847095466385899)는 생태계가 이미 Flash를 로컬에 가까운 Apple Silicon 용도로 압축/적응시키고 있음을 보여주며(훈련이 아니라 추론 측면에서) “민주화가 아니다”라는 주장에 완화 효과를 줌

### Flash를 과소평가하고 있나?

여러 반응은 **실용적 채택에서는 Pro보다 Flash가 더 중요할 수 있다**고 시사한다.

- [@arena](https://x.com/arena/status/2047774037204742255): Flash가 가격/성능 프런티어를 이동
- [@TheZachMueller](https://x.com/TheZachMueller/status/2047719857869791352): Flash@max ≈ Pro@high(추론 과제)
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047864952862458009): 벤치마크가 “1M 컨텍스트를 푼돈에” 같은 가치를 과소평가할 수 있다고 언급
- [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047685898163147125): Flash가 **256GB Mac**에서 동작
- [@baseten](https://x.com/baseten/status/2047779549644243146), [@Togethercompute](https://x.com/togethercompute/status/2047743446522224987): 긴 문서 분석과 에이전트 사용 사례에서 Flash의 경제성이 중요하다고 강조

### China, chips, Huawei, and sovereignty context

DeepSeek V4는 “단순한 모델 릴리스”로만 논의되지 않았고, 더 큰 미중(US–China) 연산(compute) 및 주권(sovereignty) 논쟁의 증거로 다뤄졌다.

- [@scaling01](https://x.com/scaling01/status/2047625331339661685): 중국 연구소들이 모델로 더 나은 모델을 만드는 의미의 “takeoff”에 이미 들어갔거나 근접했지만, 여전히 **5+개월** 뒤처졌다고 봄
- [@scaling01](https://x.com/scaling01/status/2047622501241434581): 칩 제재가 시간이 갈수록 광범위 도메인에서 격차를 벌릴 가능성이 크다고 판단
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047608887616962992), [@teortaxesTex](https://x.com/teortaxesTex/status/2047631470664020211): Huawei를 단순 폄하하는 서사를 반박하며, 중국 내 Huawei에 대한 감정이 혼재돼 있음을 언급
- [@ogawa_tter](https://x.com/ogawa_tter/status/2047631993702363509): **Ascend 950** / A3 클러스터와 V4 배포 계획 분석을 가리킴
- [@Dorialexander](https://x.com/Dorialexander/status/2047632551326413109): Huawei를 둘러싼 주권 플레이가 하드웨어 아키텍처를 바꿀 수 있다고 주장
- [@scaling01](https://x.com/scaling01/status/2047760776769720360): **Ascend 950 슈퍼노드**가 H2에 규모화되면 가격이 급락할 수 있다는 DeepSeek 발언을 인용
- [@jukan05](https://x.com/jukan05/status/2047861732702662741): V4가 NVIDIA Blackwell/Rubin/HBM/인터커넥트 전략을 “검증”하는 것으로 해석
- [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047765637808664759), [@NVIDIAAI](https://x.com/NVIDIAAI/status/2047823093578518758): Blackwell day-0 성능을 강조하지만, 이는 벤더 프레이밍이지 독립적 전략 우위의 증거는 아님

더 이념적인 스레드도 있었다:
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047645676234846459), [@teortaxesTex](https://x.com/teortaxesTex/status/2047638436295725080), [@teortaxesTex](https://x.com/teortaxesTex/status/2047835420755415472): 서구 담론이 중국 연구소를 국가 대리인이나 distillation 상점으로 오독하기 쉽고, 실제로는 미션 지향적 진지한 행위자로 본다고 주장. 이는 해석적이지만, 릴리스가 감정적으로 격렬한 지정학 반응을 불러온 이유를 설명하는 데 도움

### Distillation, training data, and data quality

반복적으로 깔린 질문: V4는 주로 아키텍처 혁신의 산물인가, 아니면 비판자들이 “distillation”로 치부할 수 있는가?

- [@yacineMTB](https://x.com/yacineMTB/status/2047628416514486661): 중국 distillation 불평의 일부는, 사람들이 자신들이 더 뛰어난 성능에 의해 뒤처졌음을 발견한 데서 올 수도 있다고 추측
- [@cloneofsimo](https://x.com/cloneofsimo/status/2047628636933812301): “Very interesting... given they distilled claude 🤔🤔”
- [@kalomaze](https://x.com/kalomaze/status/2047762970931827125): DeepSeek가 DeepSeek reasoning trace로 훈련한다는 농담
- 좀 더 실질적인 측면에서, [@teortaxesTex](https://x.com/teortaxesTex/status/2047614729145745623)는 DeepSeek의 글 품질(특히 중국어)이 데이터 클린니스(data cleanliness)에 대한 오랜 집착을 반영한다고 말하며, 채용 공고를 인용 [@teortaxesTex](https://x.com/teortaxesTex/status/2047614852055683103), [@teortaxesTex](https://x.com/teortaxesTex/status/2047614975447855485)
- [@nrehiew_](https://x.com/nrehiew_/status/2047666048334450754): 리포트는 표준 카테고리 외 사전학습 데이터에 대한 상세가 여전히 부족하다고 지적
- 전체적으로 이 트윗 묶음에서 공개적으로 확인 가능한 근거는 “DeepSeek가 대규모로 훈련하며 데이터 작업이 강하다”는 쪽을 지지하지만, 외부 distillation 정도에 대한 강한 주장을 뒷받침하는 사실은 아니라는 수준(대부분 추측)

### Architecture lineage and prior art

여러 연구자가 V4가 무(無)에서 갑자기 나온 것이 아니라고 지적했다.

- [@jaseweston](https://x.com/jaseweston/status/2047690308217926055): DeepSeek가 2021년 ParlAI 접근에서 **hash routing**을 사용한다고 언급
- [@suchenzang](https://x.com/suchenzang/status/2047772636881842629): routing-induced outlier를 비판하며 hashing에 대한 농담 섞인 비판
- [@teortaxesTex](https://x.com/teortaxesTex/status/2047844368883581404): Mixtral 스타일 MoE가 이전에 합리적 해킹이었지만, **DSMoE**가 판을 바꿨다고 주장
- [@art_zucker](https://x.com/art_zucker/status/2047619111082172548): MoE를 막다른 길(dead end)로 공격
- [@gabriberton](https://x.com/gabriberton/status/2047835467551547587): MoE는 투박하지만 효과가 증명됐다고 반박
- [@stochasticchasm](https://x.com/stochasticchasm/status/2047874903236645108): 더 긍정적으로 “MoEs are amazing”

이는 V4가 단지 더 강한 체크포인트가 아니라, **오픈 장문 컨텍스트 MoE의 새로운 설계점(design point)**일 수 있다는 관점을 강화했다.

### Why the technical report itself mattered

모델 성능뿐 아니라 페이퍼/리포트의 품질 자체에 대한 칭찬이 유난히 많았다.

- [@scaling01](https://x.com/scaling01/status/2047618271310926151): “the technical paper is a big deal”
- [@Dorialexander](https://x.com/Dorialexander/status/2047632551326413109): “most significant AI paper of the year”
- [@morqon](https://x.com/morqon/status/2047643246923325833): “one of the best I’ve ever read”
- [@scaling01](https://x.com/scaling01/status/2047643722108579936): “this is what research should look like”
- [@TheZachMueller](https://x.com/TheZachMueller/status/2047626249116303561), [@iamgrigorev](https://x.com/iamgrigorev/status/2047641600591794546), [@nrehiew_](https://x.com/nrehiew_/status/2047665987730993363): 리포트를 소화·검증하기 위해 비정상적으로 높은 노력을 들였다는 시그널

전문가 독자 입장에서는, 최근 프런티어 릴리스가 빈약한 기술 공개와 함께 나오는 경우가 많기 때문에 이 점이 중요하다. V4의 리포트는 “진지한 오픈 릴리스가 어떤 모습이어야 하는가”에 대한 기대치를 재설정한 것으로 보인다는 평가다.

### Practical limitations and caveats

열광에도 불구하고 여러 한계/주의점이 반복됐다:

- **전체 능력(aggregate capability)에서 폐쇄형 프런티어보다 여전히 뒤처짐**
  - 특히 과학/법/의학 및 광범위한 “general domains”에서, [@scaling01](https://x.com/scaling01/status/2047622501241434581)
- **추론 RL이 덜 다듬어졌을 수 있음**
  - [@scaling01](https://x.com/scaling01/status/2047618271310926151): V3.2 Speciale 대비 reasoning efficiency가 크게 바뀌지 않았다고 언급
- **서빙(serving)은 여전히 어려움**
  - [@scaling01](https://x.com/scaling01/status/2047643015859118167): 많은 연구소가 **20–30 tok/s** 수준과 제한된 동시성(concurrency)으로 서빙하며, eval 실행에 하루가 걸릴 수 있다고 언급
  - [@ClementDelangue](https://x.com/ClementDelangue/status/2047664153439989823): HF에서 concurrency 병목을 인정
- **높은 토큰 사용량**
  - 핵심 실무적 주의점으로 [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953)
- **API 컨트롤**
  - [@stochasticchasm](https://x.com/stochasticchasm/status/2047717161070989499): DeepSeek API가 sampler control을 허용하지 않는 것으로 보인다고 언급
- **채택 가능성(adoptability)**
  - [@teortaxesTex](https://x.com/teortaxesTex/status/2047840426371977467): 너무 복잡해 많은 연구소가 깔끔하게 복제하기 어렵다고 주장

### Broader implications

세 가지 함의가 두드러졌다.

- **오픈 웨이트 장문 컨텍스트는 더 이상 마케팅만이 아니다.**  
  V4의 가장 큰 기여는, 오픈 웨이트 모델에서 **1M 컨텍스트를 운영적으로 그럴듯하게(operationally credible)** 만들 수 있음을 KV-cache 엔지니어링과 오픈 추론 지원을 통해 보여줬다는 점일 수 있다. 그래서 여러 포스터가 벤치마크 점수보다 시스템 설계에 더 집중했다: [@ben_burtenshaw](https://x.com/ben_burtenshaw/status/2047646980139016560), [@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2047664976215839021), [@scaling01](https://x.com/scaling01/status/2047618271310926151).

- **중국의 상위 연구소들은 오픈 모델에서 경쟁력을 유지한다(폐쇄형 격차를 완전히 닫진 못하더라도).**  
  [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2047735160544841953), [@arena](https://x.com/arena/status/2047714237502677405), [@scaling01](https://x.com/scaling01/status/2047733998714052819)의 벤치마크 그림은, 중국 연구소들이 오픈 웨이트 톱티어의 상당 부분을 장악하고 있음을 시사한다: **Kimi, GLM, DeepSeek, 그리고 곧 MiMo**.

- **“오픈”의 기준이 체크포인트 공개에서 풀스택 공동 설계(co-design)로 올라가고 있다.**  
  V4는 즉시 **vLLM**, **Blackwell**, **MLX quants**, **Mac viability**, **Ascend clusters**, 그리고 cache/memory 아키텍처와 함께 논의됐다. 즉 “모델”은 점점 더 추론 서브스트레이트(inference substrate)와 분리하기 어려워지고 있다.

---

### Infrastructure, inference, and local/open ecosystem

- Hugging Face가 ML 업무용 오픈소스 CLI “AI 인턴”인 **ML Intern**을 런칭했다. 논문 리서치, 코드 작성, 실험 실행, HF dataset/job 사용, GitHub 검색, 최대 **300 steps** 반복이 가능하다는 내용으로, [@MillieMarconnni](https://x.com/MillieMarconnni/status/2047639632859500691)에서 언급됐다. 관련 감상으로 HF의 **$9 Pro** 티어가 가치가 크다는 의견이 [@getpy](https://x.com/getpy/status/2047602009998794820)에서 나왔다.
- Meta는 Meta AI 및 에이전트 시스템을 수십억 사용자로 확장하기 위해 컴퓨트 포트폴리오에 **수천만 개의 AWS Graviton 코어**를 추가하겠다고 밝혔다: [@AIatMeta](https://x.com/AIatMeta/status/2047647617681957207)
- 로컬/오픈 코딩 스택 모멘텀도 유지:
  - [@julien_c](https://x.com/julien_c/status/2047647522173104145): MacBook Pro에서 llama.cpp로 **Qwen3.6-27B**를 돌리면 많은 코딩 작업에서 최신 Opus와 가깝게 느껴진다고 언급
  - [@p0](https://x.com/p0/status/2047794814104862843): **Pi + Ollama + Gemma 4 + Parallel web search MCP**로 만든 무료 CLI 에이전트
  - [@Prince_Canuma](https://x.com/Prince_Canuma/status/2047693737950670940): DeepSeek V4 quants가 곧 나온다고 언급
  - [@QuixiAI](https://x.com/QuixiAI/status/2047765475937890474): **llama.cpp / Ollama / LM Studio는 tensor parallel을 지원하지 않는다**는 점을 상기시키며, 진지한 멀티 GPU 서빙 유저는 **vLLM**로 이동할 수밖에 없다고 언급
- Nous/Hermes도 다수 업데이트:
  - Hermes Agent **v0.11.0**: React TUI 재작성, 대시보드 플러그인, 테마, 더 많은 추론 제공사, 이미지 백엔드, QQBot 지원 등: [@WesRoth](https://x.com/WesRoth/status/2047646749427216385)
  - Hermes가 **DeepSeek V4**와 **GPT-5.5**에 대해 빠른 지원과 칭찬을 받았다는 내용: [@mr_r0b0t](https://x.com/mr_r0b0t/status/2047673600900010044), [@Teknium](https://x.com/Teknium/status/2047791512210293067)
  - Hermes를 OpenClaw 대비 학습 루프, 메모리, 모델 지원, 배포 유연성, 보안 측면에서 호평: [@JulianGoldieSEO](https://x.com/JulianGoldieSEO/status/2047699587788361844), [@LoicBerthelot](https://x.com/LoicBerthelot/status/2047690512199540959)
  - **bubblewrap + cgroups v2** 기반 Deep Agents용 네이티브 리눅스 샌드박스 백엔드 공개: [@nu_b_kh](https://x.com/nu_b_kh/status/2047775326412136574)

### Research papers and benchmarks

- On-policy distillation 토큰 선택:
  - [@TheTuringPost](https://x.com/TheTuringPost/status/2047617791709282405): 일부 토큰만이 대부분의 학습 신호를 담고 있어 **~50%** 토큰만 써도 전체 훈련과 같거나 더 좋아질 수 있고, 메모리를 **~47%** 절감할 수 있으며, 심지어 **<10%**를 “확신하지만 틀린(confident-wrong) 토큰”에 집중해도 전체 훈련에 거의 근접할 수 있다는 페이퍼를 소개
- Google Research의 ICLR 데모들:
  - **MesaNet**(트랜스포머 대안/선형 시퀀스 레이어, 고정 메모리에서 in-context learning 최적화): [@GoogleResearch](https://x.com/GoogleResearch/status/2047630714145776053)
  - 로보틱스/3D 추론 및 효율적 트랜스포머 작업: [@GoogleResearch](https://x.com/GoogleResearch/status/2047675181808730197)
  - “reasoning can lead to honesty” 데모: [@GoogleResearch](https://x.com/GoogleResearch/status/2047704802163892576)
- MIT **Hyperloop Transformers**: 루프드(looped) 블록과 일반 트랜스포머 블록을 섞어 파라미터를 ~**50%** 줄이면서도 240M/1B/2B에서 일반 트랜스포머보다 성능이 좋았다고 소개: [@TheTuringPost](https://x.com/TheTuringPost/status/2047720038342476187)
- “Learning mechanics”: 딥러닝 동역학(dynamics) 이론을 합성하려는 시도: [@learning_mech](https://x.com/learning_mech/status/2047723849874330047)
- 툴/에이전트 시스템 페이퍼:
  - **Tool Attention Is All You Need**: 다이내믹 게이팅(dynamic gating)과 레이지 스키마 로딩(lazy schema loading)으로 툴 토큰을 **95% 감소**(47.3k → 2.4k/turn)시킨다는 주장: [@omarsar0](https://x.com/omarsar0/status/2047725276851994639)
  - 장기 지평 구조화 메모리 **StructMem**: [@dair_ai](https://x.com/dair_ai/status/2047740873027543228)
  - 변화하는 사용자 선호를 다루는 장기 지평 개인화 벤치 **HorizonBench**: [@StellaLisy](https://x.com/StellaLisy/status/2047645651324821998)
- 소프트웨어 엔지니어링에서의 clarifying questions:
  - [@gneubig](https://x.com/gneubig/status/2047623214583492797): 명확화 질문을 하도록 특화 훈련된 모델이, 더 적은 질문으로도 결과를 개선한다는 작업을 공유

### GPT-5.5 rollout and coding agents

- OpenAI가 **GPT-5.5**와 **GPT-5.5 Pro**를 **1M context window**와 함께 API 및 생태계 제품에 반영했다: [@OpenAI](https://x.com/OpenAI/status/2047743592278745425), [@OpenAIDevs](https://x.com/OpenAIDevs/status/2047742589982654915)
- Cursor, GitHub Copilot, Codex/OpenAI API, OpenRouter, Perplexity, Devin, Droid, Fleet, Deep Agents 등으로 즉시 확산:
  - [@cursor_ai](https://x.com/cursor_ai/status/2047744579127185843): GPT-5.5가 CursorBench에서 **72.8%**로 1위
  - [@cline](https://x.com/cline/status/2047769312514257148): Terminal-Bench에서 **82.7**로 **#1**
  - [@OpenAIDevs](https://x.com/OpenAIDevs/status/2047772632150675593): Perplexity Computer가 복잡 작업에서 **56% fewer tokens**
  - [@scaling01](https://x.com/scaling01/status/2047818395970904229): GPT-5.5 medium이 LisanBench에서 비추론 모델 중 최강이 되었고, GPT-5.4 medium 대비 **45.6% fewer tokens**로 더 높은 점수를 냈다고 언급
- 사용자 피드백은 일부 eval에 대한 감정이 엇갈리는 와중에도 **코딩 품질과 토큰 효율 개선**으로 모였다:
  - [@almmaasoglu](https://x.com/almmaasoglu/status/2047745168141324559): LLM이 쓴 코드 중 최고, 덜 장황하고 덜 방어적
  - [@KentonVarda](https://x.com/KentonVarda/status/2047788670728495142): 6년 전 코멘트에서 나온 Cap’n Proto RPC 코너 케이스를 잡아냈다고 언급
  - [@willdepue](https://x.com/willdepue/status/2047783399826292969): eval은 실망이었지만 Codex에서는 복잡 기술 프로젝트에서 인상적이었다고 언급
  - [@omarsar0](https://x.com/omarsar0/status/2047768166126809512): “effort calibration”이 좋아져 Claude Code에서 Codex/GPT-5.5로 매끄럽게 전환했다고 언급
- Cursor는 **/multitask** 비동기 서브에이전트와 멀티 루트 워크스페이스도 출시: [@cursor_ai](https://x.com/cursor_ai/status/2047764651363180839)
- 미세한 품질 차이보다 **한도(limits)와 경제성(economics)**이 더 중요해지고 있다는 관점:
  - [@nrehiew_](https://x.com/nrehiew_/status/2047839351380537357): 프런티어 델타보다 사용량 캡(caps)이 더 중요해졌다고 주장
  - [@HamelHusain](https://x.com/HamelHusain/status/2047763070022479882): Codex 구독 구조 때문에 사용하지 않기가 어렵다고 언급

### Industry moves, funding, and policy

- Google이 Anthropic에 최대 **$40B** 투자 계획이 있다는 보도: [@FT](https://x.com/FT/status/2047715653553942997) 및 [@zerohedge](https://x.com/zerohedge/status/2047704883982180609). 반응은 Anthropic의 컴퓨트 커밋 규모가 얼마나 커졌는지에 집중
- Cohere와 Aleph Alpha가 **Canada/Germany sovereign AI partnership**을 발표. 엔터프라이즈 등급, 프라이버시/보안 중심으로 프레이밍: [@cohere](https://x.com/cohere/status/2047631725426000268), [@aidangomez](https://x.com/aidangomez/status/2047651054381052086), [@nickfrosst](https://x.com/nickfrosst/status/2047704679878996253#m)
- ComfyUI가 **$500M valuation**에서 **$30M**을 조달, 오픈/로컬 포지셔닝 유지: [@yoland_yan](https://x.com/yoland_yan/status/2047731043000627263)
- Mechanize가 **$500M post-money valuation**에서 **$9.1M** 조달: [@MechanizeWork](https://x.com/MechanizeWork/status/2047732999878529037)
- Arcee AI가 Cody Blakeney를 연구 책임자로 영입(오픈 웨이트 미국 프런티어 모델 강조): [@code_star](https://x.com/code_star/status/2047765768658702467)
- 안전/거버넌스:
  - OpenAI가 GPT-5.5를 위한 **Bio Bug Bounty**를 발표: [@OpenAINewsroom](https://x.com/OpenAINewsroom/status/2047670970526175310)
  - Anthropic이 **Project Deal**을 런칭(Claude가 직원 대신 협상하는 마켓플레이스)하고, 모델 품질 비대칭과 정책 과제를 강조: [@AnthropicAI](https://x.com/AnthropicAI/status/2047728360818696302)

### Creative AI and multimodal

- GPT Image 2 + Seedance 2 워크플로우가 계속 주목:
  - [@_OAK200](https://x.com/_OAK200/status/2047616640448078167), [@awesome_visuals](https://x.com/awesome_visuals/status/2047609881104953658): 고충실도 이미지→비디오 파이프라인 시연
  - [@BoyuanChen0](https://x.com/BoyuanChen0/status/2047738501647728937): 실험적 API로 **2K/4K** 이미지가 이미 가능하며 적극적인 수정이 진행 중이라고 언급
- Kling이 네이티브 **4K output**과 **$25k** 단편 영화 콘테스트를 발표: [@Kling_ai](https://x.com/Kling_ai/status/2047676942317678879)
- 평가 관점의 뉘앙스:
  - [@goodside](https://x.com/goodside/status/2047728776520298646): GPT Images 2.0이 “그럴듯한” 루빅스 큐브 상태를 렌더링할 수 있다고 언급(의외로 어려운 과제)
  - [@venturetwins](https://x.com/venturetwins/status/2047820435543437630): 최근 이미지/비디오 성능 상승을 개인화된 게임 같은 콘텐츠 생성으로 가는 큰 단계로 프레이밍

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

### Deepseek V4 and Related Releases

- **[Deepseek V4 AGI comfirmed](https://www.reddit.com/r/LocalLLaMA/comments/1suolda/deepseek_v4_agi_comfirmed/)** (Activity: 1138): 이미지가 밈(meme)이며 기술적 내용은 없다. 제목 “Deepseek V4 AGI confirmed”는 AGI 관련 과장/유머를 암시하고, 댓글도 uncensored 데이터셋이나 군사 적용 같은(대체로 진지하지 않은) 언급을 통해 풍자 톤을 강화한다. 전반적으로 진지한 기술 토론보다는 회의/유머에 가깝다.
  - **UserXtheUnknown**: Deepseek V4 테스트 시나리오를 언급하며, 모델이 문제를 과하게 곱씹는(overthink) 경향이 있고 ‘using only one knife’ 같은 제약을 선택 사항이 아니라 필수로 해석해 문제 풀이에 영향을 준다고 지적. 이는 제약 조건을 정교하게 다루는 장점이지만, 암묵적 지시를 처리하는 개선 여지도 시사

- **[Deepseek V4 Flash and Non-Flash Out on HuggingFace](https://www.reddit.com/r/LocalLLaMA/comments/1su3hdo/deepseek_v4_flash_and_nonflash_out_on_huggingface/)** (Activity: 1393): **DeepSeek V4**가 [HuggingFace](https://huggingface.co/collections/deepseek-ai/deepseek-v4)에 공개됐다. 두 모델은 **DeepSeek-V4-Pro**(`1.6T parameters`, `49B` activated)와 **DeepSeek-V4-Flash**(`284B parameters`, `13B` activated)로 구성되며, `one million tokens` 컨텍스트 길이를 지원한다. **MIT license**로 배포되어 광범위한 사용/수정이 가능하다는 점도 강조됐다. 댓글에서는 이런 대형 모델을 다룰 때 특히 RAM 등 하드웨어 한계가 문제라는 지적이 있었고, 모델 크기 관리를 위한 `0.01bit quantization` 같은 아이디어도 언급됐다.
  - DeepSeek-V4-Pro(1.6T/49B 활성)와 Flash(284B/13B 활성)의 거대한 규모, 그리고 1M 토큰 컨텍스트가 대규모 입력/복잡 과제 처리에 갖는 의미를 강조
  - `0.01-bit quantization`에 대한 관심은 성능을 유지하면서 모델 크기와 연산 요구량을 낮추려는 문제의식을 반영
  - MIT license 선택은 커뮤니티 협업과 통합을 촉진할 수 있다는 해석

- **[Buried lede: Deepseek v4 Flash is incredibly inexpensive from the official API for its weight category](https://www.reddit.com/r/LocalLLaMA/comments/1su5gj5/buried_lede_deepseek_v4_flash_is_incredibly/)** (Activity: 404): 이미지가 "deepseek-v4-flash"와 "deepseek-v4-pro"를 비교하며, Flash가 입력/출력 토큰 비용 측면에서 훨씬 저렴하다고 강조한다. 저렴함에도 JSON 출력, tool calls, chat prefix completion, non-thinking/thinking 모드 등 기능을 지원한다고 소개된다. 다만 일부 댓글은 파라미터 스케일을 고려하면 과거 버전 대비 오히려 비싸다고 주장하며, “V3.2가 파라미터당 더 쌌다”는 식의 반론도 있다. GPU 공급난이 가격에 영향을 주며, 생산이 늘면 가격이 떨어질 수 있다는 관측도 함께 나온다.
  - DistanceSolar1449: DeepSeek V3.2가 `671b`에서 입력/출력 `$0.26/0.38`이었고 V4 Flash는 `284b`에서 `$0.14/$0.28`이므로, 선형 스케일 기준으로는 Flash가 더 비싸 보인다고 지적
  - jwpbe: `14 cents in / 28 cents out`는 Minimax 2.7 대비 `3x` 저렴하고, Qwen 동급은 더 비싸며 Trinity Thinking Large는 2배 비싸다고 비교
  - Worried-Squirrel2023: Huawei 실리콘과 Ascend 공급을 엮어, NVIDIA 마진을 Ascend 공급으로 교환하는 가격 전략일 수 있고 `950 supernodes` 규모화 이후 오픈 웨이트 티어에서 언더컷할 수 있다고 관측

- **[Deepseek has released DeepEP V2 and TileKernels.](https://www.reddit.com/r/LocalLLaMA/comments/1ste9zs/deepseek_has_released_deepep_v2_and_tilekernels/)** (Activity: 396): **Deepseek**가 **DeepEP V2**와 **TileKernels**를 공개했다. DeepEP V2는 효율/정확도 개선에 초점을 맞추고, TileKernels는 선형 스케일링(linear scaling)을 주장하는 새로운 병렬화 기법을 소개한다(연산 자원을 2배로 늘리면 처리 속도도 2배로 늘어난다는 의미). 오픈소스로 공개되어 투명성과 협업을 촉진한다는 평가가 붙었다. 자세한 내용은 [DeepEP V2 pull request](https://github.com/deepseek-ai/DeepEP/pull/605)와 [TileKernels repository](https://github.com/deepseek-ai/TileKernels)를 참고하라고 안내됐다. 댓글 중에는 Deepseek가 OpenAI가 하길 기대했던 역할(연구 공유)로 선의를 쌓고 있다는 평가와, 정말로 선형 스케일링이 맞는지(맞다면 큰 돌파구) 의문을 제기하는 반응이 함께 있었다.
  - DeepSeek의 DeepEP V2/TileKernels가 병렬화 측면에서 의미 있을 수 있으며, “선형 스케일링”이 사실이라면 훈련/추론 효율에서 큰 개선이 될 수 있다는 추측
  - SM100, Blackwell 등 하드웨어 사용(예: Vast.ai의 B200 임대) 가능성을 두고 추정이 나오며, 하드웨어 선택이 성능/역량에 영향을 줄 수 있다는 관측
  - 다음 모델(v4)의 혁신 요소로 Engram, mHC 통합 가능성이 언급되며, 신규 데이터셋이 성패를 좌우할 수 있다는 의견

### Qwen 3.6 Model Performance and Benchmarks

- **[This is where we are right now, LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1suqfba/this_is_where_we_are_right_now_localllama/)** (Activity: 1755): 비행기 모드에서도 MacBook Pro에서 Llama.cpp로 Qwen3.6 27B를 돌리는 모습을 보여주며, 복잡한 AI 모델을 로컬에서 실행할 수 있음을 강조한다. 이는 클라우드와 독립적으로 작동하는 로컬 모델이 효율/보안/프라이버시/주권(sovereignty)에 기여할 수 있음을 시사한다. 다만 댓글에서는 Qwen3.6-27B의 역량을 과장했다는 회의가 있으며, Sonnet/Opus 같은 상위 모델과 동일선상 비교는 부정확하다는 지적도 있다. 과도한 과장이 사용자 실망과 LLM 커뮤니티에 대한 반발을 낳을 수 있다는 우려가 나온다.
  - **ttkciar**: 에이전트형 코드 생성에는 좋지만 Sonnet/Opus급은 아니며, 과대홍보는 커뮤니티 전체의 반발로 이어질 수 있다고 우려
  - **sooki10**: 로컬 코딩에 유용하지만 Opus와의 비교는 오해를 부를 수 있어, 더 정확한 벤치마킹/커뮤니케이션이 필요하다고 지적
  - **Melodic_Reality_646**: 128GB RAM m5max 같은 하이엔드 설정과 더 접근 가능한 설정 간 격차를 지적하며, 하드웨어 한계를 고려하지 않으면 인식이 왜곡될 수 있다고 언급

- **[DS4-Flash vs Qwen3.6](https://www.reddit.com/r/LocalLLaMA/comments/1sub71w/ds4flash_vs_qwen36/)** (Activity: 470): DS4-Flash Max와 Qwen3.6( `35B-A3B`, `27B`)의 벤치마크 비교 이미지가 공유됐다. DS4-Flash Max가 전반적으로 우세하며 특히 'LiveCodeBench', 'HLE'에서 강하다는 점이 부각된다. 댓글에서는 Qwen3.6의 더 큰 모델(`122B`) 가능성과, `1M token context` 같은 특성이 'omniscense' 같은 다른 벤치마크에 영향을 줄 수 있다는 점이 언급된다. 반면 DS4-Flash가 훨씬 큰 규모(284B)임에도 점수 차이가 작아 효율 대 스케일의 논쟁도 발생한다.
  - **Rascazzione**: Qwen 3.6의 1M 컨텍스트 지원은 큰 도약이며 문서 요약/복잡 대화 같은 과제에 중요할 수 있다고 언급
  - **LinkSea8324**: DS4-Flash 284B vs Qwen 27B의 크기 차이가 효율·자원·추론 속도 관점의 trade-off를 부각
  - **madsheepPL**: 벤치마크 개선은 비선형이며, 점수 차이가 작아도 실무 영향은 더 클 수 있다고 강조

- **[Qwen 3.6 27B Makes Huge Gains in Agency on Artificial Analysis - Ties with Sonnet 4.6](https://www.reddit.com/r/LocalLLaMA/comments/1strodp/qwen_36_27b_makes_huge_gains_in_agency_on/)** (Activity: 964): **Qwen 3.6 27B**가 Artificial Analysis의 **Agentic Index**에서 **Sonnet 4.6**과 동률을 기록했고, **Gemini 3.1 Pro Preview**, **GPT 5.2/5.3**, **MiniMax 2.7** 등을 앞섰다고 주장된다. 전 지표에서 개선이 보이지만, **Coding Index**는 **Terminal Bench Hard**, **SciCode** 같은 다소 비주류 벤치마크 의존으로 인해 개선이 덜 두드러진다고 언급된다. 학습 초점이 **OpenClaw/Hermes**용 에이전트 활용에 맞춰진 것으로 보이며, 더 작은 모델이 프런티어에 접근할 수 있음을 보여준다는 평가가 나온다. 곧 나올 **Qwen 3.6 122B**에 대한 기대도 크다. 다만 일부는 이런 개선이 본질적 역량이라기보다 'benchmaxxing'일 수 있다고 회의한다.
  - Iory1998: Qwen 3.6 27B가 작년의 670B 모델을 앞선다는 점을 강조하며, RTX 3090+RTX 5070ti에서 Q8을 170K로 돌리고 KV cache FP16으로 40GB VRAM을 썼다고 언급
  - AngeloKappos: M2에서 Qwen3-30b-a3b를 돌린 경험을 공유하며 멀티스텝 tool call 처리가 괜찮았다고 평가, 122B가 나오면 API 제공사에 위협이 될 수 있다고 관측
  - Velocita84: 성능 향상이 benchmaxxing일 수 있다는 문제제기를 하며, 주장 검증이 필요하다고 시사

- **[Compared QWEN 3.6 35B with QWEN 3.6 27B for coding primitives](https://www.reddit.com/r/LocalLLaMA/comments/1styxdy/compared_qwen_36_35b_with_qwen_36_27b_for_coding/)** (Activity: 491): MacBook Pro M5 MAX(`64GB` RAM)에서 **QWEN 3.6**의 `35B`와 `27B`를 비교. `35B`는 `72 TPS`, `27B`는 `18 TPS`를 기록했으며, 속도는 느려도 `27B`가 코딩 결과의 정확성이 더 높았다는 요지다. 테스트는 외부 라이브러리 없이 단일 HTML 파일로 움직이는 자동차+패럴랙스 효과를 구현하는 과제였다. 모델 호스팅은 [Atomic.Chat](http://Atomic.Chat)로 했고, 소스 코드는 [GitHub](https://github.com/AtomicBot-ai/Atomic-Chat)에 공개돼 있다. 댓글에서는 `Qwen 3.6 27B FP8`이 opencode로 약 `52 seconds` 걸렸다는 언급과, `Qwen 3.5 27B Q3`와의 시각적 비교가 공유됐다.
  - 'sacrelege': FP8로 Qwen 3.6 27B를 돌려 과제 수행에 약 52초가 걸렸다고 공유(정밀도 조정이 성능에 큰 영향을 준다는 맥락)
  - 'nikhilprasanth': Qwen 3.5 27B Q3의 시각 비교를 제공하며 버전/양자화 비교 관심을 보여줌
  - 'Technical-Earth-3254': 테스트에서 어떤 quantization을 썼는지 질문(크기/속도/정확도 trade-off 이해에 중요)

- **[Qwen 3.6 27B is a BEAST](https://www.reddit.com/r/LocalLLaMA/comments/1steip4/qwen_36_27b_is_a_beast/)** (Activity: 1239): RTX 5090(`24GB VRAM`)과 고사양 노트북에서 **Qwen 3.6 27B**가 **pyspark/python** 데이터 변환 디버깅에 효과적이었다는 पोस्ट. 사용자는 llama.cpp에서 `q4_k_m`을 `q4_0`로 사용했고, `IQ4_XS`를 `200k q8_0`로 추가 최적화를 탐색 중이라고 한다. speculative decoding은 아직 적용하지 않았고, 시스템은 ASUS ROG Strix SCAR 18(`64GB DDR5`)로 설명된다. 댓글에서는 코딩에는 KV cache를 q4로 두지 말고 `q8`으로 `130k` 컨텍스트를 권장한다는 조언이 나왔고, z-lab의 향후 릴리스 및 `2x` 디코드 속도 향상을 약속하는 [GitHub pull request](https://github.com/ggml-org/llama.cpp/pull/22105) 기대가 언급됐다. 또한 `16GB VRAM`+`32GB DDR5`에서 offloading 성능이 어떤지 궁금해하는 반응도 있다.
  - sagiroth: 코딩 작업에서는 KV cache를 q4로 두지 말고 q8로 `130k` 컨텍스트를 노리는 게 낫다고 조언
  - inkberk: llama.cpp의 [#22105](https://github.com/ggml-org/llama.cpp/pull/22105) PR을 언급하며, z-lab의 'dflash drafter'와 함께 `2x` 디코드 속도 개선을 기대
  - Johnny_Rell: `16 GB VRAM`과 `32 GB DDR5` 환경에서 offloading이 얼마나 효과적인지 질문

### Local AI Model Implementations and Innovations

- **[Been using PI Coding Agent with local Qwen3.6 35b for a while now and its actually insane](https://www.reddit.com/r/LocalLLaMA/comments/1stjwg5/been_using_pi_coding_agent_with_local_qwen36_35b/)** (Activity: 656): 로컬 **Qwen3.6 35b a3b q4_k_xl**과 **PI Coding Agent**를 실프로젝트에 써봤더니 매우 인상적이었다는 पोस्ट. 커스텀 'plan-first' 스킬 파일이 핵심인데, 코드 실행 전에 `TODO.md` 승인을 요구해 워크플로를 구조화하고, 프로젝트 분석→질문→TODO.md→리비전→실행의 단계적 진행을 강제한다. 이는 로컬 모델 역량이 성숙하고 있음을 보여준다는 취지다. `8GB VRAM`+`32GB RAM` 노트북에서 `15-30 tokens per second`를 달성했다고 한다. 댓글에서는 M4 Pro/48GB RAM 맥북 세팅 등 유사 사례가 공유되고, IDE나 Claude 구독을 해지했다는 반응도 있다. 또한 공식 예제 GitHub에 'plan mode' 확장이 있다는 언급이 있다.
  - SoAp9035: llama.cpp 실행 파라미터(`--temp 0.6`, `--top-p 0.95`, `--top-k 20`)와 함께 `8GB VRAM`+`32GB RAM`에서 `15-30 tokens per second` 성능을 공유
  - ibishitl: Macbook Pro M4 Pro(`48GB RAM`)에서 빠르고 똑똑해 IDE/Claude 구독을 대체했다고 언급
  - audiophile_vin: 로컬 Qwen3.6 27B가 인상적이며, 공식 예제 GitHub의 'Plan mode' 확장 언급

- **[Qwen-3.6-27B, llamacpp, speculative decoding - appreciation post](https://www.reddit.com/r/LocalLLaMA/comments/1stcer1/qwen3627b_llamacpp_speculative_decoding/)** (Activity: 402): Qwen-3.6-27B에서 speculative decoding 실험으로 토큰 생성 속도를 `13.60 t/s`→`136.75 t/s`까지 끌어올렸다는 글. `llama-server` 커맨드에서 `--spec-type ngram-mod --spec-ngram-size-n 24 --draft-min 12 --draft-max 48` 설정이 핵심이라고 설명한다. Linux PC(`40GB VRAM`, `128GB DDR5`)에서 RTX3090+RTX4060ti를 사용했다고 한다. 최근 llama.cpp 변화와 함께 [documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md#n-gram-cache-ngram-cache), [pull request](https://github.com/ggml-org/llama.cpp/pull/19164) 링크도 제공한다. 댓글에서는 speculative decoding에 `--no-mmproj-offload`가 필요한지, 하드웨어에 따라 속도 이득이 없는 사례가 있는지, 드래프터로 어떤 모델을 썼는지 등 논의가 이어진다.
  - EatTFM: RTX5090에서 속도 이득이 없었다며 `--no-mmproj-offload` 플래그 필요성을 의문시하고, 파라미터 호환성 문제를 추정
  - kiwibonga: n-gram 기반 방식은 “코딩에는 잘 작동하지 않고 tool calls를 망칠 수 있다”고 지적
  - nunodonato: 자신의 사용 사례에서는 속도 차이를 느끼지 못했다고 공유(효과가 컨텍스트/하드웨어/설정에 따라 달라질 수 있음을 시사)

- **[just wanted to share](https://www.reddit.com/r/LocalLLM/comments/1su6vtx/just_wanted_to_share/)** (Activity: 1336): 4대의 Mac Mini M4 Pro로 구성한 클러스터(통합 메모리 `256GB`, `56 CPU cores`, `80 GPU cores`, `64 Neural Engine cores`)로 분산 AI 시스템 'Chappie'를 만들었다는 공유. 노드를 풀링해 분산 추론 클러스터를 구성하기 위해 [Exo](https://github.com/exo-explore/exo)를 사용했고, Qdrant 벡터 DB를 메모리 공유/복제에 활용한다고 한다. Chappie는 스스로 질문을 만들고 arXiv 논문을 읽고 새 스킬을 개발하며, 서브에이전트 프레임워크로 작업을 분배하고 리뷰어 모델 'council'로 품질을 점검한다. Qwen 3.6 35B/27B 등 여러 모델을 혼합해, 단순 도구가 아니라 자율 탐색(autonomous exploration)에 초점을 맞춘 아키텍처라고 설명한다.
  - bionicdna: Apple이 RDMA over Thunderbolt를 지원하므로 10G Ethernet 대신 RDMA를 쓰면 클러스터 성능이 더 좋아질 수 있다고 제안

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### GPT-5.5 Launch and Benchmarks

- **[Introducing GPT-5.5](https://www.reddit.com/r/singularity/comments/1stqev3/introducing_gpt55/)** (Activity: 1407): **OpenAI**가 **GPT-5.5**를 출시했다. 가격은 `1 million input tokens`당 `$5`, `1 million output tokens`당 `$30`로, GPT-5.4 대비 2배라고 설명된다. 코딩/지식 작업 등 복잡 워크플로우에서 낮은 지연과 토큰 사용량으로 SOTA 정확도를 제공한다고 홍보되며, 오남용 방지를 위한 안전장치도 포함된다고 한다. Plus/Pro/Business/Enterprise에 제공되고 API 제공도 뒤따른다고 언급됐다. 자세한 내용은 [original article](https://openai.com/index/introducing-gpt-5-5/)을 참고하라고 한다. 댓글에서는 *"We are releasing GPT‑5.5 with our strongest set of safeguards to date" 🫪 oh boy* 같은 반응으로 안전장치의 실효성에 대한 회의가 드러난다.
  - MapForward6096: 입력/출력 `$5/$30`로 GPT-5.4의 2배라며 비용 증가가 프로젝트 예산에 영향을 줄 수 있다고 지적
  - spryes: SWE-Bench Pro에서 `58.6%`로 Mythos `78%` 대비 낮다고 비판
  - mph99999: 큰 도약이 아니라 "micro step forward"로 느껴진다고 실망

- **[GPT-5.5 benchmark results have been released](https://www.reddit.com/r/singularity/comments/1stqk81/gpt55_benchmark_results_have_been_released/)** (Activity: 779): 여러 벤치마크에서 GPT-5.5 계열의 성능 비교 이미지가 공유됐다. GPT-5.5는 GPT-5.4 및 **Claude Opus 4.7**, **Gemini 3.1 Pro** 등 대비 개선이 보인다고 설명되며, 특히 **GPT-5.5 Pro**가 BrowseComp에서 `90.1%`를 기록해 브라우징 능력의 큰 상승을 시사한다. 반면 **SWE-Bench Pro**는 `57.6%`→`58.6%`로 소폭 개선에 그쳤고, **Mythos**의 `77.8%`와 비교되며 비판을 받는다. 댓글에서는 일부 지표의 미미한 개선과 선택적 하이라이트를 지적하거나, 벤치마크만으로 성급히 판단하지 말자는 의견이 함께 나온다.
  - MapForward6096, spryes: SWE-Bench Pro에서 `57.6%`→`58.6%`로 개선폭이 작고 Mythos `77.8%`에 못 미친다고 강조
  - TuteliniTuteloni: GPT-5.5가 훨씬 적은 토큰으로 더 나은 결과를 낸다는 점이 실무적으로 중요할 수 있다고 지적
  - BrennusSokol: 큰 발전인지 점진적 업데이트인지 회의

- **[Chat GPT 5.5 got launched and we got some really bold words by Sam Altman. Thoughts?](https://www.reddit.com/r/singularity/comments/1str6al/chat_gpt_55_got_launched_and_we_got_some_really/)** (Activity: 784): Sam Altman의 GPT-5.5 출시 관련 트윗 이미지가 공유됐다. Altman은 빠른 개선을 위한 반복적 배포의 중요성과, AI 민주화로 동등한 접근을 보장해야 한다는 점을 강조한다. 또한 플랫폼이 사이버보안에 집중하며 기업/창업가 등 광범위한 유저를 지원할 수 있다고 언급한다. 새 버전은 더 적은 토큰과 낮은 지연으로 동작해 접근성과 성능이 개선될 수 있다는 취지다. 댓글은 과도한 긍정 메시지에 대한 불신과, 발전에 대한 기대가 혼재한다.

- **[thoughts on GPT 5.5](https://www.reddit.com/r/OpenAI/comments/1su1ikc/thoughts_on_gpt_55/)** (Activity: 1414): 새 버전(아마 GPT 5.5) 출시를 ‘버전 숫자’로 풍자하며 축하하는 밈 이미지. "number business" 같은 표현으로 가벼운 톤의 반응을 보여준다. [View Image](https://i.redd.it/3zudtu3yi1xg1.png) 댓글에서는 GPT 5.5의 음성 모드 개선을 원한다는 의견과, Claude 대비 긍정적으로 비교하는 반응이 보인다.
  - One_Internal_6567: GPT-5.5 Pro가 이전보다 확실히 좋아졌고 5.2→5.4에서도 개선이 보였다고 언급
  - hardworkinglatinx: Claude 대비 GPT-5.5가 낫다는 뉘앙스의 비교
  - blownaway4: 구체성은 없지만 'great'라고 긍정 평가

- **[ChatGPT 5.5 🔥🔥🔥](https://www.reddit.com/r/OpenAI/comments/1stzivt/chatgpt_55/)** (Activity: 1359): 50m 떨어진 세차장에 차를 몰고 갈지 걸어갈지 묻자, ChatGPT 5.5가 걷기를 권하는 대화를 유머러스하게 묘사한 이미지. 불필요한 시동과 번거로움을 고려하는 등 맥락 기반 조언으로 에너지 효율/편의성을 강조한다. 댓글에서는 thinking 모드에 따라 품질이 달라질 수 있다는 점과, 질문이 인터넷에 널리 퍼져 학습 데이터에 영향을 줬을 수 있다는 농담이 나온다.
  - Successful-Earth678: 'extended thinking' 모드에서 더 오래 생각하게 하면 정답률이 높아진다고 언급(속도-정확도 trade-off)
  - Portatort: 질문의 보편성이 학습 데이터에 영향을 미칠 수 있다는 관점
  - ---0celot---: 걷기/운전 선택에 대한 실용적 고려(안전, 환경 등)가 담긴 응답을 공유

### DeepSeek V4 Release and Benchmarks

- **[DeepSeek V4 has released](https://www.reddit.com/r/singularity/comments/1su3lj9/deepseek_v4_has_released/)** (Activity: 1407): [HuggingFace](https://huggingface.co/collections/deepseek-ai/deepseek-v4)에 공개된 **DeepSeek V4**가 *manifold-constrained hyper-connections*(MHC) 기법을 포함하며, 이는 [recent paper](https://www.reddit.com/r/LocalLLaMA/comments/1q0zk1u/deepseek_new_paper_mhc_manifoldconstrained/)에서 다뤄졌다는 설명. 이 접근은 신경망의 manifold 공간에서 연결을 최적화해 성능을 높일 수 있고, 경쟁력 있는 가격에서 더 좋은 결과를 낼 수 있다는 취지다. 댓글에서는 비용 대비 성능이 인상적이라는 반응과, MHC 구현이 주목할 만하다는 의견이 있었다.
  - FaceDeer: DeepSeek V4가 MHC를 구현했고, 관련 내용은 [Read more](https://www.reddit.com/r/LocalLLaMA/comments/1q0zk1u/deepseek_new_paper_mhc_manifoldconstrained/)에서 더 읽을 수 있다고 링크
  - InterstellarReddit: 비용 대비 성능이 좋다면 미국 시장을 흔들 수 있다고 관측
  - cryyingboy: DeepSeek가 마케팅보다 실제 릴리스를 지속적으로 내는 점을 강조

- **[DeepSeek V4 Benchmarks!](https://www.reddit.com/r/singularity/comments/1su5bwp/deepseek_v4_benchmarks/)** (Activity: 466): DS-V4-Pro Max, DS-V4-Flash Max 등을 'Reasoning Effort', 'Knowledge & Reasoning', 'Long Context', 'Agentic' 카테고리로 비교한 벤치마크 이미지. MMLU-Pro, SimpleQA-Verified, Codeforces 등이 포함된다. DS-V4-Flash Max는 비용 효율이 강조되며, artificial analysis 과제에서 Gemini 3 Flash와 비슷한 성능을 더 낮은 비용으로 제공하고, 일반적 사용 시나리오에서 월 50센트 정도로 추정된다고 설명된다. 댓글에서는 V4가 코딩에서는 강하지만 이미지 분석은 없다는 지적과, Flash Max가 저렴하게 경쟁력 있는 성능을 낸다는 평가가 나온다.
  - Dangerous-Sport-2347: DeepSeek V4 Flash가 artificial analysis 과제에서 Gemini 3 Flash와 비슷하면서 5배 저렴해, 중간 사용량 기준 월 50센트 정도가 될 수 있다고 강조

- **[DeepSeek V4 dropped 1.6T params and 1M context without Nvidia GPUs. Here's the data.](https://www.reddit.com/r/DeepSeek/comments/1su7rzr/deepseek_v4_dropped_16t_params_and_1m_context/)** (Activity: 470): **DeepSeek-V4**가 `1.6 trillion` 파라미터와 `1 million` 토큰 컨텍스트를 제공하며, Nvidia GPU 없이 **Huawei Ascend 950PR** 실리콘으로 동작한다는 주장. V4-Pro(`49B` active)와 V4-Flash(`13B` active) 2티어 구성이며, **Engram Conditional Memory**로 컨텍스트 관리를 효율화해 추론 오버헤드를 `85%` 줄였다고 설명한다. API 가격은 1M 토큰당 `$0.14~$0.28`로 예측돼 경쟁사를 크게 언더컷한다고 주장하며, 파라미터 희소성(sparsity)과 네이티브 메모리 리트리벌(native memory retrieval)로 Nvidia GPU 독점을 흔들 수 있다는 서사로 이어진다. 댓글에서는 추가 가격 인하 가능성, Nvidia 영향에 대한 회의, 그리고 모델 자가식별/지식 컷오프 불일치 같은 업데이트 이슈를 지적한다.
  - Neo_Shadow_Entity: V4가 여전히 DeepSeek-V3로 자신을 식별하고 컷오프가 2025로 보이는 등, 2026 버전/이벤트를 다룰 때 혼란이나 hallucination이 생길 수 있다고 지적
  - smflx: Engram이 KV-cache가 아니라 weights와 관련된다는 점을 언급하며, Huggingface 페이지에 Engram 설명이 부족하다고 지적
  - Wickywire: 가격 전략이 Openclaw 같은 환경에서 고용량·저비용 모델의 경쟁력을 높일 수 있다고 강조

- **[Deepseek-v4 flash and v4 pro](https://www.reddit.com/r/DeepSeek/comments/1su3bya/deepseekv4_flash_and_v4_pro/)** (Activity: 549): **deepseek-v4-flash**와 **deepseek-v4-pro**의 기능/가격 비교 이미지. 컨텍스트 길이와 최대 출력 등 차이가 소개되고, v4-pro가 JSON output/tool calls 등 기능이 강화됐다는 식으로 설명된다. 입력/출력 토큰 가격 비교로 비용-편익 분석이 촉발됐다. 댓글에서는 deepseek reasoner가 v4 flash thinking 모드로 대체(deprecate)되며, Flash가 'flash'임에도 성능이 좋아 놀랍다는 반응이 있다.
  - Deepseek Reasoner가 v4 Flash로 deprecate되는 흐름과, Flash가 이전 reasoner에 거의 준하는 성능이라는 놀라움(일부 caveat 포함)
  - v4 Pro의 비용 증가 언급과 접근성 하락 우려
  - 다른 주체와의 협업 등 broader 전략 변화 가능성에 대한 추정

### Claude Code Issues and Updates

- **[Anthropic just published a postmortem explaining exactly why Claude felt dumber for the past month](https://www.reddit.com/r/ClaudeCode/comments/1str8gi/anthropic_just_published_a_postmortem_explaining/)** (Activity: 3991): **Anthropic**이 **Claude Code** 성능 저하로 체감된 현상의 원인을 3가지 버그로 정리한 포스트모템을 공개했다. 1) 3월 4일 `high`에서 `medium`으로 reasoning effort가 조용히 다운그레이드됐고 4월 7일 되돌렸다는 점, 2) 3월 26일 캐시 이슈로 reasoning 히스토리를 잊어 cache miss가 늘고 사용량 한도 소진이 빨라졌다는 점, 3) 4월 16일 시스템 프롬프트 변경으로 툴 호출 사이 응답이 25단어로 제한되어 코딩 품질이 악화됐고 4월 20일 되돌렸다는 점이 핵심이다. 서로 다른 트래픽 슬라이스에 영향을 줬던 이 이슈들은 4월 20일(v2.1.116)까지 수정됐고, 구독자 사용량 한도도 리셋 중이라고 한다. [Read the full postmortem](https://www.anthropic.com/engineering/april-23-postmortem). 댓글에서는 이슈가 유저의 의심과 맞아떨어져, 유저 피드백과 회사 인지 간 단절을 시사한다는 반응이 있었다. 투명성은 호평받았지만, 초기 커뮤니케이션 부족에 대한 불만도 언급됐다.
  - Direct-Attention8597: Anthropic의 포스트모템 링크를 직접 공유하며, 문제 원인과 해결을 이해하는 데 유용하다고 강조. [Read more here](https://www.anthropic.com/engineering/april-23-postmortem).
  - Jack_Dnlz: 주말 직전에 한도 리셋을 하는 전략적 선택이, 사용자 활동이 낮을 때 영향 최소화에 도움이 될 수 있다고 관측
  - Sufficient-Farmer243: 커뮤니티가 공식 확인 전에 이슈를 진단한 점을 언급하며, 사용자 관찰이 정확했음을 시사

- **[Usage Reset due to Claude Code quality issues](https://www.reddit.com/r/ClaudeCode/comments/1stpywt/usage_reset_due_to_claude_code_quality_issues/)** (Activity: 615): ClaudeDevs 트윗 이미지가 공유되며, Claude Code 품질 이슈로 사용량 한도를 리셋한다고 설명한다. 사용자 제보 후 조사했고 3가지 이슈에 대한 포스트모템을 공개했으며, `2.1.116+`에서 수정됐다고 한다. 그 결과 모든 구독자의 사용량 한도가 리셋됐다는 내용. [Image](https://i.redd.it/v0euvm9d9zwg1.png) 일부 유저는 리셋이 이례적이고 남은 시간/한도가 제각각이라며, cache miss 및 비정상적인 한도 소진 문제가 해결되길 바란다고 언급한다.
  - YatzyNanimous: cache miss 및 이상한 한도 소진 문제가 리셋으로 해결될 수 있길 기대(캐시 미스는 성능 저하, 한도 소진은 리소스 관리 문제 시사)
  - dwight-is-right: GPT 5.5 출시와 함께 Kimi 2.6, GLM 5.1, qwen 3.6 등 최근 오픈 웨이트 릴리스를 언급하며 모델 간 격차가 줄고 있음을 시사
  - 업데이트/리셋이 성능과 리소스 배분에 미치는 기술적 함의를 논의

- **[Claude limits no longer round to the nearest hour](https://www.reddit.com/r/ClaudeAI/comments/1sue09c/claude_limits_no_longer_round_to_the_nearest_hour/)** (Activity: 494): Claude의 사용량 한도 계산이 “시간 단위 반올림”에서 분 단위로 더 정밀해진 변경을 보여주는 이미지. 이는 정시 직전에 메시지를 보내 한도를 최적화하는 사용자 행동을 완화하기 위한 것으로 추정된다. 업그레이드(Pro) 옵션이 함께 보여 티어드 서비스 모델을 시사한다. 댓글에서는 이전 시스템이 ‘hourly buckets’처럼 동작해 비효율을 낳았다는 지적과, 한도가 빨리 닳는 데 대한 불만이 섞인다.
  - jake_that_dude: 한도를 'hourly bucket'으로 보는 개념적 문제를 지적하며, 긴 작업은 채팅을 쪼개고 상태/블로커/다음 단계가 담긴 handoff 노트를 남겨 컨텍스트 churn으로 한도를 낭비하지 말 것을 권장
  - idiotiesystemique: 새 채팅을 열고 handover 파일을 만들어 연속성과 효율을 유지하자는 조언
  - KronosDeret: 'fuel management plugin' 변화 언급(리소스/한도 관리 방식 업데이트 가능성)

- **[Claude reset limits for everyone](https://www.reddit.com/r/ClaudeAI/comments/1stozsr/claude_reset_limits_for_everyone/)** (Activity: 2094): 사용량 대시보드가 ‘Current session’, ‘All models’, ‘Claude Design’ 등 전 범주에서 0%로 리셋된 이미지를 공유. 정책 변경 또는 임시 리셋으로 보이며, GPT-5.5 루머 등과 연결해 해석되기도 한다. 한도에 근접했던 사용자에게는 유리하다는 반응이 있다. 반면 ‘vibes-based’ 과금/한도 시스템이라는 농담처럼 예측 불가능성을 지적하는 의견과, 리셋 이후 한도가 더 빨리 닳는 것 같다는 우려도 나온다.
  - National-Data-3928: 리셋 후 한도가 더 빨리 소진되는 것 같다고 문제 제기(트래킹/과금 알고리즘 변화 가능성)
  - DispensingLCQP: 리셋 타이밍이 사용 주기를 목→금으로 바꿔 계획이 꼬였다고 불만, Opus 4.7의 크리에이티브 라이팅 성능에도 불만을 언급

---

## AI Discord Recap

### AINews

- Discord가 오늘 접근을 차단하면서, 이 형태로는 더 이상 Discord를 다시 가져오지 않겠다고 공지했다. 대신 곧 새로운 AINews를 출시할 예정이며, 여기까지 읽어준 독자에게 감사 인사를 전했다.
