import { Map } from 'immutable';
import { statusInitialState } from './statusReducer';
import { statusSetter } from '../utils/misc';

import {
  ADD_LIST_AWAIT,
  ADD_LIST_FAIL,
  ADD_LIST_SUCCESS,
  REMOVE_LIST_AWAIT,
  REMOVE_LIST_FAIL,
  REMOVE_LIST_SUCCESS,
  GET_LIST_AWAIT,
  GET_LIST_FAIL,
  GET_LIST_SUCCESS,
  EDIT_LIST_NAME_AWAIT,
  EDIT_LIST_NAME_FAIL,
  EDIT_LIST_NAME_SUCCESS
} from '../constants';

const initialState = Map({
  addList: statusInitialState,
  getList: statusInitialState,
  removeList: statusInitialState,
  editName: statusInitialState
});

export default function listStatus (state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_AWAIT:
    case ADD_LIST_FAIL:
    case ADD_LIST_SUCCESS:
      return statusSetter('addList', state, action);
    case REMOVE_LIST_AWAIT:
    case REMOVE_LIST_FAIL:
    case REMOVE_LIST_SUCCESS:
      return statusSetter('removeList', state, action);
    case GET_LIST_AWAIT:
    case GET_LIST_FAIL:
    case GET_LIST_SUCCESS:
      return statusSetter('getList', state, action);
    case EDIT_LIST_NAME_AWAIT:
    case EDIT_LIST_NAME_FAIL:
    case EDIT_LIST_NAME_SUCCESS:
      return statusSetter('editName', state, action);
    default:
      return state;
  }
}
