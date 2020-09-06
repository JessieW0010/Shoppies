import { Action } from 'redux';
import { IMovie } from './index';

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

export type ApplicationAction =
  | IGetSearchResults
  | IGetSearchResultsSuccess
  | IGetSearchResultsError;