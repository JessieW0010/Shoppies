import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS
} from '../constants';
import { ApplicationState } from '../../types';
import { ApplicationAction } from '../../types/actionTypes';

export const initialState: ApplicationState = {
  isLoading: false,
  movie: null
}

const rootReducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        movie: action.movie
      };
    default:
      return state;
  }
};

export default rootReducer;