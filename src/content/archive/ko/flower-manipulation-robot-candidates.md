---
title: "꽃 손질·꽃다발 제작 VLA 로봇 후보군 조사"
description: |
  1. 직접 만든 VLA를 실제 꽃 손질과 꽃다발 제작 태스크에 올릴 수 있도록, 구매 가능성·LeRobot 지원·양팔 조작·리치·덱스터리·가격·오픈소스성을 기준으로 후보를 정리한다.
  2. LeRobot 공식 지원 후보는 SO-101, Koch, LeKiwi, OpenArm, Reachy 2, Unitree G1을 우선 검토하고, ALOHA/Trossen·Galaxea·xArm·Franka·UR·Kinova는 조건 충족 가능 후보로 분리한다.
  3. 암/모바일 매니퓰레이터와 별도로 핸드·그리퍼 후보를 비교해, 줄기 손상 없이 잡기·정렬·포장·절단 보조를 수행할 엔드이펙터 조합을 고른다.
date: 2026-05-17
source: "Sudoremove Research"
thumbnail: "https://img.youtube.com/vi/fEz2Xa7tA6w/mqdefault.jpg"
tags:
  - VLA
  - LeRobot
  - 로봇 하드웨어
  - 꽃다발
  - 매니퓰레이션
  - 양팔 로봇
  - 덱스터러스 핸드
isFeatured: true
---

## 결론 요약

꽃 손질과 꽃다발 제작은 단순 pick-and-place가 아니다. 줄기 길이 맞추기, 잎 제거, 꽃 방향 정렬, 한 손으로 고정하고 다른 손으로 포장지·끈·도구를 다루는 협응이 필요하다. 따라서 최종 구매 후보는 **양팔**, **충분한 작업 반경**, **교체 가능한 그리퍼/핸드**, **데이터 수집 파이프라인**, **커스터마이징 가능성**을 중심으로 봐야 한다.

| 우선순위 | 후보 | 1차 판단 |
|---:|------|----------|
| 1 | [OpenArm](/knowledge/hardware/arms/openarm) | LeRobot 공식 지원 + 7-DoF 양팔 + 저가 오픈소스라는 조합이 가장 좋아 보인다. |
| 2 | [ALOHA / ALOHA 2](/knowledge/hardware/arms/aloha) | VLA/ACT 연구 재현성과 양팔 데이터 수집 생태계가 가장 강하다. 최신 LeRobot 공식 로봇 페이지는 아니므로 통합 범위를 확인해야 한다. |
| 3 | [Galaxea R1 Pro / A1 dual](/knowledge/hardware/arms/galaxea-arms) | 구매 가능한 고성능 양팔/모바일 후보. 가격은 올라가지만 힘 제어와 페이로드가 좋다. |
| 4 | [Reachy 2](/knowledge/hardware/humanoids/reachy) | LeRobot 공식 지원, VR 텔레오퍼레이션, 인간형 양팔. 예산이 허용되면 강력한 연구 장비다. |
| 5 | Dual [xArm 7](/knowledge/hardware/arms/xarm) | 비용 대비 리치/페이로드가 좋다. 다만 양팔 VLA/텔레오퍼레이션 스택은 직접 구성해야 한다. |
| 6 | Dual [Franka Research 3](/knowledge/hardware/arms/franka-research3) | 힘 제어와 연구 생태계는 최상급. 예산과 통합 비용이 가장 큰 장벽이다. |
| 7 | [Unitree G1 EDU](/knowledge/hardware/humanoids/unitree-humanoid) | LeRobot 공식 지원 후보. 휴머노이드 실험에는 흥미롭지만 꽃 작업만 보면 보행·안전 복잡도가 과하다. |
| 8 | Dual [Kinova Gen3](/knowledge/hardware/arms/kinova), Dual [UR](/knowledge/hardware/arms/ur-series) | 견고한 로봇 암 후보. VLA 연구 표준성은 ALOHA/Franka보다 약하다. |

핸드·그리퍼는 별도 축으로 봐야 한다. 최근 보강 기준으로는 **WUJI Hand, ORCA Hand, SharpaWave**를 추가 추적 후보에 넣고, **Sharpa North**는 SharpaWave 양손과 전신 조작 방향을 보여주는 관찰용 레퍼런스로 둔다.

초기 전략은 두 단계가 합리적이다.

1. **저가 파일럿**: [LeRobot Arms SO-101](/knowledge/hardware/arms/lerobot-arms) 또는 [LeKiwi](/knowledge/hardware/mobile/lekiwi)로 데이터 수집/학습/추론 루프를 먼저 검증한다.
2. **본 실험 플랫폼**: OpenArm, ALOHA 2, Galaxea R1 Pro, Reachy 2 중 예산과 조립 리스크에 맞는 플랫폼을 고른다.

---

## 조사 기준으로 삼은 큐레이션/출처

후보군은 한두 개 홍보 페이지에서 고른 것이 아니라 다음 소스를 기준으로 교차 확인했다.

| 출처 | 왜 봤는가 |
|------|-----------|
| Hugging Face LeRobot 공식 문서 | 실제 데이터 수집/학습/추론 루프에 올리기 쉬운 로봇 확인 |
| Humanoid Guide / HumanoidSpecs hands directory | 최근 hands/grippers 제품군을 빠짐없이 훑기 위한 큐레이션 |
| Robot Manipulation hardware list | 연구용 조작 하드웨어의 넓은 후보 확인 |
| 제조사/연구실 공식 문서 | WUJI, ORCA, SharpaWave/North의 스펙과 통합 조건 확인 |
| 논문/프리프린트 | ORCA처럼 오픈소스 재현성이 중요한 후보의 근거 확인 |

---

## 평가 기준

| 기준 | 왜 중요한가 |
|------|-------------|
| 구매 가능성 | 직접 모델을 만들고 실제 추론해야 하므로 비매품 데모 로봇은 제외한다. |
| LeRobot 지원 | 데이터 수집, 학습, Hugging Face Hub 공유, 정책 배포 흐름을 빠르게 잡기 위해 우선순위를 높인다. |
| 양팔 조작 | 꽃다발은 한 손으로 잡고 다른 손으로 정렬/묶기/포장하는 작업이 많다. |
| 리치/페이로드 | 테이블 위 꽃, 가위, 포장지, 꽃병, 트레이를 다룰 충분한 작업 공간이 필요하다. |
| 덱스터리 | 꽃잎·줄기 손상을 줄이려면 그리퍼 접촉면, 힘 제어, 핸드 교체 가능성이 중요하다. |
| 내구성 | 반복 데이터 수집에서 모터/기어/프레임/케이블이 버텨야 한다. |
| 오픈소스/커스텀 | VLA inference, 카메라, 엔드이펙터, safety interlock을 직접 붙일 수 있어야 한다. |
| 가격 | 로봇 본체 외에 카메라, 컴퓨트, 그리퍼, 안전 셀, 예비 부품 비용이 붙는다. |

---

## LeRobot 공식 지원 후보

| 후보 | 구매/구축성 | 양팔성 | 꽃 작업 적합성 | 핵심 리스크 |
|------|-------------|--------|----------------|-------------|
| [SO-101](/knowledge/hardware/arms/lerobot-arms) | 매우 좋음. 초저가 DIY/키트 | 단일/리더-팔로워 쌍 가능 | 데이터 파이프라인 입문용 | 리치·토크·내구성이 본 작업에는 부족 |
| [Koch v1.1](/knowledge/hardware/arms/koch) | 좋음. Dynamixel 기반 DIY/키트 | 듀얼 구성 가능 | 저가 텔레오퍼레이션 실습 | 꽃다발 실작업에는 페이로드와 강성이 부족 |
| [LeKiwi](/knowledge/hardware/mobile/lekiwi) | 좋음. SO-101 + 모바일 베이스 | 기본 단일 암 | 이동 조작 파이프라인 검증 | 양팔 협응 불가 |
| [OpenArm](/knowledge/hardware/arms/openarm) | 좋음. BOM/오픈소스 공개 | 공식 양팔 타입 지원 | 본 실험 1순위 후보 | 신생 생태계, 공급/조립 리스크 |
| [Reachy 2](/knowledge/hardware/humanoids/reachy) | 견적/고가 | 양팔 + 모바일 베이스 | 인간형 꽃다발 작업에 적합 | 가격, 조달, 그리퍼 덱스터리 |
| [Unitree G1](/knowledge/hardware/humanoids/unitree-humanoid) | Basic/EDU 구매 가능 | 휴머노이드 양팔 | 휴머노이드 VLA 데모용 | EDU 개발권한, 안전, 짧은 팔 리치 |
| OMX | ROBOTIS 기반 구매 가능 | 단일/리더-팔로워 | 교육/테스트용 | 본 사이트 문서 미작성. 꽃 작업 메인 후보로는 약함 |

LeRobot 기준만 보면 **SO-101/Koch/LeKiwi는 저가 검증**, **OpenArm/Reachy 2/Unitree G1은 본 실험 가능 후보**로 나뉜다. 실제 꽃다발 제작은 리치와 양팔 협응이 중요하므로 OpenArm과 Reachy 2가 가장 직접적이다.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/fEz2Xa7tA6w" title="VLA robotics background" frameborder="0" allowfullscreen></iframe>

---

## 본 실험 플랫폼 비교

| 후보 | 리치/페이로드 | 덱스터리 | 가격대 | 오픈소스/커스텀 | VLA 적합성 | 판단 |
|------|---------------|----------|--------|-----------------|------------|------|
| OpenArm | 7-DoF, 팔당 명목 4.1kg/피크 6kg | 엔드이펙터 선택 필요 | 양팔 BOM 약 $6.5K | 매우 높음 | LeRobot 공식 지원 | 가장 먼저 실물 조달 가능성을 확인할 후보 |
| ALOHA 2 | ViperX 기반, 약 750mm/가벼운 페이로드 | 기본 그리퍼, 개선형 그리퍼 | 약 $20K+ | 높음 | ACT/VLA 연구 표준 | 논문 재현과 라이브 콘텐츠에 좋음 |
| Galaxea R1 Pro | 듀얼 7-DoF, 제품 페이지 기준 팔당 수 kg급 | G1 그리퍼/힘 제어 | R1 Pro 약 $70K | 중간~높음 | 자체 VLA/ROS 생태계 | 돈을 쓰고 시간을 아끼는 후보 |
| Reachy 2 | 듀얼 7-DoF, 팔당 3kg | 기본 그리퍼는 교체 검토 | 고가 견적 | 소프트웨어 오픈소스 | LeRobot 공식 지원 | 인간형 UX와 VR teleop이 강점 |
| Dual xArm 7 | 700mm/3.5kg | 그리퍼 선택 폭 큼 | 암 2대 약 $22K+ | SDK/ROS 좋음 | 직접 통합 필요 | 비용 대비 튼튼한 셀 구축 후보 |
| Dual Franka Research 3 | 855mm/3kg, 전 관절 토크센서 | 정밀 힘 제어 최상 | 매우 고가 | 연구 생태계 강함 | 데이터 품질 최상 | 예산이 충분할 때의 고급 후보 |
| Unitree G1 EDU | 팔 리치 제한, 팔당 수 kg급 | 옵션 손 구성 | $13.5K Basic, EDU 별도 | EDU 필요 | LeRobot 공식 지원 | 휴머노이드 쇼케이스용 |
| [Sharpa North](/knowledge/hardware/humanoids/sharpa-north) | Wheeled full-body, 상세 수치 확인 필요 | SharpaWave 양손 | 미공개/견적 필요 | SDK 확인 필요 | CraftNet/VTLA 방향 | 현재는 구매 후보보다 관찰용 레퍼런스 |
| Dual UR5e/UR10e | 850-1300mm / 5-12.5kg | 산업용 그리퍼 다양 | 중고/견적 | ROS2 강함 | 직접 통합 필요 | 내구성은 좋지만 섬세 조작은 추가 센서 필요 |

### 꽃 작업별 요구사항 매핑

| 작업 | 필요한 능력 | 유리한 후보 |
|------|-------------|-------------|
| 꽃 한 송이 집기/놓기 | 비전 기반 pick, 약한 그립 | SO-101, LeKiwi, OpenArm |
| 줄기 정렬 | 양팔 협응, 긴 작업 반경 | OpenArm, ALOHA 2, Reachy 2 |
| 잎 제거/손질 | 힘 제어, 도구 사용, 안전 셀 | Galaxea, Franka, xArm/UR + 힘센서 |
| 줄기 절단 | 도구 고정과 절단 안전 | Dual xArm, Dual UR, Galaxea, Franka |
| 꽃다발 묶기 | 한 손 고정 + 다른 손 조작 | OpenArm, ALOHA 2, Reachy 2 |
| 포장지 감싸기 | 큰 물체 조작, 양팔 리치 | Reachy 2, OpenArm, Dual UR/xArm |

---

## 핸드·그리퍼 후보

손은 암과 분리해서 보는 것이 맞다. 꽃 작업에서는 “인간형 손”보다 “꽃을 망가뜨리지 않는 접촉면과 힘 제어”가 더 중요할 수 있다.

| 후보 | 특징 | 장점 | 리스크 | 추천 용도 |
|------|------|------|--------|----------|
| [LEAP Hand](/knowledge/hardware/hands/leap-hand) | 16-DoF 오픈소스 덱스터러스 핸드 | 저가, 커스텀 쉬움, 연구 친화 | 직접 조립/내구성 관리 필요 | 인핸드 정렬, 연구용 덱스터리 |
| [Allegro Hand](/knowledge/hardware/hands/allegro) | 16-DoF 상용 연구 핸드 | 검증된 연구 표준 | 가격, 촉각 옵션 비용 | 고급 덱스터러스 조작 |
| [Inspire Hand](/knowledge/hardware/hands/inspire) | 5지/6-DoF 계열, 휴머노이드 통합 많음 | Unitree 등과 조합 사례 | 모델별 제어/센서 차이 | 휴머노이드 손 대체 후보 |
| [Ability Hand](/knowledge/hardware/hands/ability) | 의수 기반 터치 센싱 핸드 | 부드러운 접촉, 인간형 형태 | 연구 암 마운트와 제어 통합 확인 필요 | 꽃잎/줄기 손상 줄이기 |
| [WUJI Hand](/knowledge/hardware/hands/wuji-hand) | 20 active DoF, ROS 2/SDK, 580g급 | 고자유도 손동작과 상태 피드백 | 꽃잎 직접 접촉에는 힘 제한/소프트 패드 필요 | 줄기/도구/포장지 조작 |
| [ORCA Hand](/knowledge/hardware/hands/orca-hand) | 17 DoF 오픈소스 핸드, Touch 라인업 | 개조/재현/촉각 연구에 유리 | 조립 품질, 납기, SDK 확인 필요 | 손끝 개조와 tactile 데이터셋 |
| [SharpaWave](/knowledge/hardware/hands/sharpa-wave) | 22 active DoF, 고해상도 촉각 배열 주장 | 촉각 기반 섬세 조작 후보 | 가격/납기/raw tactile 접근성 미확인 | 꽃잎/줄기 접촉 분류 |
| [OnRobot Soft Gripper](/knowledge/hardware/hands/onrobot-soft-gripper) | 실리콘 기반 소프트 그리퍼 | 꽃/식품처럼 손상 쉬운 물체에 강함 | 인핸드 덱스터리는 낮음 | 꽃 직접 파지, 포장지 고정 |
| [Robotiq 2F/3F](/knowledge/hardware/hands/robotiq-grippers) | 산업용 병렬/3지 그리퍼 | 내구성, UR/xArm/Franka 통합 쉬움 | 인간형 덱스터리는 낮고 소프트 팁 필요 | 줄기 묶음, 도구 잡기, 고정 |
| Soft/compliant custom gripper | 실리콘 패드, 폼, underactuated finger | 꽃 손상 최소화 | 직접 제작/튜닝 필요 | 실제 꽃 작업 최우선 엔드이펙터 |
| [Shadow Hand](/knowledge/hardware/hands/shadow-hand) | 고자유도 연구 표준 | 최고급 덱스터리 | 매우 고가, 통합 난도 | 예산 무제한 연구 |

**실전 추천**: 처음부터 고가 덱스터러스 핸드로 가지 말고, OpenArm/ALOHA/xArm 끝단에 **OnRobot Soft Gripper 또는 Robotiq 2F + 교체형 실리콘 패드**를 붙여 손상률을 측정한다. 그 다음 인핸드 회전, 촉각 기반 force cap, 세밀한 방향 정렬이 필요하면 LEAP Hand, WUJI Hand, ORCA Hand, SharpaWave, Ability Hand, Allegro Hand로 확장한다.

---

## 구매 전 확인 질문

| 질문 | 확인 이유 |
|------|-----------|
| assembled kit이 있는가, 아니면 전부 DIY인가 | 일정과 실패 리스크가 크게 달라진다. |
| 한국 배송/관세/부품 수급이 가능한가 | 반복 실험 중 모터와 케이블 예비품이 필요하다. |
| 카메라와 wrist camera를 몇 대 붙일 수 있는가 | VLA 데이터 품질에 직접 영향이 있다. |
| 손목/엔드이펙터 마운트 도면이 공개되어 있는가 | 꽃 작업용 커스텀 그리퍼 제작에 필요하다. |
| E-stop, 토크 제한, 소프트 리밋이 있는가 | 가위/칼/절단기 테스트에 필수다. |
| LeRobot에서 inference 명령까지 검증되어 있는가 | 데이터 수집만 되고 정책 배포가 어렵다면 목적에 맞지 않는다. |

---

## 추천 구매 시나리오

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

### 고품질 데이터형

1. Dual Franka Research 3 또는 Dual xArm/UR 셀 구성
2. 산업용 그리퍼 + 소프트 패드 + wrist camera + F/T sensing 장착
3. 줄기 절단/잎 제거/포장 같은 접촉 작업 데이터에 집중

---

## 다음 조사 대상

- OMX: LeRobot 공식 지원이 확인되었으므로 별도 하드웨어 문서 추가 후보
- Pollen Amazing Hand/PincOpen: Hugging Face/Pollen 계열의 저가 오픈소스 손·그리퍼 추가 후보
- Soft gripper 계열: 꽃 작업에는 덱스터러스 핸드보다 중요할 수 있어 별도 문서화 가치가 있음
- OpenArm 실제 공급처/리드타임: 구매 후보 1순위라 조달 검증이 필요
- SharpaWave/ORCA/WUJI 실구매 조건: 공개 스펙보다 SDK, 납기, 원시 촉각 데이터 접근성이 더 중요

---

## References

- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [LeRobot SO-101](https://huggingface.co/docs/lerobot/en/so101)
- [LeRobot Koch v1.1](https://huggingface.co/docs/lerobot/main/en/koch)
- [LeRobot LeKiwi](https://huggingface.co/docs/lerobot/main/en/lekiwi)
- [LeRobot OpenArm](https://huggingface.co/docs/lerobot/main/en/openarm)
- [LeRobot Reachy 2](https://huggingface.co/docs/lerobot/main/en/reachy2)
- [LeRobot Unitree G1](https://huggingface.co/docs/lerobot/main/en/unitree_g1)
- [ALOHA](https://tonyzhaozh.github.io/aloha/)
- [ALOHA 2](https://aloha-2.github.io/)
- [Mobile ALOHA](https://mobile-aloha.github.io/)
- [Galaxea R1 Pro](https://galaxea-dynamics.com/products/galaxea-r1-pro)
- [UFATORY xArm 7](https://www.ufactory.us/product/ufactory-xarm-7)
- [Franka Research 3](https://franka.de/products/franka-research-3)
- [Unitree G1](https://www.unitree.com/g1/)
- [OnRobot Soft Gripper](https://onrobot.com/us/products/soft-gripper)
- [Robotiq 2F-85/2F-140 Adaptive Robot Gripper](https://robotiq.com/products/2f85-140-adaptive-robot-gripper)
- [WUJI Hand Overview](https://docs.wuji.tech/docs/en/wuji-hand/latest/overview/)
- [WUJI Hand ROS 2 Configuration](https://docs.wuji.tech/docs/en/wuji-hand/latest/ros2-user-guide/configuration/)
- [ETH Soft Robotics Lab - ORCA Hand](https://srl.ethz.ch/platforms/srh/orcahand.html)
- [ORCA Hand paper](https://arxiv.org/abs/2504.04259)
- [ORCA Dexterity](https://www.orcahand.com/)
- [SharpaWave](https://www.sharpa.com/pages/wave)
- [Sharpa North](https://www.sharpa.com/pages/north)
- [Sharpa North CES 2026 announcement](https://www.sharpa.com/blogs/news/sharpa-unveils-its-first-autonomous-full-body-robot-with-human-dexterity-at-ces-2026)
- [Humanoid Guide - Robot Hands & Grippers](https://humanoid.guide/hands/)
- [Robot Manipulation - Hardware](https://www.robot-manipulation.org/hardware)
