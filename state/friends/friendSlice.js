import { createSlice } from "@reduxjs/toolkit";

export const friendSlice = createSlice({
    name:'friend',
    initialState:{
        name:'Abhishek',
        balance:'0'
    },
    reducers:{
        changeVal:(state,action)=>{
            state.name = action.payload.name;
            state.balance=action.payload.balance;
        }
    },
})
export const {changeVal} = friendSlice.actions;
export default friendSlice.reducer;