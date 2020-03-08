import * as api from '../lib/api';
import { handleActions, createAction } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const GET_USERS = 'sample/GET_USERS'; // 시작을 알리는 액션 타입
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

// 컨테이너에서 요청을 불러올때 사용
export const getUsers = createAction(GET_USERS);
export const getPostById = createAction(GET_POST);

const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers); // 이 파라미터가 SUCCESS에 관련함
const getPostByIdSaga = createRequestSaga(GET_POST, api.getPostById);

export function* sampleSaga() {
  yield takeLatest(GET_USERS, getUsersSaga); // 여 파라미터가 GET_USERS 액션이 들어오는지 체크 .  getUsersSaga를 실행하라
  yield takeLatest(GET_POST, getPostByIdSaga);
}

const initialState = {
  users: null,
  post: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    })
  },
  initialState
);

export default sample;
