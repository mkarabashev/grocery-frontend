import { Map } from 'immutable';
import {
  LOGIN_USER_AWAIT,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOG_OFF
} from '../constants';

const initialState = Map({
  await: false,
  error: null,
  userData: {
    username: null,
    firstName: null,
    lastName: null
  }
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_AWAIT:
      return state.set('await', true);
    case LOGIN_USER_FAIL:
      return state.merge({
        await: false,
        error: action.error
      });
    case LOGIN_USER_SUCCESS:
      return state.mergeDeep({
        await: false,
        error: false,
        userData: action.userData
      });
    case LOG_OFF:
      return initialState;
    default:
      return state;
  }
}
