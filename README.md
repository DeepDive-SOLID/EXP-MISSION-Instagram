# EXP-MISSION-Instagram


## 결과물 화면

### 반응형
| 1024px | 768px | 620px |
|--------|------|------|
|![스크린샷 2025-05-28 160007](https://github.com/user-attachments/assets/9c373e4a-5deb-435e-aa28-7cabb16fb4a8)|![스크린샷 2025-05-28 160149](https://github.com/user-attachments/assets/d0806d51-e640-4858-927d-559da81b201e)|![스크린샷 2025-05-28 160200](https://github.com/user-attachments/assets/089cc02f-fdfa-4c08-9612-ca95fd77a6af)|

### 좋아요
| 누르기 전 | 누른 후 (숫자 증가) |
|--------|------|
|![스크린샷 2025-05-28 160816](https://github.com/user-attachments/assets/b4cc0acc-b00f-4a22-b554-4f3c75f2efe4)|![스크린샷 2025-05-28 160825](https://github.com/user-attachments/assets/05676ccc-14f7-4fe4-b693-fb4ae48fa4ab)|

### 댓글
| 클릭 전 | 클릭 후 | 작성 후 |
|--------|---------|---------|
|![스크린샷 2025-05-28 161216](https://github.com/user-attachments/assets/87294315-75f9-4c11-a540-778b6d2da96d)|![스크린샷 2025-05-28 161225](https://github.com/user-attachments/assets/ca62ee96-d8e5-4223-96cf-9ae1794f6403)|![image](https://github.com/user-attachments/assets/b0c01f23-a548-48b2-9685-71c3ab7255de)|

### 스토리
![image](https://github.com/user-attachments/assets/9d45a0a2-3b8d-48a9-945d-97905008fdf1)

### 검색
![image](https://github.com/user-attachments/assets/1e400158-01fa-451b-bf34-18f6d307fa75)

### 프로필
![image](https://github.com/user-attachments/assets/e38f509e-4357-4b91-874c-3c4f5f3d6ac1)

### 탐색
![image](https://github.com/user-attachments/assets/6262d912-aecf-4306-849a-2fc8496f17f6)



---

### 디렉토리 설명

- `index.html`: 메인 피드 페이지
- `profile.html`: 사용자 프로필 페이지
- `explore.html`: 탐색(Explore) 페이지
- `styles/`: 전역 및 컴포넌트별 CSS 파일
- `assets/`: 아이콘, 유저 이미지 등
- `script/`: JavaScript 로직
  - `main.js`: 초기 렌더링 및 이벤트 바인딩 시작점
  - `data.js`: 스토리, 게시물, 추천 유저 등의 더미 데이터 정의
  - `render.js`: DOM에 데이터를 렌더링하는 함수들
  - `eventListeners.js`: 버튼 클릭, 댓글 입력 등 주요 이벤트 핸들러
  - `storyModal.js`: 스토리 모달 열기/닫기 및 자동 진행 로직

---

## 기능별 주요 함수 설명

### `render.js`

| 함수 | 설명 |
|------|------|
| `renderStories()` | 스토리 목록 렌더링 |
| `renderPosts()` | 게시물 리스트 렌더링 |
| `renderSuggestions()` | 추천 사용자 목록 렌더링 |

### `data.js`

- `storiesData`: 스토리용 더미 데이터
- `postsData`: 게시물용 더미 데이터
- `suggestionsData`: 추천 사용자 더미 데이터

### `eventListeners.js`

| 함수 | 설명 |
|------|------|
| `initLikeButtons()` | 좋아요 버튼 클릭 시 토글 및 카운트 |
| `initCommentInputs()` | 댓글 입력 후 Enter 시 추가 |
| `initCommentToggle()` | 댓글창 열기/닫기 |
| `initSearchEvents()` | 실시간 유저 검색 |
| `initStoryClickEvents()` | 스토리 클릭 시 모달 열기 |

### `storyModal.js`

| 함수 | 설명 |
|------|------|
| `openStoryModal(storyData)` | 스토리 모달 열기 |
| `closeStoryModal()` | 모달 닫기 |
| `initStoryModalControls()` | 모달 버튼 이벤트 초기화 |

---

## 주요 이벤트 흐름

| 이벤트 | 함수 | 설명 |
|--------|------|------|
| 스토리 클릭 | `initStoryClickEvents` → `openStoryModal` | 모달 열기 및 자동 진행 |
| 모달 버튼 클릭 | `initStoryModalControls` | 닫기/다음 등 컨트롤 |
| 좋아요 클릭 | `initLikeButtons` | 하트 토글 및 좋아요 수 변경 |
| 댓글 입력 | `initCommentInputs` | 댓글 추가 및 렌더링 |
| 댓글창 열기 | `initCommentToggle` | 입력창 활성화 |
| 검색 입력 | `initSearchEvents` | 실시간 검색 결과 렌더링 |
