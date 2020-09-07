import { Action } from 'redux';
import { IMovie, IMovieInfo, IRegisterPayload, IUser } from './index';
import { History } from 'history';

// *** Search Title ***
export interface IGetSearchResults extends Action {
  type: 'search/GET_SEARCH_RESULTS';
  searchTerm: string;
  page?: number;
}

export interface IGetSearchResultsSuccess extends Action {
  type: 'search/GET_SEARCH_RESULTS_SUCCESS';
  movies: IMovie[];
  totalResults: number;
}

export interface IGetSearchResultsError extends Action {
  type: 'search/GET_SEARCH_RESULTS_ERROR';
}

// *** Search Id ***

export interface IGetMovieInfo extends Action {
  type: 'search/GET_MOVIE_INFO';
  id: string;
}

export interface IGetMovieInfoSuccess extends Action {
  type: 'search/GET_MOVIE_INFO_SUCCESS';
  selectedMovie: IMovieInfo;
}

export interface IGetMovieInfoError extends Action {
  type: 'search/GET_MOVIE_INFO_ERROR';
}

// *** Nominate Movie ***

export interface INominateMovie extends Action {
  type: 'search/NOMINATE_MOVIE';
  id: string;
}

export interface INominateMovieSuccess extends Action {
  type: 'search/NOMINATE_MOVIE_SUCCESS';
}

export interface INominateMovieError extends Action {
  type: 'search/NOMINATE_MOVIE_ERROR';
}

// *** Register Acct ***

export interface IRegister extends Action {
  type: 'search/REGISTER';
  payload: IRegisterPayload;
}

export interface IRegisterSuccess extends Action {
  type: 'search/REGISTER_SUCCESS';
}

export interface IRegisterError extends Action {
  type: 'search/REGISTER_ERROR';
}

// *** SignIn ***

export interface ISignIn extends Action {
  type: 'search/SIGN_IN';
  email: string;
  password: string;
  history: History;
}

export interface ISignInSuccess extends Action {
  type: 'search/SIGN_IN_SUCCESS';
  user: IUser;
}

export interface ISignInError extends Action {
  type: 'search/SIGN_IN_ERROR';
}

export type ApplicationAction =
  | IGetSearchResults
  | IGetSearchResultsSuccess
  | IGetSearchResultsError
  | IGetMovieInfo
  | IGetMovieInfoSuccess
  | IGetMovieInfoError
  | INominateMovie
  | INominateMovieSuccess
  | INominateMovieError
  | IRegister
  | IRegisterSuccess
  | IRegisterError
  | ISignIn
  | ISignInSuccess
  | ISignInError;