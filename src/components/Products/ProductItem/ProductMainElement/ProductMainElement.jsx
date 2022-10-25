import React from 'react';

// Styles
import './ProductMainElement.less';

const ProductMainElement = (props) => {
  return (
    <ul className="options">
      {props.advantage &&
        props.advantage.map((advantage, i) => {
          return (
            <li className="options-title" key={i}>
              {advantage}
            </li>
          );
        })}
    </ul>
  );
};

export default ProductMainElement;
