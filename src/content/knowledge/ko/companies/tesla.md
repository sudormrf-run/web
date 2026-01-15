---
title: Tesla
description: Tesla의 Optimus 휴머노이드 로봇 프로젝트
tags: [tesla, optimus, humanoid, teleoperation]
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

# Tesla

> Home > Companies > Tesla

---

## Overview

Tesla는 2021년 AI Day에서 휴머노이드 로봇 Optimus (Tesla Bot)를 발표했습니다. 자동차 제조 및 자율주행 분야의 AI/하드웨어 역량을 로보틱스에 적용하며, 대규모 자체 생산을 통한 가격 경쟁력을 핵심 전략으로 삼고 있습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Austin, Texas |
| 설립 | 2003 (로보틱스: 2021) |
| CEO | Elon Musk |
| 로봇 | Optimus (Gen 1, Gen 2) |

---

## Optimus

### 세대별 발전

| 세대 | 발표 | 특징 |
|------|------|------|
| Bumblebee | 2022.09 | 첫 프로토타입 |
| Gen 1 | 2023.12 | 보행 개선 |
| Gen 2 | 2024.12 | DoF 증가, 손 개선 |

### 스펙 (Gen 2, Tesla 발표 기준)

| 항목 | 스펙 |
|------|------|
| 높이 | ~173cm |
| 무게 | ~57kg |
| 자유도 | 28 DoF (바디) + 22 DoF (손) |
| 보행속도 | ~8km/h |
| 손가락 | 11 DoF, 촉각 센서 |

---

## 데이터 수집 전략

### Teleoperation

Tesla는 대규모 **teleoperation 팀**을 운영 (보도 기반 추정):

- 수백 명 규모의 teleoperator 팀 운영
- VR 헤드셋 + 모션캡처 슈트 사용
- 자체 공장에서 실제 작업 수행하며 데이터 수집

### Imitation Learning

- 인간 동작을 모방하여 행동 학습
- FSD (Full Self-Driving)와 유사한 신경망 기반 접근
- End-to-End 학습 방향으로 진화 중

---

## 생산 및 배포

*아래는 Tesla 발표 및 보도 기반 계획으로, 변경될 수 있음.*

### 내부 배포

- Tesla 공장 내 테스트 배포 진행 중
- 배터리 셀 이동 및 분류 등 제한된 태스크 수행

### 발표된 로드맵

| 시기 | 발표 계획 | 출처 |
|------|-----------|------|
| 2025 | 외부 판매 시작 목표 | Elon Musk 발표 |
| 장기 | $20,000-30,000 목표 가격 | Tesla AI Day |

---

## 차별화 요소

### 수직 통합

- 자체 AI 칩 (Dojo, FSD 칩)
- 자체 배터리 기술
- 자체 제조 역량

### 규모의 경제

- 기존 자동차 제조 인프라 활용
- 대량 생산을 통한 원가 절감
- 자체 공장이 첫 고객 (dogfooding)

---

## References

- [Tesla AI - Optimus](https://www.tesla.com/AI)
- [Wikipedia - Optimus (robot)](https://en.wikipedia.org/wiki/Optimus_(robot))
- [The Robot Report - Tesla Optimus](https://www.therobotreport.com/tag/tesla-optimus/)

---

## See Also

- [회사 목록](index.md)
- [Teleoperation 방식](../solutions/teleoperation.md)
- [휴머노이드 설계](../deep-dives/humanoid-design.md)

