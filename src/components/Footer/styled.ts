import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  height: 470px;

  align-items: center;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  background-color: #eaf2fd;

  width: 100%;
  height: 368px;

  padding: 64px 152px;
`;

export const FooterSections = styled.section`
  display: flex;
  flex-direction: row;
  gap: 112px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  h3,
  a {
    color: #464646;
    white-space: nowrap;
  }

  &.contact-us {
    width: 560px;
    div.container-inputs {
      display: flex;
      flex-direction: column;

      gap: 16px;
    }
    gap: 8px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;

  background: #ffffff;

  width: 100%;
  height: 102px;

  h4 {
    margin: auto;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;
