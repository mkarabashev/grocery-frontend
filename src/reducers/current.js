import { Map } from 'immutable';

import {
  SHOW_OPTIMISTIC_LIST,
  GET_LIST_SUCCESS,
  LOGIN_USER_SUCCESS
} from '../constants'

const initialState = Map({
  current: null,
  optimistic: false
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
    default:
      return state;
  }
}
