---
title: RFM & VLA란 무엇인가
description: Robot Foundation Model과 Vision-Language-Action 모델의 개념, LLM에서 VLA로의 발전, Specialist에서 Generalist로
tags: [rfm, vla, lbm, foundation-model, llm, world-knowledge, specialist, generalist, basics]
category: essays
order: 1
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
lastEditedAt: 2026-01-21
---

Vision Language Action 모델의 출현이 "Physical AI"라는 키워드를 부상하게 만들었습니다.

Robot Foundation Model, Large Behavior Model, VLA... 비슷하면서도 다른 여러 용어들이 있습니다. 하나씩 정리해보겠습니다.

---

## VLA: LLM에서 VLA로의 진화

### LLM (Large Language Model)

우리 세상을 바꾸고 있는 LLM부터 따라가야 합니다.

GPT로 가장 유명한 LLM, Large Language Model은 말 그대로 언어 모델입니다. 글이 들어가면 글이 나오는 모델이죠. 우리는 보통 ChatGPT, 대화의 형태로 사용합니다.

### VLM (Vision Language Model)

2023년 GPT-4V를 시작으로 어느 순간 이미지도 인식하기 시작했습니다. **눈이 달렸습니다.** 이것이 VLM, Vision Language Model입니다.

이제는 Audio까지 포함해서 음성 대화가 가능합니다. 귀와 입이 생겨서 말을 듣고 말을 합니다. 그래서 멀티모달 모델(Multimodal Model)이라고 부릅니다.

### VLA (Vision-Language-Action)

**VLA는 Vision(눈으로 보고), Language(글로 명령을 듣고), Action(행동을 하는) 모델입니다. 사람처럼요.**

요즘 VLA는 LLM에 눈을 붙이고, 행동을 붙여서 만듭니다.

```
LLM → VLM → VLA
언어 → 언어 + 시각 → 언어 + 시각 + 행동
```

LLM이 똑똑한 거 이제 누구나 다 압니다. 그 똑똑한 지능을 활용해서 로봇을 제어할 수 있게 된 거죠. 과거엔 안 되던 일들을 로봇이 할 수 있겠다는 기대가 생긴 겁니다.

---

## 용어 정리: VLA, LBM, RFM

| 용어 | 풀네임 | 설명 |
|------|--------|------|
| **VLA** | Vision-Language-Action | 시각 + 언어 + 행동을 통합한 모델 |
| **LBM** | Large Behavior Model | Action을 Behavior로 표현한 용어. VLA와 본질적으로 동일 |
| **RFM** | Robot Foundation Model | LLM이 Foundation Model이 된 것처럼, 로봇을 위한 Foundation Model |

### LBM (Large Behavior Model)

VLA의 Action을 "Behavior(행동)"라고 부를 수 있기 때문에, LBM(Large Behavior Model)이라고도 부릅니다. 본질적으로 같은 개념입니다.

### RFM (Robot Foundation Model)

LLM이 너무 똑똑해지고 모달리티도 확장되어서 다양한 일들을 할 수 있게 되었습니다. 정신 상담도 해주고, 구글링도 해주고, 코딩도 해줍니다. 그래서 **Foundation Model**이라고 부릅니다.

RFM은 이걸 로봇에 그대로 붙인 겁니다. VLA를 기반으로 동작하는 로봇이 다양한 일들을 인간 대신 해줄 것이라는 기대를 투영한 용어죠.

이런 기대를 보여주듯 2025년에만 수많은 VLA들이 나왔습니다: [π0](../models/pi0), [OpenVLA](../models/openvla), [SmolVLA](../models/smolvla), [GR00T](../models/groot) 등.

---

## Classical Robotics: Specialist의 한계

VLA가 기대를 받는 것은 알겠습니다. **그런데 정말 잘 될까요? 도대체 뭘 잘 할까요?**

그럼 과거에 무엇을 못했는지부터 알아야겠죠.

### 과거의 로봇은 Specialist

과거의 로봇들은 **Specialist**입니다. 딱 하나의 일만 잘 합니다.

**예시 1: 커피 로봇**

카페에서 볼 수 있는 바리스타 로봇이 있습니다. 아주 잘 합니다. 그런데, 이 로봇은 스타벅스에 가도 커피를 만들 수 있을까요? 아니죠. 이 카페에서도 신메뉴를 더 지원하려면 어렵습니다. 로봇을 구동하는 프로그램 혹은 모델을 업데이트해야 합니다.

**예시 2: 체스 로봇**

체스 로봇이 있습니다. 카메라로 체스판을 인식하고, CNN 기반 딥러닝 모델이 들어가 있겠죠. 로봇이 체스를 잘 둡니다.

그런데, 과연 체스판 사이즈가 바뀌고 말 모양이 바뀌어도 잘 둘까요? 아니죠. **Specialist**거든요. 이 체스판에 이 체스말에서만 동작합니다.

### Specialist로는 안 되는 것들

우리 세상엔 Specialist로는 커버가 불가능한 노동이 너무나 많습니다.

**대표적 예시: 빨래 개기**

- 옷이 다 다르게 생겼습니다
- 테이블에 빨래를 탁 두면 그 형태도 매번 다릅니다
- 빨래를 개려다가 놓치면 모양이 또 다르죠

기존의 방법들로는 구현이 불가능한 너무나 어려운 태스크입니다.

**VLA로는요? 됩니다.**

수많은 Physical AI를 노리는 회사들이 빨래 개기를 데모로 보여줍니다. 왜냐고요? 이게 **VLA의 증명**이거든요. 과거에 안되던 일. 그런데 앞으로는 될 것 같은 일. 그 대표적인 예시라서 보여주는 겁니다.

### Deformable Objects

Figure AI의 물류 예시를 보면 컨베이어 벨트에 오는 다양한 오브젝트들을 처리합니다. 집어서 방향을 맞추죠.

택배에는 비닐로 포장된 물체들이 있는데, 이게 과거에 참 어려웠습니다. 적당한 힘으로 잘 집는 게 어렵습니다.

흐물흐물한 빨래나 비닐 물체를 **Deformable한 물체**라고 합니다. 대표적으로 과거에 못하던 일입니다. 안에 들어있는 물건에 따라 다양한 경우의 수를 다 잘 수행해야만 처리가 가능해요. **지능이 필요한 작업**입니다. 사람은 너무나 잘하죠.

---

## Generalist를 향해

과거의 로봇들은 **Specialist**입니다. 미래의 로봇들은 **Generalist**가 될 겁니다. 사람처럼요.

Physical AI가 뜨는 이유입니다. **현재 대체가 불가능한 사람의 노동을 상당 부분 대체할 것 같거든요.**

Generalist가 가능할 것 같다고 생각하는 낙관적인 예측이 현재 지배적입니다. 과연 그럴까요? 왜 사람들은 낙관적으로 Physical AI가 올 것이라고 생각하고 투자를 하는 것일까요?

**그건 바로 우리가 LLM의 발전 과정을 목격했기 때문입니다.**

---

## World Knowledge: 희망편

과거에 Specialist였던 것은 사실 로봇에만 국한된 이야기가 아닙니다. LLM 이전의 AI 모델들, 머신러닝이나 딥러닝 기반의 모델들에게도 똑같이 해당되는 내용입니다.

차이점은 LLM의 등장으로 언어는 이미 Generalist가 되었습니다.

- 번역, 요약, 글쓰기 → LLM
- 이미지 인식, 생성 → VLM
- **로봇 제어 → VLA** (기대 중)

### Pre-training Scaling

LLM이 똑똑한 이유 중 가장 중요한 것 하나는 바로 **Scaling**입니다. 그 중에서도 **Pre-training Scaling**이에요.

그냥 학습을 엄청나게 많이 했어요. 정말로 엄청나게 많이요.

쉽게 예시를 들면, 인터넷에 존재하는 모든 글을 학습했습니다. 모든 지식을 이미 통달했어요. 그러니까 ChatGPT한테 무엇을 물어봐도 대답을 합니다.

하나의 뇌가 법적 지식도 있고, 의학 지식도 있고, 물리 지식도 있고, 언어 지식도 있습니다. 다 봤으니까요. (물론 할루시네이션, 실수를 하긴 하죠.)

### World Knowledge

이걸 한마디로 딱 표현하면, **"World Knowledge가 있다"**라고 정리할 수 있습니다.

기존의 Specialist들은 World Knowledge가 없습니다:
- 사과는 바닥으로 떨어진다
- 한국어로 인사는 "안녕하세요"
- 물은 끓이면 증발한다
- 인간이라면 당연히 알고 있는 상식

**LLM은 상식이 있습니다. 그러니까 VLA도 상식이 있습니다.**

딱 이 카페에서만, 정해진 메뉴만 만들 수 있는 게 아니라, 다른 카페에 가도, 신메뉴가 나와도 일을 할 수 있습니다. 다양한 모양의 택배가 와도 정리할 수 있고, 다양한 디자인의 옷이 와도 정리가 가능합니다.

**그래서 사람들이 다 기대를 하는 겁니다.**

---

## 그러나...

여기까지는 희망편입니다. 정말로 이런 미래가 곧 올까요?

**현실은 그렇게 호락호락하지 않습니다.**

VLA가 성공할지 말지, 여기엔 가장 큰 문제가 하나 있습니다.

**바로 데이터입니다.**

- [왜 Scaling이 어려운가](scaling-problem) - 로봇 데이터 수집의 근본적 어려움
- [Evaluation이 어려운 이유](evaluation-problem) - VLA 성능 측정의 문제

---

## See Also

- [Scaling 문제](scaling-problem)
- [Evaluation 문제](evaluation-problem)
- [텔레오퍼레이션](teleoperation)
- [비텔레오퍼레이션 데이터](non-teleop-data)
