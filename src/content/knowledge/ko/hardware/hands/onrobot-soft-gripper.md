---
title: OnRobot Soft Gripper
description: 꽃·식품·불규칙 물체처럼 손상되기 쉬운 대상에 적합한 산업용 소프트 그리퍼
tags: [onrobot, soft-gripper, compliant-gripper, delicate-handling, flowers, food-grade, cobot]
category: hardware
created: 2026-05-17
updated: 2026-05-17

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# OnRobot Soft Gripper

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/BYAwP7Gn4N4" title="OnRobot Soft Gripper Official Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 한 줄 판단

**꽃을 실제로 망가뜨리지 않고 잡는 첫 엔드이펙터 후보는 덱스터러스 핸드보다 OnRobot Soft Gripper 쪽이 더 현실적일 수 있다.** 인핸드 조작은 약하지만 부드러운 접촉면이 바로 장점이다.

## Overview

**OnRobot Soft Gripper**는 식품·농산물·불규칙 물체처럼 손상되기 쉬운 대상을 잡기 위한 상용 소프트 그리퍼다. 인간형 손처럼 인핸드 조작을 하지는 못하지만, 실제 꽃 작업에서는 “덱스터리”보다 **꽃잎과 줄기를 망가뜨리지 않고 안정적으로 잡는 능력**이 더 중요할 수 있다.

| 항목 | 내용 |
|------|------|
| 제조사 | OnRobot |
| 유형 | 소프트 컵/핑거 기반 협동로봇 그리퍼 |
| 공개 가격 | 견적 기반 |
| 페이로드 | 최대 2.2kg급으로 공개 |
| 그립 범위 | 대략 11-118mm 범위 제품군 |
| 센싱 | 풍부한 촉각 센서보다는 실리콘 컴플라이언스 중심 |
| 통합 | OnRobot Quick Changer 및 주요 협동로봇 생태계 |

---

## 꽃 손질/꽃다발 작업 적합성

| 평가 항목 | 판단 |
|----------|------|
| 꽃잎/줄기 손상 최소화 | 매우 좋음. 부드러운 접촉면이 핵심 장점이다. |
| 줄기 묶음 잡기 | 좋음. 단단한 병렬 그리퍼보다 손상 위험이 낮다. |
| 인핸드 조작 | 낮음. 손 안에서 꽃 방향을 세밀하게 돌리는 작업은 어렵다. |
| 도구 사용 | 제한적. 가위나 칼을 안정적으로 잡는 용도에는 Robotiq/산업용 그리퍼가 낫다. |
| VLA 데이터 수집 | 가능. 암 드라이버에서 엔드이펙터 액션을 함께 로깅하면 된다. |
| 커스터마이징 | 중간. 상용 생태계라 개조 자유도는 LEAP/오픈소스 손보다 낮다. |

**추천 포지션**: 꽃을 실제로 망가뜨리지 않고 잡는 1차 엔드이펙터 후보.  
**주의 포인트**: VLA 연구에서 손가락별 고자유도 액션을 학습하는 용도는 아니다.

---

## 도입 판단

OnRobot Soft Gripper는 OpenArm, xArm, UR, Franka 같은 로봇 암에 붙여 **줄기 묶음 잡기, 꽃 방향 유지, 포장지 고정** 같은 실용 작업부터 시작하기 좋다. 꽃다발 제작 초기 실험에서는 고가 덱스터러스 핸드보다 이런 컴플라이언트 그리퍼가 더 빠르게 성과를 낼 가능성이 있다.

---

## References

- [OnRobot Soft Gripper](https://onrobot.com/us/products/soft-gripper)
- [OnRobot Downloads](https://onrobot.com/us/downloads)

---

## See Also

- [Robotiq Adaptive Grippers](robotiq-grippers)
- [LEAP Hand](leap-hand)
- [Ability Hand](ability)
