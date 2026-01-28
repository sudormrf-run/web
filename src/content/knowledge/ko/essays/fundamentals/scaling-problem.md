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

## 핵심 문제

현재 많은 매체에서 Physical AI라는 키워드가 관심을 받고 있습니다. LLM을 확장해서 VLA가 구현 가능할 것 같고, 그렇다면 아주 거대한 노동 시장에 영향을 줄 것 같기 때문이죠.

그러나 VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 점들이 있습니다:

- **Action 데이터는 인터넷에 존재하지 않아** 바로 scaling 하는 것이 불가능합니다.
- **Evaluation은 실물 로봇을 구동하면서 동작을 봐야하는데**, 하드웨어 고장의 위험이나 환경 파괴 (예를 들면 접시를 깬다던가...) 위험이 너무 큽니다.
- 이 외에도 **Physical Intelligence에 대한 본질적인 이해**, 촉각 구현에 대한 어려움, dexterous 하드웨어 양산의 어려움 등 많은 문제들이 있습니다.

---

## LLM과의 차이점

| 구분 | LLM | VLA |
|------|-----|-----|
| 데이터 소스 | 인터넷 (무한) | 실제 로봇 동작 (제한) |
| 수집 비용 | 낮음 | 높음 |
| 레이블링 | 자동 (다음 토큰) | 수동 또는 복잡한 과정 |
| Evaluation | 자동화 가능 | 실물 로봇 구동 필요 |

---

## 다양한 해결 접근법들

위와 같은 문제를 해결하기 위해서 다양한 회사와 연구 집단들은 각기 다른 접근을 시도하고 있습니다.

| 접근법 | 주체 | 설명 |
|--------|------|------|
| [시뮬레이션](../insights/simulation-world-model) | NVIDIA | 물리 시뮬레이션(Omniverse)과 World Model(Cosmos)로 데이터를 생산, 증강, 평가 |
| [Teleoperation](../insights/teleoperation) | Tesla, Google, Physical Intelligence, Galaxea | 직접 데이터를 수집 |
| [Non-Teleop](../insights/non-teleop-data) | UMI, Generalist, Sunday Robotics | Non-Teleop 데이터로 학습 시도 |
| [커뮤니티](../insights/community-driven) | HuggingFace | 오픈소스 정신으로 커뮤니티 드리븐 데이터 수집 |
| World Model | 1X | Evaluation 자동화 |
| 분산 평가 | 학계 | OXE, RoboArena 등 |
| 기타 | 다양함 | 휴먼 비디오에서 Action 추출, 에고센트릭 데이터 수집 장비 등 |

---

## 개인적 소회

지난 여름 HuggingFace의 LeRobot 해커톤을 서울에서 호스팅하면서 커뮤니티 드리븐 방식에 대한 희망과 문제점을 함께 느꼈습니다.

물리 세상이라는 거대한 문제 앞에 Scaling이라는 힌트, 그리고 이를 해결하기 위한 다양한 노력들이 혼재되어 있는 현재입니다.

혼란스러운 지금, 기회가 많이 있다고 생각하고 이에 대해 다양한 분들의 시야를 공유하고 논의하고 싶습니다.

---

## 다음 문서

데이터 수집만큼이나 어려운 문제가 있습니다. 바로 평가(Evaluation)입니다.

**다음: [Evaluation의 어려움](evaluation-problem)**
