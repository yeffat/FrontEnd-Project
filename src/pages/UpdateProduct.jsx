import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/slices/productSlice";
import { useParams } from "react-router-dom";
import { useAlert } from "../context/AlertContext";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { showAlert } = useAlert();

  const { product, loading } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setName(product.title);
      setDescription(product.description);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated product data:", { id, name, description });
    showAlert(`Product ${id} updated successfully`);
  };

  if (loading) {
    return <div className="max-w-4xl mx-auto mt-10 p-6">Loading product...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center text-white p-8">
      <div className="max-w-4xl w-full mt-10 p-6 bg-white rounded-lg shadow-md flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Update Product {id}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name:</label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block mb-1 font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
