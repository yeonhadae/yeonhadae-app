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

  _onPressProfile() {}

  render() {
    return <Presenter {...this.state} />;
  }
}
