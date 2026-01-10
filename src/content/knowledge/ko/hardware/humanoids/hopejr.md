---
title: HopeJR
description: HuggingFace와 The Robot Studio가 공동 개발한 저가 오픈소스 풀사이즈 휴머노이드 로봇
tags: [hopejr, huggingface, the-robot-studio, low-cost, open-source, humanoid, lerobot, 3d-printed, teleoperation, dexterous-hands]
category: hardware
last_updated: 2026-01-09
---

# HopeJR

> Home > Hardware > Humanoids > HopeJR

<!-- 이미지 플레이스홀더: 실제 이미지 파일이 없으면 이 줄을 제거하거나 이미지를 추가하세요 -->
<!-- Image pending: ![HopeJR](../../assets/hardware/humanoids/hopejr.png) -->

---

## Overview

HopeJR은 HuggingFace와 The Robot Studio가 공동 개발한 오픈소스 풀사이즈 휴머노이드 로봇이다. 2025년 5월 29일에 공식 발표되었으며[^1], 약 $3,000이라는 획기적인 가격으로 휴머노이드 로봇의 대중화를 목표로 한다.

| 항목 | 스펙 | 출처 |
|------|------|------|
| 개발 | HuggingFace + The Robot Studio | [^1] |
| 설계자 | Rob Knight (The Robot Studio), Martino Russi (HuggingFace) | [^2] |
| DoF | 66 (66개의 독립적인 자유도) | [^1][^2] |
| 구조 | 주로 3D 프린트 플라스틱 부품 | [^2] |
| 목표 가격 | ~$3,000 (추정, 관세 및 지역에 따라 변동 가능) | [^1] |
| 출시 예정 | 2025년 말 ~ 2026년 초 (발표 당시 기준) | [^1] |
| 라이선스 | Apache 2.0 (소프트웨어) | [^2] |

> **Note**: 가격 및 출시 일정은 2025년 5월 발표 시점 기준이며, 변경될 수 있습니다. 최신 정보는 [공식 GitHub 저장소](https://github.com/TheRobotStudio/HOPEJr)를 참조하세요.

---

## 핵심 의의

HopeJR의 등장은 휴머노이드 로봇 연구의 **민주화(Democratization)** 를 상징한다.

### 가격 비교 (2025년 5월 기준)

| 로봇 | 가격 | 비고 | 출처 |
|------|------|------|------|
| **HopeJR** | **~$3,000** | 오픈소스 DIY | [^1] |
| Unitree G1 | ~$16,000 | 상용 제품 | [^1] |
| Tesla Optimus | $20,000+ | 미확정 목표가 | [^1] |

> **Note**: 위 가격 정보는 TechCrunch 보도 기준입니다. 실제 판매가는 변동될 수 있습니다.

HopeJR은 기존 상용 휴머노이드 로봇보다 현저히 낮은 가격대를 목표로 하여, 대학 연구실, 스타트업, 개인 개발자 모두가 풀사이즈 휴머노이드를 실험할 수 있는 환경을 제공한다.

### 연구 생태계 확장

- **VLA 데이터 수집**: HuggingFace Hub를 통한 대규모 데이터셋 공유
- **모델 학습**: LeRobot을 통한 end-to-end 학습 파이프라인
- **재현 가능한 연구**: 누구나 동일한 하드웨어로 실험 가능

> "로봇 공학이 소수의 대기업에 의해 위험한 블랙박스 시스템으로 지배되지 않도록, 누구나 조립하고 재구성하며 작동 원리를 이해할 수 있는 오픈소스 로봇이 중요하다."
> — Clem Delangue, HuggingFace CEO[^1]

---

## 오픈소스 철학

HopeJR은 완전한 오픈소스 프로젝트로 설계되었다[^2].

### 공개 범위

| 구성 요소 | 공개 여부 | 설명 |
|-----------|----------|------|
| 하드웨어 설계 | O | CAD 파일, BOM (Bill of Materials) |
| 3D 프린트 파일 | O | STL 파일 제공 |
| URDF 모델 | O | 시뮬레이션용 로봇 모델 |
| 소프트웨어 | O | Apache 2.0 라이선스 |
| 펌웨어 | O | 커스텀 PCB 포함 |

### 설계 철학

1. **DIY 조립 가능**: 납땜 없이 조립 가능한 커스텀 PCB 설계[^2]
2. **저비용 부품**: 3D 프린트 가능한 플라스틱 구조
3. **모듈러 설계**: 부품 교체 및 수리 용이
4. **AI 보정 활용**: 저비용 하드웨어의 "탄력성"을 AI로 보완

> "저비용 하드웨어는 본질적으로 덜 견고하고 '탄력적(bouncy)'이지만, AI 소프트웨어의 성능 향상을 활용하여 이를 보완할 수 있다. 이는 인간과의 상호작용에서 더 안전할 수 있다."
> — The Robot Studio[^2]

---

## 주요 기능

### 덱스터러스 핸드

- 손가락당 다자유도 (Underactuated DOF)
- 정밀 파지(grasping) 지원
- 개선된 손가락 설계로 다양한 물체 조작 가능[^2]

### 보행 능력

- 이족 보행 (bipedal walking)
- 66 DoF를 활용한 자연스러운 동작[^1]

### 원격 조작 (Teleoperation)

- **센서 장갑**: 1:1 조인트 매핑으로 손 동작 추적[^3]
- **엑소스켈레톤**: 팔 동작 제어용 외골격[^3]
- **Diametric Hall Encoder**: 각 관절의 정밀한 각도 측정[^3]
- Project Homunculus 기반 텔레옵 키트[^3]

---

## LeRobot 통합

HopeJR은 HuggingFace의 LeRobot 플랫폼과 통합된다[^3].

> **Important**: 아래 명령어와 설정은 LeRobot 공식 문서 기준입니다. 버전 업데이트에 따라 변경될 수 있으므로, 최신 정보는 [LeRobot HopeJR 공식 문서](https://huggingface.co/docs/lerobot/en/hope_jr)를 참조하세요.

### 설치 (2025년 5월 문서 기준)

LeRobot 저장소를 클론한 후 HopeJR 의존성과 함께 설치합니다:

```bash
# 1. LeRobot 저장소 클론
git clone https://github.com/huggingface/lerobot.git
cd lerobot

# 2. 가상환경 생성 (권장)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. HopeJR 의존성 포함 설치
pip install -e ".[hopejr]"
```

### 지원 기능[^3]

| 기능 | 명령어 | 설명 |
|------|--------|------|
| 포트 찾기 | `lerobot-find-port` | USB 장치 포트 검색 |
| 캘리브레이션 | `lerobot-calibrate` | 손, 팔, 장갑, 엑소스켈레톤 캘리브레이션 |
| 텔레오퍼레이션 | `lerobot-teleoperate` | 실시간 원격 제어 |
| 데이터 녹화 | `lerobot-record` | 데모 데이터 수집 |
| 재생 | `lerobot-replay` | 녹화된 에피소드 재생 |
| 학습 | `lerobot-train` | 정책 학습 (ACT 등) |

### 워크플로우

```
[텔레오퍼레이션] -> [데이터 녹화] -> [HuggingFace Hub 업로드]
                                         |
                                         v
[로봇 추론] <- [정책 학습] <- [데이터셋 다운로드]
```

### 캘리브레이션 구조[^3]

**손 캘리브레이션**:
- 엄지: CMC, MCP, PIP, DIP
- 검지~새끼: Radial flexor, Ulnar flexor, PIP/DIP

**팔 캘리브레이션**:
- 어깨: pitch, yaw, roll
- 팔꿈치: flex
- 손목: pitch, yaw, roll

---

## 텔레오퍼레이션 시스템

### 센서 장갑 (Homunculus Glove)

센서 장갑은 각 손가락 관절마다 Diametric Hall Encoder를 장착하여 정밀한 각도 측정이 가능하다[^3].

```bash
# 장갑 캘리브레이션 예시 (포트는 lerobot-find-port로 확인)
lerobot-calibrate \
    --teleop.type=homunculus_glove \
    --teleop.port=/dev/tty.usbmodemXXXXX \
    --teleop.id=red \
    --teleop.side=right
```

### 엑소스켈레톤 (Homunculus Arm)

팔 제어용 외골격으로, 7 DoF (어깨 3 + 팔꿈치 1 + 손목 3)의 동작을 1:1로 매핑한다[^3].

```bash
# 엑소스켈레톤 캘리브레이션 예시 (포트는 lerobot-find-port로 확인)
lerobot-calibrate \
    --teleop.type=homunculus_arm \
    --teleop.port=/dev/tty.usbmodemXXXXX \
    --teleop.id=black
```

---

## 타임라인

| 시점 | 이벤트 | 출처 |
|------|--------|------|
| 2024년 | LeRobot 플랫폼 출시 | [^4] |
| 2025년 4월 | HuggingFace, Pollen Robotics 인수 | [^4] |
| 2025년 5월 29일 | HopeJR 공식 발표 | [^1] |
| 2025년 말 (목표) | 첫 유닛 출하 예정 | [^1] |
| 2026년 초 (목표) | 본격 배송 예정 | [^1] |

> **Note**: 출하 일정은 발표 당시 목표이며, [공식 웹사이트](https://github.com/TheRobotStudio/HOPEJr)에서 최신 정보를 확인하세요.

---

## 관련 제품

### Reachy Mini

HuggingFace가 함께 발표한 데스크탑 로봇으로, $250~$300에 출시 예정이다 (관세에 따라 변동 가능)[^1]. 머리 움직임, 음성 인식, AI 테스트 플랫폼으로 활용 가능하다.

---

## See Also

- [하드웨어 목록](../index.md)
- [LeRobot Arms](../arms/lerobot-arms.md)
- [Reachy](reachy.md)
- [SmolVLA](../../models/smolvla.md)

---

## References

[^1]: TechCrunch, "Hugging Face unveils two new humanoid robots" (2025-05-29) - https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/

[^2]: GitHub, "TheRobotStudio/HOPEJr" - https://github.com/TheRobotStudio/HOPEJr

[^3]: HuggingFace, "LeRobot HopeJR Documentation" - https://huggingface.co/docs/lerobot/en/hope_jr

[^4]: HuggingFace Blog, "Pollen Robotics Acquisition" - https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition

### 추가 자료

- [Analytics Insight: Meet HopeJR](https://www.analyticsinsight.net/news/meet-hopejr-the-open-source-humanoid-from-hugging-face-in-just-3000)
- [IOT World Today: Hugging Face Unveils $3,000 Humanoid Robot](https://www.iotworldtoday.com/robotics/hugging-face-unveils-3-000-humanoid-robot-that-can-walk-pickup-things)
