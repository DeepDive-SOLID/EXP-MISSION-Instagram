const storyContainer = document.getElementById("story-container");
const leftBtn = document.querySelector(".story-arrow.left");
const rightBtn = document.querySelector(".story-arrow.right");

leftBtn.addEventListener("click", () => {
  storyContainer.scrollBy({ left: -150, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  storyContainer.scrollBy({ left: 150, behavior: "smooth" });
});
