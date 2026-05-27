import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function CookiesPolicy() {
  return (
    <>
      <Header />

      <main>

        <Section className="legal-page">

          <h1>
            Política de cookies
          </h1>

          <p>
            Aquí aparecerá la información sobre cookies utilizadas en la web.
          </p>

        </Section>

      </main>

      <Footer />

    </>
  );
}

export default CookiesPolicy;