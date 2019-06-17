import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

export default class extends React.Component {
  static propTypes = {
    profile: PropTypes.object
  };

  _checkProfile() {
    const {
      profile,
      navigation: { navigate }
    } = this.props;
    if (profile) {
      navigate('MainScreen');
    } else {
      navigate('ProfileCreateScreen');
    }
  }

  componentWillMount() {
    this._checkProfile();
  }

  render() {
    return <Loading />;
  }
}
