import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Text Content */}
          <div className="space-y-6 text-gray-600">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Easy Rent Auto Rent-A-Car<br />
              <span className="text-gray-500">Cheap Saskatoon Car Rental</span>
            </h2>
            
            <p className="leading-relaxed">
              We Make Renting A Car Easy! Cheap Car Rentals Starting At Just $15 A Day! 
              Open For Car Rentals 24/7, SGI On Scene Rentals, No Credit Card No Problem, 
              No Charge For Additional Drivers, Airport Pick-up And Drop-off, Drivers Under 19 Are Welcome, 
              International Driver's Welcome, Discount Unlimited Kilometer Packages Available, 
              Cheap Short Term & Long Term Car Rental Options, Indoor And Outdoor Storage Options, 
              Mp3 Cords And Phone Chargers Available, Navigation Units Available, Trailer Hitches Available, 
              Moving Equipment Available, Tents And Camping Equipment Available, Bikes With Racks Also Available.
            </p>

            <p className="leading-relaxed">
              Discount Rent-A-Car In Saskatoon For Budget Adventures Or Your Next Rideshare Enterprise 
              Call, Text Or Book Online For Cheap Discount Car Rental Deals. Rent-A-Car In Saskatoon, 
              Open 24 Hours A Day For Whatever Gets In Your Way. Rent-A-Car By The Hour Or By The Day 
              We Want To Help You Move Your Enterprise Today!
            </p>

            <p className="leading-relaxed font-medium text-gray-800">
              We Thank Saskatoon For Your Overwhelming 5-Star Google Review Response To Our Little Saskatoon Car Rental Enterprise.
            </p>
          </div>

          {/* Video Content */}
          <div className="w-full">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/qfaB4AHYAzc?start=26" 
                title="Easy Rent Auto Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}