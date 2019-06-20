import React from 'react';
import Presenter from './presenter';
import api, { endPoints } from '../../constants/apis';

export default class extends React.Component {
  state = {
    friends: [],
    loading: true
  };

  async componentWillMount() {
    const {
      user: { account, profile, token }
    } = this.props;

    const {
      data: { following: friends }
    } = await api(token).get(endPoints.followingList);

    this.setState({ friends, loading: false });
  }

  _onPressProfile(profile) {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('Profile', { profile });
  }

  _onPressFollowerList() {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('Follower');
  }

  render() {
    return (
      <Presenter
        {...this.state}
        onPressProfile={this._onPressProfile.bind(this)}
        onPressFollowerList={this._onPressFollowerList.bind(this)}
      />
    );
  }
}
