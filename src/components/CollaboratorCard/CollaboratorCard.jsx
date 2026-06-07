import './CollaboratorCard.scss';

function CollaboratorCard({
  name,
  image,
  alt,
  role
}) {
  return (
    <article className="collaborator-card">

      <h3 className="collaborator-card__name">
        {name}
      </h3>

      {image && (
        <img
          className="collaborator-card__image"
          src={image}
          alt={alt}
        />
      )}

      <p className="collaborator-card__role">
        {role}
      </p>

    </article>
  );
}

export default CollaboratorCard;