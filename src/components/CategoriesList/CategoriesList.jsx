// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATA_LOADED } from '../../reducers/types';

// Components
import CategoryItem from '../CategoryItem/CategoryItem';

// Styles
import './CategoriesList.less';

const CategoriesList = () => {
  const categories = useSelector((state) => state.server.categories);
  const [active, setActive] = React.useState('');
  const state = useSelector((state) => state.site);
  const stateServer = useSelector((state) => state.server);
  const dispatch = useDispatch();

  function checkCategory() {
    if (state && stateServer) {
      setActive(stateServer.activeCategory);
    }
  }

  React.useEffect(() => {
    if (stateServer) {
      dispatch({ ...state, type: DATA_LOADED, activeCategory: active });
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
              onClick={(name) => {
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
