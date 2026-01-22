import React from 'react';
import { Star, ShieldCheck, Thermometer } from 'lucide-react';

interface HeroProps {
  location: string;
}

const Hero: React.FC<HeroProps> = ({ location }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[100px] opacity-70 animate-float" />
         <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-100 rounded-full blur-[100px] opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-husky-blue text-sm font-semibold border border-blue-100">
              <ShieldCheck size={14} className="mr-1" /> Satisfaction Guaranteed
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-husky-orange text-sm font-semibold border border-orange-100">
              <Star size={14} className="mr-1 fill-husky-orange" /> Since 1974
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            <span className="text-husky-blue">{location}</span> HVAC Experts
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              Since 1974
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Over 50 years of keeping {location} homes comfortable. Specialized in Furnace, AC, and Heat Pump installations with maximum rebate potential.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-husky-blue text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:bg-husky-darkBlue hover:-translate-y-1 transition-all duration-300"
            >
              Book Repair / Quote
            </button>
            <button 
              onClick={() => scrollTo('rebates')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-husky-blue border-2 border-husky-blue rounded-xl font-bold text-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <Thermometer size={20} className="mr-2" />
              Check Rebates
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos (Homestars, Google, Lennox, Carrier) */}
            <div className="font-bold text-xl flex items-center"><Star className="fill-yellow-400 text-yellow-400 mr-1"/> HomeStars</div>
            <div className="font-bold text-xl text-slate-500">Lennox</div>
            <div className="font-bold text-xl text-slate-500">Carrier</div>
            <div className="font-bold text-xl text-slate-500">Google 4.9/5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;