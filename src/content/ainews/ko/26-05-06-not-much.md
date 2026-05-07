---
title: "Anthropic, SpaceX 컴퓨트 제휴로 Claude 한도 확대"
summary:
  - "Anthropic이 SpaceX 컴퓨트 제휴 체결"
  - "Claude Code 5시간 한도가 두 배로 증가"
  - "OpenAI가 MRC 네트워크 프로토콜 공개"
  - "Gemma 4 MTP 체크포인트 출시"
  - "로컬 Qwen 3.6 코딩 활용 확산"
date: 2026-05-06
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-06-not-much.md"
hasHeadline: false
headline: "Anthropic, SpaceX 컴퓨트 제휴로 Claude 한도 확대"
tags:
  - Anthropic
  - Claude
  - SpaceX
isFeatured: false
---

## 헤드라인: Anthropic, SpaceX 컴퓨트 제휴로 Claude 한도 확대

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic은 SpaceX와의 대규모 컴퓨트 제휴를 통해 Claude 제품군의 사용 한도를 즉시 확대했다. 핵심 변화는 Claude Code의 5시간 rate limit 두 배 확대, Pro/Max의 피크 시간대 제한 완화, Opus API rate limit 상향이다. 이번 소식은 새 모델 출시보다 추론(inference) 용량, 제품 신뢰성, 에이전트(agent) 워크플로가 프런티어 AI 경쟁의 핵심 변수로 부상했음을 보여준다.

---

## AI Twitter Recap

### 주요 소식: Anthropic 및 Claude 발표와 논평

### 일어난 일

**Anthropic은 컴퓨트, Claude Code 한도, 에이전트 플랫폼 방향을 중심으로 매우 밀도 높은 뉴스 사이클을 보냈다.** 공식적으로 Anthropic은 SpaceX와 새로운 컴퓨트 파트너십을 발표했으며, 이 제휴가 용량을 “substantially increase”하고 Claude 제품의 더 높은 한도로 즉시 이어진다고 밝혔다. [@claudeai](https://x.com/claudeai/status/2052060691893227611)는 이번 계약으로 사용 한도를 높일 만큼 컴퓨트가 늘어난다고 말했고, 이어 [@claudeai](https://x.com/claudeai/status/2052060693269008586)는 구체적으로 **Claude Code의 5시간 rate limit이 Pro, Max, Team, seat-based Enterprise에서 두 배가 되며, Pro와 Max의 피크 시간대 한도 축소가 제거되고, Opus API rate limit이 크게 증가한다**고 설명했다. xAI는 이 계약을 SpaceXAI를 통해 Anthropic이 “additional capacity for Claude”를 위해 **Colossus 1**에 접근하는 것으로 표현했다 [@xai](https://x.com/xai/status/2052060350770515978). Anthropic CTO Tom Brown은 **Claude 추론(inference)이 “며칠 안에” Colossus에서 확대될 것**이라고 덧붙였다 [@nottombrown](https://x.com/nottombrown/status/2052062566126649448). 회사는 또한 Claude Code, GitHub 규모 사용 사례, managed agents에 관한 라이브스트리밍 키노트와 세션이 포함된 **“Code with Claude”** 이벤트를 열었다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2052055459272761661). 이로 인해 개발자와 관찰자들의 실시간 논평도 상당히 많았다 [@simonw](https://x.com/simonw/status/2052055655230706032), [@latentspacepod](https://x.com/latentspacepod/status/2052062150332710942). 이를 둘러싼 논의는 네 가지 주제로 갈라졌다. **(1) 예상보다 사용량 증가가 컸기 때문에 컴퓨트 병목이 많은 사람이 생각한 것보다 심각했다는 점, (2) 사용자들은 5시간 한도 증가를 환영했지만 주간 한도가 그대로인 점에 의문을 제기했다는 점, (3) Anthropic의 memory/“Dreaming” 및 rubrics/“Outcomes” 같은 새 managed-agent 기능이 진짜 제품 차별화인지 아니면 commoditize 가능한 harness 기능인지 논쟁했다는 점, (4) Anthropic의 안전성/거버넌스 포지셔닝이 계속 찬사와 비판을 동시에 받았다는 점**이다. 여기에는 일부 Anthropic 직원들이 “AGI는 우리만 신뢰할 수 있다”는 태도를 보인다는 비판자들의 주장과, Anthropic 인접 인물들이 내부의 더 일반적인 관점은 “우리만”이라기보다 “아무도 AGI를 신뢰받아서는 안 된다”에 가깝다고 반박한 내용이 포함됐다 [@_aidan_clark_](https://x.com/_aidan_clark_/status/2052089187659346047), [@kipperrii](https://x.com/kipperrii/status/2052094851991392536).

### 공식 사실과 확인된 세부 내용

- Anthropic은 용량 확대를 위한 **SpaceX 컴퓨트 파트너십**을 발표했다 [@claudeai](https://x.com/claudeai/status/2052060691893227611).
- Anthropic은 즉시 다음을 시행한다고 밝혔다.
  1. Pro, Max, Team, seat-based Enterprise에서 **Claude Code의 5시간 rate limit 두 배 확대**
  2. Pro와 Max에서 **Claude Code의 피크 시간대 한도 축소 제거**
  3. **Opus 모델의 API rate limit 대폭 증가**
  출처: [@claudeai](https://x.com/claudeai/status/2052060693269008586)
- Anthropic은 더 높은 사용 한도와 SpaceX 컴퓨트 계약에 관한 공식 설명을 링크했다 [@claudeai](https://x.com/claudeai/status/2052060696255283346).
- xAI의 발표는 이 계약을 **SpaceXAI가 Claude 추가 용량을 위해 Anthropic에 Colossus 1 접근을 제공하는 것**으로 설명했다 [@xai](https://x.com/xai/status/2052060350770515978).
- Anthropic CTO Tom Brown은 **Claude 추론(inference)이 며칠 내 Colossus에서 ramping되기 시작할 것**이라고 말했다 [@nottombrown](https://x.com/nottombrown/status/2052062566126649448).
- Anthropic 제품/엔지니어링 리드 Amol Avasare는 **주간 한도는 아직 증가하지 않았다**고 설명했다. 주간 한도에 도달하는 사용자는 **작은 비율**인 반면 5시간 한도에 도달하는 사용자는 훨씬 더 많기 때문이며, 컴퓨트가 들어오면 추가 변경이 있을 수 있다고 했다 [@TheAmolAvasare](https://x.com/TheAmolAvasare/status/2052064611692904639), [@TheAmolAvasare](https://x.com/TheAmolAvasare/status/2052066157176426653).
- Anthropic/Claude는 키노트, Claude Code 업데이트, GitHub 규모 사용, managed agents가 포함된 **Code with Claude** 이벤트를 열었다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2052055459272761661).
- Anthropic의 Alex Albert는 이벤트를 홍보했고 이후 발표를 **“More chips, more Claude”**로 요약했다 [@alexalbert__](https://x.com/alexalbert__/status/2052067009605861764), [@alexalbert__](https://x.com/alexalbert__/status/2052065953173872912).
- Claude Code 전용 계정도 Pro/Max/Team의 한도 증가를 재차 알렸다 [@claude_code](https://x.com/claude_code/status/2052071730190123094).

### 컴퓨트 세부 사항과 규모 주장

여러 트윗은 SpaceX/xAI 계약 규모에 대한 정량적 주장을 추가했다. 이는 **Anthropic의 주요 발표 트윗에서 나온 것은 아니지만**, 널리 공유됐다.

- [@_arohan_](https://x.com/_arohan_/status/2052065871552819647)는 **“300MW 이상의 신규 용량”과 “한 달 내 220,000개 이상의 NVIDIA GPU”**를 언급했다.
- [@scaling01](https://x.com/scaling01/status/2052068218047545501)는 Colossus 1에 **약 150,000개의 H100, 50,000개의 H200, 30,000개의 GB200**이 포함된다고 주장했다.
- [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2052065017072386450)는 **220,000 GPU** 수치를 반복했고, Anthropic이 **Google TPU에 $200B를 약정했다**는 검증되지 않은 주장도 덧붙였다.
- [@eliebakouch](https://x.com/eliebakouch/status/2052066609896808473)는 이번 계약을 Anthropic이 유휴 GPU만이 아니라 사실상 **Colossus 1 전체 용량**을 확보한 것으로 해석했다.
- Elon Musk는 나중에 xAI가 이미 학습(training)을 Colossus 2로 옮겼기 때문에 SpaceXAI가 Colossus 1을 임대하는 데 편안했다고 말했다 [@elonmusk](https://x.com/elonmusk/status/2052069691372478511). [@eliebakouch](https://x.com/eliebakouch/status/2052068426152132722)는 Colossus 2가 이미 **약 500k Blackwells** 수준이라고 주장했다.

이 숫자들은 **부분적으로 공식 인접 정보이지만 Anthropic의 자체 발표 스레드에서 완전히 정식화된 것은 아닌 것**으로 보는 편이 좋다. 정확한 재고 구성보다 더 강한 사실적 결론은 이것이다. **Anthropic은 단기적으로 매우 큰 외부 추론(inference) 용량 확장을 확보했다.**

### 병목이 실제였다는 증거

반복적으로 등장한 해석은 Anthropic의 제약이 단순한 가격 정책이나 제품 설계가 아니라 실제 컴퓨트였다는 것이다.

- [@kimmonismus](https://x.com/kimmonismus/status/2052059082886910251)는 라이브스트림 중/후에 Anthropic이 **추가 비용 없이 Claude Code rate limit을 두 배로 늘리는지** 물었다.
- [@kimmonismus](https://x.com/kimmonismus/status/2052118418174681572)는 이후 Dario/Daniela 인터뷰 발언을 요약하며 **사용량이 예상 밖으로 약 80배 증가했고**, 이로 인해 컴퓨트 부족이 발생했으며 SpaceX 계약이 이를 해결하려는 첫 주요 시도라고 전했다.
- [@czajkadev](https://x.com/czajkadev/status/2052101699188248990)는 이번 업데이트를 **컴퓨트가 병목이었다는 증거**로 명시적으로 해석했다.
- [@theo](https://x.com/theo/status/2052114791045668894)는 별도로 업계 문제가 “돈만의 문제가 아니라 컴퓨트의 문제”라고 주장했는데, 이는 더 넓은 논점이지만 Anthropic 사례와 맞아떨어진다.
- [@scaling01](https://x.com/scaling01/status/2052069341609226550)는 이번 계약을 더 큰 거시적 논지로 일반화했다. **프런티어 랩들은 경쟁사로부터 데이터센터를 빌릴 만큼 컴퓨트 제약을 받고 있다**는 것이다.

이 데이터셋에서 가장 강한 사실적/시장 신호 중 하나는 이것이다. **Anthropic의 사용자 체감 rate limit은 주요 컴퓨트 계약 이후에야 의미 있게 움직였다.**

### 제품 함의: Claude Code, API, managed agents

Anthropic이 사용자에게 미치는 실질적 영향은 명확하다.

- **Claude Code 파워 유저는 5시간 창에서 더 많은 burst capacity**를 얻게 된다.
- Pro/Max에서 **피크 시간대 throttling이 완화**된다.
- **Opus API 사용자는 더 높은 rate limit**을 얻으며, 이는 에이전트 워크로드와 프로덕션 통합에 중요하다.

이 이벤트는 에이전트를 둘러싼 Anthropic의 더 넓은 플랫폼 야심도 부각했다. 여기서 주요 공식 트윗은 대체로 이벤트 자체에 관한 것이지만, 논평은 다음 같은 기능을 가리켰다.

- **Dreaming** = memory / cross-session context
- **Outcomes** = rubrics / grading / objective tracking
- agent orchestration / managed agents 방향

논평:

- [@RichNwan](https://x.com/RichNwan/status/2052085746526216601)은 Anthropic이 **Dreaming**과 **Outcomes**로 “managed agents platform”을 구축하고 있다고 보았지만, 이것들이 open harness와 비교해 의미 있게 차별화되는지 의문을 제기했다.
- [@eliebakouch](https://x.com/eliebakouch/status/2052156107313807690)는 이것들이 특히 파워 유저에게 **중요하다**고 봤다. 메인 에이전트의 context window를 보존하고 별도의 grader를 사용해 품질/안전성/reward hacking을 관리할 수 있기 때문이다.
- [@latentspacepod](https://x.com/latentspacepod/status/2052068066167816369)는 Anthropic 발표자들이 **verification**, “routines are higher-order prompts,” 그리고 남은 격차가 종종 원시 능력이 아니라 **deployment/operationalization**이라는 점을 강조했다고 인용했다.

마지막 지점은 Anthropic을 “one-shot chatbot”에서 **memory, decomposition, grading, verification을 갖춘 구조화된 에이전트 시스템**으로 이동하는 더 큰 흐름과 맞춘다.

### 사실과 의견

### 가장 강하게 뒷받침되는 사실 주장

- Anthropic은 새로운 **SpaceX 컴퓨트 파트너십**을 맺었고 Claude Code/API 한도를 즉시 높였다 [@claudeai](https://x.com/claudeai/status/2052060691893227611), [@claudeai](https://x.com/claudeai/status/2052060693269008586).
- 주간 한도는 아직 두 배가 **아니다**. Anthropic 직원은 어떤 사용자가 어떤 cap에 도달하는지에 근거한 의도적 결정이라고 말했다 [@TheAmolAvasare](https://x.com/TheAmolAvasare/status/2052064611692904639).
- Anthropic은 단기적으로 **Colossus에서 Claude 추론(inference)**을 실행할 계획이다 [@nottombrown](https://x.com/nottombrown/status/2052062566126649448).
- Anthropic은 코딩, 프로덕션 배포, managed agents에 초점을 둔 **Code with Claude** 이벤트를 열었다 [@ClaudeDevs](https://x.com/ClaudeDevs/status/2052055459272761661).

### 그럴듯하지만 덜 직접적으로 검증된 주장

- Anthropic이 단기간에 **>300 MW / >220,000 NVIDIA GPUs**에 접근하게 된다는 주장 [@_arohan_](https://x.com/_arohan_/status/2052065871552819647).
- Colossus 1 재고 구성이 **H100/H200/GB200 혼합**이라는 주장 [@scaling01](https://x.com/scaling01/status/2052068218047545501).
- Anthropic 수요 급증이 약 **80배 성장**이었고 경영진이 예상하지 못했다는 주장 [@kimmonismus](https://x.com/kimmonismus/status/2052118418174681572).

### 의견과 해석

- Anthropic이 컴퓨트 부족 해결을 **너무 오래 기다렸고**, OpenAI/Codex에 상당한 성장을 빼앗겼다는 주장: [@scaling01](https://x.com/scaling01/status/2052070594972090409).
- 이번 계약은 상위 랩들이 공급 가능한 hyperscaler/cluster operator에서 용량을 빌릴 수 있으므로 **컴퓨트가 지속 가능한 moat가 아니다**라는 점을 증명한다는 주장: [@Dorialexander](https://x.com/Dorialexander/status/2052067579594707149).
- 반대로 실무적으로는 정반대를 증명한다는 해석도 있다. **배치된 컴퓨트를 통제하는 주체가 수요 충족 여부를 좌우한다**는 것이다.
- Anthropic의 플랫폼 기능은 open harness가 복제할 수 있으므로 **별로 차별화되지 않았다**는 주장: [@RichNwan](https://x.com/RichNwan/status/2052085746526216601).
- 또는 first-party 통합이 모델 행동, memory, evaluator, 제품 경험을 촘촘히 결합할 수 있으므로 **충분히 차별화된다**는 해석.
- Anthropic 문화는 유별나게 safety-focused이고 “인류에 좋다”는 평가: Elon Musk는 Anthropic 고위 인사들을 만난 뒤 인상적이었고 “no one set off my evil detector”라고 말했다 [@elonmusk](https://x.com/elonmusk/status/2052069691372478511).
- 반대로 비판자들은 계속 Anthropic을 AGI 거버넌스에서 지나치게 paternalistic하거나 exclusivist하다고 본다 [@_aidan_clark_](https://x.com/_aidan_clark_/status/2052089187659346047).

### 담론 속 서로 다른 의견

### 긍정적 / 지지적 반응

많은 답글은 이를 사용자에게 좋은 일이며 Anthropic이 공격적으로 대응하고 있다는 증거로 받아들였다.

- [@alexalbert__](https://x.com/alexalbert__/status/2052065953173872912): “More chips, more Claude.”
- [@_sholtodouglas](https://x.com/_sholtodouglas/status/2052062164467224971): “More compute -> straight to you.”
- [@kimmonismus](https://x.com/kimmonismus/status/2052059448261177367)는 두 배가 된 한도와 높아진 Opus API cap을 강조했다.
- [@TheRundownAI](https://x.com/TheRundownAI/status/2052064469371470218)는 이를 명확한 사용자 이익으로 요약했다.
- [@DannyLimanseta](https://x.com/DannyLimanseta/status/2052078750893056420)는 회사 간 협력을 좋게 봤고 Anthropic의 신중함이 SpaceXAI의 낙관론으로 균형을 이룰 수 있기를 바랐다.
- [@AmandaAskell](https://x.com/AmandaAskell/status/2052161052058833181)는 발표의 상징성에 긍정적으로 반응했다.

### 혼합적 / 실용적 반응

이 반응들은 변화를 환영하면서도 운영 세부 사항과 남은 제한에 초점을 맞췄다.

- [@btibor91](https://x.com/btibor91/status/2052067002412335435)와 [@kimmonismus](https://x.com/kimmonismus/status/2052061694080188720)는 즉시 가능한 단서를 지적했다. **주간 cap은 그대로**라는 점이다.
- [@TheAmolAvasare](https://x.com/TheAmolAvasare/status/2052064611692904639)는 이에 직접 답했다.
- [@sbmaruf](https://x.com/sbmaruf/status/2052119971820658771)는 변경 이후에도 여전히 rate limit이 보인다고 보고해 rollout과 reliability tuning이 진행 중임을 시사했다.
- [@zachtratar](https://x.com/zachtratar/status/2052161984968396819)는 단계적 rollout 중 인내를 요청했다.

### 경쟁 / 전략적 비판

다른 그룹은 이 발표를 OpenAI 대 Anthropic 제품 전쟁의 관점에서 보았다.

- [@scaling01](https://x.com/scaling01/status/2052070594972090409)는 Anthropic이 **너무 오래 기다려 성장 우위를 놓쳤고**, OpenAI에 ARR 수십억 달러를 내줬을 수 있다고 주장했다.
- [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2052065017072386450)는 이 움직임을 **OpenAI Codex 성장** 때문에 Dario가 공격적으로 나선 것으로 읽었다.
- [@_arohan_](https://x.com/_arohan_/status/2052053181656641735)는 “Big tech has become a claude wrapper”라고 농담하며 Claude의 개발자 mindshare를 가리켰다.
- [@dejavucoder](https://x.com/dejavucoder/status/2052051193376231845)의 “claude is down, saint tibo please reset codex limits”라는 말은 한 서비스가 용량 제약을 받을 때 코딩 도구 사이를 multi-homing하는 실용적 현실을 보여준다.

### 거버넌스 / 안전성 / 문화 비판

가장 깊은 철학적 이견은 여기에 있다.

- [@_aidan_clark_](https://x.com/_aidan_clark_/status/2052089187659346047)는 Anthropic 동료들에게서 반복적으로 들었다고 말하는, AI를 만들 신뢰를 받을 수 있는 건 그들뿐이라는 믿음을 비판했다.
- [@kipperrii](https://x.com/kipperrii/status/2052094851991392536)는 “only we can be trusted” 프레이밍은 나쁠 것이라는 데 부분적으로 동의했지만, 실제 다수 견해는 **“no one can be trusted with AGI”**에 더 가깝고, 개인적으로는 여전히 Anthropic을 다른 곳보다 더 신뢰한다고 주장했다.
- [@elonmusk](https://x.com/elonmusk/status/2052069691372478511)는 Anthropic 리더들을 만난 뒤 의외의 지지를 보냈다.
- [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2052080339364004317)는 과거 Anthropic 비판을 고려할 때 이런 반전이 아이러니하다고 했다.
- [@teortaxesTex](https://x.com/teortaxesTex/status/2052080900280557749)는 Musk/xAI와 Anthropic 사이의 빠른 détente를 조롱했다.
- [@teortaxesTex](https://x.com/teortaxesTex/status/2052045988936683674)는 “Mythos” 같은 강력한 폐쇄형 시스템을 만들면서 다른 이들에게 AI risk를 경고하는 것은 일관성이 없다고도 주장했다.
- [@goodside](https://x.com/goodside/status/2052077014346064372)는 Anthropic 거버넌스에 직접 관한 것은 아니지만, Anthropic 주변에 자주 모이는 더 넓은 도덕/AI 규범 논쟁에 기여했다.

### Claude 모델 성능과 비교에 관한 논평

이 트윗들에 주요 새 Claude 모델이 등장한 것은 아니지만, Claude는 제품과 평가 담론에서 계속 기준점이었다.

- [@giffmana](https://x.com/giffmana/status/2051925008457273527)는 수학적 불일치 사례에서 “Opus 4.6,” ChatGPT Pro, Muse Spark를 비교했다. 그의 평가는 다음과 같다.
  - **Opus 4.6**은 잘못된 증명을 자신 있게 방어했다(“gaslit”)
  - **ChatGPT Pro**는 공식을 올바르게 조화시켰지만 해석은 없었다
  - **Muse Spark**는 둘 다 잘했다
  이는 일화적이지만, 이 묶음에서 더 구체적인 비교형 정성 모델 보고 중 하나다.
- [@kimmonismus](https://x.com/kimmonismus/status/2052040471829004627)는 **GPT-5.5가 cyber에서 Claude Mythos Preview와 사실상 동률**이며, 어쩌면 더 비용 효율적이고 Mythos는 일부 일반 벤치마크와 SWE-bench Pro에서 약간 앞설 뿐이라고 주장한 Substack 분석을 요약했다. 그는 왜 Mythos가 계속 비밀스럽게 남아 있는지 의문을 제기했다.
- [@AssemblyAI](https://x.com/AssemblyAI/status/2052043337751056733)는 자사 gateway에서 **Claude 4.5+ 모델의 structured JSON** 지원을 언급했다.
- [@OpenRouter/TencentHunyuan](https://x.com/TencentHunyuan/status/2051978552900538403)는 Hy3 사용을 이끄는 주요 앱 중 하나로 **Claude Code**를 열거했다. 이는 뒤에서 third-party 모델이 쓰이는 경우에도 코딩 도구 생태계에서 Claude의 중요성을 보여준다.

이 논평들은 단단한 모델 순위를 확립하지는 않지만, Claude가 여전히 coding-agent 워크플로의 주요 benchmark이며 고급 사용자들이 이제 단순한 base intelligence가 아니라 **model + harness + limits + reliability**를 비교한다는 점을 보여준다.

### Claude Code와 harness engineering 맥락

데이터셋 전반의 주목할 만한 배경 흐름은 많은 엔지니어들이 이제 **에이전트 성능이 harness**에 크게 의존한다고 본다는 점이다. 여기에는 system prompts, tools, middleware, decomposition strategies, model-specific tuning이 포함된다.

관련 비-Anthropic 논평:

- [@masondrxy](https://x.com/masondrxy/status/2052054177749029164): 같은 모델, 같은 작업이어도 prompts/tools/middleware에 따라 점수가 크게 달라지며, **tau2-bench에서 10–20점 상승**이 가능하다고 했다.
- [@LangChain](https://x.com/LangChain/status/2052054711440662864): OpenAI, Anthropic, Google 모델용 harness profiles.
- [@jakebroekhuizen](https://x.com/jakebroekhuizen/status/2052058987580051566): 모델이 좋아짐에 따른 **temporal harness evolution**과 모델 패밀리 간 **lateral tuning**을 구분했다.
- [@Vtrivedy10](https://x.com/Vtrivedy10/status/2052100726608781363): 맞춤형 harness가 많은 작업에서 기본 Codex/Claude Code를 능가할 수 있으며, 많은 에이전트 설계에서 사용 가능한 context window는 여전히 실질적으로 **50–100k**라고 주장했다.
- [@kieranklaassen](https://x.com/kieranklaassen/status/2052092428438688027): “If you cannot get your work done [in] the Claude CLI, Claude will not be able to work for you.”

이 점이 중요한 이유는 Anthropic의 플랫폼 움직임 중 일부, 즉 memory, grading, managed agents가 **harness의 일부를 제품화하는 것**으로 읽힐 수 있기 때문이다. 이것이 중심 논쟁을 설명한다. **이것들은 방어 가능한 플랫폼 primitives인가, 아니면 open framework가 복제할 수 있는 패턴의 first-party packaging일 뿐인가?**

### 더 넓은 맥락: 왜 중요한가

1. **이제 추론(inference)이 학습(training)만큼이나 프런티어 병목이다.**  
   이번 뉴스는 새 모델 출시가 아니라 용량 출시였다. 이는 프런티어에서 점점 더 흔해지고 있다.

2. **컴퓨트 시장은 유동적이고 전략적으로 변하고 있다.**  
   Anthropic이 SpaceX/xAI 인프라와 협력한 것은 각 프런티어 랩이 오직 자체 수직 통합 스택 위에만 있다는 단순한 서사를 약화한다.

3. **개발자 제품 점유율은 신뢰성과 한도에 민감하다.**  
   Claude는 강한 개발자 affinity를 가진 것으로 보이지만, rate limit과 outage는 사용자를 Codex/Cursor/기타 도구로 빠르게 밀어낸다.

4. **전장은 base model에서 agent system으로 이동하고 있다.**  
   “Code with Claude,” managed agents, Dreaming, Outcomes, 그리고 주변 담론은 경쟁의 다음 층이 **memory, orchestration, evals, workflow integration**이 될 것임을 가리킨다.

5. **Anthropic의 브랜드는 여전히 양분돼 있다.**  
   Anthropic은 동시에 다음처럼 인식된다.
   - 제품 품질과 safety seriousness로 존경받고,
   - paternalism 또는 perceived exclusivism으로 비판받으며,
   - 이제 이전보다 컴퓨트에서 더 상업적으로 공격적인 회사로 보인다.

### 결론

Anthropic의 뉴스는 화려한 새 모델보다 구조적 현실에 관한 것이었다. **Claude 수요가 가용 컴퓨트를 앞질렀고, Anthropic은 주요 외부 인프라 계약을 체결해 핵심 사용자 한도를 즉시 완화했다** [@claudeai](https://x.com/claudeai/status/2052060691893227611), [@claudeai](https://x.com/claudeai/status/2052060693269008586). 가장 중요한 기술적/경제적 신호는 **capacity, rate limits, agent-product ergonomics가 이제 leaderboard delta만큼 전략적으로 중요하다**는 것이다. 주요 열린 질문은 Anthropic이 이 용량을 지속적인 제품 momentum으로 전환할 수 있는지, managed-agent 기능이 정말 차별화되는지, 그리고 OpenAI, Google, xAI, open-model 생태계와의 경쟁이 심화되는 가운데 safety/governance posture가 위상을 돕는지 방해하는지다.

### 인프라, 추론, 시스템

- OpenAI와 파트너들은 대형 AI 학습(training) 클러스터를 위한 개방형 네트워킹 프로토콜 **MRC (Multipath Reliable Connection)**를 공개했다. 이는 이미 OpenAI의 가장 큰 슈퍼컴퓨터에 배포됐다 [@OpenAI](https://x.com/OpenAI/status/2052025532485902368), [@OpenAI](https://x.com/OpenAI/status/2052025533937103102). 논평은 multipath routing, microsecond failover, 그리고 네트워킹이 주요 프런티어 병목으로 이동하는 점을 강조했다 [@kimmonismus](https://x.com/kimmonismus/status/2052011784023028060), [@gdb](https://x.com/gdb/status/2052059553542328829).
- Perplexity는 embeddings부터 trillion-parameter LLM까지 포괄하는 사내 추론(inference) 엔진 **ROSE**를 만들었고, Hopper와 Blackwell에서 specialized kernel 개발을 가속하기 위해 **CuTeDSL**을 사용한다고 밝혔다 [@perplexity_ai](https://x.com/perplexity_ai/status/2052041903970148647).
- vLLM + Mooncake는 reusable prefixes가 있는 agentic workload에서 강한 시스템 결과를 발표했다. **3.8배 throughput**, **P50 TTFT 46배 감소**, **end-to-end latency 8.6배 감소**, cache-hit가 **1.7%에서 92.2%로 개선**, **60 GB200 GPUs**까지 scale했다 [@vllm_project](https://x.com/vllm_project/status/2052113331927060840).
- Unsloth + NVIDIA는 home-GPU LLM 학습(training)을 **약 25% 빠르게** 만든다고 주장하는 세 가지 최적화를 발표했다. packed-sequence metadata caching, double-buffered checkpoint reloads, faster MoE routing이다 [@UnslothAI](https://x.com/UnslothAI/status/2052020656527532276).
- **RL 내부 lossless speculative decoding**에 관한 NVIDIA 연구는 policy distribution을 바꾸지 않고 **235B scale에서 end-to-end RL 최대 약 2.5배**, **8B에서 rollout throughput 약 1.8배**를 제공한다고 소개됐다 [@TheTuringPost](https://x.com/TheTuringPost/status/2052180472206381268).
- Baseten은 closed-weight lab을 위한 managed infra/API/auth/rate-limit/billing인 **Frontier Gateway**를 출시했다. Poolside는 kickoff에서 production까지 **7주**가 걸렸고 Laguna XS.2의 **P50 TTFT 146ms**, Laguna M.1의 **605ms**를 보고했다 [@tuhinone](https://x.com/tuhinone/status/2052082677432390130), [@poolsideai](https://x.com/poolsideai/status/2052075055132057707).

### 벤치마크, 평가, 에이전트 harness

- **ProgramBench**는 언어 모델이 프로그램을 처음부터 다시 만들 수 있는지 묻는 벤치마크로, repair-style SWE 작업을 넘어선다 [@ComputerPapers](https://x.com/ComputerPapers/status/2051895799043215415). Ofir Press는 benchmark가 우리가 원하는 미래를 명시하는 “treasure maps”라고 주장했다 [@OfirPress](https://x.com/OfirPress/status/2052106927908200957).
- **Terminal-Bench 2.1**은 TB2.0의 **89개 중 28개 task**를 patch했다. 순위는 유지됐지만 절대 점수는 최대 **12점** 움직였고, 이는 agent benchmark maintenance가 실제로 중요하다는 유용한 reminder다 [@terminalbench](https://x.com/terminalbench/status/2052119174500220964), [@ekellbuch](https://x.com/ekellbuch/status/2052165464655298866).
- **OBLIQ-Bench**는 hard first-stage retrieval에 초점을 맞춘 주요 IR benchmark release로 등장했다. 현재 retriever들이 대형 corpus에서 미묘하게 관련된 문서를 찾아내지 못하는 문제를 다룬다 [@dianetc_](https://x.com/dianetc_/status/2052053806121140254). IR 연구자들의 강한 지지도 있었다 [@lateinteraction](https://x.com/lateinteraction/status/2052055143038713875), [@nlp_mit](https://x.com/nlp_mit/status/2052069072607547892), [@LightOnIO](https://x.com/LightOnIO/status/2052095548098822477).
- Harvey는 **24개 practice area에 걸친 1,200개 task**를 포함한 open-source long-horizon legal agent benchmark **LAB**을 출시했다. LangChain, Baseten, Artificial Analysis 등이 지지/논평했다 [@saranormous](https://x.com/saranormous/status/2052061665596948894), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2052145762650431840).
- 여러 트윗에서 주요 주제는 **harness engineering이 first-class variable**이라는 점이었다. 같은 base model이라도 agent benchmark에서 종종 **10–20점** 차이를 만들 수 있다 [@masondrxy](https://x.com/masondrxy/status/2052054177749029164), [@LangChain](https://x.com/LangChain/status/2052054711440662864), [@Vtrivedy10](https://x.com/Vtrivedy10/status/2052100726608781363).

### 모델 출시와 모델 성능

- Zyphra는 **<1B active parameters**를 가진 reasoning MoE **ZAYA1-8B**를 출시했다. **Apache 2.0** open-weight이며, test-time compute를 통해 훨씬 큰 시스템에 근접하는 강한 수학/추론(reasoning) 효율을 주장했다 [@ZyphraAI](https://x.com/ZyphraAI/status/2052103618145501459), [@ZyphraAI](https://x.com/ZyphraAI/status/2052103646712828119). 논평은 아키텍처/post-training stack과 AMD partnership을 칭찬했다 [@teortaxesTex](https://x.com/teortaxesTex/status/2052106600882528326), [@eliebakouch](https://x.com/eliebakouch/status/2052126118891729148).
- Google의 **Gemma 4**는 Code Arena의 open-model Pareto frontier를 이동시켰다. open model 중 **Gemma-4-31B #13**, **Gemma-4-26B-A4B #17**이다 [@arena](https://x.com/arena/status/2052061349312921686), [@_philschmid](https://x.com/_philschmid/status/2052104144706588699).
- Google의 **Gemma-4용 DFlash draft model**은 그들이 학습한 draft model 중 최고 수준으로, 특히 coding과 math에서 강하다고 설명됐다 [@jianchen1799](https://x.com/jianchen1799/status/2051902953376923946).
- Qwopus3.6-35B-A3B-v1은 consumer hardware에서 강한 one-shot frontend/web generation을 목표로 하며 **단일 RTX 5090에서 162 tok/s**를 주장했다 [@KyleHessling1](https://x.com/KyleHessling1/status/2052064943999267212).
- DeepSeek 관련 논평은 엇갈렸다. fundraising talks가 중국 주요 state-backed semiconductor fund 주도로 **$45B valuation**을 목표로 한다는 보도가 있었고 [@jukan05](https://x.com/jukan05/status/2051904572038455634), evaluator들은 V4-Pro의 WeirdML 성능이 GLM/Kimi/open competitor 대비 약하다는 점을 두고 논쟁했다 [@htihle](https://x.com/htihle/status/2052042076196335658), [@teortaxesTex](https://x.com/teortaxesTex/status/2052043753892761882).

### 에이전트, 도구, 개발자 워크플로

- Cursor는 context issue를 디버그하기 위해 rules, skills, MCPs, subagents 전반의 **context usage breakdowns**를 추가했다 [@cursor_ai](https://x.com/cursor_ai/status/2052059748544249918). 또한 이전 Composer 모델로 미래 Composer generation을 bootstrap하는 방식을 설명했다 [@cursor_ai](https://x.com/cursor_ai/status/2052116064474161556).
- Cognition은 Windsurf 2.0에서 **Devin Review**와 **Quick Review / SWE-Check**를 출시했다. 이는 AI-generated code 검토라는 새로운 병목을 명시적으로 겨냥한다 [@cognition](https://x.com/cognition/status/2052100630626607189), [@ypatil125](https://x.com/ypatil125/status/2052122827961278833).
- OpenAI는 **Codex subagents**를 홍보하며, 이를 specialized agents 사이에 작업을 나누고 결과를 하나의 답변으로 병합하는 방법으로 설명했다 [@reach_vb](https://x.com/reach_vb/status/2052090279344120278).
- Nous/Hermes는 매우 pluggable한 local agent stack을 계속 밀고 있다. plugin expansion, community docs, Windows/WSL2 setup guidance, use-case aggregation이 포함됐다 [@Teknium](https://x.com/Teknium/status/2052046335583625629), [@witcheer](https://x.com/witcheer/status/2052033039379673374), [@NousResearch](https://x.com/NousResearch/status/2052140057222369541).
- Perplexity는 licensed data, live market data, citations를 갖춘 **Finance Search**를 Agent API에 추가했다. **FinSearchComp T1**에서 cohort best accuracy와 lowest cost per correct answer를 주장했다 [@perplexity_ai](https://x.com/perplexity_ai/status/2052028012313649194), [@AravSrinivas](https://x.com/AravSrinivas/status/2052033959555735752).
- Google의 Gemini API는 PDF와 이미지를 단일 retrieval pipeline에서 처리하기 위해 `gemini-embedding-2`를 사용하는 **multimodal retrieval**을 File Search에 추가했다 [@_philschmid](https://x.com/_philschmid/status/2052060912425546050).

### 로보틱스, 멀티모달리티, 연구 메모

- Genesis AI는 **GENE-26.5**를 소개했다. robotics-native foundation model, human-like hand, data glove, simulator를 갖춘 full-stack robotics program이라고 설명했으며, 모델은 **language, vision, proprioception, tactile, action** 전반에서 학습된다 [@gs_ai_](https://x.com/gs_ai_/status/2052050956272230577), [@theo_gervet](https://x.com/theo_gervet/status/2052057035681018359).
- Meta FAIR는 NeuroAI를 위한 MIT-licensed unified benchmark framework **NeuralBench**를 공개했다. **36 EEG tasks**와 **94 datasets**를 포함하며, MEG/fMRI 지원이 예정돼 있다 [@hubertjbanville](https://x.com/hubertjbanville/status/2052029372282888234), [@JeanRemiKing](https://x.com/JeanRemiKing/status/2052034314120896582).
- Sander Dieleman은 더 빠른 sampling과 관련 trick을 위해 diffusion model의 integral을 학습하는 **flow maps**에 관한 긴 기술 글을 게시했다 [@sedielem](https://x.com/sedielem/status/2051957402556104799).
- François Fleuret는 더 강한 시스템을 위한 추측적 recipe를 스케치했다. **latent diffusion-like reasoning + real recurrent state + world-model pre-pretraining**이다 [@francoisfleuret](https://x.com/francoisfleuret/status/2051928896027693479). diffusion-style reasoning이 올바른 방식으로 extrapolate하는지에 관한 유용한 논의도 이어졌다 [@willdepue](https://x.com/willdepue/status/2052033422915477580), [@jeremyphoward](https://x.com/jeremyphoward/status/2052149483740545400).
- HeadVis는 attention heads 연구를 위한 새로운 interpretability tool로 소개됐다 [@kamath_harish](https://x.com/kamath_harish/status/2052046203030827088).
- **agent-readable interpretability**에 관한 Microsoft Research 연구는 “Agentic-imodels”를 제안했다. 여기서 coding agent는 다른 LLM이 해석할 수 있는 모델을 진화시키며, **65 tabular datasets**에서의 개선과 downstream BLADE가 **8%에서 73%**로 향상됐다고 보고했다 [@dair_ai](https://x.com/dair_ai/status/2052125514266190286).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Gemma 4 MTP released](https://www.reddit.com/r/LocalLLaMA/comments/1t4jq6h/gemma_4_mtp_released/)** (Activity: 1575): **Google이 Gemma 4용 Multi-Token Prediction (MTP) draft checkpoint를 출시했다. 여기에는 [`31B-it-assistant`](https://huggingface.co/google/gemma-4-31B-it-assistant), [`26B-A4B-it-assistant`](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant), [`E4B-it-assistant`](https://huggingface.co/google/gemma-4-E4B-it-assistant), [`E2B-it-assistant`](https://huggingface.co/google/gemma-4-E2B-it-assistant)가 포함되며, Google의 [announcement](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/)에서 설명됐다. 모델 카드에 따르면 MTP는 base model에 더 작은 draft model을 붙여 **speculative decoding**을 수행한다. draft가 여러 토큰을 앞서 예측하고 target model이 이를 병렬로 검증하는 방식이며, *“the exact same quality as standard generation.”*를 유지하면서 **최대 `2x` decoding speedup**을 주장한다. 한 댓글 작성자는 가장 작은 `E2B` variant가 **`78M` draft model**을 사용한다고 언급했고, 다른 사용자는 Gemma 4의 MTP에 관한 기술적 시각 설명을 [here](https://newsletter.maartengrootendorst.com/i/193064129/multi-token-prediction-mtp-with-gemma-4) 공유했다. 한 댓글은 Gemma 4의 **multi-token prediction (MTP)** 업데이트된 시각 설명과 implementation-oriented snippet을 링크했다: [Maarten Grootendorst’s guide](https://newsletter.maartengrootendorst.com/i/193064129/multi-token-prediction-mtp-with-gemma-4). 이는 Gemma 4의 MTP setup이 forward pass당 여러 미래 토큰을 예측하는 방식과 speculative/draft-style decoding과의 상호작용을 이해하는 데 관련 있다. 또 하나의 기술적 세부 사항은 **E2B 모델이 `78M`-parameter draft model**을 포함한다는 점이다. 이는 speculative decoding 같은 더 빠른 generation workflow를 위한 경량 auxiliary model을 뜻한다. 작은 draft size는 final token acceptance 책임을 verifier/main model에 남겨두면서 decode latency를 줄일 수 있어 주목된다.

- **[2.5x faster inference with Qwen 3.6 27B using MTP - Finally a viable option for local agentic coding - 262k context on 48GB - Fixed chat template - Drop-in OpenAI and Anthropic API endpoints](https://www.reddit.com/r/LocalLLaMA/comments/1t57xuu/25x_faster_inference_with_qwen_36_27b_using_mtp/)** (Activity: 1445): **llama.cpp PR ([`pull/22673`](https://github.com/ggml-org/llama.cpp/pull/22673))이 모델 내장 multi-token prediction heads를 사용한 speculative decoding용 **Qwen 3.6 27B MTP** 지원을 추가한다. 작성자는 M2 Max 96GB에서 **약 `2.5×` faster generation**을 보고했고 **`28 tok/s`**에 도달했으며, MTP tensor가 포함된 변환 GGUF를 [froggeric/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/froggeric/Qwen3.6-27B-MTP-GGUF)에 공개했다. 설정은 `--spec-type mtp --spec-draft-n-max 5`, `q4_0`/`q8_0` KV-cache quantization, 최대 **`262144` tokens**의 long context를 조합하며, **48GB Mac/VRAM급 시스템**에서 실행 가능하다고 주장한다. 작성자는 vLLM 전용이 아닌 수정된 Jinja chat template도 [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)에 업로드했다. 주의점: 현재 MTP 지원은 PR branch에서 llama.cpp를 빌드해야 하며, `q4_0` KV에는 약간의 quality loss가 있고, **vision은 현재 MTP와 함께 사용하면 llama.cpp가 crash**한다. 한 댓글 작성자는 RTX Pro 6000 MaxQ에서 Qwen 3.6 2.7B Q8을 benchmark해 MTP 사용 시 **`36 tok/s` → `78 tok/s`**를 기록했지만 prompt processing은 약 `20%` 느려졌다고 했다. 댓글들은 전반적으로 열광적이었고, 최근 open-model 및 inference-runtime 진전이 유난히 빠르며 consumer/local hardware에 특히 중요하다고 봤다. 한 기술 질문은 “turbo3/turbo4”가 merge됐는지, 아니면 MTP PR의 일부인지 물었다. 한 사용자는 **RTX Pro 6000 MaxQ**에서 구체적인 MTP speedup을 보고했다. `qwen 3.6 2.7B Q8`이 MTP 활성화 시 `36 tokens/s`에서 `78 tokens/s`로 증가했으며, prompt processing은 약 `20%` 감소했다. generation quality는 변하지 않은 것처럼 보였고, decode-heavy workload에서는 tradeoff가 매우 유리하다고 했다. 한 댓글 작성자는 `turbo3`/`turbo4` 변경이 이미 merge됐는지 또는 관찰된 speedup이 구체적으로 **MTP PR**의 일부인지 물었다. 이는 어떤 inference optimization path가 gain의 원인인지에 대한 불확실성을 보여준다. **Qwen 3.6 Dflash** 모델 및 low-bit `iq3_XS` quantization과의 기술적 비교 요청도 있었다. 댓글 작성자는 보통 `16GB` VRAM에서 `256k` context를 fit할 수 있다고 하며, `mmproj`를 사용하지 않을 때 공개된 quant도 `256k` context를 지원할 수 있는지 물었다.

- **[Quality comparison between Qwen 3.6 27B quantizations (BF16, Q8_0, Q6_K, Q5_K_XL, Q4_K_XL, IQ4_XS, IQ3_XXS,...)](https://www.reddit.com/r/LocalLLaMA/comments/1t53dhp/quality_comparison_between_qwen_36_27b/)** (Activity: 771): **한 Reddit 사용자가 PGN state tracking, board orientation, piece placement, last-move highlighting이 필요한 synthetic chess-to-SVG task에서 **Qwen 3.6 27B** quantization들을 benchmark했다. `llama.cpp`와 `temp=0.6`, `top_p=0.95`, `top_k=20`, `presence_penalty=1.0`, `ctx=65536`을 사용했다. 이 single-run test에서 **BF16/Q8_0**은 사실상 정확했고, **Q6_K**는 pawn-placement degradation을 보였으며, **Q5_K_XL/Q4_K_XL/IQ4_XS**는 대체로 사용 가능했다. 반면 **Q3/Q2** variant는 layout/orientation 실패가 늘었다. 작성자는 `16 GB` VRAM RTX 5060 Ti setup에서 실용적 하한으로 **IQ4_XS**를 선택했다. vanilla `llama.cpp`에서는 `~100 pp tps / 8 tg tps`를 보고했고, **TheTom’s TurboQuant fork**에서 `-ngl 99`, `-ctk turbo4`, `-ctv turbo2`, `<75k` context를 사용하면 `~760 pp tps / 22 tg tps`로 개선됐다. 전체 출력은 [qwen3-6-27b-benchmark.vercel.app](https://qwen3-6-27b-benchmark.vercel.app/)에 게시됐다. 상위 기술 피드백은 benchmark를 칭찬하면서도 stochastic decoding 때문에 개별 quant 결과가 outlier가 될 수 있어 *“one run is not enough”*라고 강조했다. 댓글 작성자들은 그래도 관찰된 degradation trend가 대체로 예상과 맞는다고 봤다. 여러 댓글은 방법론적 우려를 제기했다. quantization comparison이 test당 single run에 의존하는 것처럼 보여 **statistical noise**와 misleading quality difference가 생길 수 있다는 점이다. 특히 전체 degradation trend가 보이더라도 LLM eval은 run-to-run variation이 있을 수 있으므로 각 quant를 여러 번 실행해 outlier를 감지하자고 제안했다. 한 기술적 takeaway는 **`4-bit` quantization이 여전히 practical sweet spot**일 수 있다는 점이었다. `3-bit`는 흔히 알려진 것보다 더 쓸 만하다고 표현됐고, 약 `5-bit`를 넘어서면 더 큰/좋은 base model로 이동하는 것보다 수익이 줄어들 수 있다고 했다. 한 댓글 작성자는 훨씬 큰 `122B UD-Q3_K_XL` 모델과 더 작은 `35B IQ4_NL` 모델 같은 사례를 대비하며, model scale이 higher-bit quantization quality보다 더 중요할 수 있다고 주장했다.

### Agentic Coding 및 비용 벤치마크

- **[DeepSeek V4 Pro matches GPT-5.2 on FoodTruck Bench, our agentic benchmark — 10 weeks later, ~17× cheaper](https://www.reddit.com/r/LocalLLaMA/comments/1t47qbw/deepseek_v4_pro_matches_gpt52_on_foodtruck_bench/)** (Activity: 478): **이미지는 FoodTruck Bench의 **technical leaderboard screenshot**으로, **DeepSeek V4 Pro**가 rank `#4`로 강조돼 있다. 30일 agentic food-truck simulation에서 시작 자본 `$2,000` 기준 최종 net worth `$27,142`, `+1257% ROI`, `51%` margin, `$52,139` revenue, `$26,492` profit을 기록했다 ([image](https://i.redd.it/fx89f3w5n9zg1.png)). 이는 DeepSeek V4 Pro가 같은 workload에서 reportedly 약 `17×` 저렴하면서도 **GPT-5.2** median outcome과 약 `3%` 이내라는 post의 주장을 뒷받침한다. 댓글 작성자들은 인상적이라고 보면서도 해석에는 회의적이었다. 한 사용자는 **Claude Opus 4.6**이 profit에서 훨씬 앞서는 것처럼 보인다고 했고, 다른 사용자는 **Gemma 4 31B**가 **Sonnet 4.6**을 이길 수 있다면 benchmark 신뢰성에 의문이 든다고 했다. “GPT 5.4/5.5” 같은 더 새로운 GPT variant가 빠진 점에 대한 궁금증도 있었다. 여러 댓글은 headline의 DeepSeek 결과보다 benchmark ranking implication에 집중했다. **Claude Opus 4.6**은 **FoodTruck Bench**에서 다음 모델 cluster보다 약 `1.7×` 더 높은 profit을 달성하는 것으로 보이며, DeepSeek V4 Pro가 훨씬 낮은 비용으로 **GPT-5.2**와 match하더라도 이 agentic profit-optimization benchmark에서는 상당한 lead가 있음을 시사한다. 여러 사용자는 **Gemma 31B**를 덜 논의된 outlier로 지목했다. FoodTruck Bench top 5에 들고 reportedly **Sonnet 4.6**을 이기며 **EQBench**에서도 잘 작동한다는 것이다. 댓글 작성자들은 그런 ranking이 유지된다면 Gemma가 Xiaomi/DeepSeek 결과에 비해 왜 덜 주목받는지 의문을 제기했다. 비교군을 최신 또는 누락 모델로 확장해 달라는 요청도 있었다. 특히 **GPT-5.4/5.5**, 최신 **Qwen3.6** 모델, 그리고 한 댓글 작성자가 Gemma보다 나을 것으로 예상한 `27B` 모델이 언급됐다. 내포된 우려는 benchmark table이 현재 frontier 및 mid-size model 경쟁력을 평가하기에는 불완전하거나 오래됐을 수 있다는 점이다.

- **[Claude Code @ Opus 4.7 vs OpenCode @ qwen3.6:27b. Both shipped a playable cozy roguelite.](https://www.reddit.com/r/LocalLLM/comments/1t49wld/claude_code_opus_47_vs_opencode_qwen3627b_both/)** (Activity: 406): **one-shot benchmark가 **Opus 4.7의 Claude Code**와 **local Qwen3.6:27B의 OpenCode**를 비교했다. 동일한 VS Code devcontainer와 vanilla Canvas/FastAPI roguelite를 위한 엄격한 greenfield prompt를 사용했으며, 둘 다 movement, sword/shield combat, procedural world, drops, swap UI, restart loop를 구현한 first-run playable game을 만들었다. Opus는 약 `20 min`과 `97k` tokens가 걸렸고, Qwen은 약 `15 min`과 `64k` tokens가 걸려 약 3분의 1 적은 token을 사용했다. 다만 작성자는 이 주장을 hard reasoning이나 existing-codebase maintenance가 아니라 tightly specified greenfield work로 한정했다. 링크된 Reddit-hosted video [`v.redd.it/h4awffniaazg1`](https://v.redd.it/h4awffniaazg1)는 Reddit `403 Forbidden` 접근 제한 때문에 제공된 crawl에서 접근할 수 없었다. 댓글은 reproducibility와 local-model capability에 초점을 맞췄다. 한 사용자는 full prompt를 요청했고, 다른 사용자들은 **Qwen3.6 27B**가 coding/tricky questions에서 놀랄 만큼 강하며 일부 MoE alternative보다 hallucination이 적고 많은 coding task에서 작년 **Sonnet 4.5**와 대략 비슷하다고 평가했다. 또 다른 댓글 작성자는 `35B` variant가 “properly harnessed”될 때 large-codebase edit task에서 잘 작동한다고 했다. 사용자들은 비교에서 누락된 핵심 reproducibility detail을 요청했다. exact prompt, local Qwen run에 사용한 hardware, `qwen3.6:27b`에 quantization이 적용됐는지 여부다. local model throughput과 coding quality는 quantization level 및 memory bandwidth/GPU 또는 Apple Silicon 구성에 따라 크게 달라질 수 있으므로 중요하다. 한 댓글 작성자는 `Qwen3.6 27B`가 **M1 Pro**에서 “very slow”로 실행되지만 coding과 tricky questions는 잘 처리한다고 보고했다. 그는 이것이 `35B A3B`와 `Gemma MoE`보다 hallucination이 적고, 전년도 `Sonnet 4.5`와 대략 비슷해 “90% of coding tasks”에 쓸 수 있다고 추정했다. 또 다른 사용자는 `35B` 모델이 “properly harnessed”되고 large codebase context를 inspection/edit에 제공받으면 강하게 작동한다고 주장했다. 이는 coding-agent workflow에서 orchestration/context management가 raw model choice만큼 중요할 수 있음을 시사한다.

- **[DeepSeek V4 being 17x cheaper got me to actually measure what I send to cloud vs what I could run locally. the results are stupid.](https://www.reddit.com/r/LocalLLaMA/comments/1t4s6g2/deepseek_v4_being_17x_cheaper_got_me_to_actually/)** (Activity: 904): **한 개발자는 `10`일간의 coding-agent usage를 instrument하고 `150` task sample을 local **Qwen 3.6 27B** model on **RTX 3090**와 cloud model에 대해 다시 실행했다. 그 결과 file-read/project-scan/explanation task에서는 local parity가 `97%`였고 이 bucket은 workload의 `35%`였다. test/boilerplate/single-file-edit task에서는 local parity가 `88%`였고 workload의 `30%`였다. local quality는 multi-file debugging에서 `61%`로 떨어졌고 workload의 `20%`, `5+` files에 걸친 complex architecture/refactors에서는 `29%`였고 workload의 `15%`였다. 따라서 후자의 bucket만 cloud로 routing하면 API spend가 `$85/month`에서 약 `$22/month`로 줄었다고 보고했다. 댓글 작성자들은 대체로 hybrid/local-first workflow에 동의했다. 일부는 거의 모든 coding에 local model을 사용하고, planning, oversight, 특히 복잡한 task 또는 health/legal 같은 non-code domain에만 Gemini/ChatGPT/Claude/Qwen/GLM free tier나 cloud model로 escalate한다고 보고했다. 한 댓글 작성자는 task-type router/harness의 구현 세부 사항을 요청했는데, 이는 핵심적으로 빠진 technical artifact가 classification과 dispatch 자동화 계층임을 시사한다. 여러 댓글은 **hybrid local/cloud workflow**를 설명했다. local model은 대부분의 code-related task를 처리하고, **ChatGPT, Claude, Gemini, Qwen, GLM** 같은 cloud/free web tier 또는 Gemini는 planning, oversight, 드문 complex problem에만 남겨둔다. 한 사용자는 **zero subscriptions**로 운영하며, cloud는 local model reliability가 덜 받아들여질 수 있는 health/legal query 같은 non-code domain에 주로 사용한다고 보고했다. 핵심 기술적 반론은 local model이 **large context에서 더 느릴 수 있고**, 추가 verification/debugging time이라는 hidden cost를 만든다는 점이다. 한 댓글 작성자는 local inference가 더 저렴하더라도 local model이 underperform하는 `~10%` 사례가 productivity cost를 지배할 수 있다고 주장했고, hosted **Qwen 3.6 27B / Qwen 3.6 Pro**가 더 빠르면서도 여전히 “a couple dollars a month” 정도만 들 수 있다고 제안했다.

### Less Technical Subreddits

- **[Doubled Rate Limits for Claude Code](https://www.reddit.com/r/ClaudeCode/comments/1t5hs98/doubled_rate_limits_for_claude_code/)** (Activity: 3224): **Anthropic**은 새로운 **SpaceX** 컴퓨트 파트너십과 최근의 다른 컴퓨트 계약 덕분에 Claude 용량을 높일 수 있게 됐다고 밝혔다. **Claude Code** Pro/Max plan은 더 이상 peak-hours limit reductions를 받지 않으며, **Claude API**의 **Opus** model rate limit이 즉시 “substantially” 증가한다 ([Anthropic announcement](https://www.anthropic.com/news/higher-limits-spacex)). 게시물은 이를 “doubled rate limits”로 표현하지만, 인용된 발표 자체는 정확한 numeric quota를 제시하기보다 Claude Code의 peak-hour throttling 제거와 Opus API 한도 증가를 명시한다. 상위 댓글은 대부분 비기술적 놀라움/회의론과 Elon Musk의 Sam Altman/OpenAI 경쟁에 관한 추측이었다.

- **[I've had it with Claude. It has become complete garbage.](https://www.reddit.com/r/ClaudeCode/comments/1t4w5an/ive_had_it_with_claude_it_has_become_complete/)** (Activity: 1716): **한 senior SWE는 “Opus 4.7” 이후 “Opus 4.6” 대비 **Anthropic [Claude](https://www.anthropic.com/claude)**에 큰 regression이 있다고 보고했다. 더 느린 CLI interaction(`30s` for commits, `45min` implementations), resize 시 terminal/Tmux rendering 악화, 유용했던 `Ctrl+O` trace visibility 상실, 더 잦은 usage-limit hits, project memory/context engineering에도 불구하고 나빠진 instruction adherence가 포함된다. 구체적 기술 실패로는 short test timeout(`10–15s` → `30s/60s/5min`) 무시, “never auto commit”에도 auto-committing, `/caveman`에도 verbosity drift, Rust refactor에서 `handle_input(&[u8])`를 `Bytes`로 바꾸는 대신 `handle_input_bytes(Bytes)`를 추가한 것, `io_uring` cancel-safety plan에서 벗어나 racy one-shot/multi-shot recv shortcut으로 되돌아간 뒤 *“Yes deviating. Confess.”*라고 인정한 것이 언급됐다. 상위 댓글은 visible reasoning을 잃어 bad loop를 interrupt하기 어려워졌다는 동의, Max를 cancel하고 stability 때문에 open-source model로 이동한다는 사용자, 그리고 disciplined `Claude.md`/`memory.md`, scoped plans, milestones, excessive context loading 회피를 사용하면 Claude가 여전히 생산적이라고 말하는 숙련 개발자의 반론으로 나뉘었다. 한 long-time software developer는 constrained project workflow를 사용하면 coding performance가 안정적이라고 보고했다. 잘 관리된 `Claude.md`와 `memory.md`, 적은 수의 skills, upfront planning, milestone-based implementation, 반복적인 build/test/release cycle이다. 그는 많은 실패가 poor context hygiene에서 올 수 있다고 주장했다. “29 different markdown files”를 과도한 pseudo-OS처럼 로드하거나 모든 command에 전체 context window를 넣는 방식이다. 한 사용자는 chain-of-thought-style progress를 숨긴 데서 온 UX/regression issue를 강조했다. visible “thinking”이 없으면 Claude가 내부적으로 loop 중인지 server-side latency를 기다리는지 알 수 없다는 것이다. 이 때문에 비생산적 reasoning을 일찍 interrupt하고 delay가 model behavior인지 infrastructure-related인지 진단하기 어려워진다. 여러 사용자는 time-dependent quality variance를 보고했다. 한 사용자는 특히 `8am–2pm Eastern (US)` peak usage 동안 Claude behavior가 더 나빠진다고 주장했다. 더 많은 corner-cutting, sloppier outputs, “brain dead” behavior가 나타나며 off-peak usage는 이전 quality에 더 가깝다는 것이다. 내포된 technical concern은 capacity pressure, routing, throttling, 또는 peak demand 중 model/serving changes로 인한 load-dependent degradation이다.

- **[Turned a desk lamp into a Claude Code status indicator](https://www.reddit.com/r/ClaudeAI/comments/1t4gfc7/turned_a_desk_lamp_into_a_claude_code_status/)** (Activity: 1817): **한 Reddit 사용자는 open-source [`bobek-balinek/claude-lamp`](https://github.com/bobek-balinek/claude-lamp) 프로젝트를 변형해 BLE desk lamp를 **Claude Code status indicator**로 만들었다. Claude Code hooks가 Python script를 호출하고, 이 script가 Bluetooth Low Energy command를 보내 animation/color를 설정한다. 램프는 Claude가 작업 중일 때 **blue spinning animation**, 사용자 입력이 필요할 때 **pink**, idle일 때 **warm white**를 표시한다. effect는 source에서 configurable하며, 작성자는 설정을 **Philips Hue** bulb로 확장하는 것을 고려 중이다. 링크된 Reddit video는 `403 Forbidden` response 때문에 접근할 수 없었다. 댓글은 주로 lamp model을 묻거나 여러 동시 Claude Code session으로 이 아이디어를 확장하는 방안을 논의했다. 예를 들어 여러 조명을 쓰거나 더 나은 multi-session status indicator를 설계하는 것이다. 한 댓글 작성자는 제목이 [`status.claude.com`](https://status.claude.com/)을 통한 Anthropic service health 표시로도 해석될 수 있다고 했다. 한 댓글은 local Claude Code state를 넘어 Anthropic의 public status page인 [status.claude.com](https://status.claude.com/)을 data source로 사용해 **Claude service health**를 반영하도록 lamp를 확장하자고 제안했다. 이렇게 하면 indicator가 local task/session state만이 아니라 operational availability를 나타내게 된다. 또 다른 기술적 개선 제안은 **rolling five-hour window 내 남은 Claude Code usage**를 시각화하는 것이었다. 예를 들어 quota left에 비례해 lamp나 “donut”을 켜는 방식이다. 별도 댓글은 multi-session case를 제기했으며, 여러 Claude Code session이 동시에 실행될 경우 indicator가 aggregation 또는 per-session state handling이 필요함을 시사했다.

- **[Warning: Anthropic's "Gift Max" exploit drained €800+, ruined my credit, and got me banned.](https://www.reddit.com/r/ChatGPT/comments/1t4atbx/warning_anthropics_gift_max_exploit_drained_800/)** (Activity: 3451): **OP는 active `2FA`에도 불구하고 Anthropic **“Gift Max”**에서 **>€800** unauthorized charge가 발생했다고 보고했다. `3-D Secure` email을 받았지만 승인하지 않았고, gift code가 생성된 뒤 즉시 third party에 의해 redeemed됐다고 주장했다. 그는 이 사건을 Anthropic [status page](https://status.anthropic.com/)의 *“Elevated billing errors and unauthorized subscription changes”* 항목 및 GitHub issue `#51404`/`#51168`과 연결했다. 이후 경찰 보고서와 증거를 Anthropic에 보낸 뒤 계정이 ban되어 WIP chats/projects 접근이 끊겼다고 했다. 업데이트에서 OP는 은행이 이를 fraud로 처리해 reclamation/refund를 발행했고 Anthropic의 merchant account를 추적할 것이라고 말했다. 또한 data recovery를 위해 [GDPR/DSGVO](https://gdpr.eu/) data request를 고려 중이며, 가능한 [SCHUFA](https://www.schufa.de/) credit impact를 바로잡기 위해 German legal aid도 검토 중이다. 댓글은 대부분 실용적이거나 회의적이었다. 한 사용자는 미국에서는 일반적으로 card chargeback으로 처리될 것이라고 했고, 다른 사용자는 Gemini가 작성한 anti-Anthropic warning이 ChatGPT subreddit에 올라온 점의 아이러니/의심스러움을 지적했다. OP는 은행이 `€800+` Anthropic-related charge를 fraud case로 reversed했고 merchant account를 직접 추적할 것이라고 보고했다. 또한 work-in-progress project data를 복구하기 위해 formal GDPR/DSGVO data request를 제출하고, SCHUFA credit entry가 정리되도록 German legal aid(*Beratungshilfeschein*)를 찾을 계획이라고 했다. 한 댓글 작성자는 서로 다른 merchant가 “1 year free Claude access”를 광고하는 여러 YouTube ad를 봤다고 언급했다. 이는 reported exploit 또는 phishing/payment-abuse pattern과 관련된 coordinated scam campaign일 수 있음을 시사한다.

---

## AI Discord Recap

### 접근 중단

- **Discord 접근 중단**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로는 다시 가져오지 않겠지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
