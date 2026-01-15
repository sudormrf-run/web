---
title: Noetix Bumi
description: 세계 최저가 소형 휴머노이드 로봇 - 교육 및 소비자 시장을 위한 혁신적 저가형 로봇
tags: [noetix, bumi, low-cost, consumer, education, humanoid, china, bipedal]
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

# Noetix Bumi

> Home > Hardware > Humanoids > Noetix Bumi

<!-- Image pending: ![Noetix Bumi](../../assets/hardware/humanoids/noetix-bumi.png) -->

---

## 핵심 의의

Noetix Bumi는 **$1,400 이하 가격대에서 고성능 이족보행 휴머노이드 로봇을 실현**한 제품이다 [1][4]. 플래그십 스마트폰보다 저렴한 가격으로 휴머노이드 로봇을 대중에게 보급할 수 있음을 입증한 사례로, Physical AI의 민주화를 상징하는 이정표로 평가된다.

- **가격 혁신**: 기존 고성능 휴머노이드 로봇(Unitree H2 ~$16,000) 대비 현저히 저렴한 가격 [8]
- **수직 통합 전략**: 자체 개발 컨트롤러 및 액추에이터로 비용 절감 [2]
- **교육 접근성**: 학생, 연구자, 취미 개발자들에게 로봇 연구 진입 장벽 대폭 낮춤 [1]
- **대량 생산 가능성**: 중국 내 공급망 활용으로 스케일업 용이 [2]

---

## 제조사: Noetix Robotics

### 회사 개요

| 항목 | 정보 |
|------|------|
| 공식명 | Songyan Dynamics Beijing Technology Co., Ltd. (松延动力) |
| 설립 | 2023년 9월, 베이징 [7] |
| 창립자 | Jiang Zheyuan (蒋哲远) - 칭화대 전자공학부 박사과정 중퇴 [7] |
| 팀 구성 | 칭화대, 저장대, USC 등 명문대 출신 40명+ [7] |
| 비전 | 단기: 로봇계의 "샤오미", 장기: 로봇계의 "Apple" [7] |

### 창립자 배경

창립자 Jiang Zheyuan(27세)은 칭화대학교 전자공학부에서 학부를 마치고 박사과정 중 2023년에 휴학하여 Noetix를 창업했다 [7]. 그는 휴머노이드 로봇 기술의 상용화를 목표로 젊은 엔지니어 팀을 구성하여 연구용 로봇에서 대량생산 가능한 소비자 제품까지 빠르게 개발하는 데 성공했다 [1][7].

### 펀딩 현황

| 라운드 | 금액 | 주요 투자자 |
|--------|------|-------------|
| Pre-B (2025.10) | ~$41M (RMB 300M) | FG Venture (리드), Vertex Ventures, CRRC Beijing, OR Capital, Everpine Capital [2] |
| 총 라운드 | 5회 | Hangzhou Dongfang Jiafu, Jiadao Valley Investment, United Pioneers Capital 등 24개 투자자 |
| 기업가치 | ~$200M | 2025년 4월 N2 하프마라톤 성공 이후 약 3배 상승 (보도 기준) [2][7] |

---

## 기술 사양

### 물리적 스펙

| 항목 | 스펙 | 출처 |
|------|------|------|
| 높이 | 94cm (~3.1피트) | [1][4] |
| 무게 | 12kg (26.5파운드) | [1][4] |
| 자유도 (DOF) | 21 DOF | [8] |
| 배터리 | 48V, 3.5Ah+ | [1] |
| 런타임 | 1-2시간 (사용 패턴에 따라) | [1] |
| 가격 | ¥9,998 (~$1,370) | [1][3] |

### 자유도 구성

21 DOF는 이족보행, 상체 조작, 머리 움직임 등 복합적인 동작을 지원한다 [8]. 구체적인 관절별 분배는 공개되지 않았으나, 일반적인 휴머노이드 구성을 고려하면 다음과 같은 영역에 분배될 것으로 추정된다:

- **하체**: 무릎 굴곡, 고관절 회전, 발목 관절 - 이족보행 및 균형 유지
- **상체**: 팔꿈치 굴곡, 어깨 관절 - 상체 움직임
- **몸통/머리**: 토르소 회전, 헤드 모션 - 동적 움직임 및 상호작용

*위 분배는 추정치이며, 정확한 스펙은 제조사 확인 필요*

참고: Unitree H2(31 DOF)보다는 낮지만, 기본 교육용 로봇보다 높은 수준으로 소비자 지향 설계 철학을 반영한다 [8].

### 제어 시스템

- **자체 개발 도메인 컨트롤러**: 서드파티 공급업체 의존 없이 내부 설계 [2]
- **모션 제어 알고리즘**: Imitation Learning + Reinforcement Learning 하이브리드 방식 (보도 기준) [1][8]
- **센서**: 카메라 기반 비전, 음성 인식 [1]

### 운동 능력

공식 발표 및 보도에 따르면 [1][4]:
- 안정적인 이족보행
- 점프 (단일 다리, 양발)
- 댄스 동작
- 동적 균형 유지
- 물체 인식 및 상호작용

---

## 비용 최적화 전략

Noetix가 $1,400 가격을 달성한 핵심 전략 (TechNode 보도 기준) [2]:

### 1. 수직 통합 (Vertical Integration)

표준 제어 보드와 액추에이터를 서드파티에서 구매하는 대신, Noetix는 이 핵심 모듈을 내부에서 설계한다. 이를 통해:
- 공급업체 프리미엄 제거
- 하드웨어-소프트웨어 간 긴밀한 최적화 가능
- Bumi의 모션 프로파일에 특화된 모터 컨트롤러 커스터마이징

### 2. 경량 복합 재료

- 기본: 복합 재료 (Composite materials)
- 보강: 필요한 곳에만 선택적 금속 사용
- 결과: 12kg 경량화로 더 작은 모터와 배터리 사용 가능 -> 추가 비용 절감

### 3. 중국 내 공급망 활용

- 부품 조달부터 조립까지 중국 내 진행
- 관세, 물류, 커뮤니케이션 비용 최소화
- 대량 생산 시 스케일 이점 극대화

### 4. 자체 개발 저비용 액추에이터

- 고가 산업용 액추에이터 대신 소비자 등급에 최적화된 액추에이터 개발
- 내구성-비용 균형점 설정

---

## 타겟 시장

### 1. 교육 시장

- **그래픽 프로그래밍**: 어린이를 위한 드래그앤드롭 방식 프로그래밍 지원 [1]
- **개방형 프로그래밍 인터페이스**: 대학 로봇공학 프로그램, 연구자용 저수준 제어 접근 [8]
- **저렴한 실습 플랫폼**: 학생들이 실제 휴머노이드로 알고리즘 테스트 가능

### 2. 소비자/가정용

- **음성 상호작용**: 동반자 및 교육 시나리오용 [1]
- **컴팩트한 크기**: 94cm로 가정 환경에 적합 [3]
- **엔터테인먼트**: 댄스, 동작 시연

### 3. 연구/개발자

- 모션 제어 알고리즘 테스트
- 머신러닝 모델 개발
- 인간-로봇 상호작용 패러다임 연구

---

## 시장 반응

### 판매 실적 (2025년 11월, 보도 기준)

- JD.com 출시 **1시간 내 100대 이상 판매** [1]
- **첫 500대 2일 만에 완판** (Double-11, Double-12 쇼핑 페스티벌 기간) [1]
- 사전주문 기간: 2025년 11월 11일 ~ 12월 12일 [8]

---

## 관련 제품: N2 휴머노이드

Noetix의 대형 휴머노이드 로봇 N2 정보 [7]:

| 항목 | 스펙 |
|------|------|
| 높이 | 1.2m |
| 무게 | 29-30kg |
| 가격 | ¥39,900 (~$5,500) |
| 최대 속도 | 3.5m/s (10km/h) |
| 능력 | 백플립, 대보행, 달리기, 점프, 댄스 |

### 2025년 4월 베이징 하프마라톤

세계 최초 휴머노이드 하프마라톤(21.1km)에서 N2가 **2위 달성** (3시간 37분) [5][6]:
- 1위: Tien Kung (Beijing Humanoid Robot Innovation Centre) - 2시간 40분
- 2위: **Noetix N2** - 3시간 37분
- 3위: DroidUp X02 - 4시간 50분

이 성과로 Noetix는 한 달 내 **1,000대 이상의 주문**을 받았고, 기업가치가 상승했다고 보도되었다 [5].

---

## 한계 및 고려사항

- **내구성 테스트 미공개**: 상세한 내구성 테스트 결과나 IP 등급 미발표 [8]
- **API 문서**: 완전한 공개 API 문서 부재 (개방성 강조하나 상세 스펙 제한적) [8]
- **배터리 교체 필요**: 장시간 운용 시 배터리 스왑 필요 (N2 마라톤에서 확인) [5]
- **소비자 지원 체계**: 대중 시장 진입 초기 단계로 서비스 인프라 검증 필요

---

## 경쟁 제품 비교

| 제품 | 제조사 | 높이 | 가격 (USD) | DOF | 특징 |
|------|--------|------|------------|-----|------|
| **Bumi** | Noetix | 94cm | ~$1,370 | 21 | 최저가 소비자용, 교육 시장 타겟 |
| N2 | Noetix | 1.2m | ~$5,500 | N/A | 고성능, 마라톤 2위 |
| H2 | Unitree | 1.8m | ~$16,000 | 31 | 산업용, 고DOF |

*참고: 가격은 발표 시점 기준이며 변동 가능*

---

## References

1. TechNode - [China's Noetix Robotics unveils $1,370 humanoid robot "Bumi"](https://technode.com/2025/10/22/chinas-noetix-robotics-unveils-1370-humanoid-robot-bumi/)
2. TechNode - [After new funding, Noetix Robotics explains how it built a humanoid robot cheaper than an iPhone](https://technode.com/2025/10/27/after-new-funding-noetix-robotics-explains-how-it-built-a-humanoid-robot-cheaper-than-an-iphone/)
3. SCMP - [Chinese robotics start-up Noetix debuts 'family-friendly' US$1,400 humanoid](https://www.scmp.com/tech/tech-trends/article/3330046/chinese-robotics-start-noetix-debuts-family-friendly-us1400-humanoid)
4. Interesting Engineering - [China unveils world's cheapest humanoid robot under $1,400](https://interestingengineering.com/innovation/bumi-worlds-cheapest-humanoid-robot)
5. Asia Times - [Chinese humanoid robots get reality check in half-marathon debut](https://asiatimes.com/2025/04/chinese-humanoid-robots-get-reality-check-in-half-marathon-debut/)
6. People's Daily - [Robots, go. World's first humanoid half marathon heralds new era of intelligence](http://en.people.cn/n3/2025/0421/c90000-20304847.html)
7. TMTPost - [Startup NOETIX Robotics Launches Affordable Humanoid Robot Capable of Backflips](https://en.tmtpost.com/post/7497178)
8. OriginOfBots - [Bumi by Noetix Robotics: Price, Details, Review 2026](https://www.originofbots.com/robot/bumi-by-noetix-robotics-details-specifications-rating)
9. Robotics and Automation News - [Beijing startup Noetix Robotics launches consumer-grade humanoid robot at $1,400](https://roboticsandautomationnews.com/2025/10/22/beijing-startup-noetix-robotics-launches-consumer-grade-humanoid-robot-at-1400/95731/)

---

## See Also

- [하드웨어 목록](../index.md)
- [Unitree H2](unitree-h2.md)
- [저가 휴머노이드 트렌드](../../trends/low-cost-humanoids.md)
