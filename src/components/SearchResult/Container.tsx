import React, { useState, useEffect, SyntheticEvent } from 'react';
import { IMovie } from '../../types';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
export interface ISearchResultPropTypes extends RouteComponentProps {
  searchTerm: string;
  movies: IMovie[];
  isLoading: boolean;
}

function SearchResult({ searchTerm, movies, isLoading }: ISearchResultPropTypes) {
  const [moviesList, setMoviesList] = useState<IMovie[]>([])

  useEffect(() => {
    if (movies) {
      setMoviesList(movies);
    }
  }, [movies]);

  const addDefaultSrc = (e: any) => {
    e.target.src = require('../../assets/images/broken_img.jpg');
  }

  const renderMovieList = () => {
    return (
      <div className="list-group">
        {moviesList.map((movie: IMovie, index: number) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {movie.Title}
              <div className="image-parent pl-2">
                <img src={movie.Poster} onError={addDefaultSrc} className="img-fluid" alt={`${movie.Title} Movie Poster`}/>
              </div>
            </li>
          )
        })}
      </div>
    )
  }

  if (isLoading) {
    return <div>...Loading</div>
  } else if (searchTerm) {
    return (
      <Container className="d-flex flex-column h-100 p-1">
        <NavBar/>
        <div className="pl-2">
          <p className="m-0">{movies.length ? "Results" : "No results"} for <b>{searchTerm}</b></p>
        </div>
        {movies.length !== 0 && renderMovieList()}
      </Container>
    );
  } else {
    return <Redirect to="/"/>
  }
}

export default withRouter(SearchResult);
