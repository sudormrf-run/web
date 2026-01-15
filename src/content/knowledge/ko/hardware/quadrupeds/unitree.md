---
title: Unitree 쿼드러펫
description: Unitree Robotics의 4족 보행 로봇 라인업 - 연구용 가성비 쿼드러펫의 글로벌 표준
tags: [unitree, quadruped, go1, go2, go2-w, b1, b2, b2-w, aliengo, research, ros2, sdk, reinforcement-learning, locomotion, sim-to-real, open-x-embodiment, nvidia-isaac, chinese-robotics]
category: hardware

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## 핵심 의의

- **쿼드러펫 민주화의 선구자**: Spot 대비 1/20 ~ 1/2 가격으로 고성능 쿼드러펫 대중화, 연구 접근성 혁신
- **글로벌 시장 선도**: 전 세계 쿼드러펫 로봇 시장에서 높은 점유율 확보 ([PanDaily][pandaily])
- **연구 생태계 구축**: 공식 SDK, ROS2 지원, 활발한 커뮤니티로 학술 연구의 표준 플랫폼화
- **수직 통합 제조**: 핵심 부품 자체 연구개발 (모터, 감속기, 센서, 배터리 등) - 비용 경쟁력 확보
- **VLA/로코모션 연구 핵심 플랫폼**: NVIDIA GR00T 지원, Open X-Embodiment 데이터셋 포함
- **Wheeled-Legged 하이브리드**: Go2-W, B2-W로 바퀴+다리 복합 이동 방식 선도
- **RL 로코모션 연구의 주요 플랫폼**: 저렴한 가격과 오픈 SDK로 sim-to-real 연구에 널리 사용

<!-- Image pending: ![Unitree Go2](../../assets/hardware/quadrupeds/unitree.png) -->

*Unitree Go2: 연구용으로 가장 인기 있는 쿼드러펫 플랫폼*

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Unitree Robotics (杭州宇树科技) |
| 본사 | 중국 항저우 |
| 설립 | 2016년 (창업자: 왕싱싱 王兴兴) |
| 특징 | 가성비, 연구 접근성, ROS2 지원 |
| 시장 위치 | 글로벌 쿼드러펫 시장 선도 기업 |

Unitree Robotics는 2016년 왕싱싱(Wang Xingxing)이 설립한 중국 로봇 기업입니다. 회사명 "Unitree"는 "Universe"와 "Tree"의 합성어로, 다양한 응용 분야로 뻗어나가는 보편적 기술 기반을 의미합니다. 창업자 왕싱싱은 상하이대학 대학원 재학 중 쿼드러펫 연구를 시작했으며, DJI 근무 후 창업하여 고성능 쿼드러펫의 대중화를 이끌었습니다.

> **참고**: 가격 및 스펙 정보는 2024-2025년 공식 웹사이트 기준이며, 지역 및 시점에 따라 변동될 수 있습니다.

---

## 제품 라인업

Unitree는 소비자/연구용부터 산업용까지 다양한 쿼드러펫 라인업을 보유하고 있습니다. 각 모델은 특정 용도와 가격대에 맞게 최적화되어 있습니다.

### 전체 라인업 비교표

| 모델 | 출시 | 가격 | 무게 | 속도 | 페이로드 | 런타임 | 주요 용도 |
|------|------|------|------|------|----------|--------|----------|
| **Aliengo** | 2019 | ~$15,000 | 21.5kg | 3.3m/s | 5kg | 2-4시간 | 연구/개발 |
| **Go1 Air** | 2021 | $2,700 | 12kg | 2.5m/s | 3kg | 1시간 | 엔트리/취미 |
| **Go1 Pro** | 2021 | $3,500 | 12kg | 3.5m/s | 5kg | 1.5시간 | 일반 소비자 |
| **Go1 Edu** | 2021 | ~$8,500 | 12kg | 3.7m/s | 5kg | 2시간 | 연구/교육 |
| **Go2 Air** | 2023 | $1,600 | 15kg | 2.5m/s | 7kg | 1-2시간 | 차세대 엔트리 |
| **Go2 Pro** | 2023 | $2,800 | 15kg | 3.5m/s | 8kg | 1-2시간 | 일반 소비자 |
| **Go2 Edu** | 2023 | 문의 | 15kg | 5m/s | 8kg | 2-4시간 | 연구/교육 |
| **Go2-W** | 2024 | $4,500 ~ $14,000 | 18kg | 2.5m/s | 12kg | 1.5-3시간 | 하이브리드 |
| **B1** | 2020 | ~$40,000 | 50kg | 1.8m/s | 5kg | 2-4시간 | 산업용 |
| **B2** | 2023 | ~$100,000 | 60kg | 6m/s+ | 40kg | 4-6시간 | 산업용 고급 |
| **B2-W** | 2024 | ~$90,000 | - | 5.56m/s | 40kg | 50km 주행 | 산업용 휠 |

### Consumer/Research 시리즈

#### Go1 시리즈 (2021)

Go1은 Unitree를 전 세계적으로 유명하게 만든 제품입니다. $2,700부터 시작하는 가격으로 쿼드러펫 연구의 진입 장벽을 획기적으로 낮췄습니다.

| 모델 | 가격 | 무게 | 최고 속도 | 페이로드 | 런타임 | 주요 특징 |
|------|------|------|----------|----------|--------|----------|
| **Go1 Air** | $2,700 | 12kg | 2.5m/s | 3kg | 1시간 | 엔트리급, 기본 센서 |
| **Go1 Pro** | $3,500 | 12kg | 3.5m/s | 5kg | 1.5시간 | 향상된 센서, 초음파 |
| **Go1 Edu** | ~$8,500 | 12kg | 3.7m/s | 5kg | 2시간 | SDK/API 접근, Jetson |

#### Go2 시리즈 (2023)

Go2는 Go1의 후속 모델로, 성능과 센서가 대폭 향상되었습니다. 특히 4D LiDAR 탑재로 자율 탐색 능력이 크게 개선되었습니다.

| 모델 | 가격 | 무게 | 최고 속도 | 페이로드 | 런타임 | 주요 특징 |
|------|------|------|----------|----------|--------|----------|
| **Go2 Air** | $1,600 | 15kg | 2.5m/s | 7kg | 1-2시간 | 차세대 엔트리 |
| **Go2 Pro** | $2,800 | 15kg | 3.5m/s | 8kg | 1-2시간 | 4G, ISS 2.0, 4D LiDAR |
| **Go2 Edu** | 문의 | 15kg | 5m/s | 8kg | 2-4시간 | Jetson Orin, 발 힘 센서 |
| **Go2-W** | $4,500 ~ $14,000 | 18kg | 2.5m/s | 12kg | 1.5-3시간 | 휠+다리 하이브리드 |

### Research 시리즈

#### Aliengo (2019)

Aliengo는 Unitree의 첫 번째 본격적인 연구용 쿼드러펫입니다. Go1 이전에 출시되어 학술 연구 커뮤니티에서 먼저 채택되었습니다.

| 항목 | 스펙 |
|------|------|
| 출시 | 2019년 |
| 가격 | ~$15,000 (Edu 버전) |
| 무게 | 21.5kg |
| 크기 | 650mm x 320mm x 600mm |
| 최고 속도 | 3.3m/s |
| 페이로드 | 5kg |
| 관절 토크 | 40N.m |
| 런타임 | 2-4시간 |
| 컴퓨팅 | NVIDIA Jetson TX2/Xavier NX |
| 특징 | EtherCAT 모터 통신, C++ SDK |

**Aliengo가 연구에 사용된 이유:**
- Go1 이전 유일한 저가형 연구용 쿼드러펫
- 강화학습 sim-to-real 연구의 초기 플랫폼
- UC Berkeley, ETH Zurich 등 유명 연구실에서 채택
- 다양한 로코모션 알고리즘 논문의 실험 플랫폼

### Industrial 시리즈

#### B1 (2020)

B1은 Unitree의 첫 번째 대형 산업용 쿼드러펫입니다.

| 항목 | 스펙 |
|------|------|
| 출시 | 2020년 |
| 가격 | ~$40,000 |
| 무게 | 50kg |
| 크기 | 1080mm x 460mm x 650mm |
| 최고 속도 | 1.8m/s |
| 페이로드 | 5kg |
| 관절 토크 | 180N.m |
| 런타임 | 2-4시간 |
| 방수/방진 | IP54 |
| 작동 온도 | -20°C ~ 55°C |

#### B2 시리즈 (2023)

B2는 B1의 후속 모델로, 업계 최고 수준의 성능을 제공합니다.

| 모델 | 가격 | 무게 | 최고 속도 | 페이로드 | 런타임 | 주요 특징 |
|------|------|------|----------|----------|--------|----------|
| **B2** | ~$100,000 | 60kg | 6m/s+ | 40kg(이동)/120kg(정지) | 4-6시간 | 산업용, IP67 |
| **B2-W** | ~$90,000 | - | 5.56m/s (20km/h) | 40kg | 50km 주행 | 12인치 휠 장착 |

---

## Go2 상세 스펙

Unitree의 가장 인기 있는 연구용 쿼드러펫입니다.

### 물리적 사양

| 항목 | 스펙 |
|------|------|
| 크기 (기립) | 70cm x 31cm x 40cm |
| 크기 (앉음) | 76cm x 31cm x 20cm |
| 무게 | ~15kg (배터리 포함) |
| 재질 | 알루미늄 합금 + 엔지니어링 플라스틱 |

### 성능

| 항목 | 스펙 |
|------|------|
| 최고 속도 | 5m/s (Edu 기준) |
| 등반 각도 | 30-40° |
| 계단 높이 | 15-16cm |
| 관절 토크 | ~45N.m |
| 배터리 | 8000mAh (기본) / 15000mAh (확장) |

### 센서 시스템

| 항목 | 스펙 |
|------|------|
| 4D LiDAR | 360°x90° 반구형 인식, 최소 0.05m |
| 카메라 | HD 광각 |
| IMU | 내장 |
| 발 힘 센서 | Edu 모델 |

### 컴퓨팅 (Edu 모델)

| 버전 | 컴퓨팅 모듈 | AI 성능 |
|------|------------|---------|
| Edu Standard | NVIDIA Jetson Orin Nano 8GB | 40 TOPS |
| Edu Plus | NVIDIA Jetson Orin NX 16GB | 100 TOPS |

---

## B2 상세 스펙

산업용 고성능 쿼드러펫입니다.

### 물리적 사양

| 항목 | 스펙 |
|------|------|
| 크기 (기립) | 1098mm x 450mm x 645mm |
| 크기 (앉음) | 880mm x 460mm x 330mm |
| 무게 | ~60kg (배터리 포함) |

### 성능

| 항목 | 스펙 |
|------|------|
| 최고 속도 | 6m/s 이상 |
| 점프 거리 | 1.6m 이상 |
| 관절 토크 | 360N.m |
| 등반 각도 | 45° 이상 |
| 장애물 극복 | 40cm |
| 계단 | 20-25cm 연속 등반 |

### 적재 및 내구성

| 항목 | 스펙 |
|------|------|
| 정지 적재 | 120kg 이상 |
| 이동 적재 | 40kg 이상 |
| 20kg 적재 시 | 4시간, 15km 이상 |
| 무부하 연속 | 5시간, 20km 이상 |
| 배터리 | 45Ah (2250Wh), 58V |

### 환경 적응성

| 항목 | 스펙 |
|------|------|
| 방수/방진 | IP67 |
| 작동 온도 | -20°C ~ 55°C |

### 컴퓨팅

| 항목 | 스펙 |
|------|------|
| 기본 CPU | Intel Core i5/i7 |
| 확장 옵션 | Jetson Orin NX (최대 3개) |
| 센서 | 3D LiDAR, 깊이 카메라 x2, 광학 카메라 x2 |
| 인터페이스 | 1000M Ethernet x4, USB3.0 x4 |

---

## Wheeled 하이브리드 (Go2-W, B2-W)

Unitree의 혁신적인 휠+다리 복합 로봇입니다.

### Go2-W

| 항목 | 스펙 |
|------|------|
| 크기 | 70cm x 43cm x 50cm |
| 무게 | ~18kg |
| 타이어 | 7인치 공압 타이어 |
| 최고 속도 | 2.5m/s |
| 장애물 극복 | 70cm |
| 등반 각도 | 35° |

### B2-W

| 항목 | 스펙 |
|------|------|
| 타이어 | 12인치 공압 타이어 (225mm) |
| 휠 토크 | 50N.m |
| 최고 속도 | 5.56m/s (20km/h) |
| 주행 거리 | 40kg 적재 시 50km |
| 가격 | ~$90,000 |

---

## Boston Dynamics Spot 대비 비교

| 항목 | Unitree Go2 Edu | Unitree B2 | Boston Dynamics Spot |
|------|----------------|------------|---------------------|
| **가격** | ~$8,000 | ~$100,000 | ~$75,000 |
| **무게** | 15kg | 60kg | 32kg |
| **페이로드** | 8kg | 40kg | 14kg |
| **런타임** | 2-4시간 | 4-6시간 | 1.5시간 |
| **최고 속도** | 5m/s | 6m/s+ | 1.6m/s |
| **방수** | - | IP67 | IP54 |
| **SDK** | 오픈 | 오픈 | 제한적 |
| **ROS 지원** | 공식 ROS2 | 공식 ROS2 | 커뮤니티 |

### Unitree의 핵심 장점

- **가격**: Spot 대비 상당히 저렴하여 연구 규모 배포에 유리
- **속도**: B2는 6 m/s 이상으로 산업용 쿼드러펫 중 최상위 속도 클래스
- **런타임**: B2는 최대 6시간으로 장시간 운용 가능
- **개방성**: 공식 SDK, ROS2 지원으로 연구 친화적
- **비용 구조**: 중국 내 제조 및 수직 통합으로 경쟁력 있는 가격 제공 ([36Kr][36kr])

---

## SDK 및 개발 환경

Unitree는 연구자 친화적인 개방형 SDK 정책을 유지하며, 이는 경쟁사 대비 핵심 차별점입니다.

### 공식 SDK 개요

```
┌─────────────────────────────────────────────────────────┐
│                Unitree SDK 아키텍처                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   응용 레이어    Python Script / C++ App / ROS2 Node    │
│        ↓                                                │
│   SDK 레이어     unitree_sdk2 / unitree_ros2           │
│        ↓                                                │
│   통신 레이어    CycloneDDS (DDS 미들웨어)               │
│        ↓                                                │
│   하드웨어       Go2 / B2 / H1 컨트롤러                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 공식 SDK

| SDK | 언어 | 설명 | 지원 로봇 |
|-----|------|------|----------|
| **unitree_sdk2** | C++/Python | CycloneDDS 기반 통신 | Go2, B2, H1 |
| **unitree_sdk2_python** | Python | unitree_sdk2 Python 바인딩 | Go2, B2, H1 |
| **unitree_ros2** | C++/Python | ROS2 환경 개발 패키지 | Go2, B2, H1 |
| **unitree_rl_lab** | Python | Isaac Lab 기반 강화학습 | Go2, B2 |
| **unitree_IL_lerobot** | Python | LeRobot 프레임워크 수정판 | Go2 |
| **unitree_sdk** | C++ | 레거시 SDK (Go1, Aliengo) | Go1, Aliengo |

### Python SDK 사용 예시

```python
# unitree_sdk2_python 기본 사용법
from unitree_sdk2py.go2.robot import Go2Robot

robot = Go2Robot()
robot.set_mode("sport")
robot.move(vx=0.5, vy=0.0, vyaw=0.0)  # 전진 이동
robot.stand_up()
robot.sit_down()
```

### C++ SDK 특징

| 기능 | 설명 |
|------|------|
| **저수준 제어** | 관절 토크/위치/속도 직접 제어 (Edu 모델) |
| **고빈도 제어** | 최대 1000Hz 제어 루프 |
| **센서 접근** | IMU, 관절 상태, 발 접촉 센서 |
| **안전 기능** | 비상 정지, 토크 제한 |

### ROS2 지원

Unitree는 업계에서 가장 강력한 ROS2 지원을 제공합니다.

| 항목 | 내용 |
|------|------|
| **DDS 호환성** | CycloneDDS 0.10.2 사용, ROS2와 직접 통신 가능 |
| **공식 패키지** | `unitree_ros2` (GitHub) |
| **지원 버전** | ROS2 Humble (LTS), Jazzy |
| **시뮬레이션** | Gazebo Harmonic, Ignition Fortress |

#### ROS2 토픽 및 서비스

```
┌─────────────────────────────────────────────────────────┐
│              unitree_ros2 주요 토픽/서비스               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  토픽 (Topics):                                          │
│    /go2/joint_states        - 관절 상태 (12 DoF)         │
│    /go2/odom                - 오도메트리                  │
│    /go2/imu                 - IMU 데이터                 │
│    /go2/cmd_vel             - 속도 명령                  │
│    /go2/lidar               - 4D LiDAR 포인트클라우드     │
│    /go2/camera/color        - RGB 이미지                 │
│                                                         │
│  서비스 (Services):                                       │
│    /go2/sport_mode          - 스포츠 모드 전환            │
│    /go2/stand_up            - 기립                       │
│    /go2/sit_down            - 앉기                       │
│    /go2/emergency_stop      - 비상 정지                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 시뮬레이션 환경

| 시뮬레이터 | 지원 수준 | 특징 |
|-----------|----------|------|
| **NVIDIA Isaac Gym** | 공식 | 대규모 병렬 RL 학습 |
| **NVIDIA Isaac Lab** | 공식 | 차세대 Isaac, Omniverse 통합 |
| **Gazebo Harmonic** | 공식 | ROS2 표준 시뮬레이터 |
| **MuJoCo** | 커뮤니티 | 물리 정확도 높음 |
| **PyBullet** | 커뮤니티 | 가벼운 RL 실험용 |
| **Webots** | 커뮤니티 | 교육용 |

### 커뮤니티 리소스

| 프로젝트 | 설명 | 링크 |
|---------|------|------|
| **unitree-go2-ros2** | CHAMP 컨트롤러 + Ignition Fortress | GitHub |
| **go2_robot** | Universidad Rey Juan Carlos IRLab | GitHub |
| **Go2 MCP Server** | LLM 자연어 명령 제어 | GitHub |
| **go2_ros2_ws** | 완전한 ROS2 워크스페이스 | GitHub |
| **unitree_legged_sdk** | 레거시 Go1 SDK | GitHub |

### 개발 환경 설정 요약

```bash
# Ubuntu 22.04 + ROS2 Humble 권장
# 1. ROS2 Humble 설치
sudo apt install ros-humble-desktop

# 2. CycloneDDS 설치
sudo apt install ros-humble-rmw-cyclonedds-cpp
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# 3. Unitree ROS2 패키지 클론
cd ~/ros2_ws/src
git clone https://github.com/unitreerobotics/unitree_ros2

# 4. 빌드 및 실행
cd ~/ros2_ws && colcon build
source install/setup.bash
ros2 launch unitree_ros2 go2_bringup.launch.py
```

---

## VLA 연구 활용

Unitree 쿼드러펫은 VLA(Vision-Language-Action) 및 로코모션 연구의 핵심 플랫폼으로 자리잡았습니다.

### NVIDIA GR00T 지원

```
┌─────────────────────────────────────────────────────────┐
│              NVIDIA GR00T 에코시스템                      │
├─────────────────────────────────────────────────────────┤
│  Isaac Lab    →   GR00T N1 학습   →   Unitree 배포      │
│  (시뮬레이션)     (Foundation Model)    (실제 로봇)        │
├─────────────────────────────────────────────────────────┤
│  • Unitree Go2 시뮬레이션 환경 제공                       │
│  • Unitree B2 시뮬레이션 환경 제공                        │
│  • Cross-embodiment 정책 전이 연구에 활용                 │
└─────────────────────────────────────────────────────────┘
```

- **GR00T N1 시리즈 지원 플랫폼**: NVIDIA Isaac Lab에서 Unitree 로봇 시뮬레이션 환경 제공
- **Isaac Lab/Omniverse 시뮬레이션**: 고품질 Unitree URDF 및 시뮬레이션 환경 제공
- **Cross-embodiment 학습**: 휴머노이드-쿼드러펫 간 정책 전이 연구에 활용
- **Jetson Orin 탑재**: 온보드 AI 추론을 위한 NVIDIA 하드웨어 통합

### Open X-Embodiment

Google DeepMind가 주도하는 대규모 로봇 데이터셋 프로젝트에 Unitree 로봇 데이터가 포함되어 있습니다.

| 항목 | 내용 |
|------|------|
| 데이터셋 규모 | 22개 로봇 타입, 100만+ 에피소드 |
| Unitree 포함 데이터 | Go1, Go2 로코모션 데이터 |
| 활용 모델 | RT-X, Octo, OpenVLA 등 |
| 기여 기관 | UC Berkeley, Stanford, CMU 등 |

**연구 활용 사례:**
- **RT-X 모델**: 다양한 로봇 간 일반화 능력 학습
- **Octo**: 오픈소스 범용 로봇 정책
- **OpenVLA**: Vision-Language-Action 모델의 로코모션 확장

### 로코모션 연구

Unitree는 강화학습 기반 로코모션 연구에서 널리 사용되는 플랫폼입니다.

#### 주요 연구 분야

| 분야 | 설명 | 대표 연구 |
|------|------|----------|
| **Sim-to-Real Transfer** | 시뮬레이션에서 실제 로봇으로 정책 전이 | ETH Zurich, MIT |
| **Terrain Adaptation** | 다양한 지형에서의 적응적 보행 | UC Berkeley |
| **Blind Locomotion** | 비전 없이 proprioception만으로 보행 | CMU |
| **Parkour** | 장애물 넘기, 점프 등 역동적 동작 | ETH RSL |
| **Multi-skill Learning** | 하나의 정책으로 다양한 기술 수행 | Stanford |

#### sim-to-real 연구 파이프라인

```
┌─────────────────────────────────────────────────────────┐
│                sim-to-real 연구 흐름                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Isaac Gym/Lab]  →  [RL 정책 학습]  →  [Domain Random] │
│        ↓                  ↓                  ↓          │
│   Unitree URDF      PPO/SAC 등        지형/마찰/질량     │
│        ↓                  ↓                  ↓          │
│  ────────────────────────────────────────────────────── │
│                          ↓                              │
│              [Unitree Go2/B2 배포]                       │
│                          ↓                              │
│              실제 환경에서 zero-shot 성능                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### 대표적 연구 논문

| 논문 | 기관 | 로봇 | 핵심 기여 |
|------|------|------|----------|
| Learning Quadrupedal Locomotion | ETH Zurich | Aliengo | 대규모 sim-to-real |
| Legged Robots that Keep on Learning | UC Berkeley | Go1 | 온라인 적응 학습 |
| Walk These Ways | MIT | Go1 | 다양한 보행 스타일 |
| Extreme Parkour | CMU | Go1 | 파쿠르 동작 학습 |
| DreamWaQ | KAIST | Go1 | World model 기반 |

### Go2가 연구에서 인기 있는 이유

Go2 Edu는 현재 가장 인기 있는 연구용 쿼드러펫입니다.

```
┌─────────────────────────────────────────────────────────┐
│               Go2가 연구에 선호되는 이유                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. 가격 접근성                                          │
│     • Spot ($75K) 대비 1/10 가격                        │
│     • 다중 로봇 실험 가능 (군집 연구)                      │
│     • 파손 시 교체 비용 부담 적음                         │
│                                                         │
│  2. 개방적 SDK                                           │
│     • Python, C++, ROS2 공식 지원                       │
│     • 저수준 관절 제어 접근 가능 (Edu 버전)                │
│     • 커뮤니티 패키지 활발                                │
│                                                         │
│  3. 충분한 컴퓨팅 파워                                    │
│     • Jetson Orin (40-100 TOPS)                        │
│     • 온보드 RL 정책 실행 가능                            │
│     • 비전 기반 탐색 지원                                 │
│                                                         │
│  4. 검증된 하드웨어                                       │
│     • 수천 대 판매로 신뢰성 검증                          │
│     • 부품 교체 용이                                     │
│     • 글로벌 기술 지원                                    │
│                                                         │
│  5. 시뮬레이션 환경 풍부                                   │
│     • Isaac Gym/Lab 공식 지원                           │
│     • Gazebo, MuJoCo URDF 제공                         │
│     • PyBullet 커뮤니티 모델                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### LLM/VLM 통합 연구

최근에는 대형 언어 모델과 Unitree 로봇을 결합한 연구가 활발합니다.

| 프로젝트 | 설명 |
|---------|------|
| **Go2 MCP Server** | Claude/GPT와 자연어로 로봇 제어 |
| **SayPlan + Unitree** | 장기 태스크 계획 실행 |
| **LLM-Planner** | 자연어 명령을 로봇 동작으로 변환 |
| **VLM Navigation** | 비전-언어 모델 기반 탐색 |

### 텔레오퍼레이션 데이터 수집

| 방식 | 장비 | 용도 |
|------|------|------|
| **조이스틱 제어** | PS4/Xbox 컨트롤러 | 기본 이동 데이터 |
| **앱 제어** | Unitree 공식 앱 | 소비자용 제어 |
| **VR 텔레옵** | Quest/Vive | 연구용 정밀 제어 |
| **모션 캡처** | Xsens/Noitom | 인간 동작 모방 |

---

## 연구 인기도

### 학술 연구 채택

Unitree 쿼드러펫은 저렴한 가격과 개방적인 SDK로 인해 전 세계 대학 및 연구기관에서 널리 채택되고 있습니다:

- **가격 접근성**: Spot의 1/10 가격으로 연구실 규모 배포 가능
- **다중 로봇 실험**: 저렴한 가격으로 군집 로봇 연구 지원
- **교육 활용**: 로보틱스 교육용 플랫폼으로 인기

### 주요 고객

- NVIDIA (2020년부터, [36Kr][36kr])
- Google (2020년부터, [36Kr][36kr])
- 전 세계 주요 대학 연구실

---

## 회사 연혁

| 연도 | 이벤트 |
|------|--------|
| 2013 | 왕싱싱, 상하이대학에서 쿼드러펫 연구 시작 |
| 2016 | XDog 개발, Unitree Robotics 설립 |
| 2017 | Laikago 공개 (Laika에서 명명) |
| 2020 | NVIDIA, Google 고객 확보, 흑자 전환 ([36Kr][36kr]) |
| 2021 | Go1 출시, 소비자용 쿼드러펫 대중화 |
| 2023 | Go2 출시, B2 발표, H1 휴머노이드 공개 |
| 2024 | Go2-W 출시 |
| 2025 | 홍콩 IPO 검토 중 (보도 기준) |

### 투자 현황

- **최근 라운드**: Series C-IV (2025년 기준)
- **주요 투자자**: Alibaba, Tencent, 베이징국유자본운영관리공사 등 ([PitchBook][pitchbook])

---

## 응용 분야

### Research & Education

- 로코모션 알고리즘 연구
- 강화학습/모방학습 실험
- 로보틱스 교육

### Industrial (B2/B2-W)

- 시설 검사 (발전소, 화학공장)
- 건설 현장 모니터링
- 위험 환경 탐색
- 물류 자동화

### Consumer (Go1/Go2)

- 기술 애호가/개발자
- 프로토타이핑
- 엔터테인먼트

---

## References

### 공식 리소스
- [Unitree Go2 공식 페이지](https://www.unitree.com/go2/)
- [Unitree B2 공식 페이지](https://www.unitree.com/b2)
- [Unitree Go2-W 공식 페이지](https://www.unitree.com/mobile/go2-w/)
- [Unitree GitHub](https://github.com/unitreerobotics)
- [Unitree SDK2 문서](https://support.unitree.com/home/en/developer)

### 기술 리뷰
- [IEEE Spectrum - Unitree Go2](https://spectrum.ieee.org/quadruped-robot-unitree-go2)
- [IEEE Spectrum - Go1 출시 리뷰](https://spectrum.ieee.org/unitrees-go1-robot-dog-looks-pretty-great-costs-just-usd-2700)

### 시장 분석
- [Unitree vs Boston Dynamics 비교](https://www.inrobots.shop/blogs/buyers-guide/unitree-vs-boston-dynamics)
- [The Rise of Unitree Robotics](https://mikekalil.com/blog/rise-of-unitree/)

### ROS2 커뮤니티
- [unitree_ros2 GitHub](https://github.com/unitreerobotics/unitree_ros2)
- [ROS Discourse - Go2 Jazzy 릴리스](https://discourse.openrobotics.org/t/new-open-source-release-for-quadruped-unitree-go2-ros-2-jazzy-x-gazebo-harmonic/43569)

<!-- Reference Links -->
[pandaily]: https://pandaily.com/from-robot-dogs-to-humanoids-the-unlikely-rise-of-unitree-robotics/
[36kr]: https://eu.36kr.com/en/p/3392794880493703
[pitchbook]: https://pitchbook.com/profiles/company/398902-78

---

## See Also

- [하드웨어 목록](../index)
- [Boston Dynamics Spot](spot)
- [ANYbotics ANYmal](anymal)
- [Unitree 휴머노이드](../humanoids/unitree-humanoid)
- [GR00T](../../models/groot)
