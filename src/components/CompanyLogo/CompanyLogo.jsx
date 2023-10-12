import icon from 'assets/icons/svg-sprite.svg';

import { LogoSvg, LogoWrapper } from './CompanyLogo.styled';

export const CompanyLogo = () => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={`${icon}#icon-logo`} />
      </LogoSvg>
    </LogoWrapper>
  );
};
