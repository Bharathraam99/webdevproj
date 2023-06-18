import {createSlice} from "@reduxjs/toolkit";
//import {logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/auth-thunks";
import {loginThunk, profileThunk, registerThunk} from "../services/auth-thunks";

const initialState = {
    currentUser: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.token = payload.jwtToken;
        },
        [loginThunk.rejected]: (state, {payload}) => {
            throw new Error("Wrong Credentials Enter. Please try again")
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
            console.log("PROFILE THUNK: " + JSON.stringify(state.currentUser))
        },
        [registerThunk.rejected]: (state, {payload}) => {
            throw new Error("Username Already exists");
        }
        /*[logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },*/
    },
});
export default authSlice.reducer;


