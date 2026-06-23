---
title: "OpenAI, Daybreak와 GPT-5.5-Cyber 확장"
summary:
  - "OpenAI, Daybreak와 GPT-5.5-Cyber 확장"
  - "Sakana Fugu가 오케스트레이션 API 출시"
  - "GLM-5.2가 오픈 웨이트 에이전트로 부상"
  - "Gemini Interactions API가 정식 출시"
  - "Anthropic ID 인증 도입에 반발 확산"
date: 2026-06-22
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-06-22-not-much.md"
hasHeadline: false
headline: "OpenAI, Daybreak와 GPT-5.5-Cyber 확장"
tags:
  - OpenAI
  - GPT-5.5-Cyber
  - Daybreak
  - GLM-5.2
  - Agents
isFeatured: false
---

## 헤드라인: OpenAI, Daybreak와 GPT-5.5-Cyber 확장

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216), [AINews' website](https://news.smol.ai/), [AINews is now a section of Latent Space](https://www.latent.space/p/2026), [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

OpenAI는 Daybreak 프로그램을 확장하며 사이버 보안 스택을 취약점 발견에서 수정(remediation)과 패치 생성까지 넓혔다. 핵심 변화는 GPT-5.5-Cyber, Codex Security plugin, Cyber Partner Program, Patch the Planet을 통해 사람의 검토가 포함된 폐쇄 루프 보안 워크플로를 전면에 내세운 점이다.

---

## AI Twitter Recap

### OpenAI Daybreak, GPT-5.5-Cyber와 정책/보안 분리

- **OpenAI의 사이버 스택이 취약점 발견을 넘어 수정까지 확장**: [OpenAI](https://x.com/OpenAI/status/2069104283824640023)는 확장된 **Daybreak** 프로그램, **Codex Security plugin**, 신뢰된 방어자를 위한 전체 **GPT-5.5-Cyber** 모델, **Cyber Partner Program**, 중요 OSS 보안을 위한 **Patch the Planet**을 발표했다. 후속 게시물은 구체적 범위를 덧붙였다. [30M+ commits scanned, 30K+ codebases covered, 70K+ reviewer-marked fixes, and 500K+ additional fixes detected automatically](https://x.com/reach_vb/status/2069110672886002140), [major projects like cURL, Go, Python, Sigstore, and pyca/cryptography are in scope](https://x.com/gdb/status/2069112120206332130), [plugin supports deep scans, threat modeling, patch generation, and export into existing workflows](https://x.com/gdb/status/2069128701850386834). 주목할 변화는 “버그 찾기”에서 **사람 검토가 포함된 폐쇄 루프 패치 생성**으로 이동했다는 점이다.
- **역량 주장이 수출통제 논리와 충돌**: OpenAI는 [@sama](https://x.com/sama/status/2069121360744550796)를 통해 GPT-5.5-Cyber가 **CyberGym SOTA**라고 명시적으로 주장하는 한편, Anthropic의 제한된 **Mythos/Fable** 접근을 둘러싼 공개 논쟁도 이어졌다. [@BlackHC](https://x.com/BlackHC/status/2069168353919263002)는 당연한 정책 질문을 던졌다. OpenAI의 최신 사이버 모델이 더 강하다면 왜 동등한 통제를 받지 않는가? [@shashj](https://x.com/shashj/status/2069078104941961293)는 Mythos 이야기와 관련해 중요한 정정도 덧붙였다. NSA가 언급한 “몇 주가 아니라 몇 시간”은 **초기 접근을 가정한 레드팀 활동**과 관련된 것이며, 해당 레드팀은 더 이상 Mythos 접근 권한이 없다고 전해진다. 결과적으로 **모델 역량 보고**와 **일관된 거버넌스 기준** 사이의 간극이 커지고 있다.

### Sakana Fugu의 오케스트레이션 출시와 벤치마크 투명성 반발

- **Fugu는 “모델 출시”를 모델 풀 위의 학습된 오케스트레이션으로 재정의**: Sakana는 [**Fugu**](https://x.com/SakanaAILabs/status/2068973497905545461)를 소개하며, 여러 프런티어 모델에 걸쳐 **모델 선택, 위임, 검증, 종합**을 학습하는 단일 API라고 설명했다. [Vercel](https://x.com/vercel_dev/status/2069009248952942605)은 곧바로 AI Gateway에 **Fugu Ultra**를 추가했다. 이 제품 논지는 실제 시스템이 이미 오케스트레이션 계층으로 이동하고 있다고 보는 엔지니어들에게 반향을 얻었다. [@levie](https://x.com/levie/status/2068917230570795178)는 라우팅/오케스트레이션이 고가치 계층이 될 가능성이 크다고 했고, [@audreyt](https://x.com/audreyt/status/2068937870757548096)는 Fugu Ultra가 빠른 드라이버 루프와 짝을 이룬 플래너/어드바이저로 잘 작동한다고 보고했다. Sakana는 이어 autoresearch, finance, blindfold chess, CAD 등 사용 사례를 연속으로 공개하며 **테스트 시점 조정(test-time coordination)**이 장기 과제에서 단일 호출보다 나을 수 있다고 주장했다 ([1](https://x.com/SakanaAILabs/status/2069084332879462779), [2](https://x.com/SakanaAILabs/status/2069086336955646322), [3](https://x.com/SakanaAILabs/status/2069088009790861312), [4](https://x.com/SakanaAILabs/status/2069089571208679469)).
- **비판은 즉각적이었다: 불투명한 기준선, 누락된 비용 계산, 의심스러운 보고**: 가장 상세한 해체 분석은 [@eliebakouch](https://x.com/eliebakouch/status/2068939729811468503)에서 나왔다. 그는 Fugu가 본질적으로 **라우터/분류기**와 사전 계획된 다단계 워크플로 시스템이며, 몇 가지 핵심 문제가 있다고 주장한다. **SWE-Bench Pro에서 Opus보다 약 10점 뒤처지고**, 익명화된 “Model A/B/C”와 비교하며, best-of-N 스타일 오케스트레이션의 **토큰/비용 보고**를 생략하고, 일반 기본 모델이 아니라 다른 **test-time scaling** 설정과 비교해야 한다는 것이다. [@BlancheMinerva](https://x.com/BlancheMinerva/status/2069009885958668340)는 과거 사건과 이전 작업의 불가능해 보이는 성능 주장 의혹을 근거로 Sakana의 신뢰성을 문제 삼으며 회의론을 더 키웠다. 이 출시는 기술적으로 여전히 중요하지만, 논의는 “오케스트레이션이 유용한가?”에서 “오케스트레이션 시스템을 어떻게 평가하고 공개해야 하는가?”로 이동했다.

### GLM-5.2의 부상: 오픈 웨이트 에이전트, 인프라 채택, 실제 하네스 성과

- **GLM-5.2는 에이전트 작업에서 프런티어에 가까운 모델로 널리 취급되는 첫 오픈 웨이트 모델로 부상**: 여러 게시물이 같은 흐름을 가리켰다. [Artificial Analysis](https://x.com/ArtificialAnlys/status/2069121548670406947)는 **GLM-5.2**를 **GDPval-AA**에서 **1524 Elo**로 **#3 overall**에 올렸고, Claude Fable 5와 Opus 4.8만 앞섰으며 일부 독점 모델과 동급이거나 앞선다고 평가했다. 또한 GLM을 **선도적인 오픈 웨이트 모델**이자 [AA-Briefcase cost/performance frontier](https://x.com/ArtificialAnlys/status/2069148772446425563)에서 강한 지점으로 강조했다. [@natolambert](https://x.com/natolambert/status/2069073545632813193)는 이를 에이전트의 **“DeepSeek moment”** 가능성이라고 불렀고, [@AravSrinivas](https://x.com/AravSrinivas/status/2069146151325257913)는 중간 수준의 생산 지식 업무에서 “블라인드 테스트를 통과”하기 때문에 오픈소스에 대한 진지한 관심을 되살린다고 주장했다.
- **가장 강한 증거는 추상적 벤치마크 차트가 아니라 실제 하네스에서 나왔다**: [Cline](https://x.com/cline/status/2069171146994729078)은 같은 하네스로 Cline 저장소의 실제 버그에 대해 GLM-5.2와 Opus 4.8을 테스트했다. GLM은 **더 느리고 도구 호출이 많았지만**, **더 저렴했고($0.41 vs $0.81)** 검증에서 더 견고했다. 죽은 코드를 정리하고 프로덕션 빌드를 확인한 반면, Opus는 테스트는 통과했지만 타입 오류를 남겼다. [@askalphaxiv](https://x.com/askalphaxiv/status/2069074178829901974)는 GLM-5.2가 자신들이 시도한 첫 오픈 웨이트 모델 중 **실제 autoresearch 과제**를 수행할 수 있는 모델이라고 했다. 여기에는 두 개의 8xH100 노드에서 비동기 vs colocated RL 학습 실행도 포함된다. 도구 계층에서는 [@_xjdr](https://x.com/_xjdr/status/2069030608727408993)가 주말 동안 용량을 보강하고, 도구 스트림을 파싱하고, 표준 세션과 **1M context** 세션의 엔드포인트를 분리한 뒤 GLM을 **ncode의 기본 모델**로 승격했다고 설명했다. 두 번째 스레드는 OSS 모델을 깔끔하게 온보딩하기 위해 필요한 **모델별 파서와 하네스 작업**이 놀라울 정도로 많았음을 자세히 설명한다 ([details](https://x.com/_xjdr/status/2069038936362803544)).
- **배포와 서빙 속도도 이례적으로 빨랐다**: GLM-5.2는 [AWS Marketplace](https://x.com/CarolGLMs/status/2068902098696339811), [Baseten’s library with >280 tok/s and <0.8s TTFT](https://x.com/baseten/status/2069153790503080251), [Droid via Fireworks](https://x.com/FactoryAI/status/2069161306410942900), [LangChain’s deepagents code](https://x.com/sydneyrunkle/status/2069028200181539181)에 들어갔고, 여러 제공업체 전반으로 확산됐다. [one count put it at 20](https://x.com/paradite_/status/2069132200927522848). [running GLM-5.2 inside Claude Code via Baseten’s OpenAI-compatible endpoint](https://x.com/thealexker/status/2069163621469335757) 같은 실용 가이드 생태계도 커지고 있다. 핵심은 **오픈 모델 품질이 이제 추론(inference) 벤더와 에이전트 도구 제작자가 공격적으로 최적화할 문턱을 넘었다**는 점이다.

### 에이전트 인프라: Gemini Interactions API, Hermes 확장, 하네스 우선 엔지니어링

- **Google은 Interactions API를 에이전트를 위한 기본 Gemini 인터페이스로 승격**: [Google](https://x.com/Google/status/2069108942102310957)과 [@OfficialLoganK](https://x.com/OfficialLoganK/status/2069115284519346263)는 **Interactions API**가 이제 GA이며 Gemini 모델과 에이전트의 새 기본값이라고 발표했다. 기능 구성은 주목할 만하다. 모델과 에이전트를 위한 단일 API, **백그라운드 비동기 실행**, 확장된 도구 지원, 멀티모달 생성, 관리형 에이전트, 그리고 [@_philschmid](https://x.com/_philschmid/status/2069108134044467487)가 설명한 격리된 원격 Linux 샌드박스 **Antigravity**가 포함된다. 이는 Google의 스택이 단순한 모델 엔드포인트가 아니라 “에이전트 하네스” 문제에 대한 1P 답안에 가까워지고 있음을 보여준다.
- **스킬, 통신 프로토콜, 상태 유지 세션이 1급 인프라 관심사가 되고 있다**: Google은 마이그레이션을 쉽게 하기 위해 새 SDK 패턴과 현재 모델 버전을 코딩 에이전트에 가르치는 설치형 [Gemini Interactions skill](https://x.com/_philschmid/status/2069137029359645007)을 출시했다. 동시에 [@omarsar0](https://x.com/omarsar0/status/2069066883995758814)는 **9개의 오픈소스 에이전트 통신 프로토콜**에 대한 유용한 서베이를 소개하며, **하이브리드 페이로드와 세션 상태 지속성**을 중심으로 표준이 떠오르고 있지만 탈중앙 발견은 아직 미성숙하다고 언급했다. 공통 주제는 팀들이 **상태 유지, 풍부한 도구, 장기 실행 에이전트 워크플로**를 표준화하고 있지만 전체 프로토콜 스택까지는 아직 아니라는 점이다.
- **Hermes는 로컬/개인 에이전트 플랫폼으로 표면적을 계속 넓히고 있다**: Hermes 업데이트에는 [iMessage access without a Mac](https://x.com/tonbistudio/status/2068922944576008696), [Raft integration as an external agent in a shared workspace](https://x.com/raft_hq/status/2069040502507483192), 그리고 가장 중요하게는 [GUI control for Windows or Linux desktop apps with any model](https://x.com/Teknium/status/2069126072504074356)이 포함됐다. 저장소는 [200K stars](https://x.com/Teknium/status/2069088568161771522)도 넘기며, 많은 개발자 에너지가 기본 모델 품질뿐 아니라 **에이전트 UX와 하네스 사용성**으로 향하고 있음을 재확인했다.

### 추론 경제학, 인프라 규모, “소유한 지능”으로의 이동

- **Baseten의 $1.5B Series F는 포스트 트레이닝된 오픈 모델과 기업 제어 평면으로서의 추론에 대한 직접적 베팅**: [Baseten](https://x.com/baseten/status/2069097489794527537)과 CEO [@amiruci](https://x.com/amiruci/status/2069095112186196175)는 기업들이 점점 더 **자신들의 지능 계층을 소유**하길 원한다고 주장했다. 오픈 또는 특화 모델을 실행하고, 자체 데이터/평가로 포스트 트레이닝하며, 지속 학습에 대한 통제권을 유지하려 한다는 것이다. 고객 목록인 Abridge, Cursor, Decagon, Harvey, Notion, OpenEvidence 등은 이것이 이미 애플리케이션 계층에서 일어나고 있음을 보여준다. 이는 그날의 더 넓은 증거와 맞물린다. 더 강한 오픈 모델과 더 나은 인프라가 **포스트 트레이닝을 프런티어 연구소의 전문 영역에서 앱 회사의 역량으로 바꾸고 있다**.
- **컴퓨트 리스가 자체적인 전략 시장이 되고 있다**: [Reflection signed a $6.3B compute deal with SpaceX for GB300 access](https://x.com/AndrewCurran_/status/2069078511948910820)했다는 보도가 널리 논의됐다. [@jaminball](https://x.com/jaminball/status/2069099044413304840)는 이를 SpaceX/xAI가 Anthropic 및 Google과 맺은 다른 대형 컴퓨트 거래와 함께 맥락화하며, Blackwell 가격이 **$10/hour**를 넘고 **90-day out clauses**가 암시된다고 언급했다. 사실이라면 “네오클라우드” 용량과 GPU 브로커리지는 모델 제작자와 하드웨어 공급 사이의 점점 더 중요한 전략 계층이 된다.
- **Top tweets (by engagement)**:
  - **OpenAI Daybreak / GPT-5.5-Cyber**: [@OpenAI](https://x.com/OpenAI/status/2069104283824640023), [@sama](https://x.com/sama/status/2069121360744550796)
  - **GLM-5.2 실제 검증**: [@cline](https://x.com/cline/status/2069171146994729078)
  - **Google의 Interactions API GA**: [@Google](https://x.com/Google/status/2069108942102310957)
  - **Baseten Series F / owned intelligence 논지**: [@amiruci](https://x.com/amiruci/status/2069095112186196175)
  - **Sakana Fugu 출시**: [@SakanaAILabs](https://x.com/SakanaAILabs/status/2068973497905545461)

### 벤치마크, 평가 방법론, 정적 점수에서 실제 워크플로로의 이동

- **판정자 신뢰성이 다시 도마 위에 올랐다**: [@dair_ai](https://x.com/dair_ai/status/2069063719817265463)는 **21개 판정자**, **9개 제공업체**, 약 **541K개 판정**을 다룬 대규모 LLM-as-a-Judge 감사를 요약했다. 핵심 결과는 방법론적이다. **exact-match agreement는 판정자 품질을 상당히 과대평가**하며, **Cohen’s kappa**로 전환하면 MT-Bench에서 일치도가 **33–41포인트** 낮아지고 판정자 순위도 크게 바뀐다. 판정 모델을 내부 평가 인프라로 쓰는 팀들에게 강한 경고다.
- **에이전트를 챗봇이 아니라 시스템으로 평가하라는 압력이 커지고 있다**: [Jules](https://x.com/julesagent/status/2069095582422200732)는 이를 명시적으로 표현했다. 목표는 단순히 반응하는 에이전트가 아니라, 알아차리고, 예상하고, 협력하는 에이전트라는 것이다. 관련해 [@rseroter](https://x.com/rseroter/status/2069097330490446193)는 코딩 에이전트를 사용하는 것과 **자율 코딩 하네스**를 엔지니어링하는 것의 차이를 강조했다. 이날 가장 실질적인 게시물인 Cline의 GLM 테스트, OpenAI Daybreak, Fugu 비판은 모두 원시 단일 턴 IQ가 아니라 **도구, 메모리, 검증, 장기 실행 아래의 시스템 행동**에 관한 것이었다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: GLM-5.2 가격/성능과 홈랩 배포

- **[GLM-5.2 is on DeepSWE](https://www.reddit.com/r/LocalLLaMA/comments/1uc79ho/glm52_is_on_deepswe/)** (Activity: 606): 이미지는 코딩 에이전트/모델을 위한 **DeepSWE cost-vs-score benchmark chart**이며, 링크는 [image](https://i.redd.it/8qaktqtjjq8h1.png)다. 차트는 **GLM-5.2 [max]**를 `44%` DeepSWE, 평균 비용 `$3.92/task`로 표시하며, 점수는 GPT-5.x/Claude 계열 같은 상위 폐쇄 모델보다 낮지만 비용 대비 성능은 비교적 강한 위치에 있다. 특히 DeepSeek 가격이 이후 `75%` 할인으로 오래됐을 수 있다는 게시물의 주석을 고려하면 더 그렇다. 게시물은 DeepSWE를 [ArtificialAnalysis coding-agent scores](https://artificialanalysis.ai/agents/coding-agents)와 [SWE-rebench](https://swe-rebench.com/)의 맥락에 놓고, 과거 DeepSWE 비판이 원 저자에 의해 일부 철회됐다고 언급한다. 댓글 작성자들은 GLM-5.2에 조심스럽게 긍정적이었고, Sonnet/Kimi와 경쟁력 있게 “느껴지며” Opus/GPT급 시스템과 같은 넓은 논의권에 들어온 오픈 웨이트 모델이라는 점이 주목할 만하다고 했다. 비용 축이 오른쪽에 0을 두는 등 차트 디자인에 대한 비판도 있었고, Gemini가 이 벤치마크에서 오픈 모델보다 부진해 보이는 점에 대한 웃음도 있었다.
  - 한 댓글 작성자는 DeepSWE 결과가 실제 사용 경험과 대체로 맞는다고 해석했다. **GLM-5.2**는 **Claude Sonnet**과 **Kimi**보다 강하게 느껴지지만, **Opus 4.8/GPT-5.5**보다는 아직 뒤처진다는 것이다. 이들은 GLM-5.2가 자체 호스팅 가능한 **프런티어 인접 오픈 웨이트 모델**이라는 기술적 의미를 강조했다. 다만 상당한 하드웨어 비용과 설정 복잡성이 필요하지만, 일단 배포되면 토큰당 API 비용은 사라진다.
  - 벤치마크 위치를 둘러싼 비용/성능 검토도 있었다. 한 사용자는 **GPT-5.5 Medium**이 GLM-5.2보다 *더 싸고 더 나은지* 물었고, 다른 사용자는 **Fable Low**가 **Gemini 3.5 Flash**와 GLM보다 저렴해 보인다고 언급했다. 이 스레드는 독자들이 DeepSWE를 원시 점수뿐 아니라 독점 및 오픈/오픈 웨이트 모델 간의 *가격 정규화 성능*으로 비교하고 있음을 보여준다.
  - 한 댓글 작성자는 벤치마크 시각화 문제를 지적했다. 그래프가 한 축의 `0`을 오른쪽에 둔 것처럼 보여 원점 해석이 일관되지 않는다는 것이다. *“두 축이 모두 0에서 시작한다면 원점은 0,0이지 0,-25가 아니다.”* 이는 특이한 축 방향이나 이동된 원점이 모델 순위와 비용/성능 트레이드오프 인식을 왜곡할 수 있기 때문에 기술적 해석에 중요하다.

- **[GLM5.2 @7tg on 4x3090 + 192GB on budget motherboard + cpu](https://www.reddit.com/r/LocalLLaMA/comments/1ucknck/glm52_7tg_on_4x3090_192gb_on_budget_motherboard/)** (Activity: 838): 한 홈랩 빌더는 약 `$6000`으로 구성한 **4× RTX 3090 / 192GB DDR5** 소비자 워크스테이션을 보고했다. Linux에서 GPU를 각각 `200W`로 전력 제한하고, 예산형 프리빌트 플랫폼에 `1250W Platinum` PSU를 업그레이드한 뒤 RAM을 `5200`에서 `5600 MT/s`로 오버클럭했다. 로컬 워크로드는 **GLM 5.2**를 플래너로 `~7 tok/s`, **MiniMax 2.7**을 완전히 VRAM에 올려 코딩 모델로 `~45 tok/s`, **Qwen3.6 27B q8**을 검사/테스트용으로 `~50 tok/s`, **Flux2Klein** 확산 모델을 배치 시 2개 GPU에서 약 `1 image / 6s`로 실행하는 것이다. 댓글은 누락된 구현 세부사항에 집중했다. 모델 **양자화(quantization) 형식**, MiniMax M3 대신 MiniMax 2.7을 고른 이유, 4개 GPU용 메인보드/PCIe 레인 분할 설정, 태양광 기반 소비자 하드웨어 접근과 ECC/서버 또는 Threadripper 플랫폼의 비용/가치 트레이드오프가 주된 논점이었다.
  - 여러 댓글 작성자는 `4x RTX 3090 + 192GB RAM`에서 **GLM5.2**를 돌리는 데 필요한 **양자화 세부사항**이 빠졌다는 점에 집중하며 어떤 quant를 썼고 실제로 얼마나 쓸 만한지 물었다. 한 사용자는 왜 **MiniMax M3**를 선택하지 않았는지 구체적으로 물었고, 이는 모델 품질/성능과 메모리 적합성 비교를 암시한다.
  - 플랫폼 토폴로지에 대한 기술적 관심도 있었다. 사용자들은 어떤 **budget motherboard**를 썼는지, `4`개의 GPU를 연결하기 위해 **PCIe splitters/risers**가 필요했는지 물었다. `4x3090` 설정은 슬롯 간격, PCIe 레인 할당, 다중 GPU에 대한 BIOS/메인보드 지원에 제약을 받기 때문이다.
  - 비슷한 오픈 에어 시스템인 `4×3090`, `256GB RAM`, **Threadripper Pro 5975WX**, **ASUS Pro WS WRX80E-SAGE SE WIFI**를 만드는 한 댓글 작성자는 냉각 요구사항을 물었다. 논점은 케이스 없는 다중 3090 리그가 인접 GPU의 열 밀도와 재순환 위험 때문에 CPU 냉각과 케이스 팬 외의 추가 지향성 공기 흐름이 필요한지다.

- **[Tokenomics](https://www.reddit.com/r/LocalLLaMA/comments/1ubrcwj/tokenomics/)** (Activity: 1984): 이미지는 로컬 추론(inference) “tokenomics”가 계산상 맞지 않을 수 있다고 주장하는 [tweet screenshot](https://i.redd.it/oqzbrucwan8h1.jpeg)이다. 출처 없는 예시로 **~$20k hardware**가 **~20 tokens/s**를 생성한다고 가정해, GLM-5.2 API 가격 약 **`$1.40/$4.40` per million tokens** 대비 **~5.5년 손익분기점**을 추정한다. 기술적 의미는 정확한 계산보다, 댓글 작성자들이 *“made up numbers”*라고 문제 삼는 그 수치보다, 클라우드 LLM 추론이 배치/활용률과 상품화 경쟁의 이점을 누리는 반면 자체 호스팅은 순수 비용만으로 정당화하기 어렵다는 더 넓은 주장에 있다. 댓글은 대체로 로컬 호스팅이 토큰당 비용 절감보다 **프라이버시, 신뢰성/중단 없는 접근, 통제, 취미 사용, 미세조정(fine-tuning)/실험, 고활용 SME 워크로드** 때문에 여전히 정당화된다고 주장했다. 일부는 경쟁적인 오픈/클라우드 모델 가격이 독점 프런티어 모델 API에 비해 마진을 얇게 유지할 수 있다고도 했다.
  - 댓글 작성자들은 게시물의 비용/성능 가정에 이의를 제기하며, 언급된 **`$20k` 하드웨어 비용**과 **`20 tokens/s`** 수치가 출처 없다고 지적했다. 한 사람은 GLM-5.2 같은 매우 큰 모델을 자체 호스팅할 사용자는 많지 않겠지만, 상품화된 모델을 위한 경쟁적인 호스팅 추론 시장은 독점 프런티어 모델 가격보다 API 마진을 더 얇게 유지할 것이라고 주장했다.
  - 활용률을 둘러싼 기술적 비용 비교도 나왔다. 클라우드 배치 추론은 제공자가 하드웨어를 더 효율적으로 포화시킬 수 있기 때문에 보통 단일 사용자 로컬 추론보다 저렴하다. 하지만 GPU를 높은 활용률로 유지하거나, 프라이버시/통제가 필요하거나, 미세조정/REAP 스타일 워크플로를 수행하는 SME나 파워 유저에게는 로컬 리그가 경제적으로 타당할 수 있다.
  - 여러 댓글은 상각과 리스크를 강조했다. API 지출은 수년 사용 후 회수할 수 없지만, 구매한 하드웨어는 재판매 가치가 있고 로컬 가용성을 제공한다. 또한 호스팅 API 가격은 안정적으로 유지된다는 보장이 없으므로, 활용률이 낮더라도 프라이버시, 중단 없는 접근, 장기 비용 통제를 위해 로컬 추론이 매력적이라고 했다.

### /r/LocalLlama + /r/localLLM: 로컬 LLM 추론 튜닝과 KV 양자화

- **[Local LLM Inference Optimization: The Complete Guide](https://www.reddit.com/r/LocalLLaMA/comments/1uc3wg9/local_llm_inference_optimization_the_complete/)** (Activity: 577): 새로운 [llama.cpp local inference optimization guide](https://carteakey.dev/blog/local-inference/local-llm-optimization/)는 소비자 GPU/CPU를 위한 실용 튜닝을 정리했다. 초점은 **VRAM fitting**, KV-cache 크기 조정/양자화(`-ctk/-ctv q8_0`), Flash Attention, MoE 레이어 배치, MTP/speculative decoding 평가, CPU/P-core 튜닝, XMP/EXPO, 흔한 OOM/로드 시간 실패 모드다. 댓글은 멀티모달 특유의 함정을 강조했다. `mmproj`는 **로드 시점에 연속된 VRAM**이 필요하므로 비전 모델은 `--fit-target 2048` 같은 추가 여유가 필요할 수 있고, `--ubatch-size`가 이미지 토큰 수보다 커야 한다. 그렇지 않으면 llama.cpp가 비전 추론 중 assert를 낼 수 있다. 저자는 **RTX 4070 12GB + i5-12600K + 32GB DDR5-6000** 설정을 위한 벤치마크 트래커 [l3ms.carteakey.dev](https://l3ms.carteakey.dev/)도 공유했다. 기술 피드백은 대체로 긍정적이었고, 특히 실용적인 실패 모드 지적을 높게 평가했다. 한 댓글은 AI 같은 문체가 정보는 유용하지만 읽기 어렵다며 수동 편집을 제안했다.
  - 한 댓글 작성자는 여러 **llama.cpp/GGUF 비전 추론 함정**을 강조했다. 먼저 모델 카드 기본값을 사용해야 하며, `mmproj`는 **로드 시점에 연속된 VRAM**을 필요로 하고, 지나치게 공격적인 `--fit-target` 값은 추론 실패가 아니라 로드 시간 충돌을 일으킬 수 있다. 멀티모달 모델에서 이미지는 **수백 개 토큰**으로 토큰화될 수 있으므로 `--ubatch-size`는 적어도 이미지 토큰 수 이상이어야 하며, 그렇지 않으면 llama.cpp가 비전 추론 중 assert를 낼 수 있다고 했다. 제안된 완화책은 비전 모델에 `--fit-target 2048`을 쓰는 것이다.
  - 한 사용자는 [l3ms.carteakey.dev](https://l3ms.carteakey.dev/)에서 구체적인 로컬 추론 벤치마크 설정을 공유했다. **RTX 4070 12GB**, **i5-12600K**, **32GB DDR5-6000**이다. 이는 특히 12GB VRAM급 소비자 GPU에서 최적화 조언을 실제 하드웨어 제약 측정과 비교하는 기준점으로 유용하다.
  - 한 기술적 비판은 가이드의 `ik_llama.cpp` 섹션이 실제 사용자들이 이를 선택하는 이유를 빠뜨렸기 때문에 삭제하거나 다시 써야 한다고 주장했다. 이 댓글은 또한 `ik_llama.cpp` 작업이 **공식/직접적으로 llama.cpp upstream에 병합될 것으로 기대되지 않는다**고 강조하며, 단순히 “아직 upstream되지 않았다”고 표현하면 upstream llama.cpp와의 관계를 잘못 나타낼 수 있다고 했다.

- **[Gemma 4 QAT seems to respond significantly better to KV cache quantization](https://www.reddit.com/r/LocalLLaMA/comments/1ubl0df/gemma_4_qat_seems_to_respond_significantly_better/)** (Activity: 329): 게시물의 차트([image](https://i.redd.it/wxvhm0r1ml8h1.png))는 **Gemma 4 26B**에 대해 WikiText `16k` context에서 **full 16-bit KV cache 대비 KL divergence**를 보고하며, KV-cache 양자화 조건에서 non-QAT와 QAT 변형을 비교한다. 핵심 기술 결과는 **QAT 모델이 KV 양자화에 훨씬 더 견고하다**는 점이다. non-QAT v4/v6/v8의 `99.9%` KLD가 대략 `18.815 / 17.256 / 14.576`인 반면 QAT에서는 `4.409 / 3.436 / 2.385`로 떨어져, Gemma 4 QAT 모델에서 `Q8_0` KV cache가 다시 실용적일 수 있음을 시사한다. 댓글은 주로 KLD 수치가 무엇을 의미하는지 명확히 해달라고 요청하고, `24 GB` GPU에서 벤치마크를 재현하는 데 관심을 보였다. 한 댓글은 이것이 QAT의 예상 밖 부작용일 수 있다고 언급했다.
  - `24 GB` GPU를 가진 한 사용자는 코드가 제공되면 보고된 Gemma 4 QAT KV-cache 양자화 동작을 재현/벤치마크하겠다고 했다. 이는 게시된 수치를 해석하거나 결과를 검증하기에 스레드에 방법론적 세부사항이 충분하지 않다는 점을 시사한다.
  - 한 댓글 작성자는 비전 관련 워크로드에서 **Gemma 31B** 모델에 대해 반대되는 경험적 결과를 보고했다. `q8` KV cache를 쓰면 `bf16` KV cache보다 *“더 나쁘거나 더 부정확한 결과”*가 나와 `bf16`으로 되돌렸다는 것이다. 이는 KV-cache 양자화의 이점이 모든 품질을 보편적으로 개선하는 것이 아니라 작업/모델별일 수 있음을 보여주는 유용한 단서다.
  - 또 다른 댓글 작성자는 KV-cache 양자화 내성이 향상된 것이 **QAT** 자체의 의도치 않은 부작용일 수 있다고 추측했고, 별도 댓글은 **QAT Gemma**에 알려진 문제가 있다며 해결됐는지 물었다.

- **[My experience so far with 100% LOCAL LLM + RTX 5090 🤔](https://www.reddit.com/r/LocalLLM/comments/1ubkczr/my_experience_so_far_with_100_local_llm_rtx_5090/)** (Activity: 859): 이미지는 **RTX 5090 32GB**에서 **Qwopus3.6 27B v2 MTP**를 로컬 실행하는 **기술적 LM Studio configuration screenshot**으로, `160,768` 토큰 안팎의 긴 컨텍스트 설정, GPU offload, KV cache offload, Flash Attention, VRAM 한계에 가까운 메모리 추정치를 보여준다 ([image](https://i.redd.it/xzc7aq0efl8h1.png)). 맥락상 이 게시물은 `32GB` VRAM에 조밀한 로컬 코딩/채팅 모델을 맞추는 실용 보고서이며, 가능한 경우 `100%` GPU offload, `Q8_0`/이후 `Q5_1` KV-cache 양자화 트레이드오프, LM Studio + Cline/OpenCode로 한 번에 생성하기보다 단계적 “vibe coding”을 하는 방식을 강조한다. 댓글은 대체로 작성자의 워크플로 결론에 동의했다. 더 작은 범위의 작업, 체크포인트, 지속적인 rules/skills 파일이 로컬 에이전트의 신뢰성을 높인다는 것이다. 한 기술 댓글은 더 긴 컨텍스트와 속도를 위해 `Q5_1` V-cache 양자화와 더 큰 평가/물리 배치 크기를 제안했고, 작성자는 이후 LM Studio에서 이를 테스트해 엇갈린 결과를 얻었다.
  - 한 댓글 작성자는 **로컬 LLM은 큰 “hero prompts”보다 작은 범위의 작업, 촘촘한 체크포인트, 단계별 반복에서 더 잘 작동한다**는 워크플로 주장을 강화했다. 또한 `rules`/`skills` 파일을 모델을 위한 살아 있는 운영 매뉴얼로 유지하는 것을 강조했다. 이는 runbook 및 리뷰 주기와 비슷하며, 예시 구조로 [aiosnow.com](https://www.aiosnow.com/)을 언급했다.
  - 한 기술 최적화 제안은 **KV-cache 양자화**, 특히 **V cache를 `Q5_1`로 낮추는 것**이었다. 링크된 벤치마크에 따르면 이는 품질 손실을 최소화하면서 VRAM/컨텍스트 메모리를 상당히 절약할 수 있다: [KV cache quantization benchmarks for long context](https://anbeeld.com/articles/kv-cache-quantization-benchmarks-for-long-context#section-8). 같은 댓글 작성자는 **Evaluation Batch Size**와 **Physical Batch Size**를 모두 `2–4x` 늘릴 것도 권했고, 자신의 설정에서 생성 속도가 크게 개선됐다고 보고했다.
  - 또 다른 댓글은 단순히 `llama.cpp` 사용을 추천했다. 이는 소비자 GPU/CPU와 일반적인 GGUF 양자화 모델 워크플로에 최적화된 로컬 추론 스택을 암시한다.

### /r/LocalLlama + /r/localLLM: 예산형 로컬 AI 하드웨어 공급

- **[Chinese Hackers Latest Masterpiece with NVIDIA](https://www.reddit.com/r/LocalLLaMA/comments/1ucokod/chinese_hackers_latest_masterpiece_with_nvidia/)** (Activity: 886): 한 Bilibili 하드웨어 모더는 약 `1 year` 동안 NVIDIA **Tesla V100** 패키지/보드 인터페이스, 즉 `2,963`개 pinout signal을 리버스 엔지니어링하고 이를 **single-slot/half-height “Tesla V100 v4”** PCB로 재구성했으며, **NVLink support**가 `8-way` 구성까지 확장 가능하다고 주장했다 ([post](https://t.bilibili.com/1211458176581369862), [engineer](https://space.bilibili.com/1560089206), [video](https://www.bilibili.com/video/BV13JEa6sEtb/)). 표시 가격은 V100급 하드웨어로는 극히 낮다. `16 GB`가 `1499 RMB`(약 `$220`), `32 GB`가 `3999 RMB`(약 `$590`), NVLink 어댑터가 `2-way`/`8-way`용으로 각각 `199 RMB`/`799 RMB`다. 댓글은 MCIO 스타일 연결로 `4`개 GPU 간 약 `100 GB/s` 대역폭을 제공하는 중국 리버스 엔지니어링 NVLink 어댑터 카드도 언급했다. 주요 기술적 단서는 신뢰성이다. 사용된 V100 BGA 패키지를 재작업하면 인접 **HBM**이 손상될 수 있어 장기 수율과 보증 신뢰성이 핵심 미지수다. 댓글은 리버스 엔지니어링과 소형화 PCB 작업에 대체로 감탄했고, 특히 `4x32 GB` V100 노드를 NVLink로 연결하는 조밀한 다중 GPU/HBM 설정에 관심을 보였다. 한 댓글 작성자는 호환되는 single-slot waterblock이 있다면 `32 GB` 카드를 많이 사겠다고 했고, OP는 이 프로젝트를 공유하는 것이지 홍보나 판매가 아니라고 명확히 했다.
  - 댓글은 중국의 리버스 엔지니어링 **NVIDIA NVLink** 인터커넥트 어댑터를 논의했다. 이는 **MCIO**로 GPU를 연결하는 `4-way` 카드이며, 네 GPU 간 `100 GB/s` 대역폭을 주장한다. 한 사용자는 그 링크 속도에서 네 개의 `32 GB` 카드로 `128 GB` HBM을 모으는 매력을 강조했고, 개발 중인 `8-way` NVLink 가능 어댑터 소문도 언급했다.
  - 냉각과 폼팩터를 둘러싼 하드웨어 개조 관점도 나왔다. 한 댓글은 누군가 **single-slot waterblock**을 만든다면 `32 GB` 카드를 여러 장 사겠다고 했는데, 이는 이런 카드를 한 섀시에 많이 배치할 때 밀도가 제한 요인임을 시사한다.
  - 이 작업이 정말 리버스 엔지니어링인지, 유출된 설계 데이터에 기반한 것인지에 대한 회의도 있었다. 한 댓글은 **V100 SXM PCB files**가 널리 구할 수 있다고 알려져 있다며, 기존 회로도나 보드 파일이 깨끗한 클린룸 리버스 엔지니어링이 아니라 어댑터 작업을 가능하게 했을 수 있다고 지적했다.

- **[been tracking EU DDR5 data for 25 days: Prices are dropping, and the DE vs. NL gap is wild (good news for local LLM builders in EU)](https://www.reddit.com/r/LocalLLaMA/comments/1ucixz9/been_tracking_eu_ddr5_data_for_25_days_prices_are/)** (Activity: 354): OP는 베타 EU RAM/CPU 가격 추적기 [PriceSquirrel](http://www.pricesquirrel.com)이 DE/NL/ES/BE 전역에서 `25`일간 DDR5 키트 가격이 급락했음을 보여준다고 보고했다. 예를 들어 **G.Skill DDR5 Aegis 2x16GB 6000**은 `€579 → €419`(`-28%`), **Kingston FURY Beast RGB 2x16GB 6000**은 `€499 → €369`(`-26%`), **G.Skill Trident Z Neo 2x32GB 6000**은 `€1200 → €927`(`-23%`)이다. 가장 큰 차익거래 격차로 언급된 것은 동일 EAN의 **G.Skill Trident Z5 RGB 2x32GB DDR5-6400**이 NBB Germany에서는 `€799`, Megekko/Azerty Netherlands에서는 `€1180`인 사례다. 독일은 대체로 NL/BE보다 `10–20%` 저렴하다고 OP는 주장하며, **DDR5-6000 2x16GB**가 로컬 LLM 추론의 입문급 “sweet spot”이 되고 있다고 봤다. 댓글은 이 EU 소비자 DDR5 하락세가 미국 registered/server DDR5와 대조된다고 지적했다. 한 추적자는 **64GB DDR5-4800 RDIMM**이 6월 초 `$1530`에서 `$1800`로 올랐고 높은 수준을 유지한다고 봤다. 다른 댓글은 RAM 가격이 게임/워크스테이션 업그레이드 경제성을 전반적으로 왜곡하고 있다고 주장했으며, 한 사용자는 현재 AM5/AM6 플랫폼 업그레이드 비용이 `€2000` 근처인 것을 이전의 `€500` 미만 메모리급 구매와 비교했다.
  - **US registered/server DDR5 RAM**을 추적하는 한 댓글 작성자는 가격이 EU 데스크톱 추세와 반대로 움직인다고 보고했다. `64GB DDR5-4800 RDIMM`은 6월 초 약 **`$1530`에서 `$1800`**로 올랐고 그 수준을 유지하고 있어, 서버급 메모리는 소비자 DDR5와 다른 공급 제약 또는 수요 압력을 받을 수 있음을 시사한다.
  - 로컬 LLM 빌드에 대해 한 사용자는 시스템 RAM에 의존할 경우 **구형 DDR4 워크스테이션/서버 플랫폼이 DDR5 데스크톱보다 더 싸고 빠를 수 있다**고 주장했다. 약 10년 된 **six-channel Xeon DDR4-2400** 설정이 dual-channel **DDR5-7000 desktop**의 메모리 대역폭을 넘을 수 있으며, 모델 레이어를 시스템 RAM에 오프로딩한다면 **PCIe 세대는 메모리 용량/대역폭에 비해 실질적 영향이 거의 없다**고 했다.
  - 독일 특정 부품 가격 추적에 대해 한 댓글은 **Geizhals**를 과거 기술 가격과 소매업체 비교에 흔히 쓰는 출처로 언급했다.

### Less Technical AI Subreddits: Claude ID 인증 출시

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[Anthropic is rolling out identity verification. Updated just yesterday.](https://www.reddit.com/r/ClaudeAI/comments/1uboasr/anthropic_is_rolling_out_identity_verification/)** (Activity: 3429): [image](https://i.redd.it/5blf6lxykm8h1.jpeg)는 Anthropic이 새로 업데이트한 Claude 도움말 페이지 **“Identity verification on Claude”**를 보여준다. 이 페이지는 Anthropic이 남용 방지, 정책 집행, 법적 의무 충족을 위해 특정 사용 사례에 ID 인증을 출시하고 있다고 설명한다. 게시물은 인증이 제3자 제공업체인 **Persona Identities**에 의해 처리되며, 정부 발급 사진 ID와 카메라가 있는 기기가 필요할 수 있다고 강조한다. 아카이브된 지원 페이지는 [here](https://web.archive.org/web/20260415064244/https://support.claude.com/en/articles/14328960-identity-verification-on-claude)에 있다. 상위 댓글은 프라이버시/벤더 신뢰를 중심으로 강하게 부정적이었고, 특히 Persona와 Peter Thiel의 연관성에 반대했다. 몇몇 댓글은 Claude 결제를 중단하겠다고 하거나, 이것이 사용자를 중국/오픈소스 모델로 밀어낼 것이라고 예상했다.
  - 실질적인 프라이버시/보안 스레드는 Anthropic이 신원 인증에 **Persona**를 사용하는 점에 집중했다. 이 흐름은 **정부 사진 ID와 라이브 셀피**, 즉 생체 얼굴 형상 처리를 요구하는 것으로 전해진다. 댓글 작성자들은 해당 정책이 **Free, Pro, Max** 소비자 계정에는 적용되지만 **Team, Enterprise, Platform**에는 적용되지 않는 것으로 보인다며, 고가 소비자 구독자가 직접 영향을 받는다고 지적했다.
  - 기술적으로 중요한 우려 중 하나는 제3자 데이터 처리였다. 댓글은 Persona의 subprocessors에 **AWS, Google, OpenAI, Stripe, Twilio**가 포함된다는 보고를 인용하며, ID/생체 인증 데이터가 Anthropic에만 남는 것이 아니라 더 넓은 벤더 파이프라인을 거칠 수 있음을 시사한다고 했다. 또한 Anthropic 지원 자료가 신원 인증 데이터의 **retention period**를 명확히 지정하지 않는 것으로 보인다고 지적하며, 이를 주요 프라이버시 및 컴플라이언스 공백으로 봤다.
  - 이 스레드는 출시를 더 넓은 플랫폼 리스크 통제와도 연결했다. Anthropic의 명시된 근거는 **실제 서비스에 닿는 에이전트 역량**, 플랫폼 무결성 검사, **EU AI Act** 및 생체정보 프라이버시 법 같은 규제 압력과 관련된 것으로 해석됐다. 그러나 댓글은 인증 트리거가 *“certain capabilities”*, *“platform integrity checks”*처럼 모호하다고 비판하며, 사용자가 언제 민감한 인증을 요구받을지 평가하기 어렵다고 주장했다.

- **[Anthropic is rolling out identity verification for certain capabilities beginning July 8, 2026](https://www.reddit.com/r/singularity/comments/1ubkpe5/anthropic_is_rolling_out_identity_verification/)** (Activity: 1180): **Anthropic**은 Claude 정책 문서를 업데이트해 `July 8, 2026`부터 유효한 **“Verification Data”** 처리를 추가했으며, 이는 Claude의 불특정 “certain capabilities” / “advanced capabilities”에 대한 신원 확인과 연결된다 ([support article](https://support.claude.com/en/articles/14328960-identity-verification-on-claude), [privacy-policy updates](https://privacy.claude.com/en/articles/10301952-updates-to-our-privacy-policy)). 게시물은 인증이 제3자 신원 인증 제공업체인 **Persona**에 의해 처리된다고 하며, 접근 제한 모델 기능을 위해 정부 ID를 수집하는 데 대한 데이터 보관/프라이버시 우려를 제기했다. 댓글은 ID 기반 게이팅에 강하게 반대하며, 결제만으로도 충분한 인증이 되어야 한다고 주장했다. 또한 “advanced capabilities”의 범위가 시간이 지나며 보안 분석, 취약점 발견, 코드 강화 프롬프트 등으로 확장될 수 있다고 경고했다. 여러 댓글은 이를 업계 전반의 추세가 될 가능성이 크다고 봤고, 의무 KYC식 접근 통제를 피하기 위해 오픈소스 모델이 따라잡기를 바랐다.
  - 댓글 작성자들은 이 출시가 Anthropic의 고성능 시스템에 대한 **수출통제 제약**과 관련될 수 있다고 추론하며, 특히 **Mythos**가 **US citizens**로 제한된 것을 언급했다. 우려는 역량이 민감한 것으로 분류될수록 모델 접근이 신원, 국적, 자격 확인을 점점 더 요구할 수 있다는 점이다.
  - 제기된 기술적 우려는 “advanced capabilities”가 취약점 발견, exploit 분석, 코드 강화 같은 보안 관련 워크플로를 포함할 수 있다는 것이다. 이 경우 합법적인 소프트웨어 보안 사용 사례도 ID 인증을 유발할 수 있다. 사용자들은 이 경계가 시간이 지나며 좁은 고위험 기능에서 더 넓은 코딩 또는 분석 기능으로 확장될 수 있다고 걱정했다.
  - 여러 댓글은 Anthropic의 운영 신뢰성과 제품 통제를 비판하며, **silent model performance degradation**, 일관되지 않거나 버그가 있는 토큰 소비 회계, 유료 구독을 Anthropic 자체 애플리케이션 밖에서 사용하는 제한을 언급했다. 한 댓글은 Anthropic이 신원 인증 제공업체로 **Persona**를 선택한 점도 지적했다.

### Less Technical AI Subreddits: Anthropic 프런티어 모델 루머

- **[Claude Sonnet 5 “Fennec” leak 1M context, expected next week](https://www.reddit.com/r/ClaudeCode/comments/1uc1aj4/claude_sonnet_5_fennec_leak_1m_context_expected/)** (Activity: 1823): [image](https://i.redd.it/4ppk5ty2bp8h1.jpeg)는 주황색 배경에 “Claude Sonnet 5”라고 적힌 **홍보 스타일 그래픽**이며, 주장된 유출에 대한 기술적 증거를 제공하지 않는다. 게시물은 Anthropic의 다음 Sonnet 모델, 코드명 **“Fennec”**이 빠르면 다음 주 출시될 수 있으며 `1M` 토큰 컨텍스트 창, 강한 코딩 성능, 빠른 추론, Opus/Fable보다 나은 가격/성능을 제공할 수 있다고 주장하지만 출처나 벤치마크 데이터는 보이지 않는다. 댓글은 유출 신뢰성에 회의적이었다. 예를 들어 *“이 유출이 지금 우리와 같은 방에 있나요?”*, *“OP가 꿈에서 계시받았다”* 같은 반응이 있었다. 다만 한 댓글은 이전 Anthropic Sonnet 모델이 당시 최신 Opus 변형을 능가한 것으로 알려졌다는 점을 들어 최소한 그럴듯하다고 했다.
  - 한 댓글 작성자는 소문난 **Claude Sonnet 5 “Fennec”**이 최소한 그럴듯하다고 주장했다. Anthropic이 올해 초 이미 **Sonnet-tier model**로 당시 최신 Opus를 능가한 전례가 있으므로, 하위 티어 모델이 오래된 플래그십을 넘어서는 것은 선례에 맞는다는 것이다.
  - 또 다른 댓글 작성자는 **“Fennec”**이 새로운 유출이 아니라 오래된 내부 코드명이며, 2월부터 **Sonnet 4.6**을 가리켰다고 주장했다. 그렇다면 이것이 임박한 Sonnet 5 출시를 구체적으로 의미한다는 해석은 약해진다.

- **[Anthropic’s Internal Mythos Successor Emerges](https://www.reddit.com/r/singularity/comments/1ubwtut/anthropics_internal_mythos_successor_emerges/)** (Activity: 1644): 이미지는 **Mythos 5.1** 또는 **Mythos 6**라는 이름일 수 있는, 미출시 “Mythos” 모델의 더 강한 내부 후속 모델을 Anthropic이 학습했다는 **루머**를 확산하는 [Andrew Curran tweet](https://i.redd.it/qrjnoo6zdo8h1.png) 스크린샷이다. 벤치마크, 아키텍처 세부사항, 평가, 출시 계획은 제공되지 않는다. 기술적 의미는 주로 프런티어 연구소가 공개 모델 출시를 보류하는 동안에도 내부 체크포인트를 계속 발전시킬 수 있다는 주장에 있다. 댓글은 대체로 그 주장을 그럴듯한 추측으로 다뤘고, 몇 달이면 또 다른 post-training run이나 심지어 pretraining run도 가능하다고 언급했다. 일부 논의는 접근 제한에 대한 불만으로 확장되며, 금지나 미출시가 가속을 중국, 유럽 또는 GLM 5.2 같은 대안 모델 쪽으로 이동시킬 수 있다고 주장했다.
  - 한 댓글 작성자는 소문난 Anthropic “Mythos successor” 일정이 기술적으로 그럴듯하다고 주장했다. 첫 Mythos 체크포인트가 **January/February** 무렵 존재했다면 약 `5 months`는 또 다른 **post-training run**에 충분하고, 대형 모델의 또 다른 **pretraining run**도 가능할 수 있다는 것이다.

- **[NSA says Mythos broke into almost all of their classified systems in hours, per The Economist](https://www.reddit.com/r/singularity/comments/1ubets2/nsa_says_mythos_broke_into_almost_all_of_their/)** (Activity: 2838): [image](https://i.redd.it/o4nb07y8wj8h1.jpeg)는 “Jimmy Apples”의 X 게시물 스크린샷으로, **The Economist**가 **Mythos**라는 AI 시스템이 **NSA’s classified systems**의 “거의 전부”에 “몇 주가 아니라 몇 시간 만에” 침입했다고 보도했다는 주장이다. Reddit 제목은 이를 NSA 발언처럼 프레이밍한다. 연결된 맥락은 AI/수출통제에 관한 paywalled Economist 브리핑이며, 댓글은 해당 발췌가 독립적으로 입증된 기술적 사고 세부사항을 제공하기보다 AI 통제를 역사적 “military encryption” 통제와 비교하는 것으로 보인다고 지적한다. 댓글은 매우 회의적이었고, 그런 치명적인 NSA 침해가 왜 널리 보도되지 않는지 물으며, 그 주장이 Mythos보다 NSA 보안에 대해 더 많은 것을 말해주는 것 아니냐고 했다. 또한 “Encryption is a potent technology, but narrow in its application”이라는 문구에 대한 반발도 있었다. 사용자들은 어떤 AI도 `AES-128`이나 `RSA-2048`을 무차별 대입으로 깨뜨릴 가능성은 없다고 주장했다. 다른 이들은 이를 AI의 더 넓은 이중용도 범위에 대한 수출통제 비유로 해석했다.
  - 댓글 작성자들은 AI가 *“암호화보다 더 다재다능하다”*는 이유로 수출통제 관련성이 더 크다는 기사 주장의 기술적 프레이밍에 의문을 제기했다. 한 사람은 현대 암호가 원시 AI 탐색으로 깨질 가능성은 없다고 지적했다. *“어떤 AI도 `AES-128`은 물론 `RSA-2048`조차 brute force하지 못한다”*는 것이다. 따라서 주장된 침해가 있었다면 암호 원시 요소를 깨는 것이 아니라 소프트웨어 취약점, 자격 증명 탈취, 잘못된 설정, 사회적/운영적 공격 경로와 관련됐을 가능성이 크다.
  - paywall 맥락을 설명한 한 댓글은 **The Economist**가 “military encryption”에 대한 역사적 수출통제와 현재 AI 수출통제를 비교하며, AI가 암호화보다 더 넓은 이중용도 적용 가능성을 가질 수 있다고 주장한 것 같다고 했다. 기술적 반론은 “encryption”은 좁은 원시 요소인 반면 AI 시스템은 정찰, exploit 생성, 자동화, 패치 분석 전반을 도울 수 있다는 점이다. 그러나 그 차이는 침해 메커니즘이 특정되지 않는 한 모호한 주장을 정당화하지 않는다.

---

## AI Discord Recap

### Discord 접근 종료

- **Discord 접근 종료**: 안타깝게도 오늘 Discord가 접근을 차단했다. 이 형식으로는 다시 가져오지 않을 예정이지만, 곧 새로운 AINews를 출시할 예정이다. 여기까지 읽어줘서 고맙고, 좋은 여정이었다.
