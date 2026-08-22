# 팟캐스트 진행 대본 아티클 작성 가이드

매주 팟캐스트 에피소드 하나에 대응하는 **진행 대본 아티클**을 만드는 워크플로우입니다.
`/knowledge/articles/{slug}` 경로의 탭형 덱(deck) 포맷을 기준으로 합니다.

기준 사례: [ai-native-startup-playbook](../src/pages/knowledge/articles/ai-native-startup-playbook.astro),
[yc-startup-school-2026](../src/pages/knowledge/articles/yc-startup-school-2026.astro)

> 이 문서는 매 회차마다 갱신합니다. 새 에피소드를 만들면서 배운 것 —
> 잘 먹힌 훅의 형태, 실패한 구성, 새로 뚫은 자료 수집 경로 — 을 맨 아래 **회차 로그**에 남기세요.

---

## 0. 이 포맷이 뭔가

방송용 화면 자료 + 사후 아카이브를 겸하는 **한 장짜리 덱**입니다. 블로그 글이 아닙니다.

| | |
|---|---|
| **누가 보나** | 방송 중에는 호스트(진행 참고), 방송 후에는 청취자(복습·출처 확인) |
| **어떻게 쓰나** | 브라우저에 띄워 놓고 탭을 넘기며 진행. 화살표 키로 탭 이동 지원 |
| **원칙** | 메인 라인은 짧고 선명하게. 디테일은 전부 탭·사이드 패널 안에 숨긴다 |

### 편집 3원칙

1. **훅이 먼저다.** 문서 최상단은 "오늘 화면에 띄우고 시작할 문장 하나 또는 이미지 하나".
   설명이 아니라 **공유하고 싶은 것**이어야 한다. 인용구, 스크린샷, 숫자 하나 중 택일.
2. **메인 라인은 단순·명확·재밌게.** 탭 하나당 주장 하나. 한 문장으로 요약되지 않으면 쪼갠다.
3. **디테일은 접는다.** 방송 중에 읽지 않을 정보(연혁, 수치 출처, 배경 맥락, 반박)는
   `context` 사이드 패널이나 별도 탭으로 내린다. 필요할 때만 열어보는 자료다.

---

## 1. 파일 구조

아티클 하나당 세 덩어리입니다.

```text
src/data/{slug}.json                        # 콘텐츠 (전부 여기에)
src/pages/knowledge/articles/{slug}.astro   # 렌더링 + 스타일 (기존 파일 복사해서 시작)
public/assets/articles/{slug}/*.jpg         # 캡처 이미지
```

추가로:

```text
src/pages/knowledge/index.astro             # Articles 섹션에 카드 1개 추가 (필수)
```

`.astro`는 사실상 템플릿입니다. **새 아티클은 기존 `.astro`를 복사해서 import 경로와 제목만
바꾸는 것으로 시작**하고, 구조가 다를 때만 손댑니다. 콘텐츠 작업은 전부 JSON에서 합니다.

### 작업 스크래치 공간

리서치 원본(자막, 메모, 초안)은 `.context/{slug}/`에 둡니다. gitignore 대상이라 커밋되지 않습니다.

```text
.context/{slug}/
├── subs/                  # yt-dlp 원본 srt
├── {video-name}.txt       # 정제된 트랜스크립트
├── research.md            # 웹 리서치 정리
└── outline.md             # 스토리라인 초안
```

---

## 2. JSON 스키마

```jsonc
{
  "event": {
    "name": "아티클 제목",
    "venue": "2026년 8월",              // 시점
    "host": "출처 채널명 · 채널명",
    "talkCount": 3,
    "sourceUrl": "https://...",          // 대표 원본 링크
    "sourceLabel": "출처 한 줄 설명",
    "heroImage": "/assets/articles/{slug}/hero.jpg",
    "heroImageCredit": "이미지 출처",
    "intro": ["리드 문단 2~3개"],
    "hook": {                            // ★ 오늘의 훅 — 가장 중요
      "badge": "오늘의 훅",
      "title": "\"화면에 띄울 한 문장\"",
      "body": "왜 이게 훅인지. 인물 소개 + 맥락 + 왜 지금."
    }
  },

  "runOfShow": {
    "openingScript": ["오프닝에서 실제로 읽을 멘트 5~6줄"],
    "totalMinutes": 62,
    "segments": [{ "slot": "00:00", "min": 6, "label": "세그먼트 설명" }]
  },

  "sessions": [{
    "id": "kebab-case-id",               // 탭 id
    "order": 1,
    "slotMin": 18,                       // 방송에서 배분할 분량
    "title": "원본 영상 제목(영문)",
    "titleKo": "한국어 세션 제목",
    "speaker": "화자명",                  // 탭 라벨로 쓰임 — 짧게
    "role": "직함 · 소속",
    "youtubeId": "영상ID",
    "durationMin": 21,
    "accent": "orange|purple|green|blue", // 세션 색상
    "oneLiner": "이 세션을 한 문장으로",
    "whyFirst": "왜 이 순서에 놓았는지 (진행자용 메모)",
    "links": [{ "label": "유튜브에서 보기 ↗", "url": "..." }],
    "summary": ["무슨 얘기를 했나 — 문단 단위 2~6개"],
    "quotes": [{ "en": "원문", "ko": "번역", "why": "왜 이 문장인지" }],
    "bestQuoteEn": "이 세션 대표 인용구(영문)",
    "bestQuoteKo": "대표 인용구(한국어)",
    "funParts": ["웃기거나 의외인 부분"],
    "slides": [{ "src": "/assets/...", "caption": "12:34 — 캡션" }],
    "discussion": ["방송에서 주고받을 논점"],
    "takeaways": ["청취자가 가져갈 실전 항목"],
    "koreaAngle": "한국 맥락에서 보면 (한 문단)",
    "context": [{                        // ★ 사이드 패널 — 디테일은 여기로
      "badge": "배지 텍스트",
      "title": "패널 제목",
      "body": ["본문 문단들"],
      "note": "각주(선택)",
      "links": [{ "label": "...", "url": "...", "note": "설명(선택)" }]
    }]
  }],

  "themes":   [{ "title": "관통 주제", "body": "설명", "who": ["화자A", "화자B"] }],
  "tensions": [{
    "topic": "쟁점",
    "a": { "who": "화자A", "claim": "주장" },
    "b": { "who": "화자B", "claim": "반대 주장" },
    "ask": "그래서 우리가 물어야 할 질문"
  }],
  "closing":  { "title": "마무리 제목", "points": ["클로징 포인트들"] }
}
```

### 필드별 편집 지침

| 필드 | 지침 |
|---|---|
| `hook.title` | 따옴표 포함 한 문장. 20자 내외. 읽는 순간 "뭐야?" 소리가 나와야 함 |
| `intro` | 3문단 이내. 마지막 문단은 항상 "이 문서가 무엇인지" 설명 |
| `openingScript` | **실제로 읽을 말투**로 씀. 요약문이 아니라 대사 |
| `speaker` | 탭 라벨이므로 성 빼고 짧게. 6자 이내 권장 |
| `quotes[].why` | 이게 있어야 방송에서 쓸 수 있다. 절대 생략 금지 |
| `slides[].caption` | **반드시 `mm:ss —` 로 시작.** 영상 어디서 나온 화면인지 |
| `context` | 여기가 "사이드 탭에 숨기는 디테일"의 자리. 세션당 0~2개 |
| `tensions` | 최소 2개. 대립이 없으면 방송이 밋밋해진다. 억지로 만들지는 말 것 |

`context` 블록이 없는 세션은 JSON에서 `context` 키를 아예 빼면 됩니다
(`.astro`의 `contextById` lookup이 알아서 처리).

---

## 3. 주간 워크플로우

### Step 1 — 소재 확정 (호스트)

호스트가 유튜브 링크 + 러프한 문제의식을 던집니다. 이 단계에서 확인할 것:

- 영상이 2~4개인가? (1개면 얇고, 5개 넘으면 방송 시간에 안 들어감)
- 뉴스 페그(news peg)가 있는가? 인수/발표/논쟁 등 "이번 주에 왜 이 얘기인지"
- 공유하고 싶은 인용구·스크린샷이 이미 머릿속에 있는가? → 그게 훅이다

> **호스트가 준 링크라고 전부 세션이 되는 건 아닙니다.** 트랜스크립트를 읽고
> **주제 관련 발언이 실제로 몇 분어치인지** 먼저 세세요. 0에 가까우면 탭에서 빼고
> 대립 구도 인용 1~2개로 강등하는 게 맞습니다. 호스트에게 "이 영상은 주제 언급이
> 없어서 뺐고, 대신 이 두 인용구만 썼습니다"라고 **명시적으로 보고**하세요.
> 링크를 억지로 세션으로 만들면 방송에서 그 탭이 죽습니다.

### Step 2 — 자막 수집

**절대 직접 받아쓰지 않습니다.** yt-dlp의 자동 생성 자막을 씁니다.

```bash
mkdir -p .context/{slug}/subs && cd .context/{slug}/subs

# 메타데이터 먼저 (제목/채널/업로드일/길이 확인)
yt-dlp --skip-download \
  --print "%(id)s|%(title)s|%(channel)s|%(upload_date)s|%(duration)s|%(view_count)s" \
  "URL1" "URL2"

# 자막 다운로드 (en-orig = 원어 자동자막, 번역본보다 정확)
yt-dlp --skip-download --write-auto-subs --sub-langs "en-orig,en" \
  --sub-format srt --convert-subs srt -o "%(id)s.%(ext)s" "URL"
```

자동 자막은 롤링 윈도우라 같은 문장이 여러 번 반복됩니다. `.context/dedupe_srt.py`로 정리합니다.

```bash
python3 .context/dedupe_srt.py .context/{slug}/subs/{id}.en-orig.srt > .context/{slug}/{name}.txt
```

출력은 `[mm:ss] 문장...` 형태의 30초 단위 문단이라 **인용구에 타임스탬프를 그대로 붙일 수 있습니다.**

> **⚠️ 자동 자막은 고유명사를 거의 항상 깨뜨립니다.** 모델명·회사명·제품명·인명은
> 그대로 믿지 말고 **웹 검색으로 전부 검증**하세요. 실제 사례:
> `earwig / glass wig` → **Project Glasswing**, `56 soul` → **GPT-5.6 Sol**,
> `Groc` → **Grok**, `Enthropic` → **Anthropic**.
> 검증 안 된 고유명사를 인용구에 넣으면 방송에서 그대로 틀립니다.

> **자막이 없거나 막히면:** 절대 Whisper로 직접 만들지 마세요. 시간이 너무 오래 걸립니다.
> 호스트에게 요청하세요. (해당 영상에 수동 자막이 있는지, 다른 소스가 있는지 호스트가 확인해 줌)

### Step 3 — 웹 리서치

트랜스크립트만으로는 부족합니다. 다음을 채웁니다.

- **뉴스 페그의 팩트**: 날짜, 금액, 출처(최초 보도 vs 공식 발표를 구분해서 기록)
- **화자 배경**: 왜 이 사람 말이 무거운지
- **숫자**: 방송에서 읽을 수 있는 구체적 수치. 출처 URL을 반드시 같이 기록
- **반대 의견**: `tensions` 재료

`.context/{slug}/research.md`에 **출처 URL과 함께** 정리합니다. 출처 없는 숫자는 쓰지 않습니다.

#### 접근 제한 목록 (2026-08 기준)

| 소스 | 상태 | 대응 |
|---|---|---|
| YouTube 자동 자막 | ✅ 가능 | `yt-dlp --write-auto-subs` |
| YouTube 썸네일 | ✅ 가능 | `curl https://img.youtube.com/vi/{id}/maxresdefault.jpg` |
| **YouTube 영상 파일** | ❌ **차단됨** (HTTP 403) | 프레임 캡처 불가. **차트·스탯 타일로 대체** (Step 6.5) |
| **X 임베드** | ✅ **가능** | 서버 fetch는 막혔지만 브라우저 위젯은 렌더된다 (Step 6.5) |
| 일반 블로그/뉴스레터 | ✅ 대체로 가능 | WebFetch |
| **X / Twitter** | ❌ **차단됨** (HTTP 402) | **호스트에게 요청** — 본문 텍스트나 스크린샷을 받는다 |
| CNBC, TechCrunch 일부 | ⚠️ 403 간헐 | 다른 매체로 우회 (Yahoo Finance, Axios 등) |
| 유료 뉴스레터 본문 | ⚠️ 부분 공개 | 공개된 요약·인용 범위에서만 사용 |

**X 포스트는 구조적으로 못 가져옵니다.** 필요하면 정리해서 한 번에 요청하세요:

> "다음 X 계정/포스트의 본문이 필요합니다: @xxx의 A 관련 스레드, @yyy의 B 차트.
> 텍스트 붙여넣기 또는 스크린샷 어느 쪽이든 좋습니다."

스크린샷을 받으면 `public/assets/articles/{slug}/`에 넣고 `slides`에 등록합니다.

### Step 4 — 스토리라인 설계

JSON을 쓰기 **전에** `.context/{slug}/outline.md`에 다음을 확정합니다.

1. **훅 한 줄** — 화면에 띄울 문장 또는 이미지
2. **스파인(spine)** — 에피소드 전체를 관통하는 하나의 긴장. 보통 다음 중 하나:
   - **충돌형**: 두 사람이 같은 단어를 정반대로 쓴다
   - **예언형**: 누가 사건 직전에 답을 미리 말해 놨다
   - **자기참조형**: 분석하는 쪽이 스스로 가장 극단적 사례다
3. **3막 구성** — 탭 순서. 보통 `사건(뉴스) → 원리(왜) → 사람(그래서 뭘 할까)`
4. **클로징 질문** — 청취자가 방송 끝나고 스스로에게 물을 한 문장

스파인이 안 잡히면 아직 자료가 부족한 겁니다. JSON을 쓰지 마세요.

### Step 5 — JSON 작성

`outline.md` → `src/data/{slug}.json`.

작성 순서: `event.hook` → `sessions[].quotes` → `sessions[].summary` → `tensions` →
`runOfShow.openingScript` → 나머지.

**인용구를 먼저 고르는 게 핵심입니다.** 좋은 인용구가 없는 세션은 통째로 빼는 게 낫습니다.

### Step 6 — 이미지

슬라이드 발표 영상이면 화면 캡처, 대담 영상이면 차트/스크린샷을 씁니다.

```bash
# 영상에서 특정 시점 캡처 (슬라이드 발표에 유용)
yt-dlp -f "bv*[height<=1080]" -o ".context/{slug}/video.mp4" "URL"
ffmpeg -ss 00:12:34 -i .context/{slug}/video.mp4 -frames:v 1 -q:v 2 \
  public/assets/articles/{slug}/05-caption-slug.jpg
```

파일명은 `NN-설명.jpg` (등장 순서 2자리 + 케밥케이스). 캡션에 타임스탬프를 남기므로
파일명은 내용만 담으면 됩니다.

대담 영상이라 캡처할 화면이 없으면 **직접 만드는 것도 옵션**입니다.
다만 데이터 차트를 만들 때는 항상 호스트에게 먼저 확인받으세요.

### Step 6.5 — 숫자 시각화와 X 임베드 (선택)

대담 영상만 있어서 캡처할 화면이 없을 때, **차트와 X 임베드가 슬라이드를 대신합니다.**

#### 차트

`dataviz` 스킬을 **차트 코드를 쓰기 전에** 읽으세요. 요약하면:

1. **형태를 먼저 정한다** — 크기 비교면 막대, 시간 변화면 선, 헤드라인 숫자 하나면 스탯 타일
2. **색은 마지막에** — 그리고 반드시 검증기를 돌린다

```bash
node <dataviz>/scripts/validate_palette.js "#hex,#hex" --mode dark --surface "#1e1219"
```

사이트 기본색(`--color-orange` 등)은 **다크 모드 명도 밴드(L 0.48–0.67)를 벗어나서 그대로 쓰면 FAIL**입니다.
같은 색상(hue)을 유지한 채 L을 0.63으로 스냅해서 쓰세요. 검증 통과한 2색 세트:

| 역할 | hex | 용도 |
|---|---|---|
| 토큰/지출 | `#da5f00` | 주황 계열. 단일 시리즈 차트 기본값 |
| 기계/인프라 | `#008bf3` | 파랑 계열 |

차트는 **인라인 SVG + CSS width**로 만듭니다. 차트 라이브러리를 쓰지 마세요 —
화면 공유 중에 JS 없이도 숫자가 보여야 합니다. 그리고 **막대마다 값을 직접 라벨링**하세요.

> 함정: 데이터 포인트를 감싸는 wrapper에 `translateY(50%)`를 걸면 wrapper 자식(라벨 등)의
> 높이까지 포함해서 계산되어 **점이 선 아래로 밀립니다.** wrapper는 `width:0;height:0` 앵커로 두고,
> 마커와 라벨을 각각 절대 위치로 매답니다.

렌더한 뒤 **반드시 스크린샷으로 눈으로 확인**하세요. 검증기는 색만 봅니다.

```bash
CH=~/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell
"$CH" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1100,1500 --virtual-time-budget=4000 \
  --screenshot=/tmp/chart.png "http://localhost:4321/knowledge/articles/{slug}/#money"
ffmpeg -y -i /tmp/chart.png -vf "crop=W:H:X:Y" /tmp/crop.png   # 확대해서 확인
```

#### X 임베드 — 못 가져와도 붙일 수는 있다

**중요:** 서버에서 X를 fetch하는 건 막혀 있지만(402), **브라우저에서 렌더되는 공식 임베드는 잘 됩니다.**
포스트 URL만 알면 본문·이미지·차트가 그대로 붙습니다. URL은 웹 검색으로 찾을 수 있습니다
(검색 결과 제목에 본문 앞부분이 들어 있어 fallback 텍스트로도 쓸 수 있습니다).

```html
<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" data-conversation="none">
  <p lang="en" dir="ltr">{위젯이 안 뜰 때 보일 본문}</p>
  <a href="https://twitter.com/{handle}/status/{id}">원문 보기 ↗</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" is:inline></script>
```

두 가지를 꼭 하세요.

1. **fallback 본문을 blockquote 안에 직접 적어라.** 위젯이 차단되면 그게 유일하게 남는 내용입니다.
2. **탭 전환 시 `twttr.widgets.load()`를 다시 호출하라.** `display:none` 패널 안의 임베드는
   폭이 0으로 측정돼서 레이아웃이 깨집니다.

### Step 7 — 페이지 생성 + 등록

```bash
cp src/pages/knowledge/articles/ai-native-startup-playbook.astro \
   src/pages/knowledge/articles/{slug}.astro
```

바꿀 곳:
- `import data from '../../../data/{slug}.json'`
- `<Layout title="..." description="...">`
- 탭 정의(`tabs` 배열)의 첫/마지막 라벨 — 세션 수에 따라 조정
- 하드코딩된 안내 문구(`block-note` 등)

그리고 `src/pages/knowledge/index.astro`의 Articles 섹션에 카드를 **맨 앞에** 추가합니다
(최신순). 썸네일은 `https://img.youtube.com/vi/{youtubeId}/hqdefault.jpg`.

### Step 8 — 검증

```bash
npm run build          # 빌드 통과 확인
npm run dev            # localhost:4321/knowledge/articles/{slug}
```

체크리스트:

- [ ] 탭 전환이 되는가 (화살표 키 포함)
- [ ] 이미지가 전부 뜨는가 (`public/assets/articles/{slug}/` 경로 오타 확인)
- [ ] 유튜브 썸네일이 뜨는가 (`youtubeId` 오타 확인)
- [ ] `quotes[].why`가 전부 채워져 있는가
- [ ] `slides[].caption`이 전부 `mm:ss —`로 시작하는가
- [ ] 숫자에 출처가 있는가 — 없으면 빼거나 `context.links`에 출처를 단다
- [ ] 모바일 폭에서 탭 레일이 스크롤되는가

---

## 4. 품질 기준

### 훅 판정법

훅 문장을 읽고 다음 중 하나가 아니면 다시 고릅니다.

- **놀랍다** — 통념과 반대다
- **구체적이다** — 숫자나 고유명사가 들어 있다
- **인간적이다** — 누가 무엇을 했는지가 보인다

나쁜 예: "AI가 산업을 바꾸고 있다"
좋은 예: "토큰을 더 쓰지 않으면 영구 하층민에서 절대 못 벗어난다"

### 인용구 선별

세션당 6~8개. 다음 우선순위로 고릅니다.

1. 화자가 **자기 이익에 반해서** 한 말 (약점 인정, 실수 고백)
2. **숫자가 들어간** 말
3. 다른 세션 화자와 **정면으로 부딪히는** 말
4. 웃긴 말

### 흔한 실패

| 증상 | 원인 | 처방 |
|---|---|---|
| 메인 라인이 지루하다 | 요약만 하고 주장이 없다 | `tensions`부터 다시 쓴다 |
| 탭이 다 비슷해 보인다 | 세션별 `accent`와 `oneLiner`가 흐리다 | 세션당 주장 하나로 압축 |
| 방송에서 못 썼다 | `openingScript`가 요약문이었다 | 실제 말투로 다시 쓴다 |
| 디테일이 메인을 잡아먹는다 | `context`로 안 내렸다 | 배경·연혁은 전부 사이드 패널로 |

---

## 5. 호스트에게 요청해야 하는 것들

에이전트가 직접 못 하는 일입니다. **한 번에 모아서** 요청하세요.

1. **X 포스트 본문/스크린샷** — 크롤링 차단. 계정과 주제를 특정해서 요청
2. **유료 리포트 원문** — 구독 중인 뉴스레터의 차트/수치
3. **자막이 없는 영상** — 수동 자막 존재 여부 확인
4. **에피소드 길이·순서 확정** — `runOfShow.totalMinutes`, 탭 순서
5. **직접 만든 차트 승인** — 데이터 시각화를 생성할 경우 사전 확인

---

## 6. 회차 로그

새 회차를 만들 때마다 여기에 한 줄씩 추가합니다. 다음 회차가 이걸 읽고 시작합니다.

| 회차 | slug | 스파인 유형 | 배운 것 |
|---|---|---|---|
| — | `yc-startup-school-2026` | 다중 세션 나열 | 9세션은 많다. 진행 대본 탭에 "제일 붙기 좋은 논점"을 따로 뽑아야 방송이 굴러감 |
| — | `ai-native-startup-playbook` | 예언형 (따로 찍힌 두 영상이 같은 그림) | 2세션 + 관통 주제 탭이 가장 균형이 좋음. `context` 사이드 패널을 처음 도입 |
| 2026-08 | `tokens-are-the-new-dollars` | 예언형 (인수 발표 이틀 전 인터뷰가 인수 논리를 다 설명) | **호스트가 준 링크를 그대로 세션으로 만들지 말 것.** 링크 2개 중 1개(Collison YC 대담)는 주제 언급이 0이라 탭에서 빼고 대립 구도 인용 2개로 강등했다. 대신 호스트가 나중에 준 사내 잡담 영상이 "그래서 어떻게 하나"의 유일한 1차 자료라 3막으로 승격. **정제된 인터뷰는 이론, 사내 잡담은 실전 — 후자가 방송에서 더 잘 먹힌다.** 그리고 **yt-dlp 영상 다운로드가 403으로 막혀서** 프레임 캡처를 못 했다 → 대신 `money` 탭(스탯 타일 + 차트 3개)과 X 임베드를 만들었고, 결과적으로 슬라이드보다 나았다. 자막 다운로드는 계속 정상 |
