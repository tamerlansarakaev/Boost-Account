// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { DATA_LOADED } from './reducers/types';
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

function App() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modalStatus);
  const statusUpdate = useSelector((state) => state.status);
  const state = useSelector((state) => state);

  async function setAllData() {
    dispatch({
      type: DATA_LOADED,
      products: await getProducts(),
      region: await getRegions(),
      links: await getLinks(),
      categories: await getCategories(),
      menu: await getMenu(),
      reviews: await getReviews(),
      modalStatus: false,
    });
  }

  React.useEffect(() => {
    setAllData();
    if (statusUpdate) {
      setAllData();
      dispatch({ ...state, type: DATA_LOADED, status: '' });
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
            <ReviewModal />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;

