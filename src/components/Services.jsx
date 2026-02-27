const Services = () => {
    return (
        <section className="py-24 bg-white relative" id="services">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <h2 className="text-primary font-bold tracking-wide uppercase text-xs">Our Services</h2>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-display font-bold text-charcoal mb-6">
                        Tailored Solutions
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Industry-leading frameworks designed to elevate your operational standards.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">policy</span>
                        </div>
                        <h4 className="text-2xl font-bold text-charcoal mb-4 font-display">ISO Implementation</h4>
                        <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                            Guidance through the entire process of ISO certification, ensuring your documentation meets global standards.
                        </p>
                        <div className="mt-auto">
                            <a className="inline-flex items-center text-primary font-semibold hover:text-charcoal transition-colors group/link" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-2 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
                        </div>
                        <h4 className="text-2xl font-bold text-charcoal mb-4 font-display">Quality Audits</h4>
                        <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                            Rigorous internal auditing services to identify gaps, risks, and opportunities for process improvement.
                        </p>
                        <div className="mt-auto">
                            <a className="inline-flex items-center text-primary font-semibold hover:text-charcoal transition-colors group/link" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-2 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">school</span>
                        </div>
                        <h4 className="text-2xl font-bold text-charcoal mb-4 font-display">Staff Training</h4>
                        <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                            Empower your team with specialized training programs covering quality management and safety principles.
                        </p>
                        <div className="mt-auto">
                            <a className="inline-flex items-center text-primary font-semibold hover:text-charcoal transition-colors group/link" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-2 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
