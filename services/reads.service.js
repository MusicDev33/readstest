import axios from 'axios';
import { BACKEND } from 'env';

export const getReadByBookId = async (bookId) => {
  let returnData;

  try {
    const res = await axios.get(`${BACKEND}/reads/bookid/${bookId}`);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const createRead = async (bookId, currentPage) => {
  let returnData;
  let postBody = {bookId, currentPage};

  try {
    const res = await axios.post(`${BACKEND}/reads/create`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const setReadPagesById = async (bookId, currentPage) => {
  let returnData;
  let postBody = {currentPage};

  try {
    const res = await axios.put(`${BACKEND}/reads/bookid/${bookId}`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}
