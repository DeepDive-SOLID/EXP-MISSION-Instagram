import { stories } from "./data.js";

// 스토리 이동
export function storybtn() {
  const storyBtns = document.getElementById("story-container");
  const storyLeft = document.getElementById("storyLeft");
  const storyRight = document.getElementById("storyRight");

  storyLeft.addEventListener("click", () => {
    storyBtns.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  });
  storyRight.addEventListener("click", () => {
    storyBtns.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
}

// 스토리 클릭 시 모달창 열기
export function setUpStoryModal() {
  const modal = document.getElementById("storyModal");
  const modalImage = document.getElementById("modalImage");
  const modalUsername = document.getElementById("modalUsername");
  const modalProfile = document.getElementById("modalProfile");
  const closeModal = document.getElementById("closeModal");
  const replyInput = document.getElementById("storyReplyInput");

  document.addEventListener("click", (e) => {
    const storyEl = e.target.closest(".story-item");
    if (storyEl) {
      const index = storyEl.dataset.index;
      const story = stories[index];
      modalImage.src = story.storyImage;
      modalProfile.src = story.image;
      modalUsername.textContent = story.username;
      modal.classList.remove("hidden");
      modalUsername.textContent = story.username;
      replyInput.placeholder = `${story.username}님에게 답장하기...`;
    }
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

// 홈으로 돌아가기
export function setupLogoClick() {
  const miniLogo = document.getElementById("mini-logo");
  const biglogo = document.getElementById("big-logo");
  const homelogo = document.getElementById("home");

  [miniLogo, biglogo, homelogo].forEach((el) => {
    if (el) {
      el.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }
  });
}

// 검색창 열기
export function setupSearchToggle() {
  const searchIcon = document.getElementById("search"); // 검색 버튼 id
  const searchPanel = document.getElementById("searchPanel");

  if (!searchIcon || !searchPanel) return;

  searchIcon.addEventListener("click", () => {
    searchPanel.classList.toggle("hidden");
  });

  // Optional: ESC 눌러서 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchPanel.classList.add("hidden");
    }
  });
}
