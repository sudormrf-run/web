---
title: Google DeepMind
description: Google DeepMind의 로보틱스 연구
tags: [google, deepmind, gemini-robotics, rt1, rt2, rt-x]
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

# Google DeepMind

> Home > Companies > Google DeepMind

---

## Overview

Google DeepMind는 로보틱스 AI 분야의 선구자로, RT-1부터 Gemini Robotics까지 VLA 모델의 핵심 발전을 이끌어 왔습니다. 2023년 Google Brain과 DeepMind가 합병하여 현재의 조직이 되었습니다.

| 항목 | 내용 |
|------|------|
| 본사 | London, UK / Mountain View, CA |
| 설립 | 2010 (DeepMind), 2023 (합병) |
| CEO | Demis Hassabis |
| 로보틱스 리드 | Vincent Vanhoucke |

---

## 주요 모델

### 타임라인

| 연도 | 모델 | 핵심 기여 |
|------|------|-----------|
| 2022 | RT-1 | 첫 대규모 Robotics Transformer |
| 2023 | RT-2 | 첫 VLA, "Action as Language" |
| 2023 | RT-X | Open X-Embodiment (33개 연구실 협력) |
| 2025 | Gemini Robotics | Gemini 2.0 기반 VLA |

### RT-1 (2022)

- 130K 에피소드 학습
- Transformer 아키텍처로 700+ 태스크 일반화
- 97% 성공률 (학습된 태스크)

### RT-2 (2023)

- **"최초의 VLA"** - Action을 언어처럼 출력
- PaLM-E/PaLI-X 기반 (55B)
- Emergent capabilities: 추상 명령 이해

### RT-X (2023)

- 33개 연구실 협력 (Open X-Embodiment)
- 22개 로봇 종류, 160K+ 에피소드
- 오픈 데이터셋 공개

### Gemini Robotics (2025)

- Gemini 2.0 기반 가장 강력한 VLA
- SOTA 대비 2배 이상 성능
- On-Device 버전 출시 (로컬 실행)

---

## 연구 접근법

### Foundation Model 방식

```
[대규모 사전학습] → [빠른 파인튜닝] → [새 태스크 적응]
```

### 핵심 원칙

1. **스케일링**: 더 많은 데이터, 더 큰 모델
2. **멀티모달**: Vision + Language + Action 통합
3. **크로스-로봇**: 다양한 로봇에서 학습/적용
4. **협력**: Open X-Embodiment 등 오픈 연구

---

## 파트너십

| 파트너 | 내용 |
|--------|------|
| Apptronik | Apollo 휴머노이드에 Gemini 2.0 적용 |
| Boston Dynamics | Gemini Robotics-ER 테스트 |
| Agility Robotics | Digit 로봇 협력 |

---

## References

- [Google DeepMind - Gemini Robotics](https://deepmind.google/models/gemini-robotics/)
- [RT-2 Paper](https://robotics-transformer2.github.io/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [arXiv: Gemini Robotics](https://arxiv.org/abs/2503.20020)

---

## See Also

- [회사 목록](index.md)
- [RT 시리즈](../models/rt.md)
- [Gemini Robotics](../models/gemini-robotics.md)

