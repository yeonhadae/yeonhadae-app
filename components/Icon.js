import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import setting from '../assets/setting.png';
import meeting from '../assets/meeting.png';
import profile from '../assets/profile.png';
import chat from '../assets/chat.png';

imageFile = {
  meeting,
  profile,
  chat,
  setting
};

export const TabBarIcon = ({ name, size, color }) => (
  <TabIcon
    source={imageFile[name]}
    style={{ width: size, height: size || 24, tintColor: color }}
  />
);

const TabIcon = styled.Image`
  margin-bottom: 10px;
`;

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default imageFile;
