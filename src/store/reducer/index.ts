import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS,
  NOMINATE_MOVIE,
  NOMINATE_MOVIE_SUCCESS,
  UN_NOMINATE_MOVIE,
  UN_NOMINATE_MOVIE_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  SET_USER,
  LOGOUT_SUCCESS,
  LOGOUT,
  GET_USER_MOVIES,
  GET_USER_MOVIES_SUCCESS,
} from '../constants';
import { ApplicationState, IErrorState } from '../../types';
import { ApplicationAction } from '../../types/actionTypes';

const initialErrorState: IErrorState = {
  login: null,
  register: null
}

export const initialState: ApplicationState = {
  isLoading: false,
  movies: [],
  totalResults: 0,
  searchTerm: "",
  selectedMovie: null,
  user: null,
  nominations: [],
  error: initialErrorState
}

const rootReducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: true,
        error: initialErrorState,
        searchTerm: action.searchTerm
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialErrorState,
        movies: action.movies,
        totalResults: action.totalResults
      };
    case GET_MOVIE_INFO: 
    case SIGN_IN: 
    case NOMINATE_MOVIE: 
    case REGISTER:
    case LOGOUT:
    case GET_USER_MOVIES:
    case UN_NOMINATE_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_MOVIES_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        nominations: action.nominations
      }
    case GET_MOVIE_INFO_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        error: initialErrorState,
        selectedMovie: action.selectedMovie
      }
    case NOMINATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialErrorState,
        nominations: [
          ...state.nominations,
          action.movie
        ]
      }
    case SIGN_IN_SUCCESS:
    case SET_USER:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: initialErrorState,
        isLoading: false
      }
    case REGISTER_ERROR:
    case SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: {
          ...state.error,
          ...action.payload
        }
      }
    case UN_NOMINATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nominations: action.nominations
      }
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        error: initialErrorState
      }
    default:
      return state;
  }
};

export default rootReducer;