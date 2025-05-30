# EXP-MISSION-Instagram

---

### 사용 기술

- HTML, CSS, JavaScript

---

### 구현 기능

- 인스타그램 UI 클론 구현 (스토리, 피드, 탐색, 프로필 구성)
- 반응형 레이아웃 지원 (데스크탑/태블릿/모바일 대응)
- 스토리 클릭 시 프로필과 함께 모달 팝업 표시
- 탐색(Explore) 탭에 무작위 이미지 그리드 자동 렌더링
- 유저명 입력 시 실시간 검색 필터링 기능
- 내 프로필 페이지에서 사용자 정보 및 게시물 목록 확인

---

### 화면

> 전체화면

<table>
  <tr>
    <td><img src="/assets/images/readme/image.png" /></td>
    <td><img src="/assets/images/readme/image-1.png"/></td>
  </tr>
</table>

> 반응형 화면

<table>
<tr>
<td> <img src="/assets/images/readme/image-2.png"></td>
<td> <img src="/assets/images/readme/image-3.png"></td>
<td> <img src="/assets/images/readme/image-4.png"></td>
</tr>
</table>

> 스토리 화면

<table>
<tr>
<td><img src="/assets/images/readme/image-11.png" /></td>
</tr>
<td><img src="/assets/images/readme/image-9.png" /></td>
</table>

> 탐색 화면

<table>
<tr>
<td><img src="/assets/images/readme/image-10.png" /></td>
</tr>
</table>

> 검색 화면

<table>
<tr>
<td><img src="/assets/images/readme/image-8.png" /></td>
<td><img src="/assets/images/readme/image-5.png" /></td>
</tr>
</table>

> 마이페이지 화면

<table>
<tr>
<td><img src="/assets/images/readme/image-6.png" /></td>
</tr>
</table>

---

## 폴더 구조

- `assets/`: 이미지 및 아이콘 리소스 폴더

  - `images/`: 피드, 스토리, 프로필용 이미지들
  - `icons/`: SVG 아이콘 파일 모음

- `script/`: 자바스크립트 기능 모듈화

  - `data.js`: 프로젝트에 사용되는 mock 데이터 정의 (스토리, 피드, 추천 등)
  - `render.js`: DOM 요소에 데이터를 기반으로 렌더링하는 함수들
  - `event.js`: 클릭, 검색 등 사용자 인터랙션 이벤트 처리 함수
  - `script.js`: 페이지 로딩 시 초기 렌더링 및 이벤트 핸들러 연결

- `styles/`: 기능/페이지별 스타일 분리

  - `general.css`: 공통 레이아웃 및 전체 스타일
  - `feed.css`, `story.css`, `explore.css` 등

- `index.html`: 메인 페이지 (피드)
- `explore.html`: 탐색 탭 페이지
- `my_profile.html`: 마이페이지

---

### html

| 파일명            | 설명                                                                             |
| ----------------- | -------------------------------------------------------------------------------- |
| `index.html`      | 메인 피드 페이지. 스토리, 피드, 댓글, 추천 친구, 모달 기능 등을 포함             |
| `explore.html`    | 탐색 탭 페이지. 이미지 게시물이 무작위로 정렬되어 보여지는 그리드 레이아웃 구성  |
| `my_profile.html` | 내 프로필 페이지. 프로필 이미지, 사용자 정보, 게시물 목록 등을 포함한 마이페이지 |

---

### styles

- **general.css** : 전체 스타일
- **nav-menu.css** : 좌측 네비게이션 바 스타일
- **story.css** : 스토리 스타일
- **feed.css** : 피드 콘텐츠 스타일
- **right-panel.css** : 우측 패널 스타일
- **my-profile.css** : 내 프로필 스타일
- **explore.css** : 탐색 스타일

---

### script

주요 기능별 함수 설명

- renderStories()
  : 스토리 데이터를 기반으로 상단 스토리 목록을 생성하여 .story-container에 렌더링

- renderFeeds()
  : 피드 데이터(이미지, 캡션, 좋아요, 댓글 등)를 기반으로 메인 피드 영역 렌더링

- renderRecommendations()
  : 우측 패널의 추천 유저 리스트를 생성 및 렌더링

- renderExploreGrid()
  : 탐색 탭의 게시물을 무작위로 섞어서 그리드 형태로 렌더링

- storybtn()
  : 스토리 영역의 좌우 화살표 클릭 시 스크롤 이동 기능 처리

- setUpStoryModal()
  : 스토리 클릭 시 모달창 열기 및 닫기 기능 연결

- setupSearchToggle()
  : 상단 검색 아이콘 클릭 시 검색 패널 열고 닫기 기능 처리

- setupSearchFunction()
  : 유저명을 입력하면 실시간으로 stories 배열에서 필터링하여 결과를 보여줌

- filledHeartIcon()
  : 좋아요 아이콘 클릭 시 채워진 하트로 변경
