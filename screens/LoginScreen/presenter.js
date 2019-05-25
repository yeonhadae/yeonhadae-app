import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ActivityIndicator, Image } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import images, { LoginInputIcon } from '../../components/Icon';
import colors from '../../constants/colors';
import device from '../../constants/device';

const getLogoSize = imagesUri => {
  const result = resolveAssetSource(imagesUri);
  const { height, width } = result;
  return { originWidth: width, originHeight: height };
};

const { width: deviceWidth } = device;
const { originWidth, originHeight } = getLogoSize(images.logo);
const logoWidth = deviceWidth - 100;
const logoHeight = originHeight * (logoWidth / originWidth);

export default class extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changePassword: PropTypes.func.isRequired,
    changeUsername: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    toSignup: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <LogoContainer>
          <Logo
            source={images.logo}
            resizeMode={'contain'}
            style={{ width: logoWidth, height: logoHeight }}
          />
        </LogoContainer>
        <InputContainer>
          <InputBox>
            <LoginInputIcon color={colors.TINT_COLOR} name="username" />
            <Id
              value={this.props.username}
              onChangeText={id => this.props.changeUsername(id)}
              placeholder="ID"
              returnKeyType="next"
              textContentType="username"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
          </InputBox>
          <InputBox>
            <LoginInputIcon color={colors.TINT_COLOR} name="password" />
            <Pw
              value={this.props.password}
              ref={ref => {
                this.passwordInput = ref;
              }}
              onChangeText={pw => this.props.changePassword(pw)}
              placeholder="PW"
              returnKeyType="done"
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={this.props.submit}
              secureTextEntry={true}
            />
          </InputBox>
        </InputContainer>
        <HelpContainer>
          <LoginButton onPressOut={this.props.submit}>
            {!this.props.isSubmitting ? (
              <LoginText color="white">로그인</LoginText>
            ) : (
              <ActivityIndicator size="small" color="white" />
            )}
          </LoginButton>
          <HelpButton onPressOut={this.props.toSignup}>
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

const BtnInterface = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  padding: 5px;
  background-color: ${props => props.bgColor || colors.TINT_COLOR};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const TxtInterface = styled.Text`
  color: ${props => props.color || 'white'};
`;

const InputInterface = styled.TextInput`
  height: 25px;
  flex: 0.8
  color: ${colors.TEXT_COLOR};
`;

const ComponentContainer = styled.View`
  width: 70%;
`;

const InputBox = styled.View`
  border-bottom-width: 1px;
  height: 25px;
  flex-direction: row;
  border-color: ${colors.TINT_COLOR};
  padding-bottom: 15px;
  margin: 5px;
`;

const Id = styled(InputInterface)``;
const Pw = styled(InputInterface)``;

const LoginButton = styled(BtnInterface)``;
const HelpButton = styled(BtnInterface)``;

const LoginText = styled(TxtInterface)``;
const HelpText = styled(TxtInterface)``;

const InputContainer = styled(ComponentContainer)`
  flex: 0.3;
  justify-content: center;
`;
const HelpContainer = styled(ComponentContainer)`
  flex: 0.3;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const LogoContainer = styled(ComponentContainer)`
  flex: 0.3;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;

  background-color: ${colors.MAIN_COLOR};
`;

const Logo = styled.Image``;
