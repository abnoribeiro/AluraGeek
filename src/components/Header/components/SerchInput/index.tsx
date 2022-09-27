import React from 'react';

import { IconMagnifyingGlass } from '../../../Icons';
import { Container, Input } from './styled';

const SerchInput: React.FC = () => {
  return (
    <Container>
      <Input type="text" placeholder="O que deseja encontrar?"></Input>
      <IconMagnifyingGlass></IconMagnifyingGlass>
    </Container>
  );
};

export default SerchInput;
