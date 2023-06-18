import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user.data;
    }
);


export const profileThunk = createAsyncThunk(
    "auth/profile", async (token) => {
        //return await authService.profile();
        const response = await authService.profile(token);
        return response.data;
    });

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        const user = await authService.register(credentials);
        if(user.code===400){
            throw new Error("Username Already exists");
        }
        return user;
    }
)


/*export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    });*/