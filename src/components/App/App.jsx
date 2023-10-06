import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
