---
title: Boston Dynamics Atlas
description: Boston Dynamics의 첨단 휴머노이드 로봇 - DARPA 프로젝트에서 상업 배포까지
tags: [atlas, boston-dynamics, humanoid, hyundai, darpa]
category: hardware

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## 개요

Atlas는 Boston Dynamics가 개발한 첨단 휴머노이드 로봇입니다. 2013년 DARPA 로보틱스 챌린지를 위해 처음 개발되었으며, 여러 세대를 거쳐 진화했고 2024년에는 유압식에서 완전 전기식 시스템으로 전환했습니다.

<!-- Image pending: ![Atlas](../../assets/hardware/humanoids/atlas.png) -->

| 항목 | 내용 |
|------|------|
| 회사 | Boston Dynamics (현대자동차 자회사) |
| 최초 공개 | 2013년 7월 11일 |
| 현재 버전 | Electric Atlas (2024) |
| 상태 | 상업 배포 (2025-2026) |

---

## 개발 역사

### 타임라인

| 연도 | 마일스톤 |
|------|----------|
| 2011 | 후쿠시마 원전 사고로 재난 대응 로봇 필요성 부각 |
| 2012 | DARPA가 Boston Dynamics를 개발사로 선정 |
| 2013.07 | 첫 Atlas 공개 (유압식, 1.88m, 149kg) |
| 2015.06 | DARPA 로보틱스 챌린지 결선 - 7개 팀이 Atlas로 경쟁 |
| 2016.02 | 차세대 Atlas 공개 (1.75m, 82kg) |
| 2024.04 | 유압식 Atlas 퇴역, Electric Atlas 발표 |
| 2025 | 현대 공장 파일럿 시작 |
| 2026.01 | CES에서 상용 버전 공개 |

---

## 사양 비교

| 항목 | 초기 Atlas (2013) | 차세대 Atlas (2016) | Electric Atlas (2024) |
|------|------------------|--------------------|-----------------------|
| 높이 | 1.88m (6'2") | 1.75m (5'9") | 1.9m (6.2 ft) |
| 무게 | 149kg (330 lbs) | 82kg (180 lbs) | 90kg (198 lbs) |
| 자유도 | 28 | 28 | 56 (360° 회전 관절) |
| 리치 | - | - | 2.3m (7.5 ft) |
| 들어올림 용량 | - | - | 50kg (순간), 30kg (지속) |
| 작동 온도 범위 | - | - | -20° ~ 40°C |
| 동력 | 유압식 (외부 전원) | 유압식 (배터리) | 전기식 (배터리) |
| 방수 등급 | - | - | IP67 |
| 배터리 수명 | - | ~1시간 | ~4시간 |

---

## Electric Atlas (2024)

### 주요 개선 사항

- **완전 재설계**: 유압식에서 전기식으로 완전 전환, 티타늄/알루미늄 프레임 (3D 프린팅 활용)
- **향상된 이동성**: 인간 능력을 초과하는 강도, 56 자유도와 360° 회전 관절
- **4핑거 핸드**: 손가락과 손바닥의 촉각 센싱 기능
- **배터리 시스템**: 듀얼 배터리 팩, 약 4시간 수명, 자율 배터리 교환
- **컴퓨팅**: NVIDIA Jetson Thor 플랫폼 (800 TFLOPS AI 성능)
- **머신러닝**: 불규칙한 물체 조작을 위한 시뮬레이션 학습

### AI 능력

- 물리 법칙을 학습하고 새로운 작업에 빠르게 적응
- 최소 감독 하에 자율 운영
- 미끄러짐과 무게 변화에 인간 수준의 반응성
- 고정된 프로그래밍이 아닌 실시간 적응

---

## 상업 배포

### 현대 공장 (2025-2026)

| 항목 | 내용 |
|------|------|
| 위치 | 현대 조지아 메가팩토리 (HMGMA), 로보틱스 메타플랜트 응용 센터 (RMAC) |
| 시작 | 2025년 파일럿 테스트 |
| 상태 | 2026년 RMAC 개소 예정 |
| 파트너 | 현대, Google DeepMind (Gemini Robotics AI 통합) |
| 향후 계획 | 2028년 작업 시퀀싱, 2030년 조립 작업 시작 |

### 배포 계획

- 2026: 모든 Atlas 배포가 사전 약정됨 (현대 RMAC, Google DeepMind)
- 생산 시설: Boston Dynamics 본사 (향후 연간 30,000대 생산 공장 계획)
- 부품 공급: 현대모비스가 액추에이터 공급
- 목표 분야: 자동차 제조, 물류

---

## 기술적 특징

### 강점

1. **동적 균형**: 세계 최고 수준의 이족 보행
2. **정교한 조작**: 복잡한 물체 취급
3. **견고한 설계**: 산업용 내구성
4. **고급 인지**: 다중 센서 통합

### 고유 능력

- 파쿠르 및 곡예 동작
- 밀침과 비틀거림으로부터 회복
- 전신 협응
- 복잡한 지형 탐색

---

## 용어 설명

| 용어 | 설명 |
|------|------|
| DoF | Degrees of Freedom - 독립적인 이동 축의 수 |
| DARPA | 미국 국방고등연구계획국 (Defense Advanced Research Projects Agency) |
| HMGMA | Hyundai Motor Group Metaplant America - 현대차 조지아 메가팩토리 |
| RMAC | Robotics Metaplant Application Center - 로보틱스 메타플랜트 응용 센터 |
| IP67 | 방수/방진 등급 (1m 수심에서 30분간 보호) |
| 유압식 | 가압 유체를 사용하는 동력 시스템 |
| 전기식 | 전기 모터와 배터리를 사용하는 동력 시스템 |

---

## 참고 자료

- [Boston Dynamics Atlas 페이지](https://bostondynamics.com/atlas/)
- [Atlas Wikipedia](https://en.wikipedia.org/wiki/Atlas_(robot))
- [Electric New Era for Atlas](https://bostondynamics.com/blog/electric-new-era-for-atlas/)
- [IEEE Spectrum - Hello Electric Atlas](https://spectrum.ieee.org/atlas-humanoid-robot)
- [DARPA Timeline](https://www.darpa.mil/about-us/timeline/debut-atlas-robot)

---

## See Also

- [하드웨어 목록](../index)
- [Tesla Optimus](optimus)
- [Figure 휴머노이드](figure)
- [Agility Digit](digit)
