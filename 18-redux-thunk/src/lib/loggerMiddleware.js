const loggerMiddleware = store => next => action => {
  console.group(action && action.type); // 액션 타입이 있다면 action type으로 그룹화 함
  console.log('액션 이전 상태', store.getState());
  console.log('action', action);
  next(action); // 다음 미들웨어 또는 리듀서에게 전달
  console.log('액션 다음 상태', store.getState());
  console.groupEnd(); // 그룹 끝

  // 미들웨어의 기본 구조입니다.
};

export default loggerMiddleware;
