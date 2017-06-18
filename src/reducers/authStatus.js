import { Map } from 'immutable';
import { statusInitialState } from './statusReducer';
import { statusSetter } from '../utils/misc';

import {
  REGISTER_USER_AWAIT,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_AWAIT,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from '../constants';

const initialState = Map({
  registration: statusInitialState,
  login: statusInitialState
})

export default function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_AWAIT:
    case REGISTER_USER_FAIL:
    case REGISTER_USER_SUCCESS:
      return statusSetter('registration', state, action);
    case LOGIN_USER_AWAIT:
    case LOGIN_USER_FAIL:
    case LOGIN_USER_SUCCESS:
      return statusSetter('login', state, action);
    default:
      return state;
  }
}
