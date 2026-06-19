import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

function PrivacyPolicy() {
  return (
    <>
      <Header />

      {/* Información sobre tratamiento de datos personales. */}
      <main>

        <Section className="legal-page">

          <h1>
            Política de privacidad
          </h1>

          <h2>
            Responsable del tratamiento
          </h2>

          <p>
            El responsable del tratamiento de los datos personales recogidos a
            través de esta web es AXUDI - Asociación Xuvenil de Diabetes, con NIF
            [PENDIENTE], domicilio social en [PENDIENTE] y correo electrónico de
            contacto [PENDIENTE].
          </p>

          <h2>
            Datos que podemos tratar
          </h2>

          <p>
            AXUDI podrá tratar los datos personales que la persona usuaria facilite
            voluntariamente a través de los formularios de la web o canales de
            contacto, como nombre, correo electrónico y contenido del mensaje.
          </p>

          <p>
            También podrán tratarse datos derivados de comunicaciones posteriores
            necesarias para responder a solicitudes, gestionar colaboraciones,
            participación en actividades o consultas relacionadas con la
            asociación.
          </p>

          <h2>
            Finalidades del tratamiento
          </h2>

          <ul>
            <li>Responder a consultas enviadas a través del formulario de contacto.</li>
            <li>Gestionar solicitudes de información, colaboración o participación.</li>
            <li>Enviar información relacionada con actividades de AXUDI, cuando la persona lo solicite o autorice.</li>
            <li>Mantener la comunicación con personas interesadas en la asociación.</li>
            <li>Gestionar publicaciones, noticias o contenidos cuando proceda.</li>
          </ul>

          <h2>
            Base jurídica
          </h2>

          <p>
            La base jurídica para el tratamiento de los datos es el consentimiento
            de la persona usuaria cuando envía voluntariamente un formulario, se
            suscribe a comunicaciones o contacta con AXUDI.
          </p>

          <p>
            En algunos casos, el tratamiento podrá basarse en el interés legítimo
            de AXUDI para responder a solicitudes recibidas o mantener
            comunicaciones relacionadas con la actividad de la asociación.
          </p>

          <h2>
            Conservación de los datos
          </h2>

          <p>
            Los datos se conservarán durante el tiempo necesario para atender la
            solicitud o finalidad para la que fueron recogidos. Posteriormente
            podrán mantenerse bloqueados durante los plazos necesarios para atender
            posibles obligaciones legales.
          </p>

          <h2>
            Comunicación de datos a terceros
          </h2>

          <p>
            AXUDI no venderá ni cederá datos personales a terceros, salvo
            obligación legal o cuando sea necesario para prestar un servicio
            solicitado por la persona usuaria.
          </p>

          <p>
            La web puede utilizar servicios de terceros, como Netlify para el
            alojamiento web, GitHub para la gestión técnica del proyecto o Beehiiv
            para la newsletter. Estos servicios podrán tratar datos conforme a sus
            propias condiciones y políticas de privacidad cuando la persona usuaria
            interactúe con ellos.
          </p>

          <h2>
            Newsletter
          </h2>

          <p>
            La suscripción a la newsletter se realiza a través de Beehiiv. Al
            suscribirse, la persona usuaria facilitará sus datos directamente en
            dicha plataforma, que actuará conforme a sus propias condiciones y
            política de privacidad. AXUDI utilizará la newsletter únicamente para
            enviar comunicaciones relacionadas con la asociación, actividades,
            noticias o recursos de interés.
          </p>

          <h2>
            Derechos de las personas usuarias
          </h2>

          <p>
            Cualquier persona puede ejercer sus derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento y portabilidad
            escribiendo a [PENDIENTE], indicando claramente el derecho que desea
            ejercer.
          </p>

          <p>
            También puede presentar una reclamación ante la Agencia Española de
            Protección de Datos si considera que el tratamiento de sus datos no se
            ajusta a la normativa vigente.
          </p>

          <h2>
            Seguridad
          </h2>

          <p>
            AXUDI aplicará medidas razonables para proteger los datos personales
            frente a pérdida, uso indebido, acceso no autorizado o divulgación. No
            obstante, ningún sistema en Internet puede garantizar una seguridad
            absoluta.
          </p>

        </Section>

      </main>

      <Footer />

    </>
  );
}

export default PrivacyPolicy;
