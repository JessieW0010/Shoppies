import { connect } from 'react-redux';
import SearchResult from './Container';
import { ApplicationState } from '../../types';

const mapStateToProps = (store: ApplicationState) => ({
  movies: store.movies,
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
  totalResults: store.totalResults
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
