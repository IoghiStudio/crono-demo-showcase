import './NavList.scss';
import { Link } from 'react-router-dom';
import { NavIcon, NavItem } from '../NavItem/NavItem';
import { useMenuContext } from '../../../contextApi/menuContext/store';

interface INavItem {
  id: number;
  icon: NavIcon;
  text: string;
  path: string;
};

const navItems: INavItem[] = [
  {
    id: 1,
    icon: NavIcon.Search,
    text: 'Find New',
    path: '/find-new',
  },
  {
    id: 2,
    icon: NavIcon.Lists,
    text: 'Lists',
    path: '/lists',
  },
  {
    id: 3,
    icon: NavIcon.Templates,
    text: 'Templates',
    path: '/templates',
  },
  {
    id: 4,
    text: 'Strategies',
    icon: NavIcon.Strategy,
    path: '/strategies',
  },
  {
    id: 5,
    icon: NavIcon.Tasks,
    text: 'Tasks',
    path: '/tasks',
  },
  {
    id: 6,
    text: 'Pipelines',
    icon: NavIcon.Pipelines,
    path: '/pipelines',
  },
];

export const NavList: React.FC = () => {
  const {
    setIsMenuOpened,
  } = useMenuContext();
  
  return (
    <ul className='nav-list'>
      {navItems.map(item => {
        const {
          id,
          text,
          icon,
          path
        } = item;

        return (
          <Link
            to={path}
            key={id} 
            className='nav-list__item'
            onClick={() => setIsMenuOpened(false)}
          >
            <NavItem 
              icon={icon}
              text={text}
              path={path}
            />
          </Link>
        )
      })}
    </ul>
  )
};
