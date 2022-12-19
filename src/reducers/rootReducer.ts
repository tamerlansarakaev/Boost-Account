import allTypes from './types';

interface IActionRootItems {
  type: string;
  activeCategory: string;
  selectedCategory: string;
  status: string;
  products: Array<Object>;
  cartProduct: Array<Object>;
  region: string;
  links: Array<string>;
  categories: Array<string>;
  reviews: Array<Object>;
  menu: Object;
}

const initialStore = {
  statusError: false,
};

const types = allTypes;

const rootReducer = (state = initialStore, action: IActionRootItems) => {
  switch (action.type) {
    case types.DATA_LOADED:
      return {
        ...state,
        activeCategory: action.activeCategory,
      };
    case types.UPDATE_DATA:
      return {
        ...state,
        activeCategory: action.selectedCategory,
        status: action.status,
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        cartProduct: action.cartProduct,
      };
    case types.SET_REGIONS:
      return {
        ...state,
        region: action.region,
      };
    case types.SET_LINKS:
      return {
        ...state,
        links: action.links,
      };
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case types.SET_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    case types.SET_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    default:
      return state;
  }
};

export default rootReducer;
