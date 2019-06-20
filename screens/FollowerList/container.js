import React from 'react';
import { Alert } from 'react-native';

import api, { endPoints } from '../../constants/apis';
import Presenter from './presenter';

export default class extends React.Component {
  state = {
    notFriendFollower: []
  };

  async componentWillMount() {
    const { token } = this.props;
    try {
      const {
        data: { follower }
      } = await api(token).get(endPoints.followerList);

      const {
        data: { following }
      } = await api(token).get(endPoints.followingList);
      const getJustFollower = wer_id =>
        !following.some(wing => wing.id === wer_id);

      const notFriendFollower = follower.filter(wer => getJustFollower(wer.id));
      this.setState({ notFriendFollower });
    } catch (e) {
      Alert.alert('찾을 수 없음', '오류가 발생했습니다.');
    }
  }

  _onPressProfile(profile) {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('Profile', { profile });
  }

  render() {
    return (
      <Presenter
        notFriendFollower={this.state.notFriendFollower}
        onPressProfile={this._onPressProfile.bind(this)}
      />
    );
  }
}
