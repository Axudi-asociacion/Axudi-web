import './CollaboratorCard.scss';

function CollaboratorCard({
  name,
  image,
  alt,
  role
}) {
  return (
    // Tarjeta individual que se muestra dentro del carrusel de colaboradores.
    <article className="collaborator-card">

      <h3 className="collaborator-card__name">
        {name}
      </h3>

      {image && (
        <img
          className="collaborator-card__image"
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      )}

      <p className="collaborator-card__role">
        {role}
      </p>

    </article>
  );
}

export default CollaboratorCard;
