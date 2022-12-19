import classNames from 'classnames';

// Styles
import './CategoryItem.less';

interface ICategoryItem {
  name: string;
  onClick: (name: string) => void;
  active: boolean;
}

function CategoryItem({ name, onClick, active }: ICategoryItem) {
  const className = classNames({ category: true, active });
  return (
    <div className={className} onClick={() => onClick(name)}>
      <p className="title-category">{name}</p>
    </div>
  );
}

export default CategoryItem;
