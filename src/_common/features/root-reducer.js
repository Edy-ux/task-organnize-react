import { combineReducers } from 'redux';
import userSlice from './users/userSlice';

// import cartReducer  from './cart/slice'

const rootReducer = combineReducers({ userSlice });

export default rootReducer;