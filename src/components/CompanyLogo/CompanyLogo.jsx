import { LogoSvg, LogoWrapper } from './CompanyLogo.styled';

import icon from 'assets/icons/svg-sprite.svg';

export const CompanyLogo = () => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={`${icon}#icon-logo`} />
      </LogoSvg>
    </LogoWrapper>
  );
};
