import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  color: #000000;
  font-size: 45px;

  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 65px;
  }
`;

export const SectionText = styled.p`
  margin-bottom: 40px;

  font-size: 16px;
  color: rgb(122, 122, 122);
`;

export const OffersList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const OfferItem = styled.li`
  width: 100%;
  height: 170px;
  padding: 0 20px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OfferTitle = styled.p`
  margin-bottom: 20px;

  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const OfferText = styled.p`
  color: #757575;
  font-size: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
