# (가제) Physical AI: 로봇 지능의 새로운 시대

이 문서는 1부 1장 초안입니다.  
원문 기반: `../knowledge/ko/essays/fundamentals/definition.md`

## 1부 Physical AI란 무엇인가

### 1장 Physical AI의 도래

#### 1.1 용어의 등장: Jensen Huang과 GTC 2024

2024년 3월 18일, NVIDIA의 CEO 젠슨 황은 GTC 키노트에서  
`Physical AI`라는 용어를 전면에 내세웠다.

> "The next wave of AI will be AI learning about the physical world... Physical AI, AI that can perceive, reason, plan and act."
>  
> — Jensen Huang, GTC 2024 ([NVIDIA Blog](https://blogs.nvidia.com/blog/2024-gtc-keynote/))

> "The ChatGPT moment for general robotics is just around the corner."
>  
> — Jensen Huang ([HPC Wire](https://www.hpcwire.com/2025/03/24/jensen-huang-charts-nvidias-ai-powered-future/))

이 발언을 기점으로 `Physical AI`는 AI 업계의 핵심 화두로 빠르게 확산되었다.
다만 용어의 확산 속도에 비해, 정의는 아직 단일하게 합의되지 않았다.

#### 1.2 넓은 정의 vs 좁은 정의

Physical AI에 대한 정의는 크게 두 가지로 나뉜다.

##### 넓은 정의: "몸을 가진 AI"

NVIDIA와 일반 언론에서 주로 사용하는 관점이다.

[영상 삽입 예정: What is Physical AI? - NVIDIA]

*(추후 영상 또는 스틸 이미지 삽입 예정)*

출처: [NVIDIA Glossary - Generative Physical AI](https://www.nvidia.com/en-us/glossary/generative-physical-ai/)

> "The next big thing is Physical AI, AI with a body."
>  
> — Jensen Huang

이 관점에서 Physical AI는 물리 세계와 상호작용하는 거의 모든 AI를 포함한다.

- 자율주행 자동차
- 드론
- 산업용 로봇
- 휴머노이드
- 디지털 트윈

NVIDIA는 GPU를 기반으로 다양한 산업을 포괄하는 플랫폼 사업자다.  
따라서 여러 응용 분야를 `Physical AI`라는 하나의 키워드 아래에서 통합하려는 전략은 자연스럽다.

##### 좁은 정의: VLA 또는 End-to-End 학습 기반 범용 로봇

Physical Intelligence, Google DeepMind, Figure AI 등  
실제로 로봇 지능을 개발하는 조직은 더 좁은 정의를 채택한다.

> "To build AI systems that have the kind of physically situated versatility that people possess, we need to make AI systems embodied so that they can acquire physical intelligence."
>  
> — [Physical Intelligence](https://www.physicalintelligence.company/)

> "Vision-language-action (VLA) model... can 'see' (vision), 'understand' (language) and 'act' (action) within the physical world."
>  
> — [Google DeepMind, Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)

이 관점에서 Physical AI는 `VLA(Vision-Language-Action)`를 중심으로,  
인식-추론-행동을 end-to-end로 학습하는 범용 로봇 AI를 가리킨다.

정리하면, 넓은 정의는 산업 전반의 범주를 묶는 데 유리하고,  
좁은 정의는 현재 기술 경계와 연구 대상을 구체적으로 규정하는 데 유리하다.

## 참고

### 유튜브 영상

- What is Physical AI? - NVIDIA: https://www.youtube.com/watch?v=AYSfcgVv9-U

### 링크

- NVIDIA GTC 2024 키노트 요약: https://blogs.nvidia.com/blog/2024-gtc-keynote/
- NVIDIA Glossary - Generative Physical AI: https://www.nvidia.com/en-us/glossary/generative-physical-ai/
- Physical Intelligence: https://www.physicalintelligence.company/
- Google DeepMind - Gemini Robotics: https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/
