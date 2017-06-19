import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  COMPLETE_ITEMS_AWAIT,
  COMPLETE_ITEMS_FAIL,
  COMPLETE_ITEMS_SUCCESS
} from 'constants/index';

const completeItemsAwait = () => ({ type: COMPLETE_ITEMS_AWAIT });
const completeItemsFail = error => ({ type: COMPLETE_ITEMS_FAIL, error });
const completeItemsSuccess = listData =>
  ({ type: COMPLETE_ITEMS_SUCCESS, listData });

export const completeItem = itemId => (dispatch, getState) => {
  const state =  getState();
  const username = state.user.get('username');
  const listId = state.current.get('current');
  const data = { username, listId, itemId };

  dispatch(completeItemsAwait());
  return axios.put('/api/groceries/complete', data)
    .then(res => toReduxList([res.data]))
    .then(list => dispatch(completeItemsSuccess(list)))
    .catch(err => dispatch(completeItemsFail(err)))
    .catch(console.error);
};

export const shouldCompleteItem = shouldDoAction('itemsStatus', [ 'completeItem' ]);

export const CompleteItemIfNeeded = actionIfNeeded(shouldCompleteItem, completeItem);
