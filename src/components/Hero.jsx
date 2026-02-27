const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
                <img alt="Aerial view of oil and gas factory" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEP0L7IuRIpn5phG261sm_1SnFKAEImBgUiAk8OjgShex5JFsF57jkTndtgeQ7kXC3BUiwJqPBFLEwu12c0cvAwibf4de4NZjnyW0cWDabUEWrq1CSH0gBEc72UoUAKOPnQ7dWjgS2LpaPYLWylYXU_SlHVdULiBVnmZ3AItb0zkvoXhvah3j5oq8EhGv821r7TpIfWZomKLEau9um7wU_W64_NjzyneHPrMoFS-sHu0hjvIVlHYq-Yh26WqCKZcYDUTzj6p2Uubg" />
                <div className="absolute inset-0 bg-white/70 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/60"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center pt-24">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-wider text-primary uppercase">Quality Excellence Program</span>
                    </div>
                    <h1 className="logo-font text-7xl md:text-[8.5rem] leading-[0.85] text-charcoal tracking-tighter mb-4">
                        MAGZI
                    </h1>
                    <div className="flex flex-wrap items-baseline gap-4 mb-8">
                        <h2 className="text-3xl md:text-5xl font-light text-primary tracking-wide">QUALITY MANAGEMENT</h2>
                        <span className="text-3xl md:text-5xl font-light text-gray-300">|</span>
                        <h2 className="arab-text text-3xl md:text-5xl font-bold text-primary" dir="rtl">إدارة الجودة</h2>
                    </div>
                    <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed mb-10">
                        Setting the benchmark in industrial performance and operational integrity. We provide world-class quality management solutions to elevate your business standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 mb-24">
                        <a className="px-10 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded transition-all shadow-xl shadow-primary/20 flex items-center justify-center" href="#services">
                            Discover Our Services
                        </a>
                        <button className="px-10 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-charcoal text-lg font-bold rounded transition-all flex items-center justify-center gap-3 group shadow-sm">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">play_arrow</span>
                            </span>
                            Our Strategy
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
