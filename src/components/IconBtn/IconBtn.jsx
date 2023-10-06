import { IconButton, StyledSvg } from './IconBtn.styled';

export const IconBtn = ({
  icon,
  onClick = () => null,
  type = 'button',
  favorite = false,
}) => {
  return (
    <IconButton type={type} onClick={onClick}>
      <StyledSvg favorite={favorite}>
        <use href={icon} />
      </StyledSvg>
    </IconButton>
  );
};
