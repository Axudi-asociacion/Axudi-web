import { Link } from 'react-router-dom';

import starBlue from '../../assets/icons/i-starblue.svg';
import starWhite from '../../assets/icons/i-starwhite.svg';

import './NotFound.scss';

function NotFound() {
  return (
    // Página de error para cualquier ruta no registrada.
    <main className="not-found">
      <div className="container">

        <img
          className="not-found__star"
          src={starBlue}
          alt=""
          aria-hidden="true"
        />

        {/* Mensaje principal de error. */}
        <h1 className="not-found__title">
          404
        </h1>

        <h2 className="not-found__text">
          ¡Ups! Parece que te has perdido
        </h2>

        <p className="not-found__subtitle">
          Vamos a llevarte de vuelta a casa
        </p>

        {/* Acción para volver al inicio. */}
        <Link
          to="/"
          className="button button--primary"
        >
          <span className="button__icon">
            <img
              src={starWhite}
              alt=""
              aria-hidden="true"
            />
          </span>

          Volver a AXUDI
        </Link>

      </div>
    </main>
  );
}

export default NotFound;
