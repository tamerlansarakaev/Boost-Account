/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import HomePage from './components/HomePage/HomePage';
import CartPage from './components/CartPage/CartPage.tsx';
// Styles
import './App.less';
import './components/GlobalStyles/GlobalStyles.less';

function App() {
  const [version] = React.useState('0.6');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Boost-Account" element={<HomePage />} />
        {version === '0.6' && (
          <Route path="/Boost-Account/cart" element={<CartPage />} />
        )}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
