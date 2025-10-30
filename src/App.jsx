import './App.css';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Missao from './components/Missao/missao';
import Carrossel from './components/Carrossel/carrossel';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Missao />
      <Carrossel />
      <Footer />
    </>
  );
}

export default App;