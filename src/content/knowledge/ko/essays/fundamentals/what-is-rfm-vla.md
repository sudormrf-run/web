---
title: RFM & VLA란 무엇인가
description: Robot Foundation Model과 Vision-Language-Action 모델의 개념, LLM에서 VLA로의 발전, Specialist에서 Generalist로
tags: [rfm, vla, lbm, foundation-model, llm, world-knowledge, specialist, generalist, basics]
category: essays
order: 3
related:
  - specialist-to-generalist.md
  - scaling-problem.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-03-19
---

VLA(Vision-Language-Action, 시각-언어-행동) 모델의 출현이 "Physical AI"라는 키워드를 부상하게 만들었습니다.

RFM(Robot Foundation Model, 로봇 파운데이션 모델), LBM(Large Behavior Model, 대규모 행동 모델), VLA 등은 자주 함께 언급되지만 완전히 같은 뜻은 아닙니다. 먼저 VLA가 무엇인지, 그리고 이 용어들이 어떤 관계에 있는지 차례대로 정리해보겠습니다.

---

## VLA: LLM에서 VLA로의 진화

VLA를 이해하려면 먼저 LLM에서 VLM으로, 그리고 VLA로 이어지는 발전 과정을 살펴볼 필요가 있습니다.

### LLM (Large Language Model)

GPT로 가장 유명한 LLM(Large Language Model, 대규모 언어 모델)은 말 그대로 언어 모델입니다. 글이 들어가면 글이 나오는 모델이죠. 보통 ChatGPT와 같은 대화의 형태로 사용합니다.

### VLM (Vision Language Model)

2023년 GPT-4V를 시작으로 LLM은 이미지도 인식하기 시작했습니다. 한마디로 **눈이 달린 것**입니다. 이것이 VLM(Vision Language Model, 시각-언어 모델)입니다.

이제는 오디오(Audio)까지 포함한 음성 대화도 가능해졌습니다. 귀와 입이 생겨서 듣고 말하는 단계까지 간 셈이죠. 그래서 이런 모델들을 멀티모달 모델(Multimodal Model)이라고 부릅니다.

### VLA (Vision-Language-Action)

**VLA는 시각(Vision)으로 보고, 언어(Language)로 명령을 듣고, 행동(Action)을 수행하는 모델입니다.**

요즘의 많은 VLA는 LLM에 시각을 붙여 VLM을 만들고, 다시 여기에 행동(Action) 출력을 붙이는 방식으로 구성됩니다.

```
LLM → VLM → VLA
언어 → + 시각 → + 행동
```

HuggingFace의 Smol 시리즈가 이 발전 과정을 잘 보여줍니다:

<div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smollm2.png" alt="SmolLM2" style="width: 100%; border-radius: 8px;" />
    <p><em>1. SmolLM2 — LLM</em></p>
  </div>
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smolvlm2.png" alt="SmolVLM2" style="width: 100%; border-radius: 8px;" />
    <p><em>2. SmolVLM2 — VLM</em></p>
  </div>
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smolvla.png" alt="SmolVLA" style="width: 100%; border-radius: 8px;" />
    <p><em>3. <a href="../../models/smolvla">SmolVLA</a> — VLA</em></p>
  </div>
</div>

최근에는 촉각(Tactile)까지 추가되어, VTLA(Vision Tactile Language Action) 모델까지 나오고 있습니다.

LLM이 보여준 높은 수준의 지능을 실제 세계의 행동으로 연결할 수 있게 되면서, 과거에는 기대하기 어려웠던 로봇 능력들이 갑자기 현실적인 목표처럼 보이기 시작했습니다. 그래서 VLA의 등장은 단순한 모달리티 확장이 아니라, AI가 물리 세계와 상호작용하기 시작한 전환점으로 받아들여집니다.

---

## 용어 정리: VLA, LBM, RFM

Physical AI와 관련된 다양한 용어들이 혼용되고 있습니다. 각 용어의 의미와 관계를 정리해보겠습니다.

| 용어 | 풀네임 | 설명 |
|------|--------|------|
| **VLA** | Vision-Language-Action | 시각 + 언어 + 행동을 통합한 모델 |
| **LBM** | Large Behavior Model | Action을 Behavior로 표현한 용어. VLA와 본질적으로 동일 |
| **RFM** | Robot Foundation Model | LLM이 Foundation Model이 된 것처럼, 로봇을 위한 Foundation Model |

*표: Physical AI 관련 주요 용어 정리 — VLA, LBM, RFM의 의미와 관계*

### LBM (Large Behavior Model)

VLA의 "Action(행동)"을 "Behavior(행동)"라고 표현할 수도 있습니다. 그래서 LBM(Large Behavior Model, 대규모 행동 모델)이라는 용어도 사용됩니다. 본질적으로는 VLA와 같은 계열의 개념을 다른 관점에서 표현한 것입니다.

대표적으로 Toyota Research Institute와 Boston Dynamics가 함께 사용한 용어가 LBM입니다. 즉, 완전히 새로운 다른 종의 모델이라기보다는 VLA 계열을 기업 맥락에 맞게 부르는 사례에 가깝습니다.

### RFM (Robot Foundation Model)

LLM이 매우 똑똑해지고 모달리티도 확장되면서, 하나의 모델이 번역, 글쓰기, 검색 보조, 코딩 같은 다양한 일을 수행하게 되었습니다. 그래서 이런 모델을 **파운데이션 모델(Foundation Model, 기반 모델)**이라고 부릅니다.

RFM은 이 개념을 로봇에 그대로 적용한 것입니다. 즉, 하나의 로봇 모델이 다양한 태스크와 다양한 환경에 대응할 수 있으리라는 기대를 담은 용어입니다. 다만 범용 로봇 모델이 꼭 VLA 형태로만 구현되리라는 법은 없습니다. 월드 모델(World Model)이나 비디오 생성 모델(Video Generation Model) 기반 접근도 가능하기 때문에, RFM은 VLA보다 넓은 개념입니다.

현재는 VLA가 RFM을 구현하는 가장 유력한 수단으로 손꼽히고 있습니다. 이런 기대를 보여주듯 [π0](/knowledge/models/pi0), [OpenVLA](/knowledge/models/openvla), [SmolVLA](/knowledge/models/smolvla), [GR00T](/knowledge/models/groot) 같은 다양한 VLA 계열 모델이 빠르게 등장했습니다.

요약하면, VLA는 비교적 구체적인 모델 계열을, RFM은 로봇 AI의 더 넓은 비전을 나타내는 용어입니다. LBM은 VLA와 거의 같은 방향의 다른 표현이라고 보면 됩니다.

---

## Classical Robotics: 특수 목적 로봇의 한계

VLA가 왜 기대를 받는지 이해하려면, 먼저 과거 방식으로는 무엇이 어려웠는지부터 살펴봐야 합니다.

기존 로봇 기술의 한계를 이해해야 VLA의 가치도 선명해집니다.

### 특수 목적 로봇(Specialist)으로는 안 되는 것들

과거의 로봇들은 **특수 목적(Specialist)** 로봇입니다. 딱 하나의 일만 잘 합니다. 우리 세상엔 특수 목적 로봇으로는 커버가 불가능한 노동이 너무나 많습니다.

**대표적 예시: 빨래 개기**

빨래 개기는 왜 특수 목적 로봇으로 어려울까요?

- 옷이 다 다르게 생겼습니다
- 테이블에 빨래를 탁 두면 그 형태도 매번 다릅니다
- 빨래를 개려다가 놓치면 모양이 또 다르죠

매번 다른 상황에 적응해야 하기 때문에, 규칙 기반(rule-based)으로는 구현이 불가능한 태스크입니다.

> **반면 VLA는 이런 작업을 정면으로 겨냥합니다.**

수많은 Physical AI 기업이 빨래 개기를 데모로 보여주는 이유도 바로 여기에 있습니다. 과거에는 어려웠지만, 이제는 가능해질 것 같은 대표적인 작업이기 때문입니다. 일종의 **VLA의 증명 문제**인 셈입니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/L0uxfZMlkag?start=436" title="LeRobot - Open-source robot folding laundry with VLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*LeRobot 발표 세션 — 오픈소스 로봇과 VLA로 빨래를 개는 모습 (7:16~)*

### 변형 가능한 물체(Deformable Objects)

Figure AI의 물류 데모를 보면 컨베이어 벨트 위로 오는 다양한 물체를 집어 방향을 맞춥니다.

문제는 여기에 비닐 포장된 물체가 섞여 있다는 점입니다. 이런 물체는 모양도 일정하지 않고, 내부에 무엇이 들어 있는지에 따라 힘 조절과 접촉 방식도 달라집니다.

흐물흐물한 빨래나 비닐 물체를 **변형 가능한 물체(Deformable Object)**라고 합니다. 이런 물체를 다루려면 다양한 경우의 수에 대응해야 하고, 사실적인 시뮬레이션도 어렵습니다. 즉, 대표적인 **지능이 필요한 작업**입니다.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/lkc2y0yb89U" title="Figure AI - Logistics demo (1 hour)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Figure AI의 물류 작업 1시간 데모 — 변형 가능한 물체를 포함한 다양한 택배 처리*

특수 목적 로봇의 한계는 명확합니다. 정해진 환경, 정해진 물체, 정해진 작업에서만 동작합니다. 하지만 현실 세계는 예측 불가능한 상황으로 가득합니다. 이것이 바로 VLA와 같은 범용적인 접근법이 필요한 이유입니다.

---

## 범용 로봇(Generalist)을 향해

과거의 로봇은 **특수 목적(Specialist)** 로봇이었고, 앞으로의 로봇은 사람처럼 **범용(Generalist)** 로봇이 되리라는 기대가 큽니다.

Physical AI가 주목받는 가장 큰 이유도 여기에 있습니다. **현재는 대체하기 어려운 사람의 노동을 상당 부분 담당할 수 있을 것 같기 때문**입니다.

> 범용 로봇이 가능할 것 같다는 낙관적인 예측이 현재 지배적입니다.

왜 사람들은 이런 미래를 낙관적으로 바라볼까요? **그건 우리가 이미 LLM의 발전 과정을 목격했기 때문입니다.** ChatGPT가 언어 영역에서 보여준 범용성을, 로봇이 물리 세계에서도 보여줄 수 있으리라 기대하는 것입니다.

---

## 세계 지식(World Knowledge): 희망편

과거에 Specialist였던 것은 로봇만의 이야기가 아닙니다. LLM 이전의 AI 모델, 즉 머신러닝과 딥러닝 기반의 기존 모델들에도 똑같이 해당되던 이야기입니다.

차이점은 LLM의 등장으로 언어 영역은 이미 범용적인(Generalist) AI가 되었다는 것입니다.

- 번역, 요약, 글쓰기 → LLM
- 이미지 인식, 생성 → VLM 또는 Diffusion
- **로봇 제어 → VLA** (기대 중)

### 사전 학습 스케일링(Pre-training Scaling)

LLM이 똑똑한 이유 중 가장 중요한 것 하나는 바로 **스케일링(Scaling)**입니다. 그중에서도 **사전 학습 스케일링(Pre-training Scaling)**이 핵심입니다.

과도하게 단순화해서 말하면, "정말 엄청나게 많이 학습했다"는 것입니다.

쉽게 말해 인터넷에 존재하는 방대한 양의 텍스트를 학습했습니다. 그래서 ChatGPT에게 무엇을 물어봐도 어느 정도 대답할 수 있는 것입니다.

하나의 모델 안에 법, 의학, 물리, 언어에 대한 지식이 함께 들어 있습니다. 물론 환각(hallucination)이나 실수는 여전히 있지만, 범용성 측면에서는 분명한 전환이 있었습니다.

### 세계 지식(World Knowledge)

이걸 한마디로 요약하면, **"세계 지식(World Knowledge)이 있다"**라고 표현할 수 있습니다.

기존의 특수 목적 모델들은 세계 지식이 없습니다:

- 사과는 바닥으로 떨어진다
- 한국어로 인사는 "안녕하세요"
- 물은 끓이면 증발한다
- 인간이라면 당연히 알고 있는 상식

> **LLM은 상식이 있습니다. 그러니까 VLA도 상식이 있습니다.**

LLM이 가진 세계 지식은 VLA에도 일부 전달됩니다. 그래서 딱 이 카페에서만, 딱 이 메뉴만 만드는 시스템이 아니라, 다른 카페에 가도, 새로운 메뉴가 나와도, 어느 정도 추론하며 대응할 수 있는 방향이 열립니다. 다양한 모양의 택배나 다양한 디자인의 옷을 다루는 작업도 같은 맥락입니다.

**그래서 사람들이 VLA에 큰 기대를 거는 것입니다.** 처음 보는 상황에서도 적절히 대응할 수 있으리라는 희망이 여기서 나옵니다.

---

## 그러나...

여기까지는 희망편입니다. 정말로 이런 미래가 곧 올까요?

**현실은 그렇게 호락호락하지 않습니다.**

> VLA가 성공할지 말지, 여기엔 가장 큰 문제가 있습니다. 바로 데이터 문제입니다.

LLM은 인터넷에 있는 수조 개의 텍스트 데이터로 학습했습니다. 하지만 로봇의 행동 데이터는 어디에 있을까요? 로봇이 물건을 집고, 문을 열고, 빨래를 개는 데이터는 인터넷에 없습니다. 직접 수집해야 합니다. 이것이 VLA의 가장 큰 도전입니다.

**관련 문서:**

- [왜 스케일링이 어려운가](scaling-problem) - 로봇 데이터 수집의 근본적 어려움
- [VLM 백본의 한계](/knowledge/essays/insights/vlm-limits-world-model) - 월드 모델이 해결책이 될 수 있을까

---

## 다음 문서

VLA가 정말로 LLM처럼 성공할 수 있을까요? 가장 큰 문제는 데이터입니다.

**다음: [행동 데이터 스케일링 문제](scaling-problem)**
