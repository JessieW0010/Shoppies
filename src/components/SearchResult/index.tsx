import { connect } from 'react-redux';
import SearchResult from './Container';
import { ApplicationState } from '../../types';
import { getSearchResults } from '../../store/actions';

const mapStateToProps = (store: ApplicationState) => ({
  movies: store.movies,
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
  // searchTerm: 'No country',
  totalResults: store.totalResults,
});

const mapDispatchToProps = {
  getSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
