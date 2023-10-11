import styled from '@emotion/styled';

export const Grid = styled.ul`
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;

  @media screen and (min-width: 768px) {
    width: 708px;
    margin-bottom: 60px;

    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;

    justify-content: flex-start;
    column-gap: 29px;

    margin-bottom: 100px;
  }
`;
