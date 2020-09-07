import React, { useState } from 'react';
import { IMovie } from '../../types';
import { Container } from 'react-bootstrap';
import { Loader, Pagination } from '../common';
import NavBar from '../NavBar';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { IGetSearchResults, IGetMovieInfo } from '../../types/actionTypes';
import { History } from 'history';
export interface ISearchResultPropTypes extends RouteComponentProps {
  searchTerm: string;
  movies: IMovie[];
  isLoading: boolean;
  totalResults: number;
  getSearchResults: (searchTerm: string, page: number) => IGetSearchResults;
  getMovieInfo: (id: string, history: History) => IGetMovieInfo;
}

function SearchResult({ 
  searchTerm, 
  movies, 
  isLoading, 
  totalResults, 
  history,
  getSearchResults,
  getMovieInfo
}: ISearchResultPropTypes) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const addDefaultSrc = (e: any) => {
    e.target.src = require('../../assets/images/broken_img.jpg');
  }

  const handleOnMovieClicked = (id: string) => {
    getMovieInfo(id, history);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    getSearchResults(searchTerm, page);
  }

  const renderMovieList = () => {
    return (
      <div className="list-group pl-3 pr-3 pb-3">
        {movies.map((movie: IMovie, index: number) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column align-items-stretch">
                <a onClick={() => handleOnMovieClicked(movie.imdbID)}><h6 className="m-0">{movie.Title}</h6></a>
                <small className="m-0">{movie.Year}</small>
              </div>
              {movie.Poster !== "N/A" && <div className="image-parent pl-2">
                <img src={movie.Poster} onError={addDefaultSrc} className="img-fluid" alt={`${movie.Title} Movie Poster`}/>
              </div>}
            </li>
          )
        })}
      </div>
    )
  }

  if (isLoading) {
    return <Loader/>
  } else if (searchTerm) {
    return (
      <Container className="d-flex flex-column h-100 p-0 overflow-auto">
        <NavBar/>
        <div>
          <div>
            <p className="m-0 pl-3 pr-3">{totalResults ? `${totalResults} results` : "No results"} for <b>{searchTerm}</b></p>
          </div>
          {(movies && movies.length !== 0) && renderMovieList()}
        </div>
        {(movies && movies.length !== 0) && <Pagination totalItems={totalResults} currentIndex={currentPage} itemLimit={10} onPageClicked={handlePageChange}/>}
      </Container>
    );
  } else {
    return <Redirect to="/"/>
  }
}

export default withRouter(SearchResult);
