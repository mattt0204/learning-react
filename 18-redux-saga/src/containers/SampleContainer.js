import React, { useEffect } from 'react';
import { getPostById, getUsers } from '../modules/sample';
import Sample from '../components/Sample';
import { useSelector, useDispatch } from 'react-redux';
const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(state => ({
    post: state.sample.post,
    users: state.sample.users,
    loadingPost: state.loading.GET_POST,
    loadingUsers: state.loading.GET_USERS
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(2));
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
