import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Root.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './compoments/Nav';
import HeroSection from './compoments/HeroSection';
import Tabplan from './compoments/Tabplan';
import Features from './compoments/Features';
import Fly from './compoments/Fly';
import Footer from './compoments/Footer';
import Memories from './compoments/Memories';
import Subscribe from './compoments/Subscribe';
import Travels from './compoments/Travels';
import Peoplemap from './compoments/Peoplemap';
import Tickets from './compoments/Tickets';
import BackToTop from './compoments/BackToTop';
import Preloder from './compoments/Preloder';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 2500)
    document.body.classList.add('overflow-hidden')

  }, []);
  return (
    <>
      <Preloder />
      <Nav />
      <HeroSection />
      <Tabplan />
      <Features />
      <Fly />
      <Tickets />
      <Travels />
      <Peoplemap />
      <Memories />
      <Subscribe />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
