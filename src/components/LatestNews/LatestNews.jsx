import { Link } from 'react-router-dom';

import NewsCard from '../NewsCard/NewsCard';
import Section from '../Section/Section';

import newsItems from '../../data/newsItems';

import starBlueIcon from '../../assets/icons/i-starblue.svg';

import './LatestNews.scss';

function LatestNews() {
  // Muestra solo las tres noticias más recientes en la home.
  const latestNews = [...newsItems]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <Section className="latest-news" id="noticias">

      <h2 className="latest-news__title">
        Últimas noticias
      </h2>

      {/* Listado reducido de noticias destacadas. */}
      <div className="latest-news__list">
        {latestNews.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            excerpt={news.excerpt}
            image={news.image}
            alt={news.alt}
          />
        ))}
      </div>

  {/* Enlace al archivo completo de noticias y eventos. */}
  <Link
  to="/noticias-y-eventos"
  className="button button--secondary latest-news__button"
  aria-label="Ver todas las noticias y eventos"
>

  <img
    src={starBlueIcon}
    alt=""
    aria-hidden="true"
    className="button__icon"
    loading="lazy"
    decoding="async"
  />

  Ver todas las noticias

</Link>

    </Section>
  );
}

export default LatestNews;
