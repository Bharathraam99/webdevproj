import {createSlice} from "@reduxjs/toolkit";
import {getRoutineThunk} from "../services/routine-thunks";

const routinesSlice = createSlice({
    name: 'routines',
    initialState: {routines: []},
    reducers: {},
    extraReducers: {
        [getRoutineThunk.fulfilled]: (state, {payload}) => {
            state.routines = payload;
        }
    }

});

export default routinesSlice.reducer;