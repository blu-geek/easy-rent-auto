import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#8dc63f]">Easy Rent Auto</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Saskatoon's premier car rental agency offering affordable rates, 
              24/7 service, and a wide variety of vehicles. No credit card required, 
              friendly service, and locally owned.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#8dc63f] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#8dc63f] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#8dc63f] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-[#8dc63f] pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8dc63f] mt-1 flex-shrink-0" />
                <span className="text-gray-400">901 1st Ave North, Saskatoon, SK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8dc63f] flex-shrink-0" />
                <span className="text-gray-400">(306) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8dc63f] flex-shrink-0" />
                <span className="text-gray-400">info@easyrentauto.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8dc63f] mt-1 flex-shrink-0" />
                <span className="text-gray-400">Open 24 Hours / 7 Days a Week</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-[#8dc63f] pl-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#8dc63f] transition-colors">Home</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#8dc63f] transition-colors">Vehicles</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#8dc63f] transition-colors">Locations</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#8dc63f] transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#8dc63f] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Easy Rent Auto. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}