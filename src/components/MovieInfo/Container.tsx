import React from 'react';
import { Container } from 'react-bootstrap';
import { Loader } from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IMovieInfo } from '../../types';

interface IMovieInfoProps extends RouteComponentProps {
  isLoading: boolean;
  selectedMovie: IMovieInfo;
}

function MovieInfo({ isLoading, selectedMovie, history }: IMovieInfoProps) {
  if (isLoading) {
    return <Loader/>;
  } else {
    const { Title, Poster, Genre, Year } = selectedMovie;
    return (
      <Container className="movieInfo-container d-flex flex-column h-100 p-0">
        <img src={Poster} className="w-100 img-fluid" alt={`${Title} Movie Poster`}/>
        <div className="card-img-overlay text-white overlay-dark">
          <div className="pt-2 pb-5">
            <FontAwesomeIcon onClick={() => history.goBack()} size="2x" icon={faChevronLeft}/>
            <img width="35px" height="35px" src={require("../../assets/images/avatar.png")} className="rounded float-right" alt="avatar"></img>
          </div>
          <div>
            <small>{Year}</small>
            <h4>{Title}</h4>
            <small>{Genre}</small>
          </div>
        </div>
      </Container>
    )
  }
}

export default withRouter(MovieInfo);
