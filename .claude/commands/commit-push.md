# 커밋 & 푸시

변경사항을 커밋하고 원격 저장소에 푸시합니다.

## 워크플로우

1. **변경사항 확인**
   ```bash
   git status
   git diff
   ```

2. **스테이징**
   ```bash
   git add <파일>
   # 또는 전체
   git add .
   ```

3. **커밋** (Conventional Commits)
   ```bash
   git commit -m "feat: 기능 설명"
   ```

4. **푸시**
   ```bash
   git push origin <브랜치>
   ```

## 커밋 타입

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 (포맷팅)
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드/설정 변경

## 예시

```bash
# 기능 추가
git commit -m "feat: 프로젝트 카드에 호버 효과 추가"

# 버그 수정
git commit -m "fix: 타이핑 애니메이션 무한 루프 해결"

# 스타일 변경
git commit -m "style: 다크 테마 색상 조정"
```
