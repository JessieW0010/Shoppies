import { IGetSearchResults, IGetMovieInfo, INominateMovie, IUnNominateMovie, IRegister, ISignIn, ISetUser, IGetUserMovies, ILogout } from '../../types/actionTypes';
import { GET_SEARCH_RESULTS, GET_MOVIE_INFO, UN_NOMINATE_MOVIE, NOMINATE_MOVIE, REGISTER, SIGN_IN, SET_USER, GET_USER_MOVIES, LOGOUT } from '../constants';
import { IRegisterPayload, IUser, IMovieInfo } from '../../types';
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

export const nominateMovie = (movie: IMovieInfo): INominateMovie => ({
  type: NOMINATE_MOVIE,
  movie
});

export const unNominateMovie = (movie: IMovieInfo): IUnNominateMovie => ({
  type: UN_NOMINATE_MOVIE,
  movie
});

export const register = (payload: IRegisterPayload, history: History): IRegister => ({
  type: REGISTER,
  payload,
  history
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

export const getUserMovies = (): IGetUserMovies => ({
  type: GET_USER_MOVIES
})

export const logout = (): ILogout => ({
  type: LOGOUT
})