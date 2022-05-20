import axios from 'axios';
import { BACKEND } from 'env';

export const getAuthtoken = async (password) => {
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
