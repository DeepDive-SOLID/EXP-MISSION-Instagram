import { renderStories, renderFeeds, renderRecommendations } from "./render.js";

import {
  setupLogoClick,
  setupSearchToggle,
  storybtn,
  setUpStoryModal,
  setupSearchFunction,
} from "./event.js";

document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeeds();
  renderRecommendations();

  storybtn();
  setupLogoClick();
  setupSearchToggle();
  setUpStoryModal();
  setupSearchFunction();
});
