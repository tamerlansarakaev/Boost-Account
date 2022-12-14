import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allTypes from '../../../../reducers/types';
import MenuCategoryItem from '../MenuCategoryItem/MenuCategoryItem';

// Styles
import './MenuCategoryList.less';

function MenuCategoryList(props) {
  const categories = useSelector((state) => state.server.categories);
  const [active, setActive] = React.useState('');

  const state = useSelector((state) => state.server);
  const dispatch = useDispatch();

  function checkCategory() {
    if (categories) {
      setActive(state.activeCategory);
    }
  }

  React.useEffect(() => {
    if (state) {
      dispatch({
        ...state,
        type: allTypes.DATA_LOADED,
        activeCategory: active,
      });
    }
  }, [active]);

  React.useEffect(() => {
    checkCategory();
  }, [state.activeCategory]);

  return (
    <div className="Category-list">
      {categories &&
        categories.map((category, i) => {
          return (
            <MenuCategoryItem
              onClick={(item) => props.onClick(item)}
              image={category}
              title={category}
              activeMenuCategory={category === active}
              key={i}
            />
          );
        })}
    </div>
  );
}

export default MenuCategoryList;
