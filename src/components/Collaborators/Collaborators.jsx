import { useRef, useState } from 'react';

import Section from '../Section/Section';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';

import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';
import arrowBlue from '../../assets/icons/i-arrowblue.svg';
import logoDonSacarino from '../../assets/logos/l-DonSacarino.svg';
import logoMartinValle from '../../assets/logos/l-MartinValleFotografia.svg';
import logoGlucoUp from '../../assets/logos/l-GlucoUp.svg';
import logoIkaroNails from '../../assets/logos/l-IkarosNails.svg';
import logoCristinaOrbita from '../../assets/logos/l-CristinaEnOrbita.svg';

import './Collaborators.scss';

// Listado de colaboradores que alimenta el carrusel.
const collaborators = [
  {
    name: 'Don Sacarino',
    role: 'Divulgador de diabetes y alimentación',
    image: logoDonSacarino,
    alt: 'Logo Don Sacarino',
  },
  {
    name: 'Martin Valle Fotografía',
    role: 'Fotografía de boda',
    image: logoMartinValle,
    alt: 'Logo Martin Valle Fotografía',
  },
  {
    name: 'Gluco Up!',
    role: 'Especialistas en glucosa',
    image: logoGlucoUp,
    alt: 'Logo Gluco Up!',
  },
  {
    name: 'Ikaro Nails',
    role: 'Servicios estéticos y formación',
    image: logoIkaroNails,
    alt: 'Logo Ikaro Nails',
  },
  {
    name: 'Cristina en Órbita',
    role: 'Diseño y desarrollo web',
    image: logoCristinaOrbita,
    alt: 'Logo Cristina en Órbita',
  },
];

function Collaborators() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Navega al colaborador anterior de forma circular.
  function goToPreviousSlide() {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? collaborators.length - 1 : prevSlide - 1
    );
  }

  // Navega al colaborador siguiente de forma circular.
  function goToNextSlide() {
    setCurrentSlide((prevSlide) =>
      prevSlide === collaborators.length - 1 ? 0 : prevSlide + 1
    );
  }

  // Guarda el punto inicial del gesto táctil.
  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  // Actualiza la posición del dedo mientras se desliza.
  function handleTouchMove(event) {
    touchEndX.current = event.touches[0].clientX;
  }

  // Decide si el gesto táctil cuenta como swipe lateral.
  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minimumSwipeDistance = 50;

    if (swipeDistance > minimumSwipeDistance) {
      goToNextSlide();
    }

    if (swipeDistance < -minimumSwipeDistance) {
      goToPreviousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }

  // Calcula si cada slide es activo, anterior, siguiente u oculto.
  function getSlidePosition(index) {
    const previousSlide =
      currentSlide === 0 ? collaborators.length - 1 : currentSlide - 1;
    const nextSlide =
      currentSlide === collaborators.length - 1 ? 0 : currentSlide + 1;

    if (index === currentSlide) {
      return 'active';
    }

    if (index === previousSlide) {
      return 'previous';
    }

    if (index === nextSlide) {
      return 'next';
    }

    return 'hidden';
  }

  return (
    <Section className="collaborators" id="colaboradores">

      <h2 className="collaborators__title">
        Colaboradores
      </h2>

      <div className="collaborators__content">

        {/* Carrusel principal con controles, slides y puntos de navegación. */}
        <div className="collaborators__carousel-block">

          <div className="collaborators__carousel">
            <button
              className="collaborators__control collaborators__control--previous"
              type="button"
              aria-label="Ver colaborador anterior"
              onClick={goToPreviousSlide}
            >
              <img src={arrowBlue} alt="" aria-hidden="true" />
            </button>

            <div
              className="collaborators__slides"
              aria-label="Carrusel de colaboradores"
              aria-live="polite"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {collaborators.map((collaborator, index) => (
                <div
                  key={collaborator.name}
                  className={`collaborators__slide collaborators__slide--${getSlidePosition(index)}`}
                  aria-hidden={index !== currentSlide}
                >
                  <CollaboratorCard
                    name={collaborator.name}
                    role={collaborator.role}
                    image={collaborator.image}
                    alt={collaborator.alt}
                  />
                </div>
              ))}
            </div>

            <button
              className="collaborators__control collaborators__control--next"
              type="button"
              aria-label="Ver colaborador siguiente"
              onClick={goToNextSlide}
            >
              <img src={arrowBlue} alt="" aria-hidden="true" />
            </button>
          </div>

          <div className="collaborators__meta">
            <div
              className="collaborators__indicators"
              aria-label="Seleccionar colaborador"
            >
              {collaborators.map((collaborator, index) => (
                <button
                  key={collaborator.name}
                  className={`collaborators__indicator ${
                    index === currentSlide
                      ? 'collaborators__indicator--active'
                      : ''
                  }`}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ver ${collaborator.name}`}
                  aria-current={index === currentSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Mensaje agradecimiento a colaboradores. */}
        <div className="collaborators__intro">

          <img
            className="collaborators__bracket collaborators__bracket--top"
            src={bracketTop}
            alt=""
            aria-hidden="true"
          />

          <p className="collaborators__text">
            Gracias a quienes hacen posible este proyecto.
          </p>

          <img
            className="collaborators__bracket collaborators__bracket--bottom"
            src={bracketBottom}
            alt=""
            aria-hidden="true"
          />

        </div>

      </div>

    </Section>
  );
}

export default Collaborators;
