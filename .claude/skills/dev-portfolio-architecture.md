---
name: dev-portfolio-architecture
description: 프로젝트 아키텍처 작업 시 적용. Use when working with project structure, clean architecture, or folder organization.
---

# Dev Portfolio Architecture Skill

## 개요

이 프로젝트는 **클린 아키텍처 + Atomic Design** 패턴을 결합한 구조입니다.

## 핵심 원칙

### 1. 클린 아키텍처 레이어

```
presentation (components/) → application/ → domain/ → infrastructure/
```

- **Domain**: 비즈니스 로직, 엔티티 (외부 의존성 없음)
- **Application**: 유스케이스, 서비스 (domain 참조)
- **Infrastructure**: 외부 연동 (API, DB 등)
- **Presentation**: UI 컴포넌트 (Atomic Design)

### 2. 의존성 방향

```
components/ (UI)
    ↓
application/ (서비스)
    ↓
domain/ (비즈니스 로직)
    ↑
infrastructure/ (외부 연동)
```

**규칙**: 상위 레이어는 하위 레이어만 참조 가능

## 폴더 구조

```
dev-portfolio/
├── app/                      # Next.js App Router
│   ├── page.tsx              # 홈 페이지
│   └── layout.tsx            # 레이아웃
│
├── components/               # Atomic Design
│   ├── atoms/                # 기본 UI 요소
│   ├── molecules/            # 조합된 UI
│   └── organisms/            # 섹션 단위
│
├── domain/                   # 비즈니스 로직
│   ├── entities/             # 엔티티 (Profile, Project 등)
│   └── usecases/             # 유스케이스
│
├── application/              # 애플리케이션 서비스
│   └── services/             # 프로필 조회, 프로젝트 필터링 등
│
├── infrastructure/           # 외부 연동
│   └── api/                  # API 클라이언트, 저장소
│
└── mocks/                    # 목업 데이터
    └── profile.json          # 테스트 데이터
```

## 파일 추가 규칙

### 새 기능 추가 시

1. **엔티티 정의** (`domain/entities/`)
   ```typescript
   // domain/entities/Profile.ts
   export type Profile = {
     name: string;
     title: string;
     skills: Skill[];
   };
   ```

2. **유스케이스** (`domain/usecases/` - 필요 시)
   ```typescript
   // domain/usecases/FilterProjects.ts
   export function filterProjectsByTag(projects: Project[], tag: string) {
     return projects.filter(p => p.tags.includes(tag));
   }
   ```

3. **서비스** (`application/services/`)
   ```typescript
   // application/services/ProfileService.ts
   import { Profile } from '@/domain/entities/Profile';

   export class ProfileService {
     async getProfile(): Promise<Profile> {
       // ...
     }
   }
   ```

4. **인프라** (`infrastructure/api/`)
   ```typescript
   // infrastructure/api/ProfileRepository.ts
   export class ProfileRepository {
     async fetch(): Promise<Profile> {
       const response = await fetch('/api/profile');
       return response.json();
     }
   }
   ```

5. **컴포넌트** (`components/`)
   - Atomic Design 레벨에 맞춰 추가 (별도 스킬 참조)

## 확장 가이드

### API 연동 추가

현재는 목업 데이터 (`mocks/`) 사용 중.

실제 API 연동 시:
1. `infrastructure/api/` 에 Repository 생성
2. `application/services/` 에서 Repository 사용
3. 컴포넌트는 서비스만 호출

### 새 도메인 추가

예: 블로그 기능 추가 시

```
domain/
  ├── entities/
  │   └── BlogPost.ts         # 엔티티
  └── usecases/
      └── GetRecentPosts.ts   # 유스케이스

application/
  └── services/
      └── BlogService.ts      # 서비스

infrastructure/
  └── api/
      └── BlogRepository.ts   # 저장소

components/
  └── organisms/
      └── BlogSection.tsx     # UI
```

## 주의사항

- ❌ 컴포넌트에서 직접 API 호출 금지
- ❌ infrastructure에서 domain 수정 금지
- ✅ 각 레이어는 자신의 책임만 담당
- ✅ 테스트 시 목업/스텁 쉽게 교체 가능하도록

## 참고

- 현재는 단순한 포트폴리오이므로 엔티티와 컴포넌트가 주요 구조
- 복잡도가 증가하면 유스케이스와 서비스 레이어 활용
