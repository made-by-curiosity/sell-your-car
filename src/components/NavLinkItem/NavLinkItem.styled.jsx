import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 10px 5px;

  display: inline-flex;

  font-size: 20px;
  font-weight: 600;
  color: inherit;

  border-radius: 5px;

  transition: background-color 200ms ease-out;

  &.active {
    background-color: #3470ff;
    color: #ffffff;
  }

  &:hover,
  &:focus {
    background-color: #0b44cd;
    color: #ffffff;
  }
`;
