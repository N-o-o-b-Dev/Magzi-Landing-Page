const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a className="logo-font text-3xl font-black text-charcoal mb-6 block" href="#">
                            MAGZI
                        </a>
                        <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                            Leading the way in quality management solutions. We help businesses achieve excellence through standardized processes and continuous improvement.
                        </p>
                        <div className="flex gap-4">
                            <span className="text-primary text-xs font-bold tracking-widest uppercase">Dubai</span>
                            <span className="text-gray-200">•</span>
                            <span className="text-primary text-xs font-bold tracking-widest uppercase">London</span>
                            <span className="text-gray-200">•</span>
                            <span className="text-primary text-xs font-bold tracking-widest uppercase">Singapore</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-charcoal mb-8 text-sm uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#">Home</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#about">About Us</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#services">Services</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-charcoal mb-8 text-sm uppercase tracking-widest">Expertise</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#">ISO 9001</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#">Internal Audits</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#">Risk Management</a></li>
                            <li><a className="text-gray-500 hover:text-primary transition-colors" href="#">Staff Training</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400 font-medium">
                        © 2024 MAGZI Quality Management. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <a className="text-xs text-gray-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="text-xs text-gray-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
