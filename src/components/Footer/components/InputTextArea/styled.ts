import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 82px;

  background-color: #ffffff;
  border-radius: 4px;

  align-items: center;
  justify-content: space-between;

  padding: 12px 0 0 16px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;

  background-color: transparent;

  color: #464646;

  outline: 0;
  resize: none;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
