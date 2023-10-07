import styled from '@emotion/styled';

export const Button = styled.button`
  width: ${props => (props.fullWidth ? '100%' : 'max-content')};
  height: ${props => (props.fullHeight ? '100%' : 'max-content')};
  padding: 12px 50px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;

  background-color: #3470ff;

  border-radius: 12px;

  transition: 200ms background-color ease-out;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #0b44cd;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${props => props.btnStyles};
`;
