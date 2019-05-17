import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import Presenter from './presenter';

const mapStateProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

export default connect(mapStateProps)(Presenter);
