import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Roy Feschuk",
    time: "a year ago",
    rating: 5,
    text: "My son is an absolute car buff, so for grad day James set us up with this red Mercedes convertible! My son was pleasantly shocked and excited to get to use this for his grad day. James, thanks for the sweet ride for the day!",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/c249ad7df_Screenshot2026-01-05at224304.png"
  },
  {
    name: "Gerald",
    time: "a year ago",
    rating: 5,
    text: "Great service good people ! I'd go back there again. They preform a great service when y need a vehicle. We'll done !",
    initial: "G",
    color: "bg-teal-700"
  },
  {
    name: "Shaan Kahlon",
    time: "a year ago",
    rating: 5,
    text: "Second time renting from the guy !! Most helpful guy in the City periodWill literally come and pick you up at airport. Process is simple and fast. Will recommend 100%10/10 services. People posting bad reviews just didnt plan in advance lol.",
    avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/c249ad7df_Screenshot2026-01-05at224304.png"
  }
];

// Duplicate reviews to create a longer loop if needed, but for 3 we can just cycle
const allReviews = [...reviews, ...reviews]; 

export default function GoogleReviews() {
  // We can implement a simple carousel that shifts
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="reviews" className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-600 mb-2">Google Reviews</h2>
          <div className="w-24 h-1 bg-[#3ca972] mx-auto mt-4"></div>
        </div>

        {/* Desktop: 3 column grid, Mobile: Automated Carousel */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[320px] max-w-sm mx-auto">
           <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 px-4"
            >
              <ReviewCard review={reviews[currentIndex]} />
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