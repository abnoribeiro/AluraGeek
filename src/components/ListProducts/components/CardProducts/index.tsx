import React from 'react';

import { numberInPrince } from '../../../../helpers/numbers/NumberInPrince';
import { Container } from './styled';

interface PropsProducts {
  product: {
    title: string;
    price: number;
    image: string;
  };
}

const CardProducts: React.FC<PropsProducts> = ({
  product: { title, price, image },
}) => {
  return (
    <Container>
      <img src={image}></img>
      <h2>{title}</h2>
      <h3>{numberInPrince(price)}</h3>
      <h4>Ver produto</h4>
    </Container>
  );
};

export default CardProducts;
