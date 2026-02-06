# Development Workflow

이 문서는 Claude Code가 프로젝트 작업 시 따라야 할 규칙과 워크플로우를 정의합니다.

## 패키지 관리

- **항상 `npm` 사용**
- 절대 yarn, pnpm 등 다른 패키지 매니저 사용 금지
- 의존성 추가: `npm install <package>`
- 의존성 제거: `npm uninstall <package>`

## 개발 순서

변경 사항을 작성한 후 다음 순서로 검증:

1. **린트**: `npm run lint` - 코드 스타일 검사
2. **타입체크**: `npx tsc --noEmit` - TypeScript 타입 검증
3. **빌드**: `npm run build` - 프로덕션 빌드 테스트
4. **개발 서버**: `npm run dev` - 로컬에서 동작 확인

## 코딩 컨벤션

### TypeScript

- **`type` 선호, `interface` 자제**
  ```typescript
  // ✅ Good
  type User = { name: string; age: number };

  // ❌ Avoid
  interface User { name: string; age: number }
  ```

- **`enum` 절대 금지** → 문자열 리터럴 유니온 사용
  ```typescript
  // ❌ Never use enum
  enum Status { Active, Inactive }

  // ✅ Use string literal union
  type Status = 'active' | 'inactive';
  ```

- **`any` 타입 사용 금지**
  - 타입을 모르면 `unknown` 사용
  - 필요시 `Record<string, unknown>` 활용

### React 컴포넌트

- **함수형 컴포넌트만 사용**
- **Props는 항상 type으로 정의**
  ```typescript
  type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
  };

  export default function Button({ variant, children }: ButtonProps) {
    // ...
  }
  ```

- **클라이언트 컴포넌트는 명시적으로 표시**
  ```typescript
  'use client';

  import { useState } from 'react';
  ```

### 스타일링 (Tailwind CSS)

- **인라인 클래스 사용**
- **동적 클래스는 조건부 렌더링 사용**
  ```typescript
  // ✅ Good
  <button className={variant === 'primary' ? 'bg-cyan-500' : 'bg-zinc-800'}>

  // ❌ Avoid template literals for dynamic classes
  <button className={`bg-${variant}-500`}>
  ```

## 프로젝트 구조

```
dev-portfolio/
├── app/                      # Next.js App Router (페이지)
│   ├── page.tsx              # 홈 페이지
│   ├── layout.tsx            # 루트 레이아웃
│   └── globals.css           # 글로벌 스타일
│
├── components/               # Atomic Design 패턴
│   ├── atoms/                # 기본 UI 요소 (Button, Input 등)
│   ├── molecules/            # 조합된 UI (SkillCard, ProjectCard 등)
│   ├── organisms/            # 섹션 단위 (Hero, SkillsSection 등)
│   └── templates/            # 페이지 레이아웃 (미래 확장용)
│
├── domain/                   # 비즈니스 로직 (클린 아키텍처)
│   ├── entities/             # 도메인 엔티티
│   └── usecases/             # 유스케이스
│
├── application/              # 애플리케이션 서비스
│   └── services/             # 애플리케이션 로직
│
├── infrastructure/           # 외부 연동
│   └── api/                  # API 호출, 데이터 소스
│
└── mocks/                    # 목업 데이터
    └── profile.json          # 프로필 데이터
```

### 파일 추가 규칙

- **컴포넌트**: `components/atoms|molecules|organisms/` 에 추가
- **페이지**: `app/` 에 추가 (Next.js App Router)
- **비즈니스 로직**: `domain/` 에 추가
- **API 연동**: `infrastructure/api/` 에 추가
- **테스트 데이터**: `mocks/` 에 추가

## 금지 사항

- ❌ **console.log 사용 금지**
  - 디버깅이 필요하면 적절한 로거 사용

- ❌ **직접 DOM 조작 금지**
  - React 방식(ref, state)으로 처리

- ❌ **절대 경로 없이 상대 경로 import 금지**
  - `@/` alias 사용 (tsconfig.json에 설정됨)
  ```typescript
  // ✅ Good
  import Button from '@/components/atoms/Button';

  // ❌ Bad
  import Button from '../../components/atoms/Button';
  ```

- ❌ **외부 이미지 URL 직접 사용 시 next.config.ts 설정 필수**
  ```typescript
  // next.config.ts
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'example.com' },
    ],
  }
  ```

## Git 커밋 규칙

- **Conventional Commits** 형식 사용
  ```
  feat: 새로운 기능
  fix: 버그 수정
  docs: 문서 변경
  style: 코드 스타일 변경 (포맷팅)
  refactor: 리팩토링
  test: 테스트 추가
  chore: 빌드/설정 변경
  ```

- **커밋 메시지 예시**
  ```
  feat: Hero 섹션에 타이핑 애니메이션 추가

  - useEffect로 텍스트 애니메이션 구현
  - 커서 깜빡임 효과 추가
  ```

## 성능 최적화

- **이미지는 Next.js Image 컴포넌트 사용**
  ```typescript
  import Image from 'next/image';

  <Image src="/photo.jpg" alt="..." width={500} height={300} />
  ```

- **동적 import로 코드 스플리팅**
  ```typescript
  const DynamicComponent = dynamic(() => import('@/components/Heavy'));
  ```

- **클라이언트 컴포넌트 최소화**
  - 상태나 이벤트가 필요할 때만 `'use client'` 사용

## 문제 해결

### 빌드 실패 시
1. `rm -rf .next` - 캐시 삭제
2. `npm run build` - 재빌드

### 타입 에러 시
1. `npx tsc --noEmit` - 상세 에러 확인
2. 타입 정의 수정

### 스타일 적용 안 될 시
1. Tailwind 동적 클래스 사용 확인
2. `globals.css`에 `@import "tailwindcss";` 확인

---

**이 문서는 프로젝트 진화와 함께 업데이트됩니다.**
