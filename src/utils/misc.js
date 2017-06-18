import statusReducer from '../reducers/statusReducer';

export const statusSetter = (name, state, action) =>
  state.set(name, statusReducer(
    state.get(name),
    action
  ));

export const toReduxList = arr => arr.reduce(
  (obj, { _id, name, items, modified_at }) => ({
    ...obj, [_id]: { _id, name, items, modified_at }
  }), {});
