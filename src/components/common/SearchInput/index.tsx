import { connect } from 'react-redux';
import Container from './Container';
import { getSearchResults } from '../../../store/actions';
import { ApplicationState } from '../../../types';

const mapStateToProps = (state: ApplicationState) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
