---
title: SharpaWave
description: 22 active DoF와 고해상도 촉각 배열을 내세우는 인간형 로봇 핸드 - 촉각 조작 연구 후보
tags: [sharpa, sharpawave, hand, dexterous, tactile, humanoid, flower]
category: hardware
subcategory: hands
thumbnail: https://www.sharpa.com/cdn/shop/files/preview_images/0620e345389f4e4cb8441e5b2bd3187c.thumbnail.0000000000_2000x.jpg?v=1769761805

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# SharpaWave

## 한 줄 판단

**SharpaWave는 꽃 작업에서 "촉각이 충분히 좋은지 확인할 가치가 큰 고자유도 핸드"다.** 공개 수치만 보면 섬세한 조작 후보지만, 실제 SDK 접근성, tactile raw data, 납기, 가격을 확인하기 전에는 구매 1순위로 두기 어렵다.

## 핵심 수치

| 항목 | 값 | 해석 |
|------|-----|------|
| 자유도 | 22 active DoF | 사람 손에 가까운 자세 다양성 |
| 스케일 | 1:1 human scale | 기존 도구/물체와의 기하 호환성 |
| 손끝 힘 | 20 N 이상 | 줄기/도구 파지는 충분, 꽃잎 직접 접촉은 힘 제한 필요 |
| 제스처 속도 | 4 Hz 이상 | 빠른 재파지/손모양 전환 가능성 |
| 촉각 | Dynamic Tactile Array, fingertip당 1000+ tactile pixels 주장 | 꽃잎/줄기 접촉 분류에 매력적 |
| 내구성 주장 | 2.5M press cycles, 30 g impact 3200회 | 반복 접촉 실험 후보 |

## 꽃 작업에서의 의미

꽃 자동화에서 가장 어려운 부분은 "잡았다"보다 **얼마나 세게, 어느 면으로, 미끄러지는지**를 아는 것이다. SharpaWave가 주장하는 촉각 해상도가 실제 API로 접근 가능하다면, 줄기 압착, 꽃잎 접촉, 포장지 미끄러짐을 구분하는 데이터셋에 가치가 있다.

첫 실험은 다음이 적합하다.

- 줄기 압착 임계값 측정
- 포장지/리본 미끄러짐 감지
- 꽃잎 접촉 시 force cap 정책
- 같은 물체를 소프트 그리퍼와 SharpaWave로 비교

## 장점

- 22 active DoF로 손가락 자세 표현력이 매우 크다.
- 촉각을 제품 정체성으로 내세우므로 tactile-first 조작 연구와 방향이 맞다.
- Sharpa North와 함께 공개되어 전신 로봇 통합 시나리오도 참고할 수 있다.

## 리스크

- 공개 정보는 제조사/수상/보도 중심이다. 실제 구매 조건과 SDK 권한은 별도 확인해야 한다.
- 손끝 힘이 꽃잎에는 과할 수 있어 소프트웨어 force cap만으로 충분한지 검증해야 한다.
- 고해상도 tactile 데이터가 raw stream으로 열려 있지 않으면 학습 연구 가치가 줄어든다.

## 구매/통합 체크리스트

- 가격, 납기, 보증, 연구자 구매 가능 여부
- ROS/SDK/API에서 tactile raw data를 몇 Hz로 읽을 수 있는지
- 손끝 패드 교체와 세척 가능 여부
- 목표 암에 장착했을 때 wrist payload와 케이블 간섭
- force/position control mode의 안정성

## 참고

- [SharpaWave official page](https://www.sharpa.com/pages/wave)
- [CES Innovation Awards 2026 - SharpaWave](https://www.ces.tech/ces-innovation-awards/2026/sharpawave/)
- [Humanoid Guide - SharpaWave](https://humanoid.guide/product/sharpawave/)
