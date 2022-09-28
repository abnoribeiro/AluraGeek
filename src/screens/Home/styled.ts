import styled from 'styled-components';

import banner from './assets/images/banner-image.png';

export const Container = styled.div``;

export const Banner = styled.section`
  display: flex;
  height: 352px;

  background-image: url(${banner});

  background-position: center;

  background-size: auto;

  justify-content: start;

  padding: 150px 152px 32px 152px;

  @media (max-width: 920px) {
    align-items: flex-end;
    padding: 32px;
  }
`;

export const ContainerPromotion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #ffffff;

  white-space: nowrap;

  h2 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 61px;
  }
  h3 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 64px;

  padding: 64px 152px;
`;
