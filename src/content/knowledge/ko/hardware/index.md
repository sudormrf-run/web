---
title: 로봇 하드웨어
description: Physical AI를 위한 로봇 하드웨어와 플랫폼
category: hardware
order: 1
isFeatured: true
icon: cpu

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

Physical AI 연구와 개발을 위한 로봇 하드웨어 플랫폼들을 정리했습니다.

---

## 휴머노이드 (Humanoids)

범용 인간형 로봇 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [Optimus](/knowledge/hardware/humanoids/optimus) | Tesla | 자체 생산, 공장 배포, End-to-End AI |
| [Figure 01/02](/knowledge/hardware/humanoids/figure) | Figure AI | BMW 파트너십, Helix VLA, OpenAI 투자 |
| [NEO](/knowledge/hardware/humanoids/neo) | 1X Technologies | 가정용 타겟, World Model, OpenAI 투자 |
| [G1/H1](/knowledge/hardware/humanoids/unitree-humanoid) | Unitree | $16K 저가 휴머노이드, RL 기반 |
| [Digit](/knowledge/hardware/humanoids/digit) | Agility Robotics | 물류 특화, Amazon/GXO 파트너 |
| [Apollo](/knowledge/hardware/humanoids/apollo) | Apptronik | NASA 협력, 모듈러 설계 |
| [GR-1/GR-2](/knowledge/hardware/humanoids/fourier) | Fourier Intelligence | 재활 의료, FSA 관절 |
| [Atlas](/knowledge/hardware/humanoids/atlas) | Boston Dynamics | 유압→전기, 파쿠르/댄스 |
| [Phoenix](/knowledge/hardware/humanoids/phoenix) | Sanctuary AI | Carbon AI, 20 DoF 손 |
| [Galaxea R1](/knowledge/hardware/humanoids/galaxea) | Galaxea AI | 저가, 힘 제어, ~$10K 목표 |
| [Reachy 2](/knowledge/hardware/humanoids/reachy) | Pollen Robotics | 오픈소스, 연구용, ~$70K |
| [HopeJr](/knowledge/hardware/humanoids/hopejr) | Fourier Intelligence | 1.35m 소형, 교육/연구용 |
| [Agibot](/knowledge/hardware/humanoids/agibot) | Agibot | 중국, 제조업 특화 |
| [Noetix Bumi](/knowledge/hardware/humanoids/noetix-bumi) | Noetix | 범용 작업, 연구 플랫폼 |
| [Sharpa North](/knowledge/hardware/humanoids/sharpa-north) | Sharpa | SharpaWave 양손, CraftNet/VTLA, CES 2026 전신 로봇 |

---

## 로봇 팔 (Arms)

조작 연구를 위한 로봇 암 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [ALOHA](/knowledge/hardware/arms/aloha) | Stanford | 저가 양팔 ~$20K, ACT 모델 |
| [Franka Research 3](/knowledge/hardware/arms/franka-research3) | Franka | 연구용 표준, 1kHz 제어, ~$40K |
| [Franka Panda](/knowledge/hardware/arms/franka-panda) | Franka | 7축 협동로봇, 레거시 |
| [UR Series](/knowledge/hardware/arms/ur-series) | Universal Robots | 산업용 협동로봇, UR3e~UR30 |
| [xArm](/knowledge/hardware/arms/xarm) | UFACTORY | 저가 연구용, Franka 대안 |
| [Koch v1.1](/knowledge/hardware/arms/koch) | Jess Moss | 오픈소스 저가 ~$440/쌍, LeRobot 호환 |
| [LeRobot Arms](/knowledge/hardware/arms/lerobot-arms) | HuggingFace/TheRobotStudio | SO-100/SO-101, ~$130, 오픈소스 |
| [OpenArm](/knowledge/hardware/arms/openarm) | Enactic | LeRobot 공식 지원, 7-DoF 양팔, ~$6.5K BOM |
| [Kinova Gen3](/knowledge/hardware/arms/kinova) | Kinova Robotics | 모듈러, Gen3/Gen3 Lite/Link 6 |
| [Galaxea Arms](/knowledge/hardware/arms/galaxea-arms) | Galaxea AI | 힘 제어, A1/A1X/A1Y, ~$3K |
| [WidowX/ViperX](/knowledge/hardware/arms/widowx) | Interbotix | ALOHA 베이스, BridgeData |

---

## 로봇 핸드 (Hands)

손재주 조작 연구를 위한 로봇 핸드 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [Shadow Hand](/knowledge/hardware/hands/shadow-hand) | Shadow Robot | 20 DoF, 고자유도 표준, ~$100K+ |
| [LEAP Hand](/knowledge/hardware/hands/leap-hand) | CMU | 16 DoF, 저가 오픈소스 ~$2K |
| [Allegro Hand](/knowledge/hardware/hands/allegro) | Wonik Robotics | 16 DoF, 연구용 표준 |
| [Ability Hand](/knowledge/hardware/hands/ability) | PSYONIC | 6 DoF, 의수 기술, 터치 센싱 |
| [Inspire Hand](/knowledge/hardware/hands/inspire) | Inspire Robots | 6 DoF, Unitree 통합, RH56/F1 |
| [WUJI Hand](/knowledge/hardware/hands/wuji-hand) | WUJI TECH | 20 active DoF, ROS 2/SDK, 저무게 직접구동형 핸드 |
| [ORCA Hand](/knowledge/hardware/hands/orca-hand) | ETH Zurich / ORCA Dexterity | 17 DoF 오픈소스 핸드, Touch 라인업 |
| [SharpaWave](/knowledge/hardware/hands/sharpa-wave) | Sharpa | 22 active DoF, 고해상도 촉각 배열 |
| [OnRobot Soft Gripper](/knowledge/hardware/hands/onrobot-soft-gripper) | OnRobot | 꽃/식품 등 손상 쉬운 물체용 소프트 그리퍼 |
| [Robotiq Adaptive Grippers](/knowledge/hardware/hands/robotiq-grippers) | Robotiq | 2F/3F 산업용 적응형 그리퍼, 도구/줄기 묶음 고정 |
| [Clone Hand](/knowledge/hardware/hands/clone) | Clone Robotics | 유압 바이오닉, 인체 모방 |
| [GEX Series](/knowledge/hardware/hands/gex) | 동양미래대 | 초저가 ~$600, GX11/EX12 |

---

## 사족보행 (Quadrupeds)

4족 보행 로봇 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [Spot](/knowledge/hardware/quadrupeds/spot) | Boston Dynamics | 산업용 표준, 자율 검사 |
| [Go1/Go2/B1/B2](/knowledge/hardware/quadrupeds/unitree) | Unitree | 저가 연구용, ~$1.6K부터 |
| [ANYmal](/knowledge/hardware/quadrupeds/anymal) | ANYbotics | 산업 검사, IP67, RL 기반 |

---

## 모바일 매니퓰레이터 (Mobile)

이동 조작이 가능한 모바일 로봇 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [Mobile ALOHA](/knowledge/hardware/mobile/mobile-aloha) | Stanford | 이동형 양팔 조작, ~$32K, Co-training |
| [LeKiwi](/knowledge/hardware/mobile/lekiwi) | SIGRobotics-UIUC | LeRobot 공식 지원, SO-101 + 키위 베이스, 저가 모바일 조작 |

---

## 기타 (Misc)

특수 목적 로봇 플랫폼들입니다.

| 로봇 | 회사 | 특징 |
|------|------|------|
| [Reachy Mini](/knowledge/hardware/misc/reachy-mini) | Pollen/Hugging Face | 데스크톱 컴패니언, ~$299, 교육용 |
