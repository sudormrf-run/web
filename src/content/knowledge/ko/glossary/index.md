---
title: 용어집
description: Physical AI 분야의 핵심 용어 100선 — 개념→지능→학습→몸→능력 하향식 정렬
category: glossary
order: 1
isFeatured: true
icon: book
tags: [glossary, terminology, physical-ai, robotics, vla, rfm]

createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-02-15
---

# Physical AI 용어집

> Physical AI 분야에서 자주 등장하는 핵심 용어 100개를, 개념 정의에서 시작해 지능 모델→학습 방법→데이터·스케일링→가상 세계→물리적 형태→물리적 능력→감각·인프라 순으로 정리했다. 맨 아래 [혼동하기 쉬운 용어](#혼동하기-쉬운-용어)와 [참고 문헌](#참고-문헌) 섹션도 함께 참고하자.

---

**1. Physical AI** — 물리 세계에서 감각하고, 이해하고, 행동하는 AI의 총칭. 챗봇 같은 디지털 AI와 달리, 물리 법칙·공간·실시간 상호작용을 다뤄야 한다. NVIDIA가 CES 2025에서 "로보틱스의 ChatGPT 모멘트"를 선언하며 핵심 전략으로 내세웠고, Morgan Stanley는 2050년까지 5조 달러 시장을 전망한다 [13]. 핵심은 단순 자동화(Automation)가 아닌 자율성(Autonomy)의 부여다.

**2. VLA (Vision-Language-Action)** — 카메라 영상 + 자연어 명령을 입력받아 로봇 행동을 직접 출력하는 멀티모달 모델. VLM에 "행동 출력"을 추가한 것이 핵심 차이다. 2025년 기준 100종 이상의 VLA 아키텍처가 보고되었으며 [14], 로봇 파운데이션 모델의 지배적 패러다임이다. 다만 정밀한 물리적 상호작용(예: 섬세한 힘 조절이 필요한 조립)에서는 아직 한계를 보인다 [1].

**3. RFM (Robot Foundation Model, 로봇 파운데이션 모델)** — 대규모 데이터로 사전 학습해 다양한 로봇·작업에 범용 적용 가능한 기반 모델. VLA는 RFM의 한 종류이지, 같은 개념이 아니다. '일반화, 구성적 추론, 통합 인터페이스 제공'으로 로봇 조작 패러다임을 근본적으로 바꾸었으며 [1], Skild AI는 진정한 RFM과 "로봇 데이터를 약간 뿌린 VLM"을 구분해야 한다고 주장한다. 경쟁 우위가 하드웨어 정밀도에서 '데이터의 규모와 다양성'으로 이동했다.

**4. World Model / WFM (월드 모델)** — 환경의 물리 법칙을 내부적으로 시뮬레이션해 "이 행동을 하면 세상이 어떻게 변할까"를 예측하는 모델. 정책(Policy)과 달리 환경 자체를 모델링한다. 로봇이 '정신적 시연(Mental Rehearsal)'을 통해 행동 전에 결과를 예측할 수 있게 하며 [1], RSSM·JEPA·Transformer 기반의 세 가지 아키텍처가 공존한다. NVIDIA Cosmos, Meta V-JEPA 2, Google DeepMind Genie 3 [2]가 대표적. 2026년에는 인과관계와 물리를 준수하는 '행동 조건부(Action-Conditioned)' 모델로 진화했다.

**5. Imitation Learning (모방 학습)** — 사람의 시연을 관찰하고 따라하도록 학습하는 방법. 보상 함수 설계 없이도 도구 사용, 조립 같은 복잡한 기술을 빠르게 전수할 수 있다 [1]. Imperial College London은 단일 시연으로 하루 만에 1,000가지 작업을 학습하는 성과를 보고했다(Science Robotics, 2025.12) [15]. 2025년 로봇 파운데이션 모델의 지배적 학습 패러다임.

**6. Behavior Cloning (행동 복제)** — 모방 학습의 가장 기본 형태. 시연 데이터에서 관측→행동 매핑을 지도 학습한다. 단순하지만 VLA·Diffusion Policy의 기반이 되며, 2025년 주류.

**7. Teleoperation (원격 조작)** — 사람이 직접 로봇을 조종해 행동 데이터를 수집하는 방법. VR 컨트롤러, 리더-팔로워 팔, 엑소스켈레톤, 햅틱 글러브(DOGlove, ICRA 2025) 등 방식이 다양하다. Boston Dynamics의 원칙: "텔레오퍼레이션할 수 있다면, 네트워크를 훈련시켜 그 행동을 재현할 수 있다" [3]. 시간당 $100-1,000의 비용이 들어 확장이 어렵지만, 가장 고품질의 조작 데이터를 제공한다.

**8. Sim-to-Real Transfer (시뮬레이션→실제 전이)** — 시뮬레이션에서 학습한 정책을 실제 로봇에 이식하는 것. 시각·물리·센서 세 가지 차이(sim-to-real gap)를 극복하는 것이 핵심 과제. 제로샷 전이(NVIDIA AutoMate, 100가지 조립 형상에서 84.5% 성공률)와 시뮬레이션 사전 학습 후 소량 실제 데이터로 미세 조정하는 2단계 접근(Dita, 10샷으로 충분)이 양대 전략이다. "시뮬레이션할 수 없다면, 확장할 수 없다"가 2026년의 철칙.

**9. Generalist Policy (범용 정책)** — 하나의 모델로 다양한 작업·환경·로봇에 적용 가능한 정책. 전문가 정책(specialist)의 반대 개념. pi0.5가 학습 때 본 적 없는 집에서 10-15분간 자율 청소를 시연했다. '범용' ≠ '모든 작업을 잘 함'이며, 배포 시 포스트트레이닝이 필요하다.

**10. Zero-Shot Generalization (제로샷 일반화)** — 학습 때 본 적 없는 물체·환경·지시에 추가 학습 없이 수행하는 능력. 범용 로봇 모델의 궁극적 목표. 수건만 개던 로봇이 처음 보는 티셔츠를 개는 것이 예시. 로코모션에서는 LeVERB(Berkeley, 2025.6)가 최초의 제로샷 sim-to-real 휴머노이드 전신 제어를 시연.

**11. End-to-End Learning (엔드투엔드 학습)** — 센서 입력에서 모터 출력까지 하나의 통합 모델로 학습하는 접근법. 인식·계획·제어를 별도 모듈로 분리하지 않고, 딥 뉴럴 네트워크가 시연 데이터나 시행착오를 통해 원시 관측에서 행동으로의 매핑을 직접 학습한다 [3]. 작업별 코딩이 불필요해 유연하지만, 대규모 학습 데이터와 안전 검증이 필수. VLA, Diffusion Policy 등 현대 로봇 정책의 근간이 되는 학습 패러다임이다.

**12. Synthetic Data (합성 데이터)** — 시뮬레이션이나 생성 모델로 만든 인공 데이터. 실제 데이터 대비 60-80% 비용 절감, 90-95% 성능 달성 가능. NVIDIA GR00T Blueprint가 합성 데이터로 GR00T N1 성능을 40% 향상시켰다. 텍스트 데이터에 비해 로봇 데이터가 현저히 부족한 '데이터 격차(Data Gap)' 문제를 해결하는 핵심 수단.

**13. Co-training (코트레이닝)** — 여러 종류 데이터(로봇, 웹, 시뮬레이션)를 동시에 학습시키는 방법. 데이터 부족 문제를 완화. Mobile ALOHA에서 최대 90% 성능 향상. DROID 데이터셋과의 코트레이닝은 OXE 대비 22% 절대 성공률 향상을 달성했다. 로봇에게 '상식'과 '운동 감각'을 동시에 부여하는 전략.

**14. Pre-Training (사전 학습)** — 대규모·다양한 데이터셋으로 모델의 범용 표현을 학습하는 첫 단계. LLM의 'GPT 사전 학습'에 해당하며, 로보틱스에서는 웹 영상·시뮬레이션·다종 로봇 데이터를 혼합하여 물리 세계의 일반적 패턴(접촉, 중력, 공간 관계)을 학습한다. 사전 학습의 질과 규모가 파인 튜닝 효율을 결정하며, '사전 학습→포스트트레이닝' 패러다임의 앞단이다.

**15. Fine-Tuning / Post-Training (파인 튜닝)** — 사전 학습된 모델을 특정 로봇·작업에 소량 데이터(보통 100개 시연)로 추가 학습시키는 과정. NVIDIA는 "파운데이션 모델을 처음부터 학습하는 것이 아니라 포스트트레이닝으로 활용하는 것이 핵심"이라 강조한다. "사전 학습→포스트트레이닝" 패러다임이 Physical AI의 핵심 배포 방식.

**16. Scaling Law (스케일링 법칙)** — 모델·데이터·컴퓨팅 규모가 커질수록 성능이 예측 가능하게 향상된다는 법칙. LLM에서 확인되었고, Physical AI에서도 성립하는지가 2025년 $40.7B 투자가 걸린 핵심 질문이다. 실제 데이터 수집 비용, sim-to-real gap, 물리적 작업의 높은 분산이 LLM 스케일링과 다른 도전. GEN-0(Generalist AI)는 7B 파라미터에서 상전이(phase transition)를 보고하며 로보틱스 스케일링 법칙의 첫 경험적 증거를 제시했다. 데이터 양뿐 아니라, 다양한 형태의 로봇 데이터 혼합(임바디먼트 스케일링)이 핵심.

**17. Digital Twin (디지털 트윈)** — 물리 시스템의 가상 복제본으로, '실시간 데이터를 사용해 실제 객체의 상태와 행동을 반영하는 가상 모델' [6]. 2025년에는 정적 설계 도구에서 지속적 최적화 시스템으로 진화해, 원격 측정을 흡수하고 고장을 예측한다. 시장 규모는 $10.1B(2023)에서 $73.5B(2028)로 성장 전망 [16]. HIL(Hardware-in-the-Loop) 테스트와 대규모 배포 전 안전 검증에 필수.

**18. Embodiment (임바디먼트)** — 로봇의 물리적 형태와 능력. 형태가 지능을 규정한다는 체화 가설의 핵심 개념. 서로 다른 임바디먼트 간 기술 전이가 어려운 이유(임바디먼트 갭).

**19. Cross-Embodiment Transfer (교차 임바디먼트 전이)** — 서로 다른 형태의 로봇 간에 지식을 공유·전이하는 것. CrossFormer가 30종 로봇을 동일 가중치로 제어. 다양한 형태의 로봇 데이터를 혼합 학습하면 물리학의 근본 원리(접촉, 균형 등)를 더 잘 이해하게 된다는 '임바디먼트 스케일링 법칙'이 2025년에 부상했다. 궁극적 목표는 로봇 형태에 관계없이 작동하는 임바디먼트 무관 정책(Embodiment-Agnostic Policy)으로, 보편적 행동 공간(카르테시안 좌표)이나 임바디먼트 토큰으로 구현을 시도한다.

**20. Embodied AI (체화 지능)** — 물리적 신체를 가지고 환경과 상호작용하는 AI. Physical AI와 거의 동의어이나, Embodied AI는 학술 용어, Physical AI는 산업 용어에 가깝다. Google DeepMind는 'Embodied Intelligence', NVIDIA는 'Physical AI'를 선호한다.

**21. DOF (Degrees of Freedom, 자유도)** — 로봇이 독립적으로 움직일 수 있는 축의 수. 산업용 팔 6 DOF, 휴머노이드 40+ DOF, 사람 손 20+ DOF. DOF가 많을수록 능력↑, 제어 난이도↑.

**22. End Effector (엔드 이펙터)** — 로봇 팔 끝단의 물체 상호작용 장치. 크게 그리퍼(2-3핑거, 단순, 정형 작업)와 다관절 손(4-5핑거, 12-22+ DOF, 범용 조작)으로 구분된다. AI 제어 능력의 성숙과 함께 업계 트렌드가 단순 그리퍼에서 다관절 손으로 이동 중.

**23. Proprioception (고유수용감각)** — 로봇의 자기 상태(관절 각도·속도·토크) 감지 능력. 사람의 근육 감각에 해당. 카메라(시각)와 구분되는 내부 센싱. 어두운 곳에서 걷거나 물체를 조작할 때 핵심적.

**24. Dexterous Manipulation (정밀 조작)** — 다관절 로봇 손으로 물체를 돌리고, 조립하고, 도구를 사용하는 복잡한 조작. '정교하고 조율된 손가락 움직임과 적응적 힘 조절'이 핵심이다 [5]. ICRA 2025는 "로봇 손의 해"로 불렸으며, DexGraspVLA(2025)는 VLM을 활용한 정밀 파지를 시연. Shadow Hand, LEAP Hand(오픈소스), DexGraspRL(92% 성공률) 등이 대표 [5].

**25. Tactile Sensing (촉각 센싱)** — 접촉 시 압력·미끄러짐·온도를 감지하는 기술. 비전 기반 촉각 센서(GelSight, DIGIT ~$350)가 주류이며, "촉각의 ImageNet 모멘트"에 도달하고 있다. Figure 03의 손은 3그램 수준의 미세한 힘을 감지한다. 바늘 꿰기, 라즈베리를 으깨지 않고 집기처럼 시각만으로는 극도로 어려운 작업을 가능하게 한다 [5].

**26. Locomotion (로코모션)** — 로봇의 이동 능력. 2족(휴머노이드)은 불안정해 어렵고, 4족은 상대적으로 안정. 보통 시뮬레이션 RL(PPO)로 학습 후 Sim-to-Real 전이. 교사-학생 학습(privileged teacher → deployable student)이 표준 접근법.

**27. Loco-Manipulation (로코-매니퓰레이션)** — 이동과 조작을 동시 수행. 걸으면서 물건 집기. 보행과 조작 정책이 상충하기 쉬워(팔 움직임이 균형에 영향) 통합이 매우 어렵다. 모바일 휴머노이드의 핵심 기능.

**28. Whole-Body Control (전신 제어)** — 로봇의 모든 관절을 동시 조율하는 제어 프레임워크. 휴머노이드에서 팔(조작)+다리(보행)+몸통(균형)을 통합. 팔을 뻗기 위해 상체를 기울이거나 다리 중심을 이동하는 등의 동작에 필수. WholeBodyVLA(ICLR 2026)가 프론티어를 대표하며 [17], 2025년 관련 논문이 폭발적으로 증가했다.

**29. Actuator (액추에이터)** — 에너지를 기계적 운동으로 변환하는 구동 장치. 2025년 휴머노이드의 주류는 QDD(Quasi-Direct Drive, 저감속비 6:1-10:1)로 적절한 토크와 충격 내성을 제공. SEA(Series Elastic Actuator)는 힘 제어에 특화. 1X NEO는 텐던 구동으로 조용하고 유연한 움직임을 구현. Boston Dynamics의 유압→전동 전환(2024)이 업계의 전동화 흐름을 확정.

**30. Egocentric Vision (자기 중심 시각)** — 로봇(또는 사람)의 시점에서 바라보는 1인칭 시각. 3인칭 외부 카메라 대비 실제 배포 환경에 가까운 입력을 제공한다. 사람의 유튜브 하우투 영상(자기 중심 시점)에서 직접 조작 기술을 학습하는 연구가 활발하며, Ego4D, Epic-Kitchens 등 대규모 데이터셋이 기반이다. 텔레오퍼레이션 없이도 인터넷 영상으로 대규모 학습 데이터를 확보할 수 있는 경로.

**31. Diffusion Policy (디퓨전 정책)** — 확산 모델로 로봇 행동을 생성하는 정책. 노이즈에서 시작해 반복적으로 행동 시퀀스를 복원한다. RSS 2023에서 발표되어 12개 이상 작업에서 기존 BC 대비 46.9% 성능 향상을 달성했다. 다봉 분포(여러 가지 유효한 행동)를 표현할 수 있어, 컵을 잡는 방법이 A와 B 두 가지일 때 둘 중 하나를 명확히 선택하는 능력이 강점이다.

**32. Flow Matching (플로우 매칭)** — 노이즈→데이터를 직선 경로로 변환하는 생성 모델. Diffusion보다 적은 스텝(최소 1스텝)으로 행동 생성이 가능해 추론 속도가 빠르다. pi0가 대표적으로 50Hz 실시간 제어에 사용하며, FlowPolicy(AAAI 2025)는 7배 추론 속도 향상을 달성. 로봇의 움직임을 딱딱한 명령어 나열이 아닌 '유체와 같은 흐름'으로 처리한다.

**33. LBM (Large Behavior Model, 대형 행동 모델)** — VLA와 유사하나, 단일 행동이 아닌 다단계 행동 시퀀스 학습을 강조하는 모델. Boston Dynamics/TRI가 Atlas에 적용해 개별 컨트롤러와 플래너를 하나의 대규모 신경망으로 대체했다 [3]. DiT + Flow Matching 기반. 동작의 역학(Dynamics) 학습에 특화.

**34. Dual-System Architecture (이중 시스템)** — System 2(VLM, 느린 추론, 7-10Hz)가 계획·이해를 담당하고, System 1(DiT, 빠른 반사, 최대 200Hz)이 실시간 행동을 생성하는 구조. GR00T N1, Helix가 채택. 인간 인지의 이중 처리 이론에서 영감. 직관에 반하지만 System 1이 '빠른 반사', System 2가 '느린 숙고'다.

**35. Diffusion Transformer (DiT)** — Transformer + Diffusion/Flow Matching을 결합한 아키텍처. GR00T N1의 System 1, Boston Dynamics LBM, RDT-1B의 핵심 구조.

**36. VLM (Vision-Language Model)** — 이미지와 텍스트를 함께 이해하는 모델. PaliGemma, Eagle-2(NVIDIA), Gemini 2.0, SigLIP 등이 대표적. VLA의 기반이 되며, System 2의 역할을 담당. VLM은 세상을 이해하고, VLA는 세상에서 행동한다.

**37. Action Chunking (액션 청킹)** — 한 번에 여러 미래 행동(보통 20-50 타임스텝)을 묶어서 예측하는 기법. 단일 스텝 예측의 누적 오차 문제를 해소하고 매끄러운 연속 동작을 생성한다. ACT가 이 개념을 대중화했고, 현재 거의 모든 로봇 정책이 사용.

**38. Action Tokenization (행동 토큰화)** — 연속적인 로봇 행동을 이산 토큰으로 변환하는 과정. LLM 기반 VLA에 필수. FAST(DCT 기반)가 대표적으로 Diffusion 기반 VLA 성능에 필적하면서도 5배 빠르게 학습한다. 토큰이 너무 듬성듬성하면 움직임이 부자연스럽고, 너무 세밀하면 연산량이 폭증한다.

**39. Latent Action Space (잠재 행동 공간)** — 구체적인 모터 명령 대신, 행동의 의도를 압축한 추상적 표현 공간. 모델은 이 잠재 공간의 좌표를 예측하고, 저수준 디코더가 이를 실제 관절 움직임으로 변환한다. 임바디먼트가 다른 로봇 간 전이를 쉽게 만드는 핵심 추상화.

**40. Agentic AI (에이전틱 AI)** — 인간의 개입을 최소화하고 스스로 목표를 설정·계획·실행하는 자율 AI 시스템. "부엌을 청소해"라는 추상적 목표를 주면, 로봇이 스스로 수백 가지 하위 단계를 계획하고 실행한다. '지시 이행'을 넘어 '문제 해결'로의 진화이며, 동시에 시스템적 리스크(로봇이 목표 달성을 위해 예상치 못한 행동을 취할 위험)를 동반한다.

**41. Embodied Chain-of-Thought (체화된 생각의 사슬, ECoT)** — 모델이 행동을 출력하기 전에 중간 단계의 물리적 추론("컵이 너무 머니까, 먼저 가까이 가야 해")을 명시적으로 생성하는 기술. 물리적 공간과 제약 조건을 고려한 추론을 포함하며, 로봇의 의사결정을 인간이 해석 가능하게 만든다(Interpretability). 모달리티 붕괴를 극복하고 물리적 추론 능력을 강화하는 2026년의 핵심 기술.

**42. Embodied Reasoning (체화 추론)** — 자신의 신체와 물리 세계 맥락에서 추론하는 능력. 공간 추론, 물리 추론, 어포던스 추론을 포함. Google DeepMind가 Gemini Robotics-ER로 이를 독립 모델 역량으로 정식화, 15개 학술 벤치마크에서 최고 성능을 달성.

**43. Chain-of-Affordance (CoA, 어포던스 연쇄 추론)** — VLA가 행동 선택 전에 물체의 어포던스("이것은 무엇이고, 어떻게 조작할 수 있는가")에 대한 중간 추론을 생성하는 패러다임. LLM의 Chain-of-Thought를 물리적 조작에 접지시킨 것이다. CoA-VLA(ICCV 2025)에서 제안되어 공간 접지와 작업 일반화를 개선했다 [18]. ECoT와 함께 '행동 전 추론' 접근법의 핵심 축.

**44. Affordance (어포던스)** — 물체가 에이전트에게 제공하는 행동 가능성. 머그컵 손잡이는 "잡기"를 어포드(afford)한다. 물체 인식(무엇인가)과 구분되는 개념으로, 어떻게 상호작용할 수 있는가를 나타낸다. Google SayCan은 어포던스 기반 가치 함수로 LLM 계획을 현실에 접지(ground)시킨다 [4].

**45. Task Planning (태스크 플래닝)** — 고수준 목표("주방 청소")를 실행 가능한 하위 작업 시퀀스로 분해하는 과정. VLM/LLM이 System 2 역할로 담당. 에이전틱 AI의 핵심 구성 요소.

**46. TAMP (Task and Motion Planning)** — 고수준 태스크 플래닝(이산적 논리·기호 추론)과 저수준 모션 플래닝(연속적 기하)을 통합하는 접근법. '태스크 플래너가 행동 순서를 결정하고, 모션 플래너가 각 행동의 물리적 실행 가능성을 검증'한다 [8]. 2025년에는 LLM이 기존 도메인 명세를 대체하기 시작했으나, 체계적 연구 결과 LLM은 엔지니어링 솔버 대비 성공률이 낮고 계획 시간이 길었다. NVIDIA cuTAMP가 GPU 병렬화를 시도.

**47. Modality Collapse (모달리티 붕괴)** — VLA 학습 시, 시각 정보가 너무 압도적이어서 모델이 언어 명령을 무시하는 현상. 2026년 1월 연구에서 VLA가 언어를 무시하고 시각적 단서에만 의존하는 'Vision Shortcut' 문제가 공식 보고되었다 [14]. Embodied CoT와 학습 전략 개선으로 해결을 시도하는 주요 연구 과제.

**48. Physical Hallucination (물리적 환각)** — VLA 모델이 존재하지 않는 물체나 물리적 특성을 착각하는 현상. 텍스트 환각(LLM의 Hallucination)과 달리 물리적 사고(충돌, 파손)로 이어진다는 점에서 치명적. Physical AI 배포의 핵심 안전 과제.

**49. Reinforcement Learning (강화 학습)** — 환경과 상호작용하며 보상을 최대화하는 방향으로 학습. PPO가 로코모션, SAC이 조작(manipulation) 분야를 각각 지배한다. 2025년에는 BC 사전 학습 + RL 미세 조정의 하이브리드가 주류.

**50. Domain Randomization (도메인 랜덤화)** — 시뮬레이션의 조명·텍스처·물리 파라미터를 무작위로 바꿔 학습시켜, 현실이 "또 하나의 랜덤 변형"이 되게 하는 기법. OpenAI의 루빅스 큐브 시연(2019)이 이 접근법을 대중화했다. Sim-to-Real 제로샷 전이에 가장 널리 사용되는 기술 [7].

**51. Reward Shaping (보상 설계)** — 강화 학습의 보상 함수를 설계하는 기법. 희소 보상은 학습이 느리고, 밀집 보상은 의도치 않은 행동(reward hacking)을 유발. NVIDIA Eureka(Isaac Lab)가 LLM으로 자연어 기반 보상을 자동 생성하는 프론티어를 개척.

**52. Curriculum Learning (커리큘럼 러닝)** — 학습 중 작업이나 환경의 난이도를 점진적으로 높이는 기법. 로코모션: 지형 거칠기 증가 → 외란 추가 → 허용 오차 축소 순으로 진행한다. Isaac Lab은 자동 도메인 랜덤화와 점진적 난이도를 지원. 커리큘럼 없이는 복잡한 로코모션 정책이 수렴하지 못하는 경우가 많다.

**53. RLHF for Robotics (로봇 RLHF)** — LLM 정렬에 쓰인 RLHF를 로봇 행동에 적용. 사람의 선호 피드백으로 보상 모델을 학습하고 정책을 최적화. 물리적 상호작용의 품질과 안전을 평가해야 해 LLM 버전보다 어렵다. DPO가 2025년 주류로 부상.

**54. Few-Shot Adaptation (퓨샷 적응)** — 1-50개 시연으로 새 작업을 학습하는 능력. 파운데이션 모델의 실용적 가치를 결정하는 핵심 지표. Imperial College London은 단일 시연으로 1,000작업, Cornell RHyME는 하우투 영상 한 편으로 원샷 학습을 시연 [15].

**55. Long-Horizon Task (장기 과제)** — 수분~수 시간에 걸친 다단계 작업. 오차가 누적되고 문맥 유지가 필요. pi0.5(15분), Helix 02(4분), DiT-Block(1500+ 스텝) 등이 프론티어.

**56. JEPA / V-JEPA 2 (Joint Embedding Predictive Architecture)** — Yann LeCun이 제안한 자기 지도 학습 프레임워크. 픽셀이 아닌 추상 표현을 예측해 세계 모델을 구축. Meta의 V-JEPA 2는 100만+ 시간 인터넷 영상으로 학습, 62시간 로봇 데이터만으로 제로샷 로봇 계획에서 65-80% 성공률 달성.

**57. pi0 / pi0.5 / pi0.6** — Physical Intelligence의 VLA 모델. pi0는 VLM + Flow Matching으로 8개 임바디먼트, 68개 작업을 학습. pi0.5는 학습 때 본 적 없는 환경에서 10-15분 자율 작업을 시연한 최초의 모델. pi0.6은 RECAP(실세계 경험 기반 RL)을 적용해 처리량 2배, 실패율 감소. openpi로 오픈소스화. $1.1B 투자 유치, "로보틱스의 GPT-1"으로 불린다.

**58. GR00T N1 / N1.5 / N1.6** — NVIDIA의 오픈 휴머노이드 파운데이션 모델. 2.2B 파라미터 Dual-System VLA: System 2(Eagle-2 VLM, 1.34B)가 추론, System 1(DiT)이 행동 생성. N1.6(2026.1)에서 Cosmos Reason 통합과 풀바디 제어를 지원. Hugging Face에 공개되어 1X, Boston Dynamics, Agility, Figure AI 등이 채택.

**59. Gemini Robotics** — Google DeepMind의 VLA. Gemini 2.0 기반에 행동 출력을 추가. 종이접기, 카드 다루기 등 고난도 정밀 조작 시연. Gemini Robotics-ER (Embodied Reasoning) 버전은 15개 학술 벤치마크에서 최고 성능. On-Device 변형(2025.6)은 클라우드 없이 로컬 실행을 지원. ASIMOV 시맨틱 안전 레이어를 포함.

**60. Helix** — Figure AI의 휴머노이드 VLA. System 2(7B VLM, 7-9Hz) + System 1(80M 비전-모터 정책, 200Hz)의 이중 구조로 최초로 상체 전체(손가락 개별 포함)를 고속 연속 제어. ~500시간 텔레오퍼레이션 데이터로 학습. Helix 02는 걷기+조작+균형을 하나의 신경망으로 통합, 4분간 자율 주방 작업 시연.

**61. OpenVLA** — Stanford의 7B 오픈소스 VLA. DINOv2 + SigLIP + Llama 2 기반, 97만 실제 로봇 시연으로 학습. 55B RT-2-X 대비 16.5% 높은 성공률을 1/7 크기로 달성 [5]. SmolVLA(450M, Hugging Face)와 함께 로봇 AI '민주화'의 상징.

**62. Octo** — Transformer + Diffusion 기반 오픈소스 범용 정책. OXE 80만 episode로 학습. 27M/93M 파라미터의 소형 모델이지만 55B RT-2-X과 동등 성능. 2026년 모델들의 전신(precursor) 격.

**63. RDT (Robotics Diffusion Transformer)** — DiT 기반 양팔 조작 파운데이션 모델, 1.2B 파라미터. 46개 데이터셋, 100만+ 궤적으로 학습. 비선형 MLP 디코더로 물리 동역학 포착. ICLR 2025 발표, 기존 대비 56% 성능 향상.

**64. ACT (Action Chunking with Transformers)** — CVAE + Transformer로 행동 청크를 예측하는 모방 학습 아키텍처. ALOHA에서 시작, 50개 시연만으로도 작동. 2025년 로봇 학습의 표준 베이스라인.

**65. ALOHA** — 저가(~$32K) 양팔 텔레오퍼레이션 하드웨어 시스템. 리더-팔로워 방식으로 시연 데이터를 수집하며, 동급 상용 시스템(~$200K) 대비 획기적으로 저렴하다. Mobile ALOHA로 확장되어 이동+조작 데이터 수집이 가능. 연구용 표준 플랫폼.

**66. LeRobot** — Hugging Face의 오픈소스 로봇 학습 프레임워크. 487+ 데이터셋, ACT·Diffusion Policy·pi0 등 사전 학습 정책 제공. 저가 하드웨어(SO-100 팔)와 연동해 로봇 학습을 대중화. 로보틱스가 Hugging Face에서 가장 빠르게 성장하는 카테고리가 되었다.

**67. Open X-Embodiment (OXE)** — Google DeepMind 주도, 21개 기관 참여, 22종 로봇, 100만+ episode, 527가지 기술을 포함하는 대규모 오픈 데이터셋. RT-1-X는 OXE로 학습해 단일 로봇 모델 대비 50% 높은 성공률을 달성. 크로스-임바디먼트 연구의 기반이자 로봇 데이터의 'ImageNet' 역할.

**68. Data Engine (데이터 엔진)** — 텔레오퍼레이션·자율 수집·합성 데이터·품질 필터링을 체계적으로 결합한 데이터 파이프라인. Tesla 자율주행에서 유래. Stanford(2025.11)는 "로봇 동력 데이터 플라이휠(Robot-Powered Data Flywheel)" 개념을 정식화: 로봇 배포→데이터 수집→모델 개선→더 나은 로봇의 자기 강화 순환. 데이터 부족이 Physical AI의 #1 병목이며, 데이터 엔진/플라이휠이 해결책.

**69. Multimodal Fusion (멀티모달 융합)** — 시각·언어·고유감각·촉각 등을 하나의 표현으로 결합하는 과정. 초기 융합, 후기 융합, 교차 주의(cross-attention) 등 방식이 있으며, 융합 전략이 모델 성능을 좌우. 트랜스포머 융합 레이어가 주류.

**70. Sim-to-Real Gap (시뮬레이션-실제 간극)** — 시뮬레이션 학습→실제 배포 시 성능 저하. 시각적 차이, 물리 부정확, 센서 노이즈의 3가지 원천. 2025년 10월 서베이에 따르면 제로샷 sim-to-real은 아직 중간 복잡도 강체 작업에 제한된다. Domain Randomization, Fine-Tuning, 생성형 AI 기반 시각 사실감 향상 등으로 극복을 시도.

**71. NVIDIA Omniverse** — OpenUSD 기반의 3D 개발 플랫폼. Physical AI의 "운영체제"로, 디지털 트윈·합성 데이터·로봇 시뮬레이션 환경을 통합 제공한다. Siemens, Foxconn, BMW, Amazon Robotics, TSMC가 공장 규모 디지털 트윈에 채택.

**72. NVIDIA Isaac** — NVIDIA의 로봇 전용 플랫폼. Isaac Sim(시뮬레이터, 오픈소스), Isaac Lab(GPU 가속 학습 프레임워크, ~1.6M FPS), Isaac Manipulator(조작 SDK), Isaac Perceptor(인지 파이프라인) 등으로 구성. Isaac Lab 2.2(SIGGRAPH 2025)에서 GR00T N1 벤치마킹과 LeRobot 데이터 포맷을 지원.

**73. NVIDIA Cosmos** — 물리 세계를 생성할 수 있는 월드 파운데이션 모델 플랫폼. Cosmos Predict(가상 세계 상태 생성), Cosmos Transfer(sim-to-real 스타일 전이), Cosmos Reason(시공간 추론 VLM)으로 구성. 78만 합성 궤적을 11시간 만에 생성(6,500시간 시연 분량). Hugging Face에서 200만+ 다운로드.

**74. Newton Physics Engine** — NVIDIA, DeepMind, Disney Research가 공동 개발한 GPU 가속 오픈소스 물리 엔진. MuJoCo 대비 휴머노이드 로코모션에서 152배, 조작에서 313배 빠르고, 미분 가능. 멀티 솔버 아키텍처로 강체·천·입자 소재를 통합 처리. Linux Foundation이 관리.

**75. MuJoCo** — 다체 동역학+접촉 물리 시뮬레이터. RL 연구의 사실상 표준. Google DeepMind가 오픈소스화. 2025년 핵심 발전: MuJoCo Playground(RSS 2025 최우수 데모 논문)는 단일 GPU에서 분 단위 학습을, MuJoCo-Warp은 GPU 가속으로 70배 속도 향상을 달성.

**76. Differentiable Simulation (미분 가능 시뮬레이션)** — 물리 시뮬레이션 결과에 대해 입력이나 파라미터의 해석적 그래디언트를 제공하는 기술. 전통적 시뮬레이터가 블랙박스인 것과 달리, 물리를 신경망 그래프의 일부로 취급해 역전파가 가능하다 [1]. 시행착오 대비 훨씬 효율적인 그래디언트 기반 정책 최적화를 가능케 한다. Newton이 대표적.

**77. OpenUSD** — Pixar가 개발한 3D 장면 기술 오픈 표준. NVIDIA Omniverse의 기반. Alliance for OpenUSD(NVIDIA, Pixar, Adobe, Apple, Autodesk)가 거버넌스를 담당. 로봇 자산·환경·시뮬레이션 간 상호 운용의 "3D의 HTML".

**78. Humanoid Robot (휴머노이드 로봇)** — 사람 형태의 로봇. 40+ DOF, 양팔+양다리+몸통. 시장 ~$2.9B(2025) → 전망 $51B(2035), 연 ~55% 성장률. 60개+ 기업이 활동 중. Figure가 BMW에서, Digit가 Amazon에서, Apollo가 Mercedes에서 조기 상용 배포에 진입. 사람용 환경에서 작동할 수 있다는 전략적 이점이 핵심.

**79. Quadruped Robot (사족 보행 로봇)** — 4족 보행 로봇. 휴머노이드보다 안정적이고 적재량이 크다. Boston Dynamics Spot(~$74K)이 대표주자, Unitree Go2(~$1,600부터)가 저가 시장을 개척. 사족 보행 기술이 휴머노이드 로코모션 연구의 기반이 되었으며, 조작 팔과의 결합이 증가 추세.

**80. Cobot (Collaborative Robot, 협동 로봇)** — 안전 펜스 없이 사람과 함께 일할 수 있는 로봇. 시장 $1.26B(2024) → 전망 $3.38B(2030). Universal Robots가 시장 선도. 임피던스 제어, 시각 시스템, ISO/TS 15066(힘 제한 기준)을 통합해 안전한 협업을 구현한다 [11]. Physical AI의 인식 능력 향상은 기존 산업용 로봇도 코봇처럼 안전하게 만들고 있다.

**81. Soft Robotics (소프트 로보틱스)** — 유연한 소재(실리콘, 공압 구조)로 만든 로봇. 충격 흡수(안전), 형상 적응(섬세한 파지)이 강점. 다만 '유연 재료는 큰 변형을 겪어 전통적 물리학으로 모델링하기 어렵다'는 점이 핵심 도전 과제다 [12]. 정밀도·출력은 강체 로봇 대비 약함.

**82. Grasping (파지)** — 로봇이 물체를 잡는 동작으로, '가장 원시적인 조작 능력'이지만 거의 모든 고수준 작업의 전제 조건이다 [7]. 물체 형상·재질·무게에 따라 파지 전략이 달라지며, 6-DOF 파지 자세 추정으로 최적의 접근 위치·방향을 예측한다. DexGraspVLA(2025)는 VLM을 활용한 정밀 파지를 시연. 비정형 환경에서의 강건한 파지는 여전히 열린 문제.

**83. Contact-Rich Manipulation (접촉 집약 조작)** — 조립, 삽입, 연마, 변형 물체 처리 등 연속적·반복적 접촉이 필수인 작업. 힘과 마찰의 정밀 제어가 핵심이며, 접촉 역학의 정확한 시뮬레이션이 물리 시뮬레이션에서 가장 어려운 과제 중 하나다. NVIDIA FORGE 프레임워크는 힘 안내 탐색(force-guided exploration)으로, Newton의 멀티 솔버 아키텍처는 접촉 물리 정확도로 이 문제에 접근한다.

**84. Bimanual Manipulation (양팔 조작)** — 두 팔을 조율해 수행하는 작업(접기, 조립, 요리 등). 행동 공간이 2배, 자기 충돌 위험. RDT-1B(1.2B 파라미터)가 46개 데이터셋, 100만+ 궤적으로 학습한 최대 규모 양팔 파운데이션 모델.

**85. Deformable Object Manipulation (변형 물체 조작)** — 천, 음식, 케이블 등 형태가 변하는 물체의 조작. 사실상 무한 자유도로 상태 표현과 시뮬레이션이 극도로 어렵다. 천을 노드 메시로, 로프를 연결 그래프로 표현하는 그래프 기반 모델링이 유망하며, 물리 기반 추론의 강화가 필요하다 [1]. pi0의 빨래 접기, Gemini의 종이접기가 대표.

**86. MPC (Model Predictive Control)** — 매 시간 스텝마다 '예측 구간(Prediction Horizon)에 걸쳐 최적화 문제를 풀어 최적 궤적을 생성'하고 [9] 첫 행동만 실행하는 제어 기법. 시스템 역학과 제약 조건을 명시적으로 반영할 수 있어 보행·균형에 강하지만, 연산량이 많고 접촉이 많은 조작에는 약하다. RL 정책과 결합하거나 학습 기반 정책으로 대체되는 추세.

**87. Impedance Control (임피던스 제어)** — 로봇을 스프링-댐퍼 시스템처럼 동작하게 하는 제어 방식. 외부 힘에 유연하게 반응(Compliance)하여, 단단한 물체를 조립하거나 사람과 접촉할 때 안전을 보장한다. 스프링을 이용한 '수동적 컴플라이언스'와 소프트웨어 제어를 이용한 '능동적 컴플라이언스'로 나뉜다. 향후 파운데이션 모델은 '역학 일관적 궤적과 컴플라이언스를 통합해 안전한 물리적 상호작용을 지원'할 것으로 전망된다 [1].

**88. Inverse Kinematics (역운동학)** — 원하는 end effector 위치·방향으로부터 필요한 관절 각도를 역산하는 기법. 텔레오퍼레이션과 모션 플래닝의 기반. 신경망 기반 IK 솔버가 복잡한 다자유도 로봇의 계산 속도를 높이고 있다.

**89. Motion Planning (모션 플래닝)** — 시작→목표 사이의 충돌 없는 경로를 계산. RRT, PRM 등 고전적 방법이 있으나, 학습 기반 정책이 암묵적으로 대체하는 추세. MoveIt이 ROS 생태계의 표준 프레임워크. 안전 필수 상황에선 여전히 명시적 계획 필요.

**90. Spatial Intelligence (공간 지능)** — AI가 3D 물리 공간을 이해하고 추론하는 능력. 위치, 공간 관계, 거리, 방향, 장면 기하를 파악하는 것으로, 2D 이미지 이해를 넘어 진정한 3D 이해를 요구한다. 페이페이 리의 World Labs(2024)가 이 분야 전문 벤처로 설립되었다. '보기(2D)'와 '행동하기(3D)' 사이의 다리 역할이며, 공간 관계를 이해하지 못하는 로봇은 물체를 조작할 수 없다.

**91. 3D Gaussian Splatting (3DGS)** — 반투명 3D 가우시안 타원체로 장면을 표현하는 방법. NeRF 대비 100+ FPS 실시간 렌더링이 가능해 로봇 장면 이해·월드 모델·SLAM에 급부상. Isaac Sim 5.0에 NuRec(뉴럴 재구성)으로 통합. "공간 컴퓨팅의 JPEG 모멘트"로 불린다.

**92. NeRF (Neural Radiance Fields)** — 신경망으로 3D 장면을 암묵적으로 인코딩하는 기술. 3DGS의 전신으로, 소수의 2D 이미지로부터 새로운 시점의 이미지를 합성한다. 대규모 도시 매핑(Block-NeRF) 등에 여전히 사용되지만 실시간성에서는 3DGS에 밀리는 추세.

**93. Point Cloud (포인트 클라우드)** — 깊이 카메라·LiDAR로 취득한 3D 점 집합. 2D 이미지에 없는 공간 정보를 제공해 파지·충돌 회피에 활용. 포인트 클라우드와 딥러닝을 결합한 정밀 파지 연구가 활발하다 [7]. PointNet, 포인트 클라우드 트랜스포머로 처리.

**94. SLAM** — 미지 환경의 지도를 작성하면서 동시에 자신의 위치를 추정하는 기술. 비주얼-관성(Visual-Inertial) 융합으로 견고성을 높이고, 루프 폐합(Loop Closure)으로 이전 방문 장소를 인식해 누적 오차를 교정한다 [10]. 이동 로봇 자율 내비게이션의 기반. 2025년에는 3DGS 기반 Neural SLAM이 부상.

**95. Object Pose Estimation (물체 자세 추정)** — 센서 데이터로부터 물체의 3D 위치·방향(6-DOF)을 추정. 정밀 파지·조립·배치의 전제 조건. DINOv2 등 파운데이션 모델 특징으로 제로샷 추정이 가능해지는 추세.

**96. DINOv2 / SigLIP** — DINOv2는 자기 지도 학습으로 훈련된 ViT로 공간 이해·깊이 추정에 강하다. SigLIP은 시각-언어 표현을 정렬한 인코더. DINOv2의 공간 정밀도 + SigLIP의 의미 이해를 조합하는 것이 VLA 시각 백본의 표준 구성.

**97. ViT (Vision Transformer)** — 이미지를 패치로 분할해 Transformer로 처리하는 시각 인코더. 로봇이 "보는" 방법의 핵심. DINOv2, SigLIP 등 사전 학습 ViT가 VLA의 시각 백본.

**98. Edge Computing (엣지 컴퓨팅)** — 클라우드가 아닌 로봇 내부에서 AI를 처리하는 것. NVIDIA Jetson Thor(Blackwell GPU, 2,070 FP4 TFLOPS, 128GB 메모리, $3,499, 2025.8 출시)가 대표적. 통신 지연 없이 즉각적 반사 신경(Reflex)을 구현하기 위해 필수적. Agility, Boston Dynamics, Figure AI, Amazon, Meta 등 200만+ 개발자가 NVIDIA 로봇 스택을 사용.

**99. ROS 2 (Robot Operating System 2)** — 로봇 소프트웨어 개발의 사실상 표준 미들웨어. 모듈 간 통신, 하드웨어 추상화, 시뮬레이션 연동을 제공. DDS(Data Distribution Service)가 통신 백본. MoveIt이 표준 모션 플래닝 프레임워크.

**100. Safety Envelope (안전 범위)** — 로봇이 안전하게 작동할 수 있는 위치·속도·힘의 경계. AI는 안전 범위 안에서 결정하되, 안전 로직 자체는 AI가 아니어야 한다는 원칙. ISO 25785-1(2025.5)이 최초의 휴머노이드 로봇 안전 표준으로 발행되었다. 기능 안전(ISO 26262 / IEC 61508)이 Physical AI 인증의 핵심 장벽.

---

## 혼동하기 쉬운 용어

### RFM vs VLA vs LBM

> **흔한 혼동: 세 용어를 같은 뜻으로 사용**

| 용어 | 정의 | 핵심 차이 |
|------|------|-----------|
| **RFM** | 모든 대규모 사전 학습 로봇 모델의 총칭 | 가장 넓은 범주. VLA와 LBM은 RFM의 하위 유형 |
| **VLA** | 시각+언어 입력 → 행동 출력 모델 | 언어 조건화 필수, VLM 백본 기반 |
| **LBM** | 다단계 행동 시퀀스 학습 모델 | 단일 행동이 아닌 행동 시퀀스 강조, DiT + Flow Matching |

### Diffusion Policy vs Flow Matching vs ACT

> **흔한 혼동: "생성형 정책"으로 뭉뚱그림**

| 용어 | 생성 방식 | 속도 | 특징 |
|------|-----------|------|------|
| **Diffusion Policy** | 반복 디노이징 (10-50 스텝) | 느림 | 안정적, 잘 연구됨 |
| **Flow Matching** | 연속 벡터장 (최소 1스텝) | 빠름 | 추론 속도 우세, pi0 채택 |
| **ACT** | CVAE + Transformer (단일 포워드) | 가장 빠름 | 경량, 좋은 베이스라인 |

### Teleoperation vs Demonstration vs HITL

> **흔한 혼동: 사람 개입 방식을 구분 못 함**

| 용어 | 사람의 역할 | 시점 |
|------|-------------|------|
| **Teleoperation** | 실시간 전면 제어 | 데이터 수집 |
| **Demonstration** | 작업 시연 (텔레옵 포함, 영상·교시도 가능) | 데이터 수집 |
| **HITL** | 간헐적 감독·보정 | 학습 또는 배포 |

### World Model vs Policy vs Reward Model

> **흔한 혼동: 모두 "모델"이라 역할 혼동**

| 용어 | 예측 대상 | 역할 |
|------|-----------|------|
| **World Model** | 행동 결과로 바뀔 미래 환경 상태 | 세상 이해·예측 |
| **Policy** | 현재 관측에 대한 최적 행동 | 의사결정 |
| **Reward Model** | 상태·행동의 바람직함 | 학습 신호 |

### NVIDIA 플랫폼: Omniverse vs Cosmos vs Newton vs Isaac

> **흔한 혼동: 네 제품의 관계가 불명확**

| 용어 | 계층 | 역할 |
|------|------|------|
| **Omniverse** | 플랫폼 / OS | OpenUSD 기반 3D 개발 플랫폼 |
| **Cosmos** | 월드 모델 | Physical AI용 생성형 세계 모델 |
| **Newton** | 물리 엔진 | GPU 가속 물리 시뮬레이션 |
| **Isaac** | 로봇 도구 | 시뮬레이션·학습·인지·조작 |

Newton → Isaac Sim 내부에서 실행 → Omniverse 위에서 동작 → Cosmos로 합성 데이터 생성.

---

## 참고 문헌

> 본 용어집 보완에 활용한 주요 출처. 본문의 대괄호 번호와 대응한다.

[1] Embodied Robot Manipulation in the Era of Foundation Models: Planning and Learning Perspectives. arXiv:2512.22983, 2025. https://arxiv.org/html/2512.22983v1

[2] Genie 3: A New Frontier for World Models. Google DeepMind Blog, 2025. https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/

[3] Boston Dynamics Atlas Learns From Large Behavior Models. IEEE Spectrum, 2025. https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma

[4] Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (SayCan). arXiv:2204.01691, 2022. https://arxiv.org/abs/2204.01691

[5] Dexterous Manipulation through Imitation Learning: A Survey. arXiv:2504.03515, 2025. https://arxiv.org/abs/2504.03515

[6] What Is Digital Twin Technology? McKinsey, 2025. https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-digital-twin-technology

[7] Robotics Dexterous Grasping: Methods Based on Point Cloud and Deep Learning. PMC, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8221534/

[8] Task and Motion Planning for Grasping Targets with Object Properties. ScienceDirect, 2025. https://www.sciencedirect.com/science/article/pii/S0921889025001885

[9] Model Predictive Control (MPC). MoveIt Pro Documentation. https://docs.picknik.ai/how_to/robotics_applications/model_predictive_control/

[10] SLAM: A Comprehensive Guide. Shadecoder, 2025. https://www.shadecoder.com/topics/slam-a-comprehensive-guide-for-2025

[11] Complete Guide to Manipulator Robots: Benefits and Applications. Robotnik, 2025. https://robotnik.eu/complete-guide-to-manipulator-robots-benefits-and-applications/

[12] Controlling Diverse Robots by Inferring Jacobian Fields with Deep Networks. Nature, 2025. https://www.nature.com/articles/s41586-025-09170-0

[13] Georgetown CSET. Physical AI: An Introductory Primer. Feb 2026. https://cset.georgetown.edu/article/physical-ai-an-introductory-primer/

[14] IEEE Access. A Comprehensive Survey on Vision-Language-Action Models for Autonomous Driving and Robotics. 2025. https://ieeexplore.ieee.org/document/10937561

[15] Imperial College London. Robot Skill Learning in a Day from Single Demonstrations. Science Robotics, Dec 2025. https://www.science.org/doi/10.1126/scirobotics.ado3187

[16] MarketsandMarkets. Digital Twin Market Report. 2024. https://www.marketsandmarkets.com/Market-Reports/digital-twin-market-225269522.html

[17] WholeBodyVLA: Towards Whole-Body Language-Action Models for Humanoid Robots. ICLR 2026. https://openreview.net/forum?id=WholeBodyVLA

[18] CoA-VLA: Chain-of-Affordance Reasoning for Vision-Language-Action Models. ICCV 2025. https://openaccess.thecvf.com/ICCV2025/CoA-VLA
