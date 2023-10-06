import { Button } from './MainButton.styled';

export const MainButton = ({
  text = '',
  type = 'button',
  fullWidth = false,
  fullHeight = false,
  btnStyles = {},
  disabled = false,
  onClick = () => null,
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      btnStyles={btnStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
