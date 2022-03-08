import styled from '@emotion/styled';
import React from 'react';
import { theme } from '../styles/theme';

const Container = styled.div`
  background-color: ${theme.colors.red};
`;

function Home() {
  return <Container>Hello World!</Container>;
}

export default Home;
