import {createSlice} from "@reduxjs/toolkit";
import posts from '../../post-list/posts.json'
import users from '../users.json'

const currentUser = {
    "userId": 1,
    "username": "mma",
    "postPic": "samplepost.webp",
    "profilePic": "default.jpg",
    "email": "abc@gmail.com",
    "phone": 123455,
    "gender": "M",
    "role": "User"
};

const templatePost = {
    ...currentUser,
    "likes": 0
}


function postUser(userId) {
    return users.find((user) => userId === user.userId);
}

function createPosts() {
    let postState = [];
    posts.map((post) => {
        postState.push({...post, ...postUser(post.userId)});
    })
    return postState;
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: {posts: createPosts()},
    reducers: {
        createPost(state, action) {
            state.posts.unshift({
                ...action.payload,
                ...templatePost,
                postId: (new Date()).getTime(),
            })
        },
        deletePost(state, action) {
            const index = state.posts
                .findIndex(post =>
                    post.postId === action.payload);
            state.posts.splice(index, 1);
        },

    }

});

export const {createPost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;
