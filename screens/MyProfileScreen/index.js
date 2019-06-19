import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user: account, isLoggedIn, profile, token } = state;
  return {
    account,
    isLoggedIn,
    profile,
    token
  };
};

export default connect(mapStateToProps)(Container);
