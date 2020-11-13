import axios from 'axios';
import { api } from '../config';

const image = async (file) => {
  const { token } = JSON.parse(document.cookie.replace('user=', ''))
  const formData = new FormData();
  formData.append('cover', file);
  const res = await axios({
    url: `${api}/uploads`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });

  return res.data;
}

export default {
  image,
}