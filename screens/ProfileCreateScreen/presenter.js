import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, ActivityIndicator } from 'react-native';

import colors from '../../constants/colors';
import Icon from '../../components/Icon';
import device from '../../constants/device';
import SafeZone from '../../components/MainTopSafeArea';
import { SEOUL } from '../../constants/locations';
import { IN_SEOUL } from '../../constants/universities';

export default class extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    name: PropTypes.string,
    gender: PropTypes.string,
    univ: PropTypes.string,
    location: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    avatar: PropTypes.object.isRequired,
    errors: PropTypes.object,
    //religion: PropTypes,
    //heigth: PropTypes,
    //weight: PropTypes,
    //is_smoker: PropTypes
    submit: PropTypes.func.isRequired,
    uploadAvatar: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired
  };

  render() {
    const {
      avatar,
      gender,
      univ,
      name,
      location,
      latitude,
      longitude,
      errors,
      isSubmitting
    } = this.props;
    return (
      <>
        <SafeZone />
        <Screen>
          <FormContainer>
            <Container>
              <AvatarField>
                <AddAvatarImage onPressOut={this.props.uploadAvatar}>
                  {avatar.uri ? (
                    <Avatar source={{ uri: avatar.uri }} />
                  ) : (
                    <Avatar source={Icon.profile} />
                  )}
                </AddAvatarImage>
                <ErrorBox>
                  {errors.avatar &&
                    errors.avatar.map((e, index) => (
                      <ErrorText key={index}>{e}</ErrorText>
                    ))}
                </ErrorBox>
              </AvatarField>
              <NameField>
                <InputBox>
                  <InputText
                    value={name}
                    onChangeText={this.props.onValueChange('name')}
                    placeholder="이름"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </InputBox>
                <ErrorBox>
                  {errors.name &&
                    errors.name.map((e, index) => (
                      <ErrorText key={index}>{e}</ErrorText>
                    ))}
                </ErrorBox>
              </NameField>
              <LocationField>
                <PickerBox>
                  <RNPickerSelect
                    value={location}
                    style={{
                      ...style,
                      placeholder: { color: colors.TEXT_COLOR }
                    }}
                    placeholder={{ label: '원하는 미팅 장소', value: null }}
                    onValueChange={this.props.onValueChange('location')}
                    items={SEOUL}
                  />
                </PickerBox>
                <ErrorBox>
                  {errors.location &&
                    errors.location.map((e, index) => (
                      <ErrorText key={index}>{e}</ErrorText>
                    ))}
                </ErrorBox>
              </LocationField>
              <UnivField>
                <PickerBox>
                  <RNPickerSelect
                    value={univ}
                    style={{
                      ...style,
                      placeholder: { color: colors.TEXT_COLOR }
                    }}
                    placeholder={{
                      label: '대학을 선택해주세요.',
                      value: null
                    }}
                    onValueChange={this.props.onValueChange('univ')}
                    items={IN_SEOUL}
                  />
                </PickerBox>
                <ErrorBox>
                  {errors.univ &&
                    errors.univ.map((e, index) => (
                      <ErrorText key={index}>{e}</ErrorText>
                    ))}
                </ErrorBox>
              </UnivField>
              <GenderField>
                <PickerBox>
                  <RNPickerSelect
                    value={gender}
                    placeholder={{
                      label: '성별을 선택해주세요.',
                      value: null,
                      color: 'black'
                    }}
                    style={{
                      ...style,
                      placeholder: { color: colors.TEXT_COLOR }
                    }}
                    onValueChange={this.props.onValueChange('gender')}
                    items={[
                      { label: '남자', value: 'M' },
                      { label: '여자', value: 'F' }
                    ]}
                  />
                </PickerBox>
                <ErrorBox>
                  {errors.gender &&
                    errors.gender.map((e, index) => (
                      <ErrorText key={index}>{e}</ErrorText>
                    ))}
                </ErrorBox>
              </GenderField>
            </Container>
          </FormContainer>
          <ButtonContainer>
            <SubmitButton onPressOut={this.props.submit}>
              {isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <SubmitText>프로필 만들기</SubmitText>
              )}
            </SubmitButton>
          </ButtonContainer>
        </Screen>
      </>
    );
  }
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.TINT_COLOR,
    borderRadius: 4,
    color: colors.TEXT_COLOR,
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

const Screen = styled.View`
  background-color: ${colors.MAIN_COLOR};
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-around;
`;

const ButtonContainer = styled.View`
  width: 85%;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50%;
  height: 50%;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  background-color: ${colors.TINT_COLOR};
`;
const SubmitText = styled.Text`
  color: white;
`;
const FormContainer = styled.ScrollView`
  width: 85%;
  flex: 1;
`;

const InputContainer = styled.View`
  width: 100%;
`;

const NameField = styled(InputContainer)``;
const GenderField = styled(InputContainer)``;
const UnivField = styled(InputContainer)``;
const LocationField = styled(InputContainer)``;
const AvatarField = styled(InputContainer)`
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.View`
  width: 100%;
  height: ${device.height * 0.1};
  border-bottom-width: 1px;
  border-color: ${colors.TINT_COLOR};
  justify-content: flex-end;
`;

const PickerBox = styled.View`
  width: 100%;
  height: ${device.height * 0.1};
  justify-content: flex-end;
`;

const AddAvatarImage = styled.TouchableOpacity``;

const Avatar = styled.Image`
  background-color: ${colors.UNSELECTED_ICON};
  border-radius: 50;
  border-width: 1px;
  border-color: ${colors.TINT_COLOR};
  width: 150px;
  height: 150px;
`;

const InputText = styled.TextInput`
  color: ${colors.TEXT_COLOR};
`;

const ErrorBox = styled.View`
  width: 100%;
`;

const ErrorText = styled.Text`
  font-size: 14px;
  color: ${colors.ERROR_TEXT};
`;
