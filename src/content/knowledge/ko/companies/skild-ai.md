---
title: Skild AI
description: Skild AI - Carnegie Mellon 출신 로봇 Foundation Model 스타트업
tags: [skild-ai, foundation-model, cmu, simulation]
category: companies

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Overview

Skild AI는 Carnegie Mellon University 교수진이 설립한 로보틱스 AI 스타트업으로, 범용 로봇 "두뇌"를 개발합니다. 2024년 $300M 시리즈 A 라운드로 $1.5B 기업가치를 달성했습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Pittsburgh, PA |
| 설립 | 2023년 |
| 공동 창업자 | Deepak Pathak, Abhinav Gupta |
| 펀딩 | $300M (시리즈 A) |
| 기업가치 | $1.5B (2024) |
| 투자자 | Lightspeed, Coatue, SoftBank, Bezos |

---

## 창업팀

### Deepak Pathak (CEO)

- Carnegie Mellon 조교수
- 자기지도학습 (Self-supervised Learning) 전문가
- 호기심 기반 강화학습 (Curiosity-driven RL) 연구

### Abhinav Gupta (Chief Scientist)

- Carnegie Mellon 교수
- 로보틱스 + 컴퓨터 비전 전문가
- DARPA, NSF 연구 리더

---

## 접근 방식

### 범용 로봇 두뇌

```
┌─────────────────────────────────────┐
│         Skild Foundation Model      │
│    "Any Robot, Any Task, Anywhere"  │
└─────────────────────────────────────┘
          │
    ┌─────┴─────┐
    ▼           ▼
┌───────┐   ┌───────┐   ┌───────┐
│ 로봇 A│   │ 로봇 B│   │ 로봇 C│
└───────┘   └───────┘   └───────┘
```

### 핵심 전략

| 전략 | 설명 |
|------|------|
| 대규모 시뮬레이션 | 다양한 환경에서 사전학습 |
| Cross-embodiment | 다양한 로봇 형태 지원 |
| Foundation Model | 빠른 새 태스크 적응 |
| General Purpose | 특정 도메인 제한 없음 |

---

## 시뮬레이션 기반 학습

### 데이터 생성

- 대규모 시뮬레이션 환경 구축
- 다양한 물리 시나리오 생성
- Domain Randomization 적용

### Sim-to-Real Transfer

```
[시뮬레이션] ──도메인 랜덤화──→ [강건한 Policy] ──전이──→ [실제 로봇]
```

---

## 기술적 특징

### Self-Supervised Learning

- 레이블 없는 대규모 데이터 활용
- 인터넷 비디오에서 물리 학습
- Curiosity-driven 탐색

### Scalable Architecture

- LLM 스케일링 법칙 로보틱스 적용
- 더 많은 데이터/컴퓨트 → 더 나은 성능
- Cross-robot 일반화

---

## 로드맵

| 시기 | 마일스톤 |
|------|----------|
| 2023 | 회사 설립 |
| 2024.07 | $300M 시리즈 A |
| 2024-25 | Foundation Model 개발 |
| 2025+ | 파트너 로봇 통합 |

---

## 차별화 요소

### vs Physical Intelligence

| 요소 | Skild AI | Physical Intelligence |
|------|----------|----------------------|
| 배경 | CMU 학계 | Google/Stanford |
| 접근법 | 시뮬레이션 중심 | 실제 데이터 중심 |
| 펀딩 | $300M | $400M+ |

### 시뮬레이션 vs 실제 데이터 논쟁

```
Skild: "시뮬레이션으로 무한 데이터 생성 가능"
      + Domain Randomization으로 Sim-to-Real Gap 극복

Physical Intelligence: "실제 물리 상호작용이 필수"
                      + 시뮬레이션의 한계 존재
```

---

## References

- [Skild AI Website](https://www.skild.ai/)
- [TechCrunch - $300M Funding](https://techcrunch.com/2024/07/17/skild-ai-raises-300m/)
- [Forbes - AI Brain for Robots](https://www.forbes.com/sites/alexkonrad/2024/07/17/skild-ai-brain-robots-300-million/)

---

## See Also

- [회사 목록](index.md)
- [시뮬레이션 & World Model](../solutions/simulation-world-model.md)
- [Physical Intelligence](physical-intelligence.md)

