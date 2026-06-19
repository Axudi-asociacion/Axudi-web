import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function CookieSettings() {
  return (
    <>
      <Header />

      {/* Pantalla reservada para futuras preferencias de cookies. */}
      <main>

        <Section className="legal-page">

          <h1>
            Configuración de cookies
          </h1>

          <p>
            Actualmente esta web no utiliza cookies analíticas ni publicitarias
            propias, por lo que no es necesario configurar preferencias
            adicionales.
          </p>

          <p>
            Si en el futuro AXUDI incorpora herramientas de analítica, publicidad
            o seguimiento, esta página permitirá revisar y modificar las
            preferencias de consentimiento.
          </p>

        </Section>

      </main>

      <Footer />
    </>
  );
}

export default CookieSettings;
