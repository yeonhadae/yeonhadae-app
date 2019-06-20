import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper';
import Follower from '../../components/User';

export default class extends React.Component {
  static propTypes = {
    notFriendFollower: PropTypes.array,
    onPressProfile: PropTypes.func.isRequired
  };

  render() {
    const { notFriendFollower } = this.props;
    return (
      <Wrapper>
        <FollowerList>
          {notFriendFollower.map((follower, index) => (
            <Follower
              key={index}
              profile={follower}
              onPressProfile={this.props.onPressProfile}
            />
          ))}
        </FollowerList>
      </Wrapper>
    );
  }
}

const FollowerList = styled.ScrollView`
  width: 100%;
`;
