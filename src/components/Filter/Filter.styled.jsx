import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin-bottom: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const MileageWrapper = styled.div`
  display: flex;
`;

export const MileageInputWrapper = styled.div`
  position: relative;

  cursor: pointer;
`;

export const MileageInputLabel = styled.span`
  position: absolute;
  top: 15px;
  left: 24px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const FilterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  gap: 18px;
`;

export const FilterLabel = styled.span`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;
