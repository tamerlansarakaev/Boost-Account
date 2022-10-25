// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATA_LOADED } from '../../reducers/types';

// Components
import CategoryItem from '../CategoryItem/CategoryItem';

// Styles
import './CategoriesList.less';

const CategoriesList = () => {
  const categories = useSelector((state) => state.categories);
  const [active, setActive] = React.useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function checkCategory() {
    if (state) {
      setActive(state.activeCategory);
    }
  }

  React.useEffect(() => {
    if (state) {
      dispatch({ ...state, type: DATA_LOADED, activeCategory: active });
    }
  }, [active]);

  React.useEffect(() => {
    checkCategory();
  }, [state.activeCategory]);

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
