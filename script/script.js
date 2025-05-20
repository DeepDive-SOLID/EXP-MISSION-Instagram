import { renderStories, renderFeeds, renderRecommendations } from "./render.js";

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

  storybtn();
  setupSearchToggle();
  setUpStoryModal();
  setupSearchFunction();
});
