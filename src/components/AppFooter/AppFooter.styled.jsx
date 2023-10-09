import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  background-color: #f9f9f9;

  & > a {
    font-weight: 600;
    color: black;
  }
`;
