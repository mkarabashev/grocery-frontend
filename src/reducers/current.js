import { Map } from 'immutable';

import {
  SHOW_OPTIMISTIC_LIST,
  GET_LIST_SUCCESS,
  LOGIN_USER_SUCCESS,
  SET_WINDOW_WIDTH,
  CLOSE_DRAWER,
  OPEN_DRAWER
} from '../constants'

const initialState = Map({
  current: null,
  optimistic: false,
  windowWidth: 1360,
  drawer: true
});

export default function current(state= initialState, action) {
  switch (action.type) {
    case SHOW_OPTIMISTIC_LIST:
      return state.merge({
        current: action.listId,
        optimistic: true
      });
    case GET_LIST_SUCCESS:
      return state.merge({
        current: Object.keys(action.listData)[0],
        optimistic: false
      });
    case LOGIN_USER_SUCCESS:
      return state.set(
        'current',
        Object.keys(action.userData.lists)[0]
      );
    case SET_WINDOW_WIDTH:
      return state.set('windowWidth', action.width);
    case CLOSE_DRAWER:
      return state.set('drawer', false);
    case OPEN_DRAWER:
      return state.set('drawer', true);
    default:
      return state;
  }
}
