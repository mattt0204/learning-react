import users, { userSaga } from './users';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([userSaga()]);
}

const rootReducer = combineReducers({ users });
export default rootReducer;
