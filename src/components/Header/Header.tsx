import './Header.scss';
import { Nav } from '../Nav';
import { MenuButton } from '../utils/MenuButton';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="header__section header__left">
        <Link to={'/'}>
          <div className="header__logo"/>
        </Link>

        <div className="header__menu-button">
          <MenuButton />
        </div>

        <div className="header__nav">
          <Nav />
        </div>
      </div>

      <div className="header__section header__right">
        <div className="header__icons">
          <div className="header__icon-container">
            <div className="header__icon header__icon--statistics"/>
          </div>

          <div className="header__icon-container header__icon-container--news">
            <div className="header__icon header__icon--news"/>
          </div>
        </div>

        <div className="header__company">
          <div className="header__company-info">
            <h4 className="header__company-name"> Nicusor Iorga </h4>
            <p className="header__company-category"> Sales </p>
          </div>

          <div className="header__company-logo"/>
        </div>
      </div>
    </header>
  )
}