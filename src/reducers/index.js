import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import groceries from './groceries';
import listsStatus from './listsStatus';
import itemsStatus from './itemsStatus';
import authStatus from './authStatus';

export default combineReducers({
  user,
  groceries,
  listsStatus,
  itemsStatus,
  authStatus,
  router: routerReducer
});
