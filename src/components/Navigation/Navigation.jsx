import { AppNav } from './Navigation.styled';

import { NavLinkItem } from 'components/NavLinkItem/NavLinkItem';

export const Navigation = () => {
  return (
    <AppNav>
      <NavLinkItem name="Catalog" to="/catalog" />
      <NavLinkItem name="Favorite" to="/favorites" />
    </AppNav>
  );
};
