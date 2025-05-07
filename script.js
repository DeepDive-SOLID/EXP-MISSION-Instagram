const storyData = [
    {src: 'assets/images/picture.jpeg', username: 'user1', time: '15시간'},
    {src: 'assets/images/picture.jpeg', username: 'user1', time: '3시간'},
    {src: 'assets/images/picture.jpeg', username: 'user1', time: '1시간'}
];

let currentStory = 0;
let interval = null;
let isSearchOpen = false;
const modal = document.getElementById('storiesModal');
const storyImage = document.getElementById('storyImage');
const progressBars = document.getElementById('progressBars');
const closeBtn = document.getElementById('closeModal');
const stories = document.querySelectorAll('.story');
const prevStory = document.getElementById('prevStory');
const nextStory = document.getElementById('nextStory');
const searchBtn = document.querySelector('.sidebar__item img[alt="검색"]');
const sidebar = document.querySelector('.sidebar__content');
const searchPanel = document.getElementById('searchPanel');

// 사이드바 검색 버튼 이벤트
function searchBtnEvent() {
    searchBtn.parentElement.addEventListener('click', () => {
        isSearchOpen = !isSearchOpen;

        if (isSearchOpen) {
            sidebar.classList.add('shrink');
            searchPanel.classList.add('active');
        } else {
            sidebar.classList.remove('shrink');
            searchPanel.classList.remove('active');
        }

        updateLogoEvent();
    });
}

// 사이드바 검색 - 외부 클릭 이벤트
function externalClickEvent(e) {
    if (!isSearchOpen) return;

    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickInsidePanel = searchPanel.contains(e.target);
    const isSearchButton = searchBtn.contains(e.target);

    // 클릭이 내부가 아니고 버튼도 아니면 닫기
    if (!isClickInsideSidebar && !isClickInsidePanel && !isSearchButton) {
        sidebar.classList.remove('shrink');
        searchPanel.classList.remove('active');
        isSearchOpen = false;
        updateLogoEvent();
    }
}

// 프로그레스 바 생성
function renderProgressBars() {
    progressBars.innerHTML = '';
    storyData.forEach((_, i) => {
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        if (i === currentStory) {
            const fill = document.createElement('div');
            fill.className = 'progress-fill';
            bar.appendChild(fill);
        }
        progressBars.appendChild(bar);
    });
}

// 스토리 보여주기
function showStory(index) {
    if (index < 0 || index >= storyData.length) return;
    currentStory = index;
    const story = storyData[currentStory];
    storyImage.src = story.src;
    document.querySelector('.story-username').innerText = story.username;
    document.querySelector('.story-time').innerText = story.time;
    renderProgressBars();
    startTimer();
}

// 시간 체크
function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
        if (currentStory < storyData.length - 1) {
            showStory(currentStory + 1);
        } else {
            closeModal();
        }
    }, 5000);
}

// 스토리 닫기
function closeModal() {
    modal.style.display = 'none';
    clearInterval(interval);
}

// 이전 버튼 이벤트
function prevBtnEvent() {
    if (!prevStory) return;
    prevStory.addEventListener('click', () => {
        if (currentStory > 0) showStory(currentStory - 1);
    });
}

// 다음 버튼 이벤트
function nextBtnEvent() {
    if (!nextStory) return;
    nextStory.addEventListener('click', () => {
        if (currentStory < storyData.length - 1) showStory(currentStory + 1);
    });
}

// 스토리 닫기 버튼 이벤트
function closeBtnEvent() {
    if (!closeBtn) return;
    closeBtn.addEventListener('click', closeModal);
}

// 스토리 버튼 이벤트
function storiesBtnEvent() {
    stories.forEach((el, i) => {
        el.addEventListener('click', () => {
            modal.style.display = 'flex';
            showStory(0);
        });
    });
}

// 로고 반응형 적용
function updateLogoEvent() {
    const logo = document.getElementById('logo');
    const sidebar = document.querySelector('.sidebar__content');
    if (!logo) return;
    if (window.innerWidth <= 1263 || sidebar.classList.contains('shrink')) {
        // 작거나 shrink일 경우 축소 로고
        logo.src = 'assets/icons/logoIcon.svg';
    } else {
        // 넓고 shrink도 아닐 경우 원래 로고
        logo.src = 'assets/icons/logo.svg';
    }
    window.addEventListener('resize', updateLogoEvent);
}


// 좋아요 좋아요 버튼을 클릭 이벤트
function heartEvent() {
    const heart = document.querySelectorAll(".heart-button");
    heart.forEach(button => {
        button.addEventListener("click", function () {
            const img = button.querySelector("img");
            const isLiked = img.getAttribute("src").includes("heart-filled");

            if (isLiked) {
                img.setAttribute("src", "assets/icons/heart.svg");
            } else {
                img.setAttribute("src", "assets/icons/heart-filled.svg");
            }
        });
    });
}

// 댓글 달기 게시 버튼 보여주는 이벤트
function handleCommentEvent() {
    const commentInput = document.querySelector('.post__comment_input');
    const uploadBtn = document.querySelector('.post__comment_btn');

    if (commentInput && uploadBtn) {
        commentInput.addEventListener('input', () => {
            const text = commentInput.value.trim();
            if (text.length > 0) {
                uploadBtn.style.display = 'inline-block';
            } else {
                uploadBtn.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 로고 반응형 적용 이벤트
    window.addEventListener('resize', updateLogoEvent);
    // 외부 클릭 이벤트
    document.addEventListener('click', e => {
        externalClickEvent(e);
    });
    // 사이드바 검색 버튼 이벤트
    searchBtnEvent();
    // 좋아요 버튼을 클릭 이벤트
    heartEvent();
    // 댓글 달기 - 게시 버튼 보여주는 이벤트
    handleCommentEvent();
    // 스토리 버튼 이벤트
    storiesBtnEvent();
    // 스토리 닫기 버튼 이벤트
    closeBtnEvent();
    // 이전 버튼 이벤트
    prevBtnEvent();
    // 다음 버튼 이벤트
    nextBtnEvent();
});
