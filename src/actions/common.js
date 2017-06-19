export const actionIfNeeded = (condFn, actionFn) => userData =>
  (dispatch, getState) => condFn(getState()) && dispatch(actionFn(userData));

export const shouldDoAction = (reducer, path) =>
  state => !state[reducer].getIn([ ...path, 'await' ]);
