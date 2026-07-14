import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "SASKATOON RENTALS OPEN 24 HOURS!!!",
    subtitle: "Start driving for just $15 a day!!!",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
  },
  {
    title: "BEST GOOGLE 5 STAR RATED AND 100% CANADIAN-OWNED!!!",
    subtitle: "Locally owned and operated, open 24 hours.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop"
  },
  {
    title: "HMMM...NO CREDIT CARD?- NO PROBLEM!!!",
    subtitle: "Just turned 18?- No problem!!! Out of country licenses are also accepted.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop"
  },
  {
    title: "NO CHARGE FOR ADDITIONAL DRIVERS!!! PET & SMOKE FRIENDLY CARS AVAILABLE!!!",
    subtitle: "No deposit reservations - No cancellation fees.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 shadow-sm">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8 font-normal shadow-sm">
              {slides[current].subtitle}
            </p>
            <div className="relative w-full max-w-2xl h-48 md:h-64">
              <img 
                src={slides[current].image} 
                alt="Vehicle" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200/50 hover:bg-gray-300 p-2 rounded-full text-gray-600 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/50 hover:bg-gray-300 p-2 rounded-full text-gray-600 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}