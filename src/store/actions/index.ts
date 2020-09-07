import { IGetSearchResults, IGetMovieInfo, INominateMovie, IRegister, ISignIn } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS, GET_MOVIE_INFO, NOMINATE_MOVIE, REGISTER, SIGN_IN } from '../constants';
import { IRegisterPayload } from '../../types';
import { History } from 'history';

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

export const register = (payload: IRegisterPayload): IRegister => ({
  type: REGISTER,
  payload
});

export const signIn = (email: string, password: string, history: History): ISignIn => ({
  type: SIGN_IN,
  email,
  password,
  history
});