---
title: "Claude Fable 5 재출시, 안전 폴백 논란"
summary:
  - "Claude Fable 5 재출시, 안전 폴백 논란"
  - "GLM-5.2용 ZCode 개발환경 공개"
  - "Devin Security Swarm이 취약점 검증"
  - "NVIDIA TwoTower, 생성 속도 2.42배 향상"
  - "LangChain OpenWiki가 에이전트 기억 지원"
date: 2026-07-01
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-07-01-not-much.md"
hasHeadline: false
headline: "Claude Fable 5 재출시, 안전 폴백 논란"
tags:
  - Anthropic
  - Claude
  - Fable 5
  - GLM-5.2
  - Agent
isFeatured: false
---

## 헤드라인: Claude Fable 5 재출시, 안전 폴백 논란

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic은 Claude Fable 5를 다시 활성화했지만, 업데이트된 사이버보안 안전장치로 인해 일부 요청이 Opus 4.8로 라우팅될 수 있다고 밝혔다. Cursor, Devin, Perplexity 등 주요 도구가 곧바로 Fable 5를 다시 통합했지만, 높은 작업당 비용과 안전 폴백, 사용량 크레딧 전환이 개발자 커뮤니티의 주요 논쟁점이 됐다.

---

## AI Twitter Recap

### 코딩 모델, 에이전트 하네스, Fable 5 재출시

- **Anthropic이 Claude Fable 5를 다시 활성화했지만, 눈에 띄는 안전 폴백이 동반됐다**: 하루 동안 누적된 수요 끝에 [@claudeai](https://x.com/claudeai/status/2072402636813607381)는 **Fable 5 is back**을 발표했고, 업데이트된 사이버보안 보호장치 때문에 일부 요청이 **Opus 4.8**로 라우팅될 수 있으며 생물학/화학 분류기는 당분간 여전히 과도하게 넓게 작동한다는 설명을 덧붙였다 [@claudeai](https://x.com/claudeai/status/2072402638247968855). 재출시는 곧바로 도구 생태계로 퍼졌다. **Cursor**는 Fable 5가 자체 평가에서 앞서지만 **작업당 비용이 가장 비싸다**고 밝혔다 [@cursor_ai](https://x.com/cursor_ai/status/2072403323844428217). **Devin**은 Cloud/Desktop/CLI 전반에 이를 추가했다 [@cognition](https://x.com/cognition/status/2072405137117548601). **Perplexity**는 이를 오케스트레이터 모델로 복원했다 [@perplexity_ai](https://x.com/perplexity_ai/status/2072433125104505226). Anthropic은 모델이 다시 활성화된 뒤 사용자들의 rate limit도 초기화했다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2072429181565288665).
- **흥미로운 지점은 “모델이 돌아왔다”보다 “사람들이 프런티어 모델 제약에 어떻게 적응하는가”였다**: 여러 빌더는 단일 모델 의존보다 **멀티 모델 오케스트레이션(multi-model orchestration)** 쪽으로 수렴했다. [@theo](https://x.com/theo/status/2072481845363822914)는 Fable을 더 높은 가치의 추론(reasoning)/계획에만 쓰고 구현, 검증, 컴퓨터 사용 작업은 다른 모델에 위임한다고 설명했으며, 엔드투엔드 PR 산출이 크게 개선됐다고 밝혔다 [@theo](https://x.com/theo/status/2072482460122964067). 비슷한 관점은 팀이 하나의 프런티어 모델 중심으로 구축하기보다 **모델 조합 전략**을 설계해야 한다고 주장한 [@omarsar0](https://x.com/omarsar0/status/2072400978079261041), 그리고 안정적인 라우팅은 종종 작업을 먼저 풀어야 가능하다며 “간단한 작업 사전 분류기”에 반박한 [@MParakhin](https://x.com/MParakhin/status/2072275413116784961)에게서도 나왔다. 벤치마크 측면에서는 [@kimmonismus](https://x.com/kimmonismus/status/2072376968729817531)가 **Remote Labor Index에서 Fable 5의 16.10%**를 강조했고, [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072427328689619241)는 **Sonnet 5**가 **AA-Briefcase**에서 2위를 기록했지만 턴 수가 훨씬 많고 낮은 effort 설정에서는 비용 대비 성능 트레이드오프가 약하다고 전했다.

### 오픈 모델, 중국 연구소, GLM-5.2 주변의 확장되는 코딩 스택

- **Z.ai는 GLM-5.2 체크포인트만 내놓는 것이 아니라 제품 접점을 만들고 있다**: 가장 구체적인 출시는 **GLM-5.2**용 공식 개발 환경인 **ZCode**였다. BYOK 지원, 크로스플랫폼 제공, 코딩 플랜 구독자를 위한 할당량 증가가 포함됐다 [@Zai_org](https://x.com/Zai_org/status/2072349453361557898). [@kimmonismus](https://x.com/kimmonismus/status/2072378141041991702)의 코멘터리는 이를 GLM 워크플로와 장시간 자율 작업에 최적화된 AI 네이티브 코딩 IDE로 해석했다. 주변 생태계도 빠르게 움직이고 있다. **LangChain**은 코딩 플로에서 GLM-5.2를 사용하는 가이드를 공개했고 [@LangChain](https://x.com/LangChain/status/2072334663457067064), [@hwchase17](https://x.com/hwchase17/status/2072344890755977571)는 개발자들이 GLM-5.2를 daily driver로 쓰기 시작했다는 점을 명시적으로 짚었다.
- **벤치마크는 오픈 코딩 모델이 전체 프런티어 성능을 앞서지는 못하더라도 특정 격차를 좁히고 있음을 시사한다**: [@mercor_ai](https://x.com/mercor_ai/status/2072448918751941041)는 **GLM 5.2**가 **APEX-SWE**에서 카테고리를 선도한 첫 오픈 모델이라고 보고했다. **Integration에서 55.3% Pass@1**을 기록했고, 해당 평가에서 테스트된 오픈 모델 중 종합적으로 가장 높았다. **Kimi K2.7**도 근소하게 뒤따랐다. 이는 GLM이 서구권 최상위 프런티어 모델을 넘어섰다고 과장해서는 안 되지만 코딩 격차가 빠르게 줄고 있다는 점은 인정한 [@scaling01](https://x.com/scaling01/status/2072346101068238946)의 경고와도 맞물린다.
- **오픈 모델 주변의 추론(inference) 작업도 이야기의 중요한 부분이 되고 있다**: [@vllm_project](https://x.com/vllm_project/status/2072545387639189798)는 DeepSeek 모델용 **DSpark speculative decoding** 네이티브 지원을 **vLLM**에 추가했다. 8×B300에서 약 **250 tok/s**를 보고했고 MTP 대비 acceptance가 개선됐다고 밝혔다. [@mgoin_](https://x.com/mgoin_/status/2072525522639212825)는 대략 **1.5× 빠른 decode**를 주장하는 **GLM-5.2 DSpark preview**를 공개했다. 별도로 [@jon_durbin](https://x.com/jon_durbin/status/2072293557172363720)는 **Qwen3-32B**에서 사내 **dflash** drafter를 사용해 동일 하드웨어에서 **약 50% 더 높은 처리량**을 얻었다고 보고했다.

### 에이전트 인프라: 메모리, 위키, 스킬 조합, 구조화 워크플로

- **“위키 메모리”가 에이전트의 실용적 설계 패턴으로 떠오르고 있다**: [@sydneyrunkle](https://x.com/sydneyrunkle/status/2072311589072486879)는 **위키 구조 메모리**를 단순하고 확장 가능한 기반으로 제안했고, 이 아이디어는 빠르게 제품 출시로 이어졌다. **LangChain**은 `openwiki --init`으로 에이전트가 소비할 수 있는 코드베이스 문서를 생성하고 유지하는 도구인 **OpenWiki**를 출시했다 [@BraceSproul](https://x.com/BraceSproul/status/2072375499125596262), [@LangChain](https://x.com/LangChain/status/2072376975545798792). 글 전반의 동기는 일관됐다. 에이전트는 스레드 사이에서 작업 컨텍스트를 반복적으로 잃기 때문에 원시 로그가 아니라 유지되고 점검 가능한 지식 계층이 필요하다 [@caspar_br](https://x.com/caspar_br/status/2072420582717858292).
- **메모리 시스템은 검색 전용에서 조정과 유지보수로 이동하고 있다**: Weaviate의 **Engram** 제안이 이를 잘 보여준다. 후보 메모리를 추출하고, 기존 메모리에 맞춰 변환한 뒤에야 커밋해 모순을 매 쿼리마다 해결하지 않고 한 번에 정리한다 [@PrajjwalYd](https://x.com/PrajjwalYd/status/2072291317695324410). [@bpalit](https://x.com/bpalit/status/2072378273343082537)는 같은 주장을 엔터프라이즈 환경으로 확장한다. 에이전트 메모리는 단순한 마크다운 파일 폴더가 아니라 거버넌스, 권한 인식, 공유가 필요하다는 것이다.
- **구조화된 조합이 “모델에 모든 도구를 주는” 순진한 접근을 대체하고 있다**: [@omarsar0](https://x.com/omarsar0/status/2072430551446032847)는 스킬 선택을 공동 자기회귀 조합 문제로 다루며 SkillsBench에서 무스킬 기준 대비 **+23.1pp / +18.2pp** 향상을 보고한 **SkillComposer**를 소개했다. 프레임워크 측면에서는 Deep Agents가 **재귀적 언어 모델 워크플로** 지원을 추가했고 [@sydneyrunkle](https://x.com/sydneyrunkle/status/2072348322526810594), [@hwchase17](https://x.com/hwchase17/status/2072377816780624266)는 **동적 서브에이전트**를 **Agentic MapReduce** 같은 패턴과 연결했다. 더 명시적인 워크플로 구조, fan-out/fan-in 패턴, 코드로 강제되는 오케스트레이션이라는 방향은 여러 제품과 벤치마크에서 반복적으로 나타났다.

### 보안, 평가, Agentic MapReduce

- **Cognition의 Devin Security Swarm은 실제 엔터프라이즈 워크플로에 특화된 에이전트 아키텍처의 더 분명한 사례 중 하나다**: 이 시스템은 **Agentic MapReduce**를 사용해 코드베이스 전반에 제한된 에이전트를 fan-out하고, 발견 사항을 집계하며, 확인된 취약점만 표시하기 전에 exploit 가능성을 검증한다 [@cognition](https://x.com/cognition/status/2072368168182432109). Cognition은 이 방식이 대안보다 **비용 효율적이고 정확하다**고 주장하며, Fortune 500 파일럿에서 프로덕션 저장소의 **천 개가 넘는 취약점**을 찾아 수정했다고 밝혔다 [@walden_yan](https://x.com/walden_yan/status/2072377406267273248). [@jakejluo](https://x.com/jakejluo/status/2072380678419705949), [@levie](https://x.com/levie/status/2072519377371459836) 같은 빌더들의 더 넓은 반응은 이 패턴이 대규모 문서, 코드, 지식 워크플로로 일반화될 것이라는 쪽이었다.
- **AI 에이전트 평가는 빠르게 별도 하위 분야가 되고 있다**: [@random_walker](https://x.com/random_walker/status/2072375245969719374)는 에이전트 평가를 발전시키는 여러 새 논문을 언급하며 이를 독립된 분야로 설명했다. 실용적 예시로는 **Agent Arena**가 에이전트 모드에서 Fable 5를 다시 활성화한 것 [@arena](https://x.com/arena/status/2072423538641031372), megawatt당 에이전트 성능 시스템 벤치마크인 **AA-AgentPerf** [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2072254061244825981), 그럴듯한 시뮬레이션 생성이 아니라 실제로 좋은 의사결정을 지원하는지 평가하는 **WorldModelGym** [@RekaAILabs](https://x.com/RekaAILabs/status/2072325792558956573)이 포함됐다.
- **AI 실패를 더 잘 보고하기 위한 파이프라인을 향한 움직임도 있다**: 사이버와 AI 안전 연구자를 아우르는 연합과 함께 출시된 **FLARE-AI**는 **결함과 사고 보고**를 표준화해, 문제가 분절된 접수 양식 속에서 사라지는 대신 적절한 개발자와 레지스트리로 라우팅되도록 하는 것을 목표로 한다 [@ClementDelangue](https://x.com/ClementDelangue/status/2072401982569025742), [@ShayneRedford](https://x.com/ShayneRedford/status/2072408461015707883).

### 주목할 시스템, 추론, 아키텍처 작업

- **NVIDIA의 TwoTower 결과는 생성 아키텍처에서 구체적인 속도/품질 트레이드오프로 돋보인다**: [@NVIDIAAI](https://x.com/NVIDIAAI/status/2072394812301480067)는 30B 모델을 두 복사본 구성으로 토큰을 병렬 작성하는 diffusion-style 언어 모델로 바꾼 **Nemotron-Labs-TwoTower**를 소개했다. 주장된 결과는 원본 모델 품질의 **98.7%**를 유지하면서 **2.42× 빠른 생성**이다. [@LiorOnAI](https://x.com/LiorOnAI/status/2072402904867365167)는 이 기법을 동결된 context model과 학습된 writer model을 재사용해 처음부터 전체 재학습을 피하는 방식으로 요약했다.
- **온디바이스와 브라우저 추론은 에이전트식 최적화와 특화 런타임의 혜택을 계속 받고 있다**: [@googlegemma](https://x.com/googlegemma/status/2072416614188974274)는 Fable 5로 작성된 커널 덕분에 **M4에서 255 tok/s**로 실행되는 **WebGPU Gemma 4**를 강조했다. [@andimarafioti](https://x.com/andimarafioti/status/2072335408294236164)는 OpenAI realtime API의 drop-in 대안을 목표로 **Cerebras** 추론(inference)을 쓰는 **Gemma 4 31B** 기반 완전 오픈소스 실시간 음성 스택을 시연했다. 커널 수준에서는 Hugging Face의 kernels 라이브러리가 이제 MiniMax의 **MSA kernel**을 노출하고 있으며 [@RisingSayak](https://x.com/RisingSayak/status/2072277942554841292), Triton-on-Mac도 관심을 끌었다 [@QuixiAI](https://x.com/QuixiAI/status/2072345855093289005).
- **일반적인 LLM 스케일링을 넘어선 아키텍처 연구도 등장했다**: [@gklambauer](https://x.com/gklambauer/status/2072213633640075366)는 잠재 상태 예측 오류를 통한 **test-time adaptation**을 갖춘 LeCun 주도의 world-model 접근인 **AdaJEPA**를 언급했다. [@LiorOnAI](https://x.com/LiorOnAI/status/2072380547603829224)는 **NEO**를 다음 프레임 예측만이 아니라 재사용 가능한 인과적 “프로그램”을 학습하는 방식으로 요약했다. [@ziv_ravid](https://x.com/ziv_ravid/status/2072402889092616309)는 “상상 속 훈련”이 단순한 추측이 아니라 활발한 패러다임이라고 강조했다.

### 상위 트윗 (참여도 기준)

- **Fable 5 가용성이 기술적 관심을 지배했다**: [@claudeai: “Fable 5 is back.”](https://x.com/claudeai/status/2072402636813607381), [@ClaudeDevs on rate-limit resets](https://x.com/ClaudeDevs/status/2072429181565288665), [@cursor_ai on Fable 5 leading CursorBench](https://x.com/cursor_ai/status/2072403323844428217).
- **폭넓게 도달한 시스템/인프라 출시**: [@NVIDIAAI on TwoTower’s 2.42× faster generation at 98.7% quality retention](https://x.com/NVIDIAAI/status/2072394812301480067).
- **오픈 모델 생태계의 모멘텀**: [@Zai_org launching ZCode for GLM-5.2](https://x.com/Zai_org/status/2072349453361557898) 및 [@TogetherCompute announcing its $800M Series C at an $8.3B valuation](https://x.com/vipulved/status/2072321276094673083).
- **신호가 강한 도구와 지식 계층 출시**: [@LangChain/OpenWiki](https://x.com/LangChain/status/2072376975545798792) 및 [@cognition/Devin Security Swarm](https://x.com/cognition/status/2072368168182432109).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

### 오픈 가중치 모델 출시와 로컬 런타임 벤치마크

- **[I extended Gemma4-31B to 44B (88 layers)  — since Google won't give us anything bigger than 31B](https://www.reddit.com/r/LocalLLaMA/comments/1ul0cx9/i_extended_gemma431b_to_44b_88_layers_since/)** (Activity: 747): 이 이미지는 해당 게시물이 주장하는 Gemma4 확장에 대한 **기술 아키텍처 인포그래픽**이다. Gemma4-31B 스타일의 `60`층 하이브리드 베이스를 attention layer 삽입으로 `80`층까지 확장한 뒤, 블록 복제로 `88`층 / 약 `44–47B` 파라미터 변형으로 만드는 과정을 도식화한다. 안정성을 위해 **identity initialization**, zero-init weights, `layer_scalar = 1.0` 설정을 강조한다. 작성자는 베이스 모델의 조밀한 지식을 덮어쓰지 않으면서 한국어 법률/STEM 미세조정(fine-tuning)을 위한 “빈 용량”을 추가하는 것이 목표라고 설명하며, 구현/작성 내용을 [Hugging Face model card](https://huggingface.co/TOTORONG/extGemma4-44B)에 연결했다. 이미지 자체는 여기에 있다: [https://i.redd.it/qbkvzo4s3pah1.png](https://i.redd.it/qbkvzo4s3pah1.png). 댓글의 주된 기술적 피드백은 이 방법을 더 단순한 **RYS / “repeat yourself”** 기준선, 즉 순차 레이어를 직접 복제하는 빠르고 거친 모델 확장 전략과 비교해야 한다는 것이었다.
- **주요 댓글**: 한 댓글 작성자는 44B/88층 Gemma 확장을 **RYS (Repeat Yourself)** 기준선과 벤치마크하자고 제안했다. 원본 모델의 순차 레이어를 직접 복제해 파라미터 수를 늘리는 방식과 비교하면, 제안된 레이어 확장 전략이 비슷한 크기의 모델에서 단순 반복보다 나은지 판단하는 데 유용하다는 주장이다.
- **주요 댓글**: 커뮤니티 빌드가 나오면 후속 **양자화(quantization)** 작업에 관심이 있다는 반응도 있었다. 이는 44B 모델의 실용성이 데이터센터급이 아닌 하드웨어용 저정밀도 릴리스에 달려 있음을 시사한다. 다른 댓글은 이 접근을 Llama 2 / Llama 3 시절 공식 대형 체크포인트가 나오기 전 탐색됐던 “Frankenstein” 대형 모델 실험과 비슷한 맥락으로 보았다.

- **[nvidia/Qwen3.6-27B-NVFP4 just dropped](https://www.reddit.com/r/LocalLLaMA/comments/1ujlltn/nvidiaqwen3627bnvfp4_just_dropped/)** (Activity: 702): **NVIDIA**가 **Qwen3.6-27B**의 NVFP4/혼합 정밀도 양자화(quantization) 변형인 [`nvidia/Qwen3.6-27B-NVFP4`](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)를 공개했다. 댓글 작성자들은 공개된 모델 크기가 약 `22 GB`라고 언급했는데, 이는 `32 GB` VRAM에서는 약 `26 GB`인 [`unsloth/Qwen3.6-27B-NVFP4`](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)보다 실질적으로 낫다. 다만 NVFP4 배포에는 스케일링/메타데이터와 `F8_E4M3` 같은 혼합 FP8 구성요소가 포함되는 경우가 많아, 일부가 “4-bit”에서 기대한 것보다는 여전히 크다. 핵심 논쟁은 기대치 조정이다. 사용자들은 NVFP4가 Q8/FP8의 절반에 더 가까울 것으로 기대했지만, 다른 이들은 혼합 정밀도 오버헤드가 예상보다 작은 압축률을 설명한다고 보았다.
- **주요 댓글**: 댓글 작성자들은 `Qwen3.6-27B`의 **NVIDIA**와 **Unsloth** NVFP4 릴리스를 비교했다. NVIDIA 산출물은 약 `22 GB`, Unsloth는 약 `26 GB`로 보고되어 NVIDIA 버전이 `32 GB` VRAM 카드에서 더 실용적이라는 평가다. 한 사용자는 둘 다 혼합 정밀도 형식으로 보이기 때문에 FP8 대비 크기 감소가 명목상 “4-bit” 모델에 기대한 것보다 작다고 언급했다.
- **주요 댓글**: `NVFP4` 양자화 `27B` 모델이 여전히 `22 GB`인 이유를 두고 혼란이 있었다. 일부 사용자는 Q8의 절반에 더 가까운 크기를 기대했다. 스레드는 일부 혼합 정밀도 레이아웃에서 주 가중치에 쓰이는 `F8_E4M3`, 즉 지수 4비트와 가수 3비트의 FP8 형식에 대한 질문도 제기했다.
- **주요 댓글**: 사용자들은 NVIDIA 릴리스가 [`unsloth/Qwen3.6-27B-NVFP4`](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)와 어떻게 비교되는지, llama.cpp 스타일 추론(inference)을 위한 **GGUF** 변환이 나올지 물었다. 또 다른 기술 질문은 모델이 추론 중 **MTP**를 지원하는지였다.

- **[[audio.cpp] VibeVoice 1.5B released — 90-min podcast in 22.95 min, 4.08x real-time, 2.86x faster than Python without quantization. Native C++/ggml](https://www.reddit.com/r/LocalLLaMA/comments/1uk7khq/audiocpp_vibevoice_15b_released_90min_podcast_in/)** (Activity: 583): **audio.cpp**가 **VibeVoice 1.5B**에 대한 네이티브 C++/`ggml` 지원을 추가했다. **RTX 5090**에서 `5615.73s` / `93.60 min` 길이의 다중 화자 TTS 생성을 `1376.84s` / `22.95 min`, `RTF=0.245`로 벤치마크했다. 이는 `4.08×` 실시간이며, **양자화(quantization) 없이** `10` diffusion step으로 Python 기준선보다 `2.86×` 빠르다. 작성자는 이를 장문 TTS 런타임 이정표로 설명했다. 재사용 가능한 세션, 서버형 로컬 추론(inference), 안정적인 메모리 동작, CUDA 최적화에 초점을 맞추며, `16/28` 모델 패밀리가 [audio.cpp repo](https://github.com/0xShug0/audio.cpp)에 공개됐다.
- **주요 댓글**: 한 댓글 작성자는 **Qwen3-TTS**와 **PocketTTS** 같은 다른 TTS 백엔드를 다룬 이전 `audio.cpp` 성능 논의를 연결했다. 이는 보고된 VibeVoice `1.5B` 네이티브 C++/ggml 처리량을 이전 로컬 TTS 벤치마크와 비교하는 데 유용하다: [previous perf thread](https://www.reddit.com/r/LocalLLaMA/s/GNRnwiL7Nh).
- **주요 댓글**: VibeVoice `1.5B`를 넘어 `audio.cpp` 지원을 확장하는 데 명시적인 관심이 있었고, 더 큰 **VibeVoice 7B** 모델 요청도 있었다. 이는 같은 C++/ggml 런타임에서 모델 규모별 품질/속도 트레이드오프를 벤치마크하려는 수요를 시사한다.
- **주요 댓글**: 한 사용자는 보고된 `4.08x` 실시간 생성과 Python 대비 `2.86x` 속도 향상이 자신의 워크플로에서 로컬 **TTS와 voice conversion**을 실용적으로 만들 수 있다고 봤으며, 구현 노력과 코딩 모델이 저수준 C++ 작업에 실제로 도움이 됐는지도 물었다.

- **[Huawei open-sources OpenPangu-2.0-Flash - 92B total,6B active](https://www.reddit.com/r/LocalLLaMA/comments/1ujn5u3/huawei_opensources_openpangu20flash_92b_total6b/)** (Activity: 512): **Huawei**가 `512K` 컨텍스트 MoE 모델인 **OpenPangu-2.0-Flash**를 오픈소스화했다. 발표에 따르면 총 `92B` 파라미터, 활성 `6B` 파라미터 모델이며 **가중치, 추론 코드, 학습 연산**을 공개했다 [X](https://x.com/Chinazhidx/status/2071877413685109071). 같은 게시물은 더 큰 `505B` 총 파라미터 / `18B` 활성 파라미터의 `512K` 컨텍스트 플래그십인 **OpenPangu-2.0-Pro**가 7월 출시 예정이며, 올해 말 추가 오픈소스 구성요소가 뒤따를 것이라고 밝혔다. 후속 벤치마크/주장 스레드는 [here](https://x.com/CalatheaAI/status/2071917592810496273)에 연결돼 있다.
- **주요 댓글**: 댓글 작성자들은 **OpenPangu-2.0-Flash**에서 가장 기술적으로 중요한 부분이 원시 벤치마크 품질보다 공개 방식일 수 있다고 강조했다. Huawei가 **가중치, 데이터셋, 학습 세부사항**을 공개하며 “완전 오픈소스”에 가까운 방향으로 움직이는 것처럼 보인다는 점이, 모델과 런타임 생태계를 함께 구축하는 하드웨어 벤더로서 주목할 만하다는 평가다.
- **주요 댓글**: “above Gemma 4”라는 주장에는 회의적 반응이 있었다. 비교 대상이 **Gemma 3/4 스타일 dense 또는 `26B-A4B` 같은 MoE 변형** 중 무엇인지 불분명하다는 지적이다. `92B` 총 / `6B` 활성 MoE 모델이 작은 활성 파라미터 기준선을 이기는 것은 강한 결과가 아닐 수 있다는 우려다.
- **주요 댓글**: 기술적으로 중요한 지점은 **Pangu가 NVIDIA GPU가 아니라 Huawei 가속기에서 전적으로 학습됐을 수 있다**는 점이었다. 이는 수출 통제 제약 아래 전략적으로 의미가 있다. 한 댓글은 DeepSeek이 학습에 Huawei 칩을 쓰려 했지만 클러스터 디버깅 문제로 주로 추론에만 Huawei를 썼다는 보도와 대조하며, Pangu를 비NVIDIA 국내 하드웨어에서도 사용 가능한 LLM을 학습할 수 있다는 증거로 해석했다.

### Less Technical AI Subreddit Recap

포함 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### Claude Sonnet 5 출시 벤치마크

- **[Introducing Claude Sonnet 5, our most agentic Sonnet yet.](https://www.reddit.com/r/ClaudeAI/comments/1ujwggp/introducing_claude_sonnet_5_our_most_agentic/)** (Activity: 3549): [benchmark table](https://i.redd.it/gspb3e6begah1.png)은 Anthropic이 **Claude Sonnet 5**를 **Sonnet 4.6**의 더 에이전트적인 후속 모델로 발표한 내용을 뒷받침한다. 코딩, 추론(reasoning), 컴퓨터 사용, 지식 작업 전반에서 개선을 보인다. 보고된 점수는 **SWE-bench Pro** `63.2%`, **Terminal-Bench 2.1** `80.4%`, **OSWorld-Verified** `81.2%`이며, Sonnet 5를 **Opus 4.8**에 가깝게 위치시킨다. 게시물은 더 낮은 가격과 Free/Pro 플랜에서 더 넓은 기본 가용성도 주장한다.
- **주요 댓글**: 댓글 작성자들은 **Claude Sonnet 5**가 **Opus 4.8** 품질에 접근하면서 출력이 훨씬 적다면 매력적일 수 있다고 보았다. 한 사용자는 *“nearly as well as Opus 4.8 with a third of the output”* 수준이면 채택하겠다고 말해, 낮은 장황함, 줄어든 토큰 비용, 더 빠른 에이전트 루프에 대한 관심을 드러냈다.
- **주요 댓글**: **Opus**를 고수준 계획/오케스트레이션에 쓰고 실행은 더 저렴한 **Sonnet agents**에 위임하는 기술 워크플로도 설명됐다. 댓글 작성자는 더 나은 저비용 모델이 모든 작업에 Opus/Fable급 모델을 요구하지 않게 해 멀티 에이전트 구성을 더 실용적이고 접근 가능하게 만든다고 주장했다.

- **[Looks like Anthropic quietly updated the Sonnet 5 'Agentic search' benchmark graph overnight](https://www.reddit.com/r/ClaudeAI/comments/1ukgqwr/looks_like_anthropic_quietly_updated_the_sonnet_5/)** (Activity: 1173): 이미지는 Anthropic의 **“Agentic search performance by effort level”** BrowseComp 차트 두 버전을 비교한다. 새 버전은 두 축을 다시 스케일링/확장한 것으로 보이며, **Sonnet 5**, **Opus 4.8**, **Sonnet 4.6**의 **pass-rate vs. cost-per-task** 위치를 실질적으로 바꾼다. 기술적 의미는 새 벤치마크 결과 자체가 아니라 발표/재현성 우려다. 업데이트된 차트는 모델들이 더 높은 pass rate와 비용 주변에 밀집된 것처럼 보이게 해, 원래 그래프의 축 스케일이 틀렸는지, 표시 값이 잘못됐는지, 설명 없이 조용히 수정됐는지 의문을 낳았다. [Image](https://i.redd.it/rwtrj2vq6lah1.jpeg)
- **주요 댓글**: 댓글 작성자들은 Anthropic의 “Agentic search” 벤치마크 시각화가 단순한 축 스케일 수정이나 모델 값 교체가 아니라 *상당히 다른 차트*로 바뀐 것 같다는 방법론적 우려를 제기했다. 핵심 기술적 시사점은 재현 가능한 데이터, 버전이 관리되는 방법론, 변경 로그가 없는 벤더 공개 벤치마크 그래프에 대한 회의론이다. 사실상 “trust me bro” 차트라고 묘사됐다.

- **[Sonnet 5 is worse than Opus at the same price at high and xhigh?](https://www.reddit.com/r/ClaudeAI/comments/1ujx3rw/sonnet_5_is_worse_than_opus_at_the_same_price_at/)** (Activity: 1173): [image](https://i.redd.it/usofw9d8pgah1.jpeg)는 effort level별 **Sonnet 5**, **Opus 4.8**, **Sonnet 4.6**의 **BrowseComp agentic search performance vs. cost per task** 벤치마크 차트다. `high`와 `xhigh` effort에서 **Opus 4.8이 Sonnet 5보다 비용 효율적**임을 시사한다. Opus는 비슷한 비용에서 약 `70–72%` pass rate에 도달하는 반면 Sonnet 5는 약 `65–69%`에서 상한을 보이며, 같은 가격대에서 Sonnet 5가 Opus보다 나쁠 수 있다는 게시물 제목의 주장을 뒷받침한다.
- **주요 댓글**: 사용자들은 **high 설정에서 Sonnet 5의 지연 시간과 쿼터 효율이 좋지 않다**고 보고했다. 한 댓글 작성자는 기준 기반 outline scoring 작업이 `17 minutes` 걸리고 `5X` 세션의 `9%`를 소비했다고 말했으며, **Opus 4.6/4.8**은 같은 작업을 약 `3 minutes`, `4–5%` 세션 사용량으로 완료했다고 전했다. 이는 비슷한 표면 가격에도 일부 워크로드에서 Sonnet 5가 실제 처리량/비용 면에서 훨씬 나쁠 수 있음을 시사한다.
- **주요 댓글**: 반론은 어떤 그래프 티어를 읽느냐에 따라 비교가 달라진다는 것이었다. **Sonnet 5 High**는 **4.6 Low**와 거의 같은 비용이면서 성능을 개선한다고 설명됐고, **Sonnet 5 Medium**은 **4.6 전체**보다 훨씬 저렴하면서 대략 비슷한 성능을 제공한다고 주장됐다. 기술적 논쟁의 중심은 high/xhigh 티어가 올바른 비교점인지, 아니면 medium/low 비용 대비 성능 위치를 봐야 하는지다.

### Claude Fable 5 수출 통제와 보호장치

- **[Claude Mythos 5/Fable 5 export restrictions lifted](https://www.reddit.com/r/ClaudeAI/comments/1uk5ihe/claude_mythos_5fable_5_export_restrictions_lifted/)** (Activity: 1602): [image](https://i.redd.it/39qj3w9waiah1.jpeg)는 **2026년 6월 30일** 날짜의 미국 상무부 서한으로, 6월 12일 서한에서 부과됐던 **Anthropic의 Claude Mythos 5와 Claude Fable 5**에 대한 수출 라이선스 요건이 **철회**됐다고 명시한다. 기술적으로 이는 해당 상무부 라이선스 없이도 이 모델 가중치/서비스의 수출, 재수출, 국내 이전이 가능해졌음을 의미한다. 이는 보안 위험에 대한 Anthropic의 완화 조치에 대응한 것으로 보이며, 게시물은 [Anthropic announcement on X](https://x.com/AnthropicAI/status/2072106151890809341)도 연결한다.
- **주요 댓글**: 한 댓글 작성자는 수출 제한 해제가 **기존 Claude Mythos 5/Fable 5 결과와의 비교 벤치마크**로 이어져야 한다고 주장했다. 특정 영역의 역량을 줄이기 위한 학습 시점 또는 후학습 개입이 의도치 않게 다른 영역 성능을 떨어뜨릴 수 있기 때문이다. 우려는 복원된 접근이 변경 없는 모델 동작을 의미한다고 가정하지 말고 역량 퇴행을 감지해야 한다는 데 있다.

- **[Fable 5 is back.](https://www.reddit.com/r/ClaudeAI/comments/1ukvjyn/fable_5_is_back/)** (Activity: 2607): **Anthropic은 미국 정부와의 논의 뒤 Fable 5가 재배포됐다고 밝혔다**. 업데이트된 사이버보안 보호장치로 인해 일시적으로 false-positive 안전 폴백이 늘어날 수 있으며, 플래그된 요청은 대신 **Opus 4.8**로 라우팅된다. 생물학/화학 분류기는 출시 당시와 같고 여전히 일부 기본적인 바이오 인접 질의에도 폴백을 유발할 만큼 넓게 작동하며, 수정은 곧 제공될 예정이다. 유료 플랜은 **7월 7일**까지 **주간 사용량의 50%** 한도로 프로모션 접근을 받으며, 이후에는 사용량 크레딧으로 계속 접근할 수 있다 ([support details](https://support.claude.com/en/articles/15424964-claude-fable-5-promotional-access), [blog post](https://www.anthropic.com/news/redeploying-fable-5)).
- **주요 댓글**: `$100` 플랜 사용자는 **Fable 5**에 최근 기능 추가 사항 검토를 요청하자 Fable 서브에이전트 `18`개가 생성되어 `5 hour` 사용 블록의 남은 약 `50%`를 빠르게 소비했다고 보고했다. 중단하고 멈추거나 토큰 제한을 요청했는데도 에이전트들은 마무리만 시작했고, 계정은 약 `120 seconds` 만에 한도의 `101%`에 도달했다. 이는 자율 서브에이전트 fanout에서 심각한 크레딧 소모가 생길 수 있음을 보여준다.
- **주요 댓글**: 여러 댓글 작성자는 Fable이 **usage credits**로 다시 전환되면 많은 사용자가 가격 때문에 정기 사용을 못 할 수 있다고 우려했다. 보고된 서브에이전트 동작은 시스템이 더 엄격한 동시성, 토큰, 에이전트 생성 제어를 노출하지 않으면 비용 예측 가능성이 큰 문제가 될 수 있음을 시사한다.

- **[Fable available for plans until July 7th after which it becomes usage credit based](https://www.reddit.com/r/ClaudeAI/comments/1ukafrm/fable_available_for_plans_until_july_7th_after/)** (Activity: 2039): **Anthropic**은 **Fable 5**가 Claude Platform, [Claude.ai](https://claude.ai), Claude Code, Claude Cowork에서 전 세계적으로 재배포되고 있으며, Pro/Max/Team/일부 Enterprise 플랜은 **7월 7일**까지 주간 사용량 한도의 최대 `50%`로 접근할 수 있고 이후에는 **usage credits**로 전환된다고 밝혔다 ([announcement](https://www.anthropic.com/news/redeploying-fable-5)). **AWS**, **Google Cloud**, **Microsoft Foundry**를 통한 클라우드 가용성도 복원되고 있으며, **Mythos 5**는 승인된 미국 조직으로 제한된다. Anthropic은 주요 클라우드 파트너와 공유 jailbreak severity 프레임워크를 조율하고 있으며, Fable 5 사이버 jailbreak 보고를 위한 **HackerOne** 채널도 연다고 밝혔다.
- **주요 댓글**: 사용자들은 Fable 출시가 원래 예상된 플랜 기반 접근 `14`일에서 대략 `7`일과 7월 7일 이후 사용량 크레딧 과금으로 실질적으로 바뀌었다는 우려를 제기했다. 가장 구체적인 비용 데이터는 **Opus 4.8**에서 단일 세션이 `$124` 사용량을 소비했다는 주장이었고, 댓글 작성자들은 지속 사용이 많은 사용자에게 경제적으로 비현실적이라고 주장했다.
- **주요 댓글**: 여러 댓글 작성자는 구독/플랜 접근에서 사용량 기반 크레딧으로 이동한 것을 단순한 가용성 변화가 아니라 중요한 가격 모델 후퇴로 해석했다. 논의는 기능 품질보다 metered inference 비용, 줄어든 접근 기간, 줄어든 포함 사용량의 실질적 영향에 집중됐다.

- **[Fable is going to be redirecting coding task to Opus 4.8](https://www.reddit.com/r/ClaudeAI/comments/1ukcmji/fable_is_going_to_be_redirecting_coding_task_to/)** (Activity: 1043): 이미지는 **Claude Fable 5**가 다시 전 세계적으로 제공되지만, 강화된 안전 분류기가 더 많은 사이버보안 관련 작업을 차단하고 일반 코딩/디버깅 작업을 대략 **7월 7일**까지 일시적으로 **Opus 4.8**로 라우팅한다고 주장하는 **Anthropic X 게시물**의 스크린샷이다. 기술적 의미는 고급 코딩 가능 모델로 여겨지는 모델이 안전 완화 조치와 폴백 라우팅에 의해 제약을 받는다는 점이며, 벤치마크 타당성과 실제 가용성/유용성 사이의 질문을 제기한다. [Image](https://i.redd.it/1opie5x50kah1.jpeg)
- **주요 댓글**: 한 댓글 작성자는 정책이 오해되고 있다고 정리했다. 참조 문서에 따르면 **모든 코딩 작업**이 Opus 4.8로 리디렉션되는 것이 아니라, **보안 위험**으로 분류된 프롬프트만 Opus로 라우팅/폴백된다. 따라서 핵심 기술 문제는 코드 관련 요청이 위험 영역으로 넘어섰다고 판단하는 안전 분류기의 동작과 정확도다.

---

## AI Discord Recap

### 공지

- **Discord 접근 중단**: 아쉽게도 오늘 Discord 접근이 중단됐다. 이 형식으로는 다시 가져오지 않지만, 새 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
