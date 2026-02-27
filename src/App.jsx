import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-bg text-charcoal font-body transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
