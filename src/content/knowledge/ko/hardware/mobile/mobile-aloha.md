---
title: Mobile ALOHA
description: Stanford IRIS Lab의 저비용 전신 텔레오퍼레이션 모바일 양팔 조작 플랫폼
tags: [mobile-aloha, stanford, bimanual, teleoperation, mobile, aloha, co-training, imitation-learning, agilex, viperx]
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

- **모바일 양팔 조작의 민주화**: 기존 $200,000+ 수준의 모바일 매니퓰레이터를 ~$32,000로 구현 - 연구 접근성 대폭 향상
- **전신 텔레오퍼레이션**: 테이블탑 조작을 넘어 이동하며 양팔을 사용하는 복잡한 가사 태스크 수행 가능
- **Co-Training 패러다임**: 기존 정적 ALOHA 데이터셋과 공동 학습하여 50개 시연만으로 80-90% 성공률 달성
- **오픈소스 생태계**: 하드웨어 설계, 소프트웨어, 3D 프린팅 파일, 조립 튜토리얼 전체 공개
- **실용적 가사 로봇 연구**: 요리, 청소, 엘리베이터 호출 등 실제 생활 태스크 시연으로 범용 가정용 로봇의 가능성 입증

<!-- Image pending: ![Mobile ALOHA](../../assets/hardware/mobile/mobile-aloha.png) -->

---

## Overview

Mobile ALOHA는 Stanford IRIS Lab에서 개발한 저비용 전신 텔레오퍼레이션 시스템입니다. 기존 테이블탑 전용이던 ALOHA 시스템을 이동형 베이스 위에 탑재하여, 이동과 양팔 조작을 동시에 수행하는 복잡한 태스크를 학습할 수 있게 했습니다.

| 항목 | 스펙 |
|------|------|
| 개발 | Stanford IRIS Lab |
| 저자 | Zipeng Fu*, Tony Z. Zhao*, Chelsea Finn |
| 발표 | arXiv: 2024년 1월 / CoRL 2024 발표 |
| 베이스 | AgileX Tracer AGV |
| 암 | ViperX 300 6-DoF x 2 (팔로워) + WidowX 250 x 2 (리더) |
| 그리퍼 | 커스텀 평행 그리퍼 (3D 프린팅) |
| 카메라 | 손목 x 2 + 전방 1 (Logitech C922x) |
| 컴퓨트 | 노트북 (RTX 3070 Ti, i7-12800H) |
| 총 비용 | ~$32,000 |
| 논문 | [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) |
| 프로젝트 | [mobile-aloha.github.io](https://mobile-aloha.github.io/) |

---

## 하드웨어 구성

### 모바일 베이스: AgileX Tracer AGV

> 출처: [AgileX TRACER Documentation](https://docs.trossenrobotics.com/agilex_tracer_docs/specifications.html)

| 항목 | 스펙 |
|------|------|
| 구동 | 2륜 디퍼런셜 드라이브 + 4개 프리휠 캐스터 |
| 모터 | 150W 브러시리스 서보 x 2 |
| 최대 속도 | 1.6 m/s (인간 보행 속도) |
| 페이로드 | 100 kg |
| 크기 (L x W x H) | 702 x 610 x 169 mm |
| 지상고 | 30 mm |
| 장애물 통과 | 10 mm 높이, 8도 경사 |
| 운용 시간 | 최대 4시간 (100kg 적재) |
| 가격 | ~$7,000 |

### 로봇 암: ViperX 300 6-DoF

> 출처: [Trossen Robotics ViperX 300](https://www.trossenrobotics.com/viperx-300)

| 항목 | 스펙 |
|------|------|
| 구성 | 팔로워 2대 (자율 실행용) |
| 암 자유도 | 6-DoF (암 본체) |
| 그리퍼 | 1-DoF (열림/닫힘) |
| **암+그리퍼 총 DoF** | **7-DoF per arm** |
| 수평 도달 | 75 cm (베이스 중심~그리퍼) |
| 총 스팬 | 150 cm |
| 작업 페이로드 | 750 g |
| 서보 | DYNAMIXEL XM540-W270-R, XM430-W350-R |
| 해상도 | 4096 positions |
| 소재 | 20mm x 40mm 압출 알루미늄 |
| 가격 | ~$6,130 x 2 |

### 텔레오퍼레이션 리더 암: WidowX 250 6-DoF

| 항목 | 스펙 |
|------|------|
| 구성 | 리더 2대 (데이터 수집용) |
| 특징 | 3D 프린팅 인체공학적 핸들 |
| 용도 | 시연 데이터 수집 시에만 사용 |
| 가격 | ~$3,550 x 2 |

### 센서 및 컴퓨트

| 항목 | 스펙 |
|------|------|
| 카메라 | Logitech C922x x 3 |
| 해상도 | 640 x 480 |
| 제어 주파수 | 50 Hz (카메라 스트리밍 및 정책 실행) |
| 배치 | 손목 2개 + 전방 1개 |
| 컴퓨트 | 소비자급 노트북 |
| GPU | NVIDIA RTX 3070 Ti (8GB VRAM) |
| CPU | Intel i7-12800H |
| 통신 | USB 시리얼 (암) + CAN bus (베이스) |

### 전원 시스템

| 항목 | 스펙 |
|------|------|
| 배터리 | 1.26 kWh |
| 무게 | 14 kg |
| 위치 | 베이스 하단 (균형추 역할 겸용) |
| 특징 | 무선 운용 (언테더드) |

---

## 비용 내역 (~$32,000)

> 출처: [Mobile ALOHA Project Page](https://mobile-aloha.github.io/), [Trossen Robotics](https://www.trossenrobotics.com/)

| 구성요소 | 가격 (USD) | 비고 |
|----------|-----------|------|
| AgileX Tracer AGV | ~$7,000 | 모바일 베이스 |
| ViperX 300 6-DoF x 2 | ~$12,260 | 팔로워 암 |
| WidowX 250 6-DoF x 2 | ~$7,100 | 리더 암 (텔레옵용) |
| 배터리 (1.26kWh) | ~$2,000 | 추정치 |
| 카메라 (C922x x 3) | ~$300 | RGB 웹캠 |
| 3D 프린팅 부품 | ~$500 | 그리퍼, 마운트 등 |
| 기타 하드웨어 | ~$2,840 | 브라켓, 케이블 등 |
| **총계** | **~$32,000** | 프로젝트 페이지 공식 명시 |

> 비교: 기존 상업용 모바일 매니퓰레이터 (예: Clearpath + 듀얼 암)는 $200,000 이상

---

## 물리적 사양

> 출처: [Mobile ALOHA Project Page](https://mobile-aloha.github.io/)

| 항목 | 스펙 |
|------|------|
| 풋프린트 | 90 cm x 135 cm |
| 암 도달 높이 | 65 cm ~ 200 cm |
| 암 전방 확장 | 100 cm (베이스 기준) |
| 총 무게 | 75 kg |
| 당기기 힘 | 100 N @ 1.5 m 높이 |
| 이동 속도 | 최대 1.6 m/s |

---

## 정적 ALOHA와의 차이점

| 항목 | ALOHA (정적) | Mobile ALOHA |
|------|-------------|--------------|
| 베이스 | 고정 테이블 | AgileX Tracer (이동형) |
| 액션 차원 | 14-DoF (양팔+그리퍼) | 16-DoF (양팔+그리퍼 + 베이스 속도) |
| 태스크 범위 | 테이블탑 조작 | 전체 실내 환경 |
| 텔레옵 방식 | 손으로 리더 암 조작 | 전신 텔레옵 (걸으며 조작) |
| 비용 | ~$20,000 | ~$32,000 |
| 적재 | 고정 | 자가 균형 (배터리 무게 활용) |

### 액션 공간 확장

> DoF 설명: 각 ViperX 300 암은 6-DoF (암) + 1-DoF (그리퍼) = 7-DoF

```
ALOHA: 14-DoF 관절 위치
       [arm1(6) + gripper1(1) + arm2(6) + gripper2(1)]

Mobile ALOHA: 16-DoF
       [arm1(6) + gripper1(1) + arm2(6) + gripper2(1) + base_linear_vel(1) + base_angular_vel(1)]
```

이 설계로 기존 imitation learning 알고리즘을 거의 수정 없이 적용 가능합니다.

---

## Co-Training: 핵심 기술

### 동기

모바일 양팔 조작 데이터셋은 희소하지만, 정적 양팔 조작 데이터는 풍부합니다. Co-training은 이 두 종류의 데이터를 함께 학습하여 성능을 향상시킵니다.

### 방법

```
학습 데이터 = Mobile ALOHA 시연 (50개) + 정적 ALOHA 데이터셋 (기존)

모바일 데이터: 전체 16-DoF 액션
정적 데이터: 14-DoF 액션 (베이스 속도 = 0으로 패딩)
```

### 효과

| 조건 | 평균 성공률 |
|------|-----------|
| Mobile 데이터만 | ~50% |
| Co-training 적용 | **~84%** |
| 개선폭 | **+34%p** |

---

## 시연된 태스크

> 출처: [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) Table 1

### 성공률 (50개 시연, Co-training 적용)

| 태스크 | 성공률 | 설명 |
|--------|--------|------|
| Wipe Wine | **95%** | 와인 흘림 닦기 |
| Call Elevator | **95%** | 엘리베이터 호출 및 탑승 |
| Use Cabinet | **85%** | 벽 캐비닛 열고 냄비 수납 |
| High Five | **85%** | 하이파이브 |
| Rinse Pan | **80%** | 주방 수도로 팬 헹구기 |
| Push Chairs | **80%** | 의자 정리 |
| Cook Shrimp | **40%** | 새우 볶기 (75초, 20개 시연만 사용) |

### 태스크 카테고리

**요리 (Cooking)**
- 새우 볶아서 서빙
- 냄비/팬 다루기
- 싱크대에서 헹구기

**정리 (Cleaning/Organizing)**
- 와인 흘림 닦기
- 의자 밀어 정리
- 캐비닛에 물건 수납
- 청소기 사용

**이동 + 조작 (Navigation + Manipulation)**
- 엘리베이터 버튼 누르고 탑승
- 방 간 이동하며 물건 운반

**상호작용 (Interaction)**
- 하이파이브
- 사람에게 물건 전달

---

## 기술적 세부사항

### 지원 알고리즘

| 알고리즘 | 설명 |
|----------|------|
| [ACT](../../models/act.md) | Action Chunking Transformer |
| Diffusion Policy | Diffusion 기반 행동 생성 |
| VINN | Visual Imitation through Nearest Neighbors |

### 시뮬레이션 환경

- Transfer Cube
- Bimanual Insertion

### 학습 설정

| 항목 | 값 |
|------|-----|
| 시연 수 | 50개/태스크 |
| 제어 주파수 | 50 Hz |
| 이미지 해상도 | 640 x 480 |
| 카메라 수 | 3개 (손목 2 + 전방 1) |

---

## 오픈소스 리소스

### 공개 자료

| 리소스 | 링크 |
|--------|------|
| 논문 | [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) |
| 프로젝트 페이지 | [mobile-aloha.github.io](https://mobile-aloha.github.io/) |
| GitHub (하드웨어) | [mobile-aloha](https://github.com/MarkFzp/mobile-aloha) |
| GitHub (알고리즘) | [act-plus-plus](https://github.com/MarkFzp/act-plus-plus) |
| 조립 튜토리얼 | 프로젝트 페이지 내 |
| 3D 프린팅 파일 | GitHub 내 포함 |

### 튜토리얼 내용

- 3D 프린팅 가이드
- 조립 순서
- 소프트웨어 설치
- 캘리브레이션 방법
- 텔레오퍼레이션 사용법

---

## 연구팀 및 지원

### 저자

| 이름 | 역할 |
|------|------|
| [Zipeng Fu](https://zipengfu.github.io/) | 공동 제1저자 |
| [Tony Z. Zhao](../people/tony-zhao.md) | 공동 제1저자 |
| [Chelsea Finn](../people/chelsea-finn.md) | 지도교수 |

### 지원

- Stanford Robotics Center
- Steve Cousins
- Stanford IRIS Lab 멤버들

---

## 후속 발전

### ALOHA 2 (Google DeepMind, 2024)

Google DeepMind에서 개선된 하드웨어 버전 발표:
- 향상된 강성 및 정밀도
- 개선된 그리퍼 설계
- 더 나은 케이블 관리

### 상업화

Trossen Robotics에서 ALOHA 키트 판매:
- ALOHA Solo
- ALOHA Bimanual Kit
- Mobile ALOHA 호환 부품

---

## 의의 및 영향

### 학술적 영향

- **Co-training 효과 입증**: 관련 태스크 데이터로 성능 향상 가능
- **저비용 연구 플랫폼**: $32K로 고품질 연구 가능
- **재현성**: 완전한 오픈소스로 전 세계 연구실에서 복제 가능

### 산업적 함의

> "Mobile ALOHA has demonstrated something unique: relatively cheap robot hardware can solve really complex problems." - Lerrel Pinto, NYU

- 가정용 로봇의 실현 가능성 시연
- 저비용 하드웨어로도 복잡한 태스크 수행 가능
- 데이터 수집 비용 대폭 절감

---

## References

### 논문

```bibtex
@article{fu2024mobile,
  author    = {Fu, Zipeng and Zhao, Tony Z. and Finn, Chelsea},
  title     = {Mobile ALOHA: Learning Bimanual Mobile Manipulation
               with Low-Cost Whole-Body Teleoperation},
  journal   = {arXiv preprint arXiv:2401.02117},
  year      = {2024},
  note      = {Presented at CoRL 2024}
}
```

### 링크

- [Mobile ALOHA Project Page](https://mobile-aloha.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2401.02117)
- [GitHub - Hardware](https://github.com/MarkFzp/mobile-aloha)
- [GitHub - ACT++](https://github.com/MarkFzp/act-plus-plus)
- [Stanford News](https://news.stanford.edu/stories/2024/04/mobile-aloha-robot-is-a-quick-learner)
- [MIT Technology Review](https://www.technologyreview.com/2024/01/15/1086592/watch-this-robot-cook-shrimp-and-clean-autonomously/)

---

## See Also

- [하드웨어 목록](../index.md)
- [ALOHA (정적)](../arms/aloha.md)
- [ACT](../../models/act.md)
- [Tony Zhao](../../people/tony-zhao.md)
- [Chelsea Finn](../../people/chelsea-finn.md)
