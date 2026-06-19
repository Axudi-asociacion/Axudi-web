import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function CookiesPolicy() {
  return (
    <>
      <Header />

      {/* Información sobre cookies y servicios externos. */}
      <main>

        <Section className="legal-page">

          <h1>
            Política de cookies
          </h1>

          <h2>
            Qué son las cookies
          </h2>

          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo
            de la persona usuaria cuando visita una página web. Pueden servir para
            que la web funcione correctamente, recordar preferencias o analizar el
            uso del sitio.
          </p>

          <h2>
            Uso de cookies en esta web
          </h2>

          <p>
            Actualmente, la web de AXUDI no utiliza cookies analíticas,
            publicitarias ni de seguimiento propias para elaborar perfiles de las
            personas usuarias.
          </p>

          <p>
            La web puede utilizar cookies técnicas o elementos equivalentes
            necesarios para el funcionamiento básico del sitio, la seguridad, el
            acceso al panel de administración o servicios técnicos vinculados al
            alojamiento y gestión de la web.
          </p>

          <h2>
            Servicios de terceros
          </h2>

          <p>
            La web utiliza o enlaza servicios externos como Netlify, GitHub,
            Sveltia CMS, Google Fonts, Beehiiv, Instagram y TikTok.
          </p>

          <p>
            Al acceder a servicios externos, dichos terceros pueden aplicar sus
            propias políticas de cookies y privacidad. AXUDI recomienda revisar
            sus condiciones antes de interactuar con esas plataformas.
          </p>

          <h2>
            Cookies técnicas
          </h2>

          <p>
            Las cookies técnicas son aquellas necesarias para que la web funcione
            correctamente o para prestar un servicio solicitado por la persona
            usuaria. Estas cookies no requieren consentimiento previo.
          </p>

          <h2>
            Cookies analíticas o publicitarias
          </h2>

          <p>
            AXUDI no utiliza actualmente cookies analíticas ni publicitarias. Si
            en el futuro se incorporan herramientas como Google Analytics, Meta
            Pixel u otras tecnologías similares, se actualizará esta política y se
            solicitará el consentimiento correspondiente cuando sea necesario.
          </p>

          <h2>
            Cómo gestionar las cookies
          </h2>

          <p>
            La persona usuaria puede configurar, bloquear o eliminar cookies desde
            las opciones de su navegador. Cada navegador ofrece herramientas
            propias para gestionar estas preferencias.
          </p>

          <h2>
            Actualización de la política de cookies
          </h2>

          <p>
            AXUDI podrá actualizar esta política si cambia la configuración técnica
            de la web, se incorporan nuevos servicios o se modifican las
            obligaciones legales aplicables.
          </p>

        </Section>

      </main>

      <Footer />

    </>
  );
}

export default CookiesPolicy;
