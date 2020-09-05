import Axios from 'axios';

export const search = (movieTitle: string) => {
  return Axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${movieTitle}`)
};
