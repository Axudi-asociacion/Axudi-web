import { Link } from 'react-router-dom';

import './NewsCard.scss';

function NewsCard({
  title,
  excerpt,
  body,
  image,
  alt,
  href,
}) {
  const content = (
    <>
      <div className="news-card__top">

        <div className="news-card__info">

          <h3 className="news-card__title">
            {title}
          </h3>

          {excerpt && (
            <p className="news-card__text">
              {excerpt}
            </p>
          )}

        </div>

        {image && (
          <div className="news-card__image-wrapper">
            <img
              className="news-card__image"
              src={image}
              alt={alt}
            />
          </div>
        )}

      </div>

      {body && (
        <p className="news-card__body">
          {body}
        </p>
      )}
    </>
  );

  return (
    <article className="news-card">
      {href ? (
        <Link
          to={href}
          className="news-card__link"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}

export default NewsCard;