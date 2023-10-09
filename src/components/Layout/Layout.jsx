import { AppBar } from 'components/AppBar/AppBar';
import { AppFooter } from 'components/AppFooter/AppFooter';
import { Loading } from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loading text="Loading..." />}>
          <Outlet />
        </Suspense>
      </Main>
      <AppFooter />
    </>
  );
};
