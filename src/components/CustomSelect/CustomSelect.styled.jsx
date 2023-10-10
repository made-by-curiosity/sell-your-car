import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  width: 224px;

  position: relative;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const SelectedItem = styled.input`
  padding: 14px 18px;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  border: none;
  border-radius: 14px;
  background: #f7f7fb;

  cursor: pointer;
`;

export const SelectOptionsWrapper = styled.div`
  width: 100%;
  max-height: 272px;

  padding: 14px 18px;

  position: absolute;
  top: 52px;
  left: 0;
  z-index: 100;

  border-radius: 14px;
  background: #f7f7fb;

  overflow-y: auto;
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Option = styled.span`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #121417;
  }
`;
