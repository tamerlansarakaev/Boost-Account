// Styles
import './HeaderNavItem.less';

interface IHeaderNavItem {
  name: string;
  src: string;
}

function HeaderNavItem(props: IHeaderNavItem) {
  return <li className="title-nav">{props.name}</li>;
}

export default HeaderNavItem;
