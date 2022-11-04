/* eslint-disable react-hooks/exhaustive-deps */
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
import AboutUs from '../AboutUs/AboutUs';

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
        <AboutUs/>
      </div>
    </div>
  );
};

export default Main;
