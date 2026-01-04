import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/51058b495_ChatGPTImageDec2202505_53_10PM.png" 
            alt="Easy Rent Auto" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6 font-medium text-gray-600">
            <a href="/" className="hover:text-[#8dc63f] transition-colors">Home</a>
            <Link to="/franchising" className="hover:text-[#8dc63f] transition-colors">Franchising</Link>
            <a href="/#about" className="hover:text-[#8dc63f] transition-colors">About Us</a>
            <a href="/#reviews" className="hover:text-[#8dc63f] transition-colors">Reviews</a>
            <a href="/#faq" className="hover:text-[#8dc63f] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#8dc63f] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#8dc63f] font-bold text-lg">
              <Phone className="w-5 h-5" />
              <span>(639) 471-4669</span>
            </div>
            <a 
              href="#easy-clean-auto" 
              className="text-gray-600 hover:text-[#8dc63f] transition-colors font-medium border-l border-gray-300 pl-4"
            >
              Easy Clean Auto
            </a>
          </div>
        </div>

        {/* Mobile menu button placeholder */}
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>
      </div>
    </header>
  );
}