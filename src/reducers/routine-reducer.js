import {createSlice} from "@reduxjs/toolkit";
import routine from '../routine-page/routine.json'
import users from '../TrainerFeed/users.json'

const initialState = {
  currentUser: {
     "userId": 1,
        "username": "mma",
        "postPic": "samplepost.webp",
        "profilePic": "default.jpg",
        "email": "abc@gmail.com",
        "phone": 123455,
        "gender": "M",
        "role": "User"
  },
   routine : routine
};


const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {}
});

export default routineSlice.reducer;