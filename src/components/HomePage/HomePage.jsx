import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import combineAPI from '../../services/combineAPI';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalAlertsList from '../UI/ModalAlertsList/ModalAlertsList';
import ModalList from '../UI/ModalList/ModalList';
import allTypes from '../../reducers/types';
import SelectedProducts from '../Products/SelectedProductsModal/SelectedProductsModal';
// UI
import BackGround from '../../UI/background/background.png';

// Styles
import './HomePage.less';

function HomePage() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.site.modalStatus);
  const statusUpdate = useSelector((state) => state.server.status);
  const stateModal = useSelector((state) => state.modalReducer);
  const state = useSelector((state) => state);

  async function setAllData() {
    const API = combineAPI();
    dispatch({ type: allTypes.LOADING_SITE, modalType: allTypes.LOADING_SITE });

    dispatch({
      type: allTypes.SET_PRODUCTS,
      products: await API.getProducts(),
    });

    dispatch({
      type: allTypes.SET_REGIONS,
      region: await API.getRegions(),
    });

    dispatch({ type: allTypes.SET_LINKS, links: await API.getLinks() });

    dispatch({
      type: allTypes.SET_CATEGORIES,
      categories: await API.getCategories(),
    });

    dispatch({ type: allTypes.SET_MENU, menu: await API.getMenu() });

    dispatch({
      type: allTypes.SET_REVIEWS,
      reviews: await API.getReviews(),
    });

    dispatch({ type: allTypes.SET_MODAL_STATUS, modalStatus: false });

    document.body.style.overflowY = 'scroll';
  }

  React.useEffect(() => {
    if (statusUpdate) {
      setAllData();
      dispatch({
        ...state,
        type: allTypes.DATA_LOADED,
        status: 'All data loaded this site!',
      });
      return;
    }

    if (state.server.products) return;
    setAllData();
  }, [statusUpdate]);

  return (
    <div className="home-page">
      <img className="background" src={BackGround} alt="background" />
      <div className="Header-Line"></div>
      <div className="home-container">
        <div className="Container">
          <Header />
          <Main />
        </div>
        {statusModal && <ModalList />}
        {stateModal.statusMessage && <ModalAlertsList />}
      </div>
      <div className="footer-background">
        <Footer />
      </div>
      <SelectedProducts />
    </div>
  );
}

export default HomePage;
