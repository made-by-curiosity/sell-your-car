import styled from '@emotion/styled';

export const FavoritesContainer = styled.div`
  padding: 20px;

  overflow-y: auto;

  @media screen and (min-width: 768px) {
    min-width: 250px;

    height: 400px;
    display: block;
  }
`;

export const FavoritesList = styled.ul`
  display: flex;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
