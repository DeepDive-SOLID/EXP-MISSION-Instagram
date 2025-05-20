import { stories, feeds, recommendations, grids } from "./data.js";

// 스토리 데이터 렌더링
export function renderStories() {
  const container = document.getElementById("story-container");
  if (!container) return;
  container.innerHTML = "";
  stories.forEach(({ username, image }, index) => {
    container.innerHTML += `
      <div class="story-item" data-index="${index}">
        <img src="${image}" alt="${username}" />
        <span class="user-title">${username}</span>
      </div>
    `;
  });
}

//피드 데이터 렌더링
export function renderFeeds() {
  const container = document.querySelector(".feed");
  if (!container) return;
  container.innerHTML = "";
  feeds.forEach(
    ({ username, profile, image, caption, likes, comments, timestamp }) => {
      const commentHTML = comments
        .map(
          (c) => `
      <span class="comment-user">${c.user}</span>
      <span class="comment-text">${c.text}</span>
    `
        )
        .join("");
      container.innerHTML += `
      <div class="feed-container">
        <div class="feed-header">
          <img src="${profile}" alt="${username}" />
          <span class="user-title">${username}</span>
          <span class="dot">·</span>
          <span class="timestamp">${timestamp}</span>
          <img src="assets/icons/more.svg" alt="More" class="more-icon" />
        </div>
        <div class="feed-image">
          <img src="${image}" alt="Feed image" />
        </div>
        <div class="feed-bottom">
          <div class="feed-icons">
            <img src="assets/icons/heart.svg" alt="Like" />
            <img src="assets/icons/comment.svg" alt="Comment" />
            <img src="assets/icons/send.svg" alt="Send" />
            <img src="assets/icons/bookmark.svg" alt="Bookmark" />
          </div>
          <div class="feed-likes">
            <span class="likes-count">${likes.toLocaleString()}</span>명이 좋아합니다.
          </div>
          <div class="feed-caption">
            <span class="caption-user">${username}</span>
            <span class="caption-text">${caption}</span>
          </div>
          <div class="feed-comments">${commentHTML}</div>
          <div class="feed-add-comment">
            <input type="text" placeholder="댓글 달기..." />
            <button class="send-comment">게시</button>
          </div>
        </div>
      </div>
    `;
    }
  );
}

// 추천 사용자 데이터 렌더링
export function renderRecommendations() {
  const container = document.querySelector(".recommend-list");
  if (!container) return;
  container.innerHTML = "";
  recommendations.forEach(({ id, name, image }) => {
    container.innerHTML += `
      <div class="recommend-item">
        <img src="${image}" alt="${id}" />
        <div>
          <span class="recommend-id">${id}</span>
          <span class="recommend-name">${name}</span>
        </div>
        <button class="follow-button">팔로우</button>
      </div>
    `;
  });
}

// 게시물 랜덤 생성
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// 그리드 데이터 렌더링
export function renderExploreGrid() {
  const container = document.getElementById("exploreGrid");
  const shuffledImages = shuffle([...grids]); // 원본 유지

  shuffledImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "explore post";
    container.appendChild(img);
  });
}
