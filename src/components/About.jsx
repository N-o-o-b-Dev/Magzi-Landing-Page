const About = () => {
    return (
        <section className="py-24 bg-light-bg relative overflow-hidden" id="about">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 transform origin-top-right"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                    <div className="relative mb-16 lg:mb-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-gray-100 group">
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <img alt="Team analyzing quality charts" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" src={`${import.meta.env.BASE_URL}theAboutUsPic.png`} />
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
                        <p className="text-base text-gray-600 mb-6 leading-relaxed text-justify">
                            With a rich history rooted in the Oil, Gas, Petrochemical, Chemical and Power sectors, our team has consistently delivered expert Quality management. We have built our reputation on achieving tangible results in Quality Management, Quality Assurance and Quality Control, gained through extensive practical application across Upstream, Downstream, Engineering Consulting and EPC environments. Over the years, we have led and developed Quality departments for major industry players, fostering highly skilled teams dedicated to excellence. Our long-standing commitment includes establishing and maintaining ISO-certified QHSE systems (9001, 14001, 45001), ensuring comprehensive compliance from initial concept to project commissioning. We’re proud of our track record in meticulously auditing, defining quality stipulations in critical project phases, and rigorously evaluating bids. Our enduring expertise lies in transforming complex quality requirements into practical, compliant, and successful project outcomes, always adhering to the highest National and International Codes and Standards.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
