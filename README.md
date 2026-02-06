# 🌟 개발자 포트폴리오

다크 테마의 현대적인 개발자 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- 🎨 **다크 테마 디자인**: 네온 사이언 컬러 포인트
- ⚡ **타이핑 애니메이션**: 동적인 텍스트 효과
- 📊 **기술 스택 시각화**: 프로그레스 바로 표시
- 🚀 **프로젝트 쇼케이스**: 깔끔한 카드 레이아웃
- 📱 **반응형 디자인**: 모든 디바이스 대응

## 🛠️ 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **아이콘**: Lucide React
- **애니메이션**: Framer Motion
- **상태관리**: Zustand

## 📦 프로젝트 구조

```
dev-portfolio/
├── app/                    # Next.js App Router
├── components/             # Atomic Design 컴포넌트
│   ├── atoms/              # 버튼, 프로그레스 바 등 기본 요소
│   ├── molecules/          # 스킬 카드, 프로젝트 카드 등
│   └── organisms/          # Hero, Skills, Projects 섹션
├── domain/                 # 비즈니스 로직
├── application/            # 애플리케이션 서비스
├── infrastructure/         # 외부 연동
└── mocks/                  # 테스트 데이터
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## ⚙️ 커스터마이징

### 프로필 정보 수정

`mocks/profile.json` 파일을 편집하여 개인 정보를 수정하세요:

```json
{
  "name": "당신의 이름",
  "title": "당신의 직함",
  "bio": "자기소개",
  "skills": [...],
  "projects": [...]
}
```

## 📝 라이센스

MIT License

---

Made with ❤️ by Claude Code
