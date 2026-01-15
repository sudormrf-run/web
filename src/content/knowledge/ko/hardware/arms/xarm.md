---
title: UFACTORY xArm 시리즈
description: 접근성 높은 연구/교육용 로봇 암 - Franka의 가성비 대안
tags: [xarm, ufactory, cobot, research, arm, vla, open-x-embodiment, lerobot]
category: hardware
last_verified: 2025-01

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# UFACTORY xArm 시리즈

> Home > Hardware > Arms > xArm

<!-- Image pending: ![xArm](../../assets/hardware/arms/xarm.png) -->

> **Note**: 가격 및 사양은 지역과 시점에 따라 변동될 수 있습니다. 최신 정보는 [UFACTORY 공식 사이트](https://www.ufactory.us/)를 참조하세요.

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | UFACTORY (중국, 심천) |
| 설립연도 | 2013년 [^1] |
| 유형 | 협동 로봇 (Collaborative Robot) |
| 특징 | 가성비, 연구 접근성, 오픈소스 SDK |
| 글로벌 판매 | 80+ 국가 (공식 발표 기준) [^1] |

---

## 회사 소개

UFACTORY는 2013년 중국 심천(Shenzhen)에서 설립된 로봇 제조 스타트업이다 [^1]. 세계 최초의 데스크톱 오픈소스 로봇 암인 **uArm**을 Kickstarter에서 출시하며 명성을 얻었으며, uArm Swift PRO는 크라우드펀딩 플랫폼에서 100만 달러 이상의 후원을 받았다 [^2].

심천의 제조업 생태계를 활용하여 산업용 기술을 연구/교육 시장에 접근 가능한 가격으로 제공하는 것이 회사의 핵심 전략이다. 투자자로는 **Tencent AI Accelerator**와 **Sinovation Ventures**가 있다 [^2].

---

## 핵심 의의

### 연구 접근성의 민주화

xArm 시리즈는 로봇 연구의 진입 장벽을 크게 낮춘 제품군이다:

1. **가격 경쟁력**: 기존 연구용 로봇 대비 약 1/2~1/3 가격대로 유사한 사양 제공 [^3]
2. **연구급 정밀도**: 반복정밀도 기준 연구 수준의 manipulation 태스크 수행 가능
3. **7축 옵션**: xArm 7은 7 자유도로 인간 팔과 유사한 유연성 제공
4. **완전한 SDK 지원**: Python, C++, ROS/ROS2 공식 지원 [^4]

### Franka와의 비교

| 항목 | Franka Research 3 | xArm 7 |
|------|-------------------|--------|
| 가격대 | 고가 (연구기관 견적) | 중저가 (~$10,000대) [^3] |
| 페이로드 | 3kg [^5] | 3.5kg [^3] |
| 반복정밀도 | 0.1mm [^5] | 0.1mm [^3] |
| 자유도 | 7 DoF | 7 DoF |
| 토크 센싱 | 전 관절 내장 [^5] | 선택적 (외부 센서) |
| ROS 지원 | ROS, ROS 2 | ROS, ROS 2 [^4] |

> **참고**: Franka Emika는 2023년 도산 신청 후 Agile Robots에 인수되었습니다. 현재 Franka Robotics로 운영 중이며 지원 상태는 변동될 수 있습니다. 최신 정보는 공식 채널을 확인하세요.

Franka는 전 관절 토크 센싱 등 하드웨어 기능에서 우위가 있으나, xArm은 접근 가능한 가격과 안정적인 지원으로 연구용 대안으로 활용되고 있다.

---

## 제품 라인업

> 아래 사양은 UFACTORY 공식 자료 기준이며, 정확한 사양은 [공식 제품 페이지](https://www.ufactory.us/)를 참조하세요.

| 모델 | 축 | 페이로드 | 리치 | 반복정밀도 | 최대 속도 | 무게 | 가격대(USD) |
|------|-----|---------|------|-----------|----------|------|-----------|
| **Lite 6** | 6 | 600g | 440mm | 0.5mm | 500mm/s | ~7kg | $2,999~ [^6] |
| **xArm 5** | 5 | 3kg | 700mm | 0.1mm | 330mm/s | ~11kg | $5,000~ [^3] |
| **xArm 6** | 6 | 5kg | 700mm | 0.1mm | 1m/s | ~12kg | $8,000~ [^3] |
| **xArm 7** | 7 | 3.5kg | 700mm | 0.1mm | 1m/s | ~14kg | $10,000~ [^3] |
| **UFACTORY 850** | 6 | 5kg | 850mm | 0.02mm | 1m/s | ~20kg | $8,999~ [^7] |

### 모델별 특징

#### Lite 6
- **입문용/교육용**: 가장 저렴한 가격으로 로봇 연구 시작
- **경량 설계**: 이동 설치 용이
- **통합 컨트롤 박스**: 공간 절약 설계
- **적합 용도**: 랩 자동화, 교육, 터치스크린 테스트

#### xArm 5
- **5축 엔트리 모델**: 산업용 로봇의 입문 버전
- **3kg 페이로드**: 대부분의 연구 manipulation 태스크 수행 가능
- **가성비**: 시리즈 중 가장 경제적인 풀사이즈 모델

#### xArm 6
- **6축 표준 모델**: 가장 범용적인 선택
- **5kg 페이로드**: 시리즈 최고 페이로드
- **1m/s 속도**: 빠른 작업 수행

#### xArm 7
- **7축 프리미엄 모델**: 인간 팔과 유사한 자유도
- **Redundant Joint**: 장애물 회피, 특이점 회피에 유리
- **AI/CV 연구 최적화**: VLA 모델 학습에 이상적

#### UFACTORY 850
- **최신 플래그십 모델**: 확장된 작업 영역
- **확장된 리치**: 850mm로 더 넓은 작업 영역
- **최고 정밀도**: 시리즈 최고 수준 (상세 사양은 상단 표 참조) [^7]
- **산업급 하모닉 드라이브**: 24/7 운용 설계
- **DC/AC 옵션**: 모바일 플랫폼(DC) 및 고정 설치(AC) 모두 지원

### 공통 특징

- **탄소 섬유 + 알루미늄 구조**: 경량화 설계
- **산업용 하모닉 드라이브**: 내구성과 정밀도
- **멀티턴 앱솔루트 엔코더**: 정밀 위치 제어
- **웹 기반 UFACTORY Studio**: Windows, macOS, Ubuntu 지원
- **Blockly 기반 비주얼 프로그래밍**: 코딩 없이 로봇 제어 가능

---

## 소프트웨어 및 SDK

### 공식 SDK

| SDK | 설명 | 링크 |
|-----|------|------|
| **xArm-Python-SDK** | Python 기반 제어 API | [GitHub](https://github.com/xArm-Developer/xArm-Python-SDK) |
| **xArm-CPLUS-SDK** | C++ 기반 제어 API | [GitHub](https://github.com/xArm-Developer/xArm-CPLUS-SDK) |
| **xarm_ros** | ROS 1 패키지 | [GitHub](https://github.com/xArm-Developer/xarm_ros) |
| **xarm_ros2** | ROS 2 패키지 (Gazebo, MoveIt 지원) | [GitHub](https://github.com/xArm-Developer/xarm_ros2) |

### 코드 예시

```python
from xarm.wrapper import XArmAPI

arm = None  # 연결 실패 시 cleanup을 위해 초기화

try:
    # 로봇 연결 (IP 주소는 환경에 맞게 수정)
    arm = XArmAPI('192.168.1.113')  # 또는 시리얼: 'COM5'

    # 초기화
    arm.motion_enable(enable=True)
    arm.set_mode(0)
    arm.set_state(0)

    # 위치 이동 (단위: mm, degree)
    arm.set_position(x=300, y=0, z=200, roll=180, pitch=0, yaw=0)

except Exception as e:
    print(f"Error: {e}")
    if arm and arm.connected:
        arm.emergency_stop()  # 비상 정지

finally:
    # 정리: 연결된 경우에만 cleanup 수행
    if arm and arm.connected:
        arm.motion_enable(enable=False)
        arm.disconnect()
```

> **주의**: 실제 로봇 제어 시 안전 절차를 숙지하고, 비상 정지 버튼을 항상 접근 가능한 위치에 두세요. 상세한 안전 가이드는 [UFACTORY 문서](https://docs.ufactory.cc/)를 참조하세요.

### ROS 2 지원 기능

- MoveIt 2 통합
- Gazebo 시뮬레이션
- 속도 제어 모드 (펌웨어 1.6.8+)
- RealSense D435i 연동 데모

---

## VLA 연구 활용

### Open X-Embodiment 데이터셋

xArm은 **Open X-Embodiment** 데이터셋의 주요 로봇 플랫폼 중 하나이다 [^8]:

- 데이터셋에 포함된 22개 로봇 플랫폼 중 하나 (Franka, WidowX, Google Robot 등과 함께)
- 단일암 매니퓰레이터, 양팔 로봇, 모바일 플랫폼 등 다양한 형태 포함
- 총 100만+ trajectories, 527개 manipulation skills (21개 기관 참여) [^8]

> **출처**: Open X-Embodiment 논문 (arXiv:2310.08864) 기준. 데이터셋은 지속적으로 업데이트되므로 최신 수치는 [공식 프로젝트 페이지](https://robotics-transformer-x.github.io/)를 참조하세요.

### RT-X 및 VLA 모델

Open X-Embodiment 데이터로 학습된 주요 모델들:

| 모델 | 설명 |
|------|------|
| **RT-1-X** | Cross-embodiment generalist policy |
| **RT-2-X** | Vision-Language-Action 모델 |
| **OpenVLA** | 7B 파라미터 오픈소스 VLA [^9] |

xArm을 포함한 다양한 로봇 데이터는 이러한 모델들의 **cross-embodiment generalization** 연구에 활용된다.

### LeRobot 프레임워크

Hugging Face의 **LeRobot** 프로젝트에서 xArm 관련 데이터셋 제공 [^10]:

- **사전 학습 모델**: Diffusion Policy, ACT, VQ-BeT 등
- **표준화된 데이터 로더**: 다양한 로봇 포맷 지원
- **Hugging Face Hub 데이터셋**:
  - `lerobot/xarm_lift_medium`
  - `lerobot/xarm_push_medium_replay_image`

```python
# LeRobot에서 xArm 데이터셋 로드 예시
from datasets import load_dataset

dataset = load_dataset("lerobot/xarm_lift_medium")
print(dataset)
```

### 연구 활용 사례

1. **Imitation Learning**: 시연 데이터 수집 및 정책 학습
2. **Sim-to-Real Transfer**: Gazebo 시뮬레이션에서 실제 로봇으로 전이
3. **Multi-task Learning**: 다양한 manipulation 태스크 학습
4. **Foundation Model Fine-tuning**: OpenVLA 등 사전학습 모델 파인튜닝

---

## 액세서리 및 주변기기

| 액세서리 | 용도 |
|---------|------|
| xArm Gripper | 기본 2핑거 그리퍼 |
| xArm Vacuum Gripper | 진공 흡착 그리퍼 |
| BIO Gripper | 유연 그리핑 |
| 6축 Force Torque Sensor | 힘/토크 피드백 |
| Linear Motor | 선형 확장 레일 |

---

## 구매 가이드

### 연구 목적별 추천

| 목적 | 추천 모델 | 이유 |
|------|---------|------|
| 교육/입문 | Lite 6 | 최저가, 경량 |
| 일반 연구 | xArm 6 | 균형잡힌 성능과 가격 |
| VLA/AI 연구 | xArm 7 | 7DoF 유연성, Franka 대안 |
| 산업 응용 | UFACTORY 850 | 최고 정밀도, 확장 리치 |

### 구매처

- **공식 사이트**: [UFACTORY US](https://www.ufactory.us/)
- **글로벌 유통**: RobotShop, Top3DShop, Generation Robots
- **한국**: 공식 사이트 문의 또는 국내 유통사 확인

---

## References

### 공식 리소스

- [UFACTORY 공식 사이트](https://www.ufactory.us/)
- [UFACTORY 기술 문서](https://docs.ufactory.cc/)
- [xArm Python SDK - GitHub](https://github.com/xArm-Developer/xArm-Python-SDK)
- [xArm ROS 2 패키지 - GitHub](https://github.com/xArm-Developer/xarm_ros2)
- [UFACTORY GitHub Organization](https://github.com/xArm-Developer)

### 연구 논문 및 프로젝트

- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models (arXiv:2310.08864)](https://arxiv.org/abs/2310.08864)
- [Open X-Embodiment 프로젝트 페이지](https://robotics-transformer-x.github.io/)
- [OpenVLA - GitHub](https://github.com/openvla/openvla)
- [LeRobot - Hugging Face](https://github.com/huggingface/lerobot)

### 추가 자료

- [xArm - ROS Wiki](https://robots.ros.org/xarm/)
- [UFACTORY - Crunchbase](https://www.crunchbase.com/organization/ufactory)

---

## Footnotes

[^1]: UFACTORY 공식 정보 및 Crunchbase 프로필 기준
[^2]: Kickstarter 캠페인 및 투자 정보 (Tracxn, CBInsights)
[^3]: UFACTORY 공식 사이트 및 유통사(RobotShop, Top3DShop) 기준 (2025년 1월 확인). 가격은 변동될 수 있음
[^4]: UFACTORY 공식 문서 (docs.ufactory.cc)
[^5]: Franka Robotics 공식 사양
[^6]: UFACTORY Lite 6 공식 제품 페이지
[^7]: UFACTORY 850 공식 제품 페이지 및 RobotShop
[^8]: Open X-Embodiment: Robotic Learning Datasets and RT-X Models (arXiv:2310.08864)
[^9]: OpenVLA GitHub 및 관련 논문
[^10]: LeRobot GitHub 및 Hugging Face Hub

---

## See Also

- [하드웨어 목록](../index)
- [Franka Emika](franka)
- [WidowX](widowx)
