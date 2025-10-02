import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-40 flex bg-gradient-to-br from-teal-900 to-teal-200">
      <div className="flex flex-col justify-start ml-12 max-w-200">
        <div className="rounded-full text-white border-white border-1 w-fit px-2 mb-8 text-sm py-1">
          <FaHandsHelping className="inline mr-1" />
          Serving Chester County Residents
        </div>
        <h1 className="font-bold text-5xl text-white">
          Chester County Community Resource Hub
        </h1>
        <p className="text-xl text-white mt-1">
          Discover non-profits, support services, events, and programs across
          Chester County. Search, filter, and connect with local help
        </p>
        <div className="flex mt-8">
          <button className="bg-blue-950 flex justify-center items-center py-2 rounded-2xl text-lg px-8 text-white text-center mr-2">
            <IoIosSearch className="inline mr-1 text-2xl" />
            Explore Resources
          </button>
          <button className="border-1 border-gray-500 py-2 rounded-2xl bg-white text-lg px-8 text-black text-center flex items-center justify-center">
            <CiSquarePlus className="inline mr-1 text-2xl" />
            Suggest a Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
