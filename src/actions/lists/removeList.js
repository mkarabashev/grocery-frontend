import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import {
  REMOVE_LIST_AWAIT,
  REMOVE_LIST_FAIL,
  REMOVE_LIST_SUCCESS
} from 'constants/index';

export const removeListAwait = () => ({ type: REMOVE_LIST_AWAIT });
export const removeListFail = error => ({ type: REMOVE_LIST_FAIL, error });
export const removeListSuccess = listId =>
  ({ type: REMOVE_LIST_SUCCESS, listId });

export const removeList = listId => (dispatch, getState) => {
  const username = getState().user.get('username');
  const data = { username, listId };

  dispatch(removeListAwait());
  return axios.delete('/api/groceries/deletelist', { data })
    .then(() => dispatch(removeListSuccess(listId)))
    .catch(err => dispatch(removeListFail(err)))
    .catch(console.error);
};

export const shouldRemoveList = shouldDoAction('listsStatus', [ 'removeList' ]);

export const removeListIfNeeded = actionIfNeeded(shouldRemoveList, removeList);
