import { MagnifyingGlass } from 'react-loader-spinner';
import { ButtonWrapper } from './LoadMoreBtn.styled';
import { SecondaryButton } from 'components/SecondaryButton/SecondaryButton';

export const LoadMoreBtn = ({ text, disabled, onClick, isLoadingMoreCars }) => {
  return (
    <ButtonWrapper>
      {isLoadingMoreCars ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3470ff"
        />
      ) : (
        <SecondaryButton
          type="button"
          text={text}
          disabled={disabled}
          onClick={onClick}
        />
      )}
    </ButtonWrapper>
  );
};
