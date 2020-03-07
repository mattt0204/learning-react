import * as api from '../lib/api';
import { handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
export const getPostById = createRequestThunk(GET_POST, api.getPostById);

const initialState = {
  users: null,
  post: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    })
  },
  initialState
);

export default sample;
