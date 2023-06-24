import {createSlice} from "@reduxjs/toolkit";
//import {logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/auth-thunks";
import {loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/auth-thunks";

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
        },
        [registerThunk.rejected]: (state, {payload}) => {
            throw new Error("Username Already exists");
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
            state.token = null;
        },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            //state.currentUser = payload;
        },
        [updateUserThunk.rejected]: (state, action) => {
            throw new Error(action.error.message);
        }
        /*[registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },*/
    },
});
export default authSlice.reducer;


