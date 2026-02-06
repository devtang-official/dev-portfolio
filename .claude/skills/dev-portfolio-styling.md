---
name: dev-portfolio-styling
description: 스타일링 작업 시 적용. Use when working with Tailwind CSS, dark theme, or visual design.
---

# Dev Portfolio Styling Skill

## 개요

이 프로젝트는 **Tailwind CSS v4**와 **다크 테마**를 사용합니다.

## 다크 테마 디자인 시스템

### 색상 팔레트

#### 배경
```
bg-black         # 메인 배경 (#000000)
bg-zinc-900      # 카드 배경 (#18181b)
bg-zinc-800      # 호버/강조 (#27272a)
```

#### 텍스트
```
text-white       # 주요 텍스트 (#ffffff)
text-zinc-400    # 보조 텍스트 (#a1a1aa)
text-zinc-500    # 비활성 텍스트 (#71717a)
```

#### 포인트 컬러 (네온 시안)
```
text-cyan-400    # 포인트 텍스트 (#22d3ee)
bg-cyan-500      # 포인트 배경 (#06b6d4)
border-cyan-500  # 포인트 테두리
```

#### 테두리
```
border-zinc-800  # 기본 테두리
border-zinc-700  # 강조 테두리
border-cyan-500  # 호버/활성 테두리
```

### 타이포그래피

```
text-6xl md:text-8xl  # 메인 타이틀 (Hero)
text-4xl md:text-5xl  # 섹션 타이틀
text-2xl md:text-3xl  # 서브 타이틀
text-xl               # 본문 강조
text-lg               # 본문
text-sm               # 작은 텍스트
text-xs               # 캡션
```

### 간격

```
py-20    # 섹션 간격 (수직)
px-6     # 섹션 간격 (수평)
gap-4    # 그리드/플렉스 간격
mb-4     # 마진 (하단)
p-4      # 패딩 (전체)
```

## Tailwind CSS 사용 규칙

### ✅ 올바른 사용

#### 1. 인라인 클래스
```typescript
<div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
```

#### 2. 조건부 클래스
```typescript
<button className={variant === 'primary' ? 'bg-cyan-500' : 'bg-zinc-800'}>

// 또는 여러 조건
<button className={`
  px-6 py-3 rounded-lg
  ${variant === 'primary' ? 'bg-cyan-500 text-white' : 'bg-zinc-800 text-zinc-300'}
  ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
`}>
```

#### 3. 반응형 디자인
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<h1 className="text-4xl md:text-6xl lg:text-8xl">
```

#### 4. 호버/포커스 효과
```typescript
<button className="hover:bg-zinc-700 hover:border-cyan-500 transition-all duration-300">

<a className="hover:text-cyan-400 transition-colors">
```

### ❌ 잘못된 사용

#### 1. 동적 클래스 이름
```typescript
// ❌ Bad - Tailwind가 감지 못함
<div className={`bg-${color}-500`}>

// ✅ Good - 명시적 조건
<div className={color === 'cyan' ? 'bg-cyan-500' : 'bg-zinc-500'}>
```

#### 2. 인라인 스타일
```typescript
// ❌ Bad
<div style={{ backgroundColor: '#000' }}>

// ✅ Good
<div className="bg-black">
```

## 애니메이션

### 호버 효과

```typescript
// 스케일
<button className="hover:scale-105 transition-all duration-300">

// 테두리
<div className="border border-zinc-800 hover:border-cyan-500 transition-all">

// 색상 변경
<a className="text-zinc-400 hover:text-white transition-colors">
```

### 타이핑 애니메이션 (Hero)

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function TypingAnimation({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
```

### 프로그레스 바 애니메이션

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar({ level }: { level: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full bg-zinc-800 rounded-full h-2">
      <div
        className="h-full bg-cyan-500 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
```

## 레이아웃 패턴

### 섹션 레이아웃
```typescript
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-4">
      섹션 타이틀
    </h2>
    <p className="text-zinc-400 mb-12">
      섹션 설명
    </p>

    {/* 콘텐츠 */}
  </div>
</section>
```

### 카드 레이아웃
```typescript
<div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-500 transition-all">
  <h3 className="text-xl font-bold text-white mb-2">제목</h3>
  <p className="text-zinc-400 mb-4">설명</p>
  {/* 추가 콘텐츠 */}
</div>
```

### 그리드 레이아웃
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### 플렉스 레이아웃
```typescript
<div className="flex gap-4 items-center justify-between">
  <div>왼쪽</div>
  <div>오른쪽</div>
</div>
```

## 반응형 디자인

### 브레이크포인트

```
sm: 640px   # 모바일 (세로)
md: 768px   # 태블릿
lg: 1024px  # 데스크톱
xl: 1280px  # 와이드 데스크톱
2xl: 1536px # 초와이드
```

### 예시

```typescript
// 모바일: 1열, 태블릿: 2열, 데스크톱: 3열
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// 모바일: 작은 텍스트, 데스크톱: 큰 텍스트
<h1 className="text-4xl md:text-6xl lg:text-8xl">

// 모바일: 숨김, 데스크톱: 표시
<div className="hidden lg:block">

// 모바일: 세로, 데스크톱: 가로
<div className="flex flex-col md:flex-row gap-4">
```

## 성능 최적화

### CSS 최소화

Tailwind는 사용된 클래스만 번들에 포함:
- 사용하지 않는 클래스는 자동 제거 (Purge)
- 동적 클래스는 감지 안 됨 → 명시적으로 작성

### 글로벌 스타일 (최소화)

`app/globals.css`에는 Tailwind import와 CSS 변수만:
```css
@import "tailwindcss";

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

## 접근성

### 색상 대비

- 텍스트: 최소 4.5:1 대비율
- 큰 텍스트: 최소 3:1 대비율

현재 팔레트는 WCAG AA 기준 충족:
- white on black: 21:1 ✅
- cyan-400 on black: 10.8:1 ✅
- zinc-400 on black: 6.9:1 ✅

### 포커스 상태

```typescript
<button className="focus:outline-none focus:ring-2 focus:ring-cyan-500">
```

## 디자인 확장 가이드

### 라이트 모드 추가 (미래)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --background: #ffffff;
    --foreground: #171717;
  }
}
```

### 다른 포인트 컬러

사이언 외에 다른 색상:
- Emerald: `text-emerald-400`, `bg-emerald-500`
- Purple: `text-purple-400`, `bg-purple-500`
- Pink: `text-pink-400`, `bg-pink-500`
