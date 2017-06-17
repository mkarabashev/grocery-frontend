import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import history from './history';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
));
