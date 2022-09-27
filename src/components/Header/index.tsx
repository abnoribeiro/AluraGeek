import React from 'react';

import Button from '../Button';
import { IconLogo } from '../Icons';
import SerchInput from './components/SerchInput';
import { Container, Wrappen } from './styled';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrappen>
        <IconLogo></IconLogo>
        <SerchInput></SerchInput>
      </Wrappen>
      <Button textButton="Login" variant="primary"></Button>
    </Container>
  );
};

export default Header;
