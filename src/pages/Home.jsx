import { Container } from 'components/Container/Container';
import { PhotoSection } from 'components/PhotoSection/PhotoSection';
import { MainPageSection } from 'components/MainPageSection/MainPageSection';
import { PhotoBg } from 'components/PhotoBg/PhotoBg';
import { Hero } from 'components/Hero/Hero';
import { DiscountContent } from 'components/DiscountContent/DiscountContent';
import { OfferContent } from 'components/OfferContent/OfferContent';
import { WhyUsContent } from 'components/WhyUsContent/WhyUsContent';

const Home = () => {
  return (
    <>
      <PhotoBg type="hero">
        <PhotoSection>
          <Container>
            <Hero />
          </Container>
        </PhotoSection>
      </PhotoBg>
      <MainPageSection>
        <Container>
          <OfferContent />
        </Container>
      </MainPageSection>
      <PhotoBg type="discount">
        <PhotoSection>
          <Container>
            <DiscountContent />
          </Container>
        </PhotoSection>
      </PhotoBg>
      <MainPageSection>
        <Container>
          <WhyUsContent />
        </Container>
      </MainPageSection>
    </>
  );
};

export default Home;
