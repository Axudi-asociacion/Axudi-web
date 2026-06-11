import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewsEvents from './pages/NewsEvents/NewsEvents';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import CookieSettings from './pages/CookieSettings/CookieSettings';

import ScrollToHash from './components/ScrollToHash/ScrollToHash';

import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <ScrollToHash />

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