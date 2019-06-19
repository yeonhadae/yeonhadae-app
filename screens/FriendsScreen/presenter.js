import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from '../../components/Icon';
import Wrapper from '../../components/Wrapper';
import device from '../../constants/device';
import colors from '../../constants/colors';

export default class extends React.Component {
  static propTypes = {
    friends: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    onPressProfile: PropTypes.func.isRequired
  };

  render() {
    const { loading, friends } = this.props;
    return (
      <Wrapper>
        {loading ? (
          <Loading bgColor={'transparent'} />
        ) : (
          <FriendsList>
            {friends.length ? (
              friends.map((friend, index) => (
                <Friend
                  key={index}
                  profile={friend}
                  onPressProfile={this.props.onPressProfile}
                />
              ))
            ) : (
              <NoFriend />
            )}
          </FriendsList>
        )}
      </Wrapper>
    );
  }
}

const NoFriend = () => <Text>친구가 없습니다.</Text>;
const FriendInfo = props => {
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
              source={avatar ? { uri: avatar } : images.profile}
            />
          </AvatarBox>
          <Name>{name}</Name>
        </ProfileBox>
      </FriendContainer>
    </TouchableOpacity>
  );
};

const FriendsList = styled.ScrollView`
  width: 100%;
`;

const Friend = styled(FriendInfo)``;

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
