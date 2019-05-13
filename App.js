import React from 'react';
import { AppLoading, Asset } from 'expo';

import LoginCheckNavigator from './navigators/LoginCheckNavigator';
import Icon from './components/Icon';

export default class App extends React.Component {
  state = {
    loading: true
  };

  handleError = e => console.error(e);
  handleLoaded = () => this.setState({ loading: false });
  loadAssets = async () => {
    await Asset.loadAsync(...Object.values(Icon));
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    } else {
      return <LoginCheckNavigator />;
    }
  }
}
