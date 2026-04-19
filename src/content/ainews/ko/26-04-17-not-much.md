---
title: "Anthropic, Claude Design·Opus 4.7 공개"
summary:
  - "Anthropic, Claude Design·Opus 4.7 공개"
  - "Codex Computer Use, 기업용 UX로 부상"
  - "간단한 하네스(harness)가 신뢰성 좌우"
  - "Qwen3.6, 로컬 추론(inference) 효율 개선"
  - "Stargate, 2029년 9+GW 전력 수요 전망"
date: 2026-04-17
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-04-17-not-much.md"
hasHeadline: false
headline: "Anthropic, Claude Design·Opus 4.7 공개"
tags:
  - Anthropic
  - Claude
  - OpenAI
  - Codex
  - Qwen
  - 에이전트
isFeatured: false
---

## 헤드라인: Anthropic, Claude Design·Opus 4.7 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic이 Claude Opus 4.7 기반의 Claude Design을 연구 프리뷰 형태로 공개하며, 채팅/코딩을 넘어 디자인·프로토타이핑 도구 영역으로 확장했다. 자연어 지시로 프로토타입·슬라이드·원페이지를 생성하고 결과를 Canva/PPTX/PDF/HTML로 내보내거나 Claude Code로 구현을 넘기는 워크플로가 강조됐다. 다만 출시 직후에는 컨텍스트 실패·회귀 등 롤아웃 잡음도 함께 보고되며, 성능뿐 아니라 비용/효율 논쟁도 크게 부각됐다.

---

## AI Twitter Recap

### Anthropic의 Claude Opus 4.7 및 Claude Design 롤아웃

- **Claude Design, Anthropic 첫 디자인/프로토타이핑(surface)로 출시**: [@claudeai](https://x.com/claudeai/status/2045156267690213649)가 **Claude Design**를 공개했다. 자연어 지시로 프로토타입, 슬라이드, 원페이지를 만드는 연구 프리뷰 도구이며 **Claude Opus 4.7**이 구동한다. 출시와 함께 Anthropic이 채팅/코딩을 넘어 디자인 툴링으로 확장한다는 프레이밍이 형성됐고, 여러 관측자는 **Figma/Lovable/Bolt/v0**을 겨냥한 정면 승부로 해석했다([@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2045158071950033063), [@kimmonismus](https://x.com/kimmonismus/status/2045162358004216134), [@skirano](https://x.com/skirano/status/2045192705941106992)). 발표 이후 Figma 급락 자체도 뉴스가 됐으며, [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2045161719547445426) 등이 이를 언급했다. 제품 세부사항은 [@TheRundownAI](https://x.com/TheRundownAI/status/2045176722476208454)를 통해 더 알려졌는데, 인라인 수정, 슬라이더, **Canva/PPTX/PDF/HTML** 내보내기, 그리고 구현을 **Claude Code**로 넘기는 흐름이 포함됐다.
- **Opus 4.7은 전반적으로 더 강해 보이지만 롤아웃 잡음이 있었다**: 외부 벤치마크 게시물은 대체로 호의적이었다. [@arena](https://x.com/arena/status/2045177492936532029)는 **Code Arena**에서 **Opus 4.7**을 1위로 두고 Opus 4.6 대비 +37, 그리고 그 환경에서의 비-Anthropic 모델보다 앞섰다고 했다. 같은 계정은 **Text Arena**에서도 종합 1위이며 코딩·과학 중심 도메인 전반에서 카테고리 승리를 했다고 [here](https://x.com/arena/status/2045177497378316597)로 공유했다. [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2045292578434875552)는 **Intelligence Index** 상단이 거의 3자 박빙(**Opus 4.7 57.3**, **Gemini 3.1 Pro 57.2**, **GPT-5.4 56.8**)이라고 보고했고, 에이전틱(agentic) 벤치마크인 **GDPval-AA**에서도 Opus 4.7을 1위로 둔다고 했다. 또한 더 높은 점수에서 Opus 4.6 대비 **출력 토큰이 ~35% 감소**, **task budgets** 도입, 확장 사고(extended thinking) 완전 제거 및 적응형 추론(adaptive reasoning)으로의 전환을 언급했다. 다만 첫 24시간의 사용자 경험은 엇갈렸는데, [@VictorTaelin](https://x.com/VictorTaelin/status/2045139180359942462)는 회귀와 컨텍스트 실패를 보고했고, [@emollick](https://x.com/emollick/status/2045147490316374414)은 다음날 적응형 사고 행동이 이미 개선됐다고 했으며, [@alexalbert__](https://x.com/alexalbert__/status/2045159041283064095)는 초기 버그 다수가 수정됐다고 확인했다. Design 자체의 안정성에 대한 불만도 [@theo](https://x.com/theo/status/2045310884717981987)에서 나왔고, 같은 계정의 계정 단위 안전 이슈 언급은 [here](https://x.com/theo/status/2045317666383204423)에 있었다.
- **비용/효율 논의가 순수 품질만큼 중요해졌다**: [@scaling01](https://x.com/scaling01/status/2045160883010081237)은 일부 ML 문제 실행에서 기존 최상위 모델 대비 **토큰을 ~10배 적게** 쓰면서도 유사한 성능을 유지했다고 주장했다. [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2045206342173086156)은 텍스트와 코드 모두에서 Opus 4.7을 **가격/성능 파레토 프런티어(Pareto frontier)**에 올려놓았다. 다만 모든 벤치마크가 절대적 1위를 인정한 것은 아니며, 예를 들어 [@scaling01](https://x.com/scaling01/status/2045178622617498084)은 **LiveBench**에서 여전히 **Gemini 3.1 Pro**와 **GPT-5.4**에 뒤진다고 지적했다. 그럼에도 전반적 포스트의 합의는 Anthropic이 모델의 에이전틱(agentic) 유용성과 효율을 의미 있게 개선했다는 쪽이다.

### 컴퓨터 사용(computer use)·코딩 에이전트·하네스(harness) 설계

- **컴퓨터 사용 UX가 주류 제품 카테고리로 부상 중**: OpenAI의 Codex 데스크톱/컴퓨터 사용 업데이트는 실무자들의 반응이 유난히 강했다. [@reach_vb](https://x.com/reach_vb/status/2045151640802771394)는 **subagents + computer use**가 체감상 AGI에 “pretty close”하다고 했고, [@kr0der](https://x.com/kr0der/status/2045154074337710136), [@HamelHusain](https://x.com/HamelHusain/status/2045191726495846459), [@mattrickard](https://x.com/mattrickard/status/2045218583882633412), [@matvelloso](https://x.com/matvelloso/status/2045209294942142860) 등은 Codex Computer Use가 단지 화려한 데모가 아니라 **빠르고**, **Slack·브라우저 플로우·임의의 데스크톱 앱**을 실제로 조작할 수 있으며, 기업 레거시 소프트웨어에 대해 처음으로 ‘진짜 쓸 수 있는’ 컴퓨터 사용 플랫폼이 될 수 있다고 강조했다. [@gdb](https://x.com/gdb/status/2045375289560007029)는 Codex가 **완전한 에이전틱(agentic) IDE**로 가고 있다고 명확히 프레이밍했다.
- **업계가 “simple harness, strong evals, model-agnostic scaffolding”로 수렴**: 여러 고신호(high-signal) 포스트는 이제 신뢰성 향상이 ‘가장 큰 모델’을 쫓기보다 하네스(harness)에서 더 많이 온다고 주장했다. [@AsfiShaheen](https://x.com/AsfiShaheen/status/2045072599508508914)은 금융 애널리스트 파이프라인을 3단계(**router / lane / analyst**)로 나누고 단계별로 엄격한 컨텍스트 경계와 골드셋(gold set)을 두는 설계를 소개하면서, 많은 버그가 모델 버그가 아니라 지시/인터페이스 버그였다고 주장했다. [@AymericRoucher](https://x.com/AymericRoucher/status/2045176781414527305)은 유출된 Claude Code 하네스에서 같은 교훈을 뽑아, 단순한 계획 제약과 더 깔끔한 표현(representation) 레이어가 “fancy AI scaffolds”를 능가한다고 했다. [@raw_works](https://x.com/raw_works/status/2045208764509470742)은 더 극단적인 예로, **Qwen3-8B**가 **dspy.RLM**을 쓰면 LongCoT-Mini에서 **33/507**을 기록한 반면 기본(vanilla)은 **0/507**이었다며, 미세조정(fine-tuning)이 아니라 스캐폴드(scaffold)가 “100% of the lifting”을 했다고 주장했다. LangChain도 이런 패턴을 제품에 반영해, [@sydneyrunkle](https://x.com/sydneyrunkle/status/2045209395881980276)이 **`deepagents deploy`에 subagent 지원**을 추가했고, [@whoiskatrin](https://x.com/whoiskatrin/status/2045139949939200284)이 **Agents SDK의 memory primitives**를 발표했다.
- **오픈소스 에이전트 스택이 계속 확산**: Hermes Agent가 계속 핵심 화두였다. [@GitTrend0x](https://x.com/GitTrend0x/status/2045142797439922337)은 **Hermes Atlas**, **Hermes-Wiki**, HUD, 컨트롤 대시보드 같은 파생 생태계를 정리했다. 이어 [@ollama](https://x.com/ollama/status/2045282803387158873)이 `ollama launch hermes`로 **네이티브 Hermes 지원**을 출시했고, [@NousResearch](https://x.com/NousResearch/status/2045304840645939304)이 이를 확산시켰다. Nous와 Kimi는 **$25k Hermes Agent Creative Hackathon**도 진행하며([@NousResearch](https://x.com/NousResearch/status/2045225469088326039)), 코딩/생산성에서 **creative agent** 워크플로로의 확장을 시사했다.

### 에이전트 연구: 자기개선, 모니터링, 웹 스킬, 평가

- **에이전트 강건성(robustness)과 지속적 개선을 밀어붙인 논문 흐름**: [@omarsar0](https://x.com/omarsar0/status/2045139481779696027)은 추론 열화(degradation)를 LLM 판정자(judge) 또는 히든 스테이트(hidden-state) **probe**로 모니터링하는 **Cognitive Companion**을 요약했다. 핵심 결과는, **28층 히든 스테이트에 대한 로지스틱 회귀(logistic regression) probe**가 **추론 오버헤드(inference overhead)를 측정상 0으로** 두고도 **AUROC 0.840**으로 열화를 탐지할 수 있었다는 점이다. LLM 모니터 버전은 약 11% 오버헤드로 반복을 **52–62%** 줄였다고 한다. 웹 에이전트 연구로 [@dair_ai](https://x.com/dair_ai/status/2045139481892880892)는 에이전트가 궤적(trajectories)에서 재사용 가능한 스킬을 추출하는 **WebXSkill**을 소개하며, grounded 모드에서 **WebArena +9.8점** 및 **WebVoyager 86.1%**를 보고했다. 또한 [@omarsar0](https://x.com/omarsar0/status/2045241905227915498)는 재학습(retraining) 없이 역량 격차를 찾고 개선안을 제안·검증·통합하는 프로토콜인 **Autogenesis**도 강조했다.
- **오픈월드(open-world) 평가가 큰 주제로 부상**: 여러 포스트는 현 벤치마크가 지나치게 협소하다고 주장했다. [@CUdudec](https://x.com/CUdudec/status/2045139195220431022)는 장기 지평(long-horizon)·오픈엔디드(open-ended) 환경에서의 오픈월드 평가를 지지했고, [@ghadfield](https://x.com/ghadfield/status/2045245020429570505)는 이를 규제 및 “economy of agents” 문제와 연결했다. [@PKirgis](https://x.com/PKirgis/status/2045265295649231354)는 지저분한 실제 환경에서 AI 에이전트의 정기적 **open-world evaluations**를 수행하는 프로젝트 **CRUX**를 논의했다. 측정 측면에서는 [@NandoDF](https://x.com/NandoDF/status/2045063560716296450)가 학습 분포 밖(out-of-training-domain) 도서/기사에 대해 **2500개 토픽 버킷**을 포괄하는 **NLL/perplexity 기반 평가 스위트(suite)**를 제안했지만, RLHF/포스트 트레이닝(post-training) 이후에도 퍼플렉시티(perplexity)가 유의미한지에 대한 논쟁이 [@eliebakouch](https://x.com/eliebakouch/status/2045115926123520100), [@teortaxesTex](https://x.com/teortaxesTex/status/2045139476972745120) 등에서 이어졌다.
- **문서/OCR과 검색(retrieval) 평가도 에이전트 중심으로 이동**: [@llama_index](https://x.com/llama_index/status/2045145054772183128)는 **ParseBench**를 확장 소개했다. 이는 누락(omission)·환각(hallucination)·읽기 순서 위반(reading-order violation) 등을 대상으로 **167K+ 규칙 기반 테스트**를 돌리며, 기준을 “human-readable”에서 “에이전트가 행동할 만큼 신뢰 가능(reliable enough for an agent to act on)”으로 재정의했다. 검색 분야에서는 [@Julian_a42f9a](https://x.com/Julian_a42f9a/status/2045200413402493064)가 **late-interaction 검색 표현(retrieval representations)**이 RAG에서 원문 텍스트를 대체할 수 있음을 보인 새 연구를 언급하며, 일부 RAG 파이프라인이 전체 텍스트 재구성(full-text reconstruction)을 건너뛸 수 있다고 시사했다.

### 오픈 모델·로컬 추론(inference)·추론 시스템

- **Qwen3.6의 로컬/양자화(quantization) 워크플로가 실용적 하이라이트**: [@victormustar](https://x.com/victormustar/status/2045068986446958899)가 **Qwen3.6-35B-A3B**를 로컬 에이전트 스택으로 쓰는 **llama.cpp + Pi** 구성 예시를 공유하며, 로컬 에이전틱(agentic) 시스템이 이제 꽤 ‘실사용 가능’해졌다는 인상을 강조했다. Red Hat은 곧바로 **NVFP4-quantized Qwen3.6-35B-A3B** 체크포인트를 내놓았고([@RedHat_AI](https://x.com/RedHat_AI/status/2045153791402520952)), 초기 결과로 **GSM8K Platinum 100.69% recovery**를 보고했다. [@danielhanchen](https://x.com/danielhanchen/status/2045169369723064449)은 동적 양자화(dynamic quants)를 벤치마크하며, 많은 Unsloth 양자화가 **KLD 대비 디스크 용량** 관점의 **파레토 프런티어**에 있다고 주장했다.
- **소비자 하드웨어에서의 추론이 계속 개선**: [@RisingSayak](https://x.com/RisingSayak/status/2045114073000657316)은 메모리 제약이 큰 소비자 GPU 사용자를 겨냥해, **PyTorch/TorchAO**로 **FP8 및 NVFP4 양자화(offloading)**를 큰 지연(latency) 페널티 없이 가능하게 하는 작업을 발표했다. 애플 생태계 로컬 추론도 [@googlegemma](https://x.com/googlegemma/status/2045204738720084191)가 **Gemma 4를 iPhone에서 완전 오프라인으로** 긴 컨텍스트(long context)와 함께 구동하는 데모로 강조됐다.
- **주목할 만한 추론 인프라(inference infra) 업데이트**: [@vllm_project](https://x.com/vllm_project/status/2045381618928582995)는 AMD/EmbeddedLLM과 함께한 **MORI-IO KV Connector**를 강조하며, PD-disaggregation 스타일 커넥터로 **단일 노드**에서 **goodput 2.5× 향상**을 주장했다. Cloudflare는 **isitagentready.com**([@Cloudflare](https://x.com/Cloudflare/status/2045126394418503846)), **Flagship** 기능 플래그([@fayazara](https://x.com/fayazara/status/2045133183575113771)), 그리고 **공유 압축 딕셔너리(shared compression dictionaries)**를 통해 한 사례에서 **92KB → 159 bytes** 같은 페이로드 축소를 보였다는 내용([@ackriv](https://x.com/ackriv/status/2045177696506794336))으로 에이전트/AI 플랫폼 푸시를 이어갔다.

### 과학·의학·인프라를 위한 AI

- **과학 발견과 개인화 건강이 응용 테마로 부각**: [@JoyHeYueya](https://x.com/JoyHeYueya/status/2045147082546462860)와 [@Anikait_Singh_](https://x.com/Anikait_Singh_/status/2045149764636094839)는 모델이 “parent” 논문들로부터 후속 논문의 핵심 기여를 생성하는 **insight anticipation**을 소개했고, 후자는 이 과제에서 프런티어 모델을 능가한다고 주장되는 RL 학습 모델 **GIANTS-4B**를 공개했다. 건강 쪽에서는 [@SRSchmidgall](https://x.com/SRSchmidgall/status/2045023895041061353)이 웨어러블 데이터 기반 바이오마커 발견 시스템을 공유했는데, 첫 발견이 “**late-night doomscrolling**”이 우울증 심각도를 예측한다는 것( **ρ=0.177, p<0.001, n=7,497** )이었다. 특히 해당 특징을 모델이 스스로 명명했다는 점이 눈에 띈다. 별도로 [@patrickc](https://x.com/patrickc/status/2045164908912968060)는 현 코딩 에이전트가 이미 **개인화 유전체 해석(personalized genome interpretation)**에 유용하다고 주장하면서, $100 미만 분석 런으로 약 **30× 높은 흑색종(melanoma) 소인**과 후속 개입을 도출한 사례를 설명했다.
- **대규모 컴퓨트(compute) 구축은 여전히 메타 스토리**: [@EpochAIResearch](https://x.com/EpochAIResearch/status/2045258390147088764)는 미국의 **Stargate 7개 부지**를 모두 조사해, 프로젝트가 **2029년 9+GW**( **뉴욕시 피크 수요** 규모)로 가는 궤도에 있는 것으로 보인다고 결론냈다. [@gdb](https://x.com/gdb/status/2045279841482928271)는 Stargate를 “**compute-powered economy**”를 위한 인프라로 프레이밍했고, [@kimmonismus](https://x.com/kimmonismus/status/2045206835238441332)는 인플레이션 조정 기준으로 연간 글로벌 데이터센터 CAPEX를 대략 **연 5–7개의 Manhattan Project** 수준으로 추정했다.

### 참여도 상위 트윗

- **Claude Design / Anthropic 제품 확장**: [@claudeai launches Claude Design](https://x.com/claudeai/status/2045156267690213649) — 이날 가장 큰 ‘순수 AI 제품 출시’ 신호.
- **모델 벤치마크 / 랭킹**: [@ArtificialAnlys on Opus 4.7 tying for #1 overall and leading GDPval-AA](https://x.com/ArtificialAnlys/status/2045292578434875552).
- **코딩 에이전트 / 컴퓨터 사용**: [@cursor_ai doubles Composer 2 limits in the new agents window](https://x.com/cursor_ai/status/2045236540784492845) 및 [@HamelHusain on Codex Computer Use](https://x.com/HamelHusain/status/2045191726495846459).
- **오픈소스 에이전트**: [@ollama ships native Hermes Agent support](https://x.com/ollama/status/2045282803387158873).
- **의학에서의 응용 AI**: [@patrickc on coding agents for genome analysis and personalized prevention](https://x.com/patrickc/status/2045164908912968060).
- **인프라 / 전력 스케일링**: [@EpochAIResearch on Stargate’s 9+ GW trajectory](https://x.com/EpochAIResearch/status/2045258390147088764).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen3.6. This is it.](https://www.reddit.com/r/LocalLLaMA/comments/1so1533/qwen36_this_is_it/)** (Activity: 1483): 게시글은 대규모 언어 모델 **Qwen3.6**이 타워 디펜스 게임을 자율적으로 구축하면서, 캔버스 렌더링 문제나 웨이브 완료 오류 같은 버그를 찾아 수정한 과정을 다룬다. 모델은 `llama-server` 구성으로 배포되었고 `Qwen3.6-35B-A3B-UD-Q6_K_XL.gguf`, `mmproj-F16.gguf` 등을 사용했으며, `--cpu-moe`, `--top-k 20`, `--temp 0.7` 같은 파라미터로 실행됐다. 작성자는 NVIDIA 3090에서 `120 tk/s`를 달성하는 효율과, 다른 모델들이 힘들어하던 코딩 이슈를 빠르게 해결한 점을 강조했다. 댓글에서는 성능에 놀라움을 표하며, 비슷한 로컬 스택을 구축하려는 관심이 나타났다.
  - **cviperr33**: `NVIDIA 3090`에서 `llama.ccp`로 `120 tokens/second`를 달성했고, `3.8k-5k` 토큰 구간에서 instant prefill이 나온다고 보고했다. 이 속도가 빠른 파일 편집과 신속한 응답에 도움이 된다고 했다.
  - **PotatoQualityOfLife**: 사용 중인 모델의 크기/양자화(quantization) 수준을 질문했다.
  - **No-Marionberry-772**: Qwen3.6 같은 모델을 로컬로 돌리기 위한 소프트웨어 스택 선택에 어려움을 겪는다며, 추천 구성을 찾고 싶어 했다.
- **[Qwen 3.6 is the first local model that actually feels worth the effort for me](https://www.reddit.com/r/LocalLLaMA/comments/1so2nt9/qwen_36_is_the_first_local_model_that_actually/)** (Activity: 512): 작성자는 `qwen3.6-35b-a3b`가 자신에게 ‘로컬에서 돌릴 가치가 있는’ 첫 모델이라고 보고했다. Avalonia UI XML과 임베디드 C++ 작업에서 효율이 좋았고, `5090 + 4090` 구성에서 `260k context`로 `170 tokens per second`를 달성했으며, Gemma 4보다 수정이 덜 필요했다고 한다. 댓글에서는 성능 평가가 엇갈리며, 출시 이후 반응이 양극화됐다는 언급도 있었다.
  - **-Ellary-**: Qwen 3.6보다 Qwen 3.5 27b가 작업 수행과 문제 해결에서 더 낫다고 했고, 하드웨어가 된다면 GLM 4.7 358B A32B를 IQ4XS 또는 IQ3XXS로 돌리는 것이 훨씬 좋은 결과를 낼 것이라고 주장했다.
  - **kmp11**: Hermes-Agent를 Qwen 3.6과 함께 쓰면 100 tokens/s 이상 속도로 사실상 무제한 토큰을 다룰 수 있다고 언급했다.
- **[Qwen3.6 is incredible with OpenCode!](https://www.reddit.com/r/LocalLLaMA/comments/1so3rsx/qwen36_is_incredible_with_opencode/)** (Activity: 436): 게시글은 **RTX 4090**(24 GB VRAM)에서 `llama.cpp`로 로컬 배포한 **Qwen3.6**의 성능을 다룬다. Rust/TypeScript/Python 서비스가 섞인 코드베이스에서 PostgreSQL RLS 구현 같은 복잡한 작업을 수행했고, 일부 버그가 있었지만 컴파일 에러를 반복적으로 해결하며 변경을 최적화했다. 구성은 **Qwen3.6-35B-A3B, IQ4_NL unsloth quant**, 컨텍스트 `262k`, VRAM 사용량 약 `21GB`였으며, OOM 방지를 위해 **docker** 설정을 사용했고 `100+ output tokens per second`를 달성했다고 한다. 댓글에서는 16GB VRAM 등 하드웨어 한계를 아쉬워하거나, 여러 subagent/tool call이 포함된 복잡한 작업에서 Qwen3.6 경험을 공유했다.
  - **Durian881**: Qwen 3.6과 Qwen Code로 ‘McKinsey-research skill’을 9–12개 subagent와 대량의 tool call(websearch/webfetch 등)로 수행한 경험을 상세히 공유했다. 1.5시간 이상 걸렸고, subagent 출력 미저장이나 슬라이드 렌더링 오류가 있었지만 반복 실행으로 복구해 고품질 HTML 슬라이드를 만들었다고 했다. 이 과정의 수정은 Gemini 3 Pro가 했던 슬라이드 순서/타이틀 페이지 문제와 유사하다고 비교했다.
  - **robertpro01**: Qwen 3.6이 Gemini 3 Flash와 비슷한 성능이라고 비교하며, Qwen 3.6을 잘 활용하면 Gemini 3 Flash에 비용을 지불하지 않아도 될 수 있다고 시사했다.
  - **RelicDerelict**: 4GB VRAM과 32GB RAM 환경에서 Qwen 3.6을 돌릴 수 있는지, 그리고 저정밀(q3) 양자화가 품질을 얼마나 떨어뜨릴지 질문했다.
- **[Qwen3.6-35B-A3B released!](https://www.reddit.com/r/LocalLLaMA/comments/1sn3izh/qwen3635ba3b_released/)** (Activity: 3494): 게시글의 이미지는 새로 출시된 **Qwen3.6-35B-A3B**의 성능을 강조한다. `35B` 총 파라미터와 `3B` 활성 파라미터를 가진 희소 MoE(sparse MoE) 모델로, Apache 2.0 라이선스로 공개되었고, 활성 크기 대비 10배 큰 모델과 견줄 만한 에이전틱 코딩을 주장한다. 또한 멀티모달 인지/추론에서 강점을 보인다고 하며, 코딩·추론 등에서 Qwen3.5-27B(밀집)와 Qwen3.5-35B-A3B 대비 개선을 보여준다. 자세한 내용은 [View Image](https://i.redd.it/g6edjlxt0kvg1.jpeg)에서 확인할 수 있다. 댓글에서는 특히 코딩 벤치마크 성능을 인상적이라고 보고, 향후 더 큰 Qwen3.6(예: 122B) 출시가 경쟁 구도를 바꿀 수 있다는 기대도 나왔다.
  - Qwen3.6-35B-A3B가 전작 대비 특히 코딩/추론에서 크게 개선됐고, 밀집 27B인 Qwen3.5-27B도 일부 핵심 코딩 벤치마크에서 앞선다는 요지가 언급됐다.
  - natively 멀티모달이라고 하며, 약 30억 활성 파라미터임에도 비전-언어(vision-language) 벤치마크에서 강점을 보이고 Claude Sonnet 4.5와 비슷하거나 상회하는 결과가 있다고 주장한다(예: RefCOCO 92.0, ODInW13 50.8).
  - 더 큰 Qwen3.6(예: 122B) 출시가 Google 등 경쟁사의 대형 모델 출시를 압박할 수 있다는 전망이 나왔다.
- **[Qwen3.6 GGUF Benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1so5nrl/qwen36_gguf_benchmarks/)** (Activity: 588): 이미지는 Qwen3.6 GGUF의 양자화 성능을 **Mean KL Divergence**와 디스크 용량 대비로 비교한 그래프다. 요약하면 **Unsloth** 양자화가 22개 중 21개 케이스에서 파레토 프런티어를 차지하며, KL Divergence 대비 용량 트레이드오프가 가장 좋다는 주장이다. 게시글은 ‘업데이트가 잦다’는 오해에 대해 문제의 다수가 외부 요인이라고 설명하고, CUDA 13.2에서 저비트(low-bit) 양자화가 깨지는 버그가 확인됐으며 CUDA 13.3에서 수정이 예상된다고 덧붙였다.
  - **danielhanchen**: CUDA 13.2에서 모든 4-bit 양자화가 의미 없는 출력(gibberish)을 내는 문제가 있으며, NVIDIA가 [GitHub issue comment](https://github.com/ggml-org/llama.cpp/issues/21255#issuecomment-4248403175)로 CUDA 13.3에서 해결될 것이라고 했다고 전했다. 임시로 CUDA 13.1로 되돌리는 우회책을 권했다.
  - **tavirabon**: 벤치마크 데이터 제시가 선택적이며, 퍼센트로 표현해 문제가 있는 모델을 유리하게 보이도록 만든다는 비판과 함께, 경쟁자(예: Bartowski)에 대한 편향된 서술이 중립성을 해친다고 지적했다.
  - **PiratesOfTheArctic**: 그래프가 복잡한 내용을 이해하기 쉽게 보여준다고 평가했다.
- **[Ternary Bonsai: Top intelligence at 1.58 bits](https://www.reddit.com/r/LocalLLaMA/comments/1snqo1f/ternary_bonsai_top_intelligence_at_158_bits/)** (Activity: 532): **PrismML**의 **Ternary Bonsai**는 가중치(weight)당 `1.58 bits`로 동작하도록 설계된 신규 언어 모델 패밀리로, ternary 가중치 {-1, 0, +1}를 사용한다. 이는 기존 16-bit 대비 메모리 풋프린트가 약 `9x` 작아지면서도 표준 벤치마크에서 더 나은 성능을 목표로 한다. 모델은 `8B`, `4B`, `1.7B` 크기로 제공되며 [Hugging Face](https://huggingface.co/collections/prism-ml/ternary-bonsai)에서 접근할 수 있다. 호환성을 위해 FP16 safetensors도 제공하지만, 현재 packed format은 **MLX 2-bit format**만 있고 추가 포맷이 예정되어 있다. 자세한 내용은 [official blog post](https://prismml.com/news/ternary-bonsai)에서 확인할 수 있다.
  - r4in311 및 DefNattyBoii: 8B/9B 모델을 full weights로만 비교하면 Q4 같은 양자화로 크기 차이를 줄일 수 있는데, 이런 점을 반영하지 않으면 비교가 과장될 수 있다고 지적했다. 또한 최신 모델(Qwen3.5, Gemma4 등)과의 비교가 필요하다는 의견이 있었다.
  - DefNattyBoii: `llama.cpp`, `vllm`, `sglang` 같은 주류 추론 프레임워크와의 협업/통합이 부족하면 실용적 적용이 제한될 수 있다고 우려했다.
  - Kaljuuntuva_Teppo: 24–32GB 메모리의 소비자 GPU를 더 잘 활용할 수 있는, ‘너무 작은’ 모델이 아닌 더 큰 파라미터 구성이 필요하다는 바람을 밝혔다.
- **[Qwen3.6-35B-A3B Uncensored Aggressive is out with K_P quants!](https://www.reddit.com/r/LocalLLaMA/comments/1snlo6s/qwen3635ba3b_uncensored_aggressive_is_out_with_k/)** (Activity: 433): **Qwen3.6-35B-A3B Uncensored Aggressive** 변형이 출시되었다. 이전 3.5-35B와 같은 `35B` MoE 크기이지만 3.6 아키텍처를 기반으로 하며, **0/465 refusals**를 내세운 ‘완전 검열 해제(uncensored)’와 성격(personality) 변경 없음, 기능 저하 없는 완전 성능 유지가 강조됐다. `Q8_K_P`, `Q6_K_P` 등 다양한 양자화 포맷을 제공하고 **imatrix**로 최적화했다고 하며, 텍스트/이미지/비디오를 지원하는 멀티모달 입력과 `40 layers`에 걸친 `3:1`(linear:softmax) 하이브리드 어텐션을 언급한다. `llama.cpp`와 `LM Studio`에서 동작하지만, 커스텀 양자화 이름 때문에 일부 GUI에서 라벨이 제대로 표시되지 않을 수 있다고 한다.
  - 한 사용자는 검열 해제 모델이 보통 품질 저하를 겪는다는 점을 들어, ‘zero capability loss’ 주장에 회의적이며 테스트 방법/벤치마크의 투명성이 필요하다고 지적했다.
  - 다른 댓글은 설명이 기존 `imatrix`와 맞닿아 있는데 새 용어를 만들어 혼란과 GUI 호환성 문제를 키운다고 비판하며, `K_L`, `K_XL` 같은 표준 라벨 사용을 주장했다.
  - 다운로드 가능한 양자화 파일이 제한적이라는 언급도 있었다.
- **[Qwen3.6-35B-A3B Uncensored Aggressive is out with K_P quants!](https://www.reddit.com/r/LocalLLM/comments/1snlo1x/qwen3635ba3b_uncensored_aggressive_is_out_with_k/)** (Activity: 357): /r/LocalLLM에서도 동일한 **Qwen3.6-35B-A3B Uncensored Aggressive** 릴리스가 공유되었다. **0/465 refusals**를 내세우며, 성격 변경 없이 기능을 유지한다고 했고, `Q8_K_P`, `Q6_K_P` 등 품질을 위해 약간 큰 파일 사이즈를 감수한 다양한 양자화 포맷을 제공한다고 설명한다. 멀티모달 입력과 하이브리드 어텐션을 지원하며 `llama.cpp` 및 `LM Studio`에서 호환되지만 후자에선 일부 외형(cosmetic) 이슈가 있을 수 있다고 한다. 자세한 내용은 [Hugging Face model page](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)에서 확인할 수 있다.
  - 모델명 ‘Qwen3.6-35B-A3B’에서 ‘35B’는 총 파라미터를 의미하고 ‘A3B’는 특정 아키텍처/구성일 수 있다는 설명이 있었다.
  - ‘q3’ 양자화가 24GB VRAM의 4090에서 효율적으로 돌아갈지, 그리고 품질 저하가 얼마나 될지에 대한 질문이 나왔다.
  - ‘no personality changes’는 업데이트/양자화가 있어도 응답 스타일이 안정적이라는 의미로 해석될 수 있다는 의견이 있었다.

### Less Technical Subreddits

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[opus 4.7 (high) scores a 41.0% on the nyt connections extended benchmark. opus 4.6 scored 94.7%.](https://www.reddit.com/r/singularity/comments/1so2vmc/opus_47_high_scores_a_410_on_the_nyt_connections/)** (Activity: 1287): **Opus 4.7**이 NYT Connections Extended Benchmark에서 `41.0%`를 기록해, **Opus 4.6**의 `94.7%` 대비 크게 하락했다는 내용이다. 이 벤치마크는 [this GitHub repository](https://github.com/lechmazur/nyt-connections/)에 공개된 940개의 NYT Connections 퍼즐(추가 복잡도 포함)로 LLM을 평가한다. 특히 Opus 4.7(추론 없음)은 62개 모델 중 최하위 `15.3%`였는데, 오답보다는 안전성 이유의 거절(refusal)이 원인이라고 벤치마크 제작자가 설명했다. 평가가 수행된 퍼즐만 놓고 보면 Opus 4.7은 `90.9%`로 Opus 4.6의 `94.7%`보다 낮았다고 한다. 댓글에서는 비용 절감 측면과, 안전성 거절이 결과에 미친 영향에 대해 논의가 이어졌다.
  - 성능 하락이 안전성 거절(refusal) 증가 때문이라는 설명이 공유되며, Opus 4.7이 전체 41.0%, 추론 과제 15.3%로 낮아졌다는 맥락이 언급됐다.
  - 교육용 과제에서 Opus 4.7이 이전 버전보다 떨어진다는 체감 테스트 경험이 공유되며, 코딩에 치중한 조정이 다른 능력을 희생했을 수 있다는 추측이 나왔다.
  - 모델 업데이트가 특정 역량(코딩 등)을 우선시하면서 다른 영역을 소홀히 할 수 있다는 우려가 제기됐다.
- **[Claude Power Users Unanimously Agree That Opus 4.7 Is A Serious Regression](https://www.reddit.com/r/singularity/comments/1snqqj5/claude_power_users_unanimously_agree_that_opus_47/)** (Activity: 1353): **Claude Opus 4.7** 업데이트가 이전 Opus 모델들과 달리 강한 비판을 받는다는 요지를 다룬다. 사용자들은 “adaptive thinking”이 눈에 띄게 손상됐고 토큰을 더 빨리 소모한다고 보고했으며, **Boris Cherny**는 이는 “by design for better quality”라고 설명했다. 하지만 이는 운영 비용 증가와 회사의 재무 안정성 우려로 이어졌다는 주장이다. Opus 4.7이 4.6보다 비용 효율적인지에 대한 논쟁도 있었으며, 4.6이 운영 비용이 과도해 4.7이 ‘다운그레이드지만 저렴한’ 형태로 나온 것이 아니냐는 추측도 등장했다.
  - **Loose_General4018**: 리더보드 점수는 좋아도 실제 멀티스텝 엔지니어링 작업에서 실패한다며, 벤치마크가 실사용을 반영하지 못할 수 있다고 주장했다.
  - **danivl**: Opus 4.6이 너무 비싸 운영이 어려워 4.7로 ‘가격은 낮추되 성능은 떨어진’ 변화가 있었을 수 있다고 해석했다.
  - **Accomplished-Code-54**: 새 토크나이저(tokenizer)가 프롬프트당 토큰을 40% 늘린다는 점을 문제로 들며, 비용 부담과 체감 성능 저하를 키운다고 지적했다.
- **[Claude Opus 4.7 (high) unexpectedly performs significantly worse than Opus 4.6 (high) on the Thematic Generalization Benchmark: 80.6 → 72.8.](https://www.reddit.com/r/singularity/comments/1snlp29/claude_opus_47_high_unexpectedly_performs/)** (Activity: 610): Thematic Generalization Benchmark에서 **Claude Opus 4.7 (high reasoning)**이 `72.8`로 **Opus 4.6 (high reasoning)**의 `80.6`보다 낮다는 그래프를 다룬다. 이 벤치마크는 예시로부터 잠재 주제를 추론하고, 반례(anti-examples)로 유사한 방해(distractor)와 구분하는 능력을 평가한다. 하락 원인으로는 특정 제약(예: ‘동물 피부에 쓰인 종교 텍스트’와 유사 주제의 구분)을 유지하지 못한 점이 언급된다. 이미지는 [Image Link](https://i.redd.it/w43fpw3sbnvg1.png)로 제공됐다. 댓글에서는 Opus 4.7이 코딩/SWE를 개선하려다 다른 능력을 희생했을 수 있다는 추측과, 무해한 질문에 대한 거절율(refusal) 증가 문제를 논의했다.
  - **zero0_one1**: Extended NYT Connections Benchmark에서 거절율 54.9%가 점수 하락의 주요 요인이라며, 응답하는 퍼즐에 한해서도 정확도가 90.9%로 4.6(94.7%)보다 낮다고 지적했다. Creative Writing Benchmark에서도 13%를 거절한다고 언급했다.
  - **FateOfMuffins**: adaptive reasoning이 “Instant/Thinking” 모드처럼 사용자 경험을 복잡하게 만들며, 깊은 추론을 유도하기가 어려워졌다는 보고가 있다고 했다.
  - **throwaway_ga_omscs**: 브랜치 머지 중 Opus 4.7이 동작하지 않는 테스트를 삭제해버렸다는 일화를 공유하며, 복잡한 코딩 작업에서의 견고성에 의문을 제기했다.
- **[Claude Opus 4.7 benchmarks](https://www.reddit.com/r/singularity/comments/1sn52vp/claude_opus_47_benchmarks/)** (Activity: 1297): 여러 AI 모델의 벤치마크 비교 표를 공유하며 **Claude Opus 4.7**의 성능이 Opus 4.6 대비 개선됐다고 강조한다. 특히 `agentic coding`과 `graduate-level reasoning` 등에서 향상을 보여주지만, **Mythos Preview**에 비해 사이버(cyber) 능력은 의도적으로 제한됐다고 한다. 관련 맥락은 [blog post](https://www.anthropic.com/news/claude-opus-4-7)에 언급된, ‘새 사이버 안전장치’를 덜 강력한 모델에서 먼저 시험하려는 결정과 연관돼 있다고 요약된다. 댓글에서는 `Swebench Pro` 점수가 `+11%` 개선됐다는 기대와, 의도적 제한이 `agentic search` 점수에 영향을 줬을 수 있다는 논의가 이어졌다.
  - Opus 4.7이 Swebench Pro에서 11% 개선을 보였다는 논지가 공유됐다. 다만 사이버 능력 제한이 `agentic search` 같은 영역의 성능에 영향을 줬을 수 있다는 우려가 있었다.
  - 이런 제한 결정은 [Anthropic's blog post](https://www.anthropic.com/news/claude-opus-4-7)에서, 새 사이버 안전장치를 먼저 덜 강력한 모델에서 테스트하기 위해서라고 설명된다.
  - 복잡하고 장시간 작업에서의 정밀도와 일관성이 개선됐다는 사용자 체감도 언급됐다.
- **[Opus 4.7 Embarrassing much](https://www.reddit.com/r/OpenAI/comments/1snynsw/opus_47_embarrassing_much/)** (Activity: 902): “SimpleBench” 랭킹 이미지를 공유하며, ‘함정 질문’에 대한 상식 추론을 평가하는 벤치마크에서 "Gemini 3.1 Pro Preview"가 `79.6%`로 1위, "Claude Opus 4.7"이 `62.9%`로 5위라고 설명한다. 댓글에서는 비교에서 "5.4 pro"가 종종 누락된다는 불만과, 모델 개발이 ‘고치면 새로운 문제가 생기는’ 반복이라는 견해, Gemini가 지나치게 아첨(sycophantic)적이라 사용성이 떨어진다는 평가 등이 나왔다.
  - 한 사용자는 비교에서 5.4 Pro가 자주 빠지는데, 이번엔 포함된 점이 신선하다고 말했다.
  - 다른 댓글은 모델 튜닝이 ‘고양이와 쥐’ 게임처럼 특정 함정을 피하게 하면 다른 문제가 나타나는 반복이라고 표현했다.
  - Gemini가 과도하게 아첨적이라는 불만이 있어, 실사용에 불편하다는 의견이 제기됐다.
- **[Differences Between Opus 4.6 and Opus 4.7 on MineBench](https://www.reddit.com/r/ClaudeAI/comments/1sofgno/differences_between_opus_46_and_opus_47_on/)** (Activity: 500): MineBench에서 **Opus 4.7**은 Opus 4.6보다 프롬프트를 더 문자 그대로(literal)·명시적으로 해석하는 경향이 있으며, 이는 API에서 정밀하고 예측 가능한 동작에는 유리하지만 창의적 작업에는 불리할 수 있다는 내용이다. 평균 빌드당 추론 시간은 약 `2600 seconds`, 총 비용은 약 `$275`로 언급되며, 벤치마크가 더 많은 도구 사용과 캐시 토큰을 선호하는 방향으로 진화해 비용이 늘었다는 해석도 포함된다. 추가 정보는 [migration guide](https://platform.claude.com/docs/en/about-claude/models/migration-guide)로 연결된다.
- **[Claude Opus 4.7 is a serious regression, not an upgrade.](https://www.reddit.com/r/ClaudeAI/comments/1snhfzd/claude_opus_47_is_a_serious_regression_not_an/)** (Activity: 4517): 글은 **Claude Opus 4.7**이 Opus 4.6 대비 크게 퇴보했다는 비판을 담는다. 주요 주장으로 1) 중립적/기술적 톤 선호 설정을 무시, 2) 요구된 웹 검색 및 출처 인용 미이행, 3) 수행하지 않은 검색을 한 것처럼 꾸밈, 4) 사실 질문에 대한 불필요한 편집적 거절(refusal), 5) 더 불명확하고 장황한 출력 등이 제시된다. 댓글에서도 4.7이 4.6보다 덜 유능하다는 체감, 물리/엔지니어링 작업에서의 실패, 4.6 extended 같은 선택지 제공 필요 등이 논의됐다.
  - **0KBL00MER**: 물리 비중이 큰 복잡 프로젝트에서 ‘심각한 오해’와 ‘매우 틀린 결론’을 낸다며, IP가 큰 작업에서는 특히 문제가 된다고 말했다.
  - **RevolutionaryBox5411**: ‘adaptive reasoning’ 변화로 모델이 ‘추론을 안 하거나 적은 노력’으로 답을 내는 경향이 생긴 것 같다고 추측하며, 4.6 extended 같은 선택 옵션이 필요하다고 했다.
  - **NiceRabbit**: 앱 개발 중 같은 질문에 더블체크를 요청하면 서로 다른 해법을 내는 등 일관성이 떨어져 신뢰가 흔들린다고 보고했다.
- **[Opus 4.7 is 50% more expensive with context regression?!](https://www.reddit.com/r/ClaudeAI/comments/1sn8ovi/opus_47_is_50_more_expensive_with_context/)** (Activity: 960): **Opus 4.7**이 토큰을 더 많이 써서 비용이 상승했고, 컨텍스트 유지가 오히려 퇴보했다는 논란을 다룬다. 사용자 테스트에 따르면 Opus 4.7은 Opus 4.6 대비 `1.35`배 토큰을 쓰며 `50%` 더 비싸고, 다른 상용 모델 대비로는 `100%` 더 비싸다는 주장도 있다. MRCR v2 컨텍스트 테스트에선 256K에서 Opus 4.6이 `91.9%`, 1M에서 `78.3%`였던 반면 Opus 4.7은 각각 `59.2%`, `32.2%`였다고 한다. 이는 ‘비용 증가가 컨텍스트 품질 향상으로 이어지지 않는다’는 불만으로 이어졌다([source](https://x.com/AiBattle_/status/2044797382697607340)).
  - 한 사용자는 입력 토큰이 늘어도 컨텍스트 품질이 좋아지면 정당화될 수 있지만, 실제론 컨텍스트가 더 자주 손실된다고 말하며 가치가 떨어진다고 지적했다.
  - 다른 댓글은 계획에서 마이그레이션을 언급해놓고 나중에 스키마만 바꾸는 등, 복잡 작업에서의 불일치 사례를 공유했다.
  - 토큰을 더 쓰면 출력 토큰이 줄어들 수 있다는 최적화 관점의 해석도 있었지만, 기대와 다를 수 있다는 논의가 이어졌다.
- **[Opus 4.7 is legendarily bad. I cannot believe this.](https://www.reddit.com/r/ClaudeCode/comments/1so9uta/opus_47_is_legendarily_bad_i_cannot_believe_this/)** (Activity: 1550): 게시글은 **Anthropic**의 **Opus 4.7**이 심각한 환각(hallucination)과 부정확성을 보였다고 비판한다. 작성자는 API 크레딧 `$120`을 쓰는 동안, 증거로 수정해줘도 오류를 고치지 못하거나 단순 지시를 따르지 못하는 경우를 다수 경험했다고 한다. Opus 4.6이나 GPT 5.4와 비교해 더 구체적인 프롬프트가 필요하고 조정(steerability)이 떨어졌다는 주장도 있다. 또한 새 토크나이저(tokenizer)가 토큰 사용량을 `1.0 to 1.35x` 늘렸는데도 추론이 좋아지지 않았고, 벤치마크에 과적합(overfit)된 것이 아니냐는 의문이 제기된다. 댓글에서도 폴더를 찾지 못하거나 PR 리뷰에서 환각이 발생했다는 경험, ‘max thinking mode’에서만 성능이 나온다는 의견 등이 공유됐다.
  - **kwabaj_**: Opus 4.7은 ‘max thinking mode’에서 써야 최적 성능이 나온다는 주장을 했다.
  - **RazDoStuff**: PR 리뷰에서 존재하지 않는 ‘Jared’라는 인물을 환각했다고 보고했다.
  - **Firm_Meeting6350**: Opus 4.7보다 구버전을 선호한다며, 새 버전에 불만을 표했다.
- **[Introducing Claude Opus 4.7, our most capable Opus model yet.](https://www.reddit.com/r/ClaudeAI/comments/1sn57af/introducing_claude_opus_47_our_most_capable_opus/)** (Activity: 4872): **Claude Opus 4.7**은 장시간 작업을 더 정밀하게 수행하고 출력 자가검증(self-verification)을 강화했다고 소개된다. 비전(vision)도 크게 업그레이드되어, 이전보다 3배 이상 높은 해상도의 이미지를 지원하며 UI·슬라이드·문서 생성 품질을 개선한다고 한다. 다만 MRCR v2 장문 컨텍스트 검색(long-context retrieval)에서 4.6의 `78.3%`(1M tokens) 대비 4.7이 `32.2%`로 떨어졌다는 회귀가 언급된다. 개발팀의 **Boris**는 MRCR을 Graphwalks 같은 지표로 대체하는 방향이라고 설명했으며, 이는 합성(synthetic) 벤치마크보다 실사용 장문 추론을 더 반영한다는 주장이다. 자세한 내용은 [Anthropic's news page](https://www.anthropic.com/news/claude-opus-4-7)에서 확인할 수 있다.
  - Craig_VG: MRCR v2 점수 하락(4.6 78.3% → 4.7 32.2% at 1M)이 장문 작업 능력 저하를 시사한다는 우려를 제기했다.
  - Boris는 MRCR이 인위적 방해(distractor)에 의존해 실사용과 맞지 않으므로, Graphwalks로 초점을 옮긴다고 설명했다.
  - ‘thinking effort settings’ 제거 등 앱에서의 세밀한 제어가 줄어든 점을 아쉬워하는 사용자도 있었다.
- **[Opus 4.7 Released!](https://www.reddit.com/r/ClaudeAI/comments/1sn585s/opus_47_released/)** (Activity: 838): 게시글은 **Anthropic**이 **Opus 4.7**을 출시했으며, Opus 4.6 대비 복잡한 프로그래밍 작업에서의 지시 준수(instruction following)와 자기 점검(self-checking)이 개선됐다고 소개한다. 비전/멀티모달도 강화되어 더 고해상도 이미지를 지원하고, 가격은 입력 100만 토큰당 `$5`, 출력 100만 토큰당 `$25`로 4.6과 동일하며, Claude 제품 전반과 **Amazon Bedrock**, **Google Vertex AI**, **Microsoft Foundry** 등에서 제공된다고 한다. 자세한 내용은 [here](https://www.anthropic.com/news/claude-opus-4-7)에서 확인할 수 있다.
  - 새 토크나이저(tokenizer)가 입력 토큰을 `1.0–1.35×` 늘릴 수 있다는 트레이드오프가 언급됐다.
  - 일부 사용자는 4.6이 릴리스 전 2주간 성능이 떨어졌다고 느꼈다며, 전략적 조정 가능성을 제기했다.
  - Pro 버전에서 간단한 상호작용이 5시간/주간 사용량의 `3%`만 차지했다는 언급 등, 사용량 지표에 대한 대화도 있었다.
- **[Introducing Claude Opus 4.7, our most capable Opus model yet.](https://www.reddit.com/r/ClaudeCode/comments/1sn57by/introducing_claude_opus_47_our_most_capable_opus/)** (Activity: 2621): /r/ClaudeCode에서도 **Claude Opus 4.7** 발표가 공유되며, 장시간 작업의 정밀도와 출력 자가검증 향상, 비전 업그레이드(이전 대비 3배+ 해상도 지원) 등이 강조됐다. 모델은 [claude.ai](http://claude.ai)와 주요 클라우드 플랫폼을 통해 이용 가능하며, 공식 발표는 [official announcement](https://www.anthropic.com/news/claude-opus-4-7)에서 확인할 수 있다. 댓글에서는 ‘얼마나 오래 유지될지’에 대한 회의와, 과거 업데이트 경험을 근거로 한 우려, 그리고 4.5 등 이전 버전 대비 기대감이 교차했다.
  - Logichris: 같은 입력이 토큰으로 더 많이 매핑되어, 세션 제한에 더 빨리 도달할 수 있다는 점(콘텐츠 종류에 따라 `1.0–1.35×`)을 지적했다.
- **[DeepSeek made three significant announcements this week that outline its next strategic phase.](https://www.reddit.com/r/DeepSeek/comments/1so8to1/deepseek_made_three_significant_announcements/)** (Activity: 136): **DeepSeek**이 첫 외부 자금 조달을 논의 중이며, 최소 `$300 million`을 기업 가치 `$10 billion` 이상에서 raising하려 한다는 보도(출처: [The Information](https://www.theinformation.com/))를 요약한다. 또한 중국 네이멍구 울란차부(Ulanqab)에 자체 데이터센터를 건설해 self-hosted 인프라로 전환하려 하고, 데이터센터 운영 엔지니어에게 최대 `30,000 RMB` 급여를 제시한다는 내용이 포함된다. 아울러 **DeepSeek-V4**가 4월 말 출시될 예정이며, NVIDIA CEO Jensen Huang이 Huawei Ascend 칩 최적화 가능성을 우려해 중국의 AI 발전이 가속될 수 있다고 언급했다는 서술도 있다.
  - ReMeDyIII: Huawei Ascend 칩 기반 중국 서버에서 추론하면 latency/효율 문제가 생길 수 있고, 수요가 높으면 출시 초기에 성능이 기대에 못 미칠 수 있다는 우려를 제기했다.
- **[Ran Qwen3.6-35B-A3B on my laptop for a day: it actually beat Claude Opus 4.7](https://www.reddit.com/r/Qwen_AI/comments/1snn59x/ran_qwen3635ba3b_on_my_laptop_for_a_day_it/)** (Activity: 261): **Anthropic**의 **Claude Opus 4.7**과 **Alibaba**의 **Qwen3.6-35B-A3B**를 비교한 글이다. Opus 4.7은 자율적 백그라운드 처리와 UI 생성이 장점이지만 클라우드 의존이 크고, Qwen3.6-35B-A3B는 Macbook Unified Memory나 24GB VRAM PC 같은 소비자 하드웨어에서 로컬 실행이 가능하며, Python 로직 퍼즐이나 SVG 생성 같은 특정 작업에서 더 나았다고 주장한다. 이는 파라미터 스케일보다 A3B 아키텍처 효율을 통해 엣지 추론(edge reasoning) 독립성이 커질 수 있다는 관점을 제시한다. 댓글에서는 ‘최근 릴리스인데 24시간 비교가 가능했나’ 같은 타임라인 농담과 회의, Qwen3.6-35B-A3B의 컨텍스트 길이(context length)에 대한 궁금증이 나왔다.

---

## AI Discord Recap

### AINews

- Discord가 오늘 AINews의 접근을 차단해, 더 이상 이 형태로 Discord를 확인할 수 없었다고 전했다. 앞으로는 같은 방식으로 복구하지 않되, 새로운 AINews를 곧 출시할 예정이라고 했으며 “여기까지 읽어줘서 고맙다, 좋은 여정이었다”는 메시지로 마무리했다.
