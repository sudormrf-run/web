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
lastEditedAt: 2026-01-26
---

## Overview

Tesla는 2021년 AI Day에서 휴머노이드 로봇 Optimus (Tesla Bot)를 발표했습니다. 자동차 제조 및 자율주행 분야의 AI/하드웨어 역량을 로보틱스에 적용하며, 대규모 자체 생산을 통한 가격 경쟁력을 핵심 전략으로 삼고 있습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Austin, Texas |
| 설립 | 2003 (로보틱스: 2021) |
| CEO | Elon Musk |
| 로봇 | Optimus (Gen 2, Gen 3) |

---

## Optimus

### 세대별 발전

| 세대 | 발표 | 특징 |
|------|------|------|
| Bumble-C | 2022.09 | 첫 프로토타입 (AI Day 2022) |
| Gen 2 | 2023.12 | 30% 빠른 보행, 10kg 경량화, 손 개선 |
| Gen 3 | 2024.05 발표, 2026.01 양산 | 22 DoF 손, 텐던 구동 시스템 |

### 스펙 (Gen 2, Tesla 발표 기준)

| 항목 | 스펙 |
|------|------|
| 높이 | ~173cm (5'8") |
| 무게 | ~47kg (Gen 1 대비 10kg 경량화) |
| 자유도 | 28 DoF (바디) + 11 DoF (손, 각 손당) |
| 보행속도 | ~8km/h (목표치) |
| 손 | 11 DoF, 촉각 센서 (Gen 3: 22 DoF)

---

## 데이터 수집 전략

### Teleoperation

Tesla는 **teleoperation 기반 데이터 수집**을 운영 (보도 기반):

- 50명 이상의 Data Collection Operator 채용 (보도 기반)
- VR 헤드셋 + 모션캡처 슈트 사용
- 자체 공장에서 실제 작업 수행하며 데이터 수집
- 2025년부터 비전 기반 학습으로 전환 중

### Imitation Learning

- 인간 동작을 모방하여 행동 학습
- FSD (Full Self-Driving)와 유사한 신경망 기반 접근
- End-to-End 학습 방향으로 진화 중

---

## 생산 및 배포

*아래는 Tesla 발표 및 보도 기반 계획으로, 변경될 수 있음.*

### 내부 배포 (2024-2025)

- Tesla 공장 및 Palo Alto 사무실에 테스트 배포 진행 중
- 배터리 셀 이동 및 분류 등 제한된 태스크 수행
- 2024년 9월 기준 수백 대 생산 (데이터 수집 및 설계 테스트용)

### 발표된 로드맵

| 시기 | 발표 계획 | 출처 |
|------|-----------|------|
| 2025 | 5,000-10,000대 생산 목표 | Tesla 발표 |
| 2026.01 | Gen 3 양산 시작 (Fremont) | Tesla 발표 |
| 2026 말 | 외부 판매 시작 예정 | Elon Musk 발표 |
| 장기 | $20,000 이하 목표 (대량 생산 시) | Elon Musk 언급 |

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

- [회사 목록](./)
- [Teleoperation 방식](../essays/insights/teleoperation)
- [휴머노이드 설계](../essays/insights/humanoid-design)

