import React from 'react';

import Button from '../Button';
import { IconLogo } from '../Icons';
import InputTextArea from './components/InputTextArea';
import InputWithLabel from './components/InputWithLabel';
import {
  Container,
  Copyright,
  FooterContent,
  FooterSections,
  Wrapper,
} from './styled';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContent>
        <FooterSections>
          <Wrapper>
            <IconLogo></IconLogo>
          </Wrapper>
          <Wrapper>
            <a>Quem somos nós</a>
            <a>Política de privacidade</a>
            <a>Programa fidelidade</a>
            <a>Nossas lojas</a>
            <a>Quero ser franqueado</a>
            <a>Anuncie aqui</a>
          </Wrapper>
          <Wrapper className="contact-us">
            <h3>Fale conosco</h3>
            <div className="container-inputs">
              <InputWithLabel></InputWithLabel>
              <InputTextArea></InputTextArea>
            </div>
            <Button textButton="Enviar mensagem" variant="secundary"></Button>
          </Wrapper>
        </FooterSections>
      </FooterContent>
      <Copyright>
        <h4>Desenvolvido por Abno Ribeiro 2021</h4>
      </Copyright>
    </Container>
  );
};

export default Footer;
