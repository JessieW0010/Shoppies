export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ISearchResponse {
  status: number;
  data: ISearchResponseData;
}

interface ISearchResponseData {
  movies: IMovie[];
  Status: boolean;
  totalResults: string;
}

export interface ApplicationState {
  isLoading: boolean;
  movies: IMovie[];
  searchTerm: string;
  totalResults: number;
}

export interface ISearchPayload {
  title: string;
}