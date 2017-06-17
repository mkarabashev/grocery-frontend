import axios from 'utils/axios';
import { push } from 'react-router-redux';

import { actionIfNeeded } from './common';
import {
  REGISTER_USER_AWAIT,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from '../constants';

export const registerAwait = () => ({ type: REGISTER_USER_AWAIT });
export const registerFail = error => ({ type: REGISTER_USER_FAIL, error });
export const registerSuccess = () => ({ type: REGISTER_USER_SUCCESS });

export const register = userData => dispatch => {
  dispatch(registerAwait());
  return axios.post('/api/auth/register', userData)
    .then(res => res.status === 201
      ? dispatch(registerSuccess()) :
      Promise.reject({ message: 'Wrong status code from server on path /api/auth/register'})
    )
    .then(() => dispatch(push('/login')))
    .catch(err => dispatch(registerFail(err)))
    .catch(console.error);
}

export const shouldRegister = state => !state.registration.get('await');

export const registerIfNeeded = actionIfNeeded(shouldRegister, register);
