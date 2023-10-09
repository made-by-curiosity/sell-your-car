import { MessageContainer, RedirectionLink } from './NoFavoriteMessage.styled';

export const NoFavoriteMessage = () => {
  return (
    <MessageContainer>
      <p>You have no added cars so far.</p>
      <p>
        You can find more cars{' '}
        <RedirectionLink to="/catalog"> in our catalog</RedirectionLink>
      </p>
    </MessageContainer>
  );
};
