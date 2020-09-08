import { connect } from 'react-redux';
import Container from './Container';
import {
} from '../../store/actions';
import { ApplicationState } from '../../types';

const mapStateToProps = ({ movies }: ApplicationState) => ({
  movies
});

export default connect(mapStateToProps, null)(Container);
