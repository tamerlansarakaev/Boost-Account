// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import LogoSite from '../Logo/Logo';
import Button from '../Button/Button';
import MenuBackground from './MenuBackground/MenuBackground';
import Search from '../../Search/Search';
import allTypes from '../../../reducers/types';

// UI
import MenuLogo from '../../../UI/icons/menu mobile.svg';

// Styles
import './Menu.less';
import MenuCategoryList from './MenuCategoryList/MenuCategoryList';
import HeaderNav from '../../HeaderNav/HeaderNav';

function Menu() {
  const [status, setStatus] = React.useState(false);
  const [selectCategory, setSelectCategory] = React.useState(null);

  const menuItems = useSelector((state) => state.server.menu);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (selectCategory) {
      dispatch({
        ...state,
        type: allTypes.DATA_LOADED,
        activeCategory: selectCategory,
      });
    }
  }, [selectCategory]);

  React.useEffect(() => {
    if (status) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [status]);

  return (
    <div className="Menu">
      <img
        src={MenuLogo}
        alt="MenuIcon"
        className="MenuIcon"
        onClick={() => setStatus(!status)}
      />
      <div className={`Menu-Active ${status ? 'active' : 'inActive'}`}>
        <div
          className="Menu-Background"
          onClick={() => setStatus(!status)}
        ></div>
        <div className={`Menu-Items ${status ? 'activeMenu' : 'inActiveMenu'}`}>
          <div className="menu-image">
            {menuItems ? (
              <img src={menuItems.backgroundImage} alt="backgroundMenu" />
            ) : (
              <MenuBackground />
            )}
          </div>
          <div className="menu-items">
            <div className="Menu-Logo">
              <LogoSite />
            </div>
            <Button onClick={() => console.log(1)} content="Get Service now" />
            <Search />
            <div className="categories">
              <MenuCategoryList
                onClick={(item) => {
                  setStatus(!status);
                  setSelectCategory(item);
                }}
              />
            </div>
          </div>
          <div className="menu-items-line"></div>
          <div className="menu-links">
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
