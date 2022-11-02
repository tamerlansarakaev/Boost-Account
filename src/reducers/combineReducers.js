import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import rootReducer from './rootReducer';
import siteReducer from './siteReducer';

const allReducers = combineReducers({
  server: rootReducer,
  site: siteReducer,
  modalReducer: modalReducer,
});

export default allReducers;
