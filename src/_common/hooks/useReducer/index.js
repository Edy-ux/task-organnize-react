import UserService from 'modules/users/services/user.services';
import { useState } from 'react';
import { UserActionTypes } from './action-types';



function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}

export default useReducer;




function init(initialUsers) {
  return initialUsers;
}

export const reducer = (state, action) => {
  switch (action.type) {
    case UserActionTypes.EDIT_USER:
      return state.map((user) => (user._id === action.payload._id ? action.payload : user));
    case UserActionTypes.DELETE_USER:
      return state.filter((user) => user._id !== action.payload._id);
    case 'users/filter':
      return state.filter((user) => user.name.toLowerCase().includes(action.payload) || user.email.toLowerCase().includes(action.payload));
    case 'users/reset':
      return init(action.payload);
    default:
      throw new Error();
  }
};
