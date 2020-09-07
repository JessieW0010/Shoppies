export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ISearchResponse {
  status: number;
  data: {
    movies: IMovie[];
    Status: boolean;
    totalResults: string;
  }
}

export interface ISearchMovieInfoResponse {
  status: number;
  data: {
    movie: IMovieInfo;
  };
}

export interface ISignInResponse {
  status: number;
  data: {
    token: string;
  }
}

export interface INominateMovieResponse {
  status: number;
  data: {
    nominated: { imdbID: string }[]
  }
}

export interface IMovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface ApplicationState {
  isLoading: boolean;
  movies: IMovie[];
  searchTerm: string;
  totalResults: number;
  selectedMovie: IMovieInfo | null;
  user: IUser | null;
  nominations: IMovieInfo[];
  error: IErrorState;
}

export interface IErrorState {
  register: number | null;
  login: number | null;
}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  id: number;
  iat: number;
}

export interface ISearchByTitlePayload {
  title: string;
  page?: number;
}

export interface ISearchByIdPayload {
  id: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface INominateMoviePayload {
  imdbIDs: string[];
}