import { IGetSearchResults, IGetMovieInfo, INominateMovie, IRegister } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS, GET_MOVIE_INFO, NOMINATE_MOVIE, REGISTER } from '../constants';

export const getSearchResults = (searchTerm: string, page?: number): IGetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchTerm,
  page
});

export const getMovieInfo = (id: string): IGetMovieInfo => ({
  type: GET_MOVIE_INFO,
  id
});

export const nominateMovie = (id: string): INominateMovie => ({
  type: NOMINATE_MOVIE,
  id
});

export const register = (first_name: string, last_name: string, email: string, password: string): IRegister => ({
  type: REGISTER,
  first_name,
  last_name,
  email,
  password
});