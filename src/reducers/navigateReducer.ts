import allTypes from './types';

const initialStore = {
  navigateLinks: [],
};

interface IActionNavigate {
  type: string;
  links: Array<Object>;
}

interface IState {
  navigateLinks: Array<Object>;
}

const navigateReducer = (
  state: IState = initialStore,
  action: IActionNavigate
) => {
  switch (action.type) {
    case allTypes.GET_LINKS:
      return {
        ...state,
        navigateLinks: action.links,
      };
    default:
      return state;
  }
};

export default navigateReducer;
