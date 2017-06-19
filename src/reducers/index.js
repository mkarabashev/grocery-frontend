import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import current from './current';
import groceries from './groceries';
import listsStatus from './listsStatus';
import itemsStatus from './itemsStatus';
import authStatus from './authStatus';

export default combineReducers({
  user,
  current,
  groceries,
  listsStatus,
  itemsStatus,
  authStatus,
  router: routerReducer
});
