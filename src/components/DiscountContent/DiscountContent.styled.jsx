import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  text-align: center;
`;

export const PreTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 5px;
  color: #ffd223;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 44px;
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    font-size: 53px;
  }
`;

export const PostTitle = styled.p`
  margin-bottom: 20px;

  color: #c6c6c6;
  font-size: 16px;
`;

export const TextHighlighter = styled.div`
  margin-bottom: 20px;

  padding: 10px;
  background-color: rgba(180, 180, 180, 0.4);
`;
