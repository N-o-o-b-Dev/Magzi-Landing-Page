const Stats = () => {
    return (
        <section className="relative z-20 border-t border-gray-100 bg-white/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 py-10">
                    <div className="px-8 first:pl-0">
                        <div className="flex items-center gap-2 mb-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="material-symbols-outlined text-primary text-lg">factory</span>
                            Daily Production
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-charcoal">2.5M</span>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-tighter">BPD</span>
                        </div>
                    </div>
                    <div className="px-8">
                        <div className="flex items-center gap-2 mb-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                            Safety Compliance
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-charcoal">99.9%</span>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-tighter">Rate</span>
                        </div>
                    </div>
                    <div className="px-8">
                        <div className="flex items-center gap-2 mb-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="material-symbols-outlined text-primary text-lg">public</span>
                            Global Reach
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-charcoal">14</span>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-tighter">Countries</span>
                        </div>
                    </div>
                    <div className="px-8">
                        <div className="flex items-center gap-2 mb-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="material-symbols-outlined text-primary text-lg">eco</span>
                            Net Zero Goal
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-charcoal">2040</span>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-tighter">Target</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
