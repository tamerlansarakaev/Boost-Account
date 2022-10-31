import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import siteReducer from './siteReducer';

const allReducers = combineReducers({
  server: rootReducer,
  site: siteReducer,
});

export default allReducers;
