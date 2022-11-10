/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/UI/Modal/Modal';
import ModalList from './components/UI/ModalList/ModalList';
import ModalAlertsList from './components/UI/ModalAlertsList/ModalAlertsList';
import Footer from './components/Footer/Footer';

// API and Types
import combineAPI from './services/combineAPI';
import allTypes from './services/allTypes';

// UI
import BackGround from './UI/background/background.png';

// Styles
import './App.less';
import './components/GlobalStyles/GlobalStyles.less';

function App() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.site.modalStatus);
  const statusUpdate = useSelector((state) => state.server.status);
  const stateModal = useSelector((state) => state.modalReducer);
  const state = useSelector((state) => state);
  async function setAllData() {
    const API = combineAPI();
    const types = allTypes();

    dispatch({
      type: types.SET_PRODUCTS,
      products: await API.getProducts(),
    });
    dispatch({
      type: types.SET_REGIONS,
      region: await API.getRegions(),
    });
    dispatch({ type: types.SET_LINKS, links: await API.getLinks() });
    dispatch({
      type: types.SET_CATEGORIES,
      categories: await API.getCategories(),
    });
    dispatch({ type: types.SET_MENU, menu: await API.getMenu() });
    dispatch({
      type: types.SET_REVIEWS,
      reviews: await API.getReviews(),
    });
    dispatch({ type: types.SET_MODAL_STATUS, modalStatus: false });
  }

  React.useEffect(() => {
    const types = allTypes();
    setAllData();
    if (statusUpdate) {
      setAllData();
      dispatch({
        ...state,
        type: types.DATA_LOADED,
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
        {stateModal.statusMessage && <ModalAlertsList />}
      </div>
      <div className="footer-background">
        <Footer />
      </div>
    </div>
  );
}

export default App;
