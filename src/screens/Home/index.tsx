import React, { useEffect, useState } from 'react';

import { Products, productsMocks } from '../../_mocks/Products/productsMock';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import { Container, Banner, ContainerPromotion, Main } from './styled';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setProducts(productsMocks);
  }, []);

  return (
    <Container>
      <Header></Header>
      <Banner>
        <ContainerPromotion>
          <h2>Dezembro Promocional</h2>
          <h3>Produtos selecionados com 33% de desconto</h3>
          <Button textButton="Ver Consoles" variant="secundary"></Button>
        </ContainerPromotion>
      </Banner>
      <Main>
        {products.map((product, index) => {
          return <ListProducts key={index} products={product}></ListProducts>;
        })}
      </Main>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
