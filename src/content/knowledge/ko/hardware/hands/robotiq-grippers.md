---
title: Robotiq Adaptive Grippers
description: 2F-85/2F-140/3-Finger Adaptive Gripper를 중심으로 한 협동로봇용 산업용 그리퍼
tags: [robotiq, gripper, 2f-85, 2f-140, 3-finger, adaptive-gripper, ur, cobot, flowers]
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

# Robotiq Adaptive Grippers

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/LQukPCgaeFg" title="Robotiq Adaptive Grippers Official Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 한 줄 판단

**Robotiq는 꽃잎을 직접 다루는 손이라기보다 줄기 묶음, 도구, 지그를 안정적으로 잡는 작업용 그리퍼다.** 소프트 팁과 힘 제한을 붙이면 꽃 작업 셀의 튼튼한 보조 손이 된다.

## Overview

**Robotiq Adaptive Grippers**는 협동로봇 셀에서 가장 널리 쓰이는 상용 그리퍼 계열이다. 꽃 작업에서 인간형 손의 덱스터리를 제공하지는 않지만, 도구 잡기·줄기 묶음 고정·산업용 암과의 안정적 통합에는 강점이 있다.

| 모델 | 특징 |
|------|------|
| 2F-85 | 85mm 스트로크, 비교적 작은 물체용 병렬/적응형 2지 그리퍼 |
| 2F-140 | 140mm 스트로크, 더 큰 물체와 묶음 잡기에 적합 |
| 3-Finger Adaptive Gripper | 3지 적응형 그리퍼, 다양한 파지 모드 지원 |

---

## 꽃 손질/꽃다발 작업 적합성

| 평가 항목 | 판단 |
|----------|------|
| 줄기 묶음 고정 | 좋음. 2F-140이나 3-Finger가 유리하다. |
| 도구 잡기 | 좋음. 가위/절단기/지그 고정에 산업용 내구성이 유리하다. |
| 꽃잎 손상 최소화 | 기본 상태는 보통. 저힘 설정과 소프트 패드가 필요하다. |
| 덱스터러스 조작 | 낮음. 꽃 방향 미세 조정은 별도 손/보조 지그가 필요할 수 있다. |
| 통합 | 매우 좋음. UR, xArm, Franka, ROS/Modbus 생태계 자료가 많다. |
| 가격 | 견적/리셀러 기반. 본체 외 마운트와 컨트롤러 비용 확인 필요. |

**추천 포지션**: 꽃 작업 셀의 “튼튼한 작업 그리퍼”.  
**주의 포인트**: 기본 파지력은 꽃에 과할 수 있으므로 반드시 소프트 팁과 힘 제한을 함께 설계한다.

---

## 도입 팁

1. 꽃 한 송이보다 **줄기 묶음, 포장지, 도구, 지그**를 잡는 역할로 시작한다.
2. 실리콘/폼 패드, V-groove 패드, 교체형 fingertip을 직접 설계한다.
3. VLA 액션 공간에서는 그리퍼 폭/속도/힘을 단순한 저차원 액션으로 기록한다.
4. 꽃잎 접촉이 많은 작업은 OnRobot Soft Gripper나 커스텀 소프트 그리퍼와 비교 실험한다.

---

## References

- [Robotiq 2F-85/2F-140 Adaptive Robot Gripper](https://robotiq.com/products/2f85-140-adaptive-robot-gripper)
- [Robotiq 3-Finger Adaptive Gripper product sheet](https://robotiq.com/hubfs/Product-sheets/3-Finger-Adaptive-Robot-Gripper/Product_sheet-3F-EN.pdf)
- [ROS-Industrial Robotiq](https://github.com/ros-industrial/robotiq)

---

## See Also

- [OnRobot Soft Gripper](onrobot-soft-gripper)
- [LEAP Hand](leap-hand)
- [Allegro Hand](allegro)
