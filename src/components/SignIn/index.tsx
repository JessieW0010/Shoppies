import { connect } from 'react-redux';
import SignIn from './Container';
import { ApplicationState } from '../../types';
import { signIn } from '../../store/actions';

const mapStateToProps = ({ isLoading }: ApplicationState) => ({
  isLoading
});

const mapDispatchToProps = {
  signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
