import Card from '../Card/Card';
import Section from '../Section/Section';

// import './Collaborators.scss';

function Collaborators() {
  return (
    <Section className="collaborators">

      <h2 className="collaborators__title">
        Colaboradores
      </h2>

      <div className="collaborators__intro">

        <div className="collaborators__decoration"></div>

        <p className="collaborators__text">
          Gracias a quienes hacen posible este proyecto.
        </p>

      </div>

      <div className="collaborators__carousel">

        <Card
          title="Colaborador 1"
          text="Descripción breve del colaborador."
          image=""
          alt="Logo de Colaborador 1"
        />

        <Card
          title="Colaborador 2"
          text="Descripción breve del colaborador."
          image=""
          alt="Logo de Colaborador 2"
        />

        <Card
          title="Colaborador 3"
          text="Descripción breve del colaborador."
          image=""
          alt="Logo de Colaborador 3"
        />

      </div>

    </Section>
  );
}

export default Collaborators;