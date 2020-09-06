import React, { useState, useEffect } from 'react';
import { IMovie } from '../../types';
import { Container, Col } from 'react-bootstrap';
import NavBar from '../NavBar';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
export interface ISearchResultPropTypes extends RouteComponentProps {
  searchTerm: string;
  movies: IMovie[];
  isLoading: boolean;
  totalResults: number;
}

function SearchResult({ searchTerm, movies, isLoading, totalResults }: ISearchResultPropTypes) {
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
      <div className="list-group pl-3 pr-3 pb-3">
        {moviesList.map((movie: IMovie, index: number) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column align-items-stretch">
                <h6 className="m-0">{movie.Title}</h6>
                <small className="m-0">{movie.Year}</small>
              </div>
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
      <Container className="d-flex flex-column h-100 p-0">
        <NavBar/>
        <div>
          <div>
            <p className="m-0 pl-3 pr-3">{totalResults ? `${totalResults} results` : "No results"} for <b>{searchTerm}</b></p>
          </div>
          {movies.length !== 0 && renderMovieList()}
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/"/>
  }
}

export default withRouter(SearchResult);
