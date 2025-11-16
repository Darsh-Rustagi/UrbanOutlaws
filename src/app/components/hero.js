// components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen w-full grid  lg:flex">
      
      <div className="w-full lg:w-2/3  relative">
        <img
          src="/images/hero.jpg"
          alt="APEX Legends promotional artwork with dynamic characters in motion"
          className="h-full w-full object-fit"
        />

      </div>

      
      <div className="w-full lg:w-1/3 bg-[#1a1a1a] flex flex-col justify-center pl-12 pr-16">
        <h2 className="text-3xl font-bold tracking-wider mb-3">
          Urban Outlaws
        </h2>
        <p className="text-gray-300 mb-6">
          Feel the power within yourself
        </p>

        <div className="flex space-x-3 mb-8">
          <button className="bg-[#FF0000] text-white font-medium px-5 py-3 rounded-md flex items-center hover:bg-red-600 transition">
            Download Now <i className="fas fa-chevron-right ml-2 text-sm"></i>
          </button>
          <button className="border border-gray-400 text-white font-medium px-5 py-3 rounded-md flex items-center hover:bg-gray-700 transition">
            Watch Trailer <i className="fas fa-play ml-2 text-sm"></i>
          </button>
        </div>

        <div className="flex items-center text-gray-400 text-sm space-x-3">
          <span>Available on</span>
          <i className="fab fa-windows text-lg"></i>
          <i className="fab fa-app-store-ios text-lg"></i>
          <i className="fab fa-playstation text-lg"></i>
          <i className="fab fa-xbox text-lg"></i>
          <i className="fab fa-nintendo-switch text-lg"></i>
          <i className="fab fa-steam text-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
