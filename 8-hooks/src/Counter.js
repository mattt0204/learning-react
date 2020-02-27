import React, { useReducer } from 'react';

function reduecer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const initialState = { value: 0 };

  const [state, dispatch] = useReducer(reduecer, initialState);
  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>더하기</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>빼기</button>
    </div>
  );
};

export default Counter;
