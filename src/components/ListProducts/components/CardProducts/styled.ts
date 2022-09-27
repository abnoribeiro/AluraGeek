import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    width: 176px;
    height: 252px;

    gap: 8px;

    img {
      width: 176px;
      height: 174px;
    }

    h2 {
      color: #464646;

      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }

    h3 {
      color: #464646;

      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }

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
