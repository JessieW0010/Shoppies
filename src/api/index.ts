import Axios from 'axios';
import { ISearchByTitlePayload } from '../types';

export const searchByTitle = (payload: ISearchByTitlePayload) => {
  return Axios.post(`http://localhost:8000/search/title`, payload)
};

// export const searchById = (payload: ISearchByTitlePayload) => {
//   return Axios.post(`http://localhost:8000/search/title`, payload)
// };
