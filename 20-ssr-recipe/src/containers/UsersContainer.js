import React, { useEffect } from 'react';
import Users from '../components/Users';
import { getUsers } from '../modules/users';
import { connect } from 'react-redux';
import { Preloader } from '../lib/PreloadContext';

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return; // users가 유효하다면 요청할 이유가 없음
    getUsers();
  }, [getUsers, users]);

  return (
    <>
      <Users users={users}></Users>
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(state => ({ users: state.users.users }), { getUsers })(
  UsersContainer
);
