---
title: Boston Dynamics
description: Classical Robotics의 선두주자에서 Physical AI로 전환 중인 로보틱스 기업
tags: [boston-dynamics, atlas, spot, lbm, hyundai, classical-robotics]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-23
---

## 개요

Boston Dynamics는 1992년 MIT에서 스핀오프된 로보틱스 회사로, 동적 이동 로봇 분야의 선구자입니다. Atlas의 백플립, Spot의 안정적인 보행 등으로 유명하며, Classical Robotics의 대표 주자로 알려져 있습니다. 2020년 현대자동차 그룹에 인수되었습니다.

| 항목 | 내용 |
|------|------|
| 본사 | Waltham, Massachusetts |
| 설립 | 1992년 |
| CEO | Robert Playter |
| 모회사 | Hyundai Motor Group (2020~) |

---

## 제품 라인

### Spot
4족 보행 로봇. 검사, 감시, 데이터 수집 등 상업용으로 판매 중.

### Atlas
2족 보행 휴머노이드 로봇. 연구 개발용. 2024년 전기 구동 버전으로 재설계.

### Stretch
물류 창고용 로봇. 박스 하역 작업에 특화.

---

## Classical Robotics 접근법

Boston Dynamics는 오랫동안 **모듈 분리 방식**으로 유명했습니다:

- **인식 (Perception)**: 센서로 환경 파악
- **계획 (Planning)**: 경로 및 동작 계획
- **제어 (Control)**: Model Predictive Control (MPC)로 정밀 제어

이 접근법으로 Atlas의 백플립, 파쿠르, Spot의 안정적인 보행 등 인상적인 데모를 보여줬습니다.

---

## Physical AI로의 전환

### Toyota Research Institute(TRI)와의 협업

2025년, Boston Dynamics는 TRI와 협업하여 **Large Behavior Model(LBM)** 연구를 시작했습니다.

> "Boston Dynamics is developing Large Behavior Models (LBMs) for Atlas as part of a collaboration between AI research teams at Toyota Research Institute (TRI) and Boston Dynamics."
> — [The Robot Report](https://www.therobotreport.com/boston-dynamics-tri-use-large-behavior-models-train-atlas-humanoid/)

### LBM 아키텍처

| 항목 | 사양 |
|------|------|
| 파라미터 | 450M |
| 아키텍처 | Diffusion Transformer |
| 출력 주파수 | 30Hz |
| 제어 DoF | 50 (Atlas 전체) |

> "The specific architecture used for Atlas is a 450-million-parameter diffusion transformer... It outputs a continuous stream of actions at 30Hz to control all 50 of Atlas's degrees of freedom."
> — [IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

### 세 가지 학습 접근법

Boston Dynamics는 Atlas의 지능을 구축하기 위해 세 가지 병렬 접근법을 사용합니다:

1. **Teleoperation**: VR을 사용해 인간 오퍼레이터가 로봇을 안내
2. **강화 학습**: 시뮬레이션에서 수백만 번의 동작 연습
3. **관찰 학습**: 인간 행동 영상에서 물리 직관 학습 (장기 목표)

### 하이브리드 접근

Boston Dynamics는 완전한 end-to-end(pixels-to-torques)는 채택하지 않고, **고수준 의사결정은 학습 기반**, **저수준 제어는 MPC 유지**하는 하이브리드 접근법을 사용합니다.

그럼에도 불구하고, Classical Robotics의 선두주자가 학습 기반 모델을 도입하고 있다는 점은 **Physical AI 패러다임으로의 전환**을 보여줍니다.

---

## 주요 마일스톤

- **1992**: MIT에서 스핀오프
- **2005**: BigDog 공개
- **2013**: Google에 인수
- **2017**: SoftBank에 인수
- **2020**: Hyundai Motor Group에 인수
- **2024**: 전기 구동 Atlas 공개
- **2025**: TRI와 LBM 협업 발표

---

## 참고 자료

- [Boston Dynamics 공식 사이트](https://bostondynamics.com/)
- [Large Behavior Models and Atlas Find New Footing](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)
- [Boston Dynamics Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics)

---

## See Also

- [회사 목록](index)
- [Physical AI의 정의](../essays/fundamentals/definition)
