import React from 'react';
import LoginCheckNavigator from './navigators/LoginCheckNavigator';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  background-color: transparent;
  flex: 1;
`;

export default class App extends React.Component {
  render() {
    return <LoginCheckNavigator />;
  }
}
