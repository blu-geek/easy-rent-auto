import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function Franchising() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    company_name: "",
    email: "",
    country: "Canada",
    postal_code: "",
    city: "",
    street_address: ""
  });

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.FranchiseInquiry.create(data),
    onSuccess: () => {
      toast.success("Application submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        company_name: "",
        email: "",
        country: "Canada",
        postal_code: "",
        city: "",
        street_address: ""
      });
      // Optional: navigate home
      // navigate('/');
    },
    onError: () => toast.error("Failed to submit application.")
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Green Header */}
      <div className="bg-[#1a9f54] py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            FRANCHISING OPPORTUNITIES IN YOUR AREA AVAILABLE NOW
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6 text-gray-600 mb-12">
          <p className="text-lg">
            Like what we do? Think you may want to do it too? Call <span className="font-bold text-[#1a9f54]">639-471-4669</span> to find out more about your possibilities.
          </p>
          <p>Connect with us for a consultation, change your way change your legacy.</p>
          
          <p>We offer four levels of franchise opportunity for consideration.</p>
          
          <p>
            <span className="font-bold text-gray-800">Gold:</span> includes in addition site locater, 24/7 local call center, social media marketing, media marketing, local impact marketing.
          </p>
          
          <p>
            <span className="font-bold text-gray-800">Diamond:</span> A Turn-Key Solution, including inventory procurement, daily administration, staff set up, local market set up, on-site representation.
          </p>
          
          <p>Choose any one of our four franchise routes to drive your legacy today....</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 mb-8 text-yellow-800 text-sm rounded">
          Submission URL and current URL protocols do not match. Form may not function properly.
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-700">First Name <span className="text-red-500">*</span></Label>
              <Input 
                placeholder="Enter Your First Name" 
                value={formData.first_name}
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Last Name <span className="text-red-500">*</span></Label>
              <Input 
                placeholder="Enter Your Last Name" 
                value={formData.last_name}
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
              <Input 
                placeholder="Enter Your Phone Number" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Company Name</Label>
              <Input 
                placeholder="Enter Your Company Name" 
                value={formData.company_name}
                onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700">Email <span className="text-red-500">*</span></Label>
            <Input 
              placeholder="Enter Your Email Address" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-700">Country</Label>
              <Select 
                value={formData.country}
                onValueChange={(val) => setFormData({...formData, country: val})}
              >
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Postal Code / Zip Code</Label>
              <Input 
                placeholder="Enter Your Postal Code / Zip Code" 
                value={formData.postal_code}
                onChange={(e) => setFormData({...formData, postal_code: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-700">City</Label>
              <Input 
                placeholder="Enter Your City" 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Address</Label>
              <Input 
                placeholder="Enter Your Street Address" 
                value={formData.street_address}
                onChange={(e) => setFormData({...formData, street_address: e.target.value})}
                className="bg-white border-gray-300"
              />
            </div>
          </div>

          <div className="flex justify-start gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/')}
              className="px-8"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white px-8 font-bold"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}