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
lastEditedAt: 2026-01-26
---

## Overview

Google DeepMind는 로보틱스 AI 분야의 선구자로, RT-1부터 Gemini Robotics까지 VLA 모델의 핵심 발전을 이끌어 왔습니다. 2023년 4월 Google Brain과 DeepMind가 합병하여 현재의 조직이 되었습니다.

| 항목 | 내용 |
|------|------|
| 본사 | London, UK (글로벌 HQ) |
| 주요 오피스 | Mountain View, CA |
| 설립 | 2010 (DeepMind), 2023 (합병) |
| CEO | Demis Hassabis |
| 로보틱스 리드 | Carolina Parada (Head of Robotics) |

---

## 주요 모델

### 타임라인

| 연도 | 모델 | 핵심 기여 |
|------|------|-----------|
| 2022.12 | RT-1 | 첫 대규모 Robotics Transformer |
| 2023.07.28 | RT-2 | VLA 개념 대중화, "Action as Language" |
| 2023.10 | RT-X | Open X-Embodiment (33개 연구실 협력) |
| 2025.03.12 | Gemini Robotics | Gemini 2.0 기반 VLA |
| 2025.06.24 | Gemini Robotics On-Device | 로컬 실행 VLA |
| 2025.09.25 | Gemini Robotics 1.5 | 향상된 VLA/VLM, Agentic 기능 |

### RT-1 (2022.12)

- 130K 에피소드 학습 (17개월간 13대 로봇으로 수집)
- Transformer 아키텍처로 700+ 태스크 일반화
- 97% 성공률 (학습된 태스크 기준, 일반화 환경은 더 낮음)

### RT-2 (2023.07)

- Vision-Language-Action (VLA) 모델
- Action을 언어 토큰처럼 출력하는 방식 대중화
- PaLI-X (55B) 및 PaLM-E (12B) 기반 두 가지 변형
- Emergent capabilities: 추상 명령 이해, Chain-of-thought 추론

### RT-X / Open X-Embodiment (2023.10)

- 33개 연구실 협력 (21개 기관)
- 22개 로봇 종류, 1M+ trajectories, 150K+ 태스크, 500+ 스킬
- 기존 데이터셋 통합, 최대 오픈소스 실제 로봇 데이터셋
- RT-1-X: 기존 대비 50% 성능 향상, RT-2-X: 3배 성능 향상

### Gemini Robotics (2025.03.12)

- Gemini 2.0 기반 VLA
- Gemini Robotics-ER: 공간 추론 특화 VLM 모델
- Apptronik, Agility Robotics, Boston Dynamics 등과 파트너십 발표

### Gemini Robotics On-Device (2025.06.24)

- 로컬 실행용 경량 VLA (인터넷 연결 불필요)
- 50~100개 데모로 빠른 태스크 적응
- ALOHA, Franka FR3, Apollo 휴머노이드 등에서 테스트

### Gemini Robotics 1.5 (2025.09.25)

- 가장 강력한 VLA 모델, "행동 전 사고" 기능
- 교차 로봇 학습: ALOHA2 → Franka → Apollo 전이 가능
- Gemini Robotics-ER 1.5: 공간 이해 벤치마크 SOTA, Gemini API로 제공

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
| Apptronik | Apollo 휴머노이드에 Gemini Robotics 적용 (2024.12 발표) |
| Boston Dynamics | Gemini Robotics 기반 Atlas 휴머노이드 협력 (2026.01 발표) |
| Agility Robotics | Digit 로봇에 Gemini Robotics 적용, trusted tester (2025.03 발표) |

---

## References

- [Google DeepMind - Gemini Robotics](https://deepmind.google/models/gemini-robotics/)
- [RT-2 Paper](https://robotics-transformer2.github.io/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [arXiv: Gemini Robotics](https://arxiv.org/abs/2503.20020)

---

## See Also

- [회사 목록](/knowledge/companies/)
- [RT 시리즈](/knowledge/models/rt)
- [Gemini Robotics](/knowledge/models/gemini-robotics)

