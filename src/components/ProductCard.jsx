import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h2>
        <p className="text-gray-700 mb-6 flex-grow">{product.description}</p>
        <Link
          to={`/products/${product.id}`}
          className="mt-auto inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
