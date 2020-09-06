import { connect } from 'react-redux';
import Container from './Container';
import {
} from '../../store/actions';
import { ApplicationState } from '../../types';

const mapStateToProps = (state: ApplicationState) => ({
  movies: state.movies
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
