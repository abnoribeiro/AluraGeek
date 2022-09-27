import React from 'react';

import { Container, Input } from './styled';

const InputWithLabel: React.FC = () => {
  return (
    <Container>
      <label>Nome</label>
      <Input type="text"></Input>
    </Container>
  );
};

export default InputWithLabel;
