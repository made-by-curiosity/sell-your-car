import { ButtonLink } from './MainLinkButton.styled';

export const MainLinkButton = ({
  text,
  href,
  fullWidth = false,
  fullHeight = false,
  linkStyles = {},
}) => {
  return (
    <ButtonLink
      href={href}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      linkStyles={linkStyles}
    >
      {text}
    </ButtonLink>
  );
};
