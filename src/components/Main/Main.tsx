// Global
import Previuos from '../Previuos/Previuos';

// Components
import CategoriesList from '../CategoriesList/CategoriesList';
import ProductList from '../Products/ProductList/ProductList';
import ReviewsList from '../Reviews/ReviewsList/ReviewsList';

// Styles
import './Main.less';

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <Previuos />
        <CategoriesList />
        <ProductList />
        <ReviewsList />
      </div>
    </div>
  );
};

export default Main;
