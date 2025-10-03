import React from "react";
import { Link } from "next/link";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between border-b-2 border-gray-200 h-18 text-gray-700 bg-white">
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="bg-blue-50 w-10 h-10 ml-10 flex items-center justify-center mr-2 rounded-xl">
          <p className="text-xl text-blue-400">CC</p>
        </div>
        <h1 className="text-xl ml-0.5 font-bold text-black">
          Chester County Hub
        </h1>
      </div>
      <div className="flex text-lg gap-6 mr-5 ml-4">
        <p className="hover:text-black hover:-translate-y-0.5 duration-200 cursor-pointer bg-yellow-300 px-2 py-2 rounded-xl">
          Home
        </p>
        <p className="hover:text-black hover:-translate-y-0.5 duration-200 cursor-pointer py-2 rounded-xl">
          Resources
        </p>
        <p className="hover:text-black hover:-translate-y-0.5 duration-200 py-2 cursor-pointerrounded-xl">
          Calendar
        </p>
      </div>
    </div>
    <button className="bg-blue-950 text-white mr-4 py-2 px-6 rounded-2xl relative group flex items-center overflow-hidden duration-150">
      <span className="block transition-transform duration-300 group-hover:-translate-x-14/10">
        Submit A Resource
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold translate-x-full transition-transform duration-300 group-hover:translate-x-0">
        +
      </span>
    </button>
  </nav>
);

export default Navbar;
