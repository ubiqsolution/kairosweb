# CLAUDE.md

이 파일은 `kairosweb` 저장소에서 Claude Code가 작업할 때 참고하는 프로젝트 가이드입니다.

## 프로젝트 개요

- **이름**: kairosweb
- **목적**: ubiqsolution 관련 웹 프론트엔드 (React SPA)
- **상태**: Vite 기본 템플릿 기반 초기 단계 (`src/App.jsx`가 데모 페이지 그대로)

## 기술 스택

| 영역 | 사용 기술 | 비고 |
|---|---|---|
| 빌드 도구 | Vite 8 | `vite.config.js` |
| UI 라이브러리 | React 19 + react-dom 19 | StrictMode |
| 라우팅 | react-router-dom 7 | 아직 미적용 |
| 스타일 | Tailwind CSS 4 (`@tailwindcss/vite`) + CSS 변수 | `src/index.css` |
| 애니메이션 | framer-motion 12 | |
| 아이콘 | lucide-react 1.x, `public/icons.svg` (sprite) | |
| HTTP 클라이언트 | axios 1.x | |
| 린트 | ESLint 10 flat config + react-hooks / react-refresh | `eslint.config.js` |
| 언어 | JavaScript + JSX (TypeScript **미사용**) | `@types/react`는 IDE 보조용 |

## 디렉터리 구조

```
.
├── index.html              # Vite 엔트리
├── public/
│   ├── favicon.svg
│   └── icons.svg           # <use href="/icons.svg#..."> 로 참조하는 SVG sprite
├── src/
│   ├── main.jsx            # createRoot + StrictMode
│   ├── App.jsx             # 현재 데모 페이지
│   ├── App.css
│   ├── index.css           # Tailwind import + CSS 변수 (라이트/다크 테마)
│   └── assets/             # 정적 이미지 (hero.png, *.svg)
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 자주 쓰는 명령어

```bash
npm run dev      # 개발 서버 (0.0.0.0:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```

## Vite 서버 설정 (`vite.config.js`)

- `host: '0.0.0.0'` → LAN/외부 접근 가능
- `port: 5173`
- `allowedHosts: ['16005693.ddns.net']` → DDNS 도메인으로 접속 허용

> 외부 도메인을 추가할 일이 있으면 `allowedHosts` 배열에 추가.

## 스타일링 규칙

- **Tailwind 4 (Vite 플러그인 방식)**: `src/index.css` 상단에서 `@import "tailwindcss";` 한 줄로 로드. `tailwind.config.js`는 사용하지 않음 (Tailwind 4 zero-config).
- **CSS 변수**: 색상/폰트/그림자는 `:root`에 정의된 변수 (`--text`, `--bg`, `--accent` 등)를 우선 사용. `prefers-color-scheme: dark` 분기 포함.
- **혼용 가능**: 기존 클래스 셀렉터(`.hero`, `#center` 등)와 Tailwind 유틸리티 (`text-3xl font-bold text-blue-500`) 모두 사용됨. 새 컴포넌트는 Tailwind 유틸리티 우선 권장.

## 코드 컨벤션

- 파일 확장자: 컴포넌트는 `.jsx`, 모듈은 `.js`
- 함수 컴포넌트 + Hooks (클래스 컴포넌트 사용 금지)
- `import` 시 React 19 기준이므로 `import React`는 생략, `useState` 등만 named import
- ESLint의 `react-hooks` 및 `react-refresh` 규칙을 통과해야 함
- 컴포넌트 분리 시 `src/components/` 아래로 폴더 분리 권장 (현재 미존재 → 생성 후 사용)

## 작업할 때 유의사항

1. **TypeScript 미적용** — `.ts/.tsx` 파일을 새로 만들지 말 것. 도입이 필요하면 사용자에게 먼저 확인.
2. **데모 코드 정리** — `src/App.jsx`는 Vite 기본 데모 + ubiqsolution 헤더만 들어가 있는 상태. 실제 페이지 구현 시 데모 섹션(`#next-steps`, `ticks`)은 제거 대상.
3. **react-router-dom 7 적용 시** — `main.jsx`에서 `BrowserRouter`로 래핑하거나 `createBrowserRouter`/`RouterProvider` 패턴 사용.
4. **아이콘** — `public/icons.svg` sprite를 `<use href="/icons.svg#xxx"/>`로 사용 중. 신규 아이콘은 lucide-react 우선 사용 권장.
5. **외부 호스트 접속** — `allowedHosts`에 등록된 도메인 외에는 Vite가 차단함. 새 도메인 추가 시 `vite.config.js` 수정 필요.
6. **빌드 산출물** — `dist/`는 `.gitignore` 대상.

## 검증 체크리스트 (PR 전)

- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] `npm run dev` 로 실제 동작 확인 (라이트/다크 모드 모두)
- [ ] 1024px 이하 반응형 레이아웃 확인 (`src/index.css`에 미디어 쿼리 분기 있음)
