const Contact = () => {
    return (
        <section className="py-24 bg-light-bg" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-10 lg:p-14 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none mix-blend-overlay"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-display font-bold mb-6">Let's discuss your quality needs</h3>
                                <p className="text-white/90 mb-12 text-lg font-light leading-relaxed">
                                    Reach out to us for a consultation. We are ready to help you achieve operational excellence.
                                </p>
                                <div className="space-y-10">
                                    <div className="flex items-start group">
                                        <div className="bg-white/20 p-3 rounded-xl mr-5 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg">Visit Us</h5>
                                            <p className="text-white/80 mt-1">Business Bay District<br />Dubai, UAE</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="bg-white/20 p-3 rounded-xl mr-5 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                                            <span className="material-symbols-outlined">email</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg">Email Us</h5>
                                            <p className="text-white/80 mt-1">info@magzi-qm.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 relative z-10">
                                <h5 className="font-bold text-lg mb-4">Follow Our Progress</h5>
                                <div className="flex space-x-4">
                                    <a className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all backdrop-blur-sm" href="#">
                                        <span className="material-symbols-outlined text-xl">public</span>
                                    </a>
                                    <a className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all backdrop-blur-sm" href="#">
                                        <span className="material-symbols-outlined text-xl">share</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 lg:p-14 bg-white">
                            <h3 className="text-2xl font-bold text-charcoal mb-8">Send Message</h3>
                            <form action="#" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="first-name">First Name</label>
                                        <input className="w-full rounded-lg border-gray-200 bg-light-bg text-charcoal shadow-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400 transition-colors py-3" id="first-name" placeholder="John" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="last-name">Last Name</label>
                                        <input className="w-full rounded-lg border-gray-200 bg-light-bg text-charcoal shadow-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400 transition-colors py-3" id="last-name" placeholder="Doe" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
                                    <input className="w-full rounded-lg border-gray-200 bg-light-bg text-charcoal shadow-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400 transition-colors py-3" id="email" placeholder="john@example.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full rounded-lg border-gray-200 bg-light-bg text-charcoal shadow-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400 transition-colors py-3" id="message" placeholder="Describe your project" rows="4"></textarea>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 flex justify-center items-center gap-2" type="button">
                                    Send Message
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
