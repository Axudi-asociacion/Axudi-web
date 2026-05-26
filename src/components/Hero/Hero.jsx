//import './Hero.scss';

function Hero() {
  return (

    <section className="hero">

        <div className="hero__left">
            <h1 className="hero__title">Jóvenes que acompañan a jóvenes con diabetes</h1>
            <a href="#about" className="hero__button hero__button--primary" aria-label="Ir a la sección sobre AXUDI">Comenzar</a>
        </div>


        <div className="hero__right">
            <div className="hero__decoration"></div>
             <div className="hero__image"> </div>

        </div>
    </section>

  );
}

export default Hero;