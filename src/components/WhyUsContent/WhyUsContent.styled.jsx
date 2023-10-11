import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 40px;

  color: #000000;
  font-size: 25px;
  font-weight: 600;
`;

export const List = styled.ul`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 10px;
`;

export const Item = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 345px;
  }

  @media screen and (min-width: 1440px) {
    width: 380px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 50px;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  font-weight: 600;

  text-align: start;
`;

export const ItemText = styled.p`
  font-size: 16px;
  color: rgb(122, 122, 122);
  text-align: start;
`;
