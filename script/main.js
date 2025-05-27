import { renderStories, renderPosts, renderSuggestions } from "./render.js";
import {
    initSearchEvents,
    initLikeButtons,
    initCommentInputs,
    initCommentToggle,
    initStoryClickEvents,
} from "./eventListeners.js";
import { initStoryModalControls } from "./storyModal.js";

document.addEventListener("DOMContentLoaded", () => {
    renderStories();
    renderPosts();
    renderSuggestions();

    initSearchEvents();
    initLikeButtons();
    initCommentInputs();
    initCommentToggle();
    initStoryClickEvents();
    initStoryModalControls();
});
