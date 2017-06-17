import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import registration from './registration';

export default combineReducers({
  user,
  registration,
  router: routerReducer
});
