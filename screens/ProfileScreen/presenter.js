import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from '../../components/Icon';
import Wrapper from '../../components/Wrapper';
import colors from '../../constants/colors';

export default class extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    followUnfollow: PropTypes.func.isRequired,
    isFriend: PropTypes.bool.isRequired
  };
  render() {
    const { profile, isFriend, followUnfollow } = this.props;
    return (
      <Wrapper>
        <AvatarContainer>
          <AvatarBox>
            <Avatar
              resizeMode="cover"
              source={
                (profile.avatar && { uri: profile.avatar }) ||
                images.friendProfile
              }
            />
          </AvatarBox>
        </AvatarContainer>
        <InfoContainer>
          <InfoBox>
            <InfoContent>{profile.name}</InfoContent>
          </InfoBox>
          <InfoBox>
            <InfoContent>{profile.age}</InfoContent>
          </InfoBox>
          <InfoBox>
            <InfoContent>
              {profile.gender === 'M' ? '남자' : '여자'}
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <InfoContent>{`${profile.city} ${profile.state}`}</InfoContent>
          </InfoBox>
        </InfoContainer>
        <ButtonContainer>
          <Button isFriend={isFriend} onPress={followUnfollow}>
            <ButtonText>{isFriend ? '친구 삭제' : '친구 추가'}</ButtonText>
          </Button>
        </ButtonContainer>
      </Wrapper>
    );
  }
}

const AvatarContainer = styled.View`
  flex: 0.2;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const AvatarBox = styled.View`
  margin: 25px;
  height: 95%;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 50px;
  background-color: ${colors.MAIN_COLOR};
`;

const Avatar = styled.Image`
  width: 70%;
  height: 70%;
  overflow: hidden;
`;

const InfoContainer = styled.View`
  width: 100%;
  flex: 0.6;
`;

const InfoBox = styled.View`
  width: 100%;
  height: 15%;
  border-bottom-width: 1px;
  border-color: ${colors.MAIN_COLOR};
  justify-content: center;
`;

const InfoContent = styled.Text`
  font-size: 18px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${props =>
    props.isFriend ? colors.UNSELECTED_ICON : colors.MAIN_COLOR};
`;

const ButtonText = styled.Text`
  color: ${colors.TEXT_COLOR};
`;
