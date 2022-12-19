// Global
import React from 'react';

// Components
import RegionList from '../RegionList/RegionList';
import HeaderNav from '../HeaderNav/HeaderNav';
import Search from '../Search/Search';
import LogoSite from '../UI/Logo/Logo';
import Cart from '../UI/Cart/Cart.jsx';
import AdaptiveHeader from './AdaptveHeader/AdaptiveHeader';

// Styles
import './Header.less';

const Header = () => {
  const [valueSearch, setValueSearch] = React.useState<string>('');
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
  });
  const setDimension = () => {
    setScreenSize({
      width: window.innerWidth,
    });
  };

  React.useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  const saveValue = (value: string) => {
    setValueSearch(value);
    console.log(valueSearch);
  };
  return (
    <div className="Header">
      {screenSize.width > 1000 ? (
        <div className="Header-Elements">
          <LogoSite />
          <HeaderNav />
          <Cart />
          <div className="Header__Search">
            <Search onChange={(value: string) => saveValue(value)} />
            <RegionList />
          </div>
        </div>
      ) : (
        <div className="Header-Elements">
          <AdaptiveHeader />
        </div>
      )}
    </div>
  );
};

export default Header;
