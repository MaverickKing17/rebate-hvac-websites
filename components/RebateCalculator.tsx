import React, { useState } from 'react';
import { CheckCircle2, ScanLine, Cpu, Search, Leaf, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const RebateCalculator: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [heatingType, setHeatingType] = useState('heatpump');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [aiInsight, setAiInsight] = useState<{
    recommendation: string;
    reasoning: string;
    annualSavings: number;
    efficiencyScore: number;
  } | null>(null);

  const calculateRebate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setScanStep(0);
    setResult(null);
    setAiInsight(null);

    // Simulate AI Multi-step processing with more context
    const steps = [
      () => setScanStep(1), // Connecting to DB
      () => setScanStep(2), // Analyzing Home Profile
      () => setScanStep(3), // Matching Incentives
    ];

    steps.forEach((step, i) => {
      setTimeout(step, (i + 1) * 800);
    });

    setTimeout(() => {
      let base = 0;
      let insight = {
        recommendation: '',
        reasoning: '',
        annualSavings: 0,
        efficiencyScore: 0
      };

      // Random variation to feel dynamic
      const randomRebate = Math.floor(Math.random() * 5) * 50;
      const randomSavings = Math.floor(Math.random() * 5) * 10;

      if (heatingType === 'heatpump') {
        base = 6500;
        insight = {
          recommendation: "Hybrid Heat Pump System",
          reasoning: `Based on current energy rates in ${postalCode.toUpperCase() || 'your area'}, a Hybrid Heat Pump offers the best ROI. It qualifies for the maximum $7,100 rebate (HER+ & Greener Homes) while reducing your carbon footprint by ~40%.`,
          annualSavings: 750 + randomSavings,
          efficiencyScore: 98
        };
      } else if (heatingType === 'furnace') {
        base = 1000;
        insight = {
          recommendation: "98% AFUE Modulating Furnace",
          reasoning: "While heat pumps offer larger rebates, a high-efficiency furnace is a robust upgrade. We recommend pairing this with a smart thermostat to unlock an additional $100 rebate and improve zoning control.",
          annualSavings: 320 + randomSavings,
          efficiencyScore: 88
        };
      } else if (heatingType === 'water') {
        base = 800;
        insight = {
          recommendation: "Condensing Tankless Water Heater",
          reasoning: "Switching to on-demand heating eliminates standby energy loss completely. This upgrade is projected to reduce your water heating costs by 25-30% annually.",
          annualSavings: 210 + randomSavings,
          efficiencyScore: 94
        };
      } else if (heatingType === 'full') {
        base = 10000;
        insight = {
          recommendation: "Whole Home Net-Zero Retrofit",
          reasoning: "Excellent choice. Combining insulation, air sealing, and a heat pump maximizes every available federal and provincial grant tier. This creates a near-passive home environment.",
          annualSavings: 1400 + randomSavings,
          efficiencyScore: 99
        };
      }
      
      setResult(base + randomRebate);
      setAiInsight(insight);
      setLoading(false);
      setScanStep(0);
    }, 3200);
  };

  const getLoadingText = () => {
    switch(scanStep) {
      case 0: return "Initializing AI Engine...";
      case 1: return "Querying Municipal Databases...";
      case 2: return postalCode ? `Analyzing Energy Trends for ${postalCode.toUpperCase()}...` : "Analyzing Regional Climate Data...";
      case 3: return "Calculating Long-term ROI & Savings...";
      default: return "Processing...";
    }
  };

  return (
    <section id="rebates" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-husky-darkBlue to-slate-900 z-0"></div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Text Content */}
          <div className="lg:w-5/12 text-white pt-8">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold mb-6 backdrop-blur-md">
              <Cpu size={16} className="mr-2 animate-pulse" />
              AI-Powered Rebate Finder v2.1
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Maximize Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Home Efficiency</span>
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-lg leading-relaxed">
              Our advanced AI doesn't just find rebates—it analyzes local energy trends to recommend the system that saves you the most money over time.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { text: 'Enbridge HER+ Program', icon: CheckCircle2 },
                { text: 'Greener Homes Grant', icon: Leaf },
                { text: 'Long-term Savings Analysis', icon: TrendingUp }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <item.icon className="mr-3 text-green-400" size={20} />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Interface */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              {loading && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-husky-blue via-husky-orange to-husky-blue animate-[shimmer_2s_infinite]"></div>
              )}

              {!result ? (
                <>
                  <div className="flex items-center mb-8">
                    <div className="p-4 bg-husky-blue text-white rounded-2xl mr-4 shadow-lg shadow-blue-500/20">
                      <ScanLine size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Eligibility Scanner</h3>
                      <p className="text-slate-500 text-sm">Real-time database connection</p>
                    </div>
                  </div>

                  <form onSubmit={calculateRebate} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Location</label>
                      <div className="relative">
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                        <input 
                          type="text" 
                          required
                          placeholder="Postal Code (e.g. L4K 2S9)"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-husky-blue focus:ring-0 outline-none transition-all uppercase font-bold text-slate-800 placeholder-slate-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Upgrade Intent</label>
                      <div className="relative">
                        <select 
                          value={heatingType}
                          onChange={(e) => setHeatingType(e.target.value)}
                          className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-husky-blue focus:ring-0 outline-none transition-all appearance-none font-semibold text-slate-800"
                        >
                          <option value="heatpump">Heat Pump (Recommended)</option>
                          <option value="furnace">High-Efficiency Furnace</option>
                          <option value="water">Tankless Water Heater</option>
                          <option value="full">Whole Home Retrofit</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-5 bg-gradient-to-r from-husky-darkBlue to-husky-blue text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-80 disabled:cursor-wait relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex justify-center items-center">
                        {loading ? (
                          <>
                            <ScanLine className="animate-spin mr-3" size={20} />
                            {getLoadingText()}
                          </>
                        ) : (
                          <>Scan For Rebates <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></>
                        )}
                      </span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                       <div className="inline-flex items-center space-x-2 text-green-600 font-bold uppercase tracking-wider text-xs mb-1">
                          <CheckCircle2 size={16} /> <span>Programs Identified</span>
                       </div>
                       <div className="text-5xl font-black text-husky-darkBlue tracking-tighter">
                          ${result.toLocaleString()}
                          <span className="text-lg text-slate-400 font-medium ml-1">in rebates</span>
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="inline-flex items-center space-x-2 text-husky-blue font-bold uppercase tracking-wider text-xs mb-1">
                          <TrendingUp size={16} /> <span>Est. Annual Savings</span>
                       </div>
                       <div className="text-3xl font-bold text-slate-800 tracking-tight">
                          ${aiInsight?.annualSavings.toLocaleString()}
                          <span className="text-sm text-slate-400 font-normal ml-1">/yr</span>
                       </div>
                    </div>
                  </div>

                  {/* AI Strategy Card */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50 -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-slate-900 flex items-center">
                          <SparklesIcon />
                          <span className="ml-2">AI Strategy: {aiInsight?.recommendation}</span>
                        </h4>
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                          Efficiency Score: {aiInsight?.efficiencyScore}/100
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {aiInsight?.reasoning}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setResult(null)}
                      className="py-3 text-slate-500 font-bold hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      New Search
                    </button>
                    <button className="py-3 bg-husky-orange text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all flex items-center justify-center">
                      Get Quote <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 flex justify-center items-center space-x-6 opacity-60">
               <span className="text-white text-xs font-semibold uppercase tracking-widest">Verified Data:</span>
               <div className="h-6 w-auto font-bold text-white/80">Enbridge</div>
               <div className="h-6 w-auto font-bold text-white/80">Gov. Canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the sparkles icon to keep main code clean
const SparklesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-husky-blue">
    <path d="M12 2L14.4 7.2L20 9.6L14.4 12L12 17.2L9.6 12L4 9.6L9.6 7.2L12 2Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 2L14.4 7.2L20 9.6L14.4 12L12 17.2L9.6 12L4 9.6L9.6 7.2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default RebateCalculator;