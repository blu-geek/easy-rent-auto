import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Anya Ahmed",
    time: "3 years ago",
    rating: 5,
    text: "These guys are awesome! I rented one of their fiats to go up north and it was entirely reliable (and great on gas haha) if you're looking for a car to rent in Saskatoon, these guys are definitely the ones to rent from!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUf_Gg1YtE5r0_x9_l6y9_z1_w1_q1_j1_k1_l1=s128-c0x00000000-cc-rp-mo"
  },
  {
    name: "Jody v",
    time: "3 years ago",
    rating: 5,
    text: "When I showed up at the airport and the big name car rental seemed to have lost my reservation ( I waited for an hour to try and get it straightened out) I called Easy Rent Auto. I was told they had a car available. I went to their location and had my paperwork done and drove away in my car in about 15 minutes.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUf_Gg1YtE5r0_x9_l6y9_z1_w1_q1_j1_k1_l1=s128-c0x00000000-cc-rp-mo",
    initial: "J",
    color: "bg-indigo-700"
  },
  {
    name: "Nemat dindarloo",
    time: "3 years ago",
    rating: 5,
    text: "This is one in its own,Very affordable, easy and flexible.They always there to help others and client satisfaction is always in priority.I rented 4 times and I always suggest to others. Highly recommended;Just go and try their cars.Easy Rent Auto is fabulous.😊😊",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUf_Gg1YtE5r0_x9_l6y9_z1_w1_q1_j1_k1_l1=s128-c0x00000000-cc-rp-mo"
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
          <div className="w-24 h-1 bg-[#4A8367] mx-auto mt-4"></div>
        </div>

        {/* Desktop Layout: Show all 3 (or grid) / Mobile: Carousel */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative h-[400px]">
           <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ReviewCard review={reviews[currentIndex]} />
            </motion.div>
           </AnimatePresence>
           <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
             {reviews.map((_, idx) => (
               <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
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
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="flex gap-1 mb-3 text-orange-500">
        {[...Array(5)].map((_, i) => (
           <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <div className="flex-grow">
         <p className="text-gray-600 text-sm leading-relaxed relative pl-4">
           <Quote className="w-6 h-6 text-gray-200 absolute -left-1 -top-2 transform -scale-x-100" />
           {review.text}
         </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {review.initial ? (
            <div className={`w-10 h-10 rounded-full ${review.color || 'bg-gray-500'} flex items-center justify-center text-white font-bold`}>
              {review.initial}
            </div>
          ) : (
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
               {/* Placeholder for avatar since we don't have real URLs for them all */}
               <img src={`https://ui-avatars.com/api/?name=${review.name}&background=random`} alt={review.name} />
             </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-blue-600">{review.name}</span>
            <span className="text-xs text-gray-400">{review.time}</span>
          </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5 opacity-80" />
      </div>
    </div>
  );
}