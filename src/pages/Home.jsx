import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { MainLinkButton } from 'components/MainLinkButton/MainLinkButton';

const Home = () => {
  return (
    <Container>
      <p>Home page</p>
      <MainButton text="Learn more" fullWidth />
      <MainButton text="Search" type="submit" disabled />
      <div style={{ height: '100px' }}>
        <MainLinkButton text="Rental car" href="tel:+380730000000" />
      </div>
    </Container>
  );
};

export default Home;
