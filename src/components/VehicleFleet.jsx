import React from 'react';
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    title: "Cheap Car Rentals",
    price: "15",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/1.jpg",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$4/Day", value: "Garmin Navigation" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$10/Day", value: "SaskTel Wi-Fi Car Hub" },
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
      { label: "$10/Day", value: "SaskTel Wi-Fi Car Hub" },
      { label: "$10/Day", value: "$1000 Insurance Deductible" },
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
      { label: "$10/Day", value: "SaskTel Wi-Fi Car Hub" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15 ¢/Km or . 25 ¢/Km" }
    ]
  },
  {
    title: "SUVs",
    price: "50",
    image: "https://easyrentauto.ca/wp-content/uploads/2018/08/SUV.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$5/Day", value: "Roadside Assistance" },
      { label: "$15/Day", value: "$750 Insurance Deductible" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km or .25¢/Km" }
    ]
  },
  {
    title: "Mini Vans",
    price: "50",
    image: "https://easyrentauto.ca/wp-content/uploads/2019/01/minvan.png",
    features: [
      { label: "$3/Day", value: "Glass & Tire Insurance" },
      { label: "$4/Day", value: "Garmin Navigation" },
      { label: "$5/Day", value: "Roadside Assistance" },
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
      { label: "$10/Day", value: "SaskTel Wi-Fi Car Hub" },
      { label: "Min Age", value: "18+ Some Conditions" },
      { label: "Kilometer", value: "Charge @ .15¢/Km or .25¢/Km" }
    ]
  },

];

export default function VehicleFleet() {
  const scrollToForm = () => {
    const form = document.getElementById('reservation-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Rental Car Lineup</h2>
          <p className="text-xl text-gray-500">Includes Just The Right Car Rental For You!</p>
          <div className="w-24 h-1 bg-[#8dc63f] mx-auto mt-4"></div>
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
                <div className="absolute top-4 right-4 bg-[#8dc63f] text-white px-3 py-1 rounded-full font-bold text-sm">
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
                  className="w-full mt-6 bg-[#333] hover:bg-[#8dc63f] text-white font-bold py-2 rounded transition-colors"
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