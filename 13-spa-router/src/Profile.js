import React from 'react';
import WithRouterSample from './WithRouterSample';
import { withRouter } from 'react-router-dom';
const data = {
  dk99521: {
    name: '정우태',
    description: '초심자'
  },
  velopert: {
    name: '김민준',
    description: '선생님'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  // 값을 받아올 때는 에러 처리해주어야 합니다.
  if (!profile) return <div>존재하지 않는 사용자입니다.</div>;

  const { name, description } = profile;
  return (
    <div>
      <h3>
        {username} ({name})
      </h3>
      <p>{description}</p>
      <WithRouterSample />
    </div>
  );
};
export default withRouter(Profile);
