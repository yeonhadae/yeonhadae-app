import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import colors from '../constants/colors';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_COLOR};
`;

export default () => (
  <LoadingContainer>
    <ActivityIndicator />
  </LoadingContainer>
);
