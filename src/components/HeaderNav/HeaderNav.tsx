import { useSelector } from 'react-redux';
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';

// Styles
import './HeaderNav.less';

interface ILinks {
  server: {
    links: Array<ILinksState>;
  };
}

interface ILinksState {
  name: string;
  src: string;
}

const HeaderNav = () => {
  const links = useSelector((state: ILinks) => state.server.links);
  return (
    <div className="Header__Nav">
      <div className="header-links">
        {links &&
          links.map((state, i) => {
            return <HeaderNavItem name={state.name} src={state.src} key={i} />;
          })}
      </div>
    </div>
  );
};

export default HeaderNav;
