import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ReservationForm from "@/components/ReservationForm";
import BenefitsList from "@/components/BenefitsList";
import VehicleFleet from "@/components/VehicleFleet";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Carousel takes up more space on large screens */}
            <div className="w-full lg:w-2/3 order-2 lg:order-1">
              <HeroCarousel />
            </div>
            
            {/* Reservation Form fixed height/width */}
            <div className="w-full lg:w-1/3 order-1 lg:order-2 lg:-mt-4 z-10" id="reservation-form">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <BenefitsList />
      </section>

      {/* Vehicle Fleet Section */}
      <section>
        <VehicleFleet />
      </section>

      {/* Map/Location placeholder could go here but keeping it simple as per request */}
      
    </div>
  );
}