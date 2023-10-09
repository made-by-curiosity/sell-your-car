import { Button } from './SecondaryButton.styled';

export const SecondaryButton = ({ text, onClick, disabled, type }) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};
