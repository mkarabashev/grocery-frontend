import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  EDIT_LIST_NAME_AWAIT,
  EDIT_LIST_NAME_FAIL,
  EDIT_LIST_NAME_SUCCESS
} from 'constants/index';

const editListNameAwait = () => ({ type: EDIT_LIST_NAME_AWAIT });
const editListNameFail = error => ({ type: EDIT_LIST_NAME_FAIL, error });
const editListNameSuccess = listData =>
  ({ type: EDIT_LIST_NAME_SUCCESS, listData });

export const editListName = name => (dispatch, getState) => {
  const state =  getState();
  const username = state.user.get('username');
  const listId = state.current.get('current');
  const data = { username, listId, name };

  dispatch(editListNameAwait());
  return axios.put('/api/groceries/listname', data)
    .then(res => toReduxList([res.data]))
    .then(list => dispatch(editListNameSuccess(list)))
    .catch(err => dispatch(editListNameFail(err)))
    .catch(console.error);
};

export const shouldEditName = shouldDoAction('listsStatus', [ 'editName' ]);

export const editNameIfNeeded = actionIfNeeded(shouldEditName, editListName);
