import { Action } from 'redux';
import { IMovie, IMovieInfo, IRegisterPayload, IUser } from './index';
import { History } from 'history';

// *** Search Title ***
export interface IGetSearchResults extends Action {
  type: 'GET_SEARCH_RESULTS';
  searchTerm: string;
  page?: number;
}

export interface IGetSearchResultsSuccess extends Action {
  type: 'GET_SEARCH_RESULTS_SUCCESS';
  movies: IMovie[];
  totalResults: number;
}

export interface IGetSearchResultsError extends Action {
  type: 'GET_SEARCH_RESULTS_ERROR';
}

// *** Search Id ***

export interface IGetMovieInfo extends Action {
  type: 'GET_MOVIE_INFO';
  id: string;
  history?: History;
}

export interface IGetMovieInfoSuccess extends Action {
  type: 'GET_MOVIE_INFO_SUCCESS';
  selectedMovie: IMovieInfo;
}

export interface IGetMovieInfoError extends Action {
  type: 'GET_MOVIE_INFO_ERROR';
}

// *** Nominate Movie ***

export interface INominateMovie extends Action {
  type: 'NOMINATE_MOVIE';
  movie: IMovieInfo;
}

export interface INominateMovieSuccess extends Action {
  type: 'NOMINATE_MOVIE_SUCCESS';
  movie: IMovieInfo;
}

export interface INominateMovieError extends Action {
  type: 'NOMINATE_MOVIE_ERROR';
}

// *** UNNominate Movie ***

export interface IUnNominateMovie extends Action {
  type: 'UN_NOMINATE_MOVIE';
  movie: IMovieInfo;
}

export interface IUnNominateMovieSuccess extends Action {
  type: 'UN_NOMINATE_MOVIE_SUCCESS';
  nominations: IMovieInfo[];
}

export interface IUnNominateMovieError extends Action {
  type: 'UN_NOMINATE_MOVIE_ERROR';
}

// *** Register Acct ***

export interface IRegister extends Action {
  type: 'REGISTER';
  payload: IRegisterPayload;
  history: History;
}

export interface IRegisterSuccess extends Action {
  type: 'REGISTER_SUCCESS';
  user: IUser;
}

export interface IRegisterError extends Action {
  type: 'REGISTER_ERROR';
  payload: {
    register: number;
  };
}

// *** SignIn ***

export interface ISignIn extends Action {
  type: 'SIGN_IN';
  email: string;
  password: string;
  history: History;
}

export interface ISignInSuccess extends Action {
  type: 'SIGN_IN_SUCCESS';
  user: IUser;
}

export interface ISignInError extends Action {
  type: 'SIGN_IN_ERROR';
  payload: {
    register: number;
  };
}

export interface ISetUser extends Action {
  type: 'SET_USER';
  user: IUser
}


export interface ILogout extends Action {
  type: 'LOGOUT';
}

export interface ILogoutSuccess extends Action {
  type: 'LOGOUT_SUCCESS';
}

export interface IGetUserMovies extends Action {
  type: 'GET_USER_MOVIES';
}
export interface IGetUserMoviesSuccess extends Action {
  type: 'GET_USER_MOVIES_SUCCESS';
  nominations: IMovieInfo[];
}

export interface IGetUserMoviesError extends Action {
  type: 'GET_USER_MOVIES_ERROR';
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
  | IUnNominateMovie
  | IUnNominateMovieSuccess
  | IUnNominateMovieError
  | IRegister
  | IRegisterSuccess
  | IRegisterError
  | ISignIn
  | ISignInSuccess
  | ISignInError
  | IGetUserMovies
  | IGetUserMoviesSuccess
  | IGetUserMoviesError
  | ISetUser
  | ILogout
  | ILogoutSuccess;