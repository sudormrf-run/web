---
title: Clone Robotics Hand
description: 수압식 인공 근육 기반 생체모방 덱스터러스 핸드
tags: [clone, hydraulic, myofiber, dexterous, biomimetic, artificial-muscle, hand]
category: hardware
created: 2025-02-01
updated: 2026-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Clone Robotics Hand

> Home > Hardware > Hands > Clone Hand

<!-- Image pending: ![Clone Hand](../../assets/hardware/hands/clone-hand.png) -->

---

## Overview

Clone Robotics Hand는 폴란드-미국 스타트업 Clone Robotics가 개발한 **수압식 인공 근육(Myofiber)** 기반의 생체모방 로봇 핸드이다. 8년 이상의 R&D를 통해 개발된 이 기술은 전통적인 전기 모터나 케이블 기반 시스템과 달리, 인간 손의 해부학적 구조를 직접 복제하는 접근 방식을 취한다.

| 항목 | 스펙 |
|------|------|
| 제조사 | Clone Robotics (폴란드/미국) |
| 자유도 (DoF) | 27 (인간 손과 동일) |
| 무게 | 2파운드 미만 (~900g) |
| 파지력 | 6.8kg (15 lbs) |
| 파이버당 힘 | 1kg (3g 파이버 기준) |
| 수축률 | 30% 이상 (무부하) |
| 수축 응답 시간 | 50ms 이내 |
| 생산 비용 | ~$2,800 |
| 내구성 | 650,000+ 사이클 (피로 없음) |

---

## 핵심 의의

Clone Hand의 가장 중요한 기술적 의의는 **생체모방 수압 방식**의 채택이다.

### 전기/텐던 방식 vs 수압 방식

| 특성 | 전기/케이블 방식 | Clone 수압 방식 |
|------|------------------|-----------------|
| 구동 원리 | 모터 + 기어/풀리 | 수압 펌프 + 인공 근육 |
| 자유도 | 16-24 DoF | 27 DoF (인간 동일) |
| 백드라이버빌리티 | 제한적 | 완전한 길항근 구조 |
| 컴플라이언스 | 하드웨어적 강성 | 자연스러운 유연성 |
| 내구성 | 기어/케이블 마모 | 650K+ 사이클 |
| 움직임 | 기계적 | 인간과 유사 |

기존 로봇 핸드(Shadow Hand, Allegro 등)는 전기 모터와 케이블/텐던 시스템을 사용하여 손가락을 구동한다. 이 방식은 정밀 제어가 가능하지만, 인간 손의 자연스러운 움직임과 순응성(compliance)을 재현하는 데 한계가 있다.

Clone은 **인간 근육의 길항근(antagonistic muscle) 구조**를 그대로 모방하여, 각 관절이 두 개의 Myofiber에 의해 당겨지고 이완되는 방식으로 작동한다. 이는 자연스러운 손 움직임과 함께 **충격 흡수**, **안전한 물체 조작**을 가능하게 한다.

---

## Myofiber 기술

### 작동 원리

Myofiber는 Clone Robotics의 핵심 기술인 **수압식 인공 근육**이다. 작은 튜브 형태로, 물이 가압되면 수축하고 감압되면 이완된다.

| 항목 | 사양 |
|------|------|
| 구동 시스템 | 500W 워터 펌프 |
| 밸브 | 36개 전자수압식 밸브 |
| 수축 속도 | 50ms 이내 |
| 수축률 | 30% 이상 (무부하) |
| 단일 파이버 힘 | 1kg (3g 파이버) |
| 재료 | 탄소섬유 뼈, 인대형 테더 |
| 내구성 | 650,000+ 테스트 사이클 |

### Neural Joint V2 컨트롤러

2025년 11월 Clone은 **Neural Joint V2 컨트롤러**를 공개했다. 이 컨트롤러는 인간 손 움직임 영상을 학습한 신경망을 사용하여, 사전 정의된 명령어가 아닌 **모션 자체를 이해**하고 재현할 수 있다.

- 학습 데이터: 인간 손 움직임 수 시간 분량의 영상
- 방식: 뉴럴 네트워크 기반 모션 생성
- 장점: 자연스러운 동작 전이, 적응적 제어

---

## Protoclone 통합

Clone Hand는 Clone Robotics의 전신 안드로이드 프로젝트 **Protoclone V1** 및 **Clone Alpha**에 통합된다.

### Protoclone V1 사양

| 항목 | 스펙 |
|------|------|
| 자유도 | 200+ DoF (상체 164 DoF) |
| Myofibers | ~1,000개 |
| 센서 | 500+ (4 depth 카메라, 70 IMU, 320 압력 센서) |
| 골격 | 206개 폴리머 뼈 (인간 해부학 모방) |
| 컴퓨팅 | NVIDIA Jetson Thor + Cybernet 모델 |
| 냉각 | 수분 기반 "땀" 시스템 |
| 생산 계획 | 279 Alpha 유닛 (2025년) |
| 목표 가격 | ~$20,000 (2026년 대량 생산) |

### 상체 자유도 분배

Protoclone의 상체 164 DoF는 다음과 같이 분배된다 (양팔 기준):

| 부위 | DoF | 비고 |
|------|-----|------|
| 어깨 | 20 | 양쪽 합계 |
| 척추 | ~36 | 6 DoF/척추 x ~6 세그먼트 |
| 손목/팔꿈치 | 12 | 6 DoF x 양쪽 |
| 손 (Clone Hand) | 54 | 27 DoF x 양쪽 |
| **총합** | ~122+ | 상체 주요 관절 |

*참고: 164 DoF는 위 주요 관절 외 미세 관절 포함*

Protoclone은 가정용 및 상업용 작업(요리, 청소 등)을 목표로 하며, 생체모방 로봇 공학의 이정표를 나타낸다.

---

## 특징 요약

- **완전한 생체모방 설계**: 인간 손의 27 DoF 완벽 재현
- **수압식 인공 근육**: 전기 모터 대비 자연스러운 움직임
- **길항근 구조**: 백드라이버빌리티와 컴플라이언스 확보
- **뛰어난 내구성**: 650,000+ 사이클 (피로 없음)
- **Neural Joint V2**: AI 기반 모션 학습 컨트롤러
- **텔레오퍼레이션**: 센서 장갑을 통한 원격 조작 지원

---

## 경쟁사 비교

| 특성 | Clone Hand | Shadow Hand | Allegro Hand |
|------|------------|-------------|--------------|
| 구동 방식 | 수압 (Myofiber) | 전기 모터 + 텐던 | 전기 모터 |
| 자유도 | 27 DoF | 20 DoF (24 움직임) | 16 DoF |
| 무게 | ~900g | ~4kg | ~1.1kg |
| 컴플라이언스 | 높음 (내재적) | 중간 | 중간 |
| 자연스러움 | 높음 | 중간 | 중간 |
| 가격 | ~$2,800 | ~$110,000+ | ~$15,000 |

---

## 회사 정보

Clone Robotics는 2021년 **Dhanush Radhakrishnan** (CEO)과 **Łukasz Koźlik** (리드 엔지니어)가 공동 창업했다. 본사는 폴란드 바르샤바에 위치하며, 미국에도 사무소를 운영한다.

Koźlik은 2019년 첫 프로토타입 영상을 유튜브에 공개하여 바이럴을 일으켰으며, 이후 8년 이상의 R&D를 거쳐 현재의 Myofiber 기술을 완성했다. 폴란드에서의 제조로 미국 대비 개발 및 생산 비용을 크게 절감했다.

---

## References

- [Clone Robotics 공식 사이트](https://clonerobotics.com/)
- [Clone Hand 제품 페이지](https://clonerobotics.com/hand/)
- [Clone Android 페이지](https://clonerobotics.com/android/)
- [Clone Company 정보](https://clonerobotics.com/company/)

---

## See Also

- [하드웨어 목록](../index)
- [Shadow Hand](shadow-hand)
- [Allegro Hand](allegro)
