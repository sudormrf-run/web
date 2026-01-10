---
title: Reachy Mini
description: Pollen Robotics와 Hugging Face가 공동 개발한 오픈소스 데스크톱 컴패니언 로봇
tags: [reachy, pollen, huggingface, desktop, companion, education, open-source, apache-2.0, smolvlm, raspberry-pi]
category: hardware
created: 2025-05-01
updated: 2026-01-09
---

# Reachy Mini

> Home > Hardware > Misc > Reachy Mini

<!-- Image pending: ![Reachy Mini](../../assets/hardware/misc/reachy-mini.png) -->
<!-- TODO: 이미지 에셋 추가 필요 -->

---

## Overview

Reachy Mini는 **Hugging Face**와 **Pollen Robotics**가 공동 개발한 오픈소스 데스크톱 로봇이다. $299부터 시작하는 가격으로, 누구나 접근 가능한 AI 로보틱스 실험 플랫폼을 제공한다.

| 항목 | 내용 |
|------|------|
| **개발** | Hugging Face + Pollen Robotics |
| **라이선스** | Apache 2.0 |
| **유형** | 데스크톱 컴패니언 로봇 |
| **높이** | 28cm (11인치) |
| **무게** | 1.5kg (3.3lbs) |
| **DoF** | 6 (머리) + 360도 바디 회전 |
| **가격** | $299 (Lite) / $449 (Wireless) |
| **출시** | 2025년 여름 (Lite), 2025년 가을~2026년 (Wireless) |

---

## 핵심 의의

### AI 로보틱스의 대중화

Reachy Mini의 가장 중요한 기여는 **AI와 물리적 로봇의 결합을 일반 사용자에게 개방한 것**이다.

1. **저가 접근성**: $299라는 가격으로 학생, 취미 개발자, 교육자 모두 접근 가능
2. **완전 오픈소스**: 하드웨어 설계, 소프트웨어 SDK, 시뮬레이션 환경 모두 공개
3. **Hugging Face 생태계 통합**: 1.7M+ AI 모델과 400K+ 데이터셋 즉시 활용 가능
4. **DIY 학습 경험**: 2-3시간 조립 과정을 통한 실습형 STEM 교육
5. **Embodied AI 플랫폼**: 음성, 비전, 언어 모델을 물리적 로봇으로 구현

CES 2026에서 NVIDIA CEO Jensen Huang은 DGX Spark와 Reachy Mini를 연결하여 **"개인 오피스 R2D2"**를 시연했다. 이는 로컬에서 실행되는 AI 에이전트가 물리적 로봇을 통해 실시간으로 상호작용할 수 있음을 보여주었다. [[1]](#ref-nvidia-reachy)

---

## Pollen Robotics 배경

### 회사 역사

| 항목 | 내용 |
|------|------|
| **설립** | 2016년, 프랑스 보르도 |
| **창업자** | Matthieu Lapeyre, Alice Coucke, Pierre Rouanet (前 Inria 연구원) |
| **미션** | 열린, 윤리적이며 접근 가능한 로봇 제작 |
| **펀딩** | €2.5M (약 $2.8M) |
| **인수** | 2025년 4월 14일, Hugging Face에 인수 [[2]](#ref-techcrunch) |

### 주요 제품 히스토리

1. **Poppy** (초기): 최초의 3D 프린트 오픈소스 휴머노이드 로봇 중 하나
2. **Reachy 1** (2020): ANA XPrize 2위 수상
3. **Reachy 2** (현재): $70,000 휴머노이드, Cornell/CMU 등 연구기관에서 사용
4. **Reachy Mini** (2025): 대중화를 위한 데스크톱 버전

Hugging Face의 인수로 Pollen Robotics의 약 20명 직원이 합류했으며, 이는 Hugging Face의 다섯 번째 인수(Gradio, XetHub 등 이후)이자 첫 번째 하드웨어 분야 진출이다. [[2]](#ref-techcrunch)

---

## Lite vs Wireless 버전 상세 비교

| 항목 | Lite ($299) | Wireless ($449) |
|------|-------------|-----------------|
| **컴퓨트** | 외부 (Mac/Linux 필요) | 내장 Raspberry Pi 5 |
| **연결** | USB 유선 전용 | WiFi + 유선 (USB-C 어댑터로 이더넷) |
| **전원** | 유선 전원 | 배터리 + 유선 |
| **마이크** | 4개 | 4개 |
| **스피커** | 5W | 5W |
| **카메라** | 광각 카메라 | 광각 카메라 |
| **가속도계** | 없음 | 있음 |
| **자율성** | PC 의존 | 독립 실행 가능 |
| **배송 시작** | 2025년 여름 | 2025년 가을~2026년 |

### 버전 선택 가이드

- **Lite 추천**: 이미 강력한 PC가 있고, 유선 연결이 괜찮은 개발자/교육자
- **Wireless 추천**: 독립적인 데모, 이동성이 필요하거나 Raspberry Pi 프로젝트에 익숙한 사용자

---

## 하드웨어 스펙

### 물리적 사양

| 항목 | 스펙 |
|------|------|
| **높이** | 28cm (11인치) |
| **폭** | 16cm (6.3인치) |
| **무게** | 1.5kg (3.3lbs) |
| **머리 DoF** | 6 (팬, 틸트, 롤 등) |
| **바디 회전** | 360도 연속 회전 |
| **안테나** | 2개 (애니메이션 표현용) |

### 센서 및 출력

| 구성요소 | 스펙 |
|----------|------|
| **눈** | 표현력 있는 LED 애니메이션 |
| **카메라** | 광각 카메라 (비전 처리용) |
| **마이크** | 4채널 어레이 |
| **스피커** | 5W 출력 |
| **가속도계** | Wireless 버전에만 포함 |

### 조립

Reachy Mini는 DIY 키트로 판매되며, 일반적으로 **2-3시간** 소요된다. 조립 과정 자체가 교육적 가치를 제공한다.

---

## 소프트웨어 생태계

### Python SDK

```python
from reachy_mini import ReachyMini

# 자동 연결 (USB/localhost 또는 네트워크 자동 감지)
reachy = ReachyMini()

# 또는 연결 모드 강제 지정
reachy = ReachyMini(connection_mode="localhost_only")
reachy = ReachyMini(connection_mode="network")

# 머리 움직임 제어
reachy.head.look_at(x=0.5, y=0, z=0.3)

# 눈 애니메이션
reachy.eyes.set_emotion("happy")

# 카메라 접근
frame = reachy.camera.get_frame()
```

### 지원 프로그래밍 언어

| 언어 | 상태 |
|------|------|
| **Python** | 현재 지원 (풀 SDK) |
| **JavaScript** | 개발 중 (곧 출시 예정) |
| **Scratch** | 개발 중 (곧 출시 예정) |

### Hugging Face Hub 통합

Reachy Mini는 Hugging Face 생태계와 깊이 통합되어 있다:

- **1.7M+ AI 모델** 즉시 접근 가능
- **400K+ 데이터셋** 활용 가능
- **Hugging Face Spaces**에서 앱 공유 및 커뮤니티 협업
- **SmolVLM2-2.2B-Instruct** 기본 로컬 비전 모델

```python
# SmolVLM2를 이용한 로컬 비전 처리
# --local-vision 플래그로 프레임을 주기적으로 처리
```

### 앱 개발 및 배포

```bash
# 앱 생성 도구
reachy-mini-app-assistant create

# 앱을 Hugging Face Space로 배포하여 커뮤니티와 공유
```

---

## 교육 활용

### STEM 교육 적용 분야

| 분야 | 활용 내용 |
|------|-----------|
| **프로그래밍** | Python 기초, AI 통합, 비동기 프로그래밍 |
| **AI/ML** | 컴퓨터 비전, 음성 인식, LLM 연동 |
| **로보틱스** | 모션 플래닝, 센서 퓨전, 제어 시스템 |
| **HRI** | 인간-로봇 상호작용, 감정 표현, 사회적 로봇 |

### 대상 연령 및 환경

| 환경 | 권장 사항 |
|------|-----------|
| **고등학교+** | Python 기반 독립 학습 가능 |
| **중학교** | 교사 또는 멘토 지도 하에 활용 |
| **초등학교** | Scratch 지원 이후 적합 (개발 중) |
| **대학/연구실** | AI 로보틱스, 모션 플래닝, 자율 의사결정 실험 |

### 교육적 장점

1. **실습형 학습**: 추상적인 AI 개념을 물리적 로봇으로 체험
2. **시각적 피드백**: LED 눈과 안테나로 로봇 상태 즉시 확인
3. **단계별 난이도**: 웹 대시보드 → Python SDK → 고급 AI 통합
4. **커뮤니티 학습**: Hugging Face Spaces에서 다른 프로젝트 참고 및 공유

---

## CES 2026 시연

### NVIDIA DGX Spark + Reachy Mini

CES 2026에서 Jensen Huang은 Reachy Mini와 NVIDIA DGX Spark를 연결한 데모를 선보였다. [[1]](#ref-nvidia-reachy)

| 항목 | 내용 |
|------|------|
| **AI 두뇌** | NVIDIA DGX Spark (100B 파라미터 모델 로컬 실행) |
| **물리적 아바타** | Reachy Mini |
| **모델 라우팅** | 실시간 의도 기반 라우터 (프라이버시 → 로컬, 복잡한 추론 → 클라우드) |
| **음성** | Eleven Labs API 통합 |

### 시연된 기능

- 식료품 목록 관리 (계란, 우유, 버터)
- 코드 실행으로 스크립트 업데이트 전송
- 손 그림 스케치를 건축 렌더링으로 변환
- 실시간 홈 모니터링

> "놀라운 것은 이제 이것이 완전히 쉬워졌다는 것입니다. 하지만 불과 몇 년 전만 해도 이것은 불가능했고, 상상조차 할 수 없었습니다." - Jensen Huang [[1]](#ref-nvidia-reachy)

---

## 구매 및 출하

### 현황 (2026년 1월 기준)

- **출하량**: Hugging Face, Pollen Robotics, Seeed Studio 협력으로 3,000대 출하 완료 [[3]](#ref-seeed)
- **개발 기간**: 오픈소스 아이디어에서 실제 제품까지 약 5개월 [[3]](#ref-seeed)

### 구매처

| 구매처 | 비고 |
|--------|------|
| **Pollen Robotics 공식** | [pollen-robotics.com/reachy-mini](https://www.pollen-robotics.com/reachy-mini/) |
| **Seeed Studio** | 키트 및 부품 |
| **Hugging Face Hub** | 소프트웨어 및 모델 |

---

## 시스템 요구사항

### Lite 버전

| 항목 | 요구사항 |
|------|----------|
| **OS** | macOS 10.15+ 또는 Linux (Ubuntu 20.04+ 권장) |
| **Python** | 3.8+ |
| **연결** | USB |
| **Windows** | 지원 예정 |

### Wireless 버전

| 항목 | 요구사항 |
|------|----------|
| **내장 컴퓨트** | Raspberry Pi 5 |
| **원격 접근** | 웹 브라우저 (모든 기기) |
| **네트워크** | WiFi 또는 USB-C 이더넷 어댑터 |

---

## References

### 인용 출처

<a id="ref-nvidia-reachy"></a>
**[1]** [NVIDIA brings agents to life with DGX Spark and Reachy Mini](https://huggingface.co/blog/nvidia-reachy-mini) - Hugging Face Blog, 2026년 1월

<a id="ref-techcrunch"></a>
**[2]** [Hugging Face buys a humanoid robotics startup](https://techcrunch.com/2025/04/14/hugging-face-buys-a-humanoid-robotics-startup/) - TechCrunch, 2025년 4월 14일

<a id="ref-seeed"></a>
**[3]** [Reachy Mini: An Open Journey Built Together](https://www.seeedstudio.com/blog/2026/01/06/reachy-mini-an-open-journey-built-together-with-hugging-face-pollen-robotics-seeed-studio/) - Seeed Studio Blog, 2026년 1월 6일

### 공식 문서
- [Pollen Robotics - Reachy Mini](https://www.pollen-robotics.com/reachy-mini/)
- [Hugging Face Blog - Reachy Mini](https://huggingface.co/blog/reachy-mini)
- [Reachy Mini GitHub SDK](https://github.com/pollen-robotics/reachy_mini)
- [Hugging Face Space - Reachy Mini](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)

### 개발 리소스
- [Reachy Mini Developer Center](https://reachymini.net/developers.html)
- [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

---

## See Also

- [하드웨어 목록](../index.md)
- [Reachy 2](../humanoids/reachy.md)
- [LeRobot Arms](../arms/lerobot-arms.md)
- [SmolVLA](../../models/smolvla.md)
