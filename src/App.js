// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {
  DATA_LOADED,
  SET_CATEGORIES,
  SET_LINKS,
  SET_MENU,
  SET_MODAL_STATUS,
  SET_PRODUCTS,
  SET_REGIONS,
  SET_REVIEWS,
} from './reducers/types';
import Modal from './components/UI/Modal/Modal';
import ReviewModal from './components/Reviews/ReviewModal/ReviewModal';

// UI
import BackGround from './UI/background/background.png';

// Styles
import './App.less';
import './components/GlobalStyles/GlobalStyles.less';
import {
  getCategories,
  getLinks,
  getMenu,
  getProducts,
  getRegions,
  getReviews,
} from './services/API';
import ModalList from './components/UI/ModalList/ModalList';
import ModalAlertsList from './components/UI/ModalAlertsList/ModalAlertsList';

function App() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.site.modalStatus);
  const statusUpdate = useSelector((state) => state.site.status);
  const state = useSelector((state) => state.server);

  async function setAllData() {
    dispatch({ type: SET_PRODUCTS, products: await getProducts() });
    dispatch({ type: SET_REGIONS, region: await getRegions() });
    dispatch({ type: SET_LINKS, links: await getLinks() });
    dispatch({ type: SET_CATEGORIES, categories: await getCategories() });
    dispatch({ type: SET_MENU, menu: await getMenu() });
    dispatch({ type: SET_REVIEWS, reviews: await getReviews() });
    dispatch({ type: SET_MODAL_STATUS, modalStatus: false });
  }

  React.useEffect(() => {
    setAllData();
    if (statusUpdate) {
      setAllData();
      dispatch({
        ...state,
        type: DATA_LOADED,
        status: 'All data loaded this site!',
      });
    }
  }, [statusUpdate]);

  return (
    <div className="App">
      <img className="background" src={BackGround} alt="background" />
      <div className="Header-Line"></div>
      <div className="App-Container">
        <div className="Container">
          <Header />
          <Main />
        </div>
        {statusModal && (
          <Modal>
            <ModalList />
          </Modal>
        )}
        <ModalAlertsList />
      </div>
    </div>
  );
}

export default App;

