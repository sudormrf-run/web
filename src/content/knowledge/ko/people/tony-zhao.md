---
title: Tony Zhao
description: ACT & ALOHA 제1저자, Physical Intelligence
tags: [tony-zhao, stanford, physical-intelligence, act, aloha]
category: people
---

# Tony Zhao (赵彤阳)

> Home > People > Tony Zhao

---

## Profile

| 항목 | 내용 |
|------|------|
| 현직 | Physical Intelligence |
| 이전 | Stanford University PhD |
| 지도교수 | Chelsea Finn |
| 학부 | UC Berkeley |

---

## 핵심 기여

- **ACT 제1저자**: Action Chunking with Transformers, 10분 시연으로 정밀 조작
- **ALOHA 설계**: $20K 저비용 양팔 로봇 시스템
- **Mobile ALOHA**: 이동형 양팔 로봇
- **오픈소스 기여**: 코드, 하드웨어 설계 전체 공개

---

## Research Timeline

### Stanford PhD (2020-2024)

**Chelsea Finn 지도**

| Year | Work | Impact |
|------|------|--------|
| 2021 | PhD 시작 | IRIS Lab |
| 2023 | **ACT** | Action Chunking, 10분 시연 학습 |
| 2023 | **ALOHA** | $20K 양팔 시스템 |
| 2024 | **Mobile ALOHA** | 이동형 양팔 로봇 |
| 2024 | PhD 졸업 | |

### Physical Intelligence (2024-present)

| Year | Work | Impact |
|------|------|--------|
| 2024 | Physical Intelligence 합류 | π0 개발 참여 |

---

## Major Publications

### ACT & ALOHA (RSS 2023)
**"Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware"**

핵심 기여:
- **ACT 알고리즘**: Action Chunking + CVAE
- **ALOHA 하드웨어**: $20K 저비용 양팔 시스템
- **50개 시연으로 80-90% 성공률**

### Mobile ALOHA (2024)
**"Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation"**

핵심 기여:
- 이동 플랫폼 + ALOHA 결합
- 전신 텔레오퍼레이션
- 가사 태스크 수행

---

## Key Ideas

### Action Chunking (2023)
```
핵심: 단일 액션 대신 액션 시퀀스(chunk) 예측

기존: 관측 → 다음 1개 액션
ACT: 관측 → 다음 k개 액션 시퀀스

장점:
- Compounding error 완화
- 유효 horizon k배 감소
- 부드러운 동작 생성
```

### ALOHA 하드웨어
```
구성:
- 2× ViperX 6-DoF 암 (~$5,600 각)
- 4× RGB 카메라
- 텔레오퍼레이션 리그

특징:
- 총 비용 ~$20K (기존 대비 1/10)
- 모듈형 설계
- Dynamixel 모터 (쉬운 교체)
- 1.5m 작업 범위
```

---

## Impact

### 연구 민주화
- **저비용**: $20K로 연구실에서 재현 가능
- **오픈소스**: 코드, 하드웨어 설계 전체 공개
- **LeRobot 통합**: HuggingFace 기본 모델

### 후속 연구
- Mobile ALOHA
- ALOHA 2 (Google)
- 다수의 ALOHA 기반 연구

---

## Philosophy

### 연구 철학
> "복잡한 것을 단순하게. 비싼 것을 저렴하게. 닫힌 것을 열린 것으로."

### 오픈소스 기여
- ACT 코드 전체 공개
- ALOHA 하드웨어 설계 공개
- 학습 데이터 공개
- 상세한 문서화

---

## Links

- [Personal Website](https://tonyzhaozh.github.io/)
- [ALOHA Project](https://tonyzhaozh.github.io/aloha/)
- [Mobile ALOHA](https://mobile-aloha.github.io/)
- [GitHub](https://github.com/tonyzhaozh)
- [Google Scholar](https://scholar.google.com/citations?user=XXXXXXXXX)

---

## See Also

- [ACT](../models/act.md)
- [Chelsea Finn](chelsea-finn.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
