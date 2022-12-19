// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allTypes from '../../reducers/types';

// Components
import CategoryItem from '../CategoryItem/CategoryItem';

// Styles
import './CategoriesList.less';

interface ICategoriesList {
  site: object;
  server: {
    categories: Array<string>;
    activeCategory: string;
    products: Array<Object>;
  };
}

const CategoriesList = () => {
  const categories = useSelector(
    (state: ICategoriesList) => state.server.categories
  );
  const [active, setActive] = React.useState('');
  const state = useSelector((state: ICategoriesList) => state.site);
  const stateServer = useSelector((state: ICategoriesList) => state.server);
  const dispatch = useDispatch();

  function checkCategory() {
    if (state && stateServer && stateServer.products) {
      setActive(stateServer.activeCategory);
    }
  }

  React.useEffect(() => {
    if (stateServer.products) {
      dispatch({
        ...state,
        type: allTypes.DATA_LOADED,
        activeCategory: active,
      });
    }
  }, [active]);
  React.useEffect(() => {
    checkCategory();
  }, [stateServer.activeCategory]);

  return (
    <div className="category-section">
      {categories &&
        categories.map((category, i) => {
          return (
            <CategoryItem
              onClick={(name: string) => {
                setActive(name);
              }}
              name={category}
              key={i}
              active={active === category}
            />
          );
        })}
    </div>
  );
};

export default CategoriesList;
