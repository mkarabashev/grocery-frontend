import axios from 'utils/axios';
import { push } from 'react-router-redux';

import { actionIfNeeded, shouldDoAction } from '../common';
import {
  REGISTER_USER_AWAIT,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from 'constants/index';

export const registerAwait = () => ({ type: REGISTER_USER_AWAIT });
export const registerFail = error => ({ type: REGISTER_USER_FAIL, error });
export const registerSuccess = () => ({ type: REGISTER_USER_SUCCESS });

export const register = userData => dispatch => {
  dispatch(registerAwait());
  return axios.post('/api/auth/register', userData)
    .then(res => res.status === 201
      ? dispatch(registerSuccess())
      : Promise.reject({ message: 'Wrong status code from server on path /api/auth/register'})
    )
    .then(() => dispatch(push('/login')))
    .catch(err => dispatch(registerFail(err.response.data)))
    .catch(console.error);
};

export const shouldRegister = shouldDoAction('authStatus', [ 'registration' ]);

export const registerIfNeeded = actionIfNeeded(shouldRegister, register);

//axios.get('/api/groceries/list?_id=594641ce6c11c81ef5d5f282&username=karamak')

//axios.post('/api/groceries/new', { username: 'karamakkk', listName: 'grospppppp' });

//axios.delete('/api/groceries/deletelist', { data: { username: 'karamak', listId: '59463666128d21174f28f24a' } });

//axios.post('/api/groceries/add', { username: 'karamak', listId: '5946585982f3352abb612632', item: { name: 'beef', notes: '20kg' } });

//axios.put('/api/groceries/complete', { username: 'karamak', listId: '5946585982f3352abb612632', itemId: '5946588982f3352abb612633' });

//axios.put('/api/groceries/listname', { username: 'karamak', listId: '5946585982f3352abb612632', name: 'groceries' });

//axios.delete('/api/groceries/removeitem', { data: { username: 'karamak', listId: '5946585982f3352abb612632', itemId: '5946589c82f3352abb612634' } });

//axios.put('/api/groceries/edititem', { username: 'karamak', listId: '5946585982f3352abb612632', itemId: '5946588982f3352abb612633', newNotes: 'buy 6', modified_at: '2017-06-18T10:36:59.832Z' })
