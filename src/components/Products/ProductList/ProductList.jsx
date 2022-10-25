// Global
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import ProductItem from '../ProductItem/ProductItem';

// Styles
import './ProductList.less';

// UI
import IconMost from '../../../UI/icons/most.svg';

function ProductList() {
  const products = useSelector((state) => state.products) || [];
  const state = useSelector((state) => state);
  const sortArray = products.sort((a, b) => {
    if (a.typeProduct === state.activeCategory) {
      return -1;
    } else if (b.typeProduct === state.activeCategory) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="products">
      <div className="products-header">
        <img className="products-header-logo" src={IconMost} alt="Logo Sites" />
        <h1 className="products-header-title">Most popular services</h1>
      </div>
      <div className="products-list">
        {sortArray.map((products, i) => {
          return (
            <ProductItem
              ProductTitle={products.name.toUpperCase()}
              publicateDate={products.publicationDate}
              className={
                products.typeProduct === state.activeCategory
                  ? 'greenGradient'
                  : 'redGradient'
              }
              category={products.typeProduct}
              currency={products.currency}
              salePrice={products.sale}
              status={products.status}
              price={products.price}
              image={products.image}
              id={i}
              options={products.options}
              key={products.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
