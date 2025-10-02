import React from "react";

const Hero = () => {
  return (
    <div className="flex mt-20">
      <div className="flex flex-col justify-start ml-12 max-w-200">
        <div className="rounded-full text-gray-600 border-gray-600 border-1 w-fit px-2 mb-4 text-sm py-1">
          Serving Chester County Residents
        </div>
        <h1 className="font-bold text-5xl">Community Resource Hub</h1>
        <p className="text-xl text-gray-500 mt-1">
          Discover non-profits, support services, events, and programs across
          Chester County. Search, filter, and connect with local help
        </p>
        <div className="flex mt-4">
          <button className="bg-teal-600  py-2 rounded-2xl text-lg px-10 text-white text-center mr-2">Explore Resources</button>
          <button className="border-1 border-gray-500 py-2 rounded-2xl text-lg px-10 text-black text-center">Suggest a Resource</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
