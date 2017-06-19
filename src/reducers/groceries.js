import { Map } from 'immutable';

import {
  LOGIN_USER_SUCCESS,
  ADD_LIST_SUCCESS,
  REMOVE_LIST_SUCCESS,
  GET_LIST_SUCCESS,
  GET_LIST_CANCELLED,
  EDIT_LIST_NAME_SUCCESS,
  ADD_ITEMS_SUCCESS,
  COMPLETE_ITEMS_SUCCESS
} from '../constants';

const initialState = Map();

export default function groceries(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return state.mergeDeep(action.userData.lists);
    case ADD_LIST_SUCCESS:
    case GET_LIST_SUCCESS:
    case GET_LIST_CANCELLED:
    case EDIT_LIST_NAME_SUCCESS:
    case ADD_ITEMS_SUCCESS:
    case COMPLETE_ITEMS_SUCCESS:
      return state.mergeDeep(action.listData);
    case REMOVE_LIST_SUCCESS:
      return state.delete(action.listId);
    default:
      return state;
  }
}
