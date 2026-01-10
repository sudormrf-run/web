---
title: LEAP Hand
description: 저가 3D 프린트 덱스터러스 핸드 - CMU에서 개발한 로봇 학습용 인간형 손
tags: [leap, hand, low-cost, 3d-print, dexterous, cmu, open-source, dynamixel, vla]
category: hardware
created: 2024-01-09
---

# LEAP Hand

> Home > Hardware > Hands > LEAP Hand

<!-- 이미지 준비 필요: LEAP Hand 공식 사이트에서 다운로드 후 추가 -->
<!-- Image pending: ![LEAP Hand](../../assets/hardware/hands/leap-hand.png) -->

---

## Overview

**LEAP Hand** (Low-cost, Efficient, and AnthroPomorphic Hand)는 Carnegie Mellon University (CMU)의 Kenneth Shaw, Ananye Agarwal, Deepak Pathak 연구진이 개발한 오픈소스 덱스터러스 로봇 핸드이다. RSS 2023에서 발표되었으며, 로봇 학습 연구의 접근성을 높이기 위해 설계되었다.

### LEAP Hand V1 스펙 (RSS 2023)

| 항목 | 스펙 | 출처 |
|------|------|------|
| 자유도 (DoF) | 16 DoF (손가락당 4 DoF) | [Shaw et al., 2023] |
| 모터 | Dynamixel XC330 (Full) / XL330 (Lite) | [ROBOTIS] |
| 가격 | ~$2,000 (Full) / ~$700 (Lite) | [v1.leaphand.com] |
| 조립 시간 | 4시간 이내 | [Shaw et al., 2023] |
| 무게 | 595g (4손가락 구성) | [Shaw et al., 2023] |
| 크기 | 인간 손 대비 약 30% 큼 | [Shaw et al., 2023] |
| 그립 강도 | 19.5 N (Pull-out Force Test) | [Shaw et al., 2023] |
| 비용 비교 | Allegro Hand의 1/8, Shadow Hand의 1/50 | [Shaw et al., 2023] |

> **참고**: 위 스펙은 LEAP Hand V1 기준이다. V2 시리즈는 별도 섹션 참조.

---

## 핵심 의의

### 덱스터러스 매니퓰레이션의 민주화

LEAP Hand의 가장 큰 의의는 **고성능 덱스터러스 매니퓰레이션 연구의 민주화**이다.

기존 덱스터러스 핸드의 문제점:
- **Shadow Hand**: $100,000+ 비용으로 대형 연구기관만 접근 가능
- **Allegro Hand**: $16,000 수준이지만 여전히 높은 진입장벽
- 높은 비용이 조작(manipulation) 연구의 발전을 저해

LEAP Hand가 제공하는 가치:
- **$2,000**로 동등 이상의 성능 제공
- **3D 프린터**와 **드라이버**만으로 조립 가능
- 전 세계 연구자들이 덱스터러스 매니퓰레이션 연구 시작 가능
- 교육 목적으로도 활용 가능 (Lite 버전 $700)

> "LEAP Hand significantly outperforms its closest competitor Allegro Hand in all experiments while being 1/8th of the cost."
> — [Shaw et al., RSS 2023](https://www.roboticsproceedings.org/rss19/p089.pdf)

---

## 설계 철학

### 1. 인간형 운동학 구조 (Anthropomorphic Kinematics)

LEAP Hand는 인간 손의 해부학적 구조를 모방하면서도 이를 초월하는 운동학적 설계를 채택했다.

**손가락 구조 (각 손가락 4 DoF):**
- **MCP-1**: 굴곡/신전 (Flexion/Extension)
- **MCP-2**: 내전/외전 (Adduction/Abduction)
- **PIP**: 근위지절간관절
- **DIP**: 원위지절간관절

**핵심 혁신 - Universal Abduction-Adduction Mechanism:**
- 인간 손은 손가락을 펼쳤을 때만 좌우로 움직일 수 있음
- LEAP Hand는 **손가락 위치에 관계없이** 모든 자유도를 유지
- MCP 관절에 모터를 배치하여 어떤 자세에서도 최대 유연성 확보

### 2. 강도와 내구성 (Strength & Durability)

RSS 2023 논문에서 보고된 성능 지표:

- 단일 손가락 끝으로 2kg 무게를 1시간 이상 지탱 가능 [Shaw et al., 2023, Section V-A]
- 반복 동작 시 관절 각도 오차 0.05 라디안 미만 [Shaw et al., 2023, Section V-B]
- 장시간 고토크 출력에도 과열 없음
- 파워 밀도: 1.045 N×DOF/(cm²) [Shaw et al., 2023, Table II]

### 3. 제조 접근성 (Manufacturing Accessibility)

| 제조 요소 | 세부 사항 |
|-----------|-----------|
| 3D 프린터 | Ender 3 (약 $200) 사용 가능 |
| 재료 | PLA 플라스틱 + Ninjaflex (손가락 끝) |
| 출력 시간 | 전체 부품 24시간 이내 |
| 추가 부품 | Robotis 강화 플라스틱 브라켓 |

---

## 조립 가이드

### 필요 장비

1. **3D 프린터**: Direct drive 방식 권장 (예: Ender 3 S1 Pro)
2. **필라멘트**: PLA (구조물) + TPU/Ninjaflex (손가락 끝)
3. **드라이버**: 기본 수공구
4. **Dynamixel 모터 세트**: XC330 (Full) 또는 XL330 (Lite)

### 조립 단계 (약 4시간)

1. **부품 출력** (24시간 소요, 사전 준비)
   - Cura 슬라이서 Regular Quality 설정 사용
   - 모든 STL 파일 출력

2. **손바닥 조립** (~1시간)
   - MCP 모터 마운트 설치
   - 배선 라우팅

3. **손가락 조립** (~2시간)
   - 각 손가락 4개 관절 조립
   - Dynamixel 모터 연결
   - 플렉서블 팁 장착

4. **통합 및 테스트** (~1시간)
   - 전체 조립
   - 모터 ID 설정
   - API 연결 테스트

### 소프트웨어 설정

**설치 방법 (GitHub에서 직접 설치):**

```bash
# LEAP Hand API 저장소 클론
git clone https://github.com/leap-hand/LEAP_Hand_API.git
cd LEAP_Hand_API

# Python 의존성 설치 (저장소 내 python 폴더 참조)
cd python
pip install -r requirements.txt
```

**기본 사용 예시:**

```python
# 공식 API 예시 (main.py 참조)
# Dynamixel Wizard로 포트 확인 후 설정

from leap_hand import LeapNode
import numpy as np

# 포트 설정 (시스템에 따라 다름)
leap = LeapNode(port="/dev/ttyUSB0")

# 관절 각도 읽기
current_position = leap.read_pos()  # 16개 관절 위치 (라디안)

# 목표 위치 설정 (16 DoF)
target_angles = np.zeros(16)  # 홈 포지션
leap.set_allegro(target_angles)
```

> **주의**: 위 코드는 개념 예시이다. 정확한 API 사용법은 [공식 GitHub 저장소](https://github.com/leap-hand/LEAP_Hand_API)의 `python/` 폴더 내 예제 참조.

**지원 환경:**
- Python, C++, ROS/ROS2
- Dynamixel SDK 기반 다른 언어도 가능
- Isaac Gym/Lab 시뮬레이션 환경 제공

**ROS 사용 시:**

```bash
# LEAP Hand ROS 노드 실행 (leap_hand_ros 패키지)
# 저장소의 ros/ 폴더에서 catkin 빌드 후 사용
roslaunch leap_hand_ros example.launch
```

---

## VLA 연구 활용

### 로봇 학습에 최적화된 설계

LEAP Hand는 단순한 하드웨어가 아닌, **로봇 학습 연구를 위해 설계된 플랫폼**이다.

#### 1. 텔레오퍼레이션 데이터 수집

- 인간 손 동작을 실시간으로 미러링하는 소프트웨어 제공
- VLA 모델 학습용 고품질 데모 데이터 수집 가능
- YouTube 영상에서 학습한 스킬을 실제 로봇에 전이

#### 2. 시뮬레이션-실제 전이 (Sim-to-Real)

- 튜닝된 Isaac Gym/Lab 시뮬레이션 환경 제공
- URDF 모델 공개로 다양한 시뮬레이터 호환
- 시뮬레이션에서 학습 후 실제 하드웨어로 직접 전이 가능

#### 3. 강화학습 실험

| 입력 | 출력 | 주기 |
|------|------|------|
| 관절 각도 (16개) | 목표 관절 각도 (16개) | 20 Hz |

- Position, Current, Current-based Position, Velocity 제어 모드 지원
- 최대 전류 제한 조정 가능 (300mA → 550mA)

#### 4. VLA 연구 사례

- **다양한 물체 조작**: 스프 캔, 머스타드 병, 머그컵, 야구공, 드릴 등
- **복잡한 작업 수행**: 서랍 열기, 컵 쌓기, 박스 회전
- **멀티태스크 학습**: 단일 정책으로 여러 조작 작업 수행

---

## 버전 비교: V1 vs V2 시리즈

> **중요**: V1과 V2는 별개의 제품 라인이다. V2는 V1의 "업그레이드"가 아닌 다른 설계 철학을 가진 제품이다.

| 항목 | V1 (2023)[^1] | V2 (2024)[^2] | V2 Advanced (2024)[^3] |
|------|-----------|-----------|-------------------|
| 가격 | ~$2,000 | ~$200 | ~$300 |
| DoF | 16 | 8 | 17 |
| 조립 시간 | 4시간 | 2시간 | 3시간 |
| 구조 | 전통적 Rigid | 하이브리드 Rigid-Soft | 하이브리드 Rigid-Soft |
| 대상 | 연구용 (고성능) | 교육/데모용 | 연구용 (고순응성) |
| 공식 사이트 | [v1.leaphand.com](https://v1.leaphand.com) | [v2.leaphand.com](https://v2.leaphand.com) | [v2-adv.leaphand.com](https://v2-adv.leaphand.com) |

[^1]: Shaw et al., "LEAP Hand: Low-Cost, Efficient, and Anthropomorphic Hand for Robot Learning", RSS 2023
[^2]: 공식 V2 웹사이트 (v2.leaphand.com) 기준
[^3]: 공식 V2 Advanced 웹사이트 (v2-adv.leaphand.com) 기준

### V2 시리즈 특징

- **하이브리드 Rigid-Soft 구조**: 3D 프린트된 유연 구조와 강체 구조의 조합
- **높은 순응성 (Compliance)**: 물체와의 접촉 시 자연스러운 적응
- **극적인 비용 절감**: V1 대비 약 1/10 가격
- **V2 Advanced**: 손바닥에 구동 관절 추가 (17 DoF), 인간형 MCP 운동학

> **가격 참고**: 위 가격은 2024년 기준 공식 사이트 정보이며, 변동될 수 있다.

---

## References

### 논문

- Shaw, K., Agarwal, A., & Pathak, D. (2023). **LEAP Hand: Low-Cost, Efficient, and Anthropomorphic Hand for Robot Learning**. *Robotics: Science and Systems (RSS) 2023*.
  - [PDF](https://www.roboticsproceedings.org/rss19/p089.pdf)
  - [arXiv](https://arxiv.org/abs/2309.06440)

### 공식 리소스

- **프로젝트 웹사이트**: [v1.leaphand.com](https://v1.leaphand.com) | [v2.leaphand.com](https://v2.leaphand.com)
- **GitHub**: [github.com/leap-hand](https://github.com/leap-hand/LEAP_Hand_API)
- **부품 구매**: [ROBOTIS LEAP Hand Bundle](https://www.robotis.us/leap-hand-bundle-xc330/)

### CMU 관련

- [CMU News: Lending a Hand](https://www.cs.cmu.edu/news/2023/leap-hand)
- Kenneth Shaw Master's Thesis: [CMU-RI-TR-24-02](https://www.ri.cmu.edu/app/uploads/2024/05/RI_MSR_Thesis_kshaw_2023-1.pdf)

---

## See Also

- [하드웨어 목록](../index.md)
- [GEX 시리즈](gex.md)
- [Shadow Hand](shadow-hand.md)
