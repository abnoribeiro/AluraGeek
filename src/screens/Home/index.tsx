import React from 'react';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import { Container, Banner, ContainerPromotion, Main } from './styled';

export interface Products {
  category: string;
  products: {
    title: string;
    price: number;
    image: string;
  }[];
}

const products: Products[] = [
  {
    category: 'Star Wars',
    products: [
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
    ],
  },
  {
    category: 'Consoles',
    products: [
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
    ],
  },
  {
    category: 'Diversos',
    products: [
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
      {
        title: 'Produto XYZ',
        price: 60.0,
        image:
          'https://img.elo7.com.br/product/original/36C432A/chaveiro-emborrachado-star-wars-chaveiros-emborrachados.jpg',
      },
    ],
  },
];

const Home: React.FC = () => {
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
