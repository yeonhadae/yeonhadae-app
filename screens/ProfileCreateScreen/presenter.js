import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
import Icon from '../../components/Icon';
import device from '../../constants/device';
import { SEOUL } from '../../constants/locations';
import { IN_SEOUL } from '../../constants/universities';

export default class extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    univ: PropTypes.string.isRequired,
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
      errors
    } = this.props;
    return (
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
            </AvatarField>
            <NameField>
              <InputBox>
                <InputText />
              </InputBox>
              <ErrorBox>
                {errors.name &&
                  errors.name.map(e => <ErrorText>{e}</ErrorText>)}
              </ErrorBox>
            </NameField>
            <LocationField>
              <InputBox>
                <RNPickerSelect
                  value={location}
                  style={style}
                  placeholder={{ label: '원하는 미팅 장소', value: null }}
                  onValueChange={this.props.onValueChange('location')}
                  items={SEOUL}
                />
              </InputBox>
              <ErrorBox>
                {errors.location &&
                  errors.location.map((e, index) => (
                    <ErrorText key={index}>{e}</ErrorText>
                  ))}
              </ErrorBox>
            </LocationField>
            <UnivField>
              <InputBox>
                <RNPickerSelect
                  value={univ}
                  style={style}
                  placeholder={{
                    label: '대학을 선택해주세요.',
                    value: null
                  }}
                  onValueChange={this.props.onValueChange('univ')}
                  items={IN_SEOUL}
                />
              </InputBox>
              <ErrorBox>
                {errors.univ &&
                  errors.univ.map((e, index) => (
                    <ErrorText key={index}>{e}</ErrorText>
                  ))}
              </ErrorBox>
            </UnivField>
            <GenderField>
              <InputBox>
                <RNPickerSelect
                  value={gender}
                  placeholder={{
                    label: '성별을 선택해주세요.',
                    value: null,
                    color: 'black'
                  }}
                  style={style}
                  onValueChange={this.props.onValueChange('gender')}
                  items={[
                    { label: '남자', value: 'M' },
                    { label: '여자', value: 'F' }
                  ]}
                />
              </InputBox>
              <ErrorBox>
                {errors.gender &&
                  errors.gender.map((e, index) => (
                    <ErrorText key={index}>{e}</ErrorText>
                  ))}
              </ErrorBox>
            </GenderField>
          </Container>
        </FormContainer>
      </Screen>
    );
  }
}

const style = StyleSheet.create({
  InputIOS: {
    color: colors.TEXT_COLOR
  },
  InputAndroid: {
    color: colors.TEXT_COLOR
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
`;
