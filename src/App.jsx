import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Orders from "./pages/Orders";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>

            <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">

              <Navbar />

              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/products"
                  element={<Products />}
                />

                <Route
                  path="/products/:id"
                  element={<ProductDetails />}
                />

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
                />

                <Route
                  path="/login"
                  element={<Login />}
                />

                <Route
                  path="/signup"
                  element={<Signup />}
                />

                <Route
                  path="/cart"
                  element={<Cart />}
                />

                <Route
                  path="/wishlist"
                  element={<Wishlist />}
                />

                <Route
                  path="/checkout"
                  element={<Checkout />}
                />

                {/* Order Tracking */}
                <Route
                  path="/order-tracking/:orderNumber"
                  element={<OrderTracking />}
                />
                <Route
                  path="/orders"
                  element={<Orders />}
                />

              </Routes>

              <Footer />

            </div>

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,
              }}
            />

          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;