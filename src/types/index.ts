export interface IRatings {
  Source: string;
  Value: string;
}

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
  data: IMovie[];
  Status: boolean;
}

export interface ApplicationState {
  isLoading: boolean;
  movie: IMovie | null;
}

export interface ISearchPayload {
  title: string;
}