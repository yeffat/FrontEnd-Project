import { Route, Routes } from "react-router-dom";
import { Home, ProductDetails, Products, UpdateProduct, Login, Cart } from "./pages/index";
import { Navbar } from "./containers/Navbar/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
      <CartProvider>
        <AlertProvider>
          <Navbar/>
          <Toaster />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />

            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </AlertProvider>
      </CartProvider>
  );
}

export default App;
