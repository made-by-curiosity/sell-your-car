import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const RentLink = styled(Link)`
  padding: 18px;

  display: inline-flex;

  font-size: 18px;
  font-weight: 600;
  color: #ffffff;

  border: 1px solid #0b44cd;

  border-radius: 5px;

  transition: color 200ms ease-out, transform 200ms ease-out;

  &:hover,
  &:focus {
    color: #ffd223;
    transform: scale(1.05);
  }
`;
