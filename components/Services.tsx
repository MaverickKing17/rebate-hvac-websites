import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Home Comfort Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From emergency repairs to high-efficiency installations, our NATE-certified technicians handle it all.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative glass p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-husky-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  {service.highlight}
                </div>
              )}
              
              <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-50 text-husky-blue group-hover:bg-husky-blue group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
              
              <a href="#" className="inline-flex items-center text-husky-blue font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-husky-blue after:transition-all after:duration-300 hover:after:w-full">
                Learn More <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;