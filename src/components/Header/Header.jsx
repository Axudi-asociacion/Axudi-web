import { Link } from 'react-router-dom';

import menuIcon from '../../assets/icons/i-hamburgerwhite.svg';
import starIcon from '../../assets/icons/i-starblue.svg';
import logo from '../../assets/logos/logoAxudi-navbarwhite.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header">

      <div className="container header__container">

        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded="false"
          aria-controls="main-menu"
        >
          <img
            src={menuIcon}
            alt=""
            aria-hidden="true"
          />
        </button>

        <Link
          to="/"
          className="header__brand"
          aria-label="Ir a la página de inicio"
        >
          <img
            src={logo}
            alt="AXUDI"
            className="header__logo"
          />
        </Link>

        <a
          href="#asociate"
          className="button button--secondary header__cta"
        >
          <img
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="button__icon"
          />

          Asóciate
        </a>

      </div>

    </header>
  );
}

export default Header;