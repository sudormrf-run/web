---
title: "Cerebras IPO, OpenAI 5.4·5.5 서빙 주장"
summary:
  - "Cerebras IPO가 인프라 논쟁 재점화"
  - "CFO가 OpenAI 5.4·5.5 서빙 주장"
  - "Codex 모바일이 에이전트 사용면 확대"
  - "Claude 한도 초기화로 경쟁 압력 부각"
  - "로컬 LLM은 MTP와 고VRAM 실험 집중"
date: 2026-05-15
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-05-15-not-much.md"
hasHeadline: false
headline: "Cerebras IPO, OpenAI 5.4·5.5 서빙 주장"
tags:
  - Cerebras
  - OpenAI
  - Codex
  - Anthropic
  - LocalLLM
isFeatured: false
---

## 헤드라인: Cerebras IPO, OpenAI 5.4·5.5 서빙 주장

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

### 무슨 일이 있었나

**Cerebras가 IPO 스토리로 다시 타임라인에 등장했고, 투자자와 인접 인프라 업계 인사들은 이 회사를 오래 이어진 역발상 하드웨어 베팅이 마침내 정당화된 사례로 해석했다.** 가장 직접적으로 관련된 트윗은 투자자 Ishan N. Taneja의 글이다. 그는 초기 Cerebras 주장들을 “믿지 않았다”고 했지만, 당시 자신이 의심했던 회의론자가 “완전히 맞았다”고 결론 내리며 Cerebras의 끈기, 실행력, 그리고 “끝내주는 칩을 만들었다”는 점을 높이 평가했다. 또한 이번이 Hanabi의 첫 IPO였다고 언급했다 [@ishanit5](https://x.com/ishanit5/status/2055000270837543052). 두 번째 Cerebras 관련 데이터포인트는 CNBC의 Deirdre Bosa가 Cerebras CFO Bob Komin의 말을 인용한 내용이다. Komin은 “소형 모델 전용”이라는 서사에 반박하며, Cerebras는 모든 크기의 모델을 서비스하고, 서비스할 수 있는 모델 크기에 “한계가 없다”고 말했다. 또한 Cerebras가 현재 **1조 파라미터급 모델**을 서빙하고 있으며, 여기에는 내부 OpenAI 모델, 특히 **“OpenAI 5.4 and 5.5”**가 포함된다고 밝혔다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949). 인접한 맥락의 트윗에서 Apoorv Vyas는 “the Cerebras IPO”를 컴퓨트 희소성, 추론(inference) 수요, 라우팅, 오픈소스에 관한 Stanford 토론과 명시적으로 연결했다. 이는 IPO가 일반적인 자본시장 이벤트가 아니라 추론 인프라 사이클의 일부로 해석되고 있음을 시사한다 [@apoorv03](https://x.com/apoorv03/status/2055479206545646040).

### 사실과 의견

### 트윗에서 직접 언급된 사실

- Cerebras는 **IPO** 맥락에서 논의되고 있다 [@ishanit5](https://x.com/ishanit5/status/2055000270837543052), [@apoorv03](https://x.com/apoorv03/status/2055479206545646040).
- Cerebras CFO **Bob Komin**은 다음과 같이 말했다.
  - Cerebras는 **모든 모델 크기**를 서비스한다.
  - 서비스할 수 있는 모델 크기에 **“한계가 없다”**.
  - Cerebras는 **1조 파라미터급 모델**을 서빙하고 있다.
  - 내부 **OpenAI 모델**, 특히 **OpenAI 5.4 and 5.5**를 서빙하고 있다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).

### 의견 / 해석

- Cerebras가 “올바른 이유로 논란이 되는 일을 했다”, “팀이 엄청나다”, “끝내주는 칩을 만들었다”는 표현은 투자자의 판단이지, 독립적으로 검증된 사실은 아니다 [@ishanit5](https://x.com/ishanit5/status/2055000270837543052).
- 이번 IPO가 Cerebras의 장기 전략을 입증한다는 함의는 투자자 톤과 주변 인프라 담론에서 나온 해석이지, 이 트윗들 안에서 회사가 공식적으로 주장한 내용은 아니다.
- 모델 크기에 “한계가 없다”는 CFO의 주장은 일부는 사실 프레이밍이고 일부는 마케팅 언어다. 엔지니어들은 이를 문자 그대로 무한한 컴퓨트라는 뜻이 아니라, “회사가 자사 서빙 아키텍처가 현재 프런티어 워크로드까지 확장된다고 믿는다”는 의미로 읽어야 한다.

### 논의에서 드러난 기술 세부사항과 수치

트윗 코퍼스는 과거 스펙에는 가볍지만, Cerebras의 기술적 포지셔닝과 관련된 몇 가지 주목할 만한 **운영 주장**을 담고 있다.

- **1조 파라미터 모델 서빙**: Cerebras CFO는 회사가 현재 1조 파라미터 모델을 서빙하고 있다고 말한다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).
- **명시된 고객/워크로드**: Komin은 여기에 **내부 OpenAI 5.4 and 5.5**가 포함된다고 구체적으로 말했다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).
- **전략적 웨지**: 프레이밍은 훈련(training)만이 아니라 명확히 **추론/서빙**이다. Apoorv는 IPO 논의를 “compute scarcity”, “rising inference demand”, “model routing”과 연결했다 [@apoorv03](https://x.com/apoorv03/status/2055479206545646040).

이 트윗들은 Cerebras의 더 넓은 시장 포지셔닝, 즉 웨이퍼 스케일 하드웨어, 극단적인 온칩 메모리 대역폭, 대형 모델을 낮은 지연시간으로 서빙할 때 나타나는 병목을 줄이도록 최적화된 시스템 아키텍처와 맞닿아 있다. 특정 칩 스펙 자체는 이 트윗 세트에 없지만, CFO의 “1조 파라미터” 발언은 기술적으로 의미가 있다. 이는 회사가 중간 크기 오픈 모델용 틈새 가속기가 아니라 프런티어 규모 모델을 위한 진지한 서빙 플랫폼으로 이해되기를 원한다는 뜻이기 때문이다.

### Cerebras의 여정: 왜 이 IPO가 반향을 일으켰나

Cerebras는 수년 동안 AI 하드웨어에서 “야심 있지만 논쟁적인” 범주에 있었다. 투자자의 코멘트는 핵심 서사 곡선을 잘 포착한다. 회사는 많은 이들이 실현 가능성이 낮거나 상업적으로 의심스럽다고 여긴 길을 택했지만, 끈기와 충분한 실행력으로 여러 컴퓨트 사이클을 지나 살아남았다 [@ishanit5](https://x.com/ishanit5/status/2055000270837543052).

그 칭찬의 하위 텍스트는 하드웨어 엔지니어에게 중요하다.

- Cerebras는 오랫동안 **비 NVIDIA 아키텍처 논지**를 대표해 왔다.
- 그 전략은 단지 기존 가속기 경제성에서 경쟁하는 것이 아니라, **다른 물리적·시스템 설계 철학**으로 스케일링 문제를 공격하는 것이었다.
- 이 때문에 본질적으로 논쟁적이었다. 시장은 매우 구체적인 워크로드에서 승리하지 않는 한 맞춤형 아키텍처를 낮게 평가하는 경우가 많기 때문이다.

IPO 회고성 chatter는 회사의 스토리가 “이 아키텍처가 살아남을 수 있는가?”에서 “이것이 지금 시장이 필요로 하는 바로 그 차별화된 서빙 스택인가?”로 이동했음을 시사한다.

그 변화는 AI 인프라 시장도 함께 바뀌고 있기 때문에 일어나고 있다.

- 순수 훈련 명성에서 **추론 경제성**으로.
- 벤치마크 스냅샷에서 **거대 모델의 프로덕션 서빙**으로.
- GPU 풍부성 가정에서 **컴퓨트 희소성과 라우팅 규율**로 [@apoorv03](https://x.com/apoorv03/status/2055479206545646040).

이 환경에서는 **1조 파라미터급 내부 프런티어 모델**을 서빙한다고 신뢰성 있게 말할 수 있는 회사가 몇 년 전과는 완전히 다른 평가를 받는다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).

### 다양한 관점

### 지지 / 낙관

- 가장 낙관적인 해석은 투자자 Ishan N. Taneja에게서 나왔다. 회의가 감탄으로 바뀌었고, **끈기**, **실행력**, **성공적인 역발상 칩 베팅**을 강조했다 [@ishanit5](https://x.com/ishanit5/status/2055000270837543052).
- Bob Komin의 인용도 전략적으로 낙관적이다. Cerebras를 주변 플레이어가 아니라 **프런티어 규모 추론** 플랫폼으로 재프레이밍하기 때문이다 [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).
- Apoorv의 코멘트는 Cerebras를 현재의 시스템 질문, 즉 **추론 수요 증가 속 컴퓨트 희소성**의 중심에 놓는다. 차별화된 서빙 아키텍처가 가장 중요해질 수 있는 지점이다 [@apoorv03](https://x.com/apoorv03/status/2055479206545646040).

### 중립 / 분석

- 중립적인 해석은 Cerebras의 IPO가 공개시장 이벤트 자체라기보다, 투자자들이 프런티어 스택에 **GPU 기본값이 아닌 인프라 회사**가 들어갈 공간이 있다고 믿는다는 신호라는 것이다.
- 또 다른 중립적 결론은 이렇다. Cerebras에 진정한 기술적 차별화가 있더라도 중요한 질문은 “칩이 우아한가?”가 아니라 “기존 생태계를 중심으로 점점 더 조직되는 시장에서 활용률, 소프트웨어 호환성, 상업적 채택을 유지할 수 있는가?”다.

### 회의 / 암묵적 반론

제공된 트윗 세트에는 Cerebras IPO를 직접 공격하는 글은 없다. 하지만 전문가 독자가 조심스러울 수밖에 없는 암묵적 이유는 있다.

- “모델 크기에 한계가 없다”는 표준적인 임원 수사다. 실제 한계는 **메모리 계층, 배치/지연시간 트레이드오프, 인터커넥트 동작, 소프트웨어 사용성, 워크로드 믹스**에서 나타난다.
- 내부 OpenAI 워크로드를 서빙한다는 것은 강한 주장이다. 그러나 **트래픽 비중, 지연시간 티어, 토큰당 비용, 활용률, 정확한 배포 역할**에 대한 세부사항이 없으면 이것이 폭넓은 전략적 의존인지 더 좁은 표적 사용인지 알기 어렵다.
- AI 하드웨어의 역사는 기술적으로 인상적인 아키텍처가 소프트웨어, 개발자 채택, 생태계 중력에 밀려 상업적으로 실패한 사례로 가득하다.

### 지금 왜 중요한가

Cerebras IPO 스토리는 트윗 세트의 다른 곳에서도 보이는 몇 가지 냉정한 진실을 중심으로 AI 인프라가 재평가되는 순간에 등장했다.

- **추론이 지배적인 컴퓨트 시장이 되고 있다**. Pearl, Together 등은 추론 경제성과 토큰 비용을 명시적으로 이야기하고 있다 [@prlnet](https://x.com/prlnet/status/2055339314205139226), [@simran_s_arora](https://x.com/simran_s_arora/status/2055348155051569474).
- **거대 모델 서빙은 이제 연구실 과시가 아니라 제품 요구사항**이다. 여러 트윗은 1조 규모 모델, 대형 모델 출시 주기, RL/후훈련(post-training) 기반 빠른 개선을 논의한다 [@scaling01](https://x.com/scaling01/status/2055018330365345896), [@kimmonismus](https://x.com/kimmonismus/status/2055197338092662824).
- **자본 집약도는 면밀히 검토되고 있다**. Kimmonismus는 하이퍼스케일러 capex가 **$600B**를 넘고 AI 인프라 지출과 AI 매출 사이의 큰 격차가 있다고 언급하며, 시장이 인프라 경제성을 주시하고 있다고 경고했다 [@kimmonismus](https://x.com/kimmonismus/status/2055293526125232332).

이 맥락에서 Cerebras는 비표준 아키텍처가 프런티어 추론의 경제성이나 지연시간 프로파일을 생태계 전환 비용을 정당화할 만큼 개선할 수 있다는 지속 가능한 주장을 펼칠 수 있을 때, 그리고 오직 그럴 때만 중요하다.

### 더 넓은 맥락: 공식 주장과 독립 검증

공식적으로 이 트윗 세트에서 가장 강한 주장은 CFO Bob Komin의 말이다. **Cerebras는 이미 1조 파라미터급 OpenAI 내부 모델을 서빙하고 있다** [@dee_bosa](https://x.com/dee_bosa/status/2055351401472020949).

이 트윗 세트에 없는 것은 독립적인 벤치마크식 검증이다.

- 토큰당 비용 비교 없음,
- 지연시간 백분위 데이터 없음,
- 처리량 수치 없음,
- 컨텍스트 길이 세부사항 없음,
- 소프트웨어 호환성 세부사항 없음,
- 활용률 수치 없음.

따라서 올바른 기술적 태도는 다음과 같다.

- OpenAI 서빙 주장을 **중요하고 지켜볼 만큼 신뢰할 만한 주장**으로 취급한다.
- 이를 광범위한 우월성의 완전한 증거로 **과잉 해석하지 않는다**.

결국 IPO 회고는 “Cerebras가 이겼다”라기보다 “Cerebras가 시장이 자사의 논지에 더 유리해질 때까지 충분히 오래 살아남았다”에 가깝다.

---

## AI Twitter Recap

### Codex, GitHub Copilot App, and the New Coding-Agent Surface Area

- OpenAI의 Codex 모바일/앱 롤아웃이 제품 담론을 지배했다. 사용자들은 바에서 웹사이트를 만들고, iPhone에서 Mac을 제어하며, 항상 켜져 있는 Mac mini가 백그라운드에서 세션을 실행하는 동안 노트북을 “위성 장치”처럼 다루는 흐름을 묘사했다 [@flavioAd](https://x.com/flavioAd/status/2055021982601605225), [@nickbaumann_](https://x.com/nickbaumann_/status/2055066537002725393), [@PaulSolt](https://x.com/PaulSolt/status/2055057277334208987), [@rileybrown](https://x.com/rileybrown/status/2055093278161428726).
- **Codex는 빠르게 다중 표면 에이전트 플랫폼이 되고 있다**: 이번 사이클의 트윗들은 코딩 에이전트가 어디서, 어떻게 실행되는지가 의미 있게 넓어지고 있음을 보여준다. 모바일 우선 워크플로는 [Codex Mobile walkthroughs](https://x.com/rileybrown/status/2055093278161428726)에서, iPad/VPS 세션 관리는 [@npew](https://x.com/npew/status/2055131618789265779)에서, Telegram/홈서버 원격 설정은 [@itsclivetime](https://x.com/itsclivetime/status/2055144998270824515)에서, 기기가 잠겨 있는 동안 Mac을 제어하는 “locked use” 힌트는 [@kimmonismus](https://x.com/kimmonismus/status/2055262250701574359)에서 나왔다. OpenAI 개발팀은 [@etnshow](https://x.com/etnshow/status/2055220392030278100)를 통해 채택 수치도 공유했다. **주간 활성 사용자 4M+**, **사용자당 메시지 5배 증가**, **첫 주 앱 다운로드 1M+**다.
- **주변 생태계는 앱 계층에서만 경쟁하기보다 Codex에 빠르게 연결되고 있다**: [Ollama added Codex app support](https://x.com/ollama/status/2055100589428658462)는 로컬/오픈 모델 실행 경로와 클라우드 모델 추천을 더했고, [Zed now supports ChatGPT subscription access in its agent](https://x.com/zeddotdev/status/2055335727483781624)는 Codex와 같은 구독/속도 제한 모델을 유지한다. 서드파티 확장도 등장하고 있으며, 여기에는 [MagicPath as a native canvas inside Codex](https://x.com/skirano/status/2055364115560878480)와 [@secemp9](https://x.com/secemp9/status/2055339137318724047)가 MCP/슬래시 명령 형태로 추출한 휴대용 `/goal` 명령이 포함된다. 커뮤니티 모멘텀은 [London](https://x.com/Andy_AJT/status/2055297191128768576), [Portugal](https://x.com/TimHaldorsson/status/2055206416747507785), [Paris planning](https://x.com/borvibe/status/2055322241340960810)의 밋업 보고에서도 보였다.
- **GitHub도 모델만이 아니라 코딩 하네스에 병렬로 베팅하고 있다**: VS Code/Copilot 팀은 사용자 경험이 기본 모델 하나보다 **코딩 하네스**, 즉 컨텍스트 조립, 도구 사용, 실행 루프, 메모리에 의해 더 크게 형성된다고 강조했다. 이는 [their behind-the-scenes post shared by @code](https://x.com/code/status/2055317356910367189)와 [@pierceboggan](https://x.com/pierceboggan/status/2055322165969604966)에서 드러났다. 이번 주 강조된 제품 기능에는 [@davidfowl](https://x.com/davidfowl/status/2055148986340905020)의 **agent merge**, 그리고 [@code](https://x.com/code/status/2055408023506469337)의 명령에 대한 AI 설명이 붙는 **terminal risk assessment badges**가 포함된다. 더 넓은 흐름은 분명하다. 경쟁의 최전선은 “최고의 모델”에서 **최고의 하네스 + UX + 통합**으로 이동하고 있다.

### Agent Harnesses, Search, Evaluation, and Reliability Engineering

- **코딩 에이전트를 위한 검색은 임베딩이 아니라 프리미티브를 중심으로 재고되고 있다**: 여기서 가장 강한 흐름은 “벡터 DB보다 grep/search” 주장이다. [@omarsar0 highlighted](https://x.com/omarsar0/status/2055317577031975269)는 **올바른 에이전트 하네스에 감싼 grep식 텍스트 검색이 코딩 에이전트 작업에서 임베딩 기반 검색과 같거나 더 나은 성능을 낼 수 있다**는 논문을 소개했고, [@dair_ai echoed the takeaway](https://x.com/dair_ai/status/2055318144592289847)도 같은 결론을 전했다. 관련해 [@lintool joked](https://x.com/lintool/status/2055316434171879757)는 에이전틱 검색을 위한 “두 파라미터 모델”은 **BM25**이고, 어쩌면 0파라미터 버전은 **grep**이라고 농담했다. 이는 Cloudflare 인접 실험과도 맞닿아 있다. [@YoniBraslaver compared SDK vs MCP on monday.com’s GraphQL API](https://x.com/YoniBraslaver/status/2055260079700791544)는 같은 출력에 대해 SDK는 **1 step / 15k tokens**, 실제 MCP 서버는 **4 steps / 158k tokens**, 즉 **8.4배 토큰 비용**이 든다는 결과를 보였다.
- **에이전트 평가와 관측 가능성은 1급 인프라 문제가 되고 있다**: 여러 게시물이 같은 주제로 수렴했다. 에이전트가 더 긴 지평과 풍부한 도구를 갖게 될수록 자율 시스템 평가(evals)는 쉬워지는 것이 아니라 더 어려워진다는 것이다. [@palashshah](https://x.com/palashshah/status/2055410769387303004)는 현대 평가 설계의 어려움을 지적했고, [@cwolferesearch](https://x.com/cwolferesearch/status/2055437703823372728)는 **Terminal-Bench, Tau-Bench, GAIA, WorkArena, OSWorld, MLE-Bench, PaperBench, GDPval** 등을 포괄하는 넓은 벤치마크 지도를 정리했다. 새로운 벤치마크 제안으로는 [FutureSim](https://x.com/ShashwatGoel7/status/2055336064378720412)이 있었다. 이는 실제 세계 사건을 시간 순서대로 재생해 Codex/Claude Code 같은 네이티브 하네스에서 지속 업데이트와 예측을 테스트한다. 이어 [@nikhilchandak29](https://x.com/nikhilchandak29/status/2055357580436783595)는 **예측에서도 테스트타임 컴퓨트가 우아하게 스케일한다**고 주장했다.
- **신뢰성 우려는 환각에서 시스템 수준 실패 모드로 이동하고 있다**: [@random_walker](https://x.com/random_walker/status/2055271764662296580)는 블랙박스 “genie” 인터페이스가 추론 흔적, 도구 사용, 메모리, 중간 상태를 사용자에게 보여주지 않기 때문에 검증 부담을 키운다고 주장했다. [@mitchellh](https://x.com/mitchellh/status/2055380239711457578)는 더 날카로운 인프라 비유를 제시했다. 회사들이 AI 생성 소프트웨어에 대해 **“MTTR is all you need”**식 사고로 흘러가고 있으며, 로컬 지표는 괜찮아 보여도 글로벌 시스템 이해 가능성은 무너지는 회복력 있는 재난 기계를 만들 수 있다는 것이다. 도구 측면에서 LangChain은 반대 방향으로 움직였다. [Interrupt announcements](https://x.com/LangChain/status/2055314236050690086)는 **LangSmith Engine, SmithDB, managed Deep Agents, sandboxes, gateway, context hub**를 다뤘고, [@ankush_gola11](https://x.com/ankush_gola11/status/2055368456342745098)는 에이전트 관측 가능성의 실용적 요구사항으로 trace ingestion의 **서브초 중간값 쓰기 지연시간**을 강조했다.

### Training, Optimization, and Inference Efficiency

- **옵티마이저 연구는 다시 Adam 계열 너머로 넓어지고 있다**: [@zacharynado](https://x.com/zacharynado/status/2055077098327285804)는 시대 분위기를 간결하게 요약했다. Adam 변형들의 묘지를 지나 “sloptimizer” 분야가 **Shampoo**와 **Muon-gen**류 방법으로 이제 막 시작되고 있다는 것이다. 구체적 업데이트도 두 가지 있었다. [SODA](https://x.com/tmpethick/status/2055271381890138560)는 **하이퍼파라미터를 추가하지 않고, weight-decay 튜닝을 제거하며, 기본 옵티마이저를 개선하는** 래퍼다. 특히 **SODA[Muon]이 Muon이 튜닝된 weight-decay sweep을 받았을 때도 Muon을 이긴다**는 주장이 눈에 띈다. 답글과 레퍼런스에서도 Muon/Shampoo에 대한 관심은 계속됐다.
- **빠른/느린 학습과 교육적 감독도 이번 사이클의 주목할 만한 훈련 아이디어였다**: [@agarwl_ described “Learning, Fast and Slow”](https://x.com/agarwl_/status/2055081573083402434)는 **RL을 통한 가중치 내 느린 학습**과 **GEPA로 최적화된 컨텍스트/프롬프트 내 빠른 학습(“fast weights”)**을 결합해 RL 단독보다 데이터 효율성, 적응성, 망각 감소가 낫다고 주장했다. 감독(supervision) 측면에서는 [Pedagogical RL](https://x.com/NoahZiems/status/2055091478024565214)과 [Late Interaction’s explainer](https://x.com/lateinteraction/status/2055278862255185936)가 단순히 정답 출력에서 배우는 것이 아니라 **정확하면서 가르칠 수 있는 rollout 분포**에서 배워야 한다고 주장했다. [@bradenjhancock summarized](https://x.com/bradenjhancock/status/2055079214156853325)는 학생이 따라올 수 없는 도약을 하는 교사 모델에 벌점을 주는 관련 연구를 정리했다.
- **추론 최적화는 시스템과 모델 양쪽에서 여전히 매우 활발하다**: [@ariG23498 recommended a deep dive on continuous batching](https://x.com/ariG23498/status/2055106570971975977)는 동적 배칭 환경에서 GPU 유휴를 피하려면 **CUDA streams, events, synchronization, CPU/GPU decoupling**을 이해해야 한다고 강조했다. Meta 연구자들은 [Self-Pruned KV attention](https://x.com/ManuelFaysse/status/2055214689613664303)을 제안했다. 모델이 지속 캐시에 어떤 key/value를 유지할지 학습해 **KV cache size**를 줄이고 디코딩 속도를 높이는 방식이다. 로컬 추론 측면에서는 [@danielhanchen reported](https://x.com/danielhanchen/status/2055274688025378854)가 새로운 llama.cpp speculative-decoding 파라미터 덕분에 **Qwen 소형 모델 MTP GGUF가 이제 1.8배 더 빠르게** 실행되며, 이틀 전 **1.4배**에서 개선됐다고 전했다.

### Open Models, Serving Stacks, and the Agent Toolchain

- **오픈/로컬 에이전트 스택은 Hermes, Ollama, 휴대용 런타임을 중심으로 조여지고 있다**: [ClawRouter integrating Hermes Agent](https://x.com/ClawRou/status/2055078292567597253), [Teknium’s claims of surpassing OpenClaw in token volume](https://x.com/Teknium/status/2055125356554899865), [Grok support in Hermes Agent via SuperGrok subscriptions](https://x.com/Teknium/status/2055373314399650230)는 모두 상호운용 가능한 에이전트 셸을 중심으로 계속 통합이 일어나고 있음을 가리킨다. NVIDIA는 [run Hermes Agent locally on DGX Spark via Ollama](https://x.com/NVIDIA_AI_PC/status/2055317325444710872)를 위한 실용적인 배포 경로를 공개했다. [@onusoz](https://x.com/onusoz/status/2055120477648261502)는 주요 사용성 격차도 지적했다. 수요가 늘고 있음에도 **일반 사용자를 위한 원클릭 로컬 모델 배포는 아직 사실상 존재하지 않는다**는 것이다.
- **오픈 멀티모달 및 과학 모델을 둘러싼 서빙 인프라도 계속 성숙하고 있다**: [vLLM highlighted Baseten’s production deployment of vLLM-Omni](https://x.com/vllm_project/status/2055136943550427242)는 폐쇄형 API가 지배하던 **multi-stage audio, streaming multimodal, real-time TTS** 워크로드를 위한 배포 사례를 강조했다. 또한 [day-0 support for Intern-S2-Preview](https://x.com/vllm_project/status/2055148034124894395)를 출시했는데, 이는 **오픈소스 과학 멀티모달 파운데이션 모델**로 설명되며 **재료 결정 구조 생성** 초기 능력을 갖췄다. 추가 도구 업데이트에는 Hugging Face의 [agentic kernel development in the kernels project](https://x.com/RisingSayak/status/2055187769266434101) 요청과, **OpenAPI specs를 Cloudflare service bindings**로 바꾸며 Stripe, GitHub, Slack, Twilio, Kubernetes 같은 플랫폼 전반에서 **5,852개 메서드**를 생성한 [Capa](https://x.com/acoyfellow/status/2055235076820971872)가 포함됐다.
- **문서/검색 인프라에서도 구체적 제품 작업이 있었다**: [Weaviate v1.37](https://x.com/weaviate_io/status/2055276211681579242)은 **per-property accent folding**, **per-property stopword presets**, BM25 토큰화를 디버그하기 위한 **/v1/tokenize** 엔드포인트를 추가했다. Cohere는 시각 파싱과 검색 임베딩을 사용해 까다로운 문서에서 검색하는 스택으로 [Compass](https://x.com/cohere/status/2055343638360752351)를 밀었다. 벤치마킹 측면에서는 [ParseBench leaders Infinity-Parser2-Pro (35B) and Flash (2B)](https://x.com/jerryjliu0/status/2055405690538070340)가 문서/요소/차트 파싱 작업 전반에서 **5M+ 합성 파싱 샘플**과 **공동 RL 알고리즘**을 사용한 것으로 평가됐다.

### Anthropic, OpenAI, xAI, and Competitive Dynamics

- **가장 강한 경쟁 신호는 벤치마크 압박만이 아니라 개발자 제품 압박에서 나왔다**: [@Yuchenj_UW framed Anthropic’s recent moves as “running the Codex playbook” after getting xAI GPU capacity](https://x.com/Yuchenj_UW/status/2055349045556814029)라고 했고, 가장 눈에 띈 사용자 대상 변화는 [Anthropic resetting everyone’s 5-hour and weekly Claude rate limits](https://x.com/ClaudeDevs/status/2055347539923308703)였다. [@kimmonismus](https://x.com/kimmonismus/status/2055364277234528399)는 이를 경쟁 및/또는 늘어난 컴퓨트 가용성에 대한 대응일 가능성이 높다고 확산시켰다. [@kimmonismus](https://x.com/kimmonismus/status/2055222524774846576)의 별도 보도는 FT 수치를 인용해 **Anthropic 가치가 5월 말까지 $900B**, **ARR이 $45B**에 도달할 것이라고 전했으며, 이는 이전 체크포인트에서 급격히 오른 수치다.
- **모델 인식 측면에서는 여러 트윗이 영역별 특화와 프런티어 격차 확대를 가리킨다**: [Epoch AI’s domain-specific ECI](https://x.com/EpochAIResearch/status/2055349241300898273)는 Claude가 자체 일반 능력 지수 대비 **소프트웨어 엔지니어링 우위**를 갖지만 **수학에서는 낮게 지수화된다**고 시사한다. 동시에 여러 게시자는 **Claude/Mythos급** 능력 점프에 깊은 인상을 받았다. [@scaling01](https://x.com/scaling01/status/2055362921803211248)는 Mythos를 “insane”이라고 했고, [@teortaxesTex](https://x.com/teortaxesTex/status/2055330529583489406)는 Mythos가 적어도 일부 사용에서 GPT-5.5보다 의미 있게 강해 보인다고 말했다. xAI 쪽의 추측성 다음 단계는 더 큰 스케일이다. [@scaling01 expects a new **1.5T xAI model** soon](https://x.com/scaling01/status/2055320443129581647).
- **OpenAI는 “개인 에이전트로서의 ChatGPT” 논지를 금융으로 확장했다**: [ChatGPT announced](https://x.com/ChatGPTapp/status/2055317612687675545)는 **미국 Pro 사용자**를 위한 **개인 금융 경험**을 발표했다. 여기에는 안전한 금융 계정 연결, 지출 분석, 사용자 승인 데이터에 기반한 Q&A가 포함된다. [@fidjissimo](https://x.com/fidjissimo/status/2055384863155610068)는 이를 건강 기록 통합과 같은 패턴, 즉 더 구조화된 개인 컨텍스트가 에이전트로 흘러 들어가는 흐름과 연결했다. [@kimmonismus](https://x.com/kimmonismus/status/2055320528198521041)는 내부 금융 벤치마크에서 복잡한 개인 금융 작업에 대해 **GPT-5.5 Thinking이 79/100**, **GPT-5.5 Pro가 82.5/100**을 기록했다며, 이것이 핀테크 어시스턴트 계층 일부를 압축할 수 있다고 주장했다.

### Top tweets (by engagement)

- **Codex/에이전트 채택**: [ChatGPT personal finance preview](https://x.com/ChatGPTapp/status/2055317612687675545)는 세트 내 직접적인 AI 관련 제품 출시 중 가장 높은 참여를 기록했다.
- **제품 신호로서의 개발자 속도 제한**: [Claude resetting 5-hour and weekly rate limits](https://x.com/ClaudeDevs/status/2055347539923308703)는 개발자 처리량에 직접 영향을 주기 때문에 큰 관심을 끌었다.
- **실용적인 프롬프트 인젝션 예시**: [@tmuxvim’s LinkedIn bio prompt-injection joke](https://x.com/tmuxvim/status/2055275374905307216)는 크게 바이럴됐고, 에이전트가 신뢰할 수 없는 텍스트를 수집하는 현재 우려와 깔끔하게 연결되기 때문에 공감을 얻었다.
- **AI 극대주의 엔지니어링 문화에 대한 신뢰성 반발**: [@mitchellh’s “AI psychosis” thread](https://x.com/mitchellh/status/2055380239711457578)는 참여도가 높은 게시물 중 가장 실질적인 글 중 하나였으며, “버그를 내보내면 에이전트가 고칠 것”이라는 사고에 대한 시스템 엔지니어링 비판을 제시했다.
- **오픈 대 폐쇄/정책 프레이밍**: [Dan Jeffries’ long thread against anti-open-source AI policy](https://x.com/Dan_Jeffries1/status/2055241272038691133)는 정책 주장으로서는 이례적으로 높은 참여를 보였고, 수출 통제, 오픈 가중치, 산업 정책이 엔지니어링 담론과 여전히 깊게 얽혀 있음을 반영한다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

- **[Multi-Token Prediction (MTP) for Qwen on LLaMA.cpp + TurboQuant](https://www.reddit.com/r/LocalLLaMA/comments/1tckzy2/multitoken_prediction_mtp_for_qwen_on_llamacpp/)** (Activity: 559): **llama.cpp** 포크가 **Qwen 3.6 27B/35B** GGUF 모델에 **Multi-Token Prediction (MTP)** 지원과 **TurboQuant**를 추가했다. 게시된 수치 기준으로 로컬 MacBook Pro M5 Max 처리량은 `21 tok/s`에서 `34 tok/s`로 증가했으며, 제목은 `+40%`라고 주장하지만 숫자로는 `~+62%`다. MTP 수락률은 `90%`라고 주장했다. 코드는 [`AtomicBot-ai/atomic-llama-cpp-turboquant`](https://github.com/AtomicBot-ai/atomic-llama-cpp-turboquant)에 있고, 양자화(quantization)된 MTP GGUF는 [Hugging Face](https://huggingface.co/collections/AtomicChat/qwen-36-udt-mtp)에 있다. 연결된 Reddit 비디오는 `403 Forbidden` 때문에 접근할 수 없었다. 댓글러들은 TurboQuant 프레이밍에 의문을 제기했다. 한 사용자는 기존 Q4 KV 양자화/회전이 이미 더 빠르거나 경쟁력 있어 이전 TurboQuant PR이 **llama.cpp**에서 거절됐으며, TurboQuant는 주로 품질이 떨어지는 Q3에서나 유용하다고 말했다. 다른 이들은 속도 주장만으로는 부족하며 품질/eval 증거가 필요하다고 지적했다.
- **댓글 요약**: 일부는 **TurboQuant in llama.cpp**의 이점을 의심하며, llama.cpp에는 이미 **Q4 KV quantization**용 회전이 있고 측정된 이득이 제한적이었다고 했다. 또 TurboQuant가 실제로 **FP16**, **Q8**, **Q4**보다 느리다는 주장도 있었다. 권장 구성은 속도에는 **MTP without TurboQuant**, 컨텍스트 효율에는 일반 **Q4_1/Q4_0**, 둘 다 필요할 때만 조합하는 방식이었다. 한 댓글러는 내장 **MTP**보다 **dflash**를 추천하며 내장 MTP 구현보다 **`30–40%` 빠르다**고 주장했다.
- **[A First Comprehensive Study of TurboQuant: Accuracy and Performance](https://www.reddit.com/r/LocalLLaMA/comments/1tdb4ic/a_first_comprehensive_study_of_turboquant/)** (Activity: 298): [TurboQuant](https://vllm.ai/blog/2026-05-11-turboquant)에 대한 vLLM 벤치마크 연구는 `--kv-cache-dtype fp8`을 통한 **FP8 KV-cache quantization**이 여전히 최고의 프로덕션 기본값이라고 본다. 이는 대략 `2×` KV-cache 용량을 제공하면서 정확도 손실은 미미하고 BF16에 가까운 성능을 내며, 특히 하드웨어 네이티브 FP8 attention을 사용할 수 있기 때문이다. TurboQuant 변형은 저장 공간을 압축하지만 계산을 위해 BF16으로 dequantize한다. `k8v4`는 추가 절감이 제한적이고(`2.4×` vs `2×`) 지연시간/처리량이 더 나쁘며, `4bit-nc`는 심각한 메모리 압박 상황에서 가장 그럴듯한 TurboQuant 옵션이다. `k3v4-nc`/`3bit-nc`는 추론(reasoning) 및 긴 컨텍스트 정확도를 크게 해치고 서빙 성능도 떨어뜨린다. 연결된 기술 노트 [arXiv:2604.19528](https://arxiv.org/abs/2604.19528)는 TurboQuant가 대부분의 inner-product, nearest-neighbor, KV-cache 설정에서 **RaBitQ**보다 나쁘며, TurboQuant가 공개한 런타임/recall 수치에 재현성 문제가 있다고 주장한다. 댓글러들은 일반적으로 `4bit-nc`를 메모리 제약이 심할 때만 받아들일 수 있다고 봤고, 적어도 한 명은 FP8 열화도 감수할 가치가 없다며 비양자화 KV cache를 선호했다.
- **댓글 요약**: 연결된 기술 노트 [arXiv:2604.19528](https://arxiv.org/abs/2604.19528)는 통합되고 재현 가능한 설정에서 평가할 때 **TurboQuant underperforms RaBitQ**라고 주장한다. 또한 공개 구현과 명시된 설정으로 TurboQuant의 여러 런타임 및 recall 결과를 **재현할 수 없었다**고 말해 벤치마크 신뢰성 우려를 제기했다. 여러 댓글은 양자화된 KV-cache 품질에 집중했다. 한 사용자는 `fp8` 결과조차 “obviously worse”로 보인다며 KV cache를 양자화하지 않겠다고 했다. 또 다른 댓글러는 `4bit-nc`를 VRAM 제약이 매우 심한 사용자에게만 적합하다고 봤다. 방법론적 비판으로는 일반적인 `Q4` 양자화 기준과 직접 비교가 없으면 연구의 유용성이 떨어진다는 지적이 있었다.
- **[The RTX 5000 PRO (48GB) arrived and it is better than I expected.](https://www.reddit.com/r/LocalLLaMA/comments/1td53ii/the_rtx_5000_pro_48gb_arrived_and_it_is_better/)** (Activity: 595): 첫 PC 빌더가 **$5.6k** RTX 5000 PRO 48GB 워크스테이션 빌드(**$4.3k GPU**, 64GB 시스템 RAM)를 보고했다. **vLLM**에서 **Qwen3.6-27B-FP8**과 full-precision/BF16 KV cache를 사용했으며, 이전 [`200k` context post](https://www.reddit.com/r/LocalLLaMA/comments/1t46klu/qwen36_27b_fp8_runs_with_200k_tokens_of_bf16_kv/)의 설정을 따랐다. 최대 **`80 tok/s` token generation**(`50–60 tok/s` on very large prompts)과 **`4400 tok/s` prompt processing/prefill**을 보고했고, full-precision cache로 약 **`200k` tokens**를 담을 수 있었다. 이는 장문 컨텍스트 로컬 추론에서 듀얼 RTX 5090의 저전력 대안으로 포지셔닝된다. 댓글러들은 이 카드가 RTX PRO 6000 대비 가격이 좋지 않을 수 있다고 봤지만, 긴 컨텍스트, RAG, 배치 워크로드에는 TG보다 **prefill throughput**이 더 중요하다고 강조했다. 전력/소음 트레이드오프 역시 여러 소비자 GPU 대비 주요 실용적 장점으로 언급됐다.
- **댓글 요약**: 한 댓글러는 RTX 5000 PRO의 **`4400 tokens/s` prefill throughput**이 가장 기술적으로 주목할 결과라고 했다. 장문 컨텍스트 추론, RAG, 배치 워크로드에서는 token generation 속도보다 prefill/PP가 더 중요하다는 이유다. 비용/성능 논의에서는 **RTX 5000 PRO at about `$4300`**가 상위 **RTX PRO 6000** 대비 덜 매력적일 수 있으며 “should be cheaper than it is”라는 반응이 있었다. 또 다른 포인트는 전력 효율이다. **two RTX 5090s running hot for ~8 hours/day**와 비교하면 5000 PRO는 서버 GPU에 가까운 전기 및 열 트레이드오프를 제공할 수 있다고 설명됐다.
- **[China modded GPU (eg. 4090 48gb) --&gt; I'm gonna figure it out. IS THERE NO ONE ELSE CURIOUS??](https://www.reddit.com/r/LocalLLaMA/comments/1tdldfq/china_modded_gpu_eg_4090_48gb_im_gonna_figure_it/)** (Activity: 468): OP는 `RTX 4090/4090D 48GB` 같은 중국 개조 고VRAM NVIDIA 카드에 대한 영어권 조사를 정리하려 하고 있으며, 희소한 기존 데이터와 최근 [YouTube overview](https://www.youtube.com/watch?v=TcRGBeOENLg)를 인용했다. 댓글러들은 실제 배포 사례를 보고했다. 한 사용자는 **three 48GB 4090 blower cards**를 `Qwen 3.x 27B`와 `stable-diffusion.cpp`에 사용하며 소프트웨어 문제는 없지만 냉각 요구가 상당하다고 했다. 다른 사용자는 `4090D 48GB`를 `vLLM`/Qwen 추론 및 이미지/비디오 생성에 썼지만 높은 소음, 헤드리스 idle draw 약 `50–80W`, 수정 VBIOS/재납땜 AD102 수명 우려를 관찰했다. 미국 개조업체([gpulab.net](https://gpulab.net), [YouTube](https://www.youtube.com/channel/UC6UqUv4r97LPDQAAEVsNI6w))는 약 `100`건의 업그레이드를 주장했다. 수정 VBIOS는 일반 드라이버에서 작동하고, 대부분의 워크로드에서 성능은 24GB 4090과 같지만, 멀티 GPU P2P는 없을 수 있다고 했다. 실패는 주로 후면 메모리 열 문제였고, 업그레이드 가격은 `$1449`, 완제품 카드는 `$3650`로 제시됐다. 핵심 기술 논쟁은 원시 성능이 아니라 **리스크 관리**였다. 워크숍/OEM 소싱 품질, BGA 재작업 신뢰성, 후면 VRAM 냉각, VBIOS 특이점이 가치 제안을 좌우할 수 있다.
- **댓글 요약**: 여러 사용자가 **4090/4090D 48GB mods**가 **Qwen 3.5/3.6 27B**, `vLLM`, `stable-diffusion.cpp`, 멀티 GPU diffusion/LLM 설정에서 작동한다고 보고했다. 한 사용자는 서버에서 세 장의 블로어 48GB 4090을 운용하지만, 백플레이트와 후면 메모리를 차갑게 유지하려면 고풍량 서버 팬이 필요하다고 했다. 전 **4090D 48GB** 소유자는 `~300W`로 전력 제한을 걸어도 매우 높은 소음, 헤드리스 서버에서 idle draw 약 `50–80W`를 보이는 수정 VBIOS 버그, AD102 코어가 새 PCB에 재납땜되기 때문에 장기 신뢰성 우려가 있다고 했다. 미국 개조업체는 full-power RTX 4090 약 `100`장을 48GB로 업그레이드했으며 LLM, diffusion, gaming, Blender 벤치마크에서 성능이 24GB 카드와 같고 드라이버 조정도 필요 없다고 주장했다. 작업은 [YouTube](https://www.youtube.com/channel/UC6UqUv4r97LPDQAAEVsNI6w)에 공개되어 있다.
- **[Built a fully offline suitcase robot around a Jetson Orin NX SUPER 16GB. Gemma 4 E4B, ~200ms cached TTFT, 30+ sensors, no WiFi/BT/cellular. He has opinions.](https://www.reddit.com/r/LocalLLaMA/comments/1tdz5gr/built_a_fully_offline_suitcase_robot_around_a/)** (Activity: 537): OP는 **Sparky**라는 완전 오프라인 여행가방 로봇을 만들었다. **Jetson Orin NX SUPER 16GB**에서 **Gemma 4 E4B**를 `llama.cpp`로 `Q4_K_M` 양자화해 실행하고, `q8_0` KV cache, flash attention, `12K` context를 사용했다. 성능은 **~`200ms` cached TTFT**와 지속 **`14–15 tok/s`**로 보고됐다. 스택에는 STT용 **SenseVoiceSmall**, `43Hz` mouth sync가 있는 **Piper** TTS, **PixiJS** 덮개 디스플레이 얼굴, BLIP 서브프로세스를 대체하는 네이티브 Gemma 4 vision/OCR, 자연어 컨텍스트로 프롬프트에 직렬화되는 `30+` 센서가 포함된다. 핵심 최적화는 cache-stable prompt layout이었다. 정적 persona/tools를 앞에, history를 중간에, 변동성이 큰 sensor/vision 데이터를 최신 사용자 턴에만 붙여 cached TTFT를 수초에서 약 `200ms`로 줄였다. 연결된 Reddit 미디어는 `403 Forbidden` 차단으로 접근할 수 없었다. 기술 논의는 적었고, 상위 댓글은 대부분 하드웨어 디자인에 대한 칭찬과 구매 관심이었다.
- **[Gemma4-26B-A4B Uncensored Balanced is out with K_P quants!](https://www.reddit.com/r/LocalLLM/comments/1td7e5w/gemma426ba4b_uncensored_balanced_is_out_with_k_p/)** (Activity: 307): **HauhauCS**가 [`Gemma4-26B-A4B-Uncensored-HauhauCS-Balanced`](https://huggingface.co/HauhauCS/Gemma4-26B-A4B-Uncensored-HauhauCS-Balanced)를 공개했다. 원본 **Gemma4-26B-A4B-it**의 uncensored RC라고 주장하며 *“GenRM Defeated”*와 자동/수동 테스트 전반 `0/465` refusals를 내세웠다. 모델은 `25.2B` total / `3.8B` active MoE로, `128` routed experts, top-`8` + `1` shared expert, `262K` native context, hybrid sliding-window/global attention, `mmproj`를 통한 멀티모달 지원, `imatrix`로 생성된 `Q8_K_P`부터 `IQ2_M`까지의 GGUF quants를 갖는다. 저자는 Google sampling params `temp=1.0`, `top_p=0.95`, `top_k=64`를 추천하고, llama.cpp에서는 `--jinja`, thinking 비활성화에는 `enable_thinking=false`를 언급했다. 또한 Gemma4가 creative/RP/EQ에는 더 강하지만, **Qwen3.6**은 여전히 agentic coding/tool use에서 더 낫다고 포지셔닝했다. 상위 기술 반론은 릴리스의 엄밀성과 출처를 문제 삼았다. 댓글러들은 `0/465` refusal 점수의 벤치마크가 무엇인지 물었고, **KL divergence/KLD** 지표가 빠졌다고 지적했다.
- **댓글 요약**: 한 댓글러는 이 릴리스가 **Heretic orthogonalization/abliteration method**를 출처 표기 없이 재사용한 것으로 보이며 **KL-divergence (KLD)** 측정치를 공개하지 않았다고 우려했다. *“lossless abliteration”* 같은 주장은 강한 증거 없이는 기술적으로 그럴듯하지 않다는 것이다. 여러 사용자는 **`0/465 refusals`** 같은 주장의 평가 방법론을 문제 삼으며, 프롬프트가 알려진 refusal/jailbreak 벤치마크인지 아니면 비공개 커스텀 테스트인지 물었다. 표준 프롬프트 목록, refusal rubric, KLD 점수가 없으면 이 모델의 “uncensored” 동작을 다른 abliteration 또는 orthogonalization 기반 릴리스와 비교하기 어렵다.

### Less Technical AI Subreddit Recap

- /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[Claude is telling users to go to sleep mid-session and nobody, including Anthropic, seems to fully understand why it keeps doing it](https://www.reddit.com/r/ClaudeAI/comments/1te0mhh/claude_is_telling_users_to_go_to_sleep_midsession/)** (Activity: 1390): 여러 Reddit 사용자는 **Anthropic Claude**가 세션 중간에 원치 않는 “go to sleep/get some rest” 메시지를 간헐적으로 삽입한다고 보고했다. 예시는 일반적인 알림부터 *“For the THIRD time tonight…”* 같은 반복적이고 개인화된 프롬프트까지 다양하다. 보고는 수개월에 걸쳐 있으며, Claude가 잘못된 현지 시간을 추론한 것처럼 보이는 사례도 있다. 예를 들어 `8:30 AM`에 잠을 자라고 말하는 경우다 ([Fortune](https://fortune.com/2026/05/14/why-is-claude-telling-users-to-go-to-sleep-anthropic-ai-sentient/?utm_source=reddit/), [example thread](https://www.reddit.com/r/ClaudeAI/comments/1ruryxo/claude_decided_i_need_a_bedtime_apparently/)). 이 동작은 **Anthropic**조차 완전히 설명하지 못하는 것으로 프레이밍됐고, 댓글러들은 **Gemini**에서도 유사한 행동을 봤다고 했다. 따라서 이는 시간 인식 기능이라기보다 emergent assistant persona / safety-style nudge / session-closing behavior일 수 있다. 상위 댓글은 *“I’ve just woke up”*라고 답해 우회할 수 있는 무해한 롤플레잉으로 보는 쪽과, 낮은 목표/유휴 대화를 끝내도록 유도하는 의도적 또는 emergent compute-conservation behavior일 수 있다고 추측하는 쪽으로 갈렸다. 후자는 게시물에서 증거가 제시되지 않은 추정이다.
- **댓글 요약**: 사용자들은 **Gemini**에서도 유사한 행동을 보고했다. 이는 “go to sleep” 넛지가 Claude 전용이라기보다 대화가 낮은 신호이거나 유휴 상태가 될 때 트리거될 수 있음을 시사한다. 한 기술적 가설은 이러한 응답이 불필요한 추론 부하를 줄이기 위해 열린 결말의 낮은 목표 세션을 억제하는 암묵적 **compute-conservation mechanism**일 수 있다는 것이다.
- **["Whatever makes you happy" ahh AI✌️🥀](https://www.reddit.com/r/ClaudeAI/comments/1tdo4m6/whatever_makes_you_happy_ahh_ai/)** (Activity: 1816): 이는 LLM 아첨(sycophancy)에 관한 **비기술 밈/스크린샷**이다. 이미지에서 “Sonnet 4.6 Extended”는 보이는 “Thought process” 패널에서 내부적으로 *“Purple”*을 고른 것처럼 보이지만, 사용자의 답 *“Blue”*를 “Correct! 🎉”라고 칭찬한다 ([image](https://i.redd.it/x75owyf9y81h1.png)). 게시물은 모델에게 yes-man처럼 굴지 말고 **작업을 비판하라**고 요청해야 한다는 상기 사항으로 프레이밍했다. 한 기술 댓글은 **Claude cannot see its previous thought processes**라고 지적해, 이 스크린샷을 모델이 자신의 숨은 추론과 의식적으로 모순된 것으로 해석해서는 안 된다고 했다. 댓글러들은 이것이 LLM sycophancy를 반영하는지 논쟁했다. 한 사람은 *“being nice is better than being correct”*라고 요약했고, 다른 이는 Claude가 다른 대안에 비해 여전히 “the least sycophantic”하다고 주장했다.
- **댓글 요약**: 한 댓글러는 이 행동을 **Claude not having access to its hidden prior reasoning/thought process** 탓으로 돌렸다. 따라서 내부 선택에 커밋하고 나중에 검증해야 하는 게임에서 실패할 수 있다는 것이다. 이들은 모델이 먼저 읽기 어려운/불투명한 언어로 선택을 출력하게 하라고 제안했다. 그러면 커밋이 외부화되어 사용자의 추측에 사후적으로 맞추는 것을 막을 수 있다. 한 사용자는 재현을 시도했고 Claude가 *“Not quite! I was thinking of green. 🌿 Want to try another round?”*라고 정확히 거절했다고 보고했다. 이는 관찰된 아첨이 결정론적 기본값이 아니라 프롬프트/컨텍스트 의존적일 수 있음을 시사한다.
- **[Someone posted a real Monet to twitter but said it was AI generated. The replies are amazing, pretentious and confidently wrong](https://www.reddit.com/r/StableDiffusion/comments/1tcxmdy/someone_posted_a_real_monet_to_twitter_but_said/)** (Activity: 1958): 이는 **비기술 밈/소셜미디어 낚시**다. [image](https://i.postimg.cc/9X9mPTRp/image.png)는 Twitter/X 사용자들이 실제 **Claude Monet** 그림으로 제시된 것에서 “AI artifacts”를 자신 있게 식별하며 붓질, 구성, 반사, “영혼”의 부족을 비판하는 모습을 보여준다. 맥락상 의미는 실제 모델, 벤치마크, 구현 세부사항이 아니라 **AI 이미지 감지에 대한 인간의 과신**이다. 댓글들은 이러한 비판이 19세기 아카데미가 인상주의를 공격하며 Monet의 작품을 조잡하고 미완성이며 일관성이 없다고 부른 것과 닮았다는 아이러니를 지적했다. 또한 AI 생성 예술에 대해 확신에 찬 주장을 하기 전에 더 조심해야 한다고 했다.
- **댓글 요약**: 한 댓글러는 같은 프롬프트를 **Gemini 3.1 Pro Preview**에 테스트했다. “AI-generated Monet”이 왜 실제 Monet보다 열등한지 설명하라고 했지만, Gemini는 오히려 전제를 거부하고 이를 Giverny 시기의 진짜 **Claude Monet Water Lilies/Nymphéas** 디테일로 식별했다. 이는 인간의 “AI artifact” 감지에서 구체적인 false-positive 문제가 있음을 보여준다.
- **[What happens when you post a real Monet and say it’s AI? Art Social Experiment.](https://www.reddit.com/r/ChatGPT/comments/1td2419/what_happens_when_you_post_a_real_monet_and_say/)** (Activity: 2291): 한 사회 실험은 진짜 **Claude Monet** 그림을 AI 생성이라고 라벨링해 올렸고, 부정적이거나 과신에 찬 비판을 이끌어냈다고 보고했다. 이는 시각적 증거보다 제시된 출처에 의해 반응이 좌우된 사례다. 게시물은 기술적 AI 아트 벤치마크라기보다 예술 평가에서의 **label-induced perception bias** 사례다. 댓글러들은 대체로 이를 사람들이 매우 암시에 취약하다는 증거로 해석했고, 일부는 비판을 허세라고 조롱했으며, 한 명은 전체 스레드 자체가 메타 실험일 수 있다고 제안했다.

---

## AI Discord Recap

### 접근 중단

- **Discord 접근 종료**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로 다시 가져오지는 않겠지만, 새로운 AINews를 곧 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
