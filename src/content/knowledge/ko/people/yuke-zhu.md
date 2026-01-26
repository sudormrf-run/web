---
title: Yuke Zhu (주유커)
description: NVIDIA GEAR Lab 공동 리드, GR00T 프로젝트 리드, UT Austin 부교수
tags: [yuke-zhu, nvidia, gear-lab, groot, robotics, robot-learning]
category: people

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## 핵심 의의

Yuke Zhu는 **로봇 학습(Robot Learning)**과 **구현된 인공지능(Embodied AI)** 분야의 핵심 연구자다.

- **NVIDIA GEAR Lab 공동 리드**: Jim Fan과 함께 범용 구현 에이전트(Generalist Embodied Agent) 연구 이끔
- **GR00T 프로젝트 리드**: NVIDIA의 휴머노이드 로봇 파운데이션 모델 개발 주도
- **robosuite 창시자**: 로봇 학습을 위한 표준 시뮬레이션 프레임워크 개발
- **학계-산업 연결**: UT Austin 교수직과 NVIDIA 연구직 병행하며 학술 연구의 실용화 추진

---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | UT Austin 부교수 (Associate Professor, 2025-), 조교수 (2020-2025) |
| 소속 | NVIDIA Research Director & Distinguished Research Scientist |
| 팀 | GEAR Lab (Generalist Embodied Agent Research) 공동 리드 |
| 연구실 | RPL Lab (Robot Perception and Learning Lab) |
| PhD | Stanford University (2015-2019) |
| 지도교수 | Fei-Fei Li, Silvio Savarese |
| 인용수 | 34,000+ (Google Scholar) |

---

## Education

| 기간 | 학위 | 기관 | 비고 |
|------|------|------|------|
| 2015-2019 | Ph.D. Computer Science | Stanford University | 지도교수: Fei-Fei Li, Silvio Savarese |
| 2013-2015 | M.S. Computer Science | Stanford University | |
| 2011-2013 | B.S. Computer Science | Simon Fraser University | First Class with Distinction |
| 2009-2013 | B.E. Computer Science | Zhejiang University | Dual Degree Program |

---

## Career

### NVIDIA Research (2020-present)

**Director & Distinguished Research Scientist**

| Year | Work | Impact |
|------|------|--------|
| 2024 | **GEAR Lab 설립** | Jim Fan과 공동 설립, 범용 구현 에이전트 연구 |
| 2024 | **GR00T** | 휴머노이드 파운데이션 모델 발표 |
| 2025 | **GR00T N1** | 오픈 휴머노이드 VLA 모델 공개 |

### UT Austin (2020-present)

**Associate Professor, Computer Science** (2025-)
**Assistant Professor** (2020-2025)

| Year | Work | Impact |
|------|------|--------|
| 2020 | RPL Lab 설립 | Robot Perception and Learning Lab 디렉터 |
| 2022 | NSF CAREER Award | 로봇 조작 연구 지원 |
| 2023 | **MimicGen** | 소량 시연에서 대규모 데이터 생성 |
| 2024 | **RoboCasa** | 일상 환경 시뮬레이션 프레임워크 |
| 2025 | IEEE Early Career Award | 로봇 학습 분야 공헌 인정 |

### Stanford (2013-2019)

**Ph.D. Student, Stanford AI Lab**

| Year | Work | Impact |
|------|------|--------|
| 2017 | **AI2-THOR** | 3D 실내 환경 시뮬레이터 |
| 2017 | Target-driven Navigation | 목표 기반 시각 네비게이션 |
| 2019 | **Making Sense of Vision and Touch** | ICRA Best Paper Award |
| 2020 | **robosuite** | 로봇 학습 시뮬레이션 프레임워크 |

---

## Research

### 연구 분야

```
핵심 영역:
1. Robot Learning - 로봇 학습, 강화학습, 모방학습
2. Computer Vision - 시각 인식, 장면 이해
3. Embodied AI - 구현된 인공지능, 에이전트 시스템
4. Simulation - 로봇 시뮬레이션, 합성 데이터 생성
```

### 연구 철학

> "자율 로봇과 구현된 에이전트가 실제 세계를 이해하고 상호작용할 수 있도록 알고리즘과 시스템을 구축하는 것이 목표다."

### 연구 방향 변화

1. **2015-2019 (Stanford)**: Visual navigation, perception-action loop
2. **2019-2022**: Simulation frameworks, robot manipulation
3. **2022-2024**: Data generation, foundation models
4. **2024-현재**: Humanoid robotics, GR00T

---

## Key Publications

### Simulation & Benchmarks

- **robosuite** (2020) - 로봇 학습을 위한 모듈형 시뮬레이션 프레임워크
- **AI2-THOR** (2017) - 3D 실내 환경 시뮬레이터
- **RoboCasa** (2024) - 일상 환경 시뮬레이션

### Robot Learning

- **MimicGen** (CoRL 2023) - 소량 시연에서 대규모 학습 데이터 자동 생성
- **DexMimicGen** (2024) - 양손 dexterous manipulation 데이터 생성
- **Making Sense of Vision and Touch** (ICRA 2019) - Best Paper Award

### Visual Navigation

- **Target-driven Visual Navigation** (ICRA 2017) - 목표 기반 시각 네비게이션
- **Visual Semantic Planning** (ICCV 2017) - 시맨틱 플래닝

### Foundation Models

- **GR00T N1** (2025) - 휴머노이드 로봇 파운데이션 모델
- **MineDojo** (NeurIPS 2022 Outstanding Paper) - Minecraft 기반 에이전트 벤치마크

---

## GR00T Project

### 역할

Yuke Zhu는 NVIDIA의 **GR00T (Generalist Robot 00 Technology)** 프로젝트의 핵심 리드다.

```
GR00T N1 Architecture:
- Dual-system design (System 1 + System 2)
- Vision-Language Module (System 2): 환경 해석, 언어 이해
- Diffusion Transformer (System 1): 실시간 모터 액션 생성
- 다양한 휴머노이드 로봇 지원
```

### 주요 기여

1. **아키텍처 설계**: VLA(Vision-Language-Action) 모델 구조
2. **Data Pyramid**: 실제 데이터부터 합성 데이터까지 전 범위 활용
3. **오픈소스 공개**: GR00T N1 모델 공개로 연구 민주화
4. **시뮬레이션 통합**: Isaac Lab, robosuite와 연계

### GR00T N1 (2025)

- NVIDIA의 첫 오픈 휴머노이드 파운데이션 모델
- 자연어 명령 이해 및 수행
- 인간 동작 모방 학습
- 다양한 로봇 embodiment 지원

---

## GEAR Lab

### Jim Fan과의 협업

GEAR Lab은 **Jim Fan**과 **Yuke Zhu**가 공동으로 이끄는 NVIDIA Research 그룹이다.

```
GEAR Lab 연구 영역:
1. LLM for Planning - 대규모 언어 모델 기반 계획
2. Vision-Language Models - 시각-언어 모델
3. Robotic Systems - 로봇 시스템, 조작, 이동
4. Simulation Infrastructure - 시뮬레이션 인프라, 합성 데이터
```

### 역할 분담

| 연구자 | 강점 | 대표 프로젝트 |
|--------|------|--------------|
| Jim Fan | LLM, 게임 에이전트, 커뮤니케이션 | Voyager, Eureka |
| Yuke Zhu | 로봇 시스템, 시뮬레이션, manipulation | robosuite, MimicGen |

### 공동 프로젝트

- **GR00T / GR00T N1**: 휴머노이드 파운데이션 모델
- **MineDojo**: Minecraft 에이전트 벤치마크 (NeurIPS 2022 Outstanding Paper)
- **GEAR 연구 인프라**: Isaac Lab, Omniverse 통합

---

## Awards & Honors

### 주요 수상

| Year | Award | Organization |
|------|-------|--------------|
| 2025 | **IEEE RAS Early Career Award** | IEEE |
| 2022 | **NeurIPS Outstanding Paper Award** | NeurIPS (MineDojo) |
| 2022 | **NSF CAREER Award** | National Science Foundation |
| 2022 | Outstanding Learning Paper Award | ICRA |
| 2019 | **Best Conference Paper Award** | ICRA |
| 2019 | Best Cognitive Robotics Paper (Finalist) | IROS |
| 2021 | Amazon Research Award | Amazon |
| 2021 | Best Multi-Robotic Systems Paper (Finalist) | ICRA |

### 기업 연구 지원

- Amazon Research Award (2021)
- JP Morgan Faculty Award
- Sony Research Award

---

## Open Source Contributions

### robosuite

```
robosuite: 로봇 학습을 위한 모듈형 시뮬레이션 프레임워크

특징:
- MuJoCo 물리 엔진 기반
- 10개 상용 로봇 모델 지원 (GR1 휴머노이드 포함)
- 9개 그리퍼, 4개 베이스 지원
- Photo-realistic 렌더링
- Stanford SVL → UT RPL → NVIDIA GEAR 공동 유지

영향:
- 로봇 학습 연구의 표준 시뮬레이션 환경
- 수천 개 연구 프로젝트에서 활용
```

### MimicGen

```
MimicGen: 소량 시연에서 대규모 학습 데이터 자동 생성

성과:
- 200개 미만 인간 시연 → 50,000+ 자동 생성 trajectory
- 18개 태스크, 다중 시뮬레이터 지원
- 실제 로봇에서도 검증

영향:
- 데이터 수집 비용 대폭 절감
- Foundation model 학습에 필수적인 대규모 데이터 확보 가능
```

---

## Links

- [Personal Website](https://yukezhu.me/)
- [NVIDIA Profile](https://research.nvidia.com/person/yuke-zhu)
- [UT Austin Profile](https://www.cs.utexas.edu/people/faculty-researchers/yuke-zhu)
- [Google Scholar](https://scholar.google.com/citations?user=mWGyYMsAAAAJ)
- [Twitter/X](https://twitter.com/yukez)
- [RPL Lab](https://rpl.cs.utexas.edu/)
- [GEAR Lab](https://research.nvidia.com/labs/gear/)

---

## References

- [UT Austin: Yuke Zhu Earns IEEE Early Career Award](https://www.cs.utexas.edu/news/2025/yuke-zhu-earns-ieee-early-career-award-groundbreaking-contributions-ai-and-robotics)
- [UT Austin: NSF CAREER Award](https://www.cs.utexas.edu/news/2022/professors-greg-durrett-and-yuke-zhu-awarded-nsf-career-awards)
- [NVIDIA GEAR Lab](https://research.nvidia.com/labs/gear/)
- [GR00T N1 Paper](https://arxiv.org/abs/2503.14734)
- [robosuite GitHub](https://github.com/ARISE-Initiative/robosuite)
- [MimicGen](https://mimicgen.github.io/)

---

## See Also

- [Jim Fan](jim-fan) - GEAR Lab 공동 리드
- [Fei-Fei Li](fei-fei-li) - Stanford 지도교수
- [GR00T](../models/groot) - 휴머노이드 파운데이션 모델
- [NVIDIA](../companies/nvidia) - 소속 기업
