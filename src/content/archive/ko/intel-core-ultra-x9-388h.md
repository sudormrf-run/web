---
title: "인텔 Core Ultra X9 388H 리뷰: Intel 18A 첫 제품 Panther Lake"
description: |
  1. Intel 18A 공정의 첫 소비자 제품인 Panther Lake가 전력 효율에서 큰 진전을 보인다.
  2. 12Xe 내장 그래픽(Xe3)이 전세대 대비 거의 두 배 성능으로 3050 Ti급에 근접한다.
  3. 메모리 컨트롤러가 CPU 타일로 복귀해 Arrow Lake의 지연 문제를 해결했다.
date: 2026-01-29
videoId: "WfI9gtjjMCs"
originalVideoId: "jrygnUnBRNI"
duration: "19:34"
source: "极客湾Geekerwan"
tags:
  - Intel
  - Panther Lake
  - Core Ultra X9
  - Intel 18A
  - 노트북 프로세서
  - GAA 트랜지스터
  - PowerVia
  - Xe3 그래픽
  - 전력 효율
chapters:
  - title: "Panther Lake 개요"
    startTime: "00:00"
    endTime: "02:42"
  - title: "코어 구성과 설계 의도"
    startTime: "02:42"
    endTime: "05:30"
  - title: "플랫폼 및 메모리 개선"
    startTime: "05:30"
    endTime: "07:30"
  - title: "CPU 벤치마크"
    startTime: "07:30"
    endTime: "11:20"
  - title: "GPU 게임 성능"
    startTime: "11:20"
    endTime: "17:20"
  - title: "배터리 수명과 총평"
    startTime: "17:20"
    endTime: "19:34"
isFeatured: false
---

## Intel 18A와 Panther Lake

Intel 18A 공정을 적용한 첫 소비자용 제품 Panther Lake가 등장했다. GAA 트랜지스터와 PowerVia 후면 전력 공급 기술을 적용해 전력 효율 개선이 기대된다.

- [00:07] Panther Lake는 **소비자가 구매할 수 있는 첫 Intel 18A 제품**
- [00:42] Intel 최초 **GAA 트랜지스터** 공정
- [00:47] **PowerVia 후면 전력 공급** 기술 적용

## 코어 구성: P+E+LPE 구조

P코어 4개 + E코어 8개 + LPE코어 4개의 16코어 구성이다. P코어가 6→4개로 줄었지만, LPE코어가 완전히 달라졌다.

- [01:14] P코어 **6개→4개**로 감소
- [01:19] LPE코어 **2개→4개**로 증가
- [02:13] 새 LPE는 Lunar Lake 방식으로 **다른 E코어와 성능 동등**
- [02:26] **SLC 캐시 접근 가능**, 정상적으로 호출됨
- [02:42] 설계 목표는 **가벼운 작업 시 성능 클러스터 전력 절감**

> "새 E코어의 IPC가 전세대 P코어와 거의 비슷합니다. 이런 코어가 12개나 있습니다!"

## 플랫폼 개선: 메모리 지연 해결

Arrow Lake 데스크톱에서 문제였던 메모리 지연이 크게 개선됐다.

- [04:51] **메모리 컨트롤러가 CPU Compute Tile로 복귀**
- [05:05] Arrow Lake: 128M 깊이에서 **지연 140ns**
- [05:11] Panther Lake: 동일 조건에서 **지연 100ns**로 단축
- [05:19] Arrow Lake 데스크톱 게임 성능 저하의 **주요 원인을 해결**

## CPU 성능

피크 클럭은 낮아졌지만 IPC 향상으로 성능은 유지 또는 소폭 개선됐다.

- [06:56] 싱글 터보 클럭 **5.4→5.1GHz**로 하락
- [08:08] P코어 IPC: 정수 **약 10%**, 부동소수점 **약 7%** 향상
- [08:37] E코어 3.8GHz 성능이 **전세대 P코어급 IPC**
- [09:27] Cinebench 고부하에서도 **PL1 80W에 도달하지 않음** (78W)
- [09:55] **45W에서 전세대 70W급 성능** 달성

## Xe3 내장 그래픽: 극적인 도약

12Xe 내장 그래픽(TSMC N3E 공정)이 전세대 대비 거의 두 배 성능을 보여줬다.

- [11:43] 3DMark SNL에서 **285H iGPU 대비 압도적 효율**
- [11:48] **15W에서 전세대 풀파워 성능** 초과
- [11:53] 285H/HX370 대비 **약 두 배 성능**
- [15:33] 사이버펑크 2077: 285H 대비 **거의 두 배 프레임**
- [15:52] 2K 업스케일링 시 **3060에 근접하는 성능**
- [16:51] 게임 중 소비전력 **30~50W** 수준
- [16:57] **65W 방열만 갖추면** 388H 잠재력 대부분 발휘 가능

> "이 12Xe 대형 내장 그래픽의 성능은 정말 예상 밖이었습니다."

## 배터리 수명

LPE 클러스터 덕분에 배터리 수명이 크게 개선됐다.

- [18:09] 120Hz에서 **12시간 이상**
- [18:33] 60Hz에서 **14시간 30분**
- [18:38] Panther Lake 탑재 시 **배터리 10시간은 쉽게 달성** 가능 전망

## 총평

- [18:53] Intel 18A 공정 첫 제품 성능이 **매우 우수**
- [18:55] TSMC N3B 285H보다 **전성비 한 단계 우위**
- [19:03] GPU는 Windows 진영 **최상위 수준** (성능·생산성·전성비)
- [19:17] 경쟁 제품인 퀄컴 X2 Elite가 **걱정될 정도**의 완성도
