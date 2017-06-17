export const actionIfNeeded = (condFn, actionFn) => userData => (dispatch, getState) =>
  condFn(getState()) && dispatch(actionFn(userData));
