import { createAction, handleActions } from 'redux-actions';

import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle
} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // 특정 액션을 디스패치 합니다.
  const number = yield select(state => state.counter.number);
  console.log(`현재 값은 ${number}`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease()); // 특정 액션을 디스패치 합니다.
}

export function* counterSaga() {
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initiaState = {
  number: 0
};

const counter = handleActions(
  {
    [INCREASE]: state => ({ number: state.number + 1 }),
    [DECREASE]: state => ({ number: state.number - 1 })
  },
  initiaState
);

export default counter;
