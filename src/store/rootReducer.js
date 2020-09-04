import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS
} from './constants';

const initialState = {
  isLoading: false,
  movie: null
};

const rootReducer = (state = initialState, action) => {
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
