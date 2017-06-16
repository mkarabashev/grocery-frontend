import { LOGIN_USER } from '../constants';
import { Map } from 'immutable';

const initialState = Map({
  username: null
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return state.set('username', action.user);
    default:
      return state;
  }
}
