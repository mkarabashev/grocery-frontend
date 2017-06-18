import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  ADD_LIST_AWAIT,
  ADD_LIST_FAIL,
  ADD_LIST_SUCCESS
} from 'constants/index';

export const addListAwait = () => ({ type: ADD_LIST_AWAIT });
export const addListFail = error => ({ type: ADD_LIST_FAIL, error });
export const addListSuccess = listData => ({ type: ADD_LIST_SUCCESS, listData });

export const addList = listName => (dispatch, getState) => {
  const username = getState().user.get('username');
  const data = { username, listName };

  dispatch(addListAwait());
  return axios.post('/api/groceries/new', data)
    .then(({ data }) => toReduxList([data]))
    .then(reduxList => dispatch(addListSuccess(reduxList)))
    .catch(err => dispatch(err))
    .catch(console.error);
}

export const shouldAddList = shouldDoAction('listsStatus', [ 'addList' ]);

export const addListIfNeeded = actionIfNeeded(shouldAddList, addList);
