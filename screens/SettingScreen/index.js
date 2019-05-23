import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => {
      dispatch(userActions.setLogout());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Container);
