import styled from '@emotion/styled';

export const ButtonLink = styled.a`
  width: ${props => (props.fullWidth ? '100%' : 'max-content')};
  height: ${props => (props.fullHeight ? '100%' : 'max-content')};
  padding: 12px 50px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  background-color: #3470ff;

  border-radius: 12px;

  cursor: pointer;

  transition: 200ms background-color ease-out;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  ${props => props.linkStyles};

  & > span {
    display: inline-block;
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
`;
