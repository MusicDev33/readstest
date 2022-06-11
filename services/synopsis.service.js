import axios from 'axios';
import { BACKEND } from 'env';

export const getSynopsisByBookId = async (bookId, token) => {
  let returnData;

  try {
    const res = await axios.get(`${BACKEND}/synopses/bookid/${bookId}?token=${token}`);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const getSynopsisById = async (synId) => {
  let returnData;

  try {
    const res = await axios.get(`${BACKEND}/synopses/id/${synId}`);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const editSynopsisDesc = async (bookId, desc, token) => {
  let returnData;

  try {
    const res = await axios.put(`${BACKEND}/synopses/description/${bookId}?token=${token}`, {description: desc});
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}
