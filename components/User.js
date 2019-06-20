import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import images from './Icon';
import device from '../constants/device';
import colors from '../constants/colors';

export default props => {
  const { profile, onPressProfile } = props;
  const {
    avatar,
    name,
    gender,
    id,
    user: { username }
  } = profile;
  return (
    <TouchableOpacity onPress={() => onPressProfile(profile)}>
      <FriendContainer>
        <ProfileBox>
          <AvatarBox>
            <Avatar
              resizeMode="contain"
              source={avatar ? { uri: avatar } : images.friendProfile}
            />
          </AvatarBox>
          <Name>{name}</Name>
        </ProfileBox>
      </FriendContainer>
    </TouchableOpacity>
  );
};

const FriendContainer = styled.View`
  width: 100%;
  height: ${device.height * 0.1};
`;

const ProfileBox = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

const AvatarBox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_COLOR};
  border-radius: 30;
  aspect-ratio: 1;
  height: 70%;
  margin: 10px;
`;

const Avatar = styled.Image`
  margin: 10px;
  width: 50%;
  height: 50%;
`;

const Name = styled.Text``;
