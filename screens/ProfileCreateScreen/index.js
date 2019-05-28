import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';

import Container from './container';

const mapDispatchToProps = dispatch => ({
  createProfile: form => dispatch(userActions.createProfile(form))
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
