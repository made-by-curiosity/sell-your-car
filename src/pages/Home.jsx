import { CarCard } from 'components/CarCard/CarCard';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { MainLinkButton } from 'components/MainLinkButton/MainLinkButton';

const Home = () => {
  const carInfo = {};

  return (
    <Container>
      <p>Home page</p>
      <MainButton
        text="Search"
        type="submit"
        disabled
        btnStyles={{ height: '48px' }}
      />
      <div style={{ height: '100px' }}>
        <MainLinkButton text="Rental car" href="tel:+380730000000" />
      </div>
      <CarCard carInfo={carInfo} />
    </Container>
  );
};

export default Home;
