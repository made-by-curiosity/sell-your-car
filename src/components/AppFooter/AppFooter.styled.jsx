import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);

  background-color: rgba(0, 0, 0, 0.9);

  & > a {
    color: rgba(255, 255, 255, 0.8);

    transition: color 200ms ease-out;

    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
