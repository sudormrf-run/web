---
title: Physical AI 입문 가이드
description: Physical AI의 정의, 핵심 개념, 그리고 도전 과제를 안내하는 서론
category: physical-ai
order: 1
isFeatured: true
icon: robot

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

![GTC 2024 Jensen Huang 키노트](/images/humanoids_gtc_2024.jpg)
*GTC 2024 Jensen Huang 키노트 (2024년 3월 18일) — Physical AI의 시작을 알린 순간*

## Physical AI, 왜 갑자기 주목받는가?

2024년, NVIDIA의 Jensen Huang이 GTC에서 "Physical AI"를 선언한 이후, 이 키워드는 AI 업계의 핵심 화두가 되었습니다.

ChatGPT가 지식 노동의 세계를 바꿨듯이, 이제 AI가 물리적 세계까지 확장될 것이라는 기대가 커지고 있습니다. 로봇이 빨래를 개고, 물류를 정리하고, 커피를 만드는 미래. 많은 사람들이 그 미래가 가까워졌다고 느끼고 있습니다.

**이 지식 창고는 Physical AI를 이해하기 위한 가이드입니다.**

---

## 입문 가이드: 순서대로 읽기

Physical AI를 체계적으로 이해하고 싶다면, 아래 문서를 순서대로 읽어보세요.

### 1. [Physical AI의 정의](./essays/fundamentals/definition)
Physical AI란 무엇인가? 용어의 등장 배경과 범주 정의

### 2. [Specialist에서 Generalist로](./essays/fundamentals/specialist-to-generalist)
과거 로봇은 Specialist였습니다. Physical AI가 추구하는 것은 Generalist입니다.

### 3. [RFM & VLA란 무엇인가](./essays/fundamentals/what-is-rfm-vla)
Generalist 로봇을 구현하는 핵심 기술, VLA(Vision-Language-Action) 모델

### 4. [Action Data Scaling 문제](./essays/fundamentals/scaling-problem)
VLA가 LLM처럼 쉽게 성공할 수 없는 이유: 데이터

---

## 더 깊이 탐색하기

입문 가이드를 마친 후, 관심 있는 주제를 자유롭게 탐색해보세요.

### 인사이트 에세이
- [VLA & RFM 발전 과정](./essays/insights/vla-rfm-progress) - VLA와 RFM의 진행 중인 발전
- [Teleoperation](./essays/insights/teleoperation) - 사람이 로봇을 조종하며 데이터 수집
- [Non-Teleop 데이터](./essays/insights/non-teleop-data) - 다른 방식의 데이터 수집
- [시뮬레이션 & World Model](./essays/insights/simulation-world-model) - 가상 환경 활용
- [휴머노이드 디자인](./essays/insights/humanoid-design) - 왜 휴머노이드인가?
- [촉각 센싱](./essays/insights/tactile-sensing) - 시각만으로는 부족하다
- [Physical vs Cognitive AI](./essays/insights/physical-vs-cognitive) - 지능의 두 측면
- [커뮤니티 접근](./essays/insights/community-driven) - 오픈소스 생태계

### 모델, 기업, 하드웨어
좌측 사이드바에서 **모델**, **기업**, **하드웨어**, **인물**을 탐색하거나, **[그래프 색인](/knowledge/physical-ai/browse)**을 활용해보세요.

---

## 관련 외부 리소스

- [LeRobot - HuggingFace](https://github.com/huggingface/lerobot) - 오픈소스 로봇 학습 프레임워크
- [Open X-Embodiment](https://robotics-transformer-x.github.io/) - 크로스 로봇 데이터셋
- [NVIDIA Isaac](https://developer.nvidia.com/isaac) - 로봇 시뮬레이션 플랫폼
