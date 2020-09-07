import { connect } from 'react-redux';
import Register from './Container';
import { ApplicationState } from '../../types';
import { register } from '../../store/actions';

const mapStateToProps = ({}: ApplicationState) => ({
});

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
