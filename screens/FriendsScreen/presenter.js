import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from '../../components/Icon';
import colors from '../../constants/colors';

export default class extends React.Component {
  static propTypes = {
    friends: PropTypes.array,
    loading: PropTypes.bool.isRequired
  };

  render() {
    const { loading, friends } = this.props;
    console.log(friends);
    return (
      <Wrapper>
        {loading ? (
          <Loading bgColor={'transparent'} />
        ) : (
          <FriendsList>
            {friends.length ? (
              friends.map((friend, index) => (
                <Friend key={index} profile={friend} />
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

const NoFriend = props => <Text>친구가 없습니다.</Text>;
const FriendInfo = props => {
  const {
    profile: {
      avatar,
      name,
      gender,
      user: { username }
    }
  } = props;
  return (
    <TouchableOpacity>
      <FriendContainer>
        <ProfileBox>
          <Avatar source={avatar ? { uri: avatar } : images.profile} />
          <Name>{name}</Name>
        </ProfileBox>
      </FriendContainer>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

const FriendsList = styled.ScrollView`
  flex: 1;
  width: 95%;
`;

const Friend = styled(FriendInfo)`
  width: 100%;
  flex: 0.1;
`;

const FriendContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ProfileBox = styled.View`
  width: 50%;
  height: 95%;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 50%;
  height: 100%;
  border-radius: 15;
  background-color: ${colors.MAIN_COLOR};
`;

const Name = styled.Text``;
