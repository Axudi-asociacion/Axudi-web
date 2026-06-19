import { useState } from 'react';
import { Link } from 'react-router-dom';

import Section from '../Section/Section';
import './Contact.scss';


import message from '../../assets/icons/i-messagewhite.svg';
import smileWhite from '../../assets/icons/i-smilewhite.svg';
import cross from '../../assets/icons/i-cross.svg';
import arrow from '../../assets/icons/i-arrowblue.svg';
import mountain from '../../assets/icons/i-mountain.png';

const CONTACT_FORM_NAME = 'contacto-axudi';

function Contact() {
  const [submitStatus, setSubmitStatus] = useState('idle');
  const isSending = submitStatus === 'sending';
  const isSent = submitStatus === 'sent';
  const hasError = submitStatus === 'error';

  function resetSubmitStatus() {
    setSubmitStatus('idle');
  }

  // Envía el formulario a Netlify Forms manteniendo el feedback visual propio.
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitStatus('sending');

    try {
      formData.set('form-name', CONTACT_FORM_NAME);
      formData.set('privacy', formData.get('privacy') ? 'Aceptada' : '');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      form.reset();
      setSubmitStatus('sent');
    } catch {
      setSubmitStatus('error');
    }
  }

  function getSubmitLabel() {
    if (isSending) {
      return (
        <>
          Enviando
          <span className="contact__sending-dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </>
      );
    }

    if (isSent) {
      return 'Enviado';
    }

    if (hasError) {
      return 'No enviado';
    }

    return 'Enviar mensaje';
  }

  function getSubmitIcon() {
    if (isSent) {
      return smileWhite;
    }

    if (hasError) {
      return cross;
    }

    return message;
  }

  return (
    <Section
      className="contact"
      id="contacto"
    >

      {/* Cabecera de la sección de contacto. */}
      <div className="contact__content">

        <h2 className="contact__title">
          Contacto
        </h2>

        <p className="contact__text">
          ¿Tienes dudas, quieres colaborar o formar parte de AXUDI?
          Escríbenos y te responderemos lo antes posible.
        </p>

      </div>

      {/* Formulario visual de contacto. */}
      <form
        name={CONTACT_FORM_NAME}
        method="POST"
        data-netlify="true"
        className="contact__form"
        aria-label="Formulario de contacto"
        onSubmit={handleSubmit}
      >

        <input
          type="hidden"
          name="form-name"
          value={CONTACT_FORM_NAME}
        />

        <input
          type="hidden"
          name="subject"
          value="Nuevo mensaje desde la web de AXUDI"
        />

        <div className="contact__field">

          <label
            htmlFor="name"
            className="contact__label"
          >
            Nombre
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="contact__input"
            placeholder="Tu nombre"
            required
          />

        </div>

        <div className="contact__field">

          <label
            htmlFor="email"
            className="contact__label"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="contact__input"
            placeholder="tuemail@email.com"
            required
          />

        </div>

        <div className="contact__field">

          <label
            htmlFor="message"
            className="contact__label"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            className="contact__textarea"
            placeholder="Cuéntanos en qué podemos ayudarte"
            required
          />

        </div>

        <label className="contact__privacy">
          <input
            type="checkbox"
            name="privacy"
            required
          />

          <span>
            He leído y acepto la{' '}
            <Link to="/privacidad">
              política de privacidad
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="button button--primary contact__button"
          disabled={isSending || isSent || hasError}
          aria-busy={isSending}
          aria-live="polite"
        >
          <span className="button__icon">
            <img
              src={getSubmitIcon()}
              alt=""
              aria-hidden="true"
              decoding="async"
            />
          </span>

          <span className="contact__button-label">
            {getSubmitLabel()}
          </span>
        </button>

        {hasError && (
          <button
            type="submit"
            className="button button--secondary contact__retry-button"
          >
            <span className="button__icon">
              <img
                src={arrow}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
            </span>

            Reintentar
          </button>
        )}

        {isSent && (
          <button
            type="button"
            className="button button--secondary contact__reset-button"
            onClick={resetSubmitStatus}
          >
            <span className="button__icon">
              <img
                src={arrow}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
            </span>

            Enviar otro
          </button>
        )}

      </form>

      {/* Montaña decorativa inferior. */}
      <img
  className="contact__mountain"
  src={mountain}
  alt=""
  aria-hidden="true"
  loading="lazy"
  decoding="async"
/>

    </Section>
  );
}

export default Contact;
