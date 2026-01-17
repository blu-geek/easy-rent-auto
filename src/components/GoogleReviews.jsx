import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Julian Wright",
    time: "3 months ago",
    rating: 5,
    text: "Every time I come to Saskatoon I rent a car from Easy Rent Auto. All the staff are really friendly and helpful and the cars have been excellent. The main man James always takes really good care of me with his 'above and beyond' customer service and I'll certainly be coming back to them next time I'm in town!",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/38a1a7c6b_Screenshot2026-01-17at044651.png"
  },
  {
    name: "RJ Goreham",
    time: "3 months ago",
    rating: 5,
    text: "Went goose hunting and rented a car from James. What a great company and rental experience! The van was perfect for 5 men and gear! The best thing was James is open 24/7 I called and he answered at 6 am I had my car in 20 mins! He personally came in and got the car ready! Great customer service! I will use him every time! Easy Car Rental #1! Thanks RJ Goreham Dallas Tx",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/9bee1f49d_Screenshot2026-01-17at044713.png"
  },
  {
    name: "Carter Matheson",
    time: "5 months ago",
    rating: 5,
    text: "Like the name, it was very \"easy\" to rent a car here. I called and they delivered me a VW bug in 15 minutes at a very reasonable price. I will definitely be using them again should I ever need another rental in Saskatoon.",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/60c9b6841_Screenshot2026-01-17at044739.png"
  },
  {
    name: "Serena Rowley",
    time: "5 months ago",
    rating: 5,
    text: "My dad got a rental from Easy Auto for a week. It was good quality, spacious, and comfortable. Good AC and good milage. My dad's flight was a day before mine as we are going to different locations. James allowed us to keep the vehicle another day and then drove us to the airport! Awesome rental experience!",
    initial: "S",
    color: "bg-orange-800"
  },
  {
    name: "Nicholas Rutherford",
    time: "7 months ago",
    rating: 5,
    text: "Needed a rental last-minute and Easy Rent Auto came through. No hassle, competitive pricing, and the car ran perfectly. Zero complaints - would absolutely use them again when in Saskatoon.",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/3507990f8_Screenshot2026-01-17at044818.png"
  },
  {
    name: "Alexander Cole",
    time: "7 months ago",
    rating: 5,
    text: "We had an outstanding experience recently renting a car while visiting my son for the weekend at USask. The car was waiting for us at the airport and it was in perfect condition. Any questions we had were responded to quickly via text. We will definitely go with Easy Rent when we visit again!",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/4df3131ee_Screenshot2026-01-17at044833.png"
  }
];

// Duplicate reviews to create a longer loop if needed, but for 3 we can just cycle
const allReviews = [...reviews, ...reviews]; 

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="reviews" className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-600 mb-2">Google Reviews</h2>
          <div className="w-24 h-1 bg-[#3ca972] mx-auto mt-4"></div>
        </div>

        {/* Automated Carousel for all screens */}
        <div className="relative h-[280px] max-w-6xl mx-auto">
           <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 px-4 flex justify-center"
            >
              <div className="w-full max-w-sm md:max-w-md">
                <ReviewCard review={reviews[currentIndex]} />
              </div>
            </motion.div>
           </AnimatePresence>
           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
             {reviews.map((_, idx) => (
               <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#3ca972]' : 'bg-gray-300'}`}
               />
             ))}
           </div>
        </div>
      </div>

      {/* Floating Widget */}
      <a 
        href="https://www.google.com/search?q=easy+rent+auto+saskatoon+reviews" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 border border-gray-200 hover:shadow-xl transition-shadow animate-in slide-in-from-bottom-5 fade-in duration-700"
        style={{ maxWidth: '220px' }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-700">Google Rating</span>
          <div className="flex items-center gap-1">
            <span className="text-orange-500 font-bold text-sm">4.7</span>
            <div className="flex text-orange-400">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current opacity-70" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
      <div className="flex gap-0.5 mb-3 text-orange-500">
        {[...Array(5)].map((_, i) => (
           <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>
      <div className="flex-grow mb-4">
         <p className="text-gray-600 text-xs leading-relaxed">
           "{review.text}"
         </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {review.initial ? (
            <div className={`w-8 h-8 rounded-full ${review.color || 'bg-gray-500'} flex items-center justify-center text-white font-bold text-sm`}>
              {review.initial}
            </div>
          ) : (
             <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
               <img src={`https://ui-avatars.com/api/?name=${review.name}&background=random`} alt={review.name} />
             </div>
          )}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-blue-600">{review.name}</span>
            <span className="text-[10px] text-gray-400">{review.time}</span>
          </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-4 h-4 opacity-70 flex-shrink-0" />
      </div>
    </div>
  );
}