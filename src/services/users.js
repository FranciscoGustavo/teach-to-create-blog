import axios from 'axios';
import { api } from '../config';

const login = async ({ email, password }) => {
  const res = await axios({
    url: `${api}/auth/login`,
    method: 'post',
    auth: {
      username: email,
      password,
    },
  });
  return res.data;
}

const getMyPosts = async () => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''))
  const res = await axios({
    url: `${api}/posts/author`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data.body;
}

const getOnePost = async (slug) => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''))
  const res = await axios({
    url: `${api}/posts/author/${slug}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data.body;
}

export default {
  login,
  getMyPosts,
  getOnePost
};