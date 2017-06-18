import { Map } from 'immutable';

import {
  LOGIN_USER_SUCCESS,
  ADD_LIST_SUCCESS,
  REMOVE_LIST_SUCCESS
} from '../constants';

const initialState = Map();

export default function groceries(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return state.mergeDeep(action.userData.lists);
    case ADD_LIST_SUCCESS:
      return state.mergeDeep(action.listData);
    case REMOVE_LIST_SUCCESS:
      return state.delete(action.listId);
    default:
      return state;
  }
}
