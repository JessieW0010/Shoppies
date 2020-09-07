import { connect } from 'react-redux';
import SearchResult from './Container';
import { ApplicationState } from '../../types';
import { getSearchResults, getMovieInfo } from '../../store/actions';

const mapStateToProps = (store: ApplicationState) => ({
  movies: store.movies,
  isLoading: store.isLoading,
  searchTerm: "rambi",
  totalResults: store.totalResults,
});

const mapDispatchToProps = {
  getSearchResults,
  getMovieInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
