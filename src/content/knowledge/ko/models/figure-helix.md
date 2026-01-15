---
title: Figure Helix
description: Figure AI의 휴머노이드 로봇용 VLA 모델
tags: [figure-helix, figure-ai, humanoid, vla, figure-02]
category: models

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

- **최초의 휴머노이드 전신 고속 제어 VLA**: 손목, 몸통, 머리, 개별 손가락까지 상체 전체를 고속 연속 제어하는 최초의 VLA
- **초고속 제어 주파수**: System 1(저수준 제어)이 200Hz로 동작하여 정밀한 실시간 조작 가능
- **듀얼 로봇 동시 제어**: 두 대의 Figure 02가 공유된 장기 조작 태스크를 동시에 해결
- **가장 복잡한 자율 태스크**: Table-to-Dishwasher에서 130+ 피트 이동, 33회 상호작용, 21개 물체(섬세한 식기 포함) 처리
- **상업적 배포 단계**: BMW 공장에서 실제 테스트 진행 중인 Figure 02에 탑재
- **대규모 투자 유치**: Jeff Bezos, Microsoft, NVIDIA, OpenAI 등에서 $675M 펀딩 (기업가치 $2.6B)
- **System 1/2 구조**: 고수준 계획(7-9Hz)과 저수준 제어(200Hz) 분리로 효율적 아키텍처

![Helix Architecture](../assets/models/figure-helix/helix_architecture.avif)
<p align="center"><em>Helix 아키텍처: System 1(200Hz 저수준 제어) + System 2(7-9Hz 고수준 계획)</em></p>

---

## Overview

Helix는 Figure AI가 2025년 2월 발표한 generalist VLA 모델로, 인식, 언어 이해, 학습된 제어를 통합하여 로보틱스의 여러 오래된 과제를 해결합니다. 휴머노이드 전신을 고속 연속 제어하는 최초의 VLA입니다.

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 2월 |
| 회사 | Figure AI |
| 블로그 | [figure.ai/news/helix](https://www.figure.ai/news/helix) |
| 로봇 | Figure 02 (Helix 버전) |

---

## Key Innovations

### 최초의 전신 고속 제어 VLA

Helix는 휴머노이드 상체 전체를 고속 연속 제어하는 **최초의 VLA**:
- 손목
- 몸통
- 머리
- 개별 손가락

### 듀얼 로봇 동시 제어

두 대의 로봇이 **동시에** 작동:
- 공유된 장기 조작 태스크 해결
- 처음 보는 물체도 처리

---

## Architecture

**System 1 / System 2 구조** (Dual-system)

| 시스템 | 역할 | 주파수 |
|--------|------|--------|
| System 2 | 고수준 계획 | 7-9 Hz |
| System 1 | 저수준 제어 | 200 Hz |

---

## Hardware: Figure 02 (Helix)

| 항목 | 스펙 |
|------|------|
| 자유도 | 35 DoF |
| 손 | 인간형 손목, 손, 손가락 |
| 컴퓨팅 | NVIDIA RTX GPU (이전 대비 3배) |
| 카메라 | 6× RGB |
| 손 페이로드 | 최대 25kg |

---

## Performance

### Table-to-Dishwasher 태스크

"로봇이 자율적으로 수행한 가장 복잡한 태스크":

| 항목 | 수치 |
|------|------|
| 이동 거리 | 130+ 피트 |
| 고유 상호작용 | 33회 |
| 물체 수 | 21개 (섬세한 식기 포함) |

### 섬세한 조작

- 한 손에 와인잔 2개 (깨지지 않게)
- 와인잔 식기세척기 삽입
- 한 손으로 수저 2개 집기

---

## Figure AI 히스토리

### Figure 01 (2022)
- 최초 프로토타입
- 이족보행 로봇
- 물류/창고 타겟

### Figure 02 (2024.08)
- 산업용 배포 단계
- BMW 공장 테스트 (사우스캐롤라이나)

### Helix 발표 (2025.02)
- Figure 02 + Helix VLA
- 가정용 태스크 수행

---

## Funding & Partnerships

| 시기 | 내용 |
|------|------|
| 2024.01 | BMW 파트너십 (자동차 제조 배포) |
| 2024.02 | $675M 펀딩 (기업가치 $2.6B) |
| 투자자 | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |

---

## References

- [Figure AI - Helix](https://www.figure.ai/news/helix)
- [Helix Logistics](https://www.figure.ai/news/helix-logistics)
- [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)
- [The Robot Report](https://www.therobotreport.com/figure-humanoid-robots-demonstrate-helix-model-household-chores/)

---

## See Also

- [모델 목록](index.md)
- [GR00T](groot.md)
- [pi0](pi0.md)

