import React from 'react';
import qs from 'qs';
import WithRouterSample from './WithRouterSample';
import { withRouter } from 'react-router-dom';
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // ?와 같은 접두사를 생략합니다.
  });
  // 문자열 true일 때만 반응합니다
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h3>introduction</h3>
      <p>{showDetail ? 'detail 값이 true 입니다.' : 'detail 에러'}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(About);
