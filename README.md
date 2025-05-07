# EXP-MISSION-Instagram

# 미션
- HTML, CSS, JavaScript를 사용
- 게시물 목록, 좋아요 버튼, 댓글 섹션 등을 포함
- 반응형 웹 UI 구현
- 스토리 기능 추가
- 검색창 구현
- 탐색 페이지 구현
- 프로필 화면 구현

# 결과물

## 홈
### 반응형
| ![image](https://github.com/user-attachments/assets/cfe05038-a21f-42fe-83de-93f8dc0e4e1b) | ![image](https://github.com/user-attachments/assets/86b82476-5623-4bd9-b753-5112c0fe22f8) | ![image](https://github.com/user-attachments/assets/d49212b3-01e8-4ff0-a7f2-5230ea914dcd) | ![image](https://github.com/user-attachments/assets/2dbf7f08-176d-438b-873d-0ec0fcf6ecbc) |
|:-------------------------:|:-------------------------:|:-------------------------:|:---------------------:|
| screen >= 1264px | 1264px > screen >= 1024px | 1024px >= screen > 768px |    768px >= screen    |

### 좋아요
![image](https://github.com/user-attachments/assets/b368c40d-547c-42ea-9c49-bdd67525762a)

### 댓글
| ![image](https://github.com/user-attachments/assets/9d789684-8d92-4499-b3cc-e853d0c4d11e) | ![image](https://github.com/user-attachments/assets/4a3fc47c-7840-469b-91fd-12cfa2ebcce3) |
|:-----------:|:----------:|
| 댓글 작성 전 | 댓글 작성 후 |

## 검색 
| ![image](https://github.com/user-attachments/assets/cfe05038-a21f-42fe-83de-93f8dc0e4e1b) | ![image](https://github.com/user-attachments/assets/942b4df4-b65c-495b-b79c-9cb189ea5cf6) |
|:-----------:|:----------:|
| 검색 버튼 누르기 전 | 검색 버튼 누른 후 |

## 스토리
| ![GIF 2025-05-19 오후 7-04-46](https://github.com/user-attachments/assets/1e63fe3d-e05e-43c8-a754-f53fc115aee3) | ![GIF 2025-05-19 오후 7-13-53](https://github.com/user-attachments/assets/927611c7-6e75-4651-a8f5-a6339e8b30ca) |
|:-----------:|:----------:|
| screen > 768px | 768px >= screen |

## 탐색
![image](https://github.com/user-attachments/assets/56c75343-a075-4960-91ab-c964b86edd0e)

## 프로필
![image](https://github.com/user-attachments/assets/50858d8f-4385-47e4-a27f-0b63ec3ff156)

# 디렉토리 구조
- [assets](assets)
  - [icons](assets/icons) &rarr; 아이콘
  - [images](assets/images) &rarr; 이미지
  - [favicon.svg](assets/favicon.svg) &rarr; 파비콘
- [styles](styles)
  - [general.css](styles/general.css) &rarr; 공통 스타일
  - [header.css](styles/header.css) &rarr; 헤더 스타일
  - [sidebar.css](styles/sidebar.css) &rarr; 사이드바 스타일
  - [main.css](styles/main.css) &rarr; 홈 화면 스타일
  - [side.css](styles/side.css) &rarr; 홈 화면 오른쪽 사이드 스타일
  - [profile.css](styles/profile.css) &rarr; 프로필 화면 스타일
  - [explore.css](styles/explore.css) &rarr; 탐색 화면 스타일
- [scripts](scripts) &rarr; 스크립트
- [index.html](index.html) &rarr; 홈 화면
- [profile.html](profile.html) &rarr; 프로필 화면
- [explore.html](explore.html) &rarr; 탐색 화면

# script.js
- updateLogoEvent() &rarr; 로고 반응형 적용 이벤트
- externalClickEvent() &rarr; 외부 클릭 이벤트
- searchBtnEvent() &rarr; 사이드바 검색 버튼 이벤트
- heartEvent() &rarr; 좋아요 좋아요 버튼을 클릭 이벤트
- handleCommentEvent() &rarr; 댓글 달기 - 게시 버튼 보여주는 이벤트
- storiesBtnEvent() &rarr; 스토리 버튼 클릭 이벤트
- closeBtnEvent() &rarr; 스토리 닫기 버튼 클릭 이벤트
- prevBtnEvent() &rarr; 이전 버튼 클릭 이벤트
- nextBtnEvent() &rarr; 다음 버튼 클릭 이벤트
