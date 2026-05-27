import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function CookieSettings() {
  return (
    <>
      <Header />

      <main>

        <Section className="legal-page">

          <h1>
            Configuración de cookies
          </h1>

          <p>
            Desde aquí el usuario podrá modificar sus preferencias de cookies.
          </p>

        </Section>

      </main>

      <Footer />
    </>
  );
}

export default CookieSettings;