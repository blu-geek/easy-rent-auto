import React from 'react';
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    title: "Cheap Car Rentals",
    price: "15",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/1.jpg",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km" }
    ]
  },
  {
    title: "Coupes",
    price: "20",
    image: "https://easyrentauto.ca/wp-content/uploads/2019/01/Coupe.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km" }
    ]
  },
  {
    title: "Sedans",
    price: "35",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/2.jpg",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km" }
    ]
  },
  {
    title: "SUVs",
    price: "50",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/SUV.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km" }
    ]
  },
  {
    title: "Mini Vans",
    price: "50",
    image: "https://easyrentauto.ca/wp-content/uploads/2019/01/minvan.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km" }
    ]
  },
  {
    title: "Pick-Up Trucks",
    price: "45",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/Pic-UP-Truck.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .25¢ to .45¢/Km" }
    ]
  },
  {
    title: "Convertibles",
    price: "35",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/2.jpg",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .25¢ to .55¢/Km" }
    ]
  },
  {
    title: "Cube Vans",
    price: "80",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692f520dd71ac1b1e22d9e26/cfdce626d_cubevan.jpeg",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .25¢ to .55¢/Km" }
    ]
  },
  {
    title: "Rent-A-Driver",
    price: "15/Hour",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/1.jpg",
    features: [
      { label: "$15/Hour", value: "9:00am - 5:00PM" },
      { label: "$20/Hour", value: "5:00pm - 11:00pm" },
      { label: "$25/Hour", value: "11:00pm - 1:00am" },
      { label: "$30/Hour", value: "1:00am - 3:00am" },
      { label: "$35/Hour", value: "3:00am - 8:00am" },
      { label: "$150/Day", value: "Daily Rate / Tour Rate +" },
      { label: "Conditions", value: "Pet Friendly - Non Smoking" },
      { label: "Conditions", value: "Pet Friendly - Smoking Allowed" }
    ]
  }
];

export default function VehicleFleet() {
  const scrollToForm = () => {
    const form = document.getElementById('reservation-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="vehicle-fleet" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Rental Car Lineup</h2>
          <p className="text-xl text-gray-500">Includes Just The Right Car Rental For You!</p>
          <div className="w-24 h-1 bg-[#3ca972] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((car, index) => (
            <div key={index} className="flex flex-col border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative h-56 p-4 bg-white flex items-center justify-center border-b">
                <img 
                  src={car.image} 
                  alt={car.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute top-4 right-4 bg-[#3ca972] text-white px-3 py-1 rounded-full font-bold text-sm">
                  From ${car.price}/Day
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{car.title}</h3>
                
                <div className="flex-grow">
                  <table className="w-full text-sm">
                    <tbody>
                      {car.features.map((feature, idx) => (
                        <tr key={idx} className="border-b last:border-0">
                          <td className="py-2 font-semibold text-gray-600 w-1/3">{feature.label}</td>
                          <td className="py-2 text-gray-500">{feature.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Button 
                  onClick={scrollToForm}
                  className="w-full mt-6 bg-[#169a5a] hover:bg-[#0f7d48] text-white font-bold py-2 rounded transition-colors"
                >
                  RESERVE NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}