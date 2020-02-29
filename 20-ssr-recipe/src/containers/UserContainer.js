import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../modules/users';
import User from '../components/User';
import { usePreloader } from '../lib/PreloadContext';

const UserContainer = ({ id }) => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [dispatch, user, id]); // id가 바뀔 때 새로 요청해야함

  if (!user) return null;

  return <User user={user} />;
};

export default UserContainer;
