import { createContext, useContext } from 'react';

// 클라이언트 환경 : null
// 서버 환경 : {done : false, promise: [] }
const PreloadContext = createContext(null);

export default PreloadContext;
// resolve는 함수 타입입니다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);

  if (!preloadContext) return null; // context 값이 유효하지 않다면 아무것도 하지않음
  if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지 않음

  // promises 배열에 프로미스 등록
  // 설령 resolve 함수가 promise를 반환하지 않더라도 , 프로미스 취급을 받기 위해 등록해야함
  // 위의 과정을 Promise.resolve를 사용하면 해결함
  preloadContext.promises.push(Promise.resolve(resolve()));

  return null;
};
// hook 형태로 사용할 수 있는 함수
export const usePreloader = resolve => {
  const preloadContext = useContext(PreloadContext);

  if (!preloadContext) return null;
  if (preloadContext.done) return null;
  preloadContext.promises.push(Promise.resolve(resolve()));
};
