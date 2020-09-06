import { IGetSearchResults } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS } from '../constants';

export const getSearchResults = (searchTerm: string, page?: number): IGetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchTerm,
  page
});