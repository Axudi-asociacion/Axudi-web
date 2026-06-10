import { useRef, useState } from 'react';

import Section from '../Section/Section';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';

import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';
import handsImage from '../../assets/images/im-manos800.webp';

import './Collaborators.scss';

const collaborators = [
  {
    name: 'Colaborador 1',
    role: 'Descripción breve',
    image: handsImage,
    alt: 'Manos unidas en señal de colaboración',
  },
  {
    name: 'Colaborador 2',
    role: 'Descripción breve',
    image: handsImage,
    alt: 'Manos unidas en señal de colaboración',
  },
  {
    name: 'Colaborador 3',
    role: 'Descripción breve',
    image: handsImage,
    alt: 'Manos unidas en señal de colaboración',
  },
];

function Collaborators() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  function goToPreviousSlide() {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? collaborators.length - 1 : prevSlide - 1
    );
  }

  function goToNextSlide() {
    setCurrentSlide((prevSlide) =>
      prevSlide === collaborators.length - 1 ? 0 : prevSlide + 1
    );
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX.current = event.touches[0].clientX;
  }

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

  function getSlidePosition(index) {
    if (index === currentSlide) {
      return 'active';
    }

    if (
      index === currentSlide - 1 ||
      (currentSlide === 0 && index === collaborators.length - 1)
    ) {
      return 'previous';
    }

    return 'next';
  }

  return (
    <Section className="collaborators" id="colaboradores">

      <h2 className="collaborators__title">
        Colaboradores
      </h2>

      <div className="collaborators__content">

        <div className="collaborators__carousel-block">

          <div
            className="collaborators__slides"
            aria-label="Carrusel de colaboradores"
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
              >
                *
              </button>
            ))}
          </div>

        </div>

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