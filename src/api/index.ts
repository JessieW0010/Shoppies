import Axios from 'axios';
import { ISearchPayload } from '../types';

export const search = (payload: ISearchPayload) => {
  return Axios.post(`http://localhost:8000/search`, payload)
};
