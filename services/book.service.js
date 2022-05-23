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

export const getBookById = async (id, token) => {
  let returnData;

  try {
    const res = await fetch(`${BACKEND}/books/id/${id}?token=${token}`);
    returnData = await res.json();
  } catch (e) {
    returnData = {success: false};
  }
  return returnData;
}

export const createOneBook = async (postBody, token) => {
  let returnData;

  try {
    const res = await axios.post(`${BACKEND}/books/create?token=${token}`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const changeBookAttr = async (id, attribute, newValue, token) => {
  let returnData;

  const postBody = {
    attribute,
    newValue
  }

  try {
    const res = await axios.put(`${BACKEND}/books/change/${id}?token=${token}`, postBody);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}
