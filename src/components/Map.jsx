import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-[450px] bg-gray-100 relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.5!2d-106.6648!3d52.1325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6c5c8e2d1b9%3A0x1234567890abcdef!2s1201%207th%20Ave%20N%2C%20Saskatoon%2C%20SK%20S7K%202W1!5e0!3m2!1sen!2sca!4v1625689456123!5m2!1sen!2sca" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy"
        title="Easy Rent Auto Location - Detail Shop"
      ></iframe>
    </div>
  );
}