import { connect } from 'react-redux';
import Welcome from './Container';
import { ApplicationState } from '../../types';

const mapStateToProps = ({}: ApplicationState) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
