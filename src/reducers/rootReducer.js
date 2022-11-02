import {
  DATA_LOADED,
  SET_CATEGORIES,
  SET_LINKS,
  SET_MENU,
  SET_PRODUCTS,
  SET_REGIONS,
  SET_REVIEWS,
  UPDATE_DATA,
} from './types';

const initialStore = {
  statusError: false,
};

const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        activeCategory: action.activeCategory,
        status: action.status,
      };
    case UPDATE_DATA:
      return {
        ...state,
        activeCategory: action.selectedCategory,
        status: action.status,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_REGIONS:
      return {
        ...state,
        region: action.region,
      };
    case SET_LINKS:
      return {
        ...state,
        links: action.links,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    case SET_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    default:
      return state;
  }
};

export default rootReducer;
