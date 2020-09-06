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
}

export interface ISearchByTitlePayload {
  title: string;
  page?: number;
}

export interface ISearchByIdPayload {
  id: string;
}