import axios from 'utils/axios';
import { push } from 'react-router-redux';

import { actionIfNeeded, shouldDoAction } from '../common';
import { toReduxList } from 'utils/misc';
import {
  LOGIN_USER_AWAIT,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOG_OFF
} from 'constants/index';


export const loginAwait = () => ({ type: LOGIN_USER_AWAIT });
export const loginFail = error => ({ type: LOGIN_USER_FAIL, error });
export const loginSuccess = userData =>
  ({ type: LOGIN_USER_SUCCESS, userData });

export const login = userData => dispatch => {
  dispatch(loginAwait());
  return axios.post('/api/auth/login', userData)
    .then(res => ({ ...res.data, lists: toReduxList(res.data.lists) }))
    .then(data => dispatch(loginSuccess(data)))
    .then(() => dispatch(push('/grocerylist')))
    .catch(err => dispatch(loginFail(err.response.data)))
    .catch(console.error);
}

export const shouldLogin = shouldDoAction('authStatus', [ 'login' ]);

export const loginIfNeeded = actionIfNeeded(shouldLogin, login);

export const logOff = () => ({ type: LOG_OFF });
