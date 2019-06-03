import { connect } from 'react-redux';

import { actionCreators as userActions } from '../../redux/modules/user';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    token: user.token,
    account: user.account
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (username, password) =>
    dispatch(userActions.login(username, password)),
  logout: () => dispatch(userActions.setLogout()),
  validateToken: (id, username, token) =>
    dispatch(userActions.validateToken(id, username, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
