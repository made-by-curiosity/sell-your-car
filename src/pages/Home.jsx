import { Container } from 'components/Container/Container';
import { PhotoSection } from 'components/PhotoSection/PhotoSection';
import { MainPageSection } from 'components/MainPageSection/MainPageSection';
import { PhotoBg } from 'components/PhotoBg/PhotoBg';
import { Hero } from 'components/Hero/Hero';
import { DiscountContent } from 'components/DiscountContent/DiscountContent';
import { OfferContent } from 'components/OfferContent/OfferContent';

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
          <h2>What Makes Us Different</h2>
          <ul>
            <li>
              <p>FREE PICK UP AND DROP</p>
              <p>
                We offer free pick-up and drop-off for your luxury car rental
                anywhere across Ukraine.
              </p>
            </li>
            <li>
              <p>24/7 ROADSIDE ASSISTANCE</p>
              <p>
                Our highly experienced team is available around the clock to
                offer unparalleled assistance.
              </p>
            </li>
            <li>
              <p>EASY BOOKING PROCESS</p>
              <p>
                We offer hassle-free online booking with minimal documents. It
                is applicable to both UA residents and tourists.
              </p>
            </li>
            <li>
              <p>WELL MAINTAINED CARS</p>
              <p>
                Each car goes through a comprehensive check to ensure they are
                in mint condition.
              </p>
            </li>
            <li>
              <p>PROFESSIONAL STAFF</p>
              <p>
                At our Ukrainian car rental, we employ staff with extensive
                knowledge and hands-on expertise to provide you with the right
                car.
              </p>
            </li>
            <li>
              <p>EXCELLENT PRICES</p>
              <p>We guarantee competitive and affordable pricing.</p>
            </li>
          </ul>
        </Container>
      </MainPageSection>
    </>
  );
};

export default Home;
