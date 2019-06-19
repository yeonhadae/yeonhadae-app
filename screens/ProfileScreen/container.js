import React from 'react';
import Presenter from './presenter';
import api, { endPoints } from '../../constants/apis';

export default class extends React.Component {
  state = {
    isFriend: false
  };
  async componentWillMount() {
    const {
      userProfile: { follower },
      navigation: {
        state: {
          params: {
            profile: { id }
          }
        }
      }
    } = this.props;
    if (id in follower) {
      this.setState({ isFriend: true });
    }
  }

  async _followUnfollow() {
    const {
      token,
      navigation: {
        state: {
          params: {
            profile: { id: target_id }
          }
        }
      }
    } = this.props;
    if (this.state.isFriend) {
      await api(token).delete(endPoints.followTarget(target_id));
    } else {
      await api(token).post(endPoints.followTarget(target_id));
    }
    this.setState({ isFriend: !isFriend });
  }

  render() {
    return (
      <Presenter
        profile={this.props.navigation.state.params.profile}
        isFriend={this.state.isFriend}
        followUnfollow={this._followUnfollow}
      />
    );
  }
}
