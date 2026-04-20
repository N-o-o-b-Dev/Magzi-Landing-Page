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
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">account_tree</span>
                        </div>
                        <h4 className="text-xl font-bold text-charcoal mb-4 font-display">Quality Strategy, Systems & Governance</h4>
                        <p className="text-gray-500 mb-4 leading-relaxed text-sm">
                            We handle organisation wide quality leadership and system development responsibilities. Our team can:
                        </p>
                        <ul className="list-disc pl-5 mb-8 flex-grow text-sm text-gray-500 space-y-1.5 marker:text-primary">
                            <li>Develop, certify, and maintain ISO-based (ISO 9001, 14001, 45001) QHSE systems</li>
                            <li>Development of operating procedures and systems for OPERATING /EPC/ PROJECT MANAGEMENT Companies</li>
                            <li>Quality performance Enhancement projects to elevate Quality Assurance and Quality Control Standards</li>
                            <li>Execute comprehensive Quality Audit programs</li>
                            <li>Conduct Quality Training</li>
                        </ul>
                        <div className="mt-auto">
                            <a className="inline-flex items-center text-primary font-semibold hover:text-charcoal transition-colors group/link" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-2 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">engineering</span>
                        </div>
                        <h4 className="text-xl font-bold text-charcoal mb-4 font-display">Project Quality Management Across FEED, EPC & Construction</h4>
                        <p className="text-gray-500 mb-4 leading-relaxed text-sm">
                            We deliver project specific quality planning, execution, and oversight across the full project lifecycle. Our team can:
                        </p>
                        <ul className="list-disc pl-5 mb-8 flex-grow text-sm text-gray-500 space-y-1.5 marker:text-primary">
                            <li>Develop Quality specifications and Quality Plans.</li>
                            <li>Define QA/QC requirements for Projects (FEED and EPC stages)</li>
                            <li>Design and execute Evaluation of EPC Quality bids</li>
                            <li>Deliver tangible Quality Management, Assurance, and Control programs for FEED/EPC Projects.</li>
                            <li>Provide expert guidance on quality in FEED, EPC tenders, and Bid evaluations.</li>
                            <li>Develop, Review and Manage Contractor Quality Programs, procedures, and inspection test plans.</li>
                            <li>Develop /Review Procurement QA/QC Plans and Programs</li>
                            <li>Guide Construction Quality Management</li>
                            <li>Direct Quality departments and guide QA/QC teams</li>
                            <li>Conduct Project QA/QC Training</li>
                        </ul>
                        <div className="mt-auto">
                            <a className="inline-flex items-center text-primary font-semibold hover:text-charcoal transition-colors group/link" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-2 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                        <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-gray-50">
                            <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                        </div>
                        <h4 className="text-xl font-bold text-charcoal mb-4 font-display">Supplier, Contractor & Third Party Quality Oversight</h4>
                        <p className="text-gray-500 mb-4 leading-relaxed text-sm">
                            We enable systems for external quality assurance, vendor qualification, and inspection activities. Our team will carry out:
                        </p>
                        <ul className="list-disc pl-5 mb-8 flex-grow text-sm text-gray-500 space-y-1.5 marker:text-primary">
                            <li>Contractor and Supplier pre qualifications</li>
                            <li>Third Party Inspection at Manufacturer premises</li>
                            <li>Contractor quality performance and compliance management</li>
                        </ul>
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
