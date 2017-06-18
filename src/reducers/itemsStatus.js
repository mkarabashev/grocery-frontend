import { Map } from 'immutable';
import { statusInitialState } from './statusReducer';
import { statusSetter } from '../utils/misc';

import {
  ADD_ITEMS_AWAIT,
  ADD_ITEMS_FAIL,
  ADD_ITEMS_SUCCESS,
  REMOVE_ITEMS_AWAIT,
  REMOVE_ITEMS_FAIL,
  REMOVE_ITEMS_SUCCESS,
  COMPLETE_ITEMS_AWAIT,
  COMPLETE_ITEMS_FAIL,
  COMPLETE_ITEMS_SUCCESS,
  EDIT_ITEMS_AWAIT,
  EDIT_ITEMS_FAIL,
  EDIT_ITEMS_SUCCESS
} from '../constants';

const initialState = Map({
  addItem: statusInitialState,
  removeItem: statusInitialState,
  completeItem: statusInitialState,
  editItem: statusInitialState
});

export default function itemsStatus(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS_AWAIT:
    case ADD_ITEMS_FAIL:
    case ADD_ITEMS_SUCCESS:
      return statusSetter('addItem', state, action);
    case REMOVE_ITEMS_AWAIT:
    case REMOVE_ITEMS_FAIL:
    case REMOVE_ITEMS_SUCCESS:
      return statusSetter('removeItem', state, action);
    case COMPLETE_ITEMS_AWAIT:
    case COMPLETE_ITEMS_FAIL:
    case COMPLETE_ITEMS_SUCCESS:
      return statusSetter('completeItem', state, action);
    case EDIT_ITEMS_AWAIT:
    case EDIT_ITEMS_FAIL:
    case EDIT_ITEMS_SUCCESS:
      return statusSetter('editItem', state, action);
    default:
      return state;
  }
}
