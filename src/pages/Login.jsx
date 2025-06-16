import React, { useState } from "react";
import { useAlert } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    showAlert("Login submitted. Redirecting to home page...");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center text-white p-8">
      <div className="max-w-md w-full m-50 p-6 bg-white rounded-lg shadow-md flex-grow">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
