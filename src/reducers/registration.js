import { Map } from 'immutable';

import {
  REGISTER_USER_AWAIT,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from 'constants';

const initialState = Map({
  await: false,
  error: null
})

export default function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_AWAIT:
      return state.set('await', true);
    case REGISTER_USER_FAIL:
      return state.merge({
        await: false,
        error: action.error
      })
    case REGISTER_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
