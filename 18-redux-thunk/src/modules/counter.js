import { createAction, handleActions } from 'redux-actions';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

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
