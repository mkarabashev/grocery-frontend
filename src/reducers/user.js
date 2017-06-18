import { Map } from 'immutable';
import {
  LOGIN_USER_SUCCESS,
  LOG_OFF
} from '../constants';

const initialState = Map({
  username: null,
  firstName: null,
  lastName: null
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return state.merge({
        username: action.userData.username,
        firstName: action.userData.firstName,
        lastName: action.userData.lastName,
      });
    case LOG_OFF:
      return initialState;
    default:
      return state;
  }
}
