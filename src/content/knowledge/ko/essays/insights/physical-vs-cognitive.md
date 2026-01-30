---
title: Physical vs Cognitive Intelligence
description: 물리적 지능과 인지적 지능의 본질적 차이
tags: [physical-intelligence, cognitive-intelligence, philosophy, moravec-paradox]
category: essays
related:
  - ../fundamentals/what-is-rfm-vla.md
  - tactile-sensing.md
  - vla-rfm-progress.md

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-29
---

# 물리적 지능을 향한 여정

LLM 을 시작으로 한 AGI, ASI race 는 인간 혹은 인간 이상의 지능을 구현하는 여정입니다, 그런데 2026년 현재 기준, 조만간 달성이 가능할 것으로 보이죠. 그런데 이 지능은 cognitive intelligence (인지적인 지능) 에 국한되는 것으로 보입니다. 코딩, 수학, 추론, 연구, 문학, ... 

> 필자는 Physical Intelligence (물리적인 지능) 를 푸는 여정은 또 다른 차원의 문제라고 생각합니다.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/UUOo8N9_iH0" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*DARPA Robotics Challenge에서 문을 열지 못하는 로봇들 (IEEE Spectrum, 2015)*

---
## Moravec's Paradox

1980년대 로봇공학자 Hans Moravec이 발견한 역설이 있습니다.

> **"고차원적 추론은 상대적으로 적은 계산을 요구하지만, 저수준의 감각운동 기술은 엄청난 계산 자원을 요구한다."**

체스 챔피언을 이기는 AI는 1997년에 만들어졌지만, 주머니에서 열쇠 꺼내기는 아직도 잘 안 됩니다. 

| 우리가 지능이라 부르는 것 | 지능이라 부르지 않는 것 |
| -------------- | ------------- |
| 체스 세계 챔피언      | 주머니에서 열쇠 꺼내기  |
| 바둑 고수          | 접시 설거지하기      |
| 복잡한 수식 작성      | 과일 집기         |
| 고차원적 추론        | 계단 오르기        |

통상적으로 우리가 이런 물리적이고 자연스러운 행동들을 지능이라고 부르지는 않지만, 곰곰히 생각해보면 아주 어려운 일입니다.


## 손으로 물건을 집는 과정

<video src="/assets/essays/physical-vs-cognitive/grasp_chess.mov" loop muted playsinline controls width="100%" style="border-radius: 8px; margin: 1rem 0;"></video>

아래 MIT  김상배 교수님의 talk 에 나오는 비슷한 실험을 직접 해봤습니다.

> 영상을 재생하기 전에 제가 어떤 말을 집을지 예상해보세요.

슬로우 모션으로 분석하자, 그 짧은 시간 동안 **5번의 의사결정**이 일어났습니다:

1. 바닥의 촉감을 느끼고 멈춤
2. 최우선 순위의 말을 잡으려 하나 실패
3. 실패하면서 손이 N개의 다른 말에 접촉
4. 그 중 하나를 선택 (엄지 검지 사이의 말)
5. 성공적으로 잡아 올림

이 과정 중 어떤 것도 의식적으로 기억하지 못했습니다. 말을 보지도 않았고, 손가락 관절의 궤적을 계획하지도 않았습니다. 완전히 무의식적으로, 자동적으로 일어난 일이었습니다.

사람은 이런 순간적인 정보 처리와 의사결정을 1초 이내로 모두 수행합니다.

또 다른 예시입니다.

> "점심 때 무엇을 드셨나요? 음식을 씹는 과정을 생각해 보신 적 있습니까?"

우리의 혀는 식사 중에 다음을 수행합니다:

- 음식물을 이 사이로 밀어넣음
- 이가 음식을 작은 조각으로 부숨
- 조각의 크기를 판단 ("너무 크다, 다시 씹어야지")
- 충분히 작아지면 목구멍 뒤로 보냄
- 종이 조각 같은 이물질이 발견되면 입술 쪽으로 밀어서 뱉어냄
- **이 모든 과정을 친구와 대화하면서 동시에 수행**

대화할 때 사용하는 것도 혀입니다. 혀는 음식 처리와 언어 발화라는 완전히 다른 두 가지 작업을 동시에, 무의식적으로 수행합니다.


<iframe width="100%" height="400" src="https://www.youtube.com/embed/SPAX0A2cjec" frameborder="0" allowfullscreen style="border-radius: 8px; margin-bottom: 0.5rem;"></iframe>

*MIT 김상배 교수의 TEDxMIT 강연 "Robots with Physical Intelligence"*

---

## 왜 이런 역설이 발생하는가?

###  진화적 관점에서의 설명

| 능력         | 진화에 소요된 시간 |
| ---------- | ---------- |
| 운동, 감각, 지각 | ~10억 년     |
| 추상적 사고, 수학 | ~수백만 년     |
| 체스, 바둑     | ~수천 년      |

생명체는 캄브리아기 대폭발 이후 수억 년 동안 **'움직이고, 먹고, 생존하는'** 물리적 지능을 먼저 진화시켰습니다.
고도의 추론이나 언어 능력은 인류 역사에서 아주 최근에야 덧붙여진 '최신 앱' 같은 기능입니다.
따라서 우리에게 걷거나 컵을 잡는 건 '무의식(쉬운 일)'이고, 미분방정식을 푸는 건 '의식(어려운 일)'입니다.

> **동물의 예시:** 다람쥐가 흔들리는 나뭇가지 사이를 점프할 때, 다람쥐는 뉴턴 역학을 계산하지 않습니다. 몸 자체가 물리를 이해하고 반응합니다. 이것이 고도로 발달된 PI입니다.

반면 AI는 체스, 바둑, 언어, 코딩 등 인간이 '어렵다'고 느끼는 인지적 지능(CI)부터 배웠죠.

### 차원과 속도의 관점에서의 설명

LLM에게 "사과는 빨갛다"는 텍스트일 뿐입니다. 하지만 PI에게 사과는 무게가 있고, 표면이 매끄럽고, 꽉 쥐면 으깨지는 물체입니다. 추상적인 개념을 물리적 실체와 연결하는 능력이 본질입니다.
사과를 몇 가지 단어로 표현했지만, 실제로는 오렌지와 사과를 손으로 구분할 수 있듯이, 입으로 깨물어서 먹어보면 한국 사과인지 서양사과인지 구분할 수 있듯이, 언어로는 표현하지 못하나 인간한테는 당연한 수 많은 정보들이 있습니다.

텍스트의 세상은 상당히 abstracted 되어 있기 때문에, 비전, 촉감과 같은 물리적인 정보에 비하면 차원이 아주 작고, 효율적인 세상입니다. 그래서 어려운 사고와 학습에 효율적이지만, 아주 생략된 정보가 많이 있습니다.

이를 Reporting Bias 라고 합니다, 텍스트 세상에는 존재하지 않는 당연한 정보들이죠.

균형을 잡거나, 힘을 조절 하거나 실제 물리적 동작에서는 실시간 상호작용이 필요합니다. 무엇이 들어있는지 모르는 비닐 포장을 잡는다거나... 하는 태스크는 매우 빠른 ms 단위의 피드백, 상호작용이 필요한데, 현재의 똑똑한 프론티어 LLM 은 이렇게 빠르게 동작하지 못합니다.

빠른 반응 속도를 위해 요즘의 VLA 들이 hierarchical 구조를 가져가는 맥락과 일치합니다. 자세한 내용은 [VLA & RFM 발전 과정](vla-rfm-progress) 문서의 수렴 진화 섹션을 참조하세요.

---

## 인간과 AI의 학습 방법의 차이

LLM에도 Jagged Intelligence 문제가 있습니다. 수학이나 코딩 같은 부분은 놀랍게 잘하지만, strawberry 의 r 이 몇개인지 모르는 것 처럼 인간한테는 당연한 것들을 못하는 현상이 있습니다.  
대표적으로 continual learning 이 안되기 때문에 학습 과정과 기억력 부분이 많이 다릅니다. 

물리적 지능도 마찬가지 입니다. 사람은 축구를 잘하기 위해, 양파를 잘 썰기 위해, 피아노를 잘 치기위해 어떻게 학습을 하나요.
남이 행동하는 것을 눈으로 보기도 하고, 직접 해보기도 하고, 코치가 운동을 할때 몸을 잡아주기도 하고, 이미지 트레이닝 (상상) 을 하기도 합니다. 물리적인 수행 능력은 아무래도 직접 해보면서 경험과 셀프 피드백을 통해 배우는 것이 가장 주요한 학습 방법이겠죠.

현재의 VLA 는 대부분 Imitation Learning 을 기반으로 학습합니다. 누군가 기록해둔 행동 데이터를 배우는 것이죠. 경험을 통해 배우는 사람과는 거리가 많이 멀죠. 현재 강화 학습 기법은 특정한 움직임 (대부분 보행) 에 국한되어 있습니다. 이러한 맥락에서 나온 연구가 [Physical Intelligence](../../companies/physical-intelligence)사의 [π*0.6](../../models/pi0-6-star)입니다. 아직은 연구 단계에 그친 것 같습니다.

---

## 그래서, 결론은 불가능 하다는 것인가?


> 가능할 것만 같습니다.

- 인간의 노동 중 수 많은 부분은 꼭 촉각이 없어도 가능합니다.
- 손바닥이나 손등에 카메라를 달아서, 혹은 depth 카메라를 달아서 인간은 없는 감각을 추가할 수도 있습니다.
- 인간의 신체로는 불가능한 움직임이 로봇은 가능합니다.
- 로봇 전용의 도구를 만드는 것도 가능합니다.

테슬라의 FSD, Nvidia 의 알파마요 가 자율주행 태스크에서 잘 보여주었다고 생각합니다. 인간과 다른 형태로 운전이라는 일을 구현했죠. 손이 없어도, 발이 없어도 운전은 할 수 있습니다, 인간의 몸이라는 제약이 없으니까요.  

어떤 방식으로 구현이 될지는 모릅니다, 물리적 지능은 인지적 지능과는 또 다른 어려운 문제이지만 LLM을 통해 많은 것을 배운 인류는 금방 정답을 찾을 것만 같습니다.


---
## See Also

- [RFM & VLA란 무엇인가](../fundamentals/what-is-rfm-vla)
- [VLA & RFM 발전 과정](vla-rfm-progress)
- [촉각의 필요성](tactile-sensing)
- [휴머노이드 디자인](humanoid-design)

## References

- [TEDxMIT: Robots with Physical Intelligence | Sangbae Kim](https://www.youtube.com/watch?v=SPAX0A2cjec)
- [Robots vs. Door at DARPA Robotics Challenge | IEEE Spectrum](https://www.youtube.com/watch?v=UUOo8N9_iH0)
- [MIT Biomimetic Robotics Lab](https://meche.mit.edu/people/faculty/SANGBAE@MIT.EDU)
- [Moravec's Paradox - Wikipedia](https://en.wikipedia.org/wiki/Moravec's_paradox)
- [MIT News: Taking a leap in bioinspired robotics](https://news.mit.edu/2016/faculty-profile-sangbae-kim-1216)
