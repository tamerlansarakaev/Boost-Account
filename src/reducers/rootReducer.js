import { DATA_LOADED, UPDATE_DATA } from './types';

const initialStore = {
  products: [],
};

const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        products: action.products,
        region: action.region,
        links: action.links,
        categories: action.categories,
        menu: action.menu,
        activeCategory: action.activeCategory,
        reviews: action.reviews,
        modalStatus: action.modalStatus,
        status: action.status,
      };
    case UPDATE_DATA:
      return {
        ...state,
        activeCategory: action.selectedCategory,
        status: action.status,
      };
    default:
      return state;
  }
};

export default rootReducer;
