import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HeroWrapper } from './Hero.styled';
import { HeroText } from 'components/HeroText/HeroText';
import { RentLinkBtn } from 'components/RentLinkBtn/RentLinkBtn';

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitle />
      <HeroText />
      <RentLinkBtn />
    </HeroWrapper>
  );
};
