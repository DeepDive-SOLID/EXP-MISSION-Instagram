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

// 검색창 열기
export function setupSearchToggle() {
  const searchIcon = document.getElementById("search"); // 검색 버튼 id
  const searchPanel = document.getElementById("searchPanel");

  if (!searchIcon || !searchPanel) return;

  searchIcon.addEventListener("click", () => {
    searchPanel.classList.toggle("hidden");
  });
}

// 유저 검색하기
export function setupSearchFunction() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-list");

  if (!searchInput || !searchList) return;

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();
    searchList.innerHTML = "";

    if (keyword === "") {
      return;
    }

    const filteredUsers = stories.filter((story) =>
      story.username.toLowerCase().includes(keyword)
    );

    if (filteredUsers.length === 0) {
      searchList.innerHTML = `<li>검색 결과가 없습니다.</li>`;
    } else {
      filteredUsers.forEach(({ username, image }) => {
        searchList.innerHTML += `
          <li class="search-user">
            <img src="${image}" alt="${username}" />
            <span>${username}</span>
          </li>
        `;
      });
    }
  });
}

// 좋아요 누르면 채워지기
export function filledHeartIcon() {
  document.addEventListener("click", (e) => {
    const heart = e.target.closest(".heart-icon");
    if (heart) {
      const isFilled = heart.classList.toggle("filled");
      heart.src = isFilled
        ? "/assets/icons/filled_heart.svg"
        : "/assets/icons/heart.svg";

      console.log("현재 이미지:", heart.src);
    }
  });
}
