import React from 'react';
import PropTypes from 'prop-types';

import setting from '../assets/setting.png';
import { Image } from 'react-native';

imageFile = {
  setting
};

export const TabBarIcon = ({ name, size, color }) => (
  <Image
    source={imageFile[name]}
    style={{ width: size, height: size || 24, tintColor: color }}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default imageFile;
