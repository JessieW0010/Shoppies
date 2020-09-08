import { connect } from 'react-redux';
import MovieInfo from './Container';
import { ApplicationState } from '../../types';
import { getMovieInfo, nominateMovie, unNominateMovie } from '../../store/actions';

const mapStateToProps = ({ selectedMovie, isLoading, nominations }: ApplicationState) => ({
  selectedMovie,
  isLoading,
  nominations
});

const mapDispatchToProps = {
  getMovieInfo,
  nominateMovie,
  unNominateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
