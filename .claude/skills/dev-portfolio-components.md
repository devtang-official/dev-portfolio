---
name: dev-portfolio-components
description: 컴포넌트 작업 시 적용. Use when creating or modifying React components, Atomic Design pattern.
---

# Dev Portfolio Components Skill

## 개요

이 프로젝트는 **Atomic Design** 패턴을 사용하여 컴포넌트를 계층적으로 구성합니다.

## Atomic Design 레벨

### Atoms (기본 요소)

**위치**: `components/atoms/`

**정의**: 더 이상 분리할 수 없는 최소 UI 단위

**예시**:
- `Button.tsx` - 버튼
- `ProgressBar.tsx` - 프로그레스 바
- `Badge.tsx` - 배지 (미래 확장)

**규칙**:
- Props는 간단하고 명확하게
- 재사용 가능한 최소 단위
- 외부 상태에 의존하지 않음

**템플릿**:
```typescript
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={/* Tailwind */}>
      {children}
    </button>
  );
}
```

### Molecules (조합)

**위치**: `components/molecules/`

**정의**: Atoms를 조합한 단순한 UI

**예시**:
- `SkillCard.tsx` - 스킬 + 프로그레스 바
- `ProjectCard.tsx` - 프로젝트 정보 + 버튼들
- `SocialLinks.tsx` - 소셜 아이콘들 (미래 확장)

**규칙**:
- 2~3개의 Atoms 조합
- 특정 도메인 기능 수행
- 재사용 가능하도록 설계

**예시**:
```typescript
import ProgressBar from '../atoms/ProgressBar';

type SkillCardProps = {
  name: string;
  level: number;
  category: string;
};

export default function SkillCard({ name, level, category }: SkillCardProps) {
  return (
    <div className="p-4 bg-zinc-900 rounded-lg">
      <h3>{name}</h3>
      <p>{category}</p>
      <ProgressBar level={level} />
    </div>
  );
}
```

### Organisms (섹션)

**위치**: `components/organisms/`

**정의**: Molecules와 Atoms를 조합한 복잡한 UI (페이지 섹션)

**예시**:
- `Hero.tsx` - 메인 히어로 섹션
- `SkillsSection.tsx` - 기술 스택 전체 섹션
- `ProjectsSection.tsx` - 프로젝트 쇼케이스 섹션

**규칙**:
- 페이지의 주요 섹션 단위
- 여러 Molecules/Atoms 조합
- 데이터 전달 및 레이아웃 책임

**예시**:
```typescript
import SkillCard from '../molecules/SkillCard';

type Skill = {
  name: string;
  level: number;
  category: string;
};

type SkillsSectionProps = {
  skills: Skill[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-20">
      <h2>기술 스택</h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
```

### Templates (레이아웃)

**위치**: `components/templates/` (미래 확장)

**정의**: 페이지 전체 구조

**예시**:
- `MainLayout.tsx` - 헤더 + 콘텐츠 + 푸터
- `DashboardLayout.tsx` - 사이드바 + 메인

**현재 상태**: 아직 사용 안 함 (Next.js App Router의 `layout.tsx` 사용 중)

## 새 컴포넌트 추가 흐름

### 1단계: 레벨 결정

**질문**: 이 컴포넌트는 어떤 레벨인가?

- 버튼, 입력, 아이콘 → **Atom**
- 카드, 검색바, 메뉴 아이템 → **Molecule**
- 헤더, 섹션, 사이드바 → **Organism**

### 2단계: Props 타입 정의

```typescript
type ComponentNameProps = {
  // 필수 props
  title: string;

  // 선택적 props
  onClick?: () => void;

  // children
  children?: React.ReactNode;
};
```

### 3단계: 컴포넌트 생성

```typescript
export default function ComponentName({
  title,
  onClick,
  children
}: ComponentNameProps) {
  return (
    // JSX
  );
}
```

### 4단계: 클라이언트 컴포넌트 표시

상태나 이벤트 사용 시:
```typescript
'use client';

import { useState } from 'react';
```

## 스타일링 규칙

### Tailwind CSS 사용

```typescript
// ✅ Good - 인라인 클래스
<div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">

// ✅ Good - 조건부
<button className={variant === 'primary' ? 'bg-cyan-500' : 'bg-zinc-800'}>

// ❌ Bad - 동적 클래스 (Tailwind가 감지 못함)
<div className={`bg-${color}-500`}>
```

### 다크 테마 색상

- 배경: `bg-black`, `bg-zinc-900`, `bg-zinc-800`
- 텍스트: `text-white`, `text-zinc-400`, `text-zinc-500`
- 포인트: `text-cyan-400`, `bg-cyan-500`
- 테두리: `border-zinc-800`, `border-cyan-500`

## 성능 최적화

### 메모이제이션

리렌더링 비용이 큰 컴포넌트:
```typescript
import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // ...
});
```

### 동적 import

무거운 컴포넌트:
```typescript
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'));
```

## 현재 컴포넌트 목록

### Atoms
- `Button.tsx` - 버튼 (primary, secondary, ghost)
- `ProgressBar.tsx` - 프로그레스 바 (애니메이션)

### Molecules
- `SkillCard.tsx` - 스킬 카드 (이름, 레벨, 카테고리)
- `ProjectCard.tsx` - 프로젝트 카드 (제목, 설명, 태그, 링크)

### Organisms
- `Hero.tsx` - 히어로 섹션 (타이핑 애니메이션, 소셜 링크)
- `SkillsSection.tsx` - 기술 스택 섹션 (카테고리별 그룹)
- `ProjectsSection.tsx` - 프로젝트 섹션 (그리드 레이아웃)

## 확장 아이디어

### 추가할 만한 Atoms
- `Input.tsx` - 입력 필드
- `Badge.tsx` - 배지
- `Icon.tsx` - 아이콘 래퍼

### 추가할 만한 Molecules
- `ContactForm.tsx` - 연락처 폼
- `SocialLinks.tsx` - 소셜 링크 그룹
- `FilterBar.tsx` - 프로젝트 필터

### 추가할 만한 Organisms
- `ContactSection.tsx` - 연락처 섹션
- `Header.tsx` - 네비게이션 헤더
- `Footer.tsx` - 푸터
