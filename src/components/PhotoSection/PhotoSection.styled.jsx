import styled from '@emotion/styled';

export const Section = styled.div`
  height: 100%;
  padding: 120px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 140px 0 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 0;
  }
`;
