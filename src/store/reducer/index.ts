import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS
} from '../constants';
import { ApplicationState } from '../../types';
import { ApplicationAction } from '../../types/actionTypes';

export const initialState: ApplicationState = {
  isLoading: false,
  movies: [],
  totalResults: 0,
  searchTerm: ""
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
    default:
      return state;
  }
};

export default rootReducer;