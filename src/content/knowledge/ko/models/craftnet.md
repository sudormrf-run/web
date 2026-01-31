---
title: CraftNet
description: Sharpa의 촉각 기반 Vision-Tactile-Language-Action (VTLA) 모델
tags: [craftnet, sharpa, vtla, tactile, fine-manipulation, hierarchical]
category: models

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-30
---

<div class="author-note">

### 필자의 의견

- CraftNet은 촉각을 VLA에 본격적으로 통합한 최초의 상용 모델입니다.
- System 0/1/2 계층 구조가 Figure Helix 02와 유사하지만, 촉각 피드백에 특화된 점이 차별화됩니다.
- "마지막 1mm" 문제를 해결하기 위한 100Hz 고주파 촉각 제어가 핵심입니다.

</div>

## 핵심 의의

- **최초의 상용 VTLA**: Vision-Tactile-Language-Action, 촉각을 핵심 모달리티로 통합
- **3단계 계층 아키텍처**: System 2(~1Hz) + System 1(~10Hz) + System 0(~100Hz)
- **"마지막 1mm" 해결**: 접촉 후 정밀 조작을 위한 고주파 촉각 피드백 루프
- **합성 촉각 데이터**: 시뮬레이션, 텔레오퍼레이션, 인터넷 비디오에 촉각 정보 합성
- **SharpaWave 통합**: 1,000+ 촉각 픽셀, 0.005N 민감도의 촉각 손과 결합

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/W7q-qlj4EFc" title="Sharpa CES 2026 Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p align="center"><em>Sharpa CES 2026 데모 - North 휴머노이드와 CraftNet</em></p>

---

## Overview

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 |
| 회사 | Sharpa (싱가포르) |
| 블로그 | [sharpa.com/blogs/news](https://www.sharpa.com/blogs/news/sharpa-announces-craftnet-a-hierarchical-vtla-model-for-fine-manipulation) |
| 로봇 | North 휴머노이드 |
| 하드웨어 | SharpaWave 촉각 손 |

CraftNet은 Sharpa가 개발한 계층적 Vision-Tactile-Language-Action (VTLA) 모델로, 정밀 조작(fine manipulation)을 위해 설계되었습니다.

---

## Architecture: System 0/1/2

CraftNet은 세 가지 주파수 대역에서 동작하는 계층적 시스템입니다.

![CraftNet Architecture](/assets/models/craftnet/craftnet.webp)
<p align="center"><em>CraftNet 아키텍처: System 0/1/2 계층 구조</em></p>

### System 2 (Reasoning Brain) - ~1 Hz

| 항목 | 내용 |
|------|------|
| 역할 | 태스크 분해, 장기 계획 |
| 기반 | Vision-Language Model |
| 특징 | 오픈소스 VLM 인터페이스 |

- 인간 명령을 순차적 서브태스크로 분해
- 고수준 추론 및 의사결정
- 인터넷 스케일 데이터로 사전학습된 오픈소스 VLM 활용

### System 1 (Motion Brain) - ~10 Hz

| 항목 | 내용 |
|------|------|
| 역할 | 모션 플래닝, 대략적 액션 제어 |
| 기반 | Foundation Model |
| 특징 | 접촉 전 접근 최적화 |

- 물체 접근까지의 궤적 계획
- 공개/비공개 도메인 데이터로 학습
- System 2의 목표를 실행 가능한 모션으로 변환

### System 0 (Interaction Brain) - ~100 Hz

| 항목 | 내용 |
|------|------|
| 역할 | 초고주파 정밀 모터 제어 |
| 기반 | 촉각 피드백 모델 |
| 특징 | 실시간 접촉 조정 |

- **핵심 차별점**: 실시간 촉각 피드백 처리
- 접촉 중 손/손가락 위치 연속 조정
- 그립, 슬라이딩, 복잡한 조립 태스크 처리

---

## 핵심 기술: 촉각 통합

### 기존 VLA의 한계

기존 VLA는 비전 기반 궤적 생성에 집중하여 세 가지 한계가 있습니다:

1. **촉각 부재**: 힘과 촉각 피드백 없이 비전만 사용
2. **접촉 후 제어 부재**: "마지막 1mm" 조작 불가능
3. **비현실적 시뮬레이션**: 시뮬레이션 데이터의 힘/컴플라이언스 패턴이 현실과 불일치

### CraftNet의 해결책

| 문제 | 해결책 |
|------|--------|
| 촉각 부재 | 비전과 함께 힘/촉각 피드백 통합 |
| 접촉 후 제어 | System 0의 100Hz 고주파 피드백 루프 |
| 데이터 부족 | 합성 촉각 정보로 기존 데이터 강화 |

---

## 데이터 전략

### 합성 촉각 데이터

CraftNet은 다양한 소스의 데이터를 촉각 정보로 강화합니다:

| 데이터 소스 | 처리 방법 |
|------------|----------|
| 시뮬레이션 | 비현실적 힘/컴플라이언스 패턴 보정 |
| 텔레오퍼레이션 | 고품질 데이터로 System 0/1 공동 학습 |
| 인터넷 비디오 | 합성 촉각 정보 추가 |

### 비동기 멀티 주파수 추론

- 세 시스템이 서로 다른 주파수로 독립 동작
- 시간적 디커플링으로 효율적 연산

---

## Hardware: SharpaWave

CraftNet은 Sharpa의 SharpaWave 촉각 손과 함께 사용됩니다.

### 스펙

| 항목 | 스펙 |
|------|------|
| 자유도 | 22 DoF (능동) |
| 촉각 기술 | Dynamic Tactile Array (DTA) |
| 촉각 픽셀 | 손끝당 1,000+ |
| 압력 민감도 | 0.005 N |
| 힘 센싱 | 6축 |
| 내구성 | 100만 회 그립 사이클 |
| 특징 | 모듈식 손가락 교체 |

### Dynamic Tactile Array (DTA)

- **"보면서 느끼는"** 비전-촉각 융합 기술
- 손끝마다 소형 카메라 내장
- 깃털 터치부터 중량물 조작까지 가능

---

## Hardware: North 휴머노이드

CraftNet이 탑재된 Sharpa의 휴머노이드 로봇입니다.

- CES 2026에서 공개
- 완전 자율 탁구 랠리 시연
- SharpaWave 손 탑재

---

## Sharpa 회사 정보

| 항목 | 내용 |
|------|------|
| 설립 | 2024년 |
| 본사 | 싱가포르 |
| R&D | 상하이 |
| 비즈니스 | 마운틴뷰, 미국 |
| 수상 | CES 2026 Innovation Award (로보틱스 부문) |

### 마일스톤

| 시기 | 이벤트 |
|------|--------|
| 2024 | Sharpa 설립 |
| 2025.10 | IROS 2025에서 SharpaWave 시연 |
| 2025.10 | SharpaWave 양산 및 출하 시작 |
| 2025.11 | CES 2026 Innovation Award 수상 |
| 2026.01 | CES 2026에서 North 휴머노이드 공개 |

---

## 다른 계층적 VLA와의 비교

| 모델 | System 2 | System 1 | System 0 | 촉각 |
|------|----------|----------|----------|------|
| CraftNet | ~1Hz (VLM) | ~10Hz (Motion) | ~100Hz (Tactile) | O |
| [Figure Helix 02](figure-helix) | 의미 추론 | 200Hz (Visuomotor) | 1kHz (Balance) | O |
| [GR00T N1](groot-n1) | 10Hz (Eagle VLM) | 120Hz (DiT) | - | X |

---

## References

- [Sharpa - CraftNet 발표](https://www.sharpa.com/blogs/news/sharpa-announces-craftnet-a-hierarchical-vtla-model-for-fine-manipulation)
- [Sharpa - SharpaWave 양산](https://www.sharpa.com/blogs/news/ai-robotmaker-sharpa-reaches-key-milestone-of-mass-production)
- [Sharpa - CES 2026 Award](https://www.sharpa.com/blogs/news/singapores-sharpa-wins-ces-2026-innovation-award-for-groundbreak-ai-robotic-hand-sharpawave)

---

## See Also

- [모델 목록](/knowledge/models/)
- [Figure Helix](figure-helix) - 또 다른 계층적 VLA
- [촉각의 필요성](/knowledge/essays/insights/tactile-sensing)
