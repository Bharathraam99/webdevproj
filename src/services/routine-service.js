import axios from "axios";

const SERVER_POST_API_URL = "http://206.189.181.234:8087/home";

const POSTS_URL = `${SERVER_POST_API_URL}`;

const api = axios.create(/*{withCredentials: true}*/);


export const getWorkouts = async (token) => {
    const response = await api.get(`${POSTS_URL}/my-workouts`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
};

export const requestRoutine = async (token) => {
    const response = await api.post(`${POSTS_URL}/request`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};