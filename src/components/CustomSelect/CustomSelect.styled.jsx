import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  width: ${props => (props.width ? `${props.width}px` : '224px')};

  position: relative;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const SelectedItem = styled.input`
  width: 100%;
  padding: 14px 18px;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;

  border: none;
  border-radius: 14px;
  background: #f7f7fb;

  cursor: pointer;
`;

export const SelectOptionsWrapper = styled.div`
  width: 100%;
  padding: 14px 8px 14px 18px;

  position: absolute;
  top: 54px;
  left: 0;
  z-index: 100;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background: #fff;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const OptionsOverflowWrapper = styled.div`
  max-height: 272px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgba(18, 20, 23, 0.05) 0%,
      rgba(18, 20, 23, 0.05) 30%,
      rgba(18, 20, 23, 0.05) 50%,
      rgba(18, 20, 23, 0.05) 70%,
      rgba(18, 20, 23, 0.05) 100%
    );
    border-radius: 10px;
  }
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Option = styled.label`
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

export const OriginalRadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus ~ div {
    color: #121417;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #121417;

  position: absolute;
  top: 14px;
  right: 14px;

  cursor: pointer;

  ${props => (props.isActive ? 'transform: rotate(180deg);' : '')}
`;

export const SelectedItemWrapper = styled.div`
  position: relative;
`;
