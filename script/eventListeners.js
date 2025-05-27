import { postsData, storiesData, suggestionsData } from "./data.js";
import { openStoryModal } from "./storyModal.js";

export const initLikeButtons = () => {
    document.querySelectorAll(".like-button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const post = postsData[index];
            const img = button.querySelector("img");
            const likesCountEl = button
                .closest(".post")
                .querySelector(".likes-count");

            post.isLiked = !post.isLiked;
            img.setAttribute(
                "src",
                post.isLiked
                    ? "assets/icons/heart-filled.svg"
                    : "assets/icons/heart.svg"
            );

            const updatedCount = post.isLiked ? post.likes + 1 : post.likes;
            likesCountEl.textContent = updatedCount;
        });
    });
};

export const initCommentInputs = () => {
    document.querySelectorAll(".comment-input").forEach((input) => {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && input.value.trim() !== "") {
                const index = parseInt(input.dataset.index);
                const commentText = input.value.trim();

                postsData[index].comments.push({
                    user: "jiyeon_2",
                    text: commentText,
                });

                input.value = "";
                location.reload(); // 단순 예시: renderPosts() 호출 위치에 따라 변경 가능
            }
        });
    });
};

export const initCommentToggle = () => {
    document.querySelectorAll(".comment-button").forEach((button, index) => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const post = button.closest(".post");
            const inputWrapper = post.querySelector(".post__add-comment");
            hideAllCommentInputs();
            inputWrapper.classList.add("active");
            inputWrapper.querySelector("input").focus();
        });
    });

    document.querySelectorAll(".post__add-comment").forEach((input) => {
        input.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });
};

export const hideAllCommentInputs = () => {
    document.querySelectorAll(".post__add-comment").forEach((input) => {
        input.classList.remove("active");
    });
};

export const initStoryClickEvents = () => {
    document.querySelectorAll(".story").forEach((storyBtn, index) => {
        storyBtn.addEventListener("click", () => {
            const storyData = storiesData[index];
            openStoryModal(storyData);
        });
    });
};

export const initSearchEvents = () => {
    const searchInput = document.querySelector(".header__search input");
    const searchResults = document.getElementById("search-results");

    const usernames = Array.from(
        new Set([
            ...storiesData.map((s) => s.username),
            ...postsData.map((p) => p.username),
            ...suggestionsData.map((s) => s.username),
        ])
    );

    searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value.trim().toLowerCase();
        if (!keyword) {
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
            return;
        }
        const matched = usernames.filter((name) =>
            name.toLowerCase().includes(keyword)
        );
        if (matched.length === 0) {
            searchResults.style.display = "none";
            searchResults.innerHTML = "";
            return;
        }
        searchResults.innerHTML = matched
            .map((name) => {
                const avatar =
                    storiesData.find((s) => s.username === name)?.avatar ||
                    postsData.find((p) => p.username === name)?.avatar ||
                    suggestionsData.find((s) => s.username === name)?.avatar ||
                    "assets/images/avatar.png";
                return `<li><img src="${avatar}" class="search-avatar" alt="avatar"> ${name}</li>`;
            })
            .join("");
        searchResults.style.display = "block";
    });

    searchResults.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        if (li) {
            const selectedUser = li.textContent.trim();
            searchInput.value = selectedUser;
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
            const storyData = storiesData.find(
                (s) => s.username === selectedUser
            );
            if (storyData) {
                openStoryModal(storyData);
            }
        }
    });
};
