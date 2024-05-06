import './globals.css';
import React from 'react';
import Layout from './layout';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import MainVisual from './components/layouts/main-visual/MainVisual';
import Concept from './components/layouts/concept/Concept';
import About from './components/layouts/about/About';
import Parallax from './components/layouts/parallax/parallax';
import Menu from './components/layouts/menu/Menu';
import Shop from './components/layouts/shop/Shop';
import Contact from './components/layouts/contact/Contact';

export function Home() {
  return (
    <Layout>
      <Header />
      <MainVisual />
      <Concept />
      <About />
      <Parallax
        imageSrc="/images/salad_parallax.png"
        imageSrcWide="/images/salad_parallax_pc.png"
        alt="Salad"
        speed={0.1}
        scale={1.3}
        top="top-1/3"
        height="h-[250px] md:h-[320px] lg:h-[450px]"
      />
      <Menu />
      <Parallax
        imageSrc="/images/shop_parallax.png"
        imageSrcWide="/images/shop_parallax_pc.png"
        alt="Salad"
        speed={0.1}
        scale={1.3}
        top="top-1/3 md:top-2/4"
        height="h-[250px] md:h-[320px] md:h-[450px]"
      />
      <Shop />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default Home;
