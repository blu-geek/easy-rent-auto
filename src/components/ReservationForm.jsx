import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { format } from "date-fns";
import { toast } from "sonner";

const carOptions = [
  "Cheap Car Rentals Starting @ $15/Day",
  "Rent A Rock Starting @ $15/Day",
  "Coupes Starting @ $20/Day",
  "Convertibles Starting @ $30/Day",
  "Sedans Starting @ $35/Day",
  "Sport Utility Vehicles Starting @ $50/Day",
  "Mini Vans Starting @ $50/Day",
  "Pick-Up Trucks Starting @ $45/Day",
  "Crew-Cab 4X4 Trucks Starting @ $80/Day",
  "Quad-Cab 4X4 Trucks Starting @ $80/Day",
  "Moving Vans Starting @ $80/Day",
  "Tow Trucks Starting @ $125 A Hour",
  "Hire A Driver Starting @ $15 A Hour"
];

const locations = [
  "My Front Doorstep",
  "901 1st Ave North - Main Branch",
  "Saskatoon Airport - YXE Branch",
  "1910 St. George Ave - EX Branch",
  "Sask Auto Mall - East Branch",
  "1201 7th Ave North - Detail Shop"
];

const times = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  const ampm = hour < 12 ? 'AM' : 'PM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minute} ${ampm}`;
});

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    car_selection: "",
    pickup_location: "",
    dropoff_location: "",
    pickup_date: "",
    pickup_time: "12:00 PM",
    dropoff_date: "",
    dropoff_time: "12:00 PM",
    credit_card_type: ""
  });

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.RentalRequest.create(data),
    onSuccess: () => {
      toast.success("Reservation request received!");
      setFormData({
        car_selection: "",
        pickup_location: "",
        dropoff_location: "",
        pickup_date: "",
        pickup_time: "12:00 PM",
        dropoff_date: "",
        dropoff_time: "12:00 PM",
        credit_card_type: ""
      });
    },
    onError: () => toast.error("Failed to submit request.")
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.car_selection || !formData.pickup_location || !formData.pickup_date) {
      toast.error("Please fill in all required fields");
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl border border-gray-200 max-w-md w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Select 
            value={formData.car_selection}
            onValueChange={(val) => setFormData({...formData, car_selection: val})}
          >
            <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-gray-700 h-12">
              <SelectValue placeholder="Choose Your Rent-A-Car" />
            </SelectTrigger>
            <SelectContent>
              {carOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Select 
              value={formData.pickup_location}
              onValueChange={(val) => setFormData({...formData, pickup_location: val})}
            >
              <SelectTrigger className="w-full pl-10 bg-gray-50 border-gray-300 text-gray-700">
                <SelectValue placeholder="Pick-up Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Select 
              value={formData.dropoff_location}
              onValueChange={(val) => setFormData({...formData, dropoff_location: val})}
            >
              <SelectTrigger className="w-full pl-10 bg-gray-50 border-gray-300 text-gray-700">
                <SelectValue placeholder="Drop-off Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label className="text-xs text-gray-500">Pick-up Date</Label>
            <Input 
              type="date" 
              value={formData.pickup_date}
              onChange={(e) => setFormData({...formData, pickup_date: e.target.value})}
              className="bg-gray-50 border-gray-300"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs text-gray-500">Pick-up Time</Label>
            <Select 
              value={formData.pickup_time}
              onValueChange={(val) => setFormData({...formData, pickup_time: val})}
            >
              <SelectTrigger className="bg-gray-50 border-gray-300">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label className="text-xs text-gray-500">Drop-off Date</Label>
            <Input 
              type="date" 
              value={formData.dropoff_date}
              onChange={(e) => setFormData({...formData, dropoff_date: e.target.value})}
              className="bg-gray-50 border-gray-300"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs text-gray-500">Drop-off Time</Label>
            <Select 
              value={formData.dropoff_time}
              onValueChange={(val) => setFormData({...formData, dropoff_time: val})}
            >
              <SelectTrigger className="bg-gray-50 border-gray-300">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Select 
            value={formData.credit_card_type}
            onValueChange={(val) => setFormData({...formData, credit_card_type: val})}
          >
            <SelectTrigger className="w-full bg-gray-50 border-gray-300 text-gray-700">
              <SelectValue placeholder="Credit Card Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Visa">Visa</SelectItem>
              <SelectItem value="MasterCard">MasterCard</SelectItem>
              <SelectItem value="Amex">American Express</SelectItem>
              <SelectItem value="Debit">Debit</SelectItem>
              <SelectItem value="Cash">Cash</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#8dc63f] hover:bg-[#7ab135] text-white font-bold py-3 text-lg rounded-md shadow-md transition-all transform active:scale-95"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Processing..." : "RESERVE NOW"}
        </Button>
      </form>
    </div>
  );
}