import { connect } from 'react-redux';
import Container from './Container';

interface IStore {
  movie: any
  isLoading: boolean
}

const mapStateToProps = (store: IStore) => ({
  movie: store.movie,
  loading: store.isLoading
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
