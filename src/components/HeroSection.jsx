import React from "react";
import HeroImg from "../assets/images/hero-img.jpg"


const HeroSection = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`, // Replace with your image URL
      }}
    >
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>

			<div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold sm:text-8xl lg:text-9xl">
          Welcome
        </h1>
      </div>
		</div>
  );
};

export default HeroSection;
