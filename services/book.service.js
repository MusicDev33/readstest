import axios from 'axios';
import { BACKEND } from 'env';

export const getLatestBooks = async (limit, token) => {
  let returnData;

  try {
    const res = await fetch(`${BACKEND}/books?limit=${limit}&token=${token}`);
    returnData = res.json();
  } catch (e) {
    returnData = { success: false };
  }

  return returnData;
}

export const getBookById = async (id) => {
  let returnData;

  try {
    const res = await fetch(`${BACKEND}/books/id/${id}`);
    returnData = await res.json();
  } catch (e) {
    returnData = {success: false};
  }
  return returnData;
}

export const createOneBook = async (postBody) => {
  let returnData;

  try {
    const res = await axios.post(`${BACKEND}/books/create`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const changeBookAttr = async (id, attribute, newValue) => {
  let returnData;

  const postBody = {
    attribute,
    newValue
  }

  try {
    const res = await axios.put(`${BACKEND}/books/change/${id}`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}
