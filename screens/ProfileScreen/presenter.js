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
                (profile.avatar && { uri: profile.avatar }) || images.profile
              }
            />
          </AvatarBox>
        </AvatarContainer>
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
  height: 100%;
`;

const Test = styled.Text``;
