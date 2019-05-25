import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) =>
      dispatch(userActions.login(username, password))
  };
};

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    ownProps,
    isLoggedIn: user.isLoggedIn,
    token: user.token,
    profile: user.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
