import './Card.scss';

function Card({ title, image, alt, text }) {
  return (
    <article className="card">

      <h3 className="card__title">
        {title}
      </h3>

      <img
        className="card__image"
        src={image}
        alt={alt}
      />

      <p className="card__text">
        {text}
      </p>

    </article>
  );
}

export default Card;