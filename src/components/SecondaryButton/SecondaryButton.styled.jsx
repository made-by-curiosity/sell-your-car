import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;

  color: #3470ff;
  line-height: 1.5;
  text-decoration-line: underline;

  transition: color 200ms ease-out;

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;
