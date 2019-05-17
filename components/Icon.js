import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import setting from '../assets/setting.png';
import meeting from '../assets/meeting.png';
import profile from '../assets/profile.png';
import chat from '../assets/chat.png';
import username from '../assets/username.png';
import password from '../assets/password.png';
import logo from '../assets/yeonhadae.png';

imageFile = {
  logo,
  meeting,
  profile,
  chat,
  setting,
  username,
  password
};

export const TabBarIcon = ({ name, size, color }) => (
  <TabIcon
    source={imageFile[name]}
    style={{ width: size || 24, height: size || 24, tintColor: color }}
  />
);

export const LoginInputIcon = ({ name, size, color }) => (
  <LoginIcon
    source={imageFile[name]}
    style={{ width: size || 15, height: size || 15, tintColor: color }}
  />
);

const TabIcon = styled.Image`
  margin-bottom: 10px;
`;

const LoginIcon = styled.Image`
  margin-right: 10px;
  margin-bottom: 5px;
`;

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default imageFile;
