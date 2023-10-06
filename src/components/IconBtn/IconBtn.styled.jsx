import styled from '@emotion/styled';

export const IconButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const StyledSvg = styled.svg`
  width: 20px;
  height: 20px;

  stroke: ${props => (props.favorite ? '#3470FF' : 'rgba(255, 255, 255, 0.8)')};
  fill: ${props => (props.favorite ? '#3470FF' : 'none')};

  transition: stroke 200ms ease-out;

  &:hover,
  &:focus {
    stroke: #3470ff;
  }
`;
