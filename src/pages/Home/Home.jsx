import { useEffect, useRef } from 'react';

import Hero from '../../components/Hero/Hero';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import Together from '../../components/Together/Together';
import Join from '../../components/Join/Join';
import About from '../../components/About/About';
import Collaborators from '../../components/Collaborators/Collaborators';
import LatestNews from '../../components/LatestNews/LatestNews';
import Newsletter from '../../components/Newsletter/Newsletter';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Reveal from '../../components/Reveal/Reveal';

import './Home.scss';


function Home() {
  const homeRef = useRef(null);

  // Ajusta el espacio final al alto real del footer revelado.
  useEffect(() => {
    const homeElement = homeRef.current;
    const footerElement = homeElement?.querySelector('.footer--reveal');

    if (!homeElement || !footerElement) {
      return undefined;
    }

    function updateFooterRevealHeight() {
      const revealEnabled = window.matchMedia('(min-width: 768px)').matches;

      if (!revealEnabled) {
        homeElement.style.removeProperty('--footer-reveal-height');
        return;
      }

      homeElement.style.setProperty(
        '--footer-reveal-height',
        `${footerElement.offsetHeight}px`
      );
    }

    updateFooterRevealHeight();

    const resizeObserver = new ResizeObserver(updateFooterRevealHeight);
    resizeObserver.observe(footerElement);
    window.addEventListener('resize', updateFooterRevealHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateFooterRevealHeight);
    };
  }, []);

  return (
    <main className="home-page" ref={homeRef}>
      {/* Secciones ordenadas tal como aparecen en la landing. */}
      <Header />
      <Hero />
      <Reveal><WhatWeDo /></Reveal>
      <Reveal><Together /> </Reveal>
      <Reveal><Join /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Collaborators /></Reveal>
      <Reveal><LatestNews /></Reveal>
      <Reveal><Newsletter /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer reveal />
    </main>
  );
}

export default Home;
