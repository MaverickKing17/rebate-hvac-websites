import React, { useEffect, useRef } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { Sparkles } from 'lucide-react';

const LegacyTimeline: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.timeline-item').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-husky-blue font-bold tracking-widest uppercase text-xs mb-3 border border-blue-100">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Over 50 Years of <span className="text-husky-blue">Excellence</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            From a single truck in 1974 to the GTA's leading AI-integrated HVAC provider.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-husky-blue via-husky-blue to-husky-darkBlue/20 -ml-px md:transform md:-translate-x-1/2 rounded-full"></div>

          {TIMELINE_EVENTS.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item opacity-0 translate-y-12 transition-all duration-1000 ease-out relative flex items-center mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              {/* Spacer for Desktop Alignment */}
              <div className="hidden md:block w-1/2"></div>
              
              {/* Central Dot */}
              <div className="absolute left-4 md:left-1/2 -ml-4 md:-ml-4 w-8 h-8 rounded-full border-[3px] border-white bg-husky-blue shadow-[0_0_0_4px_rgba(0,124,186,0.2)] z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 w-full">
                <div 
                  className={`
                    group relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 
                    hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300
                    ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}
                  `}
                >
                  {/* Decorative Year Watermark */}
                  <span className="absolute -top-6 right-8 text-6xl md:text-7xl font-black text-slate-50 z-0 select-none group-hover:text-blue-50 transition-colors duration-500">
                    {event.year}
                  </span>

                  <div className="relative z-10">
                    <span className="inline-block text-husky-blue font-bold text-xl mb-1">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-husky-darkBlue transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                      {event.description}
                    </p>
                    
                    {event.year === '2025' && (
                      <div className="mt-4 flex items-center text-sm font-semibold text-husky-orange bg-orange-50 px-3 py-2 rounded-lg w-fit">
                        <Sparkles size={16} className="mr-2" />
                        AI-Driven Comfort Solutions
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action at bottom of timeline */}
          <div className="timeline-item opacity-0 translate-y-12 transition-all duration-1000 relative flex justify-center mt-12 pb-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-husky-blue hover:scale-105 transition-all flex items-center group"
            >
              Be Part of Our Future
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyTimeline;