export const storiesData = [
    {
        username: "jiyeon_2",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/story1.jpg", "assets/images/story2.jpg"],
    },
    {
        username: "user2",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/story3.jpg"],
    },
    {
        username: "user3",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user4",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user5",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user6",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user7",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user8",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user9",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
    {
        username: "user10",
        avatar: "assets/images/avatar.png",
        stories: ["assets/images/picture.jpeg"],
    },
];

export const postsData = [
    {
        username: "user1",
        avatar: "assets/images/avatar.png",
        image: "assets/images/picture.jpeg",
        likedBy: "user2",
        likes: 33,
        isLiked: false,
        description: "어제 본 밤하늘",
        time: "30 minutes ago",
        comments: [], // 객체 배열
    },
    {
        username: "user3",
        avatar: "assets/images/avatar.png",
        image: "assets/images/picture.jpeg",
        likedBy: "user1",
        likes: 10,
        isLiked: true,
        description: "별들이 반짝!",
        time: "1 hour ago",
        comments: [{ user: "user2", text: "멋져요!" }],
    },
];

export const suggestionsData = [
    {
        username: "user5",
        avatar: "assets/images/avatar.png",
        info: "Followed by user1 and others",
    },
    {
        username: "user6",
        avatar: "assets/images/avatar.png",
        info: "Followed by user2, user3 and others",
    },
];
