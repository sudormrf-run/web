---
title: Sunday Robotics
description: Sunday Robotics - Memo 로봇과 Zero Robot Data 접근법
tags: [sunday-robotics, memo, act-1, gloves, zero-robot-data]
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

Sunday Robotics는 Stanford PhD 출신 Tony Zhao (ACT 논문 저자)와 Cheng Chi (Diffusion Policy 저자)가 공동 설립한 스타트업입니다. **로봇 데이터 없이** 인간 동작 데이터만으로 학습하는 혁신적 접근법으로 주목받고 있습니다.

| 항목 | 내용 |
|------|------|
| 본사 | San Francisco, CA |
| 설립 | 2024년 |
| 공동 창업자 | Tony Zhao (CEO), Cheng Chi (CTO) |
| 펀딩 | $35M (Benchmark, Conviction) |
| 로봇 | Memo |

---

## 창업팀

### Tony Zhao (CEO)

- Stanford PhD
- ACT (Action Chunking with Transformers) 논문 저자
- ALOHA 로봇 시스템 개발

### Cheng Chi (CTO)

- Stanford PhD
- Diffusion Policy 논문 저자
- 로보틱스 AI 학습 전문가

---

## Memo

### 하드웨어 스펙

| 항목 | 스펙 |
|------|------|
| 타입 | 토르소 스타일, 휠 베이스 |
| 높이 | 1.7m |
| 무게 | 77kg |
| 팔 | 2× multi-DoF |
| 그리퍼 | 듀얼 |
| 높이 조절 | 바닥 ~ 2.1m |

### 수행 가능 태스크

- 식기 정리 및 식기세척기 적재
- 와인잔 (섬세한 물체) 다루기
- 에스프레소 추출
- 세탁물 정리

---

## Zero Robot Data 접근법

### Skill Capture Gloves

로봇 teleoperation 대신 **$200 장갑** 사용:

| 항목 | Teleop Rig | Sunday Gloves |
|------|------------|---------------|
| 비용 | ~$20,000 | ~$200 |
| 장소 | 연구실 | 실제 가정 |
| 수집자 | 전문가 | "Memory Developers" |
| 데이터 | 로봇 동작 | 인간 동작 |

### 데이터 파이프라인

```
[인간 장갑 착용] → [가정에서 집안일 수행] → [모션 데이터 수집]
                                                │
                                    ┌───────────▼───────────┐
                                    │   Skill Transform     │
                                    │ (인간→로봇 동작 변환)  │
                                    └───────────┬───────────┘
                                                │
                                    ┌───────────▼───────────┐
                                    │       ACT-1 모델      │
                                    └───────────────────────┘
```

### 데이터 규모

| 항목 | 수치 |
|------|------|
| 배포 장갑 | 2,000+ 개 |
| 데이터 수집 가정 | 500+ 곳 |
| 집안일 에피소드 | 10M+ 개 |

---

## ACT-1 Model

### 특징

| 항목 | 내용 |
|------|------|
| 핵심 혁신 | Zero Robot Data |
| 학습 데이터 | 인간 동작만 |
| 결합 기능 | 조작 + 네비게이션 |
| 일반화 | Zero-shot 새 환경 |

### Skill Transform

인간 동작 → 로봇 동작 변환 소프트웨어:
- 90% 성공률 주장
- 인간 손재주 → 로봇 그리퍼 매핑
- 힘/접촉 데이터 포함

---

## 배포 계획

| 시기 | 계획 |
|------|------|
| 2025.11 | Memo 공개, 베타 신청 시작 |
| 2026 후반 | "Founding Family" 베타 (~50 가구) |
| 현재 제작 비용 | ~$20,000 (수작업) |
| 목표 소매가 | <$10,000 (대량 생산 시) |

---

## 의의

Sunday의 접근법이 성공한다면:

| 문제 | 해결 |
|------|------|
| 데이터 병목 | 저렴한 장갑으로 대규모 수집 |
| 환경 다양성 | 실제 가정에서 수집 |
| 비용 | $10,000 이하 가정용 로봇 |
| 일반화 | Zero-shot 새 환경 적응 |

---

## References

- [Sunday Robotics](https://www.sunday.ai/)
- [No Robot Data Blog](https://www.sunday.ai/journal/no-robot-data)
- [Humanoids Daily - Memo](https://www.humanoidsdaily.com/news/sunday-unveils-memo-a-wheeled-domestic-robot-that-learns-from-200-gloves)
- [TechCrunch - Sunday Robotics](https://techcrunch.com/2025/11/20/sunday-robotics/)

---

## See Also

- [회사 목록](index.md)
- [Sunday ACT-1](../models/sunday-act1.md)
- [Non-Teleop 데이터 수집](../solutions/non-teleop-data.md)
- [ACT](../models/act.md)
- [Diffusion Policy](../models/diffusion-policy.md)

