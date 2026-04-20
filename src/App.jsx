import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-light-bg text-charcoal font-body transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
      <Header onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <About />
          <Services />
          <Contact />
        </>
      )}

      {currentPage === 'about' && (
        <div className="pt-24 min-h-screen">
          <About />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
