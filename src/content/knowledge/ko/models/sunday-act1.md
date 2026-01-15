---
title: Sunday ACT-1
description: Sunday Robotics의 Zero Robot Data 기반 Foundation Model
tags: [sunday-act1, sunday-robotics, memo, zero-robot-data, gloves]
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

- **Zero Robot Data**: 로봇 데이터 없이 순수하게 인간의 움직임(장갑 데이터)만으로 학습 - 데이터 수집 패러다임 전환
- **$200 장갑 vs $20K Teleop**: 100배 저렴한 데이터 수집 비용으로 스케일 확대 가능성 제시
- **실제 가정 대규모 데이터**: 500+ 가정에서 "Memory Developers"가 10M+ 에피소드 수집 - 연구실이 아닌 실제 환경
- **Zero-shot 일반화**: 처음 보는 가정에서도 작동하는 일반화 능력
- **소비자 가격대 목표**: 대량 생산 시 $10,000 미만 목표 - 가정용 로봇의 현실화
- **장기 조작 + 네비게이션 통합**: 단일 end-to-end 모델로 조작과 맵 기반 네비게이션을 함께 처리하는 최초의 모델
- **복잡한 실제 태스크**: Table-to-Dishwasher에서 130+ 피트 이동, 33회 상호작용, 21개 물체 처리

---

## Overview

ACT-1은 Sunday Robotics가 개발한 foundation model로, **로봇 데이터 없이** 인간의 움직임으로만 학습되었습니다. 장기 조작(long-horizon manipulation)과 맵 기반 네비게이션을 단일 end-to-end 모델로 결합한 최초의 모델입니다.

| 항목 | 내용 |
|------|------|
| 회사 | Sunday Robotics |
| 블로그 | [sunday.ai/journal/no-robot-data](https://www.sunday.ai/journal/no-robot-data) |
| 로봇 | Memo |
| 핵심 특징 | Zero Robot Data |

---

## Key Innovation: Zero Robot Data

### 데이터 수집 방식

기존 Teleoperation 대신 **$200 장갑** 사용:

| 항목 | Teleop Rig | Sunday Gloves |
|------|------------|---------------|
| 비용 | ~$20,000 | ~$200 |
| 위치 | 연구실 | 실제 가정 |
| 수집자 | 전문가 | "Memory Developers" |

### 데이터 규모

| 항목 | 수치 |
|------|------|
| 배포 장갑 | 2,000+ 개 |
| 데이터 수집 가정 | 500+ 곳 |
| Chore 에피소드 | 10M+ 개 |

---

## Performance

### Table-to-Dishwasher 태스크

"로봇이 자율적으로 수행한 가장 복잡한 태스크":

| 항목 | 수치 |
|------|------|
| 자율 네비게이션 | 130+ 피트 |
| 고유 상호작용 | 33회 |
| 물체 수 | 21개 |
| 포함 물체 | 섬세한 식기류 |

### 섬세한 조작

- 한 손에 와인잔 2개 (깨지지 않게)
- 와인잔 식기세척기 삽입
- 한 손으로 수저 2개 집기

### Zero-shot 일반화

처음 보는 가정에서도 작동하는 일반화 능력 강조.

---

## Hardware: Memo

| 항목 | 스펙 |
|------|------|
| 높이 | 1.7m |
| 무게 | 77kg |
| 형태 | 토르소 스타일, 휠 베이스 |
| 팔 | 2× multi-DoF |
| 그리퍼 | 듀얼 |
| 높이 조절 | 바닥 ~ 2.1m |

---

## Availability

| 항목 | 내용 |
|------|------|
| 현재 | Pre-commercial |
| 2026 | "Founding Family" 베타 (~50 가구) |
| 현재 제작 비용 | ~$20,000 (수작업) |
| 목표 소매가 | <$10,000 (대량 생산 시) |

---

## Comparison with Other Approaches

| 접근법 | 장점 | 단점 |
|--------|------|------|
| Teleoperation | 정확한 로봇 데이터 | 비쌈, 느림 |
| Simulation | 대규모 생성 | Sim-to-Real Gap |
| Human Video | 저렴 | 액션 추출 어려움 |
| **Sunday (Gloves)** | 저렴, 실제 환경, 고충실도 | 스케일 검증 필요 |

---

## Significance

Sunday의 접근법이 성공한다면:
- **데이터 병목 해결**: 저렴한 가정 내 데이터 수집
- **Zero-shot 일반화**: 새로운 환경 적응
- **소비자 가격대**: $10,000 미만 가정용 로봇

---

## References

- [Sunday Robotics - No Robot Data](https://www.sunday.ai/journal/no-robot-data)
- [Humanoid Guide - Memo](https://humanoid.guide/product/memo/)
- [Humanoids Daily - Sunday Memo](https://www.humanoidsdaily.com/news/sunday-unveils-memo-a-wheeled-domestic-robot-that-learns-from-200-gloves)
- [eWeek - Memo](https://www.eweek.com/news/sunday-memo-home-robot/)

---

## See Also

- [모델 목록](index.md)
- [Sunday Robotics](../companies/sunday-robotics.md)
- [Non-Teleop 데이터 수집](../solutions/non-teleop-data.md)

