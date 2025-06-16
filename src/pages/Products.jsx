import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="max-w-6xl mx-auto mt-10 p-6">Loading products...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center text-white p-8">
      <div className="max-w-7xl w-full mt-10 p-8 bg-white rounded-xl shadow-lg flex-grow">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
