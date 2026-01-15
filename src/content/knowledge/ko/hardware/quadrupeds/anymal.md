---
title: ANYbotics ANYmal
description: ETH Zurich 스핀오프 ANYbotics의 산업용 자율 검사 쿼드러펫 로봇
tags: [anybotics, anymal, quadruped, industrial, inspection, eth-zurich, legged-robot, autonomous]
category: hardware

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

<!-- 이미지 준비 중: <!-- Image pending: ![ANYmal - ANYbotics 산업용 검사 로봇](../../assets/hardware/quadrupeds/anymal.png) --> -->
*이미지: ANYbotics ANYmal 쿼드러펫 로봇 - [ANYbotics 공식 페이지](https://www.anybotics.com/robotics/anymal/)에서 확인*

## Overview

ANYmal은 스위스 ETH Zurich의 Robotic Systems Lab (RSL)에서 개발되어 2016년 스핀오프 기업 ANYbotics를 통해 상용화된 산업용 자율 검사 쿼드러펫 로봇이다. IP67 등급의 견고한 설계와 자율 내비게이션 능력을 갖추어 석유/가스, 광업, 발전소 등 가혹한 산업 환경에서의 무인 검사 작업에 특화되어 있다.

| 항목 | 내용 |
|------|------|
| 제조사 | ANYbotics (스위스, ETH Zurich 스핀오프) [[출처]](https://rsl.ethz.ch/partnership/spinoff/anybotics.html) |
| 설립 | 2016년 |
| 용도 | 산업 시설 자율 검사 |
| 방수/방진 | IP67 [[출처]](https://www.anybotics.com/robotics/anymal/) |
| 현재 배치 | 200대 이상 [[출처]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics) |

---

## 회사 배경: ANYbotics

### ETH Zurich에서 ANYbotics로

ANYbotics는 2016년 ETH Zurich Robotic Systems Lab의 연구 성과를 기반으로 설립된 스핀오프 기업이다.

**창립 멤버:**
- Marco Hutter (교수, RSL 디렉터)
- Roland Siegwart (교수)
- Péter Fankhauser, Christian Gehring, Samuel Bachmann
- Remo Diethelm, Andreas Lauber, Hanspeter Fässler

**연구 지원:**
- NCCR Robotics (스위스 국립 로보틱스 연구센터)
- ARGOS Challenge
- EU ECHORD++
- ETH Pioneer Fellowship
- Swiss National Science Foundation (SNF)
- European Research Council (ERC)

**기업 성장 (보도 자료 기준):**
- 2024년 12월: 총 1억 2700만 유로 이상 투자 유치 [[출처]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)
- 2024년 11월: 샌프란시스코 지사 설립 [[출처]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)
- 2025년 5월: Switzerland Global Enterprise 수출상 수상 [[출처]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)
- 2025년 9월: Climate Investment 전략적 투자 유치 [[출처]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)

---

## ANYmal 세대별 발전

### ANYmal C (2019~)

ANYmal C는 산업 검사에 최적화된 첫 상용 버전으로, 높은 가용성과 안정성을 제공한다. [[IEEE Spectrum 발표 기사]](https://spectrum.ieee.org/anybotics-introduces-sleek-new-anymal-c-quadruped)

**물리적 사양** (제3자 카탈로그 기준 [[DirectIndustry]](https://www.directindustry.com/prod/anybotics/product-233413-2330048.html)):

| 항목 | 수치 | 비고 |
|------|------|------|
| 길이 | 930 mm | |
| 너비 | 530 mm | 기본 보행 자세 |
| 높이 (보행) | 890 mm | |
| 높이 (저자세) | 470 mm | |
| 무게 | 50 kg | 검사 페이로드 포함 시 55 kg |

**컴퓨팅:**
- 2× Intel Core i7 8세대 (6코어)
- 2× 8 GB RAM
- 실시간 보행 제어, 매핑, 자율 내비게이션 처리

### ANYmal D (현재 세대)

ANYmal D는 개선된 자율성과 이동성을 제공하는 현재 주력 모델이다. [[RobotsGuide 상세]](https://robotsguide.com/robots/anymal)

**물리적 사양** (제3자 자료 기준 [[RobotsGuide]](https://robotsguide.com/robots/anymal) [[Wevolver]](https://www.wevolver.com/specs/anymal)):

| 항목 | 수치 | 비고 |
|------|------|------|
| 길이 | 약 800 mm | 자세에 따라 변동 |
| 너비 | 400~600 mm | 보행 자세 기준 |
| 높이 | 약 700 mm | 기본 보행 자세 |
| 무게 | 약 30 kg | 페이로드 미포함 |
| 최대 속도 | 3.6 km/h (1 m/s) | 전방향 이동 |
| 페이로드 | 10~15 kg | 설정에 따라 상이 |

**액추에이터** [[출처]](https://robotsguide.com/robots/anymal):
- 12개 전기식 직렬 탄성 액추에이터 (ANYdrive)
- 최대 출력: 720W (관절당)
- 360도 관절 회전 가능
- IP67 방수/방진
- CAN 버스 독립 제어

**이동 능력** (조건에 따라 성능 상이):

| 능력 | 수치 | 비고 |
|------|------|------|
| 최대 경사 | 약 30도 | 지면 조건에 따라 변동 |
| 계단 각도 | 최대 45도 | 표준 계단 기준 |
| 단차 극복 | 최대 35 cm | |
| 장애물 극복 | 최대 20 cm | |
| 간극 통과 | 25~30 cm | |
| 최소 통로 폭 | 60 cm | |

**배터리:**
- 교체 가능한 리튬이온 배터리 팩
- 작동 시간: 2~4시간 (활동에 따라 상이)
- 자율 도킹 스테이션 충전

**컴퓨팅:**
- 3× Intel i7 프로세서
  - 보행 제어용
  - 내비게이션용
  - 태스크 애플리케이션용
- EtherCAT 통신
- Ubuntu Linux OS
- ROS 기반 커스텀 프레임워크
- C++, Python API 지원

### ANYmal X (출시 예정)

ANYmal X는 ATEX Zone 1 인증을 목표로 개발 중인 보행 로봇으로, 폭발 위험 환경에서 운용 가능하도록 설계되었다. [[출처]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)

**특징:**
- ATEX Zone 1 인증 목표 (폭발 위험 환경용)
- ANYmal D 기반 설계
- 고객 배송 예정 (일정은 ANYbotics 공식 발표 참조)
- BASF, Equinor 등과 파일럿 프로그램 진행 중 [[출처]](https://www.anybotics.com/news/anybotics-climate-investment-strategic-investor/)

> **참고**: ANYmal X의 정확한 출시 일정과 인증 상태는 ANYbotics 공식 채널을 통해 확인하시기 바랍니다.

---

## 센서 시스템

센서 사양은 ANYbotics 제품 페이지 및 제3자 자료를 기반으로 정리되었습니다 [[RobotsGuide]](https://robotsguide.com/robots/anymal) [[ANYbotics]](https://www.anybotics.com/robotics/anymal/).

### 내비게이션 센서

| 센서 | 사양 | 비고 |
|------|------|------|
| LiDAR | 360도 | 최대 100m 범위 |
| 깊이 카메라 | 6개 | 지형 인식용 |
| 원격 조작 카메라 | 2개 | 텔레오퍼레이션용 |
| IMU | 내장 | 본체 및 액추에이터 |

### 검사 페이로드

**광학 시스템:**
- 30배 줌 카메라
- 능동 LED 조명
- +/- 90도 수직, +/- 165도 수평 팬틸트

**열화상:**
- 측정 범위: -40 ~ 550 deg C
- 비접촉 정밀 온도 측정

**음향:**
- 초음파 마이크
- 가청 및 초음파 대역 (0~384 kHz)
- 가스 누출 감지용

**가스 감지:**
- 가스 농도 센서
- 음향 이미저 기반 누출 감지

**전기 설비 진단:**
- 부분 방전(Partial Discharge) 이벤트 감지
- 전기 설비 이상 징후 모니터링

---

## 자율 검사 능력

### 자율 내비게이션

ANYmal은 센서 데이터를 기반으로 자율적으로 경로를 계획하고 발 디딤 위치를 선택한다.

**기능:**
- 실시간 환경 매핑
- 동적 경로 계획
- 장애물 회피
- 계단 및 경사로 자율 주행
- 저배터리 시 자동 도킹

### 검사 자동화

**시각 검사:**
- 게이지, 디스플레이 판독
- 장비 상태 모니터링
- 부식/손상 탐지

**열 검사:**
- 과열 장비 조기 감지
- 열 분포 패턴 분석

**음향 검사:**
- 이상 진동 감지
- 가스 누출 음향 탐지
- 베어링 마모 감지

**가스 검사:**
- CO2 농도 모니터링
- 가연성 가스 탐지
- 누출 위치 추적

---

## 산업 적용 사례

### 석유 및 가스

**주요 고객** (Climate Investment 보도 자료 기준 [[출처]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)):
- BP
- Equinor
- Shell
- TotalEnergies
- Petrobras
- Aramco
- ENI

**Equinor Northern Lights CCS 시설** [[출처]](https://www.anybotics.com/news/equinor-deploys-anymal-at-northern-lights-ccs-facility/):
노르웨이 Oygarden에 위치한 탄소 포집 저장(CCS) 시설에서 ANYmal D 배치:
- CO2 농도 실시간 모니터링
- 위험 수준 경보 발생
- ISPS 항만 경계 순찰
- 무인 시설 원격 검사
- 불필요한 현장 출동 감소

### 광업

- 지하 광산 검사
- 환기 시스템 모니터링
- 장비 상태 점검

### 발전소

- 터빈 검사
- 배관 점검
- 열교환기 모니터링

### 화학 공장

- 위험물질 취급 구역 검사
- 누출 탐지
- 설비 상태 모니터링

### 해양 플랫폼

- 오프쇼어 시설 검사
- 가혹한 해양 환경 운용
- 원격 무인 운영

---

## 연구 기여

### 주요 논문

ANYmal 플랫폼은 보행 로봇 분야의 중요한 연구 성과를 배출했다.

**Learning quadrupedal locomotion over challenging terrain (Science Robotics, 2020)**
- 고유 감각 신호 기반 신경망 보행 제어기
- 진흙, 눈, 자갈 등 학습되지 않은 지형에서의 견고성 검증
- 두 세대 ANYmal에서 실환경 테스트

**Learning agile and dynamic motor skills for legged robots (Science Robotics, 2019)**
- 시뮬레이션 학습 후 실제 로봇 전이
- 에너지 효율적 고속 주행
- 복잡한 자세에서의 낙하 복구

**Learning robust perceptive locomotion for quadrupedal robots in the wild (Science Robotics, 2022)**
- 야외 환경 인지 기반 보행
- 실시간 지형 적응

**ANYmal parkour: Learning agile navigation for quadrupedal robots (Science Robotics, 2024)**
- 파쿠르 수준의 민첩한 이동
- 복잡한 장애물 코스 주행

### IEEE 학회 발표

- IROS 2016: "ANYmal - a highly mobile and dynamic quadrupedal robot"
- ICRA 2018: "Robust rough-terrain locomotion with a quadrupedal robot"
- IEEE RA-L 2020: "Perceptive locomotion in rough terrain–online foothold optimization"
- IROS 2022: "Advanced skills by learning locomotion and local navigation end-to-end"

### ANYmal Research 커뮤니티

ANYmal Research는 보행 로봇 연구 발전을 위한 국제 커뮤니티로, 연구용 플랫폼과 조작 페이로드를 제공한다.

**2025년 ICRA 발표:**
- ANYmal Research Manipulation Payload 출시
- Duatic (ETH Zurich 스핀오프)과 협력 개발
- NVIDIA Jetson GPU 탑재
- 온보드 AI 모델 및 실시간 인지 알고리즘 실행

---

## 기술 사양 요약

> **참고**: 아래 수치는 공개된 자료 기반이며, 실제 성능은 구성, 페이로드, 환경 조건에 따라 상이할 수 있습니다. 정확한 사양은 [ANYbotics 공식 사양서](https://www.anybotics.com/anymal-specifications-sheet/)를 참조하세요.

| 항목 | ANYmal C | ANYmal D |
|------|----------|----------|
| 무게 | 약 50 kg | 약 30 kg |
| 페이로드 | 최대 10 kg | 10-15 kg |
| 배터리 | 약 2시간 | 2-4시간 |
| 방수/방진 | IP67 | IP67 |
| CPU | 2× i7 6코어 | 3× i7 |
| 액추에이터 | 12 SEA | 12 SEA (720W) |
| 최대 경사 | 약 20도 | 약 30도 |
| 계단 | 최대 45도 | 최대 45도 |
| 단차 | 최대 35 cm | 최대 35 cm |

---

## 핵심 의의

1. **산업 검사 로봇의 선구자**: ANYmal은 학술 연구에서 상용 제품으로 성공적으로 전환된 대표적 사례로, 가혹한 산업 환경에서의 자율 검사 로봇 시장을 개척했다.

2. **학습 기반 보행 제어의 실증**: 시뮬레이션에서 학습한 정책을 실제 로봇에 성공적으로 전이하여, 복잡한 지형에서의 견고한 보행을 실현했다.

3. **IP67 산업 등급 설계**: 방수/방진 설계와 ATEX 인증 추진(ANYmal X)을 통해 폭발 위험 환경을 포함한 가장 가혹한 산업 현장에서의 운용을 목표로 한다.

4. **자율 검사의 경제성**: 24/7 무인 운영, 위험 구역 원격 검사, 조기 이상 감지를 통해 운영 비용 절감과 안전성 향상을 동시에 달성했다.

5. **연구-산업 연계 모델**: ETH Zurich의 학술 연구가 ANYbotics를 통해 상용화되고, ANYmal Research 커뮤니티를 통해 다시 연구계에 기여하는 선순환 생태계를 구축했다.

---

## References

### 공식 자료
- [ANYbotics 공식 웹사이트](https://www.anybotics.com/)
- [ANYmal 제품 페이지](https://www.anybotics.com/robotics/anymal/)
- [ETH Zurich RSL ANYmal 페이지](https://rsl.ethz.ch/robots-media/anymal.html)
- [ANYbotics - ETH Zurich 스핀오프](https://rsl.ethz.ch/partnership/spinoff/anybotics.html)
- [ANYmal Research 커뮤니티](https://www.anymal-research.org/)

### 학술 논문
- [Learning quadrupedal locomotion over challenging terrain - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.abc5986)
- [Learning agile and dynamic motor skills for legged robots - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.aau5872)
- [Learning robust perceptive locomotion for quadrupedal robots in the wild - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.abk2822)

### 뉴스 및 사례
- [ANYmal deployed at Northern Lights CCS Facility](https://www.anybotics.com/news/equinor-deploys-anymal-at-northern-lights-ccs-facility/)
- [Climate Investment backs ANYbotics](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)
- [ANYbotics ICRA 2025 ANYmal Research Launch](https://www.anybotics.com/news/anybotics-anymal-research-mobile-manipulation/)
- [Robot dog ANYmal gains momentum - SNF](https://www.snf.ch/en/Sm7rKHHdX4Rlrj9C/news/robot-dog-anymal-gains-momentum)
- [ANYbotics Secures Over EUR 127 Million](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)

---

## See Also

- [하드웨어 목록](../index.md)
- [[Boston Dynamics Spot]]
- [[Unitree 로봇]]
- [[보행 로봇 제어]]
