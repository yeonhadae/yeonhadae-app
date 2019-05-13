import React from 'react';

import setting from '../assets/setting.png';
import { Image } from 'react-native';

imageFile = {
  setting
};

export const TabBarIcon = ({ name, size, color }) => (
  <Image
    source={imageFile[name]}
    style={{ width: size, height: size, tintColor: color }}
  />
);

export default imageFile;
