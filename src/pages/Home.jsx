import { Container } from 'components/Container/Container';
import { PhotoSection } from 'components/PhotoSection/PhotoSection';
import { MainPageSection } from 'components/MainPageSection/MainPageSection';
import { PhotoBg } from 'components/PhotoBg/PhotoBg';
import { RentLinkBtn } from 'components/RentLinkBtn/RentLinkBtn';
import { Hero } from 'components/Hero/Hero';

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
          <h2>Drive Superior</h2>
          <p>
            We offer a hassle free car rental service. Book your car online and
            we deliver it to your doorstep.
          </p>
          <ul>
            <li>
              <p>FREE DELIVERY</p>
              <p>We deliver the car to any city in Ukraine, free of charge.</p>
            </li>
            <li>
              <p>ONLINE BOOKING</p>
              <p>You can book directly online or via whatsapp</p>
            </li>
            <li>
              <p>HUGE FLEET</p>
              <p>We have more than 100+ cars to choose from</p>
            </li>
          </ul>
        </Container>
      </MainPageSection>
      <PhotoBg type="discount">
        <PhotoSection>
          <Container>
            <p>DRIVEN BY LUXURY</p>
            <p>GET 80% OFF ALL CARS</p>
            <p>Enjoy seasonal discounts for a limited time only.</p>
            <RentLinkBtn />
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
