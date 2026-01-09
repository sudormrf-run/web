# Design System

sudoremove.com 디자인 시스템

## Design Principles

1. **다크 테마 우선**: 기술 커뮤니티 특성에 맞는 다크 모드 기본
2. **데이터 중심**: epoch.ai 스타일의 정보 밀도 높은 레이아웃
3. **가독성**: 긴 문서도 편하게 읽을 수 있는 타이포그래피
4. **반응형**: 모바일부터 와이드스크린까지

## Color Palette

### Dark Theme (기본)

```css
:root {
  /* Background */
  --bg-primary: #0a0a0f;      /* 메인 배경 */
  --bg-secondary: #12121a;    /* 카드, 사이드바 */
  --bg-tertiary: #1a1a24;     /* 호버, 강조 영역 */

  /* Text */
  --text-primary: #f5f5f7;    /* 주요 텍스트 */
  --text-secondary: #a1a1aa;  /* 보조 텍스트 */
  --text-muted: #71717a;      /* 비활성 텍스트 */

  /* Accent */
  --accent-primary: #3b82f6;  /* 파랑 - 링크, 버튼 */
  --accent-secondary: #8b5cf6; /* 보라 - 강조 */
  --accent-success: #22c55e;  /* 초록 - 성공 */
  --accent-warning: #f59e0b;  /* 주황 - 경고 */
  --accent-error: #ef4444;    /* 빨강 - 에러 */

  /* Border */
  --border-default: #27272a;
  --border-hover: #3f3f46;
}
```

### Light Theme (선택적)

```css
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f4f4f5;
  --bg-tertiary: #e4e4e7;

  --text-primary: #18181b;
  --text-secondary: #52525b;
  --text-muted: #a1a1aa;

  --border-default: #e4e4e7;
  --border-hover: #d4d4d8;
}
```

## Typography

### Font Stack

```css
:root {
  /* 본문 */
  --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, sans-serif;

  /* 코드 */
  --font-mono: 'JetBrains Mono', 'Fira Code',
               'SF Mono', Consolas, monospace;
}
```

### Type Scale

| 용도 | 크기 | 줄높이 | 굵기 |
|------|------|--------|------|
| Display | 3rem (48px) | 1.1 | 700 |
| H1 | 2.25rem (36px) | 1.2 | 700 |
| H2 | 1.875rem (30px) | 1.25 | 600 |
| H3 | 1.5rem (24px) | 1.3 | 600 |
| H4 | 1.25rem (20px) | 1.4 | 600 |
| Body | 1rem (16px) | 1.6 | 400 |
| Small | 0.875rem (14px) | 1.5 | 400 |
| Caption | 0.75rem (12px) | 1.4 | 400 |

### 한글 최적화

```css
body {
  word-break: keep-all;        /* 한글 단어 단위 줄바꿈 */
  overflow-wrap: break-word;   /* 긴 영문 줄바꿈 */
  letter-spacing: -0.01em;     /* 한글 자간 조정 */
}
```

## Spacing

8px 기반 스케일:

| 이름 | 값 | 용도 |
|------|-----|------|
| xs | 4px | 아이콘 간격 |
| sm | 8px | 인라인 요소 |
| md | 16px | 컴포넌트 내부 |
| lg | 24px | 섹션 간격 |
| xl | 32px | 큰 섹션 |
| 2xl | 48px | 페이지 섹션 |
| 3xl | 64px | 히어로 영역 |

## Layout

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

### Grid System

```css
/* 12 컬럼 그리드 */
.grid {
  display: grid;
  gap: 1.5rem;
}

/* 반응형 카드 그리드 */
.card-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

/* 문서 레이아웃 (사이드바 + 콘텐츠) */
.docs-layout {
  grid-template-columns: 280px 1fr;
}
```

## Components

### Button

```css
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent-primary);
  color: white;
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}
```

### Card

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.card:hover {
  border-color: var(--border-hover);
}
```

### Navigation

```css
.nav-item {
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  border-radius: 0.375rem;
}

.nav-item:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--accent-primary);
  color: white;
}
```

### Table

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-default);
  text-align: left;
}

.table th {
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
}
```

### Code Block

```css
.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
}
```

## Page Templates

### Home Page

```
┌─────────────────────────────────────────────────────────┐
│  Header (Logo, Nav, Language Switcher)                  │
├─────────────────────────────────────────────────────────┤
│  Hero Section                                           │
│  - Headline                                             │
│  - Tagline                                              │
│  - CTA Buttons                                          │
├─────────────────────────────────────────────────────────┤
│  Featured Content (3-4 cards)                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ Latest  │ │ Project │ │ Event   │ │ Video   │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
├─────────────────────────────────────────────────────────┤
│  Knowledge Base Preview                                 │
│  - 최근 문서 목록                                       │
│  - "더 보기" 링크                                       │
├─────────────────────────────────────────────────────────┤
│  YouTube/Media Embed                                    │
│  - 최신 영상 썸네일 그리드                              │
├─────────────────────────────────────────────────────────┤
│  Footer                                                 │
└─────────────────────────────────────────────────────────┘
```

### Knowledge Base

```
┌─────────────────────────────────────────────────────────┐
│  Header                                                 │
├──────────────┬──────────────────────────────────────────┤
│  Sidebar     │  Content                                 │
│  - 카테고리  │  ┌─────────────────────────────────────┐ │
│    - Models  │  │  Breadcrumb                         │ │
│    - Company │  ├─────────────────────────────────────┤ │
│    - People  │  │  Title                              │ │
│    - ...     │  │  Meta (date, tags)                  │ │
│              │  ├─────────────────────────────────────┤ │
│  - 문서 목록 │  │  Content (Markdown rendered)        │ │
│              │  │  - Headers                          │ │
│              │  │  - Tables                           │ │
│              │  │  - Code blocks                      │ │
│              │  │  - Images                           │ │
│              │  ├─────────────────────────────────────┤ │
│              │  │  Related Documents                  │ │
│              │  └─────────────────────────────────────┘ │
├──────────────┴──────────────────────────────────────────┤
│  Footer                                                 │
└─────────────────────────────────────────────────────────┘
```

## Responsive Breakpoints

| 이름 | 너비 | 대상 |
|------|------|------|
| sm | 640px | 모바일 (가로) |
| md | 768px | 태블릿 |
| lg | 1024px | 랩톱 |
| xl | 1280px | 데스크톱 |
| 2xl | 1536px | 와이드스크린 |

## Animation

### Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### Hover Effects

- 카드: border-color 변화
- 링크: color 변화 + underline
- 버튼: background 밝기 변화

## Accessibility

1. **색상 대비**: WCAG AA 기준 충족 (4.5:1 이상)
2. **포커스 표시**: 키보드 내비게이션 가시성
3. **시맨틱 HTML**: 적절한 heading 레벨, landmark
4. **alt 텍스트**: 모든 이미지에 설명 추가
