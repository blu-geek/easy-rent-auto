import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}