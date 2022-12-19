// Global
import React from 'react';
import Previuos from '../Previuos/Previuos';
import { useSelector } from 'react-redux';

// Components
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ProductList from '../Products/ProductList/ProductList';
import ReviewsList from '../Reviews/ReviewsList/ReviewsList';

// Styles
import './Main.less';

const Main = () => {
  const [category, setCategory] = React.useState('');
  const selectedCategory = useSelector((state) => state.activeCategory);
  function setActiveCategory() {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }

  React.useEffect(() => {
    setActiveCategory();
  }, [selectedCategory]);
  return (
    <div className="main">
      <div className="main-container">
        <Previuos />
        <CategoriesList />
        <ProductList sort={category} />
        <ReviewsList />
      </div>
    </div>
  );
};

export default Main;
