import { Link } from 'react-router-dom';

import starBlue from '../../assets/icons/i-starblue.svg';
import starWhite from '../../assets/icons/i-starwhite.svg';

import './NotFound.scss';

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">

        <img
          className="not-found__star"
          src={starBlue}
          alt=""
          aria-hidden="true"
        />

        <h1 className="not-found__title">
          404
        </h1>

        <h2 className="not-found__text">
          ¡Ups! Parece que te has perdido
        </h2>

        <p className="not-found__subtitle">
          Vamos a llevarte de vuelta a casa
        </p>

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