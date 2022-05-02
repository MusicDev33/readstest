import axios from 'axios';
import { BACKEND } from 'env';

export const getLatestBooks = async (limit) => {
  let returnData;

  try {
    const res = await fetch(`${BACKEND}/books?limit=${limit}`);
    returnData = res.json();
  } catch (e) {
    returnData = { success: false };
  }

  return returnData;
}
