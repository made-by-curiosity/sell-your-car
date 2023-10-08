import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  height: 100px;
  margin-bottom: 20px;
`;

export const CarRadioLabel = styled.label`
  height: 100%;

  display: block;

  cursor: pointer;
`;

export const OriginalHiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;

  &:focus ~ div {
    background-color: #add8e6;
  }

  & ~ div {
    height: 100%;
    padding: 10px;

    background-color: #b0c4de;

    border-radius: 20px;

    overflow: hidden;

    transition: background-color 200ms ease-out;

    &:hover {
      background-color: #add8e6;
    }
  }

  &:checked ~ div {
    background-color: #4682b4;
  }
`;

export const PhotoWrapper = styled.div`
  height: 50px;
  width: 50px;
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
