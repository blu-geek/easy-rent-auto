import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/d5f04da44_Screenshot2026-01-04at192315.png" 
            alt="Easy Rent Auto" 
            className="h-10 md:h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 font-medium text-gray-600">
            <Link to={createPageUrl('Home')} className="hover:text-[#3ca972] transition-colors">Home</Link>
            <Link to={createPageUrl('Franchising')} className="hover:text-[#3ca972] transition-colors">Franchising</Link>
            <a href="/#about" className="hover:text-[#3ca972] transition-colors">About Us</a>
            <a href="/#reviews" className="hover:text-[#3ca972] transition-colors">Reviews</a>
            <a href="/#faq" className="hover:text-[#3ca972] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#3ca972] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4 ml-2">
            <div className="flex items-center gap-2 text-[#3ca972] font-bold text-lg">
              <Phone className="w-5 h-5" />
              <span>(639) 471-4669</span>
            </div>
            <a 
              href="#easy-clean-auto" 
              className="border-l border-gray-300 pl-4"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/6764236d7_1768646548.png" 
                alt="Easy Clean Auto" 
                className="h-10 w-auto object-contain"
              />
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