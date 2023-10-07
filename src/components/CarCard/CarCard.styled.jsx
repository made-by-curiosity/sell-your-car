import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 274px;
  height: 100%;

  display: flex;
  flex-direction: column;

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

export const Photo = styled.img`
  height: 100%;

  object-fit: cover;
`;

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
  margin-top: auto;
  margin-bottom: 28px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  color: rgba(18, 20, 23, 0.5);

  overflow: hidden;
`;

export const AdditionalInfoWrapper = styled.p`
  width: 100%;
  display: flex;
  gap: 6px;

  & > span {
    white-space: nowrap;
  }

  & > span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > span:not(:last-child):after {
    content: '|';
    height: 16px;
    margin-left: 6px;

    color: rgba(18, 20, 23, 0.1);
  }
`;
