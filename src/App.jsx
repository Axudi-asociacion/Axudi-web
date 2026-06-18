import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewsEvents from './pages/NewsEvents/NewsEvents';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import CookieSettings from './pages/CookieSettings/CookieSettings';

import ScrollToHash from './components/ScrollToHash/ScrollToHash';

import NotFound from './pages/NotFound/NotFound';

// Metadatos base usados cuando una ruta no necesita textos específicos.
const DEFAULT_SEO = {
  title: 'AXUDI | Asociación Xuvenil de Diabetes',
  description:
    'Información, apoyo y actividades para jóvenes con diabetes y sus familias.',
};

// Títulos y descripciones que se aplican según la URL actual.
const SEO_BY_PATH = {
  '/': DEFAULT_SEO,
  '/noticias-y-eventos': {
    title: 'Noticias y eventos | AXUDI',
    description:
      'Actividades, encuentros, talleres y novedades de AXUDI para jóvenes con diabetes.',
  },
  '/aviso-legal': {
    title: 'Aviso legal | AXUDI',
    description:
      'Información legal de AXUDI, titularidad y condiciones de uso de la web.',
  },
  '/privacidad': {
    title: 'Política de privacidad | AXUDI',
    description:
      'Información sobre cómo AXUDI recoge, utiliza y protege los datos personales.',
  },
  '/cookies': {
    title: 'Política de cookies | AXUDI',
    description:
      'Información sobre las cookies utilizadas en la web de AXUDI.',
  },
  '/configurar-cookies': {
    title: 'Configurar cookies | AXUDI',
    description:
      'Configura tus preferencias de cookies en la web de AXUDI.',
  },
};

// Metadatos para rutas inexistentes.
const NOT_FOUND_SEO = {
  title: 'Página no encontrada | AXUDI',
  description:
    'La página que buscas no existe o ha cambiado de dirección.',
};

// Actualiza una meta etiqueta existente sin crear duplicados.
function setMetaAttribute(selector, attribute, value) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

// Crea o actualiza la URL canónica de cada página.
function setCanonicalUrl(url) {
  let canonical = document.head.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

// Sincroniza title, meta description, Open Graph y canonical con React Router.
function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[location.pathname] || NOT_FOUND_SEO;
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    document.title = seo.title;

    setMetaAttribute("meta[name='description']", 'content', seo.description);
    setMetaAttribute("meta[property='og:title']", 'content', seo.title);
    setMetaAttribute(
      "meta[property='og:description']",
      'content',
      seo.description
    );
    setMetaAttribute("meta[property='og:url']", 'content', canonicalUrl);
    setMetaAttribute("meta[name='twitter:title']", 'content', seo.title);
    setMetaAttribute(
      "meta[name='twitter:description']",
      'content',
      seo.description
    );
    setCanonicalUrl(canonicalUrl);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* Gestiona SEO y scroll antes de pintar cada ruta. */}
      <SeoManager />
      <ScrollToHash />

      {/* Rutas principales de la web. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias-y-eventos" element={<NewsEvents />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/configurar-cookies" element={<CookieSettings />} />
        <Route
  path="*"
  element={<NotFound />}
/>
      </Routes>
    </>
  );
}

export default App;
