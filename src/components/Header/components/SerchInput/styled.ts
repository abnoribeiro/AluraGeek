import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 393px;
  height: 40px;

  background-color: #f5f5f5;
  border-radius: 20px;

  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  margin-left: 32px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;

  outline: 0;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
