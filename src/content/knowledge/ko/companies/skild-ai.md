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
lastEditedAt: 2026-01-26
---

## Overview

Skild AI는 Carnegie Mellon University 교수진이 설립한 로보틱스 AI 스타트업으로, 범용 로봇 "두뇌"인 Skild Brain을 개발합니다. 2024년 $300M 시리즈 A 라운드로 $1.5B 기업가치를 달성했으며, 2026년 1월 $1.4B 시리즈 C로 $14B 이상의 기업가치에 도달했습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Pittsburgh, PA (샌프란시스코, 벵갈루루 추가 오피스) |
| 설립 | 2023년 |
| 공동 창업자 | Deepak Pathak (CEO), Abhinav Gupta (President) |
| 총 펀딩 | $2.2B+ |
| 기업가치 | $14B+ (2026년 1월) |
| 주요 투자자 | Lightspeed, Coatue, SoftBank Group, Bezos Expeditions, Sequoia, NVIDIA NVentures |

---

## 펀딩 히스토리

| 라운드 | 날짜 | 금액 | 기업가치 |
|--------|------|------|----------|
| Seed | 2023년 | $14.5M | - |
| Series A | 2024년 7월 | $300M | $1.5B |
| Series B | 2025년 5월 | $500M | $4.7B |
| Series C | 2026년 1월 | $1.4B | $14B+ |

시리즈 A 투자자: Lightspeed Venture Partners, Coatue, SoftBank Group, Bezos Expeditions (Jeff Bezos), Felicis Ventures, Sequoia, Menlo Ventures, General Catalyst, CRV, Amazon, SV Angel, Carnegie Mellon University

시리즈 C 투자자: SoftBank Group (리드), NVIDIA NVentures, Macquarie Capital, Bezos Expeditions, Disruptive, 1789 Capital, Samsung, LG, Schneider Electric, CommonSpirit, Salesforce Ventures

---

## 창업팀

### Deepak Pathak (CEO)

- Carnegie Mellon University 로보틱스 연구소 교수
- UC Berkeley AI 박사
- 자기지도학습 (Self-supervised Learning) 전문가
- 호기심 기반 강화학습 (Curiosity-driven RL) 연구로 4,000+ 인용
- IIT 컴퓨터과학 골드메달리스트 (2014)

### Abhinav Gupta (President)

- Carnegie Mellon University 로보틱스 연구소 정교수 (2015년~)
- Facebook AI Research (FAIR) 로보틱스 창립 멤버
- 로보틱스 + 컴퓨터 비전 전문가
- 75,000+ 학술 인용
- NSF, DARPA 연구 펀딩 수령

---

## Skild Brain

### 범용 로봇 두뇌

```
┌─────────────────────────────────────┐
│            Skild Brain              │
│    "Any Robot, Any Task, One Brain" │
└─────────────────────────────────────┘
          │
    ┌─────┴─────┐
    ▼           ▼
┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
│ 휴머노이드│   │ 사족보행│   │ 로봇팔 │   │ 모바일 │
└───────┘   └───────┘   └───────┘   └───────┘
```

### 핵심 특징

| 특징 | 설명 |
|------|------|
| Omni-bodied | 특정 하드웨어 없이 모든 로봇 형태 지원 |
| Cross-embodiment | 휴머노이드, 사족보행, 로봇팔, 모바일 매니퓰레이터 |
| 하드웨어 독립적 | 자체 로봇 제작 없이 소프트웨어 모델 집중 |
| 안전 제약 내장 | 인간과 상호작용 시 힘 출력 제한 |

---

## 학습 방법론

### 데이터 소스

로봇 데이터의 부족 문제 해결을 위한 다각적 접근:

1. **인터넷 비디오**: 인간 행동에서 물리 법칙 학습
2. **시뮬레이션**: NVIDIA Isaac Lab 활용한 대규모 사전학습
3. **World Model**: NVIDIA Cosmos WFM 활용

### Sim-to-Real Transfer

```
[인터넷 비디오] + [시뮬레이션] ──사전학습──→ [Skild Brain] ──전이──→ [실제 로봇]
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

## 상업적 진행

### 매출 성장

- 2025년 수개월 만에 $0 → $30M 매출 달성
- 2026년 지속적인 성장

### 적용 분야

- 보안 및 시설 점검
- 라스트마일 / 포인트-투-포인트 배송
- 물류 창고
- 제조
- 데이터센터
- 건설

### 파트너십

- **LG CNS**: 산업 응용을 위한 파트너십
- **HPE**: AI 솔루션을 활용한 개발 가속화

---

## 차별화 요소

### vs Physical Intelligence

| 요소 | Skild AI | Physical Intelligence |
|------|----------|----------------------|
| 배경 | CMU 학계 | Google DeepMind/Stanford/Berkeley |
| 설립 | 2023년 | 2024년 |
| 접근법 | 시뮬레이션 + 비디오 중심 | 실제 데이터 중심 |
| 하드웨어 | 소프트웨어 전용 | 소프트웨어 전용 |
| 총 펀딩 | $2.2B+ | $1.1B |
| 기업가치 | $14B+ (2026.01) | $5.6B (2025.11) |
| 핵심 모델 | Skild Brain | π0 (pi-zero) |

### 시뮬레이션 vs 실제 데이터 논쟁

```
Skild: "시뮬레이션 + 인터넷 비디오로 스케일러블한 데이터 생성"
      + NVIDIA Cosmos/Isaac Lab 활용
      + Domain Randomization으로 Sim-to-Real Gap 극복

Physical Intelligence: "실제 물리 상호작용이 필수"
                      + π0 모델 오픈소스 공개 (2025.02)
```

---

## References

- [Skild AI Official Website](https://www.skild.ai/)
- [Skild AI Series A Announcement](https://www.skild.ai/blogs/announcing-our-300m-series-a)
- [Skild AI Series C Announcement](https://www.skild.ai/blogs/series-c)
- [TechCrunch - $300M Funding](https://techcrunch.com/2024/07/17/skild-ai-raises-300m/)
- [Business Wire - $1.4B Funding](https://www.businesswire.com/news/home/20260114335623/en/Skild-AI-Raises-$1.4B-Now-Valued-Over-$14B)
- [Contrary Research - Skild AI](https://research.contrary.com/company/skild-ai)

---

## See Also

- [회사 목록](/knowledge/companies/)
- [시뮬레이션 & World Model](/knowledge/essays/insights/simulation-world-model)
- [Physical Intelligence](physical-intelligence)

