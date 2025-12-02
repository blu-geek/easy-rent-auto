import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "We Make Renting Easy",
  "Rental Cars Available 24 Hours",
  "Road Side Assistance 24/7",
  "Pick Up Night Before Rental Free",
  "No Charge Little Late Return Policy",
  "No Credit Card - No Problem",
  "No Deposit Reservations",
  "No Reservation Cancellation Fees",
  "No Charge For Additional Drivers",
  "No Surge Pricing Ever",
  "SGI Claim With On Scene Pick Up",
  "Pet Friendly Cars Available",
  "Smoke Friendly Cars Available",
  "Airport Any Door Pick Up & Drop Off",
  "Hotel Pick Up & Drop Off",
  "Via Rail Pick Up & Drop Off",
  "18+ And Over - No Problem",
  "International Drivers Welcome",
  "Military Service Discounts",
  "Seniors Discounts",
  "CNIB Discounts",
  "Disability Discounts",
  "Bereavement Discounts",
  "Unlocked iPhone And Androids",
  "SaskTel Vehicle Wi-Fi Car Hub",
  "Roav Viva - Alexa Car Hub",
  "Garmin Navigation Units Available",
  "MP3 Cords And Phone Chargers",
  "Moving Vehicles And Trailers",
  "Moving Equipment Available",
  "Moving Boxes - Supplies",
  "Camping Equipment Available",
  "Indoor & Outdoor Storage Options",
  "Rentals Start @ Just $15/Day",
  "Rental Cars Available Day & Night",
  "Uber Lyft Tap Car Rideshare Rentals",
  "Short Term & Long Term Rentals",
  "Best Deal Car Rentals In YXE",
  "Gift Cards Available For YXE",
  "Fast, Friendly And Reliable Service",
  "Locally Owned And Operated"
];

export default function BenefitsList() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Easy Rent Auto?</h2>
          <div className="w-24 h-1 bg-[#8dc63f] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-2 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#8dc63f]/10 flex items-center justify-center text-[#8dc63f]">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}