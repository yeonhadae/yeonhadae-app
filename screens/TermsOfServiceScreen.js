import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import colors from '../constants/colors';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  _handleAgree() {
    const {
      navigation: { navigate }
    } = this.props;

    navigate('SignupFormScreen');
  }

  render() {
    return (
      <>
        <SafeAreaView style={'flex: 0'} />
        <Screen>
          <Container>
            <Terms>
              <Text>
                Cillum sunt consequat qui ad officia quis ullamco quis
                adipisicing pariatur irure quis cupidatat occaecat.Cillum sunt
                consequat qui ad officia quis ullamco quis adipisicing pariatur
                irure quis cupidatat occaecat.Cillum sunt consequat qui ad
                officia quis ullamco quis adipisicing pariatur irure quis
                cupidatat occaecat.Cillum sunt consequat qui ad officia quis
                ullamco quis adipisicing pariatur irure quis cupidatat
                occaecat.Cillum sunt consequat qui ad officia quis ullamco quis
                adipisicing pariatur irure quis cupidatat occaecat.Cillum sunt
                consequat qui ad officia quis ullamco quis adipisicing pariatur
                irure quis cupidatat occaecat.Cillum sunt consequat qui ad
                officia quis ullamco quis adipisicing pariatur irure quis
                cupidatat occaecat.Cillum sunt consequat qui ad officia quis
                ullamco quis adipisicing pariatur irure quis cupidatat
                occaecat.Cillum sunt consequat qui ad officia quis ullamco quis
                adipisicing pariatur irure quis cupidatat occaecat.Cillum sunt
                consequat qui ad officia quis ullamco quis adipisicing pariatur
                irure quis cupidatat occaecat.Cillum sunt consequat qui ad
                officia quis ullamco quis adipisicing pariatur irure quis
                cupidatat occaecat.Cillum sunt consequat qui ad officia quis
                ullamco quis adipisicing pariatur irure quis cupidatat
                occaecat.Cillum sunt consequat qui ad officia quis ullamco quis
                adipisicing pariatur irure quis cupidatat occaecat.
              </Text>
            </Terms>
            <AgreeButton onPressOut={this._handleAgree.bind(this)}>
              <Text style={{ color: 'white' }}>동의합니다.</Text>
            </AgreeButton>
          </Container>
        </Screen>
      </>
    );
  }
}

const Screen = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.MAIN_COLOR};
`;

const Container = styled.View`
  flex: 1;
  width: 85%;
  align-items: center;
  justify-content: space-around;
`;

const Terms = styled.ScrollView`
  width: 100%;
  flex: 0.7;
`;

const AgreeButton = styled.TouchableOpacity`
  background-color: ${colors.TINT_COLOR};
  color: ${colors.TEXT_COLOR};
  width: 100px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
