import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: form => {
      dispatch(userActions.signup(form));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
