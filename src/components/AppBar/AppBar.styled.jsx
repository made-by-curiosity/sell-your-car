import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageHeader = styled.header`
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkLogo = styled(Link)`
  width: 200px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: #fff;
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
