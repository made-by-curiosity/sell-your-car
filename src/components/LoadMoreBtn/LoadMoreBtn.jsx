import { MagnifyingGlass } from 'react-loader-spinner';
import { ButtonWrapper, LoadButton } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ text, disabled, onClick, isLoadingMoreCars }) => {
  return (
    <ButtonWrapper>
      {isLoadingMoreCars ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3470ff"
        />
      ) : (
        <LoadButton type="button" disabled={disabled} onClick={onClick}>
          {text}
        </LoadButton>
      )}
    </ButtonWrapper>
  );
};
