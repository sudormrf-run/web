---
title: 꽃 손질·꽃다발 제작 VLA 로봇 후보군
description: 실제 꽃 손질과 꽃다발 제작 태스크를 위한 구매 가능 로봇 후보를 LeRobot 지원, 양팔 조작, 리치, 덱스터리, 내구성, 가격, 오픈소스성 기준으로 비교한다.
category: essays
tags:
  - VLA
  - LeRobot
  - 로봇 하드웨어
  - 꽃다발
  - 매니퓰레이션
date: 2026-05-17
order: 2
thumbnail: "https://img.youtube.com/vi/fEz2Xa7tA6w/mqdefault.jpg"
related:
  - hardware
  - hardware/arms/openarm
  - hardware/mobile/lekiwi
  - hardware/arms/aloha
  - hardware/humanoids/reachy
  - hardware/hands/onrobot-soft-gripper
  - hardware/hands/robotiq-grippers
  - hardware/hands/wuji-hand
  - hardware/hands/orca-hand
  - hardware/hands/sharpa-wave
  - hardware/humanoids/sharpa-north

createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

## 결론 요약

꽃 손질과 꽃다발 제작은 단순 pick-and-place보다 어렵다. 줄기 길이 맞추기, 잎 제거, 방향 정렬, 한 손 고정과 다른 손 조작, 포장지와 끈 다루기까지 포함하므로 **양팔**, **충분한 작업 반경**, **교체 가능한 그리퍼/핸드**, **데이터 수집 파이프라인**, **커스터마이징 가능성**이 중요하다.

| 우선순위 | 후보 | 1차 판단 |
|---:|------|----------|
| 1 | [OpenArm](/knowledge/hardware/arms/openarm) | LeRobot 공식 지원 + 7-DoF 양팔 + 저가 오픈소스라는 조합이 가장 좋다. |
| 2 | [ALOHA / ALOHA 2](/knowledge/hardware/arms/aloha) | VLA/ACT 연구 재현성과 양팔 데이터 수집 생태계가 강하다. |
| 3 | [Galaxea R1 Pro / A1 dual](/knowledge/hardware/arms/galaxea-arms) | 구매 가능한 고성능 양팔/모바일 후보. 가격은 올라가지만 힘 제어와 페이로드가 좋다. |
| 4 | [Reachy 2](/knowledge/hardware/humanoids/reachy) | LeRobot 공식 지원, VR 텔레오퍼레이션, 인간형 양팔이 장점이다. |
| 5 | Dual [xArm 7](/knowledge/hardware/arms/xarm) | 비용 대비 리치/페이로드가 좋지만 양팔 VLA 스택은 직접 구성해야 한다. |
| 6 | Dual [Franka Research 3](/knowledge/hardware/arms/franka-research3) | 힘 제어와 연구 생태계는 최상급. 예산과 통합 비용이 장벽이다. |
| 7 | [Unitree G1 EDU](/knowledge/hardware/humanoids/unitree-humanoid) | LeRobot 공식 지원 후보지만 꽃 작업만 보면 보행·안전 복잡도가 과하다. |

초기 전략은 **SO-101/LeKiwi로 LeRobot record/train/inference 루프를 검증**한 뒤, 본 실험 플랫폼으로 **OpenArm, ALOHA 2, Galaxea R1 Pro, Reachy 2** 중 하나를 고르는 흐름이 합리적이다.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/fEz2Xa7tA6w" title="VLA robotics background" frameborder="0" allowfullscreen></iframe>

## 이번 보강의 기준 출처

후보군은 제조사 홍보 문구만 보고 고르지 않고, 다음 출처를 기준으로 교차 확인했다.

| 출처 | 사용 방식 |
|------|-----------|
| Hugging Face LeRobot 공식 문서 | 실제 record/train/inference 파이프라인에 얹기 쉬운 로봇을 선별 |
| Humanoid Guide / HumanoidSpecs hands directory | 최근 hands/grippers 제품군을 빠짐없이 훑는 큐레이션 소스 |
| Robot Manipulation hardware list | 연구용 조작 하드웨어 생태계의 넓은 후보 확인 |
| 제조사/연구실 공식 문서 | WUJI, ORCA, SharpaWave/North의 스펙과 통합 조건 확인 |
| 논문/아카이브 | ORCA처럼 오픈소스 재현성이 중요한 후보의 근거 확인 |

## 평가 기준

| 기준 | 왜 중요한가 |
|------|-------------|
| 구매 가능성 | 직접 모델을 만들고 실제 추론해야 하므로 비매품 데모 로봇은 제외한다. |
| LeRobot 지원 | 데이터 수집, 학습, Hugging Face Hub 공유, 정책 배포 흐름을 빠르게 잡을 수 있다. |
| 양팔 조작 | 꽃다발은 한 손으로 잡고 다른 손으로 정렬/묶기/포장하는 작업이 많다. |
| 리치/페이로드 | 테이블 위 꽃, 가위, 포장지, 꽃병, 트레이를 다룰 작업 공간이 필요하다. |
| 덱스터리 | 꽃잎·줄기 손상을 줄이려면 접촉면, 힘 제어, 핸드 교체 가능성이 중요하다. |
| 내구성 | 반복 데이터 수집에서 모터, 기어, 프레임, 케이블이 버텨야 한다. |
| 오픈소스/커스텀 | VLA inference, 카메라, 엔드이펙터, safety interlock을 직접 붙일 수 있어야 한다. |
| 가격 | 본체 외에 카메라, 컴퓨트, 그리퍼, 안전 셀, 예비 부품 비용이 붙는다. |

## LeRobot 공식 지원 후보

| 후보 | 구매/구축성 | 양팔성 | 꽃 작업 적합성 | 핵심 리스크 |
|------|-------------|--------|----------------|-------------|
| [SO-101](/knowledge/hardware/arms/lerobot-arms) | 매우 좋음. 초저가 DIY/키트 | 단일/리더-팔로워 쌍 가능 | 데이터 파이프라인 입문용 | 리치·토크·내구성이 본 작업에는 부족 |
| [Koch v1.1](/knowledge/hardware/arms/koch) | 좋음. Dynamixel 기반 DIY/키트 | 듀얼 구성 가능 | 저가 텔레오퍼레이션 실습 | 페이로드와 강성이 부족 |
| [LeKiwi](/knowledge/hardware/mobile/lekiwi) | 좋음. SO-101 + 모바일 베이스 | 기본 단일 암 | 이동 조작 파이프라인 검증 | 양팔 협응 불가 |
| [OpenArm](/knowledge/hardware/arms/openarm) | 좋음. BOM/오픈소스 공개 | 공식 양팔 타입 지원 | 본 실험 1순위 후보 | 신생 생태계, 공급/조립 리스크 |
| [Reachy 2](/knowledge/hardware/humanoids/reachy) | 견적/고가 | 양팔 + 모바일 베이스 | 인간형 꽃다발 작업에 적합 | 가격, 조달, 그리퍼 덱스터리 |
| [Unitree G1](/knowledge/hardware/humanoids/unitree-humanoid) | Basic/EDU 구매 가능 | 휴머노이드 양팔 | 휴머노이드 VLA 데모용 | EDU 개발권한, 안전, 짧은 팔 리치 |

## 본 실험 플랫폼 비교

| 후보 | 리치/페이로드 | 덱스터리 | 가격대 | 오픈소스/커스텀 | VLA 적합성 | 판단 |
|------|---------------|----------|--------|-----------------|------------|------|
| OpenArm | 7-DoF, 팔당 명목 4.1kg/피크 6kg | 엔드이펙터 선택 필요 | 양팔 BOM 약 $6.5K | 매우 높음 | LeRobot 공식 지원 | 가장 먼저 조달 가능성을 확인할 후보 |
| ALOHA 2 | ViperX 기반, 약 750mm/가벼운 페이로드 | 기본 그리퍼, 개선형 그리퍼 | 약 $20K+ | 높음 | ACT/VLA 연구 표준 | 논문 재현과 라이브 콘텐츠에 좋음 |
| Galaxea R1 Pro | 듀얼 7-DoF, 팔당 수 kg급 | G1 그리퍼/힘 제어 | R1 Pro 약 $70K | 중간-높음 | 자체 VLA/ROS 생태계 | 돈을 쓰고 시간을 아끼는 후보 |
| Reachy 2 | 듀얼 7-DoF, 팔당 3kg | 기본 그리퍼는 교체 검토 | 고가 견적 | 소프트웨어 오픈소스 | LeRobot 공식 지원 | 인간형 UX와 VR teleop이 강점 |
| Dual xArm 7 | 700mm/3.5kg | 그리퍼 선택 폭 큼 | 암 2대 약 $22K+ | SDK/ROS 좋음 | 직접 통합 필요 | 비용 대비 튼튼한 셀 구축 후보 |
| Dual Franka Research 3 | 855mm/3kg, 전 관절 토크센서 | 정밀 힘 제어 최상 | 매우 고가 | 연구 생태계 강함 | 데이터 품질 최상 | 예산이 충분할 때의 고급 후보 |
| Dual UR5e/UR10e | 850-1300mm / 5-12.5kg | 산업용 그리퍼 다양 | 중고/견적 | ROS2 강함 | 직접 통합 필요 | 내구성은 좋지만 섬세 조작은 추가 센서 필요 |

## 핸드·그리퍼 후보

| 후보 | 특징 | 추천 용도 |
|------|------|----------|
| [OnRobot Soft Gripper](/knowledge/hardware/hands/onrobot-soft-gripper) | 실리콘 기반 소프트 그리퍼 | 꽃 직접 파지, 포장지 고정 |
| [Robotiq 2F/3F](/knowledge/hardware/hands/robotiq-grippers) | 산업용 병렬/3지 그리퍼 | 줄기 묶음, 도구 잡기, 고정 |
| [LEAP Hand](/knowledge/hardware/hands/leap-hand) | 16-DoF 오픈소스 덱스터러스 핸드 | 인핸드 정렬, 연구용 덱스터리 |
| [WUJI Hand](/knowledge/hardware/hands/wuji-hand) | 20 active DoF, ROS 2/SDK, 580g급 | 줄기/도구/포장지 조작을 고자유도 손으로 실험 |
| [ORCA Hand](/knowledge/hardware/hands/orca-hand) | 17 DoF 오픈소스 핸드, Touch 라인업 | 손끝 개조와 tactile 데이터셋 연구 |
| [SharpaWave](/knowledge/hardware/hands/sharpa-wave) | 22 active DoF, 고해상도 촉각 배열 주장 | 꽃잎/줄기 접촉 분류와 force cap 연구 |
| [Allegro Hand](/knowledge/hardware/hands/allegro) | 16-DoF 상용 연구 핸드 | 고급 덱스터러스 조작 |
| [Ability Hand](/knowledge/hardware/hands/ability) | 의수 기반 터치 센싱 핸드 | 꽃잎/줄기 손상 줄이기 |

처음부터 고가 덱스터러스 핸드로 가기보다는 OpenArm/ALOHA/xArm 끝단에 **OnRobot Soft Gripper 또는 Robotiq 2F + 교체형 실리콘 패드**를 붙여 손상률을 측정하는 것이 좋다. 그 다음 인핸드 회전, 촉각 기반 force cap, 세밀한 방향 정렬이 필요하면 LEAP Hand, WUJI Hand, ORCA Hand, SharpaWave, Ability Hand, Allegro Hand로 확장한다.

## 관찰 전용 후보

| 후보 | 판단 |
|------|------|
| [Sharpa North](/knowledge/hardware/humanoids/sharpa-north) | SharpaWave 양손과 wheeled full-body 구성을 보여주는 레퍼런스 플랫폼. 현재는 구매 1순위가 아니라 SDK/가격/납기/안전 공개를 기다릴 관찰 후보로 둔다. |

## 구매 시나리오

### 예산 절약형

1. SO-101 또는 LeKiwi로 LeRobot record/train/inference 루프 검증
2. OpenArm 양팔 DIY/키트 조달
3. 기본 그리퍼에 실리콘 패드와 간단한 force/pressure sensing 추가
4. 꽃 한 송이 pick, 줄기 정렬, 간단 묶기 순서로 데이터 수집

### 연구 재현형

1. ALOHA 2 또는 Trossen ALOHA 구성 구매
2. ACT/ALOHA baseline 재현
3. OpenVLA/SmolVLA/pi0 계열로 파인튜닝
4. 꽃다발 태스크를 ALOHA-style benchmark로 설계

### 시간 절약형

1. Galaxea R1 Pro 또는 Reachy 2 견적
2. VR/isomorphic teleoperation으로 사람 시연 데이터 확보
3. LeRobot 또는 자체 ROS2 데이터 변환 파이프라인 연결
4. VLA inference를 안전 셀에서 검증

## 자료 창고 버전

영상 라이브용 긴 리서치 리포트 버전은 [자료 창고 문서](/archive/flower-manipulation-robot-candidates)에도 있다.

## References

- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [LeRobot LeKiwi](https://huggingface.co/docs/lerobot/main/en/lekiwi)
- [LeRobot OpenArm](https://huggingface.co/docs/lerobot/main/en/openarm)
- [LeRobot Reachy 2](https://huggingface.co/docs/lerobot/main/en/reachy2)
- [LeRobot Unitree G1](https://huggingface.co/docs/lerobot/main/en/unitree_g1)
- [ALOHA](https://tonyzhaozh.github.io/aloha/)
- [ALOHA 2](https://aloha-2.github.io/)
- [Galaxea R1 Pro](https://galaxea-dynamics.com/products/galaxea-r1-pro)
- [OnRobot Soft Gripper](https://onrobot.com/us/products/soft-gripper)
- [Robotiq 2F-85/2F-140 Adaptive Robot Gripper](https://robotiq.com/products/2f85-140-adaptive-robot-gripper)
- [WUJI Hand Overview](https://docs.wuji.tech/docs/en/wuji-hand/latest/overview/)
- [ETH Soft Robotics Lab - ORCA Hand](https://srl.ethz.ch/platforms/srh/orcahand.html)
- [ORCA Hand paper](https://arxiv.org/abs/2504.04259)
- [ORCA Dexterity](https://www.orcahand.com/)
- [SharpaWave](https://www.sharpa.com/pages/wave)
- [Sharpa North](https://www.sharpa.com/pages/north)
- [Humanoid Guide - Robot Hands & Grippers](https://humanoid.guide/hands/)
- [Robot Manipulation - Hardware](https://www.robot-manipulation.org/hardware)
