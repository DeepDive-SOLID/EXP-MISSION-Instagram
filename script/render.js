import { storiesData, postsData, suggestionsData } from "./data.js";
import { initStoryClickEvents } from "./eventListeners.js";

export const renderStories = () => {
    const container = document.querySelector(".stories__content");
    container.innerHTML = "";
    storiesData.forEach((story) => {
        container.innerHTML += `
        <button class="story">
            <div class="story__avatar">
            <div class="story__border">
                <svg width="64" height="64"><circle r="31" cy="32" cx="32" /></svg>
            </div>
            <div class="story__picture">
                <img src="${story.avatar}" alt="${story.username}" />
            </div>
            </div>
            <span class="story__user">${story.username}</span>
        </button>
    `;
    });

    initStoryClickEvents();
};

export const renderPosts = () => {
    const container = document.querySelector(".posts");
    container.innerHTML = "";

    postsData.forEach((post, index) => {
        const heartIcon = post.isLiked
            ? "assets/icons/heart-filled.svg"
            : "assets/icons/heart.svg";
        const likeCount = post.isLiked ? post.likes + 1 : post.likes;

        container.innerHTML += `
        <article class="post" data-index="${index}">
            <div class="post__header">
            <div class="post__profile">
                <a href="#" class="post__avatar"><img src="${
                    post.avatar
                }" /></a>
                <a href="#" class="post__user">${post.username}</a>
            </div>
            <button class="post__more-options"><img src="assets/icons/more.svg" /></button>
            </div>
            <div class="post__content">
            <div class="post__medias">
                <img class="post__media" src="${post.image}" />
            </div>
            </div>
            <div class="post__footer">
            <div class="post__buttons">
                <button class="post__button like-button">
                <img src="${heartIcon}" alt="heart" />
                </button>
                <button class="post__button comment-button"><img src="assets/icons/comment.svg" /></button>
                <button class="post__button post__button--align-right"><img src="assets/icons/bookmark.svg" /></button>
            </div>
            <div class="post__infos">
                <div class="post__likes">
                <a class="post__likes-avatar"><img src="${post.avatar}" /></a>
                <span>
                    Liked by <a class="post__name--underline">${
                        post.likedBy
                    }</a>
                    and <a><span class="likes-count">${likeCount}</span> others</a>
                </span>
                </div>
                <div class="post__description">
                <span><a class="post__name--underline">${post.username}</a> ${
            post.description
        }</span>
                </div>
                <span class="post__date-time">${post.time}</span>
                <div class="post__comments">
                ${post.comments
                    .map(
                        (comment) => `
                    <div class="post__comment">
                    <a class="post__name--underline">${comment.user}</a> ${comment.text}
                    </div>
                `
                    )
                    .join("")}
                </div>
                <div class="post__add-comment">
                <input
                    type="text"
                    class="comment-input"
                    placeholder="Add a comment..."
                    data-index="${index}"
                />
                </div>
            </div>
            </div>
        </article>
    `;
    });
};

export const renderSuggestions = () => {
    const container = document.querySelector(".side-menu__suggestions-content");
    container.innerHTML = "";
    suggestionsData.forEach((suggestion) => {
        container.innerHTML += `
        <div class="side-menu__suggestion">
            <a class="side-menu__suggestion-avatar"><img src="${suggestion.avatar}" /></a>
            <div class="side-menu__suggestion-info">
            <a>${suggestion.username}</a>
            <span>${suggestion.info}</span>
            </div>
            <button class="side-menu__suggestion-button">Follow</button>
        </div>
    `;
    });
};
