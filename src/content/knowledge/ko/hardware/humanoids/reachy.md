---
title: Reachy 2
description: Pollen Robotics의 오픈소스 휴머노이드 로봇 플랫폼
tags: [reachy, pollen-robotics, humanoid, open-source, orbita, ros2, teleoperation, maxon, apache-2.0]
category: hardware
last_updated: 2025-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Reachy 2

> Home > Hardware > Humanoids > Reachy 2

<!-- Image pending: ![Reachy 2](../../assets/hardware/humanoids/reachy.png) -->

---

## Overview

**Reachy 2**는 프랑스 보르도에 본사를 둔 [Pollen Robotics](https://www.pollen-robotics.com/)가 2024년 10월에 출시한 휴머노이드 로봇이다. **소프트웨어는 완전 오픈소스**이며, 일부 하드웨어 설계도 공개되어 있다 (라이선스 구조 참조). Embodied AI 연구, 인간-로봇 상호작용, 원격 조작(teleoperation)을 위해 설계되었으며, 2025년 4월 Hugging Face에 인수되었다고 보도되었다. [^hf-acquisition]

| 항목 | 스펙 | 출처 |
|------|------|------|
| 제조사 | Pollen Robotics (프랑스 보르도) | [공식 사이트](https://www.pollen-robotics.com/about-us/) |
| 출시 | 2024년 10월 (보도 기준) | [The Robot Report](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/) |
| 총 DoF | 18 (7-DoF 암 x 2 + 3-DoF 목 + 1-DoF 안테나) | [공식 문서](https://docs.pollen-robotics.com/) |
| 높이 | 136-166cm (조절 가능) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| 무게 | 50kg | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| 암 페이로드 | 3kg (팔당) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| 가격 | $70,000 USD (2025년 1월 보도 기준) | [Decrypt](https://decrypt.co/315184/the-worlds-first-factory-ready-open-source-humanoid-robot) |

---

## 라이선스 구조

Reachy 2는 컴포넌트에 따라 다른 라이선스가 적용된다.

| 컴포넌트 | 라이선스 | 확인 방법 |
|----------|----------|-----------|
| Python SDK (reachy2-sdk) | Apache 2.0 | [GitHub LICENSE 파일](https://github.com/pollen-robotics/reachy2-sdk) |
| ROS2 코어 (reachy2_core) | Apache 2.0 | [GitHub LICENSE 파일](https://github.com/pollen-robotics/reachy2_core) |
| VR 텔레오퍼레이션 앱 | Apache 2.0 | [GitHub LICENSE 파일](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| Orbita 펌웨어 | Apache 2.0 | [GitHub LICENSE 파일](https://github.com/pollen-robotics/Orbita_3d_R1) |
| Orbita 전자/케이블 설계 | CC-BY-SA-NC (비공식 포럼 정보) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| URDF 모델 | Apache 2.0 | [GitHub (reachy2_core)](https://github.com/pollen-robotics/reachy2_core) |

> **주의사항**:
> - Orbita 전자/케이블 설계의 CC-BY-SA-NC 라이선스는 커뮤니티 포럼 게시물에서 확인된 정보이며, 공식 라이선스 파일로 검증 필요
> - 상업적 하드웨어 복제 시 Orbita 특허([FR3141363A1](https://patents.google.com/patent/FR3141363A1)) 확인 필수
> - CAD 파일의 라이선스 및 공개 범위는 별도 확인 필요

---

## 핵심 의의

### 소프트웨어 오픈소스 휴머노이드 플랫폼

Reachy 2의 주요 의의는 **소프트웨어 스택이 완전히 오픈소스**인 휴머노이드 플랫폼이라는 점이다. 하드웨어는 URDF 모델 등 일부가 공개되어 있으나, 전체 하드웨어가 오픈소스인 것은 아니다.

1. **소프트웨어 오픈소스**: ROS2 기반 전체 소프트웨어 스택, Python SDK, Unity VR 앱이 Apache 2.0 라이선스로 공개 [^ros2-discourse]
2. **하드웨어 투명성**: URDF 모델, 제어 인터페이스가 GitHub에서 공개 (일부 하드웨어 설계는 제한적)
3. **연구 기관 채택**: Hugging Face 블로그에 따르면 Cornell, Carnegie Mellon, CNRS, CEA 등에서 채택 [^hf-acquisition]
4. **Hugging Face 통합**: LeRobot 프레임워크와 연동하여 AI 모델 학습 및 배포 지원

> "Pollen은 하드웨어 오픈소스 전문가이고, 우리(Hugging Face)는 소프트웨어 오픈소스 전문가입니다. 그 상호보완성은 명백했습니다." - Hugging Face 블로그 [^hf-acquisition]

---

## Orbita 액추에이터

Orbita는 Pollen Robotics가 자체 개발한 특허 기술로, Reachy의 자연스럽고 유연한 움직임을 가능하게 하는 핵심 컴포넌트이다. [^orbita-medium]

### Orbita 3D (목, 손목)

| 항목 | 스펙 | 출처 |
|------|------|------|
| 자유도 | 3-DoF 병렬 메커니즘 | [공식 문서](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| 모터 | Maxon DC 브러시리스 (40W x 3) | [공식 문서](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| 제어 | FOC (Field Oriented Control) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| 통신 | EtherCAT | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| 특징 | 쿼터니언 기반 제어 (오일러 각 대신) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |

### Orbita 2D (어깨, 팔꿈치)

| 항목 | 스펙 | 출처 |
|------|------|------|
| 자유도 | 2-DoF 병렬 메커니즘 | [공식 문서](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| 모터 | Maxon DC 브러시리스 (90-120W) | [Maxon Blog](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768) |
| 속도 | 50rpm (공칭) | [공식 문서](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |

### 기술적 혁신

- **병렬 메커니즘**: 3개의 동심원적 단계별 모터축이 동시에 3개의 디스크를 구동
- **컴팩트 폼팩터**: 로봇 신체 어디에나 배치 가능한 소형화 설계
- **특허**: [FR3141363A1](https://patents.google.com/patent/FR3141363A1) - Pollen Robotics가 산업 파트너와의 협상을 위해 출원한 유일한 특허라고 밝힘 [^orbita-medium]

---

## 하드웨어

### 암 및 그리퍼

| 부품 | 스펙 | 출처 |
|------|------|------|
| 암 구성 | 7-DoF x 2, 인간 비율 바이오-인스파이어드 설계 | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| 모터 | Maxon DC 브러시리스 (90-120W) | [Maxon Blog](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768) |
| 그리퍼 | 토크 제어 평행 그리퍼 | [공식 문서](https://docs.pollen-robotics.com/) |
| 페이로드 | 3kg/6.6lbs (팔당) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |

### 센서 및 비전

| 센서 | 스펙 | 출처 |
|------|------|------|
| 스테레오 카메라 | IMX296 글로벌 셔터 x 2 | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| 깊이 카메라 | Orbbec Gemini 336 RGB-D (상체) | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| ToF 센서 | Luxonis OAK-FFC-ToF | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| LiDAR | RPLIDAR S2 (모바일 베이스 옵션) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| 오디오 | 공간 오디오 지원 | [공식 사이트](https://www.pollen-robotics.com/reachy/) |

### 구성 옵션

Reachy 2는 4가지 구성으로 제공된다:

| 구성 | 설명 |
|------|------|
| 단일 암 + 고정 베이스 | 기본 연구용 |
| 듀얼 암 + 고정 베이스 | 양손 조작 연구 |
| 단일 암 + AMR 베이스 | 이동 가능한 단일 조작 |
| 듀얼 암 + AMR 베이스 | 완전한 모바일 매니퓰레이션 |

모바일 베이스는 3개의 옴니휠과 다중 센서를 탑재한다. [^pollen-reachy]

---

## 소프트웨어

### ROS2 지원

- **ROS2 Foxy** 기반 완전 통합 [^ros2-discourse]
- `reachy2_core`: URDF, 런치 파일, Gazebo 시뮬레이션 에셋
- `reachy2_sdk_server`: gRPC-ROS2 브릿지 서버
- Docker 원라인 설치 지원

### Python SDK

```python
# 설치
pip install reachy2-sdk

# 기본 사용 예
from reachy2_sdk import ReachySDK
reachy = ReachySDK(host='reachy.local')
reachy.head.look_at(x=0.5, y=0, z=0.4)
```

- Windows/Mac/Linux 지원
- Python >= 3.6
- Jupyter 노트북 예제 제공

### VR 텔레오퍼레이션

| 항목 | 스펙 | 출처 |
|------|------|------|
| 플랫폼 | Unity LTS 2022.3 | [GitHub](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| 지원 HMD | Meta Quest 2, Quest 3 (Quest Link 필요) | [공식 문서](https://docs.pollen-robotics.com/teleoperation/) |
| 레이턴시 | 125ms (glass-to-glass, 보도 기준) | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| 비디오 스트리밍 | GStreamer 기반 | [GitHub](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| 기능 | 스테레오 3D 비전, 공간 오디오, 감정 표현 (안테나) | [공식 문서](https://docs.pollen-robotics.com/teleoperation/) |

VR 텔레오퍼레이션은 원격 조작 연구와 AI 데이터 수집에 이상적이며, 실시간으로 로봇의 팔, 손, 머리를 제어할 수 있다.

---

## 버전 비교

| 항목 | Reachy 1 (2020) | Reachy 2 (2024) |
|------|-----------------|-----------------|
| 무게 | 7kg | 50kg |
| 암 페이로드 | ~1kg | 3kg |
| 모터 | DC 모터 | Maxon DC 브러시리스 (90-120W) |
| 액추에이터 | 기본 서보 | Orbita 2D/3D 병렬 메커니즘 |
| 비전 | 2 카메라 (매크로/광각) | IMX296 스테레오 + RGB-D + ToF |
| 그리퍼 | 기본 그리퍼 | 토크 제어 평행 그리퍼 |
| 소프트웨어 | ROS1 | ROS2 Foxy |
| 모바일 베이스 | 제한적 | AMR 옵션 (옴니휠, LiDAR) |
| 수상 | ANA XPrize 2위 | - |

*출처: [ROBOTS Guide](https://robotsguide.com/robots/reachy), [Pollen Robotics](https://www.pollen-robotics.com/reachy/)*

### 주요 개선점

1. **강화된 페이로드**: 팔당 3kg으로 증가하여 실제 작업 수행 가능
2. **Orbita 액추에이터**: Maxon 모터 통합으로 더 자연스럽고 정밀한 움직임
3. **향상된 센싱**: RGB-D, ToF 센서 추가로 깊이 인식 강화
4. **모듈러 설계**: 대체 그리퍼 및 모바일 베이스 통합 용이
5. **VR 텔레오퍼레이션**: 125ms 저지연 실시간 원격 조작

---

## Pollen Robotics 회사 배경

| 항목 | 정보 | 출처 |
|------|------|------|
| 설립 | 2016년 | [PitchBook](https://pitchbook.com/profiles/company/472286-89) |
| 위치 | 프랑스 보르도 | [공식 사이트](https://www.pollen-robotics.com/about-us/) |
| 창립자 | Pierre Rouanet, Matthieu Lapeyre (Inria Flowers 팀 출신) | [공식 사이트](https://www.pollen-robotics.com/about-us/) |
| 직원 | ~23명 (Tracxn 2025년 기준) | [Tracxn](https://tracxn.com/d/companies/pollen-robotics/__xh3z_zYG-k1xa3vjhpsvnYRz3_ga-k01M3RHO1_oxx0) |
| 총 투자 | $2.61M (PitchBook 보도) | [PitchBook](https://pitchbook.com/profiles/company/472286-89) |
| 인수 | 2025년 4월 Hugging Face (보도) | [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition) |

### 연혁

- **2016**: Pollen Robotics 설립
- **2017**: Poppy (최초의 3D 프린팅 오픈소스 휴머노이드) 출시
- **2020**: Reachy 1 출시, ANA XPrize 2위 수상
- **2024**: Reachy 2 출시 (10월)
- **2025**: CES 2025에서 Reachy 2 데뷔, Hugging Face에 인수 (4월, 보도 기준)

*출처: [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition), [PitchBook](https://pitchbook.com/profiles/company/472286-89)*

### 철학

> "기술은 개방되고, 윤리적이며, 접근 가능해야 합니다. 회사는 사람과 세상을 위해 일해야 하며, 그 반대가 아닙니다."

*출처: [Pollen Robotics About Us](https://www.pollen-robotics.com/about-us/)*

---

## 채택 현황

Hugging Face 블로그에 따르면 Reachy 플랫폼은 전 세계 20개국 이상에서 수백 대가 배포되어 사용 중이다. [^hf-acquisition]

**주요 기관** (Hugging Face 블로그 및 The Robot Report 보도 기준):
- Hugging Face
- Accenture
- CEA (프랑스 원자력청)
- CNRS (프랑스 국립과학연구센터)
- Ecole Polytechnique
- Cornell University
- Carnegie Mellon University

*출처: [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition), [The Robot Report](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/)*

---

## References

### 공식 자료
- [Pollen Robotics 공식 사이트](https://www.pollen-robotics.com/)
- [Reachy 2 제품 페이지](https://www.pollen-robotics.com/reachy/)
- [Reachy 2 공식 문서](https://docs.pollen-robotics.com/)
- [Reachy 2 Datasheet (PDF)](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf)

### GitHub 저장소
- [reachy2-sdk](https://github.com/pollen-robotics/reachy2-sdk) - Python SDK
- [reachy2_core](https://github.com/pollen-robotics/reachy2_core) - ROS2 코어 패키지 및 URDF
- [reachy2_sdk_server](https://github.com/pollen-robotics/reachy2_sdk_server) - SDK 서버
- [Reachy2Teleoperation](https://github.com/pollen-robotics/Reachy2Teleoperation) - Unity VR 앱
- [Orbita_3d_R1](https://github.com/pollen-robotics/Orbita_3d_R1) - Orbita 액추에이터

### 기술 자료
- [Orbita 특허 (FR3141363A1)](https://patents.google.com/patent/FR3141363A1)
- [Orbita 소개 (Medium)](https://medium.com/pollen-robotics/orbita-is-turning-heads-literally-d10d378550e2)
- [Maxon 모터 통합 사례](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768)
- [Pollen Community Forum - Orbita Presentation](https://forum.pollen-robotics.com/t/orbita-presentation/20)

### 뉴스 및 리뷰
- [Hugging Face의 Pollen Robotics 인수](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition)
- [CES 2025 Reachy 2 발표 (The Robot Report)](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/)
- [ROS Discourse - Reachy 2 ROS2 스택 공개](https://discourse.openrobotics.org/t/reachy-2-humanoid-full-ros-2-dev-stack-now-open-source-one-line-docker-sim-python-sdk/43362)

---

## 각주

[^hf-acquisition]: Hugging Face. (2025, April). "Hugging Face to sell open-source robots thanks to Pollen Robotics acquisition." https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition
[^ros2-discourse]: Open Robotics Discourse. (2024). "Reachy 2 humanoid – full ROS 2 dev stack now open-source." https://discourse.openrobotics.org/t/reachy-2-humanoid-full-ros-2-dev-stack-now-open-source-one-line-docker-sim-python-sdk/43362
[^orbita-medium]: Pollen Robotics. "Orbita: A 3D joint for robotic head motion realism." Medium. https://medium.com/pollen-robotics/orbita-is-turning-heads-literally-d10d378550e2
[^pollen-reachy]: Pollen Robotics. "Reachy 2 - The first open-source humanoid robot." https://www.pollen-robotics.com/reachy/

---

## See Also

- [하드웨어 목록](../index.md)
- [Reachy Mini](../misc/reachy-mini.md)
