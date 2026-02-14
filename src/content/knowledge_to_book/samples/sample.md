# Pandoc 마크다운 → DOCX 변환 테스트용 샘플 문서

이 문서는 Pandoc에서 자주 사용하는 마크다운 요소들을 실제로 배치해 보고,  
`pandoc input.md -o output.docx --number-sections --toc` 명령어로 변환했을 때  
어떻게 렌더링되는지 확인하기 위한 테스트용 원고입니다.

## 제목 계층과 자동 번호 매김

Pandoc은 `--number-sections` 옵션을 주면 소스에 번호를 쓰지 않아도  
계층별로 자동 번호를 붙여줍니다.

### 제목 수준 3

#### 제목 수준 4

##### 제목 수준 5

## 본문 텍스트와 강조

일반 본문은 이렇게 씁니다.  
**굵은 글씨**, *기울임*, ~~취소선~~, `인라인 코드` 등을 섞어 사용하세요.

> 인용 블록은 이렇게  
> 여러 줄에 걸쳐 쓸 수 있습니다.

## PhyCritic 소개 (주제 예시)

PhyCritic은 물리적 AI 태스크에 특화된 멀티모달 비평 모델입니다.  
논문: [PhyCritic: Multimodal Critic Models for Physical AI](https://arxiv.org/abs/2602.11124)

### 그림 삽입과 캡션 + 각주

아래는 논문 Figure 1을 가져온 예시입니다.

![PhyCritic의 자기참조 판단 과정 — 오븐 요리 태스크 예시](https://arxiv.org/html/2602.11124v1/x1.png)

**그림** PhyCritic이 먼저 자체 예측을 생성한 후 이를 기준으로 두 응답을 비교하는 과정[^1]

[^1]: 출처: Xiong et al., arXiv:2602.11124 (2026), Figure 1.

Pandoc 변환 시 `--extract-media=media` 옵션을 주면 위 이미지가 media 폴더로 추출됩니다.

### 유튜브 영상 링크 + QR 코드

더 자세한 설명은 아래 영상을 참고하세요:

**PhyCritic: LMM critic for physical reasoning**  
https://www.youtube.com/watch?v=POQhBupkDiE

QR 코드 (스마트폰으로 스캔 시 바로 이동):

![PhyCritic 설명 영상 QR 코드](https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://www.youtube.com/watch?v=POQhBupkDiE)

**그림** PhyCritic 유튜브 영상 QR 코드

### 코드 블록과 인라인 코드

XML-유사 출력 형식 예시 (논문에서 발췌):

```xml
<PhyCritic>
  <pred_think>
    트레이가 이미 오븐 안에 있고 문이 닫혔으므로,
    다음 행동은 오븐을 켜는 것이다.
  </pred_think>
  <pred>Press the oven start button</pred>
  <think>
    Resp 1은 정확한 인과 순서를 따름.
    Resp 2는 불필요한 동작을 제안 → 비효율적.
  </think>
  \boxed{Resp 1 is better}
</PhyCritic>
```

인라인으로는 `self-referential critic finetuning`이나 `GRPO`처럼 씁니다.

### 수식 (LaTeX)

기본 선호도 학습 손실 (Bradley-Terry 모델):

$$
\mathcal{L}_\text{BT} = -\mathbb{E} \left[ \log \sigma \left( r(\mathbf{x}, \mathbf{y}_w) - r(\mathbf{x}, \mathbf{y}_l) \right) \right]
$$

PhyCritic에서 사용된 자기참조 보상 포함 목적 함수:

$$
\mathcal{J} = \mathbb{E} \left[ 
    R_\text{critic}(\hat{y}, y_\text{ref}) + 
    \lambda R_\text{self}(\hat{y}_\text{pred}, y_\text{ref})
\right]
$$

Pandoc은 기본적으로 MathJax나 LaTeX를 지원하므로 docx에서도 수식이 제대로 렌더링됩니다.

## 변환 추천 명령어 모음

```bash
# 기본 (번호 + 목차)
pandoc sample.md -o sample.docx --number-sections --toc

# 이미지 추출까지
pandoc sample.md -o sample.docx --number-sections --toc --extract-media=media

# 참고문헌 추가하고 싶을 때 (citations 활성화)
pandoc sample.md -o sample.docx --number-sections --toc --citeproc --bibliography=refs.bib
```

이 파일을 그대로 `.md`로 저장해서 테스트하시면 됩니다.
