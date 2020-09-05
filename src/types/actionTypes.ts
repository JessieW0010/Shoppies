import { Action } from 'redux';
import { IMovie } from './index';

export interface IGetSearchResults extends Action {
  type: 'search/GET_SEARCH_RESULTS';
  searchTerm: string;
}

export interface IGetSearchResultsSuccess extends Action {
  type: 'search/GET_SEARCH_RESULTS_SUCCESS';
  movie: IMovie;
}

export interface IGetSearchResultsError extends Action {
  type: 'search/GET_SEARCH_RESULTS_ERROR';
}

export type ApplicationAction =
  | IGetSearchResults
  | IGetSearchResultsSuccess
  | IGetSearchResultsError;