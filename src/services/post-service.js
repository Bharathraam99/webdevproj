import axios from "axios";

const SERVER_POST_API_URL = "http://206.189.181.234:8087/home";

const POSTS_URL = `${SERVER_POST_API_URL}`;

const api = axios.create(/*{withCredentials: true}*/);

export const addPost = async (post, token) => {
    const response = await api.post(`${POSTS_URL}/createPost`, post, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const getPosts = async (token) => {
    const response = await api.get(`${POSTS_URL}/feed`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
};

export const likeUpdate=async (postId, userId, isLike, token)=>{
    const response = await api.post(`${POSTS_URL}/updateLike`, {postId, userId, isLike, token}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};