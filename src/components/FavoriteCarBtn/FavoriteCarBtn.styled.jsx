import styled from '@emotion/styled';

import default_img from 'assets/img/no_image_available.jpeg';

export const ButtonWrapper = styled.div`
  height: 100px;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
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
    box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
  }

  &:checked ~ div {
    box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  padding: 10px;

  background-color: #b0c4de;

  border-radius: 20px;

  overflow: hidden;

  transition: box-shadow 200ms ease-out, background 200ms ease-out;

  &:hover {
    box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;
    -webkit-box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;
    -moz-box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 3px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;

  background: linear-gradient(to right, rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4)),
    url(${props => props.bgImg}), url(${default_img});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
