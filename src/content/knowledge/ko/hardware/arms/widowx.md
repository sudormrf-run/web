---
title: Interbotix / WidowX
description: Trossen Robotics의 연구용 로봇 암 시리즈 - VLA 및 Embodied AI 연구의 표준 하드웨어
tags: [interbotix, widowx, viperx, trossen, dynamixel, research, aloha, open-x-embodiment, vla, lerobot]
category: hardware
last_updated: 2026-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Interbotix / WidowX

> Home > Hardware > Arms > WidowX

<!-- 이미지 placeholder: 실제 이미지 파일이 assets 폴더에 추가되어야 함 -->
<!-- Image pending: ![WidowX Arms](../../assets/hardware/arms/widowx.png) -->

---

## Overview

Interbotix는 Trossen Robotics에서 개발한 연구용 로봇 암 브랜드로, ROBOTIS Dynamixel 서보 모터를 기반으로 한 고정밀 매니퓰레이터 시리즈를 제공한다. WidowX와 ViperX 시리즈는 VLA(Vision-Language-Action) 모델 학습, 원격조작 데이터 수집, 그리고 Embodied AI 연구에 널리 사용되는 로봇 암 플랫폼이다. ALOHA, BridgeData V2, Open X-Embodiment 등 주요 로봇 학습 프로젝트에서 채택되었다.

| 항목 | 내용 | 출처 |
|------|------|------|
| 제조사 | [Trossen Robotics](https://www.trossenrobotics.com/) | 공식 사이트 |
| 설립 | 2005년, Matt Trossen | [Tracxn](https://tracxn.com/d/companies/trossen-robotics) |
| 본사 | Downers Grove, Illinois, USA | [CBInsights](https://www.cbinsights.com/company/trossen-robotics) |
| 모터 | ROBOTIS Dynamixel X-Series | [공식 문서](https://docs.trossenrobotics.com/interbotix_xsarms_docs/) |
| 가격대 | $2,000 - $6,500 (2024년 기준, 변동 가능) | [제품 페이지](https://www.trossenrobotics.com/robotic-arms.aspx) |
| 주요 용도 | 연구, 교육, ML/AI 데이터 수집 | - |

---

## 회사 소개: Trossen Robotics

Trossen Robotics는 2005년 Matt Trossen이 설립한 로봇 전문 기업으로, 20년 이상 연구실 및 교육기관에 로봇 하드웨어를 공급해왔다[^1]. 연구용 매니퓰레이터, 무인 지상 차량(UGV), ML/AI 통합 연구 키트 등을 제조 및 유통하며, 특히 ROBOTIS Dynamixel 서보를 활용한 Interbotix 브랜드로 유명하다.

ALOHA 프로젝트와 Open X-Embodiment 데이터셋에 하드웨어를 공급하면서 Embodied AI 연구 커뮤니티에서 핵심적인 위치를 차지하게 되었다.

[^1]: Trossen Robotics 회사 프로필은 Tracxn, CBInsights, Crunchbase 등 비즈니스 데이터베이스를 참조함. 직원 수, 매출 등 세부 지표는 데이터베이스마다 상이할 수 있음.

---

## 제품 라인업

### X-Series 암 (기본 라인업)

아래 스펙은 [공식 Interbotix 문서](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications.html)를 기반으로 하며, 가격은 2024년 기준 대략적인 참고 가격이다.

| 모델 | DoF | 리치 | 페이로드 | 서보 구성 | 가격 (참고) | 특징 |
|------|-----|------|----------|-----------|------|------|
| **PincherX-100** | 4 | 335mm | 50g | XL430 | ~$500 | 입문용, 컴팩트 |
| **PincherX-150** | 4 | 450mm | 50g | XL430 | ~$600 | 입문용, 확장 리치 |
| **ReactorX-150** | 5 | 450mm | 100g | XM430/XL430 | ~$1,200 | 중급, 손목 회전 |
| **ReactorX-200** | 5 | 550mm | 150g | XM430/XL430 | ~$1,500 | 중급, 확장 리치 |
| **WidowX-200** | 5 | 550mm | 200g | XM430-W350, XL430-W250 | ~$2,500 | 연구용 표준 |
| **WidowX-250** | 5 | 650mm | 250g | XM430-W350, XL430-W250 | ~$3,000 | 연구용 확장 |
| **WidowX-250 6DoF** | 6 | 650mm | 250g | XM430-W350, XL430-W250 | ~$3,550 | ALOHA Leader 암 |
| **ViperX-250** | 5 | 650mm | 450g | XM540-W270, XM430-W350 | ~$4,500 | 고페이로드 |
| **ViperX-300** | 5 | 750mm | 750g | XM540-W270, XM430-W350 | ~$5,500 | 고성능 |
| **ViperX-300 6DoF** | 6 | 750mm | 750g | XM540-W270, XM430-W350 | ~$6,130 | ALOHA Follower 암 |

> **참고**: 가격은 변동될 수 있으며, 최신 가격은 [공식 사이트](https://www.trossenrobotics.com/)에서 확인 권장.

### 상세 스펙 비교

아래 스펙은 공식 문서([WidowX-200](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/wx200.html), [WidowX-250](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/wx250.html), [ViperX-300 6DoF](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/vx300s.html))에서 발췌하였다.

| 항목 | WidowX-200 | WidowX-250 | ViperX-300 6DoF |
|------|------------|------------|-----------------|
| 자유도 | 5 DoF | 5 DoF | 6 DoF |
| 최대 리치 | 550mm | 650mm | 750mm |
| 전체 스팬 | 1100mm | 1300mm | 1500mm |
| 페이로드 | 200g | 250g | 750g |
| 반복 정밀도 | 1mm | 1mm | 1mm |
| 정확도 | 5-8mm | 5-8mm | 5-8mm |
| 그리퍼 개폐 | 30-74mm | 30-74mm | 42-116mm |
| 서보 수 | 7 | 8 | 9 |
| 손목 회전 | 지원 | 지원 | 지원 |

> **페이로드 주의사항**: 공식 문서에 따르면 최대 페이로드 사용 시 50% 이하 확장(extension)을 권장함.

### AI 시리즈 (2025년 출시)

Trossen Robotics는 2025년 ML/VLA 연구에 특화된 새로운 AI 하드웨어 라인업을 발표했다. 아래 정보는 [WidowX AI 공식 페이지](https://www.trossenrobotics.com/widowx-ai) 및 [Trossen AI 페이지](https://www.trossenrobotics.com/ai)를 참조하였다.

| 모델 | 특징 | 주요 용도 |
|------|------|----------|
| **WidowX AI** | 6DoF, 700mm 리치, 1.5kg 페이로드, 1mm 정확도, iNerve 컨트롤러 | ML/VLA 연구 기본 플랫폼 |
| **Solo AI** | Leader-Follower 구성, 텔레오퍼레이션 특화 | 데이터 수집 최적화 |
| **Mobile AI** | AgileX Tracer 모바일 베이스 통합 | Mobile Manipulation 연구 |
| **Stationary AI** | 4암 복합 워크스테이션 | 대규모 멀티암 실험 |

WidowX AI는 Base, Leader, Follower 3가지 구성으로 제공되며, Follower 버전에는 Intel RealSense D405 깊이 카메라가 장착된다. 공식 사이트에 따르면 배송은 2025년 4월 중순부터 시작되었다.

---

## Dynamixel 서보 기술

Interbotix 로봇 암의 핵심은 ROBOTIS의 Dynamixel X-Series 스마트 서보 모터다. 아래 사양은 [ROBOTIS e-Manual](https://emanual.robotis.com/) 및 [Interbotix 공식 문서](https://docs.trossenrobotics.com/interbotix_xsarms_docs/)를 참조하였다.

### 주요 특징

| 특성 | 설명 |
|------|------|
| **위치 해상도** | 4096 포지션 (약 0.088도) |
| **PID 제어** | 사용자 정의 PID 파라미터 설정 가능 |
| **피드백** | 위치, 속도, 전류, 온도, 전압 실시간 모니터링 |
| **통신** | TTL 또는 RS-485 (모델에 따라 상이), 1Mbps 기본 baudrate |
| **컴플라이언스** | 소프트웨어 기반 컴플라이언스 설정 |

### 사용 서보 모델

- **XL430-W250**: 소형 경량, 그리퍼 및 손목 관절용
- **XM430-W350**: 중형, 중간 관절용, 높은 토크 대 무게 비
- **XM540-W270**: 대형, 베이스 및 어깨 관절용, 최고 토크

### U2D2 컨트롤러

모든 Interbotix 암은 ROBOTIS U2D2 인터페이스를 통해 PC와 연결된다. USB to TTL 변환기로, Dynamixel Wizard 소프트웨어와 ROS/ROS2에 직접 접근할 수 있다.

---

## 소프트웨어 생태계

### ROS/ROS2 지원

아래 지원 현황은 [Interbotix 공식 문서](https://docs.trossenrobotics.com/interbotix_xsarms_docs/)를 기반으로 한다. ROS 배포판의 EOL(End of Life) 상태는 시간에 따라 변경될 수 있다.

| 버전 | 상태 | 비고 |
|------|------|------|
| ROS Melodic | 지원 (Legacy) | Ubuntu 18.04, EOL 2023년 |
| ROS Noetic | 지원 | Ubuntu 20.04, 최종 ROS1 LTS |
| ROS2 Galactic | 지원 (Legacy) | EOL 2022년 11월 |
| ROS2 Humble | 지원 (권장) | Ubuntu 22.04 LTS, 2027년까지 지원 |
| ROS2 Rolling | 지원 | 개발용 rolling release |

> **권장**: 새로운 프로젝트는 ROS2 Humble 사용을 권장함.

### 제공 패키지

- **URDF/메시**: 정확한 관성 모델 포함
- **드라이버 노드**: 물리 로봇 제어 및 관절 상태 발행
- **MoveIt 통합**: 모션 플래닝 지원
- **Gazebo 시뮬레이션**: 시뮬레이션 환경 제공
- **MuJoCo 모델**: 물리 시뮬레이션 (ALOHA 2 포함)

### AI/ML 프레임워크 통합 (AI 시리즈)

- **Hugging Face LeRobot**: 데이터 파이프라인 및 모델 학습
- **OpenPI (Physical Intelligence)**: Pi0, Pi0.5 정책 학습 및 추론
- **NVIDIA Isaac**: 시뮬레이션 및 배포
- **사전 학습 모델 지원**: ALOHA, BiACT, OCTO, Crossformers 등

---

## 핵심 의의

### 1. 저비용 고성능 연구 플랫폼

Interbotix 로봇 암은 $2,000-$6,500 가격대에서 연구 품질의 정밀도(1mm 반복 정밀도)와 신뢰성을 제공한다. 이는 기존 산업용 로봇 암 대비 상당히 낮은 비용으로, 학계와 스타트업이 대규모 데이터 수집 및 VLA 연구를 수행할 수 있게 했다.

### 2. Open Source 생태계

모든 하드웨어 설계, 드라이버, URDF 모델이 오픈소스로 공개되어 있다. GitHub의 [interbotix](https://github.com/interbotix) 레포지토리에서 모든 코드에 접근할 수 있으며, 커뮤니티 기여를 통해 지속적으로 개선되고 있다.

### 3. 표준화된 하드웨어

ALOHA, BridgeData V2, Open X-Embodiment 등 주요 로봇 학습 데이터셋이 모두 Interbotix 암으로 수집되었다. 이로 인해 연구자들은 동일한 하드웨어에서 사전 학습된 모델을 직접 테스트하고 파인튜닝할 수 있다.

### 4. Embodied AI 연구의 민주화

Mobile ALOHA 시스템(약 $32,000, ALOHA 2 논문 참조)부터 단일 암까지, 다양한 예산에 맞는 옵션을 제공하여 더 많은 연구자들이 Embodied AI 연구에 참여할 수 있게 했다.

---

## VLA 연구 활용

### ALOHA / Mobile ALOHA

Stanford의 Tony Z. Zhao, Zipeng Fu, Chelsea Finn 연구팀이 개발한 ALOHA(A Low-cost Open-source Hardware System for Bimanual Teleoperation)는 Interbotix 암을 핵심으로 한다[^2].

| 구성 요소 | 하드웨어 | 역할 |
|----------|----------|------|
| Leader 암 | WidowX-250 6DoF x 2 | 인간 텔레오퍼레이터 입력 |
| Follower 암 | ViperX-300 6DoF x 2 | 실제 작업 수행 |
| 모바일 베이스 | AgileX Tracer | 이동 (Mobile ALOHA) |
| 카메라 | 손목 2개 + 상단 1개 | 시각 입력 |

ALOHA 2는 개선된 성능, 인체공학, 견고성을 제공하며, 모든 하드웨어 설계와 MuJoCo 모델이 오픈소스로 공개되었다.

[^2]: Fu et al., "ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation", 2024. https://aloha-2.github.io/

**주요 논문:**
- Zhao et al., "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware" (RSS 2023)
- Fu et al., "Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation" (2024)

### BridgeData V2

UC Berkeley RAIL Lab에서 수집한 대규모 로봇 조작 데이터셋이다[^3].

| 항목 | 내용 |
|------|------|
| 로봇 | WidowX-250 6DoF |
| 궤적 수 | 60,096개 |
| 환경 수 | 24개 |
| 스킬 수 | 13개 |
| 제어 주파수 | 5Hz |
| 평균 궤적 길이 | 38 타임스텝 |

Pick-and-place, pushing, sweeping, 서랍/문 조작, 블록 쌓기, 옷 접기 등 다양한 기초 조작 스킬을 포함한다. VR 컨트롤러로 텔레오퍼레이션하여 수집했으며, Open X-Embodiment 데이터셋의 핵심 구성 요소다.

[^3]: Walke et al., "BridgeData V2: A Dataset for Robot Learning at Scale", CoRL 2023. https://rail-berkeley.github.io/bridgedata/

**주요 논문:**
- Walke et al., "BridgeData V2: A Dataset for Robot Learning at Scale" (CoRL 2023)

### Open X-Embodiment

Google DeepMind 주도로 34개 연구실에서 수집한 세계 최대 오픈소스 로봇 데이터셋이다[^4].

| 항목 | 내용 |
|------|------|
| 총 궤적 수 | 100만+ |
| 로봇 종류 | 22개 embodiment |
| 스킬 수 | 500개 이상 |
| 태스크 수 | 150,000개 이상 |
| 데이터 포맷 | RLDS (TFRecord) |

WidowX로 수집된 Bridge 데이터셋은 Open X-Embodiment의 핵심 구성 요소이며, RT-X 모델 학습에서 cross-robot transfer의 중요한 역할을 한다. 연구에 따르면 WidowX 데이터에서 학습한 스킬이 Google Robot으로 전이되는 것이 확인되었다.

[^4]: Open X-Embodiment Collaboration, "Open X-Embodiment: Robotic Learning Datasets and RT-X Models", arXiv:2310.08864, 2023.

**주요 논문:**
- Open X-Embodiment Collaboration, "Open X-Embodiment: Robotic Learning Datasets and RT-X Models" (2023)

### OpenVLA

Stanford와 UC Berkeley 연구팀이 개발한 오픈소스 VLA 모델이다[^5].

| 항목 | 내용 |
|------|------|
| 파라미터 수 | 7B |
| 학습 데이터 | Open X-Embodiment 970k 궤적 |
| 기반 모델 | Llama 2 + DINOv2 + SigLIP |
| 학습 인프라 | 64x A100 GPU, 15일 |

WidowX와 Google Robot embodiment에서 29개 평가 태스크에 걸쳐 RT-2-X(55B) 대비 **16.5% 높은 성공률**을 달성했다. BridgeData V2의 WidowX 태스크에서 특히 강력한 성능을 보여준다.

LoRA를 통한 효율적 파인튜닝과 양자화를 통한 경량화를 지원하여, 소비자용 GPU에서도 운용 가능하다.

[^5]: Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model", arXiv:2406.09246, 2024.

**주요 논문:**
- Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model" (2024)

### Pi0 (Physical Intelligence)

Physical Intelligence에서 개발한 범용 로봇 제어를 위한 VLA 플로우 모델이다[^6].

| 항목 | 내용 |
|------|------|
| 기반 모델 | PaliGemma VLM |
| 학습 데이터 | 7개 로봇 플랫폼, 68개 태스크 |
| 제어 주파수 | 최대 50Hz |
| 액션 생성 | Flow Matching (Diffusion 변형) |

빨래 접기, 테이블 정리, 장보기 봉지 담기, 박스 조립 등 복잡한 실제 태스크에서 zero-shot 및 파인튜닝 성능을 입증했다. 단일 암, 양팔, 모바일 매니퓰레이터 등 다양한 로봇 타입에서 cross-embodiment 학습을 지원한다.

2025년 2월 OpenPI 프레임워크를 오픈소스로 공개했으며, Trossen AI 하드웨어와 완전 통합되었다.

[^6]: Black et al., "Pi0: A Vision-Language-Action Flow Model for General Robot Control", arXiv:2410.24164, 2024.

**주요 논문:**
- Black et al., "Pi0: A Vision-Language-Action Flow Model for General Robot Control" (2024)

---

## See Also

- [하드웨어 목록](../index.md)
- [ALOHA](aloha.md)
- [Dynamixel 서보](../actuators/dynamixel.md)
- [Open X-Embodiment](../../datasets/open-x-embodiment.md)

---

## References

### 공식 문서
- [Trossen Robotics 공식 사이트](https://www.trossenrobotics.com/)
- [Interbotix X-Series Arms Documentation](https://docs.trossenrobotics.com/interbotix_xsarms_docs/)
- [Interbotix GitHub](https://github.com/interbotix)
- [WidowX AI 제품 페이지](https://www.trossenrobotics.com/widowx-ai)
- [ROBOTIS Dynamixel e-Manual](https://emanual.robotis.com/)

### 데이터셋
- [Open X-Embodiment Dataset](https://robotics-transformer-x.github.io/)
- [BridgeData V2](https://rail-berkeley.github.io/bridgedata/)

### 논문
- [ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation](https://aloha-2.github.io/)
- [Mobile ALOHA: Learning Bimanual Mobile Manipulation](https://arxiv.org/abs/2401.02117)
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://openvla.github.io/)
- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)
- [Pi0: A Vision-Language-Action Flow Model](https://arxiv.org/abs/2410.24164)
- [BridgeData V2: A Dataset for Robot Learning at Scale](https://arxiv.org/abs/2308.12952)

### 소프트웨어
- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [OpenPI (Physical Intelligence)](https://github.com/Physical-Intelligence/openpi)
