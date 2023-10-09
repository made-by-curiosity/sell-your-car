import { Navigation } from 'components/Navigation/Navigation';
import { HeaderWrapper, LinkLogo, LogoText, PageHeader } from './AppBar.styled';
import { Container } from 'components/Container/Container';
import { CompanyLogo } from 'components/CompanyLogo/CompanyLogo';

export const AppBar = () => {
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <LinkLogo to="/">
            <CompanyLogo />
            <LogoText>Best rentals</LogoText>
          </LinkLogo>
          <Navigation />
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
