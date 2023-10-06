import logo from '../../assets/icons/car-svgrepo-com.svg';
import { LogoSvg, LogoWrapper } from './CompanyLogo.styled';

export const CompanyLogo = () => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={`${logo}#Capa_1`} />
      </LogoSvg>
    </LogoWrapper>
  );
};
