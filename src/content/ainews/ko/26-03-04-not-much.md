---
title: "OpenAI, Windows용 Codex 앱과 오픈소스 샌드박스 공개"
summary:
  - "OpenAI, Windows용 Codex 앱 공개"
  - "Alibaba Qwen, 조직 개편·컴퓨트 논란"
  - "Gemini 3.1 Flash-Lite, 속도·비용 강조"
  - "SSD 추론, vLLM/SGLang 대비 최대 2배"
  - "VS Code, 에이전트 기능 강화·주간 출시"
date: 2026-03-04
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-04-not-much.md"
hasHeadline: false
headline: "OpenAI, Windows용 Codex 앱과 오픈소스 샌드박스 공개"
tags:
  - OpenAI
  - Anthropic
  - Google
  - Qwen
  - vLLM
isFeatured: true
---

## 헤드라인: OpenAI, Windows용 Codex 앱과 오픈소스 샌드박스 공개

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI DevRel이 **Codex for Windows**를 발표했다. OS 제어(제한 토큰, ACL, 전용 사용자 등)로 승인 전까지 파일시스템/네트워크 접근을 제한하는 **Windows 네이티브 에이전트 샌드박스**를 제공하며, 구현은 **오픈소스**로 공개됐다고 한다. AJ Ambrosino는 네이티브 실행 및 WSL 실행을 모두 지원하고, PowerShell/CMD/Git Bash/WSL 터미널, “Open in …” 통합, Windows skills 등을 포함한다고 덧붙였다. Reach_vb는 OSS 샌드박스를 과소평가된 산출물이라고 강조했다.

---

## AI Twitter Recap

### 프론티어 모델 출시: Gemini 3.1 Flash-Lite, GPT-5.4 소문, “agent-first” 제품 포지셔닝

- **Gemini 3.1 Flash-Lite 포지셔닝(속도/$)**: Demis Hassabis가 **Gemini 3.1 Flash-Lite**를 성능 대비 “incredibly fast and cost-efficient(믿을 수 없을 만큼 빠르고 비용 효율적)”이라고 예고하며, 순수한 프론티어 점수보다 지연(latency)과 능력 대비 비용(cost per capability)을 중심으로 모델 라인을 프레이밍했다 ([tweet](https://x.com/demishassabis/status/2029047252275060895)). 관련 제품 대화에서는 **NotebookLM**이 “favorite AI tool(가장 좋아하는 AI 도구)”로 언급됐고 ([tweet](https://x.com/demishassabis/status/2029355691933085731)), Ultra 사용자를 대상으로 사용자 소스에서 맞춤형·몰입형 영상을 생성하는 **NotebookLM Studio**의 대형 신규 기능 **Cinematic Video Overviews**도 소개됐다 ([tweet](https://x.com/NotebookLM/status/2029240601334436080)).
- **GPT-5.4 유출 서사(The Information)**: 여러 트윗이 **GPT-5.4**가 **~1M token context window(약 100만 토큰 컨텍스트 창)**와, “think for hours(몇 시간씩 생각할 수 있다)”고 묘사되는 **“extreme reasoning mode”**를 함께 제공할 것이라는 보도를 확대 재생산했다. 장기 호라이즌(long-horizon) 에이전틱(agentic) 워크플로와 복잡 작업 오류율 감소를 겨냥한다는 주장도 포함됐다 ([tweet](https://x.com/kimmonismus/status/2029213568155992425), [tweet](https://x.com/steph_palazzolo/status/2029212039760023941), [tweet](https://x.com/scaling01/status/2029215437922169254)). 또한 OpenAI가 **더 잦은(월간) 모델 업데이트**로 전환할 수 있다는 추측도 있다 ([tweet](https://x.com/kimmonismus/status/2029223828677599244)). 별도로 한 아레나 관찰자는 “GPT-5.4 landed in the arena(아레나에 GPT-5.4가 들어왔다)”고 주장하며 임박한 출시를 시사했다 ([tweet](https://x.com/kimmonismus/status/2029325405212070200)). OpenAI의 공식 확인이 없는 한 **미확인 정보**로 다뤄야 한다.
- **Claude는 ‘코딩’만이 아니라 ‘에이전트 행동(agent behavior)’ 리더**: Nat Lambert는 Anthropic이 “코드에 올인”했다는 논의보다 **일반 에이전트 행동**에서의 선도를 봐야 한다고 주장하며, 코딩 능력은 상품화(commoditize)되지만 에이전트 견고성(robustness)은 그렇지 않을 수 있다고 시사했다 ([tweet](https://x.com/natolambert/status/2029212769648836806)). MathArena 평가에서는 **Claude Opus 4.6**이 전반적으로 강하지만 **시각 수학(visual mathematics)**에 약하고, 평가 비용이 높다(약 $8k로 주장됨)는 데이터 포인트가 추가됐다 ([tweet](https://x.com/j_dekoninck/status/2029160582687985727)).

### Alibaba Qwen “shakeup”: 조직 설계, 컴퓨트 접근, 오픈 모델 의존

- **리더십 이탈 + 구조조정 주장**: 데이터셋 전반의 중심 서사는 **Qwen 리드 Lin Junyang**이 물러났고, 수직 통합(vertically integrated) 팀에서 **수평 분리(horizontal splits)**(사전학습(pretraining)/포스트 트레이닝(post-training)/멀티모달(multimodal)/인프라(infra))로 전환하는 내부 구조조정이 있었다는 주장이다. 이는 이전의 “tight integration(긴밀한 통합)” 철학과 충돌할 수 있다는 맥락도 포함된다 ([tweet](https://x.com/ZhihuFrontier/status/2029117410259993073), 후속 맥락 [tweet](https://x.com/ZhihuFrontier/status/2029120535599431797)). Simon Willison은 상황을 요약하며 **Qwen 3.5** 출시 전후로 여러 이직/사임이 있었던 것으로 보인다고 덧붙였다 ([tweet](https://x.com/simonw/status/2029223704127828386)).
- **긴급 전사 미팅과 ‘컴퓨트 아이러니’**: Poe Zhao를 통해 전해진 내용에 따르면, Alibaba CEO **Eddie Wu**가 긴급 회의를 열었고 Qwen 팀은 **구조조정, 컴퓨트 할당(compute allocation), 모델 전략**에 대해 리더십에 문제를 제기했다. 가장 날카로운 디테일로는, Alibaba Cloud CTO가 **외부 고객이 내부 Qwen 팀보다 컴퓨트에 더 매끄럽게 접근했다**고 인정했다는 주장이다 ([tweet](https://x.com/poezhao0605/status/2029151951167078454)). 이는 Qwen이 “GPU-rich”하다고 가정했던 관찰자들의 재평가를 촉발했다 ([tweet](https://x.com/teortaxesTex/status/2029159237729894727)).
- **리서치 워크플로에서 Qwen의 지배력**: 한 트윗( HF 논문 사용 현황 요약 )은 Qwen이 2025–2026년 HF 논문에서 **#1 오픈 모델**이며, 7,692편 중 **41%**에서 사용됐고 Qwen3 출시 전후인 2025년 5월에는 **~50%**였다고 주장한다 ([tweet](https://x.com/teortaxesTex/status/2029102932604375057)). 수치의 정확성 여부와 별개로, **소수 핵심 팀에 대한 생태계 의존**이 리스크라는 메타 포인트는 유효하다.
- **오픈 웨이트(open-weights) ‘존재론적 리스크’ 프레이밍**: Nat Lambert는 오픈 웨이트 프론티어(frontier) 시도가 사업 인센티브를 가진 소수 행위자—**비영리, NVIDIA(하드웨어 풀스루(pull-through)), Meta(보완재 상품화(commoditize complements))**—로 수렴할 수 있다고 주장한다. 이 관점에서 Qwen의 기업 전략 불일치는 구조적으로 “예외”라기보다 “가능성이 큰 사건”처럼 보인다는 렌즈가 제시됐다 ([tweet](https://x.com/natolambert/status/2029049751472357631)).
- **Qwen 궤도권의 모델/인프라 기술 노트**: RASBT는 **Gated DeltaNet 모듈**이 KV-cache 성장을 피할 수 있어, 주장된 비율 기준으로는 **Qwen 3.5**가 Qwen3보다 더 메모리 친화적일 수 있다고 언급했다 ([tweet](https://x.com/rasbt/status/2029233742708130265)). 한편 일부 사용자는 특정 샘플링 파라미터에서 Qwen이 런타임에 따라(예: llama.cpp) 컨텍스트 ~20% 지점에서 **doom loop**에 빠진다고 보고했다(더 높은 quant에서도) ([tweet](https://x.com/qtnx_/status/2029246416342618321)). “권장 디코딩(recommended decoding)”이 런타임마다 취약할 수 있음을 상기시킨다.

### 추론(inference) & 시스템: Speculative Speculative Decoding, vLLM 스케일링, 커널 생성 에이전트

- **Speculative Speculative Decoding(SSD)**: Tanishq Kumar가 **SSD**를 소개하며, 주요 추론 엔진(**vLLM, SGLang**) 대비 **최대 2× 더 빠르다**고 주장했다. Tri Dao 및 Avner May와 협업 중이라는 설명이 함께 있다 ([tweet](https://x.com/tanishqkumar07/status/2029251146196631872); Avner의 발표 [tweet](https://x.com/avnermay/status/2029251985934041232)). Tri Dao는 이를 “attack of the asynchronous machines(비동기 기계들의 공격)”이라고 표현하며 GPU 커널의 async 설계에서 얻은 교훈과 연결지었다 ([tweet](https://x.com/tri_dao/status/2029273056364118407)). 검증된다면, 이 셋에서 가장 구체적인 알고리즘 기반 “속도(speed)” 스토리 중 하나다.
- **프로덕션 추론의 실무적 관점**: OOM/불안정 상황에서 **vLLM**을 스케일링(scaling)하는 실전 가이드가 공유됐다. 핵심은 하드웨어 증설보다 **워크로드 프로파일링(workload profiling) + 튜닝된 설정(config)**이 중요하다는 점이다 ([tweet](https://x.com/DylanCouzon/status/2029208629312700592)).
- **CUDA 커널을 위한 에이전틱 RL(ByteDance)**: ByteDance 논문 요약은 **CUDA Agent**를 소개한다. 보안된 테스트 환경에서 CUDA 커널을 작성하는 에이전틱 RL(agentic RL) 설정으로, 베이스라인 대비 속도 향상을 최적화하며, 일부 구성요소에서 전통적 자동화 도구 대비 **~100% 더 빠르다**는 주장도 포함된다 ([tweet](https://x.com/rohanpaul_ai/status/2029161433519567175)). “요약 과장(thread summary inflation)” 가능성을 감안하더라도, **폐쇄 루프(closed-loop) 코드→벤치마크→보상(reward)** 기반의 성능 엔지니어링 방향성은 신뢰할 만하고 전략적으로 중요하다.

### 코딩 에이전트 & 개발 도구: Windows용 Codex, VS Code “Agent DX,” Symphony, LangSmith Skills

- **Windows용 Codex + 오픈소스 샌드박스**: OpenAI DevRel이 **Windows 네이티브 에이전트 샌드박스**와 함께 **Codex for Windows**를 발표했다. OS 제어(제한 토큰, ACL, 전용 사용자 등)로 승인 전까지 파일시스템/네트워크 접근을 제한하며 구현은 **오픈소스**라고 한다 ([tweet](https://x.com/OpenAIDevs/status/2029252453246595301), [tweet](https://x.com/OpenAIDevs/status/2029252477179314350)). AJ Ambrosino는 네이티브/WSL 실행, PowerShell/CMD/Git Bash/WSL 터미널 지원, “Open in …” 통합 및 Windows skills를 추가로 설명했다 ([tweet](https://x.com/ajambrosino/status/2029252598851879265)). Reach_vb는 OSS 샌드박스가 과소평가된 산출물이라고 언급했다 ([tweet](https://x.com/reach_vb/status/2029335011804017135)).
- **VS Code의 에이전트 지향 릴리스**: `@code` 계정은 “Agents, for real work(실제 작업을 위한 에이전트)”를 강조하며 **hooks**, **메시지 스티어링/큐잉(message steering/queueing)**, **통합 에이전틱 브라우저(integrated agentic browser)**, **공유 메모리(shared memory)** 등을 출시했다고 전했다 ([tweet](https://x.com/code/status/2029279963778515372)). 빌더에 중요한 프로세스 변화로, VS Code는 기능 전달을 가속하기 위해 `main`을 월간에서 **주간 단위로 릴리스**하는 방향으로 전환한다고 한다 ([tweet](https://x.com/pierceboggan/status/2029283603801358798)).
- **OpenAI Symphony(티켓 보드→에이전트 오케스트레이션)**: 신규 OpenAI 레포 **Symphony**는 프로젝트 보드를 폴링(polling)하고 티켓 라이프사이클 단계별로 에이전트를 스폰(spawn)하는 오케스트레이션(orchestration) 레이어로 설명된다. “에이전트를 프롬프트한다”에서 “티켓을 움직이면 에이전트가 실행한다”로 UX를 전환한다는 주장이다 ([tweet](https://x.com/scaling01/status/2029261034993684952)). 이는 워크플로 네이티브(workflow-native) 에이전트 자동화 흐름과도 맞닿아 있다.
- **LangSmith Skills + CLI(에이전트가 에이전트 엔지니어링)**: LangChain은 코딩 에이전트가 터미널에서 트레이스(traces) 디버깅, 데이터셋 구축, 실험 실행을 네이티브하게 할 수 있도록 **LangSmith Skills + CLI**를 출시했다 ([tweet](https://x.com/LangChain/status/2029272199073354105)). 동시에 **LangChain OSS Skills**는 에이전트가 LangChain/LangGraph/DeepAgents를 효과적으로 쓰도록 “가르치는” 방향을 지향한다 ([tweet](https://x.com/LangChain_OSS/status/2029272669942673436), [tweet](https://x.com/hwchase17/status/2029274371710501049)).
- **JetBrains에서 Agent Client Protocol로 Cursor 사용**: Cursor는 **Agent Client Protocol**을 통해 **JetBrains IDE**에서 사용 가능해졌다고 발표했다 ([tweet](https://x.com/cursor_ai/status/2029222015736197205)). 툴 전환 없이 IDE 네이티브로 배포를 확장하는 중요한 유통(distribution) 움직임으로 볼 수 있다.

### 멀티모달 + 월드 모델: Self-Flow, Beyond Language Modeling, 지속 비디오, NE-Dreamer

- **Black Forest Labs의 Self-Flow**: BFL은 멀티모달 생성 모델(이미지/비디오/오디오/텍스트)을 위한 **Self-Flow**를 프리뷰했다. 외부 사전학습 표현 모델(예: DINO)에 의존하지 않는 **자기지도(self-supervised) 플로 매칭(flow-matching)** 접근을 강조한다. 주장된 결과는 **최대 2.8× 빠른 수렴(convergence)**, 비디오의 시간적 일관성(temporal consistency) 개선, 더 선명한 타이포그래피(typography) 등이며, 멀티모달 시각 지능과 액션 예측의 기반으로 포지셔닝한다 ([tweet](https://x.com/bfl_ml/status/2029212134023020667); 추가 맥락 [tweet](https://x.com/robrombach/status/2029272803099226425)).
- **“Beyond Language Modeling” / 비전 우선(vision-first) 멀티모달 사전학습**: 여러 저자가 비전을 1급으로 다루고, 모든 모달리티를 “Transfusion-style”로 입력/출력하는 네이티브 멀티모달 모델을 다룬 논문을 홍보했다. 표현(representations), 데이터, 월드 모델링(world modeling), 아키텍처, 스케일링 법칙(scaling laws) 등을 논의한다 ([tweet](https://x.com/__JohnNguyen__/status/2029236083914096756), [tweet](https://x.com/TongPetersb/status/2029237530160169286), [tweet](https://x.com/DavidJFan/status/2029239760301035549)). 핵심 연결고리는, 업계가 언어 우선 어댑터보다 **비전 네이티브(vision-native) 학습**의 중요성을 과소평가할 수 있다는 점이다.
- **롱 컨텍스트 비디오 월드 모델**: Gordon Wetzstein은 통합 표현을 통해 “Mode Seeking meets Mean Seeking(MMM)”로 **롱 컨텍스트·지속(persistent) 비디오 월드 모델**로 가는 길을 예고했다 ([tweet](https://x.com/GordonWetzstein/status/2029054374459376026)).
- **NE-Dreamer: 픽셀 재구성 대신 임베딩 예측**: George Bredis는 픽셀 재구성(pixel reconstruction) 대신 **다음 임베딩(next embeddings)**을 예측하도록 학습하는 월드 모델 **NE-Dreamer**를 소개하며, 제어(control)를 위한 목적 함수로 재구성이 잘못된 목표일 수 있다고 주장했다 ([tweet](https://x.com/BredisGeorge/status/2029190420790411671)).

### 평가, 메모리, ‘인간 중심(human-centered)’ 코딩: factorization barrier, 메모리 진단, 패치 비대화, 루브릭 드리프트

- **확산(diffusion) LLM 병렬성의 “Factorization Barrier”**: Ian Li는 확산 LLM이 병렬 토큰 생성(parallel token generation)에서 어려움을 겪는 이유로, 여러 토큰을 동시에 예측할 때 결합 출력이 비일관적(예: “San York”)이 될 수 있음을 설명한다. 이를 구조적 미스스펙(misspecification)으로 보고, 완전 분해(factorized) 출력 헤드는 출력 헤드 크기 폭증 없이 전체 결합 분포(joint distribution)를 표현할 수 없다는 점을 지적한다. 해결로 **CoDD**를 제안한다 ([tweet](https://x.com/IanLi1118/status/2029074519223353362)).
- **에이전트 메모리: ‘쓰기’보다 검색(retrieval)이 지배적**: 진단 프레임워크는 실패를 **검색 실패(retrieval failures)** vs **활용 실패(utilization failures)**로 구분한다. 핵심 주장은 검색 접근이 **~20pp** 변동을 만들지만, 메모리 쓰기 전략은 **3–8pp**만 변화시킨다는 것이다. 또한 “raw chunking(원시 청킹)”이 비용이 큰 요약/팩트 추출 파이프라인을 맞추거나 능가할 수 있다고 한다 ([tweet](https://x.com/dair_ai/status/2029202969456234562)). 실무적으로는, 많은 팀이 메모리 “인제스트(ingestion)”보다 검색/선택을 과최적화하고 있을 수 있다는 시사점이 나온다.
- **SWE-bench 패치 비대화(patch bloat)의 인간 요인**: KLieret는 LLM이 생성한 SWE-bench 패치가 사람의 해법보다 일관되게 **더 길고 비대화**된다고 보고했다(단순 주석 때문만이 아님). 테스트 통과는 가능하지만, 인간 검증과 유지보수에는 악영향을 준다는 주장이다 ([tweet](https://x.com/KLieret/status/2029219763423986030)). 후속 논의는 “테스트 성공 != 실사용 가능성”을 강조하며 **인간 중심 코딩 에이전트 연구(human-centered coding agent research)**를 주장한다 ([tweet](https://x.com/ZhiruoW/status/2029229015634993579)).
- **루브릭 드리프트(rubric drift)와 ‘살아있는 시스템’으로서의 평가(evals)**: 여러 트윗은 실패가 “프롬프트가 깨졌다”기보다 구식 **평가 루브릭(eval rubric)**에서 비롯되는 경우가 많다고 강조한다. 해결은 평가를 정적 유닛 테스트가 아니라, 프로덕션 분포 변화(distribution shift)에 결합된 피드백 루프로 다루는 것이라는 주장이다 ([tweet](https://x.com/omarsar0/status/2029225624825659668), [tweet](https://x.com/kimmonismus/status/2029227463805378571)).
- **BullshitBench v2(무의미 프롬프트 거부)**: 모델이 **무의미한 프롬프트를 거부**하는지를 시험하는 벤치마크에서, **Claude**와 **Qwen 3.5**만이 **60%**를 의미 있게 상회했다는 결과가 공유됐다. 관찰된 실패 모드로는 “think harder(더 열심히 생각)”식 추론 모델이 무의미함을 거부하기보다 **무의미함을 합리화**하는 경향이 언급됐다 ([tweet](https://x.com/kimmonismus/status/2029230388028358726)). 사실이라면, “추론 토큰(reasoning tokens)”을 품질 대리변수로 삼는 것에 대한 균형추가 된다.

### Top tweets (참여도 기준, 기술적으로 관련)

- **NotebookLM Cinematic Video Overviews** 롤아웃(Ultra 사용자): [@NotebookLM](https://x.com/NotebookLM/status/2029240601334436080)  
- **Windows용 OpenAI Codex 앱** + Windows 네이티브 샌드박스 디테일: [@OpenAIDevs](https://x.com/OpenAIDevs/status/2029252453246595301) 및 [@ajambrosino](https://x.com/ajambrosino/status/2029252598851879265)  
- **Gemini 3.1 Flash-Lite**의 속도/비용 포지셔닝: [@demishassabis](https://x.com/demishassabis/status/2029047252275060895)  
- **SSD(Speculative Speculative Decoding)**: 추론 속도 최대 2× 주장: [@tanishqkumar07](https://x.com/tanishqkumar07/status/2029251146196631872)  
- **Yuan 3.0 Ultra** 오픈 멀티모달 MoE(총 1010B / 활성 68.8B) 출시: [@YuanAI_Lab](https://x.com/YuanAI_Lab/status/2029204213180580229)  
- **Self-Flow** 멀티모달 플로 매칭 연구 프리뷰(2.8× 빠른 수렴 주장): [@bfl_ml](https://x.com/bfl_ml/status/2029212134023020667)

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Qwen3.5-35B-A3B hits 37.8% on SWE-bench Verified Hard — nearly matching Claude Opus 4.6 (40%) with the right verification strategy](https://www.reddit.com/r/LocalLLaMA/comments/1rkdlqi/qwen3535ba3b_hits_378_on_swebench_verified_hard/)** (Activity: 464): `3B active parameters`의 소형 MoE 모델 **Qwen3.5-35B-A3B**가 SWE-bench Verified Hard에서 “*verify after every edit*”(편집마다 검증) 전략으로 `22%`에서 `37.8%`까지 개선됐다고 보고한다. 각 `file_edit` 후 테스트 스크립트를 작성·실행해 변경을 검증하도록 프롬프트하는 단순 전략이며, 500개 태스크 전체에서는 `67.0%`를 기록해 더 큰 시스템과 비슷한 수준이라는 주장도 포함됐다. MCTS나 Best-of-N 샘플링 같은 복잡한 전략은 덜 효과적이었다고 한다. 코드/로그는 [GitHub repository](http://github.com/SeungyounShin/agent-verify)에 제공됐다. 댓글에서는 SWE-bench가 구버전이라 신규 모델 학습 데이터 누수 가능성이 있다는 지적, 결과가 “benchmaxed”일 수 있다는 회의, 35B에서 루프 없는 전략이 어려웠다는 경험 등이 언급됐다.
- **[Qwen3.5-27B Q4 Quantization Comparison](https://www.reddit.com/r/LocalLLaMA/comments/1rk5qmr/qwen3527b_q4_quantization_comparison/)** (Activity: 386): Qwen3.5-27B의 Q4 양자화(quantization) 방법을 BF16 베이스라인 대비 평균 KL Divergence(KLD)로 비교한 분석이다. 커스텀 채팅 데이터셋과 Wikitext2로 평가했으며, `unsloth_Qwen3.5-27B-UD-Q4_K_XL`이 `0.005087`로 가장 낮은 KLD를 기록했고, `bartowski_Qwen3.5-27B-IQ4_XS`는 효율 점수 `0.317506`이 언급됐다. 평가에 `llama.cpp`를 사용했으며, KLD를 원 모델의 확률 분포에 대한 충실도 지표로 강조한다. 댓글에서는 게시글의 모델 크기(14.1GB)와 Hugging Face 표시(15.2GB) 불일치에 대한 질문, 크기 대비 KLD 산점도에서 최적 적합선(best fit line)에 가까운 모델을 선호한다는 의견 등이 있었다.
- **[Qwen3.5-0.8B - Who needs GPUs?](https://www.reddit.com/r/LocalLLaMA/comments/1rkjsaj/qwen3508b_who_needs_gpus/)** (Activity: 646): `Qwen3.5-0.8B`가 2세대 i5 + 4GB DDR3 같은 구형 하드웨어에서도 `llama.cpp`로 효율적으로 동작하며(예: 스트링 이론 같은 주제 처리) GPU 없이도 충분히 쓸 수 있다는 반응이 모였다. 댓글에서는 GPT-3 수준과 비교하는 놀라움, 오픈소스라는 점, 더 강한 대안으로 Qwen3 8B를 추천하는 의견, 비전(vision) 컴포넌트로 이미지 분석 및 이미지/비디오 생성 워크플로 구성까지 가능하다는 언급 등이 있었다.
- **[Qwen 3.5 4b is so good, that it can vibe code a fully working OS web app in one go.](https://www.reddit.com/r/LocalLLaMA/comments/1rkb8en/qwen_35_4b_is_so_good_that_it_can_vibe_code_a/)** (Activity: 718): `4B` 규모의 **Qwen 3.5 4b**가 단일 프롬프트로 웹 기반 OS(게임 2개, 텍스트 편집기, 오디오 플레이어, 파일 브라우저, 배경화면 커스터마이징, 모델이 선택한 특수 기능 포함)를 완성했다는 사례다. 결과물은 [here](https://qwen4bwebos.tiiny.site/)에서 확인 가능하다고 한다. 댓글에서는 “흔한 벤치마크 시나리오”일 수 있어 검증이 필요하다는 회의와, 정보 밀도/효율이 크게 개선됐다는 감탄이 함께 나타났다.
- **[Apple unveils M5 Pro and M5 Max, citing up to 4× faster LLM prompt processing than M4 Pro and M4 Max](https://www.reddit.com/r/LocalLLaMA/comments/1rjqsv6/apple_unveils_m5_pro_and_m5_max_citing_up_to_4/)** (Activity: 998): Apple의 M5 Pro/M5 Max가 LLM 프롬프트 처리에서 이전 세대 대비 최대 4× 빠르다고 주장한다는 내용이다. M5 Pro는 최대 64GB 통합 메모리와 307GB/s 대역폭, M5 Max는 최대 128GB 통합 메모리와 614GB/s 대역폭이 언급됐다. SSD는 최대 14.5GB/s(최대 2×)로, Wi‑Fi 7을 위한 Apple N1 무선 칩도 포함된다고 한다.
- **[ChatGPT uninstalls surged by 295% after Pentagon deal](https://www.reddit.com/r/LocalLLM/comments/1rjlzgy/chatgpt_uninstalls_surged_by_295_after_pentagon/)** (Activity: 418): 밈 이미지로, “국방부(Pentagon) 딜 이후 ChatGPT 언인스톨 295% 증가”를 풍자하지만 기술적 인사이트나 검증 가능한 근거는 제공하지 않는다. 댓글에서도 수치의 출처와 실제 영향에 대한 회의가 나타났다.

### Less Technical AI Subreddit Recap

대상: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Opus 4.6 solved one of Donald Knuth's conjectures from writing "The Art of Computer Programming" and he's quite excited about it](https://www.reddit.com/r/singularity/comments/1rkhady/opus_46_solved_one_of_donald_knuths_conjectures/)** (Activity: 1124): Donald Knuth의 문서 “Claude’s Cycles”가 공유되며, 하이브리드 추론(hybrid reasoning) 시스템 **Claude Opus 4.6**이 유향 해밀턴 순환(directed Hamiltonian cycles) 및 호(decomposition of arcs) 관련 오랜 추측(conjecture)의 일부를 해결한 것으로 소개된다. Knuth가 놀라움과 기쁨을 표한 것이 강조되며, 전체 문서는 [here](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)에서 제공된다고 한다. 댓글에서는 Knuth가 관점을 수정하는 개방성, Anthropic 성과, 88세에도 활발한 연구 활동 등을 조명했다.
- **[Gemini 3.1 Flash-Lite Benchmark Comparison](https://www.reddit.com/r/Bard/comments/1rjusj5/gemini_31_flashlite_benchmark_comparison/)** (Activity: 236): **Gemini 3.1 Flash-Lite**가 더 최신인 3 Flash가 아니라 2.5 Flash와 비교된 점을 문제 삼는 글이다. 또한 [model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/) 기준으로 입력 `$0.25`, 출력 `$1.50` 가격이 언급되며, 2.5 Flash Lite(입력 `$0.10`, 출력 `$0.40`)보다 크게 비싸다는 불만이 나온다. 댓글에서는 “2.5 Flash Lite가 대량 처리에 여전히 낫다”, 다른 모델(MiniMax M2.5, Grok 4.1 등)이 가성비가 더 좋다는 주장, ‘High’ thinking 모드의 토큰/시간 비효율에 대한 지적 등이 이어졌다.
- **[Ostris is testing Lodestones ZetaChroma (Z-Image x Chroma merge) for LORA training 👀](https://www.reddit.com/r/StableDiffusion/comments/1rkky97/ostris_is_testing_lodestones_zetachroma_zimage_x/)** (Activity: 254): Ostris가 LoRA(저랭크 적응, Low-Rank Adaptation) 학습을 위해 Lodestones ZetaChroma를 테스트 중이라는 대화 스크린샷이 공유됐다. ZetaChroma는 Chroma 데이터셋과 Z-Image를 결합해 픽셀스페이스(pixelspace) 추론을 겨냥하는 것으로 설명되며, 단순 병합이 아니라 Chroma와 같은 데이터로 Z-Image를 재학습(retraining)한 것이라는 정정도 댓글로 제시됐다.
- **[OpenAI VP Max Schwarzer joins Anthropic amid recent kerfuffle](https://www.reddit.com/r/OpenAI/comments/1rkrj20/openai_vp_max_schwarzer_joins_anthropic_amid/)** (Activity: 1121): OpenAI VP Max Schwarzer가 Anthropic으로 이직했다는 밈을 통해, OpenAI→Anthropic으로의 인재 이동 흐름을 풍자한다. 댓글에서는 OpenAI 리더십에 대한 불신, Anthropic으로의 선호 이동 가능성 등이 논의됐다.
- **[OpenAI VP for Post Training defects to Anthropic](https://www.reddit.com/r/OpenAI/comments/1rk6xnw/openai_vp_for_post_training_defects_to_anthropic/)** (Activity: 1839): Max Schwarzer가 OpenAI의 포스트 트레이닝(post-training) 책임자였으며, Anthropic으로 옮기며 “연구로 복귀”한다고 발표했다는 내용이 공유됐다. 댓글에서는 직함을 “VP of Post Training Defects”로 오독하는 농담, OpenAI 내부 상황에 대한 추측 등이 이어졌다.
- **[OpenAI's post-training lead leaves and joins Anthropic: he helped ship GPT-5, 5.1, 5.2, 5.3-Codex, o3 and o1 and will return to hands-on RL research at Anthropic](https://www.reddit.com/r/ClaudeAI/comments/1rk7fwq/openais_posttraining_lead_leaves_and_joins/)** (Activity: 1818): Schwarzer가 GPT-5, 5.1, 5.2, 5.3-Codex, o3, o1 등 여러 모델 출시에 관여했으며, Anthropic에서 강화학습(RL) 연구에 더 직접적으로 참여할 것이라는 서사가 정리된다. 댓글에서는 인재 이동의 경쟁적 의미, OpenAI 프로젝트/매출에 미칠 영향 가능성 등이 거론됐다.
- **[OpenAI VP for Research for post-training defects to Anthropic](https://www.reddit.com/r/ChatGPT/comments/1rk6yy6/openai_vp_for_research_for_posttraining_defects/)** (Activity: 614): OpenAI의 포스트 트레이닝이 모델 정렬·품질 개선에 중요한 역할이라는 맥락에서, 핵심 인물 이탈의 의미를 논의한다. 댓글에서는 OpenAI의 잦은 시니어 이탈이 조직 문화/안정성에 대한 의문을 낳는다는 주장과, Anthropic의 가치·성장성에 대한 기대 등이 보인다.
- **[Damnnnn!](https://www.reddit.com/r/singularity/comments/1rjc5to/damnnnn/)** (Activity: 2597): TechCrunch 스크린샷 밈 형태로 “DoD 딜 이후 ChatGPT 언인스톨 295% 증가”를 다룬다. 댓글에서는 비율(%)만으로는 의미가 없고, 절대치(baseline)가 필요하다는 회의가 강조된다.
- **[295% is wild](https://www.reddit.com/r/OpenAI/comments/1rjc5nm/295_is_wild/)** (Activity: 3163): 295% 언인스톨 증가 수치의 해석에 대한 회의가 주로 나타난다. 댓글은 baseline(원래 언인스톨 수)이 없으면 과장될 수 있고, 출처·저널리즘 품질에 대한 비판도 포함된다.
- **[OpenAI loses 1.5 million subscribers in less than 48 hours after CEO Sam Altman says yes to the deal that Anthropic rejected](https://www.reddit.com/r/ChatGPT/comments/1rkd4td/openai_loses_15_million_subscribers_in_less_than/)** (Activity: 4037): “48시간 내 150만 구독자 감소”라는 주장(출처 불명)에 대한 논의다. 댓글에서는 수치의 근거를 묻는 회의, Claude로 갈아탔다는 경험담, 데이터 프라이버시/데이터 내보내기(export) 관심 등이 언급됐다.
- **[ChatGPT Uninstalls Surge 295% After OpenAI’s DoD Deal Sparks Backlash](https://www.reddit.com/r/ChatGPT/comments/1rjfipu/chatgpt_uninstalls_surge_295_after_openais_dod/)** (Activity: 3053): DoD 파트너십 이후 언인스톨이 295% 늘었다는 주장과 경쟁 앱(Claude) 다운로드 증가를 엮는 서사가 공유됐다. 댓글은 “baseline 없이는 의미가 없다”, 원래 수치가 무엇인지가 중요하다는 반응이 많다.

---

## AI Discord Recap

### 소프트웨어 엔지니어링 벤치마크 & 라우터

- **SWE-Atlas, SOTA가 ~30%에 머묾**: **Scale AI**가 **SWE-Atlas**를 출시하며 **SWE-Bench Pro**를 확장했고, 첫 벤치마크인 **Codebase QnA**에서 현재 상위 모델이 소프트웨어 엔지니어링 Q&A에서 ~**30%** 수준이라고 전했다: [SWE-Atlas launch (Scale AI)](https://x.com/scale_AI/status/2029244660905095359).
  - 엔지니어들은 이를 “경각심을 주는 벤치마크”로 보며, 하드한(repo-grounded) 평가를 위한 리더보드도 함께 언급했다: [SWE-Atlas Codebase QnA leaderboard](https://scale.com/leaderboard/sweatlas-qna). **코드베이스 그라운딩(codebase grounding)**과 **롱 컨텍스트 검색(long-context retrieval)**의 격차를 강조했다.
- **Max Router, 경쟁 라우터를 압도 주장**: **Arena ML** 연구진이 쿼리별 승자 모델을 선택하는 **Max intelligent router**를 시연하며, “플랫폼의 모든 모델을 이긴다”는 주장까지 포함한 브레이크다운을 공유했다: [Max intelligent router (YouTube)](https://www.youtube.com/watch?v=nO6E5t6dmA0).
  - 시청자들은 동적 라우팅 + 툴 선택이 단일 정적 모델을 능가할 수 있다는 점을 강조하며, 영상의 “beats every model on the platform(플랫폼의 모든 모델을 이긴다)”라는 주장을 인용했다.
- **Cursor, First Proof ‘Problem Six’ 해결**: **Cursor AI**가 약 **4일** 동안 실행돼 Arc Institute의 First Proof 챌린지 “**Problem Six**”에 대한 새로운 해법을 찾았고, 학계 베이스라인을 앞섰다는 보고가 공유됐다: [Cursor solves ‘First Proof’ Problem Six (X)](https://x.com/mntruell/status/2028903020847841336), 추가 맥락: [Evo-2: One year later (Arc Institute)](https://arcinstitute.org/news/evo-2-one-year-later).
  - 연구자들은 이 에이전트 조정(agent coordination) 접근이 코드 작업을 넘어 수학 연구로 일반화되는지, 더 많은 문제에서의 재현(replicate)으로 견고성(robustness)을 검증해야 하는지 등을 토론했다.

### 시스템 & GPU 최적화 돌파구

- **GPU가 CPU 없이 NVMe와 대화**: 한 리눅스 해커가 **amdgpu** 드라이버를 패치하고 Jason Gunthorpe의 RFC 기반으로 dma-buf/iommufd를 연결해 **AMD GPU ⇄ NVMe P2P**를 활성화했다고 한다: [dma-buf/iommufd RFC (lore.kernel.org)](https://lore.kernel.org/dri-devel/0-v1-b5cab63049c0+191af-dmabuf_map_type_jgg@nvidia.com/).
  - **ROCm/hipFile**과 비교하며 hipFile은 여전히 CPU가 커맨드를 발행하지만, 해당 경로는 **CPU를 데이터 경로에서 배제**한다고 주장했다: [ROCm hipFile (GitHub)](https://github.com/ROCm/hipFile).
- **CUDA Agent, 커널 최적화**: **ByteDance**가 최적화된 CUDA 커널을 작성하는 **CUDA Agent**를 소개하며, 단순/중간 태스크에서 **torch.compile** 대비 ~**2×** 속도 향상 등을 주장한 논문이 공유됐다: [CUDA Agent paper (arXiv)](https://arxiv.org/pdf/2603.02298).
  - 커뮤니티 노트에서는 더 어려운 커널에서 **Claude Opus 4.5**, **Gemini 3 Pro** 대비 ~**40%** 앞선다는 언급도 있어, **LLM 기반 커널 자동튜닝(autotuning)**의 실질적 진전으로 보는 반응이 있었다.
- **MXFP8 MMA 관련 혼선**: 커널 엔지니어들이 **MXFP8 MMA**에서 `MMA_K=64`가 희소(sparse) 형태에서만 지원되는 것으로 보이고(밀집(dense)에서는 `K=256`), PTX 가이드를 근거로 논의했다: [PTX matrix shapes (NVIDIA docs)](https://docs.nvidia.com/cuda/parallel-thread-execution/#tcgen05-matrix-shape).
  - 또한 글로벌 메모리 및 SASS 펜스(`MEMBAR`, `LDG/STG.STRONG`, `CCTL.IVALL`)를 통한 inter-CTA 정확성 논의가 이어지며, 아키텍처별 배리어(barrier) 의미론에 대한 가이드 필요가 제기됐다.

### 에이전트 플랫폼, UX, 개발 도구

- **Windows에서 Codex 데모**: OpenAI가 Windows에서 **Codex 앱**을 네이티브 에이전트 샌드박스 및 PowerShell 지원과 함께 공개했고, 데모 영상도 공유됐다: [Codex on Windows demo (video)](https://video.twimg.com/amplify_video/2029252379347173377/vid/avc1/1280x720/5YaNsuJawfWhfyYG.mp4).
  - 개발자들은 Windows 네이티브 플로를 환영하며 PowerShell 통합이 엔터프라이즈 데스크톱에서 실용적이라고 평가했다.
- **ACP로 IDE와 에이전트 연결**: **Agent Communication Protocol(ACP)**이 **Zed**와 **IntelliJ**에 플러그인 형태로 연결돼, 하나의 인터페이스에서 여러 프로바이더(예: Cursor)를 제어할 수 있다고 한다: [AgentCommunicationProtocol.dev](https://agentcommunicationprotocol.dev/introduction/welcome).
  - 멀티툴 오케스트레이션이 매끄러워지고 컨텍스트 전환(context hops)이 줄어든다는 반응이 있었다.
- **6개 에이전트가 마켓플레이스 구축**: **OpenClaw**의 6개 병렬 에이전트가 주말 동안 기능하는 마켓플레이스를 만들었고, `prompt-generator.ts`로 **Cursor**와 **v0**용 템플릿을 생성한다고 소개됐다: [codebonito.com](https://codebonito.com), 도구: [Cursor](https://cursor.sh/).
  - “한 번 작성하고 여러 런타임을 타깃(target)하는 템플릿 컴파일러(template compiler) 패턴”을 에이전트 배포 가속의 핵심으로 보는 반응이 있었다.

### 추론 속도 & 컨텍스트 효율 트릭

- **SSD로 디코딩 가속**: Tanishq Kumar, Tri Dao, Avner May의 **Speculative Speculative Decoding(SSD)**가 주요 엔진 대비 최대 **2×** 빠르다고 주장되며 주목을 받았다: [Speculative Speculative Decoding (X)](https://x.com/tanishqkumar07/status/2029251146196631872).
  - 라우터(router) 및 MoE 스택과 결합해 처리량(throughput) 개선이 누적될 수 있다는 기대가 언급됐다.
- **사용자 턴만 컨텍스트로 비용 절감**: 사용자 발화만 전달(모델 응답은 제외)하면 토큰을 ~**70%** 줄이면서도 전체 컨텍스트 품질의 **>95%**를 유지할 수 있다는 연구가 공유됐다: [Adaptive context management (AlphaXiv)](https://www.alphaxiv.org/overview/2602.24287).
  - 하니스(harness) 수준의 슬라이딩 윈도(sliding windows)와 프롬프트 제거(prompt removal) 전략을 제안하는 논의로 이어졌다.
- **정적 제약으로 생성 유도**: YouTube의 제약 기반 디코딩 파이프라인 레포가 공유됐다: [static-constraint-decoding (GitHub)](https://github.com/youtube/static-constraint-decoding). 2단계 패스를 **gliner2 → Neo4j** 그래프 구성에 연결하는 실험도 언급됐다.
  - 제약 디코더(constraint decoders)로 **스키마 안전(schema safety)**을 먼저 확보한 뒤 자유형 확장을 하는 “structure-first” 생성 실험이 촉발됐다.
