---
title: LeRobot Arms (SO-100/SO-101)
description: HuggingFace와 TheRobotStudio가 협력하여 개발한 오픈소스 저가 연구용 로봇 암
tags: [lerobot, so100, so101, low-cost, 3d-print, open-source, feetech, sts3215, smolvla, vla]
category: hardware
created: 2025-05-01
updated: 2026-01-09
---

# LeRobot Arms (SO-100/SO-101)

> Home > Hardware > Arms > LeRobot Arms

<!-- Image pending: ![LeRobot SO101](../../assets/hardware/arms/lerobot-so101.png) -->

---

## Overview

LeRobot SO-100/SO-101은 **HuggingFace**와 **TheRobotStudio**가 공동 개발한 오픈소스 로봇 암이다. 약 $130의 저렴한 부품 비용과 3D 프린팅 기반 설계로, 누구나 접근 가능한 로보틱스 연구 플랫폼을 제공한다.

| 항목 | 내용 |
|------|------|
| **개발** | HuggingFace + TheRobotStudio |
| **라이선스** | Apache 2.0 |
| **유형** | 저가 3D 프린트 로봇 암 |
| **DoF** | 6 (Base, Shoulder, Elbow, Wrist Flex, Wrist Roll, Gripper) |
| **부품 비용** | ~$130 (단일 암) / ~$230 (Leader-Follower 쌍) |
| **공개 시기** | SO-100: 2024, SO-101: 2025년 5월 |

---

## 핵심 의의

### 로보틱스 연구의 민주화

LeRobot SO-100/SO-101의 가장 중요한 기여는 **로보틱스 연구의 진입 장벽을 획기적으로 낮춘 것**이다.

1. **초저가 하드웨어**: 기존 연구용 로봇 암이 수천~수만 달러인 반면, $130로 완성 가능
2. **완전 오픈소스**: CAD 파일, BOM, 펌웨어, 학습 프레임워크 모두 공개
3. **3D 프린팅 기반**: 산업용 제조 장비 없이 일반 FDM 프린터로 제작 가능
4. **커뮤니티 생태계**: HuggingFace Hub를 통한 데이터셋/모델 공유

이를 통해 대학 연구실, 스타트업, 개인 연구자도 VLA(Vision-Language-Action) 연구에 참여할 수 있게 되었다. 특히 **SmolVLA**와의 연동으로 소비자급 GPU에서도 end-to-end 로보틱스 학습이 가능해졌다.

---

## SO-100 vs SO-101 상세 비교

| 항목 | SO-100 | SO-101 |
|------|--------|--------|
| **출시** | 2024 | 2025년 5월 |
| **상태** | Deprecated | 현재 권장 버전 |
| **배선** | Joint 3에서 단선 문제 발생 | 개선된 배선으로 단선 방지 |
| **조립** | 기어 제거 작업 필요 | 기어 제거 불필요, 조립 간소화 |
| **Leader 암 모터** | 동일 기어비 사용 | 관절별 최적화된 기어비 |
| **가동 범위** | 배선으로 인한 제한 | 배선 개선으로 제한 해소 |
| **RL 지원** | 제한적 | Leader가 Follower 추종 가능 (RL 개입용) |
| **코드 호환성** | - | SO-100 코드와 호환 |

### SO-101의 주요 개선점

- **배선 안정성**: Joint 3에서의 케이블 단선 문제 완전 해결
- **조립 용이성**: 기어 제거 없이 바로 조립 가능
- **Leader 암 최적화**: 자중 지지와 조작 용이성을 위한 관절별 차별화된 기어비
- **강화학습 지원**: Leader 암이 Follower 암을 실시간 추종하여 human intervention 가능

---

## 하드웨어 스펙

> **출처 및 검증일**: 아래 사양은 [Feetech 공식 사양](https://www.seeedstudio.com/STS3215-19kg-cm-7-4V-Serial-Servo-p-6338.html) 및 [LeRobot SO-101 문서](https://huggingface.co/docs/lerobot/so101) 기준 (2025년 5월 검증). 최신 정보는 공식 문서 확인 권장.

### STS3215 서보 모터 사양

| 항목 | 7.4V 버전 | 12V 버전 |
|------|-----------|----------|
| **스톨 토크** | 16.5 kg.cm (6V) / 19.5 kg.cm (7.4V) | 30 kg.cm |
| **정격 토크** | 5 kg.cm | - |
| **인코더** | 12-bit 자기 인코더 (0-4096) | 12-bit 자기 인코더 |
| **회전 범위** | 360도 연속 회전, 멀티턴 지원 (±7회전) | 동일 |
| **통신** | TTL Serial Bus (양방향) | TTL Serial Bus |
| **기어박스** | 금속 기어 | 금속 기어 |
| **특징** | 데이지체인 연결, 과전류 보호, 온도/전압/전류 피드백 | 동일 |

### Leader 암 모터 구성 (SO-101)

| 관절 | 모터 ID | 기어비 | 용도 |
|------|---------|--------|------|
| Base (Shoulder Pan) | 1 | 1/191 | 베이스 회전 |
| Shoulder Lift | 2 | 1/345 | 어깨 들어올림 |
| Elbow Flex | 3 | 1/191 | 팔꿈치 굽힘 |
| Wrist Flex | 4 | 1/147 | 손목 굽힘 |
| Wrist Roll | 5 | 1/147 | 손목 회전 |
| Gripper | 6 | 1/147 | 그리퍼 개폐 |

### Follower 암 모터 구성

모든 6개 모터가 **1/345 기어비**의 STS3215 사용 (균일한 고토크 구성)

---

## Bill of Materials (BOM)

> **가격 정보**: 아래 가격은 [SO-ARM100 GitHub BOM](https://github.com/TheRobotStudio/SO-ARM100) 및 [Seeed Studio](https://www.seeedstudio.com/) 기준 (2025년 5월 확인). 환율 및 공급 상황에 따라 변동될 수 있음.

### Leader + Follower 쌍 (듀얼 암 구성)

| 부품 | 수량 | 미국 가격 | EU 가격 | 비고 |
|------|------|-----------|---------|------|
| STS3215 서보 (7.4V, 다양한 기어비) | 12 | $166.68 | €146.4 | Leader 6개 + Follower 6개 |
| 모터 컨트롤 보드 | 2 | $21.20 | €22.8 | 각 암당 1개 |
| USB-C 케이블 (2 pack) | 1 | $7.00 | €7.00 | |
| 전원 공급 장치 (5V) | 2 | $20.00 | €31.4 | Standard Edition 기준 |
| 테이블 클램프 (4pc) | 1 | $9.00 | €9.7 | |
| 스크류드라이버 세트 | 1 | $6.00 | €9.00 | 별 드라이버 필요 |
| **총계** | - | **~$230** | **~€226** | 3D 프린트 비용 별도 |

### 단일 Follower 암

| 부품 | 수량 | 미국 가격 |
|------|------|-----------|
| STS3215 서보 (7.4V, 1/345) | 6 | $83.34 |
| 모터 컨트롤 보드 | 1 | $10.60 |
| USB-C 케이블 | 1 | $3.50 |
| 전원 공급 장치 | 1 | $10.00 |
| 기타 (클램프, 드라이버) | 1 | $15.00 |
| **총계** | - | **~$122** |

### 구매처

- **미국**: PartaBot (조립 완제품 포함)
- **글로벌**: Seeed Studio ($220 모터 키트, 3D 프린트 파츠 +$35)
- **기타**: WowRobo, RobotShop

---

## 조립 및 제작

### 3D 프린팅 요구사항

| 항목 | 권장 사양 |
|------|-----------|
| **재료** | PLA+ (기본), PETG 또는 나일론 (고온 환경) |
| **노즐** | 0.4mm (0.2mm 레이어) 또는 0.6mm (0.4mm 레이어) |
| **인필** | 15% 이상 (하중 부위는 35% 이상) |
| **서포트** | 전체, 45도 이상 경사 제외 |
| **베드 크기** | 최소 205×250mm (Prusa) 또는 220×220mm (Ender) |

**권장 프린터**: Prusa MINI+, Creality Ender 3, Bambu Lab 시리즈

**외주 비용 참고 (EU 기준)**:
- Follower 암 단독: ~€50
- Leader + Follower 쌍: ~€105

### 조립 과정

1. **모터 사전 설정**: 각 모터에 고유 ID 및 baudrate 설정
2. **Leader 암 조립**: 관절 1~6 순차 조립, 모터 혼 부착
3. **Follower 암 조립**: 동일 과정, 모터 설치 순서 중요
4. **배선 연결**: 데이지체인 방식으로 모터 연결
5. **캘리브레이션**: 각 관절의 중점 및 가동 범위 설정
6. **카메라 장착** (선택): Follower 암에 카메라 마운트

### 전원 공급 주의사항

| 에디션 | Leader 암 | Follower 암 |
|--------|-----------|-------------|
| Standard | 5V | 5V |
| Pro | 5V | 12V |

> **주의**: Leader와 Follower의 전압 혼동 시 서보 모터 손상 위험

### 캘리브레이션

캘리브레이션은 **뉴럴 네트워크의 전이 학습을 위해 필수적**이다. 한 로봇에서 학습된 정책이 다른 로봇에서 작동하려면 동일한 물리적 위치에서 동일한 값을 반환해야 한다.

```bash
# Follower 암 캘리브레이션
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_follower

# Leader 암 캘리브레이션
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_leader
```

---

## LeRobot 생태계

### LeRobot 프레임워크

LeRobot은 HuggingFace가 개발한 **PyTorch 기반 로보틱스 학습 프레임워크**이다.

#### 설치 방법 1: PyPI (권장)

```bash
# PyPI에서 설치 (Feetech SDK 포함)
pip install "lerobot[feetech]"

# CLI 명령어 사용 (기본 설정)
lerobot teleoperate --robot.type=so101
lerobot record --robot.type=so101 --repo-id=your-username/your-dataset
lerobot train --policy.type=act --dataset.repo_id=your-username/your-dataset

# 명시적 포트/카메라 지정 (여러 장치가 있거나 기본값이 작동하지 않을 때)
lerobot teleoperate --robot.type=so101 --robot.port=/dev/ttyACM0
lerobot teleoperate --robot.type=so101 \
    --robot.port=/dev/ttyACM0 \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"
```

> **참고**: `--robot.port`는 `lerobot-find-port` 명령으로 확인할 수 있다. 카메라가 여러 개인 경우 `--robot.cameras`로 인덱스를 지정한다.

#### 설치 방법 2: 소스 빌드 (개발/커스터마이징용)

```bash
# 소스 클론 및 설치
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e ".[feetech]"

# 스크립트 직접 실행
python lerobot/scripts/control_robot.py teleoperate \
    --robot.type=so101 \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

python lerobot/scripts/control_robot.py record \
    --robot.type=so101 \
    --repo-id=your-username/your-dataset

python lerobot/scripts/train.py \
    --policy.type=act \
    --dataset.repo_id=your-username/your-dataset
```

### HuggingFace Hub 통합

- **데이터셋 공유**: `lerobot` 태그로 487+ 커뮤니티 데이터셋 공개
- **모델 공유**: 학습된 정책 모델 업로드/다운로드
- **10M+ 프레임**: SmolVLA 사전학습에 활용된 다양한 환경의 데이터

### 지원 정책 아키텍처

- **ACT (Action Chunking with Transformers)**: 기본 Imitation Learning
- **Diffusion Policy**: 확산 모델 기반 정책
- **SmolVLA**: Vision-Language-Action 모델
- **TDMPC**: Model-based RL

---

## VLA 연구 활용

### SmolVLA 연동

**SmolVLA**는 450M 파라미터의 경량 Vision-Language-Action 모델로, SO-100/SO-101과 최적화된 연동을 제공한다.

| 항목 | 내용 |
|------|------|
| **파라미터** | 450M |
| **학습 데이터** | 10M 프레임 (487 커뮤니티 데이터셋) |
| **하드웨어 요구** | 소비자급 GPU, MacBook 지원 |
| **추론 속도** | 비동기 추론으로 30% 향상, 2배 처리량 |

### SO-100/SO-101에서의 성능

SmolVLA의 커뮤니티 데이터셋 사전학습은 SO-100 실물 로봇 벤치마크에서 **성공률을 51.7%에서 78.3%로 향상**시켰다.

> **출처**: [SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics](https://arxiv.org/abs/2506.01844) (arXiv:2506.01844, 2025년 6월). 해당 수치는 task-specific training만 적용 시 51.7%, 커뮤니티 데이터셋 사전학습 추가 시 78.3%의 성공률을 보고함.

```python
# SmolVLA 파인튜닝 예시
from lerobot.common.policies.smolvla import SmolVLAPolicy

policy = SmolVLAPolicy.from_pretrained("lerobot/smolvla_base")
# 커스텀 데이터셋으로 파인튜닝
```

### 연구 활용 사례

1. **Imitation Learning**: Leader-Follower 텔레오퍼레이션으로 데모 데이터 수집
2. **강화학습**: Leader의 Follower 추종 기능으로 human-in-the-loop RL
3. **Sim2Real**: Isaac Sim/Lab과의 연동으로 시뮬레이션 학습 후 실로봇 전이
4. **멀티모달 학습**: 카메라 + 언어 명령 + 액션의 end-to-end 학습

### 듀얼 암 모바일 로봇 구성

| 구성요소 | 수량 | 용도 |
|----------|------|------|
| SO-101 암 | 2 | 양팔 매니퓰레이션 |
| LeKiwi 베이스 | 1 | 이동 플랫폼 |
| Anker 300Wh 배터리 | 1 | 전원 |
| 손목 RGB 카메라 | 2 | 시각 피드백 |
| 헤드 뎁스 카메라 (2-DoF 넥) | 1 | 환경 인식 |
| **총 비용** | - | **~$660** |

---

## 트러블슈팅

### 일반적인 문제

| 문제 | 해결 방법 |
|------|-----------|
| 모터 인식 안됨 | 전원/USB 케이블 확인, Waveshare 보드는 'B' 채널 점퍼 설정 |
| 캘리브레이션 실패 | 각 관절을 전체 가동 범위로 천천히 이동 |
| 토크 부족 | 12V 전원 공급 장치로 Follower 업그레이드 (Pro 에디션) |

### Linux USB 권한 설정 (권장 방법)

USB 시리얼 장치 접근 권한 문제는 `dialout` 그룹 추가로 해결하는 것이 가장 안전하다:

```bash
# dialout 그룹에 사용자 추가 (권장, 영구적, 가장 안전)
sudo usermod -aG dialout $USER
# 변경 적용을 위해 로그아웃 후 재로그인 필요
```

#### udev 규칙 사용 (대안)

특정 장치에 대해 더 세밀한 제어가 필요한 경우 udev 규칙을 사용할 수 있다:

```bash
# 1. USB 어댑터의 Vendor/Product ID 확인
lsusb

# 또는 실제 장치 경로로 확인 (ttyUSB0, ttyACM0 등 자신의 장치로 교체)
udevadm info -a -n /dev/ttyUSB0 | grep -E "idVendor|idProduct"
# 또는
udevadm info -a -n /dev/ttyACM0 | grep -E "idVendor|idProduct"

# 2. udev 규칙 생성 (dialout 그룹 소유, 0660 권한)
# CH340 어댑터 예시 (1a86:7523) - 자신의 어댑터 ID로 교체 필요
echo 'SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", GROUP="dialout", MODE="0660"' | \
  sudo tee /etc/udev/rules.d/99-lerobot-serial.rules

# 3. 규칙 적용
sudo udevadm control --reload-rules
sudo udevadm trigger
```

> **주의**:
> - `MODE="0666"`이나 `chmod 666`은 장치를 모든 사용자에게 쓰기 가능하게 만들어 보안상 권장되지 않는다.
> - `GROUP="dialout"`을 사용하는 udev 규칙은 **사용자가 dialout 그룹에 속해 있어야** 접근 가능하다. 위의 `usermod -aG dialout` 명령을 먼저 실행할 것.

**일반적인 USB-Serial 어댑터 ID**:
- CH340/CH341: `1a86:7523`
- CP210x: `10c4:ea60`
- FTDI: `0403:6001`

### USB 포트 찾기

```bash
lerobot-find-port
# 안내에 따라 케이블 분리/연결로 포트 식별
```

---

## References

### 공식 문서
- [LeRobot SO-101 Documentation](https://huggingface.co/docs/lerobot/so101)
- [LeRobot SO-100 Documentation](https://huggingface.co/docs/lerobot/so100) (Deprecated)
- [LeRobot GitHub Repository](https://github.com/huggingface/lerobot)
- [SO-ARM100 GitHub (TheRobotStudio)](https://github.com/TheRobotStudio/SO-ARM100)

### SmolVLA
- [SmolVLA Paper (arXiv:2506.01844)](https://arxiv.org/abs/2506.01844)
- [SmolVLA Blog Post](https://huggingface.co/blog/smolvla)
- [SmolVLA Base Model](https://huggingface.co/lerobot/smolvla_base)

### 구매처
- [Seeed Studio SO-101 Kit](https://www.seeedstudio.com/)
- [Seeed Studio Wiki - SO10x Guide](https://wiki.seeedstudio.com/lerobot_so100m/)

### 커뮤니티
- [HuggingFace Discord](https://discord.com/invite/s3KuuzsPFb)
- [LeRobot Datasets Hub](https://huggingface.co/datasets?other=lerobot)

---

## See Also

- [하드웨어 목록](../index.md)
- [SmolVLA](../../models/smolvla.md)
- [Koch](koch.md)
- [ACT Policy](../../models/act.md)
