/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Avatar } from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { IMovieInfo } from '../../types';
import { useMediaQuery } from 'react-responsive';
import { History } from 'history';
import addDefaultSrc from '../../helpers/addDefaultSrc';
import { INominateMovie } from '../../types/actionTypes';
import { ToastContainer } from 'react-toastify';
interface IMovieInfoProps extends RouteComponentProps {
  selectedMovie: IMovieInfo | null;
  nominateMovie: (movie: IMovieInfo) => INominateMovie;
  getMovieInfo: (id: string, history?: History) => void;
  nominstaions: IMovieInfo[];
}

function MovieInfo({
  selectedMovie,
  history,
  nominateMovie,
  getMovieInfo,
  nominations
}: IMovieInfoProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 725px)' });

  useEffect(() => {
    const id = history.location.pathname.split('/').pop();
    if (!selectedMovie) {
      if (id) getMovieInfo(id);
    }
  });

  const [display, toggleDisplay] = useState<boolean>(false);

  const handleNomination = () => {
    if (selectedMovie) {
      nominateMovie(selectedMovie);
    }
  };

  const renderMoreInfo = (selectedMovie: IMovieInfo) => {
    const {
      Director,
      Actors,
      Writer,
      Country,
      Language,
      Rated,
      Awards,
    } = selectedMovie;
    return (
      <div className='mt-5 w-100'>
        <div className='row'>
          <small className='text-muted col-3'>Directed by: </small>
          <small className='col-9'>{Director}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Written by: </small>
          <small className='col-9'>{Writer}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Starring: </small>
          <small className='col-9'>{Actors}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Awards: </small>
          <small className='col-9'>{Awards}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Country: </small>
          <small className='col-9'>{Country}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Language: </small>
          <small className='col-9'>{Language}</small>
        </div>
        <div className='row'>
          <small className='text-muted col-3'>Rated: </small>
          <small className='col-9'>{Rated}</small>
        </div>
      </div>
    );
  };

  const renderRatings = (imdbRating: string, imdbVotes: string) => {
    return (
      <div className='row pt-4'>
        <span className='col-6 d-flex flex-column align-items-center'>
          <p className='m-0'>{imdbRating}</p>
          <small className='text-muted'>IMDB Rating</small>
        </span>
        <span className='col-6 d-flex flex-column align-items-center'>
          <p className='m-0'>{imdbVotes}</p>
          <small className='text-muted'>Votes</small>
        </span>
      </div>
    );
  };

  const renderPlot = (Plot: string) => {
    return (
      <div className='mt-4 w-100'>
        <small className='text-muted'>Plot: </small>
        {Plot.length > 300 ? (
          <>
            <p className='m-0'>{display ? Plot : `${Plot.slice(0, 300)}...`}</p>
            <small
              onClick={() => toggleDisplay(!display)}
              className='text-muted float-right'
            >
              {display ? 'Show less' : 'Show more'}
            </small>
          </>
        ) : (
          <p className='m-0'>{Plot}</p>
        )}
      </div>
    );
  };

  const renderNominateBtn = () => {
    let isDisabled = false;
    nominations.forEach((movie: IMovieInfo) => {
      if (movie.imdbID === selectedMovie?.imdbID) { isDisabled = true }
    })
    return (
      <div className='d-flex flex-column align-items-center w-100'>
        <button
          onClick={handleNomination}
          type='button'
          className='btn btn-primary btn-sm w-75 mt-3'
          disabled={isDisabled}
        >
          Nominate
        </button>
      </div>
    )
  };

  if (selectedMovie) {
    const {
      Title,
      Poster,
      Genre,
      Year,
      Plot,
      Runtime,
      imdbRating,
      imdbVotes,
    } = selectedMovie;

    if (isTabletOrMobile) {
      return (
        <Container className='d-flex flex-column h-100 p-0 overflow-auto'>
          <img
            src={Poster}
            className='w-100 img-fluid'
            alt={`${Title} Movie Poster`}
          />
          <div className='back-btn card-img-overlay text-white overlay-dark overflow-auto'>
            <div className='pt-2 pb-5'>
              <FontAwesomeIcon
                onClick={() => history.goBack()}
                size='2x'
                icon={faChevronLeft}
              />
              <Avatar />
              <ToastContainer />
            </div>

            {/* *** Title *** */}
            <div>
              <small className='text-muted'>{Year}</small>
              <h4 className='m-0'>{Title}</h4>
              <small className='text-muted'>{Genre}</small>
              <small className='text-muted float-right'>{Runtime}</small>
            </div>

            {renderRatings(imdbRating, imdbVotes)}

            {renderPlot(Plot)}

            {renderMoreInfo(selectedMovie)}

            {renderNominateBtn()}
          </div>
        </Container>
      );
    } else {
      return (
        <div className='d-flex flex-column h-100 p-0  overflow-auto'>
          <div className='text-white pt-4 pb-2 pl-3 pr-2'>
            <div className='back-btn d-flex align-items-center'>
              <FontAwesomeIcon
                onClick={() => history.goBack()}
                size='2x'
                icon={faChevronLeft}
              />
              <h4 className='movie-title m-0 pl-3'>
                {Title} ({Year})
              </h4>
            </div>
            <Avatar />
            <ToastContainer />
          </div>
          <div className='row m-0 pt-3'>
            <div className='col-4 p-3 d-flex flex-column align-items-center'>
              <img
                src={
                  Poster === 'N/A'
                    ? require('../../assets/images/no_img.jpg')
                    : Poster
                }
                onError={addDefaultSrc}
                className='img-fluid w-75 shadow-lg rounded'
                alt={`${Title} Movie Poster`}
              />
              {renderRatings(imdbRating, imdbVotes)}
              {renderNominateBtn()}
            </div>
            <div className='col-7 d-flex flex-column align-items-center'>
              {/* *** Plot *** */}
              {renderPlot(Plot)}

              {renderMoreInfo(selectedMovie)}
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <div>hi</div>;
  }
}

export default withRouter(MovieInfo);
