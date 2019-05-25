import React from "react";
import styled from "styled-components";
import { SafeAreaView, Text } from "react-native";
import colors from "../../constants/colors";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  render() {
    return (
      <>
        <SafeAreaView style="flex:0" />
        <Container>
          <InputContainer>
            <UsernameTextInput />
            <PasswordTextInput />
            <EmailTextInput />
          </InputContainer>
          <SubmitButton>
            <Text>가입하기</Text>
          </SubmitButton>
        </Container>
      </>
    );
  }
}

const Container = styled.View`
  flex: 1;
  width: 70%;
  align-items: center;
  justify-content: space-around;
`;

const InputContainer = styled.View`
  flex: 0.5;
  width: 100%;
  justify-content: space-around;
`;

const InputBox = styled.View``;
const InputInterface = styled.TextInput`
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.TINT_COLOR};
`;

const UsernameTextInput = styled(InputInterface)``;
const PasswordTextInput = styled(InputInterface)``;
const EmailTextInput = styled(InputInterface)``;

const SubmitButton = styled.TouchableOpacity`
  background-color: ${colors.TINT_COLOR};
  color: ${colors.TEXT_COLOR};
  width: 50px;
  height: 25px;
`;
