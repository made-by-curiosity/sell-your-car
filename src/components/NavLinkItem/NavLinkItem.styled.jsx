import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 14px;

  display: inline-flex;

  font-size: 14px;
  font-weight: 600;
  color: #ffffff;

  border: 1px solid transparent;

  border-radius: 5px;

  transition: border 200ms ease-out;

  &:hover,
  &:focus {
    border: 1px solid #0b44cd;

    color: #ffffff;
  }

  &.active {
    border: 1px solid #3470ff;
    color: #ffd223;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;

    font-size: 20px;
  }
`;
