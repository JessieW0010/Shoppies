import { IGetSearchResults, IGetMovieInfo } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS, GET_MOVIE_INFO } from '../constants';

export const getSearchResults = (searchTerm: string, page?: number): IGetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchTerm,
  page
});

export const getMovieInfo = (id: string): IGetMovieInfo => ({
  type: GET_MOVIE_INFO,
  id
});