import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  CloseBtnIcon,
  CloseBtn,
  ModalContainer,
  ContentWrapper,
} from './Modal.styled';

import icon from 'assets/icons/svg-sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleCloseOnEsc = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleCloseOnEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseOnEsc);
    };
  }, [toggleModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalContainer>
        <ContentWrapper>{children}</ContentWrapper>

        <CloseBtn type="button" onClick={toggleModal}>
          <CloseBtnIcon>
            <use href={icon + '#icon-close'} />
          </CloseBtnIcon>
        </CloseBtn>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
