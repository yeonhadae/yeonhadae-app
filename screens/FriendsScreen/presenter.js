import React from 'react';
import { Text } from 'react-native';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../../components/Wrapper';
import Friend from '../../components/User';

import device from '../../constants/device';

export default class extends React.Component {
  static propTypes = {
    friends: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    onPressProfile: PropTypes.func.isRequired,
    onPressFollowerList: PropTypes.func.isRequired
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
            <FollowerListBtn onPress={this.props.onPressFollowerList}>
              <FollowerList>
                <FollowerListBtnTxt>친구 추천 보기</FollowerListBtnTxt>
              </FollowerList>
            </FollowerListBtn>
          </FriendsList>
        )}
      </Wrapper>
    );
  }
}

const NoFriend = () => <Text>친구가 없습니다.</Text>;

const FollowerList = styled.View`
  width: 100%;
  height: ${device.height * 0.1};
  justify-content: center;
`;

const FollowerListBtn = styled.TouchableOpacity``;

const FollowerListBtnTxt = styled.Text``;

const FriendsList = styled.ScrollView`
  width: 100%;
`;
