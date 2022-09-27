import styled, { css } from 'styled-components';

interface Props {
  variantColor: 'primary' | 'secundary';
}

export const InputButton = styled.button<Props>`
  ${({ variantColor }) => css`
    width: 182px;
    height: 51px;

    background-color: ${variantColor === 'primary' ? '#ffffff' : '#2a7ae4'};
    color: ${variantColor === 'primary' ? '#2a7ae4' : '#ffffff'};

    border: 1px solid #2a7ae4;
  `}
`;
