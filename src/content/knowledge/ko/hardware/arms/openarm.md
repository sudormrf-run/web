---
title: OpenArm
description: Enactic의 오픈소스 7-DoF 휴머노이드 암, LeRobot 공식 지원 양팔 매니퓰레이션 플랫폼
tags: [openarm, enactic, lerobot, bimanual, open-source, humanoid-arm, force-feedback, teleoperation, vla]
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

# OpenArm

## 한 줄 판단

**OpenArm은 꽃다발 제작용 본 실험 플랫폼 후보 1순위에 가깝다.** LeRobot 공식 지원, 양팔 구성, 7-DoF 리치, 낮은 BOM 비용이 잘 맞지만, 최종 성능은 꽃을 망가뜨리지 않는 엔드이펙터와 센서 구성에 달려 있다.

## Overview

**OpenArm**은 일본 Enactic이 공개한 오픈소스 7-DoF 휴머노이드 로봇 암이다. Hugging Face LeRobot의 공식 지원 로봇 목록에 포함되어 있으며, `openarm_follower`, `openarm_leader`, `bi_openarm_follower`, `bi_openarm_leader` 타입으로 단일 암과 양팔 리더-팔로워 텔레오퍼레이션을 직접 다룰 수 있다.

| 항목 | 내용 |
|------|------|
| 제조/주도 | Enactic |
| 유형 | 7-DoF 인간형 로봇 암 |
| LeRobot 지원 | 공식 문서 지원, 단일/양팔 teleoperation 및 dataset recording |
| 구동 | Damiao QDD 계열 모터, CAN/CAN-FD 통신 |
| 페이로드 | 명목 4.1kg, 피크 6.0kg/팔(엔드이펙터 무게 제외 기준) |
| 가격 | 완전한 양팔 시스템 약 $6,500 BOM 기준 |
| 오픈소스 | 하드웨어 CAD, URDF/xacro, CAN 제어, ROS 2, 텔레오퍼레이션 저장소 공개 |
| 주요 용도 | 접촉이 많은 조작, 양팔 데이터 수집, imitation learning, VLA 정책 실험 |

---

## 꽃 손질/꽃다발 작업 적합성

OpenArm은 현재 LeRobot 공식 지원 후보 중 **가장 흥미로운 구매 후보** 중 하나다. SO-101보다 훨씬 큰 리치와 페이로드를 갖고, Reachy 2나 산업용 듀얼 암보다 저렴하며, 양팔 구성이 LeRobot 명령으로 노출된다.

| 평가 항목 | 판단 |
|----------|------|
| 양팔 작업 | 적합. `bi_openarm_follower`로 양팔 리더-팔로워 구성이 문서화되어 있다. |
| 꽃/줄기 작업 리치 | 적합. 인간형 암 비율이라 테이블 위 꽃 손질, 줄기 정렬, 포장지 잡기 같은 작업 공간을 만들기 쉽다. |
| 덱스터리 | 기본 암 자체는 충분하나, 꽃잎/줄기 손상을 줄이려면 부드러운 그리퍼 또는 LEAP/Allegro/Robotiq 계열 엔드이펙터 검토가 필요하다. |
| 내구성 | 반복 데이터 수집을 염두에 두고 알루미늄/스테인리스 주요 구조를 사용한다고 설명되어 있다. |
| 가격 | 양팔 BOM 약 $6.5k는 연구용 양팔 조작 플랫폼 중 매우 공격적이다. |
| 커스터마이징 | 매우 높음. CAD, 시뮬레이션, ROS 2, CAN 제어가 공개되어 있다. |
| 리스크 | 생태계가 ALOHA/Franka보다 신생이다. 실제 구매 가능한 조립품 공급처와 리드타임 확인이 필요하다. |

**추천 포지션**: 꽃다발 제작용 1차 실험 플랫폼 후보.  
**주의 포인트**: 섬세한 집기 성능은 암보다 엔드이펙터와 센서 구성에 크게 좌우된다.

---

## LeRobot 통합

OpenArm은 LeRobot에서 단일 암과 양팔 리더-팔로워 구성이 모두 문서화되어 있다. 문서의 긴 명령어보다 중요한 점은 다음 세 가지다.

| 흐름 | 의미 |
|------|------|
| `openarm_follower` / `openarm_leader` | 단일 팔 텔레오퍼레이션으로 카메라-액션 데이터 루프 검증 |
| `bi_openarm_follower` / `bi_openarm_leader` | 꽃다발 작업에 필요한 양팔 시연 데이터 수집 |
| `lerobot-record` | Hugging Face Hub 형식 데이터셋으로 저장하고 ACT/SmolVLA/pi0 계열 실험에 연결 |

구체 명령은 버전마다 바뀔 수 있으므로 [LeRobot OpenArm 문서](https://huggingface.co/docs/lerobot/main/openarm)를 기준으로 실행한다.

---

## 하드웨어/소프트웨어 구조

| 구성 | 내용 |
|------|------|
| 자유도 | 7-DoF/팔 |
| 통신 | CAN/CAN-FD |
| 제어 | 위치 제어, 중력 보상, 텔레오퍼레이션, 양방향 힘 피드백 지향 |
| 시뮬레이션 | MuJoCo, Isaac Sim/Isaac Lab 연동 저장소 제공 |
| ROS | ROS 2 패키지 공개 |
| 하드웨어 라이선스 | OpenArm 하드웨어 저장소는 CERN-OHL-S-2.0 |
| 소프트웨어 라이선스 | 주요 코드 저장소 Apache 2.0 |

OpenArm의 핵심은 단순히 저가 암이 아니라 **VLA 데이터 수집에 맞춘 오픈 하드웨어 스택**이라는 점이다. 양팔 리더 장비까지 함께 만들 수 있으면, 꽃 손질 동작을 사람 시연으로 빠르게 수집하고 같은 LeRobot 파이프라인에서 ACT/SmolVLA/pi0 계열 정책을 실험할 수 있다.

---

## 구매/도입 체크리스트

1. 조립품 또는 DIY 키트 공급처 확인
2. CAN-FD 어댑터, 전원, E-stop, 테이블 고정 지그 확보
3. 꽃 줄기 절단 작업을 한다면 칼/가위류는 로봇 안전 셀 안에서만 테스트
4. 기본 그리퍼로 시작하되, 줄기 손상률이 높으면 소프트 패드/컴플라이언트 그리퍼/덱스터러스 핸드로 교체
5. 실험 초기에는 단일 팔 `openarm_follower`로 데이터 파이프라인을 검증한 뒤 `bi_openarm_follower`로 확장

---

## References

- [Hugging Face LeRobot - OpenArm](https://huggingface.co/docs/lerobot/main/openarm)
- [OpenArm 공식 사이트](https://openarm.dev/)
- [OpenArm GitHub](https://github.com/enactic/openarm)
- [OpenArm Hardware Docs](https://docs.openarm.dev/hardware/)
- [LeRobot Policy Deployment](https://huggingface.co/docs/lerobot/main/inference)

---

## See Also

- [하드웨어 목록](/knowledge/hardware/)
- [LeRobot Arms](lerobot-arms)
- [ALOHA](aloha)
- [Reachy 2](/knowledge/hardware/humanoids/reachy)
