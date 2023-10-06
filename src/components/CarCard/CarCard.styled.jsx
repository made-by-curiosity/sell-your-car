import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 274px;
  max-height: 426px;

  position: relative;
`;

export const PhotoWrapper = styled.div`
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;

  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Photo = styled.img``;

export const MainInfoContainer = styled.div`
  margin-bottom: 8px;

  display: flex;

  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const RentalPrice = styled.span`
  display: inline-flex;
  margin-left: auto;
`;

export const AdditionalInfoContainer = styled.div`
  margin-bottom: 28px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  color: rgba(18, 20, 23, 0.5);
`;

export const AdditionalInfoWrapper = styled.p`
  display: flex;
  gap: 6px;

  & > span:not(:last-child):after {
    content: '|';
    height: 16px;
    margin-left: 6px;

    color: rgba(18, 20, 23, 0.1);
  }
`;
