import { connect } from 'react-redux';
import Presenter from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    token: user.token,
    account: user.account
  };
};

export default connect(mapStateToProps)(Presenter);
