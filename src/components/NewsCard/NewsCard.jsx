import { Link } from 'react-router-dom';
// import './NewsCard.scss';

function NewsCard({ title, text, image, alt, href }) {
  return (
    <article className="news-card">
      <Link to={href} className="news-card__link">

        <div className="news-card__image-wrapper">
          <img
            className="news-card__image"
            src={image}
            alt={alt}
          />
        </div>

        <div className="news-card__content">
          <h3 className="news-card__title">
            {title}
          </h3>

          <p className="news-card__text">
            {text}
          </p>
        </div>

      </Link>
    </article>
  );
}

export default NewsCard;