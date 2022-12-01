import { GET_LINKS } from './types';

const initialStore = {
  navigateLinks: [],
};

interface IAction {
  type: String;
  links: Array<Object>;
}

interface IState {
  navigateLinks: Array<Object>;
}

const navigateReducer = (state: IState = initialStore, action: IAction) => {
  switch (action.type) {
    case GET_LINKS:
      return {
        ...state,
        navigateLinks: action.links,
      };
    default:
      return state;
  }
};

export default navigateReducer;
