import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Melissa P",
    time: "2 months ago",
    rating: 5,
    text: "Absolutely amazing service! The team went above and beyond to help me get a rental car on short notice. Very professional and friendly. Best car rental experience I've had in Saskatoon!",
    initial: "M",
    color: "bg-purple-600"
  },
  {
    name: "David Chen",
    time: "3 months ago",
    rating: 5,
    text: "Great prices and excellent customer service. I've rented from them multiple times now and they never disappoint. The 24-hour availability is a lifesaver. Highly recommend Easy Rent Auto!",
    initial: "D",
    color: "bg-blue-600"
  },
  {
    name: "Sarah Johnson",
    time: "4 months ago",
    rating: 5,
    text: "Super convenient and affordable! No hidden fees, transparent pricing, and the staff is incredibly helpful. They made the whole rental process stress-free. Will definitely use them again.",
    initial: "S",
    color: "bg-pink-600"
  },
  {
    name: "Mike Thompson",
    time: "5 months ago",
    rating: 5,
    text: "Outstanding service from start to finish. The vehicle was clean and reliable. Appreciate that they accept debit and don't require a credit card. Best rental company in Saskatoon!",
    initial: "M",
    color: "bg-green-600"
  },
  {
    name: "Emma Wilson",
    time: "6 months ago",
    rating: 5,
    text: "I was impressed by how easy the process was. They picked me up at the airport and had everything ready. The rates are unbeatable and the service is top-notch. Couldn't ask for more!",
    initial: "E",
    color: "bg-indigo-600"
  },
  {
    name: "James Rodriguez",
    time: "7 months ago",
    rating: 5,
    text: "Rented a truck for moving and it was perfect. Fair pricing with no surprises. The team was accommodating with my schedule. This is the only place I'll rent from in Saskatoon now.",
    initial: "J",
    color: "bg-orange-600"
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

        {/* Automated Carousel for all screens */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
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