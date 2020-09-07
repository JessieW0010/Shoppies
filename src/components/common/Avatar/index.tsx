import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState, IUser, IMovieInfo } from '../../../types';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const mapStateToProps = ({ user, nominations }: ApplicationState) => ({
  user,
  nominations
});

interface IAvatarProps extends RouteComponentProps {
  user: IUser;
  nominations: IMovieInfo[];
}

function Avatar({ user, nominations, history }: IAvatarProps) {

  const handleOnMovieClicked = (id: string) => {
    history.push(`/movie/${id}`);
  }

  return (
    <div className="avatar p-4 d-flex align-items-center">
      <p className="text-white m-0 pr-3">{user.first_name}</p>
      <div className="dropdown">
        <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
          <img src={require("../../../assets/images/avatar.png")} width="35" height="35" className="d-inline-block align-top rounded" alt="Shoppies Logo"/>
        </div>
        <div className="dropdown-menu" style={{ right: 0, left: '-200px'}} aria-labelledby="dropdownMenuButton">
            { nominations.map((movie: IMovieInfo, index: number) => (
                <div onClick={() => handleOnMovieClicked(movie.imdbID)} key={index} className="dropdown-item d-flex justify-content-around align-items-center">
                  <div className="d-flex flex-column align-items-stretch">
                    <h6 className="m-0 text-dark">{movie.Title}</h6>
                    <small className="m-0 text-dark">{movie.Year}</small>
                  </div>
                  {movie.Poster !== "N/A" && <div className="image-parent pl-2">
                    <img src={movie.Poster} className="img-fluid" alt={`${movie.Title} Movie Poster`}/>
                  </div>}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(withRouter(Avatar));