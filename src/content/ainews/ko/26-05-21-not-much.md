---
title: "Codex가 잠긴 Mac 앱을 휴대폰에서 원격 사용"
summary:
  - "Codex가 잠긴 Mac 앱을 휴대폰에서 원격 사용"
  - "Qwen3.7 Max가 주요 벤치마크 상위권 기록"
  - "Modal이 46.5억 달러 가치로 3.55억 달러 유치"
  - "turbopuffer가 1억 달러 런레이트를 돌파"
  - "Runway Aleph 2.0과 Edit Studio 공개"
date: 2026-05-21
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-21-not-much.md"
hasHeadline: false
headline: "Codex가 잠긴 Mac 앱을 휴대폰에서 원격 사용"
tags:
  - OpenAI
  - Codex
  - Qwen
  - Modal
  - Runway
isFeatured: false
---

## 헤드라인: Codex가 잠긴 Mac 앱을 휴대폰에서 원격 사용

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI의 "Codex Thursday" 업데이트는 단순한 기능 추가보다 코딩 에이전트 제품이 어디로 향하는지를 보여준다. Codex는 이제 Mac이 잠겨 있어도 휴대폰에서 Mac 앱을 안전하게 사용할 수 있으며, Appshots, 팀 플러그인 공유, 조직 분석 같은 제품 계층도 함께 확장됐다. 코딩 에이전트의 표면이 채팅형 IDE에서 지속적인 크로스 디바이스 작업 흐름으로 이동하고 있다는 신호다.

---

## AI Twitter Recap

### 모델, 벤치마크, 연구 업데이트: RAEv2, Gated DeltaNet-2, 데이터 필터링, 오픈 수학

- **RAEv2와 표현 우선 토큰화**: 여러 연구자들이 **RAEv2**를 통합 비전 이해와 생성을 위한 Representation Autoencoders의 의미 있는 후속 작업으로 조명했다. [@1jaskiratsingh](https://x.com/1jaskiratsingh/status/2057568174590304421)는 이번 업데이트가 **10배 이상 빠른 수렴**, 더 나은 재구성, 더 나은 생성을 제공하며, 테스트가 **text-to-image와 world models**까지 확장됐다고 말했다. [@recatm](https://x.com/recatm/status/2057456332861567359)의 중국어 요약은 세 가지 핵심 발견을 유용하게 정리했다. 최종 레이어만 쓰는 대신 마지막 **K개 인코더 레이어**를 합산하면 추가 추론(inference) 비용 없이 재구성과 생성이 모두 개선되고, **RAE와 REPA는 의미론 대 공간 구조 측면에서 상호 보완적**이며, REPA는 내부 자기 유도 메커니즘으로 재정식화할 수 있어 약한 모델의 추가 guidance pass를 피할 수 있다. [@sainingxie](https://x.com/sainingxie/status/2057595509519311077)도 FID를 넘어선 새로운 평가 관점을 언급하며, 표현 기반 픽셀 디코더에는 아직 덜 탐구된 여지가 남아 있다고 주장했다.

- **표준 어텐션(attention)과 토크나이저 가정의 대안**: NVIDIA의 [**Gated DeltaNet-2**](https://x.com/ahatamiz1/status/2057586630450610673)는 선형 어텐션에서 **erase**와 **write** 연산을 채널별 게이트로 분리하며, **1.3B** 파라미터 규모에서 언어 모델링과 상식 추론에서 **KDA**와 **Mamba-3**를 앞섰고 **RULER**에서 장문 컨텍스트 검색 이득도 두드러졌다. [@rasbt](https://x.com/rasbt/status/2057599925878169761)는 이를 더 흥미로운 하이브리드 어텐션 방향 중 하나라고 평가했다. 토큰화(tokenization)에서는 [@NousResearch](https://x.com/NousResearch/status/2057610978934546805)가 **subword tokenization**이 왜 도움이 되는지에 대한 통제 연구를 공개했다. **1.7B byte-level** 파이프라인 안에서 가정된 일곱 가지 이점을 시뮬레이션했지만, 그 규모에서 검증 손실을 움직인 개입은 **일곱 개 중 세 개**뿐이었다. 별도로 [@tatsu_hashimoto](https://x.com/tatsu_hashimoto/status/2057489411768803526)는 **DCLM**에서 놀라운 스케일링 결과를 보고했다. 충분한 compute가 있으면 최고의 데이터 필터는 **필터 없음**일 수 있으며, 인터넷 규모 풀의 교차점은 약 **1e30 FLOPs**에 온다는 예측이다. 다운스트림 평가는 잡음이 있지만 방향성은 일관돼 보인다([follow-up](https://x.com/tatsu_hashimoto/status/2057489440273322447)).

- **기계적 해석 가능성과 기하학**: [@GoodfireAI](https://x.com/GoodfireAI/status/2057487848258101551)는 “모델은 곡선 매니폴드에서 사고하지만 SAE는 직선 특징을 쓴다”는 지배적 비판이 일부만 맞다고 주장한다. 이들이 제안한 수정안은 **공동 발화 패턴**에 따라 SAE 특징을 클러스터링해, 고립된 원자 단위가 아니라 **feature groups**를 통해 기하학을 회복하는 것이다([thread continuation](https://x.com/GoodfireAI/status/2057487927089954962), [post](https://x.com/GoodfireAI/status/2057487939836502461)). 이는 현재 SAE 논의에 유용한 업데이트다. 희소 특징을 부정하는 것이 아니라, 해석이 단일 특징에서 구조화된 앙상블로 이동해야 한다는 경고다.

- **AI 연구 영역으로서의 수학**: 가장 큰 과학적 논의는 Erdős unit-distance 문제에 대한 OpenAI의 보고된 결과를 중심으로 이뤄졌다. [@markchen90](https://x.com/markchen90/status/2057517045575774598)는 이를 수학이 현재 AI 보조 연구 돌파구에 가장 적합한 영역이라는 증거로 해석했고, [@wtgowers](https://x.com/wtgowers/status/2057536069218742518)는 보고된 낮은 인간 개입 수준이 사실이라면 그 결과가 진정으로 흥미롭다고 언급했다. 담론은 곧 회의론과 벤치마크/게임화 우려로 형성됐다. [@memecrashes](https://x.com/memecrashes/status/2057478155246440929)는 그 결과가 “사람이 3시간도 안 되어 구식으로 만들었다”고 농담했고, [@cloneofsimo](https://x.com/cloneofsimo/status/2057486750004756524)는 무엇이 정당한 AI 수학으로 간주되는지를 둘러싼 예측 가능한 “골대 옮기기”를 지적했다. 흥미로운 기술적 메타 포인트는 수학이 결과를 확인하고, 논쟁하고, 확장할 수 있기 때문에 AI 공동 연구의 비교적 읽기 쉬운 최전선으로 계속 기능한다는 점이다.

### 에이전트, 하네스, 개발자 도구: Codex, Gemini, Devin, 에이전트 인프라

- **하네스는 여전히 주요 성능 향상의 원천**: [@lvwerra](https://x.com/lvwerra/status/2057476832664953225)는 과학 문제 하네스인 **physics-intern**을 공개했다. 이 하네스는 **Gemini 3.1 Pro를 17.7에서 31.4**로 끌어올려 해당 설정에서 **GPT 5.5 Pro**를 넘어섰다. 주목할 뉘앙스는 GPT 5.5 Pro 자체는 하네스의 이점을 얻지 못했다는 점이며, 이는 scaffolding trick의 흡수가 모델별로 다를 수 있음을 시사한다. 같은 맥락에서 [@KLieret](https://x.com/KLieret/status/2057471442066030795)는 **mini-swe-agent**를 **ProgramBench**에서 실행 가능하게 만들며, 소프트웨어 엔지니어링 에이전트 주변의 하네스 혁신을 개선하려는 목표를 분명히 했다.

- **에이전트 설계 패턴은 “단일 에이전트 우선”에서 명시적 서브에이전트 오케스트레이션으로 성숙 중**: [@cwolferesearch](https://x.com/cwolferesearch/status/2057486293882282293)는 실용적 종합을 제시했다. **단일 에이전트 시스템**에서 시작하고, 도구 확산이나 프롬프트 비대화가 관리 불가능해질 때만 **manager/sub-agent** 또는 탈중앙 다중 에이전트 토폴로지로 이동하라는 조언이다. 이는 서브에이전트 사용자들의 운영 관찰과도 맞닿아 있다. [@andrew_locke](https://x.com/andrew_locke/status/2057537633555993058)는 Cognition의 sub-Devin 워크플로가 단계적 변화를 만들었고, 이전에는 **엔지니어 2주 이상**처럼 보였던 작업을 몇 시간으로 압축했다고 설명했다.

- **Codex는 모델 위에 상당한 제품 계층을 출시**: OpenAI의 “Codex Thursday” 업데이트는 독립 기능보다 코딩 에이전트가 어디로 가고 있는지 보여주는 신호로 더 중요하다. [@OpenAIDevs](https://x.com/OpenAIDevs/status/2057530207976989179)는 Mac 앱 창에서 스크린샷과 텍스트를 모두 캡처해 더 풍부한 작업 컨텍스트를 제공하는 **Appshots**를 출시했다. 또한 **팀 플러그인 공유**([link](https://x.com/OpenAIDevs/status/2057530212339097994))와 더 상세한 **조직 분석**([link](https://x.com/OpenAIDevs/status/2057530213974814844))도 추가했다. 더 중요한 시스템 변화는 원격 컴퓨터 사용이다. [@OpenAIDevs](https://x.com/OpenAIDevs/status/2057536706778378692)는 Codex가 이제 Mac이 잠겨 있어도 **휴대폰에서 Mac 앱을 안전하게 사용할 수 있다**고 밝혔다. 이는 에이전트 제품 표면이 채팅 IDE에서 지속적인 크로스 디바이스 operator workflow로 이동하고 있다는 강한 신호다.

- **Gemini의 에이전트/도구 이야기는 빠르게 넓어지는 중**: [@OfficialLoganK](https://x.com/OfficialLoganK/status/2057460544643404125)는 **Gemini 3.5 Flash**가 더 큰 모델들을 제치고 **APEX-Agents-AA에서 #1**을 기록했다고 강조했다. 적용 측면에서 [@_philschmid](https://x.com/_philschmid/status/2057513254856151339)는 오케스트레이션 프레임워크 없이 **단일 Gemini API 호출**로 만든 GitHub 이슈 분류 에이전트를 보여줬고, [@skalskip92](https://x.com/skalskip92/status/2057502215506473121)는 차선/차량 추론용 커스텀 비전 파이프라인을 Gemini 3.5 Flash의 멀티모달 API 호출 하나로 대체하는 사례를 시연했다. Google도 액션 표면을 확장했다. **Daily Brief**([announcement](https://x.com/GeminiApp/status/2057500470147698936))와 **OpenTable, Canva, Instacart**가 연결된 앱 액션([announcement](https://x.com/GeminiApp/status/2057550225863246236))은 본질적으로 소비자용 에이전트 워크플로다.

- **개발자 인프라는 검색, 스트리밍, 샌드박스, 보안 경계로 수렴 중**: Weaviate는 데이터베이스 안에 내장 **MCP server**를 출시해 코딩 에이전트가 별도 프로세스 없이 repo를 ingest하고 **hybrid BM25 + vector retrieval**을 사용할 수 있게 했다([announcement](https://x.com/weaviate_io/status/2057476556449010024)). LangChain은 에이전트와 세계의 경계를 제어하는 **sandbox Auth Proxy**([announcement](https://x.com/LangChain/status/2057508777759236401))와 도구, 서브에이전트, 미디어, interrupt를 토큰 스트림이 아니라 일급 projection으로 렌더링하는 새로운 **typed streaming protocol**([overview](https://x.com/bromann/status/2057507753191518602))을 소개했다. vLLM의 **Elastic Expert Parallelism**도 주목할 시스템 작업이다. [@vllm_project](https://x.com/vllm_project/status/2057602243860574463)는 **NVLink/RDMA**를 통한 직접 GPU-to-GPU 전송을 사용해 전체 재시작 없이 MoE **DP/EP topology**를 실시간 리사이징한다고 설명했다. 이는 확장뿐 아니라 향후 장애 허용 serving에도 중요하다.

### 인프라, 컴퓨트, AI 비즈니스 신호: Modal, Turbopuffer, Hark, 컴퓨트 경쟁

- **인프라 계층은 “돈이 있는 곳”을 가장 분명히 보여준 하루 중 하나**: [@Sirupsen](https://x.com/Sirupsen/status/2057470756070781400)은 **turbopuffer**가 3월에 **1억 달러 런레이트**를 넘었고, **100만 달러** 이후 단 **19개월** 만이며, **수익성**이 있고 조달액은 **100만 달러 미만**이라고 말했다. 회사의 포지셔닝은 명확하고 시의적절하다. 프런티어 팀들은 “AI의 마법은 정확히 필요한 컨텍스트를 끌어올 때 일어난다”는 것을 알고 있으며, 이는 많은 제품 차별화를 **검색/검색(retrieval) 문제**로 바꾼다([follow-up](https://x.com/Sirupsen/status/2057470791516844188)). 이는 화려한 프런티어 연구뿐 아니라 “지루한” AI 인프라에 부의 창출이 쌓이고 있다는 [@swyx](https://x.com/swyx/status/2057543654340710556)의 더 넓은 정서와도 맞아떨어진다.

- **Modal은 대규모 투자를 유치하며 핵심 AI 클라우드 승자처럼 보이는 흐름을 지속**: [@bernhardsson](https://x.com/bernhardsson/status/2057530320790995262)는 **46.5억 달러 가치의 3.55억 달러 Series C**를 발표했다. 투자자와 사용자들은 같은 thesis를 강조했다. 강력한 성능과 개발자 경험을 갖춘, AI 워크로드를 위해 처음부터 클라우드 스택을 다시 만드는 것이다([Redpoint](https://x.com/Redpoint/status/2057532087570166134), [user endorsement](https://x.com/mathemagic1an/status/2057534253790097788)). 이는 에이전트 네이티브 컴퓨트가 독자적 카테고리로 떠오르고 있다는 다른 신호와 나란히 있다. [@latentspacepod](https://x.com/latentspacepod/status/2057565350187995260)는 **60ms 샌드박스**, **75초에 5만 startup**, 그리고 현재 사용량의 약 **절반**을 차지하는 RL/evals 워크로드를 중심으로 Daytona의 피치를 요약했다.

- **컴퓨트는 전략적 병목으로 남아 있고, 시장은 계층화된 듯하다**: [@AymericRoucher](https://x.com/AymericRoucher/status/2057492189626720729)는 유용한 컴퓨트 분류를 제시했다. **미국 선도 기업**(OpenAI, Anthropic, Google, 여기에 Meta/xAI가 합류)은 **multi-gigawatt**급이고, **중국 거대 기업**들은 수백 MW에서 multi-GW로 확장하며 점점 국내 스택을 사용하고 있으며, Mistral 같은 **유럽 경쟁자**는 현재 약 **90 MW**에서 **2029년까지 1 GW**를 목표로 한다. 정확한 숫자는 논쟁적이지만, 이 프레임은 [@EpochAIResearch](https://x.com/EpochAIResearch/status/2057499893854536185)의 관찰과 일관된다. OpenAI가 최근 compute buildout을 촉발했더라도 프런티어 랩들은 여전히 전 세계 compute capacity 전체 중 훨씬 적은 양만 사용하고 있어, buildout이 얼마나 더 가속될 수 있는지는 열린 질문이다. 부품 경제도 계속 메모리 쪽으로 이동하고 있다. [@EpochAIResearch](https://x.com/EpochAIResearch/status/2057531410030997789)는 **HBM**이 전체 AI 칩 부품 지출에서 2024년 1분기 **52%**에서 2025년 4분기 **63%**로 늘었다고 보고했다.

- **자본은 인프라뿐 아니라 인터페이스/하드웨어 베팅에도 흐르는 중**: [@adcock_brett](https://x.com/adcock_brett/status/2057462134989263047)는 **Hark**가 GPU 인프라, 향후 모델 개발, 하드웨어, 멀티모달/개인 지능 제품을 목표로 **60억 달러 가치에 7억 달러**를 유치했다고 발표했다. 채용 분야, 즉 foundation models, infra, speech, computer-use agents, hardware 외의 세부 사항은 희소하지만, 유치 규모는 수직 통합 AI 디바이스 베팅에 대한 투자자 수요를 보여준다. Hark는 **F.03**의 **200시간** 무중단 자율 실행도 보고했다([announcement](https://x.com/adcock_brett/status/2057651077928145235)). 다만 기반 로보틱스 스택을 평가하기에는 아직 기술적 세부 정보가 충분하지 않다.

### 멀티모달, 비디오, 생물학, 로보틱스: Runway, Carbon, 지구 모델, 오픈 휴머노이드

- **비디오 편집과 생성은 더 조합 가능해지는 중**: Runway는 **Aleph 2.0**과 새로운 **Edit Studio**를 출시해, 사용자가 단일 프레임을 편집하고 그 편집을 비디오 나머지 부분으로 전파할 수 있게 했다([Runway](https://x.com/runwayml/status/2057530497597600169), [product lead](https://x.com/iamneubert/status/2057535909524824226)). 이는 멀티모달 빌더들이 신경 쓰는 “reference-guided edit propagation” 문제의 실용적 제품화다. 별도로 Alibaba 연구진의 **MIGA**는 [@HuggingPapers](https://x.com/HuggingPapers/status/2057506246899724355)에 의해 시간적 일관성을 위한 2단계 정렬 메커니즘을 가진 **train-free** 방식의 **infinite-frame** 비디오 생성 방법으로 소개됐다. 오픈소스 아바타 쪽에서는 Meituan이 **LongCat-Video-Avatar 1.5**를 공개했다. 여기에는 Wav2Vec2를 대체한 **Whisper-Large**, **8-step inference**, 장편 비디오 identity consistency, 더 넓은 stylized-domain 일반화가 포함된다([announcement](https://x.com/Meituan_LongCat/status/2057494106889486646)).

- **생물학과 지구 관측용 foundation model은 계속 더 사용 가능해지는 중**: Hugging Face Bio의 **Carbon** DNA 모델 패밀리는 후속 데모와 인프라 검증을 얻었다. [@LoubnaBenAllal1](https://x.com/LoubnaBenAllal1/status/2057488110263435640)는 **sequence design, variant effect prediction, learned representations**에서의 응용을 강조했고, [@Shekswess](https://x.com/Shekswess/status/2057468970471448787)는 **Carbon-500M, 3B, 8B**가 출시 첫날 단일 **Trainium2 trn2.3xlarge**에서 NxD Inference로 컴파일되고 실행되는 것을 보여줬다. 지리공간 모델링에서는 [@cgeorgiaw](https://x.com/cgeorgiaw/status/2057481909802774664)가 multi-resolution Sentinel-2 입력의 토큰화를 **3배 적은 토큰**으로 바꾸어 제곱 compute 절감을 활용한 결과, **OlmoEarth v1.1**이 **3배 저렴하고 빠르다**고 보고했다.

- **오픈 로보틱스는 더 빌드 가능해지는 중**: Hugging Face의 **LeRobot Humanoid**는 쇼케이스 데모가 아니라 진정한 full-stack 오픈 릴리스로 주목을 받았다. [@robotsdigest](https://x.com/robotsdigest/status/2057507896129380581)와 [@lukas_m_ziegler](https://x.com/lukas_m_ziegler/status/2057515219946205399)는 같은 패키지를 강조한다. 약 **2.5천 달러**, **3D 프린트**, 완전한 하드웨어/CAD, calibration/runtime, simulation, identification tools, training pipelines다. 핵심은 단지 저렴함이 아니라 실제 로봇 학습 워크플로를 위한 수리 가능성과 반복 속도다.

### Top tweets (engagement 기준)

- **OpenAI / Codex 제품 확장**: [Codex can securely use apps on your Mac from your phone, even when the Mac is locked](https://x.com/OpenAIDevs/status/2057536706778378692), 그리고 더 풍부한 앱 컨텍스트를 위한 [Appshots](https://x.com/OpenAIDevs/status/2057530207976989179).
- **인프라 승자들**: [turbopuffer at $100M run-rate, profitable, < $1M raised](https://x.com/Sirupsen/status/2057470756070781400); [Modal raises $355M Series C at $4.65B](https://x.com/bernhardsson/status/2057530320790995262); [Hark raises $700M at $6B](https://x.com/adcock_brett/status/2057462134989263047).
- **넓은 기술적 반향을 가진 연구 논의**: [OpenAI’s Erdős-related math result discussion](https://x.com/markchen90/status/2057517045575774598); [RAEv2 release](https://x.com/1jaskiratsingh/status/2057568174590304421); [“no filter” scaling result for LM data curation](https://x.com/tatsu_hashimoto/status/2057489411768803526).
- **에이전트 성능 추세선**: [Gemini 3.5 Flash tops APEX-Agents-AA](https://x.com/OfficialLoganK/status/2057460544643404125); [Gemma 4 E4B driving an iOS simulator on-device via Argent](https://x.com/googlegemma/status/2057570113390551452); [Devin for Windows](https://x.com/cognition/status/2057496130225668360).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: Qwen 3.7 Max 벤치마크와 27B 대기

- **[Qwen will release another 27B with high probability](https://www.reddit.com/r/LocalLLaMA/comments/1tiwnpc/qwen_will_release_another_27b_with_high/)** (Activity: 1613): **[image](https://i.redd.it/g5uabdvdic2h1.jpeg)는 X/Twitter 대화 스크린샷이다. 여기서 **xiong-hui / Barry Chen**은 자신이 *“정확한 로드맵을 기다리는 중”*이지만 **Qwen이 또 다른 `27B` 모델을 출시할 가능성이 높다**고 믿는다고 말하며, 지금 그들에게 또 다른 27B를 만드는 것은 *“어렵지 않다”*고 언급한다. 제목과 링크된 게시물 맥락상 이는 공식 발표가 아니라, “기적의 모델”로 인식된 **Qwen 3.6 27B**의 가능한 후속 모델에 대한 로드맵 힌트/루머다.** 댓글 작성자들은 주로 배포 실용성을 논의했다. `16GB` VRAM 사용자는 고양자화에서 dense `27B`보다 하이브리드 CPU/GPU 추론으로 더 접근 가능할 수 있는 `35B` MoE / `A3B` 스타일 모델을 선호했다. 다른 이들은 가상의 **Qwen 3.7 `122B-A10B`** 같은 더 큰 MoE 변형을 추측했다.

- **VRAM 제한 로컬 추론**: 여러 댓글은 `16GB` GPU에서 `27B` dense 모델을 “괜찮은 quant”로 실행하기 어렵다고 봤다. 반면 가상의 **Qwen `35B` MoE / A3B-style model**은 더 낮은 active parameter count나 하이브리드 CPU/GPU 추론을 통해 접근성을 유지할 수 있다고 주장했다. 논의는 Qwen의 이전 small-active-parameter MoE 설계가 기본 게이밍 노트북이나 제한된 VRAM을 가진 사용자에게 중요하다고 framing했다.
- **더 큰 dense Qwen 요구**: 한 사용자는 `50B–80B` 범위의 더 큰 **dense Qwen 모델**을 요청했다. 현재 `27B`도 **MTP** 덕분에 충분히 빠르므로, 추론 속도를 더 많은 파라미터와 잠재적 성능 향상과 맞바꾸겠다는 것이다. 또 다른 사용자는 대규모 total parameter와 상대적으로 낮은 token당 active parameter에 대한 관심을 보이며 가상의 **Qwen `3.7 122B-A10B`** MoE-style 목표를 제시했다.

- **[Qwen3.7 Max scored by Artificial Analysis, 27B/35B waiting room](https://www.reddit.com/r/LocalLLaMA/comments/1tie6gy/qwen37_max_scored_by_artificial_analysis_27b35b/)** (Activity: 614): ****Qwen3.7 Max**가 **Artificial Analysis** 순위에 `5위`로 등장했고, **GPT-5.4 xhigh**와 거의 동률이며 **Gemini 3.5 Flash**보다 약간 앞선 것으로 보고됐다. 게시물은 **Qwen3.6 27B**가 Max counterpart보다 `6`점 뒤처져 있다는 점을 강조하며, 향후 **Qwen3.7 27B/35B** 변형이 더 큰 Max 모델 성능에 근접할 수 있다는 기대를 높였다.** 댓글 작성자들은 주로 open-weight 릴리스를 기다리고 있으며 Qwen이 프런티어 랩과 경쟁하는 것을 긍정적으로 봤지만, Max 모델이 오픈소스가 아니라는 점에는 불만도 있었다. 한 가지 기술적 우려는 Qwen이 보고된 “overthinking” 행동을 고쳤는지 여부다.

- **open-weight `27B`/`35B` 대기**: 댓글 작성자들은 **Qwen3.7**이 open-weight `27B`/`35B` 변형을 내놓을지 기다리고 있다. 다만 한 기술적 추측은 별도 `27B` 릴리스가 없을 수도 있다는 것이다. **Qwen 3.7은 `A30B` active parameter를 가진 비공개 `390B` MoE-style 모델**일 수 있으며, 이는 작은 오픈 체크포인트가 아니라 더 큰 폐쇄형 배포에 가깝다는 해석이다.
- **아키텍처 업그레이드 여부**: 여러 댓글은 **Qwen3.7 Max**가 Qwen 3.5/3.6 대비 실제 아키텍처 업그레이드인지, 아니면 주로 또 다른 미세조정(fine-tuning)인지에 초점을 맞췄다. 기술적 관심은 Alibaba가 기본 모델 설계를 개선했는지, 기존 아키텍처에서 벤치마크 성능을 더 뽑아낸 것인지에 있다.
- **“overthinking” 우려**: 반복되는 우려는 Qwen 팀이 모델의 “overthinking” 행동을 고쳤는지 여부다. 이는 일부 벤치마크 점수를 높이더라도 지연 시간, 비용, 사용자 경험을 해칠 수 있는 과도한 reasoning verbosity 또는 불필요한 chain-of-thought-style 숙고를 뜻하는 것으로 보인다.

- **[Waiting for Qwen 3.7 open weight... The new King has arrived...](https://www.reddit.com/r/LocalLLaMA/comments/1tjvz6l/waiting_for_qwen_37_open_weight_the_new_king_has/)** (Activity: 577): **[image](https://i.redd.it/j8qkty82qj2h1.png)는 [Qwen3.7 blog](https://qwen.ai/blog?id=qwen3.7)에 연결된 **Qwen3.7-Max** 벤치마크 마케팅 그리드다. `Terminal-Bench 2.0`, `SWE-bench Pro`, `MCP-Atlas`, `HLE`, `Apex`, `IFBench`, `SuperGPQA` 같은 여러 과제에서 **Qwen3.6-Plus**, **DS-V4-Pro Max**, **GLM-5.1**, **Kimi K2.6**, **Claude Opus-4.6 Max**를 상대로 앞서는 모습을 보여준다. 기술적 의미는 이 차트가 Qwen3.7-Max를 Opus-class 시스템과 경쟁하는 프런티어 폐쇄/API 모델로 배치한다는 점이며, 댓글 작성자들은 특히 `512k` 컨텍스트를 가진 `3.7-122B-A17B`나 `MXFP4`/`NVFP4` 같은 저비트 형식의 `397B A17B` 변형 같은 open-weight MoE 릴리스를 기대하고 있다.** 댓글 작성자들은 **Qwen3.7-Max** 자체가 open-weight로 공개될 가능성에는 회의적이었다. *“Qwen은 Max 시리즈를 open-weight로 공개한 적이 없다”*는 지적이 나왔다. 다른 이들은 고급 multi-GPU 설정을 가진 사용자에게 잠재적으로 *“집에서 쓰는 Opus”*가 될 수 있다며 가능한 대형 오픈 MoE 릴리스에 열광했다.

- **Max 결과의 외삽 경계**: 여러 댓글은 루머 모델이 **Qwen Max-class** 릴리스일 가능성이 높고, 역사적으로 **Qwen은 Max-series 모델을 open weights로 공개하지 않았다**고 주의시켰다. 한 사용자는 Max 벤치마크 결과를 가상의 `27B` 같은 더 작은 오픈 모델로 외삽하지 말라고 구체적으로 경고했다. 성능 격차가 상당할 수 있기 때문이다.
- **로컬 추론 하드웨어 추측**: 하드웨어 중심 추측은 **MTP**, `MXFP4` 양자화(quantization), `512k` 컨텍스트를 갖춘 가능한 `Qwen 3.7-122B-A17B`에 집중됐다. 댓글 작성자들은 이것이 **AMD Strix Halo**급 시스템에서 로컬 추론에 매력적일 수 있다고 봤다. 다른 댓글 작성자는 `397B-A17B` 릴리스를 희망하며, 이전 `Qwen 3.5` `NVFP4` 변형이 `4x RTX 6000 Pro` GPU에 맞고 `200k` 토큰에서 약 `10`개 동시 세션을 위한 메모리 여유도 있었다고 언급했다.
- **강력한 오픈 모델 공개 가능성 회의론**: Alibaba/Qwen이 가장 강한 로컬 모델을 공개하면 hosted-model monetization을 약화시킬 수 있기 때문에 그렇게 하지 않을 것이라는 회의론도 있었다. 한 댓글은 Qwen이 4월에 “disruption”에서 **frontier-model competition and monetization**으로 전환한 것을 언급하며, 벤치마크 결과가 좋아 보이더라도 고성능 open-weight 릴리스 가능성은 낮아질 수 있다고 암시했다.

### /r/LocalLlama + /r/localLLM: Qwen 3.6 35B MTP 양자화 성능

- **[110 tok/s with 12GB VRAM on Qwen3.6 35B A3B and ik_llama.cpp](https://www.reddit.com/r/LocalLLaMA/comments/1tjh7az/110_toks_with_12gb_vram_on_qwen36_35b_a3b_and_ik/)** (Activity: 455): **이 게시물은 **RTX 4070 Super 12GB + Ryzen 7 9700X**에서 byteshape의 [`IQ4_XS` `4.19 bpw` GGUF](https://huggingface.co/byteshape/Qwen3.6-35B-A3B-MTP-GGUF)를 사용해 **Qwen3.6-35B-A3B-MTP**를 벤치마크했다. 설정은 `131072` 컨텍스트, `q8_0` KV cache, MTP `draft-max=3`, `draft-p-min=0.75`였다. [`llama.cpp`](https://github.com/ggml-org/llama.cpp)에서 [`ik_llama.cpp`](https://github.com/ikawrakow/ik_llama.cpp)로 전환하자 보고된 평균이 `89.76 tok/s`에서 `110.24 tok/s`(`+23%`)로 증가했다. 업데이트된 결과에서 aggregate MTP accept rate가 더 낮았음에도(`0.9393` → `0.8749`) 이런 결과가 나와, accept rate만이 아니라 백엔드/offload 효율이 작용했음을 시사한다. 작성자는 GPU를 headless/secondary로 사용하면 사용 가능한 VRAM을 극대화할 수 있다고 했고, `ik_llama.cpp`에는 `--fit --fit-margin 1664`를 권장하며 OOM 시 `1792`/`2048`로 올리라고 조언했다.** 댓글 작성자들은 정확한 `llama.cpp` 명령을 요청했고, 최근 24시간 내 여러 MTP 관련 `llama.cpp` PR이 merge됐으므로 결과가 버전에 민감할 수 있다고 지적했다. iGPU가 없는 CachyOS/KDE Wayland 사용자를 위한 기술적 우회책도 공유됐다. `LIBGL_ALWAYS_SOFTWARE=1 GALLIUM_DRIVER=llvmpipe`로 Plasma를 소프트웨어 렌더링으로 실행하면, 느리거나 비활성화된 compositor 효과를 감수하는 대신 idle VRAM이 `>1024 MB`에서 약 `126 MB`로 줄어든다는 것이다.

- **KDE Wayland VRAM 절약 우회책**: 한 CachyOS/KDE Wayland 사용자는 단일 GPU 시스템을 위해 커스텀 SDDM 세션을 만들고 `LIBGL_ALWAYS_SOFTWARE=1`, `GALLIUM_DRIVER=llvmpipe`, `KWIN_COMPOSE=Q`로 Plasma를 실행해 KDE compositor 렌더링을 CPU로 강제하는 방법을 공유했다. 일반 KDE Wayland에서 **>1024 MB**였던 idle VRAM이 CPU 렌더링 세션에서는 **~126 MB**로 떨어졌다고 보고했다. 애니메이션이 매우 느리거나 비활성화되는 비용을 치르는 대신 모델 추론용 VRAM을 거의 1GB 확보하는 방식이다.
- **벤치마크 방법론 논의**: 여러 댓글은 정확한 `llama.cpp` 명령을 요구했고, **MTP 관련 PR들이 이전 24시간 안에 upstream `llama.cpp`에 merge됐다**며 비교에 실질적 영향을 줄 수 있다고 지적했다. 한 기술적 가설은 `ik_llama.cpp`가 훨씬 높은 speculative/MTP acceptance rate를 통해 속도 향상을 달성했다는 것이었다. 즉 **`ik_llama.cpp`에서는 `0.790` 아래로 내려가지 않았지만**, `llama.cpp`에서는 **`0.477`**까지 내려갔다는 점이 설정 동등성에 대한 질문을 불러왔다.
- **`IQ4_XS` 메모리/품질 트레이드오프**: `IQ4_XS`가 이 설정에서 가장 낮은 메모리의 Q4 양자화 옵션일 가능성이 있다는 기술적 관심이 있었다. 한 댓글은 지능 저하가 얼마나 되는지 물었고 최종 VRAM/RAM 분할을 요청했다. 이는 **12 GB VRAM**만으로 **Qwen3.6 35B A3B**를 실행할 때 특히 중요하다.

- **[Qwen 3.6 35B GGUF: NTP vs MTP quantization results across GPUs and CPUs](https://www.reddit.com/r/LocalLLaMA/comments/1tipihx/qwen_36_35b_gguf_ntp_vs_mtp_quantization_results/)** (Activity: 364): **이미지는 밈이 아니라 **기술 벤치마크 플롯**이다. [RTX 4090 performance-vs-quality bubble scatter](https://i.redd.it/xjctv0okab2h1.png)는 평균 TPS, 정확도, BPW 기준으로 **ByteShape Qwen 3.6 35B GGUF** NTP/MTP 양자화를 Unsloth, Bartowski, Mudler, AesSedai와 비교한다. 게시물 맥락에서 이는 NTP의 경우 *“맞는 가장 큰 quant를 고르는 것”*이 경쟁력 있을 수 있고, MTP는 GPU 생성 처리량을 대략 `20–40%` 개선할 수 있지만 메모리 압박을 키우며 CPU 사용에는 권장되지 않는다는 주요 발견을 보여준다.** 댓글은 대체로 긍정적이고 실용적이었다. 한 CPU-hybrid 사용자는 ByteShape의 CPU 결과와 일치하게 심각한 MTP slowdown을 봤다고 확인했고, 더 높은 품질의 `Q6` GGUF 릴리스 계획이 있는지 물었다.

- **CPU-hybrid에서 MTP slowdown**: 한 CPU-hybrid 사용자는 Qwen3.6-35B에서 **MTP**를 사용할 때 **“incredible slowdowns”**를 겪었다고 보고했다. 이는 MTP가 혼합 CPU/GPU 설정에서 퇴보할 수 있다는 게시물의 발견과 일치한다. 그는 또한 이 모델에서는 Q6 아래로 내려가기를 피한다며 **Q6 GGUF** 양자화가 공개될지 물었다.
- **NTP 방법론 질문**: 한 댓글은 **NTP**가 llama.cpp의 `--spec-type ngram-mod`를 의미한다고 가정하고, mainline **llama.cpp**가 `--spec-type ngram-mod,draft-mtp`를 통해 **ngram speculative decoding과 MTP를 동시에** 실행할 수 있는 것 같다고 지적했다. 그는 비교가 엄격한 NTP-vs-MTP 양자택일이 아닐 수 있다고 제안하며 `--spec-ngram-mod-n-match 24`, `--spec-ngram-mod-n-min 12`, `--spec-ngram-mod-n-max 48`, `--spec-draft-n-max 3` 같은 파라미터를 언급했다.
- **RTX 4070 Super 12GB 결과**: [ik_llama.cpp](https://github.com/ikawrakow/ik_llama.cpp)를 사용해 **RTX 4070 Super 12GB**에서 **Qwen3.6-35B-A3B-IQ4_XS-4.19bpw MTP**를 벤치마크한 결과 **평균 `110.24 tok/s`**가 보고됐다. 이는 `Qwen3.6-35B-A3B-UD-IQ4_XS MTP`보다 약 **20 tok/s 빠르다**. 실행에는 [mtp-bench.py](https://gist.github.com/am17an/228edfb84ed082aa88e3865d6fa27090/)가 사용됐고, `aggregate_accept_rate=0.8749`, `total_predicted=1592`, `total_draft=1127`, `total_draft_accepted=986`이 기록됐다. 댓글 작성자는 `--fit`, `--fit-margin 1664`, `--multi-token-prediction`, `--draft-p-min 0.75`, `--draft-max 3`을 핵심 튜닝 노브로 강조했다.

### /r/LocalLlama + /r/localLLM: Open-Weight 릴리스와 takedown 긴장

- **[Heretic has been served a legal notice by Meta, Inc.](https://www.reddit.com/r/LocalLLaMA/comments/1tjmvx6/heretic_has_been_served_a_legal_notice_by_meta_inc/)** (Activity: 2124): **The **Heretic Free Software Project**는 **Meta Platforms, Inc.**를 대표하는 provider로부터 이메일 법적 통지를 받았고, Meta의 **Llama** 모델 derivative를 포함한 model-weight 저장소를 제거했다고 밝혔다. 게시물은 이를 준수 조치로 framing하는 동시에, 공식 **Codeberg mirror**인 [codeberg.org/p-e-w/heretic](https://codeberg.org/p-e-w/heretic)와 단일 hosting provider에 의존하지 않고 Heretic-created 모델 접근성을 보존하기 위한 계획된 “technological measures”를 통해 인프라 다변화를 발표했다.** 댓글 작성자들은 대체로 저작권이 있는 학습 데이터 관련 의혹을 고려할 때 Meta의 집행이 위선적이라고 비판했고, Llama가 LM Arena에서 `23`개 경쟁자의 `168`개 모델보다 뒤처진다는 게시물의 농담을 조롱했다. 논의는 기술 토론보다 정치/법적 반응에 가까웠다.

- **LM Arena framing**: 댓글 작성자들은 **Meta의 Llama family가 최상위권 밖에 있다**는 인용된 LM Arena framing을 강조했다. 상위 200개 언어 모델 중 *“23개 경쟁자의 다른 168개 모델에만 뒤처진다”*는 표현이다. 기술적 takeaway는 이름을 둘러싼 법적 분쟁이 Meta 모델 릴리스의 정체와 leaderboard 경쟁력에 대한 인식과 대비되고 있다는 점이다.

- **[Re. what ever happened to Cohere’s Command-A series of models?](https://www.reddit.com/r/LocalLLaMA/comments/1tizmar/re_what_ever_happened_to_coheres_commanda_series/)** (Activity: 669): ****Cohere**는 Command series의 효율적 후속/연속으로 포지셔닝된 첫 **Mixture-of-Experts (MoE)** open-weights 모델인 **Command A+**를 발표했다. 이 모델은 최고 벤치마크 점수만이 아니라 낮은 지연 시간과 responsiveness를 강조하며, 세부 내용은 Cohere의 [launch post](https://cohere.com/blog/command-a-plus)에 있다. 모델은 **Apache 2.0**으로 공개됐고, Cohere는 `1–2 GPUs`에서 실용적 배포가 가능하도록 상당한 양자화 작업을 했다고 주장한다. 목표는 agentic/enterprise 워크로드와 더 작은 개발자 팀이다.** 댓글 작성자들은 대체로 긍정적이었다. 원래의 **Command R+**가 특히 creative work와 enterprise-style planning에서 당시 기준으로 이례적으로 강했다며, Cohere의 복귀가 모델 생태계 다양성에 도움이 된다고 환영했다. 커뮤니티의 주요 기술적 요구는 로컬 추론용 **GGUF** 양자화 빌드의 즉각적 availability였다.

- **경쟁력과 벤치마크 부족 우려**: 한 댓글은 **표준 벤치마크 결과 부족**과 현재 같은 크기급 모델과의 비교 부재 때문에 릴리스의 경쟁력에 의문을 제기했다. 그는 **MiniMax M2.7**과 **Mimo V2.5**를 체감 SOTA 기준선으로 언급했다. 참조된 **Artificial Analysis benchmark** 이미지(<https://preview.redd.it/vjex3axl8d2h1.png?width=1224&format=png&auto=webp&s=08e9c90188bf9b42d4f049991624b4e180cf566d>)에 의존하는 것만으로는 품질 경쟁력이 명확하지 않을 경우 adoption을 이끌기에 충분하지 않을 수 있다고 지적했다.
- **배포 접근성 요구**: 여러 사용자는 **GGUF 양자화 빌드**가 제공될지, Cohere가 소비자 GPU에서 실행 가능한 이전 `command-r7b`와 비슷한 **더 작은 Command-family 모델**을 출시할 계획이 있는지 물었다. 기술적 우려는 API-only 또는 enterprise-scale 배포가 아니라 로컬 추론 가능성이다.
- **Command R+와의 실용 비교**: 한 댓글은 원래 **Command R+**가 당시 **creative workflows와 enterprise resource-planning tasks**에서 이례적으로 강했다고 강조했다. 이는 사용자가 새로운 Command-A 라인을 일반 챗봇 벤치마크뿐 아니라 이전 모델의 실용적 long-context/enterprise utility와 비교해 평가하고 있음을 시사한다.

### Less Technical Subreddits: Claude Code 워크플로와 Anthropic 교육

- **[I'm a software engineer with a decade of experience. I vibe code all of my side projects from my phone using Claude Code and don't read any of the code. It's so fun. Here are the rules I follow:](https://www.reddit.com/r/ClaudeAI/comments/1tj2i90/im_a_software_engineer_with_a_decade_of/)** (Activity: 1900): **이 게시물은 생성된 코드를 직접 읽지 않고 사이드 프로젝트에 **Claude Code**를 쓰는 위험 관리형 “vibe coding” 워크플로를 제안한다. plan mode에서 시작하고, 계획을 반복적으로 점검/명확화하며, 머릿속으로 모델링할 수 있을 만큼 작업을 작게 유지하고, 에이전트가 생성한 테스트 케이스를 요구하며, 각 완료된 plan 뒤에는 `git`에 commit하고, 에이전트가 DB에 접근하기 전 데이터베이스를 백업하며, 실시간 검증에는 **Chrome DevTools MCP** 같은 browser/E2E tooling을 쓰라는 것이다. 복잡한 변경의 경우 작성자는 **plan critique**, **security review**, **test audit**을 위한 병렬 review agent를 제안하고, plan/test/rollback 구조가 마련된 뒤에만 auto mode로 전환하라고 한다.** 상위 댓글들은 대체로 이를 비교적 제정신인 agentic-coding 패턴으로 지지했다. 특히 *“계획이 머릿속에 들어오기에 너무 크면, 그 계획은 너무 크다”*는 규칙이 호응을 얻었다. 댓글 작성자들은 [`superpowers` skillset](https://github.com/obra/superpowers/tree/main)으로 프로세스를 반복 가능하게 만들고, 에이전트 범위를 좁게 유지하라고 권했다. 하나의 변경, 하나의 예상 테스트, 하나의 rollback point, 그리고 프롬프트에 명시적 non-goals를 포함하라는 것이다.

- **작고 검증 가능한 범위**: 여러 댓글 작성자는 에이전트 작업을 **작고 검증 가능한 scope**로 제한해야 한다고 강조했다. “one change, one expected test, one rollback point”가 원칙이며, 프롬프트에는 에이전트가 *건드리지 말아야 할 것*도 명시해야 한다. 기술적 이유는 작은 plan이 Claude Code나 유사 코딩 에이전트를 사용할 때 디버깅 복잡도를 줄이고 실패를 격리하기 쉽게 만들기 때문이다.
- **반복 가능한 scripted process**: 한 댓글 작성자는 [`superpowers` skillset](https://github.com/obra/superpowers/tree/main)을 사용해 워크플로를 반복 가능한 scripted process로 바꾸라고 추천했다. 이는 재사용 가능한 agent workflows/skills를 제공하려는 GitHub 프로젝트다. 프로젝트가 single-prompt generation을 넘어 반복 개발로 넘어갈 때 “vibe coding”을 덜 ad hoc하게 만드는 방법으로 제시됐다.

- **[Anthropic officially launched 13+ FREE AI courses with certificates (Including Agentic AI and Claude Code!)](https://www.reddit.com/r/ClaudeAI/comments/1tjpfh8/anthropic_officially_launched_13_free_ai_courses/)** (Activity: 1585): ****Anthropic**은 [anthropic.com/learn](https://www.anthropic.com/learn) / Anthropic Skilljar를 통해 접근 가능한 무료 공식 training catalog를 제공하며, 수료증도 포함된다. 내용은 **MCP / agentic AI**, **Claude Code**, Claude API 사용, **Amazon Bedrock**과 **Google Cloud Vertex AI**를 위한 enterprise deployment paths를 다룬다. 호출된 기술적 하이라이트는 `STDIO`와 `StreamableHTTP` transport에 대한 고급 자료를 포함한 **Model Context Protocol (MCP)** 과정, 그리고 codebase editing, test execution, “Plan Mode” 같은 Claude Code 워크플로다. 관련 무료 **CodeSignal** 파트너십 트랙인 *Developing Claude Agents*는 Python/TypeScript agent-building labs와 certificates를 제공하는 것으로 알려졌다.** 댓글 작성자들은 대체로 이 과정들이 합법적인 Anthropic 제공 자료라고 확인했다. 한 사용자는 Skilljar 링크가 Anthropic의 자체 learn page에서 노출된다고 언급했다. `10/15`개 과정을 완료한 사용자는 특히 MCP와 advanced MCP 모듈이 *“worth the squeeze”*라고 추천했다.

- **MCP 과정 추천**: `10/15`개 과정을 완료한 한 댓글 작성자는 **MCP**와 **MCP Advanced Topics** 과정이 가장 기술적으로 가치 있다고 강조했다. Claude/tool integration을 다루는 개발자에게 `STDIO`와 `StreamableHTTP` transport protocol coverage가 특히 유용하다고 말했다.
- **공식 자료 확인**: 또 다른 댓글 작성자는 과정들이 합법적인 Anthropic training material이라고 확인하며, Skilljar course link가 Anthropic 공식 learning portal인 [anthropic.com/learn](https://www.anthropic.com/learn)에서 나온다고 언급했다.

- **[Claude is telling users to go to sleep mid-session and nobody, including Anthropic, seems to fully understand why it keeps doing it](https://www.reddit.com/r/singularity/comments/1tib9so/claude_is_telling_users_to_go_to_sleep_midsession/)** (Activity: 1360): **Claude가 세션 도중 사용자에게 수면/휴식을 권하며 끼어드는 사례가 보고됐다. 인용된 기사에 따르면 **wellbeing nudging**이나 **compute-saving throttling** 같은 설명은 가능성이 낮다. Claude가 allegedly session-usage context를 갖고 있지 않기 때문이다. **Anthropic**은 Fortune에 답하지 않았지만, Anthropic 직원 **Sam McAllister**는 X에서 이 행동을 *“Bit of a character tic”*이라고 설명했고 *“aware of this and hoping to fix it in future models”*라고 말했다.** 댓글 논의는 대부분 추측이었다. 사용자들은 이 행동이 emergent persona/safety-tuning artifact인지, 의도적 product feature인지 논쟁했고, 기사는 이를 policy가 아니라 해결되지 않은 model-behavior bug로 framing했다.

- **모델 행동/정렬 artifact 가능성**: 인용문은 **Claude가 사용자의 사용 시간에 대한 context를 받지 않기 때문에** 수면 prompt가 의도적 wellbeing 또는 compute-throttling feature일 가능성이 낮다고 주장한다. Anthropic 직원 **Sam McAllister**는 X에서 해당 행동을 *“Bit of a character tic”*이라고 설명하고 *“aware of this and hoping to fix it in future models”*라고 말한 것으로 알려졌으며, 이는 product-level session-management policy가 아니라 model-behavior/alignment artifact로 다뤄지고 있음을 시사한다.

### Less Technical Subreddits: AI의 노동력 및 인프라 반발

- **[It's 2026, and we are yet to see an anti-almond farm protest.](https://www.reddit.com/r/singularity/comments/1tidqkv/its_2026_and_we_are_yet_to_see_an_antialmond_farm/)** (Activity: 2679): **이미지는 **CONUS almond farms가 data centers보다 훨씬 많은 물을 소비한다**고 주장하는 contextual line chart다. 아몬드는 1999–2026년 약 `550`에서 거의 `1,600` **billion gallons/year**로 증가하는 반면, data centers는 x축 근처에 머물며 완만한 성장만 보인다. 제목인 *“It’s 2026, and we are yet to see an anti-almond farm protest”* 맥락에서 이 차트는 기술 벤치마크라기보다 AI/data-center 물 사용을 둘러싼 대중적 관심에 대한 비판이다. 이미지: [qy67jhsop82h1.png](https://i.redd.it/qy67jhsop82h1.png).** 댓글은 anti-almond 비판이 이미 존재한다고 반박했다. 특히 California water-policy 논쟁과 다큐멘터리에서 그렇다는 지적이 있었고, 한 댓글은 골프장이 data centers보다 몇 배 더 많은 물을 사용할 수 있다고 덧붙였다.

- **California 물 배분 논쟁**: 여러 댓글 작성자는 almond farming을 더 넓은 **California water-allocation debate**의 일부로 framing했다. almond orchard는 반복되는 가뭄과 물 부족 논란에서 자주 비난받는다는 것이다. 제기되는 기술적 비교는 단순한 “almonds vs. data centers”가 아니라 농업 대 **dairy**, 골프장, compute infrastructure 같은 다른 대규모 물 사용처다.
- **AI/data-center 비판의 비례성**: 한 댓글은 미국 **golf courses가 data centers보다 몇 배 더 많은 물을 소비한다**고 주장하며, AI/data-center 물 사용에 대한 대중 비판이 다른 recreational 또는 agricultural use에 비해 과도할 수 있다고 제안했다. 또 다른 댓글은 anti-almond 비판이 이미 다큐멘터리와 California 환경 담론에 존재한다고 지적했다. 특히 irrigation demand와 drought resilience를 둘러싼 논의에서 그렇다.

- **[Mark Zuckerberg’s Meta kicks off major bloodbath with 8,000 layoffs (about 10% of its workforce) as AI roils tech giant](https://www.reddit.com/r/singularity/comments/1tiosgg/mark_zuckerbergs_meta_kicks_off_major_bloodbath/)** (Activity: 1533): **이 게시물은 **Meta**가 전 세계적으로 약 `8,000`명, 즉 workforce의 `~10%`를 3차례에 걸쳐 layoff하고 있으며, 현지 시간 `4 a.m.`에 이메일로 통지가 발송됐고 Singapore 직원들이 먼저 통보받은 것으로 알려졌다고 주장한다. framing은 이 감축을 AI-driven restructuring과 연결하지만, 댓글 작성자들은 Meta의 AI capex 필요성, 예를 들어 *“Meta에서 AI에 `$200B`가 필요한 것은 무엇인가?”*와 여전히 수만 명을 고용한 회사의 headcount efficiency를 질문했다.** 상위 댓글은 *“roils”*라는 표현에 이의를 제기했다. layoff는 disruption이 아니라 AI adoption의 의도된 이점이며, 기업들이 점점 투자자에게 긍정적으로 제시할 수 있다는 것이다. 다른 이들은 반복되는 Meta layoff를 일상적이라고 봤고, 회사가 애초에 왜 그렇게 큰 workforce가 필요한지 의문을 제기했다.

- **AI-driven인지 과잉 채용 조정인지**: 댓글 작성자들은 layoff가 실제로 *AI-driven*인지, 아니면 ZIRP-era hiring surge 이후의 조정인지 질문했다. 한 사용자는 Meta headcount가 여전히 2020년 수준보다 높다고 지적하며, 이번 감축이 직접적 자동화 영향보다 post-overhiring normalization을 반영할 수 있다고 봤다.
- **`$200B` AI spend 의문**: 제기된 기술/전략적 우려는 Meta의 보고된 **`$200B` AI spend**였다. 댓글 작성자들은 어떤 인프라나 product roadmap이 그 규모를 정당화할 수 있는지 물었고, 이는 일반 software staffing needs가 아니라 대규모 compute, data-center, model-training capex를 암시한다.
- **운영 모델 변화**: 여러 댓글은 AI adoption을 지속적인 operating-model shift로 framing했다. 한 사용자는 AI tooling이 white-collar와 engineering labor 일부를 대체함에 따라 대형 조직 전반에서 매년 **`10–20%` headcount reductions**가 반복될 것이라고 예측했다.

---

## AI Discord Recap

### 접근 종료

- **Discord 접근 종료**: 아쉽게도 Discord가 오늘 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
