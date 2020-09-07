import { IGetSearchResults, IGetMovieInfo, INominateMovie, IRegister, ISignIn, ISetUser } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS, GET_MOVIE_INFO, NOMINATE_MOVIE, REGISTER, SIGN_IN, SET_USER } from '../constants';
import { IRegisterPayload, IUser } from '../../types';
import { History } from 'history';

export const getSearchResults = (searchTerm: string, page?: number): IGetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchTerm,
  page
});

export const getMovieInfo = (id: string, history?: History): IGetMovieInfo => ({
  type: GET_MOVIE_INFO,
  id,
  history
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

export const setUser = (user: IUser): ISetUser => ({
  type: SET_USER,
  user
});