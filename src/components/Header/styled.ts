import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  height: 115px;

  align-items: center;
  justify-content: space-between;

  padding: 0 152px;

  @media (max-width: 1220px) {
    padding: 0 32px;
    justify-content: center;
  }
`;

export const Wrappen = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 134px;
`;
