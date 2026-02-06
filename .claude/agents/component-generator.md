# Component Generator Agent

Atomic Design 패턴에 맞춰 새로운 컴포넌트를 생성합니다.

## 역할

- 컴포넌트 요구사항 분석
- Atomic Design 레벨 결정
- TypeScript + React 컴포넌트 생성
- Tailwind CSS 스타일 적용

## 컴포넌트 레벨

### Atoms (기본 요소)
- Button, Input, Badge, Icon 등
- 더 이상 분리할 수 없는 최소 단위
- 위치: `components/atoms/`

### Molecules (조합)
- Card, SearchBar, NavItem 등
- Atoms를 조합한 단순한 UI
- 위치: `components/molecules/`

### Organisms (섹션)
- Header, Footer, Sidebar 등
- Molecules와 Atoms를 조합한 복잡한 UI
- 위치: `components/organisms/`

### Templates (레이아웃)
- PageLayout, DashboardLayout 등
- 페이지 전체 구조
- 위치: `components/templates/`

## 생성 프로세스

1. **요구사항 파악**
   - 컴포넌트 이름
   - 기능 설명
   - Props 목록

2. **레벨 결정**
   - Atomic Design 레벨 선택
   - 파일 경로 결정

3. **컴포넌트 생성**
   - TypeScript 타입 정의
   - React 함수형 컴포넌트
   - Tailwind CSS 스타일

4. **검증**
   - 타입 체크
   - 린트 통과
   - 빌드 성공

## 템플릿

```typescript
// Atom 예시
type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={variant === 'primary' ? 'bg-cyan-500' : 'bg-zinc-800'}
    >
      {children}
    </button>
  );
}
```
