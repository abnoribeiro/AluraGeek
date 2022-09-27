import React from 'react';

import { Container, Input } from './styled';

const InputTextArea: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Escreva sua mensagem"></Input>
    </Container>
  );
};

export default InputTextArea;
