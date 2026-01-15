---
title: Koch v1.1
description: Alexander Koch가 설계한 저가 오픈소스 DIY 로봇 암, HuggingFace LeRobot 공식 지원
tags: [koch, low-cost, diy, lerobot, dynamixel, xl430, xl330, open-source, 3d-print, teleoperation, imitation-learning]
category: hardware
created: 2024-04-01
updated: 2025-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Koch v1.1

> Home > Hardware > Arms > Koch

<!-- Image pending: ![Koch](../../assets/hardware/arms/koch.png) -->

---

## Overview

Koch v1.1은 **Alexander Koch**가 설계한 저가 오픈소스 로봇 암을 **HuggingFace 엔지니어 Jess Moss**가 개선한 버전이다. 약 $250-$480의 저렴한 비용으로 Leader-Follower 텔레오퍼레이션 시스템을 구축할 수 있으며, LeRobot 프레임워크와의 완벽한 통합을 제공한다.

| 항목 | 내용 |
|------|------|
| **원 설계자** | Alexander Koch (Tau Robotics 공동 창립자) |
| **v1.1 개선** | Jess Moss (HuggingFace) |
| **라이선스** | 오픈소스 (GitHub 공개) |
| **유형** | 6-DoF 저가 3D 프린트 로봇 암 |
| **DoF** | 6 (Shoulder Pan, Shoulder Lift, Elbow, Wrist Flex, Wrist Roll, Gripper) |
| **모터** | Dynamixel XL430-W250-T + XL330-M288-T |
| **부품 비용** | ~$258 (Follower) / ~$183 (Leader) / ~$441 (쌍) |
| **공개 시기** | 원본: 2024년 초, v1.1: 2024년 7월 |

---

## 핵심 의의

### VLA 연구를 위한 저가 데이터 수집 플랫폼

Koch 로봇 암의 가장 중요한 기여는 **VLA(Vision-Language-Action) 연구의 데이터 수집 비용을 획기적으로 낮춘 것**이다.

1. **극저가 하드웨어**: 기존 연구용 로봇 암(Franka $30K+, UR $25K+)과 비교해 1/100 수준의 비용
2. **완전 오픈소스**: CAD 파일, SolidWorks 모델, BOM, 제어 코드 전체 공개
3. **3D 프린팅 기반**: 일반 FDM 프린터(Prusa, Ender, Bambu)로 제작 가능
4. **LeRobot 통합**: HuggingFace의 로보틱스 ML 프레임워크와 완벽 호환

### Tau Robotics의 비전

Alexander Koch는 Tau Robotics를 통해 **"수백만 개의 로봇 암이 현실 세계에서 학습하는"** 비전을 제시했다. 이 저가 로봇 암은 그 비전의 핵심 하드웨어로서, 분산된 데이터 수집과 대규모 imitation learning을 가능하게 한다.

> "We are building a general AI for robots. We start by building millions of robot arms that learn in the real world."
> - Alexander Koch, Tau Robotics

---

## 기술 사양

### 모터 구성

#### Follower 암 (제어 대상)

| 관절 | 모터 | 수량 | 토크 | 특징 |
|------|------|------|------|------|
| Shoulder Pan | XL430-W250-T | 1 | 1.4 N.m | 고토크, 베이스 회전 |
| Shoulder Lift | XL430-W250-T | 1 | 1.4 N.m | 고토크, 어깨 들어올림 |
| Elbow Flex | XL330-M288-T | 1 | 0.52 N.m | 경량 (18g) |
| Wrist Flex | XL330-M288-T | 1 | 0.52 N.m | 경량 (18g) |
| Wrist Roll | XL330-M288-T | 1 | 0.52 N.m | 경량 (18g) |
| Gripper | XL330-M288-T | 1 | 0.52 N.m | 경량 (18g) |

**설계 철학**: XL430 모터는 XL330보다 약 2배 강력하여 무거운 하중을 지지하는 어깨 관절에 사용. XL330은 18g의 초경량으로 암 끝단의 관성을 최소화.

#### Leader 암 (텔레오퍼레이션 컨트롤러)

| 관절 | 모터 | 수량 | 특징 |
|------|------|------|------|
| 전체 관절 | XL330-M077-T | 6 | 5V 통일, 조립 단순화 |

Leader 암은 그리퍼 대신 **핸들과 트리거**로 구성되어 인간 조작자가 직관적으로 제어할 수 있다.

### Dynamixel 모터 상세

| 모델 | 전압 | 스톨 토크 | 무게 | 가격 |
|------|------|-----------|------|------|
| XL430-W250-T | 11.1V | 1.4 N.m | 57.2g | ~$50 (할인 시 $27.50) |
| XL330-M288-T | 5.0V | 0.52 N.m | 18g | ~$24 |
| XL330-M077-T | 5.0V | 0.34 N.m | 18g | ~$24 |

---

## Bill of Materials (BOM)

### Follower 암 (제어 대상)

| 부품 | 수량 | 가격 (USD) | 비고 |
|------|------|------------|------|
| Dynamixel XL430-W250-T | 2 | $100 | 어깨 관절 (고토크) |
| Dynamixel XL330-M288-T | 4 | $96 | 팔꿈치, 손목, 그리퍼 |
| XL330 Frame & Idler Wheel Set | 1 | $10 | 4개 세트, 2-3개 사용 |
| XL430 Idler Wheel Set | 1 | $7 | |
| Waveshare Serial Bus Servo Driver | 1 | $10 | USB-C 연결 |
| 12V to 5V Voltage Reducer | 1 | $10 | XL330용 전압 변환 |
| 12V Power Supply | 1 | $12 | 메인 전원 |
| Table Clamp | 1 | $6 | 마운팅 |
| Wires/Connectors | - | $7 | 배선 |
| **총계** | | **~$258** | 3D 프린트 비용 별도 |

### Leader 암 (텔레오퍼레이션 컨트롤러)

| 부품 | 수량 | 가격 (USD) | 비고 |
|------|------|------------|------|
| Dynamixel XL330-M077-T | 6 | $144 | 전 관절 통일 |
| XL330 Frame | 1 | $7 | |
| XL330 Idler Wheel Set | 1 | $10 | |
| Waveshare Serial Bus Servo Driver | 1 | $10 | |
| 5V Power Supply | 1 | $6 | Leader는 5V만 사용 |
| Table Clamp | 1 | $6 | |
| **총계** | | **~$183** | 3D 프린트 비용 별도 |

### 총 시스템 비용

| 구성 | 비용 | 용도 |
|------|------|------|
| Follower 단독 | ~$258 | 자율 제어 연구 |
| Leader + Follower | ~$441 | 텔레오퍼레이션 데이터 수집 |
| 듀얼 암 시스템 | ~$882 | 양팔 매니퓰레이션 |

### 구매처

- **ROBOTIS**: [Koch v1.1 Leader Kit](https://robotis.us/koch-v1-1-low-cost-robot-arm-leader/), [Follower Kit](https://www.robotis.us/koch-v1-1-low-cost-robot-arm-follower/)
- **PartaBot**: 완제품 및 부품 키트 판매
- **Tau Robotics**: [대기 목록](https://tau-robotics.com) - 원스톱 패키지

> **Tip**: ROBOTIS 공식 샵에서 10% 할인 코드를 자주 제공한다.

---

## v1.0 vs v1.1 비교

| 항목 | v1.0 (원본) | v1.1 (개선) |
|------|-------------|-------------|
| **설계자** | Alexander Koch | Jess Moss (HuggingFace) |
| **조립 난이도** | 중간 (솔더링 필요) | 낮음 (솔더링 불필요) |
| **전압 변환기** | 수동 조정 필요 | 사전 설정된 DC 컨버터 |
| **나사 간섭** | 일부 존재 | 수정됨 |
| **불필요한 재료** | 존재 | 제거됨 |
| **홀 크기** | 비표준 | 표준화됨 |
| **플라스틱 나사** | 사용 | 제거 (금속 나사로 대체) |
| **Leader 보드 플랫폼** | 없음 | 추가됨 |
| **CAD 포맷** | STL만 | STL + SolidWorks (커뮤니티 기여 용이) |

### v1.1의 핵심 개선점

1. **솔더링 제거**: DC 컨버터 교체로 일반 사용자 접근성 향상
2. **표준화**: 홀 크기, 나사 규격 통일로 조립 오류 감소
3. **SolidWorks 모델**: 커뮤니티 수정 및 기여 용이
4. **LeRobot 최적화**: HuggingFace 엔지니어의 ML 워크플로우 최적화

---

## 조립 및 제작

### 3D 프린팅 요구사항

| 항목 | 권장 사양 |
|------|-----------|
| **재료** | PLA+, ABS, PETG (합리적으로 강한 플라스틱) |
| **노즐** | 0.4mm |
| **레이어 높이** | 0.2mm |
| **인필** | ~30% |
| **서포트** | 그리퍼만 필요 |

**권장 프린터**: Prusa Mini+, Bambu P1, Creality Ender 3

### 조립 과정

1. **3D 프린팅**: STL 파일로 모든 구조 부품 출력
2. **모터 설정**: Dynamixel Wizard로 각 모터에 고유 ID(1-6) 및 1M baudrate 설정
3. **전압 변환기 연결**: 12V → 5V 변환 (Follower의 XL330용)
4. **시리얼 버스 연결**: 모터를 데이지체인으로 연결
5. **보드 마운팅**: 컨트롤러 보드를 베이스에 장착
6. **캘리브레이션**: LeRobot으로 관절 범위 설정

### 전원 구성

| 암 | 전압 | 이유 |
|----|------|------|
| Leader | 5V | 모든 XL330-M077 모터가 5V 사용 |
| Follower | 12V + 5V | XL430은 12V, XL330은 5V (변환기 사용) |

> **주의**: Leader에 12V를 인가하면 모터 손상 위험

---

## LeRobot 생태계 통합

### 설치

LeRobot 설치 방법은 두 가지가 있다:

#### 방법 1: 소스 설치 (권장 - 개발/기여용)

```bash
# 리포지토리 클론
git clone https://github.com/huggingface/lerobot.git
cd lerobot

# 가상환경 생성 및 활성화
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

# Dynamixel SDK 포함 설치
pip install -e ".[dynamixel]"
```

#### 방법 2: pip 설치 (간편 사용)

```bash
pip install "lerobot[dynamixel]"
```

> **참고**: 두 방법 모두 CLI 명령어(`lerobot-find-port`, `lerobot-calibrate` 등)가 설치된다. 소스 설치 시 `python lerobot/scripts/...` 형태로도 실행 가능하다.

### 포트 찾기

```bash
lerobot-find-port
```

#### macOS 출력 예시

```
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081', '/dev/tty.usbmodem575E0031751']
Remove the USB cable from your MotorsBus and press Enter when done.
...
The port of this MotorsBus is /dev/tty.usbmodem575E0032081
```

- Leader 암: `/dev/tty.usbmodem<SERIAL_A>`
- Follower 암: `/dev/tty.usbmodem<SERIAL_B>`

#### Linux 출력 예시

```
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the USB cable from your MotorsBus and press Enter when done.
...
The port of this MotorsBus is /dev/ttyACM1
```

- Leader 암: `/dev/ttyACM0` 또는 `/dev/ttyACM1`
- Follower 암: 나머지 포트

### Linux USB 권한 설정

USB 장치 접근 권한이 필요하다. **보안상 `dialout` 그룹 사용을 권장**한다:

#### 권장: dialout 그룹 추가 (영구적, 안전)

```bash
# 현재 사용자를 dialout 그룹에 추가
sudo usermod -aG dialout $USER

# 로그아웃 후 다시 로그인하여 적용
# 또는 재부팅
```

#### 대안: udev 규칙 추가 (영구적, 안전)

```bash
# udev 규칙 파일 생성 (dialout 그룹 기반, 보안 권장)
# Waveshare 보드 및 일반 USB-시리얼 어댑터용
cat << 'EOF' | sudo tee /etc/udev/rules.d/99-dynamixel.rules
# Waveshare Serial Bus Servo Driver (CH340/CH341)
SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", GROUP="dialout", MODE="0660"
SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="5523", GROUP="dialout", MODE="0660"
# FTDI USB-시리얼 어댑터
SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", GROUP="dialout", MODE="0660"
# CP210x USB-시리얼 어댑터
SUBSYSTEM=="tty", ATTRS{idVendor}=="10c4", GROUP="dialout", MODE="0660"
# Generic CDC ACM 장치
SUBSYSTEM=="tty", KERNEL=="ttyACM*", GROUP="dialout", MODE="0660"
EOF

# udev 규칙 리로드
sudo udevadm control --reload-rules
sudo udevadm trigger
```

> **참고**: 위 규칙은 `dialout` 그룹 사용자에게만 접근을 허용한다. 반드시 사용자를 `dialout` 그룹에 추가해야 한다.

#### 임시 해결 (개발/테스트용, 보안 주의)

```bash
# 주의: world-writable 권한으로 보안 위험 존재
# 개발 환경에서만 임시로 사용

# CDC ACM 장치 (일반적으로 Koch 보드)
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1

# USB-시리얼 어댑터 (일부 환경)
sudo chmod 666 /dev/ttyUSB0
sudo chmod 666 /dev/ttyUSB1
```

> **보안 경고**: `chmod 666`은 모든 사용자에게 장치 읽기/쓰기 권한을 부여한다. 프로덕션 환경에서는 `dialout` 그룹 또는 udev 규칙을 사용하라.

### 모터 설정

```bash
# Follower 암 모터 ID 설정
# macOS 예시
lerobot-setup-motors \
    --robot.type=koch_follower \
    --robot.port=/dev/tty.usbmodem575E0031751

# Linux 예시
lerobot-setup-motors \
    --robot.type=koch_follower \
    --robot.port=/dev/ttyACM0

# Leader 암 모터 ID 설정
# macOS 예시
lerobot-setup-motors \
    --teleop.type=koch_leader \
    --teleop.port=/dev/tty.usbmodem575E0032081

# Linux 예시
lerobot-setup-motors \
    --teleop.type=koch_leader \
    --teleop.port=/dev/ttyACM1
```

### 캘리브레이션

캘리브레이션은 **뉴럴 네트워크의 로봇 간 전이를 위해 필수적**이다. 한 로봇에서 학습된 정책이 다른 로봇에서 작동하려면 동일한 물리적 위치에서 동일한 값을 반환해야 한다.

```bash
# Follower 암 캘리브레이션
# <PORT>를 실제 포트로 교체 (예: /dev/ttyACM0 또는 /dev/tty.usbmodem...)
lerobot-calibrate \
    --robot.type=koch_follower \
    --robot.port=<PORT> \
    --robot.id=my_koch_follower

# Leader 암 캘리브레이션
lerobot-calibrate \
    --teleop.type=koch_leader \
    --teleop.port=<PORT> \
    --teleop.id=my_koch_leader
```

### 텔레오퍼레이션 및 데이터 수집

> **중요**: 아래 명령어에서 `<FOLLOWER_PORT>`와 `<LEADER_PORT>`를 실제 포트로 교체하라:
> - macOS: `/dev/tty.usbmodem...`
> - Linux: `/dev/ttyACM0`, `/dev/ttyACM1` 또는 `/dev/ttyUSB0`, `/dev/ttyUSB1`

> **참고**: `robot.type`과 `teleop.type`은 위 모터 설정/캘리브레이션과 동일하게 `koch_follower`와 `koch_leader`를 사용한다.

#### 소스 설치 시 (lerobot 디렉토리에서)

```bash
# 텔레오퍼레이션 테스트 (Leader로 Follower 제어)
python lerobot/scripts/control_robot.py teleoperate \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

# 데이터셋 기록
python lerobot/scripts/control_robot.py record \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --repo-id=your-username/koch-picking-task

# 정책 학습
python lerobot/scripts/train.py \
    --policy.type=act \
    --dataset.repo_id=your-username/koch-picking-task
```

#### pip 설치 시 (모듈 실행)

```bash
# 텔레오퍼레이션 테스트 (Leader로 Follower 제어)
python -m lerobot.scripts.control_robot teleoperate \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

# 데이터셋 기록
python -m lerobot.scripts.control_robot record \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --repo-id=your-username/koch-picking-task

# 정책 학습
python -m lerobot.scripts.train \
    --policy.type=act \
    --dataset.repo_id=your-username/koch-picking-task
```

---

## VLA 연구 활용

### Imitation Learning 데모

Alexander Koch는 Koch 로봇 암으로 다음 태스크들을 성공적으로 시연했다:

1. **Simple Picking Task**: 카메라 이미지와 관절 상태만으로 물체 집기 학습
2. **Clothes Folding**: 듀얼 암 구성으로 옷 접기 태스크 수행
3. **Multi-Robot Control**: 단일 뉴럴 네트워크가 복수의 로봇 암을 언어 조건부로 제어

### 지원 정책 아키텍처

Koch + LeRobot 조합으로 다음 정책들을 학습할 수 있다:

| 정책 | 설명 |
|------|------|
| ACT | Action Chunking with Transformers |
| Diffusion Policy | 확산 모델 기반 정책 |
| SmolVLA | 450M 경량 VLA 모델 |
| TDMPC | Model-based RL |

### 커뮤니티 데이터 수집

Koch의 저가 구조는 분산된 커뮤니티 데이터 수집을 가능하게 한다:

- **HuggingFace Hub**: `lerobot` 태그로 487+ 커뮤니티 데이터셋
- **Open X-Embodiment**: 대규모 로봇 데이터셋 기여 가능
- **Tau Robotics**: 수백만 로봇의 현실 세계 학습 비전

---

## 트러블슈팅

| 문제 | 해결 방법 |
|------|-----------|
| 모터 인식 안됨 | USB 케이블, 전원 케이블, 3핀 케이블 확인 |
| Waveshare 보드 인식 안됨 | 점퍼가 'B' 채널(USB)에 설정되어 있는지 확인 |
| 모터 ID 충돌 | 한 번에 하나의 모터만 연결하여 ID 설정 |
| Linux 권한 오류 | `dialout` 그룹에 사용자 추가 또는 udev 규칙 설정 (위 참조) |
| 캘리브레이션 실패 | 각 관절을 전체 가동 범위로 천천히 이동 |
| 토크 부족 | 전원 공급 확인, 12V가 제대로 공급되는지 점검 |

---

## SO-100/SO-101과의 비교

| 항목 | Koch v1.1 | SO-100/SO-101 |
|------|-----------|---------------|
| **모터** | Dynamixel XL430/XL330 | Feetech STS3215 |
| **비용** | ~$440 (쌍) | ~$230 (쌍) |
| **토크** | 더 높음 | 보통 |
| **정밀도** | 더 높음 | 보통 |
| **조립 난이도** | 중간 | 낮음 |
| **커뮤니티** | 성장 중 | 활발 |
| **LeRobot 지원** | 공식 지원 | 공식 지원 |

**선택 가이드**:
- **예산 우선**: SO-100/SO-101 선택
- **성능 우선**: Koch v1.1 선택
- **둘 다**: LeRobot 호환으로 동일 코드 사용 가능

---

## References

### 공식 리소스
- [Koch v1.1 GitHub (Jess Moss)](https://github.com/jess-moss/koch-v1-1)
- [Original Low Cost Robot GitHub (Alexander Koch)](https://github.com/AlexanderKoch-Koch/low_cost_robot)
- [LeRobot Koch Documentation](https://huggingface.co/docs/lerobot/en/koch)
- [Koch v1.1 Assembly Video Tutorial](https://youtu.be/8nQIg9BwwTk)

### 구매처
- [ROBOTIS - Koch v1.1 Leader](https://robotis.us/koch-v1-1-low-cost-robot-arm-leader/)
- [ROBOTIS - Koch v1.1 Follower](https://www.robotis.us/koch-v1-1-low-cost-robot-arm-follower/)
- [PartaBot - Koch v1.1](https://partabot.com/products/low-cost-robot-arm-koch-v1-0-leader-arm)

### 3D 프린트 파일
- [MakerWorld - Koch V1.1 Follower](https://makerworld.com/en/models/692107-koch-v1-1-follower-robot)
- [MakerWorld - Koch V1.1 Leader](https://makerworld.com/en/models/692099-koch-v1-1-leader-robot)

### 관련 프로젝트
- [Tau Robotics](https://tau-robotics.com)
- [LeRobot Framework](https://github.com/huggingface/lerobot)
- [Alexander Koch Twitter](https://x.com/alexkoch_ai)

### 커뮤니티
- [HuggingFace Discord](https://discord.com/invite/s3KuuzsPFb)
- [Robots That Exist - Koch Info](https://robotsthatexist.com/robots/koch-v1-1)

---

## See Also

- [하드웨어 목록](../index)
- [LeRobot Arms (SO-100/SO-101)](lerobot-arms)
- [SmolVLA](../../models/smolvla)
- [ACT Policy](../../models/act)
- [Diffusion Policy](../../models/diffusion-policy)
