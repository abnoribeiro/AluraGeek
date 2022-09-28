import React from 'react';

import { Products } from '../../_mocks/Products/productsMock';
import CardProducts from './components/CardProducts';
import {
  Container,
  CategoryName,
  ContainerProducts,
  HeaderList,
} from './styled';

interface Props {
  products: Products;
}

const ListProducts: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <HeaderList>
        <CategoryName>{products.category}</CategoryName>
        <h4>Ver tudo</h4>
      </HeaderList>
      <ContainerProducts>
        {products.products.map((product, index) => {
          return <CardProducts key={index} product={product}></CardProducts>;
        })}
      </ContainerProducts>
    </Container>
  );
};

export default ListProducts;
