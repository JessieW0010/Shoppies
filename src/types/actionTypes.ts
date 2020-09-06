import { Action } from 'redux';
import { IMovie, IMovieInfo } from './index';

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

export interface IGetMovieInfo extends Action {
  type: 'search/GET_MOVIE_INFO';
  id: string;
}

export interface IGetMovieInfoSuccess extends Action {
  type: 'search/GET_MOVIE_INFO_SUCCESS';
  selectedMovie: IMovieInfo;
}

export interface IGetSearchResultsError extends Action {
  type: 'search/GET_SEARCH_RESULTS_ERROR';
}

export type ApplicationAction =
  | IGetSearchResults
  | IGetSearchResultsSuccess
  | IGetMovieInfo
  | IGetMovieInfoSuccess
  | IGetSearchResultsError;