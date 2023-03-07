import { configureStore } from '@reduxjs/toolkit'
import friendReducer from '../state/friends/friendSlice';
import friendsReducer from './friends/friendsSlice';

export default configureStore({
  reducer: {
    friend:friendReducer,
    friends:friendsReducer,
},
})