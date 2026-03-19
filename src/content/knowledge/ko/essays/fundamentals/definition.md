---
title: Physical AI의 정의
description: Physical AI란 무엇인가? 용어의 등장 배경과 범주 정의
tags: [physical-ai, definition, robotics, embodied-ai, vla]
category: essays
order: 1
related:
  - specialist-to-generalist.md
  - what-is-rfm-vla.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-03-19
---

## Physical AI, 용어의 등장

2024년 3월 18일, NVIDIA CEO 젠슨 황은 GTC 키노트에서 "Physical AI"라는 용어를 전면에 내세웠습니다.

> "다음 AI의 물결은 물리 세계를 학습하는 AI가 될 것입니다... Physical AI, 즉 인식하고, 추론하고, 계획하고, 행동할 수 있는 AI입니다."
>
> ("The next wave of AI will be AI learning about the physical world... Physical AI, AI that can perceive, reason, plan and act.")
>
> — 젠슨 황, GTC 2024 ([NVIDIA Blog](https://blogs.nvidia.com/blog/2024-gtc-keynote/))

> "범용 로봇을 위한 ChatGPT 모먼트가 곧 다가올 것입니다."
>
> ("The ChatGPT moment for general robotics is just around the corner.")
>
> — 젠슨 황 ([HPC Wire](https://www.hpcwire.com/2025/03/24/jensen-huang-charts-nvidias-ai-powered-future/))

ChatGPT는 2022년 말 출시와 함께 전 세계를 뒤흔들었습니다. 젠슨 황은 그와 같은 순간이 로봇 업계에도 곧 벌어질 것이라고 예상했습니다. Physical AI는 이후 AI 업계의 핵심 화두가 되었지만, 이 용어의 정의는 아직 통일되지 않았고 여러 맥락에서 혼용되고 있습니다. 먼저 이 용어가 실제로 무엇을 가리키는지부터 차근차근 살펴보겠습니다.

---

## 다양한 정의들

Physical AI에 대한 정의는 크게 넓은 정의와 좁은 정의로 나뉩니다.

### 넓은 정의: "몸을 가진 AI"

NVIDIA와 일반 언론에서 주로 사용하는 넓은 정의입니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/AYSfcgVv9-U" title="What is Physical AI? - NVIDIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*출처: [NVIDIA Glossary - Generative Physical AI](https://www.nvidia.com/en-us/glossary/generative-physical-ai/)*

> "다음 큰 물결은 Physical AI, 즉 몸을 가진 AI입니다."
>
> ("The next big thing is Physical AI, AI with a body.")
>
> — 젠슨 황

이 관점에서 Physical AI는 **물리적 세계와 상호작용하는 모든 AI**를 포함합니다:

- 자율주행 자동차
- 드론
- 산업용 로봇
- 휴머노이드
- 디지털 트윈

NVIDIA가 GPU를 판매하는 사업자라는 점을 생각하면, 다양한 GPU 활용 영역을 Physical AI라는 키워드로 통합하려는 시도는 자연스럽습니다.

### 좁은 정의: VLA 또는 End-to-End 학습 기반 범용 로봇

Physical Intelligence, Google DeepMind, Figure AI 등 실제로 로봇 AI를 개발하는 회사들은 더 좁은 정의를 사용합니다.

> "비전-언어-행동(VLA) 모델은 물리 세계에서 '보고'(vision), '이해하고'(language), '행동할 수'(action) 있습니다."
>
> ("Vision-language-action (VLA) model... can 'see' (vision), 'understand' (language) and 'act' (action) within the physical world.")
>
> — [Google DeepMind, Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)

이 관점에서 Physical AI는 VLA(Vision-Language-Action) 모델을 기반으로 한 범용 로봇 AI를 의미합니다. VLA는 Physical AI를 실제로 구현하게 해주는 핵심 기술입니다. VLA를 통해 과거에는 어려웠던 로봇의 동작 수행이 가능해졌고, 바로 이것이 Physical AI가 주목받는 가장 큰 이유이기도 합니다. 따라서 필자는 좁은 의미의 Physical AI가 더 설득력 있다고 봅니다. 이제부터 그 이유를 설명해보겠습니다.

---

## 본 글에서의 정의

**우리는 좁은 정의를 채택하고, 이를 이해해보겠습니다.** 필자의 정의는 다음과 같습니다.

> **End-to-End VLA 모델을 기반으로, 과거 규칙 기반(rule-based, Specialist) 방식으로는 불가능했던 범용적(Generalist) 물리 작업을 수행하는 AI 시스템과 그 생태계**

이 정의는 다소 길고 어렵게 느껴질 수 있습니다. 그래서 왜 이런 표현을 택했는지, 그리고 어떤 점에서 기존 로보틱스와 경계가 갈리는지 순서대로 설명하겠습니다.

### 1. 경계점이 존재한다

LLM에 "GPT의 등장"이 있었듯이, 로봇에도 **명확한 경계점**이 있습니다.

**2023년 7월, RT-2의 등장**

> "Vision-Language-Action(VLA) 모델의 개념은 2023년 7월 Google DeepMind의 RT-2로 최초로 제시되었습니다."
> — [Wikipedia: Vision-language-action model](https://en.wikipedia.org/wiki/Vision-language-action_model)

RT-2는 웹 데이터와 로봇 데이터를 **함께 학습**하여, 로봇 동작을 **언어 토큰처럼** 취급한 대표적인 전환점입니다. 이 모델은 단순히 새로운 논문 하나가 아니라, "웹에서 얻은 지식을 로봇 제어에 연결할 수 있다"는 가능성을 보여줬습니다. 이를 통해 다음과 같은 변화가 가능해졌습니다.

- 훈련 데이터에 없는 물체/명령에 대한 **일반화 능력** 입증
- **추론 기반 명령** 수행 가능
- Chain-of-thought reasoning으로 **다단계 계획** 수립

출처: [Google DeepMind RT-2 Blog](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/), [arXiv 2307.15818](https://arxiv.org/abs/2307.15818)

### 2. 과거엔 안 됐던 것이 지금은 된다

Physical AI가 단순한 마케팅 용어가 아닌 이유는, **실제로 불가능했던 작업들이 가능해졌기 때문**입니다.

#### 대표 사례: 빨래 개기

빨래는 로봇 조작의 "성배"로 불렸습니다.

> "수건은 변형 가능한 물체로, 형태가 계속 바뀌고 예측할 수 없이 휘어집니다. 즉, 기억해 둘 수 있는 고정된 기하 구조가 없으며, 정답에 해당하는 단일한 잡는 지점도 없습니다."
> — [Knowable Magazine](https://knowablemagazine.org/content/article/technology/2025/why-robots-cant-fold-laundry)

형태가 계속 바뀌고, 예측 불가능하게 구겨지며, 정해진 기하 구조가 없는 이런 물체를 보통 **Deformable Object(변형 가능한 물체)**라고 부릅니다. 규칙 기반 로봇에게는 특히 어려운 부류입니다.

**하지만 지금은 수많은 성공 사례들이 보고되고 있습니다.**

- Physical Intelligence의 π0: 50Hz 연속 동작으로 빨래 접기 성공 ([Physical Intelligence Blog](https://www.physicalintelligence.company/blog/pi0))
- Figure의 Helix: "최초의 end-to-end 신경망 기반 자율 빨래 접기" ([Figure AI](https://www.figure.ai/news/helix-learns-to-fold-laundry))

<video width="100%" controls>
  <source src="/assets/videos/dyna/dyna-cloth.mp4" type="video/mp4">
</video>

*Dyna Robotics의 빨래 접기 로봇 시연. 2025.09 CoRL 2025에서 촬영 — 박종현*

#### Deformable Object 조작

플라스틱 포장된 물류 패키지, 유연한 케이블, 음식 재료 등도 같은 맥락입니다. 기존 규칙 기반 방식으로는 매우 어려웠던 작업들이 VLA를 통해 가능해지고 있습니다. Figure AI는 이를 보여주기 위해 1시간 동안 연속으로 비닐 택배를 처리하는 물류 데모를 공개했습니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/lkc2y0yb89U" title="Figure AI - Logistics demo (1 hour)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Figure AI의 물류 작업 1시간 연속 데모 — 비닐 포장된 택배를 포함한 다양한 Deformable 물체 처리*

이런 비닐 포장 물체는 내부에 무엇이 들어 있는지에 따라 구겨지는 방식도, 필요한 힘도, 잡아야 하는 접촉 지점도 달라집니다. 사람은 쉽게 처리하지만, 이를 규칙으로 일일이 코딩하는 것은 매우 어렵습니다. 그래서 이러한 데모는 단순한 홍보 영상이 아니라, 시대 전환의 증거에 가깝습니다.

### 3. LLM의 World Knowledge를 계승한다

VLA가 특별한 이유는 **LLM/VLM의 "세상에 대한 상식"을 물려받기 때문**입니다.

기존 규칙 기반의 로봇은 상식이 없었습니다. "컵을 집어"라는 명령을 수행하려면 "컵이 무엇인지", "집는다는 것이 무엇인지"를 모두 수동으로 프로그래밍해야 했습니다. 그래서 매장에 새로운 모양의 컵이 생기면 로봇이 동작하지 않을 수 있습니다.  
하지만 인터넷 스케일의 데이터를 학습한 VLA는 컵이 무엇인지 이미 알고 있습니다. 생전 처음 보는 컵을 보아도 컵처럼 생겼다면 이를 컵이라고 인식할 수 있고, 그에 맞는 행동을 추론할 가능성이 높습니다. 그래서 매장에 새로운 컵이 생겨도 사람처럼 대응할 수 있습니다.

---

## Physical AI의 정의를 뒷받침하는 근거들

### 주요 회사들의 접근법

주요 회사들 모두 비슷한 방식으로 접근하고 있습니다. VLA 기반의 end-to-end 학습 모델로 범용적인 로봇 파운데이션 모델을 추구합니다. 촉각의 유무, VLA 대신 월드모델을 접목시키는가, 하드웨어는 휴머노이드의 형태인가 등 디테일한 부분에서는 차이점이 있으나 큰 맥락에서 추구하는 방향은 같습니다.

- **Physical Intelligence**: π0, π0.5 (VLA + Flow Matching, 50Hz 연속 동작)
- **Google DeepMind**: RT-2 → RT-X → Gemini Robotics
- **Figure AI**: Helix (자체 VLA)
- **1X Technologies**: World Model + Redwood AI
- **Tesla (Optimus)**: end-to-end neural network, 자율 주행 FSD도 유사한 방식으로 접근

---

### Classical Robotics도 변화하고 있다

흥미로운 점은, **기존 Classical Robotics의 대표 주자들도 Physical AI 시대에 맞게 전환하고 있다**는 것입니다.

#### Boston Dynamics의 전환

Boston Dynamics는 오랫동안 **모듈 분리 방식**(인식 → 계획 → 제어)과 **Model Predictive Control(MPC)**로 유명했습니다. Atlas의 백플립, Spot의 안정적인 보행은 이 접근법의 결과물이었습니다.

하지만 최근 Toyota Research Institute(TRI)와의 협업으로 **Large Behavior Model(LBM)** 연구를 시작했습니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/HYwekersccY" title="Boston Dynamics Atlas - Large Behavior Models" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*출처: [Boston Dynamics Blog - Large Behavior Models and Atlas Find New Footing](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)*

> "아틀라스에 사용된 구체적인 아키텍처는 4억 5천만 개의 파라미터를 가진 디퓨전 트랜스포머입니다. 이 모델은 아틀라스의 50개 자유도를 제어하기 위해 초당 30회(30Hz)로 연속적인 액션 스트림을 출력합니다"
> — [IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

Boston Dynamics도 end-to-end 모델 기반으로 옮겨 가고 있습니다. 전통 로보틱스의 대표 주자조차 Physical AI 패러다임으로 이동하고 있음을 보여주는 사례입니다. 여기서 말하는 end-to-end란, 인식, 계획, 제어가 느슨하게 분리된 파이프라인이 아니라 하나의 학습 모델이 로봇의 행동을 직접 결정하는 접근을 의미합니다.

---

### Physical AI vs Classical Robotics

| 구분 | Classical Robotics | Physical AI (VLA) |
|------|-------------------|-------------------|
| **아키텍처** | 모듈 분리 (인식 → 계획 → 제어) | End-to-end 통합 |
| **학습** | Rule-based + 부분적 ML | 데이터 기반 전체 학습 |
| **일반화** | 훈련 환경에 종속 | 일반화 가능 |
| **지식** | 도메인 특화, 수동 입력 | World Knowledge 계승 (LLM/VLM) |
| **대표 사례** | Boston Dynamics Spot (2015~), 산업용 로봇 팔 | π0, OpenVLA, GR00T, Gemini Robotics (2023~) |
| **한계** | 새로운 환경/물체에 취약 | 데이터 수집 비용, 안전성 검증 |

*표: Classical Robotics와 Physical AI(VLA)의 핵심 차이점 비교*

---

### 정리: Physical AI의 경계

물리 세상과 상호작용하는 모든 AI 기반 기술을 Physical AI라고 정의할 수는 있습니다. 하지만 그렇게 넓게 잡으면 이 용어는 사실상 마케팅 문구에 가까워집니다. 딥러닝 기반 물체 인식과 이를 활용한 로봇 제어는 기존에도 있었기 때문입니다. 따라서 이 글에서는 LLM 시대 이후 새롭게 부상한 **범용적 로봇 지능**에 초점을 맞춰 정의를 좁혀 사용하겠습니다.

**포함 (Physical AI):**
- VLA 모델 (π0, OpenVLA, GR00T, Gemini Robotics 등)
- End-to-end 학습 기반 로봇 시스템
- Cross-embodiment 데이터셋 (Open X-Embodiment)
- VLA를 위한 시뮬레이션/하드웨어 생태계

**제외 (Classical Robotics):**
- Rule-based 산업용 로봇
- 모듈 분리된 전통적 자율주행 스택
- 단일 태스크 Specialist 로봇
- 사전 프로그래밍된 동작만 수행하는 시스템

**경계에 있는 것들:**
- 하이브리드 접근법 (고수준: 학습, 저수준: MPC)
- 보행, 네비게이션, 3D 인식 등 기존 기술과 최신 학습 기반 기술이 혼합된 시스템

기술은 늘 점진적으로 발전하기 때문에 현실에서는 경계가 완전히 깔끔하게 나뉘지 않습니다. 그래도 이 정도 기준을 세워두면, 지금 왜 Physical AI가 별도의 기술 흐름으로 주목받는지 훨씬 명확하게 이해할 수 있습니다.

---

## 다음 문서

Physical AI가 추구하는 "범용 로봇(Generalist)"이 왜 가능해졌는지, 과거의 "전문 로봇(Specialist)"과 무엇이 다른지 알아봅시다.

**다음: [Specialist에서 Generalist로](/knowledge/essays/fundamentals/specialist-to-generalist)**
