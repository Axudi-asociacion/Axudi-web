import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewsEvents from './pages/NewsEvents/NewsEvents';

import LegalNotice from './pages/LegalNotice/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import CookieSettings from './pages/CookieSettings/CookieSettings';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias-y-eventos" element={<NewsEvents />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/configurar-cookies" element={<CookieSettings />} />
      </Routes>

  )
}

export default App