import { startLoading, finishLoading } from '../modules/loading';
import { put, call } from 'redux-saga/effects';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); //로딩 시작
    try {
      const response = yield call(request, action.payload); // request(action.payload)
      yield put({
        type: SUCCESS,
        payload: response.data
      }); // 성공 액션
      yield put(finishLoading(type));
    } catch (e) {
      yield put({ type: FAILURE, error: true, payload: e }); // 실패 액션
      yield put(finishLoading(type));
    }
  };
}
