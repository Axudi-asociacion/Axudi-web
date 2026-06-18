import './Card.scss';

function Card({ title, image, alt, text }) {
  return (
    // Tarjeta genérica usada para servicios y equipo.
    <article className="card">

      <h3 className="card__title">
        {title}
      </h3>

      <img
        className="card__image"
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
      />

      <p className="card__text">
        {text}
      </p>

    </article>
  );
}

export default Card;
