import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS
} from '../constants';
import { ApplicationState } from '../../types';
import { ApplicationAction } from '../../types/actionTypes';

export const initialState: ApplicationState = {
  isLoading: false,
  movies: [],
  searchTerm: ""
}

const rootReducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...initialState,
        isLoading: true,
        searchTerm: action.searchTerm
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        movies: action.movies
      };
    default:
      return state;
  }
};

export default rootReducer;