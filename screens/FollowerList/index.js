import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {
    user: { token }
  } = state;
  return { token };
};

export default connect(mapStateToProps)(Container);
