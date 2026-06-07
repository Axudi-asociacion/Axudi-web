import { useState } from 'react';
import { Link } from 'react-router-dom';

import menuIcon from '../../assets/icons/i-hamburgerwhite.svg';
import starIcon from '../../assets/icons/i-starwhite.svg';
import startIconblue from '../../assets/icons/i-starblue.svg';
import logo from '../../assets/logos/logoAxudi-navbarwhite.svg';

import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">

      <div className="container header__container">

        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={openMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          <img
            src={startIconblue}
            alt=""
            aria-hidden="true"
            className="button__icon"
          />

          Asóciate
        </a>

        <nav
          id="main-menu"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <button
            className="header__close-button"
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            ×
          </button>

          <ul className="header__nav-list">

            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li>
              <a href="#que-hacemos" onClick={closeMenu}>
                ¿Qué hacemos?
              </a>
            </li>

            <li>
              <a href="#quienes-somos" onClick={closeMenu}>
                Conoce al equipo
              </a>
            </li>

            <li>
              <a href="#colaboradores" onClick={closeMenu}>
                Colaboradores
              </a>
            </li>

            <li>
              <Link to="/noticias-y-eventos" onClick={closeMenu}>
                Noticias y eventos
              </Link>
            </li>

            <li className="header__nav-contact">
              <a
                href="#contacto"
                className="button button--primary header__nav-contact-button"
                onClick={closeMenu}
              >
                <img
                  src={starIcon}
                  alt=""
                  aria-hidden="true"
                  className="button__icon"
                />

                Contacto
              </a>
            </li>

          </ul>
        </nav>

      </div>

    </header>
  );
}

export default Header;