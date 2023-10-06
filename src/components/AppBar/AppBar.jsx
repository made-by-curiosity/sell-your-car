import { Navigation } from 'components/Navigation/Navigation';
import { HeaderWrapper, PageHeader } from './AppBar.styled';
import { Container } from 'components/Container/Container';
import { CompanyLogo } from 'components/CompanyLogo/CompanyLogo';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <CompanyLogo />
          </Link>
          <Navigation />
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
