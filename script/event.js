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
