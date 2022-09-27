import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    gap: 16px;
  `}
`;

export const HeaderList = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    h4 {
      color: #2a7ae4;

      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
  `}
`;

export const CategoryName = styled.h2`
  ${() => css`
    color: #464646;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  `}
`;

export const ContainerProducts = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;

    gap: 16px;
  `}
`;
