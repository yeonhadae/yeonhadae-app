import React from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

import colors from '../constants/colors';
import device from '../constants/device';

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
  color: ${props => props.color || 'white'};
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
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        pw: '',
        logging: false
      };
    }

    loginSuccess() {
      const {
        navigation: { navigate }
      } = this.props;

      navigate('MainNavigator');
    }

    login(id, pw) {
      this.setState({ logging: true });
      console.log(id, pw);
      setTimeout(this.loginSuccess.bind(this), 3000);
    }

    onSubmitInfo({ nativeEvent: text }, section = 'pw') {
      this.setState({ [section]: text });
      const { id, pw } = this.state;
      if (section === 'id') {
        this.passwordInput.focus();
      } else {
        this.login(id, pw);
      }
    }

    render() {
      return (
        <Container>
          <InputContainer>
            <Id
              placeholder="ID"
              returnKeyType="next"
              textContentType="username"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={e => this.onSubmitInfo(e, 'id').bind(this)}
            />
            <Pw
              ref={ref => {
                this.passwordInput = ref;
              }}
              placeholder="PW"
              returnKeyType="done"
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <LoginButton onPress={this.login.bind(this)}>
              <LoginText color="white">
                {!this.state.logging ? '로그인' : '...'}
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
