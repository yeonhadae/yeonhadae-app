import Container from './container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const {
    user: { profile }
  } = state;
  return {
    profile
  };
};

export default connect(mapStateToProps)(Container);
