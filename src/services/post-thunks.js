import {createAsyncThunk} from "@reduxjs/toolkit";
import * as postService from "./post-service";

export const addPostThunk = createAsyncThunk(
    "post/add", async ({newPost, token}) => {
        const response = await postService.addPost(newPost, token);
        return response;
    }
);

export const getPostThunk = createAsyncThunk("post/get", async (token) => {
    const response = await postService.getPosts(token);
    return response;
});
