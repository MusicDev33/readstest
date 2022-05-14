import axios from 'axios';
import { BACKEND } from 'env';

export const getSynopsisByBookId = async (bookId) => {
  let returnData;

  try {
    const res = await axios.get(`${BACKEND}/synopses/bookid/${bookId}`);
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}

export const editSynopsisDesc = async (bookId, desc) => {
  let returnData;

  try {
    const res = await axios.put(`${BACKEND}/synopses/description/${bookId}`, {description: desc});
    returnData = res.data;
  } catch (e) {
    returnData = {success: false};
  }

  return returnData;
}
