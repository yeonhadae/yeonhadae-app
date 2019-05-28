import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import Icon from '../../components/Icon';
import device from '../../constants/device';

export default class extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    univ: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
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
      latitude,
      longitude,
      errors
    } = this.props;
    console.log(avatar);
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
            <UnivField>
              <InputBox>
                <InputText />
              </InputBox>
              <ErrorBox>
                {errors.univ &&
                  errors.univ.map(e => <ErrorText>{e}</ErrorText>)}
              </ErrorBox>
            </UnivField>
            <GenderField>
              <InputBox>
                <InputText />
              </InputBox>
              <ErrorBox>
                {errors.gender &&
                  errors.gender.map(e => <ErrorText>{e}</ErrorText>)}
              </ErrorBox>
            </GenderField>
          </Container>
        </FormContainer>
      </Screen>
    );
  }
}

const Screen = styled.View`
  background-color: ${colors.MAIN_COLOR};
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
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
