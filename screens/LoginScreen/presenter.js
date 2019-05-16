import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

import colors from "../../constants/colors";
import device from "../../constants/device";

const BtnInterface = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  padding: 5px;
  margin: 5px;
  background-color: ${props => props.bgColor || colors.TINT_COLOR};
  justify-content: center;
  align-items: center;
`;

const TxtInterface = styled.Text`
  color: ${props => props.color || "white"};
`;

const InputInterface = styled.TextInput`
  border-bottom-width: 1px;
  height: 25px;
  width: 100%;
  padding: 5px;
  margin: 5px;
  border-color: ${colors.TINT_COLOR};
  color: ${colors.TEXT_COLOR};
  border-radius: 20px;
`;

const ComponentContainer = styled.View`
  width: ${device.width - 40};
`;

const Id = styled(InputInterface)``;
const Pw = styled(InputInterface)``;

const LoginButton = styled(BtnInterface)``;
const HelpButton = styled(BtnInterface)``;

const LoginText = styled(TxtInterface)``;
const HelpText = styled(TxtInterface)``;

const InputContainer = styled(ComponentContainer)``;
const HelpContainer = styled(ComponentContainer)``;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_COLOR};
`;

export default withNavigation(
  class extends React.Component {
    static propTypes = {
      isSubmitting: PropTypes.bool.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    };
    constructor(props) {
      super(props);
      this.state = {
        id: "",
        pw: "",
        logging: false
      };
    }

    loginSuccess() {
      const {
        navigation: { navigate }
      } = this.props;

      navigate("MainNavigator");
    }

    login() {
      const { id, pw } = this.state;
      this.setState({ logging: true });
      console.log("ID, PW 로그인 함수:", id, pw);
      setTimeout(this.loginSuccess.bind(this), 1000);
    }

    render() {
      return (
        <Container>
          <InputContainer>
            <Id
              value={this.state.id}
              onChangeText={id => this.setState({ id })}
              placeholder="ID"
              returnKeyType="next"
              textContentType="username"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
            <Pw
              value={this.state.pw}
              ref={ref => {
                this.passwordInput = ref;
              }}
              onChangeText={pw => this.setState({ pw })}
              placeholder="PW"
              returnKeyType="done"
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={this.login.bind(this)}
              secureTextEntry={true}
            />
            <LoginButton onPress={this.login.bind(this)}>
              <LoginText color="white">
                {!this.state.logging ? "로그인" : "..."}
              </LoginText>
            </LoginButton>
          </InputContainer>
          <HelpContainer>
            <HelpButton>
              <HelpText color="white">회원가입</HelpText>
            </HelpButton>
            <HelpButton>
              <HelpText color="white">아이디 / 비밀번호 찾기</HelpText>
            </HelpButton>
          </HelpContainer>
        </Container>
      );
    }
  }
);
