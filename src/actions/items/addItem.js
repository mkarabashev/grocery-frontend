import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  ADD_ITEMS_AWAIT,
  ADD_ITEMS_FAIL,
  ADD_ITEMS_SUCCESS
} from 'constants/index';

const addItemsAwait = () => ({ type: ADD_ITEMS_AWAIT });
const addItemsFail = error => ({ type: ADD_ITEMS_FAIL, error });
const addItemsSuccess = listData =>
  ({ type: ADD_ITEMS_SUCCESS, listData });

export const addItem = item => (dispatch, getState) => {
  const state =  getState();
  const username = state.user.get('username');
  const listId = state.current.get('current');
  const data = { username, listId, item };

  dispatch(addItemsAwait());
  return axios.post('/api/groceries/add', data)
    .then(res => toReduxList([res.data]))
    .then(list => dispatch(addItemsSuccess(list)))
    .catch(err => dispatch(addItemsFail(err)))
    .catch(console.error);
};

export const shouldAddItem = shouldDoAction('itemsStatus', [ 'addItem' ]);

export const addItemIfNeeded = actionIfNeeded(shouldAddItem, addItem);
