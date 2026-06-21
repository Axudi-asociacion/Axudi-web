import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function LegalNotice() {
  return (
    <>
      <Header />

      {/* Información legal básica de titularidad y uso de la web. */}
      <main>

        <Section className="legal-page">

          <h1>
            Aviso legal
          </h1>

          <h2>
            Titularidad de la web
          </h2>

          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico, se informa de
            que esta web es titularidad de AXUDI - Asociación Xuvenil de Diabetes,
            con NIF G26923169, domicilio fiscal en C/ Fernando Alonso, nº 21,
            Oviedo, Principado de Asturias, CP 33009, e inscrita en el Registro
            de Asociaciones del Principado de Asturias, con número de registro
            2094.
          </p>

          <p>
            Puedes contactar con AXUDI a través del correo electrónico
            axudi.info@gmail.com.
          </p>

          <h2>
            Objeto de la web
          </h2>

          <p>
            Esta web tiene como finalidad ofrecer información sobre AXUDI, sus
            actividades, noticias, recursos, iniciativas y formas de participación
            relacionadas con jóvenes con diabetes y su comunidad.
          </p>

          <h2>
            Condiciones de uso
          </h2>

          <p>
            El acceso y uso de esta web atribuye la condición de persona usuaria
            e implica la aceptación de este aviso legal. La persona usuaria se
            compromete a utilizar la web de forma lícita, respetuosa y adecuada,
            sin realizar actividades que puedan dañar la web, impedir su
            funcionamiento normal o afectar a los derechos de AXUDI o de terceras
            personas.
          </p>

          <h2>
            Propiedad intelectual e industrial
          </h2>

          <p>
            Los contenidos de esta web, incluyendo textos, imágenes, diseño,
            logotipos, iconos, código y elementos gráficos, pertenecen a AXUDI o
            se utilizan con autorización de sus titulares, salvo que se indique lo
            contrario.
          </p>

          <p>
            No se permite la reproducción, distribución, comunicación pública o
            transformación de los contenidos sin autorización previa, salvo en los
            casos permitidos por la ley.
          </p>

          <h2>
            Enlaces externos
          </h2>

          <p>
            Esta web puede incluir enlaces a páginas externas, como redes
            sociales, plataformas de newsletter u otros recursos. AXUDI no se
            responsabiliza del contenido, funcionamiento o políticas de privacidad
            de sitios web externos ajenos a su control.
          </p>

          <h2>
            Responsabilidad
          </h2>

          <p>
            AXUDI trabaja para mantener la información de la web actualizada y
            correcta, pero no garantiza la ausencia de errores ni la disponibilidad
            continua del sitio. AXUDI no se hace responsable de daños derivados
            del uso de la web, interrupciones del servicio, errores técnicos o
            contenidos de terceros enlazados desde la web.
          </p>

          <h2>
            Legislación aplicable
          </h2>

          <p>
            Este aviso legal se rige por la legislación española. Para cualquier
            conflicto relacionado con esta web, las partes se someterán a los
            juzgados y tribunales que correspondan conforme a la normativa
            aplicable.
          </p>

        </Section>

      </main>

      <Footer />

    </>
  );
}

export default LegalNotice;
