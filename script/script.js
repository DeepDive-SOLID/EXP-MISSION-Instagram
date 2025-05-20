import {
  renderStories,
  renderFeeds,
  renderRecommendations,
  renderExploreGrid,
} from "./render.js";

import {
  setupSearchToggle,
  storybtn,
  setUpStoryModal,
  setupSearchFunction,
} from "./event.js";

document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeeds();
  renderRecommendations();
  renderExploreGrid();

  storybtn();
  setupSearchToggle();
  setUpStoryModal();
  setupSearchFunction();
});
