# X(Twitter) Clone Backend

NestJS 기반으로 구현한 X(Twitter) 클론 백엔드 서버입니다.  
회원가입/로그인(JWT 인증)과 게시글 CRUD API를 제공합니다.  

## 🔗 Links
- Frontend Repo: https://github.com/joyunjinis/twitter-clone-frontend.git
- Backend API Server: https://clone-x-backend-production.up.railway.app
> Backend는 API 서버이므로 브라우저에서 직접 접속 시 화면이 표시되지 않을 수 있습니다.

## ⚙️ Features
- 회원가입 API
- 로그인 API(JWT 인증)
- 게시글 API
- 인증 기반 사용자 권한 처리 (Guard)

## 🛠️ Tech Stack
- NestJS
- TypeScript
- MySQL
- JWT Authentication
- TypeORM

## 🔑 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | 회원가입 |
| POST | /users/login | 로그인 |
| POST | /feeds/ | 게시글 추가 |
| GET | /feeds/ | 게시글 조회 |

## 🚀 Getting Started
```bash
yarn start:dev
