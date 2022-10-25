// Global
import React from 'react';
import Previuos from '../Previuos/Previuos';

// Components
import CategoriesList from '../../components/CategoriesList/CategoriesList';

// Styles
import './Main.less';
import ProductList from '../Products/ProductList/ProductList';
import { useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList/ReviewsList';

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
