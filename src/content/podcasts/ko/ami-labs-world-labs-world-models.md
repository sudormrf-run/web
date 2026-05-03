---
title: "AMI Labs, World Labs의 월드모델 기술 분석"
description: "액션 조건부 월드모델과 다른 길을 택한 AMI Labs의 JEPA 기반 latent world model, World Labs의 3D spatial world model을 비교합니다."
date: 2026-04-10
videoId: "-EMWudhi3lI"
duration: "28:56"
episodeNumber: 3
hosts:
  - "sudo remove"
tags:
  - "월드모델"
  - "JEPA"
  - "World Labs"
  - "로보틱스"
summary:
  - "로보틱스에서 말하는 월드모델은 현재 상태와 에이전트의 액션을 조건으로 다음 상태를 예측해 폴리시나 VLA 모델을 학습시키는 수단으로 설명된다."
  - "AMI Labs는 Yann LeCun의 JEPA 철학을 바탕으로 픽셀을 직접 생성하기보다 임베딩 공간에서 미래 상태를 예측하는 latent world model 방향을 택한다."
  - "World Labs는 Fei-Fei Li와 Justin Johnson이 이끄는 3D spatial world model 회사로, Marble 같은 제품과 디지털 트윈·VR·게임·로봇 시뮬레이션 응용이 더 명확하게 보인다."
takeaways:
  - "월드모델을 비교할 때는 픽셀 비디오 생성, latent embedding prediction, 3D 공간 재구성이 서로 다른 문제 정의라는 점을 먼저 구분해야 한다."
  - "JEPA 기반 접근은 좋은 인코더를 만들겠다는 낭만과 잠재력이 있지만, 목표 이미지 필요성, 액션 샘플링, 큰 자유도에서의 실용성 문제가 남아 있다."
  - "World Labs식 공간 월드모델은 시간과 액션 조건부 예측보다는 정적인 공간 생성에 가깝지만, 디지털 트윈과 시뮬레이션 데이터 생성에는 즉각적인 용처가 있다."
chapters:
  - title: "액션 조건부 월드모델 복습"
    startTime: "00:00"
  - title: "비디오 기반 월드모델의 기대와 한계"
    startTime: "03:49"
  - title: "AMI Labs와 JEPA 기반 latent world model"
    startTime: "07:28"
  - title: "JEPA의 플래닝 방식과 실용성 논쟁"
    startTime: "15:49"
  - title: "World Labs의 3D spatial world model"
    startTime: "24:40"
  - title: "두 스타트업의 월드모델 정의 정리"
    startTime: "28:00"
resources:
  - title: "World Labs"
    url: "https://www.worldlabs.ai/"
  - title: "AMI Labs"
    url: "https://www.amilabs.ai/"
relatedLinks:
  - title: "수도리무브 YouTube 채널"
    url: "https://www.youtube.com/@sudoremove"
isFeatured: true
isDraft: false
---

## 왜 이 영상을 봐야 하나

같은 "월드모델"이라는 이름을 쓰더라도 실제로는 서로 다른 목표를 가질 수 있습니다. 이 에피소드는 로보틱스에서 자주 말하는 액션 조건부 월드모델을 기준점으로 삼고, AMI Labs의 JEPA 기반 latent world model과 World Labs의 3D spatial world model이 무엇을 다르게 정의하는지 분해합니다.

## 주요 메모

- 로보틱스 맥락의 월드모델은 시뮬레이터를 뉴럴넷으로 대체해, 현재 관측과 액션이 주어졌을 때 다음 상태를 예측하고 에이전트나 폴리시 학습에 쓰려는 접근입니다.
- 비디오 생성 기반 월드모델은 유체, 머리카락, 옷처럼 시뮬레이션으로 만들기 까다로운 물리 현상과 코너 케이스를 생성할 수 있다는 기대가 있지만, 네비게이션 중심이거나 액션 스페이스가 작고 속도가 느린 한계가 있습니다.
- AMI Labs는 Yann LeCun의 LLM 비판과 JEPA 철학 위에서, 픽셀을 생성하는 대신 좋은 임베딩 공간을 학습하고 그 공간에서 미래 상태를 예측하는 방향을 제시합니다.
- JEPA 기반 플래닝은 목표 이미지가 있다고 가정하고 여러 액션을 샘플링한 뒤 목표 임베딩에 가까운 후보를 좁혀 가는 방식으로 설명됩니다. 작은 자유도에서는 가능성을 보일 수 있지만, 복잡한 태스크나 큰 액션 스페이스에서는 실용성 의문이 남습니다.
- World Labs는 액션 조건부 예측보다는 NeRF나 3D Gaussian Splatting 계열의 공간 생성·재구성에 가까운 회사로 소개됩니다. Marble처럼 사용자가 공간을 돌아다닐 수 있는 제품과 디지털 트윈, VR, 게임, 로봇 시뮬레이션 데이터 생성이 핵심 응용으로 언급됩니다.

## 검색 키워드

월드모델, JEPA, Latent World Model, World Labs, 3D Spatial World Model, 로보틱스, 디지털 트윈
