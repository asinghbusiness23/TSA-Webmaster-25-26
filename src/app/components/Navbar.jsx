import React from "react";
import { Link } from "next/link";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between border-b-2 border-gray-200 h-18 text-gray-700 bg-white">
    <div className="flex items-center">
        <div className="bg-blue-50 w-10 h-10 ml-10 flex items-center justify-center mr-2 rounded-xl">
            <p className="text-xl text-blue-400">CC</p>
        </div>
      <h1 className="text-xl ml-0.5 font-bold">Chester County Hub</h1>
    </div>
    <div className="flex text-lg gap-6 mr-5">
      <p className="hover:text-black hover:-translate-y-0.5 duration-200 cursor-pointer">Home</p>
      <p>Resources</p>
      <p>Add</p>
      <p>Contact</p>
    </div>
  </nav>
);

export default Navbar;
