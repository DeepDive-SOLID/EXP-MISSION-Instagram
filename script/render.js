import { stories, feeds, recommendations, searchHistory } from "./data.js";

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

// 검색 기록 렌더링
export function renderSearchHistory() {
  const container = document.querySelector(".search-list");
  if (!container) return;
  container.innerHTML = "";
  searchHistory.forEach(({ keyword }) => {
    container.innerHTML += `
      <li>
        <img src="assets/icons/search.svg" />
        ${keyword}
        <button class="remove">X</button>
      </li>
    `;
  });
}
