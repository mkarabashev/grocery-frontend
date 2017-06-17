import axios from 'utils/axios';
import { push } from 'react-router-redux';

import { actionIfNeeded } from './common';
import {
  LOGIN_USER_AWAIT,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOG_OFF
} from '../constants';

export const loginAwait = () => ({ type: LOGIN_USER_AWAIT });
export const loginFail = error => ({ type: LOGIN_USER_FAIL, error });
export const loginSuccess = userData =>
  ({ type: LOGIN_USER_SUCCESS, userData });

export const login = userData => dispatch => {
  dispatch(loginAwait());
  return axios.post('/api/auth/login', userData)
    .then(res => res.status === 200
      ? dispatch(loginSuccess(res.data))
      : Promise.reject({ message: 'Wrong status code from server on path /api/auth/login'})
    )
    .then(() => dispatch(push('/')))
    .catch(err => dispatch(loginFail(err.response.data.error)))
    .catch(console.error);
}

export const shouldLogin = state => !state.user.get('await');

export const loginIfNeeded = actionIfNeeded(shouldLogin, login);

export const logOff = () => ({ type: LOG_OFF });
