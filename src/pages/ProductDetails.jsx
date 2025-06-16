import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/slices/productSlice";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useAlert } from "../context/AlertContext";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { addToCart } = useContext(CartContext);
  const { showAlert } = useAlert();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="max-w-4xl mx-auto mt-10 p-6">Loading product details...</div>;
  }

  if (!product) {
    return <div className="max-w-4xl mx-auto mt-10 p-6">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    showAlert("Item added successfully");
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center text-white p-8">
      <div className="max-w-4xl w-full mt-10 p-8 bg-white rounded-xl shadow-lg flex-grow">
        <Link
          to="/products"
          className="inline-block mb-6 px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-lg"
        >
          &larr; Back to Products
        </Link>
        <img src={product.thumbnail} alt={product.title} className="w-full h-72 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{product.title}</h1>
        <p className="text-2xl font-semibold text-green-700 mb-6">${product.price}</p>
        <p className="text-gray-800 mb-8 leading-relaxed">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
