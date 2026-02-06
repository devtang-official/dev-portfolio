# 개발 서버 실행

Next.js 개발 서버를 시작합니다.

## 실행

```bash
npm run dev
```

## 기능

- 핫 리로드 (파일 변경 시 자동 새로고침)
- 빠른 리프레시 (React Fast Refresh)
- 타입 에러 실시간 표시

## 접속

- URL: http://localhost:3000
- 종료: `Ctrl + C`

## 문제 해결

포트가 이미 사용 중인 경우:
```bash
# 프로세스 확인
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```
