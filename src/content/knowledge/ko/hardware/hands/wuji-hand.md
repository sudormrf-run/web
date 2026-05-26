---
title: WUJI Hand
description: 20 active DoF 직접구동형 덱스터러스 핸드 - ROS 2/SDK 통합과 높은 가반비가 강점인 차세대 조작 연구 후보
tags: [wuji, hand, dexterous, 20-dof, ros2, tactile, manipulation, flower]
category: hardware
subcategory: hands
thumbnail: https://docs.wuji.tech/_next/static/media/structure-schematic-2025-11.50f32115.png

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# WUJI Hand

## 한 줄 판단

**WUJI Hand는 꽃 작업 후보군에서 "고자유도 손동작을 실제 로봇 암에 붙여 빠르게 실험할 수 있는 핸드"에 가깝다.** 무게가 가볍고 ROS 2/SDK가 공개되어 있어 연구 통합성은 좋지만, 꽃잎 접촉 같은 미세 힘 제어는 실제 센서 품질과 컨트롤 루프를 확인해야 한다.

## 핵심 수치

| 항목 | 값 | 해석 |
|------|-----|------|
| 자유도 | 20 active DoF | 손가락별 독립 제어 폭이 큼 |
| 무게 | 580 ± 10 g, 케이블 제외 | 소형 6~7축 암에도 붙일 수 있는 편 |
| 손끝 힘 | 15 N | 꽃 줄기/도구 파지에는 충분, 꽃잎 직접 접촉은 과함 |
| 정적 파지 하중 | 10 kg | 물체를 놓치지 않는 여유가 큼 |
| 내구성 | 무부하 파지 300,000회 이상 | 반복 데이터 수집용으로 확인할 가치 있음 |
| 인터페이스 | USB 2.0, SDK, ROS 2 | LeRobot/ROS 파이프라인 연결 후보 |
| 상태 피드백 | 1000 Hz joint state, Hall sensor, torque/position/current/temp | 학습 데이터 로깅에 유리 |

## 꽃 작업에서의 의미

WUJI Hand는 꽃을 바로 "사람처럼" 다루기보다, 줄기 잡기, 리본 위치 조정, 포장지 접기, 도구 잡기처럼 **손가락 자세가 중요한 작업**에 먼저 맞다. 손끝 힘이 높으므로 꽃잎이나 얇은 잎을 직접 누르는 작업에는 소프트 패드, 힘 제한, 접촉 감지 튜닝이 필요하다.

추천 실험 순서는 다음이 현실적이다.

1. 줄기 묶음 잡기와 놓기
2. 포장지 모서리 집기
3. 테이프/리본 끝단 잡기
4. 꽃잎 접촉 금지 영역을 둔 시각-촉각 정책

## 장점

- 20 active DoF라 단순 2-finger gripper보다 파지 자세의 표현력이 크다.
- 580 g급이라 OpenArm, xArm, Galaxea A1 같은 연구용 암과 조합을 검토할 수 있다.
- ROS 2와 SDK 문서가 있어 폐쇄형 상용 핸드보다 통합 검증을 시작하기 쉽다.
- 1000 Hz 상태 피드백은 imitation learning 데이터셋 수집에 유리하다.

## 리스크

- 꽃잎 직접 조작에는 손끝 힘이 세다. 기계적 compliance나 소프트 커버가 필요할 수 있다.
- 공개 문서의 수치는 제조사 기준이므로 실제 반복 조작, 백래시, 열, 소음은 별도 검증해야 한다.
- 촉각 기반 정책을 만들려면 실제 taxel/힘 센서 품질과 캘리브레이션 도구를 확인해야 한다.

## 구매/통합 체크리스트

- ROS 2 패키지가 실제 목표 OS와 배포판에서 동작하는가
- URDF, joint limits, calibration 파일을 제공하는가
- 엔드이펙터 마운트와 전원/통신 케이블이 목표 암과 간섭하지 않는가
- 손끝 커버를 교체하거나 소프트 패드를 붙일 수 있는가
- 장시간 데이터 수집 시 온도와 영점 drift가 허용 범위인가

## 참고

- [WUJI Hand Overview](https://docs.wuji.tech/docs/en/wuji-hand/latest/overview/)
- [WUJI Hand ROS 2 Configuration](https://docs.wuji.tech/docs/en/wuji-hand/latest/ros2-user-guide/configuration/)
- [WUJI Hand SDK Tutorial](https://docs.wuji.tech/docs/en/wuji-hand/latest/sdk-user-guide/tutorial/)
