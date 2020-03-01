import { createStore } from 'redux';
// DOM REFERENCE 만들기
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');
// 액션에 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성 함수 camel notation
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = { toggle: false, counter: 0 };

// 리듀서 만들기
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  // 토글이 창이라면 노란색, 참이 아니라면 없음
  const state = store.getState(); // 현재상태 호출
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

// 최초 한번 render
render();

// 구독하기 (상태가 바뀔때마다 render 함수를 호출)
store.subscribe(render);

// 액션 발생 함수
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase());
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
