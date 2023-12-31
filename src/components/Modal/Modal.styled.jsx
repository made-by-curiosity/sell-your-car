import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(18, 20, 23, 0.5);

  z-index: 1000;
`;

export const ContentWrapper = styled.div`
  max-height: 80vh;

  overflow: auto;
`;

export const ModalContainer = styled.div`
  max-width: 95%;
  max-height: 95%;
  padding: 40px;

  position: relative;

  background-color: #fff;

  border-radius: 24px;

  overflow: hidden;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CloseBtnIcon = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #121417;

  cursor: pointer;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
