import { createSlice } from "@reduxjs/toolkit";

export const friendsSlice = createSlice({
    name:"friend",
    initialState:[],
    reducers:{
        addFriends:(state,action)=>{
               state.push(action.payload); 
        },
        updateBalance:(state, action)=>{
            let friends = state.map((friend, i)=>{
                if(friend.name === action.payload.name){
                    friend.balance = parseFloat(friend.balance) + parseFloat(action.payload.amount);
                }
                return friend;
            });
            state = friends;
        }
    },
})
export const { addFriends, updateBalance} = friendsSlice.actions;
export default friendsSlice.reducer;