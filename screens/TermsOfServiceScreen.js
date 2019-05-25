import React from "react";
import { Text, SafeAreaView } from "react-native";
import styled from "styled-components";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  _handleAgree() {
    const {
      navigation: { navigate }
    } = this.props;

    navigate("SignupScreen");
  }

  render() {
    return (
      <>
        <SafeAreaView style={"flex: 0"} />
        <Container>
          <AgreeButton onPressOut={this._handleAgree.bind(this)}>
            <Text>동의합니다.</Text>
          </AgreeButton>
        </Container>
      </>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AgreeButton = styled.TouchableOpacity`
  height: 25px;
`;
