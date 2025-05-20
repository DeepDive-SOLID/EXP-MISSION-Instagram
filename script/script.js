import {
  renderStories,
  renderFeeds,
  renderRecommendations,
  renderSearchHistory,
} from "./render.js";

import {
  setupLogoClick,
  setupSearchToggle,
  storybtn,
  setUpStoryModal,
} from "./event.js";

document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeeds();
  renderRecommendations();
  renderSearchHistory();

  storybtn();
  setupLogoClick();
  setupSearchToggle();
  setUpStoryModal();
});
