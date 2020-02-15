import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../modules/users';
import User from '../components/User';
import { Preloader, usePreloader } from '../lib/PreloadContext';

const UserContainer = ({ id }) => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [dispatch, user, id]); // id가 바뀔 때 새로 요청해야함

  // 컨테이너 유효성 검사 후 return null을 해야 하는 경우에  null 대신  Preloader를 반환
  // if (!user) {
  //   return <Preloader resolve={() => dispatch(getUser(id))} />;
  // }

  if (!user) return null;

  return <User user={user} />;
};

export default UserContainer;
