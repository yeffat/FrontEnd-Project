import { Link } from "react-router-dom";
import { Brand } from "../../components/Brand/Brand";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Navbar = () => {
  

  return (
    <div className="navbar-wrapper flex justify-between items-center p-5 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white shadow-lg">
      <div className="container flex items-center justify-between">
        <Brand />
        <nav className="space-x-6 text-lg font-semibold">
          <Link
            to={"/"}
            className="hover:text-pink-400 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="hover:text-pink-400 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Products
          </Link>
          <Link
            to={"/cart"}
            className="ml-4 px-3 py-2 bg-pink-600 rounded hover:bg-pink-700 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Cart
          </Link>
        </nav>

        <div className="buttons flex space-x-4">
          <Link
            to="/login"
            className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <Button value="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
};
