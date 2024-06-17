import './NavItem.scss';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

export enum NavIcon {
  Search,
  Lists,
  Templates,
  Strategy,
  Tasks,
  Pipelines,
};

type Props = {
  icon: NavIcon;
  text: string;
  path: string;
};

export const NavItem: React.FC<Props> = ({
  icon,
  text,
  path
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <li className='nav-item'>
      <div className={cn('nav-item__icon', {
        'nav-item__icon--search': icon === NavIcon.Search,
        'nav-item__icon--lists': icon === NavIcon.Lists,
        'nav-item__icon--templates': icon === NavIcon.Templates,
        'nav-item__icon--strategy': icon === NavIcon.Strategy,
        'nav-item__icon--tasks': icon === NavIcon.Tasks,
        'nav-item__icon--pipelines': icon === NavIcon.Pipelines,
        'nav-item__icon--search--active': pathname === path && icon === NavIcon.Search,
        'nav-item__icon--lists--active': pathname === path && icon === NavIcon.Lists,
        'nav-item__icon--templates--active': pathname === path && icon === NavIcon.Templates,
        'nav-item__icon--strategy--active': pathname === path && icon === NavIcon.Strategy,
        'nav-item__icon--tasks--active': pathname === path && icon === NavIcon.Tasks,
        'nav-item__icon--pipelines--active': pathname === path && icon === NavIcon.Pipelines,
      })}/>

      <p className={cn('nav-item__text', {
        'nav-item__text--active': pathname === path,
      })}> 
        {text} 
      </p>

      {pathname === path && (
        <div className="nav-item__border"/>
      )}
    </li>
  )
}