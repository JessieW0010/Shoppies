import { GET_SEARCH_RESULTS } from './constants';

export const getSearchResults = (searchTerm: string) => {
  return {
    type: GET_SEARCH_RESULTS,
    searchTerm
  };
};
