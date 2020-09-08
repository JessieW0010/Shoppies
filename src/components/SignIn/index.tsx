import { connect } from 'react-redux';
import SignIn from './Container';
import { ApplicationState } from '../../types';
import { signIn } from '../../store/actions';

const mapStateToProps = ({ isLoading, error }: ApplicationState) => ({
  isLoading,
  serverError: error.login
});

const mapDispatchToProps = {
  signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
