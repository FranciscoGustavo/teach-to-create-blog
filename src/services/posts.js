import axios from 'axios'; 
import { api } from '../config';

const getAll = async () => {
  const res = await fetch(`http://localhost:5000/api/posts`);
  const data = await res.json();
  return data.body;
}

const getOne = async (slug) => {
  const res = await fetch(`http://localhost:5000/api/posts/${slug}`);
  const data = await res.json();
  return data.body;
}

const save = async (data, id) => {
  if (id) return update(data, id);
  return create(data);
}

const create = async (data) => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''));
  const res = await axios({
    url: `${api}/posts`,
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return res.data.body._id;
}

const update = async (data, slug) => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''));
  await axios({
    url: `${api}/posts/${slug}`,
    method: 'PATCH',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return slug;
}

const publish = async (data, slug) => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''));
  const res = await axios({
    url: `${api}/posts/${slug}`,
    method: 'PATCH',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return true;
};

export default {
  getAll,
  getOne,
  save,
  publish,
}