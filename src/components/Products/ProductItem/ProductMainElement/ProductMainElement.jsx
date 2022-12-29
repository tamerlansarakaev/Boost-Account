import React from 'react';

// Styles
import './ProductMainElement.less';

const ProductMainElement = (props) => {
  return (
    <ul className="Product-Main-Element-options">
      {props.advantage &&
        props.advantage.map((advantage, i) => {
          return (
            <li className="Product-Main-Element-options-title" key={i}>
              {advantage}
            </li>
          );
        })}
    </ul>
  );
};

export default ProductMainElement;
