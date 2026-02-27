import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex-shrink-0 flex flex-col items-start leading-none">
                        <a className="logo-font text-2xl tracking-tight text-charcoal flex items-center gap-3" href="#">
                            MAGZI
                        </a>
                        <span className="text-[10px] text-primary font-bold tracking-[0.2em] mt-1">ENGINEERING TOMORROW</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-10">
                        <a className="text-gray-600 hover:text-primary text-sm font-medium transition-colors" href="#">Operations</a>
                        <a className="text-gray-600 hover:text-primary text-sm font-medium transition-colors" href="#">Sustainability</a>
                        <a className="text-gray-600 hover:text-primary text-sm font-medium transition-colors" href="#">Investors</a>
                        <a className="text-gray-600 hover:text-primary text-sm font-medium transition-colors" href="#">Careers</a>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-gray-600 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                        <a className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded text-sm font-bold transition-all shadow-lg shadow-primary/20" href="#contact">
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
                    <a className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-50" href="#" onClick={() => setIsMenuOpen(false)}>Operations</a>
                    <a className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-50" href="#" onClick={() => setIsMenuOpen(false)}>Sustainability</a>
                    <a className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-50" href="#" onClick={() => setIsMenuOpen(false)}>Investors</a>
                    <a className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-50" href="#" onClick={() => setIsMenuOpen(false)}>Careers</a>
                    <a className="bg-primary text-center hover:bg-primary-dark text-white px-8 py-3 rounded font-bold transition-all shadow-lg shadow-primary/20 mt-4" href="#contact" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;
