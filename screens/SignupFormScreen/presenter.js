import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';

export default class extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username: PropTypes.string,
    password: PropTypes.string,
    password2: PropTypes.string,
    email: PropTypes.string,
    changeText: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    errors: PropTypes.object
  };

  render() {
    const { errors: err } = this.props;

    return (
      <>
        <SafeAreaView style="flex:0" />
        <Screen>
          <Container>
            <InputContainer>
              <InputBox>
                <UsernameTextInput
                  value={this.props.username}
                  onChangeText={this.props.changeText('username')}
                  placeholder="아이디"
                  returnKeyType="next"
                  textContentType="username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={() => {
                    this.passwordInput.focus();
                  }}
                />
                <ErrorBox>
                  {err.username
                    ? err.username.map((e, index) => (
                        <ErrorText key={index}>{e}</ErrorText>
                      ))
                    : null}
                </ErrorBox>
              </InputBox>
              <InputBox>
                <PasswordTextInput
                  value={this.props.password}
                  ref={ref => {
                    this.passwordInput = ref;
                  }}
                  onChangeText={this.props.changeText('password')}
                  placeholder="비밀번호"
                  returnKeyType="next"
                  textContentType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    this.passwordInput2.focus();
                  }}
                />
                <ErrorBox>
                  {err.password
                    ? err.password.map((e, index) => (
                        <ErrorText key={index}>{e}</ErrorText>
                      ))
                    : null}
                </ErrorBox>
              </InputBox>
              <InputBox>
                <PasswordTextInput
                  value={this.props.password2}
                  ref={ref => {
                    this.passwordInput2 = ref;
                  }}
                  onChangeText={this.props.changeText('password2')}
                  placeholder="비밀번호 재확인"
                  returnKeyType="next"
                  textContentType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    this.emailInput.focus();
                  }}
                />
                <ErrorBox>
                  {err.password2
                    ? err.password2.map((e, index) => (
                        <ErrorText key={index}>{e}</ErrorText>
                      ))
                    : null}
                </ErrorBox>
              </InputBox>
              <InputBox>
                <EmailTextInput
                  value={this.props.email}
                  ref={ref => {
                    this.emailInput = ref;
                  }}
                  onChangeText={this.props.changeText('email')}
                  placeholder="이메일"
                  returnKeyType="done"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <ErrorBox>
                  {err.email
                    ? err.email.map((e, index) => (
                        <ErrorText key={index}>{e}</ErrorText>
                      ))
                    : null}
                </ErrorBox>
              </InputBox>
            </InputContainer>
            <SubmitButton onPressOut={this.props.submit}>
              {this.props.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Text style={{ color: 'white' }}>가입하기</Text>
              )}
            </SubmitButton>
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
  width: 70%;
  align-items: center;
  justify-content: space-around;
`;

const InputContainer = styled.View`
  flex: 0.5;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const InputBox = styled.View`
  width: 100%;
`;
const ErrorBox = styled.View``;
const ErrorText = styled.Text`
  color: ${colors.ERROR_TEXT};
  font-size: 14px;
`;

const InputInterface = styled.TextInput`
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.TINT_COLOR};
  color: ${colors.TEXT_COLOR};
`;

const UsernameTextInput = styled(InputInterface)``;
const PasswordTextInput = styled(InputInterface)``;
const EmailTextInput = styled(InputInterface)``;

const SubmitButton = styled.TouchableOpacity`
  background-color: ${colors.TINT_COLOR};
  color: ${colors.TEXT_COLOR};
  width: 100px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
