import { Map } from 'immutable';

export const statusInitialState = Map({
  await: false,
  error: null
});

export default function statusReducer(state = statusInitialState, action) {
  const type = action.type.replace(/^.*_/, '');

  switch (type) {
    case 'AWAIT':
      return state.merge({
        await: true
      });
    case 'FAIL':
      return state.merge({
        await: false,
        error: action.error
      });
    case 'SUCCESS':
      return statusInitialState;
    default:
      return state;
  }
}
