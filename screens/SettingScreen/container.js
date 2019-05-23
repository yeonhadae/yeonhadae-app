import React from 'react';

import Presenter from './presenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  _logout() {
    const {
      navigation: { navigate },
      logout
    } = this.props;

    logout();
    navigate('LoginScreen');
  }

  render() {
    return <Presenter logout={this._logout.bind(this)} />;
  }
}
