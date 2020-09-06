import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS
} from '../constants';
import { ApplicationState } from '../../types';
import { ApplicationAction } from '../../types/actionTypes';

export const initialState: ApplicationState = {
  isLoading: false,
  movies: [],
  totalResults: 0,
  searchTerm: "",
  selectedMovie: null
}

const rootReducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: true,
        searchTerm: action.searchTerm
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
        totalResults: action.totalResults
      };
    case GET_MOVIE_INFO: 
      return {
        ...state,
        isLoading: true
      }
    case GET_MOVIE_INFO_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        selectedMovie: action.selectedMovie
      }
    default:
      return state;
  }
};

export default rootReducer;