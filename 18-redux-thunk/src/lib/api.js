import axios from 'axios';

export const getUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users');

export const getPostById = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
