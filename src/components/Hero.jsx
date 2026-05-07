const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
                <img alt="Aerial view of oil and gas factory" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEP0L7IuRIpn5phG261sm_1SnFKAEImBgUiAk8OjgShex5JFsF57jkTndtgeQ7kXC3BUiwJqPBFLEwu12c0cvAwibf4de4NZjnyW0cWDabUEWrq1CSH0gBEc72UoUAKOPnQ7dWjgS2LpaPYLWylYXU_SlHVdULiBVnmZ3AItb0zkvoXhvah3j5oq8EhGv821r7TpIfWZomKLEau9um7wU_W64_NjzyneHPrMoFS-sHu0hjvIVlHYq-Yh26WqCKZcYDUTzj6p2Uubg" />
                <div className="absolute inset-0 bg-white/70 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/60"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center pt-32 md:pt-40 pb-16">
                <div className="w-full">
                    <h1 className="logo-font text-6xl md:text-[7.5rem] leading-[0.85] text-charcoal tracking-tighter mb-4">
                        MAGZI
                    </h1>
                    <div className="flex flex-wrap items-baseline gap-4 mb-8">
                        <h2 className="text-2xl md:text-4xl font-light text-primary-dark tracking-wide">QUALITY MANAGEMENT</h2>
                        <span className="text-2xl md:text-4xl font-light text-gray-400">|</span>
                        <h2 className="arab-text text-2xl md:text-4xl font-bold text-primary-dark" dir="rtl">إدارة الجودة</h2>
                    </div>
                    
                    <p className="text-xl text-gray-900 font-medium max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
                        Setting the benchmark in industrial performance and operational Excellence.
                        We provide world-class quality management solutions to enhance your business standards.
                    </p>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
                        <div className="w-full lg:w-3/4 bg-white/60 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,150,206,0.12)] transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-black mb-6 tracking-wide uppercase drop-shadow-sm" style={{ color: '#0096ce' }}>
                                CONSULTANCY SERVICES FOR OIL, GAS & PETROCHEMICALS
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 font-semibold text-xs md:text-sm leading-snug md:leading-normal">
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>PROJECT MANAGEMENT CONSULTANCY</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>PROJECT QUALITY MANAGEMENT</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>QA/QC DOCUMENTS DEVELOPMENT AND APPROVAL SERVICES</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>ENGINEERING, PROCUREMENT AND CONSTRUCTION QA/QC SERVICES</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>INSPECTION, TESTING AND CERTIFICATION SERVICES</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>CONTRACTOR AND VENDOR PREQUALIFICATION</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>QUALITY AUDITING</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>QA/QC MANPOWER SUPPLY</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>TRAINING AND DEVELOPMENT</span></li>
                                <li className="flex items-start"><span className="text-[#0096ce] mr-3 mt-[3px] text-[10px]">●</span> <span>QMS DEVELOPMENT AND ISO CERTIFICATIONS</span></li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
                            <a className="px-6 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center text-center w-full max-w-[260px] hover:-translate-y-1 border border-primary/20 hover:border-primary-dark/40" href="#services">
                                Discover Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
