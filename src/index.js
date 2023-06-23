import React from 'react';
import ReactDOM from 'react-dom/client';
import MainNav from './components/mainNav';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));
root.render(
  <React.StrictMode>
    <MainNav />
  </React.StrictMode>
);

