import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Saskatoon Rentals Open 24 Hours! Start Driving For Just $15 A Day!",
    subtitle: "Some Conditions Apply, Best Google 5 Star Rated Rideshare Rental Cars In Saskatoon.",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/10/truck-ram-1500-copy.png"
  },
  {
    title: "Best Google 5 Star Rated Car Rental Rideshare Agency In Saskatoon!",
    subtitle: "Locally Owned And Operated, Open 24 Hours.",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/09/2013-smart-ForTwo.png"
  },
  {
    title: "Hmmm... No Credit Card?- No Problem! Hmmm... Just Turned 18?- No Problem!",
    subtitle: "Out Of Country Licenses Are Also Accepted.",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/09/chrysler-300-1.png"
  },
  {
    title: "No Charge For Additional Drivers! Pet & Smoke Friendly Cars Available!",
    subtitle: "No Deposit Reservations - No Cancellation Fees.",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/09/Grand-Cherokee-Limited.png"
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
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-white">
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
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-2">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-[#666] mb-8 font-light">
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