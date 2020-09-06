import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Loader } from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IMovieInfo } from '../../types';

interface IMovieInfoProps extends RouteComponentProps {
  isLoading: boolean;
  selectedMovie: IMovieInfo;
}

function MovieInfo({ isLoading, selectedMovie, history }: IMovieInfoProps) {
  const [display, toggleDisplay] = useState<boolean>(false)

  if (isLoading) {
    return <Loader/>;
  } else {
    const { 
      Title, 
      Poster, 
      Genre, 
      Year, 
      Plot, 
      Director, 
      Actors, 
      Writer, 
      Runtime, 
      Country, 
      Language,
      Rated,
      Awards,
      imdbRating,
      imdbVotes
    } = selectedMovie;
    return (
      <Container className="movieInfo-container d-flex flex-column h-100 p-0">
        <img src={Poster} className="w-100 img-fluid" alt={`${Title} Movie Poster`}/>
        <div className="card-img-overlay text-white overlay-dark overflow-auto">
          <div className="pt-2 pb-5">
            <FontAwesomeIcon onClick={() => history.goBack()} size="2x" icon={faChevronLeft}/>
            <img width="35px" height="35px" src={require("../../assets/images/avatar.png")} className="rounded float-right" alt="avatar"></img>
          </div>

          {/* *** Title *** */}
          <div>
            <small className="text-muted">{Year}</small>
            <h4 className="m-0">{Title}</h4>
            <small className="text-muted">{Genre}</small>
            <small className="text-muted float-right">{Runtime}</small>
          </div>

          {/* *** Ratings *** */}
          <div className="row pt-4">
            <span className="col-6 d-flex flex-column align-items-center">
              <p className="m-0">{imdbRating}</p>
              <small className="text-muted">IMDB Rating</small>
            </span>
            <span className="col-6 d-flex flex-column align-items-center">
              <p className="m-0">{imdbVotes}</p>
              <small className="text-muted">Votes</small>
            </span>
          </div>

          {/* *** Plot *** */}
          <div className="mt-4">
            <small className="text-muted">Plot: </small>
            <p className="m-0">{display ? Plot : `${Plot.slice(0, 300)}...`}</p>
            <small onClick={() => toggleDisplay(!display)} className="text-muted float-right">{display ? "Show less" : "Show more"}</small>
          </div>

          {/* *** More Info *** */}
          <div className="mt-5">
            <div className="row">
              <small className="text-muted col-3">Directed by: </small>
              <small className="col-9">{Director}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Written by: </small>
              <small className="col-9">{Writer}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Starring: </small>
              <small className="col-9">{Actors}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Awards: </small>
              <small className="col-9">{Awards}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Country: </small>
              <small className="col-9">{Country}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Language: </small>
              <small className="col-9">{Language}</small>
            </div>
            <div className="row">
              <small className="text-muted col-3">Rated: </small>
              <small className="col-9">{Rated}</small>
            </div>
          </div>
          <div className="mt-3">

          </div>
        </div>
      </Container>
    )
  }
}

export default withRouter(MovieInfo);
