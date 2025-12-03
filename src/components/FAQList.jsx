import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will You Pick Me Up At The Airport At 1:00am?",
    answer: "Of Course We Will, We Do It Every Night And Early Morning. That's Why We're Open 24 Hours A Day, Dropping You At The Terminal Front Doors To Help You Fly Away!"
  },
  {
    question: "Do I Need A Credit Card To Book A Rental?",
    answer: "No You Don’t! We Like Credit Cards But You Don’t Need One! Being Your Flexible Local Rental Shop Means We Will Always Try To Find A Way To Get Wheels Rolling For You! Call, Text, Click Or Book Your Way To Easy Rent Auto Wheels Today!"
  },
  {
    question: "Could I Pick Up My Rental The Night Before For Free?",
    answer: "Yes You Can! We Make Renting Easy."
  },
  {
    question: "I'm Turning 18 Can I Rent A Car From You?",
    answer: "Yes You Can! Happy Birthday We Make Renting Great Again! Call, Text, Click Or Book Your Way To Easy Rent Auto 18 And Over Wheels Today!"
  },
  {
    question: "Can I Take My Dog With Me?",
    answer: "Yes You Can! Your Pets Are Cool With Us! We Even Offer Bowls, Leads And Car Blankets If You Require While Renting. Lets Make Renting Great Again!"
  },
  {
    question: "How Do I Pick Up The Rental Car?",
    answer: "We Will Come To You! We Can Pick You Up At Your Hotel With Your Rental And Drop You Off When You Are Finished. We’ve Got You Covered Anywhere In The City Of Saskatoon!"
  },
  {
    question: "Do You Charge For Extra Drivers?",
    answer: "No Charge For Your Crew! We Would Rather You Got There Safe And Then Back Again To Us Safe! We Have No Limits So Enjoy The Open Road."
  },
  {
    question: "What If I'm On A Tight Budget?",
    answer: "We Can Help! Our Rentals Start At Just $15/Day! Now That’s An Easy Number To Work With!"
  },
  {
    question: "Do You Have Rental Cars With A Driver?",
    answer: "Yes We Do! We Have A Lineup Of Drivers And Vehicles Ready To Drive You Wherever You Need To Go Right Now!"
  },
  {
    question: "Do I Have To Worry About Mileage?",
    answer: "No You Don't! Easy Rent Auto Offers Certain Vehicles With Unlimited Kilometer Packages, Book Early - They Move Quick! We Also Offer Pay As You Go To Ensure The Best Deal!"
  },
  {
    question: "Do You Have Hourly Rates On Your Rentals?",
    answer: "Yes We Do! Rentals By The Hour Or The Day Or Longer We Have A Rental Rate For You Today! Ask For An Easy Driver! Need to move something from one side of the city to the other, we do that too!"
  },
  {
    question: "What Do You Need To Rent A Car?",
    answer: "Keep It Easy! A Driver's License. A Deposit. A Destination! We Make Renting Great Again!"
  },
  {
    question: "I Don't Have My International License With Me Can I Still Rent A Car?",
    answer: "Yes You Can! We Welcome Drivers From All Lands Far And Near, No Limits Here Enjoy Your Vacation in Saskatoon!"
  },
  {
    question: "Do You Have A Car That I Can Smoke In?",
    answer: "Yes You Can! While It Is Bad For You, We Do Understand That Especially On Longer Trips The Ability To Smoke Freely May Be Important To You. As Such We Have A Range Of Dedicated Smoking Allowed Vehicles On Hand To Service Your Request."
  },
  {
    question: "Can I Return My Vehicle Late?",
    answer: "Yes You Can! We Make Renting Great Again By Offering No Charge Late Returns."
  },
  {
    question: "What If I Forgot Something I Need For My Trip?",
    answer: "No Problem! We Have Navigation Units, A Range Of Electronic Adapters, Tents And Camping Gear, Bikes And Bike Racks Available. If You’re Moving We Also Have Dollies, Straps, Blankets, Ramps, Boxes Even Storage Facilities Indoor Or Out!"
  }
];

export default function FAQList() {
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  const renderFaqItem = (faq, index, offset = 0) => (
    <AccordionItem key={index} value={`item-${index + offset}`} className="border-none mb-4">
      <AccordionTrigger className="text-lg font-semibold text-white bg-[#8dc63f] px-6 py-4 rounded-t-lg hover:bg-[#7ab135] data-[state=open]:bg-[#7ab135] text-left hover:no-underline [&>svg]:text-white">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed p-6 bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">FAQ</h2>
          <p className="text-xl text-gray-500">Everything You've Always Wanted To Know About Easy Rent Auto!</p>
          <div className="w-24 h-1 bg-[#8dc63f] mx-auto mt-4"></div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {leftColumnFaqs.map((faq, index) => renderFaqItem(faq, index))}
            </div>
            <div className="space-y-4">
              {rightColumnFaqs.map((faq, index) => renderFaqItem(faq, index, midPoint))}
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}