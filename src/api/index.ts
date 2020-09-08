import Axios from 'axios';
import {
  ISearchByTitlePayload,
  ISearchByIdPayload,
  ISignInPayload,
  IRegisterPayload,
  INominateMoviePayload
} from '../types';
const API_URL = "https://frozen-dusk-95287.herokuapp.com";

export const searchByTitle = (payload: ISearchByTitlePayload) => {
  return Axios.post(`${API_URL}/search/title`, payload);
};

export const searchById = (payload: ISearchByIdPayload) => {
  return Axios.post(`${API_URL}/search/id`, payload);
};

export const login = (payload: ISignInPayload) => {
  return Axios.post(`${API_URL}/auth/login`, payload);
};

export const register = (payload: IRegisterPayload) => {
  return Axios.post(`${API_URL}/auth/register`, payload);
};

export const nominateMovie = (payload: INominateMoviePayload) => {
  return Axios.post(`${API_URL}/nominate`, payload);
};

export const getNominatedMovies = () => {
  return Axios.get(`${API_URL}/nominate`);
};
