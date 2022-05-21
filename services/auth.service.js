import axios from 'axios';
import cookie from 'cookie';

import { BACKEND } from 'env';

export const getAuthToken = async (password) => {
  let returnData;

  const body = {
    password
  }

  try {
    const res = await axios.post(`${BACKEND}/auth/gentoken`, body);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }
  return returnData;
}

export const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie); 
}
