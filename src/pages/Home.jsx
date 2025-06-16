import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-white p-8 space-y-12">
      <h1 className="text-5xl font-extrabold animate-pulse text-center">
        Welcome to Our Services
      </h1>
      <p className="max-w-3xl text-center text-lg leading-relaxed animate-fadeIn">
        We offer a wide range of high-quality services tailored to meet your needs.
        Our team is dedicated to providing exceptional solutions that help your business grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Consulting</h2>
          <p>
            Expert advice to help you make informed decisions and optimize your business strategies.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <p>
            Custom software solutions built to your specifications using the latest technologies.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Support</h2>
          <p>
            Reliable support services to ensure your systems run smoothly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
