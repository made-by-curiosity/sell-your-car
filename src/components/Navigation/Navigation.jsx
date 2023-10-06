import { NavLinkItem } from 'components/NavLinkItem/NavLinkItem';
import { AppNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <AppNav>
      <NavLinkItem name="Home" to="/" />
      <NavLinkItem name="Catalog" to="/catalog" />
      <NavLinkItem name="Favorite" to="/favorites" />
    </AppNav>
  );
};
