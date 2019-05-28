import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import AccountNavigator from '../../navigators/AccountNavigator';
import MainNavigator from '../../navigators/MainNavigator';
import ProfileCreateScreen from '../../screens/ProfileCreateScreen';

export default class extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func
  };

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <Container>
        {isLoggedIn ? (
          profile ? (
            <>
              <SafeView style="flex:0" />
              <MainNavigator screenProps={{ profile }} />
            </>
          ) : (
            <>
              <SafeView style={{ flex: 0, backgroundColor: '#3AC2D2' }} />
              <ProfileCreateScreen />
            </>
          )
        ) : (
          <AccountNavigator />
        )}
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

const SafeView = styled.SafeAreaView`
  flex: 0;
`;
