---
title: Action Data Scaling 문제
description: VLA가 LLM처럼 쉽게 스케일링되지 않는 이유
tags: [scaling, action-data, challenge]
category: essays
order: 4
related:
  - evaluation-problem.md
  - ../insights/teleoperation.md
  - ../insights/simulation-world-model.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-29
---

<video controls width="100%" style="border-radius: 8px; margin-bottom: 0.5rem;">
  <source src="/assets/essays/scaling-problem/action_data_example.mp4" type="video/mp4" />
</video>
*LeRobot Dataset 형식의 액션 데이터 예시*, 각 관절의 state 값들이 기록되어 있으나, 인터넷에는 이러한 데이터가 기록되어 있지 않다.

---

## 핵심 문제

LLM을 확장해서 VLA가 구현 가능할 것 같고, 그렇다면 아주 거대한 노동 시장에 영향을 줄 것 같습니다.

> 그러나 VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 점들이 있습니다:

- **Action 데이터는 인터넷에 존재하지 않아** 바로 scaling 하는 것이 불가능합니다.
- **Evaluation은 실물 로봇을 구동하면서 동작을 봐야하는데**, 하드웨어 고장의 위험이나 환경 파괴 (예를 들면 접시를 깬다던가...) 위험이 너무 큽니다.
- 이 외에도 **Physical Intelligence에 대한 본질적인 이해**, 촉각 구현에 대한 어려움, dexterous 하드웨어 양산의 어려움 등 많은 문제들이 있습니다.

이 문서에서는 Action 데이터의 부족 문제를 다룹니다, 

---

## LLM과의 차이점

| 구분         | LLM      | VLA           |
| ---------- | -------- | ------------- |
| 데이터 소스     | 인터넷 (무한) | 실제 로봇 동작 (제한) |
| 수집 비용      | 낮음       | 높음            |
| Evaluation | 자동화 가능   | 실물 로봇 구동 필요   |

---

## 다양한 해결 접근법들

위와 같은 문제를 해결하기 위해서 다양한 회사와 연구 집단들은 각기 다른 접근을 시도하고 있습니다.

| 접근법                                         | 주체                                            | 설명                                                        |
| ------------------------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| [Teleoperation](../insights/teleoperation)  | Tesla, Google, Physical Intelligence, Galaxea | 직접 데이터를 수집                                                |
| [Non-Teleop](../insights/non-teleop-data)   | UMI, Generalist, Sunday Robotics              | Non-Teleop 데이터로 학습 시도                                     |
| [시뮬레이션](../insights/simulation-world-model) | NVIDIA                                        | 물리 시뮬레이션(Omniverse)과 World Model(Cosmos)로 데이터를 생산, 증강, 평가 |
| [커뮤니티](../insights/community-driven)        | HuggingFace                                   | 오픈소스 정신으로 커뮤니티 드리븐 데이터 수집                                 |
| World Model                                 | 1X, NVIDIA                                    | Evaluation 자동화, VLA 백본 교체, 월드 모델로 합성 데이터 생성               |
| 분산 평가                                       | 학계                                            | OXE, RoboArena 등                                          |
| 기타                                          | 다양함                                           | 휴먼 비디오에서 Action 추출, 에고센트릭 데이터 수집 장비 등                     |

---





---

## 다음 문서

데이터 수집만큼이나 어려운 문제가 있습니다. 바로 평가(Evaluation)입니다.

**다음: [Evaluation의 어려움](evaluation-problem)**
