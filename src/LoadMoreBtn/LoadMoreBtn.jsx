import { ButtonWrapper, LoadButton } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ text, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <LoadButton type="button" disabled={disabled} onClick={onClick}>
        {text}
      </LoadButton>
    </ButtonWrapper>
  );
};
