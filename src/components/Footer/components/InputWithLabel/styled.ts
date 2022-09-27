import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: #ffffff;
  border-radius: 4px;

  padding: 8px 12px;
  gap: 0px;
  label {
    color: #a2a2a2;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;

  outline: 0;

  color: #464646;

  font-family: 'Raleway';
  font-size: 16px;
`;
