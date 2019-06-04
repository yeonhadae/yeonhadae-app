import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

export default () => <MakeSafeZone />;

const MakeSafeZone = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.MAIN_COLOR};
`;
