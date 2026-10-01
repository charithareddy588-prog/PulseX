import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();


  // Empty Cart
  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-5">

        <div className="text-center">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-900">
            <span className="text-4xl">🛒</span>
          </div>

          <h1 className="text-4xl font-black">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products to get started.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-7 py-3 rounded-full font-semibold transition hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white"
          >
            Shop Products
            <ArrowRight size={18} />
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="max-w-6xl mx-auto px-5 py-12">

      {/* Page Heading */}

      <div className="mb-10">

        <h1 className="text-4xl font-black">
          Shopping Cart
        </h1>

        <p className="mt-2 text-gray-500">
          {cart.length}{" "}
          {cart.length === 1
            ? "product"
            : "products"}{" "}
          in your cart
        </p>

      </div>


      <div className="grid lg:grid-cols-3 gap-10">


        {/* ================= PRODUCTS ================= */}

        <div className="lg:col-span-2 space-y-5">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex gap-5 p-5 bg-gray-100 dark:bg-zinc-900 rounded-2xl transition hover:shadow-md"
            >

              {/* Product Image */}

              <Link
                to={`/products/${item.id}`}
                className="shrink-0"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-xl object-cover bg-white transition hover:scale-105"
                />

              </Link>


              {/* Product Information */}

              <div className="flex-1 min-w-0">

                <Link
                  to={`/products/${item.id}`}
                >

                  <h2 className="font-bold text-lg hover:text-orange-500 transition">
                    {item.name}
                  </h2>

                </Link>


                {item.category && (
                  <p className="text-sm text-gray-500 mt-1">
                    {item.category}
                  </p>
                )}


                <p className="text-orange-500 font-bold mt-2">
                  ₹
                  {Number(item.price).toLocaleString(
                    "en-IN"
                  )}
                </p>


                {/* Quantity + Remove */}

                <div className="flex items-center justify-between mt-5">

                  {/* Quantity */}

                  <div className="flex items-center border border-gray-300 dark:border-zinc-700 rounded-full bg-white dark:bg-zinc-800">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(
                            1,
                            item.quantity - 1
                          )
                        )
                      }
                      className="p-2 hover:text-orange-500 transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>


                    <span className="px-3 font-semibold">
                      {item.quantity}
                    </span>


                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="p-2 hover:text-orange-500 transition"
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>

                  </div>


                  {/* Remove */}

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                  >

                    <Trash2 size={19} />

                    <span className="hidden sm:inline text-sm font-medium">
                      Remove
                    </span>

                  </button>

                </div>

              </div>

            </div>

          ))}


          {/* Continue Shopping */}

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-3 font-semibold hover:text-orange-500 transition"
          >
            <ArrowRight
              size={18}
              className="rotate-180"
            />

            Continue Shopping

          </Link>

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="bg-gray-100 dark:bg-zinc-900 p-7 rounded-2xl h-fit lg:sticky lg:top-24">

          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>


          {/* Subtotal */}

          <div className="flex justify-between mt-7">

            <span className="text-gray-600 dark:text-gray-400">
              Subtotal
            </span>

            <span className="font-semibold">
              ₹
              {Number(cartTotal).toLocaleString(
                "en-IN"
              )}
            </span>

          </div>


          {/* Shipping */}

          <div className="flex justify-between mt-3">

            <span className="text-gray-600 dark:text-gray-400">
              Shipping
            </span>

            <span className="text-green-500 font-semibold">
              Free
            </span>

          </div>


          {/* Discount */}

          <div className="flex justify-between mt-3">

            <span className="text-gray-600 dark:text-gray-400">
              Discount
            </span>

            <span className="text-green-500 font-semibold">
              ₹0
            </span>

          </div>


          <hr className="my-6 border-gray-300 dark:border-zinc-700" />


          {/* Total */}

          <div className="flex justify-between text-xl font-black">

            <span>
              Total
            </span>

            <span className="text-orange-500">
              ₹
              {Number(cartTotal).toLocaleString(
                "en-IN"
              )}
            </span>

          </div>


          {/* Proceed To Checkout */}

          <Link
            to="/checkout"
            className="flex items-center justify-center gap-2 w-full mt-7 bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition"
          >

            Proceed to Checkout

            <ArrowRight size={19} />

          </Link>


          {/* Secure Checkout */}

          <div className="mt-5 text-center">

            <p className="text-xs text-gray-500">
              🔒 Secure checkout
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Your order information is protected
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Cart;