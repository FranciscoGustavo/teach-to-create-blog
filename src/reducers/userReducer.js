import Router from 'next/router';
import { LOGIN, LOGOUT } from '../actions';

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case LOGOUT:
      console.log(payload);
      document.cookie = 'user=';
      Router.push('/login');
      return payload; 
    case LOGIN:
      const { token, user } = payload;
      const newState = { token, ...user };
      document.cookie = `user=${JSON.stringify(newState)}`;
      Router.push('/dashboard');
      return newState;
    default:
      return state;
  }
}

export default userReducer;