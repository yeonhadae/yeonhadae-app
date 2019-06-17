import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

export default ({ backgroundColor }) => (
  <MakeSafeZone backgroundColor={backgroundColor || colors.MAIN_COLOR} />
);

const MakeSafeZone = styled.SafeAreaView`
  flex: 0;
  background-color: ${props => props.backgroundColor};
`;
