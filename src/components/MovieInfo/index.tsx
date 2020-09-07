import { connect } from 'react-redux';
import MovieInfo from './Container';
import { ApplicationState } from '../../types';
import { getMovieInfo, nominateMovie } from '../../store/actions';

const mapStateToProps = ({ selectedMovie, isLoading }: ApplicationState) => ({
  selectedMovie,
  isLoading
});

const mapDispatchToProps = {
  getMovieInfo,
  nominateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
