import {createAsyncThunk} from "@reduxjs/toolkit";
import * as routineService from "./routine-service";

export const getRoutineThunk = createAsyncThunk("routine/get", async (token) => {
    const response = await routineService.getWorkouts(token);
    return response;
});