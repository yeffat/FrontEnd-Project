import React from "react";
import { Link } from "react-router-dom";

export const Brand = () => {
  return (
    <div className="brand">
      <Link to="/">
        <img
          src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
          alt="Brand Logo"
          className="w-12 h-12 object-cover rounded-full shadow-lg background-white border border-gray-300 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        />
      </Link>
    </div>
  );
};
