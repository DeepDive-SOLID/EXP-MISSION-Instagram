let currentStoryIndex = 0;
let currentStoryList = [];
let currentStoryUser = "";
let currentStoryAvatar = "";
let currentStoryTimestamp = new Date();
let autoAdvanceTimer = null;

export const openStoryModal = (storyData) => {
    const modal = document.getElementById("story-modal");
    document.getElementById("story-username").textContent = storyData.username;
    document.getElementById("story-avatar").src = storyData.avatar;
    currentStoryTimestamp = new Date();
    document.getElementById("story-timestamp").textContent = " 방금 전";

    currentStoryIndex = 0;
    currentStoryList = storyData.stories;
    currentStoryUser = storyData.username;
    currentStoryAvatar = storyData.avatar;

    modal.classList.add("active");
    renderProgressBars();
    showStory(currentStoryIndex);
};

const renderProgressBars = () => {
    const container = document.getElementById("story-progress-container");
    container.innerHTML = "";
    currentStoryList.forEach((_, i) => {
        const bar = document.createElement("div");
        bar.className = "story-modal__progress-bar";
        const fill = document.createElement("div");
        fill.className = "story-modal__progress";
        fill.id = `story-progress-${i}`;
        bar.appendChild(fill);
        container.appendChild(bar);
    });
};

const showStory = (index) => {
    if (index < 0 || index >= currentStoryList.length) {
        closeStoryModal();
        return;
    }
    currentStoryIndex = index;
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentStoryList[index];

    currentStoryList.forEach((_, i) => {
        const progress = document.getElementById(`story-progress-${i}`);
        if (progress) {
            progress.style.transition = "none";
            progress.style.width = i < index ? "100%" : "0%";
            void progress.offsetWidth;
        }
    });

    const currentProgress = document.getElementById(`story-progress-${index}`);
    if (currentProgress) {
        currentProgress.style.transition = "width 3s linear";
        currentProgress.style.width = "100%";
    }

    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = setTimeout(() => {
        showStory(currentStoryIndex + 1);
    }, 3000);
};

export const closeStoryModal = () => {
    document.getElementById("story-modal").classList.remove("active");
    clearTimeout(autoAdvanceTimer);
};

export const initStoryModalControls = () => {
    document
        .getElementById("close-story")
        ?.addEventListener("click", closeStoryModal);
    document
        .querySelector(".story-modal__overlay")
        ?.addEventListener("click", closeStoryModal);

    document.getElementById("next-story")?.addEventListener("click", () => {
        showStory(currentStoryIndex + 1);
    });

    document.getElementById("prev-story")?.addEventListener("click", () => {
        showStory(currentStoryIndex - 1);
    });

    document
        .getElementById("story-image-area")
        ?.addEventListener("click", (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x < rect.width / 2) {
                showStory(currentStoryIndex - 1);
            } else {
                showStory(currentStoryIndex + 1);
            }
        });
};
