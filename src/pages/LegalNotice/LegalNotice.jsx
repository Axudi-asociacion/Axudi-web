import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function LegalNotice() {
  return (
    <>
      <Header />

      {/* Página legal estática preparada para completar datos definitivos. */}
      <main>

        <Section className="legal-page">

          <h1>
            Aviso legal
          </h1>

          <p>
            Aquí aparecerá la información legal de AXUDI:
            titular, CIF, correo de contacto y condiciones de uso.
          </p>

        </Section>

      </main>

      <Footer />

    </>
  );
}

export default LegalNotice;
