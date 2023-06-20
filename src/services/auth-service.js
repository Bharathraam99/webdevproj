import axios from "axios";

//const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;


const SERVER_API_URL = "http://206.189.181.234:8087/authenticate/";

const USERS_URL = `${SERVER_API_URL}`;


const api = axios.create(/*{withCredentials: true}*/);


export const login = async ({username, password}) => {

    const response = await api.post(`${USERS_URL}`, {username, password});

    /*.then(response =>

          response.data);*/

    return response;

};


export const profile = async (token) => {
    //console.log("Hello");
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    };

//   console.log(`Bearer ${token}`);

    console.log(config)

    const response = await api.get(
        `http://206.189.181.234:8087/home/basic`,
        config
    );


    console.log(response);

    //return response.data;

    return response;

};


export const register = async (user) => {

    const response = await api.post(`${USERS_URL}register`, user);

    return response.data;

};


export const logout = async () => {

    //const response = await api.post(`${USERS_URL}/logout`);

    return null;

};


/*export const updateUser = async (user) => {

    const response = await api.put(`${USERS_URL}/${user._id}`, user);

    return response.data;

};
*/


