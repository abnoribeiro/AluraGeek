import React from 'react';

import { InputButton } from './styled';

interface Props {
  textButton: string;
  variant: 'primary' | 'secundary';
}

const Button: React.FC<Props> = ({ textButton, variant }) => {
  return (
    <InputButton variantColor={variant} type="button">
      {textButton}
    </InputButton>
  );
};

export default Button;
