import styled from '@emotion/styled';

export const CarContainer = styled.div`
  width: 461px;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const PhotoWrapper = styled.div`
  height: 248px;
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
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  margin-bottom: 24px;
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

export const CarMainInfo = styled.span`
  max-width: 200px;

  display: inline-block;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CarDescription = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: 1.43;
`;

export const InfoSectionName = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const AdditionalInfoContainer = styled.div`
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

export const FeaturesList = styled.ul`
  width: 100%;
  display: flex;
  gap: 6px;

  & > li {
    white-space: nowrap;
  }

  & > li:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > li:not(:last-child):after {
    content: '|';
    height: 16px;
    margin-left: 6px;

    color: rgba(18, 20, 23, 0.1);
  }
`;

export const ConditionsContainer = styled.div``;

export const Condition = styled.span`
  padding: 7px 14px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  border-radius: 35px;
  background-color: #f9f9f9;
`;

export const HighlightedValue = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
