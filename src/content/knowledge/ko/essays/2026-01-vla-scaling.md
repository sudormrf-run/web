---
title: VLA는 Scaling & Evaluation이 어렵다
description: Physical AI의 핵심 도전과제에 대한 에세이
tags: [essay, scaling, evaluation, opinion]
category: essays
author: 박종현 (수도리무브 대표)
date: 2026-01
related:
  - scaling-problem.md
  - evaluation-problem.md
  - teleoperation.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# VLA는 Scaling & Evaluation이 어렵다

> Home > Essays > VLA Scaling Essay

---

안녕하세요, 수도리무브 대표 박종현입니다.

현재 많은 매체에서 Physical AI라는 키워드가 관심을 받고 있습니다.
그 이유는 LLM을 확장해서 VLA가 구현 가능할 것 같고, 그렇다면 아주 거대한 노동 시장에 영향을 줄 것 같기 때문이죠.

---

## VLA가 LLM의 성공 공식을 따라가기 어려운 이유

그러나, VLA가 LLM의 성공 공식을 그대로 따라가기 어려운 점들이 있습니다.

- **Action 데이터는 인터넷에 존재하지 않아** 바로 scaling 하는 것이 불가합니다.
- **Evaluation은 실물 로봇을 구동하면서 동작을 봐야하는데**, 하드웨어 고장의 위험이나 환경 파괴 (예를 들면 접시를 깬다던가...) 위험이 너무 큽니다.
- 이 외에도 **Physical Intelligence에 대한 본질적인 이해**, 촉각 구현에 대한 어려움, dexterous 하드웨어 양산의 어려움 등 많은 문제들이 있습니다.

---

## 다양한 해결 접근법들

위와 같은 문제를 해결하기 위해서 다양한 회사와 연구 집단들은 각기 다른 접근을 시도하고 있습니다.

| 접근법 | 주체 | 설명 |
|--------|------|------|
| [시뮬레이션](../simulation-world-model.md) | NVIDIA | 물리 시뮬레이션(Omniverse)과 World Model(Cosmos)로 데이터를 생산, 증강, 평가 |
| [Teleoperation](../teleoperation.md) | Tesla, Google, Physical Intelligence, Galaxea | 직접 데이터를 수집 |
| [Non-Teleop](../non-teleop-data.md) | UMI, Generalist, Sunday Robotics | Non-Teleop 데이터로 학습 시도 |
| [커뮤니티](../community-driven.md) | HuggingFace | 오픈소스 정신으로 커뮤니티 드리븐 데이터 수집 |
| World Model | 1X | Evaluation 자동화 |
| 분산 평가 | 학계 | OXE, RoboArena 등 |
| 기타 | 다양함 | 휴먼 비디오에서 Action 추출, 에고센트릭 데이터 수집 장비 등 |

---

## 개인적 소회

지난 여름 HuggingFace의 LeRobot 해커톤을 서울에서 호스팅하면서 커뮤니티 드리븐 방식에 대한 희망과 문제점을 함께 느꼈습니다.

물리 세상이라는 거대한 문제 앞에 Scaling이라는 힌트, 그리고 이를 해결하기 위한 다양한 노력들이 혼재되어 있는 현재입니다.

저는 혼란스러운 지금, 기회가 많이 있다고 생각하고 이에 대해 다양한 분들의 시야를 공유하고 논의하고 싶습니다.

---

## See Also

- [Action Data Scaling 문제](../scaling-problem.md)
- [Evaluation의 어려움](../evaluation-problem.md)
- [해결책들](../teleoperation.md)

