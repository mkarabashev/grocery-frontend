import axios from 'utils/axios';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  GET_LIST_AWAIT,
  GET_LIST_FAIL,
  GET_LIST_SUCCESS,
  GET_LIST_CANCELLED,
  SHOW_OPTIMISTIC_LIST
} from 'constants/index';

export const getListAwait = listId => ({ type: GET_LIST_AWAIT, listId });
export const getListFail = error => ({ type: GET_LIST_FAIL });
export const getListSuccess = listData => ({ type: GET_LIST_SUCCESS, listData });
export const getListCancelled = listData => ({ type: GET_LIST_CANCELLED, listData });
export const showOptimisticList = listId =>
  ({ type: SHOW_OPTIMISTIC_LIST, listId });

export const getListCond = list => (dispatch, getState) => {
  const listId = Object.keys(list)[0];
  shouldUpdateCurrent(listId, getState())
    ? dispatch(getListSuccess(list))
    : dispatch(getListCancelled(list))
};

export const shouldUpdateCurrent = (listId, state) =>
  !shouldGetList(listId, state);

export const getList = listId => (dispatch, getState) => {
  const username = getState().user.get('username');

  dispatch(showOptimisticList(listId));
  dispatch(getListAwait(listId));
  return axios.get(`/api/groceries/list?_id=${listId}&username=${username}`)
    .then(res => toReduxList([ res.data ]))
    .then(list => dispatch(getListCond(list)))
    .catch(err => dispatch(getListFail(err)))
    .catch(console.error);
};

export const shouldGetList = (listId, state) =>
  state.listsStatus.getIn([ 'getList', 'await' ]) !== listId;

export const getListIfNeeded = listId => (dispatch, getState) =>
  shouldGetList(listId, getState()) && dispatch(getList(listId));
