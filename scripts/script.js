const randomImg = [
  "./assets/random/1.jpeg",
  "./assets/random/2.jpeg",
  "./assets/random/3.jpeg",
  "./assets/random/4.jpeg",
  "./assets/random/5.jpeg",
  "./assets/random/6.jpeg",
  "./assets/random/7.jpeg",
  "./assets/random/8.jpeg",
  "./assets/random/9.jpeg",
  "./assets/random/10.jpeg",
  "./assets/random/11.jpeg",
];

const exploreImgContainer = document.querySelector(".explore_main");
const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".searchBtn");
const sidebar = document.querySelector(".sidebar");
const menuName = document.querySelectorAll(".menu_name");
const menu = document.querySelectorAll(".menu");
const story = document.querySelector(".story_img");
const profileFeed = document.querySelector(".profile_grid_feed");
const profileSave = document.querySelector(".profile_grid_save");
const profileTag = document.querySelector(".profile_grid_tag");
const heart = document.querySelector(".heart_toggle");
const logo = document.querySelector(".logo_a");
const logoImg = document.querySelector(".logo_img");

const state = { isOpen: false };
let heartClick = false;

const locationURL = window.location.pathname;

const exploreCreateEl = () => {
  // 배열의 요소를 무작위로 섞기
  const shuffledImg = randomImg.sort(() => Math.random() - 0.5);

  // 섞인 배열의 요소를 하나씩 출력
  shuffledImg.forEach((imgSrc) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img_box");
    const exploreImg = document.createElement("img");
    exploreImg.classList.add("explore_img");
    exploreImg.src = imgSrc;
    imgDiv.append(exploreImg);
    exploreImgContainer.appendChild(imgDiv);
  });
};

const searchBtnEvent = () => {
  searchBtn.addEventListener("click", () => {
    state.isOpen = !state.isOpen;
    menu.forEach((item) => item.classList.toggle("media"));
    menuName.forEach((item) => item.classList.toggle("visibility"));
    searchBar.classList.toggle("activeLeft", state.isOpen);
    searchBar.classList.toggle("activeRight", !state.isOpen);
    if (state.isOpen) {
      logoImg.src = "./assets/instagram-svgrepo-com.svg";
    } else {
      if (window.innerWidth < 1263) {
        return;
      }
      logoImg.src = "./assets/instagram-031f.svg";
    }
  });
};

const logoChange = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1263 || state.isOpen) {
      logoImg.src = "./assets/instagram-svgrepo-com.svg";
    } else {
      logoImg.src = "./assets/instagram-031f.svg";
    }
  });
};
const heartEvent = () => {
  heart.addEventListener("click", () => {
    heartClick = !heartClick;
    heart.src = heartClick ? "./assets/free-icon-heart-1077035.svg" : "./assets/smiley_14272321.svg";
  });
};

window.addEventListener("DOMContentLoaded", () => {
  if (locationURL === "/instagram/explore.html") exploreCreateEl();
  searchBtnEvent();
  heartEvent();
  logoChange();
});
