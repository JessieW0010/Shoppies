import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_ERROR,
  NOMINATE_MOVIE,
  NOMINATE_MOVIE_SUCCESS,
  NOMINATE_MOVIE_ERROR
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
    case NOMINATE_MOVIE: 
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
    case NOMINATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default rootReducer;