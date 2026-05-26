// import './Contact.scss';

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__content">
        <h2 className="contact__title">Contacto</h2>

        <p className="contact__text">
          ¿Tienes dudas, quieres colaborar o formar parte de AXUDI?
          Escríbenos y te responderemos lo antes posible.
        </p>
      </div>

      <form className="contact__form">
        <div className="contact__field">
          <label htmlFor="name" className="contact__label">
            Nombre
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="contact__input"
            placeholder="Tu nombre"
          />
        </div>

        <div className="contact__field">
          <label htmlFor="email" className="contact__label">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="contact__input"
            placeholder="tuemail@email.com"
          />
        </div>

        <div className="contact__field">
          <label htmlFor="message" className="contact__label">
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            className="contact__textarea"
            placeholder="Cuéntanos en qué podemos ayudarte"
          ></textarea>
        </div>

        <button type="submit" className="contact__button">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;