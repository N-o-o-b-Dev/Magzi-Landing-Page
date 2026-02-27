const About = () => {
    return (
        <section className="py-24 bg-light-bg relative overflow-hidden" id="about">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 transform origin-top-right"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                    <div className="relative mb-16 lg:mb-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-gray-100 group">
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <img alt="Team analyzing quality charts" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxHuiSCu7SA8fJ4gbxnKAjr_mHpop2CprGjigtJanyqxx_74-Mh4a3-DLEfkx39CQYsETyBzfD3b_MhOdGcLd2rCvoas4S5uR0YMH33uyxnOKIhdRlDkqrBZRCE8Vbjj5piTmannjk7iHVokc7otBqz_-5UsHUQmyeX1AomnJNXIDyhEI4inpOO5fM-gmX6cfmjSZD0YLZTZAkahjuHWo82tSEQBF_qOwTLSN8HubK1tQVHirtoEresbTbcZVqJxu0EhEnf3Qiac" />
                        </div>
                        <div className="absolute -bottom-10 -right-6 glass-panel-light p-6 rounded-xl shadow-xl max-w-xs transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-lg text-white shadow-lg shadow-primary/30">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Certified Excellence</p>
                                    <p className="text-xl font-bold text-charcoal">ISO 9001 Ready</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-primary"></span>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs">About Us</h2>
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-display font-bold text-charcoal mb-8 leading-tight">
                            Committed to <span className="text-primary">Excellence</span> in Quality Management
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At MAGZI, we believe that quality is not just a standard, but a culture. Our team of experts specializes in implementing robust quality management systems that drive efficiency, reduce waste, and enhance customer satisfaction.
                        </p>
                        <div className="grid gap-6">
                            <div className="flex items-start p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/50 transition-all group">
                                <div className="flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">check_circle</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-charcoal font-bold mb-1">Comprehensive Quality Audits</h4>
                                    <p className="text-sm text-gray-500">Detailed assessment of your current processes.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/50 transition-all group">
                                <div className="flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">check_circle</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-charcoal font-bold mb-1">ISO Certification Consultancy</h4>
                                    <p className="text-sm text-gray-500">Guiding you to achieve global standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
