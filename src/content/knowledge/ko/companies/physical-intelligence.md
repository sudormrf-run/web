---
title: Physical Intelligence
description: Physical Intelligence와 pi0 모델
tags: [physical-intelligence, pi0, foundation-model, flow-matching]
category: companies
---

# Physical Intelligence

> Home > Companies > Physical Intelligence

---

## Overview

Physical Intelligence (π)는 2024년 설립된 로보틱스 AI 스타트업으로, 범용 로봇 foundation model을 개발합니다. Google DeepMind, OpenAI, Stanford 출신 팀이 설립했으며, 역대 최대 규모의 로보틱스 시드 펀딩을 받았습니다.

| 항목 | 내용 |
|------|------|
| 본사 | San Francisco, CA |
| 설립 | 2024년 3월 |
| CEO | Karol Hausman (前 Google DeepMind) |
| 펀딩 | $400M+ (시드: $70M, 시리즈 A: $400M) |
| 기업가치 | $2.4B (2024년 11월 기준) |

---

## 창업팀

### 공동 창업자

| 이름 | 이전 경력 | 역할 |
|------|-----------|------|
| Karol Hausman | Google DeepMind (RT-2) | CEO |
| Sergey Levine | UC Berkeley (RL 전문가) | Chief Scientist |
| Chelsea Finn | Stanford (MAML, Meta-learning) | Research |
| Brian Ichter | Google DeepMind (RT-2) | Research |

### 주요 투자자

- Thrive Capital, Lux Capital
- Khosla Ventures, OpenAI
- Jeff Bezos, Sequoia

---

## pi0 모델

### 핵심 특징

| 항목 | 내용 |
|------|------|
| 파라미터 | 3.3B |
| 아키텍처 | PaliGemma + Flow Matching |
| 핵심 기술 | Action Expert with Flow Matching |
| 오픈소스 | 2025년 공개 |

### Flow Matching 방식

Diffusion 대신 **Flow Matching** 사용:

```
[Noise] ──Flow Matching──→ [Action Chunk]
         (더 빠른 추론)
```

- Diffusion보다 빠른 추론 속도
- 연속적 action space에 적합
- Multi-modal action 분포 학습 가능

### 성능

- 51개 태스크, 20개 로봇 구성에서 학습
- Zero-shot 일반화 능력 보유
- 단일 로봇 policy 대비 우수한 성능

---

## 데이터 수집

### 다양한 로봇 플랫폼

- 싱글 암 로봇
- 바이매뉴얼 암
- 휴머노이드 상체
- 모바일 매니퓰레이터

### 데이터 특징

- Cross-embodiment 데이터
- 다양한 환경 (가정, 창고, 사무실)
- Dexterous manipulation 포함

---

## 접근 방식

### "Bring GPT to Robotics"

```
LLM의 성공 = 대규모 데이터 + Transformer + 스케일링

Physical Intelligence 목표 = 로보틱스에 동일 접근 적용
```

### 3가지 핵심 원칙

1. **스케일링**: 더 많은 데이터, 더 큰 모델
2. **범용성**: 특정 로봇/태스크에 국한되지 않음
3. **Foundation Model**: 파인튜닝으로 빠른 적응

---

## 로드맵

| 시기 | 마일스톤 |
|------|----------|
| 2024.03 | 회사 설립 |
| 2024.10 | pi0 공개 |
| 2024.11 | $400M 시리즈 A |
| 2025 | pi0 오픈소스 공개 |
| 2025+ | 상업적 배포 |

---

## References

- [Physical Intelligence Website](https://www.physicalintelligence.company/)
- [pi0 Paper](https://www.physicalintelligence.company/research/pi0)
- [arXiv: pi0](https://arxiv.org/abs/2410.24164)
- [TechCrunch - $400M Funding](https://techcrunch.com/2024/11/04/physical-intelligence-400m-series-a/)

---

## See Also

- [회사 목록](index.md)
- [pi0](../models/pi0.md)
- [Flow Matching 접근법](../models/diffusion-policy.md)

