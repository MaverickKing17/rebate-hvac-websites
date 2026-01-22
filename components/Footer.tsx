import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet markers in React/Webpack/ESM environments
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

const Footer: React.FC = () => {
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  const position: [number, number] = [43.7967, -79.5186]; // Husky Vaughan Location
  const serviceRadius = 25000; // 25km radius covers GTA

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="font-black text-2xl tracking-tighter text-white italic mb-6">
              HUSKY<span className="text-husky-red">AIR</span>
            </div>
            <p className="text-gray-400 mb-6">
              Serving the GTA since 1974. We are committed to keeping your home comfortable in every season.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Furnace Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AC Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heat Pumps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Heaters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-husky-orange mt-1" size={20} />
                <span className="text-gray-400">2104 HWY 7 West, Unit 17/18,<br/>Vaughan, ON L4K 2S9</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-husky-orange" size={20} />
                <a href="tel:905-761-9485" className="text-white font-bold hover:underline">905-761-9485</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-husky-orange" size={20} />
                <a href="mailto:info@huskyair.com" className="text-gray-400 hover:text-white">info@huskyair.com</a>
              </li>
            </ul>
          </div>

          {/* Interactive Map */}
          <div className="rounded-xl overflow-hidden h-64 bg-slate-800 relative z-0 border border-slate-700 shadow-lg">
             {/* MapContainer is not SSR compatible in some frameworks but fine here in SPA */}
             <MapContainer 
               center={position} 
               zoom={10} 
               scrollWheelZoom={false} 
               className="h-full w-full"
               attributionControl={false}
             >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-slate-900 font-sans">
                      <strong>Husky Heating & Air Conditioning</strong><br/>
                      Vaughan HQ
                    </div>
                  </Popup>
                </Marker>
                <Circle 
                  center={position} 
                  pathOptions={{ fillColor: '#007cba', color: '#007cba', opacity: 0.5, fillOpacity: 0.2 }} 
                  radius={serviceRadius} 
                />
             </MapContainer>
             <div className="absolute bottom-2 right-2 z-[400] bg-white/90 px-2 py-1 rounded text-[10px] text-slate-500 pointer-events-none">
               Service Area Highlighted
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Husky Heating & Air Conditioning. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;