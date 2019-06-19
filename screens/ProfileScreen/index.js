import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {
    user: { profile: userProfile, token }
  } = state;
  return { userProfile, token };
};

export default connect(mapStateToProps)(Container);
