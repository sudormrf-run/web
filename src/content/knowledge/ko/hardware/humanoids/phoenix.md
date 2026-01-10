---
title: Sanctuary Phoenix
description: Sanctuary AI의 인지 휴머노이드 범용 로봇
tags: [sanctuary, phoenix, humanoid, cognitive, carbon, canada, magna]
category: hardware
last_updated: 2025-02-01
---

# Sanctuary Phoenix

> Home > Hardware > Humanoids > Phoenix

<!-- TODO: 이미지 추가 필요 -->
<!-- Image pending: ![Phoenix](../../assets/hardware/humanoids/phoenix.png) -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Sanctuary AI (캐나다, 밴쿠버) |
| 최신 버전 | Gen 8 (2025.02) |
| AI 시스템 | Carbon |
| 핵심 접근법 | 인지 일반화 (Cognitive Generalization) |
| 가격 | ~$40,000 [^1] |

[^1]: Robozaps 2024 리뷰 기준. 실제 가격은 구성 및 계약 조건에 따라 변동 가능.

---

## 핵심 의의

Sanctuary AI Phoenix는 **인지 아키텍처(Cognitive Architecture)** 중심 접근법을 대표하는 휴머노이드다. 대부분의 경쟁사가 end-to-end 학습이나 모방 학습에 집중하는 반면, Sanctuary AI는 인간 두뇌의 인지 시스템을 모방한 Carbon 플랫폼을 통해 **설명 가능하고 감사 가능한(explainable & auditable)** 로봇 지능을 구현한다. 텔레프레즌스 기반 학습으로 24시간 내 새 작업 자동화가 가능하며[^2], Magna와의 파트너십을 통해 자동차 제조업 진출을 본격화하고 있다.

[^2]: TechCrunch 2024.04 보도 기준. Gen 7 이후 적용.

---

## 회사 배경

### Sanctuary AI
| 항목 | 내용 |
|------|------|
| 설립 | 2018년 |
| 본사 | 밴쿠버, 캐나다 |
| CEO | Geordie Rose (D-Wave 공동창업자) |
| 핵심 미션 | "Creating the world's first human-like intelligence in general-purpose robots" |

Sanctuary AI는 D-Wave Systems(양자 컴퓨터)의 공동창업자 Geordie Rose가 설립한 회사로, 범용 인공지능(AGI)의 물리적 구현을 목표로 한다. 밴쿠버 기반의 캐나다 AI 로보틱스 생태계를 대표하는 기업이다.

### 펀딩 및 파트너십
- **Series A** (2022.03): $75.5M - Magna Technology Investments 참여 [^3]
- **Magna 전략적 파트너십** (2024): 제조 협력 및 지분 투자 [^4]
- **Microsoft Azure 파트너십** (2024.05): 클라우드 인프라 통합

[^3]: The Robot Report 2024.04 보도 기준.
[^4]: Sanctuary AI 공식 발표 2024.04 기준.

---

## 기술 스펙

> **출처**: Sanctuary AI 공식 웹사이트, QVIRO, Humanoid.guide (2024년 기준)
> 스펙은 세대별로 상이할 수 있으며, 최신 정보는 공식 자료 확인 권장.

### 하드웨어

| 항목 | 스펙 | 출처 |
|------|------|------|
| 높이 | 170 cm | QVIRO, Humanoid.guide |
| 무게 | 70 kg | QVIRO, Humanoid.guide |
| 손 DoF | 20 (양손) | Sanctuary AI 공식 |
| 최대 페이로드 | 25 kg | QVIRO |
| 이동 속도 | 4.8 km/h | New Atlas |
| 이동 방식 | 휠 플랫폼 (하이브리드, 다리 장착) | New Atlas |

### 손 (Hand)
Phoenix의 가장 큰 강점은 인간과 유사한 **20 DoF 손**이다:
- 독자적인 햅틱 피드백 기술
- 인간 수준의 세밀한 조작 능력
- 촉각 센싱 통합
- 내구성 강화 설계 (Gen 7+)

### 작동 모드
1. **직접 조종 (Direct Piloted)**: 텔레오퍼레이션
2. **파일럿 어시스트 (Pilot-Assist)**: 반자율
3. **자율 모드 (Autonomous)**: Carbon AI 기반 완전 자율

---

## Carbon AI 시스템

Carbon은 Sanctuary AI의 독자적인 **인지 아키텍처(Cognitive Architecture)** 플랫폼이다.

### 아키텍처 구성

```
Carbon Architecture
├── 인지 시스템 (Cognitive Systems)
│   ├── 메모리 (Memory)
│   ├── 시각 (Vision)
│   ├── 청각 (Auditory)
│   └── 촉각 (Touch)
├── 추론 엔진 (Reasoning Engine)
│   ├── 기호적/논리적 추론 (Symbolic & Logical)
│   └── 설명 가능한 의사결정 (Explainable)
├── AI 기술 통합
│   ├── LLM (자연어 이해)
│   ├── Deep Learning
│   └── Reinforcement Learning
└── 행동 시스템 (Action Systems)
    ├── Task Planning
    └── Motion Planning
```

> **출처**: Sanctuary AI Technology 페이지 및 New Atlas 기술 분석 (2023-2024)

### 핵심 특징
- **설명 가능성**: 의사결정 과정이 감사 가능
- **자연어 인터페이스**: 언어 명령을 실제 행동으로 변환
- **목표 지향적 행동 (Goal-seeking Behaviors)**: 에이전시 기반 자율성
- **도메인별 확장 가능**: 다양한 산업 적용

### 학습 방식
텔레프레즌스 기반 모방 학습:
1. 운영자가 VR 헤드셋 + 모션 캡처 착용
2. 로봇의 시각/촉각 피드백을 실시간 수신
3. 운영자 행동을 로봇이 관찰하며 패턴 학습
4. 작업별 행동 레퍼토리 자동 구축
5. 임계점 도달 시 자율 수행 전환

---

## 세대별 발전

> **출처**: Sanctuary AI 공식 발표, TechCrunch, New Atlas (2023-2025)

| 세대 | 출시 | 주요 개선점 |
|------|------|------------|
| Gen 5 | 2023.01 | 최초 상용 배포 |
| Gen 6 | 2023 중반 | 다리 도입, TIME 2023 최고 발명품 선정 |
| Gen 7 | 2024.04 | 작업 자동화 속도 50배 향상, 24시간 내 새 작업 학습 |
| Gen 8 | 2025.02 | 고품질 데이터 캡처 최적화, FOV/텔레메트리 개선 |

### Gen 7 주요 개선사항 (2024.04 발표)
- 시각 정확도 및 촉각 센싱 대폭 향상
- 손목, 손, 팔꿈치 가동 범위 증가
- 소형화된 유압 시스템 (무게, 전력 소비, 복잡성 감소)
- 제조 비용 절감 및 생산 속도 향상
- "가장 사람에 가까운 시스템" - Geordie Rose CEO

### Gen 8 주요 개선사항 (2025.02 발표)
- 고품질 학습 데이터 캡처에 최적화
- 시야각(FOV) 확대
- 텔레메트리 시스템 개선
- 인간-로봇 상호작용 강화
- 제조/커미셔닝 시간 단축

---

## Magna 파트너십

### 배경
- Magna International: 캐나다 기반 글로벌 자동차 부품 제조사
- 2021년부터 Sanctuary AI 투자자 (Series A $75.5M 참여)

### 파트너십 내용 (2024년 4월 발표) [^4]
1. **Magna 제조시설에 Phoenix 배포**
2. **Phoenix 로봇 계약 제조**: Magna의 자동차 제조 역량 활용
3. **비용/확장성 평가**: Magna 엔지니어링 노하우로 로봇 개선
4. **전략적 지분 투자**: 심화된 협력 관계

### 의의
- 자동차 제조업 자동화율 현재 약 10% 수준 → 대규모 성장 기회 [^5]
- Mercedes-Benz/Apptronik, BMW/Figure, Tesla/Optimus와 경쟁 구도
- 캐나다 기업 간 파트너십으로 현지 생태계 강화

[^5]: The Robot Report 2024 추정치.

---

## 산업 배포 현황

Sanctuary AI는 12개 이상 산업에서 수백 개 작업을 시연했다 (2024년 기준):

| 산업 | 적용 분야 |
|------|----------|
| 자동차 제조 | Magna 공장 파일럿 |
| 물류 | 물품 분류, 피킹 |
| 소매 | 재고 관리 |
| 항공우주 | 부품 조립 |

---

## 경쟁 비교

> **주의**: 아래 표는 2024-2025년 공개 자료 기준 추정치입니다.
> 각 제조사의 사양은 버전/구성에 따라 상이하며, 최신 정보는 공식 자료 확인을 권장합니다.
> **최종 업데이트**: 2025.02

| 특성 | Phoenix | Figure 02 | Optimus |
|------|---------|-----------|---------|
| 접근법 | 인지 아키텍처 | VLA (Helix) | End-to-End |
| 손 DoF | 20 [^6] | 24 [^7] | 22+3 [^8] |
| 이동 | 휠 (하이브리드) | 이족 보행 | 이족 보행 |
| 학습 시간 | ~24시간 | 미공개 | 미공개 |
| 가격 | ~$40K | ~$100K+ | $20-30K (목표) |

[^6]: Sanctuary AI 공식 발표.
[^7]: Figure AI 2024 발표 기준.
[^8]: Tesla 2024 공개 자료 기준.

**Phoenix의 차별점**:
- 인지 아키텍처 기반 설명 가능한 AI
- 빠른 작업 학습 (24시간 이내)
- 성숙한 햅틱 손 기술
- Magna와의 제조 파트너십

---

## 기술 로드맵

### 현재 (2025)
- Gen 8 배포 및 데이터 수집 최적화
- Magna 공장 본격 파일럿
- 광범위 판매용 버전 개발

### 향후 방향
- 완전 이족 보행 버전 개발
- Carbon AI 고도화
- 글로벌 제조업 확대

---

## 관련 리소스

### 공식 자료
- [Sanctuary AI 공식 웹사이트](https://www.sanctuary.ai)
- [Sanctuary AI Technology](https://www.sanctuary.ai/technology)

### 뉴스 및 분석
- [TechCrunch - Sanctuary's new humanoid robot learns faster (2024.04)](https://techcrunch.com/2024/04/25/sanctuarys-new-humanoid-robot-learns-faster-and-costs-less/)
- [New Atlas - Sanctuary AI Phoenix](https://newatlas.com/robotics/sanctuary-ai-phoenix-humanoid-robot/)
- [The Robot Report - Magna Partnership (2024.04)](https://www.therobotreport.com/sanctuary-ai-enters-strategic-relationship-with-magna-to-build-embodied-ai-robots/)
- [QVIRO Phoenix Specifications](https://qviro.com/product/sanctuary-ai/phoenix/specifications)
- [Humanoid.guide - Phoenix](https://humanoid.guide/product/phoenix/)

---

## See Also

- [하드웨어 목록](../index.md)
- [Figure 휴머노이드](figure.md)
- [Tesla Optimus](optimus.md)
- [Apollo (Apptronik)](apollo.md)
