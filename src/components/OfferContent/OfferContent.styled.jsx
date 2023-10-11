import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  color: #000000;
  font-size: 65px;
  font-weight: 600;
`;

export const SectionText = styled.p`
  margin-bottom: 40px;

  font-size: 16px;
  color: rgb(122, 122, 122);
`;

export const OffersList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const OfferItem = styled.li`
  width: 100%;
  height: 170px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OfferTitle = styled.p`
  margin-bottom: 20px;

  font-size: 22px;
  font-weight: 600;
`;

export const OfferText = styled.p`
  color: #757575;
  font-size: 16px;
`;
