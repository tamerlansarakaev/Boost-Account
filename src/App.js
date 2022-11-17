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
  const [version, setVersion] = React.useState('0.5');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {version === '0.6' && <Route path="/cart" element={<CartPage />} />}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
