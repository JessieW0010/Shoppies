import { connect } from 'react-redux';
import Container from './Container';
import {
  getSearchResults
} from '../../store/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getSearchResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
