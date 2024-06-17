import './Nav.scss';
import { NavList } from './NavList';

export const Nav: React.FC = () => (
  <nav className='nav'>
    <div className="nav__list">
      <NavList />
    </div>
  </nav>
)