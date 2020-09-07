import Axios from 'axios';
import {
  ISearchByTitlePayload,
  ISearchByIdPayload,
  ISignInPayload,
  IRegisterPayload,
  INominateMoviePayload
} from '../types';

export const searchByTitle = (payload: ISearchByTitlePayload) => {
  return Axios.post(`http://localhost:8000/search/title`, payload);
};

export const searchById = (payload: ISearchByIdPayload) => {
  return Axios.post(`http://localhost:8000/search/id`, payload);
};

export const login = (payload: ISignInPayload) => {
  return Axios.post(`http://localhost:8000/auth/login`, payload);
};

export const register = (payload: IRegisterPayload) => {
  return Axios.post(`http://localhost:8000/auth/register`, payload);
};

export const nominateMovie = (payload: INominateMoviePayload) => {
  return Axios.post(`http://localhost:8000/nominate`, payload);
};

export const getNominatedMovies = () => {
  return Axios.get(`http://localhost:8000/nominate`);
};
