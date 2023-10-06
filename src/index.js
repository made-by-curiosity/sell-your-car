import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';

import 'modern-normalize';
import 'utils/fonts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sell-your-car">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
