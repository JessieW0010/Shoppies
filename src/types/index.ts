export interface IRatings {
  Source: string;
  Value: string;
}

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Poster: string;
  Ratings: IRatings[];
}

export interface ApplicationState {
  isLoading: boolean;
  movie: IMovie | null;
}