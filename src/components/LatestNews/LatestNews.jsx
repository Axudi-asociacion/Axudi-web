import { Link } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import Section from '../Section/Section';

// import './LatestNews.scss';

function LatestNews() {
  return (
    <Section className="latest-news">

      <h2 className="latest-news__title">
        Últimas noticias
      </h2>

      <div className="latest-news__intro">

        <div
          className="latest-news__decoration"
          aria-hidden="true"
        ></div>

        <p className="latest-news__text">
          Mantente al día de nuestras actividades, encuentros y novedades.
        </p>

      </div>

      <div className="latest-news__cards">

        <NewsCard
          title="Primer encuentro AXUDI"
          text="Muy pronto compartiremos más información sobre nuestras próximas actividades."
          image=""
          alt="Imagen del primer encuentro AXUDI"
          href="/noticias-y-eventos"
        />

        <NewsCard
          title="Talleres para jóvenes con diabetes"
          text="Espacios para aprender, compartir experiencias y resolver dudas."
          image=""
          alt="Imagen de talleres para jóvenes con diabetes"
          href="/noticias-y-eventos"
        />

        <NewsCard
          title="Nueva etapa de la asociación"
          text="AXUDI empieza a caminar como comunidad joven, cercana y participativa."
          image=""
          alt="Imagen sobre AXUDI"
          href="/noticias-y-eventos"
        />

      </div>

      <Link
        to="/noticias-y-eventos"
        className="latest-news__button"
        aria-label="Ver todas las noticias y eventos"
      >
        Ver todas las noticias y eventos
      </Link>

    </Section>
  );
}

export default LatestNews;