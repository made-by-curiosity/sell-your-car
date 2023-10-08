import styled from '@emotion/styled';

export const MainContainer = styled.div`
  min-width: 320px;
  max-width: 375px;

  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px;
  }
`;
