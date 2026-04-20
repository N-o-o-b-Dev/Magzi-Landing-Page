import { useState } from 'react';

const Header = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHomeClick = (e) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate('home');
            window.scrollTo(0, 0);
        }
    };

    const handleAboutClick = (e) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate('about');
            window.scrollTo(0, 0);
            setIsMenuOpen(false);
        }
    };

    const handleSectionClick = (e, targetId) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate('home');
            setIsMenuOpen(false);
            setTimeout(() => {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className="absolute w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex-shrink-0 flex flex-col items-start leading-none">
                        <a className="logo-font text-2xl tracking-tight text-charcoal flex items-center gap-3" href="#" onClick={handleHomeClick}>
                            MAGZI
                        </a>
                        <span className="text-[10px] text-primary font-bold tracking-[0.2em] mt-1">ENGINEERING TOMORROW</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-gray-800 hover:text-primary text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 py-4" href="#about" onClick={handleAboutClick}>About Us</a>
                        
                        <div className="relative group py-4">
                            <button className="text-gray-800 hover:text-primary text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1">
                                Industries <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                            </button>
                            <div className="absolute left-0 top-full w-56 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">OIL</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">GAS</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">PETROCHEMICAL</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">POWER</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">CHEMICAL</a>
                            </div>
                        </div>

                        <div className="relative group py-4">
                            <button className="text-gray-800 hover:text-primary text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1">
                                Clients <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                            </button>
                            <div className="absolute left-0 top-full w-72 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">OPERATING COMPANIES</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">PROJECT MANAGEMENT CONSULTANTS</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">EPC CONTRACTORS</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary">EPC SUBCONTRACTORS</a>
                            </div>
                        </div>

                        <div className="relative group py-4">
                            <button className="text-gray-800 hover:text-primary text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1">
                                Services <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                            </button>
                            <div className="absolute left-auto right-0 xl:right-auto md:left-0 top-full w-80 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                                <a href="#services" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary" onClick={(e) => handleSectionClick(e, 'services')}>Quality Strategy, Systems & Governance</a>
                                <a href="#services" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary" onClick={(e) => handleSectionClick(e, 'services')}>Project Quality Management Across FEED, EPC & Construction</a>
                                <a href="#services" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary" onClick={(e) => handleSectionClick(e, 'services')}>Supplier, Contractor & Third Party Quality Oversight</a>
                            </div>
                        </div>
                        <a className="text-gray-800 hover:text-primary text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 py-4" href="#careers">Careers</a>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-gray-600 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                        <a className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded text-sm font-bold transition-all shadow-lg shadow-primary/20" href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>
                            Contact Us
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                            className="text-gray-600 hover:text-charcoal focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-6 px-4 flex flex-col space-y-4">
                    <a className="text-gray-800 hover:text-primary font-semibold py-2 border-b border-gray-50 transition-all duration-300 hover:pl-2" href="#about" onClick={handleAboutClick}>About Us</a>
                    
                    <div className="border-b border-gray-50 py-2">
                        <details className="group">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-800 hover:text-primary transition-all duration-300 hover:pl-2">
                                <span>Industries</span>
                                <span className="transition group-open:rotate-180 material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex flex-col gap-3 pl-4">
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">OIL</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">GAS</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">PETROCHEMICAL</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">POWER</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">CHEMICAL</a>
                            </div>
                        </details>
                    </div>

                    <div className="border-b border-gray-50 py-2">
                        <details className="group">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-800 hover:text-primary transition-all duration-300 hover:pl-2">
                                <span>Clients</span>
                                <span className="transition group-open:rotate-180 material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex flex-col gap-3 pl-4">
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">OPERATING COMPANIES</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">PROJECT MANAGEMENT CONSULTANTS</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">EPC CONTRACTORS</a>
                                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-500 hover:text-primary">EPC SUBCONTRACTORS</a>
                            </div>
                        </details>
                    </div>

                    <div className="border-b border-gray-50 py-2">
                        <details className="group">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-800 hover:text-primary transition-all duration-300 hover:pl-2">
                                <span>Services</span>
                                <span className="transition group-open:rotate-180 material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn flex flex-col gap-3 pl-4">
                                <a href="#services" onClick={(e) => handleSectionClick(e, 'services')} className="text-sm font-medium text-gray-500 hover:text-primary">Quality Strategy, Systems & Governance</a>
                                <a href="#services" onClick={(e) => handleSectionClick(e, 'services')} className="text-sm font-medium text-gray-500 hover:text-primary">Project Quality Management Across FEED, EPC & Construction</a>
                                <a href="#services" onClick={(e) => handleSectionClick(e, 'services')} className="text-sm font-medium text-gray-500 hover:text-primary">Supplier, Contractor & Third Party Quality Oversight</a>
                            </div>
                        </details>
                    </div>
                    <a className="text-gray-800 hover:text-primary font-semibold py-2 border-b border-gray-50 transition-all duration-300 hover:pl-2" href="#careers" onClick={() => setIsMenuOpen(false)}>Careers</a>
                    <a className="bg-primary text-center hover:bg-primary-dark text-white px-8 py-3 rounded font-bold transition-all shadow-lg shadow-primary/20 mt-4" href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;
