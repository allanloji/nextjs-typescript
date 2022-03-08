import styled from '@emotion/styled';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { theme } from '../styles/theme';

const Container = styled.div``;

function Home() {
  const { data, isLoading } = useQuery('ditto', () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/squirtle');
  });

  return <Container>Hello World!</Container>;
}

export default Home;
