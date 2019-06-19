import React from 'react';
import styled from 'styled-components';

export default props => (
  <Wrapper>
    <Container>{props.children}</Container>
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  width: 95%;
`;
