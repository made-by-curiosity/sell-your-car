import styled from '@emotion/styled';

export const FavoritesContainer = styled.div`
  padding: 20px 0;

  overflow-y: auto;

  @media screen and (min-width: 768px) {
    min-width: 250px;
    padding: 0 20px;

    height: 400px;
    display: block;
  }
`;

export const FavoritesList = styled.ul`
  display: flex;

  @media screen and (min-width: 768px) {
    display: block;
  }

  & > li {
    &:not(:last-child) {
      margin-right: 10px;

      @media screen and (min-width: 768px) {
        margin-right: 0px;
        margin-bottom: 20px;
      }
    }
  }
`;
