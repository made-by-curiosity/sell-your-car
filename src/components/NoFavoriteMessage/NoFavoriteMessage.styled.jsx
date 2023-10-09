import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MessageContainer = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const RedirectionLink = styled(Link)`
  text-decoration: underline;
  color: orange;
`;
