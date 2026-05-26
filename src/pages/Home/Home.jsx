import Hero from '../../components/Hero/Hero';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import Together from '../../components/Together/Together';
import Join from '../../components/Join/Join';
import About from '../../components/About/About';
import Collaborators from '../../components/Collaborators/Collaborators';
import LatestNews from '../../components/LatestNews/LatestNews';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeDo />
      <Together />
      <Join />
      <About />
      <Collaborators />
      <LatestNews />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;