import { StyledNavLink } from './NavLinkItem.styled';

export const NavLinkItem = ({ name, to }) => {
  return <StyledNavLink to={to}>{name}</StyledNavLink>;
};
